'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0beb0911c49063c70710c3c1363ccf48",
".git/config": "8630459af1d7d7613904a1d285521f3e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e560b437f3f85a8d4fcac96d2b65d7f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3141ada1c304ab103e26cc5b29085fb8",
".git/logs/refs/heads/main": "3fdfba7b35cb5032b0ad0ed3a20fc490",
".git/logs/refs/remotes/origin/main": "c5e833b703641a042f9d64fa39fc34f8",
".git/objects/07/3370526a50ccc4a89becc6dd00dd3c0430a0e8": "10dce968d3c35712928d16bf14c0f783",
".git/objects/0f/8c0e7e49f024d705606c416377176de0582776": "c5ab1505a71a50678966cd04f5acc147",
".git/objects/14/7a1d3dc3648b7fca37ef2c57862fa7d274c4fb": "3b7ce624efbb97e33dbacedbe753b8ca",
".git/objects/1c/a54b0dcb89b4d6af480b65bd37aae58653c509": "9242d5f343b8f4de358386a58e264511",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1f/08b8253e565e38a20b332ae081b91346ddc864": "b21a09c0af60ce2a37bfe33e628f6876",
".git/objects/24/ab735d1a9e181c8eca0a2b7838826a05ebb81f": "2c13d7e242c0e29ce04690b950f9502c",
".git/objects/25/bc53b2eb0e7b7c6f015a7ec009338458b51c6f": "79deb008ff40414faed9fb9d3c215fdd",
".git/objects/28/713c6821401ef292532fb0378ecd841b407c38": "ba1d51f4a2756491f27a6fc74f0e94cd",
".git/objects/32/d4b8b7531fc86f653f745c60328a14923ad92f": "8eb3046b7c46c6b09c32adfdd1c9189d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/cc808c1f0a12c0dcb6d77cbdf04dc77bae7d4f": "bbcf777b292d7113f1e6688c3247f97f",
".git/objects/47/3b92ab77a1bcbb4d2c93ead12e2c19a8e59941": "81519829024a8e00450262b3a31dc9f6",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/53/3557ef79484a1e7fc14ee4a4e3399230b83987": "bcf2bd05265740d38cce2545ec82c064",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/2a761bf37e97c55a2a286fb7f970522156ca31": "c8aad9e78084950ce07fd4594935b760",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/acfd7c441dc3c03ce93df8572c24131cf9c697": "2d327e0c417c8a769bcace088fa83591",
".git/objects/63/eb29222f9b9792d88062924fafc854bed53613": "d5281c149cb7173a1133c179eb655c6f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/a863387e8ed089f7a6c2d15911c943e85171f0": "e367e16e10d4a06a1fc505ce255be268",
".git/objects/6c/09affa958b6c1266b6369c3e1a62fab8e00042": "bf13588140d6b5c4e24fbe07852592ad",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/7b/b6bef9cd2de89d31f6c9fafebfecf73fe80c9b": "dbdf1a8d8b66a1dce7e014420cd4c886",
".git/objects/82/52f7ba330fc90c01c97c345639aa0997b7c46e": "accb3686d1fdbc77cd79c455e4709ee2",
".git/objects/83/fdca9f615a7bd46e9d83ac77a4f3aac23bcba8": "44fdb69ba6e2fad719ce753b98d36990",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/875a7fda217b0637323feb7ab258b44aa691d8": "1759fe965666e6576612e22d3d31676e",
".git/objects/9c/9cc9ff55d7a250fbba1db9a7fa931cdcf4fba2": "3270963e0a546d61da7cb2c62729ad31",
".git/objects/a0/ee26ca59b36ef4478c9c40b2382eb89710a3d7": "04a20c51baae6709745e6a305b653b7c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/0906471ab13c520cca014b14845c0fe1f55d6a": "5f9b1dad97e4439ba735da7542473535",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/30298b6352774f963c75da9c158b7c30b7d7d4": "e432eefab9a6de62c389d4b682063c7b",
".git/objects/b2/3ea9487a3725ee3560b5c26c9d3a4cb461ae31": "e4d6a7f0e48bf8eb8036c7881237be83",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/e9e4253a87906aa6671d283ad32a1d75dd41e2": "8dcdb5367850a542e5773cf96996bf66",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/6a78b589be9fd3b51bbea10b9f30d4813a4663": "6eb665c94d1e2a7484e80a8fdfa98c7c",
".git/objects/e9/80a7c2b0b80ca9b8acc892f507fcc372af417e": "8e52d3cf3f671caa2e98211ffd007bf7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "83e2f53365ce9a037555037f91d147d1",
".git/refs/remotes/origin/main": "83e2f53365ce9a037555037f91d147d1",
"assets/AssetManifest.bin": "8953ee59b429f49fb8814711540e9fc2",
"assets/AssetManifest.bin.json": "83bb538fb96cf564032cc5deee739540",
"assets/AssetManifest.json": "e4e1c5e6c70fea96d6c8f47893a473ef",
"assets/assets/images/coverimage2.jpg": "d80ff23b2c72713d9cc94bc5ebfcbd74",
"assets/assets/images/coverimage3.jpg": "8fa190d8797c462fc8dd4a4c171076aa",
"assets/assets/images/coverimage4.jpg": "edf3a9b84ffc0e07f544bb1e4a6a9446",
"assets/assets/images/user1.jpg": "b4b868d9a0bc07de0650b3735c0f9137",
"assets/assets/images/user2.jpg": "c657c459c42add164ae98bcf6f2aaa3b",
"assets/assets/images/user3.jpg": "32936431de1a7b4104123bb1184c95dd",
"assets/assets/images/user4.jpg": "240cf0072569a34d218f07ac0c9131e9",
"assets/assets/login2.png": "775418cff580fd83112d895aa0a93003",
"assets/assets/logo.png": "229800739e629da78612a021bf2f25a4",
"assets/assets/Lora/Lora-VariableFont_wght.ttf": "5666f85e55c0b9e2be416718b8278445",
"assets/FontManifest.json": "1970297b6ede9c1814f3725d23295380",
"assets/fonts/MaterialIcons-Regular.otf": "df9131552d9f2eb5f5a4b1e0340bc2b0",
"assets/NOTICES": "f96c88e957ce7c31bcdbac4ac1f09062",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "3c851258ea2ddfeb18c00f3404841569",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1a7f29ef412092972e32730bea14e47d",
"/": "1a7f29ef412092972e32730bea14e47d",
"main.dart.js": "4db0a3ed73ba727ca896d54054465c7c",
"manifest.json": "14afc30566d1b5207ac366d802ae068b",
"version.json": "a88960ea3f151d372a7973cab21780b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
