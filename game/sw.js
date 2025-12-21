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
        ...[
          // boss 1
        "boss1/death.mp3",
        // boss 2
        "boss2/death",
        "boss2/bullethell_large",
        "boss2/bullethell_small",
        "boss2/damage",
        "boss2/death",
        "boss2/doublemissile",
        "boss2/gun-appear",
        "boss2/gun-retract",
        "boss2/laser",
        "boss2/machinegun",
        // boss 3
        "boss3/death",
        "boss3/rotate",
        "boss3/shoot.mp3",
        // boss 4
        "boss4/block_explosion.mp3",
        "boss4/claw_attack.mp3",
        "boss4/death.mp3",
        "boss4/fireball.mp3",
        "boss4/footstep1",
        "boss4/footstep2",
        "boss4/footstep3",
        "boss4/laser.mp3",
        "boss4/laugh.mp3",
        "boss4/minion.mp3",
        "boss4/tail_attack.mp3",

    
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
        "skateboard/score/1",
        "skateboard/score/2",
        "skateboard/score/3",
        "skateboard/score/4",
        "skateboard/score/5",
        "skateboard/score/6",
        "skateboard/score/7",
        "skateboard/score/8",
        "skateboard/score/9",
        "skateboard/score/10",
        "skateboard/score/add",
        "skateboard/grind",
        "skateboard/move",
        "skateboard/ollie",

        // speedChange
        "speedchange/down1",
        "speedchange/down2",
        "speedchange/down3",
        "speedchange/down4",
        "speedchange/down5",
        "speedchange/up1",
        "speedchange/up2",
        "speedchange/up3", 
        "speedchange/up4",
        "speedchange/up5",
        // stack
        "stack/1",
        "stack/2",
        "stack/3",
        "stack/4",
        "stack/5",
        "stack/6",
        "stack/7",

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
    "menu/accept",
    "menu/error",
    "menu/party-invite",
    "menu/send",
    // online
    "online/countdown-123",
    "online/countdown-go",
    "online/countdown-start",
    "online/game-over",
    "online/round-finish",
    "online/timer-tick",
    "online/win",
    "online/xp",

  ],
  imageFiles = [
    "achievement/buy-pass-marks",
    "achievement/rewards-hidden",
    "achievement/skater-screenshot",
    "achievement/rewards/autopilot",
    "achievement/rewards/blocks",
    "achievement/rewards/bonus",
    "achievement/rewards/editor",
    "achievement/rewards/missiles",
    "achievement/rewards/slowmo",
    "achievement/rewards/theme",
    
  ],
  levels = [],
  spineFiles = [],
  waveforms = [];

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
