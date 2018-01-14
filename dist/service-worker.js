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
    "revision": "7413f38d46eea5e636139c0efc549134"
  },
  {
    "url": "2009/09/22/ghent-school/index.html",
    "revision": "db8a7223bb2e8f5f3ec9cdf26f837d9e"
  },
  {
    "url": "2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "f5c3cfe9d09c9637002f0b97362cfb2d"
  },
  {
    "url": "2010/05/12/desiring-the-casual-/index.html",
    "revision": "af69d4bc476af16b395ff77678039aa3"
  },
  {
    "url": "2010/08/03/enders-game---book-review-/index.html",
    "revision": "f6ec80164fe70e9c9e43dedee69e01b4"
  },
  {
    "url": "2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "1c09f627c735dd07ca594c5cd915d914"
  },
  {
    "url": "2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "480935aef81824ac0d608e448b1f96a0"
  },
  {
    "url": "2011/08/07/isce-2011/index.html",
    "revision": "c9576faa69bb0211c5e8fae58201cca3"
  },
  {
    "url": "2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "c529d27171a95250a40ca83c74e7ac93"
  },
  {
    "url": "2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "6d186f9aff3f42a0c07aa1669e41c47f"
  },
  {
    "url": "2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "2093a6d03138d71719d6d297cd2f9c97"
  },
  {
    "url": "2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "30312524929563e7fb669e5f68ac1452"
  },
  {
    "url": "2012/03/01/stardust---book-review-/index.html",
    "revision": "b56d614e54941dfee5d48f24395169b5"
  },
  {
    "url": "2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "f7041364fe8539982501c00fcebe296e"
  },
  {
    "url": "2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "1173ae6e6debeb8bdd89920843eb8f6e"
  },
  {
    "url": "2012/08/10/odu-vmasc/index.html",
    "revision": "1fbbc7062770c757e05d7c9e7db05875"
  },
  {
    "url": "2012/08/14/school-for-field-studies/index.html",
    "revision": "7e5998b8d260cc2350dac62fee121552"
  },
  {
    "url": "2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "3c1287dac81953023cf3eae71a91e8b8"
  },
  {
    "url": "2013/06/13/maury-high-school/index.html",
    "revision": "841eb5ee05854971dfeb6c63b5d651ee"
  },
  {
    "url": "2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "9803b02def3a1a05be42942890774072"
  },
  {
    "url": "2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "a51c8f5c22e9cc3781ed4c6f229c722b"
  },
  {
    "url": "2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "c89ec61f92345b327d35b375832de1cf"
  },
  {
    "url": "2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "43c79dab17cc2555e5a15b022a664569"
  },
  {
    "url": "2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "b82fbddceee625c2aeaebc8043e8d304"
  },
  {
    "url": "2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "3031a4906b3c27b3ad5f7dc2651a258f"
  },
  {
    "url": "2013/08/02/islc-2013/index.html",
    "revision": "c4d1ed315ba04012bcbe3de25ac9a29e"
  },
  {
    "url": "2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "d6bff550419c2ca6f9b1120de58130aa"
  },
  {
    "url": "2013/08/03/potc---chest-riddle-/index.html",
    "revision": "fa70ea12eb1f087d3f15e18b3da8a427"
  },
  {
    "url": "2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "26ba146730b0d082c326828200368cbf"
  },
  {
    "url": "2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "9a63c9af69716342f260a8729b0c8731"
  },
  {
    "url": "2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "8df975e6105a417ef258e50c8958c829"
  },
  {
    "url": "2013/09/20/c-bits---getting-started/index.html",
    "revision": "81bfce5523a014a966875e114b8e79d4"
  },
  {
    "url": "2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "e8b4d02642826bb3b4605cd5b8d82000"
  },
  {
    "url": "2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "f8c0e3286c5f7d7cbbd6b79af0b3874d"
  },
  {
    "url": "2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "d0ebd588997233b157bf25518f2f5f96"
  },
  {
    "url": "2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "7e8cfbbba50a1b87e1dadbabdcea64aa"
  },
  {
    "url": "2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "05f3df066eef7b7c7bb011fc4e619030"
  },
  {
    "url": "2014/02/21/working-smarter-not-harder/index.html",
    "revision": "c201398de2aa9d10899b4987667d53f6"
  },
  {
    "url": "2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "4f15aa59754aea07138a2b03d323291b"
  },
  {
    "url": "2014/03/03/ah-life./index.html",
    "revision": "42ba22340cffe511ec6d37f81021bdc7"
  },
  {
    "url": "2014/03/03/granny-said.../index.html",
    "revision": "e07486ff37647db81f13a7b37fee9794"
  },
  {
    "url": "2014/03/04/the-best-50-insults/index.html",
    "revision": "3851560221eea0d56738b943ffa52e96"
  },
  {
    "url": "2014/03/12/20-laws-of-power/index.html",
    "revision": "a9e039fc40755514b7667eb24d778b46"
  },
  {
    "url": "2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "be93f264f9bdd72cb55f038c64fa7b60"
  },
  {
    "url": "2014/03/12/java-bits---getting-started/index.html",
    "revision": "57ca777180723b96931026e1d6aeab93"
  },
  {
    "url": "2014/03/12/python-bits---getting-started/index.html",
    "revision": "8e2e4f68bb51aff39295d92648fdf493"
  },
  {
    "url": "2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "75762fb40fc11a224d54f907d4e76fbc"
  },
  {
    "url": "2014/04/07/texting-while-driving/index.html",
    "revision": "96b87397645706f98dfd5368b5bf5b04"
  },
  {
    "url": "2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "8a9470367347d865b9492353fb07f90a"
  },
  {
    "url": "2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "1a186766c9891074bad3130e297f671e"
  },
  {
    "url": "2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "bd1ced6bd96407b6676f60f10f1aea74"
  },
  {
    "url": "2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "a56bc219dfb643bec17f9ad94083913a"
  },
  {
    "url": "2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "222c3ddd56a0cfcb7fc332e5a1f37d45"
  },
  {
    "url": "2014/08/09/flavours-themes/index.html",
    "revision": "81549841185f09f0b17348ba42f41ac3"
  },
  {
    "url": "2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "e70a9e79ac09da6eed1b63122188de59"
  },
  {
    "url": "2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "7acd3c576154ed0ebaaa546ec514d911"
  },
  {
    "url": "2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "ee8d1d073d396c890f211acaa82a7522"
  },
  {
    "url": "2014/08/16/stars-celebration/index.html",
    "revision": "2735fe314f6b90ea0684a55eab7a6aea"
  },
  {
    "url": "2014/08/21/a.i.-international/index.html",
    "revision": "73f950e1b5ddf88f2df61513b40a3a31"
  },
  {
    "url": "2014/09/10/giving-back/index.html",
    "revision": "34de84320d4b4de8385b9dd60aede78d"
  },
  {
    "url": "2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "2f616261710ec8e12751f276c198e1f6"
  },
  {
    "url": "2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "870e76fd9d1d824dc714776181b8803b"
  },
  {
    "url": "2014/09/22/review---limbo/index.html",
    "revision": "91c0c044fa4a32ffe1b7ebabce231446"
  },
  {
    "url": "2014/10/01/cshu/index.html",
    "revision": "6fb7285d6eee48b075607a25cd1970e9"
  },
  {
    "url": "2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "de1af5a6b05ada26abf4e84e652d408e"
  },
  {
    "url": "2014/10/17/long-lighthearted-lists/index.html",
    "revision": "2c50e6f391474edade8d7475c1246ef7"
  },
  {
    "url": "2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "762bbb8907d3d700c22ac2ea86e22f53"
  },
  {
    "url": "2014/10/26/dc-hack/index.html",
    "revision": "717e82a2ba68124bb303c51d7d0ff562"
  },
  {
    "url": "2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "dd4662d046ad2c4db34e4fe07ddac9cc"
  },
  {
    "url": "2014/11/10/study-guide---linked-lists/index.html",
    "revision": "22f5fe2ae45b82589a206c96156b7b00"
  },
  {
    "url": "2014/11/13/yes-hair-/index.html",
    "revision": "65543c2188569bc84d385ce4c6bc69b9"
  },
  {
    "url": "2014/12/03/binary-trees--recursion/index.html",
    "revision": "fd8c11ede41d40c7cb5e052ad362258a"
  },
  {
    "url": "2014/12/17/inkling-1.1/index.html",
    "revision": "6149a1de8623227afb7a0a026a90e5ef"
  },
  {
    "url": "2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "7b2a9825d17d767812532542dbc34f5a"
  },
  {
    "url": "2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "864042af77d8dfe7a15482de65e65bab"
  },
  {
    "url": "2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "f8b33224565418dd540dd42f38668b78"
  },
  {
    "url": "2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "7e275e164ec6a471ed2af3b58c08c725"
  },
  {
    "url": "2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "532c4410456622a8332c1f73669f4234"
  },
  {
    "url": "2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "bcbf47baa89ed6e6d2d20c1bc4ed30c4"
  },
  {
    "url": "2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "829f9ac96046c3edc63c5d95382d1772"
  },
  {
    "url": "2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "99879e0e5e26915e5c588fdc0b81c1b8"
  },
  {
    "url": "2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "c6b24011c3cd72618761615be422609e"
  },
  {
    "url": "2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "dd9bdd54daf56ffb5a0b44b310e3f950"
  },
  {
    "url": "2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "ed9b38877c6391a50b4e3d79dce5bb2d"
  },
  {
    "url": "2015/01/06/interview-with-coding-house/index.html",
    "revision": "fadf90803db0c5809f580bb569078a46"
  },
  {
    "url": "2015/01/06/interview-with-designation/index.html",
    "revision": "7327faa599ae0daac5f38f940348dacb"
  },
  {
    "url": "2015/01/06/interview-with-devleague/index.html",
    "revision": "ef1e750b8913fe874dfec40d50db4138"
  },
  {
    "url": "2015/01/14/interview-with-makersquare/index.html",
    "revision": "1bfd0370bc50fe6fe279c8c1303f3e01"
  },
  {
    "url": "2015/01/30/aaai-2015/index.html",
    "revision": "8b7214abe0e812a3c72c1237000fe004"
  },
  {
    "url": "2015/01/30/adventures-with-aaai/index.html",
    "revision": "cc0ab79b76a787355edaddf01865cfc7"
  },
  {
    "url": "2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "b51437d931da4f1f8753bd8f23b51caf"
  },
  {
    "url": "2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "1fbb2fa752e320d634e0da32d83c9427"
  },
  {
    "url": "2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "581dea0c56e924797f8b253fec7c55af"
  },
  {
    "url": "2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "0d751c6a85437797437562160270ae59"
  },
  {
    "url": "2015/02/15/that-tapia-conference/index.html",
    "revision": "ee675f6c0bd4d73abfe9fdec858fe64c"
  },
  {
    "url": "2015/02/21/tapia-2015/index.html",
    "revision": "4217b85106b03662e37d1e119ae21d0d"
  },
  {
    "url": "2015/03/01/jeopardy-template-/index.html",
    "revision": "09fdc4c6d3d5c855c3dcb659ff2fe275"
  },
  {
    "url": "2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "c2d578f4c9f96bc6b4cd453a908af501"
  },
  {
    "url": "2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "756232eb1994ed841a2cf5d0f538b7dc"
  },
  {
    "url": "2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "0e7b50b1ca22ec85d9c7975dcf92b9ac"
  },
  {
    "url": "2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "fa39838b33117d7221ebf09ebd1ad16d"
  },
  {
    "url": "2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "067ded24b787721924917db49527b8a3"
  },
  {
    "url": "2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "538ce36d1c3301c6e0e38bc24f530638"
  },
  {
    "url": "2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "411288b63b33aa591b3e620312582848"
  },
  {
    "url": "2015/04/17/vsgc-2015/index.html",
    "revision": "0aaefcec22f0837a98cad4fc6dabe5b2"
  },
  {
    "url": "2015/04/18/sort-detective---solution-/index.html",
    "revision": "ffccb33e4d9b6ada74743b800327a072"
  },
  {
    "url": "2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "feb8c0f7d6d98ebd3d19a853e45703e4"
  },
  {
    "url": "2015/04/23/a.i.-movies-/index.html",
    "revision": "b53db3f4bd7bd5faf487aee893017eea"
  },
  {
    "url": "2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "e998eee77cb32d6e1147ca11e68cc3b0"
  },
  {
    "url": "2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "f19c8a2b75c77ad7db7ad0bd2fc6db7b"
  },
  {
    "url": "2015/04/30/bebop.me-/index.html",
    "revision": "399e3108ee292e200aeceebcc2e080a4"
  },
  {
    "url": "2015/05/17/ameot-/index.html",
    "revision": "42beb778e09bfb0a8fe56b2ddcca605b"
  },
  {
    "url": "2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "ed40a3c9d940c8df3433e0281ec9a80d"
  },
  {
    "url": "2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "7272dc53368a16d4809c2e758e8c01a4"
  },
  {
    "url": "2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "b051fe7c4b0a66db79ddd8d76177d144"
  },
  {
    "url": "2015/05/26/the-guessing-game-️/index.html",
    "revision": "c089c6c18c201f86dca0bda1b7a87c98"
  },
  {
    "url": "2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "738f47d3c26bb9186831d7f53e740a60"
  },
  {
    "url": "2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "3c65a3efe688e55bde39b87d4fe81358"
  },
  {
    "url": "2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "ef3969cbe8ca83cdaa137d57d2fc8d72"
  },
  {
    "url": "2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "63069360f21359aa817fa384fa0420c6"
  },
  {
    "url": "2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "e131460ad2ee71dbda98a21760ac555e"
  },
  {
    "url": "2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "43d8cf7addcdac3babc9eaff0da34685"
  },
  {
    "url": "2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "385a3ea6138d94370a7d80efd2eb3ec2"
  },
  {
    "url": "2015/07/25/sally-conference/index.html",
    "revision": "e6f0f7205980ed5b193732038a55b43f"
  },
  {
    "url": "2015/08/05/robopocalypse-/index.html",
    "revision": "9c5412c9956dc6e09fe26a080998c1d6"
  },
  {
    "url": "2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "3dcda1ea66956cef3eb5cd572d8f752f"
  },
  {
    "url": "2015/08/11/rankme-/index.html",
    "revision": "2019c45ce795329eacae4b1ffd3f2a77"
  },
  {
    "url": "2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "c5a18d78cedb230328d585018430c651"
  },
  {
    "url": "2015/08/20/readme-template-for-github-/index.html",
    "revision": "74f3dd72174c7d2659f8413ffe0d1e1b"
  },
  {
    "url": "2015/08/26/hiredot-/index.html",
    "revision": "9682595f6ac59f198710fb9db314a6ea"
  },
  {
    "url": "2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "31e59840ca5171bdedd5dd553d696e7c"
  },
  {
    "url": "2015/09/25/discover-goldman-sachs/index.html",
    "revision": "f128d631d51fc16c0c6af453ee309bc5"
  },
  {
    "url": "2015/10/09/designlab-submissions-/index.html",
    "revision": "34217185522b249fe654aa3b70fad8ca"
  },
  {
    "url": "2015/10/09/designlab/index.html",
    "revision": "6123173e5ab209978bcf52af9a7b0f45"
  },
  {
    "url": "2015/10/20/andre-smith/index.html",
    "revision": "91ff11a0ae4870eb8e50d4ff13020c3f"
  },
  {
    "url": "2015/10/21/my-designlab-experience-/index.html",
    "revision": "21a6375af3d6d7a2e1aa7cc02fb740e7"
  },
  {
    "url": "2015/10/24/hack-the-vote-/index.html",
    "revision": "f20b1650ee1f89ebd36f666b2bfdd7d0"
  },
  {
    "url": "2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "801ef692b263a8c777f96914363ecdf6"
  },
  {
    "url": "2015/11/11/meetups-nearby-/index.html",
    "revision": "9fe805d0a3b0d7657f39d3a154255249"
  },
  {
    "url": "2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "9da8f94b4b5b8ef9a708b915d45ea935"
  },
  {
    "url": "2015/11/14/hr-devfest/index.html",
    "revision": "e8c83dbf165516d6184a7614fc49cf55"
  },
  {
    "url": "2015/11/15/aaai/index.html",
    "revision": "d1b38e31fe0556bf6d768499ed5508ae"
  },
  {
    "url": "2015/11/15/stars-computing-corps/index.html",
    "revision": "eb87bb075e41236a2fc2f905e8cf1022"
  },
  {
    "url": "2015/11/20/discover-accenture/index.html",
    "revision": "8e34e48d164585a2d7648ef576a7e134"
  },
  {
    "url": "2015/12/02/dear-holberton-/index.html",
    "revision": "1c232b6f9f2b006652db4548467d536c"
  },
  {
    "url": "2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "437607cf5c27fae9cbf1e4a0feaef243"
  },
  {
    "url": "2015/12/10/ai-choo-ashe/index.html",
    "revision": "3934af37510ffc990633e31568014207"
  },
  {
    "url": "2015/12/12/kelli-white/index.html",
    "revision": "dc2a7c419fe61556e8f0358dcc918426"
  },
  {
    "url": "2015/12/13/hour-of-code/index.html",
    "revision": "a1d4e296417a909b2032ac28103b4f99"
  },
  {
    "url": "2015/12/18/alex-bradshaw/index.html",
    "revision": "871420a66b0dcc1db13d02f2a13e0414"
  },
  {
    "url": "2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "102a44e91e09cc990cb555e828499249"
  },
  {
    "url": "2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "f789fac3aaaa1874f7ed47acb3ade263"
  },
  {
    "url": "2016/01/05/kimberly-logsdon/index.html",
    "revision": "c1392361510ec5dbb450938401d986a3"
  },
  {
    "url": "2016/01/11/meetup-dice-/index.html",
    "revision": "72555c11980bb06a346eeb00d74a2f33"
  },
  {
    "url": "2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "0288bb4d5cf673b9dff3e99722001294"
  },
  {
    "url": "2016/01/18/built-in-norfolk/index.html",
    "revision": "86e53b50ae4e22392f0edf1b7af59978"
  },
  {
    "url": "2016/01/18/norfolk.js-meetup/index.html",
    "revision": "68c15bf43f580799f4bc692130428c60"
  },
  {
    "url": "2016/01/31/hoya-hacks/index.html",
    "revision": "b66b56d7401ce904f7a2212cf749baaf"
  },
  {
    "url": "2016/01/31/life-at-home-/index.html",
    "revision": "548869578adbf8f346b03780669db185"
  },
  {
    "url": "2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "e8067f15b2064f9bcfb16334f5576d9b"
  },
  {
    "url": "2016/02/05/8020-software-consulting/index.html",
    "revision": "e54968295274046c43a908e7d9f9ef03"
  },
  {
    "url": "2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "fcdd4d1692a884b4cf5a150c83fbb26e"
  },
  {
    "url": "2016/02/05/hacku-4/index.html",
    "revision": "b2fe7fbf1119a208dbcc79b9dc9caf79"
  },
  {
    "url": "2016/02/12/acm/index.html",
    "revision": "6d003e2e7a0318db161f1b3ba91afcab"
  },
  {
    "url": "2016/02/14/treehacks/index.html",
    "revision": "7fb25623167ce9f9fdfa211b02397707"
  },
  {
    "url": "2016/02/17/developerweek/index.html",
    "revision": "0cdf621063e75faeb38528e6cba1543f"
  },
  {
    "url": "2016/02/23/react.js-conf/index.html",
    "revision": "930e5511e3f3a6692a4a9449191954b4"
  },
  {
    "url": "2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "7d13909115d24fa4df70b34a154a6694"
  },
  {
    "url": "2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "e42938553db0df6cded3a0f7aaece133"
  },
  {
    "url": "2016/03/10/fluent-conference/index.html",
    "revision": "1adededb25de492f7aed47b7c9732643"
  },
  {
    "url": "2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "869a5e8afcff1ead223462a9c1354ca6"
  },
  {
    "url": "2016/04/01/angel-riera/index.html",
    "revision": "2ecfcb670331d7d8fdadf1d6417debbb"
  },
  {
    "url": "2016/04/07/mike-jonas/index.html",
    "revision": "0af5a1e0495ba1dc8bcf8094cc435234"
  },
  {
    "url": "2016/04/09/innovation-hackathon/index.html",
    "revision": "6e66be77505aa1395c38e22adb1c5437"
  },
  {
    "url": "2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "7cd2ec78291285dc4d59bb43f36793e3"
  },
  {
    "url": "2016/04/30/schools-out-️/index.html",
    "revision": "87bf87967c07940d5a62ed7fd7d95365"
  },
  {
    "url": "2016/05/04/hampton-university/index.html",
    "revision": "393223c36bf8d34d1ff990bdf6b327d9"
  },
  {
    "url": "2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    "revision": "c0198384e2269cb1db2fa32fc74bcd3e"
  },
  {
    "url": "2016/05/13/revolutionconf/index.html",
    "revision": "61cb5c9b94f43cfc9b2a1debac7ff9ac"
  },
  {
    "url": "2016/05/24/pak-chu/index.html",
    "revision": "40a387371371cc0aa41beca188974099"
  },
  {
    "url": "2016/05/25/free-code-camp/index.html",
    "revision": "392ab480a016f3961eb5551a37035876"
  },
  {
    "url": "2016/06/06/wen-tran/index.html",
    "revision": "8c87e14fc92b0ec06211700ddca2d7b1"
  },
  {
    "url": "2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "dbd9379a3dc0eb93cc940617df3255c2"
  },
  {
    "url": "2016/06/29/accenture-slc/index.html",
    "revision": "fa57be74ee7f48b766a4324d10a51092"
  },
  {
    "url": "2016/07/30/npmcamp/index.html",
    "revision": "68e9d7e1a2f43243e0725bafaa3a4619"
  },
  {
    "url": "2016/08/01/lavie-ruan/index.html",
    "revision": "91376cde83d798e3de5c05b5396c81e4"
  },
  {
    "url": "2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "a11fb248a2cc21bf6e539f9c5af8b4da"
  },
  {
    "url": "2016/08/26/fullstack-academy/index.html",
    "revision": "d8553d61aba1cb96262703936839bdcc"
  },
  {
    "url": "2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "dea61f3a0cf58225ed3debb6fec56656"
  },
  {
    "url": "2016/09/16/tapia-2016/index.html",
    "revision": "251e9edebc28b05ee003d62382f96668"
  },
  {
    "url": "2016/09/27/github-repos---mashup-/index.html",
    "revision": "6e3d2278f22f743336a3e19dd8c27bd1"
  },
  {
    "url": "2016/10/01/designhackathon/index.html",
    "revision": "d4db79f0a197a0cae12e065283b3ad75"
  },
  {
    "url": "2016/10/01/the-meggs-case-/index.html",
    "revision": "12333f31b1991448c86309f3731e8aca"
  },
  {
    "url": "2016/10/04/cornell-tech-logos-/index.html",
    "revision": "ba854f9a61e5baa4be484d5cde43b8bd"
  },
  {
    "url": "2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "dd6e2e105330437ec522127d683f8a7f"
  },
  {
    "url": "2016/10/09/kent-hack-enough/index.html",
    "revision": "0fa277974b69d63da8f65697ddcb0ec4"
  },
  {
    "url": "2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "ff7554f5bd3e739c7d94747872b77d89"
  },
  {
    "url": "2016/10/13/techweek-nyc/index.html",
    "revision": "6409a9c8f514597bc45e918d92620dd5"
  },
  {
    "url": "2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "8e27025aa5dcc7d07945760bad2b4e93"
  },
  {
    "url": "2016/11/18/product-studio-/index.html",
    "revision": "a8806831d2e855403138ce8a91d11874"
  },
  {
    "url": "2016/11/30/witny/index.html",
    "revision": "956255487af7ceb31605ea37d7af7afc"
  },
  {
    "url": "2016/12/01/duolingo-delights-/index.html",
    "revision": "7a56168f956c9fe5424a8c188d26845e"
  },
  {
    "url": "2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "d2ca8fdc18b89a917f1fad82b37ddb9a"
  },
  {
    "url": "2016/12/08/hour-of-code/index.html",
    "revision": "322bf5f99a99173fb8fe0ff38642211a"
  },
  {
    "url": "2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "7f6fcfdce24b9ac0d65bac47b1fc7934"
  },
  {
    "url": "2016/12/10/alterconf-nyc-/index.html",
    "revision": "adcfa0823e5e005c88e79db1c820ffbd"
  },
  {
    "url": "2016/12/11/alterconf-nyc/index.html",
    "revision": "4327f198cd2add73d35353b9342f8e96"
  },
  {
    "url": "2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "106f3454c9ce876cc4f4912ddb5ff801"
  },
  {
    "url": "2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "9f486253cbb575af545efac4a2cf0077"
  },
  {
    "url": "2016/12/17/norfolk.js/index.html",
    "revision": "ea0f63c0a0647260557cc70c86b38daa"
  },
  {
    "url": "2016/12/17/product-school/index.html",
    "revision": "560fba026d962243a44e7d25998382dc"
  },
  {
    "url": "2017/01/07/updated-github-page-/index.html",
    "revision": "70f53a388a569d62905415a96abcc044"
  },
  {
    "url": "2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "d6127b6e02b9e528b465ecd07cd85e5e"
  },
  {
    "url": "2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "4abd9fb3aaf06ba064bbd7f6bfe437d4"
  },
  {
    "url": "2017/01/21/huge-school-application-2017/index.html",
    "revision": "77a83af828bb9152362123ddad25602c"
  },
  {
    "url": "2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "5fe3085eb2929fd076407af5afab5369"
  },
  {
    "url": "2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "71b8e9da95a404122a694f83bf1cb727"
  },
  {
    "url": "2017/01/30/cute-things-we-do-/index.html",
    "revision": "ca9dcf91537cd2e5c7e23972f1a124b2"
  },
  {
    "url": "2017/02/01/franklin-lee/index.html",
    "revision": "d228cdc1b7bb097d0e94fac4aa8bc043"
  },
  {
    "url": "2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "0001567868ba5f130e08cca8d6dc39cb"
  },
  {
    "url": "2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "ea851f09a16fd14f2cd4685a7936257b"
  },
  {
    "url": "2017/02/19/hackysu-2017/index.html",
    "revision": "0fd6a8679aa3abd94f4d288ff0df89d0"
  },
  {
    "url": "2017/02/24/startup-studio/index.html",
    "revision": "ba3db03c1bd6406ffb529393932f9726"
  },
  {
    "url": "2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "d68a366da9ddc75f32724cbe41609e34"
  },
  {
    "url": "2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "a5e0317fb3e54f75865cb33acdba8e4a"
  },
  {
    "url": "2017/03/14/connective-media/index.html",
    "revision": "fb2faa7dba7909f666f3fd51fea2bc91"
  },
  {
    "url": "2017/03/15/accepted-to-design-inc./index.html",
    "revision": "8df22c076bd6636313689a05b8aae187"
  },
  {
    "url": "2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "702ae8c52ca77b5987d3f873a43894b9"
  },
  {
    "url": "2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "b90f4a0d1777a2377c4b52f046b4e533"
  },
  {
    "url": "2017/03/17/apprenticeships-/index.html",
    "revision": "3f265f17818e28513cea17fe15c22220"
  },
  {
    "url": "2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "e8a5730253766a18d3b77091f983d359"
  },
  {
    "url": "2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "b61d97b8dc8d8f649c912fa47b378efc"
  },
  {
    "url": "2017/04/14/pathfinder/index.html",
    "revision": "994bb1fe84697e8ab9818c3257239473"
  },
  {
    "url": "2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "ce762d69c0b655a7f518fe0d9468681c"
  },
  {
    "url": "2017/04/30/codenow/index.html",
    "revision": "4fc23695637c673c1c40f1b28321865e"
  },
  {
    "url": "2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "2fc3e37a942bd39aad6af35a0bd2c94b"
  },
  {
    "url": "2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "36c817440eeea9f67362655ff059f8e6"
  },
  {
    "url": "2017/05/26/cornell-tech/index.html",
    "revision": "e2bbe23ace33eea081feedf98f916bbd"
  },
  {
    "url": "2017/06/07/accenture-liquid-studio/index.html",
    "revision": "0529800c726e9c21fdbd35a010080d98"
  },
  {
    "url": "2017/06/16/team-monarch/index.html",
    "revision": "d83033c0c590f0bf4f49d830add00e82"
  },
  {
    "url": "2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "a54c1e91c3157b967376f4809c2b3ab5"
  },
  {
    "url": "2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "a507359ce791087417992cbe47dc5ea2"
  },
  {
    "url": "2017/08/28/new-blog-new-problems-/index.html",
    "revision": "b225e5ab82ec3a5e73492f5b8266cb42"
  },
  {
    "url": "2017/09/16/affect-conf/index.html",
    "revision": "e343d871f476497f4c476fa7c8b0eeac"
  },
  {
    "url": "2017/09/27/strange-loop-2017/index.html",
    "revision": "3b5a7e149a5dd25b52b6edfd2a8f319b"
  },
  {
    "url": "2017/10/22/pwa-roadshow/index.html",
    "revision": "262448d1926aac28f6d2535e685a5c96"
  },
  {
    "url": "2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "b76f4b82cd5c58ec8b889b1ca4a29d31"
  },
  {
    "url": "404.html",
    "revision": "c0877ce795ad6ddfd304572b8c7079ed"
  },
  {
    "url": "about/colophon/index.html",
    "revision": "ed4e87104c3c73ab4ae7da5bd8eacb38"
  },
  {
    "url": "about/github-repo/index.html",
    "revision": "7ce25bc9f08bc8756d2ac082b1104d24"
  },
  {
    "url": "about/index.html",
    "revision": "7aee34fbab351138f971dcbcdb6c1c65"
  },
  {
    "url": "about/resume/index.html",
    "revision": "5a05a6d4336667b464a7e56ef855075a"
  },
  {
    "url": "about/travels/index.html",
    "revision": "5018fccef355b39d2c0cd396aafbadf8"
  },
  {
    "url": "about/what-i-use/index.html",
    "revision": "9d8587739a5c4835194d950b426c7b84"
  },
  {
    "url": "adventures/index.html",
    "revision": "073f600bd4f0c98c0ae9c3bed3124562"
  },
  {
    "url": "amp/2008/06/01/middle-school-poems-️/index.html",
    "revision": "7413f38d46eea5e636139c0efc549134"
  },
  {
    "url": "amp/2009/09/22/ghent-school/index.html",
    "revision": "db8a7223bb2e8f5f3ec9cdf26f837d9e"
  },
  {
    "url": "amp/2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "f5c3cfe9d09c9637002f0b97362cfb2d"
  },
  {
    "url": "amp/2010/05/12/desiring-the-casual-/index.html",
    "revision": "af69d4bc476af16b395ff77678039aa3"
  },
  {
    "url": "amp/2010/08/03/enders-game---book-review-/index.html",
    "revision": "f6ec80164fe70e9c9e43dedee69e01b4"
  },
  {
    "url": "amp/2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "1c09f627c735dd07ca594c5cd915d914"
  },
  {
    "url": "amp/2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "480935aef81824ac0d608e448b1f96a0"
  },
  {
    "url": "amp/2011/08/07/isce-2011/index.html",
    "revision": "c9576faa69bb0211c5e8fae58201cca3"
  },
  {
    "url": "amp/2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "c529d27171a95250a40ca83c74e7ac93"
  },
  {
    "url": "amp/2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "6d186f9aff3f42a0c07aa1669e41c47f"
  },
  {
    "url": "amp/2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "2093a6d03138d71719d6d297cd2f9c97"
  },
  {
    "url": "amp/2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "30312524929563e7fb669e5f68ac1452"
  },
  {
    "url": "amp/2012/03/01/stardust---book-review-/index.html",
    "revision": "b56d614e54941dfee5d48f24395169b5"
  },
  {
    "url": "amp/2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "f7041364fe8539982501c00fcebe296e"
  },
  {
    "url": "amp/2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "1173ae6e6debeb8bdd89920843eb8f6e"
  },
  {
    "url": "amp/2012/08/10/odu-vmasc/index.html",
    "revision": "1fbbc7062770c757e05d7c9e7db05875"
  },
  {
    "url": "amp/2012/08/14/school-for-field-studies/index.html",
    "revision": "7e5998b8d260cc2350dac62fee121552"
  },
  {
    "url": "amp/2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "3c1287dac81953023cf3eae71a91e8b8"
  },
  {
    "url": "amp/2013/06/13/maury-high-school/index.html",
    "revision": "841eb5ee05854971dfeb6c63b5d651ee"
  },
  {
    "url": "amp/2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "9803b02def3a1a05be42942890774072"
  },
  {
    "url": "amp/2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "a51c8f5c22e9cc3781ed4c6f229c722b"
  },
  {
    "url": "amp/2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "c89ec61f92345b327d35b375832de1cf"
  },
  {
    "url": "amp/2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "43c79dab17cc2555e5a15b022a664569"
  },
  {
    "url": "amp/2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "b82fbddceee625c2aeaebc8043e8d304"
  },
  {
    "url": "amp/2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "3031a4906b3c27b3ad5f7dc2651a258f"
  },
  {
    "url": "amp/2013/08/02/islc-2013/index.html",
    "revision": "c4d1ed315ba04012bcbe3de25ac9a29e"
  },
  {
    "url": "amp/2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "d6bff550419c2ca6f9b1120de58130aa"
  },
  {
    "url": "amp/2013/08/03/potc---chest-riddle-/index.html",
    "revision": "fa70ea12eb1f087d3f15e18b3da8a427"
  },
  {
    "url": "amp/2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "26ba146730b0d082c326828200368cbf"
  },
  {
    "url": "amp/2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "9a63c9af69716342f260a8729b0c8731"
  },
  {
    "url": "amp/2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "8df975e6105a417ef258e50c8958c829"
  },
  {
    "url": "amp/2013/09/20/c-bits---getting-started/index.html",
    "revision": "81bfce5523a014a966875e114b8e79d4"
  },
  {
    "url": "amp/2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "e8b4d02642826bb3b4605cd5b8d82000"
  },
  {
    "url": "amp/2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "f8c0e3286c5f7d7cbbd6b79af0b3874d"
  },
  {
    "url": "amp/2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "d0ebd588997233b157bf25518f2f5f96"
  },
  {
    "url": "amp/2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "7e8cfbbba50a1b87e1dadbabdcea64aa"
  },
  {
    "url": "amp/2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "05f3df066eef7b7c7bb011fc4e619030"
  },
  {
    "url": "amp/2014/02/21/working-smarter-not-harder/index.html",
    "revision": "c201398de2aa9d10899b4987667d53f6"
  },
  {
    "url": "amp/2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "4f15aa59754aea07138a2b03d323291b"
  },
  {
    "url": "amp/2014/03/03/ah-life./index.html",
    "revision": "42ba22340cffe511ec6d37f81021bdc7"
  },
  {
    "url": "amp/2014/03/03/granny-said.../index.html",
    "revision": "e07486ff37647db81f13a7b37fee9794"
  },
  {
    "url": "amp/2014/03/04/the-best-50-insults/index.html",
    "revision": "3851560221eea0d56738b943ffa52e96"
  },
  {
    "url": "amp/2014/03/12/20-laws-of-power/index.html",
    "revision": "a9e039fc40755514b7667eb24d778b46"
  },
  {
    "url": "amp/2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "be93f264f9bdd72cb55f038c64fa7b60"
  },
  {
    "url": "amp/2014/03/12/java-bits---getting-started/index.html",
    "revision": "57ca777180723b96931026e1d6aeab93"
  },
  {
    "url": "amp/2014/03/12/python-bits---getting-started/index.html",
    "revision": "8e2e4f68bb51aff39295d92648fdf493"
  },
  {
    "url": "amp/2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "75762fb40fc11a224d54f907d4e76fbc"
  },
  {
    "url": "amp/2014/04/07/texting-while-driving/index.html",
    "revision": "96b87397645706f98dfd5368b5bf5b04"
  },
  {
    "url": "amp/2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "8a9470367347d865b9492353fb07f90a"
  },
  {
    "url": "amp/2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "1a186766c9891074bad3130e297f671e"
  },
  {
    "url": "amp/2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "bd1ced6bd96407b6676f60f10f1aea74"
  },
  {
    "url": "amp/2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "a56bc219dfb643bec17f9ad94083913a"
  },
  {
    "url": "amp/2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "222c3ddd56a0cfcb7fc332e5a1f37d45"
  },
  {
    "url": "amp/2014/08/09/flavours-themes/index.html",
    "revision": "81549841185f09f0b17348ba42f41ac3"
  },
  {
    "url": "amp/2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "e70a9e79ac09da6eed1b63122188de59"
  },
  {
    "url": "amp/2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "7acd3c576154ed0ebaaa546ec514d911"
  },
  {
    "url": "amp/2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "ee8d1d073d396c890f211acaa82a7522"
  },
  {
    "url": "amp/2014/08/16/stars-celebration/index.html",
    "revision": "2735fe314f6b90ea0684a55eab7a6aea"
  },
  {
    "url": "amp/2014/08/21/a.i.-international/index.html",
    "revision": "73f950e1b5ddf88f2df61513b40a3a31"
  },
  {
    "url": "amp/2014/09/10/giving-back/index.html",
    "revision": "34de84320d4b4de8385b9dd60aede78d"
  },
  {
    "url": "amp/2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "2f616261710ec8e12751f276c198e1f6"
  },
  {
    "url": "amp/2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "870e76fd9d1d824dc714776181b8803b"
  },
  {
    "url": "amp/2014/09/22/review---limbo/index.html",
    "revision": "91c0c044fa4a32ffe1b7ebabce231446"
  },
  {
    "url": "amp/2014/10/01/cshu/index.html",
    "revision": "6fb7285d6eee48b075607a25cd1970e9"
  },
  {
    "url": "amp/2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "de1af5a6b05ada26abf4e84e652d408e"
  },
  {
    "url": "amp/2014/10/17/long-lighthearted-lists/index.html",
    "revision": "2c50e6f391474edade8d7475c1246ef7"
  },
  {
    "url": "amp/2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "762bbb8907d3d700c22ac2ea86e22f53"
  },
  {
    "url": "amp/2014/10/26/dc-hack/index.html",
    "revision": "717e82a2ba68124bb303c51d7d0ff562"
  },
  {
    "url": "amp/2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "dd4662d046ad2c4db34e4fe07ddac9cc"
  },
  {
    "url": "amp/2014/11/10/study-guide---linked-lists/index.html",
    "revision": "22f5fe2ae45b82589a206c96156b7b00"
  },
  {
    "url": "amp/2014/11/13/yes-hair-/index.html",
    "revision": "65543c2188569bc84d385ce4c6bc69b9"
  },
  {
    "url": "amp/2014/12/03/binary-trees--recursion/index.html",
    "revision": "fd8c11ede41d40c7cb5e052ad362258a"
  },
  {
    "url": "amp/2014/12/17/inkling-1.1/index.html",
    "revision": "6149a1de8623227afb7a0a026a90e5ef"
  },
  {
    "url": "amp/2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "7b2a9825d17d767812532542dbc34f5a"
  },
  {
    "url": "amp/2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "864042af77d8dfe7a15482de65e65bab"
  },
  {
    "url": "amp/2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "f8b33224565418dd540dd42f38668b78"
  },
  {
    "url": "amp/2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "7e275e164ec6a471ed2af3b58c08c725"
  },
  {
    "url": "amp/2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "532c4410456622a8332c1f73669f4234"
  },
  {
    "url": "amp/2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "bcbf47baa89ed6e6d2d20c1bc4ed30c4"
  },
  {
    "url": "amp/2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "829f9ac96046c3edc63c5d95382d1772"
  },
  {
    "url": "amp/2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "99879e0e5e26915e5c588fdc0b81c1b8"
  },
  {
    "url": "amp/2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "c6b24011c3cd72618761615be422609e"
  },
  {
    "url": "amp/2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "dd9bdd54daf56ffb5a0b44b310e3f950"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "ed9b38877c6391a50b4e3d79dce5bb2d"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-house/index.html",
    "revision": "fadf90803db0c5809f580bb569078a46"
  },
  {
    "url": "amp/2015/01/06/interview-with-designation/index.html",
    "revision": "7327faa599ae0daac5f38f940348dacb"
  },
  {
    "url": "amp/2015/01/06/interview-with-devleague/index.html",
    "revision": "ef1e750b8913fe874dfec40d50db4138"
  },
  {
    "url": "amp/2015/01/14/interview-with-makersquare/index.html",
    "revision": "1bfd0370bc50fe6fe279c8c1303f3e01"
  },
  {
    "url": "amp/2015/01/30/aaai-2015/index.html",
    "revision": "8b7214abe0e812a3c72c1237000fe004"
  },
  {
    "url": "amp/2015/01/30/adventures-with-aaai/index.html",
    "revision": "cc0ab79b76a787355edaddf01865cfc7"
  },
  {
    "url": "amp/2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "b51437d931da4f1f8753bd8f23b51caf"
  },
  {
    "url": "amp/2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "1fbb2fa752e320d634e0da32d83c9427"
  },
  {
    "url": "amp/2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "581dea0c56e924797f8b253fec7c55af"
  },
  {
    "url": "amp/2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "0d751c6a85437797437562160270ae59"
  },
  {
    "url": "amp/2015/02/15/that-tapia-conference/index.html",
    "revision": "ee675f6c0bd4d73abfe9fdec858fe64c"
  },
  {
    "url": "amp/2015/02/21/tapia-2015/index.html",
    "revision": "4217b85106b03662e37d1e119ae21d0d"
  },
  {
    "url": "amp/2015/03/01/jeopardy-template-/index.html",
    "revision": "09fdc4c6d3d5c855c3dcb659ff2fe275"
  },
  {
    "url": "amp/2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "c2d578f4c9f96bc6b4cd453a908af501"
  },
  {
    "url": "amp/2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "756232eb1994ed841a2cf5d0f538b7dc"
  },
  {
    "url": "amp/2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "0e7b50b1ca22ec85d9c7975dcf92b9ac"
  },
  {
    "url": "amp/2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "fa39838b33117d7221ebf09ebd1ad16d"
  },
  {
    "url": "amp/2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "067ded24b787721924917db49527b8a3"
  },
  {
    "url": "amp/2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "538ce36d1c3301c6e0e38bc24f530638"
  },
  {
    "url": "amp/2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "411288b63b33aa591b3e620312582848"
  },
  {
    "url": "amp/2015/04/17/vsgc-2015/index.html",
    "revision": "0aaefcec22f0837a98cad4fc6dabe5b2"
  },
  {
    "url": "amp/2015/04/18/sort-detective---solution-/index.html",
    "revision": "ffccb33e4d9b6ada74743b800327a072"
  },
  {
    "url": "amp/2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "feb8c0f7d6d98ebd3d19a853e45703e4"
  },
  {
    "url": "amp/2015/04/23/a.i.-movies-/index.html",
    "revision": "b53db3f4bd7bd5faf487aee893017eea"
  },
  {
    "url": "amp/2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "e998eee77cb32d6e1147ca11e68cc3b0"
  },
  {
    "url": "amp/2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "f19c8a2b75c77ad7db7ad0bd2fc6db7b"
  },
  {
    "url": "amp/2015/04/30/bebop.me-/index.html",
    "revision": "399e3108ee292e200aeceebcc2e080a4"
  },
  {
    "url": "amp/2015/05/17/ameot-/index.html",
    "revision": "42beb778e09bfb0a8fe56b2ddcca605b"
  },
  {
    "url": "amp/2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "ed40a3c9d940c8df3433e0281ec9a80d"
  },
  {
    "url": "amp/2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "7272dc53368a16d4809c2e758e8c01a4"
  },
  {
    "url": "amp/2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "b051fe7c4b0a66db79ddd8d76177d144"
  },
  {
    "url": "amp/2015/05/26/the-guessing-game-️/index.html",
    "revision": "c089c6c18c201f86dca0bda1b7a87c98"
  },
  {
    "url": "amp/2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "738f47d3c26bb9186831d7f53e740a60"
  },
  {
    "url": "amp/2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "3c65a3efe688e55bde39b87d4fe81358"
  },
  {
    "url": "amp/2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "ef3969cbe8ca83cdaa137d57d2fc8d72"
  },
  {
    "url": "amp/2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "63069360f21359aa817fa384fa0420c6"
  },
  {
    "url": "amp/2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "e131460ad2ee71dbda98a21760ac555e"
  },
  {
    "url": "amp/2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "43d8cf7addcdac3babc9eaff0da34685"
  },
  {
    "url": "amp/2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "385a3ea6138d94370a7d80efd2eb3ec2"
  },
  {
    "url": "amp/2015/07/25/sally-conference/index.html",
    "revision": "e6f0f7205980ed5b193732038a55b43f"
  },
  {
    "url": "amp/2015/08/05/robopocalypse-/index.html",
    "revision": "9c5412c9956dc6e09fe26a080998c1d6"
  },
  {
    "url": "amp/2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "3dcda1ea66956cef3eb5cd572d8f752f"
  },
  {
    "url": "amp/2015/08/11/rankme-/index.html",
    "revision": "2019c45ce795329eacae4b1ffd3f2a77"
  },
  {
    "url": "amp/2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "c5a18d78cedb230328d585018430c651"
  },
  {
    "url": "amp/2015/08/20/readme-template-for-github-/index.html",
    "revision": "74f3dd72174c7d2659f8413ffe0d1e1b"
  },
  {
    "url": "amp/2015/08/26/hiredot-/index.html",
    "revision": "9682595f6ac59f198710fb9db314a6ea"
  },
  {
    "url": "amp/2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "31e59840ca5171bdedd5dd553d696e7c"
  },
  {
    "url": "amp/2015/09/25/discover-goldman-sachs/index.html",
    "revision": "f128d631d51fc16c0c6af453ee309bc5"
  },
  {
    "url": "amp/2015/10/09/designlab-submissions-/index.html",
    "revision": "34217185522b249fe654aa3b70fad8ca"
  },
  {
    "url": "amp/2015/10/09/designlab/index.html",
    "revision": "6123173e5ab209978bcf52af9a7b0f45"
  },
  {
    "url": "amp/2015/10/20/andre-smith/index.html",
    "revision": "91ff11a0ae4870eb8e50d4ff13020c3f"
  },
  {
    "url": "amp/2015/10/21/my-designlab-experience-/index.html",
    "revision": "21a6375af3d6d7a2e1aa7cc02fb740e7"
  },
  {
    "url": "amp/2015/10/24/hack-the-vote-/index.html",
    "revision": "f20b1650ee1f89ebd36f666b2bfdd7d0"
  },
  {
    "url": "amp/2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "801ef692b263a8c777f96914363ecdf6"
  },
  {
    "url": "amp/2015/11/11/meetups-nearby-/index.html",
    "revision": "9fe805d0a3b0d7657f39d3a154255249"
  },
  {
    "url": "amp/2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "9da8f94b4b5b8ef9a708b915d45ea935"
  },
  {
    "url": "amp/2015/11/14/hr-devfest/index.html",
    "revision": "e8c83dbf165516d6184a7614fc49cf55"
  },
  {
    "url": "amp/2015/11/15/aaai/index.html",
    "revision": "d1b38e31fe0556bf6d768499ed5508ae"
  },
  {
    "url": "amp/2015/11/15/stars-computing-corps/index.html",
    "revision": "eb87bb075e41236a2fc2f905e8cf1022"
  },
  {
    "url": "amp/2015/11/20/discover-accenture/index.html",
    "revision": "8e34e48d164585a2d7648ef576a7e134"
  },
  {
    "url": "amp/2015/12/02/dear-holberton-/index.html",
    "revision": "1c232b6f9f2b006652db4548467d536c"
  },
  {
    "url": "amp/2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "437607cf5c27fae9cbf1e4a0feaef243"
  },
  {
    "url": "amp/2015/12/10/ai-choo-ashe/index.html",
    "revision": "3934af37510ffc990633e31568014207"
  },
  {
    "url": "amp/2015/12/12/kelli-white/index.html",
    "revision": "dc2a7c419fe61556e8f0358dcc918426"
  },
  {
    "url": "amp/2015/12/13/hour-of-code/index.html",
    "revision": "a1d4e296417a909b2032ac28103b4f99"
  },
  {
    "url": "amp/2015/12/18/alex-bradshaw/index.html",
    "revision": "871420a66b0dcc1db13d02f2a13e0414"
  },
  {
    "url": "amp/2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "102a44e91e09cc990cb555e828499249"
  },
  {
    "url": "amp/2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "f789fac3aaaa1874f7ed47acb3ade263"
  },
  {
    "url": "amp/2016/01/05/kimberly-logsdon/index.html",
    "revision": "c1392361510ec5dbb450938401d986a3"
  },
  {
    "url": "amp/2016/01/11/meetup-dice-/index.html",
    "revision": "72555c11980bb06a346eeb00d74a2f33"
  },
  {
    "url": "amp/2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "0288bb4d5cf673b9dff3e99722001294"
  },
  {
    "url": "amp/2016/01/18/built-in-norfolk/index.html",
    "revision": "86e53b50ae4e22392f0edf1b7af59978"
  },
  {
    "url": "amp/2016/01/18/norfolk.js-meetup/index.html",
    "revision": "68c15bf43f580799f4bc692130428c60"
  },
  {
    "url": "amp/2016/01/31/hoya-hacks/index.html",
    "revision": "b66b56d7401ce904f7a2212cf749baaf"
  },
  {
    "url": "amp/2016/01/31/life-at-home-/index.html",
    "revision": "548869578adbf8f346b03780669db185"
  },
  {
    "url": "amp/2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "e8067f15b2064f9bcfb16334f5576d9b"
  },
  {
    "url": "amp/2016/02/05/8020-software-consulting/index.html",
    "revision": "e54968295274046c43a908e7d9f9ef03"
  },
  {
    "url": "amp/2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "fcdd4d1692a884b4cf5a150c83fbb26e"
  },
  {
    "url": "amp/2016/02/05/hacku-4/index.html",
    "revision": "b2fe7fbf1119a208dbcc79b9dc9caf79"
  },
  {
    "url": "amp/2016/02/12/acm/index.html",
    "revision": "6d003e2e7a0318db161f1b3ba91afcab"
  },
  {
    "url": "amp/2016/02/14/treehacks/index.html",
    "revision": "7fb25623167ce9f9fdfa211b02397707"
  },
  {
    "url": "amp/2016/02/17/developerweek/index.html",
    "revision": "0cdf621063e75faeb38528e6cba1543f"
  },
  {
    "url": "amp/2016/02/23/react.js-conf/index.html",
    "revision": "930e5511e3f3a6692a4a9449191954b4"
  },
  {
    "url": "amp/2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "7d13909115d24fa4df70b34a154a6694"
  },
  {
    "url": "amp/2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "e42938553db0df6cded3a0f7aaece133"
  },
  {
    "url": "amp/2016/03/10/fluent-conference/index.html",
    "revision": "1adededb25de492f7aed47b7c9732643"
  },
  {
    "url": "amp/2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "869a5e8afcff1ead223462a9c1354ca6"
  },
  {
    "url": "amp/2016/04/01/angel-riera/index.html",
    "revision": "2ecfcb670331d7d8fdadf1d6417debbb"
  },
  {
    "url": "amp/2016/04/07/mike-jonas/index.html",
    "revision": "0af5a1e0495ba1dc8bcf8094cc435234"
  },
  {
    "url": "amp/2016/04/09/innovation-hackathon/index.html",
    "revision": "6e66be77505aa1395c38e22adb1c5437"
  },
  {
    "url": "amp/2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "7cd2ec78291285dc4d59bb43f36793e3"
  },
  {
    "url": "amp/2016/04/30/schools-out-️/index.html",
    "revision": "87bf87967c07940d5a62ed7fd7d95365"
  },
  {
    "url": "amp/2016/05/04/hampton-university/index.html",
    "revision": "393223c36bf8d34d1ff990bdf6b327d9"
  },
  {
    "url": "amp/2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    "revision": "c0198384e2269cb1db2fa32fc74bcd3e"
  },
  {
    "url": "amp/2016/05/13/revolutionconf/index.html",
    "revision": "61cb5c9b94f43cfc9b2a1debac7ff9ac"
  },
  {
    "url": "amp/2016/05/24/pak-chu/index.html",
    "revision": "40a387371371cc0aa41beca188974099"
  },
  {
    "url": "amp/2016/05/25/free-code-camp/index.html",
    "revision": "392ab480a016f3961eb5551a37035876"
  },
  {
    "url": "amp/2016/06/06/wen-tran/index.html",
    "revision": "8c87e14fc92b0ec06211700ddca2d7b1"
  },
  {
    "url": "amp/2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "dbd9379a3dc0eb93cc940617df3255c2"
  },
  {
    "url": "amp/2016/06/29/accenture-slc/index.html",
    "revision": "fa57be74ee7f48b766a4324d10a51092"
  },
  {
    "url": "amp/2016/07/30/npmcamp/index.html",
    "revision": "68e9d7e1a2f43243e0725bafaa3a4619"
  },
  {
    "url": "amp/2016/08/01/lavie-ruan/index.html",
    "revision": "91376cde83d798e3de5c05b5396c81e4"
  },
  {
    "url": "amp/2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "a11fb248a2cc21bf6e539f9c5af8b4da"
  },
  {
    "url": "amp/2016/08/26/fullstack-academy/index.html",
    "revision": "d8553d61aba1cb96262703936839bdcc"
  },
  {
    "url": "amp/2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "dea61f3a0cf58225ed3debb6fec56656"
  },
  {
    "url": "amp/2016/09/16/tapia-2016/index.html",
    "revision": "251e9edebc28b05ee003d62382f96668"
  },
  {
    "url": "amp/2016/09/27/github-repos---mashup-/index.html",
    "revision": "6e3d2278f22f743336a3e19dd8c27bd1"
  },
  {
    "url": "amp/2016/10/01/designhackathon/index.html",
    "revision": "d4db79f0a197a0cae12e065283b3ad75"
  },
  {
    "url": "amp/2016/10/01/the-meggs-case-/index.html",
    "revision": "12333f31b1991448c86309f3731e8aca"
  },
  {
    "url": "amp/2016/10/04/cornell-tech-logos-/index.html",
    "revision": "ba854f9a61e5baa4be484d5cde43b8bd"
  },
  {
    "url": "amp/2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "dd6e2e105330437ec522127d683f8a7f"
  },
  {
    "url": "amp/2016/10/09/kent-hack-enough/index.html",
    "revision": "0fa277974b69d63da8f65697ddcb0ec4"
  },
  {
    "url": "amp/2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "ff7554f5bd3e739c7d94747872b77d89"
  },
  {
    "url": "amp/2016/10/13/techweek-nyc/index.html",
    "revision": "6409a9c8f514597bc45e918d92620dd5"
  },
  {
    "url": "amp/2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "8e27025aa5dcc7d07945760bad2b4e93"
  },
  {
    "url": "amp/2016/11/18/product-studio-/index.html",
    "revision": "a8806831d2e855403138ce8a91d11874"
  },
  {
    "url": "amp/2016/11/30/witny/index.html",
    "revision": "956255487af7ceb31605ea37d7af7afc"
  },
  {
    "url": "amp/2016/12/01/duolingo-delights-/index.html",
    "revision": "7a56168f956c9fe5424a8c188d26845e"
  },
  {
    "url": "amp/2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "d2ca8fdc18b89a917f1fad82b37ddb9a"
  },
  {
    "url": "amp/2016/12/08/hour-of-code/index.html",
    "revision": "322bf5f99a99173fb8fe0ff38642211a"
  },
  {
    "url": "amp/2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "7f6fcfdce24b9ac0d65bac47b1fc7934"
  },
  {
    "url": "amp/2016/12/10/alterconf-nyc-/index.html",
    "revision": "adcfa0823e5e005c88e79db1c820ffbd"
  },
  {
    "url": "amp/2016/12/11/alterconf-nyc/index.html",
    "revision": "4327f198cd2add73d35353b9342f8e96"
  },
  {
    "url": "amp/2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "106f3454c9ce876cc4f4912ddb5ff801"
  },
  {
    "url": "amp/2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "9f486253cbb575af545efac4a2cf0077"
  },
  {
    "url": "amp/2016/12/17/norfolk.js/index.html",
    "revision": "ea0f63c0a0647260557cc70c86b38daa"
  },
  {
    "url": "amp/2016/12/17/product-school/index.html",
    "revision": "560fba026d962243a44e7d25998382dc"
  },
  {
    "url": "amp/2017/01/07/updated-github-page-/index.html",
    "revision": "70f53a388a569d62905415a96abcc044"
  },
  {
    "url": "amp/2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "d6127b6e02b9e528b465ecd07cd85e5e"
  },
  {
    "url": "amp/2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "4abd9fb3aaf06ba064bbd7f6bfe437d4"
  },
  {
    "url": "amp/2017/01/21/huge-school-application-2017/index.html",
    "revision": "77a83af828bb9152362123ddad25602c"
  },
  {
    "url": "amp/2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "5fe3085eb2929fd076407af5afab5369"
  },
  {
    "url": "amp/2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "71b8e9da95a404122a694f83bf1cb727"
  },
  {
    "url": "amp/2017/01/30/cute-things-we-do-/index.html",
    "revision": "ca9dcf91537cd2e5c7e23972f1a124b2"
  },
  {
    "url": "amp/2017/02/01/franklin-lee/index.html",
    "revision": "d228cdc1b7bb097d0e94fac4aa8bc043"
  },
  {
    "url": "amp/2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "0001567868ba5f130e08cca8d6dc39cb"
  },
  {
    "url": "amp/2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "ea851f09a16fd14f2cd4685a7936257b"
  },
  {
    "url": "amp/2017/02/19/hackysu-2017/index.html",
    "revision": "0fd6a8679aa3abd94f4d288ff0df89d0"
  },
  {
    "url": "amp/2017/02/24/startup-studio/index.html",
    "revision": "ba3db03c1bd6406ffb529393932f9726"
  },
  {
    "url": "amp/2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "d68a366da9ddc75f32724cbe41609e34"
  },
  {
    "url": "amp/2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "a5e0317fb3e54f75865cb33acdba8e4a"
  },
  {
    "url": "amp/2017/03/14/connective-media/index.html",
    "revision": "fb2faa7dba7909f666f3fd51fea2bc91"
  },
  {
    "url": "amp/2017/03/15/accepted-to-design-inc./index.html",
    "revision": "8df22c076bd6636313689a05b8aae187"
  },
  {
    "url": "amp/2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "702ae8c52ca77b5987d3f873a43894b9"
  },
  {
    "url": "amp/2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "b90f4a0d1777a2377c4b52f046b4e533"
  },
  {
    "url": "amp/2017/03/17/apprenticeships-/index.html",
    "revision": "3f265f17818e28513cea17fe15c22220"
  },
  {
    "url": "amp/2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "e8a5730253766a18d3b77091f983d359"
  },
  {
    "url": "amp/2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "b61d97b8dc8d8f649c912fa47b378efc"
  },
  {
    "url": "amp/2017/04/14/pathfinder/index.html",
    "revision": "994bb1fe84697e8ab9818c3257239473"
  },
  {
    "url": "amp/2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "ce762d69c0b655a7f518fe0d9468681c"
  },
  {
    "url": "amp/2017/04/30/codenow/index.html",
    "revision": "4fc23695637c673c1c40f1b28321865e"
  },
  {
    "url": "amp/2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "2fc3e37a942bd39aad6af35a0bd2c94b"
  },
  {
    "url": "amp/2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "36c817440eeea9f67362655ff059f8e6"
  },
  {
    "url": "amp/2017/05/26/cornell-tech/index.html",
    "revision": "e2bbe23ace33eea081feedf98f916bbd"
  },
  {
    "url": "amp/2017/06/07/accenture-liquid-studio/index.html",
    "revision": "0529800c726e9c21fdbd35a010080d98"
  },
  {
    "url": "amp/2017/06/16/team-monarch/index.html",
    "revision": "d83033c0c590f0bf4f49d830add00e82"
  },
  {
    "url": "amp/2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "a54c1e91c3157b967376f4809c2b3ab5"
  },
  {
    "url": "amp/2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "a507359ce791087417992cbe47dc5ea2"
  },
  {
    "url": "amp/2017/08/28/new-blog-new-problems-/index.html",
    "revision": "b225e5ab82ec3a5e73492f5b8266cb42"
  },
  {
    "url": "amp/2017/09/16/affect-conf/index.html",
    "revision": "e343d871f476497f4c476fa7c8b0eeac"
  },
  {
    "url": "amp/2017/09/27/strange-loop-2017/index.html",
    "revision": "3b5a7e149a5dd25b52b6edfd2a8f319b"
  },
  {
    "url": "amp/2017/10/22/pwa-roadshow/index.html",
    "revision": "262448d1926aac28f6d2535e685a5c96"
  },
  {
    "url": "amp/2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "b76f4b82cd5c58ec8b889b1ca4a29d31"
  },
  {
    "url": "amp/about/colophon/index.html",
    "revision": "ed4e87104c3c73ab4ae7da5bd8eacb38"
  },
  {
    "url": "amp/about/github-repo/index.html",
    "revision": "7ce25bc9f08bc8756d2ac082b1104d24"
  },
  {
    "url": "amp/about/resume/index.html",
    "revision": "5a05a6d4336667b464a7e56ef855075a"
  },
  {
    "url": "amp/about/travels/index.html",
    "revision": "5018fccef355b39d2c0cd396aafbadf8"
  },
  {
    "url": "amp/about/what-i-use/index.html",
    "revision": "9d8587739a5c4835194d950b426c7b84"
  },
  {
    "url": "amp/archive/index.html",
    "revision": "69002eac73ef8ba4f4bc52df8c212bed"
  },
  {
    "url": "amp/awards/index.html",
    "revision": "1954bc5f2c8a4273444443f2c681214a"
  },
  {
    "url": "amp/blog/1/01/01/ibooks/index.html",
    "revision": "63a3e9b40a114b25fd29fa61c9418708"
  },
  {
    "url": "amp/blog/1/01/01/linkedin-posts/index.html",
    "revision": "c64ec028896d41ccb9278eb0a4b3855c"
  },
  {
    "url": "amp/blog/1/01/01/medium/index.html",
    "revision": "48d9e3b9370230f76387b6093c7f959e"
  },
  {
    "url": "amp/blog/1/01/01/quora-answers/index.html",
    "revision": "1799dabd11c572da8e37b6a9e3bbfbd0"
  },
  {
    "url": "amp/blog/1/01/01/scribd/index.html",
    "revision": "31921ba64b6624595127f5c230d1dfd7"
  },
  {
    "url": "amp/blog/1/01/01/stack-exchange/index.html",
    "revision": "1c6158b31c9482093014ceeb7ecdac6d"
  },
  {
    "url": "amp/blog/1/01/01/tweets/index.html",
    "revision": "d9f4e1c94800109cc043819cee49c5e6"
  },
  {
    "url": "amp/blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "cfba1d6074dfecea552536767dd04ce5"
  },
  {
    "url": "amp/contact/index.html",
    "revision": "552daeef06b13cb501ae40839bfce041"
  },
  {
    "url": "amp/index.html",
    "revision": "6ccc1c81c363ae0d62a8d5adf36ecc35"
  },
  {
    "url": "amp/portfolio/1/01/01/behance/index.html",
    "revision": "753f866eaadd7dfff4a8185f87a5008e"
  },
  {
    "url": "amp/portfolio/1/01/01/code-school/index.html",
    "revision": "c1d61c8cc1efb2c4a30336ef253af7cb"
  },
  {
    "url": "amp/portfolio/1/01/01/devpost/index.html",
    "revision": "5d16c21387b6fe5a871c87c0bd037617"
  },
  {
    "url": "amp/portfolio/1/01/01/github-️/index.html",
    "revision": "472714e197b1a2f735030f409f6c954d"
  },
  {
    "url": "amp/portfolio/1/01/01/slideshare/index.html",
    "revision": "a2b2162c4d3609c0e6778d44345434e3"
  },
  {
    "url": "amp/portfolio/1/01/01/youtube/index.html",
    "revision": "448332c7a71bc70d9083e9114f3b3717"
  },
  {
    "url": "amp/services/freelancing/index.html",
    "revision": "f0beb15157d328e639f0caf4c0f50f20"
  },
  {
    "url": "amp/services/mentoring/index.html",
    "revision": "42499cb3bae15f87b0a802c4b0c6ef96"
  },
  {
    "url": "amp/speaking/burn-prevention/index.html",
    "revision": "1e357eca8c5f19774a84f3fc1bf170cf"
  },
  {
    "url": "amp/speaking/coding-bootcamps/index.html",
    "revision": "051869a6e9f22fe81e60eb56b3746efe"
  },
  {
    "url": "amp/speaking/hour-of-code/index.html",
    "revision": "64e132fd5e049f0c5617e124d53e29a0"
  },
  {
    "url": "amp/speaking/imovie101/index.html",
    "revision": "48f308ba34fd17da76b34c32b8d431d3"
  },
  {
    "url": "amp/speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "421e523a288ab6492a61f5a61c4767cf"
  },
  {
    "url": "amp/speaking/typescript-101/index.html",
    "revision": "5a0ab2a21905bfff1efcafcd6938ced3"
  },
  {
    "url": "amp/speaking/va-acm/index.html",
    "revision": "bf6f92f8349aebc76afe5e9215484638"
  },
  {
    "url": "amp/speaking/web-design/index.html",
    "revision": "4531f382186ebd1e92d94ca9d8bd0481"
  },
  {
    "url": "archive/index.html",
    "revision": "69002eac73ef8ba4f4bc52df8c212bed"
  },
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
    "url": "assets/img/favicons/android-chrome-384x384.png",
    "revision": "6f98225aa938f875c3d85821e8dd1bfe"
  },
  {
    "url": "assets/img/favicons/android-chrome-48x48.png",
    "revision": "36ed76931c5c3f2c42b3185db3f900da"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "cbae39db9f912fc885c3bd1fb3540da8"
  },
  {
    "url": "assets/img/favicons/android-chrome-72x72.png",
    "revision": "5facce7dffb2708f4792a9c8d6bd3d10"
  },
  {
    "url": "assets/img/favicons/android-chrome-96x96.png",
    "revision": "23dfcea25da8f6f90a46df8b83796e23"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-114x114-precomposed.png",
    "revision": "f45e24665d031499e5e249ab4562ae21"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-114x114.png",
    "revision": "44ce9461ad915fd424b1290c441ef58b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-120x120-precomposed.png",
    "revision": "0375edbcec76b64142589d94d7aaa85d"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-120x120.png",
    "revision": "bd8e5ab2632ef2ec27567261c7229e84"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-144x144-precomposed.png",
    "revision": "2911953d0ce1edec4da4a552fe99451f"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-144x144.png",
    "revision": "06e3053ea7d00d8a7c676a98581686d2"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-152x152-precomposed.png",
    "revision": "b127700630e58cedcec33dcb66612f74"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-152x152.png",
    "revision": "dcefaf25f460f23faad23b21792f411b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-180x180-precomposed.png",
    "revision": "7c88ce9ba21cb26b505b20f4be5a4700"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-180x180.png",
    "revision": "4ea2587e204835afe5443aea2d90cd1d"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-57x57-precomposed.png",
    "revision": "2b478a75bba005cdffbfdf923e45c1d1"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-57x57.png",
    "revision": "2bc9ece8e94874f3c4d75fc9330060b2"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-60x60-precomposed.png",
    "revision": "e0e9f8ba67357e3607d1275832c78178"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-60x60.png",
    "revision": "2bce44c4b16a1fb67f9295928d9e56ff"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-72x72-precomposed.png",
    "revision": "5420691c2e76f16ae38af74244a8b1ca"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-72x72.png",
    "revision": "712f279bb6e5ffd07f5d5ca9f1dc764e"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-76x76-precomposed.png",
    "revision": "4b3419958a6beecfa835dc9da9815a8d"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-76x76.png",
    "revision": "1ee54d45a19179a4d818e392be8222dd"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-precomposed.png",
    "revision": "7c88ce9ba21cb26b505b20f4be5a4700"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "4ea2587e204835afe5443aea2d90cd1d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "079a14c63cbffeab756c8445a66afea7"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "84beebb51fa5377b465454f3ec614351"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "0df92eb56911bc129f5c90b9779cb795"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "6ee65a2624acf3e42db55f26a6a4a79e"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "57264efe0acb1422e81295d04715c161"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "95ffdb62188e4c36df2b336c750b9e11"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "b2350f04d916de0eec1498628c87ac50"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "ffc87eb0d5903679319c1f1795572e70"
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
    "url": "assets/img/teaser.png",
    "revision": "1b9bb13123436e402f5c356cf35d0c7e"
  },
  {
    "url": "assets/js/ie.js",
    "revision": "34c47317df70f6cc06b022ebf80a49d2"
  },
  {
    "url": "awards/index.html",
    "revision": "1954bc5f2c8a4273444443f2c681214a"
  },
  {
    "url": "blog/1/01/01/ibooks/index.html",
    "revision": "63a3e9b40a114b25fd29fa61c9418708"
  },
  {
    "url": "blog/1/01/01/linkedin-posts/index.html",
    "revision": "c64ec028896d41ccb9278eb0a4b3855c"
  },
  {
    "url": "blog/1/01/01/medium/index.html",
    "revision": "48d9e3b9370230f76387b6093c7f959e"
  },
  {
    "url": "blog/1/01/01/quora-answers/index.html",
    "revision": "1799dabd11c572da8e37b6a9e3bbfbd0"
  },
  {
    "url": "blog/1/01/01/scribd/index.html",
    "revision": "31921ba64b6624595127f5c230d1dfd7"
  },
  {
    "url": "blog/1/01/01/stack-exchange/index.html",
    "revision": "1c6158b31c9482093014ceeb7ecdac6d"
  },
  {
    "url": "blog/1/01/01/tweets/index.html",
    "revision": "d9f4e1c94800109cc043819cee49c5e6"
  },
  {
    "url": "blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "cfba1d6074dfecea552536767dd04ce5"
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
    "revision": "d8e79372cb23351bdf88034d780a343f"
  },
  {
    "url": "categories/2015/index.html",
    "revision": "9159d1e8847b0ec5ce1d8f0ec77d9e73"
  },
  {
    "url": "categories/2016/index.html",
    "revision": "db67bfb5d399c629e7487b740b6b3102"
  },
  {
    "url": "categories/2017/index.html",
    "revision": "194b3592135cac78ceb7504e66d5b076"
  },
  {
    "url": "categories/award/index.html",
    "revision": "331dd327bab4eb5267d28f6ef30d61c5"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "72b7b53baa030ef757d0bdbb127be0af"
  },
  {
    "url": "categories/book/index.html",
    "revision": "4c898a744194692f17e37535a4c44c4d"
  },
  {
    "url": "categories/bootcamps/index.html",
    "revision": "ed9a044137b50f3b29b36d616212b601"
  },
  {
    "url": "categories/burnprevention/index.html",
    "revision": "89d84cdb2944f722af589ce891422e5c"
  },
  {
    "url": "categories/certainties/index.html",
    "revision": "f36a0eb14327f5516bbd12a3d8039a09"
  },
  {
    "url": "categories/coding/index.html",
    "revision": "6e3a6f81c0f0632e21eb26c0c4996a92"
  },
  {
    "url": "categories/conference/index.html",
    "revision": "9a17f88ac55e559c6f06510fee3852e9"
  },
  {
    "url": "categories/creativity/index.html",
    "revision": "a081ccc8563d7395aa37e90aef6f9c55"
  },
  {
    "url": "categories/design/index.html",
    "revision": "36bf7824e8f9a974071e9f6a2bf7aa48"
  },
  {
    "url": "categories/education/index.html",
    "revision": "9fcffd8971b143de24ee5ade91b15d1d"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "4eb1835746de98f1ef7ac8ef30d3e211"
  },
  {
    "url": "categories/hackathon/index.html",
    "revision": "fddbfb22199bea622a384927b03f1db2"
  },
  {
    "url": "categories/hourofcode/index.html",
    "revision": "6c2579bad0097f57adb181f4615bc97f"
  },
  {
    "url": "categories/imovie101/index.html",
    "revision": "5e6ca641aafde267f9e96839b3c2e18e"
  },
  {
    "url": "categories/index.html",
    "revision": "c1470bd73a8788e044f149943c0d0b99"
  },
  {
    "url": "categories/portfolio/index.html",
    "revision": "fcda9e332c67fbe7ab108e39a4c1c1a2"
  },
  {
    "url": "categories/presentation/index.html",
    "revision": "7e8a2b081db83d2b73fbe9067168acf3"
  },
  {
    "url": "categories/program/index.html",
    "revision": "4bf812ad82f9b7313b415c4d51ff19d3"
  },
  {
    "url": "categories/research/index.html",
    "revision": "574f2d7da5dafda39ef20996e30b709f"
  },
  {
    "url": "categories/review/index.html",
    "revision": "3ddc57da367dc90eba6c8fbf16ee6191"
  },
  {
    "url": "categories/speaking/index.html",
    "revision": "efb9e7d7cf813248b9e895b736af8c3d"
  },
  {
    "url": "categories/typescript101/index.html",
    "revision": "ceebb807c9f0999bfbf7bc8020c17c38"
  },
  {
    "url": "categories/vaacm/index.html",
    "revision": "868c860cb84173daf3b35eee2ecb1433"
  },
  {
    "url": "categories/volunteering/index.html",
    "revision": "64281513ebbd77ef49a1f6be77a0b5a3"
  },
  {
    "url": "categories/web/index.html",
    "revision": "4a3c510ad34d50ef85e8a31a17b161d9"
  },
  {
    "url": "categories/webdesign/index.html",
    "revision": "008143271f8cf4b5f7a6b4dee7c887a2"
  },
  {
    "url": "categories/wizard/index.html",
    "revision": "cec2243e9bcdeb69e06525697671fa77"
  },
  {
    "url": "contact/index.html",
    "revision": "552daeef06b13cb501ae40839bfce041"
  },
  {
    "url": "index.html",
    "revision": "6ccc1c81c363ae0d62a8d5adf36ecc35"
  },
  {
    "url": "OneSignalSDKUpdaterWorker.js",
    "revision": "efe06d490a1f032eada91b3301f88a8f"
  },
  {
    "url": "OneSignalSDKWorker.js",
    "revision": "efe06d490a1f032eada91b3301f88a8f"
  },
  {
    "url": "portfolio/1/01/01/behance/index.html",
    "revision": "753f866eaadd7dfff4a8185f87a5008e"
  },
  {
    "url": "portfolio/1/01/01/code-school/index.html",
    "revision": "c1d61c8cc1efb2c4a30336ef253af7cb"
  },
  {
    "url": "portfolio/1/01/01/devpost/index.html",
    "revision": "5d16c21387b6fe5a871c87c0bd037617"
  },
  {
    "url": "portfolio/1/01/01/github-️/index.html",
    "revision": "472714e197b1a2f735030f409f6c954d"
  },
  {
    "url": "portfolio/1/01/01/slideshare/index.html",
    "revision": "a2b2162c4d3609c0e6778d44345434e3"
  },
  {
    "url": "portfolio/1/01/01/youtube/index.html",
    "revision": "448332c7a71bc70d9083e9114f3b3717"
  },
  {
    "url": "portfolio/index.html",
    "revision": "86e57a371207c3116349b93d9bcd5d0d"
  },
  {
    "url": "services/freelancing/index.html",
    "revision": "f0beb15157d328e639f0caf4c0f50f20"
  },
  {
    "url": "services/index.html",
    "revision": "06253aedbe1b7298ef01ce64007195da"
  },
  {
    "url": "services/mentoring/index.html",
    "revision": "42499cb3bae15f87b0a802c4b0c6ef96"
  },
  {
    "url": "speaking/burn-prevention/index.html",
    "revision": "1e357eca8c5f19774a84f3fc1bf170cf"
  },
  {
    "url": "speaking/coding-bootcamps/index.html",
    "revision": "051869a6e9f22fe81e60eb56b3746efe"
  },
  {
    "url": "speaking/hour-of-code/index.html",
    "revision": "64e132fd5e049f0c5617e124d53e29a0"
  },
  {
    "url": "speaking/imovie101/index.html",
    "revision": "48f308ba34fd17da76b34c32b8d431d3"
  },
  {
    "url": "speaking/index.html",
    "revision": "d7eee7eb813a042bbbc9e794c6a2f2ed"
  },
  {
    "url": "speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "421e523a288ab6492a61f5a61c4767cf"
  },
  {
    "url": "speaking/typescript-101/index.html",
    "revision": "5a0ab2a21905bfff1efcafcd6938ced3"
  },
  {
    "url": "speaking/va-acm/index.html",
    "revision": "bf6f92f8349aebc76afe5e9215484638"
  },
  {
    "url": "speaking/web-design/index.html",
    "revision": "4531f382186ebd1e92d94ca9d8bd0481"
  },
  {
    "url": "tags/100th/index.html",
    "revision": "04919a915d39b0da4e74949eab74099f"
  },
  {
    "url": "tags/128x128/index.html",
    "revision": "b5ebeffe69e390f1fb96b6995f90da08"
  },
  {
    "url": "tags/2d-game/index.html",
    "revision": "beb5fb903a82dc6e8807ccfa7141ed6f"
  },
  {
    "url": "tags/50-crimes/index.html",
    "revision": "5fca09279653bedb6489d85a7603584b"
  },
  {
    "url": "tags/50-lines-for-50-crimes/index.html",
    "revision": "147049a14154b564759bb66a42117575"
  },
  {
    "url": "tags/50-lines/index.html",
    "revision": "6698135ef3b131dd558e1657fbfec42b"
  },
  {
    "url": "tags/757-developers/index.html",
    "revision": "c3b4463436248399e39882af56e74868"
  },
  {
    "url": "tags/757/index.html",
    "revision": "18bfe56b6a7e25a025048ffce9affa7c"
  },
  {
    "url": "tags/757dev/index.html",
    "revision": "969df22aab74f4f5f4fc645b51cbddb9"
  },
  {
    "url": "tags/8020/index.html",
    "revision": "b52810d7a900fb52e38e4967cdeaab82"
  },
  {
    "url": "tags/a-poem-for-a-friend/index.html",
    "revision": "e10d61ee631c96a7520a7163a7560d6c"
  },
  {
    "url": "tags/aaai-2015/index.html",
    "revision": "f57a363dc3b35dee0177a6d4adff67f5"
  },
  {
    "url": "tags/aaai/index.html",
    "revision": "86923b7738adceaf1b1e31e5f08996c6"
  },
  {
    "url": "tags/academia/index.html",
    "revision": "ed8dfded1ffab9bcc117680e91dd2e90"
  },
  {
    "url": "tags/academy/index.html",
    "revision": "8729cd5a8db83353972b30550388f45e"
  },
  {
    "url": "tags/accenture/index.html",
    "revision": "b4afa5ccb8aa1fdbbb1473083258282b"
  },
  {
    "url": "tags/acceptance/index.html",
    "revision": "6d4124ccfcf047279e0aca001c8ef9c8"
  },
  {
    "url": "tags/accepted/index.html",
    "revision": "be7bbcf36839d53bf7cc1c8c9eae7916"
  },
  {
    "url": "tags/accountability/index.html",
    "revision": "1ceaa1938fedb2f813229ee0e97e2f40"
  },
  {
    "url": "tags/adapt-and-survive/index.html",
    "revision": "543a9d4bbc04491e2dbdc7793a61f706"
  },
  {
    "url": "tags/admissions-challenge/index.html",
    "revision": "c39a8ba2ab0536411bde814101976e62"
  },
  {
    "url": "tags/admissions/index.html",
    "revision": "bfd422869a2f085713333dd742c3ee90"
  },
  {
    "url": "tags/adobe-after-effects/index.html",
    "revision": "1d51beec460a6dbd3d031283d7ee9208"
  },
  {
    "url": "tags/adobe-premiere-pro/index.html",
    "revision": "8180772753652f3cbac104bfa5f3e99a"
  },
  {
    "url": "tags/adrenaline-junkies/index.html",
    "revision": "237a161032b27a21a15443cc1a1685d8"
  },
  {
    "url": "tags/adult-perspective/index.html",
    "revision": "a102a6f26f9af99d8cb174e3bdd2f26b"
  },
  {
    "url": "tags/affordance-models/index.html",
    "revision": "0468b6f9bfbabf6722280f6d088a5da6"
  },
  {
    "url": "tags/afro-movers-and-shakers/index.html",
    "revision": "36e9798e65147a2198e0b1e0c979ec6e"
  },
  {
    "url": "tags/aftermath/index.html",
    "revision": "e25117e669253c6a2ecc25911d1c216e"
  },
  {
    "url": "tags/ai-conference/index.html",
    "revision": "5c486f94485970bc834ddd75075065ef"
  },
  {
    "url": "tags/ai/index.html",
    "revision": "4966fdbc228e1d1ae1982ae80253434a"
  },
  {
    "url": "tags/ai2/index.html",
    "revision": "7a97f1e4cf2518825d3940d3d16b15fe"
  },
  {
    "url": "tags/ailey-extension/index.html",
    "revision": "604f90db08542f6aa6b10ddedfb87b62"
  },
  {
    "url": "tags/air-heads/index.html",
    "revision": "1867e26f70b4e14c5fc3872526ad28e1"
  },
  {
    "url": "tags/airmail-integration/index.html",
    "revision": "ac4c7f3f723f192735abf90c15954d1d"
  },
  {
    "url": "tags/airmail-school-email/index.html",
    "revision": "81a2f06d8be14a0db35b06d5ae2155b8"
  },
  {
    "url": "tags/airmail/index.html",
    "revision": "3442f0bba1d2b2dec7c42cde76d3ba0d"
  },
  {
    "url": "tags/airtable-app/index.html",
    "revision": "f61e9b631e237dd83d9f43d13cefc299"
  },
  {
    "url": "tags/airtable/index.html",
    "revision": "3133d1205b40b7efd2393011e33c24d1"
  },
  {
    "url": "tags/ajax/index.html",
    "revision": "1f86c021a52eeb596ce564fea9b08aea"
  },
  {
    "url": "tags/alchemize/index.html",
    "revision": "bd93880ff00d5331b0d2a3ea3778b6b2"
  },
  {
    "url": "tags/alfred/index.html",
    "revision": "efd7054ea97b0b9be8c292200ec9d8c0"
  },
  {
    "url": "tags/algorithms/index.html",
    "revision": "639e7833006e9fe1f76c7f5e3edb3c0f"
  },
  {
    "url": "tags/alien/index.html",
    "revision": "74e8ee01f3643c52ac2b1815409489af"
  },
  {
    "url": "tags/aline-lerner/index.html",
    "revision": "21d97261691fabb69833c5ac6ebf6def"
  },
  {
    "url": "tags/alpha/index.html",
    "revision": "b19c1db09ed51a3afe09ed408989d145"
  },
  {
    "url": "tags/alterconf-new-york-city/index.html",
    "revision": "f9ca7325c8e0a92eac70966cdfe2bb2b"
  },
  {
    "url": "tags/alterconf-nyc-2016/index.html",
    "revision": "a3aa897e5c047ce0078b4e69a5453c9a"
  },
  {
    "url": "tags/alterconf-nyc/index.html",
    "revision": "48db6678f904d3d9b254beaf1d0c2817"
  },
  {
    "url": "tags/alterconf/index.html",
    "revision": "c414fbe2f127de274cc7b78545959b89"
  },
  {
    "url": "tags/alternote/index.html",
    "revision": "3574cca97814932ae2ca6dd87d143a48"
  },
  {
    "url": "tags/alumni-panel/index.html",
    "revision": "e2c5ce82629bd5037df31579b2940953"
  },
  {
    "url": "tags/ameot/index.html",
    "revision": "6047b4510af2366eb7d5b5a4e410b611"
  },
  {
    "url": "tags/american-museum-of-natural-history/index.html",
    "revision": "04c239f195c4f1d52dd84a4b5b7a4a3d"
  },
  {
    "url": "tags/amphetamine/index.html",
    "revision": "491822faeff305dbe3e7ba08eec1b2c5"
  },
  {
    "url": "tags/ancestor/index.html",
    "revision": "4a9a243aa776020dbd3a027fcfde868f"
  },
  {
    "url": "tags/angular-js/index.html",
    "revision": "bad2ad3c3c50c7ab9a017322cf31bf57"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "e9f89c0ca3097e29f156d3764d0fb25d"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "d0f56cee713f3f16e2dcc23df9c7e6c5"
  },
  {
    "url": "tags/anonymous-functions/index.html",
    "revision": "7e3b852610da10f3739e3a77bfa95e7b"
  },
  {
    "url": "tags/apocalypse/index.html",
    "revision": "d0d2c44221aa8e341e103928fd19a315"
  },
  {
    "url": "tags/app-academy/index.html",
    "revision": "2678781e38716f807eef7bfbf9b7ff7a"
  },
  {
    "url": "tags/app-store/index.html",
    "revision": "a9726baccb00d082f73c21b69114b343"
  },
  {
    "url": "tags/apple/index.html",
    "revision": "16206e620732628a77fe705349141f0e"
  },
  {
    "url": "tags/application/index.html",
    "revision": "6bd9b255ab7c0e5b6bbc29f9df7e79f0"
  },
  {
    "url": "tags/applications/index.html",
    "revision": "8bbedfd2e90bc7fbe70e93b9b20d41a4"
  },
  {
    "url": "tags/arcade-publishing/index.html",
    "revision": "56f98c07445b6876d5f6010eaed500d9"
  },
  {
    "url": "tags/archos/index.html",
    "revision": "ec17802bac169f3b8c4010d64651eca3"
  },
  {
    "url": "tags/area-of-a-rectangle-python/index.html",
    "revision": "9e210f0bd161b1b729e08d03d37cdaad"
  },
  {
    "url": "tags/arithmetic/index.html",
    "revision": "ef0612db15947e30f2d2d42f5e7660fd"
  },
  {
    "url": "tags/array-implementation/index.html",
    "revision": "22caa70782638e730b872ad4315b9145"
  },
  {
    "url": "tags/array/index.html",
    "revision": "1f38f40853266a61ffb169aabc277411"
  },
  {
    "url": "tags/arrays/index.html",
    "revision": "624d3b51f2655a6fe5b282e5fa139226"
  },
  {
    "url": "tags/arsenic/index.html",
    "revision": "7c4be2e37bbc30792f2cc7010d7bf366"
  },
  {
    "url": "tags/artificial-intelligence/index.html",
    "revision": "21e9c47282828f53fd008bcc1f399549"
  },
  {
    "url": "tags/artificially-intelligent/index.html",
    "revision": "aa7ef1ea1fe2a7ca0a4f6d0fd657038f"
  },
  {
    "url": "tags/asperger-syndrome/index.html",
    "revision": "c7a8f28083aaaddf480d0878606b718c"
  },
  {
    "url": "tags/asperger/index.html",
    "revision": "c096d88281352bc5d0ad836c58ca4191"
  },
  {
    "url": "tags/aspie/index.html",
    "revision": "c0a433e8495d59378e13475654a5493f"
  },
  {
    "url": "tags/assigning/index.html",
    "revision": "15a8c67bc600d1c52957edbe13efa8cc"
  },
  {
    "url": "tags/at-home-advisor/index.html",
    "revision": "df837b6504e29a671ee9a3c0d1c3d06e"
  },
  {
    "url": "tags/atheists/index.html",
    "revision": "c127e95a2099baa93195d00fd2d1cce2"
  },
  {
    "url": "tags/auschwitz-a-doctors-eyewitness-account/index.html",
    "revision": "68e64bff0a2314f19075e96ca1c69625"
  },
  {
    "url": "tags/auschwitz/index.html",
    "revision": "dc50612ba6a8064261a335dca024b5c7"
  },
  {
    "url": "tags/austin/index.html",
    "revision": "9dd9b58b81cf58d1e5f2987ad827341c"
  },
  {
    "url": "tags/authentication/index.html",
    "revision": "87f585d3e37af0394f689d0ee6398bb1"
  },
  {
    "url": "tags/autism-spectrum/index.html",
    "revision": "5b61a6ab533820059e0544669bcfc242"
  },
  {
    "url": "tags/automated-jobs/index.html",
    "revision": "68f00c45290627fecbc49d38d7ffdac6"
  },
  {
    "url": "tags/automated/index.html",
    "revision": "674c8507e55304ba982abd7d623a8085"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "0a88ae329ac7523e5d49cc5d8cbdffdb"
  },
  {
    "url": "tags/automator/index.html",
    "revision": "8cb36a7fba3d2fd7ff9c06f47719122a"
  },
  {
    "url": "tags/avalon/index.html",
    "revision": "3b554b9156a9d0b110402c834efbecf6"
  },
  {
    "url": "tags/aviation/index.html",
    "revision": "a6c8db94a50eba7869a572f3262d72d3"
  },
  {
    "url": "tags/awkward-silences/index.html",
    "revision": "434f926d4419d09cc0d42c1a71837bcd"
  },
  {
    "url": "tags/awwwards/index.html",
    "revision": "98afdd14919d32f7e5f6a5b49e589c03"
  },
  {
    "url": "tags/baboon/index.html",
    "revision": "84ffe03c2916d38a8ee94db6631ce086"
  },
  {
    "url": "tags/background/index.html",
    "revision": "edb909ae8cdfdc366246ce86529b1420"
  },
  {
    "url": "tags/backgrounds/index.html",
    "revision": "32f299dffe915d9817d118756d794031"
  },
  {
    "url": "tags/balanced/index.html",
    "revision": "18c187147d6eeb16e6991c3967002494"
  },
  {
    "url": "tags/balls/index.html",
    "revision": "c7a6be816946c81ea76489d185e44801"
  },
  {
    "url": "tags/banquet/index.html",
    "revision": "9b3feec076016f4db657d977c17a1f5a"
  },
  {
    "url": "tags/barbara-demick/index.html",
    "revision": "3cbef768a0c02fb02ca573577947df0a"
  },
  {
    "url": "tags/barbossa/index.html",
    "revision": "a4c0395b3f53e9fd111100e8f4c983ec"
  },
  {
    "url": "tags/bartender/index.html",
    "revision": "2cf23828f3aa802b6f09fbf3c6840609"
  },
  {
    "url": "tags/basic-structure/index.html",
    "revision": "6f5a6738e7aaca4572c02a1b14b3996a"
  },
  {
    "url": "tags/battle-school/index.html",
    "revision": "bad74ca4502a9f115333f1418765a7bd"
  },
  {
    "url": "tags/bay-area/index.html",
    "revision": "0a0472ee1fdb8b20de18b5762f884909"
  },
  {
    "url": "tags/be-wary/index.html",
    "revision": "6c6ceebcda01cbb6e19f67653506fcbe"
  },
  {
    "url": "tags/beauty/index.html",
    "revision": "1e3aca22d462bd3c04fff0b5b22dc0e8"
  },
  {
    "url": "tags/bee/index.html",
    "revision": "b71565f988116d39c735de38ab18d4c8"
  },
  {
    "url": "tags/beginner/index.html",
    "revision": "c6c29acc066b17ace130d6b3934dbd54"
  },
  {
    "url": "tags/beginning-programming/index.html",
    "revision": "6b5008f3457c2f56b394a6dcd8e48106"
  },
  {
    "url": "tags/behance/index.html",
    "revision": "ad39953e667ea3903a44dd1faf6b1729"
  },
  {
    "url": "tags/benito-de-soto/index.html",
    "revision": "58c95cda975293f9ea059cea402fc2e1"
  },
  {
    "url": "tags/bento/index.html",
    "revision": "62e973aa5c54115d163bc6365570abc5"
  },
  {
    "url": "tags/best-bootcamps/index.html",
    "revision": "0b7d52844de748abebeec131b0cc5be3"
  },
  {
    "url": "tags/beta-day/index.html",
    "revision": "aa344a0abc4a3686866655c9c3b88225"
  },
  {
    "url": "tags/beta/index.html",
    "revision": "ad162cc7cc05119dc32f42757fddbba5"
  },
  {
    "url": "tags/bethel-high-school/index.html",
    "revision": "2dfec99b2d58cd6a727b99ec9e62d1cf"
  },
  {
    "url": "tags/bettersnaptool/index.html",
    "revision": "9d124e640ad1103c7669840bf559dcab"
  },
  {
    "url": "tags/bieber/index.html",
    "revision": "dcf62651c18de6d07256292f599df1d7"
  },
  {
    "url": "tags/big-presentation/index.html",
    "revision": "ef6b045ce76357451bf82de900bb32ef"
  },
  {
    "url": "tags/binary-search-tree/index.html",
    "revision": "111f8711c7f2f0a581034317964fe143"
  },
  {
    "url": "tags/binary-tree/index.html",
    "revision": "f4d3fa82ecdf732dbe3e2607949335cf"
  },
  {
    "url": "tags/binary-trees/index.html",
    "revision": "4058048e2ca074a3cfaa594dce8de25b"
  },
  {
    "url": "tags/binary/index.html",
    "revision": "1b68af94b2d2d114188a8e64a64ef3c2"
  },
  {
    "url": "tags/binding-of-isaac-review/index.html",
    "revision": "ed7f3d50f960f46f57c1b11680226b94"
  },
  {
    "url": "tags/binding-of-isaac/index.html",
    "revision": "339bf2096b437e88360b4d2933b40004"
  },
  {
    "url": "tags/binding/index.html",
    "revision": "3023a23a18f0ab19920ca80d6823efb8"
  },
  {
    "url": "tags/bit/index.html",
    "revision": "1bfa537d04da7593b62904825140c52f"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "332cd2ef99186011e63dc657f688800e"
  },
  {
    "url": "tags/bitmaker-labs/index.html",
    "revision": "01e33a59fe28e3516be25eed9354f8e8"
  },
  {
    "url": "tags/bitmaker/index.html",
    "revision": "ef2c55faafab0d5739a622d6580ede41"
  },
  {
    "url": "tags/bits/index.html",
    "revision": "f926029d35bc4354eaa2fd27ed499684"
  },
  {
    "url": "tags/black-beard/index.html",
    "revision": "f4288211a733e184e47c214254f52e7d"
  },
  {
    "url": "tags/black-pearl/index.html",
    "revision": "4338e7afef54eda5560d1344c1bd89ac"
  },
  {
    "url": "tags/blackbeard/index.html",
    "revision": "ddf7adfda7dba77d1b4cc924bc962dcf"
  },
  {
    "url": "tags/blanket/index.html",
    "revision": "176188b3809fc3b22de946654ec1f329"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "33bf21556dc1481337ad39d72b0cb999"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "255b46de24201c3eed90648d3864e855"
  },
  {
    "url": "tags/bloody-game/index.html",
    "revision": "27175f4f4a250e14a058a64f596cef11"
  },
  {
    "url": "tags/bloomberg/index.html",
    "revision": "1ae0d8e797b3645e973a62da6566c3c5"
  },
  {
    "url": "tags/board-game/index.html",
    "revision": "681fd8d73a5d9671d7d4586c77f4bfe2"
  },
  {
    "url": "tags/book-review/index.html",
    "revision": "dc6d468d8738e6ef15a7b74ecd65f2c8"
  },
  {
    "url": "tags/boot-camp/index.html",
    "revision": "717e752af84fee41c4ab295c955e602c"
  },
  {
    "url": "tags/bootcamp-agreement/index.html",
    "revision": "4acf2e59225cc494bacfdb0663a473e7"
  },
  {
    "url": "tags/bootcamp-hawaii/index.html",
    "revision": "d6d0b31639fd277cbb5c4c760df383e8"
  },
  {
    "url": "tags/bootcamp.me/index.html",
    "revision": "6dca4838aac7f9c036cdbe6c3de761d7"
  },
  {
    "url": "tags/bootcamp/index.html",
    "revision": "be738d042657fc586e7f869ea7636ca6"
  },
  {
    "url": "tags/bootcamper.io/index.html",
    "revision": "122b0272b7bcd6812b8cc85d8e798ae2"
  },
  {
    "url": "tags/bootcamps.in/index.html",
    "revision": "c8326a77db7f35ac0a971d7731688ab4"
  },
  {
    "url": "tags/bootcamps/index.html",
    "revision": "7ae550b971dfa641eaf358dbb6911b2f"
  },
  {
    "url": "tags/bootstrap/index.html",
    "revision": "4f705c3a4e4f4df8fa8d3338ece01c7c"
  },
  {
    "url": "tags/boston/index.html",
    "revision": "eda455c452e93bca7294b66f8a2c3526"
  },
  {
    "url": "tags/bow/index.html",
    "revision": "1fafed06daba27daf542d2ae8ab0fdbe"
  },
  {
    "url": "tags/boys/index.html",
    "revision": "30608ff9a5257a73e65f3d6b142dd3b1"
  },
  {
    "url": "tags/brief-thoughts/index.html",
    "revision": "197a484b0b6a90a285ddcc5db902d297"
  },
  {
    "url": "tags/briefbox/index.html",
    "revision": "6457144d35a2078be6182d61de44d59f"
  },
  {
    "url": "tags/bubble-sort/index.html",
    "revision": "eeb9787944a4094968d9f561fce45c72"
  },
  {
    "url": "tags/bubbles/index.html",
    "revision": "409696f0f68648b6d82909a6183a9679"
  },
  {
    "url": "tags/bummer/index.html",
    "revision": "bac2caf3784670c1c4b1ad27449cf3e7"
  },
  {
    "url": "tags/burger-king/index.html",
    "revision": "597f0c4f4ae7b3b0eea457266afdb2d3"
  },
  {
    "url": "tags/byword/index.html",
    "revision": "2ad8a18631f79722b426e96aa31fc4cb"
  },
  {
    "url": "tags/c-programming/index.html",
    "revision": "02d3d65a583597deae9b34f93ebc6df5"
  },
  {
    "url": "tags/c++/index.html",
    "revision": "4ef848655440423e4a2fdfe35758243d"
  },
  {
    "url": "tags/calculus/index.html",
    "revision": "ea88f80c7a5998de00a38a898bd98904"
  },
  {
    "url": "tags/callbacks/index.html",
    "revision": "06e6ab713afb0a5770178076f327c806"
  },
  {
    "url": "tags/campus/index.html",
    "revision": "5213fd2b82cb083968d6b9c8e75018ce"
  },
  {
    "url": "tags/canada/index.html",
    "revision": "70c4cd9d1bfd2a81cd99d09fe5492c0d"
  },
  {
    "url": "tags/capstone-project/index.html",
    "revision": "929e73ab9d8a4d46d2e8e1b3247c6b98"
  },
  {
    "url": "tags/captain-jack-sparrow/index.html",
    "revision": "018eccbcc192abc90f45e9fc111eda85"
  },
  {
    "url": "tags/captone/index.html",
    "revision": "26f777af2a595bd312d5c6eea0c62265"
  },
  {
    "url": "tags/capwic/index.html",
    "revision": "553f544fcbcb4f330f3ff94ebe767230"
  },
  {
    "url": "tags/career/index.html",
    "revision": "2bd01ab06b37098eef3e31412388e204"
  },
  {
    "url": "tags/casual/index.html",
    "revision": "43dca3b8571413eff5487046a3de78cf"
  },
  {
    "url": "tags/cb/index.html",
    "revision": "bff9e2f1705c6cf8c8fedbaac63f4eee"
  },
  {
    "url": "tags/cbs/index.html",
    "revision": "ead44598165aa98d63f1fddf76c85bf0"
  },
  {
    "url": "tags/cdock/index.html",
    "revision": "edb23e4ad5377d89c7e2fa237d7365e3"
  },
  {
    "url": "tags/celsius-to-fahrenheit/index.html",
    "revision": "dee75106aeeadd704830981a87326bd9"
  },
  {
    "url": "tags/chad-trutt/index.html",
    "revision": "92496bb8534f3a21116a562b83cadb84"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "93e8a0cf6c500d0af0a682f43abd5f61"
  },
  {
    "url": "tags/change/index.html",
    "revision": "13bcc332175ba01a56c1c7646e2b3dd4"
  },
  {
    "url": "tags/chaos-faction/index.html",
    "revision": "9ab6078a8874b5b461421ec02c0e3438"
  },
  {
    "url": "tags/character/index.html",
    "revision": "d7f3620e12946a2d27b9a933341e33a9"
  },
  {
    "url": "tags/chat-development/index.html",
    "revision": "9abb4d317145b6bc53823d398760d2cc"
  },
  {
    "url": "tags/cheerio/index.html",
    "revision": "641f3f64bbbfaccac49179453a03c369"
  },
  {
    "url": "tags/cheese/index.html",
    "revision": "381b849c91ca73d74d2b7062d833ca06"
  },
  {
    "url": "tags/cheesy/index.html",
    "revision": "c3dd4a28d94ef686e89e816bbe8001ef"
  },
  {
    "url": "tags/chicago/index.html",
    "revision": "89df135cd61a4a35f86c9676ea2032c7"
  },
  {
    "url": "tags/children/index.html",
    "revision": "56f01e9c2538b2f1521dc2bd1321ea1e"
  },
  {
    "url": "tags/christopher-t/index.html",
    "revision": "ee6c48e02c9484218c935d68982ef7dd"
  },
  {
    "url": "tags/chrome-app-launcher/index.html",
    "revision": "9df4495c93f12f0c04fa03aea822b006"
  },
  {
    "url": "tags/chrome-extensions/index.html",
    "revision": "173b9028aef40f2b15777c199913b687"
  },
  {
    "url": "tags/chrome-web-store/index.html",
    "revision": "ea354329a772d32877a6c45c2724ba70"
  },
  {
    "url": "tags/chrome/index.html",
    "revision": "8656cc937ed2458369855b0e05032059"
  },
  {
    "url": "tags/chromecasts/index.html",
    "revision": "097c04334cc0b947e5c7e8f577b2516e"
  },
  {
    "url": "tags/chronicles-of-narnia/index.html",
    "revision": "bc79a767cc793fcc25a1c565195f846a"
  },
  {
    "url": "tags/cinema4d/index.html",
    "revision": "03608c7bd4be4c6675cbba58599b8db7"
  },
  {
    "url": "tags/circle/index.html",
    "revision": "4448ef3d56b0b554367b94b4920ea2e4"
  },
  {
    "url": "tags/class/index.html",
    "revision": "67d2324f1728d127caf124d98c7ae639"
  },
  {
    "url": "tags/classes/index.html",
    "revision": "8e0d03ae82d04f441a978f11c1cb692f"
  },
  {
    "url": "tags/cleft-lip/index.html",
    "revision": "03f24ae061706b6c8476b7ab2f5876ce"
  },
  {
    "url": "tags/cleft-palette/index.html",
    "revision": "30c9e3eba305ddb495d2eb590d5d84b5"
  },
  {
    "url": "tags/closures/index.html",
    "revision": "f8e0dcb1940488ca1b7be595907ce015"
  },
  {
    "url": "tags/cockroach/index.html",
    "revision": "dde9470a7a363f8e8c4e779ab7e662e1"
  },
  {
    "url": "tags/code-combat/index.html",
    "revision": "4fdc172aaf46e3fdca98c1c9a6963ff4"
  },
  {
    "url": "tags/code-combt/index.html",
    "revision": "72e3232d25e48e230942576546833202"
  },
  {
    "url": "tags/code-fellows/index.html",
    "revision": "7655f816086d62fea3f5d68ec07377f0"
  },
  {
    "url": "tags/code-school/index.html",
    "revision": "0ad476683a939c559c669272bd81ee7c"
  },
  {
    "url": "tags/code.org/index.html",
    "revision": "3ad8ed33155abc56175403b6a1408684"
  },
  {
    "url": "tags/code/index.html",
    "revision": "acf78780d2d83330efa407cc45cca651"
  },
  {
    "url": "tags/code2040/index.html",
    "revision": "2ae3cb7872424cf3d68cccc05d09537f"
  },
  {
    "url": "tags/codecademy/index.html",
    "revision": "24274c6dd9bda7a6c0098bee1f74b80e"
  },
  {
    "url": "tags/codecombat/index.html",
    "revision": "8b38b26901ec8a99ca562aecca18ffbd"
  },
  {
    "url": "tags/codepen/index.html",
    "revision": "beaa8389cb097651e6994895d22191dc"
  },
  {
    "url": "tags/coderbyte/index.html",
    "revision": "bb57a5ef5bf41f66e9cac3833c625c56"
  },
  {
    "url": "tags/codewars/index.html",
    "revision": "c3ef4c2c58faa43997ae8c05afa2540b"
  },
  {
    "url": "tags/coding-bootcamp-experience/index.html",
    "revision": "a691958820fcf35126c807253b341b5e"
  },
  {
    "url": "tags/coding-bootcamp-fullstack/index.html",
    "revision": "faed40794392c919b2bdfe67a979f638"
  },
  {
    "url": "tags/coding-bootcamp-map/index.html",
    "revision": "5c2715cea8cf2404f7374f461c3bd596"
  },
  {
    "url": "tags/coding-bootcamp-prework/index.html",
    "revision": "745efee9491885c25a4fa55937ee98b6"
  },
  {
    "url": "tags/coding-bootcamp/index.html",
    "revision": "f943edd7a2d9994e0e27f1da6658a739"
  },
  {
    "url": "tags/coding-bootcamps/index.html",
    "revision": "06e3fb0c2aff5bc5518eba58cd8ef767"
  },
  {
    "url": "tags/coding-challenge/index.html",
    "revision": "de826a480a8f6a3a307df20d4a049cbe"
  },
  {
    "url": "tags/coding-dojo/index.html",
    "revision": "b41f5607a0aebf3b2af1a6c951811831"
  },
  {
    "url": "tags/coding-house/index.html",
    "revision": "5959bcf2fd182b0f6a2111773434b0e2"
  },
  {
    "url": "tags/coding-interview/index.html",
    "revision": "f9b70d7c83c2c7d801da4804a46b4095"
  },
  {
    "url": "tags/coding/index.html",
    "revision": "07b50c14dbaca1446298137a2f374b49"
  },
  {
    "url": "tags/codrops/index.html",
    "revision": "40f6656d11881d4d2b77fff3a0329af2"
  },
  {
    "url": "tags/codyhouse/index.html",
    "revision": "0b9ab34fa49bb41269fe8629ea4fe128"
  },
  {
    "url": "tags/cohort/index.html",
    "revision": "492a5c89fe9f0cbd9b9702af7cef6160"
  },
  {
    "url": "tags/cold/index.html",
    "revision": "cc8265de727785b662e5a13d759fc800"
  },
  {
    "url": "tags/college-students/index.html",
    "revision": "9199159a37760240f31ccee0785bbab3"
  },
  {
    "url": "tags/color-theory/index.html",
    "revision": "ac4e9b2d4c27c6c2789c2e0a95a43636"
  },
  {
    "url": "tags/coment.me/index.html",
    "revision": "677f9c251e49087c3a5966e5ee5bc049"
  },
  {
    "url": "tags/command-line/index.html",
    "revision": "0496f2ef6dc2daea76b6c37e462c00e1"
  },
  {
    "url": "tags/comment/index.html",
    "revision": "6699376d43fe7fa3213253954bf29b23"
  },
  {
    "url": "tags/comments/index.html",
    "revision": "695be9db54c685ad3daf978da7161045"
  },
  {
    "url": "tags/compare/index.html",
    "revision": "3f675aca48ef00c98696aaae6d2850c6"
  },
  {
    "url": "tags/compiler/index.html",
    "revision": "02d5fe4bb6d98c22c77f7dedabb4f04b"
  },
  {
    "url": "tags/complete/index.html",
    "revision": "6313f49f791113734bf5367a0b11f4d3"
  },
  {
    "url": "tags/computer-science-education/index.html",
    "revision": "38efc87a56c99d4cf5ffee6ec918b418"
  },
  {
    "url": "tags/computer-science/index.html",
    "revision": "c2db3d2070790bd4d5d746519d45031a"
  },
  {
    "url": "tags/computer/index.html",
    "revision": "555b68ff6e4073313827daefa2b1ea5c"
  },
  {
    "url": "tags/computing/index.html",
    "revision": "9d3d41bcf1b5eed90234e40a630df796"
  },
  {
    "url": "tags/conceal/index.html",
    "revision": "df78ad31286962015f46489f9fb75de3"
  },
  {
    "url": "tags/concrete/index.html",
    "revision": "18b437b0fbc5455605a9b24e547b608e"
  },
  {
    "url": "tags/coney-island/index.html",
    "revision": "059395431808fa849e30a14b79ddecdf"
  },
  {
    "url": "tags/conference-hotel/index.html",
    "revision": "d34d6e02e146fcd9e01d35f4d33485d4"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "def649a0ed424ca53f9f5b63c4a9a3f2"
  },
  {
    "url": "tags/conferences/index.html",
    "revision": "6ecde0065f0d1de32fc8b85e2c3f5159"
  },
  {
    "url": "tags/congratulations/index.html",
    "revision": "df6aea7f2c617fea5635affbc5580be2"
  },
  {
    "url": "tags/conquest/index.html",
    "revision": "e6383036455c95328c37cd45db002b0f"
  },
  {
    "url": "tags/contrast/index.html",
    "revision": "40b6160ffe773e10b3c9765434911002"
  },
  {
    "url": "tags/conundrums/index.html",
    "revision": "fe4d7c45a4d7f2fb2f23dd49636ed19e"
  },
  {
    "url": "tags/cookie/index.html",
    "revision": "a5ec9a3288b83333a8a1923b6a087e02"
  },
  {
    "url": "tags/copley/index.html",
    "revision": "a54d28165e507d7f90263a746611075e"
  },
  {
    "url": "tags/cornell-tech/index.html",
    "revision": "4399e352496a46d35cfac244f1586129"
  },
  {
    "url": "tags/costs/index.html",
    "revision": "a4d2611379380ec10382e537bb2d6e7b"
  },
  {
    "url": "tags/course-report/index.html",
    "revision": "2c19c770112804797f0e80ddb7ae52ae"
  },
  {
    "url": "tags/course/index.html",
    "revision": "f26ceadf53592e1104d9c22e938db631"
  },
  {
    "url": "tags/cracking-the-coding-interview/index.html",
    "revision": "5f64f10fcd6d8fceddb19db1395dc4aa"
  },
  {
    "url": "tags/creations/index.html",
    "revision": "9c9e96f7b44d3f2c62902eb7144f054c"
  },
  {
    "url": "tags/creativity/index.html",
    "revision": "f161f7b2d85c4ed50c38fa97fe3788d1"
  },
  {
    "url": "tags/crowdsourced-map/index.html",
    "revision": "18b45a8722f1232c487a43bb5bf0d6d4"
  },
  {
    "url": "tags/crowdsourcing/index.html",
    "revision": "4134584242e2bbc7859ef9c3c71a77a5"
  },
  {
    "url": "tags/crush/index.html",
    "revision": "55ff29a05d527e9aa3236712feb96ae2"
  },
  {
    "url": "tags/cs-background/index.html",
    "revision": "8bcab252ee3d7e40f50ef963f3010498"
  },
  {
    "url": "tags/cs/index.html",
    "revision": "1cf0cc28c1a14cb29611f625e04d51be"
  },
  {
    "url": "tags/csail/index.html",
    "revision": "18f5301c9866a14164170fe8908044a8"
  },
  {
    "url": "tags/css/index.html",
    "revision": "6bac4322e80cdc0395e6013c99342bc2"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "68e7f882942cb40b839b3817ce509251"
  },
  {
    "url": "tags/cups-of-tea/index.html",
    "revision": "71073a47918ad523e77373a69ab4048d"
  },
  {
    "url": "tags/curi/index.html",
    "revision": "7a5d900a58d2427295e6ca884c737fbc"
  },
  {
    "url": "tags/curiosity/index.html",
    "revision": "d1a2804b65b9b88e4a17ea7ea96981ed"
  },
  {
    "url": "tags/curious-incident-of-the-dog-in-the-night-time/index.html",
    "revision": "d47cfcc46202fed142f30574ed470266"
  },
  {
    "url": "tags/curriculum/index.html",
    "revision": "92fdb4640b4d2e013b5fe113897f1f97"
  },
  {
    "url": "tags/dabble/index.html",
    "revision": "032458c9e3866b50d1aac4a6fc9132fa"
  },
  {
    "url": "tags/dairy-queen/index.html",
    "revision": "990d9ed78ba56117b4ee3f3be3321e9d"
  },
  {
    "url": "tags/damage/index.html",
    "revision": "44ea39c423146726475bb2f0f7d1b30f"
  },
  {
    "url": "tags/damehood/index.html",
    "revision": "0ce2a18f98959123c5ab8ce29f6c1f8d"
  },
  {
    "url": "tags/dan-brown/index.html",
    "revision": "b8fe43182abe53bf7d0177aab0a4fdbd"
  },
  {
    "url": "tags/dance/index.html",
    "revision": "a2c802624f8a05aced209c6c2517d744"
  },
  {
    "url": "tags/dancing/index.html",
    "revision": "1cf23dadce88bd0b77336848f1bba792"
  },
  {
    "url": "tags/daniel/index.html",
    "revision": "870a71c56b4a7d7a3269a3f8fcb8af06"
  },
  {
    "url": "tags/dash/index.html",
    "revision": "ecb41536741c5428210553cf6e11fbe6"
  },
  {
    "url": "tags/data-set/index.html",
    "revision": "3c9861debc93237db596d18ed58f2ee7"
  },
  {
    "url": "tags/data-structures/index.html",
    "revision": "b4e69cc5df685da749c4dddd24e2db5a"
  },
  {
    "url": "tags/data/index.html",
    "revision": "c6f7bf3822f2db385c5afb758a642eaf"
  },
  {
    "url": "tags/david-yang/index.html",
    "revision": "4c2dfc0c205ab77723805b2357240b0e"
  },
  {
    "url": "tags/davinci-code/index.html",
    "revision": "1c5b700522206cd36a9003aa3f9f4fbb"
  },
  {
    "url": "tags/dear-bootcamp/index.html",
    "revision": "26bf506a0f0b02c6b89f39366147d3bf"
  },
  {
    "url": "tags/death/index.html",
    "revision": "5496e8b3c9eec291cf0a25a8b21de3ba"
  },
  {
    "url": "tags/decision/index.html",
    "revision": "3cfcb924373d21b78e117d05951c11d1"
  },
  {
    "url": "tags/defining/index.html",
    "revision": "30f814caba61d8dc7235a3fdcd64fe26"
  },
  {
    "url": "tags/definitive-list/index.html",
    "revision": "c70a00969303b411f727c64dfcff7b4a"
  },
  {
    "url": "tags/delta/index.html",
    "revision": "143069f7f3fb29379ca2fcba8f1a6efc"
  },
  {
    "url": "tags/demo-day/index.html",
    "revision": "cf532b3f931d35fd503121a825256ca2"
  },
  {
    "url": "tags/descendants/index.html",
    "revision": "0a3f28753bd9325b68254f2f228cb37c"
  },
  {
    "url": "tags/describing-oneself/index.html",
    "revision": "69837a05739f3ef89f0b1dae612e10b4"
  },
  {
    "url": "tags/descriptions/index.html",
    "revision": "b6d69d6062a7854b1baf241ee0250bd2"
  },
  {
    "url": "tags/design-101/index.html",
    "revision": "7fd07a9b9730898d2914acb630df3f8b"
  },
  {
    "url": "tags/design-bootcamp/index.html",
    "revision": "452f424a9a263f6e3257a7454138f134"
  },
  {
    "url": "tags/design-online-course/index.html",
    "revision": "6a25b515043bc09a37b406fede3dbd4f"
  },
  {
    "url": "tags/design/index.html",
    "revision": "943d428bd4d6b54a9dcbb4aeb6c07d2f"
  },
  {
    "url": "tags/design101/index.html",
    "revision": "309b65260d8fec930e4fd79a362b7f80"
  },
  {
    "url": "tags/designation-labs/index.html",
    "revision": "e6105e17f7e62ed0f0f50f2b56e7cbca"
  },
  {
    "url": "tags/designation.io/index.html",
    "revision": "f826290851df933142fd72d277718584"
  },
  {
    "url": "tags/designation/index.html",
    "revision": "bfc2af9210cb83f4ffb9d830968f17c0"
  },
  {
    "url": "tags/designer/index.html",
    "revision": "06cf1ee22c81a9e2134e0ebd1a8eedf3"
  },
  {
    "url": "tags/designing/index.html",
    "revision": "183bdf959bb8ef97d8ad12e4baf68506"
  },
  {
    "url": "tags/designlab-course/index.html",
    "revision": "e43f54d61892f30923a6575e79fe1e49"
  },
  {
    "url": "tags/designlab-design-101/index.html",
    "revision": "91027e1aa886d749f77cadfd43e736dd"
  },
  {
    "url": "tags/designlab/index.html",
    "revision": "08345b4386de7c97864babec8c472d73"
  },
  {
    "url": "tags/designs/index.html",
    "revision": "bcbf1ed902e8505022bf6b0995f1d9b4"
  },
  {
    "url": "tags/dev-bootcamps/index.html",
    "revision": "d19f69ed9ef80cf3bb883d12dc13e65a"
  },
  {
    "url": "tags/dev-league/index.html",
    "revision": "37f149e3fc6c2a7dbe4f966a732147bd"
  },
  {
    "url": "tags/developer-festival/index.html",
    "revision": "fb167ea5fd36210b6394f49e9a0cf7f6"
  },
  {
    "url": "tags/development/index.html",
    "revision": "d5f533e09e1cc3ee3cd9b2821619c173"
  },
  {
    "url": "tags/devleague/index.html",
    "revision": "e5d702b21cd93ca4a5e19edc601669b1"
  },
  {
    "url": "tags/dictatorships/index.html",
    "revision": "bdacd7daf89bbf1f212052ed71c8b11e"
  },
  {
    "url": "tags/dictionary/index.html",
    "revision": "6a652b2e06235a38024d78d11610d433"
  },
  {
    "url": "tags/digital-hieroglyphics/index.html",
    "revision": "09ab01b93c0cb1505f6f5155e3245a48"
  },
  {
    "url": "tags/digital/index.html",
    "revision": "aeca66ba255cc4946e000bd10768747c"
  },
  {
    "url": "tags/dinos/index.html",
    "revision": "d687968a06b8610d190118dde6a64015"
  },
  {
    "url": "tags/dinosaurs/index.html",
    "revision": "2e7877d9f6c382e59b6f92b86b010ea6"
  },
  {
    "url": "tags/disabilities/index.html",
    "revision": "24abec7666435c55adc2cdda60960144"
  },
  {
    "url": "tags/diversity-conference/index.html",
    "revision": "1a65288be50732e348e561fdcd811d35"
  },
  {
    "url": "tags/diversity-in-tech/index.html",
    "revision": "b4574b504de1eab75cb8ef79cc213789"
  },
  {
    "url": "tags/diversity-tales/index.html",
    "revision": "1c01f74c915e5909db1dd98556455c1d"
  },
  {
    "url": "tags/diversity/index.html",
    "revision": "0de57bbecb63dd783f99ea54fe5c10ea"
  },
  {
    "url": "tags/do-not-offend/index.html",
    "revision": "0fd8bd2e14d324940508e9d4a1f9e9cd"
  },
  {
    "url": "tags/dojo/index.html",
    "revision": "0a0b11dfc8852a09c4063efc4f3b15fc"
  },
  {
    "url": "tags/dont-starve-game/index.html",
    "revision": "926cfa26d3a0cfd4e2d80e914146305b"
  },
  {
    "url": "tags/dont-starve-review/index.html",
    "revision": "ba57c4a56eea9076dbf19100600468d9"
  },
  {
    "url": "tags/dont-starve/index.html",
    "revision": "d97b45da213d46e375d368663e3f74df"
  },
  {
    "url": "tags/doubloon/index.html",
    "revision": "3f217eb32641d211cb0c0982d9b536d2"
  },
  {
    "url": "tags/download-mp3/index.html",
    "revision": "f9ac2eed2d8887fd4a73a18ffe8ea388"
  },
  {
    "url": "tags/drop-out/index.html",
    "revision": "ac90ed68e452a4b35931500d444e155b"
  },
  {
    "url": "tags/dropbox/index.html",
    "revision": "71a88bb32baf04fea2d213de61655ced"
  },
  {
    "url": "tags/duck-bill/index.html",
    "revision": "19185187348a02acac00192fabfcd8ea"
  },
  {
    "url": "tags/economy/index.html",
    "revision": "70b8a28b8169751b46d62606a23aa29e"
  },
  {
    "url": "tags/edgar-allen-poe/index.html",
    "revision": "f056cbefa979a08312fd3960b5f06d38"
  },
  {
    "url": "tags/egghead.io/index.html",
    "revision": "6b88cddca7c2413f51ce967767e64890"
  },
  {
    "url": "tags/el-capitan/index.html",
    "revision": "9f4d1e27af2357b0e374b46485ae3fcf"
  },
  {
    "url": "tags/ell/index.html",
    "revision": "9c1395ed01e6d4abeb63f2afc4d3b91f"
  },
  {
    "url": "tags/eloquent-javascript/index.html",
    "revision": "edac7e378053f6632e807b62a56cc272"
  },
  {
    "url": "tags/email/index.html",
    "revision": "54b4163210ed8527be689283dcf76e37"
  },
  {
    "url": "tags/emails/index.html",
    "revision": "096c3edd9ef4f3145baf16616882a16d"
  },
  {
    "url": "tags/emoji/index.html",
    "revision": "5d7492e7f58f145746c3f5cfb81eb00d"
  },
  {
    "url": "tags/emotions/index.html",
    "revision": "56ffa8613c520de4c75f249c164e0d01"
  },
  {
    "url": "tags/ender-wiggin/index.html",
    "revision": "c0e6c8c58fec21bdd0662b853e100705"
  },
  {
    "url": "tags/ender/index.html",
    "revision": "7263e1692667e0938318276118eee418"
  },
  {
    "url": "tags/enders-game/index.html",
    "revision": "2f190d07cdb30937fcdae547e4796e28"
  },
  {
    "url": "tags/endevr/index.html",
    "revision": "5403ab0976dc01ddbb534f39a750da22"
  },
  {
    "url": "tags/engineers/index.html",
    "revision": "d009971919c86f625dac78255efe9274"
  },
  {
    "url": "tags/envy/index.html",
    "revision": "d3063a8895248979fa15934e384a7c7e"
  },
  {
    "url": "tags/epoch/index.html",
    "revision": "ed69daa5785c9392103544bee0e403ef"
  },
  {
    "url": "tags/epsilon/index.html",
    "revision": "1fef8a0b40e908b2cf9ec08c2e94f9bc"
  },
  {
    "url": "tags/equality/index.html",
    "revision": "722c9a8b52bd484c0431a7ed041c6901"
  },
  {
    "url": "tags/equations/index.html",
    "revision": "1656d3f74c11c1dc8c3e02a3931035e6"
  },
  {
    "url": "tags/error/index.html",
    "revision": "fed2470286536bdb5a5e9c20af937017"
  },
  {
    "url": "tags/essay-talks/index.html",
    "revision": "18ab8a6123fb479dd576632f774209cb"
  },
  {
    "url": "tags/essays/index.html",
    "revision": "6cd4140884239c8ad98562a9de32ed21"
  },
  {
    "url": "tags/ethnicities/index.html",
    "revision": "07aaaa45a76d1afb2f610eed938286ea"
  },
  {
    "url": "tags/exams/index.html",
    "revision": "114f74f31d82ddb6350a45efa3bb1630"
  },
  {
    "url": "tags/experience/index.html",
    "revision": "af64730c01a4d21e0371c296b0777bcc"
  },
  {
    "url": "tags/experimentorders/index.html",
    "revision": "274f03642acde11ac9cd700ba4abd9fb"
  },
  {
    "url": "tags/exploits/index.html",
    "revision": "5052ad1778188fe58156521940fea34d"
  },
  {
    "url": "tags/extension/index.html",
    "revision": "f8bc5c90e65ec129eca6057d5cbb9b26"
  },
  {
    "url": "tags/extensions/index.html",
    "revision": "4084e774afedc8f06188acfd30913756"
  },
  {
    "url": "tags/facebook-page/index.html",
    "revision": "f5a0f0c5be9cd5638e6aa126ff2a6d95"
  },
  {
    "url": "tags/facebook/index.html",
    "revision": "c816f1a8d468a2a393b138cf0a884e22"
  },
  {
    "url": "tags/factorials/index.html",
    "revision": "bb0d2378d55ceea9c1658442d8980095"
  },
  {
    "url": "tags/fahrenheit/index.html",
    "revision": "c3222a0a35f6bab4c24dbd000fbd5684"
  },
  {
    "url": "tags/fairy/index.html",
    "revision": "ea06e231975fd6fe0da0d2b53f5d8e00"
  },
  {
    "url": "tags/falling/index.html",
    "revision": "2975a05a82538c6c0f72ca08c2fe8d24"
  },
  {
    "url": "tags/famine/index.html",
    "revision": "8da89626a284e3ea373d363058d90287"
  },
  {
    "url": "tags/famo.us-university/index.html",
    "revision": "1ae39db698795d7d4479d40879f70f60"
  },
  {
    "url": "tags/fantasy-novels/index.html",
    "revision": "8e58c77d37cb4b4b31c5292a34c99914"
  },
  {
    "url": "tags/fantasy/index.html",
    "revision": "c2092ed9c3f93f1bd1dd8a11d1ab5e1a"
  },
  {
    "url": "tags/fast-growing-industry/index.html",
    "revision": "37037eb5f13f4612ac259eb256384bd5"
  },
  {
    "url": "tags/fear/index.html",
    "revision": "1aecb58158afbcf18a4591a9548f7561"
  },
  {
    "url": "tags/featured/index.html",
    "revision": "75a4d156398b8ead34baba79d7007582"
  },
  {
    "url": "tags/february-2015/index.html",
    "revision": "54767b61a7f981b1db0381f3d35bc160"
  },
  {
    "url": "tags/february/index.html",
    "revision": "1a79203e3466dc5b3a36d365a05d4b1e"
  },
  {
    "url": "tags/fibonacci/index.html",
    "revision": "d145b1c8886c09446e0931db8ac04628"
  },
  {
    "url": "tags/film/index.html",
    "revision": "19f169b39a918d39f14b921f98feb4ea"
  },
  {
    "url": "tags/final-cut-pro-x/index.html",
    "revision": "c14abe6a2be998e1030f34cec6985161"
  },
  {
    "url": "tags/final-project/index.html",
    "revision": "054276a8daeb5449ce6d015db3b612d7"
  },
  {
    "url": "tags/finding/index.html",
    "revision": "8cf8345fb487084b7249f77dd91d2fac"
  },
  {
    "url": "tags/firehose-project/index.html",
    "revision": "b43deb3fdd8229cc599fcb8c146d9f20"
  },
  {
    "url": "tags/first-meetup/index.html",
    "revision": "1d0903ff495604031e07a5d62b42d411"
  },
  {
    "url": "tags/first-week/index.html",
    "revision": "1bdc3132f3da5bec73f37744617e0246"
  },
  {
    "url": "tags/flashcard-design/index.html",
    "revision": "e30e5d9f36d3f7e913c18bb04ba8ee05"
  },
  {
    "url": "tags/flashcards/index.html",
    "revision": "3a7239305106bf20aad76108c7d8ff19"
  },
  {
    "url": "tags/flatiron/index.html",
    "revision": "e7613353160726887057d19fdc43a1ba"
  },
  {
    "url": "tags/flavours/index.html",
    "revision": "8b2bc9e8924a831b27a1e5563dc1c5ea"
  },
  {
    "url": "tags/flights/index.html",
    "revision": "dcc7b3e8ed1d0cd8afb6a9d198618176"
  },
  {
    "url": "tags/float/index.html",
    "revision": "46497ddc9ecc2cabc0ca145284513ab7"
  },
  {
    "url": "tags/floating-point/index.html",
    "revision": "423e8552559f3d840f34316528dbd77a"
  },
  {
    "url": "tags/flux/index.html",
    "revision": "b1ee00df31f10198faa87b80d87d1e30"
  },
  {
    "url": "tags/formic/index.html",
    "revision": "94113fe182eb7f5aedc4d840a59716a9"
  },
  {
    "url": "tags/formula/index.html",
    "revision": "40136cf562a012001c90fa49c7997e13"
  },
  {
    "url": "tags/foundations/index.html",
    "revision": "a369d755a7a45e5b422093f9be76c080"
  },
  {
    "url": "tags/founders/index.html",
    "revision": "29dde41fd2f32bacc48c952752705651"
  },
  {
    "url": "tags/fragile/index.html",
    "revision": "dc9d4519a3b269872408011e2d74a16e"
  },
  {
    "url": "tags/frameworks/index.html",
    "revision": "dfd932b0d29cff1273da11dfe0f7f9cb"
  },
  {
    "url": "tags/frankenweenie/index.html",
    "revision": "714252f0d997df8f0b366acf413a271c"
  },
  {
    "url": "tags/free-code-camp/index.html",
    "revision": "72d45533b72e167fe8ab9e8870670c48"
  },
  {
    "url": "tags/freeman/index.html",
    "revision": "e691cbee8a6377412414b3d9893c9567"
  },
  {
    "url": "tags/friends-and-family/index.html",
    "revision": "40d70f07446d580ba255aaa79f784cc0"
  },
  {
    "url": "tags/friendship/index.html",
    "revision": "78c9dc2a248b76cab8416a947e9febb6"
  },
  {
    "url": "tags/fuck/index.html",
    "revision": "df268c293a64ad2053b5e595f505ff0a"
  },
  {
    "url": "tags/fucking/index.html",
    "revision": "9e29ffe1d25bd5123bdad9233e134929"
  },
  {
    "url": "tags/full-stack-academy-of-code/index.html",
    "revision": "5f1f2547c5172994b4bdac8f2eaffc9e"
  },
  {
    "url": "tags/full-stack/index.html",
    "revision": "e652d0c587b61d267edebc9db957cd7b"
  },
  {
    "url": "tags/full/index.html",
    "revision": "6c1cda55262ae55566845554e4a70b4a"
  },
  {
    "url": "tags/fullstack-academy-of-code/index.html",
    "revision": "021ff410c480efe5d01f0036d8f72787"
  },
  {
    "url": "tags/fullstack-academy-week-4/index.html",
    "revision": "372252d659794f26325212de3b498dac"
  },
  {
    "url": "tags/fullstack-academy-week-5/index.html",
    "revision": "81db07f2ac4ad1a8db4aee6aa01dfc0e"
  },
  {
    "url": "tags/fullstack-academy/index.html",
    "revision": "08edc27a3ef4e0c99348062c967f07e6"
  },
  {
    "url": "tags/fullstack-beta/index.html",
    "revision": "4aaf21dff289c4b76a3ee41c1e4eca4c"
  },
  {
    "url": "tags/fullstack-experience/index.html",
    "revision": "e7d27366fe5ba9eb92b0c9071aa63bd3"
  },
  {
    "url": "tags/fullstack-fellows/index.html",
    "revision": "cd5d44868ec63c03aa0797443550ce2c"
  },
  {
    "url": "tags/fullstack-foundations/index.html",
    "revision": "484788597117b4baa0aeffd5e479882c"
  },
  {
    "url": "tags/fullstack-javascript-coding-bootcamp/index.html",
    "revision": "b36adf5ef73a8e37df81c8ed03e79cb7"
  },
  {
    "url": "tags/fullstack-week/index.html",
    "revision": "15497b4fc29e789b3514ff0b3e8b89cd"
  },
  {
    "url": "tags/fullstack/index.html",
    "revision": "840ae2f86572473a6781d8a188d1ecae"
  },
  {
    "url": "tags/fundamentals/index.html",
    "revision": "d40d22333ce6848727fe650d97a24062"
  },
  {
    "url": "tags/funny/index.html",
    "revision": "775f31d00aa1fe71d1b37f717a0bfff6"
  },
  {
    "url": "tags/future-plans/index.html",
    "revision": "bb92cc7655d57b00d1a9807b957a6577"
  },
  {
    "url": "tags/fvcproductions/index.html",
    "revision": "26644047e8641458e02eedf05d40a551"
  },
  {
    "url": "tags/game-review/index.html",
    "revision": "28b897a0f5698a09966fc2f1b11b359b"
  },
  {
    "url": "tags/game/index.html",
    "revision": "6d13cf8585f2ab43de02c09c72c60b69"
  },
  {
    "url": "tags/games-night/index.html",
    "revision": "a57bf2fd362d7c586a763955854f5bb1"
  },
  {
    "url": "tags/games/index.html",
    "revision": "a4c0040f62775cc4caf2ff147f814002"
  },
  {
    "url": "tags/gaming/index.html",
    "revision": "efe54a04f130cdb4f10542ba3580270b"
  },
  {
    "url": "tags/gamma/index.html",
    "revision": "28328373f23e4edecea85d1c896b603c"
  },
  {
    "url": "tags/gates/index.html",
    "revision": "a83735a476022ce7b1166320ff795393"
  },
  {
    "url": "tags/gavin-young/index.html",
    "revision": "d992dd14d5507b94a29ce51a0a228339"
  },
  {
    "url": "tags/gay-marriage-legal-now/index.html",
    "revision": "340995c27586256f6c44e829aa53f727"
  },
  {
    "url": "tags/gdg-hampton-roads/index.html",
    "revision": "dc1e594a0e62b51e905bfa3011411a02"
  },
  {
    "url": "tags/gender/index.html",
    "revision": "a5c89052cf0e014a1906a370b7d8593f"
  },
  {
    "url": "tags/general-assembly/index.html",
    "revision": "61693cf152e0b2f2241e559c799cc143"
  },
  {
    "url": "tags/georgia-tech/index.html",
    "revision": "d30a69f3ee79d527fe6a5c6442d33f9b"
  },
  {
    "url": "tags/gettemplate/index.html",
    "revision": "98f615cb50ca6923f7c420d82ee1102f"
  },
  {
    "url": "tags/gif/index.html",
    "revision": "104688480f8eb3e1161cf11a4872bd7f"
  },
  {
    "url": "tags/gifs/index.html",
    "revision": "942f0a461d1332e23f288d959e39b182"
  },
  {
    "url": "tags/gist/index.html",
    "revision": "ca817d0c1eb14b6afa3e18cf6e409942"
  },
  {
    "url": "tags/github-projects/index.html",
    "revision": "4f47e6c7a719431d58a73f1e11508535"
  },
  {
    "url": "tags/github/index.html",
    "revision": "0f79efba60acf0ec99fe0ea2d36d9aa4"
  },
  {
    "url": "tags/giving-back/index.html",
    "revision": "7f1db082b10215bc557417901bb48413"
  },
  {
    "url": "tags/glimpse/index.html",
    "revision": "1d595f165a404f6dd434be051a74a312"
  },
  {
    "url": "tags/gluttony/index.html",
    "revision": "ffd6d16ff6e4df8c9a572c9ca6450c13"
  },
  {
    "url": "tags/gmail/index.html",
    "revision": "4947cc298c811fde10579b6198eeb19d"
  },
  {
    "url": "tags/gold-doubloons/index.html",
    "revision": "fbad2288971aef7337aba30ecbe1c855"
  },
  {
    "url": "tags/gold/index.html",
    "revision": "846f92e242dad861d16302054ab50e34"
  },
  {
    "url": "tags/goldman-sachs/index.html",
    "revision": "455985fec6224a0657ca72317f7e8542"
  },
  {
    "url": "tags/good-looks/index.html",
    "revision": "f346989024ddb97b7291cf078d33d52a"
  },
  {
    "url": "tags/googl/index.html",
    "revision": "c145b4d48a8156f95305c73f220776ef"
  },
  {
    "url": "tags/google-map/index.html",
    "revision": "48ecfaf8d1210d9f596cfba9f18ffbe1"
  },
  {
    "url": "tags/google-maps-api/index.html",
    "revision": "6b616deedba057a73361e0eb8ad0aac6"
  },
  {
    "url": "tags/google-slides/index.html",
    "revision": "d58ae7b12714d7bd95c3bd70dfe69bbf"
  },
  {
    "url": "tags/google+/index.html",
    "revision": "9acc861a5c2734e02beee25891d91a50"
  },
  {
    "url": "tags/gottfrid-svartholm/index.html",
    "revision": "662a7688bbb5b205f181cc350206c57b"
  },
  {
    "url": "tags/grace-hopper/index.html",
    "revision": "21dc01ca402251000751a71887276091"
  },
  {
    "url": "tags/graduate-school/index.html",
    "revision": "4161d747229c5db9a64e817e3a955556"
  },
  {
    "url": "tags/graduate/index.html",
    "revision": "ad4ada7c2af131e661b83241a5d8e2da"
  },
  {
    "url": "tags/graduating/index.html",
    "revision": "22bb40f76296d1f045ea04a857f06081"
  },
  {
    "url": "tags/grand-gallery/index.html",
    "revision": "ce669aa0d6997a72fb8ebdb425332b77"
  },
  {
    "url": "tags/graphic-design-bootcamp/index.html",
    "revision": "1e93dfc2de8a5371a0edce46dfe92708"
  },
  {
    "url": "tags/graphic-design/index.html",
    "revision": "a7417f66fc5c672a55fcf979d92c6049"
  },
  {
    "url": "tags/gratitude/index.html",
    "revision": "7031c9dfab7c504f79f9d3260ef98b01"
  },
  {
    "url": "tags/gre/index.html",
    "revision": "8ee6d8670fdcb08060dbcd3383886d7b"
  },
  {
    "url": "tags/greed/index.html",
    "revision": "6154c8599a3df667a4bb6d1c7ce6d2d5"
  },
  {
    "url": "tags/greek-letters/index.html",
    "revision": "593d41f520b0a6060ae6d6155cc67e3c"
  },
  {
    "url": "tags/growth/index.html",
    "revision": "4ea15541f2e453905c3b3fd01b155470"
  },
  {
    "url": "tags/hack-app/index.html",
    "revision": "2c354afcfcf1759087f41f51f9c27de1"
  },
  {
    "url": "tags/hack-reactor/index.html",
    "revision": "c6472f9cb26143d861797122286bbc13"
  },
  {
    "url": "tags/hackathon-starter/index.html",
    "revision": "747d974455fb3c596cabf421ce19df50"
  },
  {
    "url": "tags/hackathons/index.html",
    "revision": "1073bf05f72f598dd9dc4fce621f0bc2"
  },
  {
    "url": "tags/hacker-in-residence/index.html",
    "revision": "cb9c8623b936214d4e969361cd7ade8d"
  },
  {
    "url": "tags/hacking/index.html",
    "revision": "0550f8b26f9c26815f7eb24ec1e9397d"
  },
  {
    "url": "tags/hackreactor/index.html",
    "revision": "b0127f17b9e58300f153635b9adb8dfa"
  },
  {
    "url": "tags/hampton-roads-devfest/index.html",
    "revision": "76c75b3a06522374eb5125141fbd28d4"
  },
  {
    "url": "tags/hampton-roads/index.html",
    "revision": "484f530adcafaf45bd54006665da30c3"
  },
  {
    "url": "tags/hampton-university/index.html",
    "revision": "e3c55bf4f0cee096bdf0388cee64e455"
  },
  {
    "url": "tags/hampton/index.html",
    "revision": "4425ade5bd58d54d5415b0e855e91c88"
  },
  {
    "url": "tags/hands-clean/index.html",
    "revision": "49f1de0e67b92a0e6327a9f9752d97f5"
  },
  {
    "url": "tags/hands/index.html",
    "revision": "c921ef0f0b17aface99d2b787b96b762"
  },
  {
    "url": "tags/harry-potter/index.html",
    "revision": "be60431a8624365e06a080341d771a81"
  },
  {
    "url": "tags/harvey-mudd/index.html",
    "revision": "853d1ec9c16d15ee7b2da29dc48c642e"
  },
  {
    "url": "tags/hawaii/index.html",
    "revision": "e123d20cd9db48e9b89d8bbabaad5ac7"
  },
  {
    "url": "tags/head/index.html",
    "revision": "6c40a5585a550b896fc5c975a5191827"
  },
  {
    "url": "tags/heap-sort/index.html",
    "revision": "9ec78bc0c703ac712d2d4b2949f444d4"
  },
  {
    "url": "tags/heart/index.html",
    "revision": "31334c6fef4854716d748403f31f75e6"
  },
  {
    "url": "tags/hearty/index.html",
    "revision": "10c1b0c37156e066ed3b0d1497bc3bea"
  },
  {
    "url": "tags/hector-barbossa/index.html",
    "revision": "7264bad3f6e417c0ab3cdd432fa4b4c4"
  },
  {
    "url": "tags/hemingway/index.html",
    "revision": "07ae69b496d1ec0ab7a918424c92e6a2"
  },
  {
    "url": "tags/hexadecimal-numbers/index.html",
    "revision": "11659e6e00f87de72b6eae09f01e44a2"
  },
  {
    "url": "tags/hexadecimal/index.html",
    "revision": "fb38a234d7ebab215fcc828cfba18c70"
  },
  {
    "url": "tags/hieroglyphics/index.html",
    "revision": "3e7b8c5bf467e35828ac11b1d45720f5"
  },
  {
    "url": "tags/high-school-volunteering/index.html",
    "revision": "57672a37c281e53c134d7c521b31ada1"
  },
  {
    "url": "tags/high-school/index.html",
    "revision": "09d4f0f50c1dd15024c7b720d102ee2d"
  },
  {
    "url": "tags/hip-hop/index.html",
    "revision": "5f6808c3bf890db6d62168c39874b9e6"
  },
  {
    "url": "tags/hiredot/index.html",
    "revision": "957f57dc72eaaee6dd04b87ddb426555"
  },
  {
    "url": "tags/hiredot2/index.html",
    "revision": "6870936799888df1305bd81ad2c164c1"
  },
  {
    "url": "tags/hispanics-in-computing/index.html",
    "revision": "6eca5a26de66dcd260c11f5efcfe8dde"
  },
  {
    "url": "tags/hollow-knight/index.html",
    "revision": "36688fffea0de7f1be698c25dc86cebe"
  },
  {
    "url": "tags/holocaust/index.html",
    "revision": "5bfcb86b9a076c71925c8231b36ff0b8"
  },
  {
    "url": "tags/holy-grail/index.html",
    "revision": "97c25def5e27b13f15631f157d7dc9e9"
  },
  {
    "url": "tags/homework-assignment/index.html",
    "revision": "7126ce4f28cee764baafda9c551bcf74"
  },
  {
    "url": "tags/hoot-suite/index.html",
    "revision": "91140bfd9f8642ab5bcaaa92fd85849f"
  },
  {
    "url": "tags/horror/index.html",
    "revision": "c6131c1b1bb7cc4d39e3aec69361927d"
  },
  {
    "url": "tags/hot-seat/index.html",
    "revision": "046d2c9056854e7e143944c11f1eb5dc"
  },
  {
    "url": "tags/hour-of-code-code.org/index.html",
    "revision": "d25f932e62551b33e25e92bd3da8b752"
  },
  {
    "url": "tags/hour-of-code/index.html",
    "revision": "68f1775d04d08dd9789c40c5ab134611"
  },
  {
    "url": "tags/hour/index.html",
    "revision": "98ca01e91bf54eb6d81d430dafa68b53"
  },
  {
    "url": "tags/hourofcode/index.html",
    "revision": "956232dab492bb89470cc9000a1ea157"
  },
  {
    "url": "tags/house/index.html",
    "revision": "08ffa84ce11afe459f35061f8523c695"
  },
  {
    "url": "tags/how-to-describe-yourself/index.html",
    "revision": "cc8644c2b1be2e4a7c07f34cdaef530b"
  },
  {
    "url": "tags/how-to-study/index.html",
    "revision": "f0d6d76fdbddc594ca0c93e2522fbdca"
  },
  {
    "url": "tags/hr-devfest/index.html",
    "revision": "5332d081e0a92fa37cbd357a774098d5"
  },
  {
    "url": "tags/hr-fen/index.html",
    "revision": "0864a792aa24e4b22ed2ad624796fafd"
  },
  {
    "url": "tags/hrdevfest/index.html",
    "revision": "4724ea1b1f2da50833df4ca81ca7a76f"
  },
  {
    "url": "tags/html/css/index.html",
    "revision": "993e45b0a79aecf83d5ce933d425483d"
  },
  {
    "url": "tags/html/index.html",
    "revision": "6d1e33e3c2e677e21dc402c50e000bbe"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "d22764b430431b0d5639ddc3dd4a786c"
  },
  {
    "url": "tags/html5up/index.html",
    "revision": "9f656fd7daaf6cdbba077e3f583eeca1"
  },
  {
    "url": "tags/human-computer-interaction/index.html",
    "revision": "590e79462bca0486668912c4be995c64"
  },
  {
    "url": "tags/human-robot-collaboration/index.html",
    "revision": "42c38c624fb3328b6daf5ad4e44bf9a1"
  },
  {
    "url": "tags/humanity/index.html",
    "revision": "ffe88cd86a90d4c64f4741da7e281644"
  },
  {
    "url": "tags/huntly/index.html",
    "revision": "81a906bbc889a3680eafb1bcdf73d172"
  },
  {
    "url": "tags/hyatt-regency/index.html",
    "revision": "17ce26abe6ba0fa986c0ea5b80a63bc0"
  },
  {
    "url": "tags/ibm-watson-research/index.html",
    "revision": "43e98ed83b109fcc033bb02b67eaa22b"
  },
  {
    "url": "tags/ibm-watson/index.html",
    "revision": "743e0c8a6f4d6dfc2936c179b4e60e3b"
  },
  {
    "url": "tags/icon/index.html",
    "revision": "a5bc8b19ecb2f6e40f41590166a3fb59"
  },
  {
    "url": "tags/ideas/index.html",
    "revision": "c4b8ebb973832ae3dad2530f86d27fa0"
  },
  {
    "url": "tags/idiotic/index.html",
    "revision": "27b5f2a40681abd49bbbb1810263b798"
  },
  {
    "url": "tags/iftt/index.html",
    "revision": "8e5cf739d90a7d310a724f2551e6b834"
  },
  {
    "url": "tags/imcompetech/index.html",
    "revision": "b9805326222a500545a5839dd6dece59"
  },
  {
    "url": "tags/imovie101/index.html",
    "revision": "961cc27d93890fd4f78df7869a43d6df"
  },
  {
    "url": "tags/import-multiple-fonts/index.html",
    "revision": "eb83803dbd6fad16dde8b0be94bc27ee"
  },
  {
    "url": "tags/impossible-quiz/index.html",
    "revision": "7e9fb67f32a0050d3d628da45f7c4cdc"
  },
  {
    "url": "tags/index.html",
    "revision": "8cbe26b5f604cf580b96b2b492d39473"
  },
  {
    "url": "tags/indie-game/index.html",
    "revision": "5923bded7e7a0d2323d18aa0b8eb7b22"
  },
  {
    "url": "tags/indie/index.html",
    "revision": "7da55350a62efaa3d4710c634ef6704d"
  },
  {
    "url": "tags/industry/index.html",
    "revision": "511a83f1413fe13d10efe37949579d27"
  },
  {
    "url": "tags/infants/index.html",
    "revision": "46eb9269a3737d32b301eaeb10c6457f"
  },
  {
    "url": "tags/infoonepagelove.com/index.html",
    "revision": "9394299d3e586c2a419d492e3f7b7498"
  },
  {
    "url": "tags/initial-interview/index.html",
    "revision": "6f72bd72d06785e7ca8f6e84723fc7bf"
  },
  {
    "url": "tags/initializing/index.html",
    "revision": "92d6c1450840139879ccf3e33739daff"
  },
  {
    "url": "tags/inkling/index.html",
    "revision": "1285d9fed3bbad038ffdfd9c49033ab3"
  },
  {
    "url": "tags/inklings/index.html",
    "revision": "39a4c22d3453547bc40715a2a7c95824"
  },
  {
    "url": "tags/inorder/index.html",
    "revision": "a4b247e4cc411f4a027d7d38aab01f9d"
  },
  {
    "url": "tags/insert/index.html",
    "revision": "a292a87cc8c1963f2c5dd2eb229e0483"
  },
  {
    "url": "tags/insertion-sorts/index.html",
    "revision": "11defb2dd0749d11047cd60bdee12bef"
  },
  {
    "url": "tags/inside-out/index.html",
    "revision": "6a49b87d028d21cb6958e81c1a302002"
  },
  {
    "url": "tags/inside/index.html",
    "revision": "0ec4633c3989c045ed5029226176b104"
  },
  {
    "url": "tags/installation/index.html",
    "revision": "aa89398b05a7106ea57efb6200c6a7ae"
  },
  {
    "url": "tags/instructors/index.html",
    "revision": "05c42a7b870301fd80efb0507bed9c25"
  },
  {
    "url": "tags/insult/index.html",
    "revision": "820e49a18f81c49bb1fb739e2a39035f"
  },
  {
    "url": "tags/insults/index.html",
    "revision": "0a4d83a2e476dc9bee469714af2c3d9a"
  },
  {
    "url": "tags/integer/index.html",
    "revision": "61d5a65d1fb7aca8debd1f040f7aac10"
  },
  {
    "url": "tags/integers/index.html",
    "revision": "497f77ecddccc2eaa376b0ccdb69a2ce"
  },
  {
    "url": "tags/integrate-your-school-email/index.html",
    "revision": "9cb4e1e924533029950e4ef0397c4562"
  },
  {
    "url": "tags/integrated-systems/index.html",
    "revision": "3cf35b20f440eb68c9b2fdfacdf6e47f"
  },
  {
    "url": "tags/intensive/index.html",
    "revision": "685134029421c06831a5d9d8aefd73bc"
  },
  {
    "url": "tags/interconnectedness/index.html",
    "revision": "6dad9a5a7feed723a6eccc43c003c2ac"
  },
  {
    "url": "tags/interfeud/index.html",
    "revision": "534f7a7cea15db124b10be6c3cdfc6fe"
  },
  {
    "url": "tags/international-fleet-personnel/index.html",
    "revision": "bdc96c661d812bedee91b5254e557b6d"
  },
  {
    "url": "tags/internet-trolls/index.html",
    "revision": "d4c418db446c0ec0893ab63968dc4199"
  },
  {
    "url": "tags/internship-interview/index.html",
    "revision": "e41dc548a31d14076d72b83ad420bbfa"
  },
  {
    "url": "tags/internships/index.html",
    "revision": "ee3cf7f00b3ffbc44e45d65a6ced2d8c"
  },
  {
    "url": "tags/interview/index.html",
    "revision": "012754aedf7724e9e167bf14e4099548"
  },
  {
    "url": "tags/interviewer/index.html",
    "revision": "22d3e8cfd54fa28bfcaeff02c1f61cf2"
  },
  {
    "url": "tags/interviews/index.html",
    "revision": "276994b5d95e8dbd68fe5422b0f0fccc"
  },
  {
    "url": "tags/intro-course/index.html",
    "revision": "7df3112eff933153898a5cc778e367a2"
  },
  {
    "url": "tags/intro/index.html",
    "revision": "5dc50c365c30d80d9f45682a74917415"
  },
  {
    "url": "tags/ios/index.html",
    "revision": "263ac6c9b13011665162cbacc33be8fc"
  },
  {
    "url": "tags/isaac/index.html",
    "revision": "b25e64af5c34b0d711ca563a196776a6"
  },
  {
    "url": "tags/it-crowd/index.html",
    "revision": "b6302eb7fdf4bfc270c2169579abcd28"
  },
  {
    "url": "tags/jack-sparrow/index.html",
    "revision": "75a296a68bfc2e1db47a31ad8b13f2e2"
  },
  {
    "url": "tags/jason-sewell/index.html",
    "revision": "e8845ac5eaa4f8b026d36287cb5353bb"
  },
  {
    "url": "tags/java-arrays/index.html",
    "revision": "2a035f3c63d7b26221380c7fbd11d5d0"
  },
  {
    "url": "tags/java-decompiler/index.html",
    "revision": "6cf4025172298f7e322480b8995dcafb"
  },
  {
    "url": "tags/java-program/index.html",
    "revision": "23a72fece963d81c3bfacf678def65db"
  },
  {
    "url": "tags/java-programming/index.html",
    "revision": "6cb5e690d04da4982c3cdd9bcab53b03"
  },
  {
    "url": "tags/java-queues/index.html",
    "revision": "8f4c3c061f9e7e8c52ff4b18f846e121"
  },
  {
    "url": "tags/java/index.html",
    "revision": "c9f1b941fe58d7a600877c19acd53db5"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "5bd1c60823a1226e102cb7a5f5de693e"
  },
  {
    "url": "tags/jd.benow.ca/index.html",
    "revision": "3cf7c27b8b8b858d70de8360e801fc40"
  },
  {
    "url": "tags/jd/index.html",
    "revision": "bcabedcd0853736b8be4a05223d4d606"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "6d3a5a973aeac3652e764ce893d3500e"
  },
  {
    "url": "tags/jeopardy-template/index.html",
    "revision": "6c7ad182ee86ca9015767824c41a8d1b"
  },
  {
    "url": "tags/jeopardy/index.html",
    "revision": "d00158eff5d52b1432f738f621ae3c5b"
  },
  {
    "url": "tags/jesus/index.html",
    "revision": "af7539081c87bc9f57de1edf2580abbd"
  },
  {
    "url": "tags/jewish-holocaust/index.html",
    "revision": "c2d89846de2829918e7ab7e1d4ed1254"
  },
  {
    "url": "tags/jimmy/index.html",
    "revision": "af53f601fe2ce60186df41f67cbf2176"
  },
  {
    "url": "tags/joanna/index.html",
    "revision": "0f3370f6c432796cf124b8d26c5bfdc0"
  },
  {
    "url": "tags/jobs-going-to-robots/index.html",
    "revision": "6b84a077c0a1cbf2e98f99e0346b73ed"
  },
  {
    "url": "tags/jobs/index.html",
    "revision": "f0312dae10f09f28efc327837a822bf8"
  },
  {
    "url": "tags/john-b-dey-elementary/index.html",
    "revision": "4e9379c14c925586c4cc015d3c73686a"
  },
  {
    "url": "tags/john-b-dey/index.html",
    "revision": "49f50a8515c4554acd395ac4f2fcb418"
  },
  {
    "url": "tags/johnny-depp/index.html",
    "revision": "a263796897b6b59c9cf44e62a770e175"
  },
  {
    "url": "tags/journalism/index.html",
    "revision": "aea5da3780b90a7aa6a332bf9c48b7cd"
  },
  {
    "url": "tags/journey-so-far/index.html",
    "revision": "dc0d815f89d101d33330c0bf1cb91ee4"
  },
  {
    "url": "tags/journey/index.html",
    "revision": "902ce344de4149cb019fc9b4606b0085"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "e9067c29c7c046fcb02690962976f0ed"
  },
  {
    "url": "tags/js-coding-bootcamps/index.html",
    "revision": "194080772aa6932c6479cd44451029aa"
  },
  {
    "url": "tags/js-library/index.html",
    "revision": "2000a528f4806055a4795c1d9a022ac9"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dabd1b94ccd4d8ba60b0208dc16cb7c0"
  },
  {
    "url": "tags/juan-gilbert/index.html",
    "revision": "4d2c89ea2fe24e38481e914d4e7d857b"
  },
  {
    "url": "tags/jubilant/index.html",
    "revision": "f44c6918185139018d71eb0e567de2dc"
  },
  {
    "url": "tags/jumpstart/index.html",
    "revision": "40cdab0a5ee70298b1b939fce876f1c5"
  },
  {
    "url": "tags/just-dance-2014/index.html",
    "revision": "56b62c5e8eb99614a0ef6a104ce0a715"
  },
  {
    "url": "tags/justin/index.html",
    "revision": "84966130dcc14bbcea2b55bb19a6e677"
  },
  {
    "url": "tags/katherine-gilhooley/index.html",
    "revision": "0e1d7b11cc64644e910a9470c23a5a54"
  },
  {
    "url": "tags/key/index.html",
    "revision": "a9be6f17516e53719f96639ee273708f"
  },
  {
    "url": "tags/keyboard-instrument/index.html",
    "revision": "2e7552b641b72e2f612f07115df3f513"
  },
  {
    "url": "tags/keynote/index.html",
    "revision": "88409273b8c2dec776cc7a2533247793"
  },
  {
    "url": "tags/kickstarter/index.html",
    "revision": "368532c90453ea46db2f8497b096cd4c"
  },
  {
    "url": "tags/kinecrtx/index.html",
    "revision": "cc3900e977a69d2b73cb7007f9eeb98b"
  },
  {
    "url": "tags/kinect-sports-rivals/index.html",
    "revision": "da99516034e8cd0f2796df65a67dc6e3"
  },
  {
    "url": "tags/kinect-sports/index.html",
    "revision": "9c9368c597cc1c03587bf0590ff6b8d9"
  },
  {
    "url": "tags/kinect/index.html",
    "revision": "e3cae88148eddd79fe4882b8ec003194"
  },
  {
    "url": "tags/kiss/index.html",
    "revision": "738b5e37dc81b4cd0461c193bdee48b4"
  },
  {
    "url": "tags/klei-entertainment/index.html",
    "revision": "c6b3f0dfd4f243557cc9b2808d58aa21"
  },
  {
    "url": "tags/knighthood/index.html",
    "revision": "96879367f7e548690edcda14d6f199c2"
  },
  {
    "url": "tags/ko/index.html",
    "revision": "7efa4bb5ea87cdb1e8fe49296ebc83e0"
  },
  {
    "url": "tags/korea/index.html",
    "revision": "32fc62b65531c3aa4ecf344fc9d697e1"
  },
  {
    "url": "tags/kpcb-fellow-application/index.html",
    "revision": "acdd3c9ba69e9297c8825e396aca6c1f"
  },
  {
    "url": "tags/kudos/index.html",
    "revision": "2e5ef8720579486a94aaeed8e3ee1293"
  },
  {
    "url": "tags/labs/index.html",
    "revision": "0fb901d6a83661f57248dd5dffc76de4"
  },
  {
    "url": "tags/ladies-of-fullstack/index.html",
    "revision": "13b90407ffcd6f540c375529be19f610"
  },
  {
    "url": "tags/langdon/index.html",
    "revision": "3081e45c96acd7cca1e872698b687bd6"
  },
  {
    "url": "tags/languages/index.html",
    "revision": "78377e85f272c7273fea1b0da76b63a3"
  },
  {
    "url": "tags/laravel-5.3/index.html",
    "revision": "5c8d9ba7e9089d09749a83ea0826c710"
  },
  {
    "url": "tags/laravel-5/index.html",
    "revision": "24bdf14b7f4416591761ee0b7776dc79"
  },
  {
    "url": "tags/laravel/index.html",
    "revision": "8e6b35b4364487c0959354fb1e29156d"
  },
  {
    "url": "tags/last-days/index.html",
    "revision": "db71b8820f2074a4b3f51b718e5adac1"
  },
  {
    "url": "tags/last-stand-union-city/index.html",
    "revision": "384cc33a1243482e365af75fc2d0a615"
  },
  {
    "url": "tags/last-stand/index.html",
    "revision": "88ea407ddd6c27c4585c0c69e52e8afe"
  },
  {
    "url": "tags/latinos/index.html",
    "revision": "30c8de180fcadf4b68ce1800a5a31ad1"
  },
  {
    "url": "tags/lauch-academy/index.html",
    "revision": "e86796b1faca967304d0d677d6cbb87c"
  },
  {
    "url": "tags/launch-academy/index.html",
    "revision": "1fec018c9bb7f856554333dd9c916fa3"
  },
  {
    "url": "tags/launcher/index.html",
    "revision": "cd7f745741720b3c2a8ce960cbac047e"
  },
  {
    "url": "tags/launchpad-items-reset/index.html",
    "revision": "290217cd8b27d8d3901e7d313016d1a1"
  },
  {
    "url": "tags/launchpad/index.html",
    "revision": "cbbe719822e916fe620c0cb7c5930757"
  },
  {
    "url": "tags/laws-of-power/index.html",
    "revision": "0d4b41320cb8924ffe9964b1435d19ac"
  },
  {
    "url": "tags/layout/index.html",
    "revision": "d656d3237061988c724ff58a0216b9f2"
  },
  {
    "url": "tags/learn-web-dev/index.html",
    "revision": "28c8521f87a4f9d9f1774e134383df35"
  },
  {
    "url": "tags/learning-team-lunch/index.html",
    "revision": "f200b13e4712614b7654f2f6fe6a4365"
  },
  {
    "url": "tags/learning-team/index.html",
    "revision": "72102f0a58b9172e6cbc653d46fc2bbc"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "4dd23c1c1a0192493ff91c8f2f146be2"
  },
  {
    "url": "tags/left-subtree/index.html",
    "revision": "42ebeebd0e6b16a130e4033f7601ecd9"
  },
  {
    "url": "tags/left/index.html",
    "revision": "afee84031465907c03d48cfd7ac76be8"
  },
  {
    "url": "tags/lenovo/index.html",
    "revision": "1cdd0ae71f3034a0f44fe7aa130b9016"
  },
  {
    "url": "tags/letter/index.html",
    "revision": "b3d0072918986ae2d6308d51b1c42a36"
  },
  {
    "url": "tags/levels-of-communication/index.html",
    "revision": "b59d3dbff5ac8a6b884d4f469f72492d"
  },
  {
    "url": "tags/lighthearted/index.html",
    "revision": "4a1aa11713fa390e4f165c7186e0d4b0"
  },
  {
    "url": "tags/limbo-game/index.html",
    "revision": "9a43ca63b9ff3980226aa09bb0694c8b"
  },
  {
    "url": "tags/limbo/index.html",
    "revision": "9f78b43bbefb46ecea2ef4f2eac395b1"
  },
  {
    "url": "tags/link/index.html",
    "revision": "e700d118fb466f6d85603c85430ae370"
  },
  {
    "url": "tags/linked-in/index.html",
    "revision": "236ae5f221fa9c069bd4fa974b278875"
  },
  {
    "url": "tags/linked-lists/index.html",
    "revision": "31bf226fce2d9be0139f1f57f5171dea"
  },
  {
    "url": "tags/linkedin/index.html",
    "revision": "3597e9b2f1e7a925d12801d0fc536e33"
  },
  {
    "url": "tags/lips/index.html",
    "revision": "065b8c0ca0294fae931786a3419bec47"
  },
  {
    "url": "tags/list/index.html",
    "revision": "df0e7ec4eef8913b63c1689dcf4e3bce"
  },
  {
    "url": "tags/liteicon/index.html",
    "revision": "ab848031521d8288b2c9a5f166a343c3"
  },
  {
    "url": "tags/load-unpacked-extension/index.html",
    "revision": "0dd2306e22b95628fee1b9a899b24b81"
  },
  {
    "url": "tags/logistics/index.html",
    "revision": "878dcfeec02bbdd6514f86c1fce3d1ab"
  },
  {
    "url": "tags/lonely/index.html",
    "revision": "dc3986a2ec10126942911b9094aaf0ef"
  },
  {
    "url": "tags/long-lists/index.html",
    "revision": "56c098129e7b587c628941d5fb2fb1a6"
  },
  {
    "url": "tags/lord-of-the-flies/index.html",
    "revision": "ac3467ec1700098b08d46cf939d8a8c2"
  },
  {
    "url": "tags/lord-of-the-rings-return-of-the-king/index.html",
    "revision": "a500313da3b1826560d8b88116117a4b"
  },
  {
    "url": "tags/lord-of-the-rings/index.html",
    "revision": "fbb51443dce6f13dd0db2e1e2acc0cd6"
  },
  {
    "url": "tags/louvre/index.html",
    "revision": "0800d9d6fa3a1d9f01437d094fe56cb0"
  },
  {
    "url": "tags/love/index.html",
    "revision": "22d08531381cde849519f0a9373c37ca"
  },
  {
    "url": "tags/lunch/index.html",
    "revision": "91475a1157f0cdf3c3b7031af986e887"
  },
  {
    "url": "tags/lust/index.html",
    "revision": "7bf22d56bafc1c3e63178b090e9f2fdf"
  },
  {
    "url": "tags/lynda.com/index.html",
    "revision": "cda2f08689ff5d350d136bea6c1cf1a7"
  },
  {
    "url": "tags/mac/index.html",
    "revision": "b8482356e9b087ee9b215b1730403382"
  },
  {
    "url": "tags/macabre/index.html",
    "revision": "f6c8302fa23105e10a6a4bda88b5fb3c"
  },
  {
    "url": "tags/macaroni/index.html",
    "revision": "95d3dd80269ef819c1938d4a9b4374c2"
  },
  {
    "url": "tags/machine-learning/index.html",
    "revision": "3d43913363896c2b4e5f447eb4685cd2"
  },
  {
    "url": "tags/mad-cowboy/index.html",
    "revision": "a17a00873963d3075e26506af00d713d"
  },
  {
    "url": "tags/main-function/index.html",
    "revision": "d321aa974dbcba4b1bfd7a5854ab4d77"
  },
  {
    "url": "tags/main-ideas/index.html",
    "revision": "404f19ec9cb2f11abd4c2eac5fa4f9fb"
  },
  {
    "url": "tags/main-method/index.html",
    "revision": "26f14038fa0d94360f4eac8afffe2920"
  },
  {
    "url": "tags/make-school/index.html",
    "revision": "0ffcd9c74dc8cd427159e4188afe964d"
  },
  {
    "url": "tags/maker-square/index.html",
    "revision": "0fc1937097656d3dfb8ad4e4b8f51b0b"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "0db9acbf29ac38f961436bb135937e14"
  },
  {
    "url": "tags/makersquare/index.html",
    "revision": "20261916d1dbf2bd7fe3b6f21fef0631"
  },
  {
    "url": "tags/man/index.html",
    "revision": "1200e3546b3d84bcc0c6192530627fd2"
  },
  {
    "url": "tags/manifest.json/index.html",
    "revision": "6f0d3d04bc57a57d74782ab69bf36c41"
  },
  {
    "url": "tags/manuel-perez/index.html",
    "revision": "4c87484cf9f84d4bc33e9c6d218d0d6f"
  },
  {
    "url": "tags/manuel/index.html",
    "revision": "2ee42c31cac02f5b2b9d3d7ce1e06d81"
  },
  {
    "url": "tags/map-me/index.html",
    "revision": "b50db749d82645b6a598b8ed59bb57bb"
  },
  {
    "url": "tags/map-of-coding-bootcamps/index.html",
    "revision": "492d633edc3cf6b9baa48c08ea3be452"
  },
  {
    "url": "tags/map/index.html",
    "revision": "56ab60a4006127c30a4e4b8e5d787050"
  },
  {
    "url": "tags/mapme/index.html",
    "revision": "2cfdd42e1d247b32a1cf93382ce56c9a"
  },
  {
    "url": "tags/mario-kart/index.html",
    "revision": "8949ca46bc55669c8e170e3bcee17c17"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "2392161aa32314ddf636e6ac5979ab63"
  },
  {
    "url": "tags/market-size/index.html",
    "revision": "aecfad206f20090b232868481d4894e8"
  },
  {
    "url": "tags/massachusetts/index.html",
    "revision": "afd5e4b578941c5e081ecc9551927e8b"
  },
  {
    "url": "tags/materialism/index.html",
    "revision": "020ce4569eca94bd12ee1586f35f5ae1"
  },
  {
    "url": "tags/math-functions/index.html",
    "revision": "b2788ed8a10206d03cd32584f3805f80"
  },
  {
    "url": "tags/math-java/index.html",
    "revision": "77de26d5cf702c8fd32700cb5370839c"
  },
  {
    "url": "tags/matthew-fontaine-maury-high-school/index.html",
    "revision": "88f2135bc282734a1b329c5cfcdabaf2"
  },
  {
    "url": "tags/maurice-moss/index.html",
    "revision": "1abeb9a74f8d5cea29f151dceb6c90e5"
  },
  {
    "url": "tags/maury-high-school/index.html",
    "revision": "287d20032558f4d2de72fbb933907dc9"
  },
  {
    "url": "tags/maxs-head/index.html",
    "revision": "5bbbb5c250e897c7b160d8019df8647a"
  },
  {
    "url": "tags/mean/index.html",
    "revision": "b6379e8c65031a6c9c9024b23409ba2c"
  },
  {
    "url": "tags/meat-boy/index.html",
    "revision": "17dec5cd88365a7f1fd7b9630e521fbf"
  },
  {
    "url": "tags/medium/index.html",
    "revision": "3ca41dd24e07ebbb8b1ce3189e9bc4c6"
  },
  {
    "url": "tags/meetup/index.html",
    "revision": "736871013bc541d90563e83da264d76a"
  },
  {
    "url": "tags/meetups/index.html",
    "revision": "167b490c04d58b77d15c14ed1b6da009"
  },
  {
    "url": "tags/melodrama/index.html",
    "revision": "3009dd4b6e83523edbd58947e2e6411e"
  },
  {
    "url": "tags/memory-address/index.html",
    "revision": "d69af5ea2b2f82893cf023d995799f89"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "0fd1ca2745e36c81c7a7be8699de4e17"
  },
  {
    "url": "tags/merge-sort/index.html",
    "revision": "5320981223fcfc2568656f89b0246721"
  },
  {
    "url": "tags/merger/index.html",
    "revision": "2e80faba389599f32aca408d9199300a"
  },
  {
    "url": "tags/michael/index.html",
    "revision": "9ab20fe2b1d82cc27ff692f078e8a017"
  },
  {
    "url": "tags/middle-school-poems/index.html",
    "revision": "a2993d8265fe8a699e066a1a17320550"
  },
  {
    "url": "tags/midterm/index.html",
    "revision": "3c8dcfa0bb9d5c131b3ef6ad8a7b1e56"
  },
  {
    "url": "tags/migration/index.html",
    "revision": "96b2c71b97e6a302d6459e47930669a9"
  },
  {
    "url": "tags/miklos-nyiszli/index.html",
    "revision": "ca53c365efcce912cba98ecc13995d51"
  },
  {
    "url": "tags/mini/index.html",
    "revision": "e9d14a82d77c94a43dfa904cc1b9b0d2"
  },
  {
    "url": "tags/minions/index.html",
    "revision": "239114be228a46c5c742a68527fb56a3"
  },
  {
    "url": "tags/mint/index.html",
    "revision": "089b163b563b438330bbd45b6ba2f065"
  },
  {
    "url": "tags/mit/index.html",
    "revision": "8eef0e31f9520210639a7fe4e9826af0"
  },
  {
    "url": "tags/mixer/index.html",
    "revision": "2cfb3f6d72ca43a1a03982dc1caab36d"
  },
  {
    "url": "tags/mobile-phone/index.html",
    "revision": "4fff7f2aba1fdda4c50df84ef470a38f"
  },
  {
    "url": "tags/modern-tech/index.html",
    "revision": "96477f5b835f8213e2d76df0da738be9"
  },
  {
    "url": "tags/mom-problems/index.html",
    "revision": "9fe8b1b053c5f8611d9d65ff42551d62"
  },
  {
    "url": "tags/mom/index.html",
    "revision": "605a2bd2006a47df91627de0c618abb3"
  },
  {
    "url": "tags/monsters/index.html",
    "revision": "776e0a30f0c7ffdf3a19e3cef897b457"
  },
  {
    "url": "tags/month-left/index.html",
    "revision": "689fc190cd2c1a286095184ea7bc4b48"
  },
  {
    "url": "tags/morbid/index.html",
    "revision": "3b353914cf3c3bfe1fb1c22abb522adc"
  },
  {
    "url": "tags/mother/index.html",
    "revision": "6a8e4727e1fd03e452ed8192846c4152"
  },
  {
    "url": "tags/motion/index.html",
    "revision": "7221660df0c9ca34b6eefbb230073375"
  },
  {
    "url": "tags/mountain-view/index.html",
    "revision": "76506e2ce4c389bbce666090ba3b1bd3"
  },
  {
    "url": "tags/movies/index.html",
    "revision": "3d5895c51589d8d6b30326ec632fabad"
  },
  {
    "url": "tags/mp3/index.html",
    "revision": "1b402fc7e48c592ecc8e74521c038526"
  },
  {
    "url": "tags/museum/index.html",
    "revision": "21fb7c03b9aceec3467de4328182ef68"
  },
  {
    "url": "tags/music/index.html",
    "revision": "cf05d90339ab0d8cd47708e2f1bf21bd"
  },
  {
    "url": "tags/mvp/index.html",
    "revision": "165be8214a114bd988c25b48e2ef0ba8"
  },
  {
    "url": "tags/neil-gaiman/index.html",
    "revision": "796fe7672bba2adee547e97d41765eb8"
  },
  {
    "url": "tags/never-outshine/index.html",
    "revision": "758ad01a9c0856d6680264ab2c21df76"
  },
  {
    "url": "tags/new-meetup/index.html",
    "revision": "b2a64ca1efb3e314ad3991be5e79db06"
  },
  {
    "url": "tags/new-network/index.html",
    "revision": "3104a7da4129e23e60d1435d7c2f2b4c"
  },
  {
    "url": "tags/new-super-mario-bros/index.html",
    "revision": "5632caa71a00bf14e8545c4c514db19f"
  },
  {
    "url": "tags/new-year/index.html",
    "revision": "30183e3a2fc9203db13c7bb18dd65a79"
  },
  {
    "url": "tags/new-york-city/index.html",
    "revision": "1aec13f935586a244156487f8e9e49c0"
  },
  {
    "url": "tags/news/index.html",
    "revision": "37fc6eadd88e89fe2507a3e84ffb1c8d"
  },
  {
    "url": "tags/nick-james/index.html",
    "revision": "825f86c54bef6f14ca252fb2051ff052"
  },
  {
    "url": "tags/nitty-gritty/index.html",
    "revision": "bf082c4dc2f8b095c9d16d01e5a82db3"
  },
  {
    "url": "tags/no-regrets/index.html",
    "revision": "d630c7ae0e30f88df6c39d373fea8eb3"
  },
  {
    "url": "tags/node/index.html",
    "revision": "405c3cc06faa902305cab645302826ae"
  },
  {
    "url": "tags/nodes/index.html",
    "revision": "eb9ee02cd7e850af626dfdbdad1ea0ee"
  },
  {
    "url": "tags/non-profit/index.html",
    "revision": "eed540bfb82a2f35e363b3fe7d68638d"
  },
  {
    "url": "tags/noob/index.html",
    "revision": "cf6017322a46a510bc4fe57d5adfddad"
  },
  {
    "url": "tags/noobie/index.html",
    "revision": "35cc5d979f5e3542ca8d5a29c2061151"
  },
  {
    "url": "tags/norfolk-javascript/index.html",
    "revision": "7c18753f76b87b6eed90bd7d2a0d8105"
  },
  {
    "url": "tags/norfolk-virginia/index.html",
    "revision": "1e1dce5416896c0c0ad58211f3416ca6"
  },
  {
    "url": "tags/norfolk/index.html",
    "revision": "688c239e9b9f48f27cdf1841016d0d4d"
  },
  {
    "url": "tags/norfolkjs-journey/index.html",
    "revision": "6a468322127eae6b7e6a951c03749482"
  },
  {
    "url": "tags/norfolkjs/index.html",
    "revision": "e457e38ab8ec64267c3e58d0830b6920"
  },
  {
    "url": "tags/north-korea/index.html",
    "revision": "bdb76083233352dc0968ac13a8ead633"
  },
  {
    "url": "tags/north/index.html",
    "revision": "321a92ef8cf1b93d84c06bb428e609a5"
  },
  {
    "url": "tags/northwestern-university/index.html",
    "revision": "71cb617a84f1e6cd99c22df355ea6211"
  },
  {
    "url": "tags/not/index.html",
    "revision": "b90df2519e52e93867b23af25d5f43ba"
  },
  {
    "url": "tags/notes/index.html",
    "revision": "5295f6fed49ce7773c5adf633dd58602"
  },
  {
    "url": "tags/nothing-to-envy/index.html",
    "revision": "cf92be9ec8c41709e1fd99645f6f6b4d"
  },
  {
    "url": "tags/nothing/index.html",
    "revision": "7094c28ff8b598138f59048b0e91d84d"
  },
  {
    "url": "tags/novel/index.html",
    "revision": "0d1558ecf07596de2713877a80a59b04"
  },
  {
    "url": "tags/numbers/index.html",
    "revision": "a83d2ed1ec6ad317e321ced044fe9b5c"
  },
  {
    "url": "tags/numerical-expressions/index.html",
    "revision": "9592e4fae4177ef7a28acdb3dd9e6a92"
  },
  {
    "url": "tags/odin-project/index.html",
    "revision": "f0067cb49b41b4b991e29ac53ba25796"
  },
  {
    "url": "tags/odu-email-integration/index.html",
    "revision": "90735352ffaa23c357a8fdf11cb0dd6d"
  },
  {
    "url": "tags/odu/index.html",
    "revision": "aaa8999390f21aad884555ea80cf7bc0"
  },
  {
    "url": "tags/oh-snap/index.html",
    "revision": "14bfbcbbfce6ec17dc9397c02a189989"
  },
  {
    "url": "tags/old-science/index.html",
    "revision": "af1d3b9ed711aa2ce593bf2263688f19"
  },
  {
    "url": "tags/one-page-love/index.html",
    "revision": "a45e1c9f35fa7830305690720fe56e3f"
  },
  {
    "url": "tags/one-week/index.html",
    "revision": "77c8fc0357c0384b9bd3337779caa193"
  },
  {
    "url": "tags/online-course/index.html",
    "revision": "252f848d3f9a335a60e428ef0b6a75b8"
  },
  {
    "url": "tags/online-design-course/index.html",
    "revision": "feb5a65cf667f7a7ef1f8703d17b9fc9"
  },
  {
    "url": "tags/online-flash-games/index.html",
    "revision": "6d2b4d93799c7d074a19ab913460e4ad"
  },
  {
    "url": "tags/online-image-editor/index.html",
    "revision": "e882fcc47c81a5da8b91ac320e30609b"
  },
  {
    "url": "tags/online-python-tutor/index.html",
    "revision": "b0a531aacad65c790ec1a4309a571e9b"
  },
  {
    "url": "tags/op-smile/index.html",
    "revision": "0b05b566990242702e788d87139df886"
  },
  {
    "url": "tags/operation-smile/index.html",
    "revision": "1d7dd921abdbab0e6e04a57e3e6c24d6"
  },
  {
    "url": "tags/oral-comm/index.html",
    "revision": "24123d4aaae701f98ba5d258da3fd1fa"
  },
  {
    "url": "tags/oren-etzioni/index.html",
    "revision": "be6d97ecc37bff864bd9b170fb7b4483"
  },
  {
    "url": "tags/orson/index.html",
    "revision": "968eefe2ac595d0459dc1d5b6376851c"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "3f78f5767e15bcc2e65b53ab8e2a0461"
  },
  {
    "url": "tags/osx-el-capitan/index.html",
    "revision": "9d0b25d33acf143955471754046a119c"
  },
  {
    "url": "tags/osx/index.html",
    "revision": "a7b7bd2a350244a3aa9a4d1c91ad2f50"
  },
  {
    "url": "tags/oxford-university/index.html",
    "revision": "736660e851648e6d8b20ed4509984c08"
  },
  {
    "url": "tags/pandemic-2/index.html",
    "revision": "f6a8190a3ddac16623e4f57045cfdcbc"
  },
  {
    "url": "tags/pandemic/index.html",
    "revision": "b7529884de1169330d58cbc19828ab87"
  },
  {
    "url": "tags/papers/index.html",
    "revision": "147eed6cd50ad24c0a32f16244a37c17"
  },
  {
    "url": "tags/parchment/index.html",
    "revision": "ffa05ced6a83acdba6297ccf6325e7d4"
  },
  {
    "url": "tags/pattern-library/index.html",
    "revision": "33fa750f03ad34c432f7b7e5881cbf04"
  },
  {
    "url": "tags/paypal/index.html",
    "revision": "eadd8c4ce70644cf6865930c6750611b"
  },
  {
    "url": "tags/pb/index.html",
    "revision": "eeb8733a506e2cd504e3aede0d667c76"
  },
  {
    "url": "tags/pdf-to-images/index.html",
    "revision": "9b3a44cf1b84309564de4ff3bc90d816"
  },
  {
    "url": "tags/personal-cohort-experience/index.html",
    "revision": "d82c0523dd0f3494faad524712971919"
  },
  {
    "url": "tags/personal-journal/index.html",
    "revision": "710223e569bd39b0b6c1972e66f4b68c"
  },
  {
    "url": "tags/personal-questions/index.html",
    "revision": "aaf5bfd052bbdef01aec2880c367230e"
  },
  {
    "url": "tags/personal-website/index.html",
    "revision": "ef98f21ab639b6f08998e763af4b8838"
  },
  {
    "url": "tags/personality/index.html",
    "revision": "bf9dc72a7d9c05a983da16a621a88873"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "75882afe789debeac9162ef5752a5dc5"
  },
  {
    "url": "tags/pertaining-to-hack-reactor/index.html",
    "revision": "5506c5319e4fb41e44e134d76ca20702"
  },
  {
    "url": "tags/pestilence/index.html",
    "revision": "2cd91ad122655956f373fc4c18c79fce"
  },
  {
    "url": "tags/peter-sunde/index.html",
    "revision": "86896c7ad0309c8f4f415de52b9f154c"
  },
  {
    "url": "tags/peter-weyland/index.html",
    "revision": "b2d4d41e922fc5df8e3036b783bcfd0e"
  },
  {
    "url": "tags/philadelphia/index.html",
    "revision": "717092bb2cc27f2f427d64db5fe623ae"
  },
  {
    "url": "tags/phone-conversations/index.html",
    "revision": "5098cf1e1010ad9d878e387140cbcfba"
  },
  {
    "url": "tags/pick-up-lines/index.html",
    "revision": "d0beb7bdc32a34b39d48063bfc6bf8b1"
  },
  {
    "url": "tags/pictures/index.html",
    "revision": "84c4a05ed0ddcefff62b044802673fe0"
  },
  {
    "url": "tags/pirate-bay/index.html",
    "revision": "ff94225d1070ce9ede4e31471a46f869"
  },
  {
    "url": "tags/pity/index.html",
    "revision": "5734ed5c148df8a81ea94c432fd125e6"
  },
  {
    "url": "tags/pixel-icon-generator/index.html",
    "revision": "43c6b3af11211747567af64a8baf90cf"
  },
  {
    "url": "tags/pixelfest/index.html",
    "revision": "768075e734cb5f5f371fc196561d704b"
  },
  {
    "url": "tags/plan-ahead/index.html",
    "revision": "5a51ddca41be6f6c2b026239cc88a255"
  },
  {
    "url": "tags/planetarium-show/index.html",
    "revision": "f2e0af2c172a52ebc1e1827866b41b60"
  },
  {
    "url": "tags/plans-in-motion/index.html",
    "revision": "609743de4d8b33472658fb5a90b711d8"
  },
  {
    "url": "tags/play-along/index.html",
    "revision": "b5bdc02c2a08eadb8014114c2e2d2dc3"
  },
  {
    "url": "tags/playdead-games/index.html",
    "revision": "3395d6d5299d92e60c47ed640c1b7315"
  },
  {
    "url": "tags/playdead/index.html",
    "revision": "67e7a0c636ef47007e14f8e6941e3c43"
  },
  {
    "url": "tags/playlistbuddy/index.html",
    "revision": "6d90dd9737213fe5b8bd19526f82667d"
  },
  {
    "url": "tags/playlists/index.html",
    "revision": "9d5f5ba04fe889f905aabff96988f58b"
  },
  {
    "url": "tags/plurality/index.html",
    "revision": "108ebfdf7bbe36c64a617e1105e60b3e"
  },
  {
    "url": "tags/png-files/index.html",
    "revision": "5fbb25c5f0c8de8fb1370d857676cd40"
  },
  {
    "url": "tags/png/index.html",
    "revision": "462dea1087c3fef581b985d170dfcb8e"
  },
  {
    "url": "tags/poem/index.html",
    "revision": "cbcf6904ce73414dbf61b4c011126ea1"
  },
  {
    "url": "tags/poetry/index.html",
    "revision": "695fc0579bb01c3eb15fefede4de10a5"
  },
  {
    "url": "tags/pointer/index.html",
    "revision": "603b5bc0cc991f25d45c6cb4fc731996"
  },
  {
    "url": "tags/poptropica/index.html",
    "revision": "1c1a13a95aa2b8705993e20b62e2a890"
  },
  {
    "url": "tags/portal-runner/index.html",
    "revision": "0e277798876311ac5d0d95d3613949e5"
  },
  {
    "url": "tags/post-apocalyptic/index.html",
    "revision": "5141c2ecb1b884f44e9ce1b0a0167de5"
  },
  {
    "url": "tags/postorder/index.html",
    "revision": "d39819f29f514ed9161f2a9518804020"
  },
  {
    "url": "tags/potential/index.html",
    "revision": "5a92aff121d25809e831e834782c15c4"
  },
  {
    "url": "tags/pow/index.html",
    "revision": "cefd776e543e0a43bd3466fd20f24c43"
  },
  {
    "url": "tags/predecessor/index.html",
    "revision": "3c9747c7a591df6d5971b8d37db2a42c"
  },
  {
    "url": "tags/preorder/index.html",
    "revision": "84b849d58bbc1dc43a7fdb4be0f12130"
  },
  {
    "url": "tags/prep/index.html",
    "revision": "c682355929f9019f2b3fe82a04e71ead"
  },
  {
    "url": "tags/preparation/index.html",
    "revision": "ec8e855c66f935fb10195e95d1e4e6fe"
  },
  {
    "url": "tags/preparing/index.html",
    "revision": "7dcc9f325b12c7cedb9fc174a5a5007c"
  },
  {
    "url": "tags/prepartion/index.html",
    "revision": "135247becd3006380e0be4a21c9381c6"
  },
  {
    "url": "tags/presentation-software/index.html",
    "revision": "418cb1356552f883b70d04046ee8af77"
  },
  {
    "url": "tags/president-harvey-mudd/index.html",
    "revision": "0c63fded60e07e1c5b32e0803004e839"
  },
  {
    "url": "tags/pretty/index.html",
    "revision": "5997f386d8c2903ea834d6f3a6a1a5fd"
  },
  {
    "url": "tags/prework/index.html",
    "revision": "95afa19a6ccaecba67967561500991e7"
  },
  {
    "url": "tags/pricey/index.html",
    "revision": "f1d72e73a2c97849edd49afc109d192c"
  },
  {
    "url": "tags/pride/index.html",
    "revision": "61df975f2f47ffc3aeed924509900d9c"
  },
  {
    "url": "tags/printf/index.html",
    "revision": "068fe05a41e5cbcacd3fd5211662fc84"
  },
  {
    "url": "tags/printing/index.html",
    "revision": "42122a6184b583d1b2cf746d37ff19b0"
  },
  {
    "url": "tags/priory-of-sion/index.html",
    "revision": "397c8bb1ec982e0da2c4c7b88a60a040"
  },
  {
    "url": "tags/prisoners/index.html",
    "revision": "2eac756d9b921b5584957e450b62017f"
  },
  {
    "url": "tags/process/index.html",
    "revision": "0ee78bea65d35ba8841cb17bf572d68a"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "9f788f17913dad08747ad3c31de80057"
  },
  {
    "url": "tags/product-academy/index.html",
    "revision": "a439ea5a44297e687b944d56cf308962"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "45b2d8ea1288ed10c8d7844ed54defe5"
  },
  {
    "url": "tags/program-length/index.html",
    "revision": "1296a0fa98dff0e6675fb6052d066f8d"
  },
  {
    "url": "tags/program/index.html",
    "revision": "82596899d2291cc18cef9067f6e6d912"
  },
  {
    "url": "tags/programmer/index.html",
    "revision": "1fd3239a2e750467e39d6a1c6fdf91b3"
  },
  {
    "url": "tags/programming-bootcamps/index.html",
    "revision": "d0b8b5735e2003b926e9f277ee536f3f"
  },
  {
    "url": "tags/programming/index.html",
    "revision": "be5f3dc73f66405cbe89f9cc55072c9a"
  },
  {
    "url": "tags/project-zomboid/index.html",
    "revision": "3a41f10513c0e00a7de858c5ee11fee0"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "e4cf74aaf9d79f82cfbfd24e2fa02830"
  },
  {
    "url": "tags/promises/index.html",
    "revision": "04cc2c41b519d30bce2144fcd4b05065"
  },
  {
    "url": "tags/properly-program/index.html",
    "revision": "5b488d779385c2c63ae4eb2658537307"
  },
  {
    "url": "tags/properties/index.html",
    "revision": "145b5ac8ee79a0a7a7cb65d48e54d0db"
  },
  {
    "url": "tags/pseudocode/index.html",
    "revision": "0b5926b870e46c294bee3a395e376e35"
  },
  {
    "url": "tags/puppy-love/index.html",
    "revision": "eff4b5ce7307ff15d93b954515822b7d"
  },
  {
    "url": "tags/python-3/index.html",
    "revision": "536adbfb067232b37db0b5158f0a2d27"
  },
  {
    "url": "tags/python-area-of-a/index.html",
    "revision": "24e6f3b97db55c9c2d6662500388b023"
  },
  {
    "url": "tags/python-bits/index.html",
    "revision": "be33f99bb4ea5af06505f84f5326e01f"
  },
  {
    "url": "tags/python/index.html",
    "revision": "b14c6d24b5b262fda9ae57988a362f5b"
  },
  {
    "url": "tags/questions-coding/index.html",
    "revision": "1091d30514d473a93e9481c0dda3b505"
  },
  {
    "url": "tags/questions/index.html",
    "revision": "5487f23708178877b9ea51cd4a9c2b8a"
  },
  {
    "url": "tags/queue-implementation/index.html",
    "revision": "24fe6852277f5edc13bff83bc012bcb0"
  },
  {
    "url": "tags/quick-sort/index.html",
    "revision": "89b989aea42a79df676830c8450c118e"
  },
  {
    "url": "tags/quizlet/index.html",
    "revision": "adeb618cca7d0a923c3fa7f92601799b"
  },
  {
    "url": "tags/quizzes/index.html",
    "revision": "eff6d459c57abae78342fd747f1b0766"
  },
  {
    "url": "tags/quora/index.html",
    "revision": "077c5c2d196906631b4df04cb504f734"
  },
  {
    "url": "tags/quotient-remainder/index.html",
    "revision": "82d177c2d0ca22acc3e75ce9c939defd"
  },
  {
    "url": "tags/random-poems/index.html",
    "revision": "795a0d278fe2e5aba13738e5ff55ac18"
  },
  {
    "url": "tags/randomly-generated/index.html",
    "revision": "64bee81bb54c674ce2327d95827bd6ae"
  },
  {
    "url": "tags/rankme/index.html",
    "revision": "4c45b9b272b62fe081800d322e811109"
  },
  {
    "url": "tags/rant/index.html",
    "revision": "0cbc9f579cf41c72fb3821e0f86a3205"
  },
  {
    "url": "tags/rants/index.html",
    "revision": "cb9b7ae233cdf214887c521ae615b236"
  },
  {
    "url": "tags/rating/index.html",
    "revision": "8c2c9a329a8cd734c7e08c278806c83c"
  },
  {
    "url": "tags/re-birth/index.html",
    "revision": "81b67372b388ae093ff8b778efa40b3f"
  },
  {
    "url": "tags/readme-template/index.html",
    "revision": "26a962b05e947abb09bb6f090de93a9f"
  },
  {
    "url": "tags/readme/index.html",
    "revision": "369acbb6f8003940a4907a49c19df625"
  },
  {
    "url": "tags/real-data/index.html",
    "revision": "41157dca5da3bfe5e4355f897c148884"
  },
  {
    "url": "tags/reason/index.html",
    "revision": "636878c30ac3d7298f7f23c38803a368"
  },
  {
    "url": "tags/reasons/index.html",
    "revision": "37171645856e2181bc01504838dc5f23"
  },
  {
    "url": "tags/recruiting/index.html",
    "revision": "97b11056fee5b782e8f64427517ad79e"
  },
  {
    "url": "tags/recursion/index.html",
    "revision": "a0e24b57f4a4c5b631aedda8c8f7b13f"
  },
  {
    "url": "tags/recursive/index.html",
    "revision": "3a11686c8d249d1ce4b87d1a97ff9163"
  },
  {
    "url": "tags/reflections/index.html",
    "revision": "91aa03a437adf2227a7092619c6e96f5"
  },
  {
    "url": "tags/rejection/index.html",
    "revision": "f247504fd5bf842915472f6f0da514e0"
  },
  {
    "url": "tags/relative/index.html",
    "revision": "5c616a886406e2d06c82dfaa8114d6d5"
  },
  {
    "url": "tags/relativity/index.html",
    "revision": "4802292a2cacc1d0d2e3f368d1e3d073"
  },
  {
    "url": "tags/religion/index.html",
    "revision": "4f9ed25a79381f7f010012529b16304e"
  },
  {
    "url": "tags/religious/index.html",
    "revision": "08b640cf453bd9b831ee42ab9550e0fb"
  },
  {
    "url": "tags/remove/index.html",
    "revision": "e844a224c06547f3529ccadf3179a7fb"
  },
  {
    "url": "tags/rename-multiple-photos/index.html",
    "revision": "87c863dc81ef509b79bf0a48670acd60"
  },
  {
    "url": "tags/repetitive/index.html",
    "revision": "bc353dd47db1426838c862f61d1d0e50"
  },
  {
    "url": "tags/research/index.html",
    "revision": "f1a2ef0e07c4717fc9a152227d58d19d"
  },
  {
    "url": "tags/reset-dock/index.html",
    "revision": "62a52238d4921f073e8119d5336d49e2"
  },
  {
    "url": "tags/reset-launchpad/index.html",
    "revision": "bfe272ded5a2485e5ba62b7a3f809523"
  },
  {
    "url": "tags/reset-your-launchpad/index.html",
    "revision": "3f768ce57550611e977f3a9635eda550"
  },
  {
    "url": "tags/resources/index.html",
    "revision": "28e5632b5ab9b2d1062d3277262e83c8"
  },
  {
    "url": "tags/respect-tradition/index.html",
    "revision": "be2d03424e6a3bede41fe8ce5b82e9f4"
  },
  {
    "url": "tags/result/index.html",
    "revision": "82e03a45e81d11eec82ed5f344198bcd"
  },
  {
    "url": "tags/results/index.html",
    "revision": "41dc98e109d22f64b2cf05bbdc9dc3b4"
  },
  {
    "url": "tags/resume/index.html",
    "revision": "7c539c1118ba2b8d38b876b6bb3988e7"
  },
  {
    "url": "tags/retarded/index.html",
    "revision": "91b8906e99ff568241529967c3a870ce"
  },
  {
    "url": "tags/revconf/index.html",
    "revision": "a5fdb397600165940486e78c5513436a"
  },
  {
    "url": "tags/review-week/index.html",
    "revision": "ea5c42f98a10457779c15442b1dac583"
  },
  {
    "url": "tags/review/index.html",
    "revision": "12aa2db028d6a3cf96a1f12c44b8222d"
  },
  {
    "url": "tags/reviewing/index.html",
    "revision": "bf2370d5f2a719b3651f6bb624caa6c8"
  },
  {
    "url": "tags/revolution-conference/index.html",
    "revision": "6c45c6c8a06ef5faa3cc0aa55c459aa4"
  },
  {
    "url": "tags/revolution/index.html",
    "revision": "519b0ebcf3715691f084cadfa9b9b796"
  },
  {
    "url": "tags/revolutionconf-virginia/index.html",
    "revision": "a5899b651e0f4bb66c807f9f025877c4"
  },
  {
    "url": "tags/revolutionconf/index.html",
    "revision": "3b49091c08c02959759bfcb82f6905ca"
  },
  {
    "url": "tags/richard-tapia/index.html",
    "revision": "b7da9ff7c1c9144a9ce69562b92cdff7"
  },
  {
    "url": "tags/riddle/index.html",
    "revision": "1410983a4cb6506d1bfa0d3edfb1dea6"
  },
  {
    "url": "tags/right/index.html",
    "revision": "12833be86d93de144472c35590a8a6af"
  },
  {
    "url": "tags/rihanna/index.html",
    "revision": "33abc659b4274b774aefa93fc69e8cfa"
  },
  {
    "url": "tags/robert-greene/index.html",
    "revision": "23637ce071d805413e0a522a8ea0ba69"
  },
  {
    "url": "tags/robert-langdon/index.html",
    "revision": "8eae88b83ae96339e25ffc7b6a51610a"
  },
  {
    "url": "tags/robocup-soccer/index.html",
    "revision": "199dab76565e8f5517163e0d151f0aa5"
  },
  {
    "url": "tags/robocup/index.html",
    "revision": "d87dc7d72492b2b984521d389a96d93a"
  },
  {
    "url": "tags/robopocalypse/index.html",
    "revision": "9c0cb18f5f05c6fc44a121379a400b9f"
  },
  {
    "url": "tags/robot/index.html",
    "revision": "860755e96955338e3865cbc5c821ebe2"
  },
  {
    "url": "tags/robotics/index.html",
    "revision": "872ba39c50d5723baa241881faa52df7"
  },
  {
    "url": "tags/robots/index.html",
    "revision": "339cbdffe406853ec633495dd276664c"
  },
  {
    "url": "tags/romance/index.html",
    "revision": "850303a1a7cb3a57a14fc217674e92f0"
  },
  {
    "url": "tags/runescape/index.html",
    "revision": "86e9b21d4985fa66fb29f1b3285a5195"
  },
  {
    "url": "tags/russell-cheng/index.html",
    "revision": "dbb67af080fe0d32289f41c3c4da9dff"
  },
  {
    "url": "tags/sally-conference/index.html",
    "revision": "bbfb7d6db495a253503c289e087a730d"
  },
  {
    "url": "tags/same-height/index.html",
    "revision": "30c2d9408ec3a2816bf4416274460190"
  },
  {
    "url": "tags/same-sex-marriage/index.html",
    "revision": "076e2ed19d528b02f387fa24a39b7a45"
  },
  {
    "url": "tags/samer-buna/index.html",
    "revision": "6413948317dc0afacf5c750a164c6ded"
  },
  {
    "url": "tags/san-francisco/index.html",
    "revision": "dcf11a4be5a83365263f24ffd6c180d1"
  },
  {
    "url": "tags/sandbox/index.html",
    "revision": "9d9bf3957f1617cef10d2fab0673a58d"
  },
  {
    "url": "tags/sbarro/index.html",
    "revision": "7ae975bafefa666b61742ede099f8733"
  },
  {
    "url": "tags/scary/index.html",
    "revision": "7738dcdc2958f90f120b72348994b9e7"
  },
  {
    "url": "tags/scholarships/index.html",
    "revision": "dc579766271c7e7708dc9269cc193010"
  },
  {
    "url": "tags/school-email-integration/index.html",
    "revision": "caa926c62ef86da79713c9d1599d5410"
  },
  {
    "url": "tags/school-email/index.html",
    "revision": "9e28eb5f032d5f25659f60c7a2edf89f"
  },
  {
    "url": "tags/school/index.html",
    "revision": "265eea008c458bc7c4eb0d6829e5bbd4"
  },
  {
    "url": "tags/science-fair/index.html",
    "revision": "9c4e42c305c9f208272983a4f3c94861"
  },
  {
    "url": "tags/science/index.html",
    "revision": "2727d8e8d7ed4945149472f2028fdb7c"
  },
  {
    "url": "tags/scott-card/index.html",
    "revision": "b57382d7b3863bf4915d4afd1ed491b9"
  },
  {
    "url": "tags/screenhero/index.html",
    "revision": "2feb4d38b74a9f6cc71d30b12477d32a"
  },
  {
    "url": "tags/screenshots/index.html",
    "revision": "dc769cf5827e123567d798bc23a7496d"
  },
  {
    "url": "tags/scribe/index.html",
    "revision": "a757379c27566e5433150c79c5799ea2"
  },
  {
    "url": "tags/search-query/index.html",
    "revision": "68086a2b0b7c324ad014d68c8a6eecfd"
  },
  {
    "url": "tags/searching/index.html",
    "revision": "114ef04224fee89003704bfd8f59d2f7"
  },
  {
    "url": "tags/sedgefield-elementary/index.html",
    "revision": "ae71fa384f6841078734827e22a705b0"
  },
  {
    "url": "tags/sedgefield/index.html",
    "revision": "e4b0abb852961ee0b46a9144e7258dfa"
  },
  {
    "url": "tags/seema/index.html",
    "revision": "71c5fa0b87e2321cb46fada221c537e2"
  },
  {
    "url": "tags/selection-sort/index.html",
    "revision": "3dfefcf2e67ae417ab9e03d7f5bf6ba7"
  },
  {
    "url": "tags/selection/index.html",
    "revision": "68ed360a1c49ab02dbe6f47c6cd627db"
  },
  {
    "url": "tags/selective-honesty/index.html",
    "revision": "cff0e1137df52bc4cd55ae39eaa810c4"
  },
  {
    "url": "tags/semicolons/index.html",
    "revision": "76055637ed09aca195e45fd951961c18"
  },
  {
    "url": "tags/senior-phase/index.html",
    "revision": "edaa117ee322d896921bb59aa584efb4"
  },
  {
    "url": "tags/sesame-street/index.html",
    "revision": "39f22531748976b9402dca13eb63e9be"
  },
  {
    "url": "tags/seven-days/index.html",
    "revision": "1b1b7431c1bbb122d5b98bdac96d88b2"
  },
  {
    "url": "tags/seven-deadly-sins/index.html",
    "revision": "76782bacce83c41c99a084c5a39f44a9"
  },
  {
    "url": "tags/shaan/index.html",
    "revision": "21e6d2a72af9cd3f2685567833c71357"
  },
  {
    "url": "tags/shakespeare/index.html",
    "revision": "69f38bb800379a2f6d5a861d23e48795"
  },
  {
    "url": "tags/shakey/index.html",
    "revision": "91a563a39e6dc35d867c15c30594d2be"
  },
  {
    "url": "tags/shame/index.html",
    "revision": "57915c7385a01204e8e97075c2b869ff"
  },
  {
    "url": "tags/sharing/index.html",
    "revision": "f93c1334036f2438a14897fd81fe969b"
  },
  {
    "url": "tags/short-operation/index.html",
    "revision": "ec44a93cc8efb98d61804962b6639d18"
  },
  {
    "url": "tags/short-stories/index.html",
    "revision": "9b5e4851db62e6c4b8f8e12dd19f87e3"
  },
  {
    "url": "tags/shrthnd/index.html",
    "revision": "274b497253fd78604a1d89359e8690f7"
  },
  {
    "url": "tags/silicon-valley/index.html",
    "revision": "0337993191a0de149b80ac5ed7817a8b"
  },
  {
    "url": "tags/silly/index.html",
    "revision": "62873ee1b2750de055ce23a3ef20f897"
  },
  {
    "url": "tags/sims-2/index.html",
    "revision": "52ac516601de12f2ac52c5677c6ebae5"
  },
  {
    "url": "tags/sims-3/index.html",
    "revision": "1abe94df0a621652b19dc3c970dd583d"
  },
  {
    "url": "tags/sims-medieval/index.html",
    "revision": "368dfa20452c52558db44ec46dfcc157"
  },
  {
    "url": "tags/sins/index.html",
    "revision": "5df1ebdb984f654b9990ff840c218ada"
  },
  {
    "url": "tags/siri/index.html",
    "revision": "887e73eb8dc0fda61c5f683081f95748"
  },
  {
    "url": "tags/sitedrop/index.html",
    "revision": "abbdf2d5d48951e6c66efafc5970b507"
  },
  {
    "url": "tags/sketch/index.html",
    "revision": "5783d05ceeea7ddfba703a35171a0755"
  },
  {
    "url": "tags/skiirty/index.html",
    "revision": "48530ed98b5c4a678dd6255b89e43ba6"
  },
  {
    "url": "tags/skype/index.html",
    "revision": "3509b365ab5f84f81d2caaec1e909b89"
  },
  {
    "url": "tags/slack/index.html",
    "revision": "958443fc5c11cc44afae6b325f066c79"
  },
  {
    "url": "tags/slides-carnival/index.html",
    "revision": "32a6d444e9a63024178c5acd8c0c3f4e"
  },
  {
    "url": "tags/slidescarnival/index.html",
    "revision": "fc5297c37c98b1587b425572f086169a"
  },
  {
    "url": "tags/sloth/index.html",
    "revision": "b4bce0f4a8059faf928304eca303027d"
  },
  {
    "url": "tags/smaller-problem/index.html",
    "revision": "df7934cbdb66f8cc0cd73926d91b2ab5"
  },
  {
    "url": "tags/smart-notes/index.html",
    "revision": "8a02a780f9866e1adc610ba6eb12c6a8"
  },
  {
    "url": "tags/smile-train/index.html",
    "revision": "8f07b6918fecd5200b39a2b68c8f4501"
  },
  {
    "url": "tags/snow/index.html",
    "revision": "0752403edf7ab3c088661f36b2c420cd"
  },
  {
    "url": "tags/social-networking-connectedness/index.html",
    "revision": "e1464f85095637226a78dc5bd1c46925"
  },
  {
    "url": "tags/social-networking-sites/index.html",
    "revision": "efcc3a1b895f9002245d05d5462f6d59"
  },
  {
    "url": "tags/social-networking/index.html",
    "revision": "90213bd9bb7b6b285520b9d9d25c0909"
  },
  {
    "url": "tags/social/index.html",
    "revision": "949cd435e1e38a5f4cfc963cd53ab378"
  },
  {
    "url": "tags/socket.io/index.html",
    "revision": "8d4c7bd32d9473a27e809c275044614f"
  },
  {
    "url": "tags/socks/index.html",
    "revision": "a83e2dd599069e0acbac29f874569767"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "dcc82aa657f907a1829f3af98c46b146"
  },
  {
    "url": "tags/sonderkommando/index.html",
    "revision": "e8686bbdc5437618ee1bf4adaadfc787"
  },
  {
    "url": "tags/sophie-neveu/index.html",
    "revision": "f7d0a9cb95c241a7341c18ca5a187386"
  },
  {
    "url": "tags/sort-detective/index.html",
    "revision": "a9d67e53e01f064e475e25b3f1ddb357"
  },
  {
    "url": "tags/sortdetective.jar/index.html",
    "revision": "2ede30779db77d15566561792d96ac43"
  },
  {
    "url": "tags/sorting-methods/index.html",
    "revision": "7b68a3230ac3765d27212713a0bf59b4"
  },
  {
    "url": "tags/sortingexperiment/index.html",
    "revision": "e232dc610b10fef6f0d6aa74817ef83e"
  },
  {
    "url": "tags/sorty-app/index.html",
    "revision": "a89d744322dff980440ef6c94ea76133"
  },
  {
    "url": "tags/sorty-for-osx/index.html",
    "revision": "ac8d9ebfdde27d1ae30c4f2b4428264b"
  },
  {
    "url": "tags/sorty/index.html",
    "revision": "bf2d8d504e505a3e9d49467b76dce9ca"
  },
  {
    "url": "tags/sound-cloud/index.html",
    "revision": "93382ffa7b8bdc05e0bc30fcbdf0f5ce"
  },
  {
    "url": "tags/source-code/index.html",
    "revision": "ec227beb5bbb0de01490f9b477f6c9f2"
  },
  {
    "url": "tags/spanish/index.html",
    "revision": "0c2b1a8d27b4ceb033d2d2aa5e2d69b6"
  },
  {
    "url": "tags/spank-the-money/index.html",
    "revision": "86abfb67e1236b0f42bf43e76d27d8b4"
  },
  {
    "url": "tags/spank-the-monkey/index.html",
    "revision": "cccdc1dfdeb8a4246b859a119560a7e7"
  },
  {
    "url": "tags/speakdeck/index.html",
    "revision": "02559f680cc970d6fe04516f6deb7e68"
  },
  {
    "url": "tags/speakerdeck/index.html",
    "revision": "ad4a0614d0f8713083f9b888224300fb"
  },
  {
    "url": "tags/speech/index.html",
    "revision": "0ccbae18fca5c00d2a23fa39d9a51737"
  },
  {
    "url": "tags/speros-misirlakis/index.html",
    "revision": "2ef22085f3d8adfce71281e706fc2513"
  },
  {
    "url": "tags/spider/index.html",
    "revision": "d82ffc2052fac1174a55f9f37dbd38da"
  },
  {
    "url": "tags/spoiler/index.html",
    "revision": "5186844c8b8089a726b5e1a81b2857ce"
  },
  {
    "url": "tags/spoilers/index.html",
    "revision": "d60cb6d2754cd7232f8bc1f1357683a0"
  },
  {
    "url": "tags/spore/index.html",
    "revision": "b4823eaa8106bb4bea45eb5e38cbda54"
  },
  {
    "url": "tags/spotify-download-mp3/index.html",
    "revision": "7b2c45ed85aa30787964c42507b86d14"
  },
  {
    "url": "tags/spotify-download/index.html",
    "revision": "b080a59bf0bbabcf2132343a637299db"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "0c1b2a1fd84072ef11e687ec9ff435bd"
  },
  {
    "url": "tags/spreadsheet-app/index.html",
    "revision": "7bc03113433be11e99fb84150be94392"
  },
  {
    "url": "tags/stackathon/index.html",
    "revision": "dce9e90dc73331e6901aff7cd4a33462"
  },
  {
    "url": "tags/stackstore/index.html",
    "revision": "99774ee3c2466dc3c959e44c18e17826"
  },
  {
    "url": "tags/star-trek-monopoly/index.html",
    "revision": "acfe28bbfbf09f728965322a530d2867"
  },
  {
    "url": "tags/stardust/index.html",
    "revision": "8fdb1ab994c7e52efe2a2a04a8b2c42a"
  },
  {
    "url": "tags/starter-league/index.html",
    "revision": "4685895943d302cc0ae5dcbf515b2224"
  },
  {
    "url": "tags/static-ui/index.html",
    "revision": "0d522a43ab56d8f549d420ca0b80743d"
  },
  {
    "url": "tags/stem/index.html",
    "revision": "3626fb33ae3d824b3c6662ae10bb435d"
  },
  {
    "url": "tags/string/index.html",
    "revision": "d190a51e084e5f8a985b79de40580892"
  },
  {
    "url": "tags/strings-python/index.html",
    "revision": "19eea033a398f40033e8cf979bf99cb0"
  },
  {
    "url": "tags/student-experience/index.html",
    "revision": "3d0fafdb6df5e2c51bdc7fa0a91e117e"
  },
  {
    "url": "tags/student-id/index.html",
    "revision": "9d15061d0c7e0b04792484a57eefc458"
  },
  {
    "url": "tags/study-better/index.html",
    "revision": "e53abc8c5d5f980a462f5669382412b5"
  },
  {
    "url": "tags/study-guide/index.html",
    "revision": "2cee1f331f8ab6130767e9b0851834d1"
  },
  {
    "url": "tags/study-strategies/index.html",
    "revision": "aa6be3ee69c5ec1ff6ef264b2b7bc1ea"
  },
  {
    "url": "tags/study-time/index.html",
    "revision": "2f0b3e45dad89742e7ef723c39c09939"
  },
  {
    "url": "tags/studying-smart/index.html",
    "revision": "a24e9a9331c44d59387bcf760d4f203a"
  },
  {
    "url": "tags/stupid/index.html",
    "revision": "d27b84dfd72f83946c2710d3d12169d7"
  },
  {
    "url": "tags/sublime-text-3/index.html",
    "revision": "8a0fc2f2ab98b48e0ab0c9e5f3f17dec"
  },
  {
    "url": "tags/subtree/index.html",
    "revision": "35c0aedeb4b3cea2a534bdefe43e03d6"
  },
  {
    "url": "tags/summer-bootcamp/index.html",
    "revision": "18bc31153263e26d30b352626b10666f"
  },
  {
    "url": "tags/summer-program/index.html",
    "revision": "9adc4ee1f7d5bd3568b2746dd6d5f471"
  },
  {
    "url": "tags/summer/index.html",
    "revision": "3b36f139399833e305380a54903fc0d3"
  },
  {
    "url": "tags/super-shuttle/index.html",
    "revision": "9ec9ea9f3753589d4890ccc43cd56848"
  },
  {
    "url": "tags/super-smash-bros/index.html",
    "revision": "356be0023f330e98550d0c31f5ffb254"
  },
  {
    "url": "tags/superhero-js/index.html",
    "revision": "b8654ec44bc57991cd69afda0887fd63"
  },
  {
    "url": "tags/support/index.html",
    "revision": "c2733efc9a09558294febf1c915ad9b8"
  },
  {
    "url": "tags/surfing/index.html",
    "revision": "6b0bd1b5c9555afb60da46da5b2e5882"
  },
  {
    "url": "tags/surgeon/index.html",
    "revision": "9c8042d9fc2ba1eca0de32c30304c340"
  },
  {
    "url": "tags/switch-up/index.html",
    "revision": "c518d9c0dbf6bb1c791a53e0d0e24e7f"
  },
  {
    "url": "tags/switch/index.html",
    "revision": "7efe70855832ee19e240427e7ef1916d"
  },
  {
    "url": "tags/switchup/index.html",
    "revision": "864dcc6a4f3384210df969f40f355360"
  },
  {
    "url": "tags/system/index.html",
    "revision": "2f4481745b608a31f7ab308d21d915a2"
  },
  {
    "url": "tags/talkies/index.html",
    "revision": "f76cb227379e66310b296a22f356396e"
  },
  {
    "url": "tags/tallwood/index.html",
    "revision": "292502955aa63101856fb1ee08a59105"
  },
  {
    "url": "tags/tanzania/index.html",
    "revision": "344b732400378eb2c112b41a774bbc25"
  },
  {
    "url": "tags/tapia/index.html",
    "revision": "e62a24bb43ef73c97f47ec92d7181d19"
  },
  {
    "url": "tags/tech-cocktail/index.html",
    "revision": "46cbd3b418ed2cd055166b315d428e91"
  },
  {
    "url": "tags/tech-companies/index.html",
    "revision": "5538d15c9ef2dab6176c015c61c8acb2"
  },
  {
    "url": "tags/tech-conference/index.html",
    "revision": "ab31be75c90410186304ede90687ee44"
  },
  {
    "url": "tags/tech-diversity/index.html",
    "revision": "16d0d0b7d3f0e6f80069180755054e2d"
  },
  {
    "url": "tags/tech-talk/index.html",
    "revision": "aa0b21da615f7022b38d5e8a1d80f919"
  },
  {
    "url": "tags/techendo/index.html",
    "revision": "0947f8c55084d5ab581a2db1772b00c0"
  },
  {
    "url": "tags/technical-challenge/index.html",
    "revision": "d1005dc880d3479864239fcd1cd71a34"
  },
  {
    "url": "tags/technical-interview/index.html",
    "revision": "86758b360ef55d807432c4f332dee914"
  },
  {
    "url": "tags/technical-questions/index.html",
    "revision": "b9cb92644c06a784dce994dc88a5c002"
  },
  {
    "url": "tags/technological-dependence/index.html",
    "revision": "169ea78bf606179cecdb56539805bbd9"
  },
  {
    "url": "tags/technological-unemployment/index.html",
    "revision": "995806095fe96d51a7ca6d34a6f67c21"
  },
  {
    "url": "tags/technology/index.html",
    "revision": "257cd0629d0b7ec32105f4d2ac6000f8"
  },
  {
    "url": "tags/template/index.html",
    "revision": "1598480a29c7e911449c4790ecbe792e"
  },
  {
    "url": "tags/texas/index.html",
    "revision": "de7878f97ed959fc2ccdcc0561b839cd"
  },
  {
    "url": "tags/text-messaging/index.html",
    "revision": "09db3017db33a4477577992155bb0318"
  },
  {
    "url": "tags/the-grid/index.html",
    "revision": "17e48be9f75cf188da91b5d0895bfdf7"
  },
  {
    "url": "tags/the-stocks/index.html",
    "revision": "70a855a047fa19f49b0c058079c54de7"
  },
  {
    "url": "tags/the-test/index.html",
    "revision": "8acf6c30b50fa089656a0bdab18ba944"
  },
  {
    "url": "tags/theology/index.html",
    "revision": "283c64c393f5679cf4df6c70e303f2bd"
  },
  {
    "url": "tags/thinkful/index.html",
    "revision": "d9cb767c6479e3d04c658807d67a18f9"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "990a04aadb5f7c03b44be567a1b6ee2b"
  },
  {
    "url": "tags/tim-burton/index.html",
    "revision": "653cb3c1414f22bf4908c1bbdd3a4676"
  },
  {
    "url": "tags/timber/index.html",
    "revision": "c7d14a3b3e85b8794154873eda83c15b"
  },
  {
    "url": "tags/time-management/index.html",
    "revision": "edf0638fc5e14977e642af932dea41ef"
  },
  {
    "url": "tags/time-measurements/index.html",
    "revision": "b0849b45b4e073c325b97eb69a36f44a"
  },
  {
    "url": "tags/time-travel/index.html",
    "revision": "c019b8ee4cd1d39ccf1d976d6a13a4ca"
  },
  {
    "url": "tags/time/index.html",
    "revision": "0a7b265015e3b47ac9da504aeb76eb8f"
  },
  {
    "url": "tags/tips-and-tricks/index.html",
    "revision": "cc1cd01bb21720d99d6e53d78e27cc83"
  },
  {
    "url": "tags/tips/index.html",
    "revision": "9ded3ff838c367a92ffd0148a37b3532"
  },
  {
    "url": "tags/tncc/index.html",
    "revision": "dcf355e6c4bb1bbc114cc0c3169f8d48"
  },
  {
    "url": "tags/todo-app-laravel/index.html",
    "revision": "ed151d9f7e4a165d377b8b5d48a6681f"
  },
  {
    "url": "tags/todo-app/index.html",
    "revision": "90a043663a761578254edfea4c210239"
  },
  {
    "url": "tags/todo/index.html",
    "revision": "88adf99beb8ed50a761ae57c15764610"
  },
  {
    "url": "tags/tom-hanks/index.html",
    "revision": "f447a18b2797130acf32e21df9409149"
  },
  {
    "url": "tags/toolbar/index.html",
    "revision": "6379581f545b43fc2e80502ac67329b9"
  },
  {
    "url": "tags/topcoder/index.html",
    "revision": "1864af4b8862a55fab10270471246c0f"
  },
  {
    "url": "tags/toronto/index.html",
    "revision": "3c558aac48f2968c2e72786c4b1f78c9"
  },
  {
    "url": "tags/tortuga/index.html",
    "revision": "ae087f8638ce1ea57dc70714cda6dcd7"
  },
  {
    "url": "tags/towers-of-hanoi/index.html",
    "revision": "9564ecf8b6ec6a0627a68ac5cf2fcb9b"
  },
  {
    "url": "tags/trampoline/index.html",
    "revision": "740ee24546e4ccfd53f15b02837320a6"
  },
  {
    "url": "tags/transplant/index.html",
    "revision": "31245a7458c2cbf4deca24f73287ab29"
  },
  {
    "url": "tags/transportation/index.html",
    "revision": "83053a84bd39bf9d0050681dfb58373f"
  },
  {
    "url": "tags/traumatized/index.html",
    "revision": "d317f49cbd82370d062e3f12a06669b8"
  },
  {
    "url": "tags/travel/index.html",
    "revision": "372eac983bd9dfb95fe6bf855c4f0f2e"
  },
  {
    "url": "tags/traversal/index.html",
    "revision": "d5d855907d6a69cd9eabfaeff4b71d16"
  },
  {
    "url": "tags/travis-ci/index.html",
    "revision": "7d2082001b94f0a0a0c4b55196ef80e2"
  },
  {
    "url": "tags/tree/index.html",
    "revision": "682b72b2648989f29766898d243fd79d"
  },
  {
    "url": "tags/treehouse/index.html",
    "revision": "dad6e7f4ffa2d0f5364355625494d77a"
  },
  {
    "url": "tags/trial-and-death/index.html",
    "revision": "84a0b85ae614b6699667d0f92528e9a8"
  },
  {
    "url": "tags/tricks/index.html",
    "revision": "377004a7cc7a54d9778e78c4f1e007ee"
  },
  {
    "url": "tags/trip-planner/index.html",
    "revision": "a6df4830452a84e737f8467dc7257103"
  },
  {
    "url": "tags/tristan-walker/index.html",
    "revision": "859fb94269525313415fa4de5ae78f3f"
  },
  {
    "url": "tags/tristan/index.html",
    "revision": "e29950fe208952759dd2c3dfc4fab01c"
  },
  {
    "url": "tags/tron-legacy/index.html",
    "revision": "05a4fbee40fdd5fde7810312accdb5c5"
  },
  {
    "url": "tags/tuition-price/index.html",
    "revision": "e41599d399ca316c776a9e24fafe2363"
  },
  {
    "url": "tags/tumblr/index.html",
    "revision": "5475d6293e064bffb0e58f076008af0a"
  },
  {
    "url": "tags/tutorial/index.html",
    "revision": "cf899d5a4b8cbf0c1cde4250ae0cb5ee"
  },
  {
    "url": "tags/tv-shows/index.html",
    "revision": "d3cb1895c136c9f20a258950c605dbd5"
  },
  {
    "url": "tags/tweet/index.html",
    "revision": "7323aa951fe3dadc70193c96dd309375"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "ee41f6c1ef598231642a6e3272bafa3a"
  },
  {
    "url": "tags/typeform/index.html",
    "revision": "ee8999f04c6313aff3dea2c25a5dc98f"
  },
  {
    "url": "tags/typing.io/index.html",
    "revision": "c6ff690e6822b8dee08d82e4bf0a4623"
  },
  {
    "url": "tags/typography/index.html",
    "revision": "649153f71bea304c5d980ea88f586ddc"
  },
  {
    "url": "tags/u/index.html",
    "revision": "3f07f2a2ff840e689531ffea0cf1e8e0"
  },
  {
    "url": "tags/ubersicht/index.html",
    "revision": "00e802030439cbc399faf40232084d0d"
  },
  {
    "url": "tags/ui-design/index.html",
    "revision": "9737a34a75afa531be5a6a43fdcc77af"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "c1853cfb0521491fa2b7a3ec3d647053"
  },
  {
    "url": "tags/ui/ux/index.html",
    "revision": "b0811b979eece95a7317f378828eb457"
  },
  {
    "url": "tags/ulyssess/index.html",
    "revision": "a33c235e04fe73048274d16b858d8f4c"
  },
  {
    "url": "tags/unarmed/index.html",
    "revision": "e31426f2028576ae08bf8f1ec2b0c5e6"
  },
  {
    "url": "tags/unbaptized/index.html",
    "revision": "79a4223cfef65ebd0464d6e8fcd4e927"
  },
  {
    "url": "tags/undergrad/index.html",
    "revision": "029b85a52872ffa4891ada5b9b21a4df"
  },
  {
    "url": "tags/undergraduate-conference/index.html",
    "revision": "ccf40629d3fff291bac29e3281da52dd"
  },
  {
    "url": "tags/underscore/index.html",
    "revision": "cfb505c3aa5368500a0483f93c4f916c"
  },
  {
    "url": "tags/unforeseen-destiny/index.html",
    "revision": "414508a1f3df48f405cf54159c5066ad"
  },
  {
    "url": "tags/union-city/index.html",
    "revision": "9d3dc943ddc89b56d87d9dcabe04c682"
  },
  {
    "url": "tags/universe/index.html",
    "revision": "090fc60c83d3bc7cf52f4ad796ade2f6"
  },
  {
    "url": "tags/uno/index.html",
    "revision": "17a6bd06c22afe552c1dc7304121db8e"
  },
  {
    "url": "tags/unsplash/index.html",
    "revision": "ef833e971491857af8040c6e96a6e6e2"
  },
  {
    "url": "tags/ut-austin/index.html",
    "revision": "95819f71e2db9fed1554968f5d54dc22"
  },
  {
    "url": "tags/ux/index.html",
    "revision": "ecfe234b1211fd2bc74ddfaa41f13093"
  },
  {
    "url": "tags/va-acm/index.html",
    "revision": "1ac12a64a3b58fee69314247f4f3be73"
  },
  {
    "url": "tags/va-governor-schools/index.html",
    "revision": "559ce3eb0652a068f2fea33a58511aeb"
  },
  {
    "url": "tags/variables/index.html",
    "revision": "2e2a65cc322503747972778c2c7f9ea1"
  },
  {
    "url": "tags/vccs/index.html",
    "revision": "521b1c2c82821a59748ed4f345e7decd"
  },
  {
    "url": "tags/vegan-candy/index.html",
    "revision": "e3c74fddbf1dbdad511346ca0a074cf3"
  },
  {
    "url": "tags/vegan/index.html",
    "revision": "9af90568b0e6f3fd79254b22000e410c"
  },
  {
    "url": "tags/vegetarian/index.html",
    "revision": "04bd057e9c4e3d4ac4f5050716e087f0"
  },
  {
    "url": "tags/venmo/index.html",
    "revision": "69c20dc4f6d4514a96138588b1344fe3"
  },
  {
    "url": "tags/very-nice-sites/index.html",
    "revision": "bed0e6626c1de00eaeb453c1f5734925"
  },
  {
    "url": "tags/victoria/index.html",
    "revision": "363edf40a7c13d8c87d5a35e8c085eac"
  },
  {
    "url": "tags/video-games/index.html",
    "revision": "46e6a7f16971e7ad0d31381794a3c6ad"
  },
  {
    "url": "tags/video/index.html",
    "revision": "c2ac65b6292b04bf871f802abf58b5c8"
  },
  {
    "url": "tags/videogames/index.html",
    "revision": "13f04b116a480e23c5785fc83102878b"
  },
  {
    "url": "tags/vimeo/index.html",
    "revision": "facda4dfdc1c059794ba9168fb5bc443"
  },
  {
    "url": "tags/virginia-beach/index.html",
    "revision": "13fac3cd5cc1fdf32bb3ef4564fd9db4"
  },
  {
    "url": "tags/virginia/index.html",
    "revision": "c56595b84abd806c9aafd5490a0e9adb"
  },
  {
    "url": "tags/visual-hierarchy/index.html",
    "revision": "bd0c995fb3b660888d9f55c21e142324"
  },
  {
    "url": "tags/walk/index.html",
    "revision": "7295909959ee32007ac25fdf70c16478"
  },
  {
    "url": "tags/walking-dead/index.html",
    "revision": "fce4b1d0d3fa1fd2cb55ac1131b89157"
  },
  {
    "url": "tags/walkthroughs/index.html",
    "revision": "108e7aec2716c32e619a5a4744106f78"
  },
  {
    "url": "tags/war/index.html",
    "revision": "16bbf6ba15debd87c49c9601b4e25538"
  },
  {
    "url": "tags/wary-of-friends/index.html",
    "revision": "3ddf5e4df963fe4a63fe26c1ced4695f"
  },
  {
    "url": "tags/waves-of-tech/index.html",
    "revision": "c2c35d816fe246f77898016d29dc9597"
  },
  {
    "url": "tags/wayne/index.html",
    "revision": "4a119be0d0828521fee9f935f6d6487b"
  },
  {
    "url": "tags/weaknesses/index.html",
    "revision": "93809c4d8d520a106142d09c37ea012e"
  },
  {
    "url": "tags/weather/index.html",
    "revision": "438c2da5bf273051704a0e3518d05dc7"
  },
  {
    "url": "tags/web-crawler/index.html",
    "revision": "142ed88f8b4d9e80adcc8cf46b901850"
  },
  {
    "url": "tags/web-design-talk/index.html",
    "revision": "dddbaaabd9135d9f2b5943e1f86cf96d"
  },
  {
    "url": "tags/web-design/index.html",
    "revision": "7761ce22bcd4d0aeec2d1323abf592f4"
  },
  {
    "url": "tags/web-dev/index.html",
    "revision": "d8f9785e779b6635daa572c40ecb4178"
  },
  {
    "url": "tags/web-development-bootcamp/index.html",
    "revision": "f98e00f965947f7120e7d74548cce3d2"
  },
  {
    "url": "tags/web-development-hawaii/index.html",
    "revision": "43c6f1175d1eac19f1ebcea2f6c255c7"
  },
  {
    "url": "tags/web-development/index.html",
    "revision": "54b821147cbefc5e3092a5a06daa3634"
  },
  {
    "url": "tags/web-store/index.html",
    "revision": "380775df17207d724124ec33acd63ceb"
  },
  {
    "url": "tags/websites/index.html",
    "revision": "29f01d5b109c3f7307c30241dc74e7b3"
  },
  {
    "url": "tags/week-2/index.html",
    "revision": "7963d6487c756f28e23cdc1af97af92e"
  },
  {
    "url": "tags/week-3/index.html",
    "revision": "cb6ad52d8e95785946a6a2940f337bbf"
  },
  {
    "url": "tags/week-4/index.html",
    "revision": "c9f957ebda790d73841e45b37e76b3ab"
  },
  {
    "url": "tags/week-6/index.html",
    "revision": "ad66e523c4a4692e0e8816869c88c029"
  },
  {
    "url": "tags/westin-copley/index.html",
    "revision": "61a4474987d4516daa8ccf63ac7ff0cb"
  },
  {
    "url": "tags/whales/index.html",
    "revision": "1f65a979b76b2bf521bcbe186f984f7c"
  },
  {
    "url": "tags/what-i-use/index.html",
    "revision": "d4b65f2567ddb0244382177e03003008"
  },
  {
    "url": "tags/whiteboard/index.html",
    "revision": "a30e106b45c39dec0985970b8c93071f"
  },
  {
    "url": "tags/wii-sports/index.html",
    "revision": "1a62d7363e2a0d7699ab0a46b7268fd3"
  },
  {
    "url": "tags/wii/index.html",
    "revision": "f979b802a7ca2516e0bf5fb5320853be"
  },
  {
    "url": "tags/wikistack/index.html",
    "revision": "ede6a0a82e8f0db7fa839c8d29514a59"
  },
  {
    "url": "tags/wiles.dk/index.html",
    "revision": "a3f28bec5c4f9dd6544b13b8e5418cae"
  },
  {
    "url": "tags/wilson/index.html",
    "revision": "471270434c7bcd727776e0e3b4a17aee"
  },
  {
    "url": "tags/winter-conference/index.html",
    "revision": "2d50ff444b77399d98664bb00cc7f793"
  },
  {
    "url": "tags/winter-storm/index.html",
    "revision": "2d52073f248876c507f91d3317dfa70f"
  },
  {
    "url": "tags/wish-list/index.html",
    "revision": "9a5c6517d5b94b4b8d4c46a92aa59ea3"
  },
  {
    "url": "tags/witchcraft/index.html",
    "revision": "78376ad0f338d8e51a2edb9ad1816b49"
  },
  {
    "url": "tags/women-who-code/index.html",
    "revision": "d60ded1f6977d91b01a90026175ec0f7"
  },
  {
    "url": "tags/word/index.html",
    "revision": "3efb9b4ec1e05e22abac4437670e3e5b"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "2edc2aee4b5544fbe44afd1e9265414a"
  },
  {
    "url": "tags/work-routines/index.html",
    "revision": "d3370565b2a74c94a4bf20d3ccc869e8"
  },
  {
    "url": "tags/work/index.html",
    "revision": "24a7dcb4b623c0eed2922754ce02e82f"
  },
  {
    "url": "tags/workforce/index.html",
    "revision": "f18cf60ba81a9e4f44443cfb34ae5f09"
  },
  {
    "url": "tags/working-harder/index.html",
    "revision": "44d865a3765349b037580dc0d1f3ebc5"
  },
  {
    "url": "tags/working-smarter/index.html",
    "revision": "5107c42ff8ddd39644a8c3bec24e3305"
  },
  {
    "url": "tags/wrath/index.html",
    "revision": "71195f4bade2ad9f3429e795de174be7"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "e4d99ffaaaf108a39149251c4bd0495e"
  },
  {
    "url": "tags/yelp/index.html",
    "revision": "188acfe3a500f73cc17dcb0c657dbd9d"
  },
  {
    "url": "tags/yeti/index.html",
    "revision": "d4febdb281f10a55a984ea01d4e61ab2"
  },
  {
    "url": "tags/yield-rate/index.html",
    "revision": "0b9f63cb8c21427feee4fc02e92d4764"
  },
  {
    "url": "tags/yoink/index.html",
    "revision": "de8be84dbd29057af66e1bee49eef5db"
  },
  {
    "url": "tags/yosemite-launchpad-reset/index.html",
    "revision": "11766cf24786d7d592e7a49f0fe65540"
  },
  {
    "url": "tags/yosemite-launchpad/index.html",
    "revision": "da499586c60a0d41f8f74a802c33407e"
  },
  {
    "url": "tags/yosemite/index.html",
    "revision": "324dc02331a5a04f072ea5c0b7d28bea"
  },
  {
    "url": "tags/youtube-dl/index.html",
    "revision": "7b94e5ec0f5d8f5c3350d676195eb321"
  },
  {
    "url": "tags/youtube/index.html",
    "revision": "37d51a4cef05a68471755feb3336f26d"
  },
  {
    "url": "tags/yvaine/index.html",
    "revision": "863dd73217c41a24306099ada9fd5c6e"
  },
  {
    "url": "tags/zeta/index.html",
    "revision": "3204980d0f2b38d2697400357eeca51b"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "fvcproductions",
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("/");workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/, workboxSW.strategies.cacheFirst({
  "cacheName": "fvcproductions-image-cache",
  "cacheExpiration": {
    "maxEntries": 20
  }
}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdn.embedly.com\/widgets\/platform.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
workboxSW.router.registerRoute(/https:\/\/cdn.onesignal.com\/sdks\/OneSignalSDK.js/, workboxSW.strategies.staleWhileRevalidate({}), 'GET');
