importScripts("https://fvcproductions.com/workbox-sw.prod.v2.1.2.js");

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
    url: "2008/06/01/middle-school-poems-️/index.html",
    revision: "1703198b0e7931852d643b1e24a1fa3f"
  },
  {
    url: "2009/09/22/ghent-school/index.html",
    revision: "4245a26055d45c75409bd12740ce960c"
  },
  {
    url: "2009/12/10/in-christophers-footsteps-️/index.html",
    revision: "90d8312bc0771e01ecd83f3c9509aa52"
  },
  {
    url: "2010/05/12/desiring-the-casual-/index.html",
    revision: "1242dea2a40183f429e1e88bb2e663c5"
  },
  {
    url: "2010/08/03/enders-game---book-review-/index.html",
    revision: "bb5c25fbb670aa2aab9dbb0a7757509c"
  },
  {
    url: "2010/08/13/tidewater-community-college---summer-2010/index.html",
    revision: "1154241488b6fd0b7b77f58ed5ec18e4"
  },
  {
    url: "2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    revision: "e344619283c7b74d853535a88ac777b9"
  },
  {
    url: "2011/08/07/isce-2011/index.html",
    revision: "f3e2bdd1f584368324de7cb08172ff52"
  },
  {
    url: "2011/08/12/hampton-university---summer-2011/index.html",
    revision: "3273e32e9cec87af349e790a07a8a4c1"
  },
  {
    url: "2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    revision: "05f8ac2619ebaaf4002e3b24f0d605d9"
  },
  {
    url: "2012/01/14/operation-smile-mission-training-workshop/index.html",
    revision: "3a1000724c6bcf1af7bde57fece0b389"
  },
  {
    url: "2012/02/06/ap-spanish-language-skit-️/index.html",
    revision: "ccfff89554c3ee5d7168a923c11a6e40"
  },
  {
    url: "2012/03/01/stardust---book-review-/index.html",
    revision: "4a5b08b848d6dd8d03ccc3507aa4ea37"
  },
  {
    url: "2012/06/18/operation-smile---medical-mission/index.html",
    revision: "0d43ff972806343e65d193cb8caf15e5"
  },
  {
    url: "2012/07/30/my-time-in-tanzania-/index.html",
    revision: "450cb06d7be44fccba0d3af07107e201"
  },
  {
    url: "2012/08/10/odu-vmasc/index.html",
    revision: "8a8e54e68f721004208dab40c1c40d36"
  },
  {
    url: "2012/08/14/school-for-field-studies/index.html",
    revision: "a628a95f3756e89cd2116f53d5492b2b"
  },
  {
    url: "2013/06/06/pursuit-of-knowledge/index.html",
    revision: "2aedcdd1ffb17014413ea35ad525ef4a"
  },
  {
    url: "2013/06/13/maury-high-school/index.html",
    revision: "ceeb6f1ecda7113220e460c2c6193f17"
  },
  {
    url: "2013/07/28/c---bits---clothing-sizes-/index.html",
    revision: "5c00d56f54d4e0f501fe8c31b0c9dccd"
  },
  {
    url: "2013/07/28/c---bits---solid-geometry-/index.html",
    revision: "fa96a30e3ba845b8b2f9781414f591b4"
  },
  {
    url: "2013/07/28/c---bits---time-measurements-/index.html",
    revision: "df5d562c72f772c18cf9bca7ec1b2ad1"
  },
  {
    url: "2013/07/29/robopocalypse---book-review-️/index.html",
    revision: "35b8c98b06dfa903a0e95f09a8e7b5b7"
  },
  {
    url: "2013/07/29/the-davinci-code---book-review-️/index.html",
    revision: "4fb85a0256966ef9af179653cdcf4b23"
  },
  {
    url: "2013/07/30/c---bits---array-manipulation-️/index.html",
    revision: "a2c58f85e0d06437a9d4b4a78d447272"
  },
  {
    url: "2013/08/02/islc-2013/index.html",
    revision: "2849752b2ce2fcb2786997bad2a97595"
  },
  {
    url: "2013/08/02/operation-smile---maury-high-school/index.html",
    revision: "d510fb17659ee403967e19e101105bea"
  },
  {
    url: "2013/08/03/potc---chest-riddle-/index.html",
    revision: "ddc181b00e0acc85e8905fd73dd7e9e0"
  },
  {
    url: "2013/08/03/potc---parchment-riddle-/index.html",
    revision: "f966246ef6cbf0a0c52f944538119728"
  },
  {
    url: "2013/08/16/tidewater-community-college---summer-2013/index.html",
    revision: "d9fa1bcd671d2ad42c31d90c5cb810a5"
  },
  {
    url: "2013/09/14/my-cups-of-tea---2013-/index.html",
    revision: "c964544e37f76477e36f2e0423332dc4"
  },
  {
    url: "2013/09/20/c-bits---getting-started/index.html",
    revision: "fa5948b9e6154b624c6b6304725dca05"
  },
  {
    url: "2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    revision: "9feb72ea45144d014e8764dd7b3d3607"
  },
  {
    url: "2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    revision: "9d7a05e4c39cbc2aa1dd0264ecdd14ae"
  },
  {
    url: "2014/01/05/preparing-for-coding-bootcamps/index.html",
    revision: "80795f06e08186568723af151204cadc"
  },
  {
    url: "2014/01/30/the-best-20-pick-up-lines/index.html",
    revision: "e6ab9b2bac9bff285d57b2219b602ef1"
  },
  {
    url: "2014/02/21/nothing-to-envy---book-review/index.html",
    revision: "cabce0ec860ce0b71d65251e13d8bc3e"
  },
  {
    url: "2014/02/21/working-smarter-not-harder/index.html",
    revision: "2e0e1a35b1a6d470606d71e33b1bfac5"
  },
  {
    url: "2014/03/03/a-few-java-factoids---part-1/index.html",
    revision: "5b68c746c688b75790f750bfa24b34ee"
  },
  {
    url: "2014/03/03/ah-life./index.html",
    revision: "962fcd3ffc3972420707ecdf6bf5e85c"
  },
  {
    url: "2014/03/03/granny-said.../index.html",
    revision: "eba09770175e1f58529c53a8e204bd30"
  },
  {
    url: "2014/03/04/the-best-50-insults/index.html",
    revision: "c888a4ecbdbae8a7699161acb8044bcc"
  },
  {
    url: "2014/03/12/20-laws-of-power/index.html",
    revision: "f0b31f42bb1cb5d5912d64a9ab84a012"
  },
  {
    url: "2014/03/12/interview-with-bitmaker-labs/index.html",
    revision: "283656642bb90cd3696d3de1a4eed9bc"
  },
  {
    url: "2014/03/12/java-bits---getting-started/index.html",
    revision: "0cca5534a592360d81260184d67f72bd"
  },
  {
    url: "2014/03/12/python-bits---getting-started/index.html",
    revision: "8673d1cfabcfe35dea3d2d789220f6db"
  },
  {
    url: "2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    revision: "b0f147aa054db2666a5983da7d33621c"
  },
  {
    url: "2014/04/07/texting-while-driving/index.html",
    revision: "6c3d922d219c871f6274ed8987059983"
  },
  {
    url: "2014/05/02/a-review-of-dont-starve/index.html",
    revision: "0c06be5ec761670c34b2b4a43e72d274"
  },
  {
    url: "2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    revision: "e223d059d77e1630abba354ca743dd1a"
  },
  {
    url: "2014/05/12/speech---robotics-in-the-workforce/index.html",
    revision: "8550fa9df72723968ac8897efa708694"
  },
  {
    url: "2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    revision: "aa67729f09ae0369b3fa37411441d890"
  },
  {
    url: "2014/08/08/the-day-after-calculus-ended/index.html",
    revision: "347f552e11d042ee4471ec06e28c569c"
  },
  {
    url: "2014/08/09/flavours-themes/index.html",
    revision: "16a3aca4d8a83092fbc4dade6f77ad3d"
  },
  {
    url: "2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    revision: "b39f56b0a85c533f4c75ba012f2e6f94"
  },
  {
    url: "2014/08/15/hampton-university---summer-2014/index.html",
    revision: "7f937629097b630e68789a34bb270daf"
  },
  {
    url: "2014/08/15/old-dominion-university---summer-2014/index.html",
    revision: "020bba0fb37fee34c3301b6299cdcb70"
  },
  {
    url: "2014/08/16/stars-celebration/index.html",
    revision: "60454fa88d39dd9258618b22df15b43d"
  },
  {
    url: "2014/08/21/a.i.-international/index.html",
    revision: "ec1152b7d5686693e75130a073b88244"
  },
  {
    url: "2014/09/10/giving-back/index.html",
    revision: "86c1b1fa0ad425c98541976ef180c1ca"
  },
  {
    url: "2014/09/14/mba--mscs-grad-programs/index.html",
    revision: "faa298961bd9ead9dd79c09951678ff9"
  },
  {
    url: "2014/09/14/undergrad-a.i.-internships/index.html",
    revision: "e60093c34975e9f16710d20717796bd0"
  },
  {
    url: "2014/09/22/review---limbo/index.html",
    revision: "229b12fce6d18b61ca9c0339cd113285"
  },
  {
    url: "2014/10/01/cshu/index.html",
    revision: "03983de72b0a61755cd7fb533d01800a"
  },
  {
    url: "2014/10/17/job-interview---tips-and-tricks/index.html",
    revision: "d1af8b2f83e80600930f6a8c3e472613"
  },
  {
    url: "2014/10/17/long-lighthearted-lists/index.html",
    revision: "118963e1aee0596f3b1c904e72ae14aa"
  },
  {
    url: "2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    revision: "28539ebbd5a9707193cfd53f25f4f731"
  },
  {
    url: "2014/10/26/dc-hack/index.html",
    revision: "18a9fe784668949d7f1458d8b1edc950"
  },
  {
    url: "2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    revision: "dbce93e6077b04ce738bdcaefd84c64b"
  },
  {
    url: "2014/11/10/study-guide---linked-lists/index.html",
    revision: "55ae8a80a35f2ed2ff0f00fac23be216"
  },
  {
    url: "2014/11/13/yes-hair-/index.html",
    revision: "71f0d957641866dd9fea5de2cebfd5a5"
  },
  {
    url: "2014/12/03/binary-trees--recursion/index.html",
    revision: "6dfa43191744854524300d5da29b3b5c"
  },
  {
    url: "2014/12/17/inkling-1.1/index.html",
    revision: "1053e74e535b682bcc48f70dce55f325"
  },
  {
    url: "2014/12/20/50-lines-for-50-crimes/index.html",
    revision: "8d76e6d2443a8d2d78baab2a1c318a90"
  },
  {
    url: "2014/12/23/finding-coding-bootcamps/index.html",
    revision: "f0d03f4031fd4345f8e21ede20889d41"
  },
  {
    url: "2014/12/23/first-meetup-first-impressions/index.html",
    revision: "d1f04be61ba2c9f8becbff57244b2760"
  },
  {
    url: "2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    revision: "acadc1842980c0409cbe2d50b3eabc24"
  },
  {
    url: "2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    revision: "d4d14a5721f4344ebfed8a2fed09d23a"
  },
  {
    url: "2014/12/28/bootcamp.me---google-map-/index.html",
    revision: "7f0ee05840ebc152024fb5a521555ee0"
  },
  {
    url: "2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    revision: "83021bba7345fadd7ecf718cf4485dc8"
  },
  {
    url: "2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    revision: "9a6eecc2473a1bf4cc4ec42767f2847b"
  },
  {
    url: "2014/12/29/interview-with-hack-reactor/index.html",
    revision: "6c93ef9f0c92da4880267c791d682ce6"
  },
  {
    url: "2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    revision: "743909001e23b78ef120e5fca0e5a4e4"
  },
  {
    url: "2015/01/06/interview-with-coding-dojo/index.html",
    revision: "6e00b9d8b37b2418527aa221b0746d1e"
  },
  {
    url: "2015/01/06/interview-with-coding-house/index.html",
    revision: "25f3ad571c5f4ce1a1473bf07b3b0ef6"
  },
  {
    url: "2015/01/06/interview-with-designation/index.html",
    revision: "eff364683063a7aac286b49af18d26f8"
  },
  {
    url: "2015/01/06/interview-with-devleague/index.html",
    revision: "86e187e1ff973b6251ed768e88f6f3a8"
  },
  {
    url: "2015/01/14/interview-with-makersquare/index.html",
    revision: "e0534821b5b966d5722aadfd2b7f467d"
  },
  {
    url: "2015/01/30/aaai-2015/index.html",
    revision: "e1569740fcb61699d19a98ce6f20ae64"
  },
  {
    url: "2015/01/30/adventures-with-aaai/index.html",
    revision: "afa7a4520ccddb2774342f91bc529328"
  },
  {
    url: "2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    revision: "1fe53e3602f7d28f9fc15271ddce3588"
  },
  {
    url: "2015/02/11/cataloging-my-itunes-music/index.html",
    revision: "6c6dcfeb52ab0887b8ad1739d8f38a1a"
  },
  {
    url: "2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    revision: "1d51af78559c397022e361c43d209b47"
  },
  {
    url: "2015/02/15/peter-weyland-at-ted2023/index.html",
    revision: "a87ac3819e9e9d67a0f3121cd4a116b6"
  },
  {
    url: "2015/02/15/that-tapia-conference/index.html",
    revision: "0ad55684dc354274d558534315bed6b9"
  },
  {
    url: "2015/02/21/tapia-2015/index.html",
    revision: "97e2fe9252ca4498e012f495229c8fd4"
  },
  {
    url: "2015/03/01/jeopardy-template-/index.html",
    revision: "671744c7bd1e7125c391ef759ab3ea78"
  },
  {
    url: "2015/03/12/an-intro-for-cs-majors-/index.html",
    revision: "669a941008fd5b236352c19b86820897"
  },
  {
    url: "2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    revision: "5df0f54c4d6fe68567b672f63e17df6d"
  },
  {
    url: "2015/03/28/my-top-3-productivity-apps-/index.html",
    revision: "b1275bb0049d1278638e726e8147f4bc"
  },
  {
    url: "2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    revision: "df1700abd1d22a0aa12d6672472a0ee1"
  },
  {
    url: "2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    revision: "d4e99081a3d55eb91f77ea244e04dc82"
  },
  {
    url: "2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    revision: "b67046c28c34b4157a04d7296cafbfbb"
  },
  {
    url: "2015/04/13/what-to-do-what-to-do-week--8/index.html",
    revision: "fb78870dd47a99197a4c5d90ee353c72"
  },
  {
    url: "2015/04/17/vsgc-2015/index.html",
    revision: "d33edb9668b03e258c82952239242e7b"
  },
  {
    url: "2015/04/18/sort-detective---solution-/index.html",
    revision: "8639397db5870337b1b8867a147de7c0"
  },
  {
    url: "2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    revision: "f1c70fed263708927d67535bcc29c87b"
  },
  {
    url: "2015/04/23/a.i.-movies-/index.html",
    revision: "c5f4e46843822826bb4213e6b92c617d"
  },
  {
    url: "2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    revision: "002bfce05a68081fe21a5936239f430a"
  },
  {
    url: "2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    revision: "91383b61712178b7fcd498c65dcef71f"
  },
  {
    url: "2015/04/30/bebop.me-/index.html",
    revision: "843312342d104bdd2dcad14094d50a2a"
  },
  {
    url: "2015/05/17/ameot-/index.html",
    revision: "cc2ffcda3597cb37fde303df51b6cfbd"
  },
  {
    url: "2015/05/17/fullstack-foundations---week-1/index.html",
    revision: "626de957fe6707e81ead415acb6c97cd"
  },
  {
    url: "2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    revision: "aef56419cfd1843bf56874c966c8a9fe"
  },
  {
    url: "2015/05/20/then-what-shall-we-code-for-/index.html",
    revision: "813b020145c06608dacff1c97f7b131f"
  },
  {
    url: "2015/05/26/the-guessing-game-️/index.html",
    revision: "f3fe736199c17b7ff06f982c4cc6261f"
  },
  {
    url: "2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    revision: "1014f902f6bc4d1d0ab7e8394892d109"
  },
  {
    url: "2015/06/13/first-week-at-fullstack-academy-/index.html",
    revision: "66f77f8b4898b92ea6816309558ee171"
  },
  {
    url: "2015/06/20/fullstack-academy---week-2-/index.html",
    revision: "2bb7c1a076ded28fd88e1bf88122a364"
  },
  {
    url: "2015/06/26/fullstack-academy---week-3-/index.html",
    revision: "5653d10297502862466726e050b1f81f"
  },
  {
    url: "2015/07/03/fullstack-academy---week-4-/index.html",
    revision: "bbf07f68813d541aae092bb1245dbcc8"
  },
  {
    url: "2015/07/11/fullstack-academy---week-5/index.html",
    revision: "13987d12b277fcb63d63d93d929f97d9"
  },
  {
    url: "2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    revision: "49e069bb1cae1155790cf865d8c96356"
  },
  {
    url: "2015/07/25/sally-conference/index.html",
    revision: "bfd8f75e7e90293031ac91d673218f40"
  },
  {
    url: "2015/08/05/robopocalypse-/index.html",
    revision: "de34d9cc54efbd118ea7c6beed48c14c"
  },
  {
    url: "2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    revision: "f966968b985ffaea684d2c420d13b3a8"
  },
  {
    url: "2015/08/11/rankme-/index.html",
    revision: "1453f3a149430f34dea0e9b242370a3a"
  },
  {
    url: "2015/08/19/one-week-of-fullstack-left-/index.html",
    revision: "c5e1abe3ff790a55d1f6c7c2f8598616"
  },
  {
    url: "2015/08/20/readme-template-for-github-/index.html",
    revision: "46e389ea087ffff383466b15befdbea5"
  },
  {
    url: "2015/08/26/hiredot-/index.html",
    revision: "bc13d1cc9e9a522da158e51837e366a2"
  },
  {
    url: "2015/08/30/fullstack-academy---reflections-/index.html",
    revision: "f9c9ea9e49e7a738a10770aa026f8494"
  },
  {
    url: "2015/09/25/discover-goldman-sachs/index.html",
    revision: "783e4c0b3595fb05f5a9a6b2c6fd51df"
  },
  {
    url: "2015/10/09/designlab-submissions-/index.html",
    revision: "0a36ad00aa741250a4529add506f35b9"
  },
  {
    url: "2015/10/09/designlab/index.html",
    revision: "aae00355dce613e5097972362c3ff100"
  },
  {
    url: "2015/10/20/andre-smith/index.html",
    revision: "93f91baf5fcd8c3c9d1fa3a0aa794154"
  },
  {
    url: "2015/10/21/my-designlab-experience-/index.html",
    revision: "7b505bf607b99a54d8a39202d19ba1fe"
  },
  {
    url: "2015/10/24/hack-the-vote-/index.html",
    revision: "c67af7d4645126200868886f8370e5fb"
  },
  {
    url: "2015/10/24/hack-to-help-hampton-roads/index.html",
    revision: "5bbb12d44f1ee79919757ad6c39ff7e8"
  },
  {
    url: "2015/11/11/meetups-nearby-/index.html",
    revision: "157a6d39b0f780ebba93be1357b657f6"
  },
  {
    url: "2015/11/13/hr-devfest---web-design-talk-️/index.html",
    revision: "511750eac42f5f8a19c1dbb79952ca3a"
  },
  {
    url: "2015/11/14/hr-devfest/index.html",
    revision: "09575637ed4181b63c8d24827fadc0ac"
  },
  {
    url: "2015/11/15/aaai/index.html",
    revision: "f5a6780aa391a54cd99a7f748e8bbb46"
  },
  {
    url: "2015/11/15/stars-computing-corps/index.html",
    revision: "e787d8cea53183d1b2868c24e4faccd0"
  },
  {
    url: "2015/11/20/discover-accenture/index.html",
    revision: "892a365e9c6b325b2e879e82ad10d8be"
  },
  {
    url: "2015/12/02/dear-holberton-/index.html",
    revision: "8a5fb97629388765a8ee4a49595bf0b9"
  },
  {
    url: "2015/12/07/hour-of-code-2015-️/index.html",
    revision: "54ef73cac732297751f21fa85b246ac1"
  },
  {
    url: "2015/12/10/ai-choo-ashe/index.html",
    revision: "f8141fef82b618c1daea2f614653cf04"
  },
  {
    url: "2015/12/12/kelli-white/index.html",
    revision: "a2372f43b333ffefe150e47e725e0e00"
  },
  {
    url: "2015/12/13/hour-of-code/index.html",
    revision: "8d2486607fee1580398a2db4075b9ffb"
  },
  {
    url: "2015/12/18/alex-bradshaw/index.html",
    revision: "092e4af569f22ecb63350bcb6b43be26"
  },
  {
    url: "2016/01/04/new-epoch-new-exploits-/index.html",
    revision: "0b403fa631924effa289797bb0e499c5"
  },
  {
    url: "2016/01/04/va-acm-slack-invites-/index.html",
    revision: "81720dfc62368a6f936fb0bd5f428d14"
  },
  {
    url: "2016/01/05/kimberly-logsdon/index.html",
    revision: "deed0b0e861c886cbb4fc52cbee019b0"
  },
  {
    url: "2016/01/11/meetup-dice-/index.html",
    revision: "b7f8d4d2d6b74b72d1fc0a3b7df4f676"
  },
  {
    url: "2016/01/12/mapme---coding-bootcamps-/index.html",
    revision: "a3b5ddb6c1b423ade0250a73cc7bb727"
  },
  {
    url: "2016/01/18/built-in-norfolk/index.html",
    revision: "3996fb3bff2a4fc3f552c14537d06e21"
  },
  {
    url: "2016/01/18/norfolk.js-meetup/index.html",
    revision: "d34a7760f4aedb478f1b894479cc0e22"
  },
  {
    url: "2016/01/31/hoya-hacks/index.html",
    revision: "be647ae63e459cfd97992d81a9695003"
  },
  {
    url: "2016/01/31/life-at-home-/index.html",
    revision: "5564f6d8a095165f58fc1943f4547cb0"
  },
  {
    url: "2016/01/31/monarchs-hack-the-campus-/index.html",
    revision: "ae3dfdb6ebdbc81767a08ffa794cf446"
  },
  {
    url: "2016/02/05/8020-software-consulting/index.html",
    revision: "9c43bd9bb2a684ae4a96e29184365073"
  },
  {
    url: "2016/02/05/capital-region-women-in-computing-conference/index.html",
    revision: "713d4e6aba1198edfd336d6bf1896efc"
  },
  {
    url: "2016/02/05/hacku-4/index.html",
    revision: "bed61179f95ec5c49694458655da9274"
  },
  {
    url: "2016/02/12/acm/index.html",
    revision: "b19d5c901639c81ab8f98db883d0b234"
  },
  {
    url: "2016/02/14/treehacks/index.html",
    revision: "412b644ff8d20c30961f22f3f41e019e"
  },
  {
    url: "2016/02/17/developerweek/index.html",
    revision: "cf5a509902761e5c7796e35416bd2c78"
  },
  {
    url: "2016/02/23/react.js-conf/index.html",
    revision: "4e83bcad8e748e1b927302693e753f18"
  },
  {
    url: "2016/02/27/binding-of-isaac---review-/index.html",
    revision: "d8371cf840b09c06054dd89a4ff03509"
  },
  {
    url: "2016/02/28/monarchs-hack-the-campus/index.html",
    revision: "3c95b1135e483e03ae72f07e7097df69"
  },
  {
    url: "2016/03/10/fluent-conference/index.html",
    revision: "f0669fcbb869dca215e4ea54ba01cbd0"
  },
  {
    url: "2016/03/31/all-the-bootcamp-things-/index.html",
    revision: "39d1ebccc8ca367e6fe94cb53e397c2e"
  },
  {
    url: "2016/04/01/angel-riera/index.html",
    revision: "f6972b252c977ea0b028f54b6f05cf18"
  },
  {
    url: "2016/04/07/mike-jonas/index.html",
    revision: "409bb8e380982a370aef3cbaf89641f4"
  },
  {
    url: "2016/04/09/innovation-hackathon/index.html",
    revision: "5b02881a35e10093df7908e264abb8ec"
  },
  {
    url: "2016/04/11/vsgc-student-research-conference/index.html",
    revision: "e469c2dd41e10b982d13ca00f1be514d"
  },
  {
    url: "2016/04/30/schools-out-️/index.html",
    revision: "cd164cc937ae5009fd2b4bac7a4ddc96"
  },
  {
    url: "2016/05/04/hampton-university/index.html",
    revision: "fdd7221efd19519b77a4ce002d212ee0"
  },
  {
    url: "2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    revision: "d634eaf2ba5d9a8152dfe943faf3632b"
  },
  {
    url: "2016/05/13/revolutionconf/index.html",
    revision: "655c499fc1d4f25e619abdff084db583"
  },
  {
    url: "2016/05/24/pak-chu/index.html",
    revision: "a71e8bedfc96f24f418e981ff9dc34e2"
  },
  {
    url: "2016/05/25/free-code-camp/index.html",
    revision: "22534235d22c71b58d9d09f0ef502823"
  },
  {
    url: "2016/06/06/wen-tran/index.html",
    revision: "2707c70d9d73f576d3c3b3ed9a4b864d"
  },
  {
    url: "2016/06/17/accenture-all-hands-conference/index.html",
    revision: "c136d781c0c67b347f1d2c18ff56a7e8"
  },
  {
    url: "2016/06/29/accenture-slc/index.html",
    revision: "a65f037eaa832593ffe9f4e5a6a453ed"
  },
  {
    url: "2016/07/30/npmcamp/index.html",
    revision: "b2b374301c72e9a987315ac8567d0390"
  },
  {
    url: "2016/08/01/lavie-ruan/index.html",
    revision: "d73e325777d27243e06d97f905aa3501"
  },
  {
    url: "2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    revision: "955c88589f1afbdd74d4359d015a7b93"
  },
  {
    url: "2016/08/26/fullstack-academy/index.html",
    revision: "0a16f8725ed55183d4418efca9aa608d"
  },
  {
    url: "2016/08/26/fvcproductions---updated-logo-/index.html",
    revision: "32ae0c45ed8486e108fa321442a3f85d"
  },
  {
    url: "2016/09/16/tapia-2016/index.html",
    revision: "b4a007d257cef2382e7620990e763039"
  },
  {
    url: "2016/09/27/github-repos---mashup-/index.html",
    revision: "0c709f7741608509abcb8360936f836b"
  },
  {
    url: "2016/10/01/designhackathon/index.html",
    revision: "1968e2959ba4868e7d1dffbd72465eca"
  },
  {
    url: "2016/10/01/the-meggs-case-/index.html",
    revision: "798dfabe8bcf19337c217e627266cbe8"
  },
  {
    url: "2016/10/04/cornell-tech-logos-/index.html",
    revision: "4304402531b4c73f51cf5b734c05e53d"
  },
  {
    url: "2016/10/09/jake-the-dog-key-hand-/index.html",
    revision: "f3c92edd2ca79537d47a47fa283fbba5"
  },
  {
    url: "2016/10/09/kent-hack-enough/index.html",
    revision: "2d6fbdd7803fc4bb73c63d3c8515ec36"
  },
  {
    url: "2016/10/12/mamabear-launch-plan-/index.html",
    revision: "30d2ce7d5543bc2ef7a28f27913ee9c6"
  },
  {
    url: "2016/10/13/techweek-nyc/index.html",
    revision: "7672c9be15d5fb4528941b96bcb0c492"
  },
  {
    url: "2016/10/18/duolingo-anagram-checker-/index.html",
    revision: "2b8eafe180baa7e7caa6134ce8ca9769"
  },
  {
    url: "2016/11/18/product-studio-/index.html",
    revision: "762b5ff98cdf592a8d28afee971bc9fc"
  },
  {
    url: "2016/11/30/witny/index.html",
    revision: "063f774680e1f22bcace5c3660cb99bd"
  },
  {
    url: "2016/12/01/duolingo-delights-/index.html",
    revision: "d22acaa7bf91a5f3653818b76efd5dc9"
  },
  {
    url: "2016/12/01/fullstack-academy-ambassador/index.html",
    revision: "4e882cceaac3c4bceb094cbee47663cf"
  },
  {
    url: "2016/12/08/hour-of-code/index.html",
    revision: "db46db7bd99b52cef85234593b538dda"
  },
  {
    url: "2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    revision: "b755f6e8d6df75b720bbe84c9bfdbb78"
  },
  {
    url: "2016/12/10/alterconf-nyc-/index.html",
    revision: "b6b76bdd975ff1e08b53ab4490dd4d40"
  },
  {
    url: "2016/12/11/alterconf-nyc/index.html",
    revision: "3f7ca7347b205e63d299af8b13db9878"
  },
  {
    url: "2016/12/15/open-studio-poster---cornell-tech-/index.html",
    revision: "368f68b588c2c5487e6ed46dd701340c"
  },
  {
    url: "2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    revision: "575e13a48607f844bc01f6f21bbd45fe"
  },
  {
    url: "2016/12/17/norfolk.js/index.html",
    revision: "601beb39f1c5e38a397032b9a754c175"
  },
  {
    url: "2016/12/17/product-school/index.html",
    revision: "dc063d8a9d2635ab4ce62f328e4f473d"
  },
  {
    url: "2017/01/07/updated-github-page-/index.html",
    revision: "d88cc0173e6c600578a5718cfddb44e8"
  },
  {
    url: "2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    revision: "347d38c1b7074f9a4c27799b0374cc92"
  },
  {
    url: "2017/01/13/simple-to-do-app-in-laravel-/index.html",
    revision: "75ecfbfa823a8e485461d8c6e63f72e6"
  },
  {
    url: "2017/01/21/huge-school-application-2017/index.html",
    revision: "691e3db4d4fa4ae8fffff24e53f41845"
  },
  {
    url: "2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    revision: "ad89fe88be0932315667224865d00496"
  },
  {
    url: "2017/01/29/another-spreadsheet-app-️️/index.html",
    revision: "9f4295e3a6e07d81582a8b751c26bf9c"
  },
  {
    url: "2017/01/30/cute-things-we-do-/index.html",
    revision: "0256058511955e50ff522376c3cf4ea3"
  },
  {
    url: "2017/02/01/franklin-lee/index.html",
    revision: "8f7a6a9ec9dd591cc549ae3a9f7c6bf3"
  },
  {
    url: "2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    revision: "92cdad52f098ac4512d4c716240df6df"
  },
  {
    url: "2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    revision: "0d6b009f61ce6ff7b85fdee20381482e"
  },
  {
    url: "2017/02/19/hackysu-2017/index.html",
    revision: "d28576a46837722e3eacaedac0c8e5f0"
  },
  {
    url: "2017/02/24/startup-studio/index.html",
    revision: "9e204498595163e32179b652295ca91f"
  },
  {
    url: "2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    revision: "a99aa4c319f120acfc25aad51475ff32"
  },
  {
    url: "2017/03/09/finalist---hackny-fellowship-program/index.html",
    revision: "7e5a41eec3c0bb3cc8063458da47b1fc"
  },
  {
    url: "2017/03/14/connective-media/index.html",
    revision: "b51aed47301ad590ac521ded28274056"
  },
  {
    url: "2017/03/15/accepted-to-design-inc./index.html",
    revision: "21b5b00f5b01fa1b9d60bfaa22a53cb2"
  },
  {
    url: "2017/03/15/fullstack-academy---alumni-panel/index.html",
    revision: "8e4733de9c26a262d9b5cba247abc75a"
  },
  {
    url: "2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    revision: "0232819149b680f1e77ad6f11a9f0c12"
  },
  {
    url: "2017/03/17/apprenticeships-/index.html",
    revision: "f59bd4bd84d1869e1796f180b8657b36"
  },
  {
    url: "2017/03/23/finalist---huge-experience-design-school/index.html",
    revision: "0f9a42aa761403e1203b8754450beb98"
  },
  {
    url: "2017/03/29/finalist---pennapps-fellows-program/index.html",
    revision: "e96e9710967705b29cfdd0c9ec21457b"
  },
  {
    url: "2017/04/14/pathfinder/index.html",
    revision: "ad08f65bcc245ef63da8b56fea6d3c13"
  },
  {
    url: "2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    revision: "64d2d50cef4ddb1d395f19582a152f92"
  },
  {
    url: "2017/04/30/codenow/index.html",
    revision: "b4f506e0fd3e72e6a64364e66bd8da64"
  },
  {
    url: "2017/05/10/fullstack-academy---ambassador/index.html",
    revision: "a33435d0ae9d25c9941ffb691cec8f00"
  },
  {
    url: "2017/05/11/project-alloy---grant-recipient/index.html",
    revision: "d4db3e4bc5b58159c83c80da35245b86"
  },
  {
    url: "2017/05/26/cornell-tech/index.html",
    revision: "3c887bd98b8659eb38c0718da368b59c"
  },
  {
    url: "2017/06/07/accenture-liquid-studio/index.html",
    revision: "2ed22379904f97142b3f966571550707"
  },
  {
    url: "2017/06/16/team-monarch/index.html",
    revision: "d169b6d6d9f67b1031f0bc3d80e4e973"
  },
  {
    url: "2017/06/30/amazon-alexa-hackathon/index.html",
    revision: "7d06c8f36152e4d7426ba40705ba0756"
  },
  {
    url: "2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    revision: "9e3731da5d21b125b1556bc3882e4593"
  },
  {
    url: "2017/08/28/new-blog-new-problems-/index.html",
    revision: "7bacd60adf6baaf75eecfed497e3b0e1"
  },
  {
    url: "2017/09/16/affect-conf/index.html",
    revision: "237aca81e793f94242206d787e8a5171"
  },
  {
    url: "2017/09/27/strange-loop-2017/index.html",
    revision: "9f9f643515ca3a7f9809002bbb40f391"
  },
  {
    url: "2017/10/22/pwa-roadshow/index.html",
    revision: "84a3893c9d04a236862925bda630380b"
  },
  {
    url: "2017/12/02/announcing-my-new-medium-blog-/index.html",
    revision: "692e1bf1bee9c3a299f5bfa0d490e164"
  },
  {
    url: "404.html",
    revision: "5ed4715f54b3933bf55bec0b8df86c78"
  },
  {
    url: "about/colophon/index.html",
    revision: "0f5dc84274c804b5efaf14f88287f61a"
  },
  {
    url: "about/github-repo/index.html",
    revision: "bc1a57c898d7db339064beed2d2a1051"
  },
  {
    url: "about/index.html",
    revision: "8d97755c8ffc27ec2d56ecf5c052cc5c"
  },
  {
    url: "about/resume/index.html",
    revision: "34ed4af59673bc76c8e7b9500981be68"
  },
  {
    url: "about/travels/index.html",
    revision: "124f0c0b10a67f074e37e584919163aa"
  },
  {
    url: "about/what-i-use/index.html",
    revision: "bada9f459172a5bba19ff02f1825d043"
  },
  {
    url: "adventures/index.html",
    revision: "b246544937c5b0fa6b0a375be6438fd5"
  },
  {
    url: "amp/2008/06/01/middle-school-poems-️/index.html",
    revision: "1703198b0e7931852d643b1e24a1fa3f"
  },
  {
    url: "amp/2009/09/22/ghent-school/index.html",
    revision: "4245a26055d45c75409bd12740ce960c"
  },
  {
    url: "amp/2009/12/10/in-christophers-footsteps-️/index.html",
    revision: "90d8312bc0771e01ecd83f3c9509aa52"
  },
  {
    url: "amp/2010/05/12/desiring-the-casual-/index.html",
    revision: "1242dea2a40183f429e1e88bb2e663c5"
  },
  {
    url: "amp/2010/08/03/enders-game---book-review-/index.html",
    revision: "bb5c25fbb670aa2aab9dbb0a7757509c"
  },
  {
    url: "amp/2010/08/13/tidewater-community-college---summer-2010/index.html",
    revision: "1154241488b6fd0b7b77f58ed5ec18e4"
  },
  {
    url: "amp/2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    revision: "e344619283c7b74d853535a88ac777b9"
  },
  {
    url: "amp/2011/08/07/isce-2011/index.html",
    revision: "f3e2bdd1f584368324de7cb08172ff52"
  },
  {
    url: "amp/2011/08/12/hampton-university---summer-2011/index.html",
    revision: "3273e32e9cec87af349e790a07a8a4c1"
  },
  {
    url: "amp/2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    revision: "05f8ac2619ebaaf4002e3b24f0d605d9"
  },
  {
    url: "amp/2012/01/14/operation-smile-mission-training-workshop/index.html",
    revision: "3a1000724c6bcf1af7bde57fece0b389"
  },
  {
    url: "amp/2012/02/06/ap-spanish-language-skit-️/index.html",
    revision: "ccfff89554c3ee5d7168a923c11a6e40"
  },
  {
    url: "amp/2012/03/01/stardust---book-review-/index.html",
    revision: "4a5b08b848d6dd8d03ccc3507aa4ea37"
  },
  {
    url: "amp/2012/06/18/operation-smile---medical-mission/index.html",
    revision: "0d43ff972806343e65d193cb8caf15e5"
  },
  {
    url: "amp/2012/07/30/my-time-in-tanzania-/index.html",
    revision: "450cb06d7be44fccba0d3af07107e201"
  },
  {
    url: "amp/2012/08/10/odu-vmasc/index.html",
    revision: "8a8e54e68f721004208dab40c1c40d36"
  },
  {
    url: "amp/2012/08/14/school-for-field-studies/index.html",
    revision: "a628a95f3756e89cd2116f53d5492b2b"
  },
  {
    url: "amp/2013/06/06/pursuit-of-knowledge/index.html",
    revision: "2aedcdd1ffb17014413ea35ad525ef4a"
  },
  {
    url: "amp/2013/06/13/maury-high-school/index.html",
    revision: "ceeb6f1ecda7113220e460c2c6193f17"
  },
  {
    url: "amp/2013/07/28/c---bits---clothing-sizes-/index.html",
    revision: "5c00d56f54d4e0f501fe8c31b0c9dccd"
  },
  {
    url: "amp/2013/07/28/c---bits---solid-geometry-/index.html",
    revision: "fa96a30e3ba845b8b2f9781414f591b4"
  },
  {
    url: "amp/2013/07/28/c---bits---time-measurements-/index.html",
    revision: "df5d562c72f772c18cf9bca7ec1b2ad1"
  },
  {
    url: "amp/2013/07/29/robopocalypse---book-review-️/index.html",
    revision: "35b8c98b06dfa903a0e95f09a8e7b5b7"
  },
  {
    url: "amp/2013/07/29/the-davinci-code---book-review-️/index.html",
    revision: "4fb85a0256966ef9af179653cdcf4b23"
  },
  {
    url: "amp/2013/07/30/c---bits---array-manipulation-️/index.html",
    revision: "a2c58f85e0d06437a9d4b4a78d447272"
  },
  {
    url: "amp/2013/08/02/islc-2013/index.html",
    revision: "2849752b2ce2fcb2786997bad2a97595"
  },
  {
    url: "amp/2013/08/02/operation-smile---maury-high-school/index.html",
    revision: "d510fb17659ee403967e19e101105bea"
  },
  {
    url: "amp/2013/08/03/potc---chest-riddle-/index.html",
    revision: "ddc181b00e0acc85e8905fd73dd7e9e0"
  },
  {
    url: "amp/2013/08/03/potc---parchment-riddle-/index.html",
    revision: "f966246ef6cbf0a0c52f944538119728"
  },
  {
    url: "amp/2013/08/16/tidewater-community-college---summer-2013/index.html",
    revision: "d9fa1bcd671d2ad42c31d90c5cb810a5"
  },
  {
    url: "amp/2013/09/14/my-cups-of-tea---2013-/index.html",
    revision: "c964544e37f76477e36f2e0423332dc4"
  },
  {
    url: "amp/2013/09/20/c-bits---getting-started/index.html",
    revision: "fa5948b9e6154b624c6b6304725dca05"
  },
  {
    url: "amp/2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    revision: "9feb72ea45144d014e8764dd7b3d3607"
  },
  {
    url: "amp/2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    revision: "9d7a05e4c39cbc2aa1dd0264ecdd14ae"
  },
  {
    url: "amp/2014/01/05/preparing-for-coding-bootcamps/index.html",
    revision: "80795f06e08186568723af151204cadc"
  },
  {
    url: "amp/2014/01/30/the-best-20-pick-up-lines/index.html",
    revision: "e6ab9b2bac9bff285d57b2219b602ef1"
  },
  {
    url: "amp/2014/02/21/nothing-to-envy---book-review/index.html",
    revision: "cabce0ec860ce0b71d65251e13d8bc3e"
  },
  {
    url: "amp/2014/02/21/working-smarter-not-harder/index.html",
    revision: "2e0e1a35b1a6d470606d71e33b1bfac5"
  },
  {
    url: "amp/2014/03/03/a-few-java-factoids---part-1/index.html",
    revision: "5b68c746c688b75790f750bfa24b34ee"
  },
  {
    url: "amp/2014/03/03/ah-life./index.html",
    revision: "962fcd3ffc3972420707ecdf6bf5e85c"
  },
  {
    url: "amp/2014/03/03/granny-said.../index.html",
    revision: "eba09770175e1f58529c53a8e204bd30"
  },
  {
    url: "amp/2014/03/04/the-best-50-insults/index.html",
    revision: "c888a4ecbdbae8a7699161acb8044bcc"
  },
  {
    url: "amp/2014/03/12/20-laws-of-power/index.html",
    revision: "f0b31f42bb1cb5d5912d64a9ab84a012"
  },
  {
    url: "amp/2014/03/12/interview-with-bitmaker-labs/index.html",
    revision: "283656642bb90cd3696d3de1a4eed9bc"
  },
  {
    url: "amp/2014/03/12/java-bits---getting-started/index.html",
    revision: "0cca5534a592360d81260184d67f72bd"
  },
  {
    url: "amp/2014/03/12/python-bits---getting-started/index.html",
    revision: "8673d1cfabcfe35dea3d2d789220f6db"
  },
  {
    url: "amp/2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    revision: "b0f147aa054db2666a5983da7d33621c"
  },
  {
    url: "amp/2014/04/07/texting-while-driving/index.html",
    revision: "6c3d922d219c871f6274ed8987059983"
  },
  {
    url: "amp/2014/05/02/a-review-of-dont-starve/index.html",
    revision: "0c06be5ec761670c34b2b4a43e72d274"
  },
  {
    url: "amp/2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    revision: "e223d059d77e1630abba354ca743dd1a"
  },
  {
    url: "amp/2014/05/12/speech---robotics-in-the-workforce/index.html",
    revision: "8550fa9df72723968ac8897efa708694"
  },
  {
    url: "amp/2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    revision: "aa67729f09ae0369b3fa37411441d890"
  },
  {
    url: "amp/2014/08/08/the-day-after-calculus-ended/index.html",
    revision: "347f552e11d042ee4471ec06e28c569c"
  },
  {
    url: "amp/2014/08/09/flavours-themes/index.html",
    revision: "16a3aca4d8a83092fbc4dade6f77ad3d"
  },
  {
    url: "amp/2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    revision: "b39f56b0a85c533f4c75ba012f2e6f94"
  },
  {
    url: "amp/2014/08/15/hampton-university---summer-2014/index.html",
    revision: "7f937629097b630e68789a34bb270daf"
  },
  {
    url: "amp/2014/08/15/old-dominion-university---summer-2014/index.html",
    revision: "020bba0fb37fee34c3301b6299cdcb70"
  },
  {
    url: "amp/2014/08/16/stars-celebration/index.html",
    revision: "60454fa88d39dd9258618b22df15b43d"
  },
  {
    url: "amp/2014/08/21/a.i.-international/index.html",
    revision: "ec1152b7d5686693e75130a073b88244"
  },
  {
    url: "amp/2014/09/10/giving-back/index.html",
    revision: "86c1b1fa0ad425c98541976ef180c1ca"
  },
  {
    url: "amp/2014/09/14/mba--mscs-grad-programs/index.html",
    revision: "faa298961bd9ead9dd79c09951678ff9"
  },
  {
    url: "amp/2014/09/14/undergrad-a.i.-internships/index.html",
    revision: "e60093c34975e9f16710d20717796bd0"
  },
  {
    url: "amp/2014/09/22/review---limbo/index.html",
    revision: "229b12fce6d18b61ca9c0339cd113285"
  },
  {
    url: "amp/2014/10/01/cshu/index.html",
    revision: "03983de72b0a61755cd7fb533d01800a"
  },
  {
    url: "amp/2014/10/17/job-interview---tips-and-tricks/index.html",
    revision: "d1af8b2f83e80600930f6a8c3e472613"
  },
  {
    url: "amp/2014/10/17/long-lighthearted-lists/index.html",
    revision: "118963e1aee0596f3b1c904e72ae14aa"
  },
  {
    url: "amp/2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    revision: "28539ebbd5a9707193cfd53f25f4f731"
  },
  {
    url: "amp/2014/10/26/dc-hack/index.html",
    revision: "18a9fe784668949d7f1458d8b1edc950"
  },
  {
    url: "amp/2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    revision: "dbce93e6077b04ce738bdcaefd84c64b"
  },
  {
    url: "amp/2014/11/10/study-guide---linked-lists/index.html",
    revision: "55ae8a80a35f2ed2ff0f00fac23be216"
  },
  {
    url: "amp/2014/11/13/yes-hair-/index.html",
    revision: "71f0d957641866dd9fea5de2cebfd5a5"
  },
  {
    url: "amp/2014/12/03/binary-trees--recursion/index.html",
    revision: "6dfa43191744854524300d5da29b3b5c"
  },
  {
    url: "amp/2014/12/17/inkling-1.1/index.html",
    revision: "1053e74e535b682bcc48f70dce55f325"
  },
  {
    url: "amp/2014/12/20/50-lines-for-50-crimes/index.html",
    revision: "8d76e6d2443a8d2d78baab2a1c318a90"
  },
  {
    url: "amp/2014/12/23/finding-coding-bootcamps/index.html",
    revision: "f0d03f4031fd4345f8e21ede20889d41"
  },
  {
    url: "amp/2014/12/23/first-meetup-first-impressions/index.html",
    revision: "d1f04be61ba2c9f8becbff57244b2760"
  },
  {
    url: "amp/2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    revision: "acadc1842980c0409cbe2d50b3eabc24"
  },
  {
    url: "amp/2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    revision: "d4d14a5721f4344ebfed8a2fed09d23a"
  },
  {
    url: "amp/2014/12/28/bootcamp.me---google-map-/index.html",
    revision: "7f0ee05840ebc152024fb5a521555ee0"
  },
  {
    url: "amp/2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    revision: "83021bba7345fadd7ecf718cf4485dc8"
  },
  {
    url: "amp/2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    revision: "9a6eecc2473a1bf4cc4ec42767f2847b"
  },
  {
    url: "amp/2014/12/29/interview-with-hack-reactor/index.html",
    revision: "6c93ef9f0c92da4880267c791d682ce6"
  },
  {
    url: "amp/2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    revision: "743909001e23b78ef120e5fca0e5a4e4"
  },
  {
    url: "amp/2015/01/06/interview-with-coding-dojo/index.html",
    revision: "6e00b9d8b37b2418527aa221b0746d1e"
  },
  {
    url: "amp/2015/01/06/interview-with-coding-house/index.html",
    revision: "25f3ad571c5f4ce1a1473bf07b3b0ef6"
  },
  {
    url: "amp/2015/01/06/interview-with-designation/index.html",
    revision: "eff364683063a7aac286b49af18d26f8"
  },
  {
    url: "amp/2015/01/06/interview-with-devleague/index.html",
    revision: "86e187e1ff973b6251ed768e88f6f3a8"
  },
  {
    url: "amp/2015/01/14/interview-with-makersquare/index.html",
    revision: "e0534821b5b966d5722aadfd2b7f467d"
  },
  {
    url: "amp/2015/01/30/aaai-2015/index.html",
    revision: "e1569740fcb61699d19a98ce6f20ae64"
  },
  {
    url: "amp/2015/01/30/adventures-with-aaai/index.html",
    revision: "afa7a4520ccddb2774342f91bc529328"
  },
  {
    url: "amp/2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    revision: "1fe53e3602f7d28f9fc15271ddce3588"
  },
  {
    url: "amp/2015/02/11/cataloging-my-itunes-music/index.html",
    revision: "6c6dcfeb52ab0887b8ad1739d8f38a1a"
  },
  {
    url: "amp/2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    revision: "1d51af78559c397022e361c43d209b47"
  },
  {
    url: "amp/2015/02/15/peter-weyland-at-ted2023/index.html",
    revision: "a87ac3819e9e9d67a0f3121cd4a116b6"
  },
  {
    url: "amp/2015/02/15/that-tapia-conference/index.html",
    revision: "0ad55684dc354274d558534315bed6b9"
  },
  {
    url: "amp/2015/02/21/tapia-2015/index.html",
    revision: "97e2fe9252ca4498e012f495229c8fd4"
  },
  {
    url: "amp/2015/03/01/jeopardy-template-/index.html",
    revision: "671744c7bd1e7125c391ef759ab3ea78"
  },
  {
    url: "amp/2015/03/12/an-intro-for-cs-majors-/index.html",
    revision: "669a941008fd5b236352c19b86820897"
  },
  {
    url: "amp/2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    revision: "5df0f54c4d6fe68567b672f63e17df6d"
  },
  {
    url: "amp/2015/03/28/my-top-3-productivity-apps-/index.html",
    revision: "b1275bb0049d1278638e726e8147f4bc"
  },
  {
    url: "amp/2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    revision: "df1700abd1d22a0aa12d6672472a0ee1"
  },
  {
    url: "amp/2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    revision: "d4e99081a3d55eb91f77ea244e04dc82"
  },
  {
    url: "amp/2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    revision: "b67046c28c34b4157a04d7296cafbfbb"
  },
  {
    url: "amp/2015/04/13/what-to-do-what-to-do-week--8/index.html",
    revision: "fb78870dd47a99197a4c5d90ee353c72"
  },
  {
    url: "amp/2015/04/17/vsgc-2015/index.html",
    revision: "d33edb9668b03e258c82952239242e7b"
  },
  {
    url: "amp/2015/04/18/sort-detective---solution-/index.html",
    revision: "8639397db5870337b1b8867a147de7c0"
  },
  {
    url: "amp/2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    revision: "f1c70fed263708927d67535bcc29c87b"
  },
  {
    url: "amp/2015/04/23/a.i.-movies-/index.html",
    revision: "c5f4e46843822826bb4213e6b92c617d"
  },
  {
    url: "amp/2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    revision: "002bfce05a68081fe21a5936239f430a"
  },
  {
    url: "amp/2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    revision: "91383b61712178b7fcd498c65dcef71f"
  },
  {
    url: "amp/2015/04/30/bebop.me-/index.html",
    revision: "843312342d104bdd2dcad14094d50a2a"
  },
  {
    url: "amp/2015/05/17/ameot-/index.html",
    revision: "cc2ffcda3597cb37fde303df51b6cfbd"
  },
  {
    url: "amp/2015/05/17/fullstack-foundations---week-1/index.html",
    revision: "626de957fe6707e81ead415acb6c97cd"
  },
  {
    url: "amp/2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    revision: "aef56419cfd1843bf56874c966c8a9fe"
  },
  {
    url: "amp/2015/05/20/then-what-shall-we-code-for-/index.html",
    revision: "813b020145c06608dacff1c97f7b131f"
  },
  {
    url: "amp/2015/05/26/the-guessing-game-️/index.html",
    revision: "f3fe736199c17b7ff06f982c4cc6261f"
  },
  {
    url: "amp/2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    revision: "1014f902f6bc4d1d0ab7e8394892d109"
  },
  {
    url: "amp/2015/06/13/first-week-at-fullstack-academy-/index.html",
    revision: "66f77f8b4898b92ea6816309558ee171"
  },
  {
    url: "amp/2015/06/20/fullstack-academy---week-2-/index.html",
    revision: "2bb7c1a076ded28fd88e1bf88122a364"
  },
  {
    url: "amp/2015/06/26/fullstack-academy---week-3-/index.html",
    revision: "5653d10297502862466726e050b1f81f"
  },
  {
    url: "amp/2015/07/03/fullstack-academy---week-4-/index.html",
    revision: "bbf07f68813d541aae092bb1245dbcc8"
  },
  {
    url: "amp/2015/07/11/fullstack-academy---week-5/index.html",
    revision: "13987d12b277fcb63d63d93d929f97d9"
  },
  {
    url: "amp/2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    revision: "49e069bb1cae1155790cf865d8c96356"
  },
  {
    url: "amp/2015/07/25/sally-conference/index.html",
    revision: "bfd8f75e7e90293031ac91d673218f40"
  },
  {
    url: "amp/2015/08/05/robopocalypse-/index.html",
    revision: "de34d9cc54efbd118ea7c6beed48c14c"
  },
  {
    url: "amp/2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    revision: "f966968b985ffaea684d2c420d13b3a8"
  },
  {
    url: "amp/2015/08/11/rankme-/index.html",
    revision: "1453f3a149430f34dea0e9b242370a3a"
  },
  {
    url: "amp/2015/08/19/one-week-of-fullstack-left-/index.html",
    revision: "c5e1abe3ff790a55d1f6c7c2f8598616"
  },
  {
    url: "amp/2015/08/20/readme-template-for-github-/index.html",
    revision: "46e389ea087ffff383466b15befdbea5"
  },
  {
    url: "amp/2015/08/26/hiredot-/index.html",
    revision: "bc13d1cc9e9a522da158e51837e366a2"
  },
  {
    url: "amp/2015/08/30/fullstack-academy---reflections-/index.html",
    revision: "f9c9ea9e49e7a738a10770aa026f8494"
  },
  {
    url: "amp/2015/09/25/discover-goldman-sachs/index.html",
    revision: "783e4c0b3595fb05f5a9a6b2c6fd51df"
  },
  {
    url: "amp/2015/10/09/designlab-submissions-/index.html",
    revision: "0a36ad00aa741250a4529add506f35b9"
  },
  {
    url: "amp/2015/10/09/designlab/index.html",
    revision: "aae00355dce613e5097972362c3ff100"
  },
  {
    url: "amp/2015/10/20/andre-smith/index.html",
    revision: "93f91baf5fcd8c3c9d1fa3a0aa794154"
  },
  {
    url: "amp/2015/10/21/my-designlab-experience-/index.html",
    revision: "7b505bf607b99a54d8a39202d19ba1fe"
  },
  {
    url: "amp/2015/10/24/hack-the-vote-/index.html",
    revision: "c67af7d4645126200868886f8370e5fb"
  },
  {
    url: "amp/2015/10/24/hack-to-help-hampton-roads/index.html",
    revision: "5bbb12d44f1ee79919757ad6c39ff7e8"
  },
  {
    url: "amp/2015/11/11/meetups-nearby-/index.html",
    revision: "157a6d39b0f780ebba93be1357b657f6"
  },
  {
    url: "amp/2015/11/13/hr-devfest---web-design-talk-️/index.html",
    revision: "511750eac42f5f8a19c1dbb79952ca3a"
  },
  {
    url: "amp/2015/11/14/hr-devfest/index.html",
    revision: "09575637ed4181b63c8d24827fadc0ac"
  },
  {
    url: "amp/2015/11/15/aaai/index.html",
    revision: "f5a6780aa391a54cd99a7f748e8bbb46"
  },
  {
    url: "amp/2015/11/15/stars-computing-corps/index.html",
    revision: "e787d8cea53183d1b2868c24e4faccd0"
  },
  {
    url: "amp/2015/11/20/discover-accenture/index.html",
    revision: "892a365e9c6b325b2e879e82ad10d8be"
  },
  {
    url: "amp/2015/12/02/dear-holberton-/index.html",
    revision: "8a5fb97629388765a8ee4a49595bf0b9"
  },
  {
    url: "amp/2015/12/07/hour-of-code-2015-️/index.html",
    revision: "54ef73cac732297751f21fa85b246ac1"
  },
  {
    url: "amp/2015/12/10/ai-choo-ashe/index.html",
    revision: "f8141fef82b618c1daea2f614653cf04"
  },
  {
    url: "amp/2015/12/12/kelli-white/index.html",
    revision: "a2372f43b333ffefe150e47e725e0e00"
  },
  {
    url: "amp/2015/12/13/hour-of-code/index.html",
    revision: "8d2486607fee1580398a2db4075b9ffb"
  },
  {
    url: "amp/2015/12/18/alex-bradshaw/index.html",
    revision: "092e4af569f22ecb63350bcb6b43be26"
  },
  {
    url: "amp/2016/01/04/new-epoch-new-exploits-/index.html",
    revision: "0b403fa631924effa289797bb0e499c5"
  },
  {
    url: "amp/2016/01/04/va-acm-slack-invites-/index.html",
    revision: "81720dfc62368a6f936fb0bd5f428d14"
  },
  {
    url: "amp/2016/01/05/kimberly-logsdon/index.html",
    revision: "deed0b0e861c886cbb4fc52cbee019b0"
  },
  {
    url: "amp/2016/01/11/meetup-dice-/index.html",
    revision: "b7f8d4d2d6b74b72d1fc0a3b7df4f676"
  },
  {
    url: "amp/2016/01/12/mapme---coding-bootcamps-/index.html",
    revision: "a3b5ddb6c1b423ade0250a73cc7bb727"
  },
  {
    url: "amp/2016/01/18/built-in-norfolk/index.html",
    revision: "3996fb3bff2a4fc3f552c14537d06e21"
  },
  {
    url: "amp/2016/01/18/norfolk.js-meetup/index.html",
    revision: "d34a7760f4aedb478f1b894479cc0e22"
  },
  {
    url: "amp/2016/01/31/hoya-hacks/index.html",
    revision: "be647ae63e459cfd97992d81a9695003"
  },
  {
    url: "amp/2016/01/31/life-at-home-/index.html",
    revision: "5564f6d8a095165f58fc1943f4547cb0"
  },
  {
    url: "amp/2016/01/31/monarchs-hack-the-campus-/index.html",
    revision: "ae3dfdb6ebdbc81767a08ffa794cf446"
  },
  {
    url: "amp/2016/02/05/8020-software-consulting/index.html",
    revision: "9c43bd9bb2a684ae4a96e29184365073"
  },
  {
    url: "amp/2016/02/05/capital-region-women-in-computing-conference/index.html",
    revision: "713d4e6aba1198edfd336d6bf1896efc"
  },
  {
    url: "amp/2016/02/05/hacku-4/index.html",
    revision: "bed61179f95ec5c49694458655da9274"
  },
  {
    url: "amp/2016/02/12/acm/index.html",
    revision: "b19d5c901639c81ab8f98db883d0b234"
  },
  {
    url: "amp/2016/02/14/treehacks/index.html",
    revision: "412b644ff8d20c30961f22f3f41e019e"
  },
  {
    url: "amp/2016/02/17/developerweek/index.html",
    revision: "cf5a509902761e5c7796e35416bd2c78"
  },
  {
    url: "amp/2016/02/23/react.js-conf/index.html",
    revision: "4e83bcad8e748e1b927302693e753f18"
  },
  {
    url: "amp/2016/02/27/binding-of-isaac---review-/index.html",
    revision: "d8371cf840b09c06054dd89a4ff03509"
  },
  {
    url: "amp/2016/02/28/monarchs-hack-the-campus/index.html",
    revision: "3c95b1135e483e03ae72f07e7097df69"
  },
  {
    url: "amp/2016/03/10/fluent-conference/index.html",
    revision: "f0669fcbb869dca215e4ea54ba01cbd0"
  },
  {
    url: "amp/2016/03/31/all-the-bootcamp-things-/index.html",
    revision: "39d1ebccc8ca367e6fe94cb53e397c2e"
  },
  {
    url: "amp/2016/04/01/angel-riera/index.html",
    revision: "f6972b252c977ea0b028f54b6f05cf18"
  },
  {
    url: "amp/2016/04/07/mike-jonas/index.html",
    revision: "409bb8e380982a370aef3cbaf89641f4"
  },
  {
    url: "amp/2016/04/09/innovation-hackathon/index.html",
    revision: "5b02881a35e10093df7908e264abb8ec"
  },
  {
    url: "amp/2016/04/11/vsgc-student-research-conference/index.html",
    revision: "e469c2dd41e10b982d13ca00f1be514d"
  },
  {
    url: "amp/2016/04/30/schools-out-️/index.html",
    revision: "cd164cc937ae5009fd2b4bac7a4ddc96"
  },
  {
    url: "amp/2016/05/04/hampton-university/index.html",
    revision: "fdd7221efd19519b77a4ce002d212ee0"
  },
  {
    url: "amp/2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    revision: "d634eaf2ba5d9a8152dfe943faf3632b"
  },
  {
    url: "amp/2016/05/13/revolutionconf/index.html",
    revision: "655c499fc1d4f25e619abdff084db583"
  },
  {
    url: "amp/2016/05/24/pak-chu/index.html",
    revision: "a71e8bedfc96f24f418e981ff9dc34e2"
  },
  {
    url: "amp/2016/05/25/free-code-camp/index.html",
    revision: "22534235d22c71b58d9d09f0ef502823"
  },
  {
    url: "amp/2016/06/06/wen-tran/index.html",
    revision: "2707c70d9d73f576d3c3b3ed9a4b864d"
  },
  {
    url: "amp/2016/06/17/accenture-all-hands-conference/index.html",
    revision: "c136d781c0c67b347f1d2c18ff56a7e8"
  },
  {
    url: "amp/2016/06/29/accenture-slc/index.html",
    revision: "a65f037eaa832593ffe9f4e5a6a453ed"
  },
  {
    url: "amp/2016/07/30/npmcamp/index.html",
    revision: "b2b374301c72e9a987315ac8567d0390"
  },
  {
    url: "amp/2016/08/01/lavie-ruan/index.html",
    revision: "d73e325777d27243e06d97f905aa3501"
  },
  {
    url: "amp/2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    revision: "955c88589f1afbdd74d4359d015a7b93"
  },
  {
    url: "amp/2016/08/26/fullstack-academy/index.html",
    revision: "0a16f8725ed55183d4418efca9aa608d"
  },
  {
    url: "amp/2016/08/26/fvcproductions---updated-logo-/index.html",
    revision: "32ae0c45ed8486e108fa321442a3f85d"
  },
  {
    url: "amp/2016/09/16/tapia-2016/index.html",
    revision: "b4a007d257cef2382e7620990e763039"
  },
  {
    url: "amp/2016/09/27/github-repos---mashup-/index.html",
    revision: "0c709f7741608509abcb8360936f836b"
  },
  {
    url: "amp/2016/10/01/designhackathon/index.html",
    revision: "1968e2959ba4868e7d1dffbd72465eca"
  },
  {
    url: "amp/2016/10/01/the-meggs-case-/index.html",
    revision: "798dfabe8bcf19337c217e627266cbe8"
  },
  {
    url: "amp/2016/10/04/cornell-tech-logos-/index.html",
    revision: "4304402531b4c73f51cf5b734c05e53d"
  },
  {
    url: "amp/2016/10/09/jake-the-dog-key-hand-/index.html",
    revision: "f3c92edd2ca79537d47a47fa283fbba5"
  },
  {
    url: "amp/2016/10/09/kent-hack-enough/index.html",
    revision: "2d6fbdd7803fc4bb73c63d3c8515ec36"
  },
  {
    url: "amp/2016/10/12/mamabear-launch-plan-/index.html",
    revision: "30d2ce7d5543bc2ef7a28f27913ee9c6"
  },
  {
    url: "amp/2016/10/13/techweek-nyc/index.html",
    revision: "7672c9be15d5fb4528941b96bcb0c492"
  },
  {
    url: "amp/2016/10/18/duolingo-anagram-checker-/index.html",
    revision: "2b8eafe180baa7e7caa6134ce8ca9769"
  },
  {
    url: "amp/2016/11/18/product-studio-/index.html",
    revision: "762b5ff98cdf592a8d28afee971bc9fc"
  },
  {
    url: "amp/2016/11/30/witny/index.html",
    revision: "063f774680e1f22bcace5c3660cb99bd"
  },
  {
    url: "amp/2016/12/01/duolingo-delights-/index.html",
    revision: "d22acaa7bf91a5f3653818b76efd5dc9"
  },
  {
    url: "amp/2016/12/01/fullstack-academy-ambassador/index.html",
    revision: "4e882cceaac3c4bceb094cbee47663cf"
  },
  {
    url: "amp/2016/12/08/hour-of-code/index.html",
    revision: "db46db7bd99b52cef85234593b538dda"
  },
  {
    url: "amp/2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    revision: "b755f6e8d6df75b720bbe84c9bfdbb78"
  },
  {
    url: "amp/2016/12/10/alterconf-nyc-/index.html",
    revision: "b6b76bdd975ff1e08b53ab4490dd4d40"
  },
  {
    url: "amp/2016/12/11/alterconf-nyc/index.html",
    revision: "3f7ca7347b205e63d299af8b13db9878"
  },
  {
    url: "amp/2016/12/15/open-studio-poster---cornell-tech-/index.html",
    revision: "368f68b588c2c5487e6ed46dd701340c"
  },
  {
    url: "amp/2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    revision: "575e13a48607f844bc01f6f21bbd45fe"
  },
  {
    url: "amp/2016/12/17/norfolk.js/index.html",
    revision: "601beb39f1c5e38a397032b9a754c175"
  },
  {
    url: "amp/2016/12/17/product-school/index.html",
    revision: "dc063d8a9d2635ab4ce62f328e4f473d"
  },
  {
    url: "amp/2017/01/07/updated-github-page-/index.html",
    revision: "d88cc0173e6c600578a5718cfddb44e8"
  },
  {
    url: "amp/2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    revision: "347d38c1b7074f9a4c27799b0374cc92"
  },
  {
    url: "amp/2017/01/13/simple-to-do-app-in-laravel-/index.html",
    revision: "75ecfbfa823a8e485461d8c6e63f72e6"
  },
  {
    url: "amp/2017/01/21/huge-school-application-2017/index.html",
    revision: "691e3db4d4fa4ae8fffff24e53f41845"
  },
  {
    url: "amp/2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    revision: "ad89fe88be0932315667224865d00496"
  },
  {
    url: "amp/2017/01/29/another-spreadsheet-app-️️/index.html",
    revision: "9f4295e3a6e07d81582a8b751c26bf9c"
  },
  {
    url: "amp/2017/01/30/cute-things-we-do-/index.html",
    revision: "0256058511955e50ff522376c3cf4ea3"
  },
  {
    url: "amp/2017/02/01/franklin-lee/index.html",
    revision: "8f7a6a9ec9dd591cc549ae3a9f7c6bf3"
  },
  {
    url: "amp/2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    revision: "92cdad52f098ac4512d4c716240df6df"
  },
  {
    url: "amp/2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    revision: "0d6b009f61ce6ff7b85fdee20381482e"
  },
  {
    url: "amp/2017/02/19/hackysu-2017/index.html",
    revision: "d28576a46837722e3eacaedac0c8e5f0"
  },
  {
    url: "amp/2017/02/24/startup-studio/index.html",
    revision: "9e204498595163e32179b652295ca91f"
  },
  {
    url: "amp/2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    revision: "a99aa4c319f120acfc25aad51475ff32"
  },
  {
    url: "amp/2017/03/09/finalist---hackny-fellowship-program/index.html",
    revision: "7e5a41eec3c0bb3cc8063458da47b1fc"
  },
  {
    url: "amp/2017/03/14/connective-media/index.html",
    revision: "b51aed47301ad590ac521ded28274056"
  },
  {
    url: "amp/2017/03/15/accepted-to-design-inc./index.html",
    revision: "21b5b00f5b01fa1b9d60bfaa22a53cb2"
  },
  {
    url: "amp/2017/03/15/fullstack-academy---alumni-panel/index.html",
    revision: "8e4733de9c26a262d9b5cba247abc75a"
  },
  {
    url: "amp/2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    revision: "0232819149b680f1e77ad6f11a9f0c12"
  },
  {
    url: "amp/2017/03/17/apprenticeships-/index.html",
    revision: "f59bd4bd84d1869e1796f180b8657b36"
  },
  {
    url: "amp/2017/03/23/finalist---huge-experience-design-school/index.html",
    revision: "0f9a42aa761403e1203b8754450beb98"
  },
  {
    url: "amp/2017/03/29/finalist---pennapps-fellows-program/index.html",
    revision: "e96e9710967705b29cfdd0c9ec21457b"
  },
  {
    url: "amp/2017/04/14/pathfinder/index.html",
    revision: "ad08f65bcc245ef63da8b56fea6d3c13"
  },
  {
    url: "amp/2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    revision: "64d2d50cef4ddb1d395f19582a152f92"
  },
  {
    url: "amp/2017/04/30/codenow/index.html",
    revision: "b4f506e0fd3e72e6a64364e66bd8da64"
  },
  {
    url: "amp/2017/05/10/fullstack-academy---ambassador/index.html",
    revision: "a33435d0ae9d25c9941ffb691cec8f00"
  },
  {
    url: "amp/2017/05/11/project-alloy---grant-recipient/index.html",
    revision: "d4db3e4bc5b58159c83c80da35245b86"
  },
  {
    url: "amp/2017/05/26/cornell-tech/index.html",
    revision: "3c887bd98b8659eb38c0718da368b59c"
  },
  {
    url: "amp/2017/06/07/accenture-liquid-studio/index.html",
    revision: "2ed22379904f97142b3f966571550707"
  },
  {
    url: "amp/2017/06/16/team-monarch/index.html",
    revision: "d169b6d6d9f67b1031f0bc3d80e4e973"
  },
  {
    url: "amp/2017/06/30/amazon-alexa-hackathon/index.html",
    revision: "7d06c8f36152e4d7426ba40705ba0756"
  },
  {
    url: "amp/2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    revision: "9e3731da5d21b125b1556bc3882e4593"
  },
  {
    url: "amp/2017/08/28/new-blog-new-problems-/index.html",
    revision: "7bacd60adf6baaf75eecfed497e3b0e1"
  },
  {
    url: "amp/2017/09/16/affect-conf/index.html",
    revision: "237aca81e793f94242206d787e8a5171"
  },
  {
    url: "amp/2017/09/27/strange-loop-2017/index.html",
    revision: "9f9f643515ca3a7f9809002bbb40f391"
  },
  {
    url: "amp/2017/10/22/pwa-roadshow/index.html",
    revision: "84a3893c9d04a236862925bda630380b"
  },
  {
    url: "amp/2017/12/02/announcing-my-new-medium-blog-/index.html",
    revision: "692e1bf1bee9c3a299f5bfa0d490e164"
  },
  {
    url: "amp/about/colophon/index.html",
    revision: "0f5dc84274c804b5efaf14f88287f61a"
  },
  {
    url: "amp/about/github-repo/index.html",
    revision: "bc1a57c898d7db339064beed2d2a1051"
  },
  {
    url: "amp/about/resume/index.html",
    revision: "34ed4af59673bc76c8e7b9500981be68"
  },
  {
    url: "amp/about/travels/index.html",
    revision: "124f0c0b10a67f074e37e584919163aa"
  },
  {
    url: "amp/about/what-i-use/index.html",
    revision: "bada9f459172a5bba19ff02f1825d043"
  },
  {
    url: "amp/archive/index.html",
    revision: "43e92597d859468bd5e2ba12591e864e"
  },
  {
    url: "amp/awards/index.html",
    revision: "96f1156937fa3c7d75dce83fe63d8f3e"
  },
  {
    url: "amp/blog/1/01/01/ibooks/index.html",
    revision: "6d7976bd399f7d0b1b7293e69b1c9b19"
  },
  {
    url: "amp/blog/1/01/01/linkedin-posts/index.html",
    revision: "2eb1f4884e0fa0b667d40785a6c62e4e"
  },
  {
    url: "amp/blog/1/01/01/medium/index.html",
    revision: "851e2357023c0e552e8e40d5c442730f"
  },
  {
    url: "amp/blog/1/01/01/quora-answers/index.html",
    revision: "d0d19a689e4486b398cc98c229fb1a6e"
  },
  {
    url: "amp/blog/1/01/01/scribd/index.html",
    revision: "18647a16e771868dd56d1f50409770e3"
  },
  {
    url: "amp/blog/1/01/01/stack-exchange/index.html",
    revision: "1a0936c13465bd55beeb1e76d675737f"
  },
  {
    url: "amp/blog/1/01/01/tweets/index.html",
    revision: "b84a417d02eb8b91b379a1925f5f5cac"
  },
  {
    url: "amp/blog/1/01/01/wordpress-blog-old/index.html",
    revision: "4857e4813f72e01f56a76cf532a3cf23"
  },
  {
    url: "amp/contact/index.html",
    revision: "4e4394620c35a6eb4113b50c12559524"
  },
  {
    url: "amp/index.html",
    revision: "661f255d921ec49ceda1b57ed704e3f8"
  },
  {
    url: "amp/portfolio/1/01/01/behance/index.html",
    revision: "673bcac17710088fca6ba3e8a22d6f33"
  },
  {
    url: "amp/portfolio/1/01/01/code-school/index.html",
    revision: "7a5d6becac80f9ad17816ca0f225752b"
  },
  {
    url: "amp/portfolio/1/01/01/devpost/index.html",
    revision: "106d12f0fd6ddb4bbd768d21a3f25631"
  },
  {
    url: "amp/portfolio/1/01/01/github-️/index.html",
    revision: "38afd9bb61495247f697363409878d1e"
  },
  {
    url: "amp/portfolio/1/01/01/slideshare/index.html",
    revision: "4029dd286d25df03d637ac85f9a45987"
  },
  {
    url: "amp/portfolio/1/01/01/youtube/index.html",
    revision: "61e0ea529e5ce56ac8832cc6cf21bfff"
  },
  {
    url: "amp/services/freelancing/index.html",
    revision: "1cccee2ad3b4fb6a8d0fe63143fb7e78"
  },
  {
    url: "amp/services/mentoring/index.html",
    revision: "d9ee9be1f9e23ce240ad57d1acccb971"
  },
  {
    url: "amp/speaking/burn-prevention/index.html",
    revision: "b718fb8a08ac6372ebdd4319b1b43f25"
  },
  {
    url: "amp/speaking/coding-bootcamps/index.html",
    revision: "df8a034aba14bf952cb4e1d24517bf60"
  },
  {
    url: "amp/speaking/hour-of-code/index.html",
    revision: "dde29f9cc15f117b7a4885d34815d34b"
  },
  {
    url: "amp/speaking/imovie101/index.html",
    revision: "1e9eb61faec1cc88828e6fb802299d91"
  },
  {
    url: "amp/speaking/so-you-want-to-be-a-wizard/index.html",
    revision: "b0140559125f90d8acc22135687a57bc"
  },
  {
    url: "amp/speaking/typescript-101/index.html",
    revision: "418595d54a023b4838c528bc43357175"
  },
  {
    url: "amp/speaking/va-acm/index.html",
    revision: "64d6886adefcca6ffcf102c92eb12707"
  },
  {
    url: "amp/speaking/web-design/index.html",
    revision: "3c672d5e53f53a126972cd8d497b2428"
  },
  {
    url: "archive/index.html",
    revision: "43e92597d859468bd5e2ba12591e864e"
  },
  {
    url: "assets/js/ie.js",
    revision: "c19e9dbec4a187653d6715c7437131da"
  },
  {
    url: "assets/js/index.html",
    revision: "c645f874184ad52f54fb1ab4a40172b8"
  },
  {
    url: "awards/index.html",
    revision: "96f1156937fa3c7d75dce83fe63d8f3e"
  },
  {
    url: "blog/1/01/01/ibooks/index.html",
    revision: "6d7976bd399f7d0b1b7293e69b1c9b19"
  },
  {
    url: "blog/1/01/01/linkedin-posts/index.html",
    revision: "2eb1f4884e0fa0b667d40785a6c62e4e"
  },
  {
    url: "blog/1/01/01/medium/index.html",
    revision: "851e2357023c0e552e8e40d5c442730f"
  },
  {
    url: "blog/1/01/01/quora-answers/index.html",
    revision: "d0d19a689e4486b398cc98c229fb1a6e"
  },
  {
    url: "blog/1/01/01/scribd/index.html",
    revision: "18647a16e771868dd56d1f50409770e3"
  },
  {
    url: "blog/1/01/01/stack-exchange/index.html",
    revision: "1a0936c13465bd55beeb1e76d675737f"
  },
  {
    url: "blog/1/01/01/tweets/index.html",
    revision: "b84a417d02eb8b91b379a1925f5f5cac"
  },
  {
    url: "blog/1/01/01/wordpress-blog-old/index.html",
    revision: "4857e4813f72e01f56a76cf532a3cf23"
  },
  {
    url: "blog/2012/07/30/blog-post-from-tanzania/amp/index.html",
    revision: "68f8bb8cf8d4a9e5dc260413c1fc38da"
  },
  {
    url: "blog/2012/07/30/blog-post-from-tanzania/index.html",
    revision: "df6b07898b114059e8f5a8af9b99448e"
  },
  {
    url: "blog/2013/09/20/c-bits-speeding-up-a-bit/amp/index.html",
    revision: "190b8bc79dd679061ad06748b50e10af"
  },
  {
    url: "blog/2013/09/20/c-bits-speeding-up-a-bit/index.html",
    revision: "dcf9c5791bd4a54552b8b6ddbe82ac82"
  },
  {
    url: "blog/index.html",
    revision: "7762cd61d43f4c5d4252390d656455e7"
  },
  {
    url: "categories/2015/index.html",
    revision: "5ceb970339da614d2503fb90a0d94dd8"
  },
  {
    url: "categories/2016/index.html",
    revision: "6c6d2ba90a8e2f05f8b8544ffcbff45c"
  },
  {
    url: "categories/2017/index.html",
    revision: "afccafb0eb1e76bdf86ed5d24616a8f6"
  },
  {
    url: "categories/award/index.html",
    revision: "99d83e051202509b390eecebad7d6f5a"
  },
  {
    url: "categories/blog/index.html",
    revision: "0abfd550cc776d165b81c5b9dd9fddb8"
  },
  {
    url: "categories/book/index.html",
    revision: "e6393afbac281c63b90122b8192eff9f"
  },
  {
    url: "categories/bootcamps/index.html",
    revision: "bc17902520cbebe60022581a56bbdc60"
  },
  {
    url: "categories/burnprevention/index.html",
    revision: "619e55ef12165dfee25283bc1f147265"
  },
  {
    url: "categories/certainties/index.html",
    revision: "69a12f850837f1c368ece8e5159a19af"
  },
  {
    url: "categories/coding/index.html",
    revision: "cb1c2b93b188357d63c73034ccb396a0"
  },
  {
    url: "categories/conference/index.html",
    revision: "fecb865fea51e2f86359adfcd90489b4"
  },
  {
    url: "categories/creativity/index.html",
    revision: "72788fe39c13d086e437991578385f93"
  },
  {
    url: "categories/design/index.html",
    revision: "765519988a16cf4c2ec9a76c1473226e"
  },
  {
    url: "categories/education/index.html",
    revision: "c2831049300391a622b4e3a4442f4dba"
  },
  {
    url: "categories/experience/index.html",
    revision: "56a1fa943a183e9258aba957968bdec0"
  },
  {
    url: "categories/hackathon/index.html",
    revision: "b708e114b6e0d63166a31c505bfafa47"
  },
  {
    url: "categories/hourofcode/index.html",
    revision: "e32df277efa23dfe5d5846a6da24fb12"
  },
  {
    url: "categories/imovie101/index.html",
    revision: "8e85231ff7cd8d2008abba216e2a74d8"
  },
  {
    url: "categories/index.html",
    revision: "8f167fd875659e4aa158e94b80f04fba"
  },
  {
    url: "categories/portfolio/index.html",
    revision: "906b1fe182eca935a9e93f5d89899125"
  },
  {
    url: "categories/presentation/index.html",
    revision: "496bb58d8d396df41f3cf9afe2cdb7b0"
  },
  {
    url: "categories/program/index.html",
    revision: "52887bc61509b04b9cfd83101822b027"
  },
  {
    url: "categories/research/index.html",
    revision: "d7a6f7b90c09336df38de946c0ca23f2"
  },
  {
    url: "categories/review/index.html",
    revision: "52766a97fe35b51922f5db518e07d903"
  },
  {
    url: "categories/speaking/index.html",
    revision: "3d1171351506aea3d2d04b88ca720cba"
  },
  {
    url: "categories/typescript101/index.html",
    revision: "f86b843148b06491e5f7800bebb2cbc4"
  },
  {
    url: "categories/vaacm/index.html",
    revision: "c121ca1ec33b4d44c8cf3295ba467340"
  },
  {
    url: "categories/volunteering/index.html",
    revision: "c68d79bc79b68c967f7d031dc80e59a0"
  },
  {
    url: "categories/web/index.html",
    revision: "c5c0a357c69857587d709d74a1cf3347"
  },
  {
    url: "categories/webdesign/index.html",
    revision: "af4ba54c362579389b00c646539029ee"
  },
  {
    url: "categories/wizard/index.html",
    revision: "ac95f8d08ff4b1377ec90aef5033ea70"
  },
  {
    url: "contact/index.html",
    revision: "4e4394620c35a6eb4113b50c12559524"
  },
  {
    url: "/dist/assets/js/index.html",
    revision: "661f255d921ec49ceda1b57ed704e3f8"
  },
  {
    url: "OneSignalSDKUpdaterWorker.js",
    revision: "ec63a9458244c4a5e3561af03b2df246"
  },
  {
    url: "OneSignalSDKWorker.js",
    revision: "ec63a9458244c4a5e3561af03b2df246"
  },
  {
    url: "portfolio/1/01/01/behance/index.html",
    revision: "673bcac17710088fca6ba3e8a22d6f33"
  },
  {
    url: "portfolio/1/01/01/code-school/index.html",
    revision: "7a5d6becac80f9ad17816ca0f225752b"
  },
  {
    url: "portfolio/1/01/01/devpost/index.html",
    revision: "106d12f0fd6ddb4bbd768d21a3f25631"
  },
  {
    url: "portfolio/1/01/01/github-️/index.html",
    revision: "38afd9bb61495247f697363409878d1e"
  },
  {
    url: "portfolio/1/01/01/slideshare/index.html",
    revision: "4029dd286d25df03d637ac85f9a45987"
  },
  {
    url: "portfolio/1/01/01/youtube/index.html",
    revision: "61e0ea529e5ce56ac8832cc6cf21bfff"
  },
  {
    url: "portfolio/index.html",
    revision: "c7c59515ff2802a073dc33267016d5a9"
  },
  {
    url: "services/freelancing/index.html",
    revision: "1cccee2ad3b4fb6a8d0fe63143fb7e78"
  },
  {
    url: "services/index.html",
    revision: "64ce81682a5af43dcb59f7d2f518527a"
  },
  {
    url: "services/mentoring/index.html",
    revision: "d9ee9be1f9e23ce240ad57d1acccb971"
  },
  {
    url: "speaking/burn-prevention/index.html",
    revision: "b718fb8a08ac6372ebdd4319b1b43f25"
  },
  {
    url: "speaking/coding-bootcamps/index.html",
    revision: "df8a034aba14bf952cb4e1d24517bf60"
  },
  {
    url: "speaking/hour-of-code/index.html",
    revision: "dde29f9cc15f117b7a4885d34815d34b"
  },
  {
    url: "speaking/imovie101/index.html",
    revision: "1e9eb61faec1cc88828e6fb802299d91"
  },
  {
    url: "speaking/index.html",
    revision: "2fea09d4ed0a73ed1fc5d6cd9bcbcf80"
  },
  {
    url: "speaking/so-you-want-to-be-a-wizard/index.html",
    revision: "b0140559125f90d8acc22135687a57bc"
  },
  {
    url: "speaking/typescript-101/index.html",
    revision: "418595d54a023b4838c528bc43357175"
  },
  {
    url: "speaking/va-acm/index.html",
    revision: "64d6886adefcca6ffcf102c92eb12707"
  },
  {
    url: "speaking/web-design/index.html",
    revision: "3c672d5e53f53a126972cd8d497b2428"
  },
  {
    url: "tags/100/index.html",
    revision: "8cb5fc02c87212b31fd71113d567d504"
  },
  {
    url: "tags/100th/index.html",
    revision: "5961b9c5980937e733a342621af11c15"
  },
  {
    url: "tags/128x128/index.html",
    revision: "b1355ffaef73be5aee6d78a12fd900c2"
  },
  {
    url: "tags/2008/index.html",
    revision: "be062261b15c4dea929192af8742ca34"
  },
  {
    url: "tags/2d-game/index.html",
    revision: "3256e442d6948661f58f45b4fbb95cb7"
  },
  {
    url: "tags/50-crimes/index.html",
    revision: "319b7051409fe7c9ddefe9c488df24e5"
  },
  {
    url: "tags/50-lines-for-50-crimes/index.html",
    revision: "141d3cf870f64b20b36500ca95bbabbe"
  },
  {
    url: "tags/50-lines/index.html",
    revision: "c21698f7a864ab9cb88b71e2cd48c150"
  },
  {
    url: "tags/757-developers/index.html",
    revision: "28d3f66abefc1068354ef0a781756a26"
  },
  {
    url: "tags/757/index.html",
    revision: "6206ea36fe291a3dd11d9198b9768e63"
  },
  {
    url: "tags/757dev/index.html",
    revision: "36487e7b171d2de7ed6e7c2ee69d6071"
  },
  {
    url: "tags/8020/index.html",
    revision: "60a091a1c2427b7dc1f40f5015a10553"
  },
  {
    url: "tags/a-poem-for-a-friend/index.html",
    revision: "88242a73a393433ae774956cee019ba8"
  },
  {
    url: "tags/aaai-2015/index.html",
    revision: "d6031a8cab0743465907cbbc3038d770"
  },
  {
    url: "tags/aaai/index.html",
    revision: "616502ac4e13031dfd446121a89e12c7"
  },
  {
    url: "tags/academia/index.html",
    revision: "fde55df9baaa2609401cf69bbed93e10"
  },
  {
    url: "tags/academy/index.html",
    revision: "61d2659a924683cc0c054c011ea75036"
  },
  {
    url: "tags/accenture/index.html",
    revision: "8e2ffd1d0503f8524c97b3a26c76eb93"
  },
  {
    url: "tags/acceptance/index.html",
    revision: "af2a5382ac66d622342c589c8b78e235"
  },
  {
    url: "tags/accepted/index.html",
    revision: "a6fae2c3e38049bffdacf97c7fd2d815"
  },
  {
    url: "tags/accountability/index.html",
    revision: "24af1f819e63f5392227963e653b4236"
  },
  {
    url: "tags/adapt-and-survive/index.html",
    revision: "b5097d60de8575bb0b24371969f72137"
  },
  {
    url: "tags/admissions-challenge/index.html",
    revision: "bf8f18052fd9d8804408638c143951d8"
  },
  {
    url: "tags/admissions/index.html",
    revision: "b9ca9d109b4b882484da190d22e87f81"
  },
  {
    url: "tags/adobe-after-effects/index.html",
    revision: "4edf3338374ee42a9bbbf283a0a35195"
  },
  {
    url: "tags/adobe-premiere-pro/index.html",
    revision: "927e83f266455b11824d5186ee19b4a2"
  },
  {
    url: "tags/adrenaline-junkies/index.html",
    revision: "42814c134fb4929284b4764414af6bb8"
  },
  {
    url: "tags/adult-perspective/index.html",
    revision: "d8e3bc50db867ac15697240f09ecd820"
  },
  {
    url: "tags/affordance-models/index.html",
    revision: "affda8e653146cd31d1411468ad43bcc"
  },
  {
    url: "tags/afro-movers-and-shakers/index.html",
    revision: "1c1b969b7b6fa359a6a697a04a97ea22"
  },
  {
    url: "tags/aftermath/index.html",
    revision: "38b508f2465548e84de9fb11236462c9"
  },
  {
    url: "tags/ai-conference/index.html",
    revision: "22e174b99bcef99235d4249fad3a4728"
  },
  {
    url: "tags/ai/index.html",
    revision: "30ba38d6ec9284d506a774323c2b76cf"
  },
  {
    url: "tags/ai2/index.html",
    revision: "2227cf8e4fb4393ebb1906745ceba77e"
  },
  {
    url: "tags/ailey-extension/index.html",
    revision: "7ed4375cdd15a99ddff991572a90da8e"
  },
  {
    url: "tags/air-heads/index.html",
    revision: "99b356df151216b1c6dc8319695f2c99"
  },
  {
    url: "tags/airmail-integration/index.html",
    revision: "e4728d644b4171520c10dd87299c6b5c"
  },
  {
    url: "tags/airmail-school-email/index.html",
    revision: "6fb67f0ae49f1c8a345463e4f9ea825b"
  },
  {
    url: "tags/airmail/index.html",
    revision: "139cd2034b28b0479625bf3b6f6f4d52"
  },
  {
    url: "tags/airtable-app/index.html",
    revision: "90c41c4d9595d0b4e166eb73db49de6d"
  },
  {
    url: "tags/airtable/index.html",
    revision: "f3d0aebb758601622058428bfd02b1f7"
  },
  {
    url: "tags/ajax/index.html",
    revision: "73f200238307605e50ee144af8be9c46"
  },
  {
    url: "tags/alchemize/index.html",
    revision: "8c157db9ec1f9acca56d512485c4ba06"
  },
  {
    url: "tags/alfred/index.html",
    revision: "54b1ca7e6bfa65da2050b1eb75b015f4"
  },
  {
    url: "tags/algorithms/index.html",
    revision: "80752778fa4aa2bb6ac5e074881d5a92"
  },
  {
    url: "tags/alien/index.html",
    revision: "53de8e4185bcf68d97160eb4fc35a2bc"
  },
  {
    url: "tags/aline-lerner/index.html",
    revision: "a90c93b939efe288261eef4937ce7ab6"
  },
  {
    url: "tags/alpha/index.html",
    revision: "a5f94e8261f926fc8c50858847764523"
  },
  {
    url: "tags/alterconf-new-york-city/index.html",
    revision: "bee532d51608caba8f6bd3dda40a2157"
  },
  {
    url: "tags/alterconf-nyc-2016/index.html",
    revision: "201293cd09bf11c83bc1ebf2c4267cf2"
  },
  {
    url: "tags/alterconf-nyc/index.html",
    revision: "ed27eb56b406cb7ab7acfee2bdf5c300"
  },
  {
    url: "tags/alterconf/index.html",
    revision: "4a258bd4f23d7d843f47aaa89c65e41c"
  },
  {
    url: "tags/alternote/index.html",
    revision: "bec733c8c02a141d822375531baf36fe"
  },
  {
    url: "tags/alumni-panel/index.html",
    revision: "00f639357980fc77a48b8da676a6f2a3"
  },
  {
    url: "tags/ameot/index.html",
    revision: "c52d3a0b80e98164de468b59f83b01ea"
  },
  {
    url: "tags/american-museum-of-natural-history/index.html",
    revision: "81108ff7f7b499e83a68133b86920776"
  },
  {
    url: "tags/amphetamine/index.html",
    revision: "0c723eb04e31b720882d0f3209c858b2"
  },
  {
    url: "tags/ancestor/index.html",
    revision: "e77d5ed4f74123e25bad57283d4c4434"
  },
  {
    url: "tags/angular-js/index.html",
    revision: "d771f9cc35f50149e1bc83eb2c693266"
  },
  {
    url: "tags/angular/index.html",
    revision: "11fa35347ccc627afbcb1f97c2aa6485"
  },
  {
    url: "tags/angularjs/index.html",
    revision: "48f7a3b4c876fc9692c650ed36e702f5"
  },
  {
    url: "tags/anonymous-functions/index.html",
    revision: "c627e75bd0a738176da3754779a4afc4"
  },
  {
    url: "tags/apocalypse/index.html",
    revision: "e8c597390ca3523b5f73767241e7825f"
  },
  {
    url: "tags/app-academy/index.html",
    revision: "72b97c288b7c3e4e896b65538f575de3"
  },
  {
    url: "tags/app-store/index.html",
    revision: "2d1933aa03ace3b4c5a627eae970fa60"
  },
  {
    url: "tags/apple/index.html",
    revision: "08b7ce4270e34e1986223b8da9892bfa"
  },
  {
    url: "tags/application/index.html",
    revision: "44e53b2332f99926fd4f2717d27427c7"
  },
  {
    url: "tags/applications/index.html",
    revision: "addbc5b05ecc6cfa59b8ebb60e8efb43"
  },
  {
    url: "tags/arcade-publishing/index.html",
    revision: "ce570647b6172351a03bea068c6bad15"
  },
  {
    url: "tags/archos/index.html",
    revision: "7a4d23d3700b848fb12c910ae5488851"
  },
  {
    url: "tags/area-of-a-rectangle-python/index.html",
    revision: "761fc2b0dc7ed3b18095d19211a7a473"
  },
  {
    url: "tags/arithmetic/index.html",
    revision: "5c010de6e38d8324a9e0bdde4770924c"
  },
  {
    url: "tags/array-implementation/index.html",
    revision: "df75649bd8e4726e226ddc6eda9c9a23"
  },
  {
    url: "tags/array/index.html",
    revision: "a808ed66bd9a9877bae2dbba2c9e9724"
  },
  {
    url: "tags/arrays/index.html",
    revision: "e8c74dce16d362579bb881aef860d055"
  },
  {
    url: "tags/arsenic/index.html",
    revision: "f334b2b9c601c9e7a993fc905327848b"
  },
  {
    url: "tags/artificial-intelligence/index.html",
    revision: "2b801e33363a70bc380dc8c56bca3737"
  },
  {
    url: "tags/artificially-intelligent/index.html",
    revision: "33703338d1f1b69348f3d15339560074"
  },
  {
    url: "tags/asperger-syndrome/index.html",
    revision: "a33070064711df29e5c62eb579c6d9ba"
  },
  {
    url: "tags/asperger/index.html",
    revision: "fde0e3590232a3151562bc0e60444a89"
  },
  {
    url: "tags/aspie/index.html",
    revision: "ba795a5136254000ded4ef02a9782993"
  },
  {
    url: "tags/assigning/index.html",
    revision: "1e8fb3931f15480ca16a39b1c3d8208d"
  },
  {
    url: "tags/at-home-advisor/index.html",
    revision: "e6a039e723745597b6e99979fd61b4d3"
  },
  {
    url: "tags/atheists/index.html",
    revision: "6ab9c63c907986bf674fc6099c50190b"
  },
  {
    url: "tags/auschwitz-a-doctors-eyewitness-account/index.html",
    revision: "bdc7645a9b0644c6e3cb3df3cfe0f25e"
  },
  {
    url: "tags/auschwitz/index.html",
    revision: "f574f50ffca8804c55281ea61eb88af2"
  },
  {
    url: "tags/austin/index.html",
    revision: "05a45c9738437b00d95ece0c5838b93c"
  },
  {
    url: "tags/authentication/index.html",
    revision: "18b96872028a735c6afa7ff2626a55eb"
  },
  {
    url: "tags/autism-spectrum/index.html",
    revision: "ee8a9ca631d398f85bc267387b8b763f"
  },
  {
    url: "tags/automated-jobs/index.html",
    revision: "1f83be2dedefe9908d9095678b76bf46"
  },
  {
    url: "tags/automated/index.html",
    revision: "dfaa662efd5eacb4f7a929e347cf33cb"
  },
  {
    url: "tags/automation/index.html",
    revision: "30e9e0625882ae5080dd61c1ff7c3ba3"
  },
  {
    url: "tags/automator/index.html",
    revision: "2567badf31351a24c9286496deca3a9a"
  },
  {
    url: "tags/avalon/index.html",
    revision: "ad066929c7b190d9bf30a945ebb2d899"
  },
  {
    url: "tags/aviation/index.html",
    revision: "a2ddad04b0386f43d1adea1eb7661ada"
  },
  {
    url: "tags/awkward-silences/index.html",
    revision: "2d97611623b7771e258a61e92651aeab"
  },
  {
    url: "tags/awwwards/index.html",
    revision: "01904c33befc10577c4e6b0796b54e40"
  },
  {
    url: "tags/baboon/index.html",
    revision: "2c6bb4a2728a936f29a7cb79b8dfca5d"
  },
  {
    url: "tags/background/index.html",
    revision: "bd3b0653b15c928b8268d828a7f18d33"
  },
  {
    url: "tags/backgrounds/index.html",
    revision: "76e7130138c72899d88be93d69b1e1b4"
  },
  {
    url: "tags/balanced/index.html",
    revision: "9435b1e5e7aa567197bc5f42473c3e3d"
  },
  {
    url: "tags/balls/index.html",
    revision: "62038749bdae64b9e2561cbdcee7e859"
  },
  {
    url: "tags/banquet/index.html",
    revision: "941bdc798e5bdb412398d62d295e8a55"
  },
  {
    url: "tags/barbara-demick/index.html",
    revision: "d224da2f21adec7570b4e24bbebb8f68"
  },
  {
    url: "tags/barbossa/index.html",
    revision: "7c8fced1d6d77026b7710f3ce50c6d40"
  },
  {
    url: "tags/bartender/index.html",
    revision: "2dedf308f9b5e1c5b810261d89b11dea"
  },
  {
    url: "tags/basic-structure/index.html",
    revision: "55d763a2d1e136118cbba16b0452f15c"
  },
  {
    url: "tags/battle-school/index.html",
    revision: "fdb68c33b28e2d2433c79f0a58104dce"
  },
  {
    url: "tags/bay-area/index.html",
    revision: "bccccb7dc361f28fe67c4de32dd0aef8"
  },
  {
    url: "tags/be-wary/index.html",
    revision: "e4f4a5c3b1884e8bdb16abbf2ef66571"
  },
  {
    url: "tags/beauty/index.html",
    revision: "e342e0e514d3dfdc7a74aae0aae7025a"
  },
  {
    url: "tags/bee/index.html",
    revision: "a3ba7bb848b6d56ccce9da9315d644d6"
  },
  {
    url: "tags/beginner/index.html",
    revision: "5ae7c209a4f21d4f096a3cfd95031856"
  },
  {
    url: "tags/beginning-programming/index.html",
    revision: "e590e9d10e79826d310cf8eafaebe420"
  },
  {
    url: "tags/behance/index.html",
    revision: "b9b457d117765445d35957e70b973328"
  },
  {
    url: "tags/benito-de-soto/index.html",
    revision: "6af16f34212e16a4084931634edd1968"
  },
  {
    url: "tags/bento/index.html",
    revision: "fa8dfb191714dc5d9888da4cfd215373"
  },
  {
    url: "tags/best-bootcamps/index.html",
    revision: "f14d83ff5e9d7d0883598c559150a35b"
  },
  {
    url: "tags/beta-day/index.html",
    revision: "7864c3dc070a71c937bdb3515a0e2f05"
  },
  {
    url: "tags/beta/index.html",
    revision: "8ead9ee7c347a486b399a996a2c1b780"
  },
  {
    url: "tags/bethel-high-school/index.html",
    revision: "e9fd796a69d44b3fdd4027c5acd88fd9"
  },
  {
    url: "tags/bettersnaptool/index.html",
    revision: "c776dc76244992ac1fe8b29ab9e73168"
  },
  {
    url: "tags/bieber/index.html",
    revision: "4798d5e3e3d923053da4269a75448d96"
  },
  {
    url: "tags/big-presentation/index.html",
    revision: "01c80ff3e1df67e7cf697112f234cfb0"
  },
  {
    url: "tags/binary-search-tree/index.html",
    revision: "3f914fead3f3ab34d1092b36abb1aa5e"
  },
  {
    url: "tags/binary-tree/index.html",
    revision: "7764fffd28c1946b8bd6fa3ebcc4575b"
  },
  {
    url: "tags/binary-trees/index.html",
    revision: "57263e723196688e36c8e83e40fe9f91"
  },
  {
    url: "tags/binary/index.html",
    revision: "4f916dd6fe880ae24aacae7943a67653"
  },
  {
    url: "tags/binding-of-isaac-review/index.html",
    revision: "c7bdb152f89f29354d6d6918d123f985"
  },
  {
    url: "tags/binding-of-isaac/index.html",
    revision: "291b695e79053bf1ace3e1e9b52c0ccd"
  },
  {
    url: "tags/binding/index.html",
    revision: "7629df572b9f2bff7cdab6eab23cdb58"
  },
  {
    url: "tags/bit/index.html",
    revision: "a97c501287df0f90216552062b0d3b20"
  },
  {
    url: "tags/bitcoin/index.html",
    revision: "2b09281a005561bf219761e6c2e1a928"
  },
  {
    url: "tags/bitmaker-labs/index.html",
    revision: "06b75f12dce1d87213746618ff16f8fc"
  },
  {
    url: "tags/bitmaker/index.html",
    revision: "da1d4274edc3c707266c58d92822109e"
  },
  {
    url: "tags/bits/index.html",
    revision: "3a93ef765957faad58044882fb2b755f"
  },
  {
    url: "tags/black-beard/index.html",
    revision: "8711215aac1e6b08b577568e736697b9"
  },
  {
    url: "tags/black-pearl/index.html",
    revision: "179a8640eedca37c6a87b005b79fbf75"
  },
  {
    url: "tags/blackbeard/index.html",
    revision: "e88514c654c39528c16f0bc55a538f68"
  },
  {
    url: "tags/blanket/index.html",
    revision: "f827ec171573ced9b595bb9f4c28f7b4"
  },
  {
    url: "tags/blog/index.html",
    revision: "4143129c9b660e23bc8d16e4cd66bf2c"
  },
  {
    url: "tags/blogging/index.html",
    revision: "f43bc67bd5163d3d62917959cf55e001"
  },
  {
    url: "tags/bloody-game/index.html",
    revision: "72e644e36b2f93cbc06e264d28bfb847"
  },
  {
    url: "tags/bloomberg/index.html",
    revision: "a99edd00c18c2aa20f1a93f8609c10be"
  },
  {
    url: "tags/board-game/index.html",
    revision: "159b6ec5fa481501bd69fe12f072778d"
  },
  {
    url: "tags/book-review/index.html",
    revision: "1ff24fb4872fd7ae6fab5059cd43f71a"
  },
  {
    url: "tags/boot-camp/index.html",
    revision: "047e97b3805314cce181621b54de1750"
  },
  {
    url: "tags/bootcamp-agreement/index.html",
    revision: "ff4edc0aefe2c78e2d3bd3fd34a1df00"
  },
  {
    url: "tags/bootcamp-hawaii/index.html",
    revision: "9f26d4a482e903c893d8c94f393d7c0c"
  },
  {
    url: "tags/bootcamp.me/index.html",
    revision: "a7ded9ed68795103806badcf37fb4a64"
  },
  {
    url: "tags/bootcamp/index.html",
    revision: "b09a18a06aeb7ce61c9be5e7beff0a46"
  },
  {
    url: "tags/bootcamper.io/index.html",
    revision: "22bcc600c154c8e47a4c95973afbef29"
  },
  {
    url: "tags/bootcamps.in/index.html",
    revision: "253021c4e4b23b16a131d9965a58d654"
  },
  {
    url: "tags/bootcamps/index.html",
    revision: "151b08674e32b47621386222fc565eb4"
  },
  {
    url: "tags/bootstrap/index.html",
    revision: "f33809109bee2c8bf785436109786093"
  },
  {
    url: "tags/boston/index.html",
    revision: "7075fdea7ae4d4f676e09cc8c31a1c2f"
  },
  {
    url: "tags/bow/index.html",
    revision: "c9405e99f1bc45bf3390591be96134c3"
  },
  {
    url: "tags/boys/index.html",
    revision: "da9636069f624e2f0bb6cdb9d60e44fc"
  },
  {
    url: "tags/brief-thoughts/index.html",
    revision: "a04db320682f5738ba7a1878ef892213"
  },
  {
    url: "tags/briefbox/index.html",
    revision: "cd86ee6e333b3aa4fccaa159a6223fa6"
  },
  {
    url: "tags/bubble-sort/index.html",
    revision: "e55cafe0c61b7ae70e5324e8c7405e27"
  },
  {
    url: "tags/bubbles/index.html",
    revision: "072b9f979399d9ba8059842efa46dc18"
  },
  {
    url: "tags/bummer/index.html",
    revision: "e760d9a0bf6c4ed2ddb62b8f072cbc43"
  },
  {
    url: "tags/burger-king/index.html",
    revision: "ac268ccdcb9e8cfcdb4ff0f4fbaff124"
  },
  {
    url: "tags/byword/index.html",
    revision: "b4f313dc2f7e9e6cb3b7f5f84c297a65"
  },
  {
    url: "tags/c-programming/index.html",
    revision: "b4107a785744004628e70f1f3e247f08"
  },
  {
    url: "tags/c++/index.html",
    revision: "ae8a86aae321b88dffe827f518b41abb"
  },
  {
    url: "tags/calculus/index.html",
    revision: "2190a0cf897a0f88ece52eb12dea4452"
  },
  {
    url: "tags/callbacks/index.html",
    revision: "8b03e8886e290e86ce308ece4532946a"
  },
  {
    url: "tags/campus/index.html",
    revision: "c9e01593b09dc51d92f5f11b55b7ad35"
  },
  {
    url: "tags/canada/index.html",
    revision: "98e6fbebb6373359395a866e5a5e8cdd"
  },
  {
    url: "tags/capstone-project/index.html",
    revision: "8a9eb73124697c1a55db30de9e6bf9b9"
  },
  {
    url: "tags/captain-jack-sparrow/index.html",
    revision: "70344d96e212ec850ad1d21204e80830"
  },
  {
    url: "tags/captone/index.html",
    revision: "b0c7041ded6cf993201e905d1dde31f3"
  },
  {
    url: "tags/capwic/index.html",
    revision: "feca5c01fb4f32392428f840a29aa0ed"
  },
  {
    url: "tags/career/index.html",
    revision: "b6262677bd9ec185f747ea063fc63528"
  },
  {
    url: "tags/casual/index.html",
    revision: "5a8dc74b79def07ca6269b69a936b74b"
  },
  {
    url: "tags/cb/index.html",
    revision: "8f13eb3e43c41ea4a3651ec11347651e"
  },
  {
    url: "tags/cbs/index.html",
    revision: "945a57ed29f07af45c8bb6c56f538654"
  },
  {
    url: "tags/cdock/index.html",
    revision: "ba62efc0e835f523ee3fdcd3da387138"
  },
  {
    url: "tags/celsius-to-fahrenheit/index.html",
    revision: "acde1086f4bfb4536198ebef6238e7ed"
  },
  {
    url: "tags/chad-trutt/index.html",
    revision: "ca345d343de8ac6cc50e324a45cd731b"
  },
  {
    url: "tags/challenge/index.html",
    revision: "81bafea0f25ac2f53531b764ee4d393f"
  },
  {
    url: "tags/change/index.html",
    revision: "8533ba1b7e4fbe59b621a2b2dd15e03f"
  },
  {
    url: "tags/chaos-faction/index.html",
    revision: "f59b6ede1439e7df6bb164830d0f60be"
  },
  {
    url: "tags/character/index.html",
    revision: "6ab11c57ffb998e065afb5c65736f8cf"
  },
  {
    url: "tags/chat-development/index.html",
    revision: "daadb64bd21a9bd991ea3183e16b3bda"
  },
  {
    url: "tags/cheerio/index.html",
    revision: "e77cb6a8697d34a9c22d17aae31b6178"
  },
  {
    url: "tags/cheese/index.html",
    revision: "82b30d27f67ca12c0bcbafb93e0606ab"
  },
  {
    url: "tags/cheesy/index.html",
    revision: "bbd0662e4e96463e50caf4e074672caa"
  },
  {
    url: "tags/chicago/index.html",
    revision: "231cf2b21b0d84df79fc331b2692fcc5"
  },
  {
    url: "tags/children/index.html",
    revision: "a29f35ca17fbfb9526b509bfbf488b31"
  },
  {
    url: "tags/christopher-t/index.html",
    revision: "b04b2237bf09445e3d5538edf73a9144"
  },
  {
    url: "tags/chrome-app-launcher/index.html",
    revision: "657ea9b399f0835e9c8310004f095105"
  },
  {
    url: "tags/chrome-extensions/index.html",
    revision: "2274c6de89bdd1ee696fb2f1cf471a8a"
  },
  {
    url: "tags/chrome-web-store/index.html",
    revision: "d8c7be6f9ae3895a82773946bcda46f6"
  },
  {
    url: "tags/chrome/index.html",
    revision: "62a07851f6a4c80b3beca67b7ab6d73d"
  },
  {
    url: "tags/chromecasts/index.html",
    revision: "e09c8bfe2979081526335f20dc800c48"
  },
  {
    url: "tags/chronicles-of-narnia/index.html",
    revision: "45fb33a3e853b74023fea3a489089be9"
  },
  {
    url: "tags/cinema4d/index.html",
    revision: "2e0c73512716747703fa46d62b041738"
  },
  {
    url: "tags/circle/index.html",
    revision: "4b8f4f0e23d7f37b90f85785f1f2b2ad"
  },
  {
    url: "tags/class/index.html",
    revision: "5176fa5dcf4e5072cce0122016b6152a"
  },
  {
    url: "tags/classes/index.html",
    revision: "395c812684d97392683beceda9b85992"
  },
  {
    url: "tags/cleft-lip/index.html",
    revision: "291317428f895fcc1a06a6b395506ad4"
  },
  {
    url: "tags/cleft-palette/index.html",
    revision: "2f505916158bdaeadaf2281d2d910468"
  },
  {
    url: "tags/closures/index.html",
    revision: "2962b4bf0cc49c0137e55bcc7c8d692d"
  },
  {
    url: "tags/cockroach/index.html",
    revision: "67fd32bc5aa34c90bcd94a9a6b001410"
  },
  {
    url: "tags/code-combat/index.html",
    revision: "cb67c92b61bbda6b1afff6806caf5727"
  },
  {
    url: "tags/code-combt/index.html",
    revision: "f0b2fbd746c435ed28e2c186537b18ac"
  },
  {
    url: "tags/code-fellows/index.html",
    revision: "89a6db0e4ec5b27b5e44f3302f7de366"
  },
  {
    url: "tags/code-school/index.html",
    revision: "3a4e8d637a5592cb7218e212abcc1c0d"
  },
  {
    url: "tags/code.org/index.html",
    revision: "82e10b88b873784eb5f33919b43d2d2f"
  },
  {
    url: "tags/code/index.html",
    revision: "59fcb2d281d345deab5f4422a316b419"
  },
  {
    url: "tags/code2040/index.html",
    revision: "0f73e4fd198ac3140e764c89edda19bc"
  },
  {
    url: "tags/codecademy/index.html",
    revision: "bc803f005a6d39e2bd0a2d232debbec9"
  },
  {
    url: "tags/codecombat/index.html",
    revision: "d8894d25f81036693b2febfd2ccbeb42"
  },
  {
    url: "tags/codepen/index.html",
    revision: "f3cb6621ba8d3247ed3ddd569eaabad8"
  },
  {
    url: "tags/coderbyte/index.html",
    revision: "db4134b4917fd5a00dd1b4dc93887f39"
  },
  {
    url: "tags/codewars/index.html",
    revision: "afc633cace6fe9a0c88a72862ca0be2d"
  },
  {
    url: "tags/coding-bootcamp-experience/index.html",
    revision: "97e508aa0ff2b6df862846980495e2ad"
  },
  {
    url: "tags/coding-bootcamp-fullstack/index.html",
    revision: "0f7850ce44ff3134da663d989561e055"
  },
  {
    url: "tags/coding-bootcamp-map/index.html",
    revision: "046b928eacf42d684a59bff81dadaaff"
  },
  {
    url: "tags/coding-bootcamp-prework/index.html",
    revision: "3108173a51ebba4c3dd199fa87bd5ecd"
  },
  {
    url: "tags/coding-bootcamp/index.html",
    revision: "538d6a0ea867b3ac5e52ed053ce1ba9c"
  },
  {
    url: "tags/coding-bootcamps/index.html",
    revision: "b2ef7a77ccc905890809f1bef63cf71d"
  },
  {
    url: "tags/coding-challenge/index.html",
    revision: "1e6c12a10781143305085002060b8caa"
  },
  {
    url: "tags/coding-dojo/index.html",
    revision: "909e1eeb1e45da451136e3b50d044239"
  },
  {
    url: "tags/coding-house/index.html",
    revision: "8fbe93758f3402ec93840690ba6c63b0"
  },
  {
    url: "tags/coding-interview/index.html",
    revision: "e9d095680ae4abbc0ec3314cb58cd404"
  },
  {
    url: "tags/coding/index.html",
    revision: "12baafc7205b276389146a913ec24ac0"
  },
  {
    url: "tags/codrops/index.html",
    revision: "119cccb6e18ba314a78281e5d8ba3c7f"
  },
  {
    url: "tags/codyhouse/index.html",
    revision: "3a9c838a8716566d74bcf559eeb129db"
  },
  {
    url: "tags/cohort/index.html",
    revision: "57de18705204a83e1cf8e10c3fb007c5"
  },
  {
    url: "tags/cold/index.html",
    revision: "fcacaa93ad390b11236452c021b42b04"
  },
  {
    url: "tags/college-students/index.html",
    revision: "767cafd57078a6a5051d3324b3cf244b"
  },
  {
    url: "tags/color-theory/index.html",
    revision: "7e56f23699120765ec1f48a44ce29248"
  },
  {
    url: "tags/coment.me/index.html",
    revision: "9f759555c197eff4c9b5e4665176dd06"
  },
  {
    url: "tags/command-line/index.html",
    revision: "06eba04021d8347ce76aede8a97bd7bc"
  },
  {
    url: "tags/comment/index.html",
    revision: "0ae60ecce47d3e26c888a3b7cd48a481"
  },
  {
    url: "tags/comments/index.html",
    revision: "28e25557fa825e5766065dc086f791a9"
  },
  {
    url: "tags/compare/index.html",
    revision: "e25a78d3b25dfd64346d9370e8670567"
  },
  {
    url: "tags/compiler/index.html",
    revision: "370aeac1d16abf5fea8abbe9807dc7fa"
  },
  {
    url: "tags/complete/index.html",
    revision: "47a38739949c5e899830295f636d8c21"
  },
  {
    url: "tags/computer-science-education/index.html",
    revision: "efe888c4535c3f8f3fd801a364b8064e"
  },
  {
    url: "tags/computer-science/index.html",
    revision: "a70725be829e877d48409b6385643f4c"
  },
  {
    url: "tags/computer/index.html",
    revision: "20547df8918e05928ddda9f0a4642c4b"
  },
  {
    url: "tags/computing/index.html",
    revision: "1e590b28e743ecb9ebd6d49f82975202"
  },
  {
    url: "tags/conceal/index.html",
    revision: "1b8e8f2677a5dd56d2001712fac11bc0"
  },
  {
    url: "tags/concrete/index.html",
    revision: "23d408f95f747132b3f5a4c3011050dc"
  },
  {
    url: "tags/coney-island/index.html",
    revision: "7997bb4e120ecd52be8e1654089e5939"
  },
  {
    url: "tags/conference-hotel/index.html",
    revision: "62ef073c225110ebf45cba61e76b81e6"
  },
  {
    url: "tags/conference/index.html",
    revision: "681ca1d077cfda3ee2240260c0fb9c54"
  },
  {
    url: "tags/conferences/index.html",
    revision: "c4e3303c042d40e5c4322ca7ddfee239"
  },
  {
    url: "tags/congratulations/index.html",
    revision: "6a0f5c3b59886bd11cf5751293d8c795"
  },
  {
    url: "tags/conquest/index.html",
    revision: "913031e8c16ce9d1a4eda86a02034dcf"
  },
  {
    url: "tags/contrast/index.html",
    revision: "185d9372f2807c48d5ede6e1538e646d"
  },
  {
    url: "tags/conundrums/index.html",
    revision: "a091b541058c5ff833e091b21069f9ee"
  },
  {
    url: "tags/cookie/index.html",
    revision: "7c8a60713695c5e076dcdaf5fdc93911"
  },
  {
    url: "tags/copley/index.html",
    revision: "c5ddd92d7b4b8666ebe6ee43a040e606"
  },
  {
    url: "tags/cornell-tech/index.html",
    revision: "c5531fc7a4d5d0631660be8932858d26"
  },
  {
    url: "tags/costs/index.html",
    revision: "a73df4c1dd6f70337ddda6bb0295b34b"
  },
  {
    url: "tags/course-report/index.html",
    revision: "f60819b009d205abe1300ebc69731332"
  },
  {
    url: "tags/course/index.html",
    revision: "94a37f41dc28eafbd0bf95dedf91b202"
  },
  {
    url: "tags/cracking-the-coding-interview/index.html",
    revision: "f3425ee8be0fb7c5fc8d3cc2f71a3d34"
  },
  {
    url: "tags/creations/index.html",
    revision: "86767f92b843479c1819004dbe5d3abb"
  },
  {
    url: "tags/creativity/index.html",
    revision: "9c4d7c5a509b269cbbeec8acd678c9e7"
  },
  {
    url: "tags/crowdsourced-map/index.html",
    revision: "84a943783608145966e4a8e6952c9f8f"
  },
  {
    url: "tags/crowdsourcing/index.html",
    revision: "77515c01aa8ebdcada6c945aa068d0f9"
  },
  {
    url: "tags/crush/index.html",
    revision: "80121b8ee2d05df769d0706d36f94e57"
  },
  {
    url: "tags/cs-background/index.html",
    revision: "5ae598d45bc64e0bd67bec9e27361fc3"
  },
  {
    url: "tags/cs/index.html",
    revision: "215ff29c0ce279e55eefcd0fb63d6515"
  },
  {
    url: "tags/csail/index.html",
    revision: "17174d0b78b6ae790cdb89cc56ac89e7"
  },
  {
    url: "tags/css/index.html",
    revision: "3f91599a12feed85487b310a34ccc8d5"
  },
  {
    url: "tags/css3/index.html",
    revision: "42e6c0e7bbeebd3fa5bbcc8ccfe44d3e"
  },
  {
    url: "tags/cups-of-tea/index.html",
    revision: "6c4559dfb3f4016729bcfd36851927bb"
  },
  {
    url: "tags/curi/index.html",
    revision: "4729a79eb5ee3563aa4c639902d4ef00"
  },
  {
    url: "tags/curiosity/index.html",
    revision: "244d95d64b49fb2cecbdb8f7070a1231"
  },
  {
    url: "tags/curious-incident-of-the-dog-in-the-night-time/index.html",
    revision: "9504ddb90c9eab73764e8a8f8e8b7c60"
  },
  {
    url: "tags/curriculum/index.html",
    revision: "194e710e1f64075c05aefebc39e76e2f"
  },
  {
    url: "tags/dabble/index.html",
    revision: "9de7f906e63afac135f2fca089aeb376"
  },
  {
    url: "tags/dairy-queen/index.html",
    revision: "8f6ecf37be9250b234c56eb73dafc4f8"
  },
  {
    url: "tags/damage/index.html",
    revision: "1f3113c84fa33c94dafa8bf529b70314"
  },
  {
    url: "tags/damehood/index.html",
    revision: "c0917d0e508f235936f288dd14415035"
  },
  {
    url: "tags/dan-brown/index.html",
    revision: "f94dac59e29f92c8868e374cdca7c2e8"
  },
  {
    url: "tags/dance/index.html",
    revision: "b06e74ab3f41d112072810dc6029914f"
  },
  {
    url: "tags/dancing/index.html",
    revision: "817c86edf35c8b741cb5c708cb309e2e"
  },
  {
    url: "tags/daniel/index.html",
    revision: "f11acb8e1232264ffa95c9c4e66ee832"
  },
  {
    url: "tags/dash/index.html",
    revision: "3b9903f762e635645e65c82e4262a308"
  },
  {
    url: "tags/data-set/index.html",
    revision: "5e06d81c982712adfc3f131a45364c11"
  },
  {
    url: "tags/data-structures/index.html",
    revision: "3c3a8124c120428fc790340585960477"
  },
  {
    url: "tags/data/index.html",
    revision: "cc596a85567c5f981e9a3f5b4c889604"
  },
  {
    url: "tags/david-yang/index.html",
    revision: "f89a42f9a74c8c91243c6bbbf1ee9d4c"
  },
  {
    url: "tags/davinci-code/index.html",
    revision: "a4127b058295cd6153d1918bc663077f"
  },
  {
    url: "tags/dear-bootcamp/index.html",
    revision: "43901bc3c749301bfb9187a385c11df5"
  },
  {
    url: "tags/death/index.html",
    revision: "5b7ea4b02f93c4b76ea9de431cf0c1cc"
  },
  {
    url: "tags/decision/index.html",
    revision: "ae0fe7f87abcc16970d5371523d76603"
  },
  {
    url: "tags/defining/index.html",
    revision: "7c11e22c24068ca96205953a86ddfb92"
  },
  {
    url: "tags/definitive-list/index.html",
    revision: "c3487b2c34f725ab3ce87dd5932ba530"
  },
  {
    url: "tags/delta/index.html",
    revision: "31fff8d67a2d9aab203e953894cfdd11"
  },
  {
    url: "tags/demo-day/index.html",
    revision: "8ea61dddcc09db589e75915cf152b57c"
  },
  {
    url: "tags/descendants/index.html",
    revision: "d0932cf2e425ef4880159aee73973346"
  },
  {
    url: "tags/describing-oneself/index.html",
    revision: "dc107b1b2f8dd683b7680e48bd50dd89"
  },
  {
    url: "tags/descriptions/index.html",
    revision: "21eaf851e1bb04d6a8da4784fc6069ce"
  },
  {
    url: "tags/design-101/index.html",
    revision: "25bb6d7a89ec64c1fdb171fccaf4718b"
  },
  {
    url: "tags/design-bootcamp/index.html",
    revision: "5c49847fbc0699dad90a4f1f6648e5b9"
  },
  {
    url: "tags/design-online-course/index.html",
    revision: "761ce61008a9716fb1b0c4a82dae106c"
  },
  {
    url: "tags/design/index.html",
    revision: "ea2fa13d9bbe2754fc84190a3bc03d25"
  },
  {
    url: "tags/design101/index.html",
    revision: "ffab94c1f73296974d7350e859225d18"
  },
  {
    url: "tags/designation-labs/index.html",
    revision: "3d2392c99780ef53cacd6c2b982bf5e6"
  },
  {
    url: "tags/designation.io/index.html",
    revision: "b76a38b99ec650ae999f4b01e98b67db"
  },
  {
    url: "tags/designation/index.html",
    revision: "0863f0ca4ae5b240ee3d122186b44276"
  },
  {
    url: "tags/designer/index.html",
    revision: "bdcb931a84cae0f6e8c4d0c130b5d7c8"
  },
  {
    url: "tags/designing/index.html",
    revision: "12c2aac12ac7ef3231ec759cd9a3bdca"
  },
  {
    url: "tags/designlab-course/index.html",
    revision: "d7fb28090931cf8cfed51cfa1aa28657"
  },
  {
    url: "tags/designlab-design-101/index.html",
    revision: "f01344e2368a8bebae3d7ca569d38237"
  },
  {
    url: "tags/designlab/index.html",
    revision: "0dc0eef1e08a44198c7003f3ff774723"
  },
  {
    url: "tags/designs/index.html",
    revision: "f8410744d4efca1e63c4c988f36ab56d"
  },
  {
    url: "tags/dev-bootcamps/index.html",
    revision: "6d8eb8031ae2e9d65d4e943b6d9e8f94"
  },
  {
    url: "tags/dev-league/index.html",
    revision: "7d15788e2abcf755e7bf38ab8bbbbae0"
  },
  {
    url: "tags/developer-festival/index.html",
    revision: "5918e6c396101081c82a916abb675dcc"
  },
  {
    url: "tags/development/index.html",
    revision: "98965a0bd6ef6c61cf0c679f46ecc3ee"
  },
  {
    url: "tags/devleague/index.html",
    revision: "0d5a75647ad7e91192c93605e23827a7"
  },
  {
    url: "tags/dictatorships/index.html",
    revision: "f2fa7da5b9965a93146835803f4c404e"
  },
  {
    url: "tags/dictionary/index.html",
    revision: "425117b3d5784255eafbf20b6204ce9f"
  },
  {
    url: "tags/digital-hieroglyphics/index.html",
    revision: "0821621ecf39364cecd229f2028f86b3"
  },
  {
    url: "tags/digital/index.html",
    revision: "2505add36b3cc466073c21dde1c1f2a9"
  },
  {
    url: "tags/dinos/index.html",
    revision: "a50a122edcdba30386d56771e4f9b2e6"
  },
  {
    url: "tags/dinosaurs/index.html",
    revision: "f449f29129b676b2c4b4dc56fadf05be"
  },
  {
    url: "tags/disabilities/index.html",
    revision: "0b94c8676959cf59363481efacf6cd6e"
  },
  {
    url: "tags/diversity-conference/index.html",
    revision: "da0b02f85d5580b8e86c47a771151643"
  },
  {
    url: "tags/diversity-in-tech/index.html",
    revision: "b70d5cac57ae7161fc1f44d9e83f38de"
  },
  {
    url: "tags/diversity-tales/index.html",
    revision: "86da150e9e10490ac99e05ecbbefbabd"
  },
  {
    url: "tags/diversity/index.html",
    revision: "634304b5141b19400e056f102f51fbd8"
  },
  {
    url: "tags/do-not-offend/index.html",
    revision: "519abebdabbe575a4ef9421b75d6ffeb"
  },
  {
    url: "tags/dojo/index.html",
    revision: "844d05a2a7b8fbf2f1c07142eebe09a4"
  },
  {
    url: "tags/dont-starve-game/index.html",
    revision: "9897656f5623f495443baaa7c3de0937"
  },
  {
    url: "tags/dont-starve-review/index.html",
    revision: "4841beed856e6b1224ab8bd2f82124df"
  },
  {
    url: "tags/dont-starve/index.html",
    revision: "8ff0ad226d0c22888856cfbdae1775e9"
  },
  {
    url: "tags/doubloon/index.html",
    revision: "0dd5f297926a6d6bb620ba29a7983ef2"
  },
  {
    url: "tags/download-mp3/index.html",
    revision: "cab9e6ceb18edfb436e21c9dd1512b2f"
  },
  {
    url: "tags/drop-out/index.html",
    revision: "cfd3cee6cab626d1dd6434d584a1427e"
  },
  {
    url: "tags/dropbox/index.html",
    revision: "9e00356dc712293cf57d394a10449eec"
  },
  {
    url: "tags/duck-bill/index.html",
    revision: "934046d06b355d3d5b1b150dec712ac3"
  },
  {
    url: "tags/economy/index.html",
    revision: "0e642d3a7f2ae4d74ecc9a2eb733c316"
  },
  {
    url: "tags/edgar-allen-poe/index.html",
    revision: "f8294a16a37827cc4bb4f28559040562"
  },
  {
    url: "tags/egghead.io/index.html",
    revision: "fadef372701cd09a8ea682ff89294c25"
  },
  {
    url: "tags/el-capitan/index.html",
    revision: "a6d92f3df0bfae8d80d83fdd2d838fad"
  },
  {
    url: "tags/ell/index.html",
    revision: "acbddb0bef64614bcd5e025ef420ad52"
  },
  {
    url: "tags/eloquent-javascript/index.html",
    revision: "88f089f342c1cb5a5536ebd988d06ade"
  },
  {
    url: "tags/email/index.html",
    revision: "ea155f2f19f61a592a473da65b704093"
  },
  {
    url: "tags/emails/index.html",
    revision: "bf36bbb15b2da30c5aca233493a24803"
  },
  {
    url: "tags/emoji/index.html",
    revision: "54100cfa9d34282dc6e21b7d0ba153b2"
  },
  {
    url: "tags/emotions/index.html",
    revision: "00d709351fc4c072634d16889e1fcbc6"
  },
  {
    url: "tags/ender-wiggin/index.html",
    revision: "d536bda77378131dbd482766c0496674"
  },
  {
    url: "tags/ender/index.html",
    revision: "de8cd8b7d77f5cccd1839162d366cb8d"
  },
  {
    url: "tags/enders-game/index.html",
    revision: "e77647c264276226a92a9a4f9dccf9ad"
  },
  {
    url: "tags/endevr/index.html",
    revision: "e80d5f74ad835bf1a8b4d2694015959d"
  },
  {
    url: "tags/engineers/index.html",
    revision: "4a11d6e4248271b3be59c1944c0fc18c"
  },
  {
    url: "tags/envy/index.html",
    revision: "855a9577e4ffd11a192c7a1ecda3344b"
  },
  {
    url: "tags/epoch/index.html",
    revision: "a2259242f8097b8aeb4d95f10bd66900"
  },
  {
    url: "tags/epsilon/index.html",
    revision: "421c1f257e2976a7da684750f72a5d13"
  },
  {
    url: "tags/equality/index.html",
    revision: "e4f965ae5d59db2cc2c859ccfbe0003f"
  },
  {
    url: "tags/equations/index.html",
    revision: "b3c7fd11ac43a5874b1a8eede2c37f2d"
  },
  {
    url: "tags/error/index.html",
    revision: "d4ea4052dc92e9478bdbc12dd52d08ae"
  },
  {
    url: "tags/essay-talks/index.html",
    revision: "874cabc06ee8f3dd50aaaf6d54259a99"
  },
  {
    url: "tags/essays/index.html",
    revision: "c225cdca6c8657b42999b8294223b2dd"
  },
  {
    url: "tags/ethnicities/index.html",
    revision: "afaca074f238a363926d6dec0af62219"
  },
  {
    url: "tags/exams/index.html",
    revision: "51b3061776d733ad7096a22e04233f0e"
  },
  {
    url: "tags/experience/index.html",
    revision: "3f4c08ed4fd9fd9a6270241f386d50c9"
  },
  {
    url: "tags/experimentorders/index.html",
    revision: "76ced73851a1da7c335849d2cf8c4ec9"
  },
  {
    url: "tags/exploits/index.html",
    revision: "772c7c012444eb995bb0940dc2a26907"
  },
  {
    url: "tags/extension/index.html",
    revision: "71b9988d3e92726eaebb287e30937cb4"
  },
  {
    url: "tags/extensions/index.html",
    revision: "8af5cf9fdbdaac7fe79e13637d358f28"
  },
  {
    url: "tags/facebook-page/index.html",
    revision: "41f979395c7514f6a4c05a116a21f3dc"
  },
  {
    url: "tags/facebook/index.html",
    revision: "e39395c89a1f24d53ee26859cb571154"
  },
  {
    url: "tags/factorials/index.html",
    revision: "8051c7dc1b43842cc17b411c4c6bb985"
  },
  {
    url: "tags/fahrenheit/index.html",
    revision: "da5c1c243879a32a099f83cfa6e90032"
  },
  {
    url: "tags/fairy/index.html",
    revision: "6d5e4f92dd230cd6c0e53759ed201eec"
  },
  {
    url: "tags/falling/index.html",
    revision: "a72e1ec7e07c48c27daa8ede3a5b042e"
  },
  {
    url: "tags/famine/index.html",
    revision: "9c5b31b06d64cf9d82e2f927a7c0441f"
  },
  {
    url: "tags/famo.us-university/index.html",
    revision: "21a715ae42100703658bddb729574376"
  },
  {
    url: "tags/fantasy-novels/index.html",
    revision: "2c78a681eb106e1c6f6b83aca886bd23"
  },
  {
    url: "tags/fantasy/index.html",
    revision: "f85f531f1b89aa42ca72a9053b49e438"
  },
  {
    url: "tags/fast-growing-industry/index.html",
    revision: "7f9683a0c9776bd18696e2cbc79ad651"
  },
  {
    url: "tags/fear/index.html",
    revision: "e6c81ac93aa64038cdc3a997b06113c3"
  },
  {
    url: "tags/featured/index.html",
    revision: "6000d9404998f3c3f0c20baff641221b"
  },
  {
    url: "tags/february-2015/index.html",
    revision: "dbcb2591c180854d9ec01661d1f18ddd"
  },
  {
    url: "tags/february/index.html",
    revision: "73a21989a70c1604a1e3be73d97910df"
  },
  {
    url: "tags/fibonacci/index.html",
    revision: "d3a59c69a1475af7c63dfee52e711639"
  },
  {
    url: "tags/film/index.html",
    revision: "89e6f90105e9dd3b8d91a6cfa376c657"
  },
  {
    url: "tags/final-cut-pro-x/index.html",
    revision: "2673d171dd989afc217cb4c47d414e67"
  },
  {
    url: "tags/final-project/index.html",
    revision: "e33f19b45e681b14d3253c6c71cd254c"
  },
  {
    url: "tags/finding/index.html",
    revision: "3d758a5499aac21eda87abd7d1946c44"
  },
  {
    url: "tags/firehose-project/index.html",
    revision: "606fcd434e7fac97a761e65ccef55e19"
  },
  {
    url: "tags/first-meetup/index.html",
    revision: "c0d39a446c9d9baabe9939fe8de03d69"
  },
  {
    url: "tags/first-week/index.html",
    revision: "7611cd256805a7d5c0ffe8121f3dbdf8"
  },
  {
    url: "tags/flashcard-design/index.html",
    revision: "82bfee9e87daf584c0b722d1c8357b71"
  },
  {
    url: "tags/flashcards/index.html",
    revision: "60a51196581d318dfcdd9dc1817877c9"
  },
  {
    url: "tags/flatiron/index.html",
    revision: "9167aab91577d70a082646d8e0ee61ff"
  },
  {
    url: "tags/flavours/index.html",
    revision: "888466f9f185604ae3f0263c1287dfda"
  },
  {
    url: "tags/flights/index.html",
    revision: "18d91943b536eb4d82f4f96f99ea709a"
  },
  {
    url: "tags/float/index.html",
    revision: "a645705b92bfb342967e5a95ecf0be1f"
  },
  {
    url: "tags/floating-point/index.html",
    revision: "f0094d4f9bba905681279cb6c871b9dc"
  },
  {
    url: "tags/flux/index.html",
    revision: "1d3d47c4d0fcc9eef170cbf39ef9617a"
  },
  {
    url: "tags/formic/index.html",
    revision: "77253dbb50361004e944a3c39e6c637f"
  },
  {
    url: "tags/formula/index.html",
    revision: "e509280861236d2dea51d96135b1d1d9"
  },
  {
    url: "tags/foundations/index.html",
    revision: "553f59af26ac7a2b32fcbd14edcb3b15"
  },
  {
    url: "tags/founders/index.html",
    revision: "86c9add28ee452e05b765dfe2e413b67"
  },
  {
    url: "tags/fragile/index.html",
    revision: "23b4ec4d37e15bdefd7350ecaadf7eba"
  },
  {
    url: "tags/frameworks/index.html",
    revision: "6cc213ee9befb6a22818f0aa66429065"
  },
  {
    url: "tags/frankenweenie/index.html",
    revision: "8ce5bf3fdc1d9909d5ec8ab9477a33b3"
  },
  {
    url: "tags/free-code-camp/index.html",
    revision: "d9eb1c7618c048cd522f64da6c009544"
  },
  {
    url: "tags/freeman/index.html",
    revision: "65256fccef9fce7ca60fe0f495c0ab5e"
  },
  {
    url: "tags/friends-and-family/index.html",
    revision: "dfc71f91c83ec2b3702222c2e683033f"
  },
  {
    url: "tags/friendship/index.html",
    revision: "ba4afb82a83e41c6c74907b781af55d1"
  },
  {
    url: "tags/fuck/index.html",
    revision: "202143bdda40478b10353cf35f4f490f"
  },
  {
    url: "tags/fucking/index.html",
    revision: "ef6ae620cc11d3463f013bb032392681"
  },
  {
    url: "tags/full-stack-academy-of-code/index.html",
    revision: "7b64392a3c896766abc60c69602610d5"
  },
  {
    url: "tags/full-stack/index.html",
    revision: "b5304b198eeb7c4a49f8d5c6acac409f"
  },
  {
    url: "tags/full/index.html",
    revision: "664e39b77953e86abe74d04062b25433"
  },
  {
    url: "tags/fullstack-academy-of-code/index.html",
    revision: "d00be92073db642e1b0a650edb162964"
  },
  {
    url: "tags/fullstack-academy-week-4/index.html",
    revision: "eb0f55c1a985fa57fbe35080a0cadb36"
  },
  {
    url: "tags/fullstack-academy-week-5/index.html",
    revision: "ede0763e1ca904243ff8fc0124a1832d"
  },
  {
    url: "tags/fullstack-academy/index.html",
    revision: "7bfea0da2ab8e706ebe0434b8c0aa77a"
  },
  {
    url: "tags/fullstack-beta/index.html",
    revision: "74f1d98219b273ea83baa406fa0b77a3"
  },
  {
    url: "tags/fullstack-experience/index.html",
    revision: "1b6a2553909e594afa1050efb6845590"
  },
  {
    url: "tags/fullstack-fellows/index.html",
    revision: "36af3e7f5b3265ab3d9b564fa26a5f78"
  },
  {
    url: "tags/fullstack-foundations/index.html",
    revision: "2202ee3181620c0d975f3accaedb21aa"
  },
  {
    url: "tags/fullstack-javascript-coding-bootcamp/index.html",
    revision: "771972cc25aa41989d089fb367801c39"
  },
  {
    url: "tags/fullstack-week/index.html",
    revision: "b73836c2edc1f43eeea8072cba56846f"
  },
  {
    url: "tags/fullstack/index.html",
    revision: "b044194c6d9cdfc01ca55bfa064cb471"
  },
  {
    url: "tags/fundamentals/index.html",
    revision: "b3214adb523027a0ae01e1d726b90337"
  },
  {
    url: "tags/funny/index.html",
    revision: "b2ef3d04b7aa4ff72f9e26a360cba6ea"
  },
  {
    url: "tags/future-plans/index.html",
    revision: "e1cb0c341a248e09a39bb23adf41bcd5"
  },
  {
    url: "tags/fvcproductions/index.html",
    revision: "f26dc979c598040ec51ebb3158b86f20"
  },
  {
    url: "tags/game-review/index.html",
    revision: "48d6d3cac70559abdeef11da6c3c879a"
  },
  {
    url: "tags/game/index.html",
    revision: "6cca63ae84917226ca5bb50e740a3285"
  },
  {
    url: "tags/games-night/index.html",
    revision: "e353146582013bb2cc0ffa04256ce7ee"
  },
  {
    url: "tags/games/index.html",
    revision: "09d75a4552a93374000e0a12bda25037"
  },
  {
    url: "tags/gaming/index.html",
    revision: "18a5343033df4cdefd1655e3f66e4ea8"
  },
  {
    url: "tags/gamma/index.html",
    revision: "4507b2034b3ec59b271460b2bc52d8a4"
  },
  {
    url: "tags/gates/index.html",
    revision: "d04c8aa1745cea7f83964ab09e3220da"
  },
  {
    url: "tags/gavin-young/index.html",
    revision: "dddfc7f0af860ddc69912149e40ec579"
  },
  {
    url: "tags/gay-marriage-legal-now/index.html",
    revision: "6b827bbd7d7d19c584c65233b1921ed7"
  },
  {
    url: "tags/gdg-hampton-roads/index.html",
    revision: "a8f15824494be993b443d747d59d481a"
  },
  {
    url: "tags/gender/index.html",
    revision: "54b0278e9256cc3dbad09be562db01de"
  },
  {
    url: "tags/general-assembly/index.html",
    revision: "e7e2fe58db50753698c4d8fac9142f06"
  },
  {
    url: "tags/georgia-tech/index.html",
    revision: "348d26dd397f10490e25c8b8b21563e8"
  },
  {
    url: "tags/gettemplate/index.html",
    revision: "f6819c1dd68409437dbe96d112c45e2f"
  },
  {
    url: "tags/gif/index.html",
    revision: "1c3f1507053f87622a4d956b2caec3f9"
  },
  {
    url: "tags/gifs/index.html",
    revision: "2837556c8b0c34cb4fce5a0b19b9e2f9"
  },
  {
    url: "tags/gist/index.html",
    revision: "b64cf2b0d2343e8794f5461fc290972f"
  },
  {
    url: "tags/github-projects/index.html",
    revision: "6996c351546f87506723d5d02d6abc9a"
  },
  {
    url: "tags/github/index.html",
    revision: "4806ef468e2860baa8dfdcd76a6d1d8c"
  },
  {
    url: "tags/giving-back/index.html",
    revision: "23b4255c6c435a588b6fa8ff3857a1f7"
  },
  {
    url: "tags/glimpse/index.html",
    revision: "ec58faf0be7552f07c40dc44de113b49"
  },
  {
    url: "tags/gluttony/index.html",
    revision: "28e679f95a800e6966f43462846d27f4"
  },
  {
    url: "tags/gmail/index.html",
    revision: "82b014f63472cd943db7522929799595"
  },
  {
    url: "tags/gold-doubloons/index.html",
    revision: "223b1703019ff3f5690eaf744253a652"
  },
  {
    url: "tags/gold/index.html",
    revision: "bd6838e9df609ec9319c2a497070d7ca"
  },
  {
    url: "tags/goldman-sachs/index.html",
    revision: "4c7e105f445fe6fe9e73628c859e5c0f"
  },
  {
    url: "tags/good-looks/index.html",
    revision: "e91b725644b65792df6cbd365ce53a18"
  },
  {
    url: "tags/googl/index.html",
    revision: "5906a565dfe2be091e6217411443627b"
  },
  {
    url: "tags/google-map/index.html",
    revision: "99b565fb99349f914607a95bd442ca48"
  },
  {
    url: "tags/google-maps-api/index.html",
    revision: "4e3b6f27a735061cf8f4ce12bd4edac8"
  },
  {
    url: "tags/google-slides/index.html",
    revision: "e0bc356b179c561c6d429f2efaf66b24"
  },
  {
    url: "tags/google+/index.html",
    revision: "1df9abe30a83ca99577d6dea75fa51ed"
  },
  {
    url: "tags/gottfrid-svartholm/index.html",
    revision: "0568913e7e17fdd9898a780cbebdaf88"
  },
  {
    url: "tags/grace-hopper/index.html",
    revision: "d9fcca0ffc478b46b727f35ef6141ce3"
  },
  {
    url: "tags/graduate-school/index.html",
    revision: "62f435574a44b8f3fd469002b42bc477"
  },
  {
    url: "tags/graduate/index.html",
    revision: "dadd6a0c89b3c32d77fb3b9859da54fb"
  },
  {
    url: "tags/graduating/index.html",
    revision: "baad871933a4be2a0b0ee6fb60a0ff1a"
  },
  {
    url: "tags/grand-gallery/index.html",
    revision: "2db7395ee10acc40cea533c5be7d3e8e"
  },
  {
    url: "tags/graphic-design-bootcamp/index.html",
    revision: "adf8285a322bcf4bd299e9cc70596658"
  },
  {
    url: "tags/graphic-design/index.html",
    revision: "0c600bac8d253d6e0e3ece4edc45b4b9"
  },
  {
    url: "tags/gratitude/index.html",
    revision: "16a3356d580cdd053d10f59135bcbecb"
  },
  {
    url: "tags/gre/index.html",
    revision: "6eedd8cb7bb87ef8826d1f0ef3a3c6a6"
  },
  {
    url: "tags/greed/index.html",
    revision: "ba5ec07576e3a9394ddef4cecd384467"
  },
  {
    url: "tags/greek-letters/index.html",
    revision: "9b5788084b048918a88c7dbe880da93f"
  },
  {
    url: "tags/growth/index.html",
    revision: "aa9c317f5a644d1fc51e3b629ebf798c"
  },
  {
    url: "tags/hack-app/index.html",
    revision: "d9e0974cceb049e4a63a79ba1635e553"
  },
  {
    url: "tags/hack-reactor/index.html",
    revision: "e0bfb04a8048ea2bee4736e6d2b0af7e"
  },
  {
    url: "tags/hackathon-starter/index.html",
    revision: "7688d911f218148b430a31b3ba957471"
  },
  {
    url: "tags/hackathons/index.html",
    revision: "e5f491626544e1f0242d716071a9bbb7"
  },
  {
    url: "tags/hacker-in-residence/index.html",
    revision: "0507fecd2f6ffa5767223f40d8576efe"
  },
  {
    url: "tags/hacking/index.html",
    revision: "c331edbb4d4f7f02e26e6ce03ba58578"
  },
  {
    url: "tags/hackreactor/index.html",
    revision: "8593ef7978a88945febf3ea82e72216d"
  },
  {
    url: "tags/hampton-roads-devfest/index.html",
    revision: "d179a713f1b63201bbbcb3f0d066865e"
  },
  {
    url: "tags/hampton-roads/index.html",
    revision: "23d5761ea06b9f3ed1be2ed3e8d3562b"
  },
  {
    url: "tags/hampton-university/index.html",
    revision: "3d60ff57d899628ae0f25c9c1300eee6"
  },
  {
    url: "tags/hampton/index.html",
    revision: "df42f104efa89fffd8fe67e7075f3385"
  },
  {
    url: "tags/hands-clean/index.html",
    revision: "0bfa194d07adaa3d1392baba978be90f"
  },
  {
    url: "tags/hands/index.html",
    revision: "a3eca2f83380e70b1d46abb4087e36bf"
  },
  {
    url: "tags/harry-potter/index.html",
    revision: "b7bd2477cd30292f77c050be59fec707"
  },
  {
    url: "tags/harvey-mudd/index.html",
    revision: "660ea3557c61c1c12db609dd5a6b42bf"
  },
  {
    url: "tags/hawaii/index.html",
    revision: "7dd53c9ba727272eb21e5d265786c3df"
  },
  {
    url: "tags/head/index.html",
    revision: "30a8b87fcb95dd2908da9d36c68de2f8"
  },
  {
    url: "tags/heap-sort/index.html",
    revision: "102e3cd6bcc0b9b22614b12508c861a8"
  },
  {
    url: "tags/heart/index.html",
    revision: "7202142b9300512051c45ec9952730dc"
  },
  {
    url: "tags/hearty/index.html",
    revision: "ee598dfb631fcedefe522052fb420fca"
  },
  {
    url: "tags/hector-barbossa/index.html",
    revision: "38476d8e784becadc3608d3abc5a823b"
  },
  {
    url: "tags/hemingway/index.html",
    revision: "766a4a507dad790a20d0305dd78aec51"
  },
  {
    url: "tags/hexadecimal-numbers/index.html",
    revision: "2ae96132ec7ef52aea221592cac37b8d"
  },
  {
    url: "tags/hexadecimal/index.html",
    revision: "5d1abe4bcdb946bb8a6cc304bc056424"
  },
  {
    url: "tags/hieroglyphics/index.html",
    revision: "c1e232d714b33ba49430c7150dfedcfd"
  },
  {
    url: "tags/high-school-volunteering/index.html",
    revision: "9724c1aff243bf3d2d087f32bc0d1e15"
  },
  {
    url: "tags/high-school/index.html",
    revision: "059cf6617b0a24dc9d8f98d4a699aa1d"
  },
  {
    url: "tags/hip-hop/index.html",
    revision: "15882cad443c5c6cb2d10f3b3ec99ca8"
  },
  {
    url: "tags/hiredot/index.html",
    revision: "108d66125ddb9460a8e00b272a529cc9"
  },
  {
    url: "tags/hiredot2/index.html",
    revision: "6cc3d419af2cb1e11d2af365d30c9d9c"
  },
  {
    url: "tags/hispanics-in-computing/index.html",
    revision: "c2519f1fef115b7d0dcd76991e83954b"
  },
  {
    url: "tags/hollow-knight/index.html",
    revision: "eb3b705db4dc0a038139a907c4498351"
  },
  {
    url: "tags/holocaust/index.html",
    revision: "a6701aa92848ee4ffcef525e039124ad"
  },
  {
    url: "tags/holy-grail/index.html",
    revision: "559f13910db1d482436d2459afeb8d55"
  },
  {
    url: "tags/homework-assignment/index.html",
    revision: "b4e2d5d9e64ff934d0f12dfaae7b9182"
  },
  {
    url: "tags/hoot-suite/index.html",
    revision: "bb24216b91bb950d1b8b9b1f484ee6d7"
  },
  {
    url: "tags/horror/index.html",
    revision: "0ebe21a09e8f2e55eaf5fefd86a480de"
  },
  {
    url: "tags/hot-seat/index.html",
    revision: "d558f121b47140f81f8342b913ea079b"
  },
  {
    url: "tags/hour-of-code-code.org/index.html",
    revision: "07c7c6b3fa6e12c16c1fb2765cdde9ef"
  },
  {
    url: "tags/hour-of-code/index.html",
    revision: "f051734564d0bac3a3358a8e3a364f3c"
  },
  {
    url: "tags/hour/index.html",
    revision: "1eaddfaf330b6232028bf7ce04772ad0"
  },
  {
    url: "tags/hourofcode/index.html",
    revision: "3b060dd122f3165aae07a96f72aaa8db"
  },
  {
    url: "tags/house/index.html",
    revision: "660ca3ffcb70c93a2325142812aa29fd"
  },
  {
    url: "tags/how-to-describe-yourself/index.html",
    revision: "752546fbff4525683bd72f1ce45f1270"
  },
  {
    url: "tags/how-to-study/index.html",
    revision: "0b0422a3573baf0454bac4e2882ff1dc"
  },
  {
    url: "tags/hr-devfest/index.html",
    revision: "5db02d5247f192c70724d1b99169930c"
  },
  {
    url: "tags/hr-fen/index.html",
    revision: "e50736a7c058d4015aca191ca13cc0ae"
  },
  {
    url: "tags/hrdevfest/index.html",
    revision: "cf174ecded3a0b474027f338fea678b9"
  },
  {
    url: "tags/html/css/index.html",
    revision: "4cab275dd7c7bf324ea1802f012b270a"
  },
  {
    url: "tags/html/index.html",
    revision: "664fc11a9ca16332a445646af3d7fbea"
  },
  {
    url: "tags/html5/index.html",
    revision: "f976673b4d414c07bb73d5e1afcb940c"
  },
  {
    url: "tags/html5up/index.html",
    revision: "9fc1692fd63505587d02fea9ef382526"
  },
  {
    url: "tags/human-computer-interaction/index.html",
    revision: "e8f0454deacd0fd79440c75851efeffa"
  },
  {
    url: "tags/human-robot-collaboration/index.html",
    revision: "437e15a343358191753569341409a73c"
  },
  {
    url: "tags/humanity/index.html",
    revision: "f8bd87e69e78d08032e51f80b581a6ac"
  },
  {
    url: "tags/huntly/index.html",
    revision: "69df4b5d2696f4e704efbe35b2dc37a3"
  },
  {
    url: "tags/hyatt-regency/index.html",
    revision: "44b9b482034be8307807c4a504972230"
  },
  {
    url: "tags/ibm-watson-research/index.html",
    revision: "009718d0c8039c3ef2931f9e212e37ed"
  },
  {
    url: "tags/ibm-watson/index.html",
    revision: "3c81463ee9d90bee84f988a93c000f54"
  },
  {
    url: "tags/icon/index.html",
    revision: "2edd65bee153a452373e1fc483737ce7"
  },
  {
    url: "tags/ideas/index.html",
    revision: "c16390a1fbf57a0845a58524503447c7"
  },
  {
    url: "tags/idiotic/index.html",
    revision: "b8fec0ca08dd713d1b25044cfc920dfb"
  },
  {
    url: "tags/iftt/index.html",
    revision: "d7c99f8c35db4e3db570ac6c919fce4d"
  },
  {
    url: "tags/imcompetech/index.html",
    revision: "d7c3a93309726934b813f934bd4544ba"
  },
  {
    url: "tags/imovie101/index.html",
    revision: "ef22f1f542403b88b3c86b36ad12338a"
  },
  {
    url: "tags/import-multiple-fonts/index.html",
    revision: "e6e24268698b75a8593d5e949072505e"
  },
  {
    url: "tags/impossible-quiz/index.html",
    revision: "23cd716b2085511a0f72e4c794f2f1e3"
  },
  {
    url: "tags/index.html",
    revision: "fe17af925f7842790d794cb7ca10db55"
  },
  {
    url: "tags/indie-game/index.html",
    revision: "6369b193a4211143cf62524133992723"
  },
  {
    url: "tags/indie/index.html",
    revision: "d473242f54ade693d4bfcd25c4b54736"
  },
  {
    url: "tags/industry/index.html",
    revision: "f5029b39fb515dc75346aea8f7fd009f"
  },
  {
    url: "tags/infants/index.html",
    revision: "61829d2bd5cb728755fa283933ef7ea7"
  },
  {
    url: "tags/infoonepagelove.com/index.html",
    revision: "9172f5dfe811774faef2487f485d9c38"
  },
  {
    url: "tags/initial-interview/index.html",
    revision: "f90d94500ebf7a0677458e1e6f2e36f4"
  },
  {
    url: "tags/initializing/index.html",
    revision: "41b385d8a18a58b30063b9281f89ed95"
  },
  {
    url: "tags/inkling/index.html",
    revision: "7cd6d46e4cecbf158032194965084036"
  },
  {
    url: "tags/inklings/index.html",
    revision: "a23b976b89836bd3f6c83816091f479d"
  },
  {
    url: "tags/inorder/index.html",
    revision: "6a458eae913058fd5ff14cdc0b31e9e1"
  },
  {
    url: "tags/insert/index.html",
    revision: "7da8c1141591276cda9274601609a494"
  },
  {
    url: "tags/insertion-sorts/index.html",
    revision: "f2527fc02de2fe173ad149b488ebbf36"
  },
  {
    url: "tags/inside-out/index.html",
    revision: "9e62a99e1d51f4c45b67ce9880e3bfaa"
  },
  {
    url: "tags/inside/index.html",
    revision: "3365fbba642ebef65c6c9af2393e9b4b"
  },
  {
    url: "tags/installation/index.html",
    revision: "4d929b10f68c4503be234cf48569c9af"
  },
  {
    url: "tags/instructors/index.html",
    revision: "a80596c27a9bb0181ff92634b9a02101"
  },
  {
    url: "tags/insult/index.html",
    revision: "e99a688d5e6edc011be80bda73002437"
  },
  {
    url: "tags/insults/index.html",
    revision: "d0315e517e52f430281143fa4ebc81c1"
  },
  {
    url: "tags/int-node/index.html",
    revision: "3075492d2451dc9a7a9778861fcc0fc0"
  },
  {
    url: "tags/int/_node/index.html",
    revision: "dec9d9901639d08fc2b8d7091fc9b25f"
  },
  {
    url: "tags/integer/index.html",
    revision: "478e6b73a7d415743c5d46db1aa4264d"
  },
  {
    url: "tags/integers/index.html",
    revision: "83e7e7bb22d2f136e276b35d2967b43e"
  },
  {
    url: "tags/integrate-your-school-email/index.html",
    revision: "68597707e6090df94164bc85c4a8c3ce"
  },
  {
    url: "tags/integrated-systems/index.html",
    revision: "29796522ec6ea06986eba600b2d79097"
  },
  {
    url: "tags/intensive/index.html",
    revision: "ab28580278c60cedfc94536c51b2c365"
  },
  {
    url: "tags/interconnectedness/index.html",
    revision: "228eb2e3ee2ca27dfe7944e2f16a5ff8"
  },
  {
    url: "tags/interfeud/index.html",
    revision: "abf7a7984521ad89e6d965d574c41161"
  },
  {
    url: "tags/international-fleet-personnel/index.html",
    revision: "4c8232c309d4db56aa2727d3e10f3aca"
  },
  {
    url: "tags/internet-trolls/index.html",
    revision: "01426db4ffa610f329b423144d2f5a06"
  },
  {
    url: "tags/internship-interview/index.html",
    revision: "26886cecb03dec3c5246a0d3bfa0af5e"
  },
  {
    url: "tags/internships/index.html",
    revision: "c6bbfb4711c39a8644a1fce625604374"
  },
  {
    url: "tags/interview/index.html",
    revision: "60c479f0162142435eb23a57203b1879"
  },
  {
    url: "tags/interviewer/index.html",
    revision: "0803795da88e52431ce77f2bcf774841"
  },
  {
    url: "tags/interviews/index.html",
    revision: "ee5f0348c3467ac9be7066e114c8d93d"
  },
  {
    url: "tags/intro-course/index.html",
    revision: "eaf045585d77330d604f98e8bb33d907"
  },
  {
    url: "tags/intro/index.html",
    revision: "6ed25dab2afcb9b8d585729763ced893"
  },
  {
    url: "tags/ios/index.html",
    revision: "6052914b12770abcd32e69443460feb6"
  },
  {
    url: "tags/isaac/index.html",
    revision: "46908f720eb597e0de43a4d2c02d6e30"
  },
  {
    url: "tags/it-crowd/index.html",
    revision: "a49ba125b015eed55acde991e5e3d722"
  },
  {
    url: "tags/jack-sparrow/index.html",
    revision: "c82632b6a8a90b1670cf9a9fdc11ee87"
  },
  {
    url: "tags/jason-sewell/index.html",
    revision: "500fa8c705c129c8dd2c56aa37bcf54f"
  },
  {
    url: "tags/java-arrays/index.html",
    revision: "e6e2938dee83397a82da25f96bba48f9"
  },
  {
    url: "tags/java-decompiler/index.html",
    revision: "a279926bdb204f7f4aa2fdf94198db7f"
  },
  {
    url: "tags/java-program/index.html",
    revision: "7359a6f88b4223dd25142dce2bf3c4a7"
  },
  {
    url: "tags/java-programming/index.html",
    revision: "0feb2209cbc80764dbc8bce7aaa47d38"
  },
  {
    url: "tags/java-queues/index.html",
    revision: "09d51004c0b0c54142b9dead97b6f247"
  },
  {
    url: "tags/java/index.html",
    revision: "8747ce4c3a12b54d5261feb2ee2d5219"
  },
  {
    url: "tags/javascript/index.html",
    revision: "fe3c57c248d30b144e29d7b8a89bbda9"
  },
  {
    url: "tags/jd.benow.ca/index.html",
    revision: "32e0d5aec2a99108439d054a73dfa7f1"
  },
  {
    url: "tags/jd/index.html",
    revision: "d6bea126af581638a02623fdde383760"
  },
  {
    url: "tags/jekyll/index.html",
    revision: "41ad038ac53a7c02d6cdd4a745500447"
  },
  {
    url: "tags/jeopardy-template/index.html",
    revision: "424af0dcf8599a8e71fbbeff8597367b"
  },
  {
    url: "tags/jeopardy/index.html",
    revision: "d0ea2203d69eb76d0f482fde5b4472d2"
  },
  {
    url: "tags/jesus/index.html",
    revision: "f21c913ebe2c38ba580106b2aa6a8b8d"
  },
  {
    url: "tags/jewish-holocaust/index.html",
    revision: "0dabc9c1f7d890af250315b4bbd5900a"
  },
  {
    url: "tags/jimmy/index.html",
    revision: "31b855df23bddeb9a6d743ed86727e0e"
  },
  {
    url: "tags/joanna/index.html",
    revision: "784f4c175a7deda9a129b50785d4e464"
  },
  {
    url: "tags/jobs-going-to-robots/index.html",
    revision: "0e50d2e3abba0d2b3314354fe971e481"
  },
  {
    url: "tags/jobs/index.html",
    revision: "da78a1d8984871bde9be7f95b7168e1e"
  },
  {
    url: "tags/john-b-dey-elementary/index.html",
    revision: "a8dd85debda678e72c0ded3ad77796a2"
  },
  {
    url: "tags/john-b-dey/index.html",
    revision: "085b018f576f2dc1d025d2e9bdefddea"
  },
  {
    url: "tags/johnny-depp/index.html",
    revision: "f6dad21f10423c4e7c73dfa2fbb47421"
  },
  {
    url: "tags/journalism/index.html",
    revision: "c621c7438b92a811dc9f2b8f73da8827"
  },
  {
    url: "tags/journey-so-far/index.html",
    revision: "7a5a12cd3ae27f56a8f7f65fe50f9974"
  },
  {
    url: "tags/journey/index.html",
    revision: "272b4eb20961ee71b95715938673c5d2"
  },
  {
    url: "tags/jquery/index.html",
    revision: "38486dfd32fa034f2ae1762241bcdbec"
  },
  {
    url: "tags/js-coding-bootcamps/index.html",
    revision: "9d22b318395332630087534de9cc08ae"
  },
  {
    url: "tags/js-library/index.html",
    revision: "719aca80e689838c72b493037c9d1ea6"
  },
  {
    url: "tags/js/index.html",
    revision: "508d2368af4eea568e86a066b1922058"
  },
  {
    url: "tags/juan-gilbert/index.html",
    revision: "1814b4466a42e4559b886c0baa8e47e6"
  },
  {
    url: "tags/jubilant/index.html",
    revision: "1b70cb58bcd3cd18c169e684dfe3a861"
  },
  {
    url: "tags/jumpstart/index.html",
    revision: "adba398798b1b75087e6bea1e338da46"
  },
  {
    url: "tags/just-dance-2014/index.html",
    revision: "dd0ca8ea83e1db054ebac78b8eb82135"
  },
  {
    url: "tags/justin/index.html",
    revision: "2d267b370186f1de2fd604ffa783bf94"
  },
  {
    url: "tags/katherine-gilhooley/index.html",
    revision: "5eb01d39ac6baffb74290758229c8172"
  },
  {
    url: "tags/key/index.html",
    revision: "e99fbffaa988c0ea0eeb60e12c6dd01b"
  },
  {
    url: "tags/keyboard-instrument/index.html",
    revision: "e2fa119f75110c1a6846b4a87a9611bf"
  },
  {
    url: "tags/keynote/index.html",
    revision: "7ac6e079d28fdcdb62b36a637763b8d8"
  },
  {
    url: "tags/kickstarter/index.html",
    revision: "283b0c6d28d7e895169af86ff72b7648"
  },
  {
    url: "tags/kinecrtx/index.html",
    revision: "284a745a951e3159e930f98f69e7e3cf"
  },
  {
    url: "tags/kinect-sports-rivals/index.html",
    revision: "ac9337970f26c425a4bac656a32eda65"
  },
  {
    url: "tags/kinect-sports/index.html",
    revision: "7d154c7caaa043f2d684cc140546e9f9"
  },
  {
    url: "tags/kinect/index.html",
    revision: "66ef750e1067cc0b96e028cb1ea8001c"
  },
  {
    url: "tags/kiss/index.html",
    revision: "4bd7148a24c8560b3470076efbe1a547"
  },
  {
    url: "tags/klei-entertainment/index.html",
    revision: "6911c7b7319a511d610813e3fb490e22"
  },
  {
    url: "tags/knighthood/index.html",
    revision: "580916ebb41e5cc783b2f40ae4dd8846"
  },
  {
    url: "tags/ko/index.html",
    revision: "d3e6be99ee161ff61d0e2c544e68fe42"
  },
  {
    url: "tags/korea/index.html",
    revision: "42a62d56f3bd103af2513c8dc96744ae"
  },
  {
    url: "tags/kpcb-fellow-application/index.html",
    revision: "4785bdea182b8fe18f057251b3e96935"
  },
  {
    url: "tags/kudos/index.html",
    revision: "a8dbe6c95ed8c4300519b8fa01ccf270"
  },
  {
    url: "tags/labs/index.html",
    revision: "5c0bed98da0bb134206d251742f5a4bb"
  },
  {
    url: "tags/ladies-of-fullstack/index.html",
    revision: "eccd381605fa24d3a6b2e99d06abcb7c"
  },
  {
    url: "tags/langdon/index.html",
    revision: "1b2d46cc5e552effacff8d2352b57775"
  },
  {
    url: "tags/languages/index.html",
    revision: "ef04e954bca196801efff786801a19d1"
  },
  {
    url: "tags/laravel-5.3/index.html",
    revision: "0193c93c5d3dd084c4eda580cbcd8d39"
  },
  {
    url: "tags/laravel-5/index.html",
    revision: "bf0792f004fd4cced3593f32f906c41d"
  },
  {
    url: "tags/laravel/index.html",
    revision: "21d88aab1069a66a7dc595589a27465d"
  },
  {
    url: "tags/last-days/index.html",
    revision: "d7ce0a2e2966a2240d7eb462377a9958"
  },
  {
    url: "tags/last-stand-union-city/index.html",
    revision: "f2083d856d7312aceed796aba2bb78ad"
  },
  {
    url: "tags/last-stand/index.html",
    revision: "e1492d662f66639bb45e542ec1fe112e"
  },
  {
    url: "tags/latinos/index.html",
    revision: "f5970e86d88d1daf5a18c3f4e8eae051"
  },
  {
    url: "tags/lauch-academy/index.html",
    revision: "b905ac58da171277cd841ea9baf5ee0b"
  },
  {
    url: "tags/launch-academy/index.html",
    revision: "d4274c52e6290c406eee406bac48a9bf"
  },
  {
    url: "tags/launcher/index.html",
    revision: "e5efbd4ad7a4adcea3a67561346ad85f"
  },
  {
    url: "tags/launchpad-items-reset/index.html",
    revision: "18b5d86dd546fc7c620bdcf71617c2fe"
  },
  {
    url: "tags/launchpad/index.html",
    revision: "7d07419e6ac87e87241df67275c7a3c2"
  },
  {
    url: "tags/laws-of-power/index.html",
    revision: "7ea15714bccae39cbb789a5350c2ae1b"
  },
  {
    url: "tags/layout/index.html",
    revision: "38459896be03270a6440f5aa3c7c0447"
  },
  {
    url: "tags/learn-web-dev/index.html",
    revision: "fb07f46ee7b9ce866831c6b4e391fa8d"
  },
  {
    url: "tags/learning-team-lunch/index.html",
    revision: "7cd530c8b53f43fb5ed749d325f32082"
  },
  {
    url: "tags/learning-team/index.html",
    revision: "ece8ab4d806c5b7df0fff3aa9adb57c1"
  },
  {
    url: "tags/learning/index.html",
    revision: "5ee51c020df522a05c0fa0ac12d4fbd5"
  },
  {
    url: "tags/left-subtree/index.html",
    revision: "9d29cdee0636e5f1be602f264a4755a8"
  },
  {
    url: "tags/left/index.html",
    revision: "bf1d82c8924fb4ac9ce3db362be54197"
  },
  {
    url: "tags/lenovo/index.html",
    revision: "94d1737c82d2e94c14c977507b5ac6b9"
  },
  {
    url: "tags/letter/index.html",
    revision: "ac81224c00a57c185b2ab48f2c6f6eb9"
  },
  {
    url: "tags/levels-of-communication/index.html",
    revision: "747a36fad3da345a91c29e35288333ef"
  },
  {
    url: "tags/lighthearted/index.html",
    revision: "736a51673801496b234fd267664cc6fd"
  },
  {
    url: "tags/limbo-game/index.html",
    revision: "a715f26fcfca2180a1ecead93795ac8d"
  },
  {
    url: "tags/limbo/index.html",
    revision: "b11aa17e836f50c68bb5b82f5566bc84"
  },
  {
    url: "tags/link/index.html",
    revision: "a4345c6ed60ce37c13bb46c5b738fe6e"
  },
  {
    url: "tags/linked-in/index.html",
    revision: "46b30604dfef6257295103901d22ca14"
  },
  {
    url: "tags/linked-lists/index.html",
    revision: "db2a75b01fdf428e2b3c4ba90086e26f"
  },
  {
    url: "tags/linkedin/index.html",
    revision: "a17bcbc38f067a0896222d1d59be982c"
  },
  {
    url: "tags/lips/index.html",
    revision: "f7f8a621f47fe3857064c88e641f38f7"
  },
  {
    url: "tags/list/index.html",
    revision: "63fa0feb2beb6a8f34b937e0afa9c4fd"
  },
  {
    url: "tags/liteicon/index.html",
    revision: "bf66a5a4163d06dac5305d274de9dc0d"
  },
  {
    url: "tags/load-unpacked-extension/index.html",
    revision: "4426ffc2b9fa96b6394da19e240507e7"
  },
  {
    url: "tags/logistics/index.html",
    revision: "f729d12a3e3507b6166672f3178a4fef"
  },
  {
    url: "tags/lonely/index.html",
    revision: "6322ce54db9b199e7d73bf770854a14b"
  },
  {
    url: "tags/long-lists/index.html",
    revision: "7d35b72d2aa79a14bb45412ea1bdd61e"
  },
  {
    url: "tags/lord-of-the-flies/index.html",
    revision: "553c32b486105b42fbd246ebd2581ab4"
  },
  {
    url: "tags/lord-of-the-rings-return-of-the-king/index.html",
    revision: "e3ff03a9eec874d241ada72afa83279f"
  },
  {
    url: "tags/lord-of-the-rings/index.html",
    revision: "4ec14c89d30119c5b2685ac7ad46eb07"
  },
  {
    url: "tags/louvre/index.html",
    revision: "2dbdb9a939fbeb51d04975c00f16a9e4"
  },
  {
    url: "tags/love/index.html",
    revision: "4aa3c8f6ed6fd2480382b5ed0f7b2269"
  },
  {
    url: "tags/lunch/index.html",
    revision: "02ef671f31df95f59fc4c06d4295537c"
  },
  {
    url: "tags/lust/index.html",
    revision: "c7872873643bb1ac4d7535e3a88bbcfd"
  },
  {
    url: "tags/lynda.com/index.html",
    revision: "50aae145c5d6b400778a24847dc19271"
  },
  {
    url: "tags/mac/index.html",
    revision: "ec14b924118a0f6018852045692ae6d3"
  },
  {
    url: "tags/macabre/index.html",
    revision: "f223f18e8763c59140d096c5b3e20d78"
  },
  {
    url: "tags/macaroni/index.html",
    revision: "91b647972ab8e915fd00ca0e748c8080"
  },
  {
    url: "tags/machine-learning/index.html",
    revision: "3f284f6bc8e4d08013688f8cea71e518"
  },
  {
    url: "tags/mad-cowboy/index.html",
    revision: "d3d41bd8bc9c6855f57f6b27ce94b2e2"
  },
  {
    url: "tags/main-function/index.html",
    revision: "f300f15e48aa36a41356e0250d667ade"
  },
  {
    url: "tags/main-ideas/index.html",
    revision: "cce79c63d412070686d39bab9ef93d45"
  },
  {
    url: "tags/main-method/index.html",
    revision: "75c9f76cb2078fa21a63cf9b03279493"
  },
  {
    url: "tags/make-school/index.html",
    revision: "2d889469160e5fd25a3b984773d52bf3"
  },
  {
    url: "tags/maker-square/index.html",
    revision: "b99a5f34749620dbb057273918acc447"
  },
  {
    url: "tags/maker/index.html",
    revision: "f4d382d6c933e09fcbac06bfab480efb"
  },
  {
    url: "tags/makersquare/index.html",
    revision: "851374cc243d57b165f81516fc08d095"
  },
  {
    url: "tags/man/index.html",
    revision: "f7e108e33460960f5a73ac77b029ad8c"
  },
  {
    url: "tags/manifest.json/index.html",
    revision: "16406258e96d042657d5a7e0a13cdbc6"
  },
  {
    url: "tags/manuel-perez/index.html",
    revision: "3cc4004d90ae2a82d952136e4ef0d9ff"
  },
  {
    url: "tags/manuel/index.html",
    revision: "9b1a2d9faa19828259b8261184909f35"
  },
  {
    url: "tags/map-me/index.html",
    revision: "87c896181f1b625f28da95b869428c2f"
  },
  {
    url: "tags/map-of-coding-bootcamps/index.html",
    revision: "1eb5703e30507987b47fe1dbcb1b5c16"
  },
  {
    url: "tags/map/index.html",
    revision: "bef7250678a869fffc0509e0ed7e486c"
  },
  {
    url: "tags/mapme/index.html",
    revision: "c48bf8fe8b25b89b756901df5fe70e5e"
  },
  {
    url: "tags/mario-kart/index.html",
    revision: "eec60f19f7fa3ac773795123021e96e5"
  },
  {
    url: "tags/mario/index.html",
    revision: "7a3749ba79f6bfcf02ac83b3971ead3b"
  },
  {
    url: "tags/market-size/index.html",
    revision: "587f8a1f419c012ab89d99cc983bf07f"
  },
  {
    url: "tags/massachusetts/index.html",
    revision: "e9b59ead5dd346bea347db716563eb92"
  },
  {
    url: "tags/materialism/index.html",
    revision: "af3967f06ce3644e7fc3c3845d41550b"
  },
  {
    url: "tags/math-functions/index.html",
    revision: "47b62f46bdfc42639dd9ca568134ef83"
  },
  {
    url: "tags/math-java/index.html",
    revision: "645882926f89e2503590c97f928294e2"
  },
  {
    url: "tags/matthew-fontaine-maury-high-school/index.html",
    revision: "99300109167ab40d5765e86e4eb1e391"
  },
  {
    url: "tags/maurice-moss/index.html",
    revision: "b2b71dee577a9a7a458758112dac4c8b"
  },
  {
    url: "tags/maury-high-school/index.html",
    revision: "8343e4d3ed7503c7a3597f9fbb555a38"
  },
  {
    url: "tags/maxs-head/index.html",
    revision: "525b7a850aa4cc22d294d35f2a914caa"
  },
  {
    url: "tags/mean/index.html",
    revision: "d1f60bbd9ccdae1738a61176f6703ed6"
  },
  {
    url: "tags/meat-boy/index.html",
    revision: "3e6ad450b8b215813dcc984485a7c3c3"
  },
  {
    url: "tags/medium/index.html",
    revision: "b6bb821f6102bda328aecd8f4bd58c78"
  },
  {
    url: "tags/meetup/index.html",
    revision: "4d2c4fdbe78a382aa8262ccab2c989b2"
  },
  {
    url: "tags/meetups/index.html",
    revision: "1055c928d7036028233a6b8111e65c04"
  },
  {
    url: "tags/melodrama/index.html",
    revision: "76bc64066ded34d1529d41171c9745b7"
  },
  {
    url: "tags/memory-address/index.html",
    revision: "e3bf4860e165ae9d7e195eb776f5f8d4"
  },
  {
    url: "tags/mentoring/index.html",
    revision: "8b96b92df7c765b72532fb202e09712e"
  },
  {
    url: "tags/merge-sort/index.html",
    revision: "8889afad126f14685fd1e6077135e369"
  },
  {
    url: "tags/merger/index.html",
    revision: "a91dfca65ae4f216814b3e94934ca46a"
  },
  {
    url: "tags/michael/index.html",
    revision: "d61842cc5b697fb4f45d13e54de52ffd"
  },
  {
    url: "tags/middle-school-poems/index.html",
    revision: "b6289bdc277c9a37b8f1a189279f1abc"
  },
  {
    url: "tags/midterm/index.html",
    revision: "7056848139563207166484bdc0034610"
  },
  {
    url: "tags/migration/index.html",
    revision: "9ab71065fb5e9e421e8ba4c8f609e1af"
  },
  {
    url: "tags/miklos-nyiszli/index.html",
    revision: "4f8d16be1dd133c9bb1371ce30a0b94f"
  },
  {
    url: "tags/mini/index.html",
    revision: "6888ad819034428dae35c1166b665522"
  },
  {
    url: "tags/minions/index.html",
    revision: "6a26b45eaa2a819ccd71e2bc20fd003b"
  },
  {
    url: "tags/mint/index.html",
    revision: "3ae8b3f2ee5460ab0706af06fa52829c"
  },
  {
    url: "tags/mit/index.html",
    revision: "e38b79ab8c1e590a1a5368ba9b538e73"
  },
  {
    url: "tags/mixer/index.html",
    revision: "99eb821c823814f54cefbf29a461f0d3"
  },
  {
    url: "tags/mobile-phone/index.html",
    revision: "8dfcecaa2ad93b2a3c37813383558313"
  },
  {
    url: "tags/modern-tech/index.html",
    revision: "66dad82ec992d8c7485eb940a8ab2ad2"
  },
  {
    url: "tags/mom-problems/index.html",
    revision: "931dad2e869df7a161b2b89cb2e91f8a"
  },
  {
    url: "tags/mom/index.html",
    revision: "0bc8cfb50f979eb7dfabe62d604dd9bb"
  },
  {
    url: "tags/monsters/index.html",
    revision: "a5fe19adef4bafd71a0a7dc1930b6ad8"
  },
  {
    url: "tags/month-left/index.html",
    revision: "9cf563f434d10bf7920527d16acca1ca"
  },
  {
    url: "tags/morbid/index.html",
    revision: "332278e6f6459fdc92c3437a6eb602e1"
  },
  {
    url: "tags/mother/index.html",
    revision: "d8ac029a26bb111c48752ab05307f0da"
  },
  {
    url: "tags/motion/index.html",
    revision: "a2280f27cbc8979d89833185b59778d7"
  },
  {
    url: "tags/mountain-view/index.html",
    revision: "b374b0218292755eda889f48e9fb8aff"
  },
  {
    url: "tags/movies/index.html",
    revision: "eb0798885717a82b61368980f18462a7"
  },
  {
    url: "tags/mp3/index.html",
    revision: "d9608bb95feac1b051623be70b3e121b"
  },
  {
    url: "tags/museum/index.html",
    revision: "74005ff3f844d2e47257938fd01f1a9e"
  },
  {
    url: "tags/music/index.html",
    revision: "da468de7a3a6c48c43c964d7a89dd590"
  },
  {
    url: "tags/mvp/index.html",
    revision: "81603eccca0f3c723a78a2dcad00129b"
  },
  {
    url: "tags/neil-gaiman/index.html",
    revision: "833941faa4ad6566fcc9bd3c53eadd3f"
  },
  {
    url: "tags/never-outshine/index.html",
    revision: "6a74b2654676d77464cbc0f1919ec2d8"
  },
  {
    url: "tags/new-meetup/index.html",
    revision: "63053767dab5329a463c15d73d86123a"
  },
  {
    url: "tags/new-network/index.html",
    revision: "9d8aa2b98cd17b2f62329606e6ab2a10"
  },
  {
    url: "tags/new-super-mario-bros/index.html",
    revision: "fb4c1761f49918be8a7825b952ca668e"
  },
  {
    url: "tags/new-year/index.html",
    revision: "1f3e1fbbfdbce4e1a1708669614594c3"
  },
  {
    url: "tags/new-york-city/index.html",
    revision: "5497cb09dca09a909740d9d3a95f4094"
  },
  {
    url: "tags/news/index.html",
    revision: "57586e94d5d52ccc33b8e421a14dfa5e"
  },
  {
    url: "tags/nick-james/index.html",
    revision: "fb77f72729717e06b2aefff8e6408b35"
  },
  {
    url: "tags/nitty-gritty/index.html",
    revision: "9b4723b716e2907276e439c44dfc49f9"
  },
  {
    url: "tags/no-regrets/index.html",
    revision: "6d175a32daca9997b1d4fff76781fc4b"
  },
  {
    url: "tags/node/index.html",
    revision: "8b2bb2433b350e8422979995537cc669"
  },
  {
    url: "tags/nodes/index.html",
    revision: "946dec559984fdc168060effd8c9f90c"
  },
  {
    url: "tags/non-profit/index.html",
    revision: "9a11e74fc32b53970620d53755c281e3"
  },
  {
    url: "tags/noob/index.html",
    revision: "c291d21b91c7d8ac697cc87620a3d765"
  },
  {
    url: "tags/noobie/index.html",
    revision: "dc7dcd2bb4c8c1e3dbb4c9ebde130f5c"
  },
  {
    url: "tags/norfolk-javascript/index.html",
    revision: "36bc8e53e0a054da5f31e88f80829f76"
  },
  {
    url: "tags/norfolk-virginia/index.html",
    revision: "0a37ea2ca610860abc8914ddcae450a3"
  },
  {
    url: "tags/norfolk/index.html",
    revision: "a6d8aee69b54bdaccba4a9b273e636c8"
  },
  {
    url: "tags/norfolkjs-journey/index.html",
    revision: "8e941bec31a8e2284169d1b684c34ed8"
  },
  {
    url: "tags/norfolkjs/index.html",
    revision: "ed838489ae6b1db24595d102756ab9cb"
  },
  {
    url: "tags/north-korea/index.html",
    revision: "de7b323524b9c323972f18910679d0b1"
  },
  {
    url: "tags/north/index.html",
    revision: "dbf11cd2661b59019f47d737cb7abd4c"
  },
  {
    url: "tags/northwestern-university/index.html",
    revision: "264e56a972fcb504d2675f6c76d71a50"
  },
  {
    url: "tags/not/index.html",
    revision: "1c9ba687e4ff02c3cc78518628de7542"
  },
  {
    url: "tags/notes/index.html",
    revision: "8946d907676b000b446312d8179444a1"
  },
  {
    url: "tags/nothing-to-envy/index.html",
    revision: "1b0ec0545572e0be1cc5ea1dfe8c9015"
  },
  {
    url: "tags/nothing/index.html",
    revision: "af2c09616fda4099facadcbd8683f7b7"
  },
  {
    url: "tags/novel/index.html",
    revision: "6125ecfb2b0f1cc7454bbbda1a44d57a"
  },
  {
    url: "tags/null/index.html",
    revision: "98c7b30e9ff415369ba2ddb9bff20607"
  },
  {
    url: "tags/numbers/index.html",
    revision: "d04b9039d6de2074ea645d26775536cc"
  },
  {
    url: "tags/numerical-expressions/index.html",
    revision: "aaa2050a771932e1dd747fdf90527093"
  },
  {
    url: "tags/odin-project/index.html",
    revision: "356016246b6e3c86be589b4c48bf22ae"
  },
  {
    url: "tags/odu-email-integration/index.html",
    revision: "008485be28652f9820a500ca8b60ad7b"
  },
  {
    url: "tags/odu/index.html",
    revision: "e0670adef1a07a0fde8ab030faba7798"
  },
  {
    url: "tags/oh-snap/index.html",
    revision: "d5ca1d7ff5722d4a506a9c5e4830870c"
  },
  {
    url: "tags/old-science/index.html",
    revision: "a334c1900247050dd03ecaf133a11c69"
  },
  {
    url: "tags/one-page-love/index.html",
    revision: "38cbd52e05e9ed8da6e2df79c0a060c8"
  },
  {
    url: "tags/one-week/index.html",
    revision: "fc3ef110f76d24b0e406e2bfa95bc944"
  },
  {
    url: "tags/online-course/index.html",
    revision: "3c051e526d3f1e72925f126db613ab0c"
  },
  {
    url: "tags/online-design-course/index.html",
    revision: "be2131618472b6e24586b458fef3b3eb"
  },
  {
    url: "tags/online-flash-games/index.html",
    revision: "578bfddbba99d864e8c743895afcae78"
  },
  {
    url: "tags/online-image-editor/index.html",
    revision: "48e819076e1881cc2d3430cc302fa5ba"
  },
  {
    url: "tags/online-python-tutor/index.html",
    revision: "064813a40b069b3d22b01f47fe62af35"
  },
  {
    url: "tags/op-smile/index.html",
    revision: "7bdb2e17c8c52c81db0b505019676a78"
  },
  {
    url: "tags/operation-smile/index.html",
    revision: "9160e1a4b77d9044fd21255e2486ca1d"
  },
  {
    url: "tags/oral-comm/index.html",
    revision: "775495f1b1feb9f369479ea2502d8e07"
  },
  {
    url: "tags/oren-etzioni/index.html",
    revision: "7971e0e9dc544ec315bcb33935945997"
  },
  {
    url: "tags/orson/index.html",
    revision: "638825fe5aedff174c163ce9a0964038"
  },
  {
    url: "tags/oss/index.html",
    revision: "d2a284e275b27c3fa7b5044fac67e301"
  },
  {
    url: "tags/osx-el-capitan/index.html",
    revision: "2f6b453efb5a2c5b2bc78d397f0f114c"
  },
  {
    url: "tags/osx/index.html",
    revision: "6200afea6f9da174ca147dac42da21f5"
  },
  {
    url: "tags/oxford-university/index.html",
    revision: "79757e7bc23fb6696c2d3ce9156330d9"
  },
  {
    url: "tags/pandemic-2/index.html",
    revision: "ba43ca5b4873a72000fea8840103d2c2"
  },
  {
    url: "tags/pandemic/index.html",
    revision: "ac00b9bd43dc240b350627f2fc075a54"
  },
  {
    url: "tags/papers/index.html",
    revision: "f59659400a8cfe600c22d6c43f547e7d"
  },
  {
    url: "tags/parchment/index.html",
    revision: "bcc12855912d533ceee698ef20758b67"
  },
  {
    url: "tags/pattern-library/index.html",
    revision: "51e312a87f876709fcf987f96e67cd10"
  },
  {
    url: "tags/paypal/index.html",
    revision: "3377c2b14b5cdd904dd96dd709846310"
  },
  {
    url: "tags/pb/index.html",
    revision: "b1f061e49df4fc2950f1d229e389b00b"
  },
  {
    url: "tags/pdf-to-images/index.html",
    revision: "adff8cffdd435045058c686c8bf77cea"
  },
  {
    url: "tags/personal-cohort-experience/index.html",
    revision: "5b5a76619ced6e4c6344c7f68d3af620"
  },
  {
    url: "tags/personal-journal/index.html",
    revision: "8486e0d5d9e88a0e9f7d96c5d9e68306"
  },
  {
    url: "tags/personal-questions/index.html",
    revision: "7c7387b42f595ec97dd27e9398db9acf"
  },
  {
    url: "tags/personal-website/index.html",
    revision: "c55c652e210f785ddb63f8e3efee4110"
  },
  {
    url: "tags/personality/index.html",
    revision: "7abb20b53230432b393a2a057d58ca33"
  },
  {
    url: "tags/perspective/index.html",
    revision: "fcc2443103318f81f79a6c538aaab020"
  },
  {
    url: "tags/pertaining-to-hack-reactor/index.html",
    revision: "8efb247b0583de83fb089ab4a8055878"
  },
  {
    url: "tags/pestilence/index.html",
    revision: "e3672cc5274b9b401fbf490c4c7c0904"
  },
  {
    url: "tags/peter-sunde/index.html",
    revision: "8431e8f3e1bcaa613451e377c588b043"
  },
  {
    url: "tags/peter-weyland/index.html",
    revision: "76b14dc581266b70aff80c7a65d39329"
  },
  {
    url: "tags/philadelphia/index.html",
    revision: "30e2a9f035335a182e2dad0546e71356"
  },
  {
    url: "tags/phone-conversations/index.html",
    revision: "6201c1a9066e9aefc410ca438d592880"
  },
  {
    url: "tags/pick-up-lines/index.html",
    revision: "ca08b4504966c5878716d7a805c7da13"
  },
  {
    url: "tags/pictures/index.html",
    revision: "babd611a904ec40948e8c65350fa94b0"
  },
  {
    url: "tags/pirate-bay/index.html",
    revision: "4389c3197ea7ce1efa310c40059a04de"
  },
  {
    url: "tags/pity/index.html",
    revision: "d028749aeb1733a9adb3e8c9b5f8e051"
  },
  {
    url: "tags/pixel-icon-generator/index.html",
    revision: "8203c5859603871acc81f2a3c9a57468"
  },
  {
    url: "tags/pixelfest/index.html",
    revision: "07bc7db5a6d285b8caacc18697d04f03"
  },
  {
    url: "tags/plan-ahead/index.html",
    revision: "c2080c289f4e9f346b10b8430f35ef4b"
  },
  {
    url: "tags/planetarium-show/index.html",
    revision: "b064cf10bd6f92c6e08b93408c3a5629"
  },
  {
    url: "tags/plans-in-motion/index.html",
    revision: "774951bd359276ad740d8d34d30c942f"
  },
  {
    url: "tags/play-along/index.html",
    revision: "9e5e6f25083d93d18f212a6a541cab34"
  },
  {
    url: "tags/playdead-games/index.html",
    revision: "4f875c436e63c0288b37e788cca67977"
  },
  {
    url: "tags/playdead/index.html",
    revision: "03c48914bb3c07c8a5a3cef5be9ae503"
  },
  {
    url: "tags/playlistbuddy/index.html",
    revision: "e8f09a6c9d1e636e6fcdae4cb075d2c2"
  },
  {
    url: "tags/playlists/index.html",
    revision: "f638bb8dc014e175a8287813992dad32"
  },
  {
    url: "tags/plurality/index.html",
    revision: "361dd40975782a2d1ee9152468471eb3"
  },
  {
    url: "tags/png-files/index.html",
    revision: "5acb5c0fb62f9fba576c9ebe32663461"
  },
  {
    url: "tags/png/index.html",
    revision: "a2bbdc3d8f0739c6b36ddead6177a674"
  },
  {
    url: "tags/poem/index.html",
    revision: "9611ad7761f47696349faf23736102ec"
  },
  {
    url: "tags/poetry/index.html",
    revision: "c9f652deeee5bc3d4d5e4206cc1b6f40"
  },
  {
    url: "tags/pointer/index.html",
    revision: "cce23d84c46066c583d56be0a2e91039"
  },
  {
    url: "tags/poptropica/index.html",
    revision: "f161a9d4f233bbc8b6da4db3a8797a1f"
  },
  {
    url: "tags/portal-runner/index.html",
    revision: "652446b36386b9fdb4df902ce747921c"
  },
  {
    url: "tags/post-apocalyptic/index.html",
    revision: "4a362a4ff63ef8a4d778fcf1d2df27bb"
  },
  {
    url: "tags/postorder/index.html",
    revision: "d082165cbf99ffda6b2e33338fd417b3"
  },
  {
    url: "tags/potential/index.html",
    revision: "644f7b281adc65109ac57cc2e6799c2d"
  },
  {
    url: "tags/pow/index.html",
    revision: "7c655469ccf353d6305c92789cf4f9a0"
  },
  {
    url: "tags/predecessor/index.html",
    revision: "1bebff6b24c177998c3b5001c36f90ab"
  },
  {
    url: "tags/preorder/index.html",
    revision: "dfe32080da5446b9b67c0ed2d22c2dbc"
  },
  {
    url: "tags/prep/index.html",
    revision: "86924fbdbafe9cb252ea4926f550c903"
  },
  {
    url: "tags/preparation/index.html",
    revision: "f736ea587615080e9067063427047966"
  },
  {
    url: "tags/preparing/index.html",
    revision: "4fafa53c64f218f1b01068bb2d2f5d5f"
  },
  {
    url: "tags/prepartion/index.html",
    revision: "749a2e3df7ef48e00f7ccb19e8a275a7"
  },
  {
    url: "tags/presentation-software/index.html",
    revision: "cac58d47c94f4ce74aeb41127e9b23d7"
  },
  {
    url: "tags/president-harvey-mudd/index.html",
    revision: "c04b5e1a950cf2714321704d7a6d7118"
  },
  {
    url: "tags/pretty/index.html",
    revision: "53ad859ae08269ab52bd4768aa3be18c"
  },
  {
    url: "tags/prework/index.html",
    revision: "a7e39aeb46eaeeb71ec02c44ab111638"
  },
  {
    url: "tags/pricey/index.html",
    revision: "f904b9315de4b0ffe00917dbf2d38009"
  },
  {
    url: "tags/pride/index.html",
    revision: "32399809e3306115f6ead05f0efbf4ce"
  },
  {
    url: "tags/printf/index.html",
    revision: "d888304ed4443ea747b16c31a091491f"
  },
  {
    url: "tags/printing/index.html",
    revision: "9a9cba0a9f9e5d9e34851dde3ef5f10c"
  },
  {
    url: "tags/priory-of-sion/index.html",
    revision: "30d3eedeca2fa79047b89bd983e00418"
  },
  {
    url: "tags/prisoners/index.html",
    revision: "64f8af25327d419a2cb86cc81ca57038"
  },
  {
    url: "tags/process/index.html",
    revision: "ed8b3f5724153c2fe0032b8546738541"
  },
  {
    url: "tags/procrastination/index.html",
    revision: "1c75e8417e4e6148af9cfddcd08c880a"
  },
  {
    url: "tags/product-academy/index.html",
    revision: "7133586a4460e32eb981c3043d96b4e7"
  },
  {
    url: "tags/productivity/index.html",
    revision: "1dd430385a5017b8c736145732577b5e"
  },
  {
    url: "tags/program-length/index.html",
    revision: "d01d953fe0f850390f4b9dafddc4eb38"
  },
  {
    url: "tags/program/index.html",
    revision: "01cfb5b30e7c6e0349a2cab07d72865d"
  },
  {
    url: "tags/programmer/index.html",
    revision: "dfcb7da1ab87ac632286a6facf1fff92"
  },
  {
    url: "tags/programming-bootcamps/index.html",
    revision: "09e2e863abe85337baf991a76913cdf1"
  },
  {
    url: "tags/programming/index.html",
    revision: "176bac0739bb24b0b0e04de116343628"
  },
  {
    url: "tags/project-zomboid/index.html",
    revision: "2f7c509ec27b1477a71ca04cd8911886"
  },
  {
    url: "tags/projects/index.html",
    revision: "e4ec2eedecb4543664d15da158516688"
  },
  {
    url: "tags/promises/index.html",
    revision: "5e4f5675fe85e5e4c570411686d60b73"
  },
  {
    url: "tags/properly-program/index.html",
    revision: "ac92d59b903f19056641e66209e63d73"
  },
  {
    url: "tags/properties/index.html",
    revision: "3991e669a62f8fb71bd4e87d28df6e15"
  },
  {
    url: "tags/pseudocode/index.html",
    revision: "b6a8fc8fc6d1507f5dc9d976478e521a"
  },
  {
    url: "tags/puppy-love/index.html",
    revision: "f0c243f42d102b93befe5a2bcf84cf07"
  },
  {
    url: "tags/python-3/index.html",
    revision: "013cbec6fbedc6baabc7fa1e71cee922"
  },
  {
    url: "tags/python-area-of-a/index.html",
    revision: "d80e5e6a9667c53b9166bcb02cc67d55"
  },
  {
    url: "tags/python-bits/index.html",
    revision: "de68b362bf8c462c81d467e315063a51"
  },
  {
    url: "tags/python/index.html",
    revision: "1b603d01356c43072a9be2ccf3b8905a"
  },
  {
    url: "tags/questions-coding/index.html",
    revision: "50b39709cc87ff6d85ba9089004ff219"
  },
  {
    url: "tags/questions/index.html",
    revision: "2ca13da7378e023058dfd14ebe293c62"
  },
  {
    url: "tags/queue-implementation/index.html",
    revision: "b076700dcdf99fc21b4a98f1c34c6af7"
  },
  {
    url: "tags/quick-sort/index.html",
    revision: "78dad8e7ba0b11f13ee6c20ac8b3f009"
  },
  {
    url: "tags/quizlet/index.html",
    revision: "1cfcf1e522d06d9f965dd4f54a787153"
  },
  {
    url: "tags/quizzes/index.html",
    revision: "e3681744c52459e08de19b58b822152a"
  },
  {
    url: "tags/quora/index.html",
    revision: "816ddc9c04395307e7bf9838c7b9e88e"
  },
  {
    url: "tags/quotient-remainder/index.html",
    revision: "44b10397edeea744ba03ec954aaf2871"
  },
  {
    url: "tags/random-poems/index.html",
    revision: "2343e5b88cab672c7d547cf663351e54"
  },
  {
    url: "tags/randomly-generated/index.html",
    revision: "c18df5927d2675d16c46932c9cbaee33"
  },
  {
    url: "tags/rankme/index.html",
    revision: "80f9b848c57f15131db212fa31af2dee"
  },
  {
    url: "tags/rant/index.html",
    revision: "e8514ff3889aa067512a7e9682e1a253"
  },
  {
    url: "tags/rants/index.html",
    revision: "7ce5453c4947eeeec0f21cec9a3a30d8"
  },
  {
    url: "tags/rating/index.html",
    revision: "fcb2a2b3f6607c499efd20ef80b74581"
  },
  {
    url: "tags/re-birth/index.html",
    revision: "c43f462cbf63c240db21c54ddcf9368d"
  },
  {
    url: "tags/readme-template/index.html",
    revision: "e5714f5810b46209b5b4abc25b32c80b"
  },
  {
    url: "tags/readme/index.html",
    revision: "2ba64158a23745c5e1a7e6a0881dc785"
  },
  {
    url: "tags/real-data/index.html",
    revision: "d61671a386f0b21010b50483cecc0466"
  },
  {
    url: "tags/reason/index.html",
    revision: "8246df6d33c2aa09686ec19b18ef6966"
  },
  {
    url: "tags/reasons/index.html",
    revision: "917d657bedbfee06e586fc3def3c93b3"
  },
  {
    url: "tags/recruiting/index.html",
    revision: "6eb1cb42c5640f5825bff851ad353459"
  },
  {
    url: "tags/recursion/index.html",
    revision: "ae1a06262e71fe443af17e44ccdd0e74"
  },
  {
    url: "tags/recursive/index.html",
    revision: "6fcc4fc08e72486bbc0993fc6d9d50be"
  },
  {
    url: "tags/reflections/index.html",
    revision: "da6543781004a213431097656636dffb"
  },
  {
    url: "tags/rejection/index.html",
    revision: "f99cadf94e2919571880897f7716b940"
  },
  {
    url: "tags/relative/index.html",
    revision: "d56e03311b1d3542c32f680c6b0e7e9f"
  },
  {
    url: "tags/relativity/index.html",
    revision: "1b5a4c811f6b9f54609025733b0682cc"
  },
  {
    url: "tags/religion/index.html",
    revision: "62c664a42db5560f40bbcd98e409c4e5"
  },
  {
    url: "tags/religious/index.html",
    revision: "1df893bbb92c14ed57ce954a8cac76c7"
  },
  {
    url: "tags/remove/index.html",
    revision: "765bbb44191005ff399681189e3191f7"
  },
  {
    url: "tags/rename-multiple-photos/index.html",
    revision: "8483a7dbb77c1c443ff4db2fbd31fadd"
  },
  {
    url: "tags/repetitive/index.html",
    revision: "5a8b8cb050f37f7c6da44c1bc0655ae1"
  },
  {
    url: "tags/research/index.html",
    revision: "942f7bf9dfb27166ea653fc3d57e4752"
  },
  {
    url: "tags/reset-dock/index.html",
    revision: "210dd67989ac939cd12206ea32cd177b"
  },
  {
    url: "tags/reset-launchpad/index.html",
    revision: "6b8aa2b11266aab651bdef5bfec0342a"
  },
  {
    url: "tags/reset-your-launchpad/index.html",
    revision: "f8a9eca3cd49c5d05835c4454d07afb9"
  },
  {
    url: "tags/resources/index.html",
    revision: "3476f87e374b6d40dd9b996365686aaf"
  },
  {
    url: "tags/respect-tradition/index.html",
    revision: "a7de7d2dff2f4f822a9bbf954f276026"
  },
  {
    url: "tags/result/index.html",
    revision: "8071caf815ec1234d630ba54a4e9616d"
  },
  {
    url: "tags/results/index.html",
    revision: "a86ec9daa0ff10c799fb5e9e06ee1954"
  },
  {
    url: "tags/resume/index.html",
    revision: "fb45812fbaf49107009b599e80c8e6a3"
  },
  {
    url: "tags/retarded/index.html",
    revision: "085e1771cbd51cd6497182c4c0d75d18"
  },
  {
    url: "tags/revconf/index.html",
    revision: "bc69487ddccbc24e9c2ab9295835efe1"
  },
  {
    url: "tags/review-week/index.html",
    revision: "ea011e223aa3951243eb789108842c6f"
  },
  {
    url: "tags/review/index.html",
    revision: "8b9a617882e7b88a273bd40776632161"
  },
  {
    url: "tags/reviewing/index.html",
    revision: "b6877a2399c7d374b1e8053af3609e3d"
  },
  {
    url: "tags/revolution-conference/index.html",
    revision: "ace365fb35acc11f6426de5eb8b233cd"
  },
  {
    url: "tags/revolution/index.html",
    revision: "1aef84dc316a5de012723cc67e990a47"
  },
  {
    url: "tags/revolutionconf-virginia/index.html",
    revision: "84c27245ecc6be7d7c1c75643e285322"
  },
  {
    url: "tags/revolutionconf/index.html",
    revision: "89e2c63558c8154fba6bd3a2441d1bc0"
  },
  {
    url: "tags/richard-tapia/index.html",
    revision: "06ab728a51d92a576beb04aafdcb113e"
  },
  {
    url: "tags/riddle/index.html",
    revision: "90cfb335e4f733e67b206cc084676914"
  },
  {
    url: "tags/right/index.html",
    revision: "d15c7b5818e7d25b30ca8784511cfc11"
  },
  {
    url: "tags/rihanna/index.html",
    revision: "f0b1c714892ecb782c2a2eaf51bd9cf9"
  },
  {
    url: "tags/robert-greene/index.html",
    revision: "1469e5b32f9eb9c94d050c0245d57caa"
  },
  {
    url: "tags/robert-langdon/index.html",
    revision: "4adbb1e2d28f07214ff908db993ae61f"
  },
  {
    url: "tags/robocup-soccer/index.html",
    revision: "5b8ef388f8f8d6a4fb59143e7e1cf6b5"
  },
  {
    url: "tags/robocup/index.html",
    revision: "16d9fa6ea799d806d6966d5079fdd132"
  },
  {
    url: "tags/robopocalypse/index.html",
    revision: "44f20dc87be1e9fde28cad9f90173fc8"
  },
  {
    url: "tags/robot/index.html",
    revision: "aa26bd4e40be0c6e2d27ce224276644e"
  },
  {
    url: "tags/robotics/index.html",
    revision: "ba50d92bb20b4aac8cae4c00381376be"
  },
  {
    url: "tags/robots/index.html",
    revision: "89729c3c6cd017c5be3331622bc7c2be"
  },
  {
    url: "tags/romance/index.html",
    revision: "6e84dcd5ff2fa04a59ba451ac72bcac7"
  },
  {
    url: "tags/runescape/index.html",
    revision: "6205c9a15b5c2dd7877ba99b57f94006"
  },
  {
    url: "tags/russell-cheng/index.html",
    revision: "28d154effc4515633f797abd633584a1"
  },
  {
    url: "tags/sally-conference/index.html",
    revision: "f13755237ed71836bed4f063e54b5882"
  },
  {
    url: "tags/same-height/index.html",
    revision: "b619696ee272cf95245c735730c6fada"
  },
  {
    url: "tags/same-sex-marriage/index.html",
    revision: "5a5f404d979e96d199d773db62ccc3be"
  },
  {
    url: "tags/samer-buna/index.html",
    revision: "45a05e2ada77456d78774a0419dd900d"
  },
  {
    url: "tags/san-francisco/index.html",
    revision: "95c71762cdd37eaf58d323edfe4a5df4"
  },
  {
    url: "tags/sandbox/index.html",
    revision: "cf39cb1cbc621d357cb3187405460ba9"
  },
  {
    url: "tags/sbarro/index.html",
    revision: "85f5a0416a4e3dacf76bde77b7d5ac1f"
  },
  {
    url: "tags/scary/index.html",
    revision: "14db34abb6bfc498d683b7093b6adb03"
  },
  {
    url: "tags/scholarships/index.html",
    revision: "c6c944e14ef315ee8118461f86f4e16a"
  },
  {
    url: "tags/school-email-integration/index.html",
    revision: "9a294d39604b3a979f0bd804f40f134b"
  },
  {
    url: "tags/school-email/index.html",
    revision: "f8fe46a72ab4da100c8edbb7a224d0d3"
  },
  {
    url: "tags/school/index.html",
    revision: "492df8c288f999e129b0c8b7f347d38b"
  },
  {
    url: "tags/science-fair/index.html",
    revision: "29647aded22835110a96a25e2d562fe3"
  },
  {
    url: "tags/science/index.html",
    revision: "8a4460fa26b719cbc652265cf2f81e94"
  },
  {
    url: "tags/scott-card/index.html",
    revision: "e190bd5410c862eae99aa2362b2fb002"
  },
  {
    url: "tags/screenhero/index.html",
    revision: "54be0c6195e467e809d7b8d85c887e0e"
  },
  {
    url: "tags/screenshots/index.html",
    revision: "858dbc347cfd4c4862e66c8e85284b54"
  },
  {
    url: "tags/scribe/index.html",
    revision: "2604fb18d7605f31b62899dfbe4d9521"
  },
  {
    url: "tags/search-query/index.html",
    revision: "e911cab617e163587872188cec6f20e9"
  },
  {
    url: "tags/searching/index.html",
    revision: "ce230f65c1dec0ee9c34e50e8f04aa67"
  },
  {
    url: "tags/sedgefield-elementary/index.html",
    revision: "2ef8e48e34096505d8f4544ee721ba57"
  },
  {
    url: "tags/sedgefield/index.html",
    revision: "599b21bc16455ff9c08781c379391c2a"
  },
  {
    url: "tags/seema/index.html",
    revision: "3400020c40591ae666dc80f5a10e4363"
  },
  {
    url: "tags/selection-sort/index.html",
    revision: "86e4702c013726c9e1d07f242e8c7948"
  },
  {
    url: "tags/selection/index.html",
    revision: "2e873ee069415ecb7bd28716286dabf1"
  },
  {
    url: "tags/selective-honesty/index.html",
    revision: "95d7cf59ce6863e3137f304f93d85b76"
  },
  {
    url: "tags/semicolons/index.html",
    revision: "0613df068dac207b9e0dc1190fcb1749"
  },
  {
    url: "tags/senior-phase/index.html",
    revision: "a3d0edf5b8494c525c1a903ca7599987"
  },
  {
    url: "tags/sesame-street/index.html",
    revision: "3e95714c45d9933a990ebab3f3ee4a7f"
  },
  {
    url: "tags/seven-days/index.html",
    revision: "6f8ff1ad2abe7226f2ca210349ab2427"
  },
  {
    url: "tags/seven-deadly-sins/index.html",
    revision: "cd8a0de759ea0688ddf0b4c378356826"
  },
  {
    url: "tags/shaan/index.html",
    revision: "68975ab7b05aaae8ffde80cb1f397ff0"
  },
  {
    url: "tags/shakespeare/index.html",
    revision: "31dc5d7a609ba5419b57482022bccab8"
  },
  {
    url: "tags/shakey/index.html",
    revision: "625c5d2b1539607f07904bde6e169787"
  },
  {
    url: "tags/shame/index.html",
    revision: "237f5c64964430ec7fa0df9d2961bc83"
  },
  {
    url: "tags/sharing/index.html",
    revision: "41a5712f3c421871db45c72370ebe070"
  },
  {
    url: "tags/short-operation/index.html",
    revision: "352bbf5599fe48cd443f91f71dd05b8d"
  },
  {
    url: "tags/short-stories/index.html",
    revision: "8a600c3a822941e1a1cc7ed26cd457f6"
  },
  {
    url: "tags/shrthnd/index.html",
    revision: "2b316827250a0f1080b79cbee8f999b5"
  },
  {
    url: "tags/silicon-valley/index.html",
    revision: "8404e518ea518025c131333f83375e5c"
  },
  {
    url: "tags/silly/index.html",
    revision: "ce3c0d1f6ae137302cfb81d0fe47b97b"
  },
  {
    url: "tags/sims-2/index.html",
    revision: "9950613dd713991bc35a46435211e4b9"
  },
  {
    url: "tags/sims-3/index.html",
    revision: "911aa801ff57aaf157a0429266278831"
  },
  {
    url: "tags/sims-medieval/index.html",
    revision: "937bcaae694cc5be55295825cf4fdbc5"
  },
  {
    url: "tags/sins/index.html",
    revision: "9c13a1a75099ab2af2aeb89d740e8145"
  },
  {
    url: "tags/siri/index.html",
    revision: "d7513bb8f05f1bddf62597670f5e157e"
  },
  {
    url: "tags/sitedrop/index.html",
    revision: "ed1628d0153f1b9240b3fb818b764751"
  },
  {
    url: "tags/sketch/index.html",
    revision: "e372f1bb6510cb5ff97794e2da8bda0c"
  },
  {
    url: "tags/skiirty/index.html",
    revision: "83d239db255ec88eb141e4c763206511"
  },
  {
    url: "tags/skype/index.html",
    revision: "0e347971820518862bc700814ba91fb3"
  },
  {
    url: "tags/slack/index.html",
    revision: "0f28978dd66615d2172f321ac3e57fbb"
  },
  {
    url: "tags/slides-carnival/index.html",
    revision: "f90395ff71c64813f4835d75393bb6f7"
  },
  {
    url: "tags/slidescarnival/index.html",
    revision: "9a9c13fa8cfcde06a6df67655d672431"
  },
  {
    url: "tags/sloth/index.html",
    revision: "f660cb62799135c5bc00328e99c3a0f8"
  },
  {
    url: "tags/smaller-problem/index.html",
    revision: "23f2d9c763a1dfe40481476b33a42860"
  },
  {
    url: "tags/smart-notes/index.html",
    revision: "bcba1ab4261b8115c158268025b4e602"
  },
  {
    url: "tags/smile-train/index.html",
    revision: "61f9fa03ddaf9a902f32c5e5d2f2a765"
  },
  {
    url: "tags/snow/index.html",
    revision: "a4a70fbab45b3bfc52d53250144af38f"
  },
  {
    url: "tags/social-networking-connectedness/index.html",
    revision: "f76b53b7fefbeca84de6ee5b879ad288"
  },
  {
    url: "tags/social-networking-sites/index.html",
    revision: "098e7cfc374d2c6a33f2111c2550c244"
  },
  {
    url: "tags/social-networking/index.html",
    revision: "0d81c58802d7bcde3c33aeb258df307a"
  },
  {
    url: "tags/social/index.html",
    revision: "e2a39da554adb56dd458848a02a44efd"
  },
  {
    url: "tags/socket.io/index.html",
    revision: "bed2217e8df0a8595959459e38f3524f"
  },
  {
    url: "tags/socks/index.html",
    revision: "8f14af95a076ec8d319fcc2ea784ad1e"
  },
  {
    url: "tags/software-development/index.html",
    revision: "a4264c9ab77d0739f7ecf12d1373019a"
  },
  {
    url: "tags/sonderkommando/index.html",
    revision: "45a77c836db92c85eb744205d0321414"
  },
  {
    url: "tags/sophie-neveu/index.html",
    revision: "cf50c7f31513f8feaf68125ca8f4909d"
  },
  {
    url: "tags/sort-detective/index.html",
    revision: "e87144111779e839263a362efdfa5545"
  },
  {
    url: "tags/sortdetective.jar/index.html",
    revision: "669a4408dec3b3cfcfd622dc3d712c9e"
  },
  {
    url: "tags/sorting-methods/index.html",
    revision: "1a439ea256da0645717489b9d7386a17"
  },
  {
    url: "tags/sortingexperiment/index.html",
    revision: "492a74435c69042a58c8001a35016a0f"
  },
  {
    url: "tags/sorty-app/index.html",
    revision: "111f9fc3d3b517853f8dece1aeb2eebf"
  },
  {
    url: "tags/sorty-for-osx/index.html",
    revision: "71b8b2b045bfb7c63eb8742443ffbb6e"
  },
  {
    url: "tags/sorty/index.html",
    revision: "99a87387bcbc951a669bc199e0b5a196"
  },
  {
    url: "tags/sound-cloud/index.html",
    revision: "17ece4d1854dcff6896902c4557a368d"
  },
  {
    url: "tags/source-code/index.html",
    revision: "ba32cb485cca2df20a22e43363f82194"
  },
  {
    url: "tags/spanish/index.html",
    revision: "dcabaebd52f917a8a9191dfcf522fe0e"
  },
  {
    url: "tags/spank-the-money/index.html",
    revision: "f265b1e504d47a95abdbe583f4b2aa54"
  },
  {
    url: "tags/spank-the-monkey/index.html",
    revision: "e08bde15d3b91aa8fdfce6ae21831cc6"
  },
  {
    url: "tags/speakdeck/index.html",
    revision: "c5cdb2f326915920dc08498e496135f3"
  },
  {
    url: "tags/speakerdeck/index.html",
    revision: "43f8e64937324267117248a3ea2f2e18"
  },
  {
    url: "tags/speech/index.html",
    revision: "e5d3370f8fc0fdbd116feb38880be248"
  },
  {
    url: "tags/speros-misirlakis/index.html",
    revision: "01df881eea8a18e96385e9f727c0020c"
  },
  {
    url: "tags/spider/index.html",
    revision: "bd2f2f3ee36aff7861502b1cbc8e6f06"
  },
  {
    url: "tags/spoiler/index.html",
    revision: "16989be95ddb71f5a34687c848ec0b8f"
  },
  {
    url: "tags/spoilers/index.html",
    revision: "51919a2da1e7ebc7a900065605e41d51"
  },
  {
    url: "tags/spore/index.html",
    revision: "9f6a5e54e949e8bd1d45cb8cd662a862"
  },
  {
    url: "tags/spotify-download-mp3/index.html",
    revision: "698b4ac6a49d28636fedecbe812ece7f"
  },
  {
    url: "tags/spotify-download/index.html",
    revision: "ea6594e868d4476c7d55cc6a0f2d5b45"
  },
  {
    url: "tags/spotify/index.html",
    revision: "2d22f80b5331e74a4a71cfdc696a2668"
  },
  {
    url: "tags/spreadsheet-app/index.html",
    revision: "59ce1ab51e74402b6945257266a044ff"
  },
  {
    url: "tags/stackathon/index.html",
    revision: "29ae65b1a1d30a35da0d8af0430ad10d"
  },
  {
    url: "tags/stackstore/index.html",
    revision: "643008d7f91c76740af0ef3a5395c46a"
  },
  {
    url: "tags/star-trek-monopoly/index.html",
    revision: "d573e0d3f566a1a7409e114e764f3286"
  },
  {
    url: "tags/stardust/index.html",
    revision: "2b52c61038bb57fe1e17349e7e4aebf8"
  },
  {
    url: "tags/starter-league/index.html",
    revision: "c29721aee6cbbe1200ea52b7b734e8b6"
  },
  {
    url: "tags/static-ui/index.html",
    revision: "e86ba52ebdcb7ca3137ed302b12b5e79"
  },
  {
    url: "tags/stem/index.html",
    revision: "fe22ea7a06d8a510100cd32501147446"
  },
  {
    url: "tags/string/index.html",
    revision: "a16479c0d0ba16e7c61a65586d2180ee"
  },
  {
    url: "tags/strings-python/index.html",
    revision: "6a487fa58dcdfdee355a6c94fd6203d3"
  },
  {
    url: "tags/student-experience/index.html",
    revision: "69446692619d8350ca233c14bf0f4644"
  },
  {
    url: "tags/student-id/index.html",
    revision: "e322e057858a1e3e4c0f548553c59dc4"
  },
  {
    url: "tags/study-better/index.html",
    revision: "0cc921339e91c944edd5498ed1fbce58"
  },
  {
    url: "tags/study-guide/index.html",
    revision: "18534a24e56776c6196af5fcde0e46d9"
  },
  {
    url: "tags/study-strategies/index.html",
    revision: "71cfea7a861617dcc33b989f440aa984"
  },
  {
    url: "tags/study-time/index.html",
    revision: "e52dab37a8753104b2126432e3b71dca"
  },
  {
    url: "tags/studying-smart/index.html",
    revision: "fc216e7b56fe68c8373c4fdb0bda48e6"
  },
  {
    url: "tags/stupid/index.html",
    revision: "e86805963f8ace511f4c3d0532ad2eb7"
  },
  {
    url: "tags/sublime-text-3/index.html",
    revision: "d58f8c4e665bc4bac390a2d452aabfb8"
  },
  {
    url: "tags/subtree/index.html",
    revision: "8f13a13ea31b394f026222b42ebf9453"
  },
  {
    url: "tags/summer-bootcamp/index.html",
    revision: "e633070d1fd0465c3380d0c728106d93"
  },
  {
    url: "tags/summer-program/index.html",
    revision: "0e8aa77d81d23acf3379886d5913b852"
  },
  {
    url: "tags/summer/index.html",
    revision: "aa98238e9a1494e722e4a6713582f539"
  },
  {
    url: "tags/super-shuttle/index.html",
    revision: "8c738eebe5bf46e482247353539dffa0"
  },
  {
    url: "tags/super-smash-bros/index.html",
    revision: "031c5ea462e86eb53a5e8d0517866caf"
  },
  {
    url: "tags/superhero-js/index.html",
    revision: "de8f880ea2fbf8810329ac421dc9470f"
  },
  {
    url: "tags/support/index.html",
    revision: "ddc88421e4885dc865ab0eb95da8d7e1"
  },
  {
    url: "tags/surfing/index.html",
    revision: "1f4cc65967c5595b7fa53d8d88444559"
  },
  {
    url: "tags/surgeon/index.html",
    revision: "6bdef9ec4510367e7f78f694323455d1"
  },
  {
    url: "tags/switch-up/index.html",
    revision: "a825afb5c097d4272b5a4e42d83dbb01"
  },
  {
    url: "tags/switch/index.html",
    revision: "34dd7ff150ec1af83e15b4be18e7a590"
  },
  {
    url: "tags/switchup/index.html",
    revision: "555b9eba185466041e9490e9af86a8fb"
  },
  {
    url: "tags/system/index.html",
    revision: "00ff28a7d81300ce0b5044244dc49741"
  },
  {
    url: "tags/talkies/index.html",
    revision: "8d3021c4fd5717bdbf0bbb53ade5f6be"
  },
  {
    url: "tags/tallwood/index.html",
    revision: "23c9c6bad6b9aea1d8b204035c437017"
  },
  {
    url: "tags/tanzania/index.html",
    revision: "92ba5b98d3b739f570177b6e51d2c231"
  },
  {
    url: "tags/tapia/index.html",
    revision: "2950b22092dfb789fae600bc9893b507"
  },
  {
    url: "tags/tech-cocktail/index.html",
    revision: "0fc0d2025f6fcb41355f569487c662f7"
  },
  {
    url: "tags/tech-companies/index.html",
    revision: "a536d65908e23084dc40b06618576666"
  },
  {
    url: "tags/tech-conference/index.html",
    revision: "39f99096c60d4644245c484a92c6a797"
  },
  {
    url: "tags/tech-diversity/index.html",
    revision: "198e1053f79fb3c92865d8532760765b"
  },
  {
    url: "tags/tech-talk/index.html",
    revision: "1be8261713170d40578e0b9881566643"
  },
  {
    url: "tags/techendo/index.html",
    revision: "1d68e8a9834e7afdbfbfe4c17f86f28c"
  },
  {
    url: "tags/technical-challenge/index.html",
    revision: "d2792bbaf68f930755c6d41479443605"
  },
  {
    url: "tags/technical-interview/index.html",
    revision: "df3cf48f01ec04220c104abef3199502"
  },
  {
    url: "tags/technical-questions/index.html",
    revision: "1b0b5013d6e61aae1a603025cc3c772c"
  },
  {
    url: "tags/technological-dependence/index.html",
    revision: "98118dc7db38b5d7c7fd8385b18808ae"
  },
  {
    url: "tags/technological-unemployment/index.html",
    revision: "a8864d5b945e9e13dc20f522ccd0813f"
  },
  {
    url: "tags/technology/index.html",
    revision: "6ef71ba78c8c05c0ee60c9e9fbb48aea"
  },
  {
    url: "tags/template/index.html",
    revision: "6309db23b22346ce8cfef3021158ec58"
  },
  {
    url: "tags/texas/index.html",
    revision: "ac7c1ef9748b45f9ef4764fb4636039f"
  },
  {
    url: "tags/text-messaging/index.html",
    revision: "0daae70abda023fb541c3a12644ed166"
  },
  {
    url: "tags/the-grid/index.html",
    revision: "64c28da5dd30de43b770ce1d74311718"
  },
  {
    url: "tags/the-stocks/index.html",
    revision: "0351265910d926349f6f96782973ada3"
  },
  {
    url: "tags/the-test/index.html",
    revision: "b5d17f228ffa1c3b664913cfa4cc2448"
  },
  {
    url: "tags/theology/index.html",
    revision: "7f3290507b81ef367f9094b6ac731bd6"
  },
  {
    url: "tags/thinkful/index.html",
    revision: "9255764e7ce1fd00cbc0843a59b1d3f0"
  },
  {
    url: "tags/thoughts/index.html",
    revision: "7d1eb0acb79c5d2a14384facbfe01258"
  },
  {
    url: "tags/tim-burton/index.html",
    revision: "ee073e1389b22f815abf0c7f2ecc9601"
  },
  {
    url: "tags/timber/index.html",
    revision: "d7fd64dbbf665d7d0237289d4af01812"
  },
  {
    url: "tags/time-management/index.html",
    revision: "12cee3f79dd485383ed538c214b33a6a"
  },
  {
    url: "tags/time-measurements/index.html",
    revision: "3faf0ac9699f7154b9b2fe9b0280f99b"
  },
  {
    url: "tags/time-travel/index.html",
    revision: "a7635d21bba5455b1322c9eac8dfb174"
  },
  {
    url: "tags/time/index.html",
    revision: "3568118c36c4475e306a31eae22205f3"
  },
  {
    url: "tags/tips-and-tricks/index.html",
    revision: "758ebb39720515d4e6b3a703fb982e3e"
  },
  {
    url: "tags/tips/index.html",
    revision: "4148587c2e1fc57fa74c7c1a8b56f5b8"
  },
  {
    url: "tags/tncc/index.html",
    revision: "22e59a32c7b64fde53415e7d9e2dd3fe"
  },
  {
    url: "tags/todo-app-laravel/index.html",
    revision: "47177b7ee3bad808c00e4e09d2a41d40"
  },
  {
    url: "tags/todo-app/index.html",
    revision: "8e693f5f58f10536a288f5ea0508efe7"
  },
  {
    url: "tags/todo/index.html",
    revision: "25e03d577708760b2a64ea6f0400d51b"
  },
  {
    url: "tags/tom-hanks/index.html",
    revision: "d0e18e90d01d5005735226ad1da86862"
  },
  {
    url: "tags/toolbar/index.html",
    revision: "723fff9682091b25d0c733cc177d8d1c"
  },
  {
    url: "tags/topcoder/index.html",
    revision: "025e1673825980d3d85cdeeba122df54"
  },
  {
    url: "tags/toronto/index.html",
    revision: "aa03a8ea44e885dba8e8f7aa1abbcf73"
  },
  {
    url: "tags/tortuga/index.html",
    revision: "f1326d2f7261a23de5d16bb000c776b7"
  },
  {
    url: "tags/towers-of-hanoi/index.html",
    revision: "b892919908d385f0b28df3c8ed50a38f"
  },
  {
    url: "tags/trampoline/index.html",
    revision: "8156eca9f3f0ee8fe2bdf8f7009ebc83"
  },
  {
    url: "tags/transplant/index.html",
    revision: "08d0064e995c9d9569a0de2cd0e47275"
  },
  {
    url: "tags/transportation/index.html",
    revision: "4b99a0fe8b3ccdde2effe2256b9952c1"
  },
  {
    url: "tags/traumatized/index.html",
    revision: "91f789e15ae6faaed8daf429267eac65"
  },
  {
    url: "tags/travel/index.html",
    revision: "da5cc34586d3c5d503a3363e66c1122d"
  },
  {
    url: "tags/traversal/index.html",
    revision: "e2a7c71af994ac6f698c1c7d08026458"
  },
  {
    url: "tags/travis-ci/index.html",
    revision: "954584456e3fd4e0c5cddb7bd4fe278a"
  },
  {
    url: "tags/tree/index.html",
    revision: "ca6e92be506929a76921abbe4e7de484"
  },
  {
    url: "tags/treehouse/index.html",
    revision: "bb61fa2148641249113bb4b1f1a2e423"
  },
  {
    url: "tags/trial-and-death/index.html",
    revision: "d7a9bd09f9d281a4659c19fd26f3bcfe"
  },
  {
    url: "tags/tricks/index.html",
    revision: "c9cf88eeaa9fded64363abf8e5c67ac4"
  },
  {
    url: "tags/trip-planner/index.html",
    revision: "a25b597a930a70fb903fa4b0bb2c382d"
  },
  {
    url: "tags/tristan-walker/index.html",
    revision: "8ea43b4b07510e84fbbde50397e82124"
  },
  {
    url: "tags/tristan/index.html",
    revision: "0d969774efc5531cc8f308292361976c"
  },
  {
    url: "tags/tron-legacy/index.html",
    revision: "f4f3aa93f131eed4916b14d2020ef347"
  },
  {
    url: "tags/tuition-price/index.html",
    revision: "2c64d1ba293f9d5afd9e8153091d2e8d"
  },
  {
    url: "tags/tumblr/index.html",
    revision: "4b90080d5f11b86de55c808bce7e3414"
  },
  {
    url: "tags/tutorial/index.html",
    revision: "668380a151b626959e4eb79b7c9a5c79"
  },
  {
    url: "tags/tv-shows/index.html",
    revision: "7ebb7bae9eb93097d330db85980c0033"
  },
  {
    url: "tags/tweet/index.html",
    revision: "520476ea935dc824abbc014fdffe96e0"
  },
  {
    url: "tags/twitter/index.html",
    revision: "f827be7198785cf4f1dda0467d67e28c"
  },
  {
    url: "tags/typeform/index.html",
    revision: "da886c82e0ba249d9efd09bb204af4ff"
  },
  {
    url: "tags/typing.io/index.html",
    revision: "938e57496895d94c28fec6050dd7da4a"
  },
  {
    url: "tags/typography/index.html",
    revision: "75881dfef482ce51a52ce7655285ca5d"
  },
  {
    url: "tags/u/index.html",
    revision: "578fef2faf9f72ef12cfd613ef82c786"
  },
  {
    url: "tags/ubersicht/index.html",
    revision: "622e52b4f1205c92ff6ecfbac83a96fd"
  },
  {
    url: "tags/ui-design/index.html",
    revision: "0a1068b7b488c2ac4a0301e028401339"
  },
  {
    url: "tags/ui/index.html",
    revision: "d87becd27111b87a5fadb447e6b20eef"
  },
  {
    url: "tags/ui/ux/index.html",
    revision: "3c9cf6db46fe9ff67a629475a69bc1f6"
  },
  {
    url: "tags/ulyssess/index.html",
    revision: "afd1a610ac442273eeb2f58449154628"
  },
  {
    url: "tags/unarmed/index.html",
    revision: "87027fc14bbe4c71703809525eabc2b0"
  },
  {
    url: "tags/unbaptized/index.html",
    revision: "c7abb989b95e3c2c429904d2e8ce8a00"
  },
  {
    url: "tags/undergrad/index.html",
    revision: "63201f0c6b81f5d7d443b76d7627f45f"
  },
  {
    url: "tags/undergraduate-conference/index.html",
    revision: "7e23ad6c96a61e630c6d2541d6ccc2fe"
  },
  {
    url: "tags/underscore/index.html",
    revision: "f3b766e1ab0b3cca7534fc714309dfa9"
  },
  {
    url: "tags/unforeseen-destiny/index.html",
    revision: "80a8876dc72091c5c427fc9e8d70e634"
  },
  {
    url: "tags/union-city/index.html",
    revision: "d4ea17565076bff08f50d91938f05181"
  },
  {
    url: "tags/universe/index.html",
    revision: "6172076d3e6241982da27ed807aa803c"
  },
  {
    url: "tags/uno/index.html",
    revision: "22f5b750fcaf8104f6380a4f184a30b5"
  },
  {
    url: "tags/unsplash/index.html",
    revision: "72c87c6bf3e72fba39b5515ec481ec8e"
  },
  {
    url: "tags/ut-austin/index.html",
    revision: "dd01dac088d647327603584c734c927c"
  },
  {
    url: "tags/ux/index.html",
    revision: "8333c4b5d013dce8e1ea5628d341bca1"
  },
  {
    url: "tags/va-acm/index.html",
    revision: "420f7969b4cbf8ea165447bafff276f7"
  },
  {
    url: "tags/va-governor-schools/index.html",
    revision: "274483dd403078b770ea843829bd8c17"
  },
  {
    url: "tags/variables/index.html",
    revision: "8f0ea5f302953e3caa7fb0a3b311759b"
  },
  {
    url: "tags/vccs/index.html",
    revision: "24423962a7fb48aee22d14b60987f29d"
  },
  {
    url: "tags/vegan-candy/index.html",
    revision: "70aa913ed60c1eef60663625a0a6dbae"
  },
  {
    url: "tags/vegan/index.html",
    revision: "07034d347155b8d976652b25ced4a9ca"
  },
  {
    url: "tags/vegetarian/index.html",
    revision: "78a7505cda6e78bbfafdd8016222c8cc"
  },
  {
    url: "tags/venmo/index.html",
    revision: "5d2bc3da82b47c848fdc9155b7c5d084"
  },
  {
    url: "tags/very-nice-sites/index.html",
    revision: "d261b7ae68cf6b7fcc23a733094988ee"
  },
  {
    url: "tags/victoria/index.html",
    revision: "52fa6f376d016afef3724430510c01f5"
  },
  {
    url: "tags/video-games/index.html",
    revision: "7078d86c837cebd4ab17f51a5104185d"
  },
  {
    url: "tags/video/index.html",
    revision: "22794c113ae16aba085e94103428c9da"
  },
  {
    url: "tags/videogames/index.html",
    revision: "38d316a6a4a7cf9ce3ee67566bfbc841"
  },
  {
    url: "tags/vimeo/index.html",
    revision: "dba2be303f30ce17f66e2ee2b149521d"
  },
  {
    url: "tags/virginia-beach/index.html",
    revision: "dc04f28d2905c73ec58e96e66d1fc63c"
  },
  {
    url: "tags/virginia/index.html",
    revision: "fc36aa71caf672698cfb1c150104b213"
  },
  {
    url: "tags/visual-hierarchy/index.html",
    revision: "53d3a445aa129538362eb2e52f2844f4"
  },
  {
    url: "tags/walk/index.html",
    revision: "476b5f10450780f6a246b215c8274eac"
  },
  {
    url: "tags/walking-dead/index.html",
    revision: "b04030da5df458fdc830df54515e16c1"
  },
  {
    url: "tags/walkthroughs/index.html",
    revision: "d08dfc19d55f65728969c37b520ab473"
  },
  {
    url: "tags/war/index.html",
    revision: "dc90ef5ad1db70aa1bda1cc9e8369f1f"
  },
  {
    url: "tags/wary-of-friends/index.html",
    revision: "ab2da4e9ac419bae56435d7e7539872e"
  },
  {
    url: "tags/waves-of-tech/index.html",
    revision: "092e28d70ca689fcb5de0928b5836872"
  },
  {
    url: "tags/wayne/index.html",
    revision: "7472e6c972ec759b0421aa23a4cf83ab"
  },
  {
    url: "tags/weaknesses/index.html",
    revision: "f1e2cbc4815465579ac97d74599355c6"
  },
  {
    url: "tags/weather/index.html",
    revision: "6c59b52e8ec7e6e194be632daba889d3"
  },
  {
    url: "tags/web-crawler/index.html",
    revision: "6401bf8ddccd89165e3e6eb3cf8c6a3c"
  },
  {
    url: "tags/web-design-talk/index.html",
    revision: "89695ae49feb74a0412ea1d707ae26b0"
  },
  {
    url: "tags/web-design/index.html",
    revision: "75fcd6143e0dc00dd036a5996dfa5345"
  },
  {
    url: "tags/web-dev/index.html",
    revision: "c3ba683ee61fc559b52f9207e9e41c1d"
  },
  {
    url: "tags/web-development-bootcamp/index.html",
    revision: "64f0969db5d66b3f03f471d792de387c"
  },
  {
    url: "tags/web-development-hawaii/index.html",
    revision: "3d600191d1fdc842e84721176acbd8fb"
  },
  {
    url: "tags/web-development/index.html",
    revision: "3de7a9829eb17e586f6c70e11942b224"
  },
  {
    url: "tags/web-store/index.html",
    revision: "1360204a9ac4687d2ac0f12ab28711fc"
  },
  {
    url: "tags/websites/index.html",
    revision: "5a31f4c6f925671cbf7c1a1e285c95c4"
  },
  {
    url: "tags/week-2/index.html",
    revision: "3e2a8a3d1ad415ba91d001166de08513"
  },
  {
    url: "tags/week-3/index.html",
    revision: "3af468102c28b24cd01abdd697de3ed1"
  },
  {
    url: "tags/week-4/index.html",
    revision: "2746895377c6a5f3db099d70048dfbb8"
  },
  {
    url: "tags/week-6/index.html",
    revision: "cf15c19305bd55f20ce42a0b8bb7dafd"
  },
  {
    url: "tags/westin-copley/index.html",
    revision: "3d1660e08b0e4085ae89e027229b9ca9"
  },
  {
    url: "tags/whales/index.html",
    revision: "f1c155659534f40af4b1c15b4761770a"
  },
  {
    url: "tags/what-i-use/index.html",
    revision: "8f7a4609b60fb8fa41f45ec3f11b412d"
  },
  {
    url: "tags/whiteboard/index.html",
    revision: "73b903f47cdb502069ef706cf8f0ac6c"
  },
  {
    url: "tags/wii-sports/index.html",
    revision: "c7c2dbcd9914a27cd584528ce2447617"
  },
  {
    url: "tags/wii/index.html",
    revision: "60e290a8b689e10a18218506cac3aaeb"
  },
  {
    url: "tags/wikistack/index.html",
    revision: "dce441a335875d6844f6d8ba51194c27"
  },
  {
    url: "tags/wiles.dk/index.html",
    revision: "6bad75d316ebfe798c7e728f90ce4df1"
  },
  {
    url: "tags/wilson/index.html",
    revision: "ae36408f1dd292f91208d5a5ce9c2f90"
  },
  {
    url: "tags/winter-conference/index.html",
    revision: "2b91cd0ddc2f55d404dfd6c51dde84a0"
  },
  {
    url: "tags/winter-storm/index.html",
    revision: "9e020d50703ac47a0fb0002db162c0d9"
  },
  {
    url: "tags/wish-list/index.html",
    revision: "6fec4e827853a90c4b2102b0b3821a8f"
  },
  {
    url: "tags/witchcraft/index.html",
    revision: "89eab2ffc3662be0f8ef8b51dbcf68bd"
  },
  {
    url: "tags/women-who-code/index.html",
    revision: "75b59ca00317d3a200d0a8e2c4eac132"
  },
  {
    url: "tags/word/index.html",
    revision: "32abe1cd70ca04aeeb140ba04f19809b"
  },
  {
    url: "tags/wordpress/index.html",
    revision: "e80df6e1e23e4c4bbc75e462b7dd9ee1"
  },
  {
    url: "tags/work-routines/index.html",
    revision: "6e978e035fcb27d4e8c8497eb1fb3bd9"
  },
  {
    url: "tags/work/index.html",
    revision: "695a0d6748b8430759208769517e5e3f"
  },
  {
    url: "tags/workforce/index.html",
    revision: "ab4bfd55f0d86cc1cd58bc44c8ef09e3"
  },
  {
    url: "tags/working-harder/index.html",
    revision: "498ae68e3a5eacb423ea4fc165a116e8"
  },
  {
    url: "tags/working-smarter/index.html",
    revision: "8601fa9aeb88498cd9abb58a4556eaa1"
  },
  {
    url: "tags/wrath/index.html",
    revision: "4fda48de0f9ffafe560e31f6814040cb"
  },
  {
    url: "tags/writing/index.html",
    revision: "3ff96d0d575e9ae87ea3dfd4db5415bf"
  },
  {
    url: "tags/yelp/index.html",
    revision: "74d2d2b8a7193e3f2c02fc21d5aac4b7"
  },
  {
    url: "tags/yeti/index.html",
    revision: "45be241c1d32ea9994a8530543f17592"
  },
  {
    url: "tags/yield-rate/index.html",
    revision: "8bf8689c269a6c43561c7e9e70c014cb"
  },
  {
    url: "tags/yoink/index.html",
    revision: "6fd5f4b63b41106f0854b7a3c2a0333b"
  },
  {
    url: "tags/yosemite-launchpad-reset/index.html",
    revision: "c3c0c349b620c069b648354ede136c76"
  },
  {
    url: "tags/yosemite-launchpad/index.html",
    revision: "971d4ec6c55179b974e9ffac05493e38"
  },
  {
    url: "tags/yosemite/index.html",
    revision: "b53e2f590a0c80ccb12329f3a54d6674"
  },
  {
    url: "tags/youtube-dl/index.html",
    revision: "3b59e28973377f2574bd3906d34c076c"
  },
  {
    url: "tags/youtube/index.html",
    revision: "b43dd4e27d6e9e1ab2be8d3ce7411f5e"
  },
  {
    url: "tags/yvaine/index.html",
    revision: "b737fb95cec40723af9275c8b891c83f"
  },
  {
    url: "tags/zeta/index.html",
    revision: "d4dd2f205fe9f1a447bf16a4e96da579"
  }
];

const workboxSW = new self.WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});
workboxSW.precache(fileManifest);
