// stolen from Snap! ( https://github.com/jmoenig/Snap/blob/master/sw.js )
var version = "1.1.2",
  cacheName = `tig2plus-pwa-${version}`,
  basicFiles = [
    "index.html",

    // program
    "game.js",
    "renderCanvas.js",

    // translations
    "locale/localize.js",
    "locale/es.js",

    // fonts
    "fonts/akashi.ttf", // unused
    "fonts/font-face.css",
    "fonts/Montserrat-Black.ttf",
    "fonts/Montserrat-BlackItalic.ttf",
    "fonts/Montserrat-ExtraBold.ttf",
    "fonts/Montserrat-Medium.ttf",
    "fonts/Montserrat-MediumItalic.ttf",
    "fonts/Montserrat-SemiBold.ttf",
  ],
  audioFiles = [
    // achievement
    "achievement/achievement-unlocked",
    "achievement/rewards-collect",
    // editor
    "editor/place",
    "editor/erase",
    // global
    "global/button-select",
    "global/button",
    "global/purchase-blocks",
    "global/purchase-item",
    "global/sync",
    // levels
        [// boss 1
        "boss1/death.mp3",
        // boss 2
        "boss2/death",
        // boss 3
        "boss3/death",
        "boss3/rotate",
        "boss3/shoot.mp3",
        // boss 4
        // double jump
        "doubleJump/jump",
        "doubleJump/pickup",
        // enemy
        "enemy/explosion",
        "enemy/shoot",
        "enemy/stomped",
        // gun
        "gun/shoot",
        "gun/pickup",
        // jetpack
        "jetpack/finish",
        "jetpack/loop",
        "jetpack/pickup",
        // punch
        "punch/pickup",
        "punch/use",
        // skateboard
        // speedChange
        // stack
        ].map((file)=>("levels/" + file)),
    "levels/coin-collect",
    "levels/direction-change",
    "levels/explosion1",
    "levels/explosion2",
    "levels/explosion3",
    "levels/flag",
    "levels/jump",
    "levels/level-complete",
    "levels/missile",
    "levels/object-explosion",
    "levels/portal1",
    "levels/portal2",
    "levels/spring",
    "levels/switch-button.mp3",
    // menu
    // online
  ];

var filesToCache = [
  ...basicFiles,
  ...audioFiles.map((file) => "audio/" + file + (file.endsWith(".mp3") ? "" : ".wav")),
  ...imageFiles,
  ...levels,
  ...spineFiles,
  ...waveforms,
];

console.log("service worker executed", version);
/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", (evt) => {
  self.skipWaiting();
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function (e) {
      return caches.open(cacheName).then(function (cache) {
        return cache
          .match(event.request, { ignoreSearch: true })
          .then((response) => response);
      });
    })
  );
});
