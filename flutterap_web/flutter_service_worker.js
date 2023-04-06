'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2cdae741c0dfdeb6363f81e69edcaa4e",
"assets/assets/fonts/calibril.ttf": "0d717c4bf80cbb556bf87777fef7d09e",
"assets/assets/fonts/Iranian%2520Sans.ttf": "e59513c82578df5dafb6b8da951be9b6",
"assets/assets/fonts/Shabnam.ttf": "eaf70407d8fe90987a1d338988301bfa",
"assets/assets/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/images/404.png": "da180a28e2f964cb70b88a57593589f8",
"assets/assets/images/404_2.png": "7488b32ccc21cd7898fc1628687feac7",
"assets/assets/images/back.png": "46a4a3f61a923f53151f71922abe5d72",
"assets/assets/images/back2.png": "d10850166b21de0e7247b59ac728d4b1",
"assets/assets/images/back_flower.jpg": "5e9b21cffce8edd0f9379e123fb9951d",
"assets/assets/images/back_flower_3.jpg": "31e779ff302d5ce4562a4ce8a0be1944",
"assets/assets/images/baladmap.png": "5e5c263ea5f205ea1926af77aa9bb07b",
"assets/assets/images/forgotpass.jpg": "6d10f30a9112f8e585f779f99be80784",
"assets/assets/images/googlemap.png": "e26414d0fe7f146f8722500bda44eeb4",
"assets/assets/images/illustaration2.png": "568bdb70e1dea83166e972952c459afd",
"assets/assets/images/illustaration3.png": "2450baf8905523fdd0189a91b31b8aa0",
"assets/assets/images/img1.jpg": "5d3683adc9ffebaeea5da0fcd9351f30",
"assets/assets/images/img2.jpg": "9b9eb84b9c4aced1afddb8b8381c8cf8",
"assets/assets/images/img3.jpg": "bf98d5f07e6bcc11fb5c8b93d290b435",
"assets/assets/images/img4.jpg": "c71200a1c9daaa3cdf3962f55482074f",
"assets/assets/images/repairs.png": "a324d1becdc166b2467b74012e062e73",
"assets/assets/images/signin.png": "aac7d94df8d78fa174598f7e52c668bd",
"assets/assets/images/status1.png": "b03d6aff411ff53eadf87582709d9941",
"assets/assets/images/status2.png": "62527f835fa26a09a3e66139f126c534",
"assets/assets/images/status3.png": "2e9226d050c0a93b4ad8148a1a1e2bd6",
"assets/assets/images/status4.png": "580902bb6bff9e053347847734fb67c5",
"assets/assets/images/status5.png": "33c617f4d4937cf770ddd8bfac1f2509",
"assets/FontManifest.json": "3dd0ebdb45b2498eaff95a64cb00fe41",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "0e0c6049c72ff8f5e1ea2164f3133f85",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/fx_flutter_components/assets/fonts/Iranian%2520Sans.ttf": "e59513c82578df5dafb6b8da951be9b6",
"assets/packages/fx_flutter_components/assets/images/baladmap.png": "6e0c1a3271933f1fa373f735b7f2742c",
"assets/packages/fx_flutter_components/assets/images/calender.svg": "88596fd52078f631464bdcb83e940377",
"assets/packages/fx_flutter_components/assets/images/cross.png": "26154b4c714cc253c2ae045eedff130a",
"assets/packages/fx_flutter_components/assets/images/down.svg": "dbab5b8561981d6270eb2181820ae0fa",
"assets/packages/fx_flutter_components/assets/images/ex1.png": "bbda79192f7baeb1ae60ed60e2eeb2ff",
"assets/packages/fx_flutter_components/assets/images/ex2.JPG": "2367399c92478799fa346c44293420da",
"assets/packages/fx_flutter_components/assets/images/ex3.JPG": "a3369d9dd624b2e32058a637a9ca130d",
"assets/packages/fx_flutter_components/assets/images/favorite.svg": "806caa60bd4e8aa608275b6e3f08e690",
"assets/packages/fx_flutter_components/assets/images/googlemap.png": "1fe93005d5fd623f47f77c90638e62b8",
"assets/packages/fx_flutter_components/assets/images/HistoryOutlined.svg": "831cdfc47b8e6ee42d4e624893138ef0",
"assets/packages/fx_flutter_components/assets/images/img0.jpg": "93ef9b36a543556540c808afe5021d1d",
"assets/packages/fx_flutter_components/assets/images/img1.jpg": "c71200a1c9daaa3cdf3962f55482074f",
"assets/packages/fx_flutter_components/assets/images/img2.jpg": "c71200a1c9daaa3cdf3962f55482074f",
"assets/packages/fx_flutter_components/assets/images/img3.jpg": "93ef9b36a543556540c808afe5021d1d",
"assets/packages/fx_flutter_components/assets/images/list.svg": "2a9ad142ee450b68e893f3e4b40d9b84",
"assets/packages/fx_flutter_components/assets/images/migration.svg": "2ec3d95eba4a488106411fb20d0912c2",
"assets/packages/fx_flutter_components/assets/images/tick.png": "0893b2e5add78132f2ae63cb41fb9707",
"assets/packages/fx_flutter_components/assets/svgs/add.svg": "7ce6597695f31c75b075ac07c6595fe4",
"assets/packages/fx_flutter_components/assets/svgs/advanced.svg": "58f77ecd9487a2bc9bb5cd9c954d3a13",
"assets/packages/fx_flutter_components/assets/svgs/arrowdown2.svg": "a10397fc62c5ffb99c9bbbbc6cec6145",
"assets/packages/fx_flutter_components/assets/svgs/arrowup2.svg": "7c5961f76d989dae0ce245627a5aa098",
"assets/packages/fx_flutter_components/assets/svgs/backward.svg": "90e3eec929a7047325a317502c6812a0",
"assets/packages/fx_flutter_components/assets/svgs/backward5seconds.svg": "f4c92cf4a1d0188bd28c7fd9f3eac5a2",
"assets/packages/fx_flutter_components/assets/svgs/bookmarks.svg": "19a9374f0c0e08af7c59237714119a7e",
"assets/packages/fx_flutter_components/assets/svgs/CaretCircleLeft.svg": "8a92f884cd40f3214bd713e96d78651f",
"assets/packages/fx_flutter_components/assets/svgs/CaretCircleRight.svg": "dfb047a9873a9d7ff78f87b9b087e12b",
"assets/packages/fx_flutter_components/assets/svgs/CaretDoubleLeft.svg": "ed8b1786beeafc3c080d1c5d9f2c0ff1",
"assets/packages/fx_flutter_components/assets/svgs/CaretDoubleRight.svg": "4dc8d501ba507b491cc902b364c6cdbd",
"assets/packages/fx_flutter_components/assets/svgs/CaretLeft.svg": "91f46236f4c6c132f908eaf951812934",
"assets/packages/fx_flutter_components/assets/svgs/CaretRight.svg": "96368a00800b256ed714805213cf72ee",
"assets/packages/fx_flutter_components/assets/svgs/chart.svg": "adddc5542ca949a0725ea873e5e4f5f5",
"assets/packages/fx_flutter_components/assets/svgs/ChatsCircle.svg": "d3411cc52842cc7143e3e425efe5693f",
"assets/packages/fx_flutter_components/assets/svgs/CheckCircle.svg": "14ef05ce2995b115584ff16b621ac83a",
"assets/packages/fx_flutter_components/assets/svgs/clipboard.svg": "066d75254d692a02ead9f89edbf5a9dc",
"assets/packages/fx_flutter_components/assets/svgs/cross.svg": "2f4001db5267600fab32f240e607b2b3",
"assets/packages/fx_flutter_components/assets/svgs/danger.svg": "b0140e19702265db97bd03fece29f388",
"assets/packages/fx_flutter_components/assets/svgs/directinbox.svg": "4223b6c76d2026394d5bbfe858434987",
"assets/packages/fx_flutter_components/assets/svgs/document.svg": "fb6169a4ae49041d1e8fcfd4b734d172",
"assets/packages/fx_flutter_components/assets/svgs/dollarsquare.svg": "61bb5059519c90b638114ec0eb18eb68",
"assets/packages/fx_flutter_components/assets/svgs/down.svg": "9cea1ed7364507064971daeab35fad25",
"assets/packages/fx_flutter_components/assets/svgs/download.svg": "50ac9823947a3fc7c4ff63020bf29a7a",
"assets/packages/fx_flutter_components/assets/svgs/emojihappy.svg": "ee86365b3b11c9e3bd81c79b7b5d54df",
"assets/packages/fx_flutter_components/assets/svgs/exit.svg": "411b8f48083f37a776f7bda07daaf2f2",
"assets/packages/fx_flutter_components/assets/svgs/Facebook.svg": "719dc46dc53d4805fef94fd9fb13cafe",
"assets/packages/fx_flutter_components/assets/svgs/FacebookLogo.svg": "183831ddb5d86a9c8074b08d20e85988",
"assets/packages/fx_flutter_components/assets/svgs/fastforward.svg": "a456d5da76464f0b599319ef5c5ab799",
"assets/packages/fx_flutter_components/assets/svgs/favoritechart.svg": "fec930bbfaac9d6479924d813428b49e",
"assets/packages/fx_flutter_components/assets/svgs/folder.svg": "5c29c576809fa790709be99f37df0f7f",
"assets/packages/fx_flutter_components/assets/svgs/folder2.svg": "9737429f7b3368b41a2fa9ec19ae39c1",
"assets/packages/fx_flutter_components/assets/svgs/folderfavorite.svg": "3e1c541b2fa92e3a1bfa4f3469fd6463",
"assets/packages/fx_flutter_components/assets/svgs/form.svg": "d9423b29887bd1a0a71277eb76521c29",
"assets/packages/fx_flutter_components/assets/svgs/forward.svg": "29532283a013eeeb29184958dcdcdd6e",
"assets/packages/fx_flutter_components/assets/svgs/forward10seconds.svg": "f578631d1946d03bb0c87b90dd2ee7cc",
"assets/packages/fx_flutter_components/assets/svgs/gallery.svg": "82a8243037417932150e7daa0a313f02",
"assets/packages/fx_flutter_components/assets/svgs/Gauge.svg": "9d2e2e8943e5a2ca36f8d6badc498e9a",
"assets/packages/fx_flutter_components/assets/svgs/Gift.svg": "37ea657d7b740cbf1a8a45063012e275",
"assets/packages/fx_flutter_components/assets/svgs/google.svg": "c775bbc9da38e4e00f5b601a21672815",
"assets/packages/fx_flutter_components/assets/svgs/GoogleLogo.svg": "b50767c3a3eaf3b506145344af13af77",
"assets/packages/fx_flutter_components/assets/svgs/GraduationCap.svg": "88b9a8e0bc26d138efe357fa4dddeae7",
"assets/packages/fx_flutter_components/assets/svgs/heart.svg": "e8991a25c98a62fca8adc45327cec460",
"assets/packages/fx_flutter_components/assets/svgs/hearttick.svg": "2f8199dd25128363b60a2936ba471733",
"assets/packages/fx_flutter_components/assets/svgs/home.svg": "c75a1f03acf00926320ffd263a16b46c",
"assets/packages/fx_flutter_components/assets/svgs/homehashtag.svg": "74851e44888c218484fa2b552a198747",
"assets/packages/fx_flutter_components/assets/svgs/image.svg": "82a8243037417932150e7daa0a313f02",
"assets/packages/fx_flutter_components/assets/svgs/info.svg": "96202ff4874d1b917e3149a57eda6b81",
"assets/packages/fx_flutter_components/assets/svgs/infocircle.svg": "151964223ab41a433ee67cf915062f11",
"assets/packages/fx_flutter_components/assets/svgs/InstagramLogo.svg": "2cdba9e0c5d232926fe7ea3d3ea0bb31",
"assets/packages/fx_flutter_components/assets/svgs/layer.svg": "443160837e9b7259b4d986e5048826dc",
"assets/packages/fx_flutter_components/assets/svgs/LinkedinLogo.svg": "a2b84281b4e857a73a77b59f3f536096",
"assets/packages/fx_flutter_components/assets/svgs/map.svg": "1fc06e5ee231af237b0d54a435cba93d",
"assets/packages/fx_flutter_components/assets/svgs/Megaphone.svg": "33e55b4e12391d906f63ba02e5a1b718",
"assets/packages/fx_flutter_components/assets/svgs/menu.svg": "24f786603523e0525ca507d6c79d1ab9",
"assets/packages/fx_flutter_components/assets/svgs/message.svg": "d3411cc52842cc7143e3e425efe5693f",
"assets/packages/fx_flutter_components/assets/svgs/moon.svg": "9fc86633dff4cca398fd25b792efb7d1",
"assets/packages/fx_flutter_components/assets/svgs/notification.svg": "ddcfc70556d05fb34cabf64b15687584",
"assets/packages/fx_flutter_components/assets/svgs/notificationbing.svg": "c74a32aceb17ec0cf743806467347327",
"assets/packages/fx_flutter_components/assets/svgs/oceanprotocol.svg": "cc9d7b2032fddc0870bbf3aa957dd593",
"assets/packages/fx_flutter_components/assets/svgs/pages.svg": "fbae1b6724190121d49ca767e478f7bd",
"assets/packages/fx_flutter_components/assets/svgs/pausecircle.svg": "ab114f17864609e564ca9476a9435880",
"assets/packages/fx_flutter_components/assets/svgs/play.svg": "303efb8f473422a5e7b837c2c1c4d53a",
"assets/packages/fx_flutter_components/assets/svgs/playcircle.svg": "a94de590ae6705011a211b846ef44af7",
"assets/packages/fx_flutter_components/assets/svgs/Plug.svg": "0ee60db162dfd4aee456f9d1d4f3b422",
"assets/packages/fx_flutter_components/assets/svgs/profilecircle.svg": "d0933532b9d6e4e03fe519dbc46f66e5",
"assets/packages/fx_flutter_components/assets/svgs/Question.svg": "5428297269a50e212db1245de2a27723",
"assets/packages/fx_flutter_components/assets/svgs/refresh.svg": "c164e048f0173af1f8a11d9e6f4504cb",
"assets/packages/fx_flutter_components/assets/svgs/search.svg": "9aba65f5059ac2714b25574dcfc56b0b",
"assets/packages/fx_flutter_components/assets/svgs/search_white.svg": "b81418aa6455c55b19fd951828ea0b1d",
"assets/packages/fx_flutter_components/assets/svgs/send.svg": "186466e5e2268add7b1ab6e58ab994bd",
"assets/packages/fx_flutter_components/assets/svgs/setting.svg": "b16070ca5108656c901575683d28f002",
"assets/packages/fx_flutter_components/assets/svgs/setting2.svg": "2d095f7f61b89852a42aca1cfe622bdb",
"assets/packages/fx_flutter_components/assets/svgs/share.svg": "5a834e1499c82d2f7a9ef1c651aad1e3",
"assets/packages/fx_flutter_components/assets/svgs/shoppingcart.svg": "8fa20216f89c52cc756289594b9224d4",
"assets/packages/fx_flutter_components/assets/svgs/square.svg": "596f5c966bc2751302663ed55ffa13e2",
"assets/packages/fx_flutter_components/assets/svgs/star.svg": "1431b8af48f47e529af12e3322e895e5",
"assets/packages/fx_flutter_components/assets/svgs/sun.svg": "8ff3dba0d53be0bcad5b610c8ae6db94",
"assets/packages/fx_flutter_components/assets/svgs/tick.svg": "c86386b7887b8ce5f60d87a6e4142e9c",
"assets/packages/fx_flutter_components/assets/svgs/ticksquare.svg": "df3d9d82319d751eb4503f72a12e8c6e",
"assets/packages/fx_flutter_components/assets/svgs/truckfast.svg": "0919c41835160e775ed9587b6115ba40",
"assets/packages/fx_flutter_components/assets/svgs/TwitterLogo.svg": "a3c6c5f89ad06f2fcfd9725bef5bf0be",
"assets/packages/fx_flutter_components/assets/svgs/up.svg": "53335a47f9ea7b381e9cca9a21862c24",
"assets/packages/fx_flutter_components/assets/svgs/usdcoin.svg": "5590d327f322cbbe0a89f145fb95374e",
"assets/packages/fx_flutter_components/assets/svgs/video.svg": "3507c044ba39da3c9656dbfabdb829f6",
"assets/packages/fx_flutter_components/assets/svgs/videocircle.svg": "1b310269b84dc05d3806e2c83adc8377",
"assets/packages/fx_flutter_components/assets/svgs/volumehigh.svg": "18adfe695e82b2070ad247960e07a646",
"assets/packages/fx_flutter_components/assets/svgs/WhatsappLogo.svg": "ca9c9a5e9a5780f578b5eac126430b24",
"assets/packages/fx_flutter_components/assets/svgs/YoutubeLogo.svg": "e9d2d4e392d3d1be1f1a7a3b18801eeb",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "2c0e51c8494b1c385fba19c715f8dd2e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "2c0e51c8494b1c385fba19c715f8dd2e",
"icons/Icon-512.png": "2c0e51c8494b1c385fba19c715f8dd2e",
"icons/Icon-maskable-192.png": "2c0e51c8494b1c385fba19c715f8dd2e",
"icons/Icon-maskable-512.png": "2c0e51c8494b1c385fba19c715f8dd2e",
"index.html": "73312140f5bb1c8765e0151d8d243c5a",
"/": "73312140f5bb1c8765e0151d8d243c5a",
"main.dart.js": "efc1350c964f347b84436c94aee4273d",
"manifest.json": "0d1ee20b2a0fd526c25f7adf4f228489",
"version.json": "e8e756639e8f32acf84db4a453ea12d6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
