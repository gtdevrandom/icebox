const CACHE_NAME = 'icebox-v1';
const urlsToCache = [
  '/icebox/',
  '/icebox/index.html',
  '/icebox/manifest.json',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll([
          '/icebox/',
          '/icebox/index.html',
          '/icebox/manifest.json'
        ]).catch(err => {
          console.log('Erreur lors du cache:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Pour les requêtes Firebase, toujours utiliser le réseau
  if (url.host.includes('firebase') || url.host.includes('firebasedatabase')) {
    event.respondWith(
      fetch(request)
        .then(response => response)
        .catch(() => {
          // Si offline, retourner une erreur
          return new Response(JSON.stringify({ error: 'Offline' }), {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          });
        })
    );
    return;
  }

  // Pour les autres ressources, strategy "Cache first, network fallback"
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(request).then((response) => {
          // Ne pas mettre en cache les réponses non-valides
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Retourner une page offline si disponible
        return caches.match('/icebox/index.html');
      })
  );
});

// Message handling pour la synchronisation
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
