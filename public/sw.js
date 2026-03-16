// degen0x Service Worker
// Basic offline support with cache-first strategy

const CACHE_NAME = 'degen0x-cache-v2';
const APP_SHELL = [
  '/manifest.json',
];

// Install event — cache app shell
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(APP_SHELL).catch((error) => {
        console.warn('[Service Worker] Failed to cache app shell:', error);
        // Continue even if some assets fail to cache
      });
    })
  );
  self.skipWaiting();
});

// Activate event — clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event — serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  // Network-first for HTML pages (always serve fresh content)
  // Cache-first for static assets (JS, CSS, images)
  const isHTMLRequest = request.headers.get('accept')?.includes('text/html');

  if (isHTMLRequest) {
    // Network-first for pages
    event.respondWith(
      fetch(request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          console.log('[Service Worker] Offline, serving cached page if available');
          return caches.match(request).then((cached) => cached || new Response('Offline', { status: 503 }));
        })
    );
  } else {
    // Cache-first for static assets
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
            return response;
          })
          .catch(() => new Response('Offline', { status: 503 }));
      })
    );
  }
});
