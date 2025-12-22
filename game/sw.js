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
    ].map((file) => "levels/" + file),
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
    ...[
      "editorOnly/block-switch-button",
      "editorOnly/direction-change",
      "editorOnly/double-jump",
      "editorOnly/size-button",
      "editorOnly/speed-change",
      "editorOnly/spring",
      "objects/block",
      "objects/collectible",
      "objects/dirchange",
      "objects/enemy",
      "objects/flag",
      "objects/miniblock",
      "objects/minispike",
      "objects/platform",
      "objects/portal",
      "objects/powerup",
      "objects/saw",
      "objects/speedchange",
      "objects/spike",
      "objects/spring",
      "objects/switch",
      "objects/switchplatform",
      "add",
      "delete",
      "duplicate",
      "eraser",
      "pointer",
      "select",
      "theme",
      "undo",
    ].map((name) => "editor/" + name),
    ...[
      "arrow-down-stroke",
      "arrow-up",
      "attempt",
      // boss2
      "boss2/death/death1",
      "boss2/death/death2",
      "boss2/death/explosion",
      // gunin
      "boss2/gunin/health1",
      "boss2/gunin/health2",
      "boss2/gunin/health3",
      "boss2/gunin/health4",
      "boss2/gunin/health5",
      // gunout
      "boss2/gunout/health1",
      "boss2/gunout/health2",
      "boss2/gunout/health3",
      "boss2/gunout/health4",
      "boss2/gunout/health5",
      // gunshot
      "boss2/gunshot/health1",
      "boss2/gunshot/health2",
      "boss2/gunshot/health3",
      "boss2/gunshot/health4",
      "boss2/gunshot/health5",
      // idle
      "boss2/gunshot/health1",
      "boss2/gunshot/health2",
      "boss2/gunshot/health3",
      "boss2/gunshot/health4",
      "boss2/gunshot/health5",
      // actually you know what I don't even think there are going to be bosses in this game
      "boss2/bomb",
      "boss2/bulletHell",
      "boss2/bulletHellBig",
      "boss2/healthbar-frame",
      "boss2/healthbar",
      "boss2/missile",
      "boss2/thinBullet",

      // boss3
      "boss3/tiles/topTrailing",
      "boss3/tiles/topStalectite",
      "boss3/tiles/topSingle",
      "boss3/tiles/topLeading",
      "boss3/tiles/topJoin",
      "boss3/tiles/topEntryGlow",
      "boss3/tiles/topEntry",
      "boss3/tiles/middle",
      "boss3/tiles/bottomTrailing",
      "boss3/tiles/bottomStalecmite",
      "boss3/tiles/bottomSingle",
      "boss3/tiles/bottomLeading",
      "boss3/tiles/bottomJoin",
      "boss3/tiles/bottomExitGlow",
      "boss3/tiles/bottomExit",
      "boss3/asteroid120",
      "boss3/asteroid210",
      "boss3/asteroid60",
      "boss3/bullet",
      "boss3/player-ship",
      "boss3/star-line-stars",
      "boss3/star-line",
      ].map((name) => "level/" + name),

      // mainMenu
      // TODO: Will add more once new the world map is a thing
      "mainMenu/appleid_button_pressed",
      "mainMenu/appleid_button",
      "mainMenu/flukegames",
      "mainMenu/googlesignin_button_pressed",
      "mainMenu/googlesignin_button",
      "mainMenu/lockIcon",
      "mainMenu/logo",
      "mainMenu/rhythm-button-lines",

      "online/eye-icon",
      "online/highlight-player",
      "online/name-arrow",

      "player/glow",
      "player/pixel-explosion",

      // superLevelPack
      "superLevelPack/Aura",
      "superLevelPack/Cool Friends",
      "superLevelPack/Default",
      "superLevelPack/For You",
      "superLevelPack/Nacreous Snowmelt",

      // themes :(

      ...[
        "arrows/arrow-outline-selected",
        "arrows/arrow-outline",
        "arrows/arrow",
        "blank/block",
        "blank/block-light",
        "blank/spike",
        // classic
        "classic/block",
        "classic/boss",
        "classic/block-light",
        "classic/spike",
        "classic/bottom/block",
        "classic/bottom/block-spike",
        "classic/background/fade",
        "classic/platform-rail",
        "classic/platform",
        "classic/saw-rail",
        "classic/saw",
        "classic/steel",
        // dreamy
        "dreamy/block",
        "dreamy/block-light",
        "dreamy/spike",
        // punch
        "punch/background/BG_01",
        "punch/background/BG_02",
        "punch/background/BG_03",
        "punch/background/BG_04",
        "punch/background/BG_05",
        "punch/background/Building_01",
        "punch/background/cloud_01",
        "punch/background/cloud_02",
        "punch/background/cloud_03",
        "punch/background/cloud_04",
        "punch/background/ground",
        "punch/background/moon",
        "punch/background/water",
        "punch/ground",
        "punch/idle",
        "punch/punch",
        // red
        "red/background/background-red-dots",
        "red/background/background-red-flame1",
        "red/background/background-red-flame2",
        "red/background/background-red-square1",
        "red/background/background-red-square2",
        "red/background/background-red-square3",
        "red/background/background",
        // skater
        "skater/background/cloud1",
        "skater/background/cloud2",
        "skater/background/distant-buildings",
        "skater/background/distant-buildings2",
        "skater/background/ground-buildings",
        "skater/background/hedges",
        "skater/background/sky-buildings",
        "skater/background/sky",
        "skater/bottom/block",
        "skater/block-light",
        "skater/block",
        "skater/boss",
        "skater/rail",
        "skater/saw-rail",
        "skater/saw",
        "skater/skateboard",
        "skater/spike",
        "skater/steel",
        // speed
        "speed/ash",
        "speed/moon",
        "speed/plan1",
        "speed/red_moon",
        // synthwave
        "synthwave/background",
        "synthwave/collectible-pickup",
        "synthwave/collectible",
        "synthwave/mountains",
        // world1
        "world1/background/Blur01",
        "world1/background/Blur02",
        "world1/background/Dust",
        "world1/background/Fence01",
        "world1/background/Fence02",
        "world1/background/Fence03",
        "world1/background/Fence04",
        "world1/background/Flara01",
        "world1/background/Rectangle06",
        "world1/background/RectangleBG01",
        "world1/background/RectangleBG02",
        "world1/background/RectangleBG03",
        "world1/background/RectangleBG04",
        "world1/background/RectangleLong",
        "world1/background/Shape01",
        "world1/background/Shape02",
        "world1/background/Shape03",
        "world1/background/Star01",
        "world1/background/Star02",
        "world1/background/Star03",
        "world1/background/Triangle01",
        "world1/background/Triangle02",
        "world1/background/Triangle03",
        "world1/background/Triangle04",
        "world1/background/Triangle05",
        "world1/background/Triangle06",
        "world1/background/Triangle07",

        "world1/bottom/block-small-spike",
        "world1/bottom/block-spike-corner",
        "world1/bottom/block-spike",
        "world1/bottom/block",
        "world1/bottom/double-tall-block-spike",
        "world1/bottom/tall-block-spike",
        "world1/block-light",
        "world1/block",
        "world1/blue-outline",
        "world1/blue",
        "world1/boss",
        "world1/flag",
        "world1/flagEnd",
        "world1/platform-rail",
        "world1/platform",
        "world1/red-outline",
        "world1/red",
        "world1/saw-rail",
        "world1/saw",
        "world1/spike",
        "world1/steel",

        // world1boss
        "world1boss/background/Blur01",
        "world1boss/background/Blur02",
        "world1boss/background/Dust",
        "world1boss/background/Fence01",
        "world1boss/background/Fence02",
        "world1boss/background/Fence03",
        "world1boss/background/Fence04",
        "world1boss/background/Flara01",
        "world1boss/background/Rectangle06",
        "world1boss/background/RectangleBG01",
        "world1boss/background/RectangleBG02",
        "world1boss/background/RectangleBG03",
        "world1boss/background/RectangleBG04",
        "world1boss/background/RectangleLong",
        "world1boss/background/Shape01",
        "world1boss/background/Shape02",
        "world1boss/background/Shape03",
        "world1boss/background/Star01",
        "world1boss/background/Star02",
        "world1boss/background/Star03",
        "world1boss/background/Triangle01",
        "world1boss/background/Triangle02",
        "world1boss/background/Triangle03",
        "world1boss/background/Triangle04",
        "world1boss/background/Triangle05",
        "world1boss/background/Triangle06",
        "world1boss/background/Triangle07",
        "world1boss/block",
        "world1boss/block-light",
        "world1boss/boss",
        "world1boss/steel",

        // world2
        "world2/background/BG_01",
        "world2/background/BG_02",
        "world2/background/BG_03",
        "world2/background/BG_04",
        "world2/background/BG_05",
        "world2/bottom/block-small-spike",
        "world2/bottom/block-spike-corner",
        "world2/bottom/block-spike",
        "world2/bottom/block",
        "world2/bottom/double-tall-block-spike",
        "world2/bottom/tall-block-spike",


        "world2/block-light",
        "world2/block-explosion",
        "world2/spike-explosion",
        "world2/direction-change-hit",
        "world2/direction-change",
        "world2/enemy-explosion",
        "world2/enemy-shooter",
        "world2/enemy-shooting",
        "world2/enemy-walker-helmet",
        "world2/enemy-walker-stomped",
        "world2/enemy-walker",
        "world2/block",
        "world2/boss",
        "world2/flag",
        "world2/flagEnd",
        "world2/platform-rail",
        "world2/platform",
        "world2/saw-rail",
        "world2/saw",
        "world2/spike",
        "world2/steel",
      ].map((name) => "themes/" + name),
    
  ].map((name) => "images/" + name + ".png"),
  skins = [
    "alien",
    "arrows",
    "blank",
    "boss1",
    "boss2",
    "boss3",
    "boss4",
    "bull",
    "burger",
    "calavera",
    "chicken",
    "classic",
    "default",
    "dev - Copy",
    "dev",
    "dino",
    "dog",
    "dreamy",
    "fighter",
    "glow",
    "greenbot",
    "knight",
    "layla",
    "machine",
    "monkey",
    "mrcool",
    "mummy",
    "mushroom",
    "parrot",
    "pixel",
    "pixelcheese",
    "pixelcrown",
    "pixelrobot",
    "pixelskull",
    "pumpkin",
    "samurai",
    "skater",
    "space",
    "spaceship",
    "tester",
    "world1",
    "world4",
    "worm",
    "yak"
  ],
  songs = [],
  levels = [],
  spineFiles = [];

var filesToCache = [
  ...basicFiles,
  ...audioFiles.map(
    (file) => "audio/" + file + (file.endsWith(".mp3") ? "" : ".wav")
  ),
  ...imageFiles,
  ...skins.map((name) => "images/player/skins/" + name + ".png"),
  //...skins.map((name) => "images/player/skins/dark/" + name + ".png"), // nope
  ...levels,
  ...spineFiles,
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
