// Push Notification Price Alerts Service Worker
// Version 1.0

const CACHE_VERSION = 'v1';
const SCOPE = '/';

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('[SW] Cache opened');
      return cache;
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  self.clients.claim();

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - network first with cache fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(() => {
        // Return cached version on network error
        return caches.match(event.request).then((response) => {
          return response || new Response('Offline - cached version unavailable', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain',
            }),
          });
        });
      })
  );
});

// Push notification event handler
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received', event);

  let notificationData = {
    title: 'Price Alert',
    body: 'A crypto price alert has been triggered',
    icon: '/crypto-icon.png',
    badge: '/crypto-badge.png',
    tag: 'price-alert',
    requireInteraction: true,
    vibrate: [200, 100, 200],
  };

  // Parse the push event data if available
  if (event.data) {
    try {
      const data = event.data.json();
      notificationData = {
        ...notificationData,
        title: data.title || notificationData.title,
        body: data.body || notificationData.body,
        icon: data.icon || notificationData.icon,
        badge: data.badge || notificationData.badge,
        tag: data.tag || notificationData.tag,
        data: data.data || {},
      };
    } catch (error) {
      console.error('[SW] Error parsing push data:', error);
      // Fall back to text data if JSON parsing fails
      if (event.data.text) {
        notificationData.body = event.data.text();
      }
    }
  }

  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon,
      badge: notificationData.badge,
      tag: notificationData.tag,
      requireInteraction: notificationData.requireInteraction,
      vibrate: notificationData.vibrate,
      data: notificationData.data || {},
      actions: [
        {
          action: 'open-alerts',
          title: 'View Alerts',
          icon: '/icon-open.png',
        },
        {
          action: 'dismiss',
          title: 'Dismiss',
          icon: '/icon-dismiss.png',
        },
      ],
    })
  );
});

// Notification click event handler
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);

  const notificationData = event.notification.data;

  // Close the notification
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // Check if the app window is already open
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i];
        if (client.url === '/' && 'focus' in client) {
          return client.focus();
        }
      }

      // Handle different actions
      if (event.action === 'dismiss') {
        // Notification dismissed, no action needed
        return;
      }

      // Default action or 'open-alerts' - navigate to alerts page
      if (clients.openWindow) {
        return clients.openWindow('/alerts');
      }
    })
  );
});

// Notification close event handler (for dismissed notifications)
self.addEventListener('notificationclose', (event) => {
  console.log('[SW] Notification closed:', event.notification.tag);
  // Could track notification dismissals here
});

// Background sync for price alert checks (if offline)
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);

  if (event.tag === 'sync-alerts') {
    event.waitUntil(
      fetch('/api/alerts/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('[SW] Alert sync completed:', response.status);
          return response.json();
        })
        .catch((error) => {
          console.error('[SW] Alert sync failed:', error);
        })
    );
  }
});

// Message event handler - for communication from client
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'REGISTER_FOR_ALERTS') {
    // Handle registration for push notifications
    console.log('[SW] Registering for alerts:', event.data.payload);
    // Could send registration data to server here
  }

  if (event.data && event.data.type === 'TRIGGER_ALERT') {
    // Handle triggering a test alert
    const alertData = event.data.payload || {};
    self.registration.showNotification('Price Alert Test', {
      body: `${alertData.coin} has moved ${alertData.condition} ${alertData.price}`,
      tag: 'price-alert-test',
      requireInteraction: true,
      vibrate: [200, 100, 200],
      data: alertData,
    });
  }
});

// Periodic background sync (requires appropriate permission)
// Note: This requires the "periodic-background-sync" permission and only works on some browsers
if ('periodicSync' in self.registration) {
  self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'check-crypto-prices') {
      console.log('[SW] Periodic sync: checking crypto prices');
      event.waitUntil(
        fetch('/api/prices/check', {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('[SW] Price check completed:', data);
          })
          .catch((error) => {
            console.error('[SW] Price check failed:', error);
          })
      );
    }
  });
}

// Error handling
self.addEventListener('error', (event) => {
  console.error('[SW] Error:', event.error);
});

// Unhandled rejection handling
self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled rejection:', event.reason);
});

console.log('[SW] Service worker loaded and ready');
