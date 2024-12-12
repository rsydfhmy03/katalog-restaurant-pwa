import 'regenerator-runtime';
import CacheHelper from './utils/chace-helper';
import CONFIG from './globals/config';
const cacheName = CONFIG.CACHE_NAME;

// Caching the listed asset below
const assetsToCache = [
  './',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  './styles/main.css',
  './styles/responsive.css',
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating Service Worker ....');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((currentCacheName) => {
          if (currentCacheName !== cacheName) {
            return caches.delete(currentCacheName);  // Hapus cache lama jika tidak sesuai
          }
        })
      );
    })
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});