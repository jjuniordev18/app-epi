// Service Worker do App EPI: cache dos arquivos estáticos para uso offline.
const CACHE = 'sonda-epi-v1';
const STATICS = ['./', './index.html', './app.js', './styles.css', './logo.png', './manifest.webmanifest'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATICS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API: nunca cachear (dados sensíveis); se offline, responde com erro p/ o app usar o cache local
  if (url.pathname.startsWith('/api/')) return;

  // Só cacheia requisições GET do mesmo app
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});