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
    "revision": "e2f1aa82e95d6a6a3566b344717c9ec5"
  },
  {
    "url": "2009/09/22/ghent-school/index.html",
    "revision": "0fea19856b2eff5907dd405bdb0ab507"
  },
  {
    "url": "2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "59fd9d931e53a87644a4363ed3ed4442"
  },
  {
    "url": "2010/05/12/desiring-the-casual-/index.html",
    "revision": "4f955b8c0c68c5f67b024333a54041e3"
  },
  {
    "url": "2010/08/03/enders-game---book-review-/index.html",
    "revision": "d6669c03fb94f08d7b12b27a302264b0"
  },
  {
    "url": "2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "a6575ba86ec6ae1e6fa3c92e72ea26b7"
  },
  {
    "url": "2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "a2017cd12abc39664334cdde04b9b655"
  },
  {
    "url": "2011/08/07/isce-2011/index.html",
    "revision": "0e2d8c527b63439d1c9d3232eb53776e"
  },
  {
    "url": "2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "ee70ec6b008c91487555e8bd66a77623"
  },
  {
    "url": "2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "d2948dfdd44b204a5ea8aa6b7fd85bcf"
  },
  {
    "url": "2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "2e1f6bcd7f86654257ca9da543eaa418"
  },
  {
    "url": "2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "b603109feb6f705859d1f5cc47c5ee70"
  },
  {
    "url": "2012/03/01/stardust---book-review-/index.html",
    "revision": "147418acc3b289ea9a467f47add783f3"
  },
  {
    "url": "2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "235647dd2d24e24f1294db143ba87443"
  },
  {
    "url": "2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "e189da54a992d206bb904e912cdfff6e"
  },
  {
    "url": "2012/08/10/odu-vmasc/index.html",
    "revision": "01c29cf949dbde819a88c0b1508a75b5"
  },
  {
    "url": "2012/08/14/school-for-field-studies/index.html",
    "revision": "451b30014010569c760d490d5c72dab2"
  },
  {
    "url": "2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "faee7ae2f165a61633b9d958dfd5bb70"
  },
  {
    "url": "2013/06/13/maury-high-school/index.html",
    "revision": "e7e42405c268a360c61da2b807b99393"
  },
  {
    "url": "2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "c42c6dba61b2043278cc2a4bce5691e2"
  },
  {
    "url": "2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "ee89df71acea71dd39583494b69b786e"
  },
  {
    "url": "2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "317c000d8480529d695300564fae95fd"
  },
  {
    "url": "2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "5a263f377da0dffb1b873c34704ba59e"
  },
  {
    "url": "2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "3c9906e8858ae10cb3518bdab90ef6e5"
  },
  {
    "url": "2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "ed357082fa80795931de4b2789778d37"
  },
  {
    "url": "2013/08/02/islc-2013/index.html",
    "revision": "2f244417bae08203b42f8ccf04192609"
  },
  {
    "url": "2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "497e2c78e0da27b76079ef6357edd751"
  },
  {
    "url": "2013/08/03/potc---chest-riddle-/index.html",
    "revision": "702e4e0f2d56f1cfaf109d189ae193d0"
  },
  {
    "url": "2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "130fca982905f47ebaa6f376a21ff3c8"
  },
  {
    "url": "2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "a37ab822f8a48ec4b88742072571a9ab"
  },
  {
    "url": "2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "cc166699a52cf27421734115c26e2bee"
  },
  {
    "url": "2013/09/20/c-bits---getting-started/index.html",
    "revision": "85215af91ba15386a35403dcd6b629a3"
  },
  {
    "url": "2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "dbe8b4ecced128cc63fe6ce1ac67f3cc"
  },
  {
    "url": "2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "b784ee00b3d5d27fcc44e24d0eea2de4"
  },
  {
    "url": "2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "9f8746805820a56c77ba67d8152f7e99"
  },
  {
    "url": "2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "f2b3ceec92df20a84204af2853c65824"
  },
  {
    "url": "2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "4c2138985de4775825dcce8f04f4a1b2"
  },
  {
    "url": "2014/02/21/working-smarter-not-harder/index.html",
    "revision": "1530481cbe1070e94b15e9866a58988d"
  },
  {
    "url": "2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "9a7bf73d0b4fdcb4b1130be10ca51592"
  },
  {
    "url": "2014/03/03/ah-life./index.html",
    "revision": "45f32823f81936bc7e75c6a411dd2f29"
  },
  {
    "url": "2014/03/03/granny-said.../index.html",
    "revision": "b5eb5e023efc4e478022566869a88ddd"
  },
  {
    "url": "2014/03/04/the-best-50-insults/index.html",
    "revision": "83addfdeb8c1885872a1488202eddda0"
  },
  {
    "url": "2014/03/12/20-laws-of-power/index.html",
    "revision": "e3af297798dda5d8bd3cb56236a00809"
  },
  {
    "url": "2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "8aaeb32a75fc592c2680b7b819a6cff6"
  },
  {
    "url": "2014/03/12/java-bits---getting-started/index.html",
    "revision": "e07f5842ab0eb3aca95144098bcb3468"
  },
  {
    "url": "2014/03/12/python-bits---getting-started/index.html",
    "revision": "d978e201a34f68bc2bd811ab2d9bd05f"
  },
  {
    "url": "2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "86dd5bcdb0cff09340bb0052c708ee39"
  },
  {
    "url": "2014/04/07/texting-while-driving/index.html",
    "revision": "034174234889bdec748108140510f8b6"
  },
  {
    "url": "2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "3390a8704de4fc26c051ec0e13de6ef9"
  },
  {
    "url": "2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "ae020c14ce06f1120669f3c9cad1d77f"
  },
  {
    "url": "2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "ed86c62376d769772a4e1014a2e5bcec"
  },
  {
    "url": "2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "48b2265cec2489ca994b2ea1f64878f3"
  },
  {
    "url": "2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "091956f4ad5bcf08336a04fa25393066"
  },
  {
    "url": "2014/08/09/flavours-themes/index.html",
    "revision": "f6fe67a66d62270bdb0103b601deee4e"
  },
  {
    "url": "2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "0801c9871802ffad0c27760603020b3b"
  },
  {
    "url": "2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "518275aaa0d5f83c1f6fe1aacf82dfbd"
  },
  {
    "url": "2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "2d1dc68716d15ed854ed50c7738b7748"
  },
  {
    "url": "2014/08/16/stars-celebration/index.html",
    "revision": "ebc74f33fdc4c1e67b1e8c24e7df41db"
  },
  {
    "url": "2014/08/21/a.i.-international/index.html",
    "revision": "b2a0fc4846c0e6465cc63c6c5d52fb79"
  },
  {
    "url": "2014/09/10/giving-back/index.html",
    "revision": "f93d675bc03f204de0a15804ed17a4bb"
  },
  {
    "url": "2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "d4a3303f3411ed5a66be5b93ebeb96e9"
  },
  {
    "url": "2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "4572f69205ee6fa30d7b844c24ca348b"
  },
  {
    "url": "2014/09/22/review---limbo/index.html",
    "revision": "60cfb9d0e4e2d9a1b877ec4d49f456f0"
  },
  {
    "url": "2014/10/01/cshu/index.html",
    "revision": "cac5e2a8762777b4a0571286ad257b6b"
  },
  {
    "url": "2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "9921bf7620a0b57c32a5b856224bb59e"
  },
  {
    "url": "2014/10/17/long-lighthearted-lists/index.html",
    "revision": "0d34a1fb1519272855329db88a064f4a"
  },
  {
    "url": "2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "b60794b109e4c33593a25c1d454f425c"
  },
  {
    "url": "2014/10/26/dc-hack/index.html",
    "revision": "ceb1d4ba14f8436c03addee68b8129d8"
  },
  {
    "url": "2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "6263e823f8f2f37c714aab1bb194eeb4"
  },
  {
    "url": "2014/11/10/study-guide---linked-lists/index.html",
    "revision": "2fad0355ed63dbc23563cf1a6dcc9b5c"
  },
  {
    "url": "2014/11/13/yes-hair-/index.html",
    "revision": "aa344ebce1b70bfbd6e4e53fcf1f6a87"
  },
  {
    "url": "2014/12/03/binary-trees--recursion/index.html",
    "revision": "241a784347f096b09a83863e605699cd"
  },
  {
    "url": "2014/12/17/inkling-1.1/index.html",
    "revision": "9b15a08f79752efbd84453d8262f6bfc"
  },
  {
    "url": "2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "36cc7e5624b78f89960b9ecdd0f5705f"
  },
  {
    "url": "2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "6dd667a55a05802e9bab966754de9a15"
  },
  {
    "url": "2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "a65a0d66db03f59215a49e0124972683"
  },
  {
    "url": "2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "8db166b80832b6b17efd893c253b9059"
  },
  {
    "url": "2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "18f00c5861c56ff1a108a8fd81e727b2"
  },
  {
    "url": "2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "ad88b7d506849ea17f6a75ceda6d480c"
  },
  {
    "url": "2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "1c9ed057354721cb8cb8a69172bb959e"
  },
  {
    "url": "2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "ba9cbe94b60f40c4589fac086e5ab425"
  },
  {
    "url": "2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "ffb31caed1bc0a69796753a635aaf3c9"
  },
  {
    "url": "2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "3479b3f8917ff1fa143631766dbb0cd5"
  },
  {
    "url": "2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "21519109ac46df00556bea0acecf1f94"
  },
  {
    "url": "2015/01/06/interview-with-coding-house/index.html",
    "revision": "461045b49c65c6027716ff5e84831d1d"
  },
  {
    "url": "2015/01/06/interview-with-designation/index.html",
    "revision": "dd18eee8b36fa7f18afcdbb1f4f52d49"
  },
  {
    "url": "2015/01/06/interview-with-devleague/index.html",
    "revision": "3196298d11bb16283b974713743eba78"
  },
  {
    "url": "2015/01/14/interview-with-makersquare/index.html",
    "revision": "03b47a20e729022e5b689ef5342874db"
  },
  {
    "url": "2015/01/30/aaai-2015/index.html",
    "revision": "41c80581bfaa080dcd5b2d49890db3ed"
  },
  {
    "url": "2015/01/30/adventures-with-aaai/index.html",
    "revision": "390b3d50e72a046c6aec73ce667524ad"
  },
  {
    "url": "2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "a0849356db5f18ca17c3154fb49911c4"
  },
  {
    "url": "2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "5fa81fdb4e6eeb1bdc2aad2258d25e12"
  },
  {
    "url": "2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "d81877496c58ffd34720069b92bec30e"
  },
  {
    "url": "2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "8a9a45fb4fdb9e0221a08fd205a9a6ae"
  },
  {
    "url": "2015/02/15/that-tapia-conference/index.html",
    "revision": "131657df614a785ec48a4c4a1bfcb609"
  },
  {
    "url": "2015/02/21/tapia-2015/index.html",
    "revision": "1a39b1e381ce78c3ae3087360e2b8656"
  },
  {
    "url": "2015/03/01/jeopardy-template-/index.html",
    "revision": "b8d8534dcd54d431a430c38155ef3c17"
  },
  {
    "url": "2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "57a2c402fd1e617d241490c0143e4478"
  },
  {
    "url": "2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "9c65c75a78aa5078c97f62625dc3e888"
  },
  {
    "url": "2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "aa70ef15e7bdcdaca889a1f6e8cebde9"
  },
  {
    "url": "2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "e34a994c19a8f0f5c54b097c73da9161"
  },
  {
    "url": "2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "c29348292e4b2522719f30adf3e28d06"
  },
  {
    "url": "2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "62c4a58b939a47f3020b0b1ffca68439"
  },
  {
    "url": "2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "91c0b0037bcb4d8cb681cd97524e3245"
  },
  {
    "url": "2015/04/17/vsgc-2015/index.html",
    "revision": "f43770fe400920617affef0f7f3a2fc2"
  },
  {
    "url": "2015/04/18/sort-detective---solution-/index.html",
    "revision": "e54391adaee2d8434db979255b9b4d3e"
  },
  {
    "url": "2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "4e5978bada692eabed534bf7aa91d111"
  },
  {
    "url": "2015/04/23/a.i.-movies-/index.html",
    "revision": "b717c804d5bdf403fa05347b51f8a2dd"
  },
  {
    "url": "2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "b7b95cbcdb40d4dcca89b8bc9cd7bc28"
  },
  {
    "url": "2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "4fdd00458be354120b8874a380eb7c07"
  },
  {
    "url": "2015/04/30/bebop.me-/index.html",
    "revision": "4d8d068c08d464d457627e879348d3a5"
  },
  {
    "url": "2015/05/17/ameot-/index.html",
    "revision": "2d8b79d8160e82f9af65e9ef02838a6b"
  },
  {
    "url": "2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "49391696f6b11208135a1d617166b116"
  },
  {
    "url": "2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "3bdd25b219284d6db3fdaae5edf8ba90"
  },
  {
    "url": "2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "ec94470a8215ff0ddb31052d379bd18b"
  },
  {
    "url": "2015/05/26/the-guessing-game-️/index.html",
    "revision": "713f5dfc3eff23b5a11fd2b5c7f96ca4"
  },
  {
    "url": "2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "354c633d10e15b22c7cdee7139ce18a9"
  },
  {
    "url": "2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "3ddbba89bd2b2045ca35f58085db7044"
  },
  {
    "url": "2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "e21ae1e23a2409a71407bd7a8e936d2f"
  },
  {
    "url": "2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "c68238299e55c096a5f25cfcde7923a5"
  },
  {
    "url": "2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "c6cb85b444b9c3638dce9e0dfb2437ae"
  },
  {
    "url": "2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "9bf47814882af3e0004a22e80dc3251a"
  },
  {
    "url": "2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "480dc5d075b31618fb765cb1e02ed027"
  },
  {
    "url": "2015/07/25/sally-conference/index.html",
    "revision": "73bb8884b54cf1fbe23fb098c357b649"
  },
  {
    "url": "2015/08/05/robopocalypse-/index.html",
    "revision": "5963ccc99a6bf88db78c5aa1af3864d5"
  },
  {
    "url": "2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "74e1bf08f3c4aee0f03a4cc7209c984e"
  },
  {
    "url": "2015/08/11/rankme-/index.html",
    "revision": "661a364d4c4548eedeeb3224763bbdb5"
  },
  {
    "url": "2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "08763ecf14ce7c5c5c222690e47d9b2d"
  },
  {
    "url": "2015/08/20/readme-template-for-github-/index.html",
    "revision": "1e50ea3ad6c77f90b83e343a2ae20f7d"
  },
  {
    "url": "2015/08/26/hiredot-/index.html",
    "revision": "67a69e4c0050b35e43b0331721d9a828"
  },
  {
    "url": "2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "2d15d756c5e184469fa56a60b8d33c29"
  },
  {
    "url": "2015/09/25/discover-goldman-sachs/index.html",
    "revision": "558dec0fd5abd1f06f0d6c0c54fa594b"
  },
  {
    "url": "2015/10/09/designlab-submissions-/index.html",
    "revision": "d07d134aef99ea61aa9d7e1c60469fcb"
  },
  {
    "url": "2015/10/09/designlab/index.html",
    "revision": "5e157d59014b5e53cca2835dfaae8046"
  },
  {
    "url": "2015/10/20/andre-smith/index.html",
    "revision": "934e3063519a27f2eedf0ed05e67c1ce"
  },
  {
    "url": "2015/10/21/my-designlab-experience-/index.html",
    "revision": "773d20c8385b3251572ab13c93f9642c"
  },
  {
    "url": "2015/10/24/hack-the-vote-/index.html",
    "revision": "91e9d161e217111a71413da69a697efe"
  },
  {
    "url": "2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "d4b4641f074ff778a10f67eb18eda9fb"
  },
  {
    "url": "2015/11/11/meetups-nearby-/index.html",
    "revision": "7b9154e37b8a2f2c84a0ea29e1f30b69"
  },
  {
    "url": "2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "d857aa8e2484376839a80d84c2ff26b1"
  },
  {
    "url": "2015/11/14/hr-devfest/index.html",
    "revision": "90b56d2fe3b445a1f3c2875a0322ffc8"
  },
  {
    "url": "2015/11/15/aaai/index.html",
    "revision": "a9bb0fabe8d30b585bb6726ec2839a61"
  },
  {
    "url": "2015/11/15/stars-computing-corps/index.html",
    "revision": "cb8dce6dd5ad84971587814f0760b386"
  },
  {
    "url": "2015/11/20/discover-accenture/index.html",
    "revision": "b0c19be28089a1f9fd6ff63877bfe10c"
  },
  {
    "url": "2015/12/02/dear-holberton-/index.html",
    "revision": "3ccc930e7397eec964ff24b63bf1ad92"
  },
  {
    "url": "2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "bcfaa0b4f89a14a6de140fc1a2783875"
  },
  {
    "url": "2015/12/10/ai-choo-ashe/index.html",
    "revision": "cd51af1f48663a91e0fb0a3731f36753"
  },
  {
    "url": "2015/12/12/kelli-white/index.html",
    "revision": "f6ca093d3245e41abf29fae04296232d"
  },
  {
    "url": "2015/12/13/hour-of-code/index.html",
    "revision": "7414cd8e3507cce83cc2532865011b3b"
  },
  {
    "url": "2015/12/18/alex-bradshaw/index.html",
    "revision": "baa1882287642012a13cfa86b6ad2f65"
  },
  {
    "url": "2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "e9a7c575263f815b318886ffd65e838f"
  },
  {
    "url": "2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "33366aac76396bd25ec4dda123cb5429"
  },
  {
    "url": "2016/01/05/kimberly-logsdon/index.html",
    "revision": "ff0c4ecec37d6ae9502ae494e3ee8611"
  },
  {
    "url": "2016/01/11/meetup-dice-/index.html",
    "revision": "0263c6c77674f7d67effa22e79c8135f"
  },
  {
    "url": "2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "36a9ad55b7c1b67eb92bf026619b0142"
  },
  {
    "url": "2016/01/18/built-in-norfolk/index.html",
    "revision": "a301d0667cf1bcbfeaa37af057bffc64"
  },
  {
    "url": "2016/01/18/norfolk.js-meetup/index.html",
    "revision": "7c637f23a0ea81580169c434d2c318c0"
  },
  {
    "url": "2016/01/31/hoya-hacks/index.html",
    "revision": "1e9ad603983f4776ab1d681d9ebdd83a"
  },
  {
    "url": "2016/01/31/life-at-home-/index.html",
    "revision": "6eb4b2339396d1489b3b7cbea3e09bc7"
  },
  {
    "url": "2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "d01d9cc40de019e85989dc2248eb1786"
  },
  {
    "url": "2016/02/05/8020-software-consulting/index.html",
    "revision": "ed8c102093b74c3448cd54b8d59d4541"
  },
  {
    "url": "2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "09bee05cfcb84ec2ec0f274f864cc035"
  },
  {
    "url": "2016/02/05/hacku-4/index.html",
    "revision": "6f5cef7ccfdede6f172369622db5f7f1"
  },
  {
    "url": "2016/02/12/acm/index.html",
    "revision": "123895d2ee1360ce15f884009cac8b17"
  },
  {
    "url": "2016/02/14/treehacks/index.html",
    "revision": "3eeac454425ad817af60d6e06b0d3a66"
  },
  {
    "url": "2016/02/17/developerweek/index.html",
    "revision": "ad83da1a8b76b7cf9da48633d0f9cfb3"
  },
  {
    "url": "2016/02/23/react.js-conf/index.html",
    "revision": "fda7c8370e028fffb335934a14bb3904"
  },
  {
    "url": "2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "88d659813efed55aeddb8ca8e2a18711"
  },
  {
    "url": "2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "1a4c761326236f787f4fbde44c704631"
  },
  {
    "url": "2016/03/10/fluent-conference/index.html",
    "revision": "116cec5a59a21aa0cf3d6d9e52672873"
  },
  {
    "url": "2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "dd65639490b40e57eb4ce0e08a6639f3"
  },
  {
    "url": "2016/04/01/angel-riera/index.html",
    "revision": "2917ab814a73bfb6a4617bc15df2702d"
  },
  {
    "url": "2016/04/07/mike-jonas/index.html",
    "revision": "13a9d2b1b5c355f760276ba139fc61ff"
  },
  {
    "url": "2016/04/09/innovation-hackathon/index.html",
    "revision": "66cafb65a5b4fbfaf186ccdc231d52bc"
  },
  {
    "url": "2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "055d0938cd566f10688ee5cb1bd2829a"
  },
  {
    "url": "2016/04/30/schools-out-️/index.html",
    "revision": "d0c6793c6f4388b6e88fa88b5418ccd9"
  },
  {
    "url": "2016/05/04/hampton-university/index.html",
    "revision": "c12983cd950700328018a4f3a7edc4ae"
  },
  {
    "url": "2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    "revision": "88af6f0f5fa474046272952d84b7d01d"
  },
  {
    "url": "2016/05/13/revolutionconf/index.html",
    "revision": "2f75c7abbda74990edddd0d6a36ba8e6"
  },
  {
    "url": "2016/05/24/pak-chu/index.html",
    "revision": "3d8fd68855b9d7ba8d0ed0f2e79f1a6e"
  },
  {
    "url": "2016/05/25/free-code-camp/index.html",
    "revision": "47ec69eb066809a7a804a4981c04dc31"
  },
  {
    "url": "2016/06/06/wen-tran/index.html",
    "revision": "de0dd2e214bedd9311676717b688deee"
  },
  {
    "url": "2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "815b70aa74e8ba04ba0ec0bf97aa48c0"
  },
  {
    "url": "2016/06/29/accenture-slc/index.html",
    "revision": "6c268787e867e205285cda390c4fe4d8"
  },
  {
    "url": "2016/07/30/npmcamp/index.html",
    "revision": "25725220ae1fe9aa27b35415f760f936"
  },
  {
    "url": "2016/08/01/lavie-ruan/index.html",
    "revision": "509bfe1e0783260b42647f84d49ebe90"
  },
  {
    "url": "2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "66123138bff0a6e60bdce74a7d2bb185"
  },
  {
    "url": "2016/08/26/fullstack-academy/index.html",
    "revision": "af03822999dd5315bb28aee26a020854"
  },
  {
    "url": "2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "f9144b902df2be66891c8433622184b0"
  },
  {
    "url": "2016/09/16/tapia-2016/index.html",
    "revision": "fe7ab6c5e1cbace0d16744c747004253"
  },
  {
    "url": "2016/09/27/github-repos---mashup-/index.html",
    "revision": "bc7c62e943f57bd1e660620190550cdb"
  },
  {
    "url": "2016/10/01/designhackathon/index.html",
    "revision": "a53835ab6358c06937807daa651abe52"
  },
  {
    "url": "2016/10/01/the-meggs-case-/index.html",
    "revision": "6b965a033effee0e5c900748038166b7"
  },
  {
    "url": "2016/10/04/cornell-tech-logos-/index.html",
    "revision": "d7ba0332d652e1062764b2fec6124af1"
  },
  {
    "url": "2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "5891aabcf7c342e136783ada509d4cfe"
  },
  {
    "url": "2016/10/09/kent-hack-enough/index.html",
    "revision": "b7de116446022509328ce33ffa22d047"
  },
  {
    "url": "2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "3601dd44aa1396124d31b90df622f898"
  },
  {
    "url": "2016/10/13/techweek-nyc/index.html",
    "revision": "ef778f3dd0fb7599aeaecd816208b9e6"
  },
  {
    "url": "2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "7599da0766721d93db2185eaee2d8823"
  },
  {
    "url": "2016/11/18/product-studio-/index.html",
    "revision": "8bb0d1625b2518234a147bb13e7add23"
  },
  {
    "url": "2016/11/30/witny/index.html",
    "revision": "03a175dd075177bdc804a9e14b39f4c6"
  },
  {
    "url": "2016/12/01/duolingo-delights-/index.html",
    "revision": "68159d2961d6ce508683ffde23250153"
  },
  {
    "url": "2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "cb0f489f495e5bcda534cf958bfaf49c"
  },
  {
    "url": "2016/12/08/hour-of-code/index.html",
    "revision": "524f78da523ffe81b28dfe54a305094a"
  },
  {
    "url": "2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "011f37466e6d8d8a84a65b51a0ae0b30"
  },
  {
    "url": "2016/12/10/alterconf-nyc-/index.html",
    "revision": "b4b88a42c53995a1148b237b7012d423"
  },
  {
    "url": "2016/12/11/alterconf-nyc/index.html",
    "revision": "7607c4dd3691fa3a41aca61fb0208a02"
  },
  {
    "url": "2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "fd58531894ddfd09161bf8909c85b56e"
  },
  {
    "url": "2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "717ceafae2d8f437c876d2b6dd8be80b"
  },
  {
    "url": "2016/12/17/norfolk.js/index.html",
    "revision": "a7cd7a3655a7b55142a4a346d79d5cf5"
  },
  {
    "url": "2016/12/17/product-school/index.html",
    "revision": "d00bd160532e5f6c02f33949309b1c74"
  },
  {
    "url": "2017/01/07/updated-github-page-/index.html",
    "revision": "4549396f7b604952d8ce13b73497828d"
  },
  {
    "url": "2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "91fa696ddcdca7098dd96446c70861f6"
  },
  {
    "url": "2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "c3eacb6988c322b02fc1f1fa3404583f"
  },
  {
    "url": "2017/01/21/huge-school-application-2017/index.html",
    "revision": "920ef15c433d4298fe27fad0bfddfe60"
  },
  {
    "url": "2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "415ffac58cc0e4a840aae2f215613d5a"
  },
  {
    "url": "2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "79a1321e594b8d04344b3466aadae196"
  },
  {
    "url": "2017/01/30/cute-things-we-do-/index.html",
    "revision": "b037b2aa80e4fcad58959cf72a3730e1"
  },
  {
    "url": "2017/02/01/franklin-lee/index.html",
    "revision": "babdf5546cd04e862f13e5e5aa4ee21c"
  },
  {
    "url": "2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "27b8778fff290cbe4abd3a55e8eeadc6"
  },
  {
    "url": "2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "dc09f56831a88ce89353eaab46ef06ff"
  },
  {
    "url": "2017/02/19/hackysu-2017/index.html",
    "revision": "f0b899f64bc89a18060d8dc10bd16650"
  },
  {
    "url": "2017/02/24/startup-studio/index.html",
    "revision": "d2d41df7c9d6efde32fc9345f8f42856"
  },
  {
    "url": "2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "011ba64c94f042c3a38da19918d0d801"
  },
  {
    "url": "2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "a6f3ba1c28ad4123363c66af9e362968"
  },
  {
    "url": "2017/03/14/connective-media/index.html",
    "revision": "5eb682e28e9a2d7d385b89c4c53489f1"
  },
  {
    "url": "2017/03/15/accepted-to-design-inc./index.html",
    "revision": "b53b4886a4b88b2409ea597643c63a08"
  },
  {
    "url": "2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "9420a3ede1fa4ec378ad70584dbb91e1"
  },
  {
    "url": "2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "886b0bc442c33ddea1eb29b7273b7c9b"
  },
  {
    "url": "2017/03/17/apprenticeships-/index.html",
    "revision": "420791a89a2345208eecf7cec30b7355"
  },
  {
    "url": "2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "0de1aa4ce81b48a4a750275f6061f60a"
  },
  {
    "url": "2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "b7627c9db4416d7ade79b9f1713902bb"
  },
  {
    "url": "2017/04/14/pathfinder/index.html",
    "revision": "1afc66ddde3b6282b8de84e9b75da805"
  },
  {
    "url": "2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "08b171d9c9485452bd6b0f009d5f0497"
  },
  {
    "url": "2017/04/30/codenow/index.html",
    "revision": "e5aef04eb344da2da699b2dceec5e70c"
  },
  {
    "url": "2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "b8d4f3b3ecdd5b46b9ccbf7ddc418966"
  },
  {
    "url": "2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "d13390abb272676feab28a9f22a99cb4"
  },
  {
    "url": "2017/05/26/cornell-tech/index.html",
    "revision": "11686753a79a75b73da101aa04de012b"
  },
  {
    "url": "2017/06/07/accenture-liquid-studio/index.html",
    "revision": "644b68bfe5fb563f769e3d5e9f2f5931"
  },
  {
    "url": "2017/06/16/team-monarch/index.html",
    "revision": "d9d318b91ab84c58fbb65b2009d4f87a"
  },
  {
    "url": "2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "5119e6239fa61ee4deb27a7ffc9b557c"
  },
  {
    "url": "2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "010bb453680bd9c816265ccbb385ed70"
  },
  {
    "url": "2017/08/28/new-blog-new-problems-/index.html",
    "revision": "a9d0e0d58d3d919cbfc9417041c72f67"
  },
  {
    "url": "2017/09/16/affect-conf/index.html",
    "revision": "a47c91ed598ad2c75e7b6c794305f40e"
  },
  {
    "url": "2017/09/27/strange-loop-2017/index.html",
    "revision": "4e46cc20f3e0096b0a3ac6e7934d97bc"
  },
  {
    "url": "2017/10/22/pwa-roadshow/index.html",
    "revision": "8c633575ef8f825bc51b9f5de30e0747"
  },
  {
    "url": "2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "b9851ea053e11c8fa113fe43f25e8d18"
  },
  {
    "url": "404.html",
    "revision": "78def6622389ac1968664002a0c77b82"
  },
  {
    "url": "about/colophon/index.html",
    "revision": "99627f4c86e67dbc4332b27354efda57"
  },
  {
    "url": "about/github-repo/index.html",
    "revision": "9c2da0eeecd9def3adf34a487b329254"
  },
  {
    "url": "about/index.html",
    "revision": "650613ade9a884ac0f03bc0e7c156c1e"
  },
  {
    "url": "about/resume/index.html",
    "revision": "ba2bc184992639e66ee864c2d6543756"
  },
  {
    "url": "about/travels/index.html",
    "revision": "7343bd6a66571f84eb731226ba26ae87"
  },
  {
    "url": "about/what-i-use/index.html",
    "revision": "a94f5a489edff60fae46843fffd60586"
  },
  {
    "url": "adventures/index.html",
    "revision": "3cc243e2a34f935298493376df82d85a"
  },
  {
    "url": "amp/2008/06/01/middle-school-poems-️/index.html",
    "revision": "e2f1aa82e95d6a6a3566b344717c9ec5"
  },
  {
    "url": "amp/2009/09/22/ghent-school/index.html",
    "revision": "0fea19856b2eff5907dd405bdb0ab507"
  },
  {
    "url": "amp/2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "59fd9d931e53a87644a4363ed3ed4442"
  },
  {
    "url": "amp/2010/05/12/desiring-the-casual-/index.html",
    "revision": "4f955b8c0c68c5f67b024333a54041e3"
  },
  {
    "url": "amp/2010/08/03/enders-game---book-review-/index.html",
    "revision": "d6669c03fb94f08d7b12b27a302264b0"
  },
  {
    "url": "amp/2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "a6575ba86ec6ae1e6fa3c92e72ea26b7"
  },
  {
    "url": "amp/2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "a2017cd12abc39664334cdde04b9b655"
  },
  {
    "url": "amp/2011/08/07/isce-2011/index.html",
    "revision": "0e2d8c527b63439d1c9d3232eb53776e"
  },
  {
    "url": "amp/2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "ee70ec6b008c91487555e8bd66a77623"
  },
  {
    "url": "amp/2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "d2948dfdd44b204a5ea8aa6b7fd85bcf"
  },
  {
    "url": "amp/2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "2e1f6bcd7f86654257ca9da543eaa418"
  },
  {
    "url": "amp/2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "b603109feb6f705859d1f5cc47c5ee70"
  },
  {
    "url": "amp/2012/03/01/stardust---book-review-/index.html",
    "revision": "147418acc3b289ea9a467f47add783f3"
  },
  {
    "url": "amp/2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "235647dd2d24e24f1294db143ba87443"
  },
  {
    "url": "amp/2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "e189da54a992d206bb904e912cdfff6e"
  },
  {
    "url": "amp/2012/08/10/odu-vmasc/index.html",
    "revision": "01c29cf949dbde819a88c0b1508a75b5"
  },
  {
    "url": "amp/2012/08/14/school-for-field-studies/index.html",
    "revision": "451b30014010569c760d490d5c72dab2"
  },
  {
    "url": "amp/2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "faee7ae2f165a61633b9d958dfd5bb70"
  },
  {
    "url": "amp/2013/06/13/maury-high-school/index.html",
    "revision": "e7e42405c268a360c61da2b807b99393"
  },
  {
    "url": "amp/2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "c42c6dba61b2043278cc2a4bce5691e2"
  },
  {
    "url": "amp/2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "ee89df71acea71dd39583494b69b786e"
  },
  {
    "url": "amp/2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "317c000d8480529d695300564fae95fd"
  },
  {
    "url": "amp/2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "5a263f377da0dffb1b873c34704ba59e"
  },
  {
    "url": "amp/2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "3c9906e8858ae10cb3518bdab90ef6e5"
  },
  {
    "url": "amp/2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "ed357082fa80795931de4b2789778d37"
  },
  {
    "url": "amp/2013/08/02/islc-2013/index.html",
    "revision": "2f244417bae08203b42f8ccf04192609"
  },
  {
    "url": "amp/2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "497e2c78e0da27b76079ef6357edd751"
  },
  {
    "url": "amp/2013/08/03/potc---chest-riddle-/index.html",
    "revision": "702e4e0f2d56f1cfaf109d189ae193d0"
  },
  {
    "url": "amp/2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "130fca982905f47ebaa6f376a21ff3c8"
  },
  {
    "url": "amp/2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "a37ab822f8a48ec4b88742072571a9ab"
  },
  {
    "url": "amp/2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "cc166699a52cf27421734115c26e2bee"
  },
  {
    "url": "amp/2013/09/20/c-bits---getting-started/index.html",
    "revision": "85215af91ba15386a35403dcd6b629a3"
  },
  {
    "url": "amp/2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "dbe8b4ecced128cc63fe6ce1ac67f3cc"
  },
  {
    "url": "amp/2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "b784ee00b3d5d27fcc44e24d0eea2de4"
  },
  {
    "url": "amp/2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "9f8746805820a56c77ba67d8152f7e99"
  },
  {
    "url": "amp/2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "f2b3ceec92df20a84204af2853c65824"
  },
  {
    "url": "amp/2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "4c2138985de4775825dcce8f04f4a1b2"
  },
  {
    "url": "amp/2014/02/21/working-smarter-not-harder/index.html",
    "revision": "1530481cbe1070e94b15e9866a58988d"
  },
  {
    "url": "amp/2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "9a7bf73d0b4fdcb4b1130be10ca51592"
  },
  {
    "url": "amp/2014/03/03/ah-life./index.html",
    "revision": "45f32823f81936bc7e75c6a411dd2f29"
  },
  {
    "url": "amp/2014/03/03/granny-said.../index.html",
    "revision": "b5eb5e023efc4e478022566869a88ddd"
  },
  {
    "url": "amp/2014/03/04/the-best-50-insults/index.html",
    "revision": "83addfdeb8c1885872a1488202eddda0"
  },
  {
    "url": "amp/2014/03/12/20-laws-of-power/index.html",
    "revision": "e3af297798dda5d8bd3cb56236a00809"
  },
  {
    "url": "amp/2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "8aaeb32a75fc592c2680b7b819a6cff6"
  },
  {
    "url": "amp/2014/03/12/java-bits---getting-started/index.html",
    "revision": "e07f5842ab0eb3aca95144098bcb3468"
  },
  {
    "url": "amp/2014/03/12/python-bits---getting-started/index.html",
    "revision": "d978e201a34f68bc2bd811ab2d9bd05f"
  },
  {
    "url": "amp/2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "86dd5bcdb0cff09340bb0052c708ee39"
  },
  {
    "url": "amp/2014/04/07/texting-while-driving/index.html",
    "revision": "034174234889bdec748108140510f8b6"
  },
  {
    "url": "amp/2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "3390a8704de4fc26c051ec0e13de6ef9"
  },
  {
    "url": "amp/2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "ae020c14ce06f1120669f3c9cad1d77f"
  },
  {
    "url": "amp/2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "ed86c62376d769772a4e1014a2e5bcec"
  },
  {
    "url": "amp/2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "48b2265cec2489ca994b2ea1f64878f3"
  },
  {
    "url": "amp/2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "091956f4ad5bcf08336a04fa25393066"
  },
  {
    "url": "amp/2014/08/09/flavours-themes/index.html",
    "revision": "f6fe67a66d62270bdb0103b601deee4e"
  },
  {
    "url": "amp/2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "0801c9871802ffad0c27760603020b3b"
  },
  {
    "url": "amp/2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "518275aaa0d5f83c1f6fe1aacf82dfbd"
  },
  {
    "url": "amp/2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "2d1dc68716d15ed854ed50c7738b7748"
  },
  {
    "url": "amp/2014/08/16/stars-celebration/index.html",
    "revision": "ebc74f33fdc4c1e67b1e8c24e7df41db"
  },
  {
    "url": "amp/2014/08/21/a.i.-international/index.html",
    "revision": "b2a0fc4846c0e6465cc63c6c5d52fb79"
  },
  {
    "url": "amp/2014/09/10/giving-back/index.html",
    "revision": "f93d675bc03f204de0a15804ed17a4bb"
  },
  {
    "url": "amp/2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "d4a3303f3411ed5a66be5b93ebeb96e9"
  },
  {
    "url": "amp/2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "4572f69205ee6fa30d7b844c24ca348b"
  },
  {
    "url": "amp/2014/09/22/review---limbo/index.html",
    "revision": "60cfb9d0e4e2d9a1b877ec4d49f456f0"
  },
  {
    "url": "amp/2014/10/01/cshu/index.html",
    "revision": "cac5e2a8762777b4a0571286ad257b6b"
  },
  {
    "url": "amp/2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "9921bf7620a0b57c32a5b856224bb59e"
  },
  {
    "url": "amp/2014/10/17/long-lighthearted-lists/index.html",
    "revision": "0d34a1fb1519272855329db88a064f4a"
  },
  {
    "url": "amp/2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "b60794b109e4c33593a25c1d454f425c"
  },
  {
    "url": "amp/2014/10/26/dc-hack/index.html",
    "revision": "ceb1d4ba14f8436c03addee68b8129d8"
  },
  {
    "url": "amp/2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "6263e823f8f2f37c714aab1bb194eeb4"
  },
  {
    "url": "amp/2014/11/10/study-guide---linked-lists/index.html",
    "revision": "2fad0355ed63dbc23563cf1a6dcc9b5c"
  },
  {
    "url": "amp/2014/11/13/yes-hair-/index.html",
    "revision": "aa344ebce1b70bfbd6e4e53fcf1f6a87"
  },
  {
    "url": "amp/2014/12/03/binary-trees--recursion/index.html",
    "revision": "241a784347f096b09a83863e605699cd"
  },
  {
    "url": "amp/2014/12/17/inkling-1.1/index.html",
    "revision": "9b15a08f79752efbd84453d8262f6bfc"
  },
  {
    "url": "amp/2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "36cc7e5624b78f89960b9ecdd0f5705f"
  },
  {
    "url": "amp/2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "6dd667a55a05802e9bab966754de9a15"
  },
  {
    "url": "amp/2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "a65a0d66db03f59215a49e0124972683"
  },
  {
    "url": "amp/2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "8db166b80832b6b17efd893c253b9059"
  },
  {
    "url": "amp/2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "18f00c5861c56ff1a108a8fd81e727b2"
  },
  {
    "url": "amp/2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "ad88b7d506849ea17f6a75ceda6d480c"
  },
  {
    "url": "amp/2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "1c9ed057354721cb8cb8a69172bb959e"
  },
  {
    "url": "amp/2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "ba9cbe94b60f40c4589fac086e5ab425"
  },
  {
    "url": "amp/2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "ffb31caed1bc0a69796753a635aaf3c9"
  },
  {
    "url": "amp/2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "3479b3f8917ff1fa143631766dbb0cd5"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "21519109ac46df00556bea0acecf1f94"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-house/index.html",
    "revision": "461045b49c65c6027716ff5e84831d1d"
  },
  {
    "url": "amp/2015/01/06/interview-with-designation/index.html",
    "revision": "dd18eee8b36fa7f18afcdbb1f4f52d49"
  },
  {
    "url": "amp/2015/01/06/interview-with-devleague/index.html",
    "revision": "3196298d11bb16283b974713743eba78"
  },
  {
    "url": "amp/2015/01/14/interview-with-makersquare/index.html",
    "revision": "03b47a20e729022e5b689ef5342874db"
  },
  {
    "url": "amp/2015/01/30/aaai-2015/index.html",
    "revision": "41c80581bfaa080dcd5b2d49890db3ed"
  },
  {
    "url": "amp/2015/01/30/adventures-with-aaai/index.html",
    "revision": "390b3d50e72a046c6aec73ce667524ad"
  },
  {
    "url": "amp/2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "a0849356db5f18ca17c3154fb49911c4"
  },
  {
    "url": "amp/2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "5fa81fdb4e6eeb1bdc2aad2258d25e12"
  },
  {
    "url": "amp/2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "d81877496c58ffd34720069b92bec30e"
  },
  {
    "url": "amp/2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "8a9a45fb4fdb9e0221a08fd205a9a6ae"
  },
  {
    "url": "amp/2015/02/15/that-tapia-conference/index.html",
    "revision": "131657df614a785ec48a4c4a1bfcb609"
  },
  {
    "url": "amp/2015/02/21/tapia-2015/index.html",
    "revision": "1a39b1e381ce78c3ae3087360e2b8656"
  },
  {
    "url": "amp/2015/03/01/jeopardy-template-/index.html",
    "revision": "b8d8534dcd54d431a430c38155ef3c17"
  },
  {
    "url": "amp/2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "57a2c402fd1e617d241490c0143e4478"
  },
  {
    "url": "amp/2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "9c65c75a78aa5078c97f62625dc3e888"
  },
  {
    "url": "amp/2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "aa70ef15e7bdcdaca889a1f6e8cebde9"
  },
  {
    "url": "amp/2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "e34a994c19a8f0f5c54b097c73da9161"
  },
  {
    "url": "amp/2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "c29348292e4b2522719f30adf3e28d06"
  },
  {
    "url": "amp/2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "62c4a58b939a47f3020b0b1ffca68439"
  },
  {
    "url": "amp/2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "91c0b0037bcb4d8cb681cd97524e3245"
  },
  {
    "url": "amp/2015/04/17/vsgc-2015/index.html",
    "revision": "f43770fe400920617affef0f7f3a2fc2"
  },
  {
    "url": "amp/2015/04/18/sort-detective---solution-/index.html",
    "revision": "e54391adaee2d8434db979255b9b4d3e"
  },
  {
    "url": "amp/2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "4e5978bada692eabed534bf7aa91d111"
  },
  {
    "url": "amp/2015/04/23/a.i.-movies-/index.html",
    "revision": "b717c804d5bdf403fa05347b51f8a2dd"
  },
  {
    "url": "amp/2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "b7b95cbcdb40d4dcca89b8bc9cd7bc28"
  },
  {
    "url": "amp/2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "4fdd00458be354120b8874a380eb7c07"
  },
  {
    "url": "amp/2015/04/30/bebop.me-/index.html",
    "revision": "4d8d068c08d464d457627e879348d3a5"
  },
  {
    "url": "amp/2015/05/17/ameot-/index.html",
    "revision": "2d8b79d8160e82f9af65e9ef02838a6b"
  },
  {
    "url": "amp/2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "49391696f6b11208135a1d617166b116"
  },
  {
    "url": "amp/2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "3bdd25b219284d6db3fdaae5edf8ba90"
  },
  {
    "url": "amp/2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "ec94470a8215ff0ddb31052d379bd18b"
  },
  {
    "url": "amp/2015/05/26/the-guessing-game-️/index.html",
    "revision": "713f5dfc3eff23b5a11fd2b5c7f96ca4"
  },
  {
    "url": "amp/2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "354c633d10e15b22c7cdee7139ce18a9"
  },
  {
    "url": "amp/2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "3ddbba89bd2b2045ca35f58085db7044"
  },
  {
    "url": "amp/2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "e21ae1e23a2409a71407bd7a8e936d2f"
  },
  {
    "url": "amp/2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "c68238299e55c096a5f25cfcde7923a5"
  },
  {
    "url": "amp/2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "c6cb85b444b9c3638dce9e0dfb2437ae"
  },
  {
    "url": "amp/2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "9bf47814882af3e0004a22e80dc3251a"
  },
  {
    "url": "amp/2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "480dc5d075b31618fb765cb1e02ed027"
  },
  {
    "url": "amp/2015/07/25/sally-conference/index.html",
    "revision": "73bb8884b54cf1fbe23fb098c357b649"
  },
  {
    "url": "amp/2015/08/05/robopocalypse-/index.html",
    "revision": "5963ccc99a6bf88db78c5aa1af3864d5"
  },
  {
    "url": "amp/2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "74e1bf08f3c4aee0f03a4cc7209c984e"
  },
  {
    "url": "amp/2015/08/11/rankme-/index.html",
    "revision": "661a364d4c4548eedeeb3224763bbdb5"
  },
  {
    "url": "amp/2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "08763ecf14ce7c5c5c222690e47d9b2d"
  },
  {
    "url": "amp/2015/08/20/readme-template-for-github-/index.html",
    "revision": "1e50ea3ad6c77f90b83e343a2ae20f7d"
  },
  {
    "url": "amp/2015/08/26/hiredot-/index.html",
    "revision": "67a69e4c0050b35e43b0331721d9a828"
  },
  {
    "url": "amp/2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "2d15d756c5e184469fa56a60b8d33c29"
  },
  {
    "url": "amp/2015/09/25/discover-goldman-sachs/index.html",
    "revision": "558dec0fd5abd1f06f0d6c0c54fa594b"
  },
  {
    "url": "amp/2015/10/09/designlab-submissions-/index.html",
    "revision": "d07d134aef99ea61aa9d7e1c60469fcb"
  },
  {
    "url": "amp/2015/10/09/designlab/index.html",
    "revision": "5e157d59014b5e53cca2835dfaae8046"
  },
  {
    "url": "amp/2015/10/20/andre-smith/index.html",
    "revision": "934e3063519a27f2eedf0ed05e67c1ce"
  },
  {
    "url": "amp/2015/10/21/my-designlab-experience-/index.html",
    "revision": "773d20c8385b3251572ab13c93f9642c"
  },
  {
    "url": "amp/2015/10/24/hack-the-vote-/index.html",
    "revision": "91e9d161e217111a71413da69a697efe"
  },
  {
    "url": "amp/2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "d4b4641f074ff778a10f67eb18eda9fb"
  },
  {
    "url": "amp/2015/11/11/meetups-nearby-/index.html",
    "revision": "7b9154e37b8a2f2c84a0ea29e1f30b69"
  },
  {
    "url": "amp/2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "d857aa8e2484376839a80d84c2ff26b1"
  },
  {
    "url": "amp/2015/11/14/hr-devfest/index.html",
    "revision": "90b56d2fe3b445a1f3c2875a0322ffc8"
  },
  {
    "url": "amp/2015/11/15/aaai/index.html",
    "revision": "a9bb0fabe8d30b585bb6726ec2839a61"
  },
  {
    "url": "amp/2015/11/15/stars-computing-corps/index.html",
    "revision": "cb8dce6dd5ad84971587814f0760b386"
  },
  {
    "url": "amp/2015/11/20/discover-accenture/index.html",
    "revision": "b0c19be28089a1f9fd6ff63877bfe10c"
  },
  {
    "url": "amp/2015/12/02/dear-holberton-/index.html",
    "revision": "3ccc930e7397eec964ff24b63bf1ad92"
  },
  {
    "url": "amp/2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "bcfaa0b4f89a14a6de140fc1a2783875"
  },
  {
    "url": "amp/2015/12/10/ai-choo-ashe/index.html",
    "revision": "cd51af1f48663a91e0fb0a3731f36753"
  },
  {
    "url": "amp/2015/12/12/kelli-white/index.html",
    "revision": "f6ca093d3245e41abf29fae04296232d"
  },
  {
    "url": "amp/2015/12/13/hour-of-code/index.html",
    "revision": "7414cd8e3507cce83cc2532865011b3b"
  },
  {
    "url": "amp/2015/12/18/alex-bradshaw/index.html",
    "revision": "baa1882287642012a13cfa86b6ad2f65"
  },
  {
    "url": "amp/2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "e9a7c575263f815b318886ffd65e838f"
  },
  {
    "url": "amp/2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "33366aac76396bd25ec4dda123cb5429"
  },
  {
    "url": "amp/2016/01/05/kimberly-logsdon/index.html",
    "revision": "ff0c4ecec37d6ae9502ae494e3ee8611"
  },
  {
    "url": "amp/2016/01/11/meetup-dice-/index.html",
    "revision": "0263c6c77674f7d67effa22e79c8135f"
  },
  {
    "url": "amp/2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "36a9ad55b7c1b67eb92bf026619b0142"
  },
  {
    "url": "amp/2016/01/18/built-in-norfolk/index.html",
    "revision": "a301d0667cf1bcbfeaa37af057bffc64"
  },
  {
    "url": "amp/2016/01/18/norfolk.js-meetup/index.html",
    "revision": "7c637f23a0ea81580169c434d2c318c0"
  },
  {
    "url": "amp/2016/01/31/hoya-hacks/index.html",
    "revision": "1e9ad603983f4776ab1d681d9ebdd83a"
  },
  {
    "url": "amp/2016/01/31/life-at-home-/index.html",
    "revision": "6eb4b2339396d1489b3b7cbea3e09bc7"
  },
  {
    "url": "amp/2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "d01d9cc40de019e85989dc2248eb1786"
  },
  {
    "url": "amp/2016/02/05/8020-software-consulting/index.html",
    "revision": "ed8c102093b74c3448cd54b8d59d4541"
  },
  {
    "url": "amp/2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "09bee05cfcb84ec2ec0f274f864cc035"
  },
  {
    "url": "amp/2016/02/05/hacku-4/index.html",
    "revision": "6f5cef7ccfdede6f172369622db5f7f1"
  },
  {
    "url": "amp/2016/02/12/acm/index.html",
    "revision": "123895d2ee1360ce15f884009cac8b17"
  },
  {
    "url": "amp/2016/02/14/treehacks/index.html",
    "revision": "3eeac454425ad817af60d6e06b0d3a66"
  },
  {
    "url": "amp/2016/02/17/developerweek/index.html",
    "revision": "ad83da1a8b76b7cf9da48633d0f9cfb3"
  },
  {
    "url": "amp/2016/02/23/react.js-conf/index.html",
    "revision": "fda7c8370e028fffb335934a14bb3904"
  },
  {
    "url": "amp/2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "88d659813efed55aeddb8ca8e2a18711"
  },
  {
    "url": "amp/2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "1a4c761326236f787f4fbde44c704631"
  },
  {
    "url": "amp/2016/03/10/fluent-conference/index.html",
    "revision": "116cec5a59a21aa0cf3d6d9e52672873"
  },
  {
    "url": "amp/2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "dd65639490b40e57eb4ce0e08a6639f3"
  },
  {
    "url": "amp/2016/04/01/angel-riera/index.html",
    "revision": "2917ab814a73bfb6a4617bc15df2702d"
  },
  {
    "url": "amp/2016/04/07/mike-jonas/index.html",
    "revision": "13a9d2b1b5c355f760276ba139fc61ff"
  },
  {
    "url": "amp/2016/04/09/innovation-hackathon/index.html",
    "revision": "66cafb65a5b4fbfaf186ccdc231d52bc"
  },
  {
    "url": "amp/2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "055d0938cd566f10688ee5cb1bd2829a"
  },
  {
    "url": "amp/2016/04/30/schools-out-️/index.html",
    "revision": "d0c6793c6f4388b6e88fa88b5418ccd9"
  },
  {
    "url": "amp/2016/05/04/hampton-university/index.html",
    "revision": "c12983cd950700328018a4f3a7edc4ae"
  },
  {
    "url": "amp/2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    "revision": "88af6f0f5fa474046272952d84b7d01d"
  },
  {
    "url": "amp/2016/05/13/revolutionconf/index.html",
    "revision": "2f75c7abbda74990edddd0d6a36ba8e6"
  },
  {
    "url": "amp/2016/05/24/pak-chu/index.html",
    "revision": "3d8fd68855b9d7ba8d0ed0f2e79f1a6e"
  },
  {
    "url": "amp/2016/05/25/free-code-camp/index.html",
    "revision": "47ec69eb066809a7a804a4981c04dc31"
  },
  {
    "url": "amp/2016/06/06/wen-tran/index.html",
    "revision": "de0dd2e214bedd9311676717b688deee"
  },
  {
    "url": "amp/2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "815b70aa74e8ba04ba0ec0bf97aa48c0"
  },
  {
    "url": "amp/2016/06/29/accenture-slc/index.html",
    "revision": "6c268787e867e205285cda390c4fe4d8"
  },
  {
    "url": "amp/2016/07/30/npmcamp/index.html",
    "revision": "25725220ae1fe9aa27b35415f760f936"
  },
  {
    "url": "amp/2016/08/01/lavie-ruan/index.html",
    "revision": "509bfe1e0783260b42647f84d49ebe90"
  },
  {
    "url": "amp/2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "66123138bff0a6e60bdce74a7d2bb185"
  },
  {
    "url": "amp/2016/08/26/fullstack-academy/index.html",
    "revision": "af03822999dd5315bb28aee26a020854"
  },
  {
    "url": "amp/2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "f9144b902df2be66891c8433622184b0"
  },
  {
    "url": "amp/2016/09/16/tapia-2016/index.html",
    "revision": "fe7ab6c5e1cbace0d16744c747004253"
  },
  {
    "url": "amp/2016/09/27/github-repos---mashup-/index.html",
    "revision": "bc7c62e943f57bd1e660620190550cdb"
  },
  {
    "url": "amp/2016/10/01/designhackathon/index.html",
    "revision": "a53835ab6358c06937807daa651abe52"
  },
  {
    "url": "amp/2016/10/01/the-meggs-case-/index.html",
    "revision": "6b965a033effee0e5c900748038166b7"
  },
  {
    "url": "amp/2016/10/04/cornell-tech-logos-/index.html",
    "revision": "d7ba0332d652e1062764b2fec6124af1"
  },
  {
    "url": "amp/2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "5891aabcf7c342e136783ada509d4cfe"
  },
  {
    "url": "amp/2016/10/09/kent-hack-enough/index.html",
    "revision": "b7de116446022509328ce33ffa22d047"
  },
  {
    "url": "amp/2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "3601dd44aa1396124d31b90df622f898"
  },
  {
    "url": "amp/2016/10/13/techweek-nyc/index.html",
    "revision": "ef778f3dd0fb7599aeaecd816208b9e6"
  },
  {
    "url": "amp/2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "7599da0766721d93db2185eaee2d8823"
  },
  {
    "url": "amp/2016/11/18/product-studio-/index.html",
    "revision": "8bb0d1625b2518234a147bb13e7add23"
  },
  {
    "url": "amp/2016/11/30/witny/index.html",
    "revision": "03a175dd075177bdc804a9e14b39f4c6"
  },
  {
    "url": "amp/2016/12/01/duolingo-delights-/index.html",
    "revision": "68159d2961d6ce508683ffde23250153"
  },
  {
    "url": "amp/2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "cb0f489f495e5bcda534cf958bfaf49c"
  },
  {
    "url": "amp/2016/12/08/hour-of-code/index.html",
    "revision": "524f78da523ffe81b28dfe54a305094a"
  },
  {
    "url": "amp/2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "011f37466e6d8d8a84a65b51a0ae0b30"
  },
  {
    "url": "amp/2016/12/10/alterconf-nyc-/index.html",
    "revision": "b4b88a42c53995a1148b237b7012d423"
  },
  {
    "url": "amp/2016/12/11/alterconf-nyc/index.html",
    "revision": "7607c4dd3691fa3a41aca61fb0208a02"
  },
  {
    "url": "amp/2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "fd58531894ddfd09161bf8909c85b56e"
  },
  {
    "url": "amp/2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "717ceafae2d8f437c876d2b6dd8be80b"
  },
  {
    "url": "amp/2016/12/17/norfolk.js/index.html",
    "revision": "a7cd7a3655a7b55142a4a346d79d5cf5"
  },
  {
    "url": "amp/2016/12/17/product-school/index.html",
    "revision": "d00bd160532e5f6c02f33949309b1c74"
  },
  {
    "url": "amp/2017/01/07/updated-github-page-/index.html",
    "revision": "4549396f7b604952d8ce13b73497828d"
  },
  {
    "url": "amp/2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "91fa696ddcdca7098dd96446c70861f6"
  },
  {
    "url": "amp/2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "c3eacb6988c322b02fc1f1fa3404583f"
  },
  {
    "url": "amp/2017/01/21/huge-school-application-2017/index.html",
    "revision": "920ef15c433d4298fe27fad0bfddfe60"
  },
  {
    "url": "amp/2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "415ffac58cc0e4a840aae2f215613d5a"
  },
  {
    "url": "amp/2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "79a1321e594b8d04344b3466aadae196"
  },
  {
    "url": "amp/2017/01/30/cute-things-we-do-/index.html",
    "revision": "b037b2aa80e4fcad58959cf72a3730e1"
  },
  {
    "url": "amp/2017/02/01/franklin-lee/index.html",
    "revision": "babdf5546cd04e862f13e5e5aa4ee21c"
  },
  {
    "url": "amp/2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "27b8778fff290cbe4abd3a55e8eeadc6"
  },
  {
    "url": "amp/2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "dc09f56831a88ce89353eaab46ef06ff"
  },
  {
    "url": "amp/2017/02/19/hackysu-2017/index.html",
    "revision": "f0b899f64bc89a18060d8dc10bd16650"
  },
  {
    "url": "amp/2017/02/24/startup-studio/index.html",
    "revision": "d2d41df7c9d6efde32fc9345f8f42856"
  },
  {
    "url": "amp/2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "011ba64c94f042c3a38da19918d0d801"
  },
  {
    "url": "amp/2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "a6f3ba1c28ad4123363c66af9e362968"
  },
  {
    "url": "amp/2017/03/14/connective-media/index.html",
    "revision": "5eb682e28e9a2d7d385b89c4c53489f1"
  },
  {
    "url": "amp/2017/03/15/accepted-to-design-inc./index.html",
    "revision": "b53b4886a4b88b2409ea597643c63a08"
  },
  {
    "url": "amp/2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "9420a3ede1fa4ec378ad70584dbb91e1"
  },
  {
    "url": "amp/2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "886b0bc442c33ddea1eb29b7273b7c9b"
  },
  {
    "url": "amp/2017/03/17/apprenticeships-/index.html",
    "revision": "420791a89a2345208eecf7cec30b7355"
  },
  {
    "url": "amp/2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "0de1aa4ce81b48a4a750275f6061f60a"
  },
  {
    "url": "amp/2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "b7627c9db4416d7ade79b9f1713902bb"
  },
  {
    "url": "amp/2017/04/14/pathfinder/index.html",
    "revision": "1afc66ddde3b6282b8de84e9b75da805"
  },
  {
    "url": "amp/2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "08b171d9c9485452bd6b0f009d5f0497"
  },
  {
    "url": "amp/2017/04/30/codenow/index.html",
    "revision": "e5aef04eb344da2da699b2dceec5e70c"
  },
  {
    "url": "amp/2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "b8d4f3b3ecdd5b46b9ccbf7ddc418966"
  },
  {
    "url": "amp/2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "d13390abb272676feab28a9f22a99cb4"
  },
  {
    "url": "amp/2017/05/26/cornell-tech/index.html",
    "revision": "11686753a79a75b73da101aa04de012b"
  },
  {
    "url": "amp/2017/06/07/accenture-liquid-studio/index.html",
    "revision": "644b68bfe5fb563f769e3d5e9f2f5931"
  },
  {
    "url": "amp/2017/06/16/team-monarch/index.html",
    "revision": "d9d318b91ab84c58fbb65b2009d4f87a"
  },
  {
    "url": "amp/2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "5119e6239fa61ee4deb27a7ffc9b557c"
  },
  {
    "url": "amp/2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "010bb453680bd9c816265ccbb385ed70"
  },
  {
    "url": "amp/2017/08/28/new-blog-new-problems-/index.html",
    "revision": "a9d0e0d58d3d919cbfc9417041c72f67"
  },
  {
    "url": "amp/2017/09/16/affect-conf/index.html",
    "revision": "a47c91ed598ad2c75e7b6c794305f40e"
  },
  {
    "url": "amp/2017/09/27/strange-loop-2017/index.html",
    "revision": "4e46cc20f3e0096b0a3ac6e7934d97bc"
  },
  {
    "url": "amp/2017/10/22/pwa-roadshow/index.html",
    "revision": "8c633575ef8f825bc51b9f5de30e0747"
  },
  {
    "url": "amp/2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "b9851ea053e11c8fa113fe43f25e8d18"
  },
  {
    "url": "amp/about/colophon/index.html",
    "revision": "99627f4c86e67dbc4332b27354efda57"
  },
  {
    "url": "amp/about/github-repo/index.html",
    "revision": "9c2da0eeecd9def3adf34a487b329254"
  },
  {
    "url": "amp/about/resume/index.html",
    "revision": "ba2bc184992639e66ee864c2d6543756"
  },
  {
    "url": "amp/about/travels/index.html",
    "revision": "7343bd6a66571f84eb731226ba26ae87"
  },
  {
    "url": "amp/about/what-i-use/index.html",
    "revision": "a94f5a489edff60fae46843fffd60586"
  },
  {
    "url": "amp/archive/index.html",
    "revision": "249b6fc8b0638d1426a98fbe02e6901d"
  },
  {
    "url": "amp/awards/index.html",
    "revision": "5b6b99ba2ad0ba1ab21566053ab2926c"
  },
  {
    "url": "amp/blog/1/01/01/ibooks/index.html",
    "revision": "781251afcd666fe05466d536b38b3385"
  },
  {
    "url": "amp/blog/1/01/01/linkedin-posts/index.html",
    "revision": "1ba79572e7be7d61930a99c977894e58"
  },
  {
    "url": "amp/blog/1/01/01/medium/index.html",
    "revision": "7853c32d4f32d214bc843400d7788972"
  },
  {
    "url": "amp/blog/1/01/01/quora-answers/index.html",
    "revision": "580047ac883da576b87ba2b3cc799527"
  },
  {
    "url": "amp/blog/1/01/01/scribd/index.html",
    "revision": "64ae047d6dc44ff43b2c7bd739190013"
  },
  {
    "url": "amp/blog/1/01/01/stack-exchange/index.html",
    "revision": "7a65303fb945e96dcc3c2f83b1c236be"
  },
  {
    "url": "amp/blog/1/01/01/tweets/index.html",
    "revision": "bab5d0b3f16ccc629a210a039e5ef751"
  },
  {
    "url": "amp/blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "09eff184a072c517b0ca80b1c41f8271"
  },
  {
    "url": "amp/contact/index.html",
    "revision": "2122ea0ec7b2aca8ebac9e616643652c"
  },
  {
    "url": "amp/index.html",
    "revision": "41404d8ba80c1ba05301b7d454f920f8"
  },
  {
    "url": "amp/portfolio/1/01/01/behance/index.html",
    "revision": "fb08425093938af60f1374a6779dd7a7"
  },
  {
    "url": "amp/portfolio/1/01/01/code-school/index.html",
    "revision": "7f333855cfd9b898a49c052d011feb29"
  },
  {
    "url": "amp/portfolio/1/01/01/devpost/index.html",
    "revision": "c6afbb393553c6ba678f5a844f3d579c"
  },
  {
    "url": "amp/portfolio/1/01/01/github-️/index.html",
    "revision": "e38bebfd3b34b964e8d94a8d91c69cef"
  },
  {
    "url": "amp/portfolio/1/01/01/slideshare/index.html",
    "revision": "88bbbdafc08a2f966b9ac7cc9f794c40"
  },
  {
    "url": "amp/portfolio/1/01/01/youtube/index.html",
    "revision": "1c552d73d28c6a6985631aa274714c2d"
  },
  {
    "url": "amp/services/freelancing/index.html",
    "revision": "e75c0fbb012b73e7df7a5de81d3e2fbb"
  },
  {
    "url": "amp/services/mentoring/index.html",
    "revision": "12ee8a78f424d70049046ac3c664fa19"
  },
  {
    "url": "amp/speaking/burn-prevention/index.html",
    "revision": "860f1134845929c2aa47278e4a5ae7f2"
  },
  {
    "url": "amp/speaking/coding-bootcamps/index.html",
    "revision": "9d44506e158f57d127e79ff77eed964b"
  },
  {
    "url": "amp/speaking/hour-of-code/index.html",
    "revision": "1bce17f30452f64c0fc555e1ea423182"
  },
  {
    "url": "amp/speaking/imovie101/index.html",
    "revision": "91799341eb3605cf95415dbab69a3aa9"
  },
  {
    "url": "amp/speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "3bc66eeb6e14e9722cc43f299300d6ec"
  },
  {
    "url": "amp/speaking/typescript-101/index.html",
    "revision": "0b34b8c5dc59bf4b4f0c0c7025466b55"
  },
  {
    "url": "amp/speaking/va-acm/index.html",
    "revision": "3e9db27177a714af3a607b2dd4c26794"
  },
  {
    "url": "amp/speaking/web-design/index.html",
    "revision": "8146008a46ffa6856a43c4379e82518c"
  },
  {
    "url": "archive/index.html",
    "revision": "249b6fc8b0638d1426a98fbe02e6901d"
  },
  {
    "url": "assets/js/ie.js",
    "revision": "c19e9dbec4a187653d6715c7437131da"
  },
  {
    "url": "assets/js/index.html",
    "revision": "c645f874184ad52f54fb1ab4a40172b8"
  },
  {
    "url": "awards/index.html",
    "revision": "5b6b99ba2ad0ba1ab21566053ab2926c"
  },
  {
    "url": "blog/1/01/01/ibooks/index.html",
    "revision": "781251afcd666fe05466d536b38b3385"
  },
  {
    "url": "blog/1/01/01/linkedin-posts/index.html",
    "revision": "1ba79572e7be7d61930a99c977894e58"
  },
  {
    "url": "blog/1/01/01/medium/index.html",
    "revision": "7853c32d4f32d214bc843400d7788972"
  },
  {
    "url": "blog/1/01/01/quora-answers/index.html",
    "revision": "580047ac883da576b87ba2b3cc799527"
  },
  {
    "url": "blog/1/01/01/scribd/index.html",
    "revision": "64ae047d6dc44ff43b2c7bd739190013"
  },
  {
    "url": "blog/1/01/01/stack-exchange/index.html",
    "revision": "7a65303fb945e96dcc3c2f83b1c236be"
  },
  {
    "url": "blog/1/01/01/tweets/index.html",
    "revision": "bab5d0b3f16ccc629a210a039e5ef751"
  },
  {
    "url": "blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "09eff184a072c517b0ca80b1c41f8271"
  },
  {
    "url": "blog/index.html",
    "revision": "990cbd9167e23616aa20b22eeab75655"
  },
  {
    "url": "categories/2015/index.html",
    "revision": "e4e5cd0a26c3f0f95604f229bfe554ba"
  },
  {
    "url": "categories/2016/index.html",
    "revision": "4e72e70b28f23814b5bfb2ceb07ed684"
  },
  {
    "url": "categories/2017/index.html",
    "revision": "2b8f2856cd959da5d411748b2feaa060"
  },
  {
    "url": "categories/award/index.html",
    "revision": "7654f4689b352ef22b855be21ff40fce"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "889aac7bb847aae51695321100aed6c2"
  },
  {
    "url": "categories/book/index.html",
    "revision": "4ef93026cc194f4b8cc54f9f795861ac"
  },
  {
    "url": "categories/bootcamps/index.html",
    "revision": "3eede8c2a623e5f27acd4783e6f7ead0"
  },
  {
    "url": "categories/burnprevention/index.html",
    "revision": "2d0f64c4caa77a47c739afbd1e5b58fe"
  },
  {
    "url": "categories/certainty/index.html",
    "revision": "771693686ae2bc0ca644e80c2ed62614"
  },
  {
    "url": "categories/conference/index.html",
    "revision": "bc8a34a47e40fbd786bd6f69f145f093"
  },
  {
    "url": "categories/creativity/index.html",
    "revision": "3cae93cab812dfb8ea02196041405d78"
  },
  {
    "url": "categories/design/index.html",
    "revision": "cca99c0f719de966806083120ee3fc2b"
  },
  {
    "url": "categories/education/index.html",
    "revision": "3e0c0a3e08f4fc5ca41ec0a2a9e59868"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "df59be50db25f6e7224549e6596da3dc"
  },
  {
    "url": "categories/hackathon/index.html",
    "revision": "6b74ed03330f759258907744800e9f0d"
  },
  {
    "url": "categories/hourofcode/index.html",
    "revision": "b4c5b916e72ba57e8ff68926e2cbee86"
  },
  {
    "url": "categories/imovie101/index.html",
    "revision": "792e6f3fd28ba2b6fc762c631763d7f5"
  },
  {
    "url": "categories/index.html",
    "revision": "f05987f59ba51711e50152a9bc3672e7"
  },
  {
    "url": "categories/portfolio/index.html",
    "revision": "11c0df67d0696b93aabc5f390524d555"
  },
  {
    "url": "categories/presentation/index.html",
    "revision": "412ae1938c232ddffb68a707c6709f65"
  },
  {
    "url": "categories/program/index.html",
    "revision": "71bbd11aa689155c111c2a7632ab4ed8"
  },
  {
    "url": "categories/research/index.html",
    "revision": "3208bd4656210da3d2d0cde34710c385"
  },
  {
    "url": "categories/review/index.html",
    "revision": "50e8edfc7644f3eef6554a613523dcab"
  },
  {
    "url": "categories/speaking/index.html",
    "revision": "3b31040b7e9f6c59b941e4bfae2e1f55"
  },
  {
    "url": "categories/typescript101/index.html",
    "revision": "bde60529fa6491f950cdfed97bfb09ac"
  },
  {
    "url": "categories/vaacm/index.html",
    "revision": "c729e043b82cf74b5f623299f4137e51"
  },
  {
    "url": "categories/volunteering/index.html",
    "revision": "e5b137f414fce30b7105119c372819ac"
  },
  {
    "url": "categories/web/index.html",
    "revision": "5a9965ae1c9159f30a8c1e9a60241d77"
  },
  {
    "url": "categories/webdesign/index.html",
    "revision": "8b1f3e0a30496107d5fa286679cbe780"
  },
  {
    "url": "categories/wizard/index.html",
    "revision": "027f1a9c13cca7164da975235ff45f59"
  },
  {
    "url": "contact/index.html",
    "revision": "2122ea0ec7b2aca8ebac9e616643652c"
  },
  {
    "url": "/dist/assets/js/index.html",
    "revision": "41404d8ba80c1ba05301b7d454f920f8"
  },
  {
    "url": "OneSignalSDKUpdaterWorker.js",
    "revision": "ec63a9458244c4a5e3561af03b2df246"
  },
  {
    "url": "OneSignalSDKWorker.js",
    "revision": "ec63a9458244c4a5e3561af03b2df246"
  },
  {
    "url": "portfolio/1/01/01/behance/index.html",
    "revision": "fb08425093938af60f1374a6779dd7a7"
  },
  {
    "url": "portfolio/1/01/01/code-school/index.html",
    "revision": "7f333855cfd9b898a49c052d011feb29"
  },
  {
    "url": "portfolio/1/01/01/devpost/index.html",
    "revision": "c6afbb393553c6ba678f5a844f3d579c"
  },
  {
    "url": "portfolio/1/01/01/github-️/index.html",
    "revision": "e38bebfd3b34b964e8d94a8d91c69cef"
  },
  {
    "url": "portfolio/1/01/01/slideshare/index.html",
    "revision": "88bbbdafc08a2f966b9ac7cc9f794c40"
  },
  {
    "url": "portfolio/1/01/01/youtube/index.html",
    "revision": "1c552d73d28c6a6985631aa274714c2d"
  },
  {
    "url": "portfolio/index.html",
    "revision": "5c8730311078e04bc4d7cf5753397e39"
  },
  {
    "url": "services/freelancing/index.html",
    "revision": "e75c0fbb012b73e7df7a5de81d3e2fbb"
  },
  {
    "url": "services/index.html",
    "revision": "d5bdd46f36ae67639d5bcf31491d7d54"
  },
  {
    "url": "services/mentoring/index.html",
    "revision": "12ee8a78f424d70049046ac3c664fa19"
  },
  {
    "url": "speaking/burn-prevention/index.html",
    "revision": "860f1134845929c2aa47278e4a5ae7f2"
  },
  {
    "url": "speaking/coding-bootcamps/index.html",
    "revision": "9d44506e158f57d127e79ff77eed964b"
  },
  {
    "url": "speaking/hour-of-code/index.html",
    "revision": "1bce17f30452f64c0fc555e1ea423182"
  },
  {
    "url": "speaking/imovie101/index.html",
    "revision": "91799341eb3605cf95415dbab69a3aa9"
  },
  {
    "url": "speaking/index.html",
    "revision": "a560d24f643eaf4ff040e66d54f63893"
  },
  {
    "url": "speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "3bc66eeb6e14e9722cc43f299300d6ec"
  },
  {
    "url": "speaking/typescript-101/index.html",
    "revision": "0b34b8c5dc59bf4b4f0c0c7025466b55"
  },
  {
    "url": "speaking/va-acm/index.html",
    "revision": "3e9db27177a714af3a607b2dd4c26794"
  },
  {
    "url": "speaking/web-design/index.html",
    "revision": "8146008a46ffa6856a43c4379e82518c"
  },
  {
    "url": "tags/100/index.html",
    "revision": "cd8b2871df8d7929cd0ca777b25a67cb"
  },
  {
    "url": "tags/100th/index.html",
    "revision": "4abaf2efa6709177d2b96d01706b2dbd"
  },
  {
    "url": "tags/128x128/index.html",
    "revision": "6751a4142d47c54e845563a5fd05c680"
  },
  {
    "url": "tags/2008/index.html",
    "revision": "92633c29be74ab7da343c195f66a7404"
  },
  {
    "url": "tags/2d-game/index.html",
    "revision": "c4b56f578340b90b9e1ab8bd5d15b52e"
  },
  {
    "url": "tags/50-crimes/index.html",
    "revision": "cab262986ba39241b5aea0c8ce7fa294"
  },
  {
    "url": "tags/50-lines-for-50-crimes/index.html",
    "revision": "4164a74ae9acfd82e08cd8a9fe09acdc"
  },
  {
    "url": "tags/50-lines/index.html",
    "revision": "960bf0cf67b049489e0adc948184f5c6"
  },
  {
    "url": "tags/757-developers/index.html",
    "revision": "caa3a81915c68e3e4a67035afe16082b"
  },
  {
    "url": "tags/757/index.html",
    "revision": "c628c7c5fc0e8fac0ef2d798f0786085"
  },
  {
    "url": "tags/757dev/index.html",
    "revision": "1792f665342de07c34220da585990a2c"
  },
  {
    "url": "tags/8020/index.html",
    "revision": "3540295e81d0a343c5832f5abc2de2bb"
  },
  {
    "url": "tags/a-poem-for-a-friend/index.html",
    "revision": "a62cb688e19181f2378c2b73e57cc016"
  },
  {
    "url": "tags/aaai-2015/index.html",
    "revision": "bfe9c479c842ee4c267717c1d5bf3971"
  },
  {
    "url": "tags/aaai/index.html",
    "revision": "fb21b2106c98621d93a2bd6337b77446"
  },
  {
    "url": "tags/academia/index.html",
    "revision": "6c25855894b9103bd8524d6084bf4086"
  },
  {
    "url": "tags/academy/index.html",
    "revision": "9e6f0f3935438e81601b11fd7f657671"
  },
  {
    "url": "tags/accenture/index.html",
    "revision": "124eafe139a2e78c3b18f44029fb8955"
  },
  {
    "url": "tags/acceptance/index.html",
    "revision": "7965918b57a099627bd5d0b5e4896f36"
  },
  {
    "url": "tags/accepted/index.html",
    "revision": "276f9128ceb72aff56830cec1696b793"
  },
  {
    "url": "tags/accountability/index.html",
    "revision": "0b6de0c06a1beed026670594c2ba52b4"
  },
  {
    "url": "tags/adapt-and-survive/index.html",
    "revision": "9c77855e96c7e5a980770a9a38054d08"
  },
  {
    "url": "tags/admissions-challenge/index.html",
    "revision": "a17e42b54f84009d5617d90ffb20c48e"
  },
  {
    "url": "tags/admissions/index.html",
    "revision": "a3986a4c5009c4c1186544ca1522f1cb"
  },
  {
    "url": "tags/adobe-after-effects/index.html",
    "revision": "e69a8ff556fd2d7e9329fdfd9c17acd6"
  },
  {
    "url": "tags/adobe-premiere-pro/index.html",
    "revision": "4f974671a21b95eadf4ff678f0f8a38e"
  },
  {
    "url": "tags/adrenaline-junkies/index.html",
    "revision": "6fbadb48b91819d88c2c8ba51ac46180"
  },
  {
    "url": "tags/adult-perspective/index.html",
    "revision": "7ce259d8af4baec9516c303b4da832ca"
  },
  {
    "url": "tags/affordance-models/index.html",
    "revision": "ad895d28295965e6f3f5077a45df4c9d"
  },
  {
    "url": "tags/afro-movers-and-shakers/index.html",
    "revision": "81340f939bec2b33d897c8a2cce443a7"
  },
  {
    "url": "tags/aftermath/index.html",
    "revision": "dc868397f9f921df702729544cd8b4ff"
  },
  {
    "url": "tags/ai-conference/index.html",
    "revision": "a9e067bc84e67f3ec883e5bf5d354930"
  },
  {
    "url": "tags/ai/index.html",
    "revision": "afca86a0d897bee975c0ae6a18b50d89"
  },
  {
    "url": "tags/ai2/index.html",
    "revision": "d794678d947fb0ac9bf98cca2c6b877d"
  },
  {
    "url": "tags/ailey-extension/index.html",
    "revision": "6fb24add2cecc3b1979574eaedeaf608"
  },
  {
    "url": "tags/air-heads/index.html",
    "revision": "51271d0284489550332cb6c286353219"
  },
  {
    "url": "tags/airmail-integration/index.html",
    "revision": "bd41ad5c9c6ed5915c36527babd6a3ab"
  },
  {
    "url": "tags/airmail-school-email/index.html",
    "revision": "7eebf62e572013ecda8db721622cbb87"
  },
  {
    "url": "tags/airmail/index.html",
    "revision": "60ed03135b1ce5d56e8c992fe0c5e23b"
  },
  {
    "url": "tags/airtable-app/index.html",
    "revision": "f0cb1ab93b8a4b0742bf1737ef1cec26"
  },
  {
    "url": "tags/airtable/index.html",
    "revision": "4854793b7f230ba92ec3aa1ec168e70a"
  },
  {
    "url": "tags/ajax/index.html",
    "revision": "eaea1de6ccbd5d0f99d70ad78c4bd195"
  },
  {
    "url": "tags/alchemize/index.html",
    "revision": "38715040059cf62217d5e74974ffb607"
  },
  {
    "url": "tags/alfred/index.html",
    "revision": "aff8a14d709b69c13e22e53c81a7fa03"
  },
  {
    "url": "tags/algorithms/index.html",
    "revision": "462a5eac6c954c1a313dc5e62dedc375"
  },
  {
    "url": "tags/alien/index.html",
    "revision": "b76393361487c5e8bb05242c04723362"
  },
  {
    "url": "tags/aline-lerner/index.html",
    "revision": "965c2dc7de8352c489a052b597877145"
  },
  {
    "url": "tags/alpha/index.html",
    "revision": "74c55afe2901026ff0a7e207a97204ab"
  },
  {
    "url": "tags/alterconf-new-york-city/index.html",
    "revision": "63e4b839a3d7a482ab8c512b2b494a26"
  },
  {
    "url": "tags/alterconf-nyc-2016/index.html",
    "revision": "3fd2313e6627dddd3cd833626e7daf60"
  },
  {
    "url": "tags/alterconf-nyc/index.html",
    "revision": "09093b67c54b1f455982913189869b3d"
  },
  {
    "url": "tags/alterconf/index.html",
    "revision": "c44436a2a6a99a9ff92d678964952155"
  },
  {
    "url": "tags/alternote/index.html",
    "revision": "08b064a36c35e7d201ab2bc6201e56c1"
  },
  {
    "url": "tags/alumni-panel/index.html",
    "revision": "d0a8e92d6b99771cb5b81e117379aef2"
  },
  {
    "url": "tags/ameot/index.html",
    "revision": "1fda4a7bf2c4f55b06ac152f35ccefe5"
  },
  {
    "url": "tags/american-museum-of-natural-history/index.html",
    "revision": "d714bc120290925de35aeb6f3cb48d54"
  },
  {
    "url": "tags/amphetamine/index.html",
    "revision": "67032b9085091b0bea424842c6d69121"
  },
  {
    "url": "tags/ancestor/index.html",
    "revision": "9ad73d90e2d1c2b2dd45a7459559aafe"
  },
  {
    "url": "tags/angular-js/index.html",
    "revision": "64d88ac861ee9e5bfc5540a90e7f3e85"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "26c023f14e13f4cbdffbd269147087b2"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "f65d0c41570938ca75f87a6bf85b91d4"
  },
  {
    "url": "tags/anonymous-functions/index.html",
    "revision": "7852f9f161a35b619a197139df4e1fe0"
  },
  {
    "url": "tags/apocalypse/index.html",
    "revision": "25c9637a9f9bfdb32eec073d45eb7d93"
  },
  {
    "url": "tags/app-academy/index.html",
    "revision": "5b8abc0156e4b582e7a9ce3954e19067"
  },
  {
    "url": "tags/app-store/index.html",
    "revision": "6542a4ed4eca5d531ad9178ee38d9d80"
  },
  {
    "url": "tags/apple/index.html",
    "revision": "145e62ff993aeeac16c67182824bf350"
  },
  {
    "url": "tags/application/index.html",
    "revision": "82897478f5fdb307f45615f84ca38b3a"
  },
  {
    "url": "tags/applications/index.html",
    "revision": "2cbb4eb353d6f05b2ae95c9b1d4e7fec"
  },
  {
    "url": "tags/arcade-publishing/index.html",
    "revision": "f221bab4cb7068ab78ba33bbcbc48d53"
  },
  {
    "url": "tags/archos/index.html",
    "revision": "56131a5254e34286d6c65044133ae3ec"
  },
  {
    "url": "tags/area-of-a-rectangle-python/index.html",
    "revision": "408339d8268925880acb02e46b8ac281"
  },
  {
    "url": "tags/arithmetic/index.html",
    "revision": "929bfce41a3a335ea1be859a8bdc07b9"
  },
  {
    "url": "tags/array-implementation/index.html",
    "revision": "84f2b5328f786a90becfc63eb8550489"
  },
  {
    "url": "tags/array/index.html",
    "revision": "4bc13e9521fadb63e796220d8cf90cc0"
  },
  {
    "url": "tags/arrays/index.html",
    "revision": "57bf3be17abf8cbc20a16fe509c7e53d"
  },
  {
    "url": "tags/arsenic/index.html",
    "revision": "75807d0f163fe0a2a7ac0dcea14ed020"
  },
  {
    "url": "tags/artificial-intelligence/index.html",
    "revision": "001990f77307ffe7cc11ddd78f4a11f9"
  },
  {
    "url": "tags/artificially-intelligent/index.html",
    "revision": "2f646b460e9c47a070b73c361f75354b"
  },
  {
    "url": "tags/asperger-syndrome/index.html",
    "revision": "9010ce1b34dea799c9e9db8096ead64d"
  },
  {
    "url": "tags/asperger/index.html",
    "revision": "71c6c1f4cae0014cd2f0a922ee20f5ee"
  },
  {
    "url": "tags/aspie/index.html",
    "revision": "c130058c8caa3557e4b5b9d8860e0285"
  },
  {
    "url": "tags/assigning/index.html",
    "revision": "4dbeff175cccd893b6a9a1b230138c1b"
  },
  {
    "url": "tags/at-home-advisor/index.html",
    "revision": "04fcdd879d6e7192f064f0e4778e05d9"
  },
  {
    "url": "tags/atheists/index.html",
    "revision": "bfedec09f26dbbfe7c74b6fd7404b0c7"
  },
  {
    "url": "tags/auschwitz-a-doctors-eyewitness-account/index.html",
    "revision": "921ddc9e8de1403c115d37babc6795ec"
  },
  {
    "url": "tags/auschwitz/index.html",
    "revision": "0bc7b3df6747efb3ad2769001cb59ff7"
  },
  {
    "url": "tags/austin/index.html",
    "revision": "b93e5039bc5105fb7c492ecc3157a4a3"
  },
  {
    "url": "tags/authentication/index.html",
    "revision": "a4a251368e0ae34e95928c4d50d9f7de"
  },
  {
    "url": "tags/autism-spectrum/index.html",
    "revision": "fba3a6a3743c0448fdd050069b59b80c"
  },
  {
    "url": "tags/automated-jobs/index.html",
    "revision": "b33a7f419a822742f63f1d049f2f877c"
  },
  {
    "url": "tags/automated/index.html",
    "revision": "8663098e60c67b5a8d80b314ea34508e"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "dbd59cfd803e0b6dda2af83dde1bfb27"
  },
  {
    "url": "tags/automator/index.html",
    "revision": "7d1773199fa1d3a1532bb4aee5a15608"
  },
  {
    "url": "tags/avalon/index.html",
    "revision": "4cf5796d65fc4d4310800b2ba68e70a6"
  },
  {
    "url": "tags/aviation/index.html",
    "revision": "974eb9ded1d00a18bf006206fdeb23e0"
  },
  {
    "url": "tags/awkward-silences/index.html",
    "revision": "891821b007c1b0a0b6dcc4c4983ba721"
  },
  {
    "url": "tags/awwwards/index.html",
    "revision": "bebded32003f26cb200897361cf71d03"
  },
  {
    "url": "tags/baboon/index.html",
    "revision": "9cfd6bba94d24aed432df11572993166"
  },
  {
    "url": "tags/background/index.html",
    "revision": "35191b226a60873ca1578d897e1371fa"
  },
  {
    "url": "tags/backgrounds/index.html",
    "revision": "c7aaef2973eaeee52112205bda564988"
  },
  {
    "url": "tags/balanced/index.html",
    "revision": "c1fe8744c8822f5f0bfa173534a719e6"
  },
  {
    "url": "tags/balls/index.html",
    "revision": "b2cb929995e129d56c63a68c8c51e44a"
  },
  {
    "url": "tags/banquet/index.html",
    "revision": "f8336f59738673998a5accbae8fe194e"
  },
  {
    "url": "tags/barbara-demick/index.html",
    "revision": "f3328721a730abc7b2cdcca83503c9fe"
  },
  {
    "url": "tags/barbossa/index.html",
    "revision": "4cafc430e469b3423f781e752b8c10cf"
  },
  {
    "url": "tags/bartender/index.html",
    "revision": "3b5ba81e95ced14024b999e9060601bc"
  },
  {
    "url": "tags/basic-structure/index.html",
    "revision": "bc874f4dc97685c86b1077a8bad688c6"
  },
  {
    "url": "tags/battle-school/index.html",
    "revision": "aa6849ccb8c1d391d6ba20ce6b7615e3"
  },
  {
    "url": "tags/bay-area/index.html",
    "revision": "7188bb01a4805de04f059c407cea5caf"
  },
  {
    "url": "tags/be-wary/index.html",
    "revision": "c7caf9a33e8915b54f8c07eaae584ac0"
  },
  {
    "url": "tags/beauty/index.html",
    "revision": "2921c8d490f52556a5e6579af35bcf44"
  },
  {
    "url": "tags/bee/index.html",
    "revision": "620cd57ca3982753be0d00284ee54117"
  },
  {
    "url": "tags/beginner/index.html",
    "revision": "b723f857cb76dab8072a19c2b35e68c5"
  },
  {
    "url": "tags/beginning-programming/index.html",
    "revision": "d7a2408becc2da57d124d166d5eb15e9"
  },
  {
    "url": "tags/behance/index.html",
    "revision": "397f71b3502540831b8426283e9f8b2a"
  },
  {
    "url": "tags/benito-de-soto/index.html",
    "revision": "53bcd3899d8476ccc638418bff29fcd0"
  },
  {
    "url": "tags/bento/index.html",
    "revision": "f77ac018b2d92477aa151cf02c47392f"
  },
  {
    "url": "tags/best-bootcamps/index.html",
    "revision": "7b1692a84368e843564bf5bd8615a69d"
  },
  {
    "url": "tags/beta-day/index.html",
    "revision": "344e6bc621882ebbad958c1a278165ef"
  },
  {
    "url": "tags/beta/index.html",
    "revision": "d81d94ebf5bcd52facbab6dc9f70fc5a"
  },
  {
    "url": "tags/bethel-high-school/index.html",
    "revision": "3523713175395e05d7acb0d0acadc671"
  },
  {
    "url": "tags/bettersnaptool/index.html",
    "revision": "c8951531ad60d2072148b90517b22471"
  },
  {
    "url": "tags/bieber/index.html",
    "revision": "3488c71d74fae7727251cceafbba7f54"
  },
  {
    "url": "tags/big-presentation/index.html",
    "revision": "837edbf97abb59c08e94c33c2959a820"
  },
  {
    "url": "tags/binary-search-tree/index.html",
    "revision": "b203aee448dd92fb09dfbe67e6813734"
  },
  {
    "url": "tags/binary-tree/index.html",
    "revision": "2f3a6994c0284f4f8ea08894e6989ae8"
  },
  {
    "url": "tags/binary-trees/index.html",
    "revision": "0b29bddca9d1f2373c5169e6b545d77f"
  },
  {
    "url": "tags/binary/index.html",
    "revision": "fb694e8ccfe0118c398dd3012488ac6a"
  },
  {
    "url": "tags/binding-of-isaac-review/index.html",
    "revision": "483a0b3b60a4b833216775efaa5c6bcc"
  },
  {
    "url": "tags/binding-of-isaac/index.html",
    "revision": "2fcf9eae0ca6c0e85abc1f8fdd9f1f37"
  },
  {
    "url": "tags/binding/index.html",
    "revision": "d4f996683b6b674f61da2ffeecf311cf"
  },
  {
    "url": "tags/bit/index.html",
    "revision": "37868c706d2494bb79c92f259882e724"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "58b4badd87d2b0d7447749d82c833375"
  },
  {
    "url": "tags/bitmaker-labs/index.html",
    "revision": "8980695b3787325b4e2233fc48d385e0"
  },
  {
    "url": "tags/bitmaker/index.html",
    "revision": "45856f4904a3c17a0dd3fddfd0aafada"
  },
  {
    "url": "tags/bits/index.html",
    "revision": "c9361427d32d00438e53d5ab4ed6694d"
  },
  {
    "url": "tags/black-beard/index.html",
    "revision": "d33c7cd4dba689e0d16190017fe4ca2a"
  },
  {
    "url": "tags/black-pearl/index.html",
    "revision": "93a2864ca75b51aea35fc271aed13e5b"
  },
  {
    "url": "tags/blackbeard/index.html",
    "revision": "3c3b90f6e981e152dced38a8a65579a7"
  },
  {
    "url": "tags/blanket/index.html",
    "revision": "774eaf69f37f922f04fcd75b70040ebf"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "e931a3324665f57dfae53251e188ddc6"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "368dbea133485e134e7a69187f84e69e"
  },
  {
    "url": "tags/bloody-game/index.html",
    "revision": "88cc016d08d4ccf89c9351cd9c4840c4"
  },
  {
    "url": "tags/bloomberg/index.html",
    "revision": "351e3a0f2310c7731a6e824330aa0d62"
  },
  {
    "url": "tags/board-game/index.html",
    "revision": "4d2aa9a70ed75eea13f602392ee44c56"
  },
  {
    "url": "tags/book-review/index.html",
    "revision": "cf26782fba519f3bc1778b2b326572b9"
  },
  {
    "url": "tags/boot-camp/index.html",
    "revision": "838139234e289a77228de808643332d0"
  },
  {
    "url": "tags/bootcamp-agreement/index.html",
    "revision": "224dec0a0bc940396dc08b37f78583f8"
  },
  {
    "url": "tags/bootcamp-hawaii/index.html",
    "revision": "3ed4349d82a4dbc0899527c990cd5f6a"
  },
  {
    "url": "tags/bootcamp.me/index.html",
    "revision": "603ac0a1216ce7ab41431dde1e1ecd0f"
  },
  {
    "url": "tags/bootcamp/index.html",
    "revision": "f4a5e111e0e214a0592050eca68706a1"
  },
  {
    "url": "tags/bootcamper.io/index.html",
    "revision": "6557f6c5e3e3761d7ded168bdc279e98"
  },
  {
    "url": "tags/bootcamps.in/index.html",
    "revision": "b3fbe0ac74afc6a57cda9e4a36be3d4f"
  },
  {
    "url": "tags/bootcamps/index.html",
    "revision": "233dbc3af89275f2c6a8045e1ff94d74"
  },
  {
    "url": "tags/bootstrap/index.html",
    "revision": "3709206c7c45b11496a0a93fae806e08"
  },
  {
    "url": "tags/boston/index.html",
    "revision": "a78b6ad26dc20a0c459aa1fda45d2f05"
  },
  {
    "url": "tags/bow/index.html",
    "revision": "d7659843f64388b1f22ff280364850e3"
  },
  {
    "url": "tags/boys/index.html",
    "revision": "e29b921c2fdf81b6480d4d6eba3f0369"
  },
  {
    "url": "tags/brief-thoughts/index.html",
    "revision": "746d7e8210329301000475561a58320d"
  },
  {
    "url": "tags/briefbox/index.html",
    "revision": "264bb7c4c510b35bf011684cf08806dd"
  },
  {
    "url": "tags/bubble-sort/index.html",
    "revision": "fe10655428a05aab8c2a8e53fa6e4327"
  },
  {
    "url": "tags/bubbles/index.html",
    "revision": "17d58dbad06b279619fc0a6ee7109989"
  },
  {
    "url": "tags/bummer/index.html",
    "revision": "afdf1b29f62d74042bdf7a3720d812c8"
  },
  {
    "url": "tags/burger-king/index.html",
    "revision": "86682df05fb7c871a589ee62eead52ef"
  },
  {
    "url": "tags/byword/index.html",
    "revision": "2b405edd89acfb84cd89783cc78c91c0"
  },
  {
    "url": "tags/c-programming/index.html",
    "revision": "852c74469c552c923c04353b1657a536"
  },
  {
    "url": "tags/c++/index.html",
    "revision": "e95a1f362e7109ce2197b51b1afc5092"
  },
  {
    "url": "tags/calculus/index.html",
    "revision": "40fa7ee3a672648c68e9d453a0b7899a"
  },
  {
    "url": "tags/callbacks/index.html",
    "revision": "2bb442d3edbe2b2dc686b6059b77f0f6"
  },
  {
    "url": "tags/campus/index.html",
    "revision": "c7ff3aef0df547ae5ebca56509af5976"
  },
  {
    "url": "tags/canada/index.html",
    "revision": "31552deb64e86e43f356254f077d5c82"
  },
  {
    "url": "tags/capstone-project/index.html",
    "revision": "5dedc332b167bf0d74fdffae09044eeb"
  },
  {
    "url": "tags/captain-jack-sparrow/index.html",
    "revision": "07fd803e35326171c640a974d15e1da4"
  },
  {
    "url": "tags/captone/index.html",
    "revision": "1281f3487924688362ee6091389507b9"
  },
  {
    "url": "tags/capwic/index.html",
    "revision": "85973cf96b9487380a4ba7b2845ef34c"
  },
  {
    "url": "tags/career/index.html",
    "revision": "f749dff3c2be7a808ce186e6b5335704"
  },
  {
    "url": "tags/casual/index.html",
    "revision": "e233b1fc4170ab2126f75e8cb0d784a6"
  },
  {
    "url": "tags/cb/index.html",
    "revision": "d7b6765392705d1d83d2cee7f88c9d00"
  },
  {
    "url": "tags/cbs/index.html",
    "revision": "0b5ed6704b00ac89e7b14476784ec219"
  },
  {
    "url": "tags/cdock/index.html",
    "revision": "a9a0a666f424d9764e1fb4f160bdb28c"
  },
  {
    "url": "tags/celsius-to-fahrenheit/index.html",
    "revision": "c4224c2162d2e1848ea5cad1d66cd682"
  },
  {
    "url": "tags/chad-trutt/index.html",
    "revision": "ef36ec451dc7e764579fe9f9b43bb3bf"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "f3e1ef436bcc473c9c554ee20bff7853"
  },
  {
    "url": "tags/change/index.html",
    "revision": "fcfb74caefaf820c8e20653fd26c3c6e"
  },
  {
    "url": "tags/chaos-faction/index.html",
    "revision": "23dad92e4bdfc34905f13ab306292441"
  },
  {
    "url": "tags/character/index.html",
    "revision": "235dc68706fb51755424fa684ad4c58f"
  },
  {
    "url": "tags/chat-development/index.html",
    "revision": "ec90d464e07f9d5bd1ae8f7d5e4d5755"
  },
  {
    "url": "tags/cheerio/index.html",
    "revision": "20d3cabf43213bda850ee1d431ed1d9e"
  },
  {
    "url": "tags/cheese/index.html",
    "revision": "1cc272fc4f4ce400f8dfc52f4adc0354"
  },
  {
    "url": "tags/cheesy/index.html",
    "revision": "c7179e9be85ba0bcde24e597abcf110a"
  },
  {
    "url": "tags/chicago/index.html",
    "revision": "0f22eac7ae3b6f25804e44cd239d47e8"
  },
  {
    "url": "tags/children/index.html",
    "revision": "1b15176f4726cd4a9b6e03185bd92133"
  },
  {
    "url": "tags/christopher-t/index.html",
    "revision": "a736ba0dfccbac457504be8988a85735"
  },
  {
    "url": "tags/chrome-app-launcher/index.html",
    "revision": "2372bfe3783a6a8af995addff3e40808"
  },
  {
    "url": "tags/chrome-extensions/index.html",
    "revision": "9e64552960c266f0171febb877d7febd"
  },
  {
    "url": "tags/chrome-web-store/index.html",
    "revision": "e7e4ddc23d05a8bc2abae2f7b47bac6b"
  },
  {
    "url": "tags/chrome/index.html",
    "revision": "5b62ef5187d427b1191baf964e81f270"
  },
  {
    "url": "tags/chromecasts/index.html",
    "revision": "166828db58387c1ffb5a32108d4a1899"
  },
  {
    "url": "tags/chronicles-of-narnia/index.html",
    "revision": "eda5c7d105376069427e03c1da92ff59"
  },
  {
    "url": "tags/cinema4d/index.html",
    "revision": "edb0f2a606f6035b5954f45a20f0e2da"
  },
  {
    "url": "tags/circle/index.html",
    "revision": "0546208359a2d2f3980c60e67bdf496c"
  },
  {
    "url": "tags/class/index.html",
    "revision": "33b87c0453f02496cbe2bbbc32d4f945"
  },
  {
    "url": "tags/classes/index.html",
    "revision": "8640a82634f5dd65ba2a8ea73f135189"
  },
  {
    "url": "tags/cleft-lip/index.html",
    "revision": "1e024f9575c0914cb5c59088083b3ec9"
  },
  {
    "url": "tags/cleft-palette/index.html",
    "revision": "a4d13f7de411565b1c94d69a28a44171"
  },
  {
    "url": "tags/closures/index.html",
    "revision": "2594d3e9353c4b649a73450cc9b7eb95"
  },
  {
    "url": "tags/cockroach/index.html",
    "revision": "8b5df1bc11b726c9ffc1b5d6f3399efe"
  },
  {
    "url": "tags/code-combat/index.html",
    "revision": "291a3fbdd0933b9da44256f090992a13"
  },
  {
    "url": "tags/code-combt/index.html",
    "revision": "846cf368624abc00fc6fe05d98e23c28"
  },
  {
    "url": "tags/code-fellows/index.html",
    "revision": "ea3ab4bd9fb928151abbc36aac26ccfb"
  },
  {
    "url": "tags/code-school/index.html",
    "revision": "296aa2843742e810efb71181aaeab12a"
  },
  {
    "url": "tags/code.org/index.html",
    "revision": "bf303c29aea4888d765455ecaae49cdd"
  },
  {
    "url": "tags/code/index.html",
    "revision": "363b0e3a721f9f2f1a40a0bb3511f75f"
  },
  {
    "url": "tags/code2040/index.html",
    "revision": "b85a9bbe747c0e3c1d945ae3c1179665"
  },
  {
    "url": "tags/codecademy/index.html",
    "revision": "d62fa508096ca6a5b2a8ac39e9883e84"
  },
  {
    "url": "tags/codecombat/index.html",
    "revision": "a435cd5b96779a7aecd648dc9b93547a"
  },
  {
    "url": "tags/codepen/index.html",
    "revision": "688750248837c337681e1f096148db73"
  },
  {
    "url": "tags/coderbyte/index.html",
    "revision": "5a389a5f1edc78e0fd05e9111a4b5dd7"
  },
  {
    "url": "tags/codewars/index.html",
    "revision": "5617b25841b6c0962a7fec01edffe30c"
  },
  {
    "url": "tags/coding-bootcamp-experience/index.html",
    "revision": "d4a61d1a3a33ed981c50f94d7619524a"
  },
  {
    "url": "tags/coding-bootcamp-fullstack/index.html",
    "revision": "97289aaef052740f7081321ea303c8f0"
  },
  {
    "url": "tags/coding-bootcamp-map/index.html",
    "revision": "174a6a96aaeed452a991ee54ce580ebd"
  },
  {
    "url": "tags/coding-bootcamp-prework/index.html",
    "revision": "e4ea8816c03864db36a7a5b6f58a0a09"
  },
  {
    "url": "tags/coding-bootcamp/index.html",
    "revision": "6b6b09f84f1d6aa99833dabc31c7989b"
  },
  {
    "url": "tags/coding-bootcamps/index.html",
    "revision": "a4703c12f4a1306ca49bde239e561a81"
  },
  {
    "url": "tags/coding-challenge/index.html",
    "revision": "c7ffb5a93dea54e92eb66cc6dcb38192"
  },
  {
    "url": "tags/coding-dojo/index.html",
    "revision": "6c5cf175544035b74cd846d2a4d941f8"
  },
  {
    "url": "tags/coding-house/index.html",
    "revision": "5214a8dec2d2a849ba8d0cfc3c1cc9b9"
  },
  {
    "url": "tags/coding-interview/index.html",
    "revision": "de74a97504efe9087a50e8aa4e7f8578"
  },
  {
    "url": "tags/coding/index.html",
    "revision": "c497d90d9b18774fafb73d6e487564fb"
  },
  {
    "url": "tags/codrops/index.html",
    "revision": "ab09921859e7c57fc165af6a4cb8014e"
  },
  {
    "url": "tags/codyhouse/index.html",
    "revision": "1c0f108b1bdddaa8aff28c9c4654c2e2"
  },
  {
    "url": "tags/cohort/index.html",
    "revision": "dc1d348942a8b99e06ef422f813d6051"
  },
  {
    "url": "tags/cold/index.html",
    "revision": "bfa65ec68266086d15fce94fcb84001f"
  },
  {
    "url": "tags/college-students/index.html",
    "revision": "c5835d541daa2020e71ca838d5a93b9f"
  },
  {
    "url": "tags/color-theory/index.html",
    "revision": "44840b0bddde2b81c7d530b1c5b4c4bb"
  },
  {
    "url": "tags/coment.me/index.html",
    "revision": "4bc9e59c6bb842e03f69f9612da8b8f4"
  },
  {
    "url": "tags/command-line/index.html",
    "revision": "7ca9417406759e7ce6fafb7ff15e6060"
  },
  {
    "url": "tags/comment/index.html",
    "revision": "47476db538b428a2a4515d4977a0c2d3"
  },
  {
    "url": "tags/comments/index.html",
    "revision": "81276163d72f1ceae7943e81de92ad9f"
  },
  {
    "url": "tags/compare/index.html",
    "revision": "7ce1c9762b2337868734311c28c16b16"
  },
  {
    "url": "tags/compiler/index.html",
    "revision": "90a95ee10554b99994b5b4b9111df7a5"
  },
  {
    "url": "tags/complete/index.html",
    "revision": "2327888f34c0eb1c9482998bbaf15eca"
  },
  {
    "url": "tags/computer-science-education/index.html",
    "revision": "16de4854287a50d9467683e36f909e39"
  },
  {
    "url": "tags/computer-science/index.html",
    "revision": "560f43ff388a3bb2116fea5b62d47cac"
  },
  {
    "url": "tags/computer/index.html",
    "revision": "eb6e2a5048e62df22a1d3d06479eaace"
  },
  {
    "url": "tags/computing/index.html",
    "revision": "b3fdcc30ad3f9b6e994cef6ce40976bc"
  },
  {
    "url": "tags/conceal/index.html",
    "revision": "7497a98db016e8d557f09d88bf5bf845"
  },
  {
    "url": "tags/concrete/index.html",
    "revision": "178130171a6de2f658ba3a477f1a0aba"
  },
  {
    "url": "tags/coney-island/index.html",
    "revision": "026c33a66654d13700cb2be06c306115"
  },
  {
    "url": "tags/conference-hotel/index.html",
    "revision": "6e03676192a22b726fa80de16cf717c8"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "8ee4156fb94bfa80d011ed1728a7551c"
  },
  {
    "url": "tags/conferences/index.html",
    "revision": "2aebcf36f55d7a658c9fc06e5683f830"
  },
  {
    "url": "tags/congratulations/index.html",
    "revision": "ce6fb82188f91b28785559b4b5f4bb13"
  },
  {
    "url": "tags/conquest/index.html",
    "revision": "98fb326d0946dbc1644e6f4abd522a21"
  },
  {
    "url": "tags/contrast/index.html",
    "revision": "e4b7568a2a310ae807dbb1f4e26924a2"
  },
  {
    "url": "tags/conundrums/index.html",
    "revision": "d7dbdc7b62265efd2ad8ff3aec275154"
  },
  {
    "url": "tags/cookie/index.html",
    "revision": "2474a2ed9384a45a33cfedafcb1a819a"
  },
  {
    "url": "tags/copley/index.html",
    "revision": "e2527c4bb5bc2543740219a815917a82"
  },
  {
    "url": "tags/cornell-tech/index.html",
    "revision": "dd3fa0841a1e81d4a8b78376ddf3a29f"
  },
  {
    "url": "tags/costs/index.html",
    "revision": "8b17779addf0910b0adaaaf55ad4add0"
  },
  {
    "url": "tags/course-report/index.html",
    "revision": "bf7bef2534aa66c2c439d0995dd77f5c"
  },
  {
    "url": "tags/course/index.html",
    "revision": "8bd9ad3c49811c92dcac2a7a0e4821dd"
  },
  {
    "url": "tags/cracking-the-coding-interview/index.html",
    "revision": "776444fa5a6ec86e69e6197c891b19a2"
  },
  {
    "url": "tags/creations/index.html",
    "revision": "ddce391ed9410cb7ae378ac90efbe091"
  },
  {
    "url": "tags/creativity/index.html",
    "revision": "db96e6954ccd61113baba7f0097e5898"
  },
  {
    "url": "tags/crowdsourced-map/index.html",
    "revision": "1868933e2016fa3a59e001eaf05e66d4"
  },
  {
    "url": "tags/crowdsourcing/index.html",
    "revision": "5176977e8d3bed69cfca4beb21afc8a2"
  },
  {
    "url": "tags/crush/index.html",
    "revision": "12e9216707e0f40700c606224a5b03ee"
  },
  {
    "url": "tags/cs-background/index.html",
    "revision": "ccd7fbbcfc13eb19c74a356b437e9191"
  },
  {
    "url": "tags/cs/index.html",
    "revision": "f8f317756c048be863f2989d2faa5ec4"
  },
  {
    "url": "tags/csail/index.html",
    "revision": "ff35fcd7e13ff0ad51bcbe39c4ea41cd"
  },
  {
    "url": "tags/css/index.html",
    "revision": "77304ffb9a8fa7add044d3cf933e8740"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "81ffc7edff42e71104662730186d773f"
  },
  {
    "url": "tags/cups-of-tea/index.html",
    "revision": "4777713c223d0a85a8b75987932784cb"
  },
  {
    "url": "tags/curi/index.html",
    "revision": "7345d353d0ebbb52e361f2a1e61a7817"
  },
  {
    "url": "tags/curiosity/index.html",
    "revision": "58f547fc95b86c556190e8db1e2f18a8"
  },
  {
    "url": "tags/curious-incident-of-the-dog-in-the-night-time/index.html",
    "revision": "aaa5bad2183b3db7fa0fbf6e109d54c1"
  },
  {
    "url": "tags/curriculum/index.html",
    "revision": "98af2d0ce407ecbe8c2a30639e7af40e"
  },
  {
    "url": "tags/dabble/index.html",
    "revision": "c77499ee393ca54ea340e59d8e6682c2"
  },
  {
    "url": "tags/dairy-queen/index.html",
    "revision": "de7ef66b7107b912ff9acfb816ba7b92"
  },
  {
    "url": "tags/damage/index.html",
    "revision": "a537efaed71efaa18f63bdc87f32c205"
  },
  {
    "url": "tags/damehood/index.html",
    "revision": "017f470a44af07105018357870f569ea"
  },
  {
    "url": "tags/dan-brown/index.html",
    "revision": "108c5b322609b82d56589b7ccbf2b34a"
  },
  {
    "url": "tags/dance/index.html",
    "revision": "3264a78dceb2f9b54f4b26742cd40609"
  },
  {
    "url": "tags/dancing/index.html",
    "revision": "e3069825562cbd367b5e4c9b90caa852"
  },
  {
    "url": "tags/daniel/index.html",
    "revision": "55d7c95b8f77eaff5754ebe9c297e107"
  },
  {
    "url": "tags/dash/index.html",
    "revision": "ef9537fe365668fb603a4a31deaa6595"
  },
  {
    "url": "tags/data-set/index.html",
    "revision": "1a74efd3d1c352c3b416441d9da20f45"
  },
  {
    "url": "tags/data-structures/index.html",
    "revision": "93edc3f598c8a6ef32ddc52f849e326c"
  },
  {
    "url": "tags/data/index.html",
    "revision": "5c8e67b961dd36b9579d53d72faf9674"
  },
  {
    "url": "tags/david-yang/index.html",
    "revision": "5ebe9ecd7465fe0d83fe8da5ff3b4740"
  },
  {
    "url": "tags/davinci-code/index.html",
    "revision": "2f55bf34dd6da48a87f958028a2adbae"
  },
  {
    "url": "tags/dear-bootcamp/index.html",
    "revision": "684097a03b0f88e3d90831ebfdf83002"
  },
  {
    "url": "tags/death/index.html",
    "revision": "ef6bb782b63b0c50d59e31f0df3228a9"
  },
  {
    "url": "tags/decision/index.html",
    "revision": "bec921acb3e8111f07ff58a9f818c214"
  },
  {
    "url": "tags/defining/index.html",
    "revision": "510281947993acb5c097fc2a3ffc9006"
  },
  {
    "url": "tags/definitive-list/index.html",
    "revision": "96ff8a35b51d3a816641632272ded48f"
  },
  {
    "url": "tags/delta/index.html",
    "revision": "a8bc63322f9facfaf232dcf2cf3c7a6d"
  },
  {
    "url": "tags/demo-day/index.html",
    "revision": "e3433efd5889778f2f6b43bd42381249"
  },
  {
    "url": "tags/descendants/index.html",
    "revision": "fb5407ccad7979e3f20f68a5c2df5278"
  },
  {
    "url": "tags/describing-oneself/index.html",
    "revision": "3e252ea8326f43e0c7ee492aabddaa65"
  },
  {
    "url": "tags/descriptions/index.html",
    "revision": "86abe5d354988498845f9b434eff4d00"
  },
  {
    "url": "tags/design-101/index.html",
    "revision": "2278eb658eee0f40d3480fd0b83809c0"
  },
  {
    "url": "tags/design-bootcamp/index.html",
    "revision": "1ac5e5d1f274f27d508bdc26ceb917e1"
  },
  {
    "url": "tags/design-online-course/index.html",
    "revision": "79f89f555d590de6ffeba8f702cef54d"
  },
  {
    "url": "tags/design/index.html",
    "revision": "b995e48a3f2bb6ab8811109ce9779837"
  },
  {
    "url": "tags/design101/index.html",
    "revision": "64216d152ee0407387630639d0b9fd23"
  },
  {
    "url": "tags/designation-labs/index.html",
    "revision": "007e1b7141fdfa8d2fbd78b1e7f0d3f1"
  },
  {
    "url": "tags/designation.io/index.html",
    "revision": "141487e549e33c926d5ec085f6c43a84"
  },
  {
    "url": "tags/designation/index.html",
    "revision": "15a5515b43e94e16929c31c6e647e57e"
  },
  {
    "url": "tags/designer/index.html",
    "revision": "5504e781116f6441573a8a97e2b53b00"
  },
  {
    "url": "tags/designing/index.html",
    "revision": "9398028257ce0320fcb52ed3facf0114"
  },
  {
    "url": "tags/designlab-course/index.html",
    "revision": "dbc18a7e058742084e68fd07f61f5bd0"
  },
  {
    "url": "tags/designlab-design-101/index.html",
    "revision": "4fe1c9f9a5ef8a106cae22714f436c4e"
  },
  {
    "url": "tags/designlab/index.html",
    "revision": "e7b7cd9cc9ee725c0933077e8fbd0bec"
  },
  {
    "url": "tags/designs/index.html",
    "revision": "b7054ce123c16921596bb2a7f9bc3d10"
  },
  {
    "url": "tags/dev-bootcamps/index.html",
    "revision": "b8fbcc70db06b0a50f2958fcb8442885"
  },
  {
    "url": "tags/dev-league/index.html",
    "revision": "580d44c130766d594491ade06acc28e6"
  },
  {
    "url": "tags/developer-festival/index.html",
    "revision": "e2660063d2f1f9dc63854eff87d6930c"
  },
  {
    "url": "tags/development/index.html",
    "revision": "e47be4f025420f3b2794141de16382ff"
  },
  {
    "url": "tags/devleague/index.html",
    "revision": "f690f559bc01a36354769b26a74e4dd3"
  },
  {
    "url": "tags/dictatorships/index.html",
    "revision": "4ba553e7a0ae564331c22f203f5941b6"
  },
  {
    "url": "tags/dictionary/index.html",
    "revision": "ace7c26c146530cd857ca5e072ab1f3c"
  },
  {
    "url": "tags/digital-hieroglyphics/index.html",
    "revision": "69cf73853837ca951157b90b58329454"
  },
  {
    "url": "tags/digital/index.html",
    "revision": "dc9150ab6792fd9e4d39da5a83038cc4"
  },
  {
    "url": "tags/dinos/index.html",
    "revision": "87007e0e94234874ab1e9423dfc95759"
  },
  {
    "url": "tags/dinosaurs/index.html",
    "revision": "495bef9eb0d537b2a33383c2ff027ba5"
  },
  {
    "url": "tags/disabilities/index.html",
    "revision": "676be0c7772bf01a22e88d748d2f2c33"
  },
  {
    "url": "tags/diversity-conference/index.html",
    "revision": "400a3bf05479b178aee3dcc772513c58"
  },
  {
    "url": "tags/diversity-in-tech/index.html",
    "revision": "e95362d4fbfdfdde744a1cc411f8f55e"
  },
  {
    "url": "tags/diversity-tales/index.html",
    "revision": "1b934d7bb11777374eabd8255809ca67"
  },
  {
    "url": "tags/diversity/index.html",
    "revision": "d3e41bf981b58d1944112cdd4f9016a1"
  },
  {
    "url": "tags/do-not-offend/index.html",
    "revision": "06fb359357b63ffbcce79ccdfc3dcc9f"
  },
  {
    "url": "tags/dojo/index.html",
    "revision": "6af8c041cf9de0763ab2439a52ebb68d"
  },
  {
    "url": "tags/dont-starve-game/index.html",
    "revision": "6385f6bba253e3786fef83fb16c92f02"
  },
  {
    "url": "tags/dont-starve-review/index.html",
    "revision": "6d26b460a63bf8a09c21b9768e8d5bc1"
  },
  {
    "url": "tags/dont-starve/index.html",
    "revision": "1801dd1f39dad1db1ebd559e000de769"
  },
  {
    "url": "tags/doubloon/index.html",
    "revision": "8570f8c6877081eb0d024be3474248da"
  },
  {
    "url": "tags/download-mp3/index.html",
    "revision": "5e9a852fcc2227228d65109ed0a86626"
  },
  {
    "url": "tags/drop-out/index.html",
    "revision": "1a05ba899c6b840866c4f9fbb5d31d38"
  },
  {
    "url": "tags/dropbox/index.html",
    "revision": "541f1e1c32945f6c091eb6e2213bb51a"
  },
  {
    "url": "tags/duck-bill/index.html",
    "revision": "213298c92c5f76ab5bd8990e1a60eed8"
  },
  {
    "url": "tags/economy/index.html",
    "revision": "3538302fda526b0b60e4774af5112e76"
  },
  {
    "url": "tags/edgar-allen-poe/index.html",
    "revision": "86fdf0bf42751fb465392c4f9bb41a75"
  },
  {
    "url": "tags/egghead.io/index.html",
    "revision": "eb3a9b0eef6dcd335ef640215c4fa9f3"
  },
  {
    "url": "tags/el-capitan/index.html",
    "revision": "9e389c87dcb03d9dc8b6974ef286dc16"
  },
  {
    "url": "tags/ell/index.html",
    "revision": "7d94677e36f0ae602ec1483da3016abc"
  },
  {
    "url": "tags/eloquent-javascript/index.html",
    "revision": "570df364b3be1e8255446dc5c9107f78"
  },
  {
    "url": "tags/email/index.html",
    "revision": "a9234f43e2f7c62de9de51f061336733"
  },
  {
    "url": "tags/emails/index.html",
    "revision": "fcc1d5eca7f371ab2f88644ecc037c4f"
  },
  {
    "url": "tags/emoji/index.html",
    "revision": "cfadaec5cfed6e209bdfad0526628fbf"
  },
  {
    "url": "tags/emotions/index.html",
    "revision": "7d0ae92160460813579f7d970a80aa88"
  },
  {
    "url": "tags/ender-wiggin/index.html",
    "revision": "b2b11148d58ca005f5f0f29476268837"
  },
  {
    "url": "tags/ender/index.html",
    "revision": "fb46838c44688e848aa687819b6de0a0"
  },
  {
    "url": "tags/enders-game/index.html",
    "revision": "85d433e31f3ea3ea6fd946ca5152f36c"
  },
  {
    "url": "tags/endevr/index.html",
    "revision": "bb01ad1a539a8ced83e02cfbd8403eb3"
  },
  {
    "url": "tags/engineers/index.html",
    "revision": "c6406bf4b5f8598708ca0416667b87cb"
  },
  {
    "url": "tags/envy/index.html",
    "revision": "0a99393efac08b574895db834a77146f"
  },
  {
    "url": "tags/epoch/index.html",
    "revision": "41fdfa154396d8db8d7fd20745dce1fe"
  },
  {
    "url": "tags/epsilon/index.html",
    "revision": "a04a1970a8ecba1b1d8959b85e77ccbf"
  },
  {
    "url": "tags/equality/index.html",
    "revision": "d64f7c086e6f74de392e41806dade056"
  },
  {
    "url": "tags/equations/index.html",
    "revision": "b4a35e7dab6000e2cc6cddc1fd073004"
  },
  {
    "url": "tags/error/index.html",
    "revision": "06412f20176ba5324b6aa965b31de40e"
  },
  {
    "url": "tags/essay-talks/index.html",
    "revision": "81d58910b6403e8b53bb8b84c174a104"
  },
  {
    "url": "tags/essays/index.html",
    "revision": "680d456bed5a552308d829ac69b0dc8d"
  },
  {
    "url": "tags/ethnicities/index.html",
    "revision": "758c260c6f2e6edd2986b5e039353a5d"
  },
  {
    "url": "tags/exams/index.html",
    "revision": "69ab6e3ab8a06b4a9d22a86e027ff552"
  },
  {
    "url": "tags/experience/index.html",
    "revision": "dafb1740c544d5c8e9d9131c0444d8cd"
  },
  {
    "url": "tags/experimentorders/index.html",
    "revision": "46163aa0c0d919c82cd8ea62df11905c"
  },
  {
    "url": "tags/exploits/index.html",
    "revision": "494028ec2ccb74ce02821a3902c9c7db"
  },
  {
    "url": "tags/extension/index.html",
    "revision": "4455b7355d9c4e9e60c7894e55871c3f"
  },
  {
    "url": "tags/extensions/index.html",
    "revision": "9b7def90516f36ca9f106ad887ab2c31"
  },
  {
    "url": "tags/facebook-page/index.html",
    "revision": "03c53f43b979e58662feef7e8d246238"
  },
  {
    "url": "tags/facebook/index.html",
    "revision": "b903ff4590715b905dad683c70765e35"
  },
  {
    "url": "tags/factorials/index.html",
    "revision": "551c65fb213f0cc5c3e4f05387b7b4dd"
  },
  {
    "url": "tags/fahrenheit/index.html",
    "revision": "31e80b069e1b163d219327407111cfd6"
  },
  {
    "url": "tags/fairy/index.html",
    "revision": "aaf800d53186bb4e9315e3481ca85cc4"
  },
  {
    "url": "tags/falling/index.html",
    "revision": "4810b21919c36c4d76ba7ffc8179fe11"
  },
  {
    "url": "tags/famine/index.html",
    "revision": "8f0cefd9f76fb19a337736ea77cfba7b"
  },
  {
    "url": "tags/famo.us-university/index.html",
    "revision": "c9e1a90e47c12965dd6fd8af04401786"
  },
  {
    "url": "tags/fantasy-novels/index.html",
    "revision": "03ffa7a0e9c76785750088db1185bd06"
  },
  {
    "url": "tags/fantasy/index.html",
    "revision": "bf77de438b36793c04586af73f39041b"
  },
  {
    "url": "tags/fast-growing-industry/index.html",
    "revision": "0eba72adcbde9f3e4c6a80e334628205"
  },
  {
    "url": "tags/fear/index.html",
    "revision": "4e1c3d21d09b3619b8bae0c9ab9a6a48"
  },
  {
    "url": "tags/featured/index.html",
    "revision": "0092b8935056f5f653877a97be37109c"
  },
  {
    "url": "tags/february-2015/index.html",
    "revision": "be4cba86f7243819f01de88dfb66ae0b"
  },
  {
    "url": "tags/february/index.html",
    "revision": "51607a8e58579939b62a8258316220ff"
  },
  {
    "url": "tags/fibonacci/index.html",
    "revision": "9f78322164532627c3535a6ec31b8ca0"
  },
  {
    "url": "tags/film/index.html",
    "revision": "30de1730b225f19cb5fd97c0e472cea5"
  },
  {
    "url": "tags/final-cut-pro-x/index.html",
    "revision": "37607f934d9773afdf6df6028642e812"
  },
  {
    "url": "tags/final-project/index.html",
    "revision": "5c30e84e584f45ddc4f0f163d7e2585b"
  },
  {
    "url": "tags/finding/index.html",
    "revision": "3faf6bdd7ff259143e2e7a9b47cf6df0"
  },
  {
    "url": "tags/firehose-project/index.html",
    "revision": "1117ab949c65eae3b60e79103f9b1ee8"
  },
  {
    "url": "tags/first-meetup/index.html",
    "revision": "3a65d531ee86fb48a30a0299d53fb680"
  },
  {
    "url": "tags/first-week/index.html",
    "revision": "8f2e6139eb18633cfa71b7aa80c5c1e4"
  },
  {
    "url": "tags/flashcard-design/index.html",
    "revision": "0b4a8b82c0b082075d44af05faafb012"
  },
  {
    "url": "tags/flashcards/index.html",
    "revision": "00d0e9471e902e58661ba38eea61ec0e"
  },
  {
    "url": "tags/flatiron/index.html",
    "revision": "9e7190cda19b47740c4b266db2020f4f"
  },
  {
    "url": "tags/flavours/index.html",
    "revision": "811180b3ddd3b7269f928b88701583d7"
  },
  {
    "url": "tags/flights/index.html",
    "revision": "d5b0e8092953b1a370e66162b9c8c9d4"
  },
  {
    "url": "tags/float/index.html",
    "revision": "8d1ecfac345de4c6c9004cdd5146432c"
  },
  {
    "url": "tags/floating-point/index.html",
    "revision": "052dbd1e50ade2d513bdf14b8658dbc9"
  },
  {
    "url": "tags/flux/index.html",
    "revision": "0343f96d2e6609c30c58178ef1b117cf"
  },
  {
    "url": "tags/formic/index.html",
    "revision": "06a83ea93e8dfb19926e2bd49c168838"
  },
  {
    "url": "tags/formula/index.html",
    "revision": "2fc90f0800d72226e789a1ca1fcc1da9"
  },
  {
    "url": "tags/foundations/index.html",
    "revision": "eb4c3b0f3ba052562c7197edf3abed2b"
  },
  {
    "url": "tags/founders/index.html",
    "revision": "6b07599c8784fd000fe414f89e9b566a"
  },
  {
    "url": "tags/fragile/index.html",
    "revision": "d075de1a8f5e15bac2a7fa1a86db115c"
  },
  {
    "url": "tags/frameworks/index.html",
    "revision": "b0f3844f74fac2d50b0686d32ae1b579"
  },
  {
    "url": "tags/frankenweenie/index.html",
    "revision": "283007d6a211614665ea46ae70343a97"
  },
  {
    "url": "tags/free-code-camp/index.html",
    "revision": "210a84c4a8d9f7ff0d2713d91ae0d9a1"
  },
  {
    "url": "tags/freeman/index.html",
    "revision": "04af790a22fbfc49a4af67b8bdad4ef4"
  },
  {
    "url": "tags/friends-and-family/index.html",
    "revision": "1ca616481bf2c7ffd29df3255ba74812"
  },
  {
    "url": "tags/friendship/index.html",
    "revision": "779755a130ff0819b35a3004b8a36627"
  },
  {
    "url": "tags/fuck/index.html",
    "revision": "beb441850a5cecf0e744f88b8bfc69a5"
  },
  {
    "url": "tags/fucking/index.html",
    "revision": "ad97e67f800cbfe39821b559fc793c4e"
  },
  {
    "url": "tags/full-stack-academy-of-code/index.html",
    "revision": "c96166d4ab89de95d7adc6baa135b401"
  },
  {
    "url": "tags/full-stack/index.html",
    "revision": "ee0b8c70a85981382e42e65340fdf731"
  },
  {
    "url": "tags/full/index.html",
    "revision": "f7f7b0d4e6fa5e3e1a7581cd1f37d659"
  },
  {
    "url": "tags/fullstack-academy-of-code/index.html",
    "revision": "fa87a7c3de6f15173014baef37002ff0"
  },
  {
    "url": "tags/fullstack-academy-week-4/index.html",
    "revision": "d7785349ad350ca67ced4914603eab9e"
  },
  {
    "url": "tags/fullstack-academy-week-5/index.html",
    "revision": "0ad640225fede19d2232d43d072f0f13"
  },
  {
    "url": "tags/fullstack-academy/index.html",
    "revision": "ab6f10d1809becdc96ca749f1aa576e5"
  },
  {
    "url": "tags/fullstack-beta/index.html",
    "revision": "23e96a07efe88150eb97a2411ee11b42"
  },
  {
    "url": "tags/fullstack-experience/index.html",
    "revision": "d863e6a9080c11d24a978b2e03c32783"
  },
  {
    "url": "tags/fullstack-fellows/index.html",
    "revision": "27fc609b705efe8ebc8a4756f948d35e"
  },
  {
    "url": "tags/fullstack-foundations/index.html",
    "revision": "982c9ba229814fb74a2ca52197419979"
  },
  {
    "url": "tags/fullstack-javascript-coding-bootcamp/index.html",
    "revision": "e65c8f5f07e9aac79d0cafff6c165511"
  },
  {
    "url": "tags/fullstack-week/index.html",
    "revision": "6da7503c388be96841f036b502b3522c"
  },
  {
    "url": "tags/fullstack/index.html",
    "revision": "19b753bf384c0fd932526a2f9ea91f3e"
  },
  {
    "url": "tags/fundamentals/index.html",
    "revision": "4bab961f78012600bbfae07ae671e18d"
  },
  {
    "url": "tags/funny/index.html",
    "revision": "fcd886a3bd71a3459557a7fded51260c"
  },
  {
    "url": "tags/future-plans/index.html",
    "revision": "c4582fa2f58430db1103cd96b82bbf4c"
  },
  {
    "url": "tags/fvcproductions/index.html",
    "revision": "91edc5778ae0de02273978ca61928593"
  },
  {
    "url": "tags/game-review/index.html",
    "revision": "ca0a6567d1bf567bf39392e66ea47e86"
  },
  {
    "url": "tags/game/index.html",
    "revision": "226004ec011d5902508e75ab37505ed2"
  },
  {
    "url": "tags/games-night/index.html",
    "revision": "66ec58b84faa52a02ac2848fbef15f5a"
  },
  {
    "url": "tags/games/index.html",
    "revision": "c31585e1b3ceef2736200158b71966b1"
  },
  {
    "url": "tags/gaming/index.html",
    "revision": "cde6bb7c9a937d886fceb84bc5fae445"
  },
  {
    "url": "tags/gamma/index.html",
    "revision": "afcf28787a659db7e9d4540c1362336b"
  },
  {
    "url": "tags/gates/index.html",
    "revision": "fe31614db30f0a29c565b2b4b28b3d5a"
  },
  {
    "url": "tags/gavin-young/index.html",
    "revision": "b195ef22dc3f7d4a18278bf3f4835b17"
  },
  {
    "url": "tags/gay-marriage-legal-now/index.html",
    "revision": "64f1fd49e19c89121a238fd6430d1184"
  },
  {
    "url": "tags/gdg-hampton-roads/index.html",
    "revision": "0d544d6860792f2ea143646d3eb83946"
  },
  {
    "url": "tags/gender/index.html",
    "revision": "ad2d816df47b4ec8039f61aabd9c5e16"
  },
  {
    "url": "tags/general-assembly/index.html",
    "revision": "410fb0740d1a29588c7846dc3dc5deda"
  },
  {
    "url": "tags/georgia-tech/index.html",
    "revision": "a1e70b484695abaa0dfa7223c83b8555"
  },
  {
    "url": "tags/gettemplate/index.html",
    "revision": "2d29b20b9f5cc8525d25f8c1d64cf1fa"
  },
  {
    "url": "tags/gif/index.html",
    "revision": "907068d7c511f4b802670eceb0827c96"
  },
  {
    "url": "tags/gifs/index.html",
    "revision": "762600e203e3da340597cd97d87903e2"
  },
  {
    "url": "tags/gist/index.html",
    "revision": "13e1bd0fff6b77022c9ed05b563d4d91"
  },
  {
    "url": "tags/github-projects/index.html",
    "revision": "c30323dd5bdeb782eeb60eb3171ebb28"
  },
  {
    "url": "tags/github/index.html",
    "revision": "ba4f22764cc7c62ab91fa2fb872b2fe2"
  },
  {
    "url": "tags/giving-back/index.html",
    "revision": "ac8a4de97a63172ea910ad5fcc1d7c00"
  },
  {
    "url": "tags/glimpse/index.html",
    "revision": "c15153fbbd2504a8e45dff7606bbb5a2"
  },
  {
    "url": "tags/gluttony/index.html",
    "revision": "6559d5cbfdb7f6d6b786c1392690992b"
  },
  {
    "url": "tags/gmail/index.html",
    "revision": "8c85bd88864cd77eec6e54dc4f6e88a8"
  },
  {
    "url": "tags/gold-doubloons/index.html",
    "revision": "db083889ca4d8378349c6aac7f420c13"
  },
  {
    "url": "tags/gold/index.html",
    "revision": "5a7c73362b626a28d89cde842a6207a1"
  },
  {
    "url": "tags/goldman-sachs/index.html",
    "revision": "4890d950e43ea6e848a0c88984aab970"
  },
  {
    "url": "tags/good-looks/index.html",
    "revision": "ac9a12aeabeaf10c85031e752ef86c7f"
  },
  {
    "url": "tags/googl/index.html",
    "revision": "858a86cd7e1812c92637e494d2cd897f"
  },
  {
    "url": "tags/google-map/index.html",
    "revision": "e1443614c119ae01e663f34dda0b728f"
  },
  {
    "url": "tags/google-maps-api/index.html",
    "revision": "19c0c6219efe1aad6b3a3830088cbba9"
  },
  {
    "url": "tags/google-slides/index.html",
    "revision": "4110425cb6870c0ea7755658d3e640b2"
  },
  {
    "url": "tags/google+/index.html",
    "revision": "9bbf068be68f955819cde40b354ee666"
  },
  {
    "url": "tags/gottfrid-svartholm/index.html",
    "revision": "0584a9e9cbe26b33aa337de1e44b98f5"
  },
  {
    "url": "tags/grace-hopper/index.html",
    "revision": "802c9060878f86f109594ba20d59fdb6"
  },
  {
    "url": "tags/graduate-school/index.html",
    "revision": "36820838fbcbfb98dc0f49457a082181"
  },
  {
    "url": "tags/graduate/index.html",
    "revision": "16b38b381d8eba4de634b9f4774154f1"
  },
  {
    "url": "tags/graduating/index.html",
    "revision": "7a3bfe8c92aa74ac48773271e33b4685"
  },
  {
    "url": "tags/grand-gallery/index.html",
    "revision": "0e3b915313e5db445c659a920407e917"
  },
  {
    "url": "tags/graphic-design-bootcamp/index.html",
    "revision": "28dd54fc62a0e9ad5c0f8211eb74449e"
  },
  {
    "url": "tags/graphic-design/index.html",
    "revision": "5d2011dd822014fc3e31b51db0177c8a"
  },
  {
    "url": "tags/gratitude/index.html",
    "revision": "a443eca92b05b974061e8b732bb489a6"
  },
  {
    "url": "tags/gre/index.html",
    "revision": "623a8554e480a1f5310b9295328fb1cb"
  },
  {
    "url": "tags/greed/index.html",
    "revision": "5daae28785aedd84768512192e91280e"
  },
  {
    "url": "tags/greek-letters/index.html",
    "revision": "22bac4bda6bb2c57e87211ee97a99882"
  },
  {
    "url": "tags/growth/index.html",
    "revision": "1e1a30cd5a552e123f8487fbce45b0d8"
  },
  {
    "url": "tags/hack-app/index.html",
    "revision": "44a2418d12102e2028bbcef8b5ca2b12"
  },
  {
    "url": "tags/hack-reactor/index.html",
    "revision": "934c4061b3daf645b73565a7134656a9"
  },
  {
    "url": "tags/hackathon-starter/index.html",
    "revision": "634a34215f02d976cde72709ef7c314e"
  },
  {
    "url": "tags/hackathons/index.html",
    "revision": "c2ad3ff60b94664b39e0f83190c0689b"
  },
  {
    "url": "tags/hacker-in-residence/index.html",
    "revision": "f4d7a2e115e126ec21b2af8c81937877"
  },
  {
    "url": "tags/hacking/index.html",
    "revision": "1acd10fd2661014cf8ec24ffaab541dd"
  },
  {
    "url": "tags/hackreactor/index.html",
    "revision": "6050aba7c9c9bcec5e8298312f771279"
  },
  {
    "url": "tags/hampton-roads-devfest/index.html",
    "revision": "138384e64e320c01b5687c7d82f9c91d"
  },
  {
    "url": "tags/hampton-roads/index.html",
    "revision": "325176ed11a547a59b676b1967539d42"
  },
  {
    "url": "tags/hampton-university/index.html",
    "revision": "7afe7e49ee372be77e17e486b9a88483"
  },
  {
    "url": "tags/hampton/index.html",
    "revision": "dd7b2a9e43105c0f5bf6ab0b2bac173d"
  },
  {
    "url": "tags/hands-clean/index.html",
    "revision": "a8a94e0746f016568d9fa4f045271c7a"
  },
  {
    "url": "tags/hands/index.html",
    "revision": "fe559ef518e50227ee3ad110c1b92d8e"
  },
  {
    "url": "tags/harry-potter/index.html",
    "revision": "d65da181bdd0a60552910472399db697"
  },
  {
    "url": "tags/harvey-mudd/index.html",
    "revision": "ff7ee7ee6be89b6a94a7e326425336d1"
  },
  {
    "url": "tags/hawaii/index.html",
    "revision": "c08b5affad96eb12a955eb9fe88b5967"
  },
  {
    "url": "tags/head/index.html",
    "revision": "dd454e462482914d08f2c24e8a56603d"
  },
  {
    "url": "tags/heap-sort/index.html",
    "revision": "95f16557be49b8e9ba48eae133631bc6"
  },
  {
    "url": "tags/heart/index.html",
    "revision": "5a1d8200a374db845ac477879060d52a"
  },
  {
    "url": "tags/hearty/index.html",
    "revision": "9fcd705e4423c42e243aea0a2780f5d8"
  },
  {
    "url": "tags/hector-barbossa/index.html",
    "revision": "0d9911cbf4898a49bc5799d06f6aa4ad"
  },
  {
    "url": "tags/hemingway/index.html",
    "revision": "cf7a5166033ccdd420f7d579a5b85a9e"
  },
  {
    "url": "tags/hexadecimal-numbers/index.html",
    "revision": "30427d3c4c119557ea8d9c1ecd7ccb8d"
  },
  {
    "url": "tags/hexadecimal/index.html",
    "revision": "08e032afc3c72d06bc2e5627bb038732"
  },
  {
    "url": "tags/hieroglyphics/index.html",
    "revision": "7e6435a3018aa7735c2aacae6c357ab5"
  },
  {
    "url": "tags/high-school-volunteering/index.html",
    "revision": "a2f9a1d6181b6e49bdb0748a33c8b243"
  },
  {
    "url": "tags/high-school/index.html",
    "revision": "2b75f599e466f990d39223654cb2a289"
  },
  {
    "url": "tags/hip-hop/index.html",
    "revision": "565172c004b0ddd9f785d112cd8d16f3"
  },
  {
    "url": "tags/hiredot/index.html",
    "revision": "7b354e462cb4ad37b34e9dddbf7a5d87"
  },
  {
    "url": "tags/hiredot2/index.html",
    "revision": "dc2563ff6a991572411e500789365bcd"
  },
  {
    "url": "tags/hispanics-in-computing/index.html",
    "revision": "8fc3661f5d7f6bcd67e596cab3edada5"
  },
  {
    "url": "tags/hollow-knight/index.html",
    "revision": "6a6d97e8248e82984169c1fb952ae49d"
  },
  {
    "url": "tags/holocaust/index.html",
    "revision": "766e7d18b459a2e06cf7737abeef8402"
  },
  {
    "url": "tags/holy-grail/index.html",
    "revision": "680ed730d8f18435313f652143b9f1b4"
  },
  {
    "url": "tags/homework-assignment/index.html",
    "revision": "5ba89185d985cfbaaa40f5b1169f1da3"
  },
  {
    "url": "tags/hoot-suite/index.html",
    "revision": "6d263a4231b4796a8fcf13753062e6e2"
  },
  {
    "url": "tags/horror/index.html",
    "revision": "1f4d9598f9841954c3ee74d6752b4a2c"
  },
  {
    "url": "tags/hot-seat/index.html",
    "revision": "764371134a80c2adbffc6db6ed64ab64"
  },
  {
    "url": "tags/hour-of-code-code.org/index.html",
    "revision": "f961277bd73d4d99f19fe2bafab26654"
  },
  {
    "url": "tags/hour-of-code/index.html",
    "revision": "ebd9d7b897c6588726fe82cc11070212"
  },
  {
    "url": "tags/hour/index.html",
    "revision": "6647ea21e6cc6e42146b7d4d164b9d45"
  },
  {
    "url": "tags/hourofcode/index.html",
    "revision": "3b638fb00828c418a157efa5aa9f094a"
  },
  {
    "url": "tags/house/index.html",
    "revision": "ae13eaefdf163e7db10df88f67be73d3"
  },
  {
    "url": "tags/how-to-describe-yourself/index.html",
    "revision": "772055952d850a8e63a1ac51ee22a095"
  },
  {
    "url": "tags/how-to-study/index.html",
    "revision": "176f3c33acf4f019bdbd0fb193ecec68"
  },
  {
    "url": "tags/hr-devfest/index.html",
    "revision": "0f9680683d3670f207c05208e76208c4"
  },
  {
    "url": "tags/hr-fen/index.html",
    "revision": "ba6da5412c8a2db4277fd5a1155db903"
  },
  {
    "url": "tags/hrdevfest/index.html",
    "revision": "540c59192b6a8547df0251be44014c00"
  },
  {
    "url": "tags/html/css/index.html",
    "revision": "282b4b9562542c6345e7710c27664a9d"
  },
  {
    "url": "tags/html/index.html",
    "revision": "9ada995738f1e2c8a1a0caabe5a0b476"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "87e47211c1bcbfaddf68c1f8081ec69c"
  },
  {
    "url": "tags/html5up/index.html",
    "revision": "3a9766b80cd57e95623a76177d287ec0"
  },
  {
    "url": "tags/human-computer-interaction/index.html",
    "revision": "c4c111b5f6236f3f28a612c978bb5ae8"
  },
  {
    "url": "tags/human-robot-collaboration/index.html",
    "revision": "3348255f0e459c503b623bafb2cf4d19"
  },
  {
    "url": "tags/humanity/index.html",
    "revision": "2d3538f7d499294ff380ed067302ab4f"
  },
  {
    "url": "tags/huntly/index.html",
    "revision": "18a0190db97a1e83b6586cf5489f0e33"
  },
  {
    "url": "tags/hyatt-regency/index.html",
    "revision": "eb0577817c8d87c41fbf8ef94cf5748f"
  },
  {
    "url": "tags/ibm-watson-research/index.html",
    "revision": "b9d55da20cdf172688b34616e71ca8cc"
  },
  {
    "url": "tags/ibm-watson/index.html",
    "revision": "ea3ec5901d59166cb307a8e08b686bbb"
  },
  {
    "url": "tags/icon/index.html",
    "revision": "963391a06e4d487f5f27c348098dc4e7"
  },
  {
    "url": "tags/ideas/index.html",
    "revision": "1ccef8ee1c23517f82876b3b68c4e4ad"
  },
  {
    "url": "tags/idiotic/index.html",
    "revision": "5b9b7f239c37c1fa3b51dd15bafcbd9d"
  },
  {
    "url": "tags/iftt/index.html",
    "revision": "64bf2e61b276676b9df9c609786ba409"
  },
  {
    "url": "tags/imcompetech/index.html",
    "revision": "2e5428bb4cd82a0d54f57dc3f13861a4"
  },
  {
    "url": "tags/imovie101/index.html",
    "revision": "b01871c2654d6c1362e0f14628948678"
  },
  {
    "url": "tags/import-multiple-fonts/index.html",
    "revision": "8f40127d15944f42e8fd36169c824fe7"
  },
  {
    "url": "tags/impossible-quiz/index.html",
    "revision": "f97c70303179ac2f1d62ca44815e56b1"
  },
  {
    "url": "tags/index.html",
    "revision": "ebb716e33967585ade7e7dc85127253a"
  },
  {
    "url": "tags/indie-game/index.html",
    "revision": "2f6488861073d71693f38531e2d35c9a"
  },
  {
    "url": "tags/indie/index.html",
    "revision": "c02fa2b2cce56ca393c813dead57b7c9"
  },
  {
    "url": "tags/industry/index.html",
    "revision": "88d8a2b3e95a013144daf93e522abc8a"
  },
  {
    "url": "tags/infants/index.html",
    "revision": "e49266e9006da7cd89ebf7774399e554"
  },
  {
    "url": "tags/infoonepagelove.com/index.html",
    "revision": "032b52c38aa18b21cdf04da5e468950b"
  },
  {
    "url": "tags/initial-interview/index.html",
    "revision": "a5d90ecf2e71d60a422254b50f5371e5"
  },
  {
    "url": "tags/initializing/index.html",
    "revision": "72850ab55439781c1f88999f163df508"
  },
  {
    "url": "tags/inkling/index.html",
    "revision": "699f03d8d437fc45944b7c7d60f61b15"
  },
  {
    "url": "tags/inklings/index.html",
    "revision": "b3f3074ff0b100077afb8da7bdcca8a3"
  },
  {
    "url": "tags/inorder/index.html",
    "revision": "8f3073b404088d359094124475f254da"
  },
  {
    "url": "tags/insert/index.html",
    "revision": "fa2c9fed061e757274639ee740d72819"
  },
  {
    "url": "tags/insertion-sorts/index.html",
    "revision": "c484552ee94ec846e380ef1bc28d1ae8"
  },
  {
    "url": "tags/inside-out/index.html",
    "revision": "4578ff0e6ae3d6b0718888b2b36985b5"
  },
  {
    "url": "tags/inside/index.html",
    "revision": "4def127f1ca8fc40d7dd88541f79d785"
  },
  {
    "url": "tags/installation/index.html",
    "revision": "cbe753d1df3becd10e865a9a3a789d22"
  },
  {
    "url": "tags/instructors/index.html",
    "revision": "1d361de00eedc394c7eec2765897cff0"
  },
  {
    "url": "tags/insult/index.html",
    "revision": "e136e9b221d6dc4a72e14b7710813d1d"
  },
  {
    "url": "tags/insults/index.html",
    "revision": "37237bbf8a1a8f8a0c5e343ebbfeb3d5"
  },
  {
    "url": "tags/int-node/index.html",
    "revision": "3363b2bdf6cc30e4047e12851928a0ec"
  },
  {
    "url": "tags/int/_node/index.html",
    "revision": "8f9084b123574dac044c3209c3ee94fe"
  },
  {
    "url": "tags/integer/index.html",
    "revision": "ac0779c937213261efdbf938a88be3b8"
  },
  {
    "url": "tags/integers/index.html",
    "revision": "f430a10f21d4e85df18780bb1b9ebadf"
  },
  {
    "url": "tags/integrate-your-school-email/index.html",
    "revision": "bef5186675b0c353e2815c2db0aab459"
  },
  {
    "url": "tags/integrated-systems/index.html",
    "revision": "55a36b7eca2998974f09f239f1867ebd"
  },
  {
    "url": "tags/intensive/index.html",
    "revision": "4263caf45fd6a7e7c532e41f3cd931e6"
  },
  {
    "url": "tags/interconnectedness/index.html",
    "revision": "b54dcdba197587183658643c789d47d5"
  },
  {
    "url": "tags/interfeud/index.html",
    "revision": "cf33978867cc57fc3b343084cae2b9fe"
  },
  {
    "url": "tags/international-fleet-personnel/index.html",
    "revision": "0276bd1a80adc0bafa2057cf74a29bf1"
  },
  {
    "url": "tags/internet-trolls/index.html",
    "revision": "e974af9cf6821ac7557ae39f6e15761b"
  },
  {
    "url": "tags/internship-interview/index.html",
    "revision": "06df4f181e8d47c3453d081e1f913a2f"
  },
  {
    "url": "tags/internships/index.html",
    "revision": "b1973f6bc306ee00a8b38e8d5b06f2c7"
  },
  {
    "url": "tags/interview/index.html",
    "revision": "d21ce0f9e53abdbab10f9ed256f06eda"
  },
  {
    "url": "tags/interviewer/index.html",
    "revision": "9cfd0df7d9f1e875b06e610f33a0f38f"
  },
  {
    "url": "tags/interviews/index.html",
    "revision": "51af20abcb7059b3e076a6f9c790c2d3"
  },
  {
    "url": "tags/intro-course/index.html",
    "revision": "f612d6f563facdaa115bbe8d91d78f70"
  },
  {
    "url": "tags/intro/index.html",
    "revision": "f9ef1e772d2bad2d2c920155ad55145a"
  },
  {
    "url": "tags/ios/index.html",
    "revision": "4636b2c365cde195369e4ec0f98cb124"
  },
  {
    "url": "tags/isaac/index.html",
    "revision": "59c813d156689a2476119a2310932e9c"
  },
  {
    "url": "tags/it-crowd/index.html",
    "revision": "a96c332a5989431a6b7377d3ed88b851"
  },
  {
    "url": "tags/jack-sparrow/index.html",
    "revision": "4aa70f27d9528b9d6663127cc708e7e1"
  },
  {
    "url": "tags/jason-sewell/index.html",
    "revision": "89d1bd99107d1aadcb1cbb454cc929a7"
  },
  {
    "url": "tags/java-arrays/index.html",
    "revision": "601f49d67d13e87a662d8504277892c9"
  },
  {
    "url": "tags/java-decompiler/index.html",
    "revision": "ded7d779a81876cf505526408013f3c5"
  },
  {
    "url": "tags/java-program/index.html",
    "revision": "6863a646c354ce5a8c620b9dbafa0045"
  },
  {
    "url": "tags/java-programming/index.html",
    "revision": "608230339046d4e9833d6d0871c72f6f"
  },
  {
    "url": "tags/java-queues/index.html",
    "revision": "30fa6c88bd2786302794b75684fd16a9"
  },
  {
    "url": "tags/java/index.html",
    "revision": "03c7a32ef1ba8a0407e4fcf99e383e2e"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "6e36a205c9a51c023cedabca21809ced"
  },
  {
    "url": "tags/jd.benow.ca/index.html",
    "revision": "e9e35f97f34fc3a3fc2f04ede277aba1"
  },
  {
    "url": "tags/jd/index.html",
    "revision": "fe494c588f12afdcce81948dca65757d"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "7a26ba561521c183db8ca445b75e3c8d"
  },
  {
    "url": "tags/jeopardy-template/index.html",
    "revision": "3ce9aa0893dc9f5bcd6f1c558a2f3c12"
  },
  {
    "url": "tags/jeopardy/index.html",
    "revision": "8ca213ae6d1ce228e1153c69e3fc09d2"
  },
  {
    "url": "tags/jesus/index.html",
    "revision": "0fe094e508348e4bbc44b0e48c137d3a"
  },
  {
    "url": "tags/jewish-holocaust/index.html",
    "revision": "523a3e056e30640f1b3f7119c5000594"
  },
  {
    "url": "tags/jimmy/index.html",
    "revision": "ec0ae2de26c2c4ab7f75121766daa5b4"
  },
  {
    "url": "tags/joanna/index.html",
    "revision": "cbbfce6998304bb12fcefe98a5e2348f"
  },
  {
    "url": "tags/jobs-going-to-robots/index.html",
    "revision": "470317ff56cb0e47a3f9634fa1ad59bc"
  },
  {
    "url": "tags/jobs/index.html",
    "revision": "5629a2d15e1638335df9582af1068c56"
  },
  {
    "url": "tags/john-b-dey-elementary/index.html",
    "revision": "2e5e899b496760297c38047249e3193d"
  },
  {
    "url": "tags/john-b-dey/index.html",
    "revision": "635f573ddcb1a837c909371cb13dd9f3"
  },
  {
    "url": "tags/johnny-depp/index.html",
    "revision": "6f7601a80d24e7aeb5f5925ec5faa542"
  },
  {
    "url": "tags/journalism/index.html",
    "revision": "c77f2250bddd66568b8b192b6d6f1c94"
  },
  {
    "url": "tags/journey-so-far/index.html",
    "revision": "3e5b19cf723b4561e2f6c28091a166e8"
  },
  {
    "url": "tags/journey/index.html",
    "revision": "c85723c9931210cae2ff240e6b74033c"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "906e1333427088e331e88d9d92fe5590"
  },
  {
    "url": "tags/js-coding-bootcamps/index.html",
    "revision": "ce978d38be55f4fea811c6e473ccaf06"
  },
  {
    "url": "tags/js-library/index.html",
    "revision": "f0730820e82cb49739d518baf1cc56ce"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2355ce6233c6420c87d5e03f34685ec6"
  },
  {
    "url": "tags/juan-gilbert/index.html",
    "revision": "50bfa6fc64e758f38dddb5b8506c9d82"
  },
  {
    "url": "tags/jubilant/index.html",
    "revision": "14399c9832fb146d7336972d76679232"
  },
  {
    "url": "tags/jumpstart/index.html",
    "revision": "83430620b595f51eb7d2654e3905862b"
  },
  {
    "url": "tags/just-dance-2014/index.html",
    "revision": "6116e97b3cea98e0444ce5f60bfd8c9d"
  },
  {
    "url": "tags/justin/index.html",
    "revision": "20365ea8c7dd67debbaf27e474794e3d"
  },
  {
    "url": "tags/katherine-gilhooley/index.html",
    "revision": "6586fa5b6848109569c80a860036cc4e"
  },
  {
    "url": "tags/key/index.html",
    "revision": "5b009840c57d119fec699597902bce9c"
  },
  {
    "url": "tags/keyboard-instrument/index.html",
    "revision": "d83278a94936e33135f5e9503fbd8432"
  },
  {
    "url": "tags/keynote/index.html",
    "revision": "a283ee7ee9d1b3582bd04277b6ce93af"
  },
  {
    "url": "tags/kickstarter/index.html",
    "revision": "de184a11e8f92f7068502f284d10fdfb"
  },
  {
    "url": "tags/kinecrtx/index.html",
    "revision": "be3364a5ecb337bf83d26801cea07cbb"
  },
  {
    "url": "tags/kinect-sports-rivals/index.html",
    "revision": "ad19ca7ea224f31a0b48b911fe6dbd2f"
  },
  {
    "url": "tags/kinect-sports/index.html",
    "revision": "31378ec6d28db1dcf2c11cd034210b3e"
  },
  {
    "url": "tags/kinect/index.html",
    "revision": "905cfe97bd51a836d12a810ac350dd74"
  },
  {
    "url": "tags/kiss/index.html",
    "revision": "6ed13c98b557db46b4ebf849483fdb35"
  },
  {
    "url": "tags/klei-entertainment/index.html",
    "revision": "f5a31250389e7de6b2e46339e0c5ca77"
  },
  {
    "url": "tags/knighthood/index.html",
    "revision": "24f7362990a2f5532d9563200fc6dd1c"
  },
  {
    "url": "tags/ko/index.html",
    "revision": "180c7435087c6423175875a65f36216a"
  },
  {
    "url": "tags/korea/index.html",
    "revision": "c8cacd93a60ce379d173e21d9f161380"
  },
  {
    "url": "tags/kpcb-fellow-application/index.html",
    "revision": "a28bd5826328e59aa17c84b71ca6dacd"
  },
  {
    "url": "tags/kudos/index.html",
    "revision": "4cdeabdc80267f57fe7c47ace429e332"
  },
  {
    "url": "tags/labs/index.html",
    "revision": "8a0a6e8784def3ffa87dda92bf08b824"
  },
  {
    "url": "tags/ladies-of-fullstack/index.html",
    "revision": "866e165e0df53278c6771a53128e3319"
  },
  {
    "url": "tags/langdon/index.html",
    "revision": "a4d163c78107f2cbad7987b768599ece"
  },
  {
    "url": "tags/languages/index.html",
    "revision": "560916318f3ab1f77ad526eee37eb5e8"
  },
  {
    "url": "tags/laravel-5.3/index.html",
    "revision": "6f2f369ed9b96246488ad79e6e7a77a3"
  },
  {
    "url": "tags/laravel-5/index.html",
    "revision": "ef2c4ce039f2f0a5348b7ef193f9aa77"
  },
  {
    "url": "tags/laravel/index.html",
    "revision": "030b94adfbb85d7b13f5661bd0c0f9b6"
  },
  {
    "url": "tags/last-days/index.html",
    "revision": "2db065b7da8f6afc7fd7f32fbab81661"
  },
  {
    "url": "tags/last-stand-union-city/index.html",
    "revision": "a5e5eaa5a736bfa2e0612f9c2da6c6d9"
  },
  {
    "url": "tags/last-stand/index.html",
    "revision": "fe2d24a3b4badc87409784b062fecb11"
  },
  {
    "url": "tags/latinos/index.html",
    "revision": "6de2e2ab4ab0646c465e835743a826da"
  },
  {
    "url": "tags/lauch-academy/index.html",
    "revision": "c73bf45d065997e8d9fc02ebcec6f1b3"
  },
  {
    "url": "tags/launch-academy/index.html",
    "revision": "2a97725bf0338dcdd0a5d90bc0aa57b3"
  },
  {
    "url": "tags/launcher/index.html",
    "revision": "d7abd2f521d160f454466f6fbf8eab6b"
  },
  {
    "url": "tags/launchpad-items-reset/index.html",
    "revision": "b2317d5da3fea23a1ea9f3ed012ec93e"
  },
  {
    "url": "tags/launchpad/index.html",
    "revision": "65e29fdeaa5b4eba374af6f509d8a28d"
  },
  {
    "url": "tags/laws-of-power/index.html",
    "revision": "6fdb73898824ff268992deee2fea579a"
  },
  {
    "url": "tags/layout/index.html",
    "revision": "179374118a7a8020c0975ee79dffbda1"
  },
  {
    "url": "tags/learn-web-dev/index.html",
    "revision": "1ea41969618b2d9677a8a4f94bccc7c5"
  },
  {
    "url": "tags/learning-team-lunch/index.html",
    "revision": "99fdcdbe94db18c58ec05cde344a3e72"
  },
  {
    "url": "tags/learning-team/index.html",
    "revision": "558c9b6963e8f93aa23c1e1a815a1f2f"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "8d57336caf22d4e31f26b178fd80327e"
  },
  {
    "url": "tags/left-subtree/index.html",
    "revision": "bfd8320b8c8a46a8e18f419c32e5bc68"
  },
  {
    "url": "tags/left/index.html",
    "revision": "3f22e8c3d9344db2ad3a5a09a21b6059"
  },
  {
    "url": "tags/lenovo/index.html",
    "revision": "21713f0871f357612e40787b6b3bf622"
  },
  {
    "url": "tags/letter/index.html",
    "revision": "82887e7df65196060b40f324aaef36ce"
  },
  {
    "url": "tags/levels-of-communication/index.html",
    "revision": "fca412bf32faa2106793f56eeead9dde"
  },
  {
    "url": "tags/lighthearted/index.html",
    "revision": "025ed7956889a8aa15e99b7e90040f70"
  },
  {
    "url": "tags/limbo-game/index.html",
    "revision": "0c4d13b97842f86956f21babb843b1ea"
  },
  {
    "url": "tags/limbo/index.html",
    "revision": "34ce9c2809a9f9fd16a860890fead944"
  },
  {
    "url": "tags/link/index.html",
    "revision": "cdf72015a4d535c15b1570743a78f160"
  },
  {
    "url": "tags/linked-in/index.html",
    "revision": "f601fcf903b99421876bbeafd3ee1b41"
  },
  {
    "url": "tags/linked-lists/index.html",
    "revision": "64d2e6d0d1030c2fe9472fe8cc56df87"
  },
  {
    "url": "tags/linkedin/index.html",
    "revision": "de0d7261d0edfeea1c76a427de75e3b0"
  },
  {
    "url": "tags/lips/index.html",
    "revision": "31a8c9b1375f3bd1ab56e9523e361f19"
  },
  {
    "url": "tags/list/index.html",
    "revision": "f497378c301b3f66f631600a93608a2b"
  },
  {
    "url": "tags/liteicon/index.html",
    "revision": "28a2ec1a7e345cea852c2d5e12905240"
  },
  {
    "url": "tags/load-unpacked-extension/index.html",
    "revision": "f013d4c10bad0815c0ec989ba23d1204"
  },
  {
    "url": "tags/logistics/index.html",
    "revision": "3de7cdc7f50eed8755884f3ce52fc808"
  },
  {
    "url": "tags/lonely/index.html",
    "revision": "74e56a7e0fa385f993fec1fbb3c84932"
  },
  {
    "url": "tags/long-lists/index.html",
    "revision": "7309fd56904f3dda689300b91e062cee"
  },
  {
    "url": "tags/lord-of-the-flies/index.html",
    "revision": "9e9a0d626c073457bf23e0126a576ed3"
  },
  {
    "url": "tags/lord-of-the-rings-return-of-the-king/index.html",
    "revision": "95305ab31b8653a997e0f4499018b3de"
  },
  {
    "url": "tags/lord-of-the-rings/index.html",
    "revision": "ed24bbda7cc397a6b9c4e99b6beaf0d4"
  },
  {
    "url": "tags/louvre/index.html",
    "revision": "beb4366c15c60be261cff1181a54db92"
  },
  {
    "url": "tags/love/index.html",
    "revision": "ffad7d6a4db4b138f328349c9a4d58da"
  },
  {
    "url": "tags/lunch/index.html",
    "revision": "aae9e7aaa142b6a3ec00932ab0bca7e1"
  },
  {
    "url": "tags/lust/index.html",
    "revision": "bf44c71233fc2f4b877b3c6fdd003fce"
  },
  {
    "url": "tags/lynda.com/index.html",
    "revision": "7cbb31efad883a1dc9c7edb219e5423b"
  },
  {
    "url": "tags/mac/index.html",
    "revision": "23d98cb0b5087cfb1dbcba8b48d13812"
  },
  {
    "url": "tags/macabre/index.html",
    "revision": "12315214fcb24d51513d735ad53da212"
  },
  {
    "url": "tags/macaroni/index.html",
    "revision": "cb3a6602f175563a7ac5eb953ad59b58"
  },
  {
    "url": "tags/machine-learning/index.html",
    "revision": "e499cd460b83a66cde698a6c58f109ea"
  },
  {
    "url": "tags/mad-cowboy/index.html",
    "revision": "9768393e7193e5712ce6792e9494017b"
  },
  {
    "url": "tags/main-function/index.html",
    "revision": "e5cccac27d74a6b3976585fe599d1e05"
  },
  {
    "url": "tags/main-ideas/index.html",
    "revision": "bc8191fe71a56f90a4e813c67768439d"
  },
  {
    "url": "tags/main-method/index.html",
    "revision": "21e63392956de1c08ac4b8216e9f8dbe"
  },
  {
    "url": "tags/make-school/index.html",
    "revision": "b81104b962a8c4bb42e950cad965ba6b"
  },
  {
    "url": "tags/maker-square/index.html",
    "revision": "db5a8ff0edf2d3e434ef60224e37a4da"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "db33a302ed809ad857bac70474cfea62"
  },
  {
    "url": "tags/makersquare/index.html",
    "revision": "ba545ad95ff7d51431bb05b6584b4625"
  },
  {
    "url": "tags/man/index.html",
    "revision": "5ea6a9564dea4a58b3129a40352f743c"
  },
  {
    "url": "tags/manifest.json/index.html",
    "revision": "6bf3d1000334262656e8d53d155a5d30"
  },
  {
    "url": "tags/manuel-perez/index.html",
    "revision": "4208c1433518aaf0c33c1930bf4395eb"
  },
  {
    "url": "tags/manuel/index.html",
    "revision": "a2435b0ecc05e8abfefd9e755e2ea984"
  },
  {
    "url": "tags/map-me/index.html",
    "revision": "19b5f674ca1b4e8b8d7bba09a6f29daa"
  },
  {
    "url": "tags/map-of-coding-bootcamps/index.html",
    "revision": "edceed9c3eb2face6b8d74a02d413f0a"
  },
  {
    "url": "tags/map/index.html",
    "revision": "569d6283fc212d3c4f3e5e58c69a7572"
  },
  {
    "url": "tags/mapme/index.html",
    "revision": "21b8a8afd2d57449d58f049f6498b9ed"
  },
  {
    "url": "tags/mario-kart/index.html",
    "revision": "665fff7465215a1bbd69cef4c3973a64"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "6f4cb17f52aa1745dab01d72748c2d14"
  },
  {
    "url": "tags/market-size/index.html",
    "revision": "dcb7ab8c9f5093b2dd0b42101f2e220b"
  },
  {
    "url": "tags/massachusetts/index.html",
    "revision": "d1c43af1ca7ba9760fa36fac26e13867"
  },
  {
    "url": "tags/materialism/index.html",
    "revision": "6aad58552cfe5a7630a06a34cc98be73"
  },
  {
    "url": "tags/math-functions/index.html",
    "revision": "29e0ec200bc7d9f9b020f277edfaff34"
  },
  {
    "url": "tags/math-java/index.html",
    "revision": "02a68602cfb1fe8a3c46e9a8f9aaf1cb"
  },
  {
    "url": "tags/matthew-fontaine-maury-high-school/index.html",
    "revision": "528c59d9ba22e6d9a7da7a6088c57b0c"
  },
  {
    "url": "tags/maurice-moss/index.html",
    "revision": "e53e2a2ed7d840a07b9616783fcc6da5"
  },
  {
    "url": "tags/maury-high-school/index.html",
    "revision": "080820c490955f863fbd6a78db1f29cc"
  },
  {
    "url": "tags/maxs-head/index.html",
    "revision": "069916e7b2a6f479121ee6cf9f3b6559"
  },
  {
    "url": "tags/mean/index.html",
    "revision": "41b408ac38bd549e2b479823add91bc2"
  },
  {
    "url": "tags/meat-boy/index.html",
    "revision": "d9bfa49111aec50b33c86e5983c747b2"
  },
  {
    "url": "tags/medium/index.html",
    "revision": "86a1e47a59db5e0869f22f964409d705"
  },
  {
    "url": "tags/meetup/index.html",
    "revision": "ad19d203b18c96f70788b438126031f3"
  },
  {
    "url": "tags/meetups/index.html",
    "revision": "a3b75ff6e0e4612fe423f95643bcd7d2"
  },
  {
    "url": "tags/melodrama/index.html",
    "revision": "673dffac80a8eea10edec5e3ac25d8a4"
  },
  {
    "url": "tags/memory-address/index.html",
    "revision": "d2fefcc6064e2819a4d6640a62dfe315"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "5d3e55e2fc06dbf1f5d86e7ef425729d"
  },
  {
    "url": "tags/merge-sort/index.html",
    "revision": "fd781aa03d9185d53ff1c4a8799e1054"
  },
  {
    "url": "tags/merger/index.html",
    "revision": "17a6f9ffb1aa02980f8b0d68cb2df9ac"
  },
  {
    "url": "tags/michael/index.html",
    "revision": "edcf51eb8ef040520dfcb4deaad450c6"
  },
  {
    "url": "tags/middle-school-poems/index.html",
    "revision": "48a834f7f808311dd094ba70cbfc6c28"
  },
  {
    "url": "tags/midterm/index.html",
    "revision": "74a5a8a8697abd1d4aa3ca604698bdad"
  },
  {
    "url": "tags/migration/index.html",
    "revision": "32d6f388e72e726216ad9440b998b985"
  },
  {
    "url": "tags/miklos-nyiszli/index.html",
    "revision": "56bef79b2b4397c34c34b8518496eb26"
  },
  {
    "url": "tags/mini/index.html",
    "revision": "a7274ddef5f6e6876a26919826898550"
  },
  {
    "url": "tags/minions/index.html",
    "revision": "aed58980035646b5afb4ef8e84764847"
  },
  {
    "url": "tags/mint/index.html",
    "revision": "cbb3af20ca8d3374c492444800bd2ec2"
  },
  {
    "url": "tags/mit/index.html",
    "revision": "493f707b5a8a596fd3987009dba6ef45"
  },
  {
    "url": "tags/mixer/index.html",
    "revision": "3226dcfa19e904b710e7022a520f1eb5"
  },
  {
    "url": "tags/mobile-phone/index.html",
    "revision": "df24e7fbe6900d07649c2d24966815b9"
  },
  {
    "url": "tags/modern-tech/index.html",
    "revision": "c7ce9505d2669b631b48e3948a2a8528"
  },
  {
    "url": "tags/mom-problems/index.html",
    "revision": "4fa72e72e2dbbcf4ffd711cdd9acdd5b"
  },
  {
    "url": "tags/mom/index.html",
    "revision": "4aa57b889027665dfa713ef151f07992"
  },
  {
    "url": "tags/monsters/index.html",
    "revision": "03f27007bc3c277946b54b8be32d580c"
  },
  {
    "url": "tags/month-left/index.html",
    "revision": "e94de148138cb0ece722d70acf64cf24"
  },
  {
    "url": "tags/morbid/index.html",
    "revision": "df8ba65af63e988b20e5f65eec33513e"
  },
  {
    "url": "tags/mother/index.html",
    "revision": "1ca1641b02ae062bd6e2445d91a23119"
  },
  {
    "url": "tags/motion/index.html",
    "revision": "7e7e14a88a694bf0d042c1ab7855acb0"
  },
  {
    "url": "tags/mountain-view/index.html",
    "revision": "0e064f942900421896114cfb61a9e41c"
  },
  {
    "url": "tags/movies/index.html",
    "revision": "2fdc14c61dbe8da321e982ef5c4447b5"
  },
  {
    "url": "tags/mp3/index.html",
    "revision": "e72c3f540cf7955ea2b08d67166b1876"
  },
  {
    "url": "tags/museum/index.html",
    "revision": "544da40c29b03ccecb5f253046824f0e"
  },
  {
    "url": "tags/music/index.html",
    "revision": "456c3420b454d84923345335973bf9a3"
  },
  {
    "url": "tags/mvp/index.html",
    "revision": "b1d251c94c0e946ced54c8e2123f7154"
  },
  {
    "url": "tags/neil-gaiman/index.html",
    "revision": "67d18fd4b9d259d5bb8f5fdf563bb9b9"
  },
  {
    "url": "tags/never-outshine/index.html",
    "revision": "bfad69ad4be5fc85bf43f7ebf010329c"
  },
  {
    "url": "tags/new-meetup/index.html",
    "revision": "c2c9e8d7b937a3b7eb1fa14fba62ff54"
  },
  {
    "url": "tags/new-network/index.html",
    "revision": "2999258371b8fac206e59c2bb359e5f4"
  },
  {
    "url": "tags/new-super-mario-bros/index.html",
    "revision": "84a3ffe6b3e412ad74f7b3537c8fe838"
  },
  {
    "url": "tags/new-year/index.html",
    "revision": "c237914bef893147b1c1d3201a695eb1"
  },
  {
    "url": "tags/new-york-city/index.html",
    "revision": "6e88827a43618482dd17b354f9b487c2"
  },
  {
    "url": "tags/news/index.html",
    "revision": "4851fc0a3c332bd5dc19244af87bd64b"
  },
  {
    "url": "tags/nick-james/index.html",
    "revision": "be84d4148f1e90ec1f8f2a4da09b8459"
  },
  {
    "url": "tags/nitty-gritty/index.html",
    "revision": "ad59e86922aebaa367d28cd90cb3790e"
  },
  {
    "url": "tags/no-regrets/index.html",
    "revision": "29f899cf06504d620c550c77d8a8cb86"
  },
  {
    "url": "tags/node/index.html",
    "revision": "1c424528b98073fcc35395335d05e070"
  },
  {
    "url": "tags/nodes/index.html",
    "revision": "3e1f5c5bc4cc2f71c0546f80ee353c4b"
  },
  {
    "url": "tags/non-profit/index.html",
    "revision": "38dba685f533857b24f6ad35ea8fb89b"
  },
  {
    "url": "tags/noob/index.html",
    "revision": "d3dcf175f699a8957b939aee448b44e9"
  },
  {
    "url": "tags/noobie/index.html",
    "revision": "1f9f3e9c1cdac7b3c2ed08d622dce70d"
  },
  {
    "url": "tags/norfolk-javascript/index.html",
    "revision": "93270a360adacf841add3d4b9488f7db"
  },
  {
    "url": "tags/norfolk-virginia/index.html",
    "revision": "fd08d7fa979f02a1dba774505c2f69f9"
  },
  {
    "url": "tags/norfolk/index.html",
    "revision": "10e8bee5b69e210a5333359f79615118"
  },
  {
    "url": "tags/norfolkjs-journey/index.html",
    "revision": "cb49eff3613eb95c180c2c1dc14d0a46"
  },
  {
    "url": "tags/norfolkjs/index.html",
    "revision": "735003c5c4b35b35b8a3f7a56fbdd6e9"
  },
  {
    "url": "tags/north-korea/index.html",
    "revision": "b747991a05c5ca01f0a265493f6ce925"
  },
  {
    "url": "tags/north/index.html",
    "revision": "9a8031c787ae641fd25cfd288d6b3dba"
  },
  {
    "url": "tags/northwestern-university/index.html",
    "revision": "0cf01bf132ee62c25db6433e5c28a24f"
  },
  {
    "url": "tags/not/index.html",
    "revision": "c2e595aebea4777b1747b5cff885abb8"
  },
  {
    "url": "tags/notes/index.html",
    "revision": "eff4a02382e86ced6ee2943974439c30"
  },
  {
    "url": "tags/nothing-to-envy/index.html",
    "revision": "33f016819e2e9b437e561d4de5220cf4"
  },
  {
    "url": "tags/nothing/index.html",
    "revision": "16a836c7a3d08c6bd41ef9a6509ff3ed"
  },
  {
    "url": "tags/novel/index.html",
    "revision": "dcee9fb0455c52b7f7a69d55cf63b93f"
  },
  {
    "url": "tags/null/index.html",
    "revision": "20191914103cbaf9a52133a751d2a2c8"
  },
  {
    "url": "tags/numbers/index.html",
    "revision": "31d2bd7a1d015abd3bacd48b87ff0c43"
  },
  {
    "url": "tags/numerical-expressions/index.html",
    "revision": "42b12d9b2a3f0c080ecb026af0126caf"
  },
  {
    "url": "tags/odin-project/index.html",
    "revision": "d32be9e2aa21c9c88949dc22e1b1c2ac"
  },
  {
    "url": "tags/odu-email-integration/index.html",
    "revision": "f0930c0534072a275adbd00b5fec679d"
  },
  {
    "url": "tags/odu/index.html",
    "revision": "f2c125ab5fefcda7259938e8fdd49123"
  },
  {
    "url": "tags/oh-snap/index.html",
    "revision": "d9f82656f8c8b1dc9810201748974632"
  },
  {
    "url": "tags/old-science/index.html",
    "revision": "9f75e82f5f3505b424e9cbea6456e60e"
  },
  {
    "url": "tags/one-page-love/index.html",
    "revision": "0574323d677f7997e91967b73c459e1e"
  },
  {
    "url": "tags/one-week/index.html",
    "revision": "d2bad7706b0c1a32643dfbf68300380f"
  },
  {
    "url": "tags/online-course/index.html",
    "revision": "caf0c2fee13cb0d496027391273f7cd7"
  },
  {
    "url": "tags/online-design-course/index.html",
    "revision": "9a08b00909b49eec68147f31e8412b5e"
  },
  {
    "url": "tags/online-flash-games/index.html",
    "revision": "f8779732c620f02705d9f3818f8cfdea"
  },
  {
    "url": "tags/online-image-editor/index.html",
    "revision": "1fc45ed37813efafe1c991ec7bed97b7"
  },
  {
    "url": "tags/online-python-tutor/index.html",
    "revision": "bdd1b2521f0ad84a67e575617d57cd1d"
  },
  {
    "url": "tags/op-smile/index.html",
    "revision": "6568957cb31653c08d9ab3edf9850cd3"
  },
  {
    "url": "tags/operation-smile/index.html",
    "revision": "b1b776315c89eb8b4be78c4271a06eab"
  },
  {
    "url": "tags/oral-comm/index.html",
    "revision": "84143a2a528ba13922617c489e76e47f"
  },
  {
    "url": "tags/oren-etzioni/index.html",
    "revision": "beaf67a2c9b1e0151896b83d754c5a53"
  },
  {
    "url": "tags/orson/index.html",
    "revision": "3600c1eff09db51afbc2d7a152e77fa8"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "bfee7546b12bfbbf7a0a3df2d5a72c05"
  },
  {
    "url": "tags/osx-el-capitan/index.html",
    "revision": "7cff9440c29a4ee376ed20ae09efe1ec"
  },
  {
    "url": "tags/osx/index.html",
    "revision": "467f67e27e1593c6540bdbbc77405720"
  },
  {
    "url": "tags/oxford-university/index.html",
    "revision": "326069a531b9e6b42ebb46532ef0c03e"
  },
  {
    "url": "tags/pandemic-2/index.html",
    "revision": "0de26b8949285986c2bcb6d104ff282d"
  },
  {
    "url": "tags/pandemic/index.html",
    "revision": "65e22e941594b25ef1aa11af09301f36"
  },
  {
    "url": "tags/papers/index.html",
    "revision": "4b5065483b4e56ade38d130d0fa783e1"
  },
  {
    "url": "tags/parchment/index.html",
    "revision": "50ac91547cca519a41c5c59c799af9d8"
  },
  {
    "url": "tags/pattern-library/index.html",
    "revision": "61e2dae4d393e59a73a36564a0e7a39c"
  },
  {
    "url": "tags/paypal/index.html",
    "revision": "913d4601f7df924e8c9929e1fdd81a12"
  },
  {
    "url": "tags/pb/index.html",
    "revision": "c31bb8e8ab42b6f3b9dbd8c4407be577"
  },
  {
    "url": "tags/pdf-to-images/index.html",
    "revision": "a0b2004747510cc5bc4b086a9e428fd5"
  },
  {
    "url": "tags/personal-cohort-experience/index.html",
    "revision": "f9b72a00ea7574f461a84b642ab9c045"
  },
  {
    "url": "tags/personal-journal/index.html",
    "revision": "8338d0ff1f5d40ef2952041bfdf7fee8"
  },
  {
    "url": "tags/personal-questions/index.html",
    "revision": "4e495b21d69f10f47bfd45939328c1aa"
  },
  {
    "url": "tags/personal-website/index.html",
    "revision": "a9ef0eced43f02aec0e56eb95b0db729"
  },
  {
    "url": "tags/personality/index.html",
    "revision": "b1d68f30f136899d448725914623cf99"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "7cfbdca5f36d9a5b6ffa1282bf67c63b"
  },
  {
    "url": "tags/pertaining-to-hack-reactor/index.html",
    "revision": "0677a5b719ea0a59b94a7285677298dd"
  },
  {
    "url": "tags/pestilence/index.html",
    "revision": "9a39116490e14205b55da27321d0ba80"
  },
  {
    "url": "tags/peter-sunde/index.html",
    "revision": "4b172d7804d459a2ec47af2d99a218d0"
  },
  {
    "url": "tags/peter-weyland/index.html",
    "revision": "fe01d79fdf7164fa7dde3cfb75ccd7f0"
  },
  {
    "url": "tags/philadelphia/index.html",
    "revision": "b8e8733c0223c96a296d61d8b33b9e3c"
  },
  {
    "url": "tags/phone-conversations/index.html",
    "revision": "c498a6730d67f9a27de6837b5f82ec9f"
  },
  {
    "url": "tags/pick-up-lines/index.html",
    "revision": "fd0ac249b736c78b92ef4e74fd0aa4ee"
  },
  {
    "url": "tags/pictures/index.html",
    "revision": "98c897c2b207862217d134b497784b99"
  },
  {
    "url": "tags/pirate-bay/index.html",
    "revision": "dd32d09cbce62e919df5f0582d947094"
  },
  {
    "url": "tags/pity/index.html",
    "revision": "fe982887db3f569ff80e2f8f0ab5c547"
  },
  {
    "url": "tags/pixel-icon-generator/index.html",
    "revision": "fc73dc3142751220d1b18bc282f07f0e"
  },
  {
    "url": "tags/pixelfest/index.html",
    "revision": "a62cad2a6790a9ac9f655e60d58bd6ee"
  },
  {
    "url": "tags/plan-ahead/index.html",
    "revision": "12556512ffed6445e4a19c60a043a010"
  },
  {
    "url": "tags/planetarium-show/index.html",
    "revision": "41f3e4fbc233471d87014a2b9411fc4b"
  },
  {
    "url": "tags/plans-in-motion/index.html",
    "revision": "68d04df5711782e442bad677dc84ccf8"
  },
  {
    "url": "tags/play-along/index.html",
    "revision": "646e46a369725e508500a5f35de0be9b"
  },
  {
    "url": "tags/playdead-games/index.html",
    "revision": "dac83e0cac2abcb49fe27bf4723d1fc8"
  },
  {
    "url": "tags/playdead/index.html",
    "revision": "f83e011932d3486325c8472aa56580aa"
  },
  {
    "url": "tags/playlistbuddy/index.html",
    "revision": "0491d21f2ee86e746eaa46fc51b68d17"
  },
  {
    "url": "tags/playlists/index.html",
    "revision": "e847175426a116f255ad9dc5fe18995f"
  },
  {
    "url": "tags/plurality/index.html",
    "revision": "f1594a0776f4abc46eaa491616e2a3ef"
  },
  {
    "url": "tags/png-files/index.html",
    "revision": "a2bdcba56030b13869e617f161d5119e"
  },
  {
    "url": "tags/png/index.html",
    "revision": "8c734049737a0319b5601d1d74e5302b"
  },
  {
    "url": "tags/poem/index.html",
    "revision": "dd6f640781eab081fbc8e61c57e6316d"
  },
  {
    "url": "tags/poetry/index.html",
    "revision": "04cc3a3fa87abb58e2b7978a2a9cd389"
  },
  {
    "url": "tags/pointer/index.html",
    "revision": "a10e71521f2e9a784a571f876eca9c18"
  },
  {
    "url": "tags/poptropica/index.html",
    "revision": "905fdc26646d6a882d2aa7f81383d7ae"
  },
  {
    "url": "tags/portal-runner/index.html",
    "revision": "bc1d73d5eec6e339710f841e5917fee1"
  },
  {
    "url": "tags/post-apocalyptic/index.html",
    "revision": "61cf5c955d7e7aedf94500c31891906e"
  },
  {
    "url": "tags/postorder/index.html",
    "revision": "e3f1320256db3a7c91bea49aeab79eab"
  },
  {
    "url": "tags/potential/index.html",
    "revision": "dec59468bb52c9eab320d3f0fcdad41a"
  },
  {
    "url": "tags/pow/index.html",
    "revision": "38efc99d740d8df70c9ed2cdb75b30e6"
  },
  {
    "url": "tags/predecessor/index.html",
    "revision": "75b3dbc9d5b0d0ce4e61601473dd5228"
  },
  {
    "url": "tags/preorder/index.html",
    "revision": "22c6c5cdd8e69b68c1271f8db6c3ff68"
  },
  {
    "url": "tags/prep/index.html",
    "revision": "6612ab0e9ab02fc84be09f82ce7e0b0e"
  },
  {
    "url": "tags/preparation/index.html",
    "revision": "2bfee4789a8e3addffda4bbde78a33d7"
  },
  {
    "url": "tags/preparing/index.html",
    "revision": "57584d05d83396896be586bd27d6cbe8"
  },
  {
    "url": "tags/prepartion/index.html",
    "revision": "bded6a5b43b7237755a62e2cdf3fc5b3"
  },
  {
    "url": "tags/presentation-software/index.html",
    "revision": "1d123796c85f41852c6e667937cd068b"
  },
  {
    "url": "tags/president-harvey-mudd/index.html",
    "revision": "3003cb9ec6287af1450c36ef09efeff0"
  },
  {
    "url": "tags/pretty/index.html",
    "revision": "67f6aad1bfc809d027de1ab5434bd418"
  },
  {
    "url": "tags/prework/index.html",
    "revision": "a25d1a44673d8c16802dcc9d5c6418ca"
  },
  {
    "url": "tags/pricey/index.html",
    "revision": "82d3be893ae50404f5d8b1d1704f152e"
  },
  {
    "url": "tags/pride/index.html",
    "revision": "b4a98518e01bf5a92e8c060256bfeff6"
  },
  {
    "url": "tags/printf/index.html",
    "revision": "1cb6f468ea19b84e058445eb47752e48"
  },
  {
    "url": "tags/printing/index.html",
    "revision": "7580cafe54ccac2f6b859a286a6c546e"
  },
  {
    "url": "tags/priory-of-sion/index.html",
    "revision": "316a6fb24f6a9c4457e849f562429f7f"
  },
  {
    "url": "tags/prisoners/index.html",
    "revision": "df082f8e47d99c2f79505528f11c34c7"
  },
  {
    "url": "tags/process/index.html",
    "revision": "ae086c617dca3039d3ea7ea6c7ead859"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "3c1db9410f5a236224f53651d5eaf293"
  },
  {
    "url": "tags/product-academy/index.html",
    "revision": "f3c18e07f89590c6d9d729fbfc9adad4"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "d49d278cf9707cb28efd48310aeb3bf8"
  },
  {
    "url": "tags/program-length/index.html",
    "revision": "628cf4a033cd105645c21660ff496cdb"
  },
  {
    "url": "tags/program/index.html",
    "revision": "1bb4449625dc6e8a69134d0a06f06c79"
  },
  {
    "url": "tags/programmer/index.html",
    "revision": "3b6304b4148dd98bab21bc7db7ee8611"
  },
  {
    "url": "tags/programming-bootcamps/index.html",
    "revision": "ac99b7d359b6bcb1970aa61e452174b2"
  },
  {
    "url": "tags/programming/index.html",
    "revision": "80e83b0a9cfd307df3af14d0f3b6c58e"
  },
  {
    "url": "tags/project-zomboid/index.html",
    "revision": "f28e7d4855a9272b431eaa40b9e9fecd"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "d7a799b95324dc786af2450a41534d97"
  },
  {
    "url": "tags/promises/index.html",
    "revision": "476472f1eb34710999a4b976fa26c85d"
  },
  {
    "url": "tags/properly-program/index.html",
    "revision": "f4ce40421665158739fbd3229b9d7c0a"
  },
  {
    "url": "tags/properties/index.html",
    "revision": "b106dab910498917514e8935d839c33c"
  },
  {
    "url": "tags/pseudocode/index.html",
    "revision": "2442fc2d8df2370ed422380436418813"
  },
  {
    "url": "tags/puppy-love/index.html",
    "revision": "96e0a7863ae230b3a45c36406595bb89"
  },
  {
    "url": "tags/python-3/index.html",
    "revision": "c8850a15165c947188cfdc601170ada2"
  },
  {
    "url": "tags/python-area-of-a/index.html",
    "revision": "283c7d806dcc01213f5b9ff00af9f80a"
  },
  {
    "url": "tags/python-bits/index.html",
    "revision": "19f48f12d7aae6514e2d952bb89c12dd"
  },
  {
    "url": "tags/python/index.html",
    "revision": "ced6523a6e46783667a27e91ef1e3069"
  },
  {
    "url": "tags/questions-coding/index.html",
    "revision": "57e0d61ace8a06afaab0b91aa3d57414"
  },
  {
    "url": "tags/questions/index.html",
    "revision": "fa98af0d51e23687c9725cd2cb2e0360"
  },
  {
    "url": "tags/queue-implementation/index.html",
    "revision": "1f2cef30eceaf80dcb87bd883df8eca7"
  },
  {
    "url": "tags/quick-sort/index.html",
    "revision": "04c2982c677ad8e02436844ed0889de8"
  },
  {
    "url": "tags/quizlet/index.html",
    "revision": "e6409894920b1ce4d16916185dbe41db"
  },
  {
    "url": "tags/quizzes/index.html",
    "revision": "963ebb93d176face3b939ca39163e553"
  },
  {
    "url": "tags/quora/index.html",
    "revision": "27105559cded12133aa2e016a086e86e"
  },
  {
    "url": "tags/quotient-remainder/index.html",
    "revision": "d832997aa70c2a57d3d5981e3e52c95d"
  },
  {
    "url": "tags/random-poems/index.html",
    "revision": "511fb08ee5aac95d4eee9d1dcb3e4f71"
  },
  {
    "url": "tags/randomly-generated/index.html",
    "revision": "0b407c6ef3c0658bc83e2d77ebb53cc5"
  },
  {
    "url": "tags/rankme/index.html",
    "revision": "8ca514ce5a94326b4216de64d6e54886"
  },
  {
    "url": "tags/rant/index.html",
    "revision": "30c2ff3251074f2c8aa52467016a37b4"
  },
  {
    "url": "tags/rants/index.html",
    "revision": "40f0155496e391f28f2355388e1f73f7"
  },
  {
    "url": "tags/rating/index.html",
    "revision": "6020e77d2671d9837c4d6e35c96e383c"
  },
  {
    "url": "tags/re-birth/index.html",
    "revision": "06b798377f845050f7ab4ffe1e277ce5"
  },
  {
    "url": "tags/readme-template/index.html",
    "revision": "de8cd52ae779da2f57f161f4c0cd2b97"
  },
  {
    "url": "tags/readme/index.html",
    "revision": "7c2e5ba841ae133cc5017a8e9f43a415"
  },
  {
    "url": "tags/real-data/index.html",
    "revision": "12cfad935fc043c82228b70045c7ba6e"
  },
  {
    "url": "tags/reason/index.html",
    "revision": "46ccde882f86634de7f3878040d67bb9"
  },
  {
    "url": "tags/reasons/index.html",
    "revision": "e95ab481a9c4b9ea481f1741f20840c5"
  },
  {
    "url": "tags/recruiting/index.html",
    "revision": "46ff7c12bc6d2f6f69f2843a707e2636"
  },
  {
    "url": "tags/recursion/index.html",
    "revision": "f3d9e3b8b3d1f7c454d8de407e2b6817"
  },
  {
    "url": "tags/recursive/index.html",
    "revision": "cd0ae4fc6c831c0be89d9ed1afa4d6ff"
  },
  {
    "url": "tags/reflections/index.html",
    "revision": "ce2325bcf85c0ed3d5805d98f93531c3"
  },
  {
    "url": "tags/rejection/index.html",
    "revision": "9e8d5c9888de63c00e0ac699db897db8"
  },
  {
    "url": "tags/relative/index.html",
    "revision": "4b5e0034020f93cb1dc10bcb7b97ce1e"
  },
  {
    "url": "tags/relativity/index.html",
    "revision": "9cfd154f165258cc1fc1a6a43f67df67"
  },
  {
    "url": "tags/religion/index.html",
    "revision": "08bd4087cc57a8a0934c75d3f6807061"
  },
  {
    "url": "tags/religious/index.html",
    "revision": "b4fdc4c8192efb6aa8c0c6157e468aaf"
  },
  {
    "url": "tags/remove/index.html",
    "revision": "77606367d653540e2a8514d77b80ad4b"
  },
  {
    "url": "tags/rename-multiple-photos/index.html",
    "revision": "479eb82aa72648cf5530c1243d5622f3"
  },
  {
    "url": "tags/repetitive/index.html",
    "revision": "b6673c82d0e35c428523804780841e58"
  },
  {
    "url": "tags/research/index.html",
    "revision": "3dd67d432dcf222fc42ddfc0a107320e"
  },
  {
    "url": "tags/reset-dock/index.html",
    "revision": "1535acd862adf748c86923ad84bee131"
  },
  {
    "url": "tags/reset-launchpad/index.html",
    "revision": "c0a470a2e91aa2f0e1b81a8c01ca7076"
  },
  {
    "url": "tags/reset-your-launchpad/index.html",
    "revision": "1752cd746c5931af02c4c78e8491cc05"
  },
  {
    "url": "tags/resources/index.html",
    "revision": "c1ca9a0d39f9a8dd915732e844a62d8e"
  },
  {
    "url": "tags/respect-tradition/index.html",
    "revision": "474165932d97c7329c93d52f68a6a2d0"
  },
  {
    "url": "tags/result/index.html",
    "revision": "f9ab6ece7d2842df3e462382a6f70bfc"
  },
  {
    "url": "tags/results/index.html",
    "revision": "8513c31ee48c9b4906dacc743ef62966"
  },
  {
    "url": "tags/resume/index.html",
    "revision": "db16461ca024f68eb9cb72e46b276c61"
  },
  {
    "url": "tags/retarded/index.html",
    "revision": "8c6003f212c67edbc97eda7262209d88"
  },
  {
    "url": "tags/revconf/index.html",
    "revision": "b24466f0aa7f83ac4f3b290ec44f0350"
  },
  {
    "url": "tags/review-week/index.html",
    "revision": "b8e17e0b20dd926b307c61411fef2d21"
  },
  {
    "url": "tags/review/index.html",
    "revision": "39f28c75971c5c9462ec281895aaeb13"
  },
  {
    "url": "tags/reviewing/index.html",
    "revision": "6ed4f7038087cd048040fb9de18775a4"
  },
  {
    "url": "tags/revolution-conference/index.html",
    "revision": "cd476048a7772ab999bb233140b21385"
  },
  {
    "url": "tags/revolution/index.html",
    "revision": "8fa9c8c08ef582ede53c668991acef99"
  },
  {
    "url": "tags/revolutionconf-virginia/index.html",
    "revision": "72d53a69e1c07894d91cb1a0a9032a06"
  },
  {
    "url": "tags/revolutionconf/index.html",
    "revision": "b5d2cf39a6baa6289216db19501a50f0"
  },
  {
    "url": "tags/richard-tapia/index.html",
    "revision": "6614f1f294bb48a7d0a93e8c72125dc6"
  },
  {
    "url": "tags/riddle/index.html",
    "revision": "4d6f47f99c308b7075c14cc222f49ad9"
  },
  {
    "url": "tags/right/index.html",
    "revision": "e4f653c23822f37d429fb91c8c294a65"
  },
  {
    "url": "tags/rihanna/index.html",
    "revision": "4924af6be27c2dd829f611f9752d0c89"
  },
  {
    "url": "tags/robert-greene/index.html",
    "revision": "44ce0dc971348754dab30c83932dbfd9"
  },
  {
    "url": "tags/robert-langdon/index.html",
    "revision": "7b44b6344e012f54b022c8c830affe2d"
  },
  {
    "url": "tags/robocup-soccer/index.html",
    "revision": "2c754dc81ae5a57e7f58a761dc7c3174"
  },
  {
    "url": "tags/robocup/index.html",
    "revision": "9e653b3b7dab2240e503540ffea1ec62"
  },
  {
    "url": "tags/robopocalypse/index.html",
    "revision": "e13824e37088c31826fd2ea5ffc11df2"
  },
  {
    "url": "tags/robot/index.html",
    "revision": "2e581ead82fb3bfaab97a48266233d1b"
  },
  {
    "url": "tags/robotics/index.html",
    "revision": "19a9e18d079798861abb9c79f6998c28"
  },
  {
    "url": "tags/robots/index.html",
    "revision": "c3cd1a38f085091f953c223abddb3379"
  },
  {
    "url": "tags/romance/index.html",
    "revision": "cd3fa58eae58e824318aface463e1095"
  },
  {
    "url": "tags/runescape/index.html",
    "revision": "4bd8843af71e7b10845912c953632afe"
  },
  {
    "url": "tags/russell-cheng/index.html",
    "revision": "30ce5392622833bba8e03d893b1335f1"
  },
  {
    "url": "tags/sally-conference/index.html",
    "revision": "a970c66c732f47f40910e19e9e780864"
  },
  {
    "url": "tags/same-height/index.html",
    "revision": "27607a8beba060f00f33ffeb06ad2f20"
  },
  {
    "url": "tags/same-sex-marriage/index.html",
    "revision": "f53c7cdb569b0bb5047649d364882955"
  },
  {
    "url": "tags/samer-buna/index.html",
    "revision": "cce2b45999baec50f5f789daddee8cbb"
  },
  {
    "url": "tags/san-francisco/index.html",
    "revision": "af99c2232767c97e60c1d12c571c0b10"
  },
  {
    "url": "tags/sandbox/index.html",
    "revision": "f8c8948fe430f65d3db5aa3655819880"
  },
  {
    "url": "tags/sbarro/index.html",
    "revision": "06875a65ed4c1770e273a82e28252d15"
  },
  {
    "url": "tags/scary/index.html",
    "revision": "8a9c27ec468d6bafcc869413f68d6af3"
  },
  {
    "url": "tags/scholarships/index.html",
    "revision": "8f92607829fb06c85685c0653949aeaf"
  },
  {
    "url": "tags/school-email-integration/index.html",
    "revision": "9be246f1a625d0248363b59888ca908c"
  },
  {
    "url": "tags/school-email/index.html",
    "revision": "980945cb886a0d41dff3449a3437ad5e"
  },
  {
    "url": "tags/school/index.html",
    "revision": "27a31e3d50a4a2b278775cd32b65068c"
  },
  {
    "url": "tags/science-fair/index.html",
    "revision": "f098eeb21e9fcbdd23074b162e5c12ec"
  },
  {
    "url": "tags/science/index.html",
    "revision": "d5ca3b393aa50e2760fa773b5500ff93"
  },
  {
    "url": "tags/scott-card/index.html",
    "revision": "c4109701c186e7846587c8cede94d620"
  },
  {
    "url": "tags/screenhero/index.html",
    "revision": "d9269dc8b1b361cb6816686006f249a5"
  },
  {
    "url": "tags/screenshots/index.html",
    "revision": "bdf1fe3a50831536329faf8402d7cbb3"
  },
  {
    "url": "tags/scribe/index.html",
    "revision": "b9b10fdefc4d7991be8c4e6917cb8b5d"
  },
  {
    "url": "tags/search-query/index.html",
    "revision": "eba73b84f78eb4258dbb7a645776bb69"
  },
  {
    "url": "tags/searching/index.html",
    "revision": "1669c593eca309855a142c1ed66a605a"
  },
  {
    "url": "tags/sedgefield-elementary/index.html",
    "revision": "86b72f0ac0e1cd167d435fc42cc2d75c"
  },
  {
    "url": "tags/sedgefield/index.html",
    "revision": "1d7447e13e19f35f5ab34d446d695039"
  },
  {
    "url": "tags/seema/index.html",
    "revision": "569e838f103e8f9338a275f0cdb7596b"
  },
  {
    "url": "tags/selection-sort/index.html",
    "revision": "45cd809652265b29108b2ade0cf38c63"
  },
  {
    "url": "tags/selection/index.html",
    "revision": "f60e27ad20af5c5d6dfdeab6695c4eb3"
  },
  {
    "url": "tags/selective-honesty/index.html",
    "revision": "f3d2b4da9969c187e28758a1cbc33bc5"
  },
  {
    "url": "tags/semicolons/index.html",
    "revision": "b32ca17b34e262c73b7fec8f477222bd"
  },
  {
    "url": "tags/senior-phase/index.html",
    "revision": "fa124643283299be30afce0ab8efd752"
  },
  {
    "url": "tags/sesame-street/index.html",
    "revision": "1545c3d1612857240310d7b985cca91a"
  },
  {
    "url": "tags/seven-days/index.html",
    "revision": "00256d971901b5d04d139632dca65089"
  },
  {
    "url": "tags/seven-deadly-sins/index.html",
    "revision": "c3ef900baa4b66afb344bdfc7d6b736f"
  },
  {
    "url": "tags/shaan/index.html",
    "revision": "0eb41f5d341dfa9f6cd3378e74d87463"
  },
  {
    "url": "tags/shakespeare/index.html",
    "revision": "2406d3b7a1f19c65df0bb96f3ce52c82"
  },
  {
    "url": "tags/shakey/index.html",
    "revision": "d4e38273f5ec1785d300bcb172908783"
  },
  {
    "url": "tags/shame/index.html",
    "revision": "8632c07f937ada46fa6d126ad0c0758e"
  },
  {
    "url": "tags/sharing/index.html",
    "revision": "74b2f281251528cc4a30738dbee04db6"
  },
  {
    "url": "tags/short-operation/index.html",
    "revision": "dfcf1a975baa77fbb3e008176dbd5e5e"
  },
  {
    "url": "tags/short-stories/index.html",
    "revision": "7e708fcc1022a71226afb5cfc29856f7"
  },
  {
    "url": "tags/shrthnd/index.html",
    "revision": "1decf0ae4fa6df4c35d8a9dafe8e56e0"
  },
  {
    "url": "tags/silicon-valley/index.html",
    "revision": "b02480bc152be56db297ad105e21d33d"
  },
  {
    "url": "tags/silly/index.html",
    "revision": "76c1f8c4b84794d10f6a3f87176adf51"
  },
  {
    "url": "tags/sims-2/index.html",
    "revision": "e4b5681d0d67f7772e58f40a59699284"
  },
  {
    "url": "tags/sims-3/index.html",
    "revision": "6b686270395685c2688776fd6c894f94"
  },
  {
    "url": "tags/sims-medieval/index.html",
    "revision": "96ba4ae7928a7dec8f8a953239adec74"
  },
  {
    "url": "tags/sins/index.html",
    "revision": "316070bce5dbf1ba0da8688e69e719aa"
  },
  {
    "url": "tags/siri/index.html",
    "revision": "19d4ecae5d1628a722d09639681c51d2"
  },
  {
    "url": "tags/sitedrop/index.html",
    "revision": "78069771bd77abec138e2e3ca3668088"
  },
  {
    "url": "tags/sketch/index.html",
    "revision": "3accdc7e74139b55cffb0abc933bea1e"
  },
  {
    "url": "tags/skiirty/index.html",
    "revision": "ff1022ad5b92272a801abc3cc2b836ff"
  },
  {
    "url": "tags/skype/index.html",
    "revision": "7df6e44beae08f2dacad1ce2ac5edf5d"
  },
  {
    "url": "tags/slack/index.html",
    "revision": "d6357eec9928a87b175e84d2d7bfe576"
  },
  {
    "url": "tags/slides-carnival/index.html",
    "revision": "6fc4af26eab9afdd02d873807c6d917f"
  },
  {
    "url": "tags/slidescarnival/index.html",
    "revision": "79bc127b8b478b366acef0f10952a4ff"
  },
  {
    "url": "tags/sloth/index.html",
    "revision": "5a2f413f51f9bede57fb64bdc2153796"
  },
  {
    "url": "tags/smaller-problem/index.html",
    "revision": "89c0f7e31a1b0aa331bf2943fcd0cca3"
  },
  {
    "url": "tags/smart-notes/index.html",
    "revision": "f99b5dea5827cc22fafb8c86d7202005"
  },
  {
    "url": "tags/smile-train/index.html",
    "revision": "4e39fae2837abb48c439218775d3e6c4"
  },
  {
    "url": "tags/snow/index.html",
    "revision": "ea1d45bb05a327af99e07345aa0fdb1c"
  },
  {
    "url": "tags/social-networking-connectedness/index.html",
    "revision": "04f0f14d8267131bf48dab6550f1717e"
  },
  {
    "url": "tags/social-networking-sites/index.html",
    "revision": "7b9b5fc82b7110e8ad3c40625b194b2d"
  },
  {
    "url": "tags/social-networking/index.html",
    "revision": "b56f1d8c21dad1701a921b578fb2cfc3"
  },
  {
    "url": "tags/social/index.html",
    "revision": "cd8f2b02885244f3fd083f7e04bd2932"
  },
  {
    "url": "tags/socket.io/index.html",
    "revision": "f29155d7df1396064fc297509d140a20"
  },
  {
    "url": "tags/socks/index.html",
    "revision": "892d851f3d256919f367a2da776159ef"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "90bf1afe505593fd3f6f570d6e2ac99b"
  },
  {
    "url": "tags/sonderkommando/index.html",
    "revision": "4610a1177d164e1c1819fb672eeb8f0d"
  },
  {
    "url": "tags/sophie-neveu/index.html",
    "revision": "e8f3c9d44e675addbaaa309602433c8e"
  },
  {
    "url": "tags/sort-detective/index.html",
    "revision": "dfa56a010408c22cbe344326e6862fac"
  },
  {
    "url": "tags/sortdetective.jar/index.html",
    "revision": "411f1a8e3a68b05fac484d01642eb56b"
  },
  {
    "url": "tags/sorting-methods/index.html",
    "revision": "50b86d9fab1717e57f8eeb04c15592e2"
  },
  {
    "url": "tags/sortingexperiment/index.html",
    "revision": "b13cbbd7d1302d5486b42ec05cd5dbfc"
  },
  {
    "url": "tags/sorty-app/index.html",
    "revision": "b111fc1683fc463d90e85c4d1b0a584a"
  },
  {
    "url": "tags/sorty-for-osx/index.html",
    "revision": "6397d117852fe1581beb317b85d4cf0f"
  },
  {
    "url": "tags/sorty/index.html",
    "revision": "e18585667691f78fd97dacb16480300f"
  },
  {
    "url": "tags/sound-cloud/index.html",
    "revision": "35a2d8bfd0ac953af74bacaf0a0da52a"
  },
  {
    "url": "tags/source-code/index.html",
    "revision": "3bd7de32479f05f9cb5b00b8ce5ac212"
  },
  {
    "url": "tags/spanish/index.html",
    "revision": "e2c0d3fd94d3273ad1e911796f3f9048"
  },
  {
    "url": "tags/spank-the-money/index.html",
    "revision": "ac3d718935305020065581add85b7e25"
  },
  {
    "url": "tags/spank-the-monkey/index.html",
    "revision": "fcd7476107c9bf4d4650a50285306330"
  },
  {
    "url": "tags/speakdeck/index.html",
    "revision": "e53fc02848de812ffe10bae95b035779"
  },
  {
    "url": "tags/speakerdeck/index.html",
    "revision": "dc9b0e962c9a13b8ff3bdf845e16c3b6"
  },
  {
    "url": "tags/speech/index.html",
    "revision": "e188875594ef4cfeafe61f7f66a032fc"
  },
  {
    "url": "tags/speros-misirlakis/index.html",
    "revision": "621f4e9c014d773ac774a806cd9050e8"
  },
  {
    "url": "tags/spider/index.html",
    "revision": "cb267af49e3d6a8f42b96cf6b6b8316d"
  },
  {
    "url": "tags/spoiler/index.html",
    "revision": "cbe83ad4dc7a8303b77c11f6fb928a76"
  },
  {
    "url": "tags/spoilers/index.html",
    "revision": "6d7d0d11bade74ed493bf9e33612cccb"
  },
  {
    "url": "tags/spore/index.html",
    "revision": "38033816a78c332b4f9efcc9c8c0d4e7"
  },
  {
    "url": "tags/spotify-download-mp3/index.html",
    "revision": "bfcea62fc17939a147f301368d32a8bf"
  },
  {
    "url": "tags/spotify-download/index.html",
    "revision": "4cbb3bb84dae47461cd2e52c3950afda"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "cbb4ff88349f1086d42e8e924c901126"
  },
  {
    "url": "tags/spreadsheet-app/index.html",
    "revision": "570823e444df99e45f1ce7e29f38eecc"
  },
  {
    "url": "tags/stackathon/index.html",
    "revision": "90154233f7c089932d3f372247985ba4"
  },
  {
    "url": "tags/stackstore/index.html",
    "revision": "082129d0360af1cac1f3c7a5c1dd18ac"
  },
  {
    "url": "tags/star-trek-monopoly/index.html",
    "revision": "b67217f04f941e9cbf4e46ce9978c8c0"
  },
  {
    "url": "tags/stardust/index.html",
    "revision": "7041662ebdb763604dd21b8a3c475eb2"
  },
  {
    "url": "tags/starter-league/index.html",
    "revision": "b7c4457af3e562f2dce18273817c1768"
  },
  {
    "url": "tags/static-ui/index.html",
    "revision": "f22ebe03feeb1d4887636bdd800ef6ab"
  },
  {
    "url": "tags/stem/index.html",
    "revision": "f319a8f6111ea9fd5750fd64bbc97cb3"
  },
  {
    "url": "tags/string/index.html",
    "revision": "7b3c5dba282074702df383f24079953e"
  },
  {
    "url": "tags/strings-python/index.html",
    "revision": "a9fcb0f0fd1ab622d86f906f3af085bf"
  },
  {
    "url": "tags/student-experience/index.html",
    "revision": "ccec87121ac44fd5f582623c5b5c8927"
  },
  {
    "url": "tags/student-id/index.html",
    "revision": "b142bdb9a41be3150e42948836a9609e"
  },
  {
    "url": "tags/study-better/index.html",
    "revision": "9d60a027dcae8dff3f25fe73a1956910"
  },
  {
    "url": "tags/study-guide/index.html",
    "revision": "f47d340dd30993dc2ac838a7475e6e08"
  },
  {
    "url": "tags/study-strategies/index.html",
    "revision": "379d4d2f599c13df8b964cec754485fb"
  },
  {
    "url": "tags/study-time/index.html",
    "revision": "b4a71e5e9fe041e502cadb6715f38622"
  },
  {
    "url": "tags/studying-smart/index.html",
    "revision": "33284928d6268b9634e3abbbc4f21de7"
  },
  {
    "url": "tags/stupid/index.html",
    "revision": "a830477e1b2d9c16896e4e76efd0ff88"
  },
  {
    "url": "tags/sublime-text-3/index.html",
    "revision": "2796770479a378bfbfb2957aea9a6f68"
  },
  {
    "url": "tags/subtree/index.html",
    "revision": "50c49607bc5bcd24dded0624be6d3858"
  },
  {
    "url": "tags/summer-bootcamp/index.html",
    "revision": "7d4860a05feab1b510fdc5ca8c75c405"
  },
  {
    "url": "tags/summer-program/index.html",
    "revision": "a17cd8c6d54200d1626d7e549d0c1e6e"
  },
  {
    "url": "tags/summer/index.html",
    "revision": "38f1ac337ace68404371ce3f426c6687"
  },
  {
    "url": "tags/super-shuttle/index.html",
    "revision": "efab3b9a66067e6203992d551fb61945"
  },
  {
    "url": "tags/super-smash-bros/index.html",
    "revision": "43ee1a692b3cd88459e31c7e99f36057"
  },
  {
    "url": "tags/superhero-js/index.html",
    "revision": "53e07e4ec07317ae5e7c5d3e5302b963"
  },
  {
    "url": "tags/support/index.html",
    "revision": "5738a5f0e49617bc0d805810711909a0"
  },
  {
    "url": "tags/surfing/index.html",
    "revision": "d2efde85258a2f91580c5a56759a22bc"
  },
  {
    "url": "tags/surgeon/index.html",
    "revision": "644e15ac212ca3ff46335e8c555626bf"
  },
  {
    "url": "tags/switch-up/index.html",
    "revision": "4b3a5e7cf89c291cad30b6222b9bd1d8"
  },
  {
    "url": "tags/switch/index.html",
    "revision": "7a053e419c128a2024a299066be79182"
  },
  {
    "url": "tags/switchup/index.html",
    "revision": "2fd59b9dd4d62a1ad969e76bd63080fd"
  },
  {
    "url": "tags/system/index.html",
    "revision": "fae1b188bf93004af75353fff474577f"
  },
  {
    "url": "tags/talkies/index.html",
    "revision": "2484498db44e324f07bae4b044ad4c34"
  },
  {
    "url": "tags/tallwood/index.html",
    "revision": "d77592a741fc5bb2b906d7601f055e84"
  },
  {
    "url": "tags/tanzania/index.html",
    "revision": "3513296e6e76890b8083fdb1cc2a8e2b"
  },
  {
    "url": "tags/tapia/index.html",
    "revision": "a2cf91bca665918a078aab0bbebcd3ad"
  },
  {
    "url": "tags/tech-cocktail/index.html",
    "revision": "01445bc9aab733e64d32ebd28f919b70"
  },
  {
    "url": "tags/tech-companies/index.html",
    "revision": "774e94b61813b4c177f653a25e3f8684"
  },
  {
    "url": "tags/tech-conference/index.html",
    "revision": "7ef290f0b562799631ea1583689e097b"
  },
  {
    "url": "tags/tech-diversity/index.html",
    "revision": "e456f13698a8127a4c4c5ab3b5119a39"
  },
  {
    "url": "tags/tech-talk/index.html",
    "revision": "f05eb720e9b00fe381174f56d35f2df4"
  },
  {
    "url": "tags/techendo/index.html",
    "revision": "ebd0c52dba1145631b7deb5fca1f0506"
  },
  {
    "url": "tags/technical-challenge/index.html",
    "revision": "58b8a945b8bc169520981a281021480d"
  },
  {
    "url": "tags/technical-interview/index.html",
    "revision": "e3ea02f5ef63e1f8578655095341270e"
  },
  {
    "url": "tags/technical-questions/index.html",
    "revision": "ef0a2067a00715e0ed603a53bcfba227"
  },
  {
    "url": "tags/technological-dependence/index.html",
    "revision": "c1377e71da4f12b9f24ac2ce587c36c7"
  },
  {
    "url": "tags/technological-unemployment/index.html",
    "revision": "2e5b65ceccf5163b9722e17b9610b339"
  },
  {
    "url": "tags/technology/index.html",
    "revision": "47b75ea95ead80de7851b4c1e539b943"
  },
  {
    "url": "tags/template/index.html",
    "revision": "2390cb2a269e6e8c9e16cb4562e19065"
  },
  {
    "url": "tags/texas/index.html",
    "revision": "eba0665bf7fac1520b970fdda3cf40fa"
  },
  {
    "url": "tags/text-messaging/index.html",
    "revision": "390a576357025221fefd2425ace5122a"
  },
  {
    "url": "tags/the-grid/index.html",
    "revision": "dac9d9397fb190da87565d9afbafe939"
  },
  {
    "url": "tags/the-stocks/index.html",
    "revision": "f81f1f1c06ed63cd2fe1686b0a3889d1"
  },
  {
    "url": "tags/the-test/index.html",
    "revision": "00a15018a77a55d2b55c755fdfbbedae"
  },
  {
    "url": "tags/theology/index.html",
    "revision": "bb75bf1cb5cd629e7052f481e2b0331d"
  },
  {
    "url": "tags/thinkful/index.html",
    "revision": "73803a85d64b3242a9253c4af8b88613"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "ebe044998adb888fe7214cbc278e4d3b"
  },
  {
    "url": "tags/tim-burton/index.html",
    "revision": "0d6c96a7f4f8a79d3f67527bb1ac544e"
  },
  {
    "url": "tags/timber/index.html",
    "revision": "9b125d59b674ae97c9175b67a03bc3b1"
  },
  {
    "url": "tags/time-management/index.html",
    "revision": "e688a09d80ea513af44d21b0dc9a6aaa"
  },
  {
    "url": "tags/time-measurements/index.html",
    "revision": "7aa016765b635f2ed370cc92cc349443"
  },
  {
    "url": "tags/time-travel/index.html",
    "revision": "bb93686e0b2409f5385c6ecdf63165a3"
  },
  {
    "url": "tags/time/index.html",
    "revision": "011fb525b93e37edd71c4a5d08b4f5eb"
  },
  {
    "url": "tags/tips-and-tricks/index.html",
    "revision": "3830989dd02157d76e25429ef5903684"
  },
  {
    "url": "tags/tips/index.html",
    "revision": "ef80bc426fbb69dd23fb598d0b2760db"
  },
  {
    "url": "tags/tncc/index.html",
    "revision": "0d17ae0f29818be9c2829298b41955fa"
  },
  {
    "url": "tags/todo-app-laravel/index.html",
    "revision": "d12a7bdd08d0edb5b1282fdca493b29f"
  },
  {
    "url": "tags/todo-app/index.html",
    "revision": "13d79b1607a841bc023ae0c9c82711a1"
  },
  {
    "url": "tags/todo/index.html",
    "revision": "e9388cd46669d2fc0c42458a136446a8"
  },
  {
    "url": "tags/tom-hanks/index.html",
    "revision": "f96c1fb814401f3eb1443e710034daa0"
  },
  {
    "url": "tags/toolbar/index.html",
    "revision": "69c67ca0590ce3667986efcd6a8978bb"
  },
  {
    "url": "tags/topcoder/index.html",
    "revision": "896188ba86e308c15cadceb40a0fb83a"
  },
  {
    "url": "tags/toronto/index.html",
    "revision": "f28cc698bb0d469bdf5027bebe5b87e0"
  },
  {
    "url": "tags/tortuga/index.html",
    "revision": "f9c59c7441261f03a4c8b0a41c332e57"
  },
  {
    "url": "tags/towers-of-hanoi/index.html",
    "revision": "413b7b1d48240956f97a95530ee74e51"
  },
  {
    "url": "tags/trampoline/index.html",
    "revision": "f1eed37b6f03230a899a4a96aeecd6d2"
  },
  {
    "url": "tags/transplant/index.html",
    "revision": "cd802f3d14b66710100a587fa8f8fdc7"
  },
  {
    "url": "tags/transportation/index.html",
    "revision": "e60ebd97fcb39ae6216fdd71598bfb3a"
  },
  {
    "url": "tags/traumatized/index.html",
    "revision": "6608b945a8dad92fe1946e5f19a39d47"
  },
  {
    "url": "tags/travel/index.html",
    "revision": "c4c0cae3c96de4c844414cb0668687f1"
  },
  {
    "url": "tags/traversal/index.html",
    "revision": "3af9eca4fee287f557fa9ca200d66c0c"
  },
  {
    "url": "tags/travis-ci/index.html",
    "revision": "4bf818f642f4aa95d48ae876ae8402fb"
  },
  {
    "url": "tags/tree/index.html",
    "revision": "d64a7465f105ddc2776b6228007819ff"
  },
  {
    "url": "tags/treehouse/index.html",
    "revision": "74522a62442c187a0014584b9a21a7e9"
  },
  {
    "url": "tags/trial-and-death/index.html",
    "revision": "10c7dd4e573bf6bd7421337a0c4bef09"
  },
  {
    "url": "tags/tricks/index.html",
    "revision": "35ece6e37594c83256d7e5bbe23b683d"
  },
  {
    "url": "tags/trip-planner/index.html",
    "revision": "e0ac43228997f17fbde25d633f8afad2"
  },
  {
    "url": "tags/tristan-walker/index.html",
    "revision": "14b627a146e39fe25f13f8ab49cdc21a"
  },
  {
    "url": "tags/tristan/index.html",
    "revision": "91afa293ed0e838fd391993a535228cb"
  },
  {
    "url": "tags/tron-legacy/index.html",
    "revision": "af8b42c52725fdb55c2991c96f7e5733"
  },
  {
    "url": "tags/tuition-price/index.html",
    "revision": "c68c6c91fb6542f1161adc1297ef216e"
  },
  {
    "url": "tags/tumblr/index.html",
    "revision": "eb0354724438edbb507c1e2596c0900c"
  },
  {
    "url": "tags/tutorial/index.html",
    "revision": "64f814a6346ec28ef715d26ab15c4a4b"
  },
  {
    "url": "tags/tv-shows/index.html",
    "revision": "5ecd1458a12e272bb9b6bf3e718dc26f"
  },
  {
    "url": "tags/tweet/index.html",
    "revision": "a83bf17962d691b461bb828389251e0a"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "667f70b2998e58e41cd97b117ef34519"
  },
  {
    "url": "tags/typeform/index.html",
    "revision": "057d4ccf7aad4b41eaea67afa0ac40a7"
  },
  {
    "url": "tags/typing.io/index.html",
    "revision": "0fdc0af19b3b40f8568cfe26f00c6e93"
  },
  {
    "url": "tags/typography/index.html",
    "revision": "748e8ec109c5d704da323d9534d22d51"
  },
  {
    "url": "tags/u/index.html",
    "revision": "b0b22351061e8698b26f1f05d339fe2d"
  },
  {
    "url": "tags/ubersicht/index.html",
    "revision": "e1f928dbc185b97476ebc74f4ac848ce"
  },
  {
    "url": "tags/ui-design/index.html",
    "revision": "5bbe46b43b96427a3b1a7bbd3e450f0a"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "a4eac5014358a4d9873ff7788404d2f7"
  },
  {
    "url": "tags/ui/ux/index.html",
    "revision": "e732a6e477e26bdf268b53b0a183f8cd"
  },
  {
    "url": "tags/ulyssess/index.html",
    "revision": "bee51a7d7b0cb8284d4bdbf72ace7cc4"
  },
  {
    "url": "tags/unarmed/index.html",
    "revision": "7b09a71907b898f3036f5d6364457d97"
  },
  {
    "url": "tags/unbaptized/index.html",
    "revision": "4800f79683e34a27eff46e0846fdaf98"
  },
  {
    "url": "tags/undergrad/index.html",
    "revision": "de1677b7ddc53bd4dd7165f8b0727dd2"
  },
  {
    "url": "tags/undergraduate-conference/index.html",
    "revision": "cc24e15e8760b9e8647b220929a71c06"
  },
  {
    "url": "tags/underscore/index.html",
    "revision": "915daf6f651f1867acc87682a4560cd0"
  },
  {
    "url": "tags/unforeseen-destiny/index.html",
    "revision": "da5498b1cf7ef2047545391f3bcd3fc6"
  },
  {
    "url": "tags/union-city/index.html",
    "revision": "4bb7a7749acdb6c1acae949e022b3014"
  },
  {
    "url": "tags/universe/index.html",
    "revision": "658f7a790e5e9c4baebb46301347bf16"
  },
  {
    "url": "tags/uno/index.html",
    "revision": "de7aadce9bad6e0570f06cbd35e84057"
  },
  {
    "url": "tags/unsplash/index.html",
    "revision": "08cf0fe6dce7500337a422567d27bb74"
  },
  {
    "url": "tags/ut-austin/index.html",
    "revision": "8a31d7dbccb8d29cdb6de0d54d80e6f4"
  },
  {
    "url": "tags/ux/index.html",
    "revision": "c6ebd2a7318c86a8f5ca8d6cb3b74dc4"
  },
  {
    "url": "tags/va-acm/index.html",
    "revision": "9dbe1185f1fdbf8ef224de493d7086ff"
  },
  {
    "url": "tags/va-governor-schools/index.html",
    "revision": "d19eeb1c4b089beedf97872b10823158"
  },
  {
    "url": "tags/variables/index.html",
    "revision": "4de3e8e15b9a1f4ad27f4afd5a53d35d"
  },
  {
    "url": "tags/vccs/index.html",
    "revision": "9a3138484cc07049ab8e287b3ced6cff"
  },
  {
    "url": "tags/vegan-candy/index.html",
    "revision": "62efaba53045fc5e4ab62f02f8210bec"
  },
  {
    "url": "tags/vegan/index.html",
    "revision": "93c888e2ccecb406670774ede8520bed"
  },
  {
    "url": "tags/vegetarian/index.html",
    "revision": "5c0d5cf91c6844ca648ac4bc94433be7"
  },
  {
    "url": "tags/venmo/index.html",
    "revision": "6234c5f20f2b6fa133ee14af52af971e"
  },
  {
    "url": "tags/very-nice-sites/index.html",
    "revision": "10fafecd0a72406d4a6700f06bfd5912"
  },
  {
    "url": "tags/victoria/index.html",
    "revision": "c0fbbb52e842a112b60265650af6eba4"
  },
  {
    "url": "tags/video-games/index.html",
    "revision": "a876b17c15b5cde7194627a13c67918c"
  },
  {
    "url": "tags/video/index.html",
    "revision": "d29f9357e5a09ee1b04a5abe0443f024"
  },
  {
    "url": "tags/videogames/index.html",
    "revision": "ec27e02252434f1c7dec012a4216c2ba"
  },
  {
    "url": "tags/vimeo/index.html",
    "revision": "2acc631b913549db53641f4e5f3fcace"
  },
  {
    "url": "tags/virginia-beach/index.html",
    "revision": "ce48e8ce589559e0b99ffb1f11ec40aa"
  },
  {
    "url": "tags/virginia/index.html",
    "revision": "35d6ca65c197776fc91972bd89eb8240"
  },
  {
    "url": "tags/visual-hierarchy/index.html",
    "revision": "1d64476b256dca259c91414651ab9fee"
  },
  {
    "url": "tags/walk/index.html",
    "revision": "87c2e3914bed416a709d3a2aa9d74d50"
  },
  {
    "url": "tags/walking-dead/index.html",
    "revision": "99f184a11e84385fe72be35c804ed4bd"
  },
  {
    "url": "tags/walkthroughs/index.html",
    "revision": "69f67a4831ab567573c24d04539fa0f7"
  },
  {
    "url": "tags/war/index.html",
    "revision": "cd2f2ab8763936a556d6cc0c0277c046"
  },
  {
    "url": "tags/wary-of-friends/index.html",
    "revision": "26efa40b9b699f1f203336a1bc8c8e31"
  },
  {
    "url": "tags/waves-of-tech/index.html",
    "revision": "c1fc846693919519629d304ec1a561e8"
  },
  {
    "url": "tags/wayne/index.html",
    "revision": "01c5b57ba6edc5ddc6f66a1a33f86579"
  },
  {
    "url": "tags/weaknesses/index.html",
    "revision": "e663c8b3a641dd1690154cde69b7658d"
  },
  {
    "url": "tags/weather/index.html",
    "revision": "6077976cc481aea2e9905f6674c7d2ea"
  },
  {
    "url": "tags/web-crawler/index.html",
    "revision": "9c7ca67c9a7db6b3af36ce0eae1f9dc7"
  },
  {
    "url": "tags/web-design-talk/index.html",
    "revision": "ee3eb6d2cd111065aaedfdd695310e5d"
  },
  {
    "url": "tags/web-design/index.html",
    "revision": "af1c1955743521fbcdbf588b3a16cbbd"
  },
  {
    "url": "tags/web-dev/index.html",
    "revision": "d0d6f5486b81be4de7e247d44d7f62d3"
  },
  {
    "url": "tags/web-development-bootcamp/index.html",
    "revision": "29415300ac95d9fd28752d7f4614152e"
  },
  {
    "url": "tags/web-development-hawaii/index.html",
    "revision": "4a165a756fe56b58a22c270160f219dc"
  },
  {
    "url": "tags/web-development/index.html",
    "revision": "7572b8c6b9b6b5ab9f5d179571be9c00"
  },
  {
    "url": "tags/web-store/index.html",
    "revision": "07a8d510040eb08f8ae3847cbf43a118"
  },
  {
    "url": "tags/websites/index.html",
    "revision": "250c47f1cfd4203a39eb25ce23eb8691"
  },
  {
    "url": "tags/week-2/index.html",
    "revision": "4be04663515592686d611b1ad3cd07b8"
  },
  {
    "url": "tags/week-3/index.html",
    "revision": "8312b290eab9e7dfb9f7ef11e287921e"
  },
  {
    "url": "tags/week-4/index.html",
    "revision": "865ac56d39fe9272fb60ec9d056b63ce"
  },
  {
    "url": "tags/week-6/index.html",
    "revision": "c315a9111286cdd9824d2efb7fcd7773"
  },
  {
    "url": "tags/westin-copley/index.html",
    "revision": "67d7867a94c948ae1d81265a7bb99afa"
  },
  {
    "url": "tags/whales/index.html",
    "revision": "c295a62a3e9f389010f3ae5063be8403"
  },
  {
    "url": "tags/what-i-use/index.html",
    "revision": "9889ab1043841fc8a1c30e427174171b"
  },
  {
    "url": "tags/whiteboard/index.html",
    "revision": "b5efd63102a98ff07d72c673418226f6"
  },
  {
    "url": "tags/wii-sports/index.html",
    "revision": "b10d2cc17b7821dfb8b16bcd7e6b06f3"
  },
  {
    "url": "tags/wii/index.html",
    "revision": "23c7aed9da19764070a8a85c311cd4de"
  },
  {
    "url": "tags/wikistack/index.html",
    "revision": "d269324ad443475f3d371f26b397f743"
  },
  {
    "url": "tags/wiles.dk/index.html",
    "revision": "a9f0ae6dbf5d3a1650a37da0f10f8337"
  },
  {
    "url": "tags/wilson/index.html",
    "revision": "067e70972ad5713495c743d4a196c960"
  },
  {
    "url": "tags/winter-conference/index.html",
    "revision": "82492f435315dc67ca08c6eccf6358dd"
  },
  {
    "url": "tags/winter-storm/index.html",
    "revision": "4a96b923c98de9ea3119e9a70afdb012"
  },
  {
    "url": "tags/wish-list/index.html",
    "revision": "6c59dc0e1e3320c6eae61642b009c815"
  },
  {
    "url": "tags/witchcraft/index.html",
    "revision": "8efe2570786c9eca38bf706f3c5ab4c4"
  },
  {
    "url": "tags/women-who-code/index.html",
    "revision": "3a9b7f7f926154972dbc3bc70f17f0c1"
  },
  {
    "url": "tags/word/index.html",
    "revision": "a22e9e2173a1e6c6ebad01b1d5eeeafa"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "9369f542781f0f3d6beed721253520e6"
  },
  {
    "url": "tags/work-routines/index.html",
    "revision": "969431214a0b760f1edb0eeefe96dcfb"
  },
  {
    "url": "tags/work/index.html",
    "revision": "08ca8b7e67ba2bbca8dd2fccc536b3f9"
  },
  {
    "url": "tags/workforce/index.html",
    "revision": "cc157350353424884332469ac405945b"
  },
  {
    "url": "tags/working-harder/index.html",
    "revision": "44963966e0532271e13486c9f9f356e0"
  },
  {
    "url": "tags/working-smarter/index.html",
    "revision": "a0080f5269f5acaa4899aab2850d430b"
  },
  {
    "url": "tags/wrath/index.html",
    "revision": "2bf4b20081b655348b185b086155f948"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "a6fc6751b24cc0030ceee8cd061cac89"
  },
  {
    "url": "tags/yelp/index.html",
    "revision": "8d267071fc7c997241d3b7cecb98e55e"
  },
  {
    "url": "tags/yeti/index.html",
    "revision": "95d134fce9eaac093ba7318f6c6d3420"
  },
  {
    "url": "tags/yield-rate/index.html",
    "revision": "ceaa1c381af00617476b8c2ffd355c8c"
  },
  {
    "url": "tags/yoink/index.html",
    "revision": "94ebc4a7982a08868bebcbb5ade9486b"
  },
  {
    "url": "tags/yosemite-launchpad-reset/index.html",
    "revision": "234ca40b406bd39779154cbd7ff1b344"
  },
  {
    "url": "tags/yosemite-launchpad/index.html",
    "revision": "8e4a88380d7e7890776f0107d6e48de4"
  },
  {
    "url": "tags/yosemite/index.html",
    "revision": "2ecf21270afe9ce45b76393a6ba8baf2"
  },
  {
    "url": "tags/youtube-dl/index.html",
    "revision": "464a4f5fa07a72ba2690d4d520446ca3"
  },
  {
    "url": "tags/youtube/index.html",
    "revision": "c34030f85e29e9a978124d0d46298bb1"
  },
  {
    "url": "tags/yvaine/index.html",
    "revision": "cec294cede066cd49dc6afebe508b023"
  },
  {
    "url": "tags/zeta/index.html",
    "revision": "580aa47ee370ad44216b01a6a4fc8979"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
