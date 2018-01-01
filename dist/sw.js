importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/js/ie.js",
    "revision": "e6f5ad6cdc0eb6aaec8b13e50e970bb8"
  },
  {
    "url": "assets/js/index.html",
    "revision": "e710fe865c87c2a6505127eb2220be91"
  },
  {
    "url": "assets/js/OneSignalSDKUpdaterWorker.js",
    "revision": "ba149c8e8afe65880ca021745b702ef7"
  },
  {
    "url": "assets/js/OneSignalSDKWorker.js",
    "revision": "948c3d8dffead961cd7e43718822a7bc"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
