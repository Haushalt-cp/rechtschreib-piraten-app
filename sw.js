// Wortschatz-Piraten – Service Worker
// Seite: zuerst Netz (damit Updates sofort ankommen), offline aus dem Zwischenspeicher.
const CACHE = 'wsp-v2';
const KERN = ['./', './index.html', './manifest.webmanifest', './manifest-test.webmanifest',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(KERN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const gleicheSeite = url.origin === self.location.origin;
  const schrift = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!gleicheSeite && !schrift) return;

  if (req.mode === 'navigate' || (gleicheSeite && url.pathname.endsWith('.html'))) {
    e.respondWith(
      fetch(req).then(r => { const k = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', k)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Rest (Symbole, Schrift): aus dem Speicher, im Hintergrund auffrischen
  e.respondWith(
    caches.match(req).then(treffer => {
      const netz = fetch(req).then(r => {
        if (r && (r.ok || r.type === 'opaque')) { const k = r.clone(); caches.open(CACHE).then(c => c.put(req, k)); }
        return r;
      }).catch(() => treffer);
      return treffer || netz;
    })
  );
});
