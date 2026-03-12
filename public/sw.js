const CACHE_VERSION = 'degen0x-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const API_CACHE = `${CACHE_VERSION}-api`;
const OFFLINE_PAGE = '/offline';

const STATIC_ASSETS = [
  '/',
  '/offline',
  '/manifest.json',
];

// Cache time limits (in milliseconds)
const CACHE_EXPIRY = {
  API: 30 * 1000, // 30 seconds for crypto prices
  DYNAMIC: 24 * 60 * 60 * 1000, // 24 hours for dynamic content
  STATIC: 7 * 24 * 60 * 60 * 1000, // 7 days for static assets
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((error) => {
        console.warn('Failed to cache some assets during install:', error);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE && cacheName.startsWith('degen0x-')) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests and non-GET requests
  if (url.origin !== location.origin || request.method !== 'GET') {
    return;
  }

  // Network-first strategy for API calls with short cache (30 seconds for crypto prices)
  if (url.pathname.includes('/api/')) {
    event.respondWith(networkFirstWithExpiry(request, CACHE_EXPIRY.API));
    return;
  }

  // Cache-first strategy for static assets (images, fonts, css, js)
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    request.destination === 'style' ||
    request.destination === 'script'
  ) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Network-first for documents and other requests
  event.respondWith(networkFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    return caches.match(OFFLINE_PAGE);
  }
}

// Network-first strategy with cache expiry
async function networkFirstWithExpiry(request, expiryMs) {
  const cacheKey = request.url;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(API_CACHE);
      // Store with timestamp for expiry checking
      const responseWithTimestamp = response.clone();
      const headers = new Headers(responseWithTimestamp.headers);
      headers.append('X-Cache-Time', new Date().getTime().toString());
      const newResponse = new Response(responseWithTimestamp.body, {
        status: responseWithTimestamp.status,
        statusText: responseWithTimestamp.statusText,
        headers: headers,
      });
      cache.put(cacheKey, newResponse);
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      const cacheTime = parseInt(cached.headers.get('X-Cache-Time') || '0');
      const now = new Date().getTime();
      if (now - cacheTime < expiryMs) {
        return cached;
      }
    }
    // Return offline page for document requests
    if (request.destination === 'document') {
      return caches.match(OFFLINE_PAGE);
    }
    return new Response('Network error - offline', { status: 503 });
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    // Return offline page for document requests
    if (request.destination === 'document') {
      return caches.match(OFFLINE_PAGE);
    }
    return new Response('Network error - offline', { status: 503 });
  }
}

// Background sync event listener
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-watchlist') {
    event.waitUntil(syncWatchlist());
  }
});

// Sync watchlist updates when connection is restored
async function syncWatchlist() {
  try {
    const response = await fetch('/api/watchlist/sync');
    if (response.ok) {
      const data = await response.json();
      // Broadcast sync success to all clients
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'WATCHLIST_SYNCED',
            data: data,
          });
        });
      });
    }
  } catch (error) {
    console.error('Watchlist sync failed:', error);
  }
}
