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
    "url": "2008/06/01/middle-school-poems-️/index.html",
    "revision": "35943c7fbc6f62a13ac52ca1f1b59fc6"
  },
  {
    "url": "2009/09/22/ghent-school/index.html",
    "revision": "9bfe8b0a97a79eca3ec173773f9f386b"
  },
  {
    "url": "2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "122daefadd3d2f52724cbf3908d88765"
  },
  {
    "url": "2010/05/12/desiring-the-casual-/index.html",
    "revision": "4601662cb68af8dc498d8ebcc7b26080"
  },
  {
    "url": "2010/08/03/enders-game---book-review-/index.html",
    "revision": "58fa3c87f3a74b8e2a7bb598c0a1c272"
  },
  {
    "url": "2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "93908ca74ff433eac3fff1b197033698"
  },
  {
    "url": "2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "70bbc593bbf42f30102b916b0315b1c3"
  },
  {
    "url": "2011/08/07/isce-2011/index.html",
    "revision": "aabe0613d4abed3ab6ac1c9272ac99df"
  },
  {
    "url": "2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "5cbfbaa13ed203f5deb804d655095077"
  },
  {
    "url": "2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "16c0b4aa59560045bfd58e4b0776f78d"
  },
  {
    "url": "2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "d85c558645f805ae866f95d712a41d2f"
  },
  {
    "url": "2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "b7083c10dce352620b3ba1827399e207"
  },
  {
    "url": "2012/03/01/stardust---book-review-/index.html",
    "revision": "67807ca32e0b63a745d3b2a90dad2c5b"
  },
  {
    "url": "2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "0c4caf1849461231ab8ac498521a811d"
  },
  {
    "url": "2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "d9c1d8fc8de9f5bce841056ee4a3d23d"
  },
  {
    "url": "2012/08/10/odu-vmasc/index.html",
    "revision": "559400dc4d01a8f00521a91a856c3d7d"
  },
  {
    "url": "2012/08/14/school-for-field-studies/index.html",
    "revision": "23a74c7e6bedc79506024ee832153e06"
  },
  {
    "url": "2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "c3a8cb05029680e25a45cd1e46c9429f"
  },
  {
    "url": "2013/06/13/maury-high-school/index.html",
    "revision": "9c0b66bee461d01586976649a10975a8"
  },
  {
    "url": "2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "6a96a2579248c31037fa27853f9abddf"
  },
  {
    "url": "2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "e4cc36b632d0df6e6a1c25b71a63375c"
  },
  {
    "url": "2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "2cbe5fd06a03ceb19b50e837ac120063"
  },
  {
    "url": "2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "e52f41199055dfffe6f529af9630d952"
  },
  {
    "url": "2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "f79252502f28936c1d1d705f6cd9f53e"
  },
  {
    "url": "2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "daf1f1647fd3b49a3dcba53d4b290e41"
  },
  {
    "url": "2013/08/02/islc-2013/index.html",
    "revision": "e362dd0f0f54976bf6a9a40e6fb91621"
  },
  {
    "url": "2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "06c35f49a25d93ada2c8dbc894f55439"
  },
  {
    "url": "2013/08/03/potc---chest-riddle-/index.html",
    "revision": "2fefc84358b7908546e25e29349b7e3c"
  },
  {
    "url": "2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "04b323e3cb4c6176805044c940ce76cf"
  },
  {
    "url": "2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "ef7cc4beb1ef9ff4e6003f29ce7901cf"
  },
  {
    "url": "2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "5e2d5dcee11777c9a0fc78d97f25d17b"
  },
  {
    "url": "2013/09/20/c-bits---getting-started/index.html",
    "revision": "ddcdcae2f771fa1dd241e446fc0e34b1"
  },
  {
    "url": "2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "f3af39dc2d1238a7a9b53b909f799dc1"
  },
  {
    "url": "2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "f8d7c33ca6e8a6d230bfc07ae50ba85e"
  },
  {
    "url": "2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "40af076385f61321c365f4948e4fc660"
  },
  {
    "url": "2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "bb91f00f4be76d858c70606c40d8c611"
  },
  {
    "url": "2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "ad387127f727b2137088cdcc673c0d82"
  },
  {
    "url": "2014/02/21/working-smarter-not-harder/index.html",
    "revision": "abce279046164ef6937c404f65188d10"
  },
  {
    "url": "2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "ba30bb371cba1a02357e7dda88d51d17"
  },
  {
    "url": "2014/03/03/ah-life./index.html",
    "revision": "ea5cd6ba3f155254ad5def54d8bae80c"
  },
  {
    "url": "2014/03/03/granny-said.../index.html",
    "revision": "864beee23c358827c82471d013d01689"
  },
  {
    "url": "2014/03/04/the-best-50-insults/index.html",
    "revision": "948cdfd87982db9dc4d0235bd317312b"
  },
  {
    "url": "2014/03/12/20-laws-of-power/index.html",
    "revision": "a4f768f736801762f567f85fc2e2939f"
  },
  {
    "url": "2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "bc0fed04b4cc1ffbda9fa7c8fdc022a4"
  },
  {
    "url": "2014/03/12/java-bits---getting-started/index.html",
    "revision": "c5ce6d706fdb849b5dfb08967bba2a11"
  },
  {
    "url": "2014/03/12/python-bits---getting-started/index.html",
    "revision": "54c369c677cb0364fe54c0a7e59167fe"
  },
  {
    "url": "2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "3fc8e71c7892ba172a1f4d562ef66b13"
  },
  {
    "url": "2014/04/07/texting-while-driving/index.html",
    "revision": "247bb35e0ca3c4b2e2525fa444721546"
  },
  {
    "url": "2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "0eeff6d485f45d4e3a5c3eb2d5bda715"
  },
  {
    "url": "2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "5336dc72f4c84f26588f073dd4a1d176"
  },
  {
    "url": "2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "918da6723cb1ffd5d47b7f5badc1c99e"
  },
  {
    "url": "2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "c674787fedb03bddf71fd007ebcee8f9"
  },
  {
    "url": "2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "b0bff6d41833fb278d3752b6d69fdbde"
  },
  {
    "url": "2014/08/09/flavours-themes/index.html",
    "revision": "96baa8b286e8c322fb754eec263c4b31"
  },
  {
    "url": "2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "3348f680e247a945091ad8954dd6d002"
  },
  {
    "url": "2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "b1bfcba8c5cff215aaaacc7b8c9d2272"
  },
  {
    "url": "2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "8420062e0a2f57ded690ef59daa572cb"
  },
  {
    "url": "2014/08/16/stars-celebration/index.html",
    "revision": "0d2222363696890f80d8ee0967181353"
  },
  {
    "url": "2014/08/21/a.i.-international/index.html",
    "revision": "c7c944f82ec8a331abd4555874ad2cee"
  },
  {
    "url": "2014/09/10/giving-back/index.html",
    "revision": "6f5f5e2bb981eb872239eb650f59f90d"
  },
  {
    "url": "2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "a027666f541c84c45ad12aed57ddf98c"
  },
  {
    "url": "2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "0e08d87727decfd883b8eb2df33227e5"
  },
  {
    "url": "2014/09/22/review---limbo/index.html",
    "revision": "64301bd95f12fd98ace36a5a7ab5d968"
  },
  {
    "url": "2014/10/01/cshu/index.html",
    "revision": "905eb05915a3e3ed9b29c06296d86fd8"
  },
  {
    "url": "2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "8ccf8c5ce852734e18301f177af31313"
  },
  {
    "url": "2014/10/17/long-lighthearted-lists/index.html",
    "revision": "3ce8737fcc5e1b785174165f58e6c4a0"
  },
  {
    "url": "2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "06c8153df16d0d2a87d1be1c39808ef8"
  },
  {
    "url": "2014/10/26/dc-hack/index.html",
    "revision": "16f2426bb2a864e2c583726607502857"
  },
  {
    "url": "2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "cde2f4613a62c212bf2fd017cf63c69d"
  },
  {
    "url": "2014/11/10/study-guide---linked-lists/index.html",
    "revision": "d4cb0c67a54c15e14df758b1d3304887"
  },
  {
    "url": "2014/11/13/yes-hair-/index.html",
    "revision": "db8510b50db2c2c11330d9ec929d3a5a"
  },
  {
    "url": "2014/12/03/binary-trees--recursion/index.html",
    "revision": "5915f74d9ce5054e45275ddf511d679b"
  },
  {
    "url": "2014/12/17/inkling-1.1/index.html",
    "revision": "13e5c0422629b479314611ce9c93faee"
  },
  {
    "url": "2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "7976f977addd739d0f604ae76548193c"
  },
  {
    "url": "2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "aacf5f940922a1d5da06e3c366a556fe"
  },
  {
    "url": "2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "3a7dc5181eb86ca825d13e1e8f0533a7"
  },
  {
    "url": "2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "1a00f92874a37f81c5f5c4d74dd8971d"
  },
  {
    "url": "2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "4c2fc0dc1b1373af8a1e33f9bbe034a2"
  },
  {
    "url": "2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "2a60504fbbb62c16b86db16566b0a965"
  },
  {
    "url": "2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "296962af9d325ce5586a611e932197e1"
  },
  {
    "url": "2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "68f4abd116a405ee2dfbb7203279effc"
  },
  {
    "url": "2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "1c028ec266f5eb5654fbb478dd150343"
  },
  {
    "url": "2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "e78a2b91d87337ec555ddc072004221e"
  },
  {
    "url": "2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "56bc2473585faba76120222959f104aa"
  },
  {
    "url": "2015/01/06/interview-with-coding-house/index.html",
    "revision": "9c8ea275b0ca36a132d611f51a89acc3"
  },
  {
    "url": "2015/01/06/interview-with-designation/index.html",
    "revision": "c2a2deeab9b4522fa553851360964901"
  },
  {
    "url": "2015/01/06/interview-with-devleague/index.html",
    "revision": "f27dfe0ffca6b95374890c9a75b55198"
  },
  {
    "url": "2015/01/14/interview-with-makersquare/index.html",
    "revision": "be80cc65a452e5afcab2a9f7e7a95c1c"
  },
  {
    "url": "2015/01/30/aaai-2015/index.html",
    "revision": "4daaf7c5e28b379f944d6087d7a543ea"
  },
  {
    "url": "2015/01/30/adventures-with-aaai/index.html",
    "revision": "c853744f610f79d36c27dd1cd3142689"
  },
  {
    "url": "2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "5287e1b127d92572c6f935e547bc068e"
  },
  {
    "url": "2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "2d78f634381227371f8762354f74d31c"
  },
  {
    "url": "2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "6cf6c0448c22c567429f702f847f659c"
  },
  {
    "url": "2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "66c4e75c2222440d3eb0917751f7d84d"
  },
  {
    "url": "2015/02/15/that-tapia-conference/index.html",
    "revision": "502f4a85341644bbf7dd79b65d79e212"
  },
  {
    "url": "2015/02/21/tapia-2015/index.html",
    "revision": "3c2ad8575650c82ea7910fabab849f16"
  },
  {
    "url": "2015/03/01/jeopardy-template-/index.html",
    "revision": "05f92dd11818c84332304a48bd1edab9"
  },
  {
    "url": "2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "5f98a29318c34f3439e84339ec7135e4"
  },
  {
    "url": "2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "c8aea3ddb1e37788447b1c400730f4ef"
  },
  {
    "url": "2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "ab47925c4d47d9aebbf20ac3331bbfa4"
  },
  {
    "url": "2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "18d037ac096b2bbd6d4d1fbdfe64da60"
  },
  {
    "url": "2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "0e62bc069fc71ddccb097d26a037d474"
  },
  {
    "url": "2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "25dfe9b48d12a02de9a02e93f1964f7d"
  },
  {
    "url": "2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "98c758297b4bbad17c1d926c650df146"
  },
  {
    "url": "2015/04/17/vsgc-2015/index.html",
    "revision": "d15a6ea22c136a45559f86bf71c150fe"
  },
  {
    "url": "2015/04/18/sort-detective---solution-/index.html",
    "revision": "662d0ee8bf5adddae43b7ab65dbc8645"
  },
  {
    "url": "2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "274360478c31e31d655e04b9abbb3b27"
  },
  {
    "url": "2015/04/23/a.i.-movies-/index.html",
    "revision": "9f3ecf14fc5b4a660cc0efa812a51164"
  },
  {
    "url": "2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "c8b2811cb501ca95a8068314151c5016"
  },
  {
    "url": "2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "777286d0fd456e3090968a6112854501"
  },
  {
    "url": "2015/04/30/bebop.me-/index.html",
    "revision": "4af19dde42b00fca0040ce4661de7e3a"
  },
  {
    "url": "2015/05/17/ameot-/index.html",
    "revision": "ae874649b4222f7e595b49a7c724dd5f"
  },
  {
    "url": "2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "a371816642a0031509ede9e8d9709e34"
  },
  {
    "url": "2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "347cd49e6060af98288f3ec4125994f9"
  },
  {
    "url": "2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "bab47a66d190d2754b60718c1eb7f6b3"
  },
  {
    "url": "2015/05/26/the-guessing-game-️/index.html",
    "revision": "351b38b92467480c8ed41dd14f13e87d"
  },
  {
    "url": "2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "311d6c82afdeff32bd1dadd839cea3fe"
  },
  {
    "url": "2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "15afcc560e922d0ed2b57ff7b72711e8"
  },
  {
    "url": "2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "cd9dc6dd7b6b26dfc798986df2aa7be5"
  },
  {
    "url": "2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "9dad444ef8efbd1488f30a1fc45d3938"
  },
  {
    "url": "2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "994dcc2902b8f854ffe4560e9c2cc9a8"
  },
  {
    "url": "2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "ae3697645167376a45054d196e7b627c"
  },
  {
    "url": "2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "a071bd03b99a3c9335f556a97b8865ae"
  },
  {
    "url": "2015/07/25/sally-conference/index.html",
    "revision": "8a36012cca374c4421764beafe506fbc"
  },
  {
    "url": "2015/08/05/robopocalypse-/index.html",
    "revision": "6da16c5051030f942f6ca0aea0922ab0"
  },
  {
    "url": "2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "fee32ace05e7f66d589a6dcc9973384b"
  },
  {
    "url": "2015/08/11/rankme-/index.html",
    "revision": "52c018dfca45ed4f70c75ec44f8346af"
  },
  {
    "url": "2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "5b904845d1ccc7da3fd4c2a3a8eb823f"
  },
  {
    "url": "2015/08/20/readme-template-for-github-/index.html",
    "revision": "c0689a8818e15c6a229df41e8ccfb367"
  },
  {
    "url": "2015/08/26/hiredot-/index.html",
    "revision": "c3bfff9b0038b74a21bc3678d4ef6069"
  },
  {
    "url": "2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "5aef7356161eb9e1f33cc67573f00a94"
  },
  {
    "url": "2015/09/25/discover-goldman-sachs/index.html",
    "revision": "bdc0eb8475ede037dcb91540a2c4abc5"
  },
  {
    "url": "2015/10/09/designlab-submissions-/index.html",
    "revision": "1545bd2b6ebd5383c3a0765beb4861e7"
  },
  {
    "url": "2015/10/09/designlab/index.html",
    "revision": "213c18e928fbbf1e65c638eeb2cce025"
  },
  {
    "url": "2015/10/20/andre-smith/index.html",
    "revision": "fc8f00dd683c72ff260d187bbe7df357"
  },
  {
    "url": "2015/10/21/my-designlab-experience-/index.html",
    "revision": "98057a0b9193f22f10438aa648bcf3dc"
  },
  {
    "url": "2015/10/24/hack-the-vote-/index.html",
    "revision": "4b966522e04c2dd0f796f352f5f70bc5"
  },
  {
    "url": "2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "85e20a9eaaf76af5fb459654f933fb6b"
  },
  {
    "url": "2015/11/11/meetups-nearby-/index.html",
    "revision": "af0596a9f15fc532ba9c892f0afd0e20"
  },
  {
    "url": "2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "0db8007b35ce84c03b083cb396b9f358"
  },
  {
    "url": "2015/11/14/hr-devfest/index.html",
    "revision": "7e1d69632f6227dc9cc8f663d3e0c93c"
  },
  {
    "url": "2015/11/15/aaai/index.html",
    "revision": "89a4246d446ef755fe242524cd010c93"
  },
  {
    "url": "2015/11/15/stars-computing-corps/index.html",
    "revision": "5a3fe922ca07d43a67e143e8d071f809"
  },
  {
    "url": "2015/11/20/discover-accenture/index.html",
    "revision": "25746732609ab43bc84a8830f0a3f55a"
  },
  {
    "url": "2015/12/02/dear-holberton-/index.html",
    "revision": "52badf51b088525cee58d8dc28da3b0d"
  },
  {
    "url": "2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "61c52b876726b77a4b1417a6fc81a527"
  },
  {
    "url": "2015/12/10/ai-choo-ashe/index.html",
    "revision": "34613c6bd7a545bce207fbbba0936278"
  },
  {
    "url": "2015/12/12/kelli-white/index.html",
    "revision": "a70318566b37ba527133854a19d584ab"
  },
  {
    "url": "2015/12/13/hour-of-code/index.html",
    "revision": "3426a1bb61eaf2d73dfc3c358014a4e4"
  },
  {
    "url": "2015/12/18/alex-bradshaw/index.html",
    "revision": "4b0a2646f5737709c270cc163b72232f"
  },
  {
    "url": "2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "53149666feb50aa893f9408a63f12de3"
  },
  {
    "url": "2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "5a91fcdc77bd14907c606f94deb5fe2a"
  },
  {
    "url": "2016/01/05/kimberly-logsdon/index.html",
    "revision": "de9f757c60e431dcf993aea02e21854b"
  },
  {
    "url": "2016/01/11/meetup-dice-/index.html",
    "revision": "39252c241fca95ecebc93ca609b446aa"
  },
  {
    "url": "2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "78342528ca0f1f593035bd7aeaa16c67"
  },
  {
    "url": "2016/01/18/built-in-norfolk/index.html",
    "revision": "f8394769266ab3ac9672edf36a9d5cf8"
  },
  {
    "url": "2016/01/18/norfolk.js-meetup/index.html",
    "revision": "f4c594da96d3f2eebbe4ebfff8379202"
  },
  {
    "url": "2016/01/31/hoya-hacks/index.html",
    "revision": "e5aacea69e7d3caa31c3a5871360c127"
  },
  {
    "url": "2016/01/31/life-at-home-/index.html",
    "revision": "02ab8b743bb18e255f35ac0fb41b9e42"
  },
  {
    "url": "2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "7b6955d9aed966d00db3135a9a87a418"
  },
  {
    "url": "2016/02/05/8020-software-consulting/index.html",
    "revision": "325f67207bc11c26519a8973f17ceaef"
  },
  {
    "url": "2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "73595085819e8f713ce29a295df94328"
  },
  {
    "url": "2016/02/05/hacku-4/index.html",
    "revision": "32b10f2862d3ba114cec43906fb3cc91"
  },
  {
    "url": "2016/02/12/acm/index.html",
    "revision": "e755d0040f8ee51bbc89227a15bcdc26"
  },
  {
    "url": "2016/02/14/treehacks/index.html",
    "revision": "c311e5ce41bc9478bb7f66218946e741"
  },
  {
    "url": "2016/02/17/developerweek/index.html",
    "revision": "79428a36365c67fae95ce98afcec9bdd"
  },
  {
    "url": "2016/02/23/react.js-conf/index.html",
    "revision": "b8d24c68ff7f5cbe99d530de10da708b"
  },
  {
    "url": "2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "9539a29bc192d6f89668e7d164a354fc"
  },
  {
    "url": "2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "5008361117f60ae6a4e83020cfe79e48"
  },
  {
    "url": "2016/03/10/fluent-conference/index.html",
    "revision": "0443543577485e5e8c35e1c6ea18fe6b"
  },
  {
    "url": "2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "dcad08da393406a9990f4c9643022779"
  },
  {
    "url": "2016/04/01/angel-riera/index.html",
    "revision": "857e0522cb721a2c68b17bf3a4ef3c46"
  },
  {
    "url": "2016/04/07/mike-jonas/index.html",
    "revision": "926f02959954584298dfdbadbbbeee99"
  },
  {
    "url": "2016/04/09/innovation-hackathon/index.html",
    "revision": "25b478d3ba45756d8a2500c090f0ce8a"
  },
  {
    "url": "2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "7ef4e22852615004f0da81ac232148d3"
  },
  {
    "url": "2016/04/30/schools-out-️/index.html",
    "revision": "edbc9e17759563526d94b64e329e1e0a"
  },
  {
    "url": "2016/05/04/hampton-university/index.html",
    "revision": "b08a4a132b9567bfe8420a200290a918"
  },
  {
    "url": "2016/05/13/revolutionconf/index.html",
    "revision": "d8d8a52dc36195f243ad5633af97484b"
  },
  {
    "url": "2016/05/24/pak-chu/index.html",
    "revision": "fd4841a286dbe9b74d93bbef05be55de"
  },
  {
    "url": "2016/05/25/free-code-camp/index.html",
    "revision": "3346031fb931ed5dbd6aba0267218a7b"
  },
  {
    "url": "2016/06/06/wen-tran/index.html",
    "revision": "e70335203c0705e48b86ee1f6e28f84d"
  },
  {
    "url": "2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "8c126f653a1a24303ee74cceb263e09d"
  },
  {
    "url": "2016/06/29/accenture-slc/index.html",
    "revision": "6b9354e67056a739005e0ddf6dab7253"
  },
  {
    "url": "2016/07/30/npmcamp/index.html",
    "revision": "b6d88e57d919b99c8b3ea41b169cb8cc"
  },
  {
    "url": "2016/08/01/lavie-ruan/index.html",
    "revision": "e5840f0f5e743ffffbf2a14650e33cc3"
  },
  {
    "url": "2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "4995186dd0d4e76f1b12b69ae0d8537e"
  },
  {
    "url": "2016/08/26/fullstack-academy/index.html",
    "revision": "4fb154842b89d8e99dbe592d5689b24f"
  },
  {
    "url": "2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "dc5c060c79564c82499caee100e1c931"
  },
  {
    "url": "2016/09/16/tapia-2016/index.html",
    "revision": "7fdb39c9f9bcfa07aa701a6186628cd4"
  },
  {
    "url": "2016/09/27/github-repos---mashup-/index.html",
    "revision": "788e564d09b7ecc3b10eb668544de1a4"
  },
  {
    "url": "2016/10/01/designhackathon/index.html",
    "revision": "30704a3a3cbaf177f6b46003d1a94b33"
  },
  {
    "url": "2016/10/01/the-meggs-case-/index.html",
    "revision": "3006194d2da805352b8ff2f08949c636"
  },
  {
    "url": "2016/10/04/cornell-tech-logos-/index.html",
    "revision": "aa45b36e94e1f591c594f51b66d54e88"
  },
  {
    "url": "2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "8a9778233b5eb6ff17dfa6445b4c1092"
  },
  {
    "url": "2016/10/09/kent-hack-enough/index.html",
    "revision": "64fc3293cd1510a22331c74bf6083025"
  },
  {
    "url": "2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "c0000c9968b7df6a4ad7ea29c23dcb80"
  },
  {
    "url": "2016/10/13/techweek-nyc/index.html",
    "revision": "3880fb6b9ca29dfd34363f26da2b7822"
  },
  {
    "url": "2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "cac3c3490ff272e43299888bc7584335"
  },
  {
    "url": "2016/11/18/product-studio-/index.html",
    "revision": "6d9bc34c878ee148836294d880fd913a"
  },
  {
    "url": "2016/11/30/witny/index.html",
    "revision": "20ff1959f12ed4c2bfac0b365e08aa05"
  },
  {
    "url": "2016/12/01/duolingo-delights-/index.html",
    "revision": "29ce5bda6a6705a2c8bedaf6924c5412"
  },
  {
    "url": "2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "04cfae4e03382937376b6f267b913c79"
  },
  {
    "url": "2016/12/08/hour-of-code/index.html",
    "revision": "7472a83baf86b2eca1cfc02be35e0bed"
  },
  {
    "url": "2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "74bf1c962b280ec9ee9cb03492f24faf"
  },
  {
    "url": "2016/12/10/alterconf-nyc-/index.html",
    "revision": "81bc5034b12cdb479efbc7de7b921ae1"
  },
  {
    "url": "2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "03523c500ed038941581a3db5da09afe"
  },
  {
    "url": "2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "5199e293dc68b192edd354b61921b1f6"
  },
  {
    "url": "2016/12/17/norfolk.js/index.html",
    "revision": "20c8dae6a5ee1f4ef2eee61e9aea2d2a"
  },
  {
    "url": "2016/12/17/product-school/index.html",
    "revision": "6c08428a0eaf13b23179400413eea009"
  },
  {
    "url": "2017/01/07/updated-github-page-/index.html",
    "revision": "9d8c093677b059d8a26a5325b6dc521b"
  },
  {
    "url": "2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "f62a4e555041cb3bd3c4fd4cdc041312"
  },
  {
    "url": "2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "38703c22a01ab65b4226470711a29489"
  },
  {
    "url": "2017/01/21/huge-school-application-2017/index.html",
    "revision": "0d94dcec7ecc2efc0b3990c23aae3402"
  },
  {
    "url": "2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "e2da4d264ccff3f24ac702af897b5e64"
  },
  {
    "url": "2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "a64430fb05e4ab139cb982c97c658851"
  },
  {
    "url": "2017/01/30/cute-things-we-do-/index.html",
    "revision": "ae6058625be11868e28c82c6ec777b82"
  },
  {
    "url": "2017/02/01/franklin-lee/index.html",
    "revision": "a614c7aebf7b1ebcecc2fca0e99f9b2c"
  },
  {
    "url": "2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "df458d6203115c112426b75a0faa8b00"
  },
  {
    "url": "2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "02f71fd47794b230af32c71eb81982f7"
  },
  {
    "url": "2017/02/19/hackysu-2017/index.html",
    "revision": "b3fe97247b8c7a39284b8df5e9c10928"
  },
  {
    "url": "2017/02/24/startup-studio/index.html",
    "revision": "d3b49c5f7959ece60ab2b6a0ec25dc07"
  },
  {
    "url": "2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "c2b23f76407830d6d5b2bbe9ba121e6a"
  },
  {
    "url": "2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "74d15ddc2db345bfe2ecfc6b1c50847b"
  },
  {
    "url": "2017/03/14/connective-media/index.html",
    "revision": "b0f57bf239dbd9b06ee6d3678c19f65a"
  },
  {
    "url": "2017/03/15/accepted-to-design-inc./index.html",
    "revision": "07bdf4b568a329ed6f731c1024a0757a"
  },
  {
    "url": "2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "29056a31b2538e4589b95ba4f5ec3333"
  },
  {
    "url": "2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "955b0d5dedc52a11ae51c4570fa0d5e7"
  },
  {
    "url": "2017/03/17/apprenticeships-/index.html",
    "revision": "588934a2f981af85db0e45d23a411cdf"
  },
  {
    "url": "2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "779279bee3157f49ea5deb2b2aedbdaf"
  },
  {
    "url": "2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "6172afcfbeea2d5d0bafd89c72ece41c"
  },
  {
    "url": "2017/04/14/pathfinder/index.html",
    "revision": "f52de505a45a57f623fa528fad82e241"
  },
  {
    "url": "2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "f4004c46e7ccbd1b93682dc0cbfda110"
  },
  {
    "url": "2017/04/30/codenow/index.html",
    "revision": "efcd733d87a4c7d2aca23d2d395b670c"
  },
  {
    "url": "2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "aa1863876fbd118ab50cedf8a27e3b15"
  },
  {
    "url": "2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "75525534f7b1fe45eb527138f53f2a1b"
  },
  {
    "url": "2017/05/26/cornell-tech/index.html",
    "revision": "741a35eb8de6e6b7cd24a5d2dbf6eded"
  },
  {
    "url": "2017/06/07/accenture-liquid-studio/index.html",
    "revision": "81952a3be348d85cddc44d0808558ba0"
  },
  {
    "url": "2017/06/16/team-monarch/index.html",
    "revision": "13bdc7cf6d8f25cd373c3b1ea88bbd0c"
  },
  {
    "url": "2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "a0ab115451238637f933da9b5337e851"
  },
  {
    "url": "2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "0be98bc857c5987589c9e93dc90ae0c0"
  },
  {
    "url": "2017/08/28/new-blog-new-problems-/index.html",
    "revision": "ce2f0e1d4f3bcc284d0de3be59d2a7f4"
  },
  {
    "url": "2017/09/16/affect-conf/index.html",
    "revision": "a63f3dffc9fcea8d8ad9aafb16de9836"
  },
  {
    "url": "2017/09/27/strange-loop-2017/index.html",
    "revision": "46ce0f7a5ba360fa39ff5426d73c7215"
  },
  {
    "url": "2017/10/22/pwa-roadshow/index.html",
    "revision": "ed57cb399e2a86b54c1bfec6f519b9a7"
  },
  {
    "url": "2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "9d12ac602885f375c79048dab0c59f7c"
  },
  {
    "url": "404.html",
    "revision": "774af5a5033cbe5fc47157724285718a"
  },
  {
    "url": "about/colophon/index.html",
    "revision": "ee8281b72645e858e1550754d246aa37"
  },
  {
    "url": "about/github-repo/index.html",
    "revision": "459c72e225ab660be0030a86f9a4fa2b"
  },
  {
    "url": "about/index.html",
    "revision": "3961e7cc7a5c53d2ad5a75ab93a6969d"
  },
  {
    "url": "about/resume/index.html",
    "revision": "6b06ea15d1d96333f8dbbf338acc0063"
  },
  {
    "url": "about/travels/index.html",
    "revision": "0b6128144683470528ffcadfacf8a343"
  },
  {
    "url": "about/what-i-use/index.html",
    "revision": "5bfb5f818aa4ab5e1c011e4d1e44e147"
  },
  {
    "url": "adventures/index.html",
    "revision": "6c8127860ff986e4f4626ce6d237e0e7"
  },
  {
    "url": "amp/2008/06/01/middle-school-poems-️/index.html",
    "revision": "35943c7fbc6f62a13ac52ca1f1b59fc6"
  },
  {
    "url": "amp/2009/09/22/ghent-school/index.html",
    "revision": "9bfe8b0a97a79eca3ec173773f9f386b"
  },
  {
    "url": "amp/2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "122daefadd3d2f52724cbf3908d88765"
  },
  {
    "url": "amp/2010/05/12/desiring-the-casual-/index.html",
    "revision": "4601662cb68af8dc498d8ebcc7b26080"
  },
  {
    "url": "amp/2010/08/03/enders-game---book-review-/index.html",
    "revision": "58fa3c87f3a74b8e2a7bb598c0a1c272"
  },
  {
    "url": "amp/2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "93908ca74ff433eac3fff1b197033698"
  },
  {
    "url": "amp/2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "70bbc593bbf42f30102b916b0315b1c3"
  },
  {
    "url": "amp/2011/08/07/isce-2011/index.html",
    "revision": "aabe0613d4abed3ab6ac1c9272ac99df"
  },
  {
    "url": "amp/2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "5cbfbaa13ed203f5deb804d655095077"
  },
  {
    "url": "amp/2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "16c0b4aa59560045bfd58e4b0776f78d"
  },
  {
    "url": "amp/2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "d85c558645f805ae866f95d712a41d2f"
  },
  {
    "url": "amp/2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "b7083c10dce352620b3ba1827399e207"
  },
  {
    "url": "amp/2012/03/01/stardust---book-review-/index.html",
    "revision": "67807ca32e0b63a745d3b2a90dad2c5b"
  },
  {
    "url": "amp/2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "0c4caf1849461231ab8ac498521a811d"
  },
  {
    "url": "amp/2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "d9c1d8fc8de9f5bce841056ee4a3d23d"
  },
  {
    "url": "amp/2012/08/10/odu-vmasc/index.html",
    "revision": "559400dc4d01a8f00521a91a856c3d7d"
  },
  {
    "url": "amp/2012/08/14/school-for-field-studies/index.html",
    "revision": "23a74c7e6bedc79506024ee832153e06"
  },
  {
    "url": "amp/2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "c3a8cb05029680e25a45cd1e46c9429f"
  },
  {
    "url": "amp/2013/06/13/maury-high-school/index.html",
    "revision": "9c0b66bee461d01586976649a10975a8"
  },
  {
    "url": "amp/2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "6a96a2579248c31037fa27853f9abddf"
  },
  {
    "url": "amp/2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "e4cc36b632d0df6e6a1c25b71a63375c"
  },
  {
    "url": "amp/2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "2cbe5fd06a03ceb19b50e837ac120063"
  },
  {
    "url": "amp/2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "e52f41199055dfffe6f529af9630d952"
  },
  {
    "url": "amp/2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "f79252502f28936c1d1d705f6cd9f53e"
  },
  {
    "url": "amp/2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "daf1f1647fd3b49a3dcba53d4b290e41"
  },
  {
    "url": "amp/2013/08/02/islc-2013/index.html",
    "revision": "e362dd0f0f54976bf6a9a40e6fb91621"
  },
  {
    "url": "amp/2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "06c35f49a25d93ada2c8dbc894f55439"
  },
  {
    "url": "amp/2013/08/03/potc---chest-riddle-/index.html",
    "revision": "2fefc84358b7908546e25e29349b7e3c"
  },
  {
    "url": "amp/2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "04b323e3cb4c6176805044c940ce76cf"
  },
  {
    "url": "amp/2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "ef7cc4beb1ef9ff4e6003f29ce7901cf"
  },
  {
    "url": "amp/2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "5e2d5dcee11777c9a0fc78d97f25d17b"
  },
  {
    "url": "amp/2013/09/20/c-bits---getting-started/index.html",
    "revision": "ddcdcae2f771fa1dd241e446fc0e34b1"
  },
  {
    "url": "amp/2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "f3af39dc2d1238a7a9b53b909f799dc1"
  },
  {
    "url": "amp/2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "f8d7c33ca6e8a6d230bfc07ae50ba85e"
  },
  {
    "url": "amp/2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "40af076385f61321c365f4948e4fc660"
  },
  {
    "url": "amp/2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "bb91f00f4be76d858c70606c40d8c611"
  },
  {
    "url": "amp/2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "ad387127f727b2137088cdcc673c0d82"
  },
  {
    "url": "amp/2014/02/21/working-smarter-not-harder/index.html",
    "revision": "abce279046164ef6937c404f65188d10"
  },
  {
    "url": "amp/2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "ba30bb371cba1a02357e7dda88d51d17"
  },
  {
    "url": "amp/2014/03/03/ah-life./index.html",
    "revision": "ea5cd6ba3f155254ad5def54d8bae80c"
  },
  {
    "url": "amp/2014/03/03/granny-said.../index.html",
    "revision": "864beee23c358827c82471d013d01689"
  },
  {
    "url": "amp/2014/03/04/the-best-50-insults/index.html",
    "revision": "948cdfd87982db9dc4d0235bd317312b"
  },
  {
    "url": "amp/2014/03/12/20-laws-of-power/index.html",
    "revision": "a4f768f736801762f567f85fc2e2939f"
  },
  {
    "url": "amp/2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "bc0fed04b4cc1ffbda9fa7c8fdc022a4"
  },
  {
    "url": "amp/2014/03/12/java-bits---getting-started/index.html",
    "revision": "c5ce6d706fdb849b5dfb08967bba2a11"
  },
  {
    "url": "amp/2014/03/12/python-bits---getting-started/index.html",
    "revision": "54c369c677cb0364fe54c0a7e59167fe"
  },
  {
    "url": "amp/2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "3fc8e71c7892ba172a1f4d562ef66b13"
  },
  {
    "url": "amp/2014/04/07/texting-while-driving/index.html",
    "revision": "247bb35e0ca3c4b2e2525fa444721546"
  },
  {
    "url": "amp/2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "0eeff6d485f45d4e3a5c3eb2d5bda715"
  },
  {
    "url": "amp/2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "5336dc72f4c84f26588f073dd4a1d176"
  },
  {
    "url": "amp/2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "918da6723cb1ffd5d47b7f5badc1c99e"
  },
  {
    "url": "amp/2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "c674787fedb03bddf71fd007ebcee8f9"
  },
  {
    "url": "amp/2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "b0bff6d41833fb278d3752b6d69fdbde"
  },
  {
    "url": "amp/2014/08/09/flavours-themes/index.html",
    "revision": "96baa8b286e8c322fb754eec263c4b31"
  },
  {
    "url": "amp/2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "3348f680e247a945091ad8954dd6d002"
  },
  {
    "url": "amp/2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "b1bfcba8c5cff215aaaacc7b8c9d2272"
  },
  {
    "url": "amp/2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "8420062e0a2f57ded690ef59daa572cb"
  },
  {
    "url": "amp/2014/08/16/stars-celebration/index.html",
    "revision": "0d2222363696890f80d8ee0967181353"
  },
  {
    "url": "amp/2014/08/21/a.i.-international/index.html",
    "revision": "c7c944f82ec8a331abd4555874ad2cee"
  },
  {
    "url": "amp/2014/09/10/giving-back/index.html",
    "revision": "6f5f5e2bb981eb872239eb650f59f90d"
  },
  {
    "url": "amp/2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "a027666f541c84c45ad12aed57ddf98c"
  },
  {
    "url": "amp/2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "0e08d87727decfd883b8eb2df33227e5"
  },
  {
    "url": "amp/2014/09/22/review---limbo/index.html",
    "revision": "64301bd95f12fd98ace36a5a7ab5d968"
  },
  {
    "url": "amp/2014/10/01/cshu/index.html",
    "revision": "905eb05915a3e3ed9b29c06296d86fd8"
  },
  {
    "url": "amp/2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "8ccf8c5ce852734e18301f177af31313"
  },
  {
    "url": "amp/2014/10/17/long-lighthearted-lists/index.html",
    "revision": "3ce8737fcc5e1b785174165f58e6c4a0"
  },
  {
    "url": "amp/2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "06c8153df16d0d2a87d1be1c39808ef8"
  },
  {
    "url": "amp/2014/10/26/dc-hack/index.html",
    "revision": "16f2426bb2a864e2c583726607502857"
  },
  {
    "url": "amp/2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "cde2f4613a62c212bf2fd017cf63c69d"
  },
  {
    "url": "amp/2014/11/10/study-guide---linked-lists/index.html",
    "revision": "d4cb0c67a54c15e14df758b1d3304887"
  },
  {
    "url": "amp/2014/11/13/yes-hair-/index.html",
    "revision": "db8510b50db2c2c11330d9ec929d3a5a"
  },
  {
    "url": "amp/2014/12/03/binary-trees--recursion/index.html",
    "revision": "5915f74d9ce5054e45275ddf511d679b"
  },
  {
    "url": "amp/2014/12/17/inkling-1.1/index.html",
    "revision": "13e5c0422629b479314611ce9c93faee"
  },
  {
    "url": "amp/2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "7976f977addd739d0f604ae76548193c"
  },
  {
    "url": "amp/2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "aacf5f940922a1d5da06e3c366a556fe"
  },
  {
    "url": "amp/2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "3a7dc5181eb86ca825d13e1e8f0533a7"
  },
  {
    "url": "amp/2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "1a00f92874a37f81c5f5c4d74dd8971d"
  },
  {
    "url": "amp/2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "4c2fc0dc1b1373af8a1e33f9bbe034a2"
  },
  {
    "url": "amp/2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "2a60504fbbb62c16b86db16566b0a965"
  },
  {
    "url": "amp/2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "296962af9d325ce5586a611e932197e1"
  },
  {
    "url": "amp/2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "68f4abd116a405ee2dfbb7203279effc"
  },
  {
    "url": "amp/2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "1c028ec266f5eb5654fbb478dd150343"
  },
  {
    "url": "amp/2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "e78a2b91d87337ec555ddc072004221e"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "56bc2473585faba76120222959f104aa"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-house/index.html",
    "revision": "9c8ea275b0ca36a132d611f51a89acc3"
  },
  {
    "url": "amp/2015/01/06/interview-with-designation/index.html",
    "revision": "c2a2deeab9b4522fa553851360964901"
  },
  {
    "url": "amp/2015/01/06/interview-with-devleague/index.html",
    "revision": "f27dfe0ffca6b95374890c9a75b55198"
  },
  {
    "url": "amp/2015/01/14/interview-with-makersquare/index.html",
    "revision": "be80cc65a452e5afcab2a9f7e7a95c1c"
  },
  {
    "url": "amp/2015/01/30/aaai-2015/index.html",
    "revision": "4daaf7c5e28b379f944d6087d7a543ea"
  },
  {
    "url": "amp/2015/01/30/adventures-with-aaai/index.html",
    "revision": "c853744f610f79d36c27dd1cd3142689"
  },
  {
    "url": "amp/2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "5287e1b127d92572c6f935e547bc068e"
  },
  {
    "url": "amp/2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "2d78f634381227371f8762354f74d31c"
  },
  {
    "url": "amp/2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "6cf6c0448c22c567429f702f847f659c"
  },
  {
    "url": "amp/2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "66c4e75c2222440d3eb0917751f7d84d"
  },
  {
    "url": "amp/2015/02/15/that-tapia-conference/index.html",
    "revision": "502f4a85341644bbf7dd79b65d79e212"
  },
  {
    "url": "amp/2015/02/21/tapia-2015/index.html",
    "revision": "3c2ad8575650c82ea7910fabab849f16"
  },
  {
    "url": "amp/2015/03/01/jeopardy-template-/index.html",
    "revision": "05f92dd11818c84332304a48bd1edab9"
  },
  {
    "url": "amp/2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "5f98a29318c34f3439e84339ec7135e4"
  },
  {
    "url": "amp/2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "c8aea3ddb1e37788447b1c400730f4ef"
  },
  {
    "url": "amp/2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "ab47925c4d47d9aebbf20ac3331bbfa4"
  },
  {
    "url": "amp/2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "18d037ac096b2bbd6d4d1fbdfe64da60"
  },
  {
    "url": "amp/2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "0e62bc069fc71ddccb097d26a037d474"
  },
  {
    "url": "amp/2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "25dfe9b48d12a02de9a02e93f1964f7d"
  },
  {
    "url": "amp/2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "98c758297b4bbad17c1d926c650df146"
  },
  {
    "url": "amp/2015/04/17/vsgc-2015/index.html",
    "revision": "d15a6ea22c136a45559f86bf71c150fe"
  },
  {
    "url": "amp/2015/04/18/sort-detective---solution-/index.html",
    "revision": "662d0ee8bf5adddae43b7ab65dbc8645"
  },
  {
    "url": "amp/2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "274360478c31e31d655e04b9abbb3b27"
  },
  {
    "url": "amp/2015/04/23/a.i.-movies-/index.html",
    "revision": "9f3ecf14fc5b4a660cc0efa812a51164"
  },
  {
    "url": "amp/2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "c8b2811cb501ca95a8068314151c5016"
  },
  {
    "url": "amp/2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "777286d0fd456e3090968a6112854501"
  },
  {
    "url": "amp/2015/04/30/bebop.me-/index.html",
    "revision": "4af19dde42b00fca0040ce4661de7e3a"
  },
  {
    "url": "amp/2015/05/17/ameot-/index.html",
    "revision": "ae874649b4222f7e595b49a7c724dd5f"
  },
  {
    "url": "amp/2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "a371816642a0031509ede9e8d9709e34"
  },
  {
    "url": "amp/2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "347cd49e6060af98288f3ec4125994f9"
  },
  {
    "url": "amp/2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "bab47a66d190d2754b60718c1eb7f6b3"
  },
  {
    "url": "amp/2015/05/26/the-guessing-game-️/index.html",
    "revision": "351b38b92467480c8ed41dd14f13e87d"
  },
  {
    "url": "amp/2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "311d6c82afdeff32bd1dadd839cea3fe"
  },
  {
    "url": "amp/2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "15afcc560e922d0ed2b57ff7b72711e8"
  },
  {
    "url": "amp/2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "cd9dc6dd7b6b26dfc798986df2aa7be5"
  },
  {
    "url": "amp/2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "9dad444ef8efbd1488f30a1fc45d3938"
  },
  {
    "url": "amp/2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "994dcc2902b8f854ffe4560e9c2cc9a8"
  },
  {
    "url": "amp/2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "ae3697645167376a45054d196e7b627c"
  },
  {
    "url": "amp/2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "a071bd03b99a3c9335f556a97b8865ae"
  },
  {
    "url": "amp/2015/07/25/sally-conference/index.html",
    "revision": "8a36012cca374c4421764beafe506fbc"
  },
  {
    "url": "amp/2015/08/05/robopocalypse-/index.html",
    "revision": "6da16c5051030f942f6ca0aea0922ab0"
  },
  {
    "url": "amp/2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "fee32ace05e7f66d589a6dcc9973384b"
  },
  {
    "url": "amp/2015/08/11/rankme-/index.html",
    "revision": "52c018dfca45ed4f70c75ec44f8346af"
  },
  {
    "url": "amp/2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "5b904845d1ccc7da3fd4c2a3a8eb823f"
  },
  {
    "url": "amp/2015/08/20/readme-template-for-github-/index.html",
    "revision": "c0689a8818e15c6a229df41e8ccfb367"
  },
  {
    "url": "amp/2015/08/26/hiredot-/index.html",
    "revision": "c3bfff9b0038b74a21bc3678d4ef6069"
  },
  {
    "url": "amp/2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "5aef7356161eb9e1f33cc67573f00a94"
  },
  {
    "url": "amp/2015/09/25/discover-goldman-sachs/index.html",
    "revision": "bdc0eb8475ede037dcb91540a2c4abc5"
  },
  {
    "url": "amp/2015/10/09/designlab-submissions-/index.html",
    "revision": "1545bd2b6ebd5383c3a0765beb4861e7"
  },
  {
    "url": "amp/2015/10/09/designlab/index.html",
    "revision": "213c18e928fbbf1e65c638eeb2cce025"
  },
  {
    "url": "amp/2015/10/20/andre-smith/index.html",
    "revision": "fc8f00dd683c72ff260d187bbe7df357"
  },
  {
    "url": "amp/2015/10/21/my-designlab-experience-/index.html",
    "revision": "98057a0b9193f22f10438aa648bcf3dc"
  },
  {
    "url": "amp/2015/10/24/hack-the-vote-/index.html",
    "revision": "4b966522e04c2dd0f796f352f5f70bc5"
  },
  {
    "url": "amp/2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "85e20a9eaaf76af5fb459654f933fb6b"
  },
  {
    "url": "amp/2015/11/11/meetups-nearby-/index.html",
    "revision": "af0596a9f15fc532ba9c892f0afd0e20"
  },
  {
    "url": "amp/2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "0db8007b35ce84c03b083cb396b9f358"
  },
  {
    "url": "amp/2015/11/14/hr-devfest/index.html",
    "revision": "7e1d69632f6227dc9cc8f663d3e0c93c"
  },
  {
    "url": "amp/2015/11/15/aaai/index.html",
    "revision": "89a4246d446ef755fe242524cd010c93"
  },
  {
    "url": "amp/2015/11/15/stars-computing-corps/index.html",
    "revision": "5a3fe922ca07d43a67e143e8d071f809"
  },
  {
    "url": "amp/2015/11/20/discover-accenture/index.html",
    "revision": "25746732609ab43bc84a8830f0a3f55a"
  },
  {
    "url": "amp/2015/12/02/dear-holberton-/index.html",
    "revision": "52badf51b088525cee58d8dc28da3b0d"
  },
  {
    "url": "amp/2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "61c52b876726b77a4b1417a6fc81a527"
  },
  {
    "url": "amp/2015/12/10/ai-choo-ashe/index.html",
    "revision": "34613c6bd7a545bce207fbbba0936278"
  },
  {
    "url": "amp/2015/12/12/kelli-white/index.html",
    "revision": "a70318566b37ba527133854a19d584ab"
  },
  {
    "url": "amp/2015/12/13/hour-of-code/index.html",
    "revision": "3426a1bb61eaf2d73dfc3c358014a4e4"
  },
  {
    "url": "amp/2015/12/18/alex-bradshaw/index.html",
    "revision": "4b0a2646f5737709c270cc163b72232f"
  },
  {
    "url": "amp/2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "53149666feb50aa893f9408a63f12de3"
  },
  {
    "url": "amp/2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "5a91fcdc77bd14907c606f94deb5fe2a"
  },
  {
    "url": "amp/2016/01/05/kimberly-logsdon/index.html",
    "revision": "de9f757c60e431dcf993aea02e21854b"
  },
  {
    "url": "amp/2016/01/11/meetup-dice-/index.html",
    "revision": "39252c241fca95ecebc93ca609b446aa"
  },
  {
    "url": "amp/2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "78342528ca0f1f593035bd7aeaa16c67"
  },
  {
    "url": "amp/2016/01/18/built-in-norfolk/index.html",
    "revision": "f8394769266ab3ac9672edf36a9d5cf8"
  },
  {
    "url": "amp/2016/01/18/norfolk.js-meetup/index.html",
    "revision": "f4c594da96d3f2eebbe4ebfff8379202"
  },
  {
    "url": "amp/2016/01/31/hoya-hacks/index.html",
    "revision": "e5aacea69e7d3caa31c3a5871360c127"
  },
  {
    "url": "amp/2016/01/31/life-at-home-/index.html",
    "revision": "02ab8b743bb18e255f35ac0fb41b9e42"
  },
  {
    "url": "amp/2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "7b6955d9aed966d00db3135a9a87a418"
  },
  {
    "url": "amp/2016/02/05/8020-software-consulting/index.html",
    "revision": "325f67207bc11c26519a8973f17ceaef"
  },
  {
    "url": "amp/2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "73595085819e8f713ce29a295df94328"
  },
  {
    "url": "amp/2016/02/05/hacku-4/index.html",
    "revision": "32b10f2862d3ba114cec43906fb3cc91"
  },
  {
    "url": "amp/2016/02/12/acm/index.html",
    "revision": "e755d0040f8ee51bbc89227a15bcdc26"
  },
  {
    "url": "amp/2016/02/14/treehacks/index.html",
    "revision": "c311e5ce41bc9478bb7f66218946e741"
  },
  {
    "url": "amp/2016/02/17/developerweek/index.html",
    "revision": "79428a36365c67fae95ce98afcec9bdd"
  },
  {
    "url": "amp/2016/02/23/react.js-conf/index.html",
    "revision": "b8d24c68ff7f5cbe99d530de10da708b"
  },
  {
    "url": "amp/2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "9539a29bc192d6f89668e7d164a354fc"
  },
  {
    "url": "amp/2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "5008361117f60ae6a4e83020cfe79e48"
  },
  {
    "url": "amp/2016/03/10/fluent-conference/index.html",
    "revision": "0443543577485e5e8c35e1c6ea18fe6b"
  },
  {
    "url": "amp/2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "dcad08da393406a9990f4c9643022779"
  },
  {
    "url": "amp/2016/04/01/angel-riera/index.html",
    "revision": "857e0522cb721a2c68b17bf3a4ef3c46"
  },
  {
    "url": "amp/2016/04/07/mike-jonas/index.html",
    "revision": "926f02959954584298dfdbadbbbeee99"
  },
  {
    "url": "amp/2016/04/09/innovation-hackathon/index.html",
    "revision": "25b478d3ba45756d8a2500c090f0ce8a"
  },
  {
    "url": "amp/2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "7ef4e22852615004f0da81ac232148d3"
  },
  {
    "url": "amp/2016/04/30/schools-out-️/index.html",
    "revision": "edbc9e17759563526d94b64e329e1e0a"
  },
  {
    "url": "amp/2016/05/04/hampton-university/index.html",
    "revision": "b08a4a132b9567bfe8420a200290a918"
  },
  {
    "url": "amp/2016/05/13/revolutionconf/index.html",
    "revision": "d8d8a52dc36195f243ad5633af97484b"
  },
  {
    "url": "amp/2016/05/24/pak-chu/index.html",
    "revision": "fd4841a286dbe9b74d93bbef05be55de"
  },
  {
    "url": "amp/2016/05/25/free-code-camp/index.html",
    "revision": "3346031fb931ed5dbd6aba0267218a7b"
  },
  {
    "url": "amp/2016/06/06/wen-tran/index.html",
    "revision": "e70335203c0705e48b86ee1f6e28f84d"
  },
  {
    "url": "amp/2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "8c126f653a1a24303ee74cceb263e09d"
  },
  {
    "url": "amp/2016/06/29/accenture-slc/index.html",
    "revision": "6b9354e67056a739005e0ddf6dab7253"
  },
  {
    "url": "amp/2016/07/30/npmcamp/index.html",
    "revision": "b6d88e57d919b99c8b3ea41b169cb8cc"
  },
  {
    "url": "amp/2016/08/01/lavie-ruan/index.html",
    "revision": "e5840f0f5e743ffffbf2a14650e33cc3"
  },
  {
    "url": "amp/2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "4995186dd0d4e76f1b12b69ae0d8537e"
  },
  {
    "url": "amp/2016/08/26/fullstack-academy/index.html",
    "revision": "4fb154842b89d8e99dbe592d5689b24f"
  },
  {
    "url": "amp/2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "dc5c060c79564c82499caee100e1c931"
  },
  {
    "url": "amp/2016/09/16/tapia-2016/index.html",
    "revision": "7fdb39c9f9bcfa07aa701a6186628cd4"
  },
  {
    "url": "amp/2016/09/27/github-repos---mashup-/index.html",
    "revision": "788e564d09b7ecc3b10eb668544de1a4"
  },
  {
    "url": "amp/2016/10/01/designhackathon/index.html",
    "revision": "30704a3a3cbaf177f6b46003d1a94b33"
  },
  {
    "url": "amp/2016/10/01/the-meggs-case-/index.html",
    "revision": "3006194d2da805352b8ff2f08949c636"
  },
  {
    "url": "amp/2016/10/04/cornell-tech-logos-/index.html",
    "revision": "aa45b36e94e1f591c594f51b66d54e88"
  },
  {
    "url": "amp/2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "8a9778233b5eb6ff17dfa6445b4c1092"
  },
  {
    "url": "amp/2016/10/09/kent-hack-enough/index.html",
    "revision": "64fc3293cd1510a22331c74bf6083025"
  },
  {
    "url": "amp/2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "c0000c9968b7df6a4ad7ea29c23dcb80"
  },
  {
    "url": "amp/2016/10/13/techweek-nyc/index.html",
    "revision": "3880fb6b9ca29dfd34363f26da2b7822"
  },
  {
    "url": "amp/2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "cac3c3490ff272e43299888bc7584335"
  },
  {
    "url": "amp/2016/11/18/product-studio-/index.html",
    "revision": "6d9bc34c878ee148836294d880fd913a"
  },
  {
    "url": "amp/2016/11/30/witny/index.html",
    "revision": "20ff1959f12ed4c2bfac0b365e08aa05"
  },
  {
    "url": "amp/2016/12/01/duolingo-delights-/index.html",
    "revision": "29ce5bda6a6705a2c8bedaf6924c5412"
  },
  {
    "url": "amp/2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "04cfae4e03382937376b6f267b913c79"
  },
  {
    "url": "amp/2016/12/08/hour-of-code/index.html",
    "revision": "7472a83baf86b2eca1cfc02be35e0bed"
  },
  {
    "url": "amp/2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "74bf1c962b280ec9ee9cb03492f24faf"
  },
  {
    "url": "amp/2016/12/10/alterconf-nyc-/index.html",
    "revision": "81bc5034b12cdb479efbc7de7b921ae1"
  },
  {
    "url": "amp/2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "03523c500ed038941581a3db5da09afe"
  },
  {
    "url": "amp/2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "5199e293dc68b192edd354b61921b1f6"
  },
  {
    "url": "amp/2016/12/17/norfolk.js/index.html",
    "revision": "20c8dae6a5ee1f4ef2eee61e9aea2d2a"
  },
  {
    "url": "amp/2016/12/17/product-school/index.html",
    "revision": "6c08428a0eaf13b23179400413eea009"
  },
  {
    "url": "amp/2017/01/07/updated-github-page-/index.html",
    "revision": "9d8c093677b059d8a26a5325b6dc521b"
  },
  {
    "url": "amp/2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "f62a4e555041cb3bd3c4fd4cdc041312"
  },
  {
    "url": "amp/2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "38703c22a01ab65b4226470711a29489"
  },
  {
    "url": "amp/2017/01/21/huge-school-application-2017/index.html",
    "revision": "0d94dcec7ecc2efc0b3990c23aae3402"
  },
  {
    "url": "amp/2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "e2da4d264ccff3f24ac702af897b5e64"
  },
  {
    "url": "amp/2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "a64430fb05e4ab139cb982c97c658851"
  },
  {
    "url": "amp/2017/01/30/cute-things-we-do-/index.html",
    "revision": "ae6058625be11868e28c82c6ec777b82"
  },
  {
    "url": "amp/2017/02/01/franklin-lee/index.html",
    "revision": "a614c7aebf7b1ebcecc2fca0e99f9b2c"
  },
  {
    "url": "amp/2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "df458d6203115c112426b75a0faa8b00"
  },
  {
    "url": "amp/2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "02f71fd47794b230af32c71eb81982f7"
  },
  {
    "url": "amp/2017/02/19/hackysu-2017/index.html",
    "revision": "b3fe97247b8c7a39284b8df5e9c10928"
  },
  {
    "url": "amp/2017/02/24/startup-studio/index.html",
    "revision": "d3b49c5f7959ece60ab2b6a0ec25dc07"
  },
  {
    "url": "amp/2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "c2b23f76407830d6d5b2bbe9ba121e6a"
  },
  {
    "url": "amp/2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "74d15ddc2db345bfe2ecfc6b1c50847b"
  },
  {
    "url": "amp/2017/03/14/connective-media/index.html",
    "revision": "b0f57bf239dbd9b06ee6d3678c19f65a"
  },
  {
    "url": "amp/2017/03/15/accepted-to-design-inc./index.html",
    "revision": "07bdf4b568a329ed6f731c1024a0757a"
  },
  {
    "url": "amp/2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "29056a31b2538e4589b95ba4f5ec3333"
  },
  {
    "url": "amp/2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "955b0d5dedc52a11ae51c4570fa0d5e7"
  },
  {
    "url": "amp/2017/03/17/apprenticeships-/index.html",
    "revision": "588934a2f981af85db0e45d23a411cdf"
  },
  {
    "url": "amp/2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "779279bee3157f49ea5deb2b2aedbdaf"
  },
  {
    "url": "amp/2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "6172afcfbeea2d5d0bafd89c72ece41c"
  },
  {
    "url": "amp/2017/04/14/pathfinder/index.html",
    "revision": "f52de505a45a57f623fa528fad82e241"
  },
  {
    "url": "amp/2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "f4004c46e7ccbd1b93682dc0cbfda110"
  },
  {
    "url": "amp/2017/04/30/codenow/index.html",
    "revision": "efcd733d87a4c7d2aca23d2d395b670c"
  },
  {
    "url": "amp/2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "aa1863876fbd118ab50cedf8a27e3b15"
  },
  {
    "url": "amp/2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "75525534f7b1fe45eb527138f53f2a1b"
  },
  {
    "url": "amp/2017/05/26/cornell-tech/index.html",
    "revision": "741a35eb8de6e6b7cd24a5d2dbf6eded"
  },
  {
    "url": "amp/2017/06/07/accenture-liquid-studio/index.html",
    "revision": "81952a3be348d85cddc44d0808558ba0"
  },
  {
    "url": "amp/2017/06/16/team-monarch/index.html",
    "revision": "13bdc7cf6d8f25cd373c3b1ea88bbd0c"
  },
  {
    "url": "amp/2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "a0ab115451238637f933da9b5337e851"
  },
  {
    "url": "amp/2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "0be98bc857c5987589c9e93dc90ae0c0"
  },
  {
    "url": "amp/2017/08/28/new-blog-new-problems-/index.html",
    "revision": "ce2f0e1d4f3bcc284d0de3be59d2a7f4"
  },
  {
    "url": "amp/2017/09/16/affect-conf/index.html",
    "revision": "a63f3dffc9fcea8d8ad9aafb16de9836"
  },
  {
    "url": "amp/2017/09/27/strange-loop-2017/index.html",
    "revision": "46ce0f7a5ba360fa39ff5426d73c7215"
  },
  {
    "url": "amp/2017/10/22/pwa-roadshow/index.html",
    "revision": "ed57cb399e2a86b54c1bfec6f519b9a7"
  },
  {
    "url": "amp/2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "9d12ac602885f375c79048dab0c59f7c"
  },
  {
    "url": "amp/about/colophon/index.html",
    "revision": "ee8281b72645e858e1550754d246aa37"
  },
  {
    "url": "amp/about/github-repo/index.html",
    "revision": "459c72e225ab660be0030a86f9a4fa2b"
  },
  {
    "url": "amp/about/resume/index.html",
    "revision": "6b06ea15d1d96333f8dbbf338acc0063"
  },
  {
    "url": "amp/about/travels/index.html",
    "revision": "0b6128144683470528ffcadfacf8a343"
  },
  {
    "url": "amp/about/what-i-use/index.html",
    "revision": "5bfb5f818aa4ab5e1c011e4d1e44e147"
  },
  {
    "url": "amp/archive/index.html",
    "revision": "d9972f3448dec2fee8a873afdadc878e"
  },
  {
    "url": "amp/awards/index.html",
    "revision": "fd917a309906cb12aa8d40d0971e65c9"
  },
  {
    "url": "amp/blog/1/01/01/ibooks/index.html",
    "revision": "52a757b0fb009de76bc4f09da03906a4"
  },
  {
    "url": "amp/blog/1/01/01/linkedin-posts/index.html",
    "revision": "fb7954f0266a5f350f04100bd30399ce"
  },
  {
    "url": "amp/blog/1/01/01/medium/index.html",
    "revision": "439a169b2cf25ff2fd43686e67df6906"
  },
  {
    "url": "amp/blog/1/01/01/quora-answers/index.html",
    "revision": "7afc77d89972af10b7d71f87351aa3e5"
  },
  {
    "url": "amp/blog/1/01/01/scribd/index.html",
    "revision": "9ac8ea79b48c28246eca3bcefd1e1e04"
  },
  {
    "url": "amp/blog/1/01/01/stack-exchange/index.html",
    "revision": "5f647cc95a4f20ae677f56bac93f2746"
  },
  {
    "url": "amp/blog/1/01/01/tweets/index.html",
    "revision": "adf78f76530da68812f642f79ca646c8"
  },
  {
    "url": "amp/blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "78637b041a0e376000b764dfcbcc2ce5"
  },
  {
    "url": "amp/contact/index.html",
    "revision": "0c5ea56ff870a0c989fce36a338ac155"
  },
  {
    "url": "amp/index.html",
    "revision": "abc954b72717d1dd92d712799706c505"
  },
  {
    "url": "amp/portfolio/1/01/01/behance/index.html",
    "revision": "9599422352c81092f07b984c71ac8266"
  },
  {
    "url": "amp/portfolio/1/01/01/code-school/index.html",
    "revision": "83639648fa62b662da7aaa489bb7488b"
  },
  {
    "url": "amp/portfolio/1/01/01/devpost/index.html",
    "revision": "21ac0b56ed79304b3be210a09f3c7bdc"
  },
  {
    "url": "amp/portfolio/1/01/01/github-️/index.html",
    "revision": "0bd1bc196fd938920eafbeb79f90d178"
  },
  {
    "url": "amp/portfolio/1/01/01/slideshare/index.html",
    "revision": "c81501a76621b7bdaf7b20995f58a778"
  },
  {
    "url": "amp/portfolio/1/01/01/youtube/index.html",
    "revision": "77192705e02bd29045cbe628e6f52148"
  },
  {
    "url": "amp/services/freelancing/index.html",
    "revision": "2e0e05dfafc9bda616438837cede12fc"
  },
  {
    "url": "amp/services/mentoring/index.html",
    "revision": "e0fb53b9534002a1634f70dd5f42164a"
  },
  {
    "url": "amp/speaking/burn-prevention/index.html",
    "revision": "8426c4a3721b0c6048f1c18fb59edbfa"
  },
  {
    "url": "amp/speaking/coding-bootcamps/index.html",
    "revision": "0c12252b03dea6371eec1a2badb70d96"
  },
  {
    "url": "amp/speaking/hour-of-code/index.html",
    "revision": "1758cca2933151935f3874ec76e87190"
  },
  {
    "url": "amp/speaking/imovie101/index.html",
    "revision": "821087df92a92e1df6c25a36d00d8248"
  },
  {
    "url": "amp/speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "81941d768e95bb3a56a8a0d7820302cf"
  },
  {
    "url": "amp/speaking/typescript-101/index.html",
    "revision": "390deee0324387b09e8cedd8364606f5"
  },
  {
    "url": "amp/speaking/va-acm/index.html",
    "revision": "3c10770b77219b4502f5b0506da8ca9b"
  },
  {
    "url": "amp/speaking/web-design/index.html",
    "revision": "6e56970e50c3547c1b2c933975cd6ec9"
  },
  {
    "url": "archive/index.html",
    "revision": "d9972f3448dec2fee8a873afdadc878e"
  },
  {
    "url": "assets/css/main.css",
    "revision": "a8bf681bf18a65aebb6c2557da303460"
  },
  {
    "url": "assets/img/404.png",
    "revision": "959eb8740b6ef79132a1526b61dbded2"
  },
  {
    "url": "assets/img/cursor/hova-2x.png",
    "revision": "6f39d788837ea117aa1b7ef682929df6"
  },
  {
    "url": "assets/img/cursor/hova.png",
    "revision": "2e8fb220386763727ba5dc6fc9b78d5c"
  },
  {
    "url": "assets/img/donate/amazon.svg",
    "revision": "6033fb37abbc90839a0b3f0ce7e983a5"
  },
  {
    "url": "assets/img/donate/cash.svg",
    "revision": "8339354b3eec50f23bba3d4ecc5e56dd"
  },
  {
    "url": "assets/img/donate/patreon.svg",
    "revision": "3aebc5390ede9418ba259c8a8c3c9beb"
  },
  {
    "url": "assets/img/donate/paypal.svg",
    "revision": "015f7a5f95929398b58a47b5df39a42a"
  },
  {
    "url": "assets/img/donate/venmo.svg",
    "revision": "8ee57c22a7942a9bcc20a2015817c4ed"
  },
  {
    "url": "assets/img/favicons/android-chrome-144x144.png",
    "revision": "0df92eb56911bc129f5c90b9779cb795"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "84e95f12451408df34253bad9229e933"
  },
  {
    "url": "assets/img/favicons/android-chrome-256x256.png",
    "revision": "2f2203808bbe5cd01124fe80aa698b53"
  },
  {
    "url": "assets/img/favicons/android-chrome-36x36.png",
    "revision": "bd9b0e88894822cfcea5414ac8428406"
  },
  {
    "url": "assets/img/favicons/android-chrome-48x48.png",
    "revision": "36ed76931c5c3f2c42b3185db3f900da"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "80e9e1d017386331872ee984024f0430"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "925b1882c987fe406d8ce9c0d7f63929"
  },
  {
    "url": "awards/index.html",
    "revision": "fd917a309906cb12aa8d40d0971e65c9"
  },
  {
    "url": "blog/1/01/01/ibooks/index.html",
    "revision": "52a757b0fb009de76bc4f09da03906a4"
  },
  {
    "url": "blog/1/01/01/linkedin-posts/index.html",
    "revision": "fb7954f0266a5f350f04100bd30399ce"
  },
  {
    "url": "blog/1/01/01/medium/index.html",
    "revision": "439a169b2cf25ff2fd43686e67df6906"
  },
  {
    "url": "blog/1/01/01/quora-answers/index.html",
    "revision": "7afc77d89972af10b7d71f87351aa3e5"
  },
  {
    "url": "blog/1/01/01/scribd/index.html",
    "revision": "9ac8ea79b48c28246eca3bcefd1e1e04"
  },
  {
    "url": "blog/1/01/01/stack-exchange/index.html",
    "revision": "5f647cc95a4f20ae677f56bac93f2746"
  },
  {
    "url": "blog/1/01/01/tweets/index.html",
    "revision": "adf78f76530da68812f642f79ca646c8"
  },
  {
    "url": "blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "78637b041a0e376000b764dfcbcc2ce5"
  },
  {
    "url": "blog/2012/07/30/blog-post-from-tanzania/amp/index.html",
    "revision": "68f8bb8cf8d4a9e5dc260413c1fc38da"
  },
  {
    "url": "blog/2012/07/30/blog-post-from-tanzania/index.html",
    "revision": "df6b07898b114059e8f5a8af9b99448e"
  },
  {
    "url": "blog/2013/09/20/c-bits-speeding-up-a-bit/amp/index.html",
    "revision": "190b8bc79dd679061ad06748b50e10af"
  },
  {
    "url": "blog/2013/09/20/c-bits-speeding-up-a-bit/index.html",
    "revision": "dcf9c5791bd4a54552b8b6ddbe82ac82"
  },
  {
    "url": "blog/index.html",
    "revision": "f314af2e2f8f2e462f9bafd10ee70c9f"
  },
  {
    "url": "categories/2015/index.html",
    "revision": "754b04826fae58719ade533f98997fdc"
  },
  {
    "url": "categories/2016/index.html",
    "revision": "d8e87733c177044b97ad9f3c2f21d598"
  },
  {
    "url": "categories/2017/index.html",
    "revision": "e813c0e6ff41797c8a6060912f3b0465"
  },
  {
    "url": "categories/award/index.html",
    "revision": "458973c0edec5fa270e1c17947f19378"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "40dd88c433ccb6dbb09b820c7d9e3ca2"
  },
  {
    "url": "categories/book/index.html",
    "revision": "fb61c0c3f1a0b7c2f4eca2ebb2dc0e01"
  },
  {
    "url": "categories/bootcamps/index.html",
    "revision": "f160fa7c423336ee8048b5b9693299e6"
  },
  {
    "url": "categories/burnprevention/index.html",
    "revision": "11d51a54cb6b3689e0b64e564e0f0f30"
  },
  {
    "url": "categories/certainties/index.html",
    "revision": "46f4fbc98a6d674a4fd82a6f17f25297"
  },
  {
    "url": "categories/coding/index.html",
    "revision": "0d0508ead809e57afd0ebb7ac8e48892"
  },
  {
    "url": "categories/conference/index.html",
    "revision": "90cb2a0d00afda0c619358989a609f18"
  },
  {
    "url": "categories/creativity/index.html",
    "revision": "d2ef9e5e9fd37b2465165a6185d5a9c7"
  },
  {
    "url": "categories/design/index.html",
    "revision": "8caa828758a92ff20eb881606b8145bd"
  },
  {
    "url": "categories/education/index.html",
    "revision": "6d6481f0ff94be4406d324c144ff4276"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "541923273ff4353edb22fad161167fd4"
  },
  {
    "url": "categories/hackathon/index.html",
    "revision": "14a18b5a1a3108ce83b30b49c33d4ebf"
  },
  {
    "url": "categories/hourofcode/index.html",
    "revision": "b958ca32f66e697ed19ff326ba3d0362"
  },
  {
    "url": "categories/imovie101/index.html",
    "revision": "29dac0df2ad91823837584ba24437064"
  },
  {
    "url": "categories/index.html",
    "revision": "df4d1e2d038ee024e3853b68ed18817f"
  },
  {
    "url": "categories/portfolio/index.html",
    "revision": "fb93084543920ba2df5b6b5d0d32a5fd"
  },
  {
    "url": "categories/presentation/index.html",
    "revision": "614c247423170846699b5859f3fd308f"
  },
  {
    "url": "categories/program/index.html",
    "revision": "e83ed168bfa783ca1425355c907700ac"
  },
  {
    "url": "categories/research/index.html",
    "revision": "74e8d7fa62f1a7bcf6d63f4ea6aa8d68"
  },
  {
    "url": "categories/review/index.html",
    "revision": "ab26da6826e4f7fb260c00382dc88ddd"
  },
  {
    "url": "categories/speaking/index.html",
    "revision": "a03a06da7e458f4dec0f40ec4248f66e"
  },
  {
    "url": "categories/typescript101/index.html",
    "revision": "f448ba3d2c21a0eb39b1f2de7af44de4"
  },
  {
    "url": "categories/vaacm/index.html",
    "revision": "baff19b24895e63510629dc1bffbc61b"
  },
  {
    "url": "categories/volunteering/index.html",
    "revision": "400f9af1bca9069383f5d1bb52e1e90f"
  },
  {
    "url": "categories/web/index.html",
    "revision": "2660687700d51f457fc3911906f1e564"
  },
  {
    "url": "categories/webdesign/index.html",
    "revision": "581f06eaf159add117df781a07942f5c"
  },
  {
    "url": "categories/wizard/index.html",
    "revision": "5cbc44eedf8a600b3ee3520071ef15fc"
  },
  {
    "url": "contact/index.html",
    "revision": "0c5ea56ff870a0c989fce36a338ac155"
  },
  {
    "url": "index.html",
    "revision": "abc954b72717d1dd92d712799706c505"
  },
  {
    "url": "portfolio/1/01/01/behance/index.html",
    "revision": "9599422352c81092f07b984c71ac8266"
  },
  {
    "url": "portfolio/1/01/01/code-school/index.html",
    "revision": "83639648fa62b662da7aaa489bb7488b"
  },
  {
    "url": "portfolio/1/01/01/devpost/index.html",
    "revision": "21ac0b56ed79304b3be210a09f3c7bdc"
  },
  {
    "url": "portfolio/1/01/01/github-️/index.html",
    "revision": "0bd1bc196fd938920eafbeb79f90d178"
  },
  {
    "url": "portfolio/1/01/01/slideshare/index.html",
    "revision": "c81501a76621b7bdaf7b20995f58a778"
  },
  {
    "url": "portfolio/1/01/01/youtube/index.html",
    "revision": "77192705e02bd29045cbe628e6f52148"
  },
  {
    "url": "portfolio/index.html",
    "revision": "23429a9c12c18ad6cc645b2c71e4ef73"
  },
  {
    "url": "services/freelancing/index.html",
    "revision": "2e0e05dfafc9bda616438837cede12fc"
  },
  {
    "url": "services/index.html",
    "revision": "db438b49d1f1b3bcae7e85962e0567c6"
  },
  {
    "url": "services/mentoring/index.html",
    "revision": "e0fb53b9534002a1634f70dd5f42164a"
  },
  {
    "url": "speaking/burn-prevention/index.html",
    "revision": "8426c4a3721b0c6048f1c18fb59edbfa"
  },
  {
    "url": "speaking/coding-bootcamps/index.html",
    "revision": "0c12252b03dea6371eec1a2badb70d96"
  },
  {
    "url": "speaking/hour-of-code/index.html",
    "revision": "1758cca2933151935f3874ec76e87190"
  },
  {
    "url": "speaking/imovie101/index.html",
    "revision": "821087df92a92e1df6c25a36d00d8248"
  },
  {
    "url": "speaking/index.html",
    "revision": "02423735d5d7bcc7d6f60987d33997ba"
  },
  {
    "url": "speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "81941d768e95bb3a56a8a0d7820302cf"
  },
  {
    "url": "speaking/typescript-101/index.html",
    "revision": "390deee0324387b09e8cedd8364606f5"
  },
  {
    "url": "speaking/va-acm/index.html",
    "revision": "3c10770b77219b4502f5b0506da8ca9b"
  },
  {
    "url": "speaking/web-design/index.html",
    "revision": "6e56970e50c3547c1b2c933975cd6ec9"
  },
  {
    "url": "tags/100th/index.html",
    "revision": "5777cd753b76bbccaed3e33775536ca4"
  },
  {
    "url": "tags/128x128/index.html",
    "revision": "c55023d785d8385788fd7eef419c4cfa"
  },
  {
    "url": "tags/2d-game/index.html",
    "revision": "c1df5baa3c806e211f57bfc67d16d676"
  },
  {
    "url": "tags/50-crimes/index.html",
    "revision": "cae6af9622373487f134467796e345c7"
  },
  {
    "url": "tags/50-lines-for-50-crimes/index.html",
    "revision": "ef2c312d87de5a1589e431ca9fb810a1"
  },
  {
    "url": "tags/50-lines/index.html",
    "revision": "01308967083bc1cfcb3e38bd70ad464e"
  },
  {
    "url": "tags/757-developers/index.html",
    "revision": "27a1ab22af00056dda17878892bb1b04"
  },
  {
    "url": "tags/757/index.html",
    "revision": "3d13878b6fbb03fa76446828aac59214"
  },
  {
    "url": "tags/757dev/index.html",
    "revision": "46719ae81b406e9cac2487a3de9616e1"
  },
  {
    "url": "tags/8020/index.html",
    "revision": "79564385bebb5b493adfea1fc826bf5b"
  },
  {
    "url": "tags/a-poem-for-a-friend/index.html",
    "revision": "61b71754e0e072b2d979ca63fae38963"
  },
  {
    "url": "tags/aaai-2015/index.html",
    "revision": "b9fd25e6b76c19f3b8d50a701f2dacf1"
  },
  {
    "url": "tags/aaai/index.html",
    "revision": "1d4309e9ea45fe4aa485bd9dc7cd6000"
  },
  {
    "url": "tags/academia/index.html",
    "revision": "0ac1a952cdd56d01291395ef4e0853cf"
  },
  {
    "url": "tags/academy/index.html",
    "revision": "225104ce373a23ad79138ffa5a234c33"
  },
  {
    "url": "tags/accenture/index.html",
    "revision": "a692ddb3e0df756f43e8d41136ddd0b7"
  },
  {
    "url": "tags/acceptance/index.html",
    "revision": "4ba09afb7765c6327b29ce10175c986a"
  },
  {
    "url": "tags/accepted/index.html",
    "revision": "23382b0c9311f2bfe805f7bf11a2107e"
  },
  {
    "url": "tags/accountability/index.html",
    "revision": "70bd2819e8547b3df1c3f096f2eed876"
  },
  {
    "url": "tags/adapt-and-survive/index.html",
    "revision": "c511010ab932aaf41659f9fc88b5d873"
  },
  {
    "url": "tags/admissions-challenge/index.html",
    "revision": "8f81bd45d05fc7f8f4c66bbc6aa7b977"
  },
  {
    "url": "tags/admissions/index.html",
    "revision": "aa8f46eac356cd48eca6fe06dedd6a85"
  },
  {
    "url": "tags/adobe-after-effects/index.html",
    "revision": "27af75230f30ff46266ec865e7a7d1a2"
  },
  {
    "url": "tags/adobe-premiere-pro/index.html",
    "revision": "fd17b032db8faed23c4a260bd458a433"
  },
  {
    "url": "tags/adrenaline-junkies/index.html",
    "revision": "6571193e772c66b204819eb0c97818da"
  },
  {
    "url": "tags/adult-perspective/index.html",
    "revision": "537ccb68e0d9b579c2c163067c49f82e"
  },
  {
    "url": "tags/affordance-models/index.html",
    "revision": "c3583156e3b7cb8843b40c06a1f7a121"
  },
  {
    "url": "tags/afro-movers-and-shakers/index.html",
    "revision": "c379b1fb8156e274668db398be73469b"
  },
  {
    "url": "tags/aftermath/index.html",
    "revision": "6a017edb53d7bb7782ab83ff5fb2d22a"
  },
  {
    "url": "tags/ai-conference/index.html",
    "revision": "301859f8567761bcab221a848a4df8f2"
  },
  {
    "url": "tags/ai/index.html",
    "revision": "bb43bb924d4775dce4afab2ba04bbe6c"
  },
  {
    "url": "tags/ai2/index.html",
    "revision": "10425b8c265965f30571991f11349556"
  },
  {
    "url": "tags/ailey-extension/index.html",
    "revision": "2ddf799c69b4593fe911530fc77133fa"
  },
  {
    "url": "tags/air-heads/index.html",
    "revision": "695a8cf2073c0b369763ca4d673cbc5d"
  },
  {
    "url": "tags/airmail-integration/index.html",
    "revision": "d14d196c837ff785d7152b0595516e60"
  },
  {
    "url": "tags/airmail-school-email/index.html",
    "revision": "13b6b62beb35d5af8b5dcc8f579016ff"
  },
  {
    "url": "tags/airmail/index.html",
    "revision": "307544fb41d5e389b5ea87c038eaa71b"
  },
  {
    "url": "tags/airtable-app/index.html",
    "revision": "397e759bfa1c780a500c9dae3c3c2d2d"
  },
  {
    "url": "tags/airtable/index.html",
    "revision": "6b6e3e42cadbe3665450ef09ae28f6c3"
  },
  {
    "url": "tags/ajax/index.html",
    "revision": "a8443db14e2edcac1c60f4eccf40448f"
  },
  {
    "url": "tags/alchemize/index.html",
    "revision": "8891e111c85b5bec69f226684f9eb53f"
  },
  {
    "url": "tags/alfred/index.html",
    "revision": "b2ac213e2147416a20714be13ae79196"
  },
  {
    "url": "tags/algorithms/index.html",
    "revision": "79c4cf306e3ab2a4510f20469790d314"
  },
  {
    "url": "tags/alien/index.html",
    "revision": "e272d60244b7732d7d263216bef2d686"
  },
  {
    "url": "tags/aline-lerner/index.html",
    "revision": "399c4cdea09dee54f8659b3de3c8df02"
  },
  {
    "url": "tags/alpha/index.html",
    "revision": "8728e5844da7f57465cecaf2970dc363"
  },
  {
    "url": "tags/alterconf-new-york-city/index.html",
    "revision": "91f39c15986153b7c61075a611df3eeb"
  },
  {
    "url": "tags/alterconf-nyc-2016/index.html",
    "revision": "d2cbe7321a86cb4d53ad6525412588dd"
  },
  {
    "url": "tags/alterconf-nyc/index.html",
    "revision": "ed3e409b60538efac0d65cef2564a51c"
  },
  {
    "url": "tags/alterconf/index.html",
    "revision": "863766618ae489a747af185deafe5862"
  },
  {
    "url": "tags/alternote/index.html",
    "revision": "b8a41ce5efba1f74a2e1a3ac6edfe34d"
  },
  {
    "url": "tags/alumni-panel/index.html",
    "revision": "b818240a9e54b4e14b2ed8b22a9d589e"
  },
  {
    "url": "tags/ameot/index.html",
    "revision": "7970ef7fbdfdd48b2fc9fb620109063f"
  },
  {
    "url": "tags/american-museum-of-natural-history/index.html",
    "revision": "adf9e1bae134d6d118267bbd27e057b2"
  },
  {
    "url": "tags/amphetamine/index.html",
    "revision": "868d32b26a227e4169d47b16483e6e13"
  },
  {
    "url": "tags/ancestor/index.html",
    "revision": "d389febc5c5a12562aab560c7b1a0d0f"
  },
  {
    "url": "tags/angular-js/index.html",
    "revision": "e214e020840369ec6045c1c2de9b0793"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "cb6176c38a3b0c50a439a5ddfe3b47ad"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "d7cc5b721bf6b6f5fadb8a8dff3513b6"
  },
  {
    "url": "tags/anonymous-functions/index.html",
    "revision": "1f112e3dbf5aaf8d580a1c9dc7e7a376"
  },
  {
    "url": "tags/apocalypse/index.html",
    "revision": "7473fbfbc8116e45617b67c5ab8ce0a2"
  },
  {
    "url": "tags/app-academy/index.html",
    "revision": "1773e60c4300a0fcbba2585d8c1cfef2"
  },
  {
    "url": "tags/app-store/index.html",
    "revision": "56cd40322553557768452a632ebe2fc5"
  },
  {
    "url": "tags/apple/index.html",
    "revision": "9a1fa086603006892fdf5b8607a62e6b"
  },
  {
    "url": "tags/application/index.html",
    "revision": "d01e22ddf8ef85d1156aa38dc25e22fc"
  },
  {
    "url": "tags/applications/index.html",
    "revision": "cd9955ca18d286e9816af391b9c078e2"
  },
  {
    "url": "tags/arcade-publishing/index.html",
    "revision": "672eeabb7f677dc029c115eff74f7370"
  },
  {
    "url": "tags/archos/index.html",
    "revision": "bc1f88fbafe874dac6e6c6bfb89cc51e"
  },
  {
    "url": "tags/area-of-a-rectangle-python/index.html",
    "revision": "c5d2602753d1d616f7fd66db3c5318aa"
  },
  {
    "url": "tags/arithmetic/index.html",
    "revision": "eb56659108cb9dd322089708a58af031"
  },
  {
    "url": "tags/array-implementation/index.html",
    "revision": "92953b531fcd435bbf4d53ddf4f94ff0"
  },
  {
    "url": "tags/array/index.html",
    "revision": "46a3264f5ea0791fc88fcd8a20324ebe"
  },
  {
    "url": "tags/arrays/index.html",
    "revision": "22a6612348d4e69c262657cf2e829b68"
  },
  {
    "url": "tags/arsenic/index.html",
    "revision": "0e84752bce23777a4c2f41c0c48a3de0"
  },
  {
    "url": "tags/artificial-intelligence/index.html",
    "revision": "aece8aaa4de7a2badacba11ebb23d17e"
  },
  {
    "url": "tags/artificially-intelligent/index.html",
    "revision": "12df8cc9e3720ac2df50547ca8058c09"
  },
  {
    "url": "tags/asperger-syndrome/index.html",
    "revision": "207e85f54e7d329022de7d6cc8681ba3"
  },
  {
    "url": "tags/asperger/index.html",
    "revision": "586139b70e2c7f1dc890701f2c1e7907"
  },
  {
    "url": "tags/aspie/index.html",
    "revision": "865343532aec26b8e1bc530c8c68c7e2"
  },
  {
    "url": "tags/assigning/index.html",
    "revision": "2ee3ca67a294d8193a6e9a5a954cde0b"
  },
  {
    "url": "tags/at-home-advisor/index.html",
    "revision": "37f261529c9106e40a37fe68c0647121"
  },
  {
    "url": "tags/atheists/index.html",
    "revision": "2d2ec6275150fa603b7ba6067b18fa58"
  },
  {
    "url": "tags/auschwitz-a-doctors-eyewitness-account/index.html",
    "revision": "b56ec6b971e4adfac9a750ed41c17377"
  },
  {
    "url": "tags/auschwitz/index.html",
    "revision": "3d3fd7f0ea04916fb346a174579c0d18"
  },
  {
    "url": "tags/austin/index.html",
    "revision": "45b23bb1f93dbf3e825043fab7b9bd53"
  },
  {
    "url": "tags/authentication/index.html",
    "revision": "9cb155e709233e49dec623af1a58067e"
  },
  {
    "url": "tags/autism-spectrum/index.html",
    "revision": "bc4a2952d148584ea27be45b1c0ec3e8"
  },
  {
    "url": "tags/automated-jobs/index.html",
    "revision": "322d2fe518b2c42fb26e36864a93afa6"
  },
  {
    "url": "tags/automated/index.html",
    "revision": "3c81d68dee8768abd0b13ac2ee2316ef"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "36a3ad88cd9a09096ba5449d4e536733"
  },
  {
    "url": "tags/automator/index.html",
    "revision": "6fe30c5df5813dd2c331e483963321b6"
  },
  {
    "url": "tags/avalon/index.html",
    "revision": "5fb4a57493c9e018fd3c11fecd4abf77"
  },
  {
    "url": "tags/aviation/index.html",
    "revision": "4dca62d60d7424351fa599fa41572095"
  },
  {
    "url": "tags/awkward-silences/index.html",
    "revision": "95aedbea490604b182734e864b3e3478"
  },
  {
    "url": "tags/awwwards/index.html",
    "revision": "ab4256c84d24088786f68c88913d004f"
  },
  {
    "url": "tags/baboon/index.html",
    "revision": "4f8d4fcdfb10e5b63fb8776aaf62a60e"
  },
  {
    "url": "tags/background/index.html",
    "revision": "3ab817fe3f8a4c89cb0b3378e2331bb9"
  },
  {
    "url": "tags/backgrounds/index.html",
    "revision": "5cf9cba6dc87e25f15d220a9e1073f56"
  },
  {
    "url": "tags/balanced/index.html",
    "revision": "2d62fe67638aa032102f7bb8bb7f0f73"
  },
  {
    "url": "tags/balls/index.html",
    "revision": "07f15749d43c235caed85a8fcfc029b3"
  },
  {
    "url": "tags/banquet/index.html",
    "revision": "b3c3bef35896bec876a64cde4a4060ae"
  },
  {
    "url": "tags/barbara-demick/index.html",
    "revision": "03e8b68c34abd9a4acb1e0e8cfd2248b"
  },
  {
    "url": "tags/barbossa/index.html",
    "revision": "05632076941d8e8e39c0b2d3342150c6"
  },
  {
    "url": "tags/bartender/index.html",
    "revision": "65c6fb4f169a7b2241ce3f441afccfca"
  },
  {
    "url": "tags/basic-structure/index.html",
    "revision": "173cb7ff470296a3a15b0ae29b2d46be"
  },
  {
    "url": "tags/battle-school/index.html",
    "revision": "6ff1ce0918d84d7ddd9c23e0aea3f147"
  },
  {
    "url": "tags/bay-area/index.html",
    "revision": "4187d339910c6bb485a4ff2923f6126d"
  },
  {
    "url": "tags/be-wary/index.html",
    "revision": "9e1342ddbb0f9550ef1dcab5aed0d0c6"
  },
  {
    "url": "tags/beauty/index.html",
    "revision": "40864e3ddeef0c20e9c77f0efed101a7"
  },
  {
    "url": "tags/bee/index.html",
    "revision": "0001b31de78dc5543f84b798739c28c2"
  },
  {
    "url": "tags/beginner/index.html",
    "revision": "c52220291d53c1fc25948057ee708369"
  },
  {
    "url": "tags/beginning-programming/index.html",
    "revision": "33bb25934014fd067dbbe5141668556d"
  },
  {
    "url": "tags/behance/index.html",
    "revision": "439d09b3b20f7ec46ec0b66fedb40da5"
  },
  {
    "url": "tags/benito-de-soto/index.html",
    "revision": "b9871f412ee3e95b68384df6c1cd8be8"
  },
  {
    "url": "tags/bento/index.html",
    "revision": "ff018d158c541e2d90f8affbf238fd26"
  },
  {
    "url": "tags/best-bootcamps/index.html",
    "revision": "00f66bd128c73934652de6b0e635f3ba"
  },
  {
    "url": "tags/beta-day/index.html",
    "revision": "eeeb3781aafb86f6c85c37bdabb117dd"
  },
  {
    "url": "tags/beta/index.html",
    "revision": "2be7fe640b5fb9b92e0ee6fbd7050bad"
  },
  {
    "url": "tags/bethel-high-school/index.html",
    "revision": "967d77470f9525feeaa71cf302ea3eef"
  },
  {
    "url": "tags/bettersnaptool/index.html",
    "revision": "45a4b19ddaef7a85aa6609d20f6be129"
  },
  {
    "url": "tags/bieber/index.html",
    "revision": "866492fc282df23f402a315729f13d44"
  },
  {
    "url": "tags/big-presentation/index.html",
    "revision": "a59b39e322264d54d2443f5df0efa4a1"
  },
  {
    "url": "tags/binary-search-tree/index.html",
    "revision": "3500c9e18299196b4c2506764dc7e275"
  },
  {
    "url": "tags/binary-tree/index.html",
    "revision": "a85de50aa3fe5d71fc97782afaa9322e"
  },
  {
    "url": "tags/binary-trees/index.html",
    "revision": "17ec99ebb8f282b81df8552c5fd936c0"
  },
  {
    "url": "tags/binary/index.html",
    "revision": "258475405359e766ec920dd785033f85"
  },
  {
    "url": "tags/binding-of-isaac-review/index.html",
    "revision": "848543b8295302ba85d9ec9050d31971"
  },
  {
    "url": "tags/binding-of-isaac/index.html",
    "revision": "309757358b4a685ae47d012812e7f753"
  },
  {
    "url": "tags/binding/index.html",
    "revision": "47444634ab34e38edfb1c675d6fe593b"
  },
  {
    "url": "tags/bit/index.html",
    "revision": "f994adc334af23799d85b8ca446ef85e"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "944fd31ceac304bac595d7e1e2e11855"
  },
  {
    "url": "tags/bitmaker-labs/index.html",
    "revision": "ab8c5ff05521dd2f17d0423e93cb2783"
  },
  {
    "url": "tags/bitmaker/index.html",
    "revision": "b05e091da3b2a5574f58f124c7cff5f6"
  },
  {
    "url": "tags/bits/index.html",
    "revision": "cd3fcf375a2e1b41d7dd6299664c81e6"
  },
  {
    "url": "tags/black-beard/index.html",
    "revision": "d6713e05b6d5762eabcd8147b2adb0a8"
  },
  {
    "url": "tags/black-pearl/index.html",
    "revision": "12d3ed5c2caa45665a08a0c7414091b4"
  },
  {
    "url": "tags/blackbeard/index.html",
    "revision": "bc17a9a49fe2e0833391a4e71c1b7f36"
  },
  {
    "url": "tags/blanket/index.html",
    "revision": "dbcb3ccfe3da70442b9f7458a10d1241"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "9792c4fde8dd8aa28cf94c544ad44a02"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "b92b3f3f0e86e3696b742f661956da0b"
  },
  {
    "url": "tags/bloody-game/index.html",
    "revision": "42cd5ef1055f7d1639ffbc356d8d9de5"
  },
  {
    "url": "tags/bloomberg/index.html",
    "revision": "4691d60ab2db733226737f3cbd147a33"
  },
  {
    "url": "tags/board-game/index.html",
    "revision": "8f1bfc164567b973496d35a9064f6c9a"
  },
  {
    "url": "tags/book-review/index.html",
    "revision": "51aa2c867cb4de9ba348ae21f002b791"
  },
  {
    "url": "tags/boot-camp/index.html",
    "revision": "498f6ec80c89495c82b434f3366a18ee"
  },
  {
    "url": "tags/bootcamp-agreement/index.html",
    "revision": "7065de186219a1ff63e38307b36fa2c3"
  },
  {
    "url": "tags/bootcamp-hawaii/index.html",
    "revision": "4a9e58166f73b7f80dc549f96fef48b9"
  },
  {
    "url": "tags/bootcamp.me/index.html",
    "revision": "095688609e38d84e09b6159dc2e269d0"
  },
  {
    "url": "tags/bootcamp/index.html",
    "revision": "863e999626fe1ac2348cfc93b5682c01"
  },
  {
    "url": "tags/bootcamper.io/index.html",
    "revision": "abcbaa81bf45e52918a2ee1398979abc"
  },
  {
    "url": "tags/bootcamps.in/index.html",
    "revision": "48798564aeecb3b0fa3421c3cfc2aaea"
  },
  {
    "url": "tags/bootcamps/index.html",
    "revision": "20c663e050881e5920c3b4b1a925996d"
  },
  {
    "url": "tags/bootstrap/index.html",
    "revision": "fec6156756bd00d1931f4adc45da1c87"
  },
  {
    "url": "tags/boston/index.html",
    "revision": "c6a670f692da084552a582da34ccfb8a"
  },
  {
    "url": "tags/bow/index.html",
    "revision": "74416ab941d3d40795984f783d147e8d"
  },
  {
    "url": "tags/boys/index.html",
    "revision": "66f8cee4e4a54475f21cb91787b4dfc4"
  },
  {
    "url": "tags/brief-thoughts/index.html",
    "revision": "e883b49fea6cf05c08b6a1ac3e90ff7d"
  },
  {
    "url": "tags/briefbox/index.html",
    "revision": "d2729b93f258fc295b29dd1171c5ff63"
  },
  {
    "url": "tags/bubble-sort/index.html",
    "revision": "422558977c8aa2e17905bc3651e35c1c"
  },
  {
    "url": "tags/bubbles/index.html",
    "revision": "03730ca9b4e4ff24a1b5d7ef46351e78"
  },
  {
    "url": "tags/bummer/index.html",
    "revision": "6ab93eb5143d2f51e3633241a88a7d7a"
  },
  {
    "url": "tags/burger-king/index.html",
    "revision": "8ac447857b249acd2dac520a337edf8d"
  },
  {
    "url": "tags/byword/index.html",
    "revision": "9b7d75febbcc7c1343eb1c51cc91ac93"
  },
  {
    "url": "tags/c-programming/index.html",
    "revision": "749dd85c43c9fdc4459e189f83e8f6ea"
  },
  {
    "url": "tags/c++/index.html",
    "revision": "cbde8f9d123b72228bf87f33e0dcf3e5"
  },
  {
    "url": "tags/calculus/index.html",
    "revision": "d87115ad4be3db6addb25aa459ec106a"
  },
  {
    "url": "tags/callbacks/index.html",
    "revision": "6eb1b85e9f2f8264f98eab737fdadf72"
  },
  {
    "url": "tags/campus/index.html",
    "revision": "6dad2d275569c88886e2aaf3bae81a90"
  },
  {
    "url": "tags/canada/index.html",
    "revision": "abac5b72ca0c6214ab6d0467ab70ef3f"
  },
  {
    "url": "tags/capstone-project/index.html",
    "revision": "395d8761317f66f1671c08c9b9199844"
  },
  {
    "url": "tags/captain-jack-sparrow/index.html",
    "revision": "7189e85d8e18f8cea03af7a4dc16b9ef"
  },
  {
    "url": "tags/captone/index.html",
    "revision": "2d2ac3b1ce9fa838c6f6afe781db0491"
  },
  {
    "url": "tags/capwic/index.html",
    "revision": "477d824e4893d373ceb9c2b043f7919c"
  },
  {
    "url": "tags/career/index.html",
    "revision": "159dec424c73e44f5f65390430bc6a0b"
  },
  {
    "url": "tags/casual/index.html",
    "revision": "f2d7ef97466d24309b15fca1135cb8a5"
  },
  {
    "url": "tags/cb/index.html",
    "revision": "6d5e23dcd8af3ae04181104b9270d9ae"
  },
  {
    "url": "tags/cbs/index.html",
    "revision": "223346ceb040536b68bd58089de22d58"
  },
  {
    "url": "tags/cdock/index.html",
    "revision": "8bcd46651a8ec35632206add19a8d80a"
  },
  {
    "url": "tags/celsius-to-fahrenheit/index.html",
    "revision": "001d458663c34c8bebc8bafab1d9cfe1"
  },
  {
    "url": "tags/chad-trutt/index.html",
    "revision": "7c1a51970ba6b4c1e1441da4ab32efa7"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "1a08e48214018ac5fc21d6e1918157fe"
  },
  {
    "url": "tags/change/index.html",
    "revision": "2c007faf9bf5e58f707f4c10f4015ac3"
  },
  {
    "url": "tags/chaos-faction/index.html",
    "revision": "ce098d117d3f1169edf0111fe6892b87"
  },
  {
    "url": "tags/character/index.html",
    "revision": "d94f9fa8a1d8521f0cf44d182b2ffaa5"
  },
  {
    "url": "tags/chat-development/index.html",
    "revision": "4c49c3fbd699e607ca07b8e7825b5afd"
  },
  {
    "url": "tags/cheerio/index.html",
    "revision": "11fff66052edace4cc9cb291c280978d"
  },
  {
    "url": "tags/cheese/index.html",
    "revision": "8a0b7986fe1d46ccee2eea1fee588eef"
  },
  {
    "url": "tags/cheesy/index.html",
    "revision": "01dc8fe9e7d467e259602d8639377799"
  },
  {
    "url": "tags/chicago/index.html",
    "revision": "5b65be2053b5498b06ea96a4125d6bfb"
  },
  {
    "url": "tags/children/index.html",
    "revision": "6fcf8bbbf7302918f4f1c145100a4025"
  },
  {
    "url": "tags/christopher-t/index.html",
    "revision": "085ecfd40a26f5b7d71ff23fa0c2668a"
  },
  {
    "url": "tags/chrome-app-launcher/index.html",
    "revision": "456b7a60ba2653a2c08997c1b0f23e0a"
  },
  {
    "url": "tags/chrome-extensions/index.html",
    "revision": "fc1cf4211b75f94a872788814870dbca"
  },
  {
    "url": "tags/chrome-web-store/index.html",
    "revision": "4ff2bd2a35f28a66dfc3f7a83480da40"
  },
  {
    "url": "tags/chrome/index.html",
    "revision": "54603d13669fcccd8b26e62875fbd7dd"
  },
  {
    "url": "tags/chromecasts/index.html",
    "revision": "ceb913ecea70b6004249a5407b0b5998"
  },
  {
    "url": "tags/chronicles-of-narnia/index.html",
    "revision": "04cd0bb4dfd1cd0cf6cb8ef08f178fe4"
  },
  {
    "url": "tags/cinema4d/index.html",
    "revision": "dc937e78b094dca941c181f02a373608"
  },
  {
    "url": "tags/circle/index.html",
    "revision": "072a358baac20c21cab7795cf065ea91"
  },
  {
    "url": "tags/class/index.html",
    "revision": "56a77607feb47ada744a7edae6d0bcb4"
  },
  {
    "url": "tags/classes/index.html",
    "revision": "efcea932b6f1083020bdf18bc2d5d0bd"
  },
  {
    "url": "tags/cleft-lip/index.html",
    "revision": "ecef205725a94b6bf14ce35622f15dc9"
  },
  {
    "url": "tags/cleft-palette/index.html",
    "revision": "bc9a2cdb68dcb7a4e0b8d33c7e3aa906"
  },
  {
    "url": "tags/closures/index.html",
    "revision": "1a9a07ecc0a6a02f892eb3ecdd147dd5"
  },
  {
    "url": "tags/cockroach/index.html",
    "revision": "6e29ff847ec1ed6453b176ec24cd4286"
  },
  {
    "url": "tags/code-combat/index.html",
    "revision": "afede8fc68e93eff9d5d18666923884e"
  },
  {
    "url": "tags/code-combt/index.html",
    "revision": "624ea504a1b7395b2c05ffcd1c606520"
  },
  {
    "url": "tags/code-fellows/index.html",
    "revision": "f84651b9e9549b152915f135e1515947"
  },
  {
    "url": "tags/code-school/index.html",
    "revision": "4c7651f81474b675592576bd8b790f90"
  },
  {
    "url": "tags/code.org/index.html",
    "revision": "925fb2bfc9260f233ab71a6817abc9b5"
  },
  {
    "url": "tags/code/index.html",
    "revision": "0923d958ba3f0c1b074889ccb8ff8ec7"
  },
  {
    "url": "tags/code2040/index.html",
    "revision": "928dd13973cbeccd0feefae21c27c7cd"
  },
  {
    "url": "tags/codecademy/index.html",
    "revision": "66813c68ec1567bf6910c599d1033aad"
  },
  {
    "url": "tags/codecombat/index.html",
    "revision": "ab0dd0fd29ca96ba79e587925041c2da"
  },
  {
    "url": "tags/codepen/index.html",
    "revision": "2cfc7f2f73ffe9487da9f8918aee6032"
  },
  {
    "url": "tags/coderbyte/index.html",
    "revision": "f03ef01104b993b4e0b1eaddd6641df5"
  },
  {
    "url": "tags/codewars/index.html",
    "revision": "5da12d97f0bb844e10786fe2bdac9155"
  },
  {
    "url": "tags/coding-bootcamp-experience/index.html",
    "revision": "bbb01a8365482423e4e8027619e8e870"
  },
  {
    "url": "tags/coding-bootcamp-fullstack/index.html",
    "revision": "aeb0b45c8086326a455c88d729a645f6"
  },
  {
    "url": "tags/coding-bootcamp-map/index.html",
    "revision": "170f0074c60f3c5cca9e991ed1b952c3"
  },
  {
    "url": "tags/coding-bootcamp-prework/index.html",
    "revision": "04d4702c41bac26bb7ff927b11519720"
  },
  {
    "url": "tags/coding-bootcamp/index.html",
    "revision": "d91fa07e8b7a314a133b8cddaad4254f"
  },
  {
    "url": "tags/coding-bootcamps/index.html",
    "revision": "6f31e5d1f7c87e74f8880ebd54109e83"
  },
  {
    "url": "tags/coding-challenge/index.html",
    "revision": "48e18a58aebee27136f3614c5fdfca07"
  },
  {
    "url": "tags/coding-dojo/index.html",
    "revision": "9c82d50187a84fbd4f299f404ad4bc7f"
  },
  {
    "url": "tags/coding-house/index.html",
    "revision": "a8729e58ede0b3519f3f739929cedef8"
  },
  {
    "url": "tags/coding-interview/index.html",
    "revision": "77e0cad06feb49174ac615909ca67cf8"
  },
  {
    "url": "tags/coding/index.html",
    "revision": "18e1f5eaa56f9b8606dd1b7b8ecb8c4e"
  },
  {
    "url": "tags/codrops/index.html",
    "revision": "c4e922e53e80dca93dd0a59bad88412a"
  },
  {
    "url": "tags/codyhouse/index.html",
    "revision": "8a43dbe1f3e55bc2f7e72a12a15080f4"
  },
  {
    "url": "tags/cohort/index.html",
    "revision": "a9c5859d4839c04082b4e8022a6cb74c"
  },
  {
    "url": "tags/cold/index.html",
    "revision": "1744756ccc1a73353f1ef9d3177fe848"
  },
  {
    "url": "tags/college-students/index.html",
    "revision": "d9bd58c02b7ebe2fca92e59a540509f6"
  },
  {
    "url": "tags/color-theory/index.html",
    "revision": "48a03d64ac69e7ef7a2de297b85cfa92"
  },
  {
    "url": "tags/coment.me/index.html",
    "revision": "872a3e9964382519ef8cf18be0d2b547"
  },
  {
    "url": "tags/command-line/index.html",
    "revision": "cd7b3c2b7550ea579fe77463889dc3ce"
  },
  {
    "url": "tags/comment/index.html",
    "revision": "07f0fbc70729e6700c89f63849d392bb"
  },
  {
    "url": "tags/comments/index.html",
    "revision": "595a522a040a80adbfc53ddb38c49ca3"
  },
  {
    "url": "tags/compare/index.html",
    "revision": "9cbb8d06a4ee061aea3dae6bdb4a0d1d"
  },
  {
    "url": "tags/compiler/index.html",
    "revision": "9bd122b2b386cfb91b82105c4c178d8a"
  },
  {
    "url": "tags/complete/index.html",
    "revision": "91d6b7f68e7a51e7a9e47e41582fc398"
  },
  {
    "url": "tags/computer-science-education/index.html",
    "revision": "4f5af03147dd2e1554aba63e391089ec"
  },
  {
    "url": "tags/computer-science/index.html",
    "revision": "470fcfa4ec864a01407414501818deca"
  },
  {
    "url": "tags/computer/index.html",
    "revision": "1328c7c28d6f1b96e9373d67680d742c"
  },
  {
    "url": "tags/computing/index.html",
    "revision": "5ad15201fdb5070d4e9ba47940f4a1a0"
  },
  {
    "url": "tags/conceal/index.html",
    "revision": "d88898d6234654de94d19c15738bc472"
  },
  {
    "url": "tags/concrete/index.html",
    "revision": "6117e53118011bf2c8a9ed68250232a6"
  },
  {
    "url": "tags/coney-island/index.html",
    "revision": "b8d63fc33b1e083c4e31c507535cc10a"
  },
  {
    "url": "tags/conference-hotel/index.html",
    "revision": "5fd3aaa1b153e4791568634a2ee797ea"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "8dc4624b8893fdf4f606603923d1329c"
  },
  {
    "url": "tags/conferences/index.html",
    "revision": "53d6e2650f2190be88606bbcdcf004a1"
  },
  {
    "url": "tags/congratulations/index.html",
    "revision": "62fd87a67cf277697f47fa328603617b"
  },
  {
    "url": "tags/conquest/index.html",
    "revision": "69999301a12050a21de20acb0305137a"
  },
  {
    "url": "tags/contrast/index.html",
    "revision": "6fc26b2fac1b8dce9dd3ac5af5b1e279"
  },
  {
    "url": "tags/conundrums/index.html",
    "revision": "006ffd5929e9a5684d6de0c2608bcd72"
  },
  {
    "url": "tags/cookie/index.html",
    "revision": "0cb58da9208ad31ab9a488797b7c6d05"
  },
  {
    "url": "tags/copley/index.html",
    "revision": "b3072b6014533b0dbe2a06ab8d45e3a6"
  },
  {
    "url": "tags/cornell-tech/index.html",
    "revision": "9c747e67600d521015d160bc13ceeae8"
  },
  {
    "url": "tags/costs/index.html",
    "revision": "c8b9456b175d2136f82393eb8c0c965a"
  },
  {
    "url": "tags/course-report/index.html",
    "revision": "5ac8ac3f697bf7f6e1e9305a68a687d4"
  },
  {
    "url": "tags/course/index.html",
    "revision": "1b180b3db18325ef11ffa884e9a7d745"
  },
  {
    "url": "tags/cracking-the-coding-interview/index.html",
    "revision": "3f29314e123cf378df70644ee4260a8f"
  },
  {
    "url": "tags/creations/index.html",
    "revision": "a31d2173a18ac8a3cd51b0acc72c5fab"
  },
  {
    "url": "tags/creativity/index.html",
    "revision": "2d1877ec0b6dcae7e82e17fcc8dab5dd"
  },
  {
    "url": "tags/crowdsourced-map/index.html",
    "revision": "10233728840e8fa69b43c00ea93a6ba2"
  },
  {
    "url": "tags/crowdsourcing/index.html",
    "revision": "e1d8bc2c47c2577d985e2e5ab614da7c"
  },
  {
    "url": "tags/crush/index.html",
    "revision": "94c5c96da8a663f5907d3218610b0edc"
  },
  {
    "url": "tags/cs-background/index.html",
    "revision": "962e5857e949d3d3a0e7b6a23e06b6ad"
  },
  {
    "url": "tags/cs/index.html",
    "revision": "de8e371a2b3c014dadadc301a7af8292"
  },
  {
    "url": "tags/csail/index.html",
    "revision": "3f92598e68f658cf028f4dc323b52fd7"
  },
  {
    "url": "tags/css/index.html",
    "revision": "b399d629c1a5e14ab1a2150e4cd665d7"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "9d0ab241015badb23b1ee52e863ad4eb"
  },
  {
    "url": "tags/cups-of-tea/index.html",
    "revision": "d74c6823076888598d23ec35b2acd7c8"
  },
  {
    "url": "tags/curi/index.html",
    "revision": "7c08204845c52b204d6b7826a2fce0df"
  },
  {
    "url": "tags/curiosity/index.html",
    "revision": "a7b1f7e1cc917ebe415d44052dc50010"
  },
  {
    "url": "tags/curious-incident-of-the-dog-in-the-night-time/index.html",
    "revision": "89331d9b4597b7cb8bbb1d71dfd9af53"
  },
  {
    "url": "tags/curriculum/index.html",
    "revision": "9c49df9767f6c7146e898f353d0c727f"
  },
  {
    "url": "tags/dabble/index.html",
    "revision": "5b6c7c5d4c4243839357ac6951c8e880"
  },
  {
    "url": "tags/dairy-queen/index.html",
    "revision": "7f8446c7c75403a62fdc92ec215aa9c3"
  },
  {
    "url": "tags/damage/index.html",
    "revision": "986cf0ec246d57c45de29c98893ec016"
  },
  {
    "url": "tags/damehood/index.html",
    "revision": "7913d768d4d397db36d7fa02d1ff0812"
  },
  {
    "url": "tags/dan-brown/index.html",
    "revision": "57ee9a3138f68b6db9a55d87af8af230"
  },
  {
    "url": "tags/dance/index.html",
    "revision": "4681f7b8d5840139a029897b44e042aa"
  },
  {
    "url": "tags/dancing/index.html",
    "revision": "de20a711d6354cff6292817f51c0a8bd"
  },
  {
    "url": "tags/daniel/index.html",
    "revision": "c5a6ae2a8c0df05f4cdd335a11356753"
  },
  {
    "url": "tags/dash/index.html",
    "revision": "73bcdacea43f53814492e86e8ea8855f"
  },
  {
    "url": "tags/data-set/index.html",
    "revision": "cfcc9d8ac173ac99b60b1a3b96b64191"
  },
  {
    "url": "tags/data-structures/index.html",
    "revision": "b35f92c7c1c6cb4bd8ff2223325a6cf1"
  },
  {
    "url": "tags/data/index.html",
    "revision": "900b31bdee2dc6c2db4cae2377b26598"
  },
  {
    "url": "tags/david-yang/index.html",
    "revision": "442d51ece56a5d1f37a03a3b77445b2c"
  },
  {
    "url": "tags/davinci-code/index.html",
    "revision": "0a41d6ae0d8a9f11833cdd460d58388d"
  },
  {
    "url": "tags/dear-bootcamp/index.html",
    "revision": "0846e0d19407be6a2d4ca4fd0f2e4221"
  },
  {
    "url": "tags/death/index.html",
    "revision": "b3f1023bdc26bfd1dcd5a616208bb4fe"
  },
  {
    "url": "tags/decision/index.html",
    "revision": "e9940fecb9ff8bd9d2496e6e29689813"
  },
  {
    "url": "tags/defining/index.html",
    "revision": "7b0626dcf4d47121a632e44475258d07"
  },
  {
    "url": "tags/definitive-list/index.html",
    "revision": "8718e4aeeef34bc717e9c19cd7a6f8cf"
  },
  {
    "url": "tags/delta/index.html",
    "revision": "6657ffa44a15d9d912634d77497bab86"
  },
  {
    "url": "tags/demo-day/index.html",
    "revision": "4cccca98da3c5c26f36830a6b9af0529"
  },
  {
    "url": "tags/descendants/index.html",
    "revision": "05a7a45d93e5e70c1f313d0a82aa5404"
  },
  {
    "url": "tags/describing-oneself/index.html",
    "revision": "b7ee3fe271086a2594a725109d459d40"
  },
  {
    "url": "tags/descriptions/index.html",
    "revision": "402fc0abe4f36878f391bdcf66e01585"
  },
  {
    "url": "tags/design-101/index.html",
    "revision": "f04a988d67157e9aa30ae0816aa8f5f9"
  },
  {
    "url": "tags/design-bootcamp/index.html",
    "revision": "502133930b4eca0fb108f3f6d39b6d92"
  },
  {
    "url": "tags/design-online-course/index.html",
    "revision": "b84f20315546a826ed926146a5d2ec74"
  },
  {
    "url": "tags/design/index.html",
    "revision": "9353fe36fbab917d919c3811f754b748"
  },
  {
    "url": "tags/design101/index.html",
    "revision": "f849ea6b2514cf42bc698c4f617c1568"
  },
  {
    "url": "tags/designation-labs/index.html",
    "revision": "f9ae5bd70e2e3c60624772392e5130ee"
  },
  {
    "url": "tags/designation.io/index.html",
    "revision": "b5425ee74dc8283ad8984d7f9357e385"
  },
  {
    "url": "tags/designation/index.html",
    "revision": "b0a8c99c77cc5305425b3e176bc1703c"
  },
  {
    "url": "tags/designer/index.html",
    "revision": "c4fb3e5bb5bdeda2465f1a38fbedd57f"
  },
  {
    "url": "tags/designing/index.html",
    "revision": "35a5613c8703046403cc05f4e5d8906e"
  },
  {
    "url": "tags/designlab-course/index.html",
    "revision": "1ca12e352e6cae0d70e81734a006be36"
  },
  {
    "url": "tags/designlab-design-101/index.html",
    "revision": "bee12d1a1d059b3f2f90486bbea4c978"
  },
  {
    "url": "tags/designlab/index.html",
    "revision": "498696cab92428fadf90c88ea14d9402"
  },
  {
    "url": "tags/designs/index.html",
    "revision": "4fdde9a47d463f3555b4d3bc5abb78b9"
  },
  {
    "url": "tags/dev-bootcamps/index.html",
    "revision": "beae6e228805ec42bfeb8b680e40e584"
  },
  {
    "url": "tags/dev-league/index.html",
    "revision": "dfbad5ccc4e53f3ea90f5d45a26267c0"
  },
  {
    "url": "tags/developer-festival/index.html",
    "revision": "dad276028997f1ceea5f85a53530bfe1"
  },
  {
    "url": "tags/development/index.html",
    "revision": "33429287ae85b027285614ed33721bca"
  },
  {
    "url": "tags/devleague/index.html",
    "revision": "8b81bc95592f17a946b8645ee9611450"
  },
  {
    "url": "tags/dictatorships/index.html",
    "revision": "12a9511c789bb2b10b7bef2f0b59abdc"
  },
  {
    "url": "tags/dictionary/index.html",
    "revision": "7b8a1e010d12d46897bf7e3c2eeb8276"
  },
  {
    "url": "tags/digital-hieroglyphics/index.html",
    "revision": "7625ffc3e1f8636a2b7484a901623b64"
  },
  {
    "url": "tags/digital/index.html",
    "revision": "3d847dd966b6edc9a1e3f01bb25af47e"
  },
  {
    "url": "tags/dinos/index.html",
    "revision": "0fb4deab7117fe384bbd69f9d510f69a"
  },
  {
    "url": "tags/dinosaurs/index.html",
    "revision": "6deff5e5ef172d4fc9c5cce951024be2"
  },
  {
    "url": "tags/disabilities/index.html",
    "revision": "5e5b0dc0dafb80416b770fe14a7010cd"
  },
  {
    "url": "tags/diversity-conference/index.html",
    "revision": "66c02dd96f11b31d6ce5cbc2dc98c676"
  },
  {
    "url": "tags/diversity-in-tech/index.html",
    "revision": "98fecba36a90bdcde7bd066537a63081"
  },
  {
    "url": "tags/diversity-tales/index.html",
    "revision": "d9223a1bfffb15e9c43f7e019f1e1ee1"
  },
  {
    "url": "tags/diversity/index.html",
    "revision": "c3124e62614a2ce35c5aa738fcf66abb"
  },
  {
    "url": "tags/do-not-offend/index.html",
    "revision": "85b0b348326a616e36e43a8796898233"
  },
  {
    "url": "tags/dojo/index.html",
    "revision": "dd5887301f76a45fc23d676dedb4958c"
  },
  {
    "url": "tags/dont-starve-game/index.html",
    "revision": "11e645e730cf1687543ec6f342145d02"
  },
  {
    "url": "tags/dont-starve-review/index.html",
    "revision": "9edf4b88df979a004ba01c33803478e2"
  },
  {
    "url": "tags/dont-starve/index.html",
    "revision": "a5ac539edbf87123c6f5c7cad4962387"
  },
  {
    "url": "tags/doubloon/index.html",
    "revision": "5811bc6435fc3686d4f8a7c22ccc7e23"
  },
  {
    "url": "tags/download-mp3/index.html",
    "revision": "0e1ad25e392df61758a3168bb30aa836"
  },
  {
    "url": "tags/drop-out/index.html",
    "revision": "10087d134dd341cfc6ccd418f8d37f87"
  },
  {
    "url": "tags/dropbox/index.html",
    "revision": "173638bc4e0aebd09331d0d7fd96823d"
  },
  {
    "url": "tags/duck-bill/index.html",
    "revision": "ca115e2b2a1a3d707a207577441e8699"
  },
  {
    "url": "tags/economy/index.html",
    "revision": "610233c56bf4dcbad0e0b4417fc1da44"
  },
  {
    "url": "tags/edgar-allen-poe/index.html",
    "revision": "1686ef01531e6ba1344f5597edb84bf9"
  },
  {
    "url": "tags/egghead.io/index.html",
    "revision": "c3adfd7383708ad258b831be47f27586"
  },
  {
    "url": "tags/el-capitan/index.html",
    "revision": "756c3486dcd2f7786d42782f1ef7886a"
  },
  {
    "url": "tags/ell/index.html",
    "revision": "b74013e6af99897df7332fc43af37fda"
  },
  {
    "url": "tags/eloquent-javascript/index.html",
    "revision": "fad27eda4e3082e0fbb34ab6dfc029b2"
  },
  {
    "url": "tags/email/index.html",
    "revision": "ed86bc465ab825d28013925ce0acc0f5"
  },
  {
    "url": "tags/emails/index.html",
    "revision": "845f5d7923070f5cc7290f9cda951119"
  },
  {
    "url": "tags/emoji/index.html",
    "revision": "9d290d94b75c72723bc6aafdcd2f1678"
  },
  {
    "url": "tags/emotions/index.html",
    "revision": "d3096c9abe399498176c3073c340e014"
  },
  {
    "url": "tags/ender-wiggin/index.html",
    "revision": "667617d8c03c638c0d4accd6c30b44ea"
  },
  {
    "url": "tags/ender/index.html",
    "revision": "81956a38d049f7edb4357b4644d0295d"
  },
  {
    "url": "tags/enders-game/index.html",
    "revision": "33490e989e1664130db16222e4a188de"
  },
  {
    "url": "tags/endevr/index.html",
    "revision": "74ffae1d2b8e5924477c1387f1599525"
  },
  {
    "url": "tags/engineers/index.html",
    "revision": "0870e55e64dc7d933c89b213cdf2527d"
  },
  {
    "url": "tags/envy/index.html",
    "revision": "158a3082361dd6454bceea2031af3496"
  },
  {
    "url": "tags/epoch/index.html",
    "revision": "14368eb0e195f8395109e35f68ac85ac"
  },
  {
    "url": "tags/epsilon/index.html",
    "revision": "e7c6eb708a327e4b17e3040fed62fd74"
  },
  {
    "url": "tags/equality/index.html",
    "revision": "62835cc978f28f9d0ef1e558b1181a26"
  },
  {
    "url": "tags/equations/index.html",
    "revision": "f1d8f4fc18895c6099035921ad1984d8"
  },
  {
    "url": "tags/error/index.html",
    "revision": "1f1e8cc2b6c6db8137f9852a68b389e3"
  },
  {
    "url": "tags/essay-talks/index.html",
    "revision": "7db1fa906d93862ab85f064886d13cab"
  },
  {
    "url": "tags/essays/index.html",
    "revision": "d24dd57dd4738bb0def329886eef9908"
  },
  {
    "url": "tags/ethnicities/index.html",
    "revision": "a2f2cb804532a8080e096de41db44565"
  },
  {
    "url": "tags/exams/index.html",
    "revision": "a82dc7cdddf2b2b625837e889003a255"
  },
  {
    "url": "tags/experience/index.html",
    "revision": "cc70db7d5fd1f76ab834310fa2a4ad3d"
  },
  {
    "url": "tags/experimentorders/index.html",
    "revision": "c6a5dbcd65e7ae072796ec223ebe2f67"
  },
  {
    "url": "tags/exploits/index.html",
    "revision": "8fc61478eace371fc824c5e152b35a3a"
  },
  {
    "url": "tags/extension/index.html",
    "revision": "ecc451e59742d946d87a388b9989ba2a"
  },
  {
    "url": "tags/extensions/index.html",
    "revision": "31a18fc3a0af4a650cd451fc0aa329d6"
  },
  {
    "url": "tags/facebook-page/index.html",
    "revision": "6056ce5c0764ae6d6ffd8d80965257e6"
  },
  {
    "url": "tags/facebook/index.html",
    "revision": "41be0b6f0f1bdfb9195be334f9353e24"
  },
  {
    "url": "tags/factorials/index.html",
    "revision": "502944facd749b1a6a7e0e8e33d22140"
  },
  {
    "url": "tags/fahrenheit/index.html",
    "revision": "3849fd66588fcce18c3cbf017932a099"
  },
  {
    "url": "tags/fairy/index.html",
    "revision": "1c39b84fa65691517bce4ac501f83779"
  },
  {
    "url": "tags/falling/index.html",
    "revision": "98bc37907d8da002587b1d775a70a3cb"
  },
  {
    "url": "tags/famine/index.html",
    "revision": "896afdf16ceb008ceefea14953e51cf5"
  },
  {
    "url": "tags/famo.us-university/index.html",
    "revision": "15be19c823ee89994de1d587ddf146ba"
  },
  {
    "url": "tags/fantasy-novels/index.html",
    "revision": "ae496113a8a458509da1f349b370a472"
  },
  {
    "url": "tags/fantasy/index.html",
    "revision": "7be536e2b01ee59365473eaabb612f23"
  },
  {
    "url": "tags/fast-growing-industry/index.html",
    "revision": "792ea98d8042d15f0f026d37c24811a8"
  },
  {
    "url": "tags/fear/index.html",
    "revision": "df7ddee5d009bf95ad1ce8d6622a6dde"
  },
  {
    "url": "tags/featured/index.html",
    "revision": "9f417d74af43e7e95b376f2907d177a7"
  },
  {
    "url": "tags/february-2015/index.html",
    "revision": "dc49cce40e80c323f216b7b6cdc2c0c7"
  },
  {
    "url": "tags/february/index.html",
    "revision": "49dcbee40061c4bb1b02862a43b18cde"
  },
  {
    "url": "tags/fibonacci/index.html",
    "revision": "b11560fbce09aceaf73b75e7ef923f50"
  },
  {
    "url": "tags/film/index.html",
    "revision": "d9849ab45fc077c3a3612a45fb827866"
  },
  {
    "url": "tags/final-cut-pro-x/index.html",
    "revision": "bef930bd114f0e3cba20847c87d93692"
  },
  {
    "url": "tags/final-project/index.html",
    "revision": "1285024798d7f500e09df7e371a456b2"
  },
  {
    "url": "tags/finding/index.html",
    "revision": "ad793fb1eda40470daf887ba85821847"
  },
  {
    "url": "tags/firehose-project/index.html",
    "revision": "68719cfc872af4214c3164883a829037"
  },
  {
    "url": "tags/first-meetup/index.html",
    "revision": "5a33d4605b577af7c7e79bc2bafdf347"
  },
  {
    "url": "tags/first-week/index.html",
    "revision": "b0869e7bca352922c6551a148ad1b037"
  },
  {
    "url": "tags/flashcard-design/index.html",
    "revision": "c6d7ab395f501f87362a25c27532a35d"
  },
  {
    "url": "tags/flashcards/index.html",
    "revision": "feae9abbedead2ebbe1809c9268f4f9a"
  },
  {
    "url": "tags/flatiron/index.html",
    "revision": "f925028fbfc5a74faed245b0e9416538"
  },
  {
    "url": "tags/flavours/index.html",
    "revision": "3d76278741b660d3e273d93435085165"
  },
  {
    "url": "tags/flights/index.html",
    "revision": "e7b67bb550bd167b1c62acd6e833a7d9"
  },
  {
    "url": "tags/float/index.html",
    "revision": "fd542de2a14923a492c5c2511a257343"
  },
  {
    "url": "tags/floating-point/index.html",
    "revision": "8dea94916a5a2301fc06d9f9de24eb18"
  },
  {
    "url": "tags/flux/index.html",
    "revision": "f298415eeaa2e588205b0692cb9fe727"
  },
  {
    "url": "tags/formic/index.html",
    "revision": "78b97a5f6e2b995a47c336d3339b84eb"
  },
  {
    "url": "tags/formula/index.html",
    "revision": "caa85f8c93e55117e2a513529a3f182b"
  },
  {
    "url": "tags/foundations/index.html",
    "revision": "eda99a4353e41b2f7ecf059c657f97fe"
  },
  {
    "url": "tags/founders/index.html",
    "revision": "3770b9233e20d122f57033dbbb045a5a"
  },
  {
    "url": "tags/fragile/index.html",
    "revision": "dc465425d6bc12dd78d9f5c3913fe6ba"
  },
  {
    "url": "tags/frameworks/index.html",
    "revision": "9d04ff6018e91f3e04f64a20cb18a607"
  },
  {
    "url": "tags/frankenweenie/index.html",
    "revision": "c7a5aceb2d6f08f52db9c1fd4944aeff"
  },
  {
    "url": "tags/free-code-camp/index.html",
    "revision": "958e4fed749f31285fa2b7dabeb9072c"
  },
  {
    "url": "tags/freeman/index.html",
    "revision": "1e5069a958c358b7bf6e386d3f203aa3"
  },
  {
    "url": "tags/friends-and-family/index.html",
    "revision": "b7acc6a4c896de465d80da19d8e146e7"
  },
  {
    "url": "tags/friendship/index.html",
    "revision": "a2ba393439a31bc0a562d80591c0af33"
  },
  {
    "url": "tags/fuck/index.html",
    "revision": "31b7acf62b1551a16252e28c1c3e94e5"
  },
  {
    "url": "tags/fucking/index.html",
    "revision": "317072c108927effbb3894096369ca9e"
  },
  {
    "url": "tags/full-stack-academy-of-code/index.html",
    "revision": "68a87042cd90980902f6c9a8eb392056"
  },
  {
    "url": "tags/full-stack/index.html",
    "revision": "d010168b8ed77dcd4d6768bdd20db8b3"
  },
  {
    "url": "tags/full/index.html",
    "revision": "492389a97cffc0cce8d6324f725bcecc"
  },
  {
    "url": "tags/fullstack-academy-of-code/index.html",
    "revision": "a4cd3f769110c015fbac2ee7c914116b"
  },
  {
    "url": "tags/fullstack-academy-week-4/index.html",
    "revision": "3e2be3c9eb266e421fdfbc2b22f79710"
  },
  {
    "url": "tags/fullstack-academy-week-5/index.html",
    "revision": "867f32680085d15757acb947a46fc586"
  },
  {
    "url": "tags/fullstack-academy/index.html",
    "revision": "85ebfb18531e0af39f79ffa55fb8a9ab"
  },
  {
    "url": "tags/fullstack-beta/index.html",
    "revision": "9190f9edd0214e97e33fb2d8e881d6b1"
  },
  {
    "url": "tags/fullstack-experience/index.html",
    "revision": "25f65fdba7d674c7499f6d8cb0b85d7b"
  },
  {
    "url": "tags/fullstack-fellows/index.html",
    "revision": "32cccc45f752e140fc169449323fb9d1"
  },
  {
    "url": "tags/fullstack-foundations/index.html",
    "revision": "2a13bc4b47d68bbb2bf55d882a18f53c"
  },
  {
    "url": "tags/fullstack-javascript-coding-bootcamp/index.html",
    "revision": "6b6b735e490498ed8c8cea5bbbdb369c"
  },
  {
    "url": "tags/fullstack-week/index.html",
    "revision": "ff93a89c862e5032379e414f9a1fd026"
  },
  {
    "url": "tags/fullstack/index.html",
    "revision": "ecc54b44b2b02b4fcd49a891e88c2a5f"
  },
  {
    "url": "tags/fundamentals/index.html",
    "revision": "bdd69912add686e27ce956b70435abf1"
  },
  {
    "url": "tags/funny/index.html",
    "revision": "8cd0dc1c837ebff33c33a64d0ef13a66"
  },
  {
    "url": "tags/future-plans/index.html",
    "revision": "2f7a37ff4556e33754fb31c18d5865fd"
  },
  {
    "url": "tags/fvcproductions/index.html",
    "revision": "0e68335be6741ca5295585fad1a53c1e"
  },
  {
    "url": "tags/game-review/index.html",
    "revision": "563083779c393b2754e0dd27c78e75bf"
  },
  {
    "url": "tags/game/index.html",
    "revision": "178bb94ed3450df2daf600032e3f3c9f"
  },
  {
    "url": "tags/games-night/index.html",
    "revision": "6f4fe1f8b2ec8c26f0aec6f50b742e28"
  },
  {
    "url": "tags/games/index.html",
    "revision": "50ee56da46903fefa605d23cadfb2bad"
  },
  {
    "url": "tags/gaming/index.html",
    "revision": "3c3b112571e5b281f97da9a839ae5abd"
  },
  {
    "url": "tags/gamma/index.html",
    "revision": "cdd6755229a62e43307560e436c6978f"
  },
  {
    "url": "tags/gates/index.html",
    "revision": "ef3e717730c711eaabb1a6ed370c6965"
  },
  {
    "url": "tags/gavin-young/index.html",
    "revision": "c3291edf618626538f10c3a8a9781f71"
  },
  {
    "url": "tags/gay-marriage-legal-now/index.html",
    "revision": "c53906e515b45a676994ca7c45d62a1e"
  },
  {
    "url": "tags/gdg-hampton-roads/index.html",
    "revision": "d50946d6d1c742ccc71263819f8873c6"
  },
  {
    "url": "tags/gender/index.html",
    "revision": "e056f8218ccba5155fe2700724309bcf"
  },
  {
    "url": "tags/general-assembly/index.html",
    "revision": "d8d9c3d0393478b314672d492e5ffa58"
  },
  {
    "url": "tags/georgia-tech/index.html",
    "revision": "d2019fc65bcc5cf632f3a9e29479814a"
  },
  {
    "url": "tags/gettemplate/index.html",
    "revision": "f5299f4867ea28f0eb5c1c8438ad63ad"
  },
  {
    "url": "tags/gif/index.html",
    "revision": "1f1f2c99d70122cd1762987920accad9"
  },
  {
    "url": "tags/gifs/index.html",
    "revision": "d4ed5345c17d8462671fc462bb6922d3"
  },
  {
    "url": "tags/gist/index.html",
    "revision": "efd18f2a123846405317b08a069021ae"
  },
  {
    "url": "tags/github-projects/index.html",
    "revision": "bfcbd4e7d7633727ec1b30a86577f7ea"
  },
  {
    "url": "tags/github/index.html",
    "revision": "74c9cf0c138a958f8b6ea11e921b13dd"
  },
  {
    "url": "tags/giving-back/index.html",
    "revision": "49707d564d4cb0182408c301af692a15"
  },
  {
    "url": "tags/glimpse/index.html",
    "revision": "a415577a1a60b9734f9e5fd0c0b13a05"
  },
  {
    "url": "tags/gluttony/index.html",
    "revision": "208b1cb6c8775d917199d5532d10b1e1"
  },
  {
    "url": "tags/gmail/index.html",
    "revision": "a5a3aff0d5fc558846649a5a3e7bd39a"
  },
  {
    "url": "tags/gold-doubloons/index.html",
    "revision": "2b6aca9be7ad6579a8a24675e4e88e54"
  },
  {
    "url": "tags/gold/index.html",
    "revision": "4bd6c0af341a4eab6d62fc396cad152c"
  },
  {
    "url": "tags/goldman-sachs/index.html",
    "revision": "9070edd755a413a13a455989fce36b2d"
  },
  {
    "url": "tags/good-looks/index.html",
    "revision": "33952da9878dc9556648b8555feb727f"
  },
  {
    "url": "tags/googl/index.html",
    "revision": "944ebc926a2922aab2d593804bfb96e5"
  },
  {
    "url": "tags/google-map/index.html",
    "revision": "abe744f575712d6a8e520e3dadd5df37"
  },
  {
    "url": "tags/google-maps-api/index.html",
    "revision": "ce4d5ac1905c9302e78b91df07a06845"
  },
  {
    "url": "tags/google-slides/index.html",
    "revision": "fbd9bc830d3c1c4cb99b87bb701a15ed"
  },
  {
    "url": "tags/google+/index.html",
    "revision": "afae27291a6ca4d9c0134f2e7f46e29f"
  },
  {
    "url": "tags/gottfrid-svartholm/index.html",
    "revision": "9b56bfdf1298a2a68b93826e23b9305c"
  },
  {
    "url": "tags/grace-hopper/index.html",
    "revision": "c088677a2d4d659ce0f8a013e923adc5"
  },
  {
    "url": "tags/graduate-school/index.html",
    "revision": "c36a3414eaaa453062c58dd604e5fb3f"
  },
  {
    "url": "tags/graduate/index.html",
    "revision": "38ac445dfd0a6abad093e11aa5a5ac16"
  },
  {
    "url": "tags/graduating/index.html",
    "revision": "cfcd25a785ed1cc1694a186632a93fbe"
  },
  {
    "url": "tags/grand-gallery/index.html",
    "revision": "7df2ad50b68f2e6607d26ce2943e8b4e"
  },
  {
    "url": "tags/graphic-design-bootcamp/index.html",
    "revision": "18097b8a7c3ef0dc6966c0a6dd17ebba"
  },
  {
    "url": "tags/graphic-design/index.html",
    "revision": "870357d237b5b60909d3edd001444a2a"
  },
  {
    "url": "tags/gratitude/index.html",
    "revision": "a35a138c151a6cb7ac30a7b597f77f81"
  },
  {
    "url": "tags/gre/index.html",
    "revision": "d049a005fd08232877742f57704716a0"
  },
  {
    "url": "tags/greed/index.html",
    "revision": "0598665d788f92351afca898de93573a"
  },
  {
    "url": "tags/greek-letters/index.html",
    "revision": "2c620fe3388c2667ead71959a594456a"
  },
  {
    "url": "tags/growth/index.html",
    "revision": "1a6e0cdf02cfd5bd495aac84267dbdea"
  },
  {
    "url": "tags/hack-app/index.html",
    "revision": "4736cd6b4354aa6264df8549ffe7fc61"
  },
  {
    "url": "tags/hack-reactor/index.html",
    "revision": "2f1c20138699e0a4b144cf67cb8e04a7"
  },
  {
    "url": "tags/hackathon-starter/index.html",
    "revision": "59f44c5517a51ff91fe4c6b01efc1f12"
  },
  {
    "url": "tags/hackathons/index.html",
    "revision": "5c2d18d558fef55434aa0c66b345374a"
  },
  {
    "url": "tags/hacker-in-residence/index.html",
    "revision": "2c5a69277f5b30d2664ae3f3ea17fbad"
  },
  {
    "url": "tags/hacking/index.html",
    "revision": "f79c16cfa711034ca2b41f9419b8bdab"
  },
  {
    "url": "tags/hackreactor/index.html",
    "revision": "3966f067936a376fb529cd80a9f96868"
  },
  {
    "url": "tags/hampton-roads-devfest/index.html",
    "revision": "a4e12b6362a817c94ea8f935f0eefdf1"
  },
  {
    "url": "tags/hampton-roads/index.html",
    "revision": "27abc70f26dc4afeafa711027e5023d1"
  },
  {
    "url": "tags/hampton-university/index.html",
    "revision": "5332099f2ee1e3e568d8c3a98664fe75"
  },
  {
    "url": "tags/hampton/index.html",
    "revision": "92c158e9d4998efc98fdfe7912f7734a"
  },
  {
    "url": "tags/hands-clean/index.html",
    "revision": "2364b2e2d69cada1c300af97bc1b029f"
  },
  {
    "url": "tags/hands/index.html",
    "revision": "8175b106e0012e31fb2e1d420e2d56bc"
  },
  {
    "url": "tags/harry-potter/index.html",
    "revision": "cc8f91e09ff0d18c7928c643482929ea"
  },
  {
    "url": "tags/harvey-mudd/index.html",
    "revision": "c0f6609bb492a0994035c49886fd6f82"
  },
  {
    "url": "tags/hawaii/index.html",
    "revision": "332b7fb8b350f89484e8941b0f7108de"
  },
  {
    "url": "tags/head/index.html",
    "revision": "f354b3802e4aed329ffb7ee587bb6fa4"
  },
  {
    "url": "tags/heap-sort/index.html",
    "revision": "ee2aa42410e83135f5355c602c96048b"
  },
  {
    "url": "tags/heart/index.html",
    "revision": "5c3a5235df8da230d484888d74326839"
  },
  {
    "url": "tags/hearty/index.html",
    "revision": "1ecffd86a7eeecb099909decc0ab7b20"
  },
  {
    "url": "tags/hector-barbossa/index.html",
    "revision": "a485e788679e24e8fc5d9a2f547a428f"
  },
  {
    "url": "tags/hemingway/index.html",
    "revision": "5732cc8837078b7dd9f930ce50a79c4b"
  },
  {
    "url": "tags/hexadecimal-numbers/index.html",
    "revision": "6227d42618438acb8f577db3cd966061"
  },
  {
    "url": "tags/hexadecimal/index.html",
    "revision": "690facec2107c5cd26b2a9772ebcf7d4"
  },
  {
    "url": "tags/hieroglyphics/index.html",
    "revision": "1a543ef8c76d39952943b22950de100f"
  },
  {
    "url": "tags/high-school-volunteering/index.html",
    "revision": "4f3ff1fd82839ec9852d9dba2dfba716"
  },
  {
    "url": "tags/high-school/index.html",
    "revision": "d63418541763f33aef92ff42ad8f7642"
  },
  {
    "url": "tags/hip-hop/index.html",
    "revision": "ee97285a3d0ef0ab36ce939979f121c0"
  },
  {
    "url": "tags/hiredot/index.html",
    "revision": "730b58c7a507a7a92f3047b967dc5f1f"
  },
  {
    "url": "tags/hiredot2/index.html",
    "revision": "d33028623664495678b34856bbff37a3"
  },
  {
    "url": "tags/hispanics-in-computing/index.html",
    "revision": "83f38a998bd1d99c2e3b4ded757f3a1c"
  },
  {
    "url": "tags/hollow-knight/index.html",
    "revision": "5e036c682ace0a1e09ff2c4703b1b821"
  },
  {
    "url": "tags/holocaust/index.html",
    "revision": "b973854120925b27e91eda1b3f9f1950"
  },
  {
    "url": "tags/holy-grail/index.html",
    "revision": "ec7753885f3c0a4a27ac9c18e1f5d213"
  },
  {
    "url": "tags/homework-assignment/index.html",
    "revision": "6bdb42c30c3ecdbbeaf8073e639c3ba9"
  },
  {
    "url": "tags/hoot-suite/index.html",
    "revision": "16a2d89fc8c415c6800e82aafc115a92"
  },
  {
    "url": "tags/horror/index.html",
    "revision": "f3e336e0fdc0a981100c0b6772936888"
  },
  {
    "url": "tags/hot-seat/index.html",
    "revision": "905d3e822bce5fcede5cf891b2c7e525"
  },
  {
    "url": "tags/hour-of-code-code.org/index.html",
    "revision": "d2654e880846160bca7ce20dac775a04"
  },
  {
    "url": "tags/hour-of-code/index.html",
    "revision": "c874e9d04583255c3b64e5c8b72e9774"
  },
  {
    "url": "tags/hour/index.html",
    "revision": "c214d2affb456c7a29159071ebe2bfbd"
  },
  {
    "url": "tags/hourofcode/index.html",
    "revision": "ad9ed10575b2a5b9bc366e0dc8154eae"
  },
  {
    "url": "tags/house/index.html",
    "revision": "d9e06895ddafa545645da6bad205b0c5"
  },
  {
    "url": "tags/how-to-describe-yourself/index.html",
    "revision": "dbfe70433d9c9cb186d7496e0782ca96"
  },
  {
    "url": "tags/how-to-study/index.html",
    "revision": "257aca46254b09ae94a01231a01ffb05"
  },
  {
    "url": "tags/hr-devfest/index.html",
    "revision": "d11c4d155a714dd3f71905f3a92ecfc0"
  },
  {
    "url": "tags/hr-fen/index.html",
    "revision": "cf6d3817626bc2c9cfb64ee7bac63219"
  },
  {
    "url": "tags/hrdevfest/index.html",
    "revision": "32ed0ad83a94fe7904905790d392ca8a"
  },
  {
    "url": "tags/html/css/index.html",
    "revision": "82fb11d51979c64ea6d633929b963ec3"
  },
  {
    "url": "tags/html/index.html",
    "revision": "bc5541dfcc16750b73b7a17088acb822"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "38f0b1ca27887c243789189787bf9e88"
  },
  {
    "url": "tags/html5up/index.html",
    "revision": "ab753cdc16253371a23047355c3f97df"
  },
  {
    "url": "tags/human-computer-interaction/index.html",
    "revision": "2bf1b5fda486f6f20c16392361e332e4"
  },
  {
    "url": "tags/human-robot-collaboration/index.html",
    "revision": "6235019a40ee56a8c7c2d522f124a6bd"
  },
  {
    "url": "tags/humanity/index.html",
    "revision": "927d528949257de709a8d718b084f9db"
  },
  {
    "url": "tags/huntly/index.html",
    "revision": "92748954f11b84721b1022dabf09887d"
  },
  {
    "url": "tags/hyatt-regency/index.html",
    "revision": "740df3dc857e30a225dd81048c1ebadc"
  },
  {
    "url": "tags/ibm-watson-research/index.html",
    "revision": "4c3ce2170c18c0d7f71a7f64027fa5cc"
  },
  {
    "url": "tags/ibm-watson/index.html",
    "revision": "da95f4581d19c01c0b26d41dbb6d2fd2"
  },
  {
    "url": "tags/icon/index.html",
    "revision": "8fe5ed1a86131b433f075e0851f393e7"
  },
  {
    "url": "tags/ideas/index.html",
    "revision": "c74b3607bb457d2dbfaec40acee2760d"
  },
  {
    "url": "tags/idiotic/index.html",
    "revision": "df04ba1f56feff4890ac14d6e6b7e6a2"
  },
  {
    "url": "tags/iftt/index.html",
    "revision": "c7b28602b8b55e0693cfa0b62c90f342"
  },
  {
    "url": "tags/imcompetech/index.html",
    "revision": "baf197c602eeea2a128e2f8c4a6981d5"
  },
  {
    "url": "tags/imovie101/index.html",
    "revision": "bf6ef3825d8ea63da3ab1e5f425f9a0c"
  },
  {
    "url": "tags/import-multiple-fonts/index.html",
    "revision": "bb8208906aeac06749344592184ccd48"
  },
  {
    "url": "tags/impossible-quiz/index.html",
    "revision": "20cf31d038e35a9053bea8ffa8992744"
  },
  {
    "url": "tags/index.html",
    "revision": "1ae75b1356ce58a9ea0d7fc748ae042f"
  },
  {
    "url": "tags/indie-game/index.html",
    "revision": "d339b927cb8b55f808430eba3b0c3ab3"
  },
  {
    "url": "tags/indie/index.html",
    "revision": "83ebb68ddd31b5a22d7db07576e8ef52"
  },
  {
    "url": "tags/industry/index.html",
    "revision": "6a5665d40af7fa9d8f8f1742e0e455c2"
  },
  {
    "url": "tags/infants/index.html",
    "revision": "177eaddd30eba56a05ffc9e6b5d3c45d"
  },
  {
    "url": "tags/infoonepagelove.com/index.html",
    "revision": "54a846eec66776d65cfca6eccbb6c5d1"
  },
  {
    "url": "tags/initial-interview/index.html",
    "revision": "578b0f10accca78f4aaf77310448db05"
  },
  {
    "url": "tags/initializing/index.html",
    "revision": "b758590bc1883ef5d048be1a5901e69a"
  },
  {
    "url": "tags/inkling/index.html",
    "revision": "9d2301356223eeb60418530397eb00d3"
  },
  {
    "url": "tags/inklings/index.html",
    "revision": "4d465de6199ac7d755c026d728955c82"
  },
  {
    "url": "tags/inorder/index.html",
    "revision": "ab8696a98839bf46195ddf9de5eef914"
  },
  {
    "url": "tags/insert/index.html",
    "revision": "57cb23f0bda9a3b7a089e16b59867190"
  },
  {
    "url": "tags/insertion-sorts/index.html",
    "revision": "2f1bea7ae4f5119d1675b0f5d2a3ca92"
  },
  {
    "url": "tags/inside-out/index.html",
    "revision": "9db5f69e9b8799fdcb41daabc100c989"
  },
  {
    "url": "tags/inside/index.html",
    "revision": "c016394ccbec3db1f75c61a0b406c74a"
  },
  {
    "url": "tags/installation/index.html",
    "revision": "6c57c7c877c237a0fdbf2b45dcccfb67"
  },
  {
    "url": "tags/instructors/index.html",
    "revision": "558ae7a87dd38865239d4ec7b6df8b1d"
  },
  {
    "url": "tags/insult/index.html",
    "revision": "f9b53a028789b7cb13db0cdf0b7717fa"
  },
  {
    "url": "tags/insults/index.html",
    "revision": "3b0fa2d3191e57262e4444c392fb38c4"
  },
  {
    "url": "tags/integer/index.html",
    "revision": "b7192568fe7f41ad54a467d588dce127"
  },
  {
    "url": "tags/integers/index.html",
    "revision": "2b0c7f263a94e0e91199844e3d8b035a"
  },
  {
    "url": "tags/integrate-your-school-email/index.html",
    "revision": "14094b252c2b9b74f8b6060237014be1"
  },
  {
    "url": "tags/integrated-systems/index.html",
    "revision": "2425fe5e1f4c6ce27f1dcee43bf70f33"
  },
  {
    "url": "tags/intensive/index.html",
    "revision": "16900a8fba119bf7fd5828f24b5a15f7"
  },
  {
    "url": "tags/interconnectedness/index.html",
    "revision": "3f51d12657615a64606c8f47e88a4c67"
  },
  {
    "url": "tags/interfeud/index.html",
    "revision": "251100ad07b8b4cd0455e174a362c31d"
  },
  {
    "url": "tags/international-fleet-personnel/index.html",
    "revision": "13b39cd65df3868a35ca2aadd29e7ced"
  },
  {
    "url": "tags/internet-trolls/index.html",
    "revision": "c2d30498db4c8d1c6d563f8117511272"
  },
  {
    "url": "tags/internship-interview/index.html",
    "revision": "d37044dd00576b521994830faa0ae2dc"
  },
  {
    "url": "tags/internships/index.html",
    "revision": "1613f0a1755dd136e839c51a697c0a56"
  },
  {
    "url": "tags/interview/index.html",
    "revision": "c3c5b1d6b2daf72cfd75631b20d66862"
  },
  {
    "url": "tags/interviewer/index.html",
    "revision": "67f92df3639d6cbc38f8fa83016dfbc7"
  },
  {
    "url": "tags/interviews/index.html",
    "revision": "dbcb0338c4ac123f85762dced5f2e453"
  },
  {
    "url": "tags/intro-course/index.html",
    "revision": "ba0249462437d544caf8cc6587218ff1"
  },
  {
    "url": "tags/intro/index.html",
    "revision": "c8f346d8b5cb61614c0940ce9d17cc92"
  },
  {
    "url": "tags/ios/index.html",
    "revision": "4f8efa2c02c9c7d01de5184dae835553"
  },
  {
    "url": "tags/isaac/index.html",
    "revision": "4205583717e0e61206be126a6acddfa8"
  },
  {
    "url": "tags/it-crowd/index.html",
    "revision": "7a4f19d1d176d16e12bc6e229f78a72b"
  },
  {
    "url": "tags/jack-sparrow/index.html",
    "revision": "c74f22f5766bdc8ffb6977aaa81fa987"
  },
  {
    "url": "tags/jason-sewell/index.html",
    "revision": "8e30edaaf1538f611720f9063170afa3"
  },
  {
    "url": "tags/java-arrays/index.html",
    "revision": "894775d0a30ef8fcdcd6f97399d414a6"
  },
  {
    "url": "tags/java-decompiler/index.html",
    "revision": "641e46547350b645c577a6448b3b3458"
  },
  {
    "url": "tags/java-program/index.html",
    "revision": "c13f1d4c44bae8ce0989bfc2878402b4"
  },
  {
    "url": "tags/java-programming/index.html",
    "revision": "dcf34018323a4505250f60252f2a8e20"
  },
  {
    "url": "tags/java-queues/index.html",
    "revision": "0cbfa79cd7b41eb318e095a9c6da7993"
  },
  {
    "url": "tags/java/index.html",
    "revision": "b21ebca234c8092444639ff73d3648c3"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "dda831a322e9e0b09a64917a0a7e5766"
  },
  {
    "url": "tags/jd.benow.ca/index.html",
    "revision": "6dc5b68c0650e728ba6fdc526653d1a6"
  },
  {
    "url": "tags/jd/index.html",
    "revision": "a8d4634588ab9aa5ee90a20752da6c28"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "86be3226b12181b8c9796ba6207ee1e9"
  },
  {
    "url": "tags/jeopardy-template/index.html",
    "revision": "ec1fea0e93862c97967f8d2640fbaa5e"
  },
  {
    "url": "tags/jeopardy/index.html",
    "revision": "9d4a2d5ffc8feef36c0f362bd25d6eac"
  },
  {
    "url": "tags/jesus/index.html",
    "revision": "3b918f373522464fb669b998ed911c23"
  },
  {
    "url": "tags/jewish-holocaust/index.html",
    "revision": "105a6d1960f39a29345479b3c37fac9c"
  },
  {
    "url": "tags/jimmy/index.html",
    "revision": "07b64a43ca680eb039db3eb7cbce953b"
  },
  {
    "url": "tags/joanna/index.html",
    "revision": "ee969a5e9cfd2e1a028ccfa6ed9e0821"
  },
  {
    "url": "tags/jobs-going-to-robots/index.html",
    "revision": "157d1b791cabc43cca3d985d486c3078"
  },
  {
    "url": "tags/jobs/index.html",
    "revision": "247781db93fb648f659db241656a2677"
  },
  {
    "url": "tags/john-b-dey-elementary/index.html",
    "revision": "673f4ccbab30df80b054a20dea090620"
  },
  {
    "url": "tags/john-b-dey/index.html",
    "revision": "477748f1fc58e12eda21b5ed49d36fda"
  },
  {
    "url": "tags/johnny-depp/index.html",
    "revision": "8c2f4898ba25c34979b32d84f62f67c7"
  },
  {
    "url": "tags/journalism/index.html",
    "revision": "d9725f38f1bc026f6af7dc7207911986"
  },
  {
    "url": "tags/journey-so-far/index.html",
    "revision": "eef9bd09d20e8f9246fa6a461c971583"
  },
  {
    "url": "tags/journey/index.html",
    "revision": "017c7bf8091317599a8ec523276a0c50"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "160579de6c08c7fbf9e0ba6da1ddcf96"
  },
  {
    "url": "tags/js-coding-bootcamps/index.html",
    "revision": "b9638857cfa14273f4ee6c94892272a4"
  },
  {
    "url": "tags/js-library/index.html",
    "revision": "cfbcde5c9320e8004118f837ab20d05e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "fe39731da5c2bc04d8bd4a805677e630"
  },
  {
    "url": "tags/juan-gilbert/index.html",
    "revision": "bac08f33656e98b938956715af756711"
  },
  {
    "url": "tags/jubilant/index.html",
    "revision": "734fca86e49bcb020efa67f9adbdd21c"
  },
  {
    "url": "tags/jumpstart/index.html",
    "revision": "f9eaa5741979ae2189d1968f7a4200e8"
  },
  {
    "url": "tags/just-dance-2014/index.html",
    "revision": "bd39c8f972f6344a210e5a66023d3fd5"
  },
  {
    "url": "tags/justin/index.html",
    "revision": "c1ad5fa531aaae5c7b80dd35a37621ca"
  },
  {
    "url": "tags/katherine-gilhooley/index.html",
    "revision": "82cb68a0267932fb01fa00c719dc825d"
  },
  {
    "url": "tags/key/index.html",
    "revision": "1f686fecdd83eec6ed341b22ef1d6ba0"
  },
  {
    "url": "tags/keyboard-instrument/index.html",
    "revision": "5ed5334aa63b2bbea7fefc53642ccca5"
  },
  {
    "url": "tags/keynote/index.html",
    "revision": "5be15852884d8d19d9ee6b139f4d1f29"
  },
  {
    "url": "tags/kickstarter/index.html",
    "revision": "96af9778aadf359e57ec5922f209dd7a"
  },
  {
    "url": "tags/kinecrtx/index.html",
    "revision": "ac625b77b8f9c145364969e033189f5b"
  },
  {
    "url": "tags/kinect-sports-rivals/index.html",
    "revision": "ecd4055adc182a8cd8ebe2b747562baf"
  },
  {
    "url": "tags/kinect-sports/index.html",
    "revision": "b2c7cc581069f88b2d02259782638ff5"
  },
  {
    "url": "tags/kinect/index.html",
    "revision": "8d0e8c1bf1adddb2ce1e9dbb60156a33"
  },
  {
    "url": "tags/kiss/index.html",
    "revision": "194224ffc07b9c37bc90d5bf57af58ae"
  },
  {
    "url": "tags/klei-entertainment/index.html",
    "revision": "44ba4bf6d40ddb9dd1ccb6387bce3f8b"
  },
  {
    "url": "tags/knighthood/index.html",
    "revision": "0e3108a049bba72f4706bf19680e9070"
  },
  {
    "url": "tags/ko/index.html",
    "revision": "8e605bc6ebfa46db83ba9e8eb5668301"
  },
  {
    "url": "tags/korea/index.html",
    "revision": "8b3d943afb20ed16d567127a98bf93d0"
  },
  {
    "url": "tags/kpcb-fellow-application/index.html",
    "revision": "557886f8a395fe93b4698e9e5ec9eb41"
  },
  {
    "url": "tags/kudos/index.html",
    "revision": "f267776596d8f336b0d0282cc2159161"
  },
  {
    "url": "tags/labs/index.html",
    "revision": "f45a8c49b91673eec908261d0a7bd343"
  },
  {
    "url": "tags/ladies-of-fullstack/index.html",
    "revision": "f616aed5d1feea43532533ff0c04d5cd"
  },
  {
    "url": "tags/langdon/index.html",
    "revision": "66fffbf4bd9ccb68027ae88077c4c923"
  },
  {
    "url": "tags/languages/index.html",
    "revision": "59e4372f68531f18a2f37c54bc37522e"
  },
  {
    "url": "tags/laravel-5.3/index.html",
    "revision": "75607dea840f9052d4e1bcd1295f04b9"
  },
  {
    "url": "tags/laravel-5/index.html",
    "revision": "ac89ba81c444386bc0b000c178e97265"
  },
  {
    "url": "tags/laravel/index.html",
    "revision": "fbfa34287d2968d219e93da4fc23904d"
  },
  {
    "url": "tags/last-days/index.html",
    "revision": "999d6b8077fc50dd24593a04fe65c824"
  },
  {
    "url": "tags/last-stand-union-city/index.html",
    "revision": "a610cb8981361a0d4956e211876cbbf0"
  },
  {
    "url": "tags/last-stand/index.html",
    "revision": "873cc6cfca8ce7ec38571f531670d743"
  },
  {
    "url": "tags/latinos/index.html",
    "revision": "2c6dc6e9ee4863d2e34599ab9f990ee3"
  },
  {
    "url": "tags/lauch-academy/index.html",
    "revision": "bc122c9dbf9abe6bfe556a2193754f2c"
  },
  {
    "url": "tags/launch-academy/index.html",
    "revision": "582153b3f68570c3c248ce351d7f1c33"
  },
  {
    "url": "tags/launcher/index.html",
    "revision": "5d17ea6bd8b7f3245e3a8e4937930133"
  },
  {
    "url": "tags/launchpad-items-reset/index.html",
    "revision": "efc47abe3bcac06ed26c2fd662a9a677"
  },
  {
    "url": "tags/launchpad/index.html",
    "revision": "2fa71b591791078cc855980c30500f59"
  },
  {
    "url": "tags/laws-of-power/index.html",
    "revision": "231acb8820811eaab130e6cfe276edfd"
  },
  {
    "url": "tags/layout/index.html",
    "revision": "ea3b0cb7e7f289ff695dd5f303924516"
  },
  {
    "url": "tags/learn-web-dev/index.html",
    "revision": "f8de5e08e9414116da71028f9ea32976"
  },
  {
    "url": "tags/learning-team-lunch/index.html",
    "revision": "7610f91d4af23b50b4e1e425ba068972"
  },
  {
    "url": "tags/learning-team/index.html",
    "revision": "87e3dfd70f01ff26757cb3500db7a012"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "c93c486d1bcf0c79df79e166d06a42a2"
  },
  {
    "url": "tags/left-subtree/index.html",
    "revision": "5db5ceed1226f13641a38f54563e4016"
  },
  {
    "url": "tags/left/index.html",
    "revision": "3ec9251b17fcab5825e940f0d1723115"
  },
  {
    "url": "tags/lenovo/index.html",
    "revision": "36dd526b896ada270c1c2da3d6754cb6"
  },
  {
    "url": "tags/letter/index.html",
    "revision": "11bd8db5c8e7908e30980d449d4ae994"
  },
  {
    "url": "tags/levels-of-communication/index.html",
    "revision": "99e4016c3e40f95565df93141665ea60"
  },
  {
    "url": "tags/lighthearted/index.html",
    "revision": "fc7914017a6482dee26801b6693c058c"
  },
  {
    "url": "tags/limbo-game/index.html",
    "revision": "41b5fe61fd9f10e31ceb527eccd429ea"
  },
  {
    "url": "tags/limbo/index.html",
    "revision": "b19c2ac16eab2d45a53497bcc3aec1f2"
  },
  {
    "url": "tags/link/index.html",
    "revision": "683220fb3e02d9c713eb90e2bafa93f0"
  },
  {
    "url": "tags/linked-in/index.html",
    "revision": "35e588b9945b0df2d4dcd5ab0a1c9958"
  },
  {
    "url": "tags/linked-lists/index.html",
    "revision": "71fc7d94683daa79e18bb6f3916f1ac8"
  },
  {
    "url": "tags/linkedin/index.html",
    "revision": "72e5e5c10e31389e7c77f5f4701e27f3"
  },
  {
    "url": "tags/lips/index.html",
    "revision": "dc49f9fadb470265a45ac4ea8ea6e274"
  },
  {
    "url": "tags/list/index.html",
    "revision": "56c5d617ad70221bc0c13349d1408ade"
  },
  {
    "url": "tags/liteicon/index.html",
    "revision": "60e4c62dceba05ecfa95bcf78055f703"
  },
  {
    "url": "tags/load-unpacked-extension/index.html",
    "revision": "bd812ea0d2d21a4f63fd93404d2fb3ee"
  },
  {
    "url": "tags/logistics/index.html",
    "revision": "193b126186d4008ac93ca3a1ed349896"
  },
  {
    "url": "tags/lonely/index.html",
    "revision": "e1e6e0e53c0cb547db3690d79632bbaf"
  },
  {
    "url": "tags/long-lists/index.html",
    "revision": "aff31583560f74ee3316821ed1d9289a"
  },
  {
    "url": "tags/lord-of-the-flies/index.html",
    "revision": "8c128da9a5350638631c6deb69f24ac1"
  },
  {
    "url": "tags/lord-of-the-rings-return-of-the-king/index.html",
    "revision": "a14ef9098532ac21795d9013c6662dda"
  },
  {
    "url": "tags/lord-of-the-rings/index.html",
    "revision": "50a4caa177692adc4ff1343fc47f11bb"
  },
  {
    "url": "tags/louvre/index.html",
    "revision": "2a0c267e120e9b5e5c7760e18d0da6d0"
  },
  {
    "url": "tags/love/index.html",
    "revision": "16aeeff7978ebb9d4616c2e7f4dde2de"
  },
  {
    "url": "tags/lunch/index.html",
    "revision": "d93ed195251b06f04b6184e39664fd57"
  },
  {
    "url": "tags/lust/index.html",
    "revision": "29a240dc1aa60ac5d23731496f82e816"
  },
  {
    "url": "tags/lynda.com/index.html",
    "revision": "139226cd349746b675f4d5a62e2e4f9c"
  },
  {
    "url": "tags/mac/index.html",
    "revision": "83f528a4663aa5a0477df6f95be18286"
  },
  {
    "url": "tags/macabre/index.html",
    "revision": "cb7afe67f6bcb44ca2c022f830d0c1b8"
  },
  {
    "url": "tags/macaroni/index.html",
    "revision": "17d197a2bb8fe7058faf3eb86c2a7939"
  },
  {
    "url": "tags/machine-learning/index.html",
    "revision": "8f4cced9870bca62b8cb3b541c1cfd16"
  },
  {
    "url": "tags/mad-cowboy/index.html",
    "revision": "626beeb4acc943c681b001cc22d93990"
  },
  {
    "url": "tags/main-function/index.html",
    "revision": "0b520992be35abcc90890e1663fbfe8f"
  },
  {
    "url": "tags/main-ideas/index.html",
    "revision": "317913026dfc98ca1d662714f14b6683"
  },
  {
    "url": "tags/main-method/index.html",
    "revision": "3316aaa7ed09272ec4b5661841f4847e"
  },
  {
    "url": "tags/make-school/index.html",
    "revision": "1381cbbab9808ef9c34922c443fcfd1f"
  },
  {
    "url": "tags/maker-square/index.html",
    "revision": "d8fb7d4604ee10721f85b4e00fefe74a"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "036286def9e03280876ecff50c91727d"
  },
  {
    "url": "tags/makersquare/index.html",
    "revision": "308447ad39fab75c57ccb569fd1ef060"
  },
  {
    "url": "tags/man/index.html",
    "revision": "b385cdc9e515431db10cd34f921d0f73"
  },
  {
    "url": "tags/manifest.json/index.html",
    "revision": "72d9ee02541af1f58a428786d5124bf9"
  },
  {
    "url": "tags/manuel-perez/index.html",
    "revision": "83bda31a083f74372f05fc5075cf6502"
  },
  {
    "url": "tags/manuel/index.html",
    "revision": "48b8453164327698044d6f3d39068fc8"
  },
  {
    "url": "tags/map-me/index.html",
    "revision": "901826a9f7b310366b5681b245503548"
  },
  {
    "url": "tags/map-of-coding-bootcamps/index.html",
    "revision": "5ab9f2d9811a4a30ea7e2c9857117f78"
  },
  {
    "url": "tags/map/index.html",
    "revision": "0bd9caa4984ee20524cf83d00a3b3c69"
  },
  {
    "url": "tags/mapme/index.html",
    "revision": "8640a2aeb80ecb58e8b4100abc57a339"
  },
  {
    "url": "tags/mario-kart/index.html",
    "revision": "e15d64eb7a37af285ef6f2de6136f5c5"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "7776786d563f8e2159dcb1e72c7ad124"
  },
  {
    "url": "tags/market-size/index.html",
    "revision": "444f4e735d1be540d535f7f7d3ff967b"
  },
  {
    "url": "tags/massachusetts/index.html",
    "revision": "1f75f3db1936eadbf7a181320a2bcef3"
  },
  {
    "url": "tags/materialism/index.html",
    "revision": "a5174fd2b527e589e4c6b6fdc0f4de37"
  },
  {
    "url": "tags/math-functions/index.html",
    "revision": "65bd2a4bcac3bc0d18408fa0578fc4a9"
  },
  {
    "url": "tags/math-java/index.html",
    "revision": "4f947843e94db2cd11af351a386fe913"
  },
  {
    "url": "tags/matthew-fontaine-maury-high-school/index.html",
    "revision": "21ca969f3ddebe067843313f1390437b"
  },
  {
    "url": "tags/maurice-moss/index.html",
    "revision": "e049da60e386cae038f05790477da67c"
  },
  {
    "url": "tags/maury-high-school/index.html",
    "revision": "4b2c308d9acceacb1675a7ccb283e93e"
  },
  {
    "url": "tags/maxs-head/index.html",
    "revision": "e1d61e09b1605e278e98ec58300921d3"
  },
  {
    "url": "tags/mean/index.html",
    "revision": "8751be78440e78725dcdc98767b9d297"
  },
  {
    "url": "tags/meat-boy/index.html",
    "revision": "e14c1ca216dfba6d7d196805b9db06eb"
  },
  {
    "url": "tags/medium/index.html",
    "revision": "31b4b436d16b692e9a2d3faf0af7357c"
  },
  {
    "url": "tags/meetup/index.html",
    "revision": "2a8372ec3498ac2821eaa1f1233893d6"
  },
  {
    "url": "tags/meetups/index.html",
    "revision": "e744f3f0c76ee0987ae1710523e4a680"
  },
  {
    "url": "tags/melodrama/index.html",
    "revision": "cb9e3d70c8a4347dde8c30063c2790b1"
  },
  {
    "url": "tags/memory-address/index.html",
    "revision": "dc4342f0e552b369c5f075e7a461e42d"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "767afacae6183eb966c06a876cd2197d"
  },
  {
    "url": "tags/merge-sort/index.html",
    "revision": "a39ec4cdbfebfcf70d54e4cca855278d"
  },
  {
    "url": "tags/merger/index.html",
    "revision": "7e7bb85aeac90929e4e2822d4f87df2f"
  },
  {
    "url": "tags/michael/index.html",
    "revision": "b824c8c4e08ac4c9a50f08c2c42953d5"
  },
  {
    "url": "tags/middle-school-poems/index.html",
    "revision": "093f5329f3830af5cb68c799fb84c040"
  },
  {
    "url": "tags/midterm/index.html",
    "revision": "c73f43cacc89ebc808f58e30a2fb01dd"
  },
  {
    "url": "tags/migration/index.html",
    "revision": "db38ced9429d07a577881f78aa0e0d47"
  },
  {
    "url": "tags/miklos-nyiszli/index.html",
    "revision": "d7084d89a6006c6fabfc7b62a9d55812"
  },
  {
    "url": "tags/mini/index.html",
    "revision": "1a2bb1f9455d671c4f679f4869b0cfb7"
  },
  {
    "url": "tags/minions/index.html",
    "revision": "a25ee27666be63bfdadce55d8b0db296"
  },
  {
    "url": "tags/mint/index.html",
    "revision": "9447c1a5d9e636d388cf62fd53ff2d41"
  },
  {
    "url": "tags/mit/index.html",
    "revision": "a721a68c55f4b4c43b0949d6cd59c99e"
  },
  {
    "url": "tags/mixer/index.html",
    "revision": "b7ceb2bb92b2429381a1d2d6f8c8e984"
  },
  {
    "url": "tags/mobile-phone/index.html",
    "revision": "98e94f377cb4ca79fdba9b56da2d8e14"
  },
  {
    "url": "tags/modern-tech/index.html",
    "revision": "64e4fb2d9c783139cc80041510d05df9"
  },
  {
    "url": "tags/mom-problems/index.html",
    "revision": "91d670e834e6d4c01bb5118f769060b4"
  },
  {
    "url": "tags/mom/index.html",
    "revision": "136eb9df99d385ca4cd96f5154688bbe"
  },
  {
    "url": "tags/monsters/index.html",
    "revision": "90cf1bacebad024d5c0ec6a7fd9e6846"
  },
  {
    "url": "tags/month-left/index.html",
    "revision": "ead4e9407643a939a07f24fc2e579ce2"
  },
  {
    "url": "tags/morbid/index.html",
    "revision": "79468a589ba88d7624d268c369977b06"
  },
  {
    "url": "tags/mother/index.html",
    "revision": "db827447d5dbce50eec9c43cb4edb36c"
  },
  {
    "url": "tags/motion/index.html",
    "revision": "10f66a7c1dbe78b4ebfb16a8d6eed203"
  },
  {
    "url": "tags/mountain-view/index.html",
    "revision": "c5548eeac3ffd950d8854c0a98b108a7"
  },
  {
    "url": "tags/movies/index.html",
    "revision": "49b35009880508b015ecaaff31147e6a"
  },
  {
    "url": "tags/mp3/index.html",
    "revision": "ebd43b7966a40c1810e98c9ef8723fc0"
  },
  {
    "url": "tags/museum/index.html",
    "revision": "d1d17f6ab174f8c164b2de766c3c42eb"
  },
  {
    "url": "tags/music/index.html",
    "revision": "59f018156ee6bb8169c30984afd93d0d"
  },
  {
    "url": "tags/mvp/index.html",
    "revision": "97bbef3183626fe469b99503da5d1657"
  },
  {
    "url": "tags/neil-gaiman/index.html",
    "revision": "10446bf4b1dd478cce80ef28553b09f6"
  },
  {
    "url": "tags/never-outshine/index.html",
    "revision": "0b825bcf5638262ce5f95d1f21d11fd1"
  },
  {
    "url": "tags/new-meetup/index.html",
    "revision": "926ace5b62ca200cdec019b8c3b9e872"
  },
  {
    "url": "tags/new-network/index.html",
    "revision": "f013840e2aa71d67fd4c8a4cf91f0ed8"
  },
  {
    "url": "tags/new-super-mario-bros/index.html",
    "revision": "97ff40dd9ca634d431b9fa872783ee09"
  },
  {
    "url": "tags/new-year/index.html",
    "revision": "d4cb08462832832f0455933148f68eb0"
  },
  {
    "url": "tags/new-york-city/index.html",
    "revision": "1af3654165c7e9d0274b646b13bf8ce5"
  },
  {
    "url": "tags/news/index.html",
    "revision": "6d1b0595ebe80f6e39b0a16e60753f65"
  },
  {
    "url": "tags/nick-james/index.html",
    "revision": "dd25554afee710dfa4c21e41a6d7056c"
  },
  {
    "url": "tags/nitty-gritty/index.html",
    "revision": "b56ab33465684a7de73dffb92c1d9c36"
  },
  {
    "url": "tags/no-regrets/index.html",
    "revision": "ea158a5981c30becc33153d1bef7f912"
  },
  {
    "url": "tags/node/index.html",
    "revision": "ca70917904d9f2007ef389607060fd6e"
  },
  {
    "url": "tags/nodes/index.html",
    "revision": "a2e18bc5d0c38e042fbdbcfdc135fe91"
  },
  {
    "url": "tags/non-profit/index.html",
    "revision": "88108d12a0c4f2d3bac238237d7bbd10"
  },
  {
    "url": "tags/noob/index.html",
    "revision": "dc830c3ce5143fa278971b6bb5d69688"
  },
  {
    "url": "tags/noobie/index.html",
    "revision": "02f36abc701adc88513e1184aa743ee9"
  },
  {
    "url": "tags/norfolk-javascript/index.html",
    "revision": "d150bc6065ef0856291f94a2aa233055"
  },
  {
    "url": "tags/norfolk-virginia/index.html",
    "revision": "92b09aa4e9abbeafabd40e6a116c699a"
  },
  {
    "url": "tags/norfolk/index.html",
    "revision": "8cbb9767e7b4a804ea8a7e28a8873a41"
  },
  {
    "url": "tags/norfolkjs-journey/index.html",
    "revision": "e6b65115ace619723f56f91424192037"
  },
  {
    "url": "tags/norfolkjs/index.html",
    "revision": "81039ccbe80bd96bbb79ab9d333408c0"
  },
  {
    "url": "tags/north-korea/index.html",
    "revision": "eb2378e585e250b3a8016c90d1468946"
  },
  {
    "url": "tags/north/index.html",
    "revision": "2d120bafd089fc07070a7a2caf549755"
  },
  {
    "url": "tags/northwestern-university/index.html",
    "revision": "5f30c0ad2b8cc73e16aa3703b26c3400"
  },
  {
    "url": "tags/not/index.html",
    "revision": "e4fd4bab8c4fea949706aded7e683a01"
  },
  {
    "url": "tags/notes/index.html",
    "revision": "06824f29fe9deec4c326e1321a2949c6"
  },
  {
    "url": "tags/nothing-to-envy/index.html",
    "revision": "9c648e850ff1a4c944d032037d784f00"
  },
  {
    "url": "tags/nothing/index.html",
    "revision": "9ff7b3138dd21e04930e7522356fab91"
  },
  {
    "url": "tags/novel/index.html",
    "revision": "cc2c921de916b5375b370bfb21235e52"
  },
  {
    "url": "tags/numbers/index.html",
    "revision": "6a12b03f89a3d81c4c9d1f81f129c7e3"
  },
  {
    "url": "tags/numerical-expressions/index.html",
    "revision": "eb3af7155bf96c5c9f08f40f4df50e88"
  },
  {
    "url": "tags/odin-project/index.html",
    "revision": "cf7cb1019501ee93ba6028eb57167151"
  },
  {
    "url": "tags/odu-email-integration/index.html",
    "revision": "22c058a9762f9cd14c3fa06b0ab4e4ac"
  },
  {
    "url": "tags/odu/index.html",
    "revision": "8c535b01a652b753bc78a179969d9dfd"
  },
  {
    "url": "tags/oh-snap/index.html",
    "revision": "fe87b4831853c0836e5a5609004f4d10"
  },
  {
    "url": "tags/old-science/index.html",
    "revision": "3f164e5af7b5b5e791d6d994962930db"
  },
  {
    "url": "tags/one-page-love/index.html",
    "revision": "78742ae736c599805f903d210481bff2"
  },
  {
    "url": "tags/one-week/index.html",
    "revision": "98eae406be9ba0a2ad77890e123c9303"
  },
  {
    "url": "tags/online-course/index.html",
    "revision": "2681ae9d409414d5a5cf2123223f7b73"
  },
  {
    "url": "tags/online-design-course/index.html",
    "revision": "cb327227eec821b13aee14bfcc74c465"
  },
  {
    "url": "tags/online-flash-games/index.html",
    "revision": "575dd9e66eb9b6ce89952b85139e2703"
  },
  {
    "url": "tags/online-image-editor/index.html",
    "revision": "a4644f59af60dac431e443a6986a7596"
  },
  {
    "url": "tags/online-python-tutor/index.html",
    "revision": "b683d615b8d29af684c1cc51fb0ca3ae"
  },
  {
    "url": "tags/op-smile/index.html",
    "revision": "efe13841e142388ea83e504c1ce35978"
  },
  {
    "url": "tags/operation-smile/index.html",
    "revision": "09e2eb8b4f86e5a4626e4e824526fe01"
  },
  {
    "url": "tags/oral-comm/index.html",
    "revision": "91be9e20a5252f079ce8dc0e4b5427a8"
  },
  {
    "url": "tags/oren-etzioni/index.html",
    "revision": "a14e9cc25da533f353505e347799a2d4"
  },
  {
    "url": "tags/orson/index.html",
    "revision": "8a02cba72bc9656cc3e13e31d3f92c2f"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "614c12c971b8dbcd1df1dc2c8301aa6c"
  },
  {
    "url": "tags/osx-el-capitan/index.html",
    "revision": "6c37ca01ae20e81e9950b400de5af4d7"
  },
  {
    "url": "tags/osx/index.html",
    "revision": "2d79b506247c5166805c6dbe81b215be"
  },
  {
    "url": "tags/oxford-university/index.html",
    "revision": "08b14c098990ecaa047552693cd2d0ea"
  },
  {
    "url": "tags/pandemic-2/index.html",
    "revision": "a6cac23c67b0e5c18f6fe6109f81b60e"
  },
  {
    "url": "tags/pandemic/index.html",
    "revision": "c6fc3cae6e5b158efbeaeb92fef07f38"
  },
  {
    "url": "tags/papers/index.html",
    "revision": "b57c25f96eea1360b2e355d3cafa7503"
  },
  {
    "url": "tags/parchment/index.html",
    "revision": "b4c3857c0ee6e42ad627a61e323d2c70"
  },
  {
    "url": "tags/pattern-library/index.html",
    "revision": "44fc38391b9337391906b584ceb3de5b"
  },
  {
    "url": "tags/paypal/index.html",
    "revision": "19aa15e8f4157a264cc94658873e316c"
  },
  {
    "url": "tags/pb/index.html",
    "revision": "e8ca2f4f436535c7675ace0e96f41101"
  },
  {
    "url": "tags/pdf-to-images/index.html",
    "revision": "3d857a97d9763c92b75cefdcaf7b009c"
  },
  {
    "url": "tags/personal-cohort-experience/index.html",
    "revision": "5445c6321bfbdc12631943d42d99fe36"
  },
  {
    "url": "tags/personal-journal/index.html",
    "revision": "7a26d5d19a0441c067c3cdf16a71634f"
  },
  {
    "url": "tags/personal-questions/index.html",
    "revision": "c880a54a65d0df91b7ea599723df099b"
  },
  {
    "url": "tags/personal-website/index.html",
    "revision": "f5ebd48202ce9e105610a4b8eebae227"
  },
  {
    "url": "tags/personality/index.html",
    "revision": "9d9c94e2e87a067ff66771710b24928a"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "21ad5d1a29b47c24c34880e7febe8d19"
  },
  {
    "url": "tags/pertaining-to-hack-reactor/index.html",
    "revision": "389c2744b7ac46b1f4758e1fc74e2e9b"
  },
  {
    "url": "tags/pestilence/index.html",
    "revision": "c160d84d0a030a521315255cdb389c72"
  },
  {
    "url": "tags/peter-sunde/index.html",
    "revision": "2a34b30321e91ee3ca9934d74f79ed92"
  },
  {
    "url": "tags/peter-weyland/index.html",
    "revision": "acbc7b5c92c808e699ba119cc42b644b"
  },
  {
    "url": "tags/philadelphia/index.html",
    "revision": "82e09b330292131ff0e3edd97c720f54"
  },
  {
    "url": "tags/phone-conversations/index.html",
    "revision": "ce0d232b698b52d558c235a33498f940"
  },
  {
    "url": "tags/pick-up-lines/index.html",
    "revision": "60e25db535ef7c28b3a1d09d434c3f66"
  },
  {
    "url": "tags/pictures/index.html",
    "revision": "f0877cb8193c4a8ddcd66806e4a15ee4"
  },
  {
    "url": "tags/pirate-bay/index.html",
    "revision": "60d5fee7908fba0e89a46ac079792b50"
  },
  {
    "url": "tags/pity/index.html",
    "revision": "df8279af6ea663e367b57d11e988f160"
  },
  {
    "url": "tags/pixel-icon-generator/index.html",
    "revision": "7e22a2bffb0c2d543e6f38eebaf49235"
  },
  {
    "url": "tags/pixelfest/index.html",
    "revision": "58abad48b668f26cb3494e7c91d91c38"
  },
  {
    "url": "tags/plan-ahead/index.html",
    "revision": "ddfa18721cc70edeaa4038f2466ed738"
  },
  {
    "url": "tags/planetarium-show/index.html",
    "revision": "832afa7eb28f195b63edd57a9568b323"
  },
  {
    "url": "tags/plans-in-motion/index.html",
    "revision": "f5a37be9098a39c3ba03e1304751aecb"
  },
  {
    "url": "tags/play-along/index.html",
    "revision": "d969f509fa1624833fe7c52e85315e94"
  },
  {
    "url": "tags/playdead-games/index.html",
    "revision": "75bb21f4af604fc38a4cb1601c6d1fa1"
  },
  {
    "url": "tags/playdead/index.html",
    "revision": "00f6c920d3afed7dc7df73324ec3701f"
  },
  {
    "url": "tags/playlistbuddy/index.html",
    "revision": "b8cc2833481ee7f437d8c0fa758cd300"
  },
  {
    "url": "tags/playlists/index.html",
    "revision": "4bfb50f183eb91ac157e826bd111bb71"
  },
  {
    "url": "tags/plurality/index.html",
    "revision": "708c057860cc3a2545b090b20665fb47"
  },
  {
    "url": "tags/png-files/index.html",
    "revision": "7f3bde6013aa0335b8a0bf73c278931c"
  },
  {
    "url": "tags/png/index.html",
    "revision": "8cfc47126557d37c53d60f00d068d442"
  },
  {
    "url": "tags/poem/index.html",
    "revision": "b5d63d93523b2a1f03ba868e3bc4148e"
  },
  {
    "url": "tags/poetry/index.html",
    "revision": "2850c6aea6b16bab80ee2f8ecbff66d3"
  },
  {
    "url": "tags/pointer/index.html",
    "revision": "c1eda71bf89b051867b266d147fd52ab"
  },
  {
    "url": "tags/poptropica/index.html",
    "revision": "c8d67c7755d972b87683f9682f99cd52"
  },
  {
    "url": "tags/portal-runner/index.html",
    "revision": "bf8405cab76875c9797afed33983d554"
  },
  {
    "url": "tags/post-apocalyptic/index.html",
    "revision": "47d950387a075cca7fb3083582aea5bc"
  },
  {
    "url": "tags/postorder/index.html",
    "revision": "5879f9c2ce3788d2dfba8b498f41ce53"
  },
  {
    "url": "tags/potential/index.html",
    "revision": "8d49b5ef0347f2376789ac0401d40bf0"
  },
  {
    "url": "tags/pow/index.html",
    "revision": "77deef94722dea3ada286e06115fca21"
  },
  {
    "url": "tags/predecessor/index.html",
    "revision": "31d66af09cc23d2d572e3f7a3589e57c"
  },
  {
    "url": "tags/preorder/index.html",
    "revision": "6dbf710a98df16d341c6b3cc7e9b2c61"
  },
  {
    "url": "tags/prep/index.html",
    "revision": "18ff2b733c39d005e06dde09c5fe41cd"
  },
  {
    "url": "tags/preparation/index.html",
    "revision": "77b87e13688e792e33f92432b0d13eb1"
  },
  {
    "url": "tags/preparing/index.html",
    "revision": "e99af411f2e17b72bf8de0d96f874703"
  },
  {
    "url": "tags/prepartion/index.html",
    "revision": "5578fa9caec2b5e054b88364062b28f9"
  },
  {
    "url": "tags/presentation-software/index.html",
    "revision": "2b158bd3015b341ecc8d11854d249df2"
  },
  {
    "url": "tags/president-harvey-mudd/index.html",
    "revision": "8926e5e0f67b45a7f4bd634c6b004d30"
  },
  {
    "url": "tags/pretty/index.html",
    "revision": "ab57562a745cbc609e0d9362ba54a666"
  },
  {
    "url": "tags/prework/index.html",
    "revision": "87d7bbd66072c504bdee61a480acf66e"
  },
  {
    "url": "tags/pricey/index.html",
    "revision": "5bff957e0a74a86b24a329b627b47a39"
  },
  {
    "url": "tags/pride/index.html",
    "revision": "d9f2c3c1a30fb943fe35d273a53ebec6"
  },
  {
    "url": "tags/printf/index.html",
    "revision": "3f5632a571042136071844fd5e53ee99"
  },
  {
    "url": "tags/printing/index.html",
    "revision": "02e9dbcb35e5cf5fe560de00b1ee52bc"
  },
  {
    "url": "tags/priory-of-sion/index.html",
    "revision": "06a287670ce1d96ee7111c1bdac22fe7"
  },
  {
    "url": "tags/prisoners/index.html",
    "revision": "aeb78caf6f306e65e2430d99ff8c6d46"
  },
  {
    "url": "tags/process/index.html",
    "revision": "60fc2be1b48339454a6b1269239a9960"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "2d5322f58e8168f3aa62e9ef7c8496fb"
  },
  {
    "url": "tags/product-academy/index.html",
    "revision": "9a0f1eb42973582cf77667bae7144522"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "6fed36045276eb54f3179f4a75d1e49b"
  },
  {
    "url": "tags/program-length/index.html",
    "revision": "e744dbc294256ce9a45ed089cc1ea2f5"
  },
  {
    "url": "tags/program/index.html",
    "revision": "68d76c905076f67add6883545a81ed47"
  },
  {
    "url": "tags/programmer/index.html",
    "revision": "82f40bbee4bc954f9ad73b808541e14c"
  },
  {
    "url": "tags/programming-bootcamps/index.html",
    "revision": "7102c96bc3f30805769c2937a6249080"
  },
  {
    "url": "tags/programming/index.html",
    "revision": "4d23ac48ecb4b447af4adf3c95813458"
  },
  {
    "url": "tags/project-zomboid/index.html",
    "revision": "c9bc9be277d559fda7f2de630c3fd723"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "0c7cc774d75f97e43c69eae8a07c9b51"
  },
  {
    "url": "tags/promises/index.html",
    "revision": "ac9961c4e5c5e106d8f2346031cc6fa3"
  },
  {
    "url": "tags/properly-program/index.html",
    "revision": "61db659f89e272a35281d80abd842692"
  },
  {
    "url": "tags/properties/index.html",
    "revision": "5b1d6f74fa231f87f719d14b612e30aa"
  },
  {
    "url": "tags/pseudocode/index.html",
    "revision": "f758e8b0c34f26bfe026e24b6142c571"
  },
  {
    "url": "tags/puppy-love/index.html",
    "revision": "f979cf1544eb71fe43eba90034b2539c"
  },
  {
    "url": "tags/python-3/index.html",
    "revision": "7d7d73f6889884f5eee9b72c8c4d88cd"
  },
  {
    "url": "tags/python-area-of-a/index.html",
    "revision": "64275aa72b6ff03f668bf69290506f28"
  },
  {
    "url": "tags/python-bits/index.html",
    "revision": "3645156714cf19199953314ee0963a7f"
  },
  {
    "url": "tags/python/index.html",
    "revision": "85a84bf6a7f7476dfa041d5f98eea80d"
  },
  {
    "url": "tags/questions-coding/index.html",
    "revision": "cc0ac0d279e9083b01b4a3d74925257d"
  },
  {
    "url": "tags/questions/index.html",
    "revision": "7401877663db809fad4ebc72de67b601"
  },
  {
    "url": "tags/queue-implementation/index.html",
    "revision": "f03fa070171591c70df82698e7e77ba1"
  },
  {
    "url": "tags/quick-sort/index.html",
    "revision": "6ec3c6c808806ef86fb0bff054ac1a6c"
  },
  {
    "url": "tags/quizlet/index.html",
    "revision": "c0f129be767bd6b5f4304e1be2588826"
  },
  {
    "url": "tags/quizzes/index.html",
    "revision": "f875689abbe03924f051d2f248e3e0ec"
  },
  {
    "url": "tags/quora/index.html",
    "revision": "9efb54e37f9db1b4f9a77e2bedb6aeaf"
  },
  {
    "url": "tags/quotient-remainder/index.html",
    "revision": "1d1b680788b77b0262d03d9a57c91e32"
  },
  {
    "url": "tags/random-poems/index.html",
    "revision": "59e3d115fd3aecdf1a11a54a4da316d5"
  },
  {
    "url": "tags/randomly-generated/index.html",
    "revision": "1cd17a1d638d6110e2b1acac1016cb38"
  },
  {
    "url": "tags/rankme/index.html",
    "revision": "ad95dc234a07f11f35aa27ccf42fa7a0"
  },
  {
    "url": "tags/rant/index.html",
    "revision": "59f72e7b30ffb519401351f10ccd5fb4"
  },
  {
    "url": "tags/rants/index.html",
    "revision": "fe35a3c884849a784acc59f67c8f9fe2"
  },
  {
    "url": "tags/rating/index.html",
    "revision": "a5c43dd3e771b8b470eb6dce89b9f22c"
  },
  {
    "url": "tags/re-birth/index.html",
    "revision": "ea08bf00ec660f0899cf2315634159dd"
  },
  {
    "url": "tags/readme-template/index.html",
    "revision": "8e2d96c5314f1c2349df57c1d4ecea1d"
  },
  {
    "url": "tags/readme/index.html",
    "revision": "d8d987ca752ad13d2b13cf2806d8d993"
  },
  {
    "url": "tags/real-data/index.html",
    "revision": "bea4977c9f28246a9b50da52bd1abffa"
  },
  {
    "url": "tags/reason/index.html",
    "revision": "6eb1c320e945d2af4c5d1025b00bdad6"
  },
  {
    "url": "tags/reasons/index.html",
    "revision": "25f4fe403374cf39ce63ee2739633c26"
  },
  {
    "url": "tags/recruiting/index.html",
    "revision": "760aab05f0e4ad9db89effa4ce6420d9"
  },
  {
    "url": "tags/recursion/index.html",
    "revision": "2eedfe036eee38447a5e1e09b3839b22"
  },
  {
    "url": "tags/recursive/index.html",
    "revision": "f5368529dc10e168c97c9aa6f61085a8"
  },
  {
    "url": "tags/reflections/index.html",
    "revision": "37d0bffc688dade635f7e2a0664f46d5"
  },
  {
    "url": "tags/rejection/index.html",
    "revision": "f06c17e34c2bc59faad40722865b323b"
  },
  {
    "url": "tags/relative/index.html",
    "revision": "d15c77241e6a32623b4e9c78598e264f"
  },
  {
    "url": "tags/relativity/index.html",
    "revision": "9966a82b3796ced38cb5f6cb58a3f7b7"
  },
  {
    "url": "tags/religion/index.html",
    "revision": "1edbff07ed809259912fc24ba3cd829e"
  },
  {
    "url": "tags/religious/index.html",
    "revision": "8ddb6ee8a1d4d332017bf232e8b0f518"
  },
  {
    "url": "tags/remove/index.html",
    "revision": "fb1b0c070dd1dfb62ce016da345de738"
  },
  {
    "url": "tags/rename-multiple-photos/index.html",
    "revision": "ade10c6b01aa603bc09495e5ce4ddc1a"
  },
  {
    "url": "tags/repetitive/index.html",
    "revision": "eab2da6f2e33ec3de321d3624d83a9ac"
  },
  {
    "url": "tags/research/index.html",
    "revision": "0f89d6315cca91ecd8e589aeb3b97844"
  },
  {
    "url": "tags/reset-dock/index.html",
    "revision": "cd360bcc10174bf1594502b910b2642e"
  },
  {
    "url": "tags/reset-launchpad/index.html",
    "revision": "327a2167b6a0cfd9dad2d16e97763e0b"
  },
  {
    "url": "tags/reset-your-launchpad/index.html",
    "revision": "357f991bd059774be5ecff4100b81a2f"
  },
  {
    "url": "tags/resources/index.html",
    "revision": "257fb82020e998267b125292bfe133a4"
  },
  {
    "url": "tags/respect-tradition/index.html",
    "revision": "3f8dd2d32224c7f29cc0ed86e3d0233f"
  },
  {
    "url": "tags/result/index.html",
    "revision": "4b46f1d54794d0c366a93180b2c85733"
  },
  {
    "url": "tags/results/index.html",
    "revision": "8496750b2ca4e954233151a3c639dd7f"
  },
  {
    "url": "tags/resume/index.html",
    "revision": "37366e8286292e866caa49ef85d17597"
  },
  {
    "url": "tags/retarded/index.html",
    "revision": "e9dfb67d7505b57a8e8c82519e71da6d"
  },
  {
    "url": "tags/revconf/index.html",
    "revision": "44ee1b2fbc0fb2bdcf304c6c88881f18"
  },
  {
    "url": "tags/review-week/index.html",
    "revision": "e4f7f3666fe5d3b4c5eb4a1aedf6dd66"
  },
  {
    "url": "tags/review/index.html",
    "revision": "e4dd2ccde2606614849fca2c84bb0aea"
  },
  {
    "url": "tags/reviewing/index.html",
    "revision": "9cd80c467868af1e06663ed30b546e4e"
  },
  {
    "url": "tags/revolution-conference/index.html",
    "revision": "0106c507e7b08722d345b52de18f5af9"
  },
  {
    "url": "tags/revolution/index.html",
    "revision": "284b39f629ab169ad38457f1bb8aa10d"
  },
  {
    "url": "tags/revolutionconf-virginia/index.html",
    "revision": "0837effe3bd11e0bfca673a9e6cbbc76"
  },
  {
    "url": "tags/revolutionconf/index.html",
    "revision": "fd6e3949a432dcc4bba2a4f5545d19d9"
  },
  {
    "url": "tags/richard-tapia/index.html",
    "revision": "79d8ea0368366b63c14ad8be5fdc55b9"
  },
  {
    "url": "tags/riddle/index.html",
    "revision": "5ccda16c9e37d8072ecc5b1cec3f02ca"
  },
  {
    "url": "tags/right/index.html",
    "revision": "610404e1936f076753aa7f816faad706"
  },
  {
    "url": "tags/rihanna/index.html",
    "revision": "030a94c0f122bc9bc4b9e9c4a1edb226"
  },
  {
    "url": "tags/robert-greene/index.html",
    "revision": "ece4c5e23e48c427ab697dde2add88d3"
  },
  {
    "url": "tags/robert-langdon/index.html",
    "revision": "84ff28eff36bc991209094f75621c169"
  },
  {
    "url": "tags/robocup-soccer/index.html",
    "revision": "717932484160049fe419f4b8e6394d63"
  },
  {
    "url": "tags/robocup/index.html",
    "revision": "e5014571f3eb55bcf2cbdb170249002d"
  },
  {
    "url": "tags/robopocalypse/index.html",
    "revision": "4791806453f40925769791d16b50632a"
  },
  {
    "url": "tags/robot/index.html",
    "revision": "1152b896766ae451d1d78be96649de3f"
  },
  {
    "url": "tags/robotics/index.html",
    "revision": "866de66cd04be234341dc6a02f5170f4"
  },
  {
    "url": "tags/robots/index.html",
    "revision": "e64edb9d81d4e5f6061e31bf88d5d6aa"
  },
  {
    "url": "tags/romance/index.html",
    "revision": "e0d64050094cbc98e1986c18917b781e"
  },
  {
    "url": "tags/runescape/index.html",
    "revision": "49211eec0881ab9eec10abcd3843bc85"
  },
  {
    "url": "tags/russell-cheng/index.html",
    "revision": "4c12aef658f9734e5976b6c12f1f7e38"
  },
  {
    "url": "tags/sally-conference/index.html",
    "revision": "d888bfd7d8626c7de27c49e6248e5b6b"
  },
  {
    "url": "tags/same-height/index.html",
    "revision": "e7c061b59b2c0db57398eaa9fd8cba95"
  },
  {
    "url": "tags/same-sex-marriage/index.html",
    "revision": "65b974b999d6307da164f63c8d1b98dd"
  },
  {
    "url": "tags/samer-buna/index.html",
    "revision": "f7e5230a6746f0bc12dd950cf6bba3c2"
  },
  {
    "url": "tags/san-francisco/index.html",
    "revision": "cd1bc55765aa1eb3d238dba7193599c1"
  },
  {
    "url": "tags/sandbox/index.html",
    "revision": "08674ad9af2d23e9d85944259e5eb27b"
  },
  {
    "url": "tags/sbarro/index.html",
    "revision": "c3e1ee535ce2936a5421b12c0041ed3a"
  },
  {
    "url": "tags/scary/index.html",
    "revision": "528ce1802b7754c5c6a7a6ab48795a07"
  },
  {
    "url": "tags/scholarships/index.html",
    "revision": "782650c99cc8acccddd2b2f3d69fa49c"
  },
  {
    "url": "tags/school-email-integration/index.html",
    "revision": "953bf383db78671bb87e452fa45fc10d"
  },
  {
    "url": "tags/school-email/index.html",
    "revision": "32bc131c2b19b8fd13d4e4eecbdd5b6a"
  },
  {
    "url": "tags/school/index.html",
    "revision": "540442cc82a1a83970ef282b2df8fefc"
  },
  {
    "url": "tags/science-fair/index.html",
    "revision": "13cf989183b05398ae8fb447704b1880"
  },
  {
    "url": "tags/science/index.html",
    "revision": "fbf2a542daf9edb887c1d3b54c120276"
  },
  {
    "url": "tags/scott-card/index.html",
    "revision": "2017f2c578c42bf7c8a75fc00a74cb66"
  },
  {
    "url": "tags/screenhero/index.html",
    "revision": "4ca9c5e1666cc37bd17b607498cd2383"
  },
  {
    "url": "tags/screenshots/index.html",
    "revision": "f0d82413ef593ba7e37acc806ea915f4"
  },
  {
    "url": "tags/scribe/index.html",
    "revision": "320a0e9cacf378cf5c04e3eafed46e68"
  },
  {
    "url": "tags/search-query/index.html",
    "revision": "9264e1def4c74e66e950d609be4e8348"
  },
  {
    "url": "tags/searching/index.html",
    "revision": "2f9b716dde9d49f7273accd290a6fbd3"
  },
  {
    "url": "tags/sedgefield-elementary/index.html",
    "revision": "ca396b70cfb339066d256a5b7e116f70"
  },
  {
    "url": "tags/sedgefield/index.html",
    "revision": "acbaf222e143cdc1028690012fba0fbd"
  },
  {
    "url": "tags/seema/index.html",
    "revision": "a05a8b7315111221b5cf6cd011f7bd8a"
  },
  {
    "url": "tags/selection-sort/index.html",
    "revision": "9745291c8442d4d0af5bfea4eacc71a8"
  },
  {
    "url": "tags/selection/index.html",
    "revision": "4630447b47b66ed5944abe371a07c114"
  },
  {
    "url": "tags/selective-honesty/index.html",
    "revision": "256de36ef95f52c316cd35d31943afc5"
  },
  {
    "url": "tags/semicolons/index.html",
    "revision": "1d2512c2449756dc20ede7eda98d8ff6"
  },
  {
    "url": "tags/senior-phase/index.html",
    "revision": "f6ee85306b72d4c5bf49990b1eea6132"
  },
  {
    "url": "tags/sesame-street/index.html",
    "revision": "64e50f64e746151158e9d7e6a4be55cd"
  },
  {
    "url": "tags/seven-days/index.html",
    "revision": "f258c75bb45d59512f3cadb0fca1330a"
  },
  {
    "url": "tags/seven-deadly-sins/index.html",
    "revision": "b582f71bf68acbb28dd308d5fc46b088"
  },
  {
    "url": "tags/shaan/index.html",
    "revision": "6dbbe7002ba619a5b2f8f0931262c4b9"
  },
  {
    "url": "tags/shakespeare/index.html",
    "revision": "c54f2025e991acb6ad2dc7d2555a4006"
  },
  {
    "url": "tags/shakey/index.html",
    "revision": "47c6fa08f7eb7d9e8a9fc4dc5cee938f"
  },
  {
    "url": "tags/shame/index.html",
    "revision": "2fba95985b93fe42189b3714b15a0318"
  },
  {
    "url": "tags/sharing/index.html",
    "revision": "8a3be0b8f35745112b156e7923c0a69c"
  },
  {
    "url": "tags/short-operation/index.html",
    "revision": "d7e635536b69a4f4678958873400eb38"
  },
  {
    "url": "tags/short-stories/index.html",
    "revision": "84213adda28e614e170e92a0a5aac7ca"
  },
  {
    "url": "tags/shrthnd/index.html",
    "revision": "bdbb0073e8e2411d92c978c91bea2d26"
  },
  {
    "url": "tags/silicon-valley/index.html",
    "revision": "825f8faf5b7188c1473e394d03fdc077"
  },
  {
    "url": "tags/silly/index.html",
    "revision": "8b931d68114930a79484387aa0e12e07"
  },
  {
    "url": "tags/sims-2/index.html",
    "revision": "bf304843adac8afc541ee11274d5964f"
  },
  {
    "url": "tags/sims-3/index.html",
    "revision": "2b4e1b50df9472521c07a8b6c51fdc99"
  },
  {
    "url": "tags/sims-medieval/index.html",
    "revision": "cf6e7fc1771c8f25560414a924c70885"
  },
  {
    "url": "tags/sins/index.html",
    "revision": "357c0296d2070eb9c69568f91cacc71e"
  },
  {
    "url": "tags/siri/index.html",
    "revision": "4a36ab3caf896b064c7ca4b65ddf7089"
  },
  {
    "url": "tags/sitedrop/index.html",
    "revision": "c0780a04eb407b98211244459faeeafd"
  },
  {
    "url": "tags/sketch/index.html",
    "revision": "f1ef41ca2789d1a04a2d86366d9dda45"
  },
  {
    "url": "tags/skiirty/index.html",
    "revision": "e7ca385e82b4f3fb8e63e7291362b3c4"
  },
  {
    "url": "tags/skype/index.html",
    "revision": "3f43a315ea2b8cd5472eb07ee25eeaab"
  },
  {
    "url": "tags/slack/index.html",
    "revision": "b81bc5f108a93ff64f1ad3164f4a539a"
  },
  {
    "url": "tags/slides-carnival/index.html",
    "revision": "4b5cbd4ad8e35c3f308fe50ecb527a7f"
  },
  {
    "url": "tags/slidescarnival/index.html",
    "revision": "62d6b7a67ed852079aa4f7daaa3dba3e"
  },
  {
    "url": "tags/sloth/index.html",
    "revision": "f42cd7de90f74833237952954ce1e3c3"
  },
  {
    "url": "tags/smaller-problem/index.html",
    "revision": "52c75f9490270ef9eb1b35601d2bacc6"
  },
  {
    "url": "tags/smart-notes/index.html",
    "revision": "0dbc86138cc1e5cd53a436f15c6782c2"
  },
  {
    "url": "tags/smile-train/index.html",
    "revision": "f4d8cca2cb6fe7e759c141f46b060196"
  },
  {
    "url": "tags/snow/index.html",
    "revision": "fd9f704de686e213cb18a09eecae213e"
  },
  {
    "url": "tags/social-networking-connectedness/index.html",
    "revision": "e4eeeb4475be7d8b7818ca1d6804849d"
  },
  {
    "url": "tags/social-networking-sites/index.html",
    "revision": "27b877e89a68e7a7bb3dfa2cde5cf6d1"
  },
  {
    "url": "tags/social-networking/index.html",
    "revision": "f68c6cc4168eba4785ae77ce981808ee"
  },
  {
    "url": "tags/social/index.html",
    "revision": "52198b8aa0b8b9cd8f359d6d28a38fa1"
  },
  {
    "url": "tags/socket.io/index.html",
    "revision": "ea8c0ce886d986ec523a86749f20e972"
  },
  {
    "url": "tags/socks/index.html",
    "revision": "6dc3b106cc98720b14f1663f084a229c"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "6cf29d808568173a8f6867553689de67"
  },
  {
    "url": "tags/sonderkommando/index.html",
    "revision": "b76688499170be0987ecda0a48a52f0c"
  },
  {
    "url": "tags/sophie-neveu/index.html",
    "revision": "af757d979e0f18f32b0f41e5dda1e32a"
  },
  {
    "url": "tags/sort-detective/index.html",
    "revision": "55fc181b5b3d83c4f4c7da5045cbaf28"
  },
  {
    "url": "tags/sortdetective.jar/index.html",
    "revision": "4f093b9e3210ab5bb67d3d477d68c07d"
  },
  {
    "url": "tags/sorting-methods/index.html",
    "revision": "c11b53e0acb9d9117f5105a36b724a09"
  },
  {
    "url": "tags/sortingexperiment/index.html",
    "revision": "b9ddc2256b2efb5efe2bfb36fdd10ec2"
  },
  {
    "url": "tags/sorty-app/index.html",
    "revision": "b9bcc1fa7ab14c163e13b6e34a04e3cf"
  },
  {
    "url": "tags/sorty-for-osx/index.html",
    "revision": "5357f9ecc7d89fdf6895a5aebbea587b"
  },
  {
    "url": "tags/sorty/index.html",
    "revision": "35b03688da108114693dd3f76bf30e2a"
  },
  {
    "url": "tags/sound-cloud/index.html",
    "revision": "8cb86e6e1119ea2ce01f5ac0759d1cf5"
  },
  {
    "url": "tags/source-code/index.html",
    "revision": "187a60989440fedbe4e4add3b1eac470"
  },
  {
    "url": "tags/spanish/index.html",
    "revision": "b9da6a7ad4715be7da3712e2f644bcdc"
  },
  {
    "url": "tags/spank-the-money/index.html",
    "revision": "b713a23988cdeb0644f95485d955de5b"
  },
  {
    "url": "tags/spank-the-monkey/index.html",
    "revision": "89830e8acdb7e562810dda2229fe907c"
  },
  {
    "url": "tags/speakdeck/index.html",
    "revision": "2f04ca6c59254dac1c6ef90e8ba56fa6"
  },
  {
    "url": "tags/speakerdeck/index.html",
    "revision": "9545bfb15b74e4f00aed5a81628ab93d"
  },
  {
    "url": "tags/speech/index.html",
    "revision": "80f23f39a92cb88d0216a3ce6e237e56"
  },
  {
    "url": "tags/speros-misirlakis/index.html",
    "revision": "46d77ea526011aa9d7933f24db9d31ae"
  },
  {
    "url": "tags/spider/index.html",
    "revision": "00460998667878b4f749064495d92934"
  },
  {
    "url": "tags/spoiler/index.html",
    "revision": "6031c6112ce95067843674ccd5aa5d44"
  },
  {
    "url": "tags/spoilers/index.html",
    "revision": "f50df65d9d1a0719cbea354b6a4f1ba5"
  },
  {
    "url": "tags/spore/index.html",
    "revision": "8fe606e363b7114357c2f768fb0197a5"
  },
  {
    "url": "tags/spotify-download-mp3/index.html",
    "revision": "f51c925f5d3f9b49dbf53cf541b1ec7d"
  },
  {
    "url": "tags/spotify-download/index.html",
    "revision": "b4fb28b7398585f738caa2e4d513edef"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "ad01ccbc7e01649471bca016ad1c34cc"
  },
  {
    "url": "tags/spreadsheet-app/index.html",
    "revision": "1d10f1ac5590025656a834f6351eda7f"
  },
  {
    "url": "tags/stackathon/index.html",
    "revision": "e79980ffbbb47119ecdedf16bc9b2de5"
  },
  {
    "url": "tags/stackstore/index.html",
    "revision": "1f5170904f37633ced76a8d06101b309"
  },
  {
    "url": "tags/star-trek-monopoly/index.html",
    "revision": "f6fb945bd0ed3502c4a48947bbf20ee0"
  },
  {
    "url": "tags/stardust/index.html",
    "revision": "4923f1e2f52ff697d279333f6727e6f1"
  },
  {
    "url": "tags/starter-league/index.html",
    "revision": "1994b5ff3bd899b97ce2672e2a56c5a3"
  },
  {
    "url": "tags/static-ui/index.html",
    "revision": "1786de415326dc692ac5c2e94c64e5e1"
  },
  {
    "url": "tags/stem/index.html",
    "revision": "d154599ef68b68911d263870386aca02"
  },
  {
    "url": "tags/string/index.html",
    "revision": "14734a022d19dce78ad3e7897e322f48"
  },
  {
    "url": "tags/strings-python/index.html",
    "revision": "1a6085434dcb6b5c6d0aedc97d6134eb"
  },
  {
    "url": "tags/student-experience/index.html",
    "revision": "4c06580b5ad80ec512e0dacda8ae1457"
  },
  {
    "url": "tags/student-id/index.html",
    "revision": "6f28ca2f04de1e726641b7ce119e4163"
  },
  {
    "url": "tags/study-better/index.html",
    "revision": "427071e50e16599dd5fe6780a07fa758"
  },
  {
    "url": "tags/study-guide/index.html",
    "revision": "fa70d16c6ebdb32c43a6ed26c55336f5"
  },
  {
    "url": "tags/study-strategies/index.html",
    "revision": "b4dc458b3a34f0194b37e1bdc73961df"
  },
  {
    "url": "tags/study-time/index.html",
    "revision": "44ec14d47e626f4213bacc2730b09b18"
  },
  {
    "url": "tags/studying-smart/index.html",
    "revision": "21d2f91856c0134d3d734d7a75c0814e"
  },
  {
    "url": "tags/stupid/index.html",
    "revision": "6625e6a41a802d7a15cd56e9f4600bae"
  },
  {
    "url": "tags/sublime-text-3/index.html",
    "revision": "0a1a803dfd678933157b92cf23e82b06"
  },
  {
    "url": "tags/subtree/index.html",
    "revision": "1f19df99ab91d23cc0a26a1b26897f8d"
  },
  {
    "url": "tags/summer-bootcamp/index.html",
    "revision": "711f92b934df22323442139f3ae3c003"
  },
  {
    "url": "tags/summer-program/index.html",
    "revision": "fb07fea414060742e63185f7037dd84b"
  },
  {
    "url": "tags/summer/index.html",
    "revision": "1ff08df8c698904379a5fd36bd5dd796"
  },
  {
    "url": "tags/super-shuttle/index.html",
    "revision": "0d80fc0b2dedd4e671f15904248d7a8c"
  },
  {
    "url": "tags/super-smash-bros/index.html",
    "revision": "5a2c0b676b2870ef68443e7474b34051"
  },
  {
    "url": "tags/superhero-js/index.html",
    "revision": "c149d60476b2e03554bf5628b5878c8f"
  },
  {
    "url": "tags/support/index.html",
    "revision": "31a5a3dd5c051c5597076ad3df124d21"
  },
  {
    "url": "tags/surfing/index.html",
    "revision": "4a987eeb5306f81c84803c90416da0d8"
  },
  {
    "url": "tags/surgeon/index.html",
    "revision": "c2662760876bfa37e523aa0f71517947"
  },
  {
    "url": "tags/switch-up/index.html",
    "revision": "1c38fe9b8b93458fc9ed9edf0b72cf6a"
  },
  {
    "url": "tags/switch/index.html",
    "revision": "0993ef7891882e596aeca2bec5130717"
  },
  {
    "url": "tags/switchup/index.html",
    "revision": "85f330fc71b0ae3dcc0bab2f74714ad9"
  },
  {
    "url": "tags/system/index.html",
    "revision": "ca13a3475945e0d64656e0627c6ab49c"
  },
  {
    "url": "tags/talkies/index.html",
    "revision": "af89112d2136a9232e2da1d21716b258"
  },
  {
    "url": "tags/tallwood/index.html",
    "revision": "25721d6c0abbbd6ff0211ddefc76f5c8"
  },
  {
    "url": "tags/tanzania/index.html",
    "revision": "50dae3f5de3c1b2925873b7a1d7d9edd"
  },
  {
    "url": "tags/tapia/index.html",
    "revision": "f4101812e7757b5b39ee91bd13e5e43b"
  },
  {
    "url": "tags/tech-cocktail/index.html",
    "revision": "b50a430a2447443e75b4f16657a70f76"
  },
  {
    "url": "tags/tech-companies/index.html",
    "revision": "8bbe42c41d405971b42ce04e9086225b"
  },
  {
    "url": "tags/tech-conference/index.html",
    "revision": "47cc29b129393490288886dcb2fdb399"
  },
  {
    "url": "tags/tech-diversity/index.html",
    "revision": "e668e80b8534085c1ba3050eef13b9dd"
  },
  {
    "url": "tags/tech-talk/index.html",
    "revision": "82ae3e703d9bf8a5d223d50ce613bc1b"
  },
  {
    "url": "tags/techendo/index.html",
    "revision": "cdda0bf00cc39b6a3a8b6c5d99f7a06a"
  },
  {
    "url": "tags/technical-challenge/index.html",
    "revision": "aeb339c9f5cd283203e5d17841892205"
  },
  {
    "url": "tags/technical-interview/index.html",
    "revision": "7c001290756462a22ccd13457ea316aa"
  },
  {
    "url": "tags/technical-questions/index.html",
    "revision": "29a5cd399c63b23adb1248a4408cbe83"
  },
  {
    "url": "tags/technological-dependence/index.html",
    "revision": "e57b7af6b29010cc39a57dd0827d1a3d"
  },
  {
    "url": "tags/technological-unemployment/index.html",
    "revision": "c5c8897b37f3f890f8ae4681b854c3ed"
  },
  {
    "url": "tags/technology/index.html",
    "revision": "135c0f081df4a5af48aa7deea7763357"
  },
  {
    "url": "tags/template/index.html",
    "revision": "f61ed93df3d4cb1901b0c1fe8f9bcb49"
  },
  {
    "url": "tags/texas/index.html",
    "revision": "31f1974b7ea1618237b63423b5251d3e"
  },
  {
    "url": "tags/text-messaging/index.html",
    "revision": "65b5faafc036c1798d668ea6ee28e72d"
  },
  {
    "url": "tags/the-grid/index.html",
    "revision": "9c0ab19c9f17304fb7fbe4510f91e491"
  },
  {
    "url": "tags/the-stocks/index.html",
    "revision": "950483a90b7c1ace589b10818ef06496"
  },
  {
    "url": "tags/the-test/index.html",
    "revision": "bc45aa147171be3f8f5cbc7750165b20"
  },
  {
    "url": "tags/theology/index.html",
    "revision": "33d152365344b3ec37c3acfd407d2238"
  },
  {
    "url": "tags/thinkful/index.html",
    "revision": "1199fd8eab29182d6bea623befc821d4"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "9115bb6c851854f23f35840c84c0e68f"
  },
  {
    "url": "tags/tim-burton/index.html",
    "revision": "3faea66ceffd29a6f9775158a2d7b520"
  },
  {
    "url": "tags/timber/index.html",
    "revision": "25bac4bfe58225b81507a6fd1b14d4a1"
  },
  {
    "url": "tags/time-management/index.html",
    "revision": "a79575f00f8ee7d8512c7dd958d9c3de"
  },
  {
    "url": "tags/time-measurements/index.html",
    "revision": "c47a3b0b2c5f933cd9b1a61a48d4cd6a"
  },
  {
    "url": "tags/time-travel/index.html",
    "revision": "4cb51ff9a41824d45ef8f0abe3e780c2"
  },
  {
    "url": "tags/time/index.html",
    "revision": "48cb5c5f28a34a50b6fa8b8dccdd640a"
  },
  {
    "url": "tags/tips-and-tricks/index.html",
    "revision": "a974e0f0a57c54b32e87a462649676d3"
  },
  {
    "url": "tags/tips/index.html",
    "revision": "55ed1f552929458c58e046ab9c55a495"
  },
  {
    "url": "tags/tncc/index.html",
    "revision": "bb736ef3c29fa3c07bbf342f8f2e0284"
  },
  {
    "url": "tags/todo-app-laravel/index.html",
    "revision": "f8136956e35aa9b94f38faf0b2586664"
  },
  {
    "url": "tags/todo-app/index.html",
    "revision": "7507a105a0002f625c24c041921500bf"
  },
  {
    "url": "tags/todo/index.html",
    "revision": "4f73ab1a93bcb391a62c232e55c2eeff"
  },
  {
    "url": "tags/tom-hanks/index.html",
    "revision": "7061cb266c5c7e85c95d433a34c1f537"
  },
  {
    "url": "tags/toolbar/index.html",
    "revision": "689e7644a786070a07fdc3482b4c39ba"
  },
  {
    "url": "tags/topcoder/index.html",
    "revision": "d9b0cbae7afaed5f4fd4985c1140f85c"
  },
  {
    "url": "tags/toronto/index.html",
    "revision": "ed4b3e808de6989d6b878c677348034b"
  },
  {
    "url": "tags/tortuga/index.html",
    "revision": "ccc78519c91698d11882e347c04bd9c4"
  },
  {
    "url": "tags/towers-of-hanoi/index.html",
    "revision": "fc3da15b32d1afc9990195e48f019e0b"
  },
  {
    "url": "tags/trampoline/index.html",
    "revision": "6a4ed24e01e34a40944b4bf51dc48b01"
  },
  {
    "url": "tags/transplant/index.html",
    "revision": "dd4aaaabf571df6e0d3a62bd36509b1a"
  },
  {
    "url": "tags/transportation/index.html",
    "revision": "3c8695bf9058aa1599c65f80965ebd5c"
  },
  {
    "url": "tags/traumatized/index.html",
    "revision": "1ed63b13a2c8fd84c755c26d5043ad44"
  },
  {
    "url": "tags/travel/index.html",
    "revision": "24c23045fb572c767accdb730c980561"
  },
  {
    "url": "tags/traversal/index.html",
    "revision": "861df29be86e6c5b77eeb07137bebbfe"
  },
  {
    "url": "tags/travis-ci/index.html",
    "revision": "3c94d0a86011a41070632c97c5d6a2b5"
  },
  {
    "url": "tags/tree/index.html",
    "revision": "9a35cd5bede1a9d8d1e47877df545c81"
  },
  {
    "url": "tags/treehouse/index.html",
    "revision": "f9cd0f7f19756ad3f2e8e3ee450c157f"
  },
  {
    "url": "tags/trial-and-death/index.html",
    "revision": "a8e147db2f1ab93bc9a51c9e1f01e2f9"
  },
  {
    "url": "tags/tricks/index.html",
    "revision": "052c0a7db5e507fde1468db868623063"
  },
  {
    "url": "tags/trip-planner/index.html",
    "revision": "02b3c19f2d3dc8ada3e950786ea89177"
  },
  {
    "url": "tags/tristan-walker/index.html",
    "revision": "07d504a0590ad96d1cfa18d161bc6a02"
  },
  {
    "url": "tags/tristan/index.html",
    "revision": "507b06b47be4c26d4f206cf8df1373a7"
  },
  {
    "url": "tags/tron-legacy/index.html",
    "revision": "1660815f5fe158225471a07aa85904da"
  },
  {
    "url": "tags/tuition-price/index.html",
    "revision": "f1841873bc7b9861372ab53f6e547720"
  },
  {
    "url": "tags/tumblr/index.html",
    "revision": "1d923b7664601ac181197804f8875333"
  },
  {
    "url": "tags/tutorial/index.html",
    "revision": "4b2db593f6247395d545662f247c0b3f"
  },
  {
    "url": "tags/tv-shows/index.html",
    "revision": "8c4576fae5b91440c58a82c4f01b3782"
  },
  {
    "url": "tags/tweet/index.html",
    "revision": "63d2c3d7e81090ed97cbd6f0728ccba2"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "a7785e971ad658193121461035654032"
  },
  {
    "url": "tags/typeform/index.html",
    "revision": "55a50afde3c634a89378ef47005628d1"
  },
  {
    "url": "tags/typing.io/index.html",
    "revision": "43c83388286172f294ffc8803170f180"
  },
  {
    "url": "tags/typography/index.html",
    "revision": "ff82b611c80edea342c5ee4710531cae"
  },
  {
    "url": "tags/u/index.html",
    "revision": "a4fd30da8fd78a6f8ef8176ab9b122b4"
  },
  {
    "url": "tags/ubersicht/index.html",
    "revision": "2db0181a65d770de38c408e6193a16d2"
  },
  {
    "url": "tags/ui-design/index.html",
    "revision": "18ba3fda7c594d5e4acd579655448e77"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "c57a31af8bbf42c35a14073b102617b8"
  },
  {
    "url": "tags/ui/ux/index.html",
    "revision": "36000d6374ce5e763db0058f39c6f7f0"
  },
  {
    "url": "tags/ulyssess/index.html",
    "revision": "908b08ab66c2de8bd1c95383ae78ca36"
  },
  {
    "url": "tags/unarmed/index.html",
    "revision": "44daf45a748a18c71bd49ca0e5bfcd81"
  },
  {
    "url": "tags/unbaptized/index.html",
    "revision": "0744012c405750a33ef024f5a0ad320f"
  },
  {
    "url": "tags/undergrad/index.html",
    "revision": "4751112f5c3a7d498cef05f54040a2f4"
  },
  {
    "url": "tags/undergraduate-conference/index.html",
    "revision": "3f8cd03e6acc6023d00df7834ecede5f"
  },
  {
    "url": "tags/underscore/index.html",
    "revision": "d8db05c1727eeed9f76b3e5bddaa3557"
  },
  {
    "url": "tags/unforeseen-destiny/index.html",
    "revision": "0fa4f52413774561556b1c2d95eb348a"
  },
  {
    "url": "tags/union-city/index.html",
    "revision": "16c11a5470fc6850ae5f5cfdd0a4e6ef"
  },
  {
    "url": "tags/universe/index.html",
    "revision": "a3bbadb4f12c51b948e609aa9e604409"
  },
  {
    "url": "tags/uno/index.html",
    "revision": "b39fff596e1441327ca892fe53eb5f64"
  },
  {
    "url": "tags/unsplash/index.html",
    "revision": "d487327e4bb3a01688fdf80821fd89f0"
  },
  {
    "url": "tags/ut-austin/index.html",
    "revision": "a2c831f75cda941690cf538ed29aacd9"
  },
  {
    "url": "tags/ux/index.html",
    "revision": "3a70fc9798dccd3aece32b8200696b7b"
  },
  {
    "url": "tags/va-acm/index.html",
    "revision": "7c13e14ea81b7d80961d2c09490c8ca9"
  },
  {
    "url": "tags/va-governor-schools/index.html",
    "revision": "457052de1493b08010fede44c7bc6e99"
  },
  {
    "url": "tags/variables/index.html",
    "revision": "6296574e19a6e3e8ed751e5bb28bf78e"
  },
  {
    "url": "tags/vccs/index.html",
    "revision": "c812c3a33cf7387cad6329596f77b41c"
  },
  {
    "url": "tags/vegan-candy/index.html",
    "revision": "c4fa4c4b1418e0fc187b9d0d63133de4"
  },
  {
    "url": "tags/vegan/index.html",
    "revision": "94ce5d783c36abf83978fcb2cd601309"
  },
  {
    "url": "tags/vegetarian/index.html",
    "revision": "89a70f2bbcb00458cddbf2f57342815c"
  },
  {
    "url": "tags/venmo/index.html",
    "revision": "04465fb1c740659ddbeaacf70fc92e33"
  },
  {
    "url": "tags/very-nice-sites/index.html",
    "revision": "416bda89ad1e03d281ea4975ea327499"
  },
  {
    "url": "tags/victoria/index.html",
    "revision": "b9e6ffa25c20bac7c975f80a021bd519"
  },
  {
    "url": "tags/video-games/index.html",
    "revision": "1375342b27e67313f7a4595c7a7815e4"
  },
  {
    "url": "tags/video/index.html",
    "revision": "50101918e6eb9450a1472d1c6ef2fc9f"
  },
  {
    "url": "tags/videogames/index.html",
    "revision": "0e3b8b83a37b4c0ab7ecd76670e64545"
  },
  {
    "url": "tags/vimeo/index.html",
    "revision": "70123c254ab7daf548db8d7f9262f0ac"
  },
  {
    "url": "tags/virginia-beach/index.html",
    "revision": "4d3ca39b49342a70d697570333fd5005"
  },
  {
    "url": "tags/virginia/index.html",
    "revision": "7e7860879bb20ee01c6b745d4c031399"
  },
  {
    "url": "tags/visual-hierarchy/index.html",
    "revision": "7ef0a9b9625b45c838615228e487bb31"
  },
  {
    "url": "tags/walk/index.html",
    "revision": "00f4933c7756bccbc3ee3b0812abe2f4"
  },
  {
    "url": "tags/walking-dead/index.html",
    "revision": "b01c548ea4616dbabfd19177fba4413b"
  },
  {
    "url": "tags/walkthroughs/index.html",
    "revision": "fa3efc76deeba0c08d8e8a4e07264e07"
  },
  {
    "url": "tags/war/index.html",
    "revision": "dc2fccee1f04fa8d0929934f2870cc70"
  },
  {
    "url": "tags/wary-of-friends/index.html",
    "revision": "284358140de1e0c6e98fccabf7e2fa11"
  },
  {
    "url": "tags/waves-of-tech/index.html",
    "revision": "d3c0e14c4cac166d51169b9ea5aeb7a3"
  },
  {
    "url": "tags/wayne/index.html",
    "revision": "80acf4b837783bb29b57beceb893bba6"
  },
  {
    "url": "tags/weaknesses/index.html",
    "revision": "8388b76668adfa6300ed4dc80344a9e7"
  },
  {
    "url": "tags/weather/index.html",
    "revision": "d7f3701bddbc4b7bccf591a19e889122"
  },
  {
    "url": "tags/web-crawler/index.html",
    "revision": "948afb1b3508685e2a7a730c3ebf7c0b"
  },
  {
    "url": "tags/web-design-talk/index.html",
    "revision": "414687c0c25d3991caf58d8d9f94f624"
  },
  {
    "url": "tags/web-design/index.html",
    "revision": "061a11ab38b958beaa537189582b7502"
  },
  {
    "url": "tags/web-dev/index.html",
    "revision": "79c49f0deac043c6be49939dfff3d68e"
  },
  {
    "url": "tags/web-development-bootcamp/index.html",
    "revision": "9077f461bcd11d3889511d3ffb5e1d33"
  },
  {
    "url": "tags/web-development-hawaii/index.html",
    "revision": "7e3a5fbb8941064d1153703b752e31a6"
  },
  {
    "url": "tags/web-development/index.html",
    "revision": "9ce9cd311c8d7892e06cdc67f1336c0f"
  },
  {
    "url": "tags/web-store/index.html",
    "revision": "e08b83f32b118a30123721697217f658"
  },
  {
    "url": "tags/websites/index.html",
    "revision": "03b4e0aa049cc715ade4d6ec1f9b6e9a"
  },
  {
    "url": "tags/week-2/index.html",
    "revision": "2855aba67ea4a4239d4adfd5234eb3f3"
  },
  {
    "url": "tags/week-3/index.html",
    "revision": "ae7e19fa97728ab52cb0afd40c1eb0ac"
  },
  {
    "url": "tags/week-4/index.html",
    "revision": "bb675711e132e3c18660d6650501e320"
  },
  {
    "url": "tags/week-6/index.html",
    "revision": "a191a516be3face25b31d426bbe5c396"
  },
  {
    "url": "tags/westin-copley/index.html",
    "revision": "e80d96bc73f775b210c8269df2acd160"
  },
  {
    "url": "tags/whales/index.html",
    "revision": "0ead24a059249f15a7a34ddd4500eb32"
  },
  {
    "url": "tags/what-i-use/index.html",
    "revision": "0de0126505769f054a9e8cdfadf08ea6"
  },
  {
    "url": "tags/whiteboard/index.html",
    "revision": "b4f4f395d6579f57c6d1c3581953bcec"
  },
  {
    "url": "tags/wii-sports/index.html",
    "revision": "19a190e1e9140abef51c0925bb726d35"
  },
  {
    "url": "tags/wii/index.html",
    "revision": "5d3a3205ec58d944bc79f0c9dd51dae1"
  },
  {
    "url": "tags/wikistack/index.html",
    "revision": "99bf4259b6c25fe86edb8b18beb36be1"
  },
  {
    "url": "tags/wiles.dk/index.html",
    "revision": "8665b184331345706cf5bf6148e8cc2d"
  },
  {
    "url": "tags/wilson/index.html",
    "revision": "e353f6afeccbcca3ab13b5ca4c834f59"
  },
  {
    "url": "tags/winter-conference/index.html",
    "revision": "8487e28397ce53e6bc6eeaa95579e3c7"
  },
  {
    "url": "tags/winter-storm/index.html",
    "revision": "c49d9e5e37bd3550c76ddd7d6ec2f0f9"
  },
  {
    "url": "tags/wish-list/index.html",
    "revision": "f4114a373a2099aadae05464afba254a"
  },
  {
    "url": "tags/witchcraft/index.html",
    "revision": "8f4a8bdafd44e7a7023a8684eaf643bb"
  },
  {
    "url": "tags/women-who-code/index.html",
    "revision": "284ed73b8a3a6bccf89ceadfa613c80e"
  },
  {
    "url": "tags/word/index.html",
    "revision": "4d72d0041aa3cf5a00869d45ea4f2d07"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "2aac2cc4abc1148f078b46ea1e86b485"
  },
  {
    "url": "tags/work-routines/index.html",
    "revision": "e84cee669d083d5e877177bc87ddfe20"
  },
  {
    "url": "tags/work/index.html",
    "revision": "b319709a3d0d3725137fb06f350f4240"
  },
  {
    "url": "tags/workforce/index.html",
    "revision": "5289b04308fee69c7b15bf55b94295c4"
  },
  {
    "url": "tags/working-harder/index.html",
    "revision": "f585fe33c1ffcdc6a6505f54144f9825"
  },
  {
    "url": "tags/working-smarter/index.html",
    "revision": "c3968f2280edf6e95be96aae855bee49"
  },
  {
    "url": "tags/wrath/index.html",
    "revision": "34eceacab855247b7b022906993b88cd"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "6251eae29bf90a7570f93c0ebdb8a78b"
  },
  {
    "url": "tags/yelp/index.html",
    "revision": "897d43f78a0a085ab12f7fde3b7f67c7"
  },
  {
    "url": "tags/yeti/index.html",
    "revision": "2d3a97b7d6bdb6aa3f2be072d6c0307d"
  },
  {
    "url": "tags/yield-rate/index.html",
    "revision": "3f461ed789ef615c063e07943aa60145"
  },
  {
    "url": "tags/yoink/index.html",
    "revision": "971a9b24259fe9f84bf437d1d3c10471"
  },
  {
    "url": "tags/yosemite-launchpad-reset/index.html",
    "revision": "44ded83a63388463026185470ab3a2b6"
  },
  {
    "url": "tags/yosemite-launchpad/index.html",
    "revision": "108c916e2dc8b4ec459d34c965e73d9e"
  },
  {
    "url": "tags/yosemite/index.html",
    "revision": "c6fc2d496a5fef521ddb4743f1a6ceca"
  },
  {
    "url": "tags/youtube-dl/index.html",
    "revision": "65b10fb56ddddb74a13ac7a016cb1911"
  },
  {
    "url": "tags/youtube/index.html",
    "revision": "7f3d51ccfa23a156b39a5c8f5d41d2af"
  },
  {
    "url": "tags/yvaine/index.html",
    "revision": "73fcdbfb066b861a273a44fa9395dcd2"
  },
  {
    "url": "tags/zeta/index.html",
    "revision": "30162649dbd334c462c8f5719873621a"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/, workboxSW.strategies.cacheFirst({
  "cacheName": "fvcproductions-image-cache",
  "cacheExpiration": {
    "maxEntries": 20
  }
}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdn.embedly.com\/widgets\/platform.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdn.onesignal.com\/sdks\/OneSignalSDK.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
