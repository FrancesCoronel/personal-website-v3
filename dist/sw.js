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
    "url": "assets/css/ie8.css",
    "revision": "e1eb1602dd08d5f52cffe80caa47767a"
  },
  {
    "url": "assets/css/ie9.css",
    "revision": "4b2fb992caf6d1c05f261cea871d656c"
  },
  {
    "url": "assets/css/main.css",
    "revision": "a8bf681bf18a65aebb6c2557da303460"
  },
  {
    "url": "assets/js/ie.js",
    "revision": "34c47317df70f6cc06b022ebf80a49d2"
  },
  {
    "url": "assets/js/index.html",
    "revision": "947533db733026f1ac486f4686716646"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
