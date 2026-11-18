/* فروش خودرو خراسان — service worker حداقلی برای قابل‌نصب شدن (PWA).
   هیچ چیزی کش نمی‌شود تا همیشه تازه‌ترین نسخه سایت دیده شود. */
self.addEventListener("install", function(e){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function(e){ e.respondWith(fetch(e.request)); });
