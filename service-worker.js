/* ============================================ */
/* TransLedger - Service Worker (hors-ligne)   */
/* Auteur : Atizoun                             */
/* ============================================ */

const CACHE_NAME = 'transledger-v44';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './benin.png',
  './rdc.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Installation
self.addEventListener('install', (event) => {
  console.log('📦 Service Worker : installation');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activation
self.addEventListener('activate', (event) => {
  console.log('✅ Service Worker : activé');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Interception : cache d'abord, réseau ensuite
self.addEventListener('fetch', (event) => {
  // Les CDN (Bootstrap, icons) sont laissés au réseau
  if (event.request.url.includes('cdn.jsdelivr.net')) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return fetch(event.request).then((netRes) => {
        // Mise en cache dynamique des fichiers de notre origine
        if (netRes && netRes.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const clone = netRes.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
        }
        return netRes;
      }).catch(() => {
        // Fallback offline : renvoyer index.html pour les navigations
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('', { status: 404, statusText: 'Hors ligne' });
      });
    })
  );
});
