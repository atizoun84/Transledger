/* ============================================ */
/* TransLedger v2 - Service Worker              */
/* Structure à plat (Vite + assetsDir: '')      */
/* ============================================ */

const CACHE_VERSION = 'v1';
const CACHE_NAME = 'transledger-' + CACHE_VERSION;

// Fichiers précachés au premier chargement
// Les bundles JS/CSS hashés sont ajoutés dynamiquement
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './benin.png',
  './rdc.png'
];

/* ---------- INSTALL ---------- */
self.addEventListener('install', (event) => {
  console.log('[SW] Installation :', CACHE_NAME);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // addAll échoue si un fichier est manquant → mode tolérant
      return Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          cache.add(url).catch((err) => console.warn('[SW] Précache échec :', url, err))
        )
      );
    })
  );
  self.skipWaiting();
});

/* ---------- ACTIVATE ---------- */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation :', CACHE_NAME);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith('transledger-') && k !== CACHE_NAME)
          .map((k) => {
            console.log('[SW] Suppression ancien cache :', k);
            return caches.delete(k);
          })
      )
    )
  );
  self.clients.claim();
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignorer les requêtes non-GET
  if (req.method !== 'GET') return;

  // Ignorer les CDN externes (aucun ici en v2, mais sécurité)
  if (url.origin !== self.location.origin) return;

  // Navigation (HTML) → Network First, fallback cache index.html
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Autres assets → Cache First, fallback réseau + mise en cache
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Ne cacher que les réponses valides
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          }
          return res;
        })
        .catch(() => {
          // Fallback pour les images manquantes
          if (req.destination === 'image') {
            return new Response('', { status: 404 });
          }
          return new Response('Hors ligne', { status: 503 });
        });
    })
  );
});

/* ---------- MESSAGE (force update) ---------- */
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
