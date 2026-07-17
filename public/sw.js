// Runtime-caching service worker for offline resilience.
//
// This is a static Astro build whose JS/CSS bundles are content-hashed on
// every build (/_astro/*), so precaching an exact file list here would go
// stale the moment a new version deploys. Instead this caches same-origin
// responses as they're fetched (a visitor's first, online visit warms the
// cache organically) and serves from that cache when the network is down —
// the standard approach for a build without a bundler-integrated SW plugin.
const RUNTIME_CACHE = 'khalsa-display-runtime-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== RUNTIME_CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    // Leave cross-origin requests (resource-partner iframes, Google Fonts,
    // the analytics beacon) to the network — caching those isn't this
    // service worker's job and could hold onto stale third-party content.
    return;
  }

  if (request.mode === 'navigate') {
    // Network-first for HTML: a visitor with a connection always gets the
    // latest build; only fall back to whatever shell was last cached when
    // there's truly no network.
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached ?? caches.match('/'))),
    );
    return;
  }

  // Cache-first for static assets: hashed /_astro/* bundles are immutable
  // once built, and images/fonts/icons rarely change, so serve instantly
  // from cache and only touch the network for something not yet seen.
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
    }),
  );
});
