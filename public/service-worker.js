const cacheName = "umzip-cache";
let filesToCache = [
	'/',
	'/index.html',
	'/scripts/app.js',
	'/router/main.js',

];

self.addEventListener("install", e => {
	console.log("[ServiceWorker] install");
	e.waitUntil(
    	caches.open(cacheName).then(cache => {
    		console.log("[ServiceWorker] Caching app shell");
    		return cache.addAll(filesToCache);
    	}));
});

self.addEventListener('fetch', e => {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});