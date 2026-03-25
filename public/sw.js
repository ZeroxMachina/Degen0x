// degen0x Service Worker v3 — Sprint 54
// Strategy matrix:
//   HTML pages      → Stale-While-Revalidate (serve cached, update in bg)
//   Static assets   → Cache-First (JS/CSS/fonts/images — immutable hashes)
//   API / prices    → Network-First with 3s timeout, fallback to cache
//   Offline fallback → /offline served for all failed HTML requests

const CACHE_STATIC = 'degen0x-static-v3';
const CACHE_PAGES  = 'degen0x-pages-v3';
const CACHE_DATA   = 'degen0x-data-v3';

const PRECACHE_URLS = [
  '/manifest.json',
  '/offline',
  '/favicon.svg',
];

const MAX_PAGE_CACHE_ENTRIES  = 50;
const MAX_DATA_CACHE_ENTRIES  = 30;
const MAX_STATIC_CACHE_AGE_MS = 7 * 24 * 60 * 60 * 1000;  // 7 days
const MAX_DATA_CACHE_AGE_MS   = 5 * 60 * 1000;             // 5 minutes
const NETWORK_TIMEOUT_MS      = 3000;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isStaticAsset(url) {
  return url.pathname.startsWith('/_next/static/') ||
    /\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|webp|gif|ico)$/.test(url.pathname);
}

function isApiRequest(url) {
  return url.pathname.startsWith('/api/') ||
    url.hostname.includes('coingecko') ||
    url.hostname.includes('coinpaprika') ||
    url.hostname.includes('livecoinwatch');
}

function isHtmlRequest(request) {
  return request.headers.get('accept')?.includes('text/html');
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    const toDelete = keys.slice(0, keys.length - maxEntries);
    await Promise.all(toDelete.map(k => cache.delete(k)));
  }
}

function networkWithTimeout(request, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Network timeout')), timeoutMs);
    fetch(request).then(res => { clearTimeout(timer); resolve(res); }).catch(err => { clearTimeout(timer); reject(err); });
  });
}

// ─── Install ──────────────────────────────────────────────────────────────────

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_PAGES).then(cache =>
      cache.addAll(PRECACHE_URLS).catch(err => console.warn('[SW] Precache failed:', err))
    ).then(() => self.skipWaiting())
  );
});

// ─── Activate ─────────────────────────────────────────────────────────────────

self.addEventListener('activate', (event) => {
  const VALID_CACHES = [CACHE_STATIC, CACHE_PAGES, CACHE_DATA];
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => !VALID_CACHES.includes(n)).map(n => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// ─── Fetch ────────────────────────────────────────────────────────────────────

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  // ── 1. Static assets → Cache-First ──────────────────────────────────────
  if (isSameOrigin && isStaticAsset(url)) {
    event.respondWith(
      caches.open(CACHE_STATIC).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) {
          cache.put(request, response.clone());
          await trimCache(CACHE_STATIC, 200);
        }
        return response;
      })
    );
    return;
  }

  // ── 2. API / price data → Network-First with timeout ────────────────────
  if (isApiRequest(url)) {
    event.respondWith(
      (async () => {
        try {
          const response = await networkWithTimeout(request, NETWORK_TIMEOUT_MS);
          if (response.ok) {
            const cache = await caches.open(CACHE_DATA);
            cache.put(request, response.clone());
            await trimCache(CACHE_DATA, MAX_DATA_CACHE_ENTRIES);
          }
          return response;
        } catch {
          const cached = await caches.match(request);
          return cached || new Response(JSON.stringify({ error: 'offline', cached: false }), {
            status: 503, headers: { 'Content-Type': 'application/json' }
          });
        }
      })()
    );
    return;
  }

  // ── 3. HTML pages → Stale-While-Revalidate ──────────────────────────────
  if (isSameOrigin && isHtmlRequest(request)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_PAGES);
        const cached = await cache.match(request);

        // Start background revalidation
        const revalidate = fetch(request).then(response => {
          if (response.ok) {
            cache.put(request, response.clone());
            trimCache(CACHE_PAGES, MAX_PAGE_CACHE_ENTRIES);
          }
          return response;
        }).catch(() => null);

        // Serve stale immediately if available, else wait for network
        if (cached) {
          event.waitUntil(revalidate);
          return cached;
        }

        // No cache — wait for network
        const fresh = await revalidate;
        if (fresh) return fresh;

        // Complete offline — serve offline page
        const offline = await cache.match('/offline');
        return offline || new Response('<h1>You are offline</h1><p>Please check your connection and try again.</p>', {
          status: 503, headers: { 'Content-Type': 'text/html' }
        });
      })()
    );
    return;
  }

  // ── 4. Everything else → Network with cache fallback ────────────────────
  if (isSameOrigin) {
    event.respondWith(
      fetch(request).catch(async () => {
        const cached = await caches.match(request);
        return cached || new Response('Offline', { status: 503 });
      })
    );
  }
});

// ─── Push Notifications ───────────────────────────────────────────────────────

self.addEventListener('push', (event) => {
  if (!event.data) return;
  let data;
  try { data = event.data.json(); } catch { data = { title: 'degen0x', body: event.data.text() }; }
  event.waitUntil(
    self.registration.showNotification(data.title || 'degen0x', {
      body: data.body || '',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-96.png',
      tag: data.tag || 'degen0x-notification',
      data: data.url ? { url: data.url } : {},
      requireInteraction: false,
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clients => {
      const existing = clients.find(c => c.url.includes(url) && 'focus' in c);
      if (existing) return existing.focus();
      return self.clients.openWindow(url);
    })
  );
});
