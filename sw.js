// キャッシュするファイルの名前とバージョンを指定
const CACHE_NAME = 'templeton-quiz-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// PWAのインストール時に実行されるイベント
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// ファイルのリクエストがあった場合に実行されるイベント
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // キャッシュにファイルがあればそれを返す
        if (response) {
          return response;
        }
        // キャッシュになければネットワークから取得する
        return fetch(event.request);
      }
    )
  );
});
