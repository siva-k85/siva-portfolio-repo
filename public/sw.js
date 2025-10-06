const CACHE_NAME = 'siva-portfolio-v1'
const OFFLINE_URLS = ['/', '/projects', '/notes', '/about']

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_URLS)).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then(cached =>
      cached ||
      fetch(event.request)
        .then(response => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy))
          return response
        })
        .catch(() => caches.match('/'))
    )
  )
})
