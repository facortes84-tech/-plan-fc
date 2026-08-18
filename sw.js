const CACHE_NAME = 'plan-fc-v6';
const ASSETS = ['./index.html', './manifest.json', './icon.png'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // HTML: network-first so a new GitHub Pages deployment can replace the cached app.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(function(response) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put('./index.html', clone); });
        return response;
      }).catch(function() {
        return caches.match('./index.html');
      })
    );
    return;
  }

  // Static assets: cache-first, then network.
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, clone); });
        return response;
      });
    })
  );
});
