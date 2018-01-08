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
    "revision": "0fbdd31bb5ef6f7f05796dc782494503"
  },
  {
    "url": "2009/09/22/ghent-school/index.html",
    "revision": "cfd603107be9368830750c329932907a"
  },
  {
    "url": "2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "d00c21662e38c99b8a8a9dcadad51d08"
  },
  {
    "url": "2010/05/12/desiring-the-casual-/index.html",
    "revision": "decfc8feb8b51152344b104ea8c41d56"
  },
  {
    "url": "2010/08/03/enders-game---book-review-/index.html",
    "revision": "9f4305cba32106b3aba8c2e90dabf52c"
  },
  {
    "url": "2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "ef20048d64fd0568a274c81d1db8444a"
  },
  {
    "url": "2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "ef54c12488ae67941d57a51645b711f1"
  },
  {
    "url": "2011/08/07/isce-2011/index.html",
    "revision": "673ac86f8ca2a91a5518c428c780fb1c"
  },
  {
    "url": "2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "e8bb0ff6174f154761bad57dffbb9491"
  },
  {
    "url": "2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "ca762073d37860e16101e2d0d364aa29"
  },
  {
    "url": "2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "344cc30f30cc38d053fa9c3d7c0f5604"
  },
  {
    "url": "2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "6fffe62f46e0c36a66f3630243d8fe16"
  },
  {
    "url": "2012/03/01/stardust---book-review-/index.html",
    "revision": "d6f73a7e35138ca3d88aa016f62e3854"
  },
  {
    "url": "2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "58a917708558a28060034a0acd234e10"
  },
  {
    "url": "2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "883d1fa028c4f498db2bb35397f73f7c"
  },
  {
    "url": "2012/08/10/odu-vmasc/index.html",
    "revision": "34a9868dc613683842e0d1d3601f076e"
  },
  {
    "url": "2012/08/14/school-for-field-studies/index.html",
    "revision": "652cf9d254fa119b911b65f030563237"
  },
  {
    "url": "2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "19dc169c43757a08abdf32dd7d7d2b91"
  },
  {
    "url": "2013/06/13/maury-high-school/index.html",
    "revision": "a322b3c3435482374392debea82fed1c"
  },
  {
    "url": "2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "faaa4ef9eeb8a288929b0f120f911b0d"
  },
  {
    "url": "2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "be2af3ca71c69ef0ef1960792485550d"
  },
  {
    "url": "2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "af24de3c1ad06cb50e9803889afef62b"
  },
  {
    "url": "2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "7671042609565f858893254d299426f6"
  },
  {
    "url": "2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "3a47d9adc15f304dbbe0fa70f2e2e0bd"
  },
  {
    "url": "2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "9b611816642a3eba44e4ffeefbfae41c"
  },
  {
    "url": "2013/08/02/islc-2013/index.html",
    "revision": "ecec2172a170d3f4c8ea9da8b6324d1f"
  },
  {
    "url": "2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "2587e27636c1045d962fbda9b1d2f7c2"
  },
  {
    "url": "2013/08/03/potc---chest-riddle-/index.html",
    "revision": "8270a48fb6faa865ac3a5c7976cfe08d"
  },
  {
    "url": "2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "139add343d5a1ee1cac4f1393b16db9c"
  },
  {
    "url": "2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "ead2c950e8c652cd826a33aeb3ed17d1"
  },
  {
    "url": "2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "e6d18ae176b934dd1a740322f1716ae7"
  },
  {
    "url": "2013/09/20/c-bits---getting-started/index.html",
    "revision": "f8642110169efcd38083db8ec39b020f"
  },
  {
    "url": "2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "9cefdd1866bffed18bca59d5f406438c"
  },
  {
    "url": "2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "6c283fad21ec8ab3b5bad5500ac00a9d"
  },
  {
    "url": "2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "c7d1a920c20969b9eccb6447997cd5f9"
  },
  {
    "url": "2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "345e41984b7d961f30a78be8bd20a169"
  },
  {
    "url": "2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "fb5099cf963f617117015dd17a49b0f3"
  },
  {
    "url": "2014/02/21/working-smarter-not-harder/index.html",
    "revision": "89957a422b80a188e0a0dddb2300051f"
  },
  {
    "url": "2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "2a0bad6c6e2b8f63c0fe75079d745336"
  },
  {
    "url": "2014/03/03/ah-life./index.html",
    "revision": "0ceaf15eca7ed9e2272df44c34866355"
  },
  {
    "url": "2014/03/03/granny-said.../index.html",
    "revision": "293e131284a4085c5f930bf3fa2860fa"
  },
  {
    "url": "2014/03/04/the-best-50-insults/index.html",
    "revision": "b4e11bcf8699aee5364e57471c7ce98b"
  },
  {
    "url": "2014/03/12/20-laws-of-power/index.html",
    "revision": "0bec27e42dbc017e1b2936df73cbfca7"
  },
  {
    "url": "2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "7ff4d5eadb08e3b147355f99e24698d3"
  },
  {
    "url": "2014/03/12/java-bits---getting-started/index.html",
    "revision": "10aaae0c659896096dac7bbd9da0ca2b"
  },
  {
    "url": "2014/03/12/python-bits---getting-started/index.html",
    "revision": "7bf2bea9149225af54163c126608298e"
  },
  {
    "url": "2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "7bb9eb410eda30cb4f6376e9607741f1"
  },
  {
    "url": "2014/04/07/texting-while-driving/index.html",
    "revision": "c4052715a143751e46f02cda37c79edc"
  },
  {
    "url": "2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "01790f062243ea6e74d42273ccd345a1"
  },
  {
    "url": "2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "e78813b9214e8edac51801636115b48c"
  },
  {
    "url": "2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "d8d5ed38ba6a97a5cd937cbe44b5d068"
  },
  {
    "url": "2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "26ffc30c22109a63ee8a5e942ad85a13"
  },
  {
    "url": "2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "4d4aa861f73e9e29c03dad384d0d43c0"
  },
  {
    "url": "2014/08/09/flavours-themes/index.html",
    "revision": "33ed8aeb9ddd9b71680548cf48fc60b6"
  },
  {
    "url": "2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "c4a0cb0e182fabfa5787031ba660b300"
  },
  {
    "url": "2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "5814013958be6cf0600cb4420f38c82c"
  },
  {
    "url": "2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "8be7b1fc9584d290c692c4d847f1f17e"
  },
  {
    "url": "2014/08/16/stars-celebration/index.html",
    "revision": "7b906072951e351b9bd86398c4654f19"
  },
  {
    "url": "2014/08/21/a.i.-international/index.html",
    "revision": "06c39b27aa23fef8192c765c9309af7b"
  },
  {
    "url": "2014/09/10/giving-back/index.html",
    "revision": "f2c9185ac3cc3823cdd18dcfbf4ff7fd"
  },
  {
    "url": "2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "0ce5acc066c1d1e1a0be2be7164f59f8"
  },
  {
    "url": "2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "78ec8a2e55889bec86a95053f3c296f1"
  },
  {
    "url": "2014/09/22/review---limbo/index.html",
    "revision": "13dbda63a18aa8ecb985e0e8d8acd09e"
  },
  {
    "url": "2014/10/01/cshu/index.html",
    "revision": "c8e3ff0928d84e69d9fd762bdf67a673"
  },
  {
    "url": "2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "d8b25122dba8f377a20a195c360f9b17"
  },
  {
    "url": "2014/10/17/long-lighthearted-lists/index.html",
    "revision": "2a87bd49df12669693e473e5f83e05cc"
  },
  {
    "url": "2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "bf51fc5aa52525623bd864fdc86394b1"
  },
  {
    "url": "2014/10/26/dc-hack/index.html",
    "revision": "6a81b098b074fb9424d039d4e362439c"
  },
  {
    "url": "2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "80da4483248c8016cbe159a87ea8a9ca"
  },
  {
    "url": "2014/11/10/study-guide---linked-lists/index.html",
    "revision": "c0572568b516295346917dde495709af"
  },
  {
    "url": "2014/11/13/yes-hair-/index.html",
    "revision": "dd33584d5e83b5e9bccd592ec76c317c"
  },
  {
    "url": "2014/12/03/binary-trees--recursion/index.html",
    "revision": "97036d3ddb528cc7a1c41db0a6585a8d"
  },
  {
    "url": "2014/12/17/inkling-1.1/index.html",
    "revision": "f9f7d5f5752c7fbf9a8d5a3b01cbb29c"
  },
  {
    "url": "2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "2e5c5301e18a5509a770dc7706226497"
  },
  {
    "url": "2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "9bed93cf9c84f64daabf4cbf8ebcda89"
  },
  {
    "url": "2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "ad774d2155044b4c0394120ac201b95c"
  },
  {
    "url": "2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "51de908a62737a9a38b9845770b06c7d"
  },
  {
    "url": "2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "7afd5addffd7f0f04fadd26fa721e93c"
  },
  {
    "url": "2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "0b851a45cfc74053fcce9dcbb427a8d2"
  },
  {
    "url": "2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "1b699e855ea93a0393608ed966e6771a"
  },
  {
    "url": "2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "a4eb43b6d8aa1a5be2e30073b92dd517"
  },
  {
    "url": "2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "a4ed8be27d8ea763c1a4c6b841a34c25"
  },
  {
    "url": "2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "6cae80117159ca9ed7045932b14f1953"
  },
  {
    "url": "2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "12af912a8a9e0da49b102c2419be4ddb"
  },
  {
    "url": "2015/01/06/interview-with-coding-house/index.html",
    "revision": "c34ed4c03ef3df81e0e744be9b5218d3"
  },
  {
    "url": "2015/01/06/interview-with-designation/index.html",
    "revision": "529f35eb56aada95f0bd7c3adcc85218"
  },
  {
    "url": "2015/01/06/interview-with-devleague/index.html",
    "revision": "c2c5b06c248ce74b9987f0fd4e61cdec"
  },
  {
    "url": "2015/01/14/interview-with-makersquare/index.html",
    "revision": "8d09ba67eaa4d8016f3b8fd71c42b90e"
  },
  {
    "url": "2015/01/30/aaai-2015/index.html",
    "revision": "8495cc6d60572a3ebfc407d6b0278ab4"
  },
  {
    "url": "2015/01/30/adventures-with-aaai/index.html",
    "revision": "a6f6bbb3c21c2428c0ce2a01065f9947"
  },
  {
    "url": "2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "eb23095288d214b7e726bb598f9758ef"
  },
  {
    "url": "2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "6c66176ef544dae2bf15031b528affe3"
  },
  {
    "url": "2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "439a209994b9bf44d340f81a506d6835"
  },
  {
    "url": "2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "26b2e12c8c767801a1858b1b23b68751"
  },
  {
    "url": "2015/02/15/that-tapia-conference/index.html",
    "revision": "961a22331efdc342d91d3770a99e255a"
  },
  {
    "url": "2015/02/21/tapia-2015/index.html",
    "revision": "2740adee3c5998359f7db84078d795c0"
  },
  {
    "url": "2015/03/01/jeopardy-template-/index.html",
    "revision": "68e27fa02de86efa7253702941446657"
  },
  {
    "url": "2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "753f4958b199be750d14b9ecd8e43156"
  },
  {
    "url": "2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "c33361de88534ab9d26aae39ec58ba7b"
  },
  {
    "url": "2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "d7cd498ee051d19716f5c06166700a24"
  },
  {
    "url": "2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "c5ed6a1d17ce6ea90d865c206d4142b9"
  },
  {
    "url": "2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "e8520ca3fe2783b3fd7f68dda985ec5d"
  },
  {
    "url": "2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "6e89cefb925adc5b3d4a1d27779c1d97"
  },
  {
    "url": "2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "c3b08a5e2556dab5277afe95cc4bee0f"
  },
  {
    "url": "2015/04/17/vsgc-2015/index.html",
    "revision": "be178285b9460288bf83f8687ad4319d"
  },
  {
    "url": "2015/04/18/sort-detective---solution-/index.html",
    "revision": "c131cd52a07f5889606b22fae49a9cf1"
  },
  {
    "url": "2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "ba300acdecf9a1ec7b0d0dfb38e4391e"
  },
  {
    "url": "2015/04/23/a.i.-movies-/index.html",
    "revision": "701fa5f3bc132f42e33614e598d068f6"
  },
  {
    "url": "2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "40291eb8088d9af2c6c7b1a1aa9e9a9b"
  },
  {
    "url": "2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "8d3a73bdb85a1a940ee36dc0175eb957"
  },
  {
    "url": "2015/04/30/bebop.me-/index.html",
    "revision": "00183139cfc795d39cdb49d1af5ee4bb"
  },
  {
    "url": "2015/05/17/ameot-/index.html",
    "revision": "bd25bb2ca63cf4f49615a8ce0ae98d29"
  },
  {
    "url": "2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "f567dca50a6a503299ae2c7d000fb7d6"
  },
  {
    "url": "2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "46b7693641b2c8213aec006b9b6c35a7"
  },
  {
    "url": "2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "275fe66ce5d31a21c821a7ed826a146c"
  },
  {
    "url": "2015/05/26/the-guessing-game-️/index.html",
    "revision": "338b8b4d388aaedc3b4bfd4fcc070af5"
  },
  {
    "url": "2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "d9dea4f68794d11904951b90b6cf6207"
  },
  {
    "url": "2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "7a779acc8030ea81032816aff1b8ff39"
  },
  {
    "url": "2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "5fd0961a9716f28eac305175e891cf50"
  },
  {
    "url": "2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "fee9124efeaa668a7e57678bda785c81"
  },
  {
    "url": "2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "daf90f4c4faf8dfc4708aa0186201549"
  },
  {
    "url": "2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "ef3157dee290314bf1166e055cf46501"
  },
  {
    "url": "2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "719d0c467e49348845423f40eb75539c"
  },
  {
    "url": "2015/07/25/sally-conference/index.html",
    "revision": "f67de117654c1d5bc8ef5e85b7ae0cdd"
  },
  {
    "url": "2015/08/05/robopocalypse-/index.html",
    "revision": "c4d3a42895283a5d03e44f301aa29252"
  },
  {
    "url": "2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "c59ffc884ef0d9821094ca3b35c9de10"
  },
  {
    "url": "2015/08/11/rankme-/index.html",
    "revision": "463a17f69ebcb83dc147e402ee00f7ae"
  },
  {
    "url": "2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "eff517eb817904000807e02e812810b1"
  },
  {
    "url": "2015/08/20/readme-template-for-github-/index.html",
    "revision": "897a3cc160af02d968d500c51921ef8d"
  },
  {
    "url": "2015/08/26/hiredot-/index.html",
    "revision": "85ee1d50aa6c89fc6bc6322ac8f99a6e"
  },
  {
    "url": "2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "10f755ae4bb719c628afef5ce26c630b"
  },
  {
    "url": "2015/09/25/discover-goldman-sachs/index.html",
    "revision": "c9768c59d1359852cf8ba50454e77893"
  },
  {
    "url": "2015/10/09/designlab-submissions-/index.html",
    "revision": "8b6fcee7f70eda11e8deaae8f610ee89"
  },
  {
    "url": "2015/10/09/designlab/index.html",
    "revision": "8acc2dda829523b4f3b89c227ccb25d3"
  },
  {
    "url": "2015/10/20/andre-smith/index.html",
    "revision": "dd6f7aa5206b10e55d99f3f154c138ef"
  },
  {
    "url": "2015/10/21/my-designlab-experience-/index.html",
    "revision": "35b2c4e1b7eb8a88e049645a3235a6c5"
  },
  {
    "url": "2015/10/24/hack-the-vote-/index.html",
    "revision": "6d2f7362def6a0e58cbed66d0ab84020"
  },
  {
    "url": "2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "f6900227eb61c2ab96836500cdd169d2"
  },
  {
    "url": "2015/11/11/meetups-nearby-/index.html",
    "revision": "831d6f790c19c83f45e39a51d6f10ae1"
  },
  {
    "url": "2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "9842f92e897f36cd69c14ed0630c28d5"
  },
  {
    "url": "2015/11/14/hr-devfest/index.html",
    "revision": "cdc3a5bad584de4556329955f66be95e"
  },
  {
    "url": "2015/11/15/aaai/index.html",
    "revision": "8d38916ac627c690be87d133217f643b"
  },
  {
    "url": "2015/11/15/stars-computing-corps/index.html",
    "revision": "332a466bb8f60ae625a42e70d0d22589"
  },
  {
    "url": "2015/11/20/discover-accenture/index.html",
    "revision": "405e9f7c2c31ee62bbd7b8f469b9a7af"
  },
  {
    "url": "2015/12/02/dear-holberton-/index.html",
    "revision": "e5f8c1c3e569db67662096ffc7878bae"
  },
  {
    "url": "2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "e38109f76b6169288bea1ca960fba6ab"
  },
  {
    "url": "2015/12/10/ai-choo-ashe/index.html",
    "revision": "2c4bd81e0c19e24b93233281a068392f"
  },
  {
    "url": "2015/12/12/kelli-white/index.html",
    "revision": "f74925082a107966ca862d5d7d77cdf1"
  },
  {
    "url": "2015/12/13/hour-of-code/index.html",
    "revision": "f9db997192c0e95f97e2119718d2dbe6"
  },
  {
    "url": "2015/12/18/alex-bradshaw/index.html",
    "revision": "93bc89e565e10b49c4265f46c004e215"
  },
  {
    "url": "2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "1123f36d01b71ff083749da8960933eb"
  },
  {
    "url": "2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "67a2171417820b07409240984fa5ca82"
  },
  {
    "url": "2016/01/05/kimberly-logsdon/index.html",
    "revision": "6e0b42d29e087771b034b41276f28baa"
  },
  {
    "url": "2016/01/11/meetup-dice-/index.html",
    "revision": "c18492d9203c0fb0a33e3b3df2d4efc4"
  },
  {
    "url": "2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "18fc09826c308af1e07bbf69baa24418"
  },
  {
    "url": "2016/01/18/built-in-norfolk/index.html",
    "revision": "b4384d53d352ba1a49eca4f3cb5404df"
  },
  {
    "url": "2016/01/18/norfolk.js-meetup/index.html",
    "revision": "ce77ba6b105be7603e2419b88930fee8"
  },
  {
    "url": "2016/01/31/hoya-hacks/index.html",
    "revision": "fb6463692547b97f3c5e240c3448f4a6"
  },
  {
    "url": "2016/01/31/life-at-home-/index.html",
    "revision": "838e7dc19e8fa5b26d911004523bde50"
  },
  {
    "url": "2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "07183381ac61e55ed0ed97d0e0b7ce81"
  },
  {
    "url": "2016/02/05/8020-software-consulting/index.html",
    "revision": "4adfdda1774f88940aec61f66f8f95d1"
  },
  {
    "url": "2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "ea1a84fc78c8d203fc987e4ac7231674"
  },
  {
    "url": "2016/02/05/hacku-4/index.html",
    "revision": "cd9b5257f3932684cbd15391293854d4"
  },
  {
    "url": "2016/02/12/acm/index.html",
    "revision": "a0f2f43a35f01cb137bbcb80a4f2b42c"
  },
  {
    "url": "2016/02/14/treehacks/index.html",
    "revision": "7dff30717bf1339e687f0b11f1aedb54"
  },
  {
    "url": "2016/02/17/developerweek/index.html",
    "revision": "520c2c1f24f809e23b8f0ed062eac59f"
  },
  {
    "url": "2016/02/23/react.js-conf/index.html",
    "revision": "66ebe55850a90439ed7903e6583430dd"
  },
  {
    "url": "2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "7db81ee70d8a8f08c1722b5bd56f6840"
  },
  {
    "url": "2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "5b58998e6955abe041d6b0cdbd868f4c"
  },
  {
    "url": "2016/03/10/fluent-conference/index.html",
    "revision": "b12c921baa79fbb56f0adf06e42b6a59"
  },
  {
    "url": "2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "c69075b51871ee24fc2490a1fb6a4584"
  },
  {
    "url": "2016/04/01/angel-riera/index.html",
    "revision": "4cf0aafb45520c0e4738d9e9c079366d"
  },
  {
    "url": "2016/04/07/mike-jonas/index.html",
    "revision": "50e750e1cabf2f2e9916e119ca54ad03"
  },
  {
    "url": "2016/04/09/innovation-hackathon/index.html",
    "revision": "cfbc5f1833a100334e7970227f576876"
  },
  {
    "url": "2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "b7630db1e075090581a14d3785c26c82"
  },
  {
    "url": "2016/04/30/schools-out-️/index.html",
    "revision": "93f9270bc4eefc4870e827d4c407b321"
  },
  {
    "url": "2016/05/04/hampton-university/index.html",
    "revision": "47554533dd68aaa1d6f2a5640cddf36f"
  },
  {
    "url": "2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    "revision": "3b262560017234b8ace74f1c3bdbd102"
  },
  {
    "url": "2016/05/13/revolutionconf/index.html",
    "revision": "8fc1cd0c0ca50b211335097b0eb1d3ee"
  },
  {
    "url": "2016/05/24/pak-chu/index.html",
    "revision": "74a377acdd7051eb4634902fd8a2b8b2"
  },
  {
    "url": "2016/05/25/free-code-camp/index.html",
    "revision": "fd7b93d4ee9e5efd364ba44a76117744"
  },
  {
    "url": "2016/06/06/wen-tran/index.html",
    "revision": "ad75937356a58318c79a6ce2ff6eae7a"
  },
  {
    "url": "2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "c689b345cb760e384a09661991fd9fd4"
  },
  {
    "url": "2016/06/29/accenture-slc/index.html",
    "revision": "850be342b0e240bf74caa7bed4c035bf"
  },
  {
    "url": "2016/07/30/npmcamp/index.html",
    "revision": "890910bb5c639f3f39adaeb37c179b0c"
  },
  {
    "url": "2016/08/01/lavie-ruan/index.html",
    "revision": "8b6df991ab9590f8b7172fd0500562d2"
  },
  {
    "url": "2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "0b85cca970951a7a0b96731ad4e0a769"
  },
  {
    "url": "2016/08/26/fullstack-academy/index.html",
    "revision": "14c734dbf657332301040139ce616405"
  },
  {
    "url": "2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "990475df4e1c6314c90a84b3eb03bfd0"
  },
  {
    "url": "2016/09/16/tapia-2016/index.html",
    "revision": "5e69d198b6bc3ab3999b868f9e5bb048"
  },
  {
    "url": "2016/09/27/github-repos---mashup-/index.html",
    "revision": "ed4a26e344b4ea7d14c8aac781edc60c"
  },
  {
    "url": "2016/10/01/designhackathon/index.html",
    "revision": "0edaa1e1c98fbdb7315151b1fc94a66a"
  },
  {
    "url": "2016/10/01/the-meggs-case-/index.html",
    "revision": "798592d9bb3572f28b0de76d282ad227"
  },
  {
    "url": "2016/10/04/cornell-tech-logos-/index.html",
    "revision": "ef0f189df8a85ff2b3bbc30232d15524"
  },
  {
    "url": "2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "81476cabd4a153f4a07ee782766fd9ed"
  },
  {
    "url": "2016/10/09/kent-hack-enough/index.html",
    "revision": "b17605b3cbcc01a68205f50aeb70c8a1"
  },
  {
    "url": "2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "116e313a8c3cb281e0907e77087c2c78"
  },
  {
    "url": "2016/10/13/techweek-nyc/index.html",
    "revision": "c47baf511e7d5cb5ac00ca86e20e5ea0"
  },
  {
    "url": "2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "98dae36ee644db3a63f9a19d6c14f7e2"
  },
  {
    "url": "2016/11/18/product-studio-/index.html",
    "revision": "53ae4ee42ab3c5f121a7f81e62663447"
  },
  {
    "url": "2016/11/30/witny/index.html",
    "revision": "3074f4d421f9c803647861f0dfe32fa2"
  },
  {
    "url": "2016/12/01/duolingo-delights-/index.html",
    "revision": "c11650a16e69b18229f3402f71fd2e6d"
  },
  {
    "url": "2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "26a50a6e7a6e3f0b54808316a2c84399"
  },
  {
    "url": "2016/12/08/hour-of-code/index.html",
    "revision": "dceec51f5cebfcae7a8eef9bfd67f818"
  },
  {
    "url": "2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "63aa68ac1b378cefacac3e50a2c25bf3"
  },
  {
    "url": "2016/12/10/alterconf-nyc-/index.html",
    "revision": "5d1af12380e2ea4debb0513479db7206"
  },
  {
    "url": "2016/12/11/alterconf-nyc/index.html",
    "revision": "97bf4b098d7dfb001b09ddc877e84530"
  },
  {
    "url": "2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "9537b0efbf80cc078fc23929e16ca38f"
  },
  {
    "url": "2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "47b8b543a33f0963b5b4c1dc7d2a84c9"
  },
  {
    "url": "2016/12/17/norfolk.js/index.html",
    "revision": "6a2b1772f595068a4cc0483d68f6b3df"
  },
  {
    "url": "2016/12/17/product-school/index.html",
    "revision": "357227b1091463b4363d8c1dd035288d"
  },
  {
    "url": "2017/01/07/updated-github-page-/index.html",
    "revision": "e5c1064212c17ed021f8ed8ba4e786c4"
  },
  {
    "url": "2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "c168aa163cce959037be1a689467e09f"
  },
  {
    "url": "2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "557b531897e068c84031a8fab6a9e6c5"
  },
  {
    "url": "2017/01/21/huge-school-application-2017/index.html",
    "revision": "71f078ca9efc0343deed2242553ca38b"
  },
  {
    "url": "2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "57e3b56ca987590eee3a18d964874096"
  },
  {
    "url": "2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "6eea4950ad48217e35ed55fc5abd81b5"
  },
  {
    "url": "2017/01/30/cute-things-we-do-/index.html",
    "revision": "7fff06e84b3662b2f284dc67ae3b4a5a"
  },
  {
    "url": "2017/02/01/franklin-lee/index.html",
    "revision": "958d281f54ad8062e0f2e2b8220ca2a4"
  },
  {
    "url": "2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "9628d4db36609acf67a86d1608d9baec"
  },
  {
    "url": "2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "bf2cdd8f4df6ce8a6a42819895983caa"
  },
  {
    "url": "2017/02/19/hackysu-2017/index.html",
    "revision": "f4e7b4c7b7e57a0035aa2b7b4d140932"
  },
  {
    "url": "2017/02/24/startup-studio/index.html",
    "revision": "57f826178250de084f56a0b2a6a2de55"
  },
  {
    "url": "2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "ab65ddf12e7454e6a5c542e169b46837"
  },
  {
    "url": "2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "86eda3e4989c57beb278d6f13b9a1328"
  },
  {
    "url": "2017/03/14/connective-media/index.html",
    "revision": "a5fb787daed336474929847f0d3feb3a"
  },
  {
    "url": "2017/03/15/accepted-to-design-inc./index.html",
    "revision": "41d8e6314658520a36b35e9863fb742e"
  },
  {
    "url": "2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "cef6e25ce1c92e0bec1e09c68e6b119e"
  },
  {
    "url": "2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "0d7af46b99d2f63332004b132ada8751"
  },
  {
    "url": "2017/03/17/apprenticeships-/index.html",
    "revision": "22e756d04fc7acd0e6591a3ea7f7ea89"
  },
  {
    "url": "2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "348496b0b8483dbb424680fc1589ff01"
  },
  {
    "url": "2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "2d1fc982bce74b1f7b7ad18e0f502f04"
  },
  {
    "url": "2017/04/14/pathfinder/index.html",
    "revision": "dd372488e287df90726214ec9d779b44"
  },
  {
    "url": "2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "552af85c47589a8713fa9f7fdd53d28b"
  },
  {
    "url": "2017/04/30/codenow/index.html",
    "revision": "c352049c15754ab1e177a7eb3ae398db"
  },
  {
    "url": "2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "e671b6ae507150d4d950f358e199c68f"
  },
  {
    "url": "2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "85e13f8def7ebf6eed726b4f4f63da5c"
  },
  {
    "url": "2017/05/26/cornell-tech/index.html",
    "revision": "8818c24c71e49f84982ebdb1439f2923"
  },
  {
    "url": "2017/06/07/accenture-liquid-studio/index.html",
    "revision": "6c6bcc2c47a78b85496f36f40e2a124f"
  },
  {
    "url": "2017/06/16/team-monarch/index.html",
    "revision": "3f8deb2165ea512f11bf8582256a8642"
  },
  {
    "url": "2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "e000eaa5b79676bb812e04e290fb2201"
  },
  {
    "url": "2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "d73459d09699c81c37376f2c0f0cfc9d"
  },
  {
    "url": "2017/08/28/new-blog-new-problems-/index.html",
    "revision": "4801917d3369539a4f5b2187ed94ab9b"
  },
  {
    "url": "2017/09/16/affect-conf/index.html",
    "revision": "0bd889aa8e3a4a285167b500b7a0e096"
  },
  {
    "url": "2017/09/27/strange-loop-2017/index.html",
    "revision": "ad7803e26b5168863d092f4eee8efb8d"
  },
  {
    "url": "2017/10/22/pwa-roadshow/index.html",
    "revision": "2fb8a45316bcffa704f2c69ae892eaec"
  },
  {
    "url": "2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "61ad786d8ec5eff56df8793f7a78a85e"
  },
  {
    "url": "404.html",
    "revision": "2b994595f83a15acb5eef2ef90549d33"
  },
  {
    "url": "about/colophon/index.html",
    "revision": "d9b3754a2298ad47ca4b56f9b02ac185"
  },
  {
    "url": "about/github-repo/index.html",
    "revision": "69c668cc7aa341c0af660a78408d5f7f"
  },
  {
    "url": "about/index.html",
    "revision": "e9c6c6cc7905695a0fbf39d81ca81c1c"
  },
  {
    "url": "about/resume/index.html",
    "revision": "de74e5c40c3fbd3937751de60836e778"
  },
  {
    "url": "about/travels/index.html",
    "revision": "986d3f4029f96f52d73a05d9e9c54186"
  },
  {
    "url": "about/what-i-use/index.html",
    "revision": "55b27b4b677931031b98a70c56847e4b"
  },
  {
    "url": "adventures/index.html",
    "revision": "8d974a3fd69d625812061eb71d593fac"
  },
  {
    "url": "amp/2008/06/01/middle-school-poems-️/index.html",
    "revision": "0fbdd31bb5ef6f7f05796dc782494503"
  },
  {
    "url": "amp/2009/09/22/ghent-school/index.html",
    "revision": "cfd603107be9368830750c329932907a"
  },
  {
    "url": "amp/2009/12/10/in-christophers-footsteps-️/index.html",
    "revision": "d00c21662e38c99b8a8a9dcadad51d08"
  },
  {
    "url": "amp/2010/05/12/desiring-the-casual-/index.html",
    "revision": "decfc8feb8b51152344b104ea8c41d56"
  },
  {
    "url": "amp/2010/08/03/enders-game---book-review-/index.html",
    "revision": "9f4305cba32106b3aba8c2e90dabf52c"
  },
  {
    "url": "amp/2010/08/13/tidewater-community-college---summer-2010/index.html",
    "revision": "ef20048d64fd0568a274c81d1db8444a"
  },
  {
    "url": "amp/2010/12/13/how-texting-has-an-impact-on-relationships-️/index.html",
    "revision": "ef54c12488ae67941d57a51645b711f1"
  },
  {
    "url": "amp/2011/08/07/isce-2011/index.html",
    "revision": "673ac86f8ca2a91a5518c428c780fb1c"
  },
  {
    "url": "amp/2011/08/12/hampton-university---summer-2011/index.html",
    "revision": "e8bb0ff6174f154761bad57dffbb9491"
  },
  {
    "url": "amp/2011/12/14/to-become-a-social-media-guru-or-not-/index.html",
    "revision": "ca762073d37860e16101e2d0d364aa29"
  },
  {
    "url": "amp/2012/01/14/operation-smile-mission-training-workshop/index.html",
    "revision": "344cc30f30cc38d053fa9c3d7c0f5604"
  },
  {
    "url": "amp/2012/02/06/ap-spanish-language-skit-️/index.html",
    "revision": "6fffe62f46e0c36a66f3630243d8fe16"
  },
  {
    "url": "amp/2012/03/01/stardust---book-review-/index.html",
    "revision": "d6f73a7e35138ca3d88aa016f62e3854"
  },
  {
    "url": "amp/2012/06/18/operation-smile---medical-mission/index.html",
    "revision": "58a917708558a28060034a0acd234e10"
  },
  {
    "url": "amp/2012/07/30/my-time-in-tanzania-/index.html",
    "revision": "883d1fa028c4f498db2bb35397f73f7c"
  },
  {
    "url": "amp/2012/08/10/odu-vmasc/index.html",
    "revision": "34a9868dc613683842e0d1d3601f076e"
  },
  {
    "url": "amp/2012/08/14/school-for-field-studies/index.html",
    "revision": "652cf9d254fa119b911b65f030563237"
  },
  {
    "url": "amp/2013/06/06/pursuit-of-knowledge/index.html",
    "revision": "19dc169c43757a08abdf32dd7d7d2b91"
  },
  {
    "url": "amp/2013/06/13/maury-high-school/index.html",
    "revision": "a322b3c3435482374392debea82fed1c"
  },
  {
    "url": "amp/2013/07/28/c---bits---clothing-sizes-/index.html",
    "revision": "faaa4ef9eeb8a288929b0f120f911b0d"
  },
  {
    "url": "amp/2013/07/28/c---bits---solid-geometry-/index.html",
    "revision": "be2af3ca71c69ef0ef1960792485550d"
  },
  {
    "url": "amp/2013/07/28/c---bits---time-measurements-/index.html",
    "revision": "af24de3c1ad06cb50e9803889afef62b"
  },
  {
    "url": "amp/2013/07/29/robopocalypse---book-review-️/index.html",
    "revision": "7671042609565f858893254d299426f6"
  },
  {
    "url": "amp/2013/07/29/the-davinci-code---book-review-️/index.html",
    "revision": "3a47d9adc15f304dbbe0fa70f2e2e0bd"
  },
  {
    "url": "amp/2013/07/30/c---bits---array-manipulation-️/index.html",
    "revision": "9b611816642a3eba44e4ffeefbfae41c"
  },
  {
    "url": "amp/2013/08/02/islc-2013/index.html",
    "revision": "ecec2172a170d3f4c8ea9da8b6324d1f"
  },
  {
    "url": "amp/2013/08/02/operation-smile---maury-high-school/index.html",
    "revision": "2587e27636c1045d962fbda9b1d2f7c2"
  },
  {
    "url": "amp/2013/08/03/potc---chest-riddle-/index.html",
    "revision": "8270a48fb6faa865ac3a5c7976cfe08d"
  },
  {
    "url": "amp/2013/08/03/potc---parchment-riddle-/index.html",
    "revision": "139add343d5a1ee1cac4f1393b16db9c"
  },
  {
    "url": "amp/2013/08/16/tidewater-community-college---summer-2013/index.html",
    "revision": "ead2c950e8c652cd826a33aeb3ed17d1"
  },
  {
    "url": "amp/2013/09/14/my-cups-of-tea---2013-/index.html",
    "revision": "e6d18ae176b934dd1a740322f1716ae7"
  },
  {
    "url": "amp/2013/09/20/c-bits---getting-started/index.html",
    "revision": "f8642110169efcd38083db8ec39b020f"
  },
  {
    "url": "amp/2013/09/20/c-bits---speeding-up-a-bit-/index.html",
    "revision": "9cefdd1866bffed18bca59d5f406438c"
  },
  {
    "url": "amp/2013/12/27/jacobs-university-bremen---fall-2013/index.html",
    "revision": "6c283fad21ec8ab3b5bad5500ac00a9d"
  },
  {
    "url": "amp/2014/01/05/preparing-for-coding-bootcamps/index.html",
    "revision": "c7d1a920c20969b9eccb6447997cd5f9"
  },
  {
    "url": "amp/2014/01/30/the-best-20-pick-up-lines/index.html",
    "revision": "345e41984b7d961f30a78be8bd20a169"
  },
  {
    "url": "amp/2014/02/21/nothing-to-envy---book-review/index.html",
    "revision": "fb5099cf963f617117015dd17a49b0f3"
  },
  {
    "url": "amp/2014/02/21/working-smarter-not-harder/index.html",
    "revision": "89957a422b80a188e0a0dddb2300051f"
  },
  {
    "url": "amp/2014/03/03/a-few-java-factoids---part-1/index.html",
    "revision": "2a0bad6c6e2b8f63c0fe75079d745336"
  },
  {
    "url": "amp/2014/03/03/ah-life./index.html",
    "revision": "0ceaf15eca7ed9e2272df44c34866355"
  },
  {
    "url": "amp/2014/03/03/granny-said.../index.html",
    "revision": "293e131284a4085c5f930bf3fa2860fa"
  },
  {
    "url": "amp/2014/03/04/the-best-50-insults/index.html",
    "revision": "b4e11bcf8699aee5364e57471c7ce98b"
  },
  {
    "url": "amp/2014/03/12/20-laws-of-power/index.html",
    "revision": "0bec27e42dbc017e1b2936df73cbfca7"
  },
  {
    "url": "amp/2014/03/12/interview-with-bitmaker-labs/index.html",
    "revision": "7ff4d5eadb08e3b147355f99e24698d3"
  },
  {
    "url": "amp/2014/03/12/java-bits---getting-started/index.html",
    "revision": "10aaae0c659896096dac7bbd9da0ca2b"
  },
  {
    "url": "amp/2014/03/12/python-bits---getting-started/index.html",
    "revision": "7bf2bea9149225af54163c126608298e"
  },
  {
    "url": "amp/2014/03/14/what-makes-you-feel-better-when-you-are-in-a-bad-mood/index.html",
    "revision": "7bb9eb410eda30cb4f6376e9607741f1"
  },
  {
    "url": "amp/2014/04/07/texting-while-driving/index.html",
    "revision": "c4052715a143751e46f02cda37c79edc"
  },
  {
    "url": "amp/2014/05/02/a-review-of-dont-starve/index.html",
    "revision": "01790f062243ea6e74d42273ccd345a1"
  },
  {
    "url": "amp/2014/05/06/integrating-your-school-emails-with-airmail/index.html",
    "revision": "e78813b9214e8edac51801636115b48c"
  },
  {
    "url": "amp/2014/05/12/speech---robotics-in-the-workforce/index.html",
    "revision": "d8d5ed38ba6a97a5cd937cbe44b5d068"
  },
  {
    "url": "amp/2014/06/21/the-interconnectedness-of-social-networking-sites/index.html",
    "revision": "26ffc30c22109a63ee8a5e942ad85a13"
  },
  {
    "url": "amp/2014/08/08/the-day-after-calculus-ended/index.html",
    "revision": "4d4aa861f73e9e29c03dad384d0d43c0"
  },
  {
    "url": "amp/2014/08/09/flavours-themes/index.html",
    "revision": "33ed8aeb9ddd9b71680548cf48fc60b6"
  },
  {
    "url": "amp/2014/08/09/the-how-tos-when-it-comes-to-java-arrays/index.html",
    "revision": "c4a0cb0e182fabfa5787031ba660b300"
  },
  {
    "url": "amp/2014/08/15/hampton-university---summer-2014/index.html",
    "revision": "5814013958be6cf0600cb4420f38c82c"
  },
  {
    "url": "amp/2014/08/15/old-dominion-university---summer-2014/index.html",
    "revision": "8be7b1fc9584d290c692c4d847f1f17e"
  },
  {
    "url": "amp/2014/08/16/stars-celebration/index.html",
    "revision": "7b906072951e351b9bd86398c4654f19"
  },
  {
    "url": "amp/2014/08/21/a.i.-international/index.html",
    "revision": "06c39b27aa23fef8192c765c9309af7b"
  },
  {
    "url": "amp/2014/09/10/giving-back/index.html",
    "revision": "f2c9185ac3cc3823cdd18dcfbf4ff7fd"
  },
  {
    "url": "amp/2014/09/14/mba--mscs-grad-programs/index.html",
    "revision": "0ce5acc066c1d1e1a0be2be7164f59f8"
  },
  {
    "url": "amp/2014/09/14/undergrad-a.i.-internships/index.html",
    "revision": "78ec8a2e55889bec86a95053f3c296f1"
  },
  {
    "url": "amp/2014/09/22/review---limbo/index.html",
    "revision": "13dbda63a18aa8ecb985e0e8d8acd09e"
  },
  {
    "url": "amp/2014/10/01/cshu/index.html",
    "revision": "c8e3ff0928d84e69d9fd762bdf67a673"
  },
  {
    "url": "amp/2014/10/17/job-interview---tips-and-tricks/index.html",
    "revision": "d8b25122dba8f377a20a195c360f9b17"
  },
  {
    "url": "amp/2014/10/17/long-lighthearted-lists/index.html",
    "revision": "2a87bd49df12669693e473e5f83e05cc"
  },
  {
    "url": "amp/2014/10/17/midterm-melodrama---data-structures-with-java/index.html",
    "revision": "bf51fc5aa52525623bd864fdc86394b1"
  },
  {
    "url": "amp/2014/10/26/dc-hack/index.html",
    "revision": "6a81b098b074fb9424d039d4e362439c"
  },
  {
    "url": "amp/2014/11/10/magnifying-the-bootcamp-research-experience/index.html",
    "revision": "80da4483248c8016cbe159a87ea8a9ca"
  },
  {
    "url": "amp/2014/11/10/study-guide---linked-lists/index.html",
    "revision": "c0572568b516295346917dde495709af"
  },
  {
    "url": "amp/2014/11/13/yes-hair-/index.html",
    "revision": "dd33584d5e83b5e9bccd592ec76c317c"
  },
  {
    "url": "amp/2014/12/03/binary-trees--recursion/index.html",
    "revision": "97036d3ddb528cc7a1c41db0a6585a8d"
  },
  {
    "url": "amp/2014/12/17/inkling-1.1/index.html",
    "revision": "f9f7d5f5752c7fbf9a8d5a3b01cbb29c"
  },
  {
    "url": "amp/2014/12/20/50-lines-for-50-crimes/index.html",
    "revision": "2e5c5301e18a5509a770dc7706226497"
  },
  {
    "url": "amp/2014/12/23/finding-coding-bootcamps/index.html",
    "revision": "9bed93cf9c84f64daabf4cbf8ebcda89"
  },
  {
    "url": "amp/2014/12/23/first-meetup-first-impressions/index.html",
    "revision": "ad774d2155044b4c0394120ac201b95c"
  },
  {
    "url": "amp/2014/12/23/week--20-as-in-20-weeks-prior/index.html",
    "revision": "51de908a62737a9a38b9845770b06c7d"
  },
  {
    "url": "amp/2014/12/27/im-a-noob-when-it-comes-to-programming---where-to-now/index.html",
    "revision": "7afd5addffd7f0f04fadd26fa721e93c"
  },
  {
    "url": "amp/2014/12/28/bootcamp.me---google-map-/index.html",
    "revision": "0b851a45cfc74053fcce9dcbb427a8d2"
  },
  {
    "url": "amp/2014/12/28/interview-with-fullstack-academy-of-code/index.html",
    "revision": "1b699e855ea93a0393608ed966e6771a"
  },
  {
    "url": "amp/2014/12/29/aaai-2015-winter-conference---a-month-left/index.html",
    "revision": "a4eb43b6d8aa1a5be2e30073b92dd517"
  },
  {
    "url": "amp/2014/12/29/interview-with-hack-reactor/index.html",
    "revision": "a4ed8be27d8ea763c1a4c6b841a34c25"
  },
  {
    "url": "amp/2014/12/29/my-most-memorable-experiences-in-gaming/index.html",
    "revision": "6cae80117159ca9ed7045932b14f1953"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-dojo/index.html",
    "revision": "12af912a8a9e0da49b102c2419be4ddb"
  },
  {
    "url": "amp/2015/01/06/interview-with-coding-house/index.html",
    "revision": "c34ed4c03ef3df81e0e744be9b5218d3"
  },
  {
    "url": "amp/2015/01/06/interview-with-designation/index.html",
    "revision": "529f35eb56aada95f0bd7c3adcc85218"
  },
  {
    "url": "amp/2015/01/06/interview-with-devleague/index.html",
    "revision": "c2c5b06c248ce74b9987f0fd4e61cdec"
  },
  {
    "url": "amp/2015/01/14/interview-with-makersquare/index.html",
    "revision": "8d09ba67eaa4d8016f3b8fd71c42b90e"
  },
  {
    "url": "amp/2015/01/30/aaai-2015/index.html",
    "revision": "8495cc6d60572a3ebfc407d6b0278ab4"
  },
  {
    "url": "amp/2015/01/30/adventures-with-aaai/index.html",
    "revision": "a6f6bbb3c21c2428c0ce2a01065f9947"
  },
  {
    "url": "amp/2015/02/01/adding-awesome-websites-to-your-chrome-app-launcher/index.html",
    "revision": "eb23095288d214b7e726bb598f9758ef"
  },
  {
    "url": "amp/2015/02/11/cataloging-my-itunes-music/index.html",
    "revision": "6c66176ef544dae2bf15031b528affe3"
  },
  {
    "url": "amp/2015/02/15/brief-thoughts-on-switchups-best-bootcamps-list/index.html",
    "revision": "439a209994b9bf44d340f81a506d6835"
  },
  {
    "url": "amp/2015/02/15/peter-weyland-at-ted2023/index.html",
    "revision": "26b2e12c8c767801a1858b1b23b68751"
  },
  {
    "url": "amp/2015/02/15/that-tapia-conference/index.html",
    "revision": "961a22331efdc342d91d3770a99e255a"
  },
  {
    "url": "amp/2015/02/21/tapia-2015/index.html",
    "revision": "2740adee3c5998359f7db84078d795c0"
  },
  {
    "url": "amp/2015/03/01/jeopardy-template-/index.html",
    "revision": "68e27fa02de86efa7253702941446657"
  },
  {
    "url": "amp/2015/03/12/an-intro-for-cs-majors-/index.html",
    "revision": "753f4958b199be750d14b9ecd8e43156"
  },
  {
    "url": "amp/2015/03/12/keynote--google-slides-template---jeopardy-game/index.html",
    "revision": "c33361de88534ab9d26aae39ec58ba7b"
  },
  {
    "url": "amp/2015/03/28/my-top-3-productivity-apps-/index.html",
    "revision": "d7cd498ee051d19716f5c06166700a24"
  },
  {
    "url": "amp/2015/03/29/change-your-icons-on-yosemite-with-scripting-/index.html",
    "revision": "c5ed6a1d17ce6ea90d865c206d4142b9"
  },
  {
    "url": "amp/2015/04/11/auschwitz-a-doctors-eyewitness-account-/index.html",
    "revision": "e8520ca3fe2783b3fd7f68dda985ec5d"
  },
  {
    "url": "amp/2015/04/13/reset-your-launchpad-with-sorty-/index.html",
    "revision": "6e89cefb925adc5b3d4a1d27779c1d97"
  },
  {
    "url": "amp/2015/04/13/what-to-do-what-to-do-week--8/index.html",
    "revision": "c3b08a5e2556dab5277afe95cc4bee0f"
  },
  {
    "url": "amp/2015/04/17/vsgc-2015/index.html",
    "revision": "be178285b9460288bf83f8687ad4319d"
  },
  {
    "url": "amp/2015/04/18/sort-detective---solution-/index.html",
    "revision": "c131cd52a07f5889606b22fae49a9cf1"
  },
  {
    "url": "amp/2015/04/20/when-you-realize-the-internet-is-full-of-trolls/index.html",
    "revision": "ba300acdecf9a1ec7b0d0dfb38e4391e"
  },
  {
    "url": "amp/2015/04/23/a.i.-movies-/index.html",
    "revision": "701fa5f3bc132f42e33614e598d068f6"
  },
  {
    "url": "amp/2015/04/26/achieving-dame-hood-through-hollow-knight-/index.html",
    "revision": "40291eb8088d9af2c6c7b1a1aa9e9a9b"
  },
  {
    "url": "amp/2015/04/26/what-influenced-and-inspired-you-to-learn-how-to-code-/index.html",
    "revision": "8d3a73bdb85a1a940ee36dc0175eb957"
  },
  {
    "url": "amp/2015/04/30/bebop.me-/index.html",
    "revision": "00183139cfc795d39cdb49d1af5ee4bb"
  },
  {
    "url": "amp/2015/05/17/ameot-/index.html",
    "revision": "bd25bb2ca63cf4f49615a8ce0ae98d29"
  },
  {
    "url": "amp/2015/05/17/fullstack-foundations---week-1/index.html",
    "revision": "f567dca50a6a503299ae2c7d000fb7d6"
  },
  {
    "url": "amp/2015/05/20/bootcamp.me---attempting-to-crowd-source-/index.html",
    "revision": "46b7693641b2c8213aec006b9b6c35a7"
  },
  {
    "url": "amp/2015/05/20/then-what-shall-we-code-for-/index.html",
    "revision": "275fe66ce5d31a21c821a7ed826a146c"
  },
  {
    "url": "amp/2015/05/26/the-guessing-game-️/index.html",
    "revision": "338b8b4d388aaedc3b4bfd4fcc070af5"
  },
  {
    "url": "amp/2015/06/04/fullstack-foundations--goldman-sachs-/index.html",
    "revision": "d9dea4f68794d11904951b90b6cf6207"
  },
  {
    "url": "amp/2015/06/13/first-week-at-fullstack-academy-/index.html",
    "revision": "7a779acc8030ea81032816aff1b8ff39"
  },
  {
    "url": "amp/2015/06/20/fullstack-academy---week-2-/index.html",
    "revision": "5fd0961a9716f28eac305175e891cf50"
  },
  {
    "url": "amp/2015/06/26/fullstack-academy---week-3-/index.html",
    "revision": "fee9124efeaa668a7e57678bda785c81"
  },
  {
    "url": "amp/2015/07/03/fullstack-academy---week-4-/index.html",
    "revision": "daf90f4c4faf8dfc4708aa0186201549"
  },
  {
    "url": "amp/2015/07/11/fullstack-academy---week-5/index.html",
    "revision": "ef3157dee290314bf1166e055cf46501"
  },
  {
    "url": "amp/2015/07/25/fullstack-academy---week-6--review-week-/index.html",
    "revision": "719d0c467e49348845423f40eb75539c"
  },
  {
    "url": "amp/2015/07/25/sally-conference/index.html",
    "revision": "f67de117654c1d5bc8ef5e85b7ae0cdd"
  },
  {
    "url": "amp/2015/08/05/robopocalypse-/index.html",
    "revision": "c4d3a42895283a5d03e44f301aa29252"
  },
  {
    "url": "amp/2015/08/05/web-dev--design-slides---fullstack-academy/index.html",
    "revision": "c59ffc884ef0d9821094ca3b35c9de10"
  },
  {
    "url": "amp/2015/08/11/rankme-/index.html",
    "revision": "463a17f69ebcb83dc147e402ee00f7ae"
  },
  {
    "url": "amp/2015/08/19/one-week-of-fullstack-left-/index.html",
    "revision": "eff517eb817904000807e02e812810b1"
  },
  {
    "url": "amp/2015/08/20/readme-template-for-github-/index.html",
    "revision": "270f5c1ff9dd5d33077f93671cdd7482"
  },
  {
    "url": "amp/2015/08/26/hiredot-/index.html",
    "revision": "85ee1d50aa6c89fc6bc6322ac8f99a6e"
  },
  {
    "url": "amp/2015/08/30/fullstack-academy---reflections-/index.html",
    "revision": "10f755ae4bb719c628afef5ce26c630b"
  },
  {
    "url": "amp/2015/09/25/discover-goldman-sachs/index.html",
    "revision": "c9768c59d1359852cf8ba50454e77893"
  },
  {
    "url": "amp/2015/10/09/designlab-submissions-/index.html",
    "revision": "8b6fcee7f70eda11e8deaae8f610ee89"
  },
  {
    "url": "amp/2015/10/09/designlab/index.html",
    "revision": "8acc2dda829523b4f3b89c227ccb25d3"
  },
  {
    "url": "amp/2015/10/20/andre-smith/index.html",
    "revision": "dd6f7aa5206b10e55d99f3f154c138ef"
  },
  {
    "url": "amp/2015/10/21/my-designlab-experience-/index.html",
    "revision": "35b2c4e1b7eb8a88e049645a3235a6c5"
  },
  {
    "url": "amp/2015/10/24/hack-the-vote-/index.html",
    "revision": "6d2f7362def6a0e58cbed66d0ab84020"
  },
  {
    "url": "amp/2015/10/24/hack-to-help-hampton-roads/index.html",
    "revision": "f6900227eb61c2ab96836500cdd169d2"
  },
  {
    "url": "amp/2015/11/11/meetups-nearby-/index.html",
    "revision": "831d6f790c19c83f45e39a51d6f10ae1"
  },
  {
    "url": "amp/2015/11/13/hr-devfest---web-design-talk-️/index.html",
    "revision": "9842f92e897f36cd69c14ed0630c28d5"
  },
  {
    "url": "amp/2015/11/14/hr-devfest/index.html",
    "revision": "cdc3a5bad584de4556329955f66be95e"
  },
  {
    "url": "amp/2015/11/15/aaai/index.html",
    "revision": "8d38916ac627c690be87d133217f643b"
  },
  {
    "url": "amp/2015/11/15/stars-computing-corps/index.html",
    "revision": "332a466bb8f60ae625a42e70d0d22589"
  },
  {
    "url": "amp/2015/11/20/discover-accenture/index.html",
    "revision": "405e9f7c2c31ee62bbd7b8f469b9a7af"
  },
  {
    "url": "amp/2015/12/02/dear-holberton-/index.html",
    "revision": "e5f8c1c3e569db67662096ffc7878bae"
  },
  {
    "url": "amp/2015/12/07/hour-of-code-2015-️/index.html",
    "revision": "e38109f76b6169288bea1ca960fba6ab"
  },
  {
    "url": "amp/2015/12/10/ai-choo-ashe/index.html",
    "revision": "2c4bd81e0c19e24b93233281a068392f"
  },
  {
    "url": "amp/2015/12/12/kelli-white/index.html",
    "revision": "f74925082a107966ca862d5d7d77cdf1"
  },
  {
    "url": "amp/2015/12/13/hour-of-code/index.html",
    "revision": "f9db997192c0e95f97e2119718d2dbe6"
  },
  {
    "url": "amp/2015/12/18/alex-bradshaw/index.html",
    "revision": "93bc89e565e10b49c4265f46c004e215"
  },
  {
    "url": "amp/2016/01/04/new-epoch-new-exploits-/index.html",
    "revision": "1123f36d01b71ff083749da8960933eb"
  },
  {
    "url": "amp/2016/01/04/va-acm-slack-invites-/index.html",
    "revision": "67a2171417820b07409240984fa5ca82"
  },
  {
    "url": "amp/2016/01/05/kimberly-logsdon/index.html",
    "revision": "6e0b42d29e087771b034b41276f28baa"
  },
  {
    "url": "amp/2016/01/11/meetup-dice-/index.html",
    "revision": "c18492d9203c0fb0a33e3b3df2d4efc4"
  },
  {
    "url": "amp/2016/01/12/mapme---coding-bootcamps-/index.html",
    "revision": "18fc09826c308af1e07bbf69baa24418"
  },
  {
    "url": "amp/2016/01/18/built-in-norfolk/index.html",
    "revision": "b4384d53d352ba1a49eca4f3cb5404df"
  },
  {
    "url": "amp/2016/01/18/norfolk.js-meetup/index.html",
    "revision": "ce77ba6b105be7603e2419b88930fee8"
  },
  {
    "url": "amp/2016/01/31/hoya-hacks/index.html",
    "revision": "fb6463692547b97f3c5e240c3448f4a6"
  },
  {
    "url": "amp/2016/01/31/life-at-home-/index.html",
    "revision": "838e7dc19e8fa5b26d911004523bde50"
  },
  {
    "url": "amp/2016/01/31/monarchs-hack-the-campus-/index.html",
    "revision": "07183381ac61e55ed0ed97d0e0b7ce81"
  },
  {
    "url": "amp/2016/02/05/8020-software-consulting/index.html",
    "revision": "4adfdda1774f88940aec61f66f8f95d1"
  },
  {
    "url": "amp/2016/02/05/capital-region-women-in-computing-conference/index.html",
    "revision": "ea1a84fc78c8d203fc987e4ac7231674"
  },
  {
    "url": "amp/2016/02/05/hacku-4/index.html",
    "revision": "cd9b5257f3932684cbd15391293854d4"
  },
  {
    "url": "amp/2016/02/12/acm/index.html",
    "revision": "a0f2f43a35f01cb137bbcb80a4f2b42c"
  },
  {
    "url": "amp/2016/02/14/treehacks/index.html",
    "revision": "7dff30717bf1339e687f0b11f1aedb54"
  },
  {
    "url": "amp/2016/02/17/developerweek/index.html",
    "revision": "520c2c1f24f809e23b8f0ed062eac59f"
  },
  {
    "url": "amp/2016/02/23/react.js-conf/index.html",
    "revision": "66ebe55850a90439ed7903e6583430dd"
  },
  {
    "url": "amp/2016/02/27/binding-of-isaac---review-/index.html",
    "revision": "7db81ee70d8a8f08c1722b5bd56f6840"
  },
  {
    "url": "amp/2016/02/28/monarchs-hack-the-campus/index.html",
    "revision": "5b58998e6955abe041d6b0cdbd868f4c"
  },
  {
    "url": "amp/2016/03/10/fluent-conference/index.html",
    "revision": "b12c921baa79fbb56f0adf06e42b6a59"
  },
  {
    "url": "amp/2016/03/31/all-the-bootcamp-things-/index.html",
    "revision": "c69075b51871ee24fc2490a1fb6a4584"
  },
  {
    "url": "amp/2016/04/01/angel-riera/index.html",
    "revision": "4cf0aafb45520c0e4738d9e9c079366d"
  },
  {
    "url": "amp/2016/04/07/mike-jonas/index.html",
    "revision": "50e750e1cabf2f2e9916e119ca54ad03"
  },
  {
    "url": "amp/2016/04/09/innovation-hackathon/index.html",
    "revision": "cfbc5f1833a100334e7970227f576876"
  },
  {
    "url": "amp/2016/04/11/vsgc-student-research-conference/index.html",
    "revision": "b7630db1e075090581a14d3785c26c82"
  },
  {
    "url": "amp/2016/04/30/schools-out-️/index.html",
    "revision": "93f9270bc4eefc4870e827d4c407b321"
  },
  {
    "url": "amp/2016/05/04/hampton-university/index.html",
    "revision": "47554533dd68aaa1d6f2a5640cddf36f"
  },
  {
    "url": "amp/2016/05/11/revolutionconf-aka-yes-theres-a-huge-tech-scene-in-the-757-️/index.html",
    "revision": "3b262560017234b8ace74f1c3bdbd102"
  },
  {
    "url": "amp/2016/05/13/revolutionconf/index.html",
    "revision": "8fc1cd0c0ca50b211335097b0eb1d3ee"
  },
  {
    "url": "amp/2016/05/24/pak-chu/index.html",
    "revision": "74a377acdd7051eb4634902fd8a2b8b2"
  },
  {
    "url": "amp/2016/05/25/free-code-camp/index.html",
    "revision": "fd7b93d4ee9e5efd364ba44a76117744"
  },
  {
    "url": "amp/2016/06/06/wen-tran/index.html",
    "revision": "ad75937356a58318c79a6ce2ff6eae7a"
  },
  {
    "url": "amp/2016/06/17/accenture-all-hands-conference/index.html",
    "revision": "c689b345cb760e384a09661991fd9fd4"
  },
  {
    "url": "amp/2016/06/29/accenture-slc/index.html",
    "revision": "850be342b0e240bf74caa7bed4c035bf"
  },
  {
    "url": "amp/2016/07/30/npmcamp/index.html",
    "revision": "890910bb5c639f3f39adaeb37c179b0c"
  },
  {
    "url": "amp/2016/08/01/lavie-ruan/index.html",
    "revision": "8b6df991ab9590f8b7172fd0500562d2"
  },
  {
    "url": "amp/2016/08/12/accenture-liquid-studio---summer-2016/index.html",
    "revision": "0b85cca970951a7a0b96731ad4e0a769"
  },
  {
    "url": "amp/2016/08/26/fullstack-academy/index.html",
    "revision": "14c734dbf657332301040139ce616405"
  },
  {
    "url": "amp/2016/08/26/fvcproductions---updated-logo-/index.html",
    "revision": "990475df4e1c6314c90a84b3eb03bfd0"
  },
  {
    "url": "amp/2016/09/16/tapia-2016/index.html",
    "revision": "5e69d198b6bc3ab3999b868f9e5bb048"
  },
  {
    "url": "amp/2016/09/27/github-repos---mashup-/index.html",
    "revision": "ed4a26e344b4ea7d14c8aac781edc60c"
  },
  {
    "url": "amp/2016/10/01/designhackathon/index.html",
    "revision": "0edaa1e1c98fbdb7315151b1fc94a66a"
  },
  {
    "url": "amp/2016/10/01/the-meggs-case-/index.html",
    "revision": "798592d9bb3572f28b0de76d282ad227"
  },
  {
    "url": "amp/2016/10/04/cornell-tech-logos-/index.html",
    "revision": "ef0f189df8a85ff2b3bbc30232d15524"
  },
  {
    "url": "amp/2016/10/09/jake-the-dog-key-hand-/index.html",
    "revision": "81476cabd4a153f4a07ee782766fd9ed"
  },
  {
    "url": "amp/2016/10/09/kent-hack-enough/index.html",
    "revision": "b17605b3cbcc01a68205f50aeb70c8a1"
  },
  {
    "url": "amp/2016/10/12/mamabear-launch-plan-/index.html",
    "revision": "116e313a8c3cb281e0907e77087c2c78"
  },
  {
    "url": "amp/2016/10/13/techweek-nyc/index.html",
    "revision": "c47baf511e7d5cb5ac00ca86e20e5ea0"
  },
  {
    "url": "amp/2016/10/18/duolingo-anagram-checker-/index.html",
    "revision": "98dae36ee644db3a63f9a19d6c14f7e2"
  },
  {
    "url": "amp/2016/11/18/product-studio-/index.html",
    "revision": "53ae4ee42ab3c5f121a7f81e62663447"
  },
  {
    "url": "amp/2016/11/30/witny/index.html",
    "revision": "3074f4d421f9c803647861f0dfe32fa2"
  },
  {
    "url": "amp/2016/12/01/duolingo-delights-/index.html",
    "revision": "c11650a16e69b18229f3402f71fd2e6d"
  },
  {
    "url": "amp/2016/12/01/fullstack-academy-ambassador/index.html",
    "revision": "26a50a6e7a6e3f0b54808316a2c84399"
  },
  {
    "url": "amp/2016/12/08/hour-of-code/index.html",
    "revision": "dceec51f5cebfcae7a8eef9bfd67f818"
  },
  {
    "url": "amp/2016/12/09/best-final-sprint-presentation---product-studio---cornell-tech/index.html",
    "revision": "63aa68ac1b378cefacac3e50a2c25bf3"
  },
  {
    "url": "amp/2016/12/10/alterconf-nyc-/index.html",
    "revision": "5d1af12380e2ea4debb0513479db7206"
  },
  {
    "url": "amp/2016/12/11/alterconf-nyc/index.html",
    "revision": "97bf4b098d7dfb001b09ddc877e84530"
  },
  {
    "url": "amp/2016/12/15/open-studio-poster---cornell-tech-/index.html",
    "revision": "9537b0efbf80cc078fc23929e16ca38f"
  },
  {
    "url": "amp/2016/12/15/scholarship-recipient---cra-women-grad-cohort-workshop/index.html",
    "revision": "47b8b543a33f0963b5b4c1dc7d2a84c9"
  },
  {
    "url": "amp/2016/12/17/norfolk.js/index.html",
    "revision": "6a2b1772f595068a4cc0483d68f6b3df"
  },
  {
    "url": "amp/2016/12/17/product-school/index.html",
    "revision": "357227b1091463b4363d8c1dd035288d"
  },
  {
    "url": "amp/2017/01/07/updated-github-page-/index.html",
    "revision": "e5c1064212c17ed021f8ed8ba4e786c4"
  },
  {
    "url": "amp/2017/01/13/launch-a-todo-app-using-laravel-homestead-️/index.html",
    "revision": "c168aa163cce959037be1a689467e09f"
  },
  {
    "url": "amp/2017/01/13/simple-to-do-app-in-laravel-/index.html",
    "revision": "557b531897e068c84031a8fab6a9e6c5"
  },
  {
    "url": "amp/2017/01/21/huge-school-application-2017/index.html",
    "revision": "71f078ca9efc0343deed2242553ca38b"
  },
  {
    "url": "amp/2017/01/23/convert-a-spotify-playlist-to-mp3-files-/index.html",
    "revision": "57e3b56ca987590eee3a18d964874096"
  },
  {
    "url": "amp/2017/01/29/another-spreadsheet-app-️️/index.html",
    "revision": "6eea4950ad48217e35ed55fc5abd81b5"
  },
  {
    "url": "amp/2017/01/30/cute-things-we-do-/index.html",
    "revision": "7fff06e84b3662b2f284dc67ae3b4a5a"
  },
  {
    "url": "amp/2017/02/01/franklin-lee/index.html",
    "revision": "958d281f54ad8062e0f2e2b8220ca2a4"
  },
  {
    "url": "amp/2017/02/06/view-linkedin-profiles-without-logging-in-/index.html",
    "revision": "9628d4db36609acf67a86d1608d9baec"
  },
  {
    "url": "amp/2017/02/08/selected-for-cornell-tech-student-panel/index.html",
    "revision": "bf2cdd8f4df6ce8a6a42819895983caa"
  },
  {
    "url": "amp/2017/02/19/hackysu-2017/index.html",
    "revision": "f4e7b4c7b7e57a0035aa2b7b4d140932"
  },
  {
    "url": "amp/2017/02/24/startup-studio/index.html",
    "revision": "57f826178250de084f56a0b2a6a2de55"
  },
  {
    "url": "amp/2017/03/05/the-start-of-a-wondrous-migration-/index.html",
    "revision": "ab65ddf12e7454e6a5c542e169b46837"
  },
  {
    "url": "amp/2017/03/09/finalist---hackny-fellowship-program/index.html",
    "revision": "86eda3e4989c57beb278d6f13b9a1328"
  },
  {
    "url": "amp/2017/03/14/connective-media/index.html",
    "revision": "a5fb787daed336474929847f0d3feb3a"
  },
  {
    "url": "amp/2017/03/15/accepted-to-design-inc./index.html",
    "revision": "41d8e6314658520a36b35e9863fb742e"
  },
  {
    "url": "amp/2017/03/15/fullstack-academy---alumni-panel/index.html",
    "revision": "cef6e25ce1c92e0bec1e09c68e6b119e"
  },
  {
    "url": "amp/2017/03/16/fellow---student-research-conference-and-luncheon---virginia-space-grant-consortium/index.html",
    "revision": "0d7af46b99d2f63332004b132ada8751"
  },
  {
    "url": "amp/2017/03/17/apprenticeships-/index.html",
    "revision": "22e756d04fc7acd0e6591a3ea7f7ea89"
  },
  {
    "url": "amp/2017/03/23/finalist---huge-experience-design-school/index.html",
    "revision": "348496b0b8483dbb424680fc1589ff01"
  },
  {
    "url": "amp/2017/03/29/finalist---pennapps-fellows-program/index.html",
    "revision": "2d1fc982bce74b1f7b7ad18e0f502f04"
  },
  {
    "url": "amp/2017/04/14/pathfinder/index.html",
    "revision": "dd372488e287df90726214ec9d779b44"
  },
  {
    "url": "amp/2017/04/24/finalist---kpcb-product-fellows-program/index.html",
    "revision": "552af85c47589a8713fa9f7fdd53d28b"
  },
  {
    "url": "amp/2017/04/30/codenow/index.html",
    "revision": "c352049c15754ab1e177a7eb3ae398db"
  },
  {
    "url": "amp/2017/05/10/fullstack-academy---ambassador/index.html",
    "revision": "e671b6ae507150d4d950f358e199c68f"
  },
  {
    "url": "amp/2017/05/11/project-alloy---grant-recipient/index.html",
    "revision": "85e13f8def7ebf6eed726b4f4f63da5c"
  },
  {
    "url": "amp/2017/05/26/cornell-tech/index.html",
    "revision": "8818c24c71e49f84982ebdb1439f2923"
  },
  {
    "url": "amp/2017/06/07/accenture-liquid-studio/index.html",
    "revision": "6c6bcc2c47a78b85496f36f40e2a124f"
  },
  {
    "url": "amp/2017/06/16/team-monarch/index.html",
    "revision": "3f8deb2165ea512f11bf8582256a8642"
  },
  {
    "url": "amp/2017/06/30/amazon-alexa-hackathon/index.html",
    "revision": "e000eaa5b79676bb812e04e290fb2201"
  },
  {
    "url": "amp/2017/07/21/west-aaerg/haerg-leadership-summit/index.html",
    "revision": "d73459d09699c81c37376f2c0f0cfc9d"
  },
  {
    "url": "amp/2017/08/28/new-blog-new-problems-/index.html",
    "revision": "4801917d3369539a4f5b2187ed94ab9b"
  },
  {
    "url": "amp/2017/09/16/affect-conf/index.html",
    "revision": "0bd889aa8e3a4a285167b500b7a0e096"
  },
  {
    "url": "amp/2017/09/27/strange-loop-2017/index.html",
    "revision": "ad7803e26b5168863d092f4eee8efb8d"
  },
  {
    "url": "amp/2017/10/22/pwa-roadshow/index.html",
    "revision": "2fb8a45316bcffa704f2c69ae892eaec"
  },
  {
    "url": "amp/2017/12/02/announcing-my-new-medium-blog-/index.html",
    "revision": "61ad786d8ec5eff56df8793f7a78a85e"
  },
  {
    "url": "amp/about/colophon/index.html",
    "revision": "d9b3754a2298ad47ca4b56f9b02ac185"
  },
  {
    "url": "amp/about/github-repo/index.html",
    "revision": "69c668cc7aa341c0af660a78408d5f7f"
  },
  {
    "url": "amp/about/resume/index.html",
    "revision": "de74e5c40c3fbd3937751de60836e778"
  },
  {
    "url": "amp/about/travels/index.html",
    "revision": "986d3f4029f96f52d73a05d9e9c54186"
  },
  {
    "url": "amp/about/what-i-use/index.html",
    "revision": "55b27b4b677931031b98a70c56847e4b"
  },
  {
    "url": "amp/archive/index.html",
    "revision": "d5dd983c8867d5f051a1db5b8dd5dd87"
  },
  {
    "url": "amp/awards/index.html",
    "revision": "3f6750bd198902e67bbefcc46e742b3d"
  },
  {
    "url": "amp/blog/1/01/01/ibooks/index.html",
    "revision": "314872f91897b3693ef80a1df8f2eab1"
  },
  {
    "url": "amp/blog/1/01/01/linkedin-posts/index.html",
    "revision": "7335ac1bd1d47ac356e2da4451279cff"
  },
  {
    "url": "amp/blog/1/01/01/medium/index.html",
    "revision": "085c9593f692c265896e1a28cc39be5e"
  },
  {
    "url": "amp/blog/1/01/01/quora-answers/index.html",
    "revision": "58fcaf9568373dc676c0d4512bb7f130"
  },
  {
    "url": "amp/blog/1/01/01/scribd/index.html",
    "revision": "10fb1b2170dd52ba819267f1a361247e"
  },
  {
    "url": "amp/blog/1/01/01/stack-exchange/index.html",
    "revision": "8c39856d19ce93bb1974b28a52297575"
  },
  {
    "url": "amp/blog/1/01/01/tweets/index.html",
    "revision": "bb045bdecd16494e1b323adbde61eca7"
  },
  {
    "url": "amp/blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "25e0aa8773b669e16689d93563f1e723"
  },
  {
    "url": "amp/contact/index.html",
    "revision": "c1af208d3869167e23647eb901910901"
  },
  {
    "url": "amp/index.html",
    "revision": "364db56b290bad68a7af51fa6761b2ae"
  },
  {
    "url": "amp/portfolio/1/01/01/behance/index.html",
    "revision": "cdbf4f995946d43ac276ff663c82a72a"
  },
  {
    "url": "amp/portfolio/1/01/01/code-school/index.html",
    "revision": "ba699558c48ae001c43f9000eb82a74e"
  },
  {
    "url": "amp/portfolio/1/01/01/devpost/index.html",
    "revision": "400645e17252eb6f906886fdfea06cc9"
  },
  {
    "url": "amp/portfolio/1/01/01/github-️/index.html",
    "revision": "1ed3a134e9eb6ffa07c9ff15385ad5ba"
  },
  {
    "url": "amp/portfolio/1/01/01/slideshare/index.html",
    "revision": "a1f36cc5b59fcb8470252633c30a0e2e"
  },
  {
    "url": "amp/portfolio/1/01/01/youtube/index.html",
    "revision": "2cb1698766b0dc473ae4d67e9fbe0e58"
  },
  {
    "url": "amp/services/freelancing/index.html",
    "revision": "1f2ecda23aba8ccfbc1ed060974e3140"
  },
  {
    "url": "amp/services/mentoring/index.html",
    "revision": "02627e5ee4f56b1dedac26c48a658b4f"
  },
  {
    "url": "amp/speaking/burn-prevention/index.html",
    "revision": "6c7bcf171741ad62145bd46b13dbce1c"
  },
  {
    "url": "amp/speaking/coding-bootcamps/index.html",
    "revision": "e034983b083099fcb646582816493e6c"
  },
  {
    "url": "amp/speaking/hour-of-code/index.html",
    "revision": "44defc82781aa735ca82f5d6b72dc4f7"
  },
  {
    "url": "amp/speaking/imovie101/index.html",
    "revision": "bbd263c1625b6420aaf586aec19155d7"
  },
  {
    "url": "amp/speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "1af6971cb84fab52f8cf3c19d5d64670"
  },
  {
    "url": "amp/speaking/typescript-101/index.html",
    "revision": "b728850c77871e037eb8f34287f152a5"
  },
  {
    "url": "amp/speaking/va-acm/index.html",
    "revision": "dfaf9371a952a8dd08063c76e3ef4676"
  },
  {
    "url": "amp/speaking/web-design/index.html",
    "revision": "8dcc63b7d85dee25dfc43ee175ebb514"
  },
  {
    "url": "archive/index.html",
    "revision": "d5dd983c8867d5f051a1db5b8dd5dd87"
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
    "revision": "3f6750bd198902e67bbefcc46e742b3d"
  },
  {
    "url": "blog/1/01/01/ibooks/index.html",
    "revision": "314872f91897b3693ef80a1df8f2eab1"
  },
  {
    "url": "blog/1/01/01/linkedin-posts/index.html",
    "revision": "7335ac1bd1d47ac356e2da4451279cff"
  },
  {
    "url": "blog/1/01/01/medium/index.html",
    "revision": "085c9593f692c265896e1a28cc39be5e"
  },
  {
    "url": "blog/1/01/01/quora-answers/index.html",
    "revision": "58fcaf9568373dc676c0d4512bb7f130"
  },
  {
    "url": "blog/1/01/01/scribd/index.html",
    "revision": "10fb1b2170dd52ba819267f1a361247e"
  },
  {
    "url": "blog/1/01/01/stack-exchange/index.html",
    "revision": "8c39856d19ce93bb1974b28a52297575"
  },
  {
    "url": "blog/1/01/01/tweets/index.html",
    "revision": "bb045bdecd16494e1b323adbde61eca7"
  },
  {
    "url": "blog/1/01/01/wordpress-blog-old/index.html",
    "revision": "25e0aa8773b669e16689d93563f1e723"
  },
  {
    "url": "blog/index.html",
    "revision": "5a64a62b71b3efefe7ae4600ebef691c"
  },
  {
    "url": "categories/2015/index.html",
    "revision": "41385fa920487857f3c14d51f1a9b849"
  },
  {
    "url": "categories/2016/index.html",
    "revision": "1add77f6d5e93c42dd6770bc0a50fbc8"
  },
  {
    "url": "categories/2017/index.html",
    "revision": "7ba5a4b6d61f6e5790c49ebe278a52e2"
  },
  {
    "url": "categories/award/index.html",
    "revision": "29c01dac7132d161dbe55c5cd6e29c86"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "4597f41d16bbe759527a7607cc0981e5"
  },
  {
    "url": "categories/book/index.html",
    "revision": "1463d4e9e6cc39936f5c8c90efd73161"
  },
  {
    "url": "categories/bootcamps/index.html",
    "revision": "d0626989c67a0dcaa0434db365f9dc99"
  },
  {
    "url": "categories/burnprevention/index.html",
    "revision": "162b9afe7e166f77a71210032358c710"
  },
  {
    "url": "categories/certainty/index.html",
    "revision": "33fbdb44ed1188d9de4c5ade850ff12f"
  },
  {
    "url": "categories/conference/index.html",
    "revision": "63a380a375e8ec57a3970aa4bc663ccb"
  },
  {
    "url": "categories/creativity/index.html",
    "revision": "81d8c4b634cbf9467164e6757b398a8c"
  },
  {
    "url": "categories/design/index.html",
    "revision": "90f3730ec9ed05697810b905055d660f"
  },
  {
    "url": "categories/education/index.html",
    "revision": "15ff40b89aaa5acd8509bc99e7a2f97d"
  },
  {
    "url": "categories/experience/index.html",
    "revision": "548d7fc6ea346712f273cf47f9bbbac9"
  },
  {
    "url": "categories/hackathon/index.html",
    "revision": "734b11ba8a7df9e3da8ebcc0a3ddb2e0"
  },
  {
    "url": "categories/hourofcode/index.html",
    "revision": "4e3581307f48f6f423766841e040d067"
  },
  {
    "url": "categories/imovie101/index.html",
    "revision": "18820edb8c09f8005cdffd40a6c74593"
  },
  {
    "url": "categories/index.html",
    "revision": "0998af05c86244b2f4049299134d9b72"
  },
  {
    "url": "categories/portfolio/index.html",
    "revision": "af036dc6f1ed8ae5226418130926c664"
  },
  {
    "url": "categories/presentation/index.html",
    "revision": "f9376d7fb99e62f17e90f87bc190d90a"
  },
  {
    "url": "categories/program/index.html",
    "revision": "9ae1d6a6be9c7fcd1a33249a72a3386f"
  },
  {
    "url": "categories/research/index.html",
    "revision": "5d603a5e7bd1db06fef59037c7ed6a78"
  },
  {
    "url": "categories/review/index.html",
    "revision": "dda746915a743f74a20698d729f27824"
  },
  {
    "url": "categories/speaking/index.html",
    "revision": "eeebafbde9fadf374f94ad4f613fb020"
  },
  {
    "url": "categories/typescript101/index.html",
    "revision": "6e2202872c9a530bcdd032d25c207b1b"
  },
  {
    "url": "categories/vaacm/index.html",
    "revision": "dc04b18e8364df7c9273dc331a798a24"
  },
  {
    "url": "categories/volunteering/index.html",
    "revision": "fc3312519a3874960314fc7cab21d581"
  },
  {
    "url": "categories/web/index.html",
    "revision": "3cc699e9e4199c75913d0c5fe8b64e21"
  },
  {
    "url": "categories/webdesign/index.html",
    "revision": "b0ffd0494da5c04988d9deb060d9d429"
  },
  {
    "url": "categories/wizard/index.html",
    "revision": "a7c69ac10ef4a403a6192e17042e1f25"
  },
  {
    "url": "contact/index.html",
    "revision": "c1af208d3869167e23647eb901910901"
  },
  {
    "url": "/dist/assets/js/index.html",
    "revision": "364db56b290bad68a7af51fa6761b2ae"
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
    "revision": "cdbf4f995946d43ac276ff663c82a72a"
  },
  {
    "url": "portfolio/1/01/01/code-school/index.html",
    "revision": "ba699558c48ae001c43f9000eb82a74e"
  },
  {
    "url": "portfolio/1/01/01/devpost/index.html",
    "revision": "400645e17252eb6f906886fdfea06cc9"
  },
  {
    "url": "portfolio/1/01/01/github-️/index.html",
    "revision": "1ed3a134e9eb6ffa07c9ff15385ad5ba"
  },
  {
    "url": "portfolio/1/01/01/slideshare/index.html",
    "revision": "a1f36cc5b59fcb8470252633c30a0e2e"
  },
  {
    "url": "portfolio/1/01/01/youtube/index.html",
    "revision": "2cb1698766b0dc473ae4d67e9fbe0e58"
  },
  {
    "url": "portfolio/index.html",
    "revision": "7c15aba6066aaf4fa46a46079412080e"
  },
  {
    "url": "services/freelancing/index.html",
    "revision": "1f2ecda23aba8ccfbc1ed060974e3140"
  },
  {
    "url": "services/index.html",
    "revision": "490f17152c3f4a166607be24fc7ca5c3"
  },
  {
    "url": "services/mentoring/index.html",
    "revision": "02627e5ee4f56b1dedac26c48a658b4f"
  },
  {
    "url": "speaking/burn-prevention/index.html",
    "revision": "6c7bcf171741ad62145bd46b13dbce1c"
  },
  {
    "url": "speaking/coding-bootcamps/index.html",
    "revision": "e034983b083099fcb646582816493e6c"
  },
  {
    "url": "speaking/hour-of-code/index.html",
    "revision": "44defc82781aa735ca82f5d6b72dc4f7"
  },
  {
    "url": "speaking/imovie101/index.html",
    "revision": "bbd263c1625b6420aaf586aec19155d7"
  },
  {
    "url": "speaking/index.html",
    "revision": "b05e3300595a42d461a082f4571397f7"
  },
  {
    "url": "speaking/so-you-want-to-be-a-wizard/index.html",
    "revision": "1af6971cb84fab52f8cf3c19d5d64670"
  },
  {
    "url": "speaking/typescript-101/index.html",
    "revision": "b728850c77871e037eb8f34287f152a5"
  },
  {
    "url": "speaking/va-acm/index.html",
    "revision": "dfaf9371a952a8dd08063c76e3ef4676"
  },
  {
    "url": "speaking/web-design/index.html",
    "revision": "8dcc63b7d85dee25dfc43ee175ebb514"
  },
  {
    "url": "tags/100/index.html",
    "revision": "6bda003e36abab9159449d6b086676cd"
  },
  {
    "url": "tags/100th/index.html",
    "revision": "04651187885f4ae57520ba79896963fd"
  },
  {
    "url": "tags/128x128/index.html",
    "revision": "1cc2f1093ea92bf2555550454713d09b"
  },
  {
    "url": "tags/2008/index.html",
    "revision": "768ca51369fdc042daf0a22e636749c4"
  },
  {
    "url": "tags/2d-game/index.html",
    "revision": "43f7fff090c39a77cbc00d3accde0948"
  },
  {
    "url": "tags/50-crimes/index.html",
    "revision": "3c06de5b7cf0c0e6da53f50e9005669f"
  },
  {
    "url": "tags/50-lines-for-50-crimes/index.html",
    "revision": "83a8fa6b747e66a79c80e304c2876292"
  },
  {
    "url": "tags/50-lines/index.html",
    "revision": "2b9ab010047e72c92777d19275e17ae2"
  },
  {
    "url": "tags/757-developers/index.html",
    "revision": "cb219d747e77762e1da9a9046ba18918"
  },
  {
    "url": "tags/757/index.html",
    "revision": "a21266bbce60e13e3f0b41a3bda77c4d"
  },
  {
    "url": "tags/757dev/index.html",
    "revision": "161ef554b471821ad351c8ee78ef4619"
  },
  {
    "url": "tags/8020/index.html",
    "revision": "59209a68bb85905865af9c8de21a866d"
  },
  {
    "url": "tags/a-poem-for-a-friend/index.html",
    "revision": "335c180e6415d8778e47f3dd8af20e9a"
  },
  {
    "url": "tags/aaai-2015/index.html",
    "revision": "5fb0204f46faf03e23b53e0e8f07aa8b"
  },
  {
    "url": "tags/aaai/index.html",
    "revision": "9a66f2b5df872aa739faf152180cb2bb"
  },
  {
    "url": "tags/academia/index.html",
    "revision": "ea91147ae600c4a6da76c2a032ad1d5a"
  },
  {
    "url": "tags/academy/index.html",
    "revision": "ce038ded9ead7c05c93a3946ad41abb1"
  },
  {
    "url": "tags/accenture/index.html",
    "revision": "d3d72c6f1e645b1f90d1f6aad95c4852"
  },
  {
    "url": "tags/acceptance/index.html",
    "revision": "44974b18c2597a76c042448a6f9765e0"
  },
  {
    "url": "tags/accepted/index.html",
    "revision": "ccc147d99eeb580533776752a455b070"
  },
  {
    "url": "tags/accountability/index.html",
    "revision": "786a9241dd5dbfba5fecc7b51c3449ec"
  },
  {
    "url": "tags/adapt-and-survive/index.html",
    "revision": "713c69b94e046bf8a64d61a31a5a886d"
  },
  {
    "url": "tags/admissions-challenge/index.html",
    "revision": "bda53e5ff9b4ce48a82f8034c4e1c575"
  },
  {
    "url": "tags/admissions/index.html",
    "revision": "342c2a6db3a9deab344c8fc0e5d573fb"
  },
  {
    "url": "tags/adobe-after-effects/index.html",
    "revision": "f96efa7f0ba620850b2c8ba508cdc5d2"
  },
  {
    "url": "tags/adobe-premiere-pro/index.html",
    "revision": "699c92815dad8ce98cb64ce7ed1970ac"
  },
  {
    "url": "tags/adrenaline-junkies/index.html",
    "revision": "622b812c5509ad8edd20ef023da9aa99"
  },
  {
    "url": "tags/adult-perspective/index.html",
    "revision": "ba3846054f4345f1c20b79d5378e0b33"
  },
  {
    "url": "tags/affordance-models/index.html",
    "revision": "704af90d8e18b064903a885ba6812dcf"
  },
  {
    "url": "tags/afro-movers-and-shakers/index.html",
    "revision": "8edf7b701da26e2fb70e71bde2840467"
  },
  {
    "url": "tags/aftermath/index.html",
    "revision": "ab5e3c4de3620baf5107d75dd8cfb608"
  },
  {
    "url": "tags/ai-conference/index.html",
    "revision": "deafd0488551d8577a5f587a42e60723"
  },
  {
    "url": "tags/ai/index.html",
    "revision": "9324d5f1684cd7519818355799113daf"
  },
  {
    "url": "tags/ai2/index.html",
    "revision": "3907e2e9dd35fdf0f3cb8d02630161ec"
  },
  {
    "url": "tags/ailey-extension/index.html",
    "revision": "0b57db92ca326c6f12d9d30d9787a125"
  },
  {
    "url": "tags/air-heads/index.html",
    "revision": "cc614e26cd2d9e4a0b555ff96cf3ec56"
  },
  {
    "url": "tags/airmail-integration/index.html",
    "revision": "e2145352e262fb01f861886c089d4b33"
  },
  {
    "url": "tags/airmail-school-email/index.html",
    "revision": "5d61ecad8d340946ae808db79f88f68a"
  },
  {
    "url": "tags/airmail/index.html",
    "revision": "cc1eb7f6e290af725687cdce30e38fbc"
  },
  {
    "url": "tags/airtable-app/index.html",
    "revision": "cf596151e1be74c411004ab977d07a50"
  },
  {
    "url": "tags/airtable/index.html",
    "revision": "70dfdaf4a84c5781f5fb2a966a1cd795"
  },
  {
    "url": "tags/ajax/index.html",
    "revision": "295bceaff9cbaa747321bec7a3161f63"
  },
  {
    "url": "tags/alchemize/index.html",
    "revision": "ec90928cd9728b555ad392f160f1eeda"
  },
  {
    "url": "tags/alfred/index.html",
    "revision": "43fe4a629885ba2921bfb309ec4ffb12"
  },
  {
    "url": "tags/algorithms/index.html",
    "revision": "108abb0973ac766de4bb81770e6ebb38"
  },
  {
    "url": "tags/alien/index.html",
    "revision": "be57f3e43d0818596cbe143324ccdd35"
  },
  {
    "url": "tags/aline-lerner/index.html",
    "revision": "d6c5da1ec38d439afb2ad37e54f67bf1"
  },
  {
    "url": "tags/alpha/index.html",
    "revision": "cbd088005d745d115f033a34cdfe2662"
  },
  {
    "url": "tags/alterconf-new-york-city/index.html",
    "revision": "9d6e644ab33980b9d37ad82724b745ac"
  },
  {
    "url": "tags/alterconf-nyc-2016/index.html",
    "revision": "d081594eb9822a3867e9056dab51b5d1"
  },
  {
    "url": "tags/alterconf-nyc/index.html",
    "revision": "eacf0b705c59f78df1fddd7b54ef3d57"
  },
  {
    "url": "tags/alterconf/index.html",
    "revision": "fd691c1010ee0d710891bfc35760b175"
  },
  {
    "url": "tags/alternote/index.html",
    "revision": "b2e4a73afa7e72357189a9a7fbd1f6d2"
  },
  {
    "url": "tags/alumni-panel/index.html",
    "revision": "d954cba47094e24c73e59273e6527c18"
  },
  {
    "url": "tags/ameot/index.html",
    "revision": "9d60788a0542b7505135244f523322b2"
  },
  {
    "url": "tags/american-museum-of-natural-history/index.html",
    "revision": "3c2310e519b5be6e58e0b3db5aeac5d8"
  },
  {
    "url": "tags/amphetamine/index.html",
    "revision": "4c854fae369729880586a9abd8380aaf"
  },
  {
    "url": "tags/ancestor/index.html",
    "revision": "e9c26a24007ebc102fe9f93d2b491b2d"
  },
  {
    "url": "tags/angular-js/index.html",
    "revision": "d308d4e8937aaeef9f2734146c4a2a4f"
  },
  {
    "url": "tags/angular/index.html",
    "revision": "228cf20e6ae678895e00bac91a0c3bef"
  },
  {
    "url": "tags/angularjs/index.html",
    "revision": "52505581a8ea9e07d41bdfa7afea131e"
  },
  {
    "url": "tags/anonymous-functions/index.html",
    "revision": "adcc9029f1c2c2ff1f00cb7f6f4bb87f"
  },
  {
    "url": "tags/apocalypse/index.html",
    "revision": "41979e21f76fcb6a77fa6db2da59a4c2"
  },
  {
    "url": "tags/app-academy/index.html",
    "revision": "f7cda9a672dba146ae7a9b82734b87f4"
  },
  {
    "url": "tags/app-store/index.html",
    "revision": "df20cac451360dbdde67b7f4f40da90a"
  },
  {
    "url": "tags/apple/index.html",
    "revision": "948ed1238984804fd45d5f488272eac9"
  },
  {
    "url": "tags/application/index.html",
    "revision": "666e54f24518f1c43c80d29ae53a5add"
  },
  {
    "url": "tags/applications/index.html",
    "revision": "3c538a69d2646991a5191e792cbc1270"
  },
  {
    "url": "tags/arcade-publishing/index.html",
    "revision": "aafa087f8bfa805c2dc7ca58588b07d8"
  },
  {
    "url": "tags/archos/index.html",
    "revision": "38672991878a49cccdf758bf74165da5"
  },
  {
    "url": "tags/area-of-a-rectangle-python/index.html",
    "revision": "dd48dbb5eb7393f57b08fce8faa8b54a"
  },
  {
    "url": "tags/arithmetic/index.html",
    "revision": "1074a2251aae958c9ca79b6d7304c5d4"
  },
  {
    "url": "tags/array-implementation/index.html",
    "revision": "2bf2211046f7d157df65ba5906fbeb20"
  },
  {
    "url": "tags/array/index.html",
    "revision": "86e5cd8b94eb81a947d056d80b938c5f"
  },
  {
    "url": "tags/arrays/index.html",
    "revision": "2bd230c4d0be4587d86250afaa5dbba2"
  },
  {
    "url": "tags/arsenic/index.html",
    "revision": "59e80a675fed9daa377d61b5906d3af9"
  },
  {
    "url": "tags/artificial-intelligence/index.html",
    "revision": "fdc6c7d1e84740bcb6f621297eaaf46f"
  },
  {
    "url": "tags/artificially-intelligent/index.html",
    "revision": "4fa1e50cf6c8575147adf17df6b32766"
  },
  {
    "url": "tags/asperger-syndrome/index.html",
    "revision": "e47ae3b612d4a7b5030eb7eff15d9edc"
  },
  {
    "url": "tags/asperger/index.html",
    "revision": "f94be6b5988063d31f22596467fe82f0"
  },
  {
    "url": "tags/aspie/index.html",
    "revision": "4f4810f66f60c325bedfd675de4c26ab"
  },
  {
    "url": "tags/assigning/index.html",
    "revision": "fa9b221973c74ccde2124fb44c2507a4"
  },
  {
    "url": "tags/at-home-advisor/index.html",
    "revision": "d078b87a1e21d4f9eb7e26573622ac13"
  },
  {
    "url": "tags/atheists/index.html",
    "revision": "36f392554e26d0c93e344cb85b9e63bd"
  },
  {
    "url": "tags/auschwitz-a-doctors-eyewitness-account/index.html",
    "revision": "466a2b55f669c3635fb700b06a1a910f"
  },
  {
    "url": "tags/auschwitz/index.html",
    "revision": "a9b51f712a6e5f86d5e3ff0c976fa192"
  },
  {
    "url": "tags/austin/index.html",
    "revision": "f80b47e904e877fc70ba01f0ca435c19"
  },
  {
    "url": "tags/authentication/index.html",
    "revision": "960405120cb4f113c8b8a83954c60b7d"
  },
  {
    "url": "tags/autism-spectrum/index.html",
    "revision": "478723780d108164515dbb0fdf6a2c4c"
  },
  {
    "url": "tags/automated-jobs/index.html",
    "revision": "6059f1829582e840dbc690b26afb0cbe"
  },
  {
    "url": "tags/automated/index.html",
    "revision": "3995bddd771471aa2233075e6f4cbcaa"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "4a5778024649a7d6a243abbb50e207af"
  },
  {
    "url": "tags/automator/index.html",
    "revision": "74d14dd8e0f4139325ddc7d9b1452839"
  },
  {
    "url": "tags/avalon/index.html",
    "revision": "281b82b67c8122a5f892be1d9b5d834d"
  },
  {
    "url": "tags/aviation/index.html",
    "revision": "5907cdd201ca5c422f8544a3ec7f621a"
  },
  {
    "url": "tags/awkward-silences/index.html",
    "revision": "2d4b632bdf26263f618df1c17e3b3928"
  },
  {
    "url": "tags/awwwards/index.html",
    "revision": "5216903a05399f4e3141760aa87635ea"
  },
  {
    "url": "tags/baboon/index.html",
    "revision": "32f02a98c4595b86099681b7c0683fc4"
  },
  {
    "url": "tags/background/index.html",
    "revision": "dc32d1bb5f41c918c1cbcd87b414d2be"
  },
  {
    "url": "tags/backgrounds/index.html",
    "revision": "5688e17a229cbeaba660a32efcf371dc"
  },
  {
    "url": "tags/balanced/index.html",
    "revision": "b9f674066a4eb53ea037d708adaae559"
  },
  {
    "url": "tags/balls/index.html",
    "revision": "a3eb9e6138cf8248c4151e891987cea3"
  },
  {
    "url": "tags/banquet/index.html",
    "revision": "c4305854622dc98257a26c29a5829427"
  },
  {
    "url": "tags/barbara-demick/index.html",
    "revision": "57dc6df63262794bf59e729fa834a963"
  },
  {
    "url": "tags/barbossa/index.html",
    "revision": "2418635ba7ae6ba0f28129c8f55c0723"
  },
  {
    "url": "tags/bartender/index.html",
    "revision": "0eab43faea9fd57449c7392aeea7c75e"
  },
  {
    "url": "tags/basic-structure/index.html",
    "revision": "5bc71a9dabb55bb71c26c2722bd17ab9"
  },
  {
    "url": "tags/battle-school/index.html",
    "revision": "6c81ba8e5654fe3239d437d3b890211a"
  },
  {
    "url": "tags/bay-area/index.html",
    "revision": "416ff44ad1fa4780496ea72a285e171c"
  },
  {
    "url": "tags/be-wary/index.html",
    "revision": "ae5d32e253d81dd2456a057a51a3c52e"
  },
  {
    "url": "tags/beauty/index.html",
    "revision": "dd381b35b4aee765630cd0c462a6fe46"
  },
  {
    "url": "tags/bee/index.html",
    "revision": "4cf133922c6057e113a2ac651dec31ad"
  },
  {
    "url": "tags/beginner/index.html",
    "revision": "26bcd6f2995517de6c069888f1d9e118"
  },
  {
    "url": "tags/beginning-programming/index.html",
    "revision": "ae8f6d3062e2200633d1fb8916682476"
  },
  {
    "url": "tags/behance/index.html",
    "revision": "16bdbdea5da264cf3bcca9076c4edd74"
  },
  {
    "url": "tags/benito-de-soto/index.html",
    "revision": "493652d63386470194c92c19327e2b93"
  },
  {
    "url": "tags/bento/index.html",
    "revision": "aedd4aa4da048be13228afc658742494"
  },
  {
    "url": "tags/best-bootcamps/index.html",
    "revision": "1fb900c4f2a088bfdc0e8f93b1d05544"
  },
  {
    "url": "tags/beta-day/index.html",
    "revision": "fbe9ea0ccba0f314f1e3659e6c0da71e"
  },
  {
    "url": "tags/beta/index.html",
    "revision": "1d2eb943e67ee8fed9b52538ab96f2b0"
  },
  {
    "url": "tags/bethel-high-school/index.html",
    "revision": "0cae74251ff332ac3a2e7adf9453b6a4"
  },
  {
    "url": "tags/bettersnaptool/index.html",
    "revision": "c18f9dfaefec155a64955e17145f12a5"
  },
  {
    "url": "tags/bieber/index.html",
    "revision": "c75d2406ec8836ac5ee1a3ad1fc581bb"
  },
  {
    "url": "tags/big-presentation/index.html",
    "revision": "dca586610852f443966915f9b5796062"
  },
  {
    "url": "tags/binary-search-tree/index.html",
    "revision": "674c9623c51b8d44338eb4dee0754844"
  },
  {
    "url": "tags/binary-tree/index.html",
    "revision": "f9fba4f286343228f1555c5508bfc458"
  },
  {
    "url": "tags/binary-trees/index.html",
    "revision": "1c062ce64b309fbb61a8a8db03265855"
  },
  {
    "url": "tags/binary/index.html",
    "revision": "29f1c10d1db1fdc6435e82ae0b45e29b"
  },
  {
    "url": "tags/binding-of-isaac-review/index.html",
    "revision": "2b0c5619b89be3ccee85b4845836ca52"
  },
  {
    "url": "tags/binding-of-isaac/index.html",
    "revision": "e1353b3bd6f2c586975f816de2307a2d"
  },
  {
    "url": "tags/binding/index.html",
    "revision": "a198cf047c370ff5cf83b1435aaa291b"
  },
  {
    "url": "tags/bit/index.html",
    "revision": "6eee584cdd53431ee3668d084b079431"
  },
  {
    "url": "tags/bitcoin/index.html",
    "revision": "6d2ef79b648c7ae5c2dc534874e58761"
  },
  {
    "url": "tags/bitmaker-labs/index.html",
    "revision": "f09c5a49c9ea22aa9df0b0d476870c6e"
  },
  {
    "url": "tags/bitmaker/index.html",
    "revision": "0d22411f6944a0649308efe211fc620d"
  },
  {
    "url": "tags/bits/index.html",
    "revision": "b5bf6e6a00d03b420dfac81f692a0d6a"
  },
  {
    "url": "tags/black-beard/index.html",
    "revision": "7dec265b757dccb3b6688e4c4ab59199"
  },
  {
    "url": "tags/black-pearl/index.html",
    "revision": "a1fb7ff70fd347a30860a7c3f4fa113e"
  },
  {
    "url": "tags/blackbeard/index.html",
    "revision": "5c48ebe8b163b129390e1b0c662eb8af"
  },
  {
    "url": "tags/blanket/index.html",
    "revision": "1a3f072724217310f7ae611b9db43b3f"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "19fa331eb846a388e2aa15c0245a7f5f"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "70d03470c412b89fdaffc58078c70870"
  },
  {
    "url": "tags/bloody-game/index.html",
    "revision": "ed9834607220ae8b24e21496d8de9dc3"
  },
  {
    "url": "tags/bloomberg/index.html",
    "revision": "824f073e341fc2e07d514db9f6c793c0"
  },
  {
    "url": "tags/board-game/index.html",
    "revision": "4af95c1c44fef80967fbc7da6688b2c5"
  },
  {
    "url": "tags/book-review/index.html",
    "revision": "759a5b7c8d0e6a9046d183e8606c3501"
  },
  {
    "url": "tags/boot-camp/index.html",
    "revision": "14a9751efd0650d24e578e2b9b0d1a17"
  },
  {
    "url": "tags/bootcamp-agreement/index.html",
    "revision": "35fd4e9f7fd3be97b08ed9de72eb73d2"
  },
  {
    "url": "tags/bootcamp-hawaii/index.html",
    "revision": "b33a18cc37fa743c75feb39bfbfe2840"
  },
  {
    "url": "tags/bootcamp.me/index.html",
    "revision": "fac2bd7caa9cd799ff18ef8587f263be"
  },
  {
    "url": "tags/bootcamp/index.html",
    "revision": "814eeeb33c3c6981d9d7ab3ed9568d8f"
  },
  {
    "url": "tags/bootcamper.io/index.html",
    "revision": "93836589c90abaf01b0bd78c56a34b28"
  },
  {
    "url": "tags/bootcamps.in/index.html",
    "revision": "44cce3120015e0fc977dde030bef51a7"
  },
  {
    "url": "tags/bootcamps/index.html",
    "revision": "98519ca846db0ee302ad53da49ee5908"
  },
  {
    "url": "tags/bootstrap/index.html",
    "revision": "11ea9bab16addef577aef9961ee4ee92"
  },
  {
    "url": "tags/boston/index.html",
    "revision": "4f9ede076eeedfba543d48dea37e5bc8"
  },
  {
    "url": "tags/bow/index.html",
    "revision": "75d7be7e13c82b6a0c08979aec67d092"
  },
  {
    "url": "tags/boys/index.html",
    "revision": "d10281cf015502fa076bd78c30181eb2"
  },
  {
    "url": "tags/brief-thoughts/index.html",
    "revision": "24349fdb4f9c1c597f9e4524a3fab0be"
  },
  {
    "url": "tags/briefbox/index.html",
    "revision": "63b38c1db4f87e0e2d5653729ba509ec"
  },
  {
    "url": "tags/bubble-sort/index.html",
    "revision": "1e184dbb9658f775c183eced0a113514"
  },
  {
    "url": "tags/bubbles/index.html",
    "revision": "5bdec334c331da070f7132ef6ec30179"
  },
  {
    "url": "tags/bummer/index.html",
    "revision": "b45e561ea8f55752546ae8b34225deea"
  },
  {
    "url": "tags/burger-king/index.html",
    "revision": "bdcc6a4fe3239f89df9edbd7b0a5068e"
  },
  {
    "url": "tags/byword/index.html",
    "revision": "72690201306602ec0bab68d4fef61066"
  },
  {
    "url": "tags/c-programming/index.html",
    "revision": "02c9cbf1f5cefb5cb404314f4a9695e6"
  },
  {
    "url": "tags/c++/index.html",
    "revision": "e38b472bb4e1f5493b0975de774b65b4"
  },
  {
    "url": "tags/calculus/index.html",
    "revision": "0517a139a5998d8b5b0888a476c3eb4d"
  },
  {
    "url": "tags/callbacks/index.html",
    "revision": "58effcb151757fa84a1c1fa896d93498"
  },
  {
    "url": "tags/campus/index.html",
    "revision": "ce2551cd01662eb8adcb34f8f48d7087"
  },
  {
    "url": "tags/canada/index.html",
    "revision": "108c9e40c2e5980ba82707b62ce7bdb2"
  },
  {
    "url": "tags/capstone-project/index.html",
    "revision": "26e37d5c3f3ac9686321a2caf00f988a"
  },
  {
    "url": "tags/captain-jack-sparrow/index.html",
    "revision": "f9af4b57346c28bec1142714b16c5d9b"
  },
  {
    "url": "tags/captone/index.html",
    "revision": "f676bf2b740045c1b00907620fdedc41"
  },
  {
    "url": "tags/capwic/index.html",
    "revision": "dbdbb747fce1bc8a0181ee63c7a401d3"
  },
  {
    "url": "tags/career/index.html",
    "revision": "147c72425b63e7b7c51bb7d84206d339"
  },
  {
    "url": "tags/casual/index.html",
    "revision": "f1e148e51dbbdb0d260fe87c8336cb02"
  },
  {
    "url": "tags/cb/index.html",
    "revision": "8c4f8f5a551aa0e2c11bdb236d73c27d"
  },
  {
    "url": "tags/cbs/index.html",
    "revision": "f7a870309ca764890caa7b05c9fd4755"
  },
  {
    "url": "tags/cdock/index.html",
    "revision": "d9e916105175d6cad2cb18c3615d41ba"
  },
  {
    "url": "tags/celsius-to-fahrenheit/index.html",
    "revision": "8722b238ff17769d99eda195dc2175b6"
  },
  {
    "url": "tags/chad-trutt/index.html",
    "revision": "212c631f40c4d817a7e4fcfe9a3f8034"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "0450d90d70b974b861c4045c2082607c"
  },
  {
    "url": "tags/change/index.html",
    "revision": "4cbe112feefe2d22297c9e483b1e0667"
  },
  {
    "url": "tags/chaos-faction/index.html",
    "revision": "f5b2344b3343ca9c31bfbd1e9cff7c50"
  },
  {
    "url": "tags/character/index.html",
    "revision": "6696f2cc2a4d0716b675854eb845d057"
  },
  {
    "url": "tags/chat-development/index.html",
    "revision": "9957494bec6d0ab8347e3be8cbc4e11e"
  },
  {
    "url": "tags/cheerio/index.html",
    "revision": "8f6f72b8c86ecf7ee077fc74ef29c92d"
  },
  {
    "url": "tags/cheese/index.html",
    "revision": "884c0e72a5063cfd815f34b6f67ede97"
  },
  {
    "url": "tags/cheesy/index.html",
    "revision": "31f876a0e8f6a63749120eacbf9ae8c8"
  },
  {
    "url": "tags/chicago/index.html",
    "revision": "7a504748e8744f2874f6ed6815447d4d"
  },
  {
    "url": "tags/children/index.html",
    "revision": "aedddda45eef2f9b5dd720a9c3f2793e"
  },
  {
    "url": "tags/christopher-t/index.html",
    "revision": "a54c756be446b9529021f88cdce86709"
  },
  {
    "url": "tags/chrome-app-launcher/index.html",
    "revision": "813c7c7df6e420072b8c29afd536a31e"
  },
  {
    "url": "tags/chrome-extensions/index.html",
    "revision": "4fb47cfc42e3b2be5d66761e7dc30aec"
  },
  {
    "url": "tags/chrome-web-store/index.html",
    "revision": "eeb14080aceefbdb8e83d8951fa803aa"
  },
  {
    "url": "tags/chrome/index.html",
    "revision": "49dbef71f54aeff06f381155cef78832"
  },
  {
    "url": "tags/chromecasts/index.html",
    "revision": "05ac56c4cd669ddc22775f9a42225b9b"
  },
  {
    "url": "tags/chronicles-of-narnia/index.html",
    "revision": "b118d49b24e0a4798d507cbc823d48d6"
  },
  {
    "url": "tags/cinema4d/index.html",
    "revision": "1c0af490a97f86e79a3b5f14ddffb9ce"
  },
  {
    "url": "tags/circle/index.html",
    "revision": "06befb143737de7b673288dced8c90de"
  },
  {
    "url": "tags/class/index.html",
    "revision": "3db1e33e7667335be00ea110ef579ef6"
  },
  {
    "url": "tags/classes/index.html",
    "revision": "3cb7f2e95ffac90785b254a07a1da9ec"
  },
  {
    "url": "tags/cleft-lip/index.html",
    "revision": "01ede62bd873122ac6dd6aaccb686ab5"
  },
  {
    "url": "tags/cleft-palette/index.html",
    "revision": "004c7358e970a8c6be9b37e71d052a24"
  },
  {
    "url": "tags/closures/index.html",
    "revision": "8ce19e9e2a91b7b398ae189e46375f87"
  },
  {
    "url": "tags/cockroach/index.html",
    "revision": "9220a5c90c7816a71bb65d7e6706be5d"
  },
  {
    "url": "tags/code-combat/index.html",
    "revision": "37d169b9c4237e15b19ab1a48de3b86b"
  },
  {
    "url": "tags/code-combt/index.html",
    "revision": "97333ecc31b2cad139c3ca3e3e97c89b"
  },
  {
    "url": "tags/code-fellows/index.html",
    "revision": "bf935a4a68c6692eea95c5e059455eff"
  },
  {
    "url": "tags/code-school/index.html",
    "revision": "d5d9ce5ef7bbe79817081c9012954ee2"
  },
  {
    "url": "tags/code.org/index.html",
    "revision": "c73483d7309526cdceb930e4231dc2bc"
  },
  {
    "url": "tags/code/index.html",
    "revision": "de53f6b8f171155de3bc470afa4744f3"
  },
  {
    "url": "tags/code2040/index.html",
    "revision": "5368770799176199775c5916515a1dfc"
  },
  {
    "url": "tags/codecademy/index.html",
    "revision": "e93f9ea63eec29a53dedb941971a5896"
  },
  {
    "url": "tags/codecombat/index.html",
    "revision": "ece810963e3538f3d1e37075be61e117"
  },
  {
    "url": "tags/codepen/index.html",
    "revision": "017c2ac38068b48f4b62ff71690ef029"
  },
  {
    "url": "tags/coderbyte/index.html",
    "revision": "342f19162f844f3045e52c5b85d5b709"
  },
  {
    "url": "tags/codewars/index.html",
    "revision": "98b874b259013b02fcd7fcf2931ff014"
  },
  {
    "url": "tags/coding-bootcamp-experience/index.html",
    "revision": "479faa9e3285c9a2b89cb3cda6b75f79"
  },
  {
    "url": "tags/coding-bootcamp-fullstack/index.html",
    "revision": "fdbf53e174902f38d03f8ebe6aa0296a"
  },
  {
    "url": "tags/coding-bootcamp-map/index.html",
    "revision": "7997ce7444497fcc493213a1ae71f4da"
  },
  {
    "url": "tags/coding-bootcamp-prework/index.html",
    "revision": "aba6c3e12f56e1a696f855e1ccf9fd2d"
  },
  {
    "url": "tags/coding-bootcamp/index.html",
    "revision": "bc0448e6d2da013665400c9b9f28462c"
  },
  {
    "url": "tags/coding-bootcamps/index.html",
    "revision": "6fd091f488f58e36d5d0690f118abe0b"
  },
  {
    "url": "tags/coding-challenge/index.html",
    "revision": "25e2ff745682acb084f3e92a0b811be1"
  },
  {
    "url": "tags/coding-dojo/index.html",
    "revision": "63b2fcd3d9379d849cf80aefab746197"
  },
  {
    "url": "tags/coding-house/index.html",
    "revision": "8b63bdcfbf183e1c2fe8a79af57e8b9d"
  },
  {
    "url": "tags/coding-interview/index.html",
    "revision": "1cc045234e4117a96808e083e48e4319"
  },
  {
    "url": "tags/coding/index.html",
    "revision": "48c7a3cc04b684271ab83bb6d378dcd5"
  },
  {
    "url": "tags/codrops/index.html",
    "revision": "d9a7ff00d0524b35f7054496fcf5c1af"
  },
  {
    "url": "tags/codyhouse/index.html",
    "revision": "e2f1c9e8db47d949b0a087e2bbcd7635"
  },
  {
    "url": "tags/cohort/index.html",
    "revision": "83ee45ef0f3ee0353c00e5d31a57161e"
  },
  {
    "url": "tags/cold/index.html",
    "revision": "f51259dd4e0c25ec1aecb924cf374296"
  },
  {
    "url": "tags/college-students/index.html",
    "revision": "cf9637f2d030bdc408c70f7b7e5656e5"
  },
  {
    "url": "tags/color-theory/index.html",
    "revision": "39fbea804200e74f19de49fb7087bc3d"
  },
  {
    "url": "tags/coment.me/index.html",
    "revision": "d5c4b5cd8bd4b32bc93476928228e335"
  },
  {
    "url": "tags/command-line/index.html",
    "revision": "b2ff979620422f07195e3ca761cf4bfe"
  },
  {
    "url": "tags/comment/index.html",
    "revision": "58545d0a5cf93cae5b4032de24ac30ab"
  },
  {
    "url": "tags/comments/index.html",
    "revision": "e05b8098411753d2d53ee0f828288d43"
  },
  {
    "url": "tags/compare/index.html",
    "revision": "8307d8a028afb08ac45a851b9e9a2cff"
  },
  {
    "url": "tags/compiler/index.html",
    "revision": "7ba465eaaf547995716e2feb2c07f9bd"
  },
  {
    "url": "tags/complete/index.html",
    "revision": "ca42380decedb9e6a8f9ebd7a1e36d87"
  },
  {
    "url": "tags/computer-science-education/index.html",
    "revision": "35088b88c084e860d540f01d19a58643"
  },
  {
    "url": "tags/computer-science/index.html",
    "revision": "f221f7e0d385c7bab019529f11fce2e4"
  },
  {
    "url": "tags/computer/index.html",
    "revision": "bc409f0b8551dccefc9febc97d74454a"
  },
  {
    "url": "tags/computing/index.html",
    "revision": "2de8b0e435852d30d860981b41024106"
  },
  {
    "url": "tags/conceal/index.html",
    "revision": "b0083949c6653e127369190cb52feac9"
  },
  {
    "url": "tags/concrete/index.html",
    "revision": "22ef0c1dc77a839a9e088ce34adf868b"
  },
  {
    "url": "tags/coney-island/index.html",
    "revision": "4eab2f6ff7ce4124f7d6280c107fc2cc"
  },
  {
    "url": "tags/conference-hotel/index.html",
    "revision": "abf3cbe9f2cfe8bb9849233fe39d8390"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "280bfdd1d2a8972787f467bcab021eee"
  },
  {
    "url": "tags/conferences/index.html",
    "revision": "7a5a00a789b847bbf3aa8620eae2f8ae"
  },
  {
    "url": "tags/congratulations/index.html",
    "revision": "0f4b10c7a68ebc0adc95b57cc64d7590"
  },
  {
    "url": "tags/conquest/index.html",
    "revision": "58bce3334ea52ef8e54d7d8d43d6e92d"
  },
  {
    "url": "tags/contrast/index.html",
    "revision": "cd1f39a70b138e12d9e78e618b33c4a3"
  },
  {
    "url": "tags/conundrums/index.html",
    "revision": "207e21bc7bc6da141fea9c094b922ca6"
  },
  {
    "url": "tags/cookie/index.html",
    "revision": "3e02043793fd093707eadad7d3cb327e"
  },
  {
    "url": "tags/copley/index.html",
    "revision": "44f6fce13a439a86c493f7e26fb961ab"
  },
  {
    "url": "tags/cornell-tech/index.html",
    "revision": "c44dfac9ba54638b0e193d3a867f90c6"
  },
  {
    "url": "tags/costs/index.html",
    "revision": "57bbf879966021bcd0db2c7d7aedb7f8"
  },
  {
    "url": "tags/course-report/index.html",
    "revision": "6cd6704b7f89a11ef83053a71c734469"
  },
  {
    "url": "tags/course/index.html",
    "revision": "88a3a6288a9cac84776054a8c419475d"
  },
  {
    "url": "tags/cracking-the-coding-interview/index.html",
    "revision": "9ba58c94f71ac67dbdd3c035b3ca953e"
  },
  {
    "url": "tags/creations/index.html",
    "revision": "f4199f7b59567a644e622066772540f2"
  },
  {
    "url": "tags/creativity/index.html",
    "revision": "ee357f90b0416114dfbc055842cae6fb"
  },
  {
    "url": "tags/crowdsourced-map/index.html",
    "revision": "ed985ada523fa36e0060ee75d2f4b7f2"
  },
  {
    "url": "tags/crowdsourcing/index.html",
    "revision": "9770fb4d516e7bbbba8d2b9e020b00ef"
  },
  {
    "url": "tags/crush/index.html",
    "revision": "82e8bf9defd8e4fc9dde902c515fff7e"
  },
  {
    "url": "tags/cs-background/index.html",
    "revision": "304c9e554e7636d915b15134caec52ed"
  },
  {
    "url": "tags/cs/index.html",
    "revision": "3bcdb5413b373321632716f2ae48ebeb"
  },
  {
    "url": "tags/csail/index.html",
    "revision": "186cebdb40df6860f8922d5f6b6e518b"
  },
  {
    "url": "tags/css/index.html",
    "revision": "2792cf131187f878fdf93b235cded226"
  },
  {
    "url": "tags/css3/index.html",
    "revision": "4e540a1d74abbb743b6067956c74f7af"
  },
  {
    "url": "tags/cups-of-tea/index.html",
    "revision": "31a08e2a7b48a9c907161833577c8785"
  },
  {
    "url": "tags/curi/index.html",
    "revision": "300fc9c7ff5d33f9106fc660734b40ad"
  },
  {
    "url": "tags/curiosity/index.html",
    "revision": "f624ebee2f6f57cfdbe982e796f63f36"
  },
  {
    "url": "tags/curious-incident-of-the-dog-in-the-night-time/index.html",
    "revision": "747490dc4fd999950850e56f5a4701f7"
  },
  {
    "url": "tags/curriculum/index.html",
    "revision": "28412ec7489f65fd60f52b4c0f698089"
  },
  {
    "url": "tags/dabble/index.html",
    "revision": "2dbb55d09f3a412d31b76f51f762b3b9"
  },
  {
    "url": "tags/dairy-queen/index.html",
    "revision": "a7b20b93c0923e7102b633d2fb396cb6"
  },
  {
    "url": "tags/damage/index.html",
    "revision": "e9cf223c2b9ae1e6d3d45e57aa48a234"
  },
  {
    "url": "tags/damehood/index.html",
    "revision": "35aacbca70c346244720f984b7356500"
  },
  {
    "url": "tags/dan-brown/index.html",
    "revision": "72757e6b2968b1a48639244fa0b7e54f"
  },
  {
    "url": "tags/dance/index.html",
    "revision": "1a3d5aa878adcb2b2efd5151e9dcd8eb"
  },
  {
    "url": "tags/dancing/index.html",
    "revision": "001c2dcfc7b1aa23ad701c5ed73752ae"
  },
  {
    "url": "tags/daniel/index.html",
    "revision": "0cb29d14d669183aee8a68a979d6b356"
  },
  {
    "url": "tags/dash/index.html",
    "revision": "f29f818cceb6b4569f56d177900eb5ee"
  },
  {
    "url": "tags/data-set/index.html",
    "revision": "cf0b912e5905b223f5a521f7bad314ac"
  },
  {
    "url": "tags/data-structures/index.html",
    "revision": "9cf83d3db4d491c1b13571cff81c45cf"
  },
  {
    "url": "tags/data/index.html",
    "revision": "e6314a832991082d68b877d7e88243f2"
  },
  {
    "url": "tags/david-yang/index.html",
    "revision": "e8aa9829ff61550b7cc4112fe7475cee"
  },
  {
    "url": "tags/davinci-code/index.html",
    "revision": "affea37bedd359b0b359e21efe840c63"
  },
  {
    "url": "tags/dear-bootcamp/index.html",
    "revision": "f07cd02c137afdedf70dac3581240b29"
  },
  {
    "url": "tags/death/index.html",
    "revision": "fbdac05271a15ea5e15654ae4d69744d"
  },
  {
    "url": "tags/decision/index.html",
    "revision": "5df8de776f9491b98ed27cf882ffe46b"
  },
  {
    "url": "tags/defining/index.html",
    "revision": "ef3953dd0171a9761f150ebdc9139e45"
  },
  {
    "url": "tags/definitive-list/index.html",
    "revision": "b2189dcfa58a0ff3541e054226bd82e5"
  },
  {
    "url": "tags/delta/index.html",
    "revision": "ded2ff2ae349d90119f1371906c15ccb"
  },
  {
    "url": "tags/demo-day/index.html",
    "revision": "f0450e0e31cf1945fc7784862a5f6bb4"
  },
  {
    "url": "tags/descendants/index.html",
    "revision": "4428eb1275253bbbf852357a091b52fe"
  },
  {
    "url": "tags/describing-oneself/index.html",
    "revision": "b36ae993ce208d5012f5188ea834ae87"
  },
  {
    "url": "tags/descriptions/index.html",
    "revision": "63070b2281a185533db9ce56f6c0e3b8"
  },
  {
    "url": "tags/design-101/index.html",
    "revision": "22d189a6aa3475c108d20ff5920a257c"
  },
  {
    "url": "tags/design-bootcamp/index.html",
    "revision": "f2410c46972827d47a75c40cdacdca17"
  },
  {
    "url": "tags/design-online-course/index.html",
    "revision": "134cabc38f1fa85c051463e86f000dee"
  },
  {
    "url": "tags/design/index.html",
    "revision": "ad0a6ddc1d7840472395edfd4fa84d30"
  },
  {
    "url": "tags/design101/index.html",
    "revision": "237005efeb0c180807abb0b376009cb5"
  },
  {
    "url": "tags/designation-labs/index.html",
    "revision": "c1e17dfcea18bab283bf3fc0d143a347"
  },
  {
    "url": "tags/designation.io/index.html",
    "revision": "1a05f70db1f0ffdee3209288df890076"
  },
  {
    "url": "tags/designation/index.html",
    "revision": "f68b9af7ddd8bd8891eb818a796a35c9"
  },
  {
    "url": "tags/designer/index.html",
    "revision": "637fd1b3bdd24dbd4d6b660fede7a8e0"
  },
  {
    "url": "tags/designing/index.html",
    "revision": "79aa95aac6a434c8b1b56e68b28cc8b7"
  },
  {
    "url": "tags/designlab-course/index.html",
    "revision": "3410de3a0bf13fdf0acb0d5760c7b9a9"
  },
  {
    "url": "tags/designlab-design-101/index.html",
    "revision": "3becf9c41f11e6c62576d2cd118a6c31"
  },
  {
    "url": "tags/designlab/index.html",
    "revision": "f26e415634ad57c4652d170b6e576785"
  },
  {
    "url": "tags/designs/index.html",
    "revision": "012dabf5691ef55e8c7122216df5be0e"
  },
  {
    "url": "tags/dev-bootcamps/index.html",
    "revision": "dc6f2be0e5277b33661f0e4db1340cb1"
  },
  {
    "url": "tags/dev-league/index.html",
    "revision": "8da7497910eaf1ed454b8bfd3e052322"
  },
  {
    "url": "tags/developer-festival/index.html",
    "revision": "60575d5385fc95f7981129869cee9e62"
  },
  {
    "url": "tags/development/index.html",
    "revision": "9359ff45adb9a9a4f2c6642c7850303f"
  },
  {
    "url": "tags/devleague/index.html",
    "revision": "1a4fcca5967e147274f70b148a70682a"
  },
  {
    "url": "tags/dictatorships/index.html",
    "revision": "c49d895d73114d5c208eda9ac680e9e7"
  },
  {
    "url": "tags/dictionary/index.html",
    "revision": "738b64b3cebc9d56bdc334df17cefe26"
  },
  {
    "url": "tags/digital-hieroglyphics/index.html",
    "revision": "ff06bddc7436541243e0835f69a29b56"
  },
  {
    "url": "tags/digital/index.html",
    "revision": "13ef6e41db6926791b263a382324ea7c"
  },
  {
    "url": "tags/dinos/index.html",
    "revision": "8d6b04d49af1cfba89f4823cd1dbc339"
  },
  {
    "url": "tags/dinosaurs/index.html",
    "revision": "d9b91e0d925209e0f4c2d5742dd17b71"
  },
  {
    "url": "tags/disabilities/index.html",
    "revision": "0b6c1750353a492bfb71f66ccde70dcb"
  },
  {
    "url": "tags/diversity-conference/index.html",
    "revision": "a2b89b7e8ce8f9f37fbd6c09fc1c35d4"
  },
  {
    "url": "tags/diversity-in-tech/index.html",
    "revision": "09725461bcede920ecbffee7f2c4c001"
  },
  {
    "url": "tags/diversity-tales/index.html",
    "revision": "4d8161bf4374b2edd19ffa68dbe00e4f"
  },
  {
    "url": "tags/diversity/index.html",
    "revision": "e27c38a66e1ad9a67b46ead5403cab92"
  },
  {
    "url": "tags/do-not-offend/index.html",
    "revision": "7e17f79ce2e07af4315e4d1f8a88d1a4"
  },
  {
    "url": "tags/dojo/index.html",
    "revision": "9cb0409147c0385eb3b5513fb090cf10"
  },
  {
    "url": "tags/dont-starve-game/index.html",
    "revision": "eeb3b9a9f09140678cfa80704bb2c3bb"
  },
  {
    "url": "tags/dont-starve-review/index.html",
    "revision": "d9377a676873cf2828afcb0a03edf613"
  },
  {
    "url": "tags/dont-starve/index.html",
    "revision": "98aabf21624b0c1ee6177b420d84915a"
  },
  {
    "url": "tags/doubloon/index.html",
    "revision": "89fc5472d1fb7be8be4e413b32af91df"
  },
  {
    "url": "tags/download-mp3/index.html",
    "revision": "681254cbbf00dce04a770574c8031323"
  },
  {
    "url": "tags/drop-out/index.html",
    "revision": "0a9013aae37dfab6a4ee50c6a9fd7437"
  },
  {
    "url": "tags/dropbox/index.html",
    "revision": "ca65b057976d714aa009823aacf6331e"
  },
  {
    "url": "tags/duck-bill/index.html",
    "revision": "cdc52c9d68ea88453b55036900b60165"
  },
  {
    "url": "tags/economy/index.html",
    "revision": "661e8de95c37e3938c105b1a46352448"
  },
  {
    "url": "tags/edgar-allen-poe/index.html",
    "revision": "ce9c2c5f0e76d99668f23b592842402b"
  },
  {
    "url": "tags/egghead.io/index.html",
    "revision": "b3cda4cba9758e0c224519981d5b62af"
  },
  {
    "url": "tags/el-capitan/index.html",
    "revision": "a9a4b03e5924a5df5eb02e49068e4c9a"
  },
  {
    "url": "tags/ell/index.html",
    "revision": "a0e8af1556a8a22cac976949c7476791"
  },
  {
    "url": "tags/eloquent-javascript/index.html",
    "revision": "1973989a224d0c5874ffe517c2510a2e"
  },
  {
    "url": "tags/email/index.html",
    "revision": "be44805fa78e466bd168b1fcb23c79da"
  },
  {
    "url": "tags/emails/index.html",
    "revision": "1047f5846a52a76cf7f2fa0afe71714f"
  },
  {
    "url": "tags/emoji/index.html",
    "revision": "7d0aa46d119cc2d0073a301b079fa188"
  },
  {
    "url": "tags/emotions/index.html",
    "revision": "3ab7af2a9a8c4550a8b2466d971c5311"
  },
  {
    "url": "tags/ender-wiggin/index.html",
    "revision": "a57a2ef1ae1dfbc3787d20e5189c1e27"
  },
  {
    "url": "tags/ender/index.html",
    "revision": "5234b0fba13aae5c8787e44eb8dff4ff"
  },
  {
    "url": "tags/enders-game/index.html",
    "revision": "5714367baf243bc52d8e0195d1dede13"
  },
  {
    "url": "tags/endevr/index.html",
    "revision": "96077401adc24d7f8d3f43268b418222"
  },
  {
    "url": "tags/engineers/index.html",
    "revision": "b0c416f0a49c8c1f4dde23a0d5ccb800"
  },
  {
    "url": "tags/envy/index.html",
    "revision": "108253b28099c17dae3642925c357d8d"
  },
  {
    "url": "tags/epoch/index.html",
    "revision": "16e50c79b167dea11059643d37e0b01a"
  },
  {
    "url": "tags/epsilon/index.html",
    "revision": "421267b92f39b820d6a091cb59105e2b"
  },
  {
    "url": "tags/equality/index.html",
    "revision": "e24540de8b26efb9f815d1d5413cfb69"
  },
  {
    "url": "tags/equations/index.html",
    "revision": "b414b991aabcf1e70a85723a05ede3fb"
  },
  {
    "url": "tags/error/index.html",
    "revision": "6a504e717130aada687ad82246238efd"
  },
  {
    "url": "tags/essay-talks/index.html",
    "revision": "8be42e5159a06f6e657d69e8785bc4de"
  },
  {
    "url": "tags/essays/index.html",
    "revision": "fe6c2070784ed5f404e3e1780f00ebb2"
  },
  {
    "url": "tags/ethnicities/index.html",
    "revision": "760be680d020b54f4a14830ab54e7d0c"
  },
  {
    "url": "tags/exams/index.html",
    "revision": "13701e6693867b9c940ffe293fa374c9"
  },
  {
    "url": "tags/experience/index.html",
    "revision": "2a7ea91c1dd642f27d4c64a0aa7516f8"
  },
  {
    "url": "tags/experimentorders/index.html",
    "revision": "2aca15b156ae62192874d35984fb602e"
  },
  {
    "url": "tags/exploits/index.html",
    "revision": "d7c5ae040708f1da88ae66767bf2726c"
  },
  {
    "url": "tags/extension/index.html",
    "revision": "a12912963d6d438e59cbb4b4f3b77ce7"
  },
  {
    "url": "tags/extensions/index.html",
    "revision": "bb174b1ed6f36e4064ea2f2c9f4a19ba"
  },
  {
    "url": "tags/facebook-page/index.html",
    "revision": "f32f70c48cfbe3761a1c77e032703e91"
  },
  {
    "url": "tags/facebook/index.html",
    "revision": "afc4b5ab6c1db5e66ee61ed327e3d90a"
  },
  {
    "url": "tags/factorials/index.html",
    "revision": "c4ab3b8f216f7027154b4547f109e76d"
  },
  {
    "url": "tags/fahrenheit/index.html",
    "revision": "afa1ae72b6646957a3fe4768eefd4bc5"
  },
  {
    "url": "tags/fairy/index.html",
    "revision": "f660b836a54df562ce6d2dcc408258fc"
  },
  {
    "url": "tags/falling/index.html",
    "revision": "4f3ed94a21b357ddcb7f54d5c0b66253"
  },
  {
    "url": "tags/famine/index.html",
    "revision": "8ee864539e2cd0b959d4a66d89de2ff4"
  },
  {
    "url": "tags/famo.us-university/index.html",
    "revision": "3d6bc2423adcbe7de1c2da465205c6b6"
  },
  {
    "url": "tags/fantasy-novels/index.html",
    "revision": "215b570db62ec3ec00a76da75ea63861"
  },
  {
    "url": "tags/fantasy/index.html",
    "revision": "9072083d9c9751fee2c521373998a279"
  },
  {
    "url": "tags/fast-growing-industry/index.html",
    "revision": "3e633a5ef3f7505f36de72f610152402"
  },
  {
    "url": "tags/fear/index.html",
    "revision": "4ff6172edf5e05313a7371671efc1421"
  },
  {
    "url": "tags/featured/index.html",
    "revision": "5b08d775ff6b1932001a59ca0553ffce"
  },
  {
    "url": "tags/february-2015/index.html",
    "revision": "af9b03a02c66c94afb9cdcfa64c35bef"
  },
  {
    "url": "tags/february/index.html",
    "revision": "4826f3fdbb4b41d44f3bbda2018c3c6e"
  },
  {
    "url": "tags/fibonacci/index.html",
    "revision": "680d717a31f744777fb17776ae75cd76"
  },
  {
    "url": "tags/film/index.html",
    "revision": "e0269ed9d8ef95cbffbd509821d3611b"
  },
  {
    "url": "tags/final-cut-pro-x/index.html",
    "revision": "8b182898c51bc5d5e380a4b0ad2613e5"
  },
  {
    "url": "tags/final-project/index.html",
    "revision": "db1198e78fea323cfea46ef5807a6408"
  },
  {
    "url": "tags/finding/index.html",
    "revision": "79126d874878cd0326830849016d504c"
  },
  {
    "url": "tags/firehose-project/index.html",
    "revision": "058a185260911330c09d7cde797d121a"
  },
  {
    "url": "tags/first-meetup/index.html",
    "revision": "6a5c2f25930ac5a181ed0520614fafda"
  },
  {
    "url": "tags/first-week/index.html",
    "revision": "08d65d4dd6e702ca2c889a00d8c14237"
  },
  {
    "url": "tags/flashcard-design/index.html",
    "revision": "574a32105105a934f00237071ebadcd7"
  },
  {
    "url": "tags/flashcards/index.html",
    "revision": "b8c89f5b0c501fe498febc8b71b944ee"
  },
  {
    "url": "tags/flatiron/index.html",
    "revision": "5c4eaed8fb3d0642b466abca8ae5fe82"
  },
  {
    "url": "tags/flavours/index.html",
    "revision": "ea85d3b8cda7f47000fb7f57a970176e"
  },
  {
    "url": "tags/flights/index.html",
    "revision": "550094583679d4d238a038cccd1c4066"
  },
  {
    "url": "tags/float/index.html",
    "revision": "7f346eaa392facf016fcb16b2218c5b9"
  },
  {
    "url": "tags/floating-point/index.html",
    "revision": "ecd8de4019847778cc563a668b206554"
  },
  {
    "url": "tags/flux/index.html",
    "revision": "26d4ead64d35844f5ebb28ed23c0a1b5"
  },
  {
    "url": "tags/formic/index.html",
    "revision": "d30c681187d254458f8b74ebeecbf3ab"
  },
  {
    "url": "tags/formula/index.html",
    "revision": "ef6f0cd50e45c453014598cf407033ec"
  },
  {
    "url": "tags/foundations/index.html",
    "revision": "abee42bd274978ec0eb0731ced3c01fd"
  },
  {
    "url": "tags/founders/index.html",
    "revision": "2dac4a76ca7de0336d23c20dddfaad68"
  },
  {
    "url": "tags/fragile/index.html",
    "revision": "501d2eeec5e0ad29daeee8e3f5f48baa"
  },
  {
    "url": "tags/frameworks/index.html",
    "revision": "91a019c7b44c21eb7df61246bbae6776"
  },
  {
    "url": "tags/frankenweenie/index.html",
    "revision": "e8b305b802e0b969ab075a99bae6621e"
  },
  {
    "url": "tags/free-code-camp/index.html",
    "revision": "36ee6b46456a7fc8087be4a0c15c30f6"
  },
  {
    "url": "tags/freeman/index.html",
    "revision": "8c7404530e15b90122e1fd0d1ae4d241"
  },
  {
    "url": "tags/friends-and-family/index.html",
    "revision": "78a7150ea27e0c29ae3d773f8ec0e05f"
  },
  {
    "url": "tags/friendship/index.html",
    "revision": "531e2dc9d49b8c3c0359cbc11d69f009"
  },
  {
    "url": "tags/fuck/index.html",
    "revision": "81a3b92a8f6d0391f16a7188ed238ed1"
  },
  {
    "url": "tags/fucking/index.html",
    "revision": "fa92753c0ffb894a32e49bb2c778b9b9"
  },
  {
    "url": "tags/full-stack-academy-of-code/index.html",
    "revision": "080982e15c6fee69759f16aa85de253d"
  },
  {
    "url": "tags/full-stack/index.html",
    "revision": "493ee799295ef500534f00abe41a69b5"
  },
  {
    "url": "tags/full/index.html",
    "revision": "ae95a463600829b81ed76da1ec60bb67"
  },
  {
    "url": "tags/fullstack-academy-of-code/index.html",
    "revision": "d1c800fb1c495c240ce0ffc575fa8bdb"
  },
  {
    "url": "tags/fullstack-academy-week-4/index.html",
    "revision": "629f191d5983f45cb87879da4d6f12a2"
  },
  {
    "url": "tags/fullstack-academy-week-5/index.html",
    "revision": "e94dede041739847bce1ac6e08c244b8"
  },
  {
    "url": "tags/fullstack-academy/index.html",
    "revision": "3f00e821f4ade6572c2a7074a286f5b9"
  },
  {
    "url": "tags/fullstack-beta/index.html",
    "revision": "334098fadacffe45cac4e543ee0238b1"
  },
  {
    "url": "tags/fullstack-experience/index.html",
    "revision": "f09f83aebd5062261168bcb93ac9daa9"
  },
  {
    "url": "tags/fullstack-fellows/index.html",
    "revision": "ffda6dacdb3d328369315fc09d939272"
  },
  {
    "url": "tags/fullstack-foundations/index.html",
    "revision": "d122250799e05c7eba34b08728dde4fa"
  },
  {
    "url": "tags/fullstack-javascript-coding-bootcamp/index.html",
    "revision": "947eb8dfa1864d305c85a36311c972c5"
  },
  {
    "url": "tags/fullstack-week/index.html",
    "revision": "260571216eb2d8df2881ccc6f3e62e33"
  },
  {
    "url": "tags/fullstack/index.html",
    "revision": "4823846f4ebee227cd161844368d9f8b"
  },
  {
    "url": "tags/fundamentals/index.html",
    "revision": "c9f56fea98312bbe3d3a60157c9441b0"
  },
  {
    "url": "tags/funny/index.html",
    "revision": "d66bdaecce789fb302f45564b6f9c2ce"
  },
  {
    "url": "tags/future-plans/index.html",
    "revision": "abcfb2a9b4dae89fd8457d81ce3c9330"
  },
  {
    "url": "tags/fvcproductions/index.html",
    "revision": "f35bfda1aa1f0f06de4033e9401f2cfb"
  },
  {
    "url": "tags/game-review/index.html",
    "revision": "a900ce55043a56bf015cce8ebef2c639"
  },
  {
    "url": "tags/game/index.html",
    "revision": "834ca0bc22d8f044dd27dd8289633041"
  },
  {
    "url": "tags/games-night/index.html",
    "revision": "0108375ab185b26f2212cdfd05e36124"
  },
  {
    "url": "tags/games/index.html",
    "revision": "438686078b60fe06fab6595be1c27b58"
  },
  {
    "url": "tags/gaming/index.html",
    "revision": "42a6ff79ea831e3f27e09a4ff0f8d112"
  },
  {
    "url": "tags/gamma/index.html",
    "revision": "0c30b91ded9051cf27bdf4baa4350c4d"
  },
  {
    "url": "tags/gates/index.html",
    "revision": "6422739a6b4941350b8a533c343462c7"
  },
  {
    "url": "tags/gavin-young/index.html",
    "revision": "16fdc8e1250d3f79093f9de82f01478e"
  },
  {
    "url": "tags/gay-marriage-legal-now/index.html",
    "revision": "e2e22d5576cb5c53b774662141c234ba"
  },
  {
    "url": "tags/gdg-hampton-roads/index.html",
    "revision": "3344ff672bc984a5dd362747639c1b83"
  },
  {
    "url": "tags/gender/index.html",
    "revision": "a6c41859ed8429ce56ca0edc588b9b28"
  },
  {
    "url": "tags/general-assembly/index.html",
    "revision": "17d79d81f754abc5fb51ef425c00dd2a"
  },
  {
    "url": "tags/georgia-tech/index.html",
    "revision": "8980d051ae9ab7d792f506ee3b7a20f8"
  },
  {
    "url": "tags/gettemplate/index.html",
    "revision": "5cceca5aa487e85b259256640cc2972c"
  },
  {
    "url": "tags/gif/index.html",
    "revision": "48fbb970488413deb309075eeae1e60f"
  },
  {
    "url": "tags/gifs/index.html",
    "revision": "652c3aaa17b9764823773d8e6ccd235c"
  },
  {
    "url": "tags/gist/index.html",
    "revision": "a659d7ae08666d1e6c06cb448ebc7d2d"
  },
  {
    "url": "tags/github-projects/index.html",
    "revision": "8d6f3a4c2c8381ebb8386e2abea55699"
  },
  {
    "url": "tags/github/index.html",
    "revision": "58daab61b43691ab8678786183a73a05"
  },
  {
    "url": "tags/giving-back/index.html",
    "revision": "0e93aecc5500443d0c6cb55a3fbf4359"
  },
  {
    "url": "tags/glimpse/index.html",
    "revision": "149c4159c8b2df2ac6cd5e61b97a2c0d"
  },
  {
    "url": "tags/gluttony/index.html",
    "revision": "18d15032b12df91236607ecadd761be4"
  },
  {
    "url": "tags/gmail/index.html",
    "revision": "e6930b738209002b24ca5048785a0969"
  },
  {
    "url": "tags/gold-doubloons/index.html",
    "revision": "b226cca1382e8531a589f830c84f5fa4"
  },
  {
    "url": "tags/gold/index.html",
    "revision": "b59322b2676bafad98a240a6d1e0d05f"
  },
  {
    "url": "tags/goldman-sachs/index.html",
    "revision": "120e652f3226defb4e806f30fb876a1e"
  },
  {
    "url": "tags/good-looks/index.html",
    "revision": "4c784945e26c2020fafa544ea6f378bd"
  },
  {
    "url": "tags/googl/index.html",
    "revision": "259d7d52466749584f209daab95763cc"
  },
  {
    "url": "tags/google-map/index.html",
    "revision": "7fd39723fb79d6b14b58b0a3a9565789"
  },
  {
    "url": "tags/google-maps-api/index.html",
    "revision": "ff2f1822938595ae2e99fb0419d6a7a2"
  },
  {
    "url": "tags/google-slides/index.html",
    "revision": "67bfa43c3739f9af2edc1c13ba313684"
  },
  {
    "url": "tags/google+/index.html",
    "revision": "a2c0e35f88631a1bd041db75a924e6c3"
  },
  {
    "url": "tags/gottfrid-svartholm/index.html",
    "revision": "4a2b0ea8761be7d4e6263a4cf932e57d"
  },
  {
    "url": "tags/grace-hopper/index.html",
    "revision": "82c4da6ef5da49ae90bde1c56ae4b459"
  },
  {
    "url": "tags/graduate-school/index.html",
    "revision": "f70f9a8289d38390c78af1655097005f"
  },
  {
    "url": "tags/graduate/index.html",
    "revision": "2844609ca55923e56ecb784b0b86a105"
  },
  {
    "url": "tags/graduating/index.html",
    "revision": "c9dc1de4664a4371401f931f460893a0"
  },
  {
    "url": "tags/grand-gallery/index.html",
    "revision": "1e673b1d08765019e6c2116629e4936d"
  },
  {
    "url": "tags/graphic-design-bootcamp/index.html",
    "revision": "611dc7923c441b15558d656ac81a62a0"
  },
  {
    "url": "tags/graphic-design/index.html",
    "revision": "d8fe3100d085a2873809d56eab3c3ac5"
  },
  {
    "url": "tags/gratitude/index.html",
    "revision": "225a3431b710cc8950da5517efd30789"
  },
  {
    "url": "tags/gre/index.html",
    "revision": "dfce51028d9d43bf09c8a142d169562a"
  },
  {
    "url": "tags/greed/index.html",
    "revision": "a7faffc47e01bfbe53d6af12ec17f762"
  },
  {
    "url": "tags/greek-letters/index.html",
    "revision": "9c2196f71ff874dd843ee8189553d55e"
  },
  {
    "url": "tags/growth/index.html",
    "revision": "2a6a70f562960808091f4c63d99377da"
  },
  {
    "url": "tags/hack-app/index.html",
    "revision": "6897ceb23352819c55c43bc698e0c567"
  },
  {
    "url": "tags/hack-reactor/index.html",
    "revision": "f2d0c96ae04e514dfcc3a709c86cc8c6"
  },
  {
    "url": "tags/hackathon-starter/index.html",
    "revision": "b19c609920099d502c6dd6082629f280"
  },
  {
    "url": "tags/hackathons/index.html",
    "revision": "f36198a8dbc82ba61c462bb64be0c939"
  },
  {
    "url": "tags/hacker-in-residence/index.html",
    "revision": "6aae0b824a6fb385fa18afb2e8172b1a"
  },
  {
    "url": "tags/hacking/index.html",
    "revision": "6c40c13dc9d0dc5bc3daef7751d39012"
  },
  {
    "url": "tags/hackreactor/index.html",
    "revision": "2a0e668aadc230ece54a183d57d94895"
  },
  {
    "url": "tags/hampton-roads-devfest/index.html",
    "revision": "e34f1e8835a17dd169e5b1c4b190d74a"
  },
  {
    "url": "tags/hampton-roads/index.html",
    "revision": "deee2d4d085ceeea30836e7644dbab2c"
  },
  {
    "url": "tags/hampton-university/index.html",
    "revision": "293e650af971bc21985a97fcbe74db36"
  },
  {
    "url": "tags/hampton/index.html",
    "revision": "e47de798ca9db391bc0d8171f66e3b19"
  },
  {
    "url": "tags/hands-clean/index.html",
    "revision": "101a33aca01de765eb6695c13e1fd01e"
  },
  {
    "url": "tags/hands/index.html",
    "revision": "ae78b8e7aeadaf33d235240d3842732a"
  },
  {
    "url": "tags/harry-potter/index.html",
    "revision": "dfe163aca5a31f36de4632316fe20231"
  },
  {
    "url": "tags/harvey-mudd/index.html",
    "revision": "635ae27ab0e2af91a1d3c2e6835a0b5d"
  },
  {
    "url": "tags/hawaii/index.html",
    "revision": "a4cd37252d7d4f738e2299b0696534b6"
  },
  {
    "url": "tags/head/index.html",
    "revision": "5ce0bafac100c84c6327af808b94ec0e"
  },
  {
    "url": "tags/heap-sort/index.html",
    "revision": "0aeeca824b86b5062cb462e1a5f32621"
  },
  {
    "url": "tags/heart/index.html",
    "revision": "352acb358de4c2e2e2bced5dd2d20e92"
  },
  {
    "url": "tags/hearty/index.html",
    "revision": "7a5cf97f888e245267342dd47106910a"
  },
  {
    "url": "tags/hector-barbossa/index.html",
    "revision": "7bf23a733c55165483b42ae59940841d"
  },
  {
    "url": "tags/hemingway/index.html",
    "revision": "52cb8ce0a8b69dd0658cfbcf85d2ef38"
  },
  {
    "url": "tags/hexadecimal-numbers/index.html",
    "revision": "e1048e5ef8a942336e4dca36501b116d"
  },
  {
    "url": "tags/hexadecimal/index.html",
    "revision": "a05dff386df3a4323b9388456f69f5eb"
  },
  {
    "url": "tags/hieroglyphics/index.html",
    "revision": "3ec1db51df7e0aacaf338a0777ac7ee2"
  },
  {
    "url": "tags/high-school-volunteering/index.html",
    "revision": "864fa9b376482a55db1d6f2bf7acd039"
  },
  {
    "url": "tags/high-school/index.html",
    "revision": "cd402c6cb7d1bf1abbcd720c3c560cd1"
  },
  {
    "url": "tags/hip-hop/index.html",
    "revision": "b10f76e3dc5c84f130a37095a5eefecd"
  },
  {
    "url": "tags/hiredot/index.html",
    "revision": "1a2c64d3c085535509139edbb86a80e3"
  },
  {
    "url": "tags/hiredot2/index.html",
    "revision": "d6a8e94c725a64e45eab4621392a0c60"
  },
  {
    "url": "tags/hispanics-in-computing/index.html",
    "revision": "004969a71a70e26ba4422e37e9ab0a67"
  },
  {
    "url": "tags/hollow-knight/index.html",
    "revision": "a99d4e26e67766fe9894551d817aeb1e"
  },
  {
    "url": "tags/holocaust/index.html",
    "revision": "974ebeda3224e3c739e3be9b3d19e960"
  },
  {
    "url": "tags/holy-grail/index.html",
    "revision": "22928aed191a4b45e4c99e962de0c89e"
  },
  {
    "url": "tags/homework-assignment/index.html",
    "revision": "bdf2f650de7c1a65a6c9e94897102dda"
  },
  {
    "url": "tags/hoot-suite/index.html",
    "revision": "db13dcb6ecfa54c46d5d7f0d93f82727"
  },
  {
    "url": "tags/horror/index.html",
    "revision": "49a3f1901bbd17f84beab227dd1bdde9"
  },
  {
    "url": "tags/hot-seat/index.html",
    "revision": "c86e04a753097a240f044b74cdc75106"
  },
  {
    "url": "tags/hour-of-code-code.org/index.html",
    "revision": "679359b2b6d0c4ca84b9c48c0e9dc8b7"
  },
  {
    "url": "tags/hour-of-code/index.html",
    "revision": "a453ceffccb14ccc485d94831dea1b29"
  },
  {
    "url": "tags/hour/index.html",
    "revision": "90f56154d87340517dc3e37b9408b113"
  },
  {
    "url": "tags/hourofcode/index.html",
    "revision": "5514f5703fe527b37f94a55ae70e5c7d"
  },
  {
    "url": "tags/house/index.html",
    "revision": "11dfb677b33d661010442427a7f00a57"
  },
  {
    "url": "tags/how-to-describe-yourself/index.html",
    "revision": "d5be91d79c3e0a0f27d422bf9235aca9"
  },
  {
    "url": "tags/how-to-study/index.html",
    "revision": "70970e75c7ba853e2fb571dba349a01a"
  },
  {
    "url": "tags/hr-devfest/index.html",
    "revision": "9e2f3df089a8ab9f7d1fd533582288fc"
  },
  {
    "url": "tags/hr-fen/index.html",
    "revision": "000bb385c8290910fe8d4c009d1359be"
  },
  {
    "url": "tags/hrdevfest/index.html",
    "revision": "5a2c9e77e630e3185dcee0abdcd454f5"
  },
  {
    "url": "tags/html/css/index.html",
    "revision": "3b0ebab4f242b7c68f6b4aa957e2d712"
  },
  {
    "url": "tags/html/index.html",
    "revision": "c8b48c7c554a10a5f2367227e0c51401"
  },
  {
    "url": "tags/html5/index.html",
    "revision": "d41325cd1ca80b94dfb1609bb49a7e5a"
  },
  {
    "url": "tags/html5up/index.html",
    "revision": "288233831afbad5c04adca29662d4ed1"
  },
  {
    "url": "tags/human-computer-interaction/index.html",
    "revision": "4a6ab536629a484a50b2b83f950354fa"
  },
  {
    "url": "tags/human-robot-collaboration/index.html",
    "revision": "040f0f963008217ceb06eda9c9540798"
  },
  {
    "url": "tags/humanity/index.html",
    "revision": "060ea20cab3e3789ce3d00b75f4a7904"
  },
  {
    "url": "tags/huntly/index.html",
    "revision": "2d416321480894f1f41965369a116883"
  },
  {
    "url": "tags/hyatt-regency/index.html",
    "revision": "91416f16f1f93d1ecc1fbf881e05b33b"
  },
  {
    "url": "tags/ibm-watson-research/index.html",
    "revision": "657e879ce964885217cf86f47f9aacfb"
  },
  {
    "url": "tags/ibm-watson/index.html",
    "revision": "e4e0dca022cb9596cfebb9d2da6f16bd"
  },
  {
    "url": "tags/icon/index.html",
    "revision": "ada7cb4d6719af1d8a39d62191e067e6"
  },
  {
    "url": "tags/ideas/index.html",
    "revision": "c7798c48bb342afa592e9644b6536485"
  },
  {
    "url": "tags/idiotic/index.html",
    "revision": "d98524d14ac4494a3200cc77173b6080"
  },
  {
    "url": "tags/iftt/index.html",
    "revision": "f8a1c90808144e3f73ba126b969ac451"
  },
  {
    "url": "tags/imcompetech/index.html",
    "revision": "79328b84bb60fd86584a6ba1e3cd0bb0"
  },
  {
    "url": "tags/imovie101/index.html",
    "revision": "68b870bcf5607bec7e3be4cbaea22283"
  },
  {
    "url": "tags/import-multiple-fonts/index.html",
    "revision": "732330a69d962c83f2e9134d9613af55"
  },
  {
    "url": "tags/impossible-quiz/index.html",
    "revision": "627f1b055ed5d3a3db24e9579703fec2"
  },
  {
    "url": "tags/index.html",
    "revision": "170ad52a83ada64af59e05216a582b61"
  },
  {
    "url": "tags/indie-game/index.html",
    "revision": "5890f2f9d9253461100fa55d138a8932"
  },
  {
    "url": "tags/indie/index.html",
    "revision": "d32c24a1108b2f8a66233026d2e3d034"
  },
  {
    "url": "tags/industry/index.html",
    "revision": "5f41d0da66f821289b240ccebb90a744"
  },
  {
    "url": "tags/infants/index.html",
    "revision": "b471f35dd03340f46847bb61d6751a91"
  },
  {
    "url": "tags/infoonepagelove.com/index.html",
    "revision": "b0912cb1e1eae670c5b8c3d6a6965875"
  },
  {
    "url": "tags/initial-interview/index.html",
    "revision": "9cabf7dd2e85704d1e23cf07bfaf5834"
  },
  {
    "url": "tags/initializing/index.html",
    "revision": "b1b48fd0265109d59c3fbd9148fc96f2"
  },
  {
    "url": "tags/inkling/index.html",
    "revision": "2370cb071745c1338409c5fb4999ab4e"
  },
  {
    "url": "tags/inklings/index.html",
    "revision": "0f10316c77819e517c2865803dd70276"
  },
  {
    "url": "tags/inorder/index.html",
    "revision": "4172f6595493777daefd5a5dbd116325"
  },
  {
    "url": "tags/insert/index.html",
    "revision": "b2e073fda0de8d4a40aaf99886eb494e"
  },
  {
    "url": "tags/insertion-sorts/index.html",
    "revision": "027ab6385b3fd2ee6e638373d6b0b71f"
  },
  {
    "url": "tags/inside-out/index.html",
    "revision": "9cb7acc0b3780d4e4f40e25da3e0161e"
  },
  {
    "url": "tags/inside/index.html",
    "revision": "c4093be0d51dc7f2f79213c960fe4038"
  },
  {
    "url": "tags/installation/index.html",
    "revision": "02a9eb7351f5578b2a8b9fdbad47d87e"
  },
  {
    "url": "tags/instructors/index.html",
    "revision": "a658a928d764f5ae3e19047cb1947245"
  },
  {
    "url": "tags/insult/index.html",
    "revision": "6bb69eadc931a6a22cea4f57de40bb7d"
  },
  {
    "url": "tags/insults/index.html",
    "revision": "c2b2bf8e9a1975576cd2938619e1954a"
  },
  {
    "url": "tags/int-node/index.html",
    "revision": "f897dac27d9df40c2c01bdf4e5cc8cdd"
  },
  {
    "url": "tags/int/_node/index.html",
    "revision": "8bb771d874386872b03c8fce1b4bd205"
  },
  {
    "url": "tags/integer/index.html",
    "revision": "f17ea91443c3acec7ecb310d7974b14b"
  },
  {
    "url": "tags/integers/index.html",
    "revision": "7f25d2e21be528cd77b899b12ac26a58"
  },
  {
    "url": "tags/integrate-your-school-email/index.html",
    "revision": "c61cde1121b8f31853bedbeb253a9bd1"
  },
  {
    "url": "tags/integrated-systems/index.html",
    "revision": "c3937743c61d401f263233040033c0a6"
  },
  {
    "url": "tags/intensive/index.html",
    "revision": "cf9b4f6e51e43de7e5d6a0b8392ad08f"
  },
  {
    "url": "tags/interconnectedness/index.html",
    "revision": "b69ca3df3096962999f4c032a4fe2a5a"
  },
  {
    "url": "tags/interfeud/index.html",
    "revision": "c5bc8bda6ed6a79a13ce4279c18d4be4"
  },
  {
    "url": "tags/international-fleet-personnel/index.html",
    "revision": "a262fee6bc2d72e49c2f264e2b792eb4"
  },
  {
    "url": "tags/internet-trolls/index.html",
    "revision": "b695839e5c3e53322b0c48cb4db12e6e"
  },
  {
    "url": "tags/internship-interview/index.html",
    "revision": "7c5f54789906ce97a32546e8565fb1d7"
  },
  {
    "url": "tags/internships/index.html",
    "revision": "af53d2018c5adfc03ea508a897329a68"
  },
  {
    "url": "tags/interview/index.html",
    "revision": "5c2e18e1126a63effd56f5f5e85aadbe"
  },
  {
    "url": "tags/interviewer/index.html",
    "revision": "6af4d430b7e361e0816ad8fc7df0c39b"
  },
  {
    "url": "tags/interviews/index.html",
    "revision": "c11d6cec96df027057395fd51c0a4989"
  },
  {
    "url": "tags/intro-course/index.html",
    "revision": "5129b1a6def40e07c9a03b1be15d05b5"
  },
  {
    "url": "tags/intro/index.html",
    "revision": "ea979cedaa745db4e862a57625e4357c"
  },
  {
    "url": "tags/ios/index.html",
    "revision": "0fefb86318b63bd78ee4c6e7789176fe"
  },
  {
    "url": "tags/isaac/index.html",
    "revision": "2a0bbedf7a3a66ace5ac017807fd994a"
  },
  {
    "url": "tags/it-crowd/index.html",
    "revision": "5a2da7c8ffcc9f310875ef09edd494f0"
  },
  {
    "url": "tags/jack-sparrow/index.html",
    "revision": "4325d4c8e3eb95648f0a2a9552eafcc0"
  },
  {
    "url": "tags/jason-sewell/index.html",
    "revision": "3f516f0fd11256234b841ae68bb114c0"
  },
  {
    "url": "tags/java-arrays/index.html",
    "revision": "f1f0a055e0088a76675aeb443f007bc4"
  },
  {
    "url": "tags/java-decompiler/index.html",
    "revision": "7d2d4e7b9d533a067d74fba85f019a0a"
  },
  {
    "url": "tags/java-program/index.html",
    "revision": "420c6689023167bbe750ce0f85092160"
  },
  {
    "url": "tags/java-programming/index.html",
    "revision": "a589bff892d3a994c04398e101aa083d"
  },
  {
    "url": "tags/java-queues/index.html",
    "revision": "253a36d3e0e31527b076117baa180f44"
  },
  {
    "url": "tags/java/index.html",
    "revision": "cc25888149e7ea8c7eeccefe64d26041"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "0ab9ad7fd8667a6b555c7be452772b61"
  },
  {
    "url": "tags/jd.benow.ca/index.html",
    "revision": "2e5ade2fc194f9ac51017aa74e66e7d1"
  },
  {
    "url": "tags/jd/index.html",
    "revision": "496e0fea1c716d6134ad268096719462"
  },
  {
    "url": "tags/jekyll/index.html",
    "revision": "7774de1993c25ae054136f9de9683a9b"
  },
  {
    "url": "tags/jeopardy-template/index.html",
    "revision": "c7517f4422670bb1b575ef6035bf1498"
  },
  {
    "url": "tags/jeopardy/index.html",
    "revision": "18888e8d6c13360819403c554597a9ba"
  },
  {
    "url": "tags/jesus/index.html",
    "revision": "639dea6411d3259367cc4bbb306e286f"
  },
  {
    "url": "tags/jewish-holocaust/index.html",
    "revision": "633127820f525d56dac0aca28210842b"
  },
  {
    "url": "tags/jimmy/index.html",
    "revision": "1e434a30acc36459b47478a42c85f1c8"
  },
  {
    "url": "tags/joanna/index.html",
    "revision": "8260008997589c1bd7f4aabded3a5141"
  },
  {
    "url": "tags/jobs-going-to-robots/index.html",
    "revision": "f39bcf991007a80c6a5c0c368355f4c6"
  },
  {
    "url": "tags/jobs/index.html",
    "revision": "14fc56f27aad6d6d69cf3405c61acbe6"
  },
  {
    "url": "tags/john-b-dey-elementary/index.html",
    "revision": "cb44edbabf0a6438dc60e2c5dc30f370"
  },
  {
    "url": "tags/john-b-dey/index.html",
    "revision": "0ffc6ae1659efafd92203531b0a0412a"
  },
  {
    "url": "tags/johnny-depp/index.html",
    "revision": "cbce1a23b02b4b955a61b9e3722c3954"
  },
  {
    "url": "tags/journalism/index.html",
    "revision": "0d86d1e7fecf12f08e410ad19e0caedc"
  },
  {
    "url": "tags/journey-so-far/index.html",
    "revision": "2b806e1140d28087cfd6358628424cb7"
  },
  {
    "url": "tags/journey/index.html",
    "revision": "15c586cd39307a760239e05d424994bc"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "4a7801c5038a4c42e1b7724ad6d84c44"
  },
  {
    "url": "tags/js-coding-bootcamps/index.html",
    "revision": "35a99c4691aa658ffa4915056c7cbf58"
  },
  {
    "url": "tags/js-library/index.html",
    "revision": "4a17ed5eda74da98909abcb6e07f2d28"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c771089b33caa532a373adb2452c76ca"
  },
  {
    "url": "tags/juan-gilbert/index.html",
    "revision": "6d0a154598f8e056fe8dafa737537c9d"
  },
  {
    "url": "tags/jubilant/index.html",
    "revision": "cb7d0a7699b55f2ab6bf4c9f9b25f2ee"
  },
  {
    "url": "tags/jumpstart/index.html",
    "revision": "73ef988f44a9b66291f41e271f3520f3"
  },
  {
    "url": "tags/just-dance-2014/index.html",
    "revision": "0614d4cd10f8bdf0ef5a623082feb2a9"
  },
  {
    "url": "tags/justin/index.html",
    "revision": "eff5bb922d8a216bb18c4bcc5486fce2"
  },
  {
    "url": "tags/katherine-gilhooley/index.html",
    "revision": "f9e8b8167defcfd0b80aacb5043e85b4"
  },
  {
    "url": "tags/key/index.html",
    "revision": "164ca474bd7d5df50fa928b84bb2280e"
  },
  {
    "url": "tags/keyboard-instrument/index.html",
    "revision": "138128a030dee15f68e2d333d7241b2a"
  },
  {
    "url": "tags/keynote/index.html",
    "revision": "04a9fc1929cc4cc825b822ff3ca6ceb3"
  },
  {
    "url": "tags/kickstarter/index.html",
    "revision": "676b1a4c8e77d9621557445c13360cfb"
  },
  {
    "url": "tags/kinecrtx/index.html",
    "revision": "91338f4fceb118121a7c2745da883de5"
  },
  {
    "url": "tags/kinect-sports-rivals/index.html",
    "revision": "6aacba8bea7e50cda0cc666e184b7a71"
  },
  {
    "url": "tags/kinect-sports/index.html",
    "revision": "100e15648073cd99ec6dad2c76500a81"
  },
  {
    "url": "tags/kinect/index.html",
    "revision": "29e324e022e4a65681c0d6d46b8f193c"
  },
  {
    "url": "tags/kiss/index.html",
    "revision": "647958e56c924745ed179a8084dbe2d8"
  },
  {
    "url": "tags/klei-entertainment/index.html",
    "revision": "e9738a782410e0cb6e5fa3168aed6403"
  },
  {
    "url": "tags/knighthood/index.html",
    "revision": "256ebb4a6d65840a133f33672c7707a7"
  },
  {
    "url": "tags/ko/index.html",
    "revision": "7c5df4445eb66ff30715abc2acbf8d8f"
  },
  {
    "url": "tags/korea/index.html",
    "revision": "173b1ba4f7c17d4f797b6ed3bdc4df52"
  },
  {
    "url": "tags/kpcb-fellow-application/index.html",
    "revision": "640d139cd69b3842ba72981e6433ceb4"
  },
  {
    "url": "tags/kudos/index.html",
    "revision": "2c03598b8914d7a5df2e1a86c02b0070"
  },
  {
    "url": "tags/labs/index.html",
    "revision": "9a8bebaa231983bb7c16e95d3ee11e4b"
  },
  {
    "url": "tags/ladies-of-fullstack/index.html",
    "revision": "b6a03a74df9a8d7ea7eb3d5d27cf8aa6"
  },
  {
    "url": "tags/langdon/index.html",
    "revision": "0be2d5e5fd3ef29a620d6195e9833246"
  },
  {
    "url": "tags/languages/index.html",
    "revision": "15bcd5d2eef53f735b7d4de20a31b13b"
  },
  {
    "url": "tags/laravel-5.3/index.html",
    "revision": "125b01f942ab206e8de97828e1131d2e"
  },
  {
    "url": "tags/laravel-5/index.html",
    "revision": "c6b28c151d63de7aaeb65b45184678b2"
  },
  {
    "url": "tags/laravel/index.html",
    "revision": "53db1dffa005c2f6f258d342d4d6b35d"
  },
  {
    "url": "tags/last-days/index.html",
    "revision": "8162ad203664c3942c4d7effe2b982b6"
  },
  {
    "url": "tags/last-stand-union-city/index.html",
    "revision": "762debc934a603035fe494683f647775"
  },
  {
    "url": "tags/last-stand/index.html",
    "revision": "77f3085661c369a54ecb02bd94fe9555"
  },
  {
    "url": "tags/latinos/index.html",
    "revision": "f82b2328c10ee09eaa6b992e914bc2af"
  },
  {
    "url": "tags/lauch-academy/index.html",
    "revision": "8fef5b94dfac407c11b4c6e8ea8b4903"
  },
  {
    "url": "tags/launch-academy/index.html",
    "revision": "3bd4d70b7504a3e205dbd0db1a0cb8bf"
  },
  {
    "url": "tags/launcher/index.html",
    "revision": "06e3b5eba3a0e175193ca35f5e90ce44"
  },
  {
    "url": "tags/launchpad-items-reset/index.html",
    "revision": "89693d57aa6fb0427b5cb6b5108083c5"
  },
  {
    "url": "tags/launchpad/index.html",
    "revision": "cc4bcc22a35b90fc558b0cf6e471f124"
  },
  {
    "url": "tags/laws-of-power/index.html",
    "revision": "cfaeea26ca108a4b41a376e4fea97a51"
  },
  {
    "url": "tags/layout/index.html",
    "revision": "b8d087241075a5184093fa095483d41a"
  },
  {
    "url": "tags/learn-web-dev/index.html",
    "revision": "3e274d3660f82b93d6272c81655a08e5"
  },
  {
    "url": "tags/learning-team-lunch/index.html",
    "revision": "d9ec1ccb67834ef454bb0e58501e7fcb"
  },
  {
    "url": "tags/learning-team/index.html",
    "revision": "4bd8c45bbef1668a62d1c030e43029d6"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "17b72c690d229a194c519cbc1678574b"
  },
  {
    "url": "tags/left-subtree/index.html",
    "revision": "ff5ab87dbbb90e0cae69c0ccc01a8317"
  },
  {
    "url": "tags/left/index.html",
    "revision": "a41d05d145ef08616878fe495d31b4fa"
  },
  {
    "url": "tags/lenovo/index.html",
    "revision": "74eea8d4d537336b6cd4a3a24de529db"
  },
  {
    "url": "tags/letter/index.html",
    "revision": "328d6d0ca8baf4119bb4d5c5af800d30"
  },
  {
    "url": "tags/levels-of-communication/index.html",
    "revision": "0fb73ef3cd34731d1fb910f4d3efb421"
  },
  {
    "url": "tags/lighthearted/index.html",
    "revision": "8f95336b4bc22c80be4faa28a15dd152"
  },
  {
    "url": "tags/limbo-game/index.html",
    "revision": "d1f5df435d976bb66d768ce76f41653d"
  },
  {
    "url": "tags/limbo/index.html",
    "revision": "57b6cce5c6008e144816ca7aff5337a6"
  },
  {
    "url": "tags/link/index.html",
    "revision": "93df5b98ab543acc5c08663291a8a96c"
  },
  {
    "url": "tags/linked-in/index.html",
    "revision": "dd97c2d01fabb5ac106b10a37cd741c3"
  },
  {
    "url": "tags/linked-lists/index.html",
    "revision": "8c92dc6116cfc00998e43e087d90468d"
  },
  {
    "url": "tags/linkedin/index.html",
    "revision": "3e253655e763c25c0a6e2e16982c8d53"
  },
  {
    "url": "tags/lips/index.html",
    "revision": "bed314e9e308dfa562d6093ba99f1d59"
  },
  {
    "url": "tags/list/index.html",
    "revision": "67ff7a15971adfbe40db4d0734844032"
  },
  {
    "url": "tags/liteicon/index.html",
    "revision": "ee9a8a12976e8bcc8549b20ef5b4ad4c"
  },
  {
    "url": "tags/load-unpacked-extension/index.html",
    "revision": "d44e22ce9db5304eb932a9f63a3ebb3f"
  },
  {
    "url": "tags/logistics/index.html",
    "revision": "9cf592530055b1b3861919e4ab10086d"
  },
  {
    "url": "tags/lonely/index.html",
    "revision": "128a10d2693c48237a82ef8285b8f0dd"
  },
  {
    "url": "tags/long-lists/index.html",
    "revision": "babeddc35cc5edd63d11d8223f07dbd6"
  },
  {
    "url": "tags/lord-of-the-flies/index.html",
    "revision": "6f4b3b68cf622934c70e3fbc2e82c71f"
  },
  {
    "url": "tags/lord-of-the-rings-return-of-the-king/index.html",
    "revision": "1f97a0a01d73cf558e7c5f7a55dfd8b1"
  },
  {
    "url": "tags/lord-of-the-rings/index.html",
    "revision": "71d02b363a056e653538073c6f25453a"
  },
  {
    "url": "tags/louvre/index.html",
    "revision": "3d56dc04af94d4af57c08f3c0d6bafb2"
  },
  {
    "url": "tags/love/index.html",
    "revision": "02125cc36e23d1de7025fce97d76db0a"
  },
  {
    "url": "tags/lunch/index.html",
    "revision": "1b4b23ee760c414027489f6a019a9d37"
  },
  {
    "url": "tags/lust/index.html",
    "revision": "94af760388a899d4d33887e843249735"
  },
  {
    "url": "tags/lynda.com/index.html",
    "revision": "18471aedf08328eb5a0952c99fb0d0db"
  },
  {
    "url": "tags/mac/index.html",
    "revision": "107c655d8de4ad1cc228175f8daaa54a"
  },
  {
    "url": "tags/macabre/index.html",
    "revision": "95803079706880fc9483f0ba0b9c32c1"
  },
  {
    "url": "tags/macaroni/index.html",
    "revision": "90fed78ffa569e14ff77e24487c77dee"
  },
  {
    "url": "tags/machine-learning/index.html",
    "revision": "24780e9a6f573fd8c9bca8b1fe5fb471"
  },
  {
    "url": "tags/mad-cowboy/index.html",
    "revision": "49a4c566613f9333728521d03c276ccc"
  },
  {
    "url": "tags/main-function/index.html",
    "revision": "00a895245726d9a9429d37beb30d8e73"
  },
  {
    "url": "tags/main-ideas/index.html",
    "revision": "17484cd9fab983cd5e0360454a639ad9"
  },
  {
    "url": "tags/main-method/index.html",
    "revision": "ada4d5ffc3a12e21380082ead8c6a95e"
  },
  {
    "url": "tags/make-school/index.html",
    "revision": "2c5408b53ec6ab85f88156ac7290f388"
  },
  {
    "url": "tags/maker-square/index.html",
    "revision": "3d08f35d314a2da4e64e79fa34b9fcc1"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "955a98e962e9a2d8c2655a2586d59413"
  },
  {
    "url": "tags/makersquare/index.html",
    "revision": "2e09aeae2ffd0a0f0efeec92e424fad7"
  },
  {
    "url": "tags/man/index.html",
    "revision": "4f09372a423b4456927fbc1252cec922"
  },
  {
    "url": "tags/manifest.json/index.html",
    "revision": "b00a2c3d1d57d24bfde4a301695bad73"
  },
  {
    "url": "tags/manuel-perez/index.html",
    "revision": "5ffa6b658fc2932b6b42d31e9755043d"
  },
  {
    "url": "tags/manuel/index.html",
    "revision": "81e21a70286e8700559be74ffde0c151"
  },
  {
    "url": "tags/map-me/index.html",
    "revision": "15713eb1d7ed6add1c778e34565e8105"
  },
  {
    "url": "tags/map-of-coding-bootcamps/index.html",
    "revision": "3e09eda05e8349db97f6c066928480a6"
  },
  {
    "url": "tags/map/index.html",
    "revision": "5caa78ce1f033c317362b9a5128064ff"
  },
  {
    "url": "tags/mapme/index.html",
    "revision": "d19b5ef771726502b71f532f10bfabcd"
  },
  {
    "url": "tags/mario-kart/index.html",
    "revision": "844d987a18b48275ea46b29c8ed8d531"
  },
  {
    "url": "tags/mario/index.html",
    "revision": "50455af23669c4c6395f80e8e792a820"
  },
  {
    "url": "tags/market-size/index.html",
    "revision": "9072fccf5cfa2e82c9a69c6dd7053de9"
  },
  {
    "url": "tags/massachusetts/index.html",
    "revision": "b8a2baffcdd1cb9d2d46fe0c2ca6fc83"
  },
  {
    "url": "tags/materialism/index.html",
    "revision": "3863884ffde793d1fb5a9439b84ea5c6"
  },
  {
    "url": "tags/math-functions/index.html",
    "revision": "2a3567db736f27d52b9d6b78e4837484"
  },
  {
    "url": "tags/math-java/index.html",
    "revision": "f812f497d754db89db88c8ce384d1e69"
  },
  {
    "url": "tags/matthew-fontaine-maury-high-school/index.html",
    "revision": "8801ce402e32f6e770032d777412b071"
  },
  {
    "url": "tags/maurice-moss/index.html",
    "revision": "d8c5da4810abf01469d4d6da87b93c44"
  },
  {
    "url": "tags/maury-high-school/index.html",
    "revision": "a19af8f6541a3310e3cf71aaf2cc5e4b"
  },
  {
    "url": "tags/maxs-head/index.html",
    "revision": "c992056b503c723745525c087cb0d33f"
  },
  {
    "url": "tags/mean/index.html",
    "revision": "9ab80652c2763574d5d808d9deeb294a"
  },
  {
    "url": "tags/meat-boy/index.html",
    "revision": "30d2fd9ccdcf8f74a80c89c9d995dc78"
  },
  {
    "url": "tags/medium/index.html",
    "revision": "79e7a28fe5c07d424e636050ad0656e6"
  },
  {
    "url": "tags/meetup/index.html",
    "revision": "24e034fee05a914337bc00d9359c0990"
  },
  {
    "url": "tags/meetups/index.html",
    "revision": "fd0fcc57a55d3d9bc5b6e4a78989fda0"
  },
  {
    "url": "tags/melodrama/index.html",
    "revision": "efc092f9d4b469be99a9da996ab00ea4"
  },
  {
    "url": "tags/memory-address/index.html",
    "revision": "02155742449182a21262007a73f7f245"
  },
  {
    "url": "tags/mentoring/index.html",
    "revision": "268dd2af7571910da98ce77b4b6ce732"
  },
  {
    "url": "tags/merge-sort/index.html",
    "revision": "d0d43d629daa04fd9c8cb18764c79cd9"
  },
  {
    "url": "tags/merger/index.html",
    "revision": "5949eb4299cc6fbe46752335ded074c2"
  },
  {
    "url": "tags/michael/index.html",
    "revision": "dc8b3737ef54a5951984dfb34dbe717f"
  },
  {
    "url": "tags/middle-school-poems/index.html",
    "revision": "036ffe43faf3b64f1342bb5078dd1f24"
  },
  {
    "url": "tags/midterm/index.html",
    "revision": "dbdd39c57721938edd2995fa9ba21852"
  },
  {
    "url": "tags/migration/index.html",
    "revision": "ce754cf847f7ad2db57ff847f964fb85"
  },
  {
    "url": "tags/miklos-nyiszli/index.html",
    "revision": "3424953644a06816ca5601e572c81a56"
  },
  {
    "url": "tags/mini/index.html",
    "revision": "58c150e76660355941c4741418ea79b1"
  },
  {
    "url": "tags/minions/index.html",
    "revision": "39c70fa450ed6d4a14281c27ed98f376"
  },
  {
    "url": "tags/mint/index.html",
    "revision": "dc4d5d23d4c1f3a2fe943ea61ac64628"
  },
  {
    "url": "tags/mit/index.html",
    "revision": "5d4e313292560d8a35a35c869520f69c"
  },
  {
    "url": "tags/mixer/index.html",
    "revision": "ac73c556b73c78e2fbe21cb7a8a84be2"
  },
  {
    "url": "tags/mobile-phone/index.html",
    "revision": "62ba799946d1e51fe5bc45c99fd13a5b"
  },
  {
    "url": "tags/modern-tech/index.html",
    "revision": "b5486857b8d2862f0a627d824d13bdca"
  },
  {
    "url": "tags/mom-problems/index.html",
    "revision": "87a27a2c43841cd1ef9d4c4a2c64200d"
  },
  {
    "url": "tags/mom/index.html",
    "revision": "b9eb3ee4406c04cc07efbda6e6e53e55"
  },
  {
    "url": "tags/monsters/index.html",
    "revision": "0e8f80d22f7c8f30a04bc5a08cb6cfb3"
  },
  {
    "url": "tags/month-left/index.html",
    "revision": "ac2b4d62a82797c14a14bae57eccaabe"
  },
  {
    "url": "tags/morbid/index.html",
    "revision": "f0882c410291288939209e2a84e7cc53"
  },
  {
    "url": "tags/mother/index.html",
    "revision": "0d805f066ada6cff133cc6ec7f97451c"
  },
  {
    "url": "tags/motion/index.html",
    "revision": "60ddd6e9ef54b18485a7102d8e97f805"
  },
  {
    "url": "tags/mountain-view/index.html",
    "revision": "fb7c92f376da4ee0babfdc15aa194e0e"
  },
  {
    "url": "tags/movies/index.html",
    "revision": "ed8c658488ae12c95f0f908ed61caf43"
  },
  {
    "url": "tags/mp3/index.html",
    "revision": "ee7b7047ecf6b75f7546787d19e48729"
  },
  {
    "url": "tags/museum/index.html",
    "revision": "a7d1fe1e9a6d44453be1af1945c3bf7a"
  },
  {
    "url": "tags/music/index.html",
    "revision": "330ae26e7c6d584879c968f4b6761308"
  },
  {
    "url": "tags/mvp/index.html",
    "revision": "85f4d68b1627d79dc0c0374a816b268d"
  },
  {
    "url": "tags/neil-gaiman/index.html",
    "revision": "a574e4cf680f688a3dcca72d9fc02671"
  },
  {
    "url": "tags/never-outshine/index.html",
    "revision": "3f90fb62112f7f03a96de53d49b480e1"
  },
  {
    "url": "tags/new-meetup/index.html",
    "revision": "ece47bc8c4acbe5b640f36fe74cefe8d"
  },
  {
    "url": "tags/new-network/index.html",
    "revision": "8a612f26f3ca57fe8da812ce98df2603"
  },
  {
    "url": "tags/new-super-mario-bros/index.html",
    "revision": "0afeddd2b6e0a58e2193d284c2e0c2a2"
  },
  {
    "url": "tags/new-year/index.html",
    "revision": "b314098f442912ebb5bff2d4bf21e9e2"
  },
  {
    "url": "tags/new-york-city/index.html",
    "revision": "896142a3d7b8da0bed2d0ea5d692a55a"
  },
  {
    "url": "tags/news/index.html",
    "revision": "3aaf79e29dd3f835ef2c753784674187"
  },
  {
    "url": "tags/nick-james/index.html",
    "revision": "7250e277a6244004c5d1d540a715a50b"
  },
  {
    "url": "tags/nitty-gritty/index.html",
    "revision": "171145f74f3a8ba8e715a0afb1868220"
  },
  {
    "url": "tags/no-regrets/index.html",
    "revision": "a880c3d67ad7b8b7a740703dfe4347ca"
  },
  {
    "url": "tags/node/index.html",
    "revision": "28f5ffb41ce4bc1edb7410017cd0031e"
  },
  {
    "url": "tags/nodes/index.html",
    "revision": "c2264a5b23e86e006cfbbf5fc7bcca66"
  },
  {
    "url": "tags/non-profit/index.html",
    "revision": "dbd0b2f0b3c25630d9bb36916523d10d"
  },
  {
    "url": "tags/noob/index.html",
    "revision": "fb16dcdc8207e905be258acf4e5d9424"
  },
  {
    "url": "tags/noobie/index.html",
    "revision": "a1f2c79f0a8f00e0e80e09483edd09d1"
  },
  {
    "url": "tags/norfolk-javascript/index.html",
    "revision": "cb93f9635f2d48df51d049ab295abb07"
  },
  {
    "url": "tags/norfolk-virginia/index.html",
    "revision": "1bb2f910f8025edd5df8e8f2735c75d6"
  },
  {
    "url": "tags/norfolk/index.html",
    "revision": "753bba0bd8af4d56bb391d9a7a1b32ef"
  },
  {
    "url": "tags/norfolkjs-journey/index.html",
    "revision": "8da9031da6525a4ab06ddb534f8497ad"
  },
  {
    "url": "tags/norfolkjs/index.html",
    "revision": "9f87af8089353fecbc4349165024ec12"
  },
  {
    "url": "tags/north-korea/index.html",
    "revision": "f3d1924c25b5aacda17b8268ab6745c1"
  },
  {
    "url": "tags/north/index.html",
    "revision": "f2bde40952f7f0632a3a544b5f8ad919"
  },
  {
    "url": "tags/northwestern-university/index.html",
    "revision": "b5635b0e0e1eb8d8044582adf284c9a2"
  },
  {
    "url": "tags/not/index.html",
    "revision": "863312c04f41ed13fc75aa2666ea9ab5"
  },
  {
    "url": "tags/notes/index.html",
    "revision": "2c6f8f96af04d49531f7203ed27a1733"
  },
  {
    "url": "tags/nothing-to-envy/index.html",
    "revision": "3f911b16afd4a0536f8e919e230c98bf"
  },
  {
    "url": "tags/nothing/index.html",
    "revision": "c5208a6c6d54770c15a2cedd1ef19e3d"
  },
  {
    "url": "tags/novel/index.html",
    "revision": "1802a1c051e695504d871e9abc1ebe9a"
  },
  {
    "url": "tags/null/index.html",
    "revision": "afb1b4efdd947bb5b773135d6f8d88ff"
  },
  {
    "url": "tags/numbers/index.html",
    "revision": "844026a121c8e1ad42ec87319174e039"
  },
  {
    "url": "tags/numerical-expressions/index.html",
    "revision": "4b371a45f481c18285f668a37cedcf1a"
  },
  {
    "url": "tags/odin-project/index.html",
    "revision": "c6f0611e737a4e710f294119d13dae47"
  },
  {
    "url": "tags/odu-email-integration/index.html",
    "revision": "817353dbf5bc171704c2a25f79d83af6"
  },
  {
    "url": "tags/odu/index.html",
    "revision": "55e1a2950f08574c9e36e03869abfdb3"
  },
  {
    "url": "tags/oh-snap/index.html",
    "revision": "4dd69ac95045bd24d0640bdb0c6542a4"
  },
  {
    "url": "tags/old-science/index.html",
    "revision": "fe080552464e1fda2528352d9c7e4003"
  },
  {
    "url": "tags/one-page-love/index.html",
    "revision": "d223da9f057c70091bb3aef7a6f48812"
  },
  {
    "url": "tags/one-week/index.html",
    "revision": "852cf34615685c725236ed2c8ad01fe1"
  },
  {
    "url": "tags/online-course/index.html",
    "revision": "f9a43ba15ad731a43585f8f0215a37a3"
  },
  {
    "url": "tags/online-design-course/index.html",
    "revision": "05c9224505b7231d2f162d547f9d9a20"
  },
  {
    "url": "tags/online-flash-games/index.html",
    "revision": "c0c5d036c7df43e9ef2762ae79f82583"
  },
  {
    "url": "tags/online-image-editor/index.html",
    "revision": "29023aaf23dd225276616ec92757801f"
  },
  {
    "url": "tags/online-python-tutor/index.html",
    "revision": "ee5ed8bd6ddff9c86de47bd1a64e544d"
  },
  {
    "url": "tags/op-smile/index.html",
    "revision": "fa19a9938ae34d7b611c4b756a631858"
  },
  {
    "url": "tags/operation-smile/index.html",
    "revision": "a283194f293056d3aead4400dafee034"
  },
  {
    "url": "tags/oral-comm/index.html",
    "revision": "92fd76c366ffe66a3d09c910eac61b17"
  },
  {
    "url": "tags/oren-etzioni/index.html",
    "revision": "86202152d5e8ea6d558f91038d07efe0"
  },
  {
    "url": "tags/orson/index.html",
    "revision": "ba99c9bce0aeaf6d64d6d013f4be6b17"
  },
  {
    "url": "tags/oss/index.html",
    "revision": "72c760d76dfcb58d65b1302990c370da"
  },
  {
    "url": "tags/osx-el-capitan/index.html",
    "revision": "bd0611280264e863e2cfb1c6b185c806"
  },
  {
    "url": "tags/osx/index.html",
    "revision": "fc4ae64a133056b2546d5a70c9d50a14"
  },
  {
    "url": "tags/oxford-university/index.html",
    "revision": "08dffaf5057f099d330cc1add6d0a135"
  },
  {
    "url": "tags/pandemic-2/index.html",
    "revision": "3a20c87ff4cc9b9bbc9a4e7115495f59"
  },
  {
    "url": "tags/pandemic/index.html",
    "revision": "e3288f040c0c1da0efaaf2a609a50b43"
  },
  {
    "url": "tags/papers/index.html",
    "revision": "5cd823a8f50468ceb76266dde3f73fcc"
  },
  {
    "url": "tags/parchment/index.html",
    "revision": "c12bfe8dadb65940b0ba7d4fc061b5a5"
  },
  {
    "url": "tags/pattern-library/index.html",
    "revision": "f3c8aa4f9167bc2b2a158d567c30cb64"
  },
  {
    "url": "tags/paypal/index.html",
    "revision": "c8dcf8f7efded8fde402890e4424ba72"
  },
  {
    "url": "tags/pb/index.html",
    "revision": "4c3f84f85dc179179c0b752f6e60c7b6"
  },
  {
    "url": "tags/pdf-to-images/index.html",
    "revision": "86ea76f57b85b760eaca0acd7504bf40"
  },
  {
    "url": "tags/personal-cohort-experience/index.html",
    "revision": "9ea057d3c9aae14ca2a40d67c5a9f439"
  },
  {
    "url": "tags/personal-journal/index.html",
    "revision": "1a85b71f1be00395757c8cd892c4f1a1"
  },
  {
    "url": "tags/personal-questions/index.html",
    "revision": "21f4d74dcadfe8d2d625d90a458e3f6b"
  },
  {
    "url": "tags/personal-website/index.html",
    "revision": "6240c7dc8ec4967cb7dc978d7936b901"
  },
  {
    "url": "tags/personality/index.html",
    "revision": "43baeab3b91c011292edd4ac03be64fa"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "ee7d3267eee31626ab4b1d19209d4d41"
  },
  {
    "url": "tags/pertaining-to-hack-reactor/index.html",
    "revision": "97d5a077e70fbe93c360fcb8c652160c"
  },
  {
    "url": "tags/pestilence/index.html",
    "revision": "007d296aeebf6f7bda838e5bbd885488"
  },
  {
    "url": "tags/peter-sunde/index.html",
    "revision": "c8420a7f8de34706433dc190151ea58b"
  },
  {
    "url": "tags/peter-weyland/index.html",
    "revision": "bf4d79bfffeb7897069ba1f932fb6941"
  },
  {
    "url": "tags/philadelphia/index.html",
    "revision": "67eeed15f8477258b4dcf0109087ed08"
  },
  {
    "url": "tags/phone-conversations/index.html",
    "revision": "4f0a4305bd885b1ddaa33c84d7b65c34"
  },
  {
    "url": "tags/pick-up-lines/index.html",
    "revision": "5f52b425308a21b0261b8a9b6c4c220d"
  },
  {
    "url": "tags/pictures/index.html",
    "revision": "889f3759d7d4b21427edc8224efa1836"
  },
  {
    "url": "tags/pirate-bay/index.html",
    "revision": "63440c52e720e38a0e0e135745b7f8a1"
  },
  {
    "url": "tags/pity/index.html",
    "revision": "412f93a8508b566e8b756006d9d6bbdb"
  },
  {
    "url": "tags/pixel-icon-generator/index.html",
    "revision": "888c2ff8fb4b5818f6dfbccdf4bce300"
  },
  {
    "url": "tags/pixelfest/index.html",
    "revision": "a91f79bf75d6c6688fcc641c4731c624"
  },
  {
    "url": "tags/plan-ahead/index.html",
    "revision": "2fcdd1fafa658f359e214440cbf27bb0"
  },
  {
    "url": "tags/planetarium-show/index.html",
    "revision": "77f7b25e6a4b4bb091bba2a365b95e0e"
  },
  {
    "url": "tags/plans-in-motion/index.html",
    "revision": "8d18e9e4016c55c585c22560f56297c9"
  },
  {
    "url": "tags/play-along/index.html",
    "revision": "31ff92edda9a7e815f6dce5235bb5531"
  },
  {
    "url": "tags/playdead-games/index.html",
    "revision": "016133d51abdbefd20c6201fd447af06"
  },
  {
    "url": "tags/playdead/index.html",
    "revision": "91aff676dc126273dae3f934b5bc9ea6"
  },
  {
    "url": "tags/playlistbuddy/index.html",
    "revision": "93d6819c815050bd12a9392719291729"
  },
  {
    "url": "tags/playlists/index.html",
    "revision": "fb3506cdb660f97bd7fb1b92be0d9f31"
  },
  {
    "url": "tags/plurality/index.html",
    "revision": "769c89ccc605d4ef06b58a91d245ccc4"
  },
  {
    "url": "tags/png-files/index.html",
    "revision": "ed747231a9448a3b2e3e3bc5084a659e"
  },
  {
    "url": "tags/png/index.html",
    "revision": "f486145dc1d5e2cb221ef675a2037738"
  },
  {
    "url": "tags/poem/index.html",
    "revision": "19647b6db817bf329b357e2b322055c8"
  },
  {
    "url": "tags/poetry/index.html",
    "revision": "c5353d2d688347a9def0b13bd012f4e1"
  },
  {
    "url": "tags/pointer/index.html",
    "revision": "4852ed8293958a1a23c81da12f9c56a0"
  },
  {
    "url": "tags/poptropica/index.html",
    "revision": "1f704595d5622fdc16cba711ae91fc51"
  },
  {
    "url": "tags/portal-runner/index.html",
    "revision": "2b0d64fb24e83c3a48fc5d355eac3659"
  },
  {
    "url": "tags/post-apocalyptic/index.html",
    "revision": "5c21543048b77e631fc6c63e81b100fc"
  },
  {
    "url": "tags/postorder/index.html",
    "revision": "b6d904947b511b403108a92326d0cbb3"
  },
  {
    "url": "tags/potential/index.html",
    "revision": "d298d28d1dc4205a75188be9fb3bd129"
  },
  {
    "url": "tags/pow/index.html",
    "revision": "e35cce27a441c9feef1269efb200bc61"
  },
  {
    "url": "tags/predecessor/index.html",
    "revision": "c55e791f200b5621179b24670144b896"
  },
  {
    "url": "tags/preorder/index.html",
    "revision": "cebd21d11d21a5bc855ffd9ce73b08e9"
  },
  {
    "url": "tags/prep/index.html",
    "revision": "feb478b7813130b00bc1f45a706dd0f8"
  },
  {
    "url": "tags/preparation/index.html",
    "revision": "846fecec8d1ce64baf8517e8d3e52a86"
  },
  {
    "url": "tags/preparing/index.html",
    "revision": "7da8ec78630a3eef37925b0e8139ed64"
  },
  {
    "url": "tags/prepartion/index.html",
    "revision": "8685cf13aa5ea76de3c01c276c2993b6"
  },
  {
    "url": "tags/presentation-software/index.html",
    "revision": "90f60455d5bca48a7eafc124958568dd"
  },
  {
    "url": "tags/president-harvey-mudd/index.html",
    "revision": "5c03acae0a472fe2fe501ad9538d82e6"
  },
  {
    "url": "tags/pretty/index.html",
    "revision": "a63477c7c0c83694a32dd56fbb1e7183"
  },
  {
    "url": "tags/prework/index.html",
    "revision": "973c1a696417218e28f65caa30c057c3"
  },
  {
    "url": "tags/pricey/index.html",
    "revision": "78e1f1643f6d1ecbb2530a73071d65cb"
  },
  {
    "url": "tags/pride/index.html",
    "revision": "f8047571a3581142c02d1f8ea8e00b17"
  },
  {
    "url": "tags/printf/index.html",
    "revision": "53886d0d5b5c3e9b0a23756e0c0836de"
  },
  {
    "url": "tags/printing/index.html",
    "revision": "96180e82cd4bb5cfd2afffe65c79c6ed"
  },
  {
    "url": "tags/priory-of-sion/index.html",
    "revision": "7e132626149133908bf4bd565418abc8"
  },
  {
    "url": "tags/prisoners/index.html",
    "revision": "2958556061391c4dad52e289c4401b52"
  },
  {
    "url": "tags/process/index.html",
    "revision": "dda479b82bd8d9e2ee91654823d5352b"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "a63f2ad698223d7c5e9968021dbbc700"
  },
  {
    "url": "tags/product-academy/index.html",
    "revision": "f339db258804d11770d778acc670ebdd"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "a89350942a2b32a615bfa78c95f1a3fc"
  },
  {
    "url": "tags/program-length/index.html",
    "revision": "55a861506e575140f4eb690540d76acc"
  },
  {
    "url": "tags/program/index.html",
    "revision": "19cfb0633d920f9dacad538424e064fb"
  },
  {
    "url": "tags/programmer/index.html",
    "revision": "e020e38508624263aeb090b4b156e725"
  },
  {
    "url": "tags/programming-bootcamps/index.html",
    "revision": "1558563d67429e4ba11bee6ac25aadaf"
  },
  {
    "url": "tags/programming/index.html",
    "revision": "13e0f904d19622f3021b49f6f5188e93"
  },
  {
    "url": "tags/project-zomboid/index.html",
    "revision": "019f4501902b6c4fe043447670589580"
  },
  {
    "url": "tags/projects/index.html",
    "revision": "5a968695b18dd6c484931f7102d98f66"
  },
  {
    "url": "tags/promises/index.html",
    "revision": "93cbc1ccbfef872a44c9cf455f9003a4"
  },
  {
    "url": "tags/properly-program/index.html",
    "revision": "00d7e310cbc7b3eda4380d8ac3250717"
  },
  {
    "url": "tags/properties/index.html",
    "revision": "45e843a3acbff0a209d1d9f31e66a5b7"
  },
  {
    "url": "tags/pseudocode/index.html",
    "revision": "8b2ca69684f9acca7ad6e210b3dba13e"
  },
  {
    "url": "tags/puppy-love/index.html",
    "revision": "7628257fb49f90ae3fc185d8ede98328"
  },
  {
    "url": "tags/python-3/index.html",
    "revision": "0526a44493a52e39a1f71d9097e8efcb"
  },
  {
    "url": "tags/python-area-of-a/index.html",
    "revision": "9e8e7d2c192926f48ab5f0a42d61a078"
  },
  {
    "url": "tags/python-bits/index.html",
    "revision": "1f8fdf791a95a98820fcc45ba1e6f43b"
  },
  {
    "url": "tags/python/index.html",
    "revision": "c763cd380cf3dcd22e8ce2868e8ed88d"
  },
  {
    "url": "tags/questions-coding/index.html",
    "revision": "c91e89e23a3cdcc6834d299e5f6d5c50"
  },
  {
    "url": "tags/questions/index.html",
    "revision": "fa5ba7b4d3e5f0d52b0da53195240937"
  },
  {
    "url": "tags/queue-implementation/index.html",
    "revision": "232cff48607be6d8107a1f7d21edc03c"
  },
  {
    "url": "tags/quick-sort/index.html",
    "revision": "5e59909018d83de7e1705f3c3175f2ad"
  },
  {
    "url": "tags/quizlet/index.html",
    "revision": "f86abab1836f6bfc3292c32c2c2701cd"
  },
  {
    "url": "tags/quizzes/index.html",
    "revision": "77f61fb952223f43994942c7c1d9ef7a"
  },
  {
    "url": "tags/quora/index.html",
    "revision": "9fbf667ef51445e3423c4573a88c7866"
  },
  {
    "url": "tags/quotient-remainder/index.html",
    "revision": "6a73403512b28590769c4d05be2ae33f"
  },
  {
    "url": "tags/random-poems/index.html",
    "revision": "e3b7a5cc61db59f2f9312f1a1b7b3c47"
  },
  {
    "url": "tags/randomly-generated/index.html",
    "revision": "c2bd85f324efd6daf0c5738c408875bf"
  },
  {
    "url": "tags/rankme/index.html",
    "revision": "f97388641d524e20e017579369b770c2"
  },
  {
    "url": "tags/rant/index.html",
    "revision": "c5af089858db7b78166ba3c32aeeb09d"
  },
  {
    "url": "tags/rants/index.html",
    "revision": "8603d4cdefc1c3149f05908f6947cd49"
  },
  {
    "url": "tags/rating/index.html",
    "revision": "723fd4b8a735c11615913b442070cad5"
  },
  {
    "url": "tags/re-birth/index.html",
    "revision": "3cc7b21a1b44c33583b45e09afe25a60"
  },
  {
    "url": "tags/readme-template/index.html",
    "revision": "d32b974182c2068cb536eecd2d398614"
  },
  {
    "url": "tags/readme/index.html",
    "revision": "051c06274e79b6c37a1e1fcdf9435027"
  },
  {
    "url": "tags/real-data/index.html",
    "revision": "850f8db1a07d940dc63416a91e786dbf"
  },
  {
    "url": "tags/reason/index.html",
    "revision": "0107e33d1a766d7a6556ba6d97c41736"
  },
  {
    "url": "tags/reasons/index.html",
    "revision": "ba2a5d823e35610e4476bade6b2c0289"
  },
  {
    "url": "tags/recruiting/index.html",
    "revision": "9a6ce960aaec40d3af5488003a703d93"
  },
  {
    "url": "tags/recursion/index.html",
    "revision": "5c2281542fd499d8e43a086f16ac9298"
  },
  {
    "url": "tags/recursive/index.html",
    "revision": "37fb115855086271bdb00ca37ea1a20b"
  },
  {
    "url": "tags/reflections/index.html",
    "revision": "3760f684207084cb256d97b7e57e1758"
  },
  {
    "url": "tags/rejection/index.html",
    "revision": "b9cea871e59ed5938ccee5bd509382ab"
  },
  {
    "url": "tags/relative/index.html",
    "revision": "fc0df7fdb3152a519a3ccea5dc61e387"
  },
  {
    "url": "tags/relativity/index.html",
    "revision": "c12c97644a27e518c573e28fc234eee6"
  },
  {
    "url": "tags/religion/index.html",
    "revision": "7ceece4b6a9245589061551f253031ea"
  },
  {
    "url": "tags/religious/index.html",
    "revision": "6b97fdc4cb26bb56f2a86b185801d230"
  },
  {
    "url": "tags/remove/index.html",
    "revision": "837ce741a2b4321cf71d2307d2e64e09"
  },
  {
    "url": "tags/rename-multiple-photos/index.html",
    "revision": "ecbfb11c7dc8e443811470254e0c9ec9"
  },
  {
    "url": "tags/repetitive/index.html",
    "revision": "2c62825e12ac1ec8896be1223e7bd562"
  },
  {
    "url": "tags/research/index.html",
    "revision": "7c2f1f0683d9e1906190f78dd4c86d89"
  },
  {
    "url": "tags/reset-dock/index.html",
    "revision": "ad6540d440256ecfb931687d49a2e1d2"
  },
  {
    "url": "tags/reset-launchpad/index.html",
    "revision": "4a97ab30a7e1f5617885f6bd1898e150"
  },
  {
    "url": "tags/reset-your-launchpad/index.html",
    "revision": "631a46fc08702cc54b9a4d653cff96ab"
  },
  {
    "url": "tags/resources/index.html",
    "revision": "04d729fcfc9c64f45f5a74445f041fee"
  },
  {
    "url": "tags/respect-tradition/index.html",
    "revision": "159b17c83898af33f458376238048947"
  },
  {
    "url": "tags/result/index.html",
    "revision": "9df9a27e8c2c0ca84d784ee51b20cd51"
  },
  {
    "url": "tags/results/index.html",
    "revision": "af9d6fbd40adf5fc9034e19f4547d151"
  },
  {
    "url": "tags/resume/index.html",
    "revision": "85a0df6e9a314de8089c3c1d13b94e4d"
  },
  {
    "url": "tags/retarded/index.html",
    "revision": "99b9f6b901f5c6fba3b945e0c09bc2ca"
  },
  {
    "url": "tags/revconf/index.html",
    "revision": "d8054a60808a9b84f77fdf4aa4bdbd92"
  },
  {
    "url": "tags/review-week/index.html",
    "revision": "fe98f3c115cc7650a660969aad7faec7"
  },
  {
    "url": "tags/review/index.html",
    "revision": "25908bdc7e0450e7ab28ff304fd2a377"
  },
  {
    "url": "tags/reviewing/index.html",
    "revision": "30cff9a6204735263838b26612cb16d5"
  },
  {
    "url": "tags/revolution-conference/index.html",
    "revision": "8def76056fc316664061b4147e5a204d"
  },
  {
    "url": "tags/revolution/index.html",
    "revision": "9b29e6e835a9719825e63e7ba39056e5"
  },
  {
    "url": "tags/revolutionconf-virginia/index.html",
    "revision": "199f7565359b3a0604419593b169c377"
  },
  {
    "url": "tags/revolutionconf/index.html",
    "revision": "05bf45228267c9b5e7bd8c80fe8e7426"
  },
  {
    "url": "tags/richard-tapia/index.html",
    "revision": "96f7d64e9df73b08c9c5cec939f6be28"
  },
  {
    "url": "tags/riddle/index.html",
    "revision": "250445f0568bdfaa421bef366c80258e"
  },
  {
    "url": "tags/right/index.html",
    "revision": "61fdc639cd91710f27d3c2c8ae40a53f"
  },
  {
    "url": "tags/rihanna/index.html",
    "revision": "578259b41f81ae18b51e6d93b32e2f97"
  },
  {
    "url": "tags/robert-greene/index.html",
    "revision": "69ea04623e67ccd51fb2f7d6d8402f8f"
  },
  {
    "url": "tags/robert-langdon/index.html",
    "revision": "180ea79d12af12c39d472183efbd78e8"
  },
  {
    "url": "tags/robocup-soccer/index.html",
    "revision": "558361c19b49468130b1cc16c736d21d"
  },
  {
    "url": "tags/robocup/index.html",
    "revision": "6955d8adb9a4927157728339c492b62a"
  },
  {
    "url": "tags/robopocalypse/index.html",
    "revision": "65626cd879639f6251ecd0e1ac899672"
  },
  {
    "url": "tags/robot/index.html",
    "revision": "accf395705a1ad696080143cb439cfd8"
  },
  {
    "url": "tags/robotics/index.html",
    "revision": "a999b3b1908213601463a35bce9f089a"
  },
  {
    "url": "tags/robots/index.html",
    "revision": "8c33e5b90f8076773ff022a87a36018d"
  },
  {
    "url": "tags/romance/index.html",
    "revision": "bf41e8c7b3e4f7026158f2a3e75d5c97"
  },
  {
    "url": "tags/runescape/index.html",
    "revision": "327953f400f2dfeb41fd342c51fe8bb1"
  },
  {
    "url": "tags/russell-cheng/index.html",
    "revision": "2fb1d7a99de358dd8c133ed2233cdd03"
  },
  {
    "url": "tags/sally-conference/index.html",
    "revision": "f4d8817456dc89ded2ded4af644c597c"
  },
  {
    "url": "tags/same-height/index.html",
    "revision": "be5ca2559255ccd84b900bf2b4d43881"
  },
  {
    "url": "tags/same-sex-marriage/index.html",
    "revision": "41dfc0f660ade5a8e4b8dd227ffd0f3c"
  },
  {
    "url": "tags/samer-buna/index.html",
    "revision": "243ac2c2ca779d1e98ffb473970abbc1"
  },
  {
    "url": "tags/san-francisco/index.html",
    "revision": "910cc43cd59c8d481e4ec6120217f783"
  },
  {
    "url": "tags/sandbox/index.html",
    "revision": "d8c3680d82126d48e1931a971b183314"
  },
  {
    "url": "tags/sbarro/index.html",
    "revision": "7c52b965e2cf78e0f4d8515d6b7e29a6"
  },
  {
    "url": "tags/scary/index.html",
    "revision": "273315e5a4056824cead56f9eea16b7f"
  },
  {
    "url": "tags/scholarships/index.html",
    "revision": "5052fe9380fc3a5b754b015d760f804c"
  },
  {
    "url": "tags/school-email-integration/index.html",
    "revision": "df36db257a99b41f97e677d4a6209b44"
  },
  {
    "url": "tags/school-email/index.html",
    "revision": "bedbed3b00d07c47fc4004c964f7b38b"
  },
  {
    "url": "tags/school/index.html",
    "revision": "ee93d3c5920b20da37d6597bbf5e3d80"
  },
  {
    "url": "tags/science-fair/index.html",
    "revision": "33c865363c87e6b03acc7ff68f76a2d6"
  },
  {
    "url": "tags/science/index.html",
    "revision": "40ec948a397486f437966bb94a5c0e7b"
  },
  {
    "url": "tags/scott-card/index.html",
    "revision": "ed4c96bf89880e060dff56d7d1b266ac"
  },
  {
    "url": "tags/screenhero/index.html",
    "revision": "b40ceeacc033410df21d7332c5f79f2e"
  },
  {
    "url": "tags/screenshots/index.html",
    "revision": "f5533f09a949118f67324cec00a948b3"
  },
  {
    "url": "tags/scribe/index.html",
    "revision": "ba7daaca1396228d35767797bb121503"
  },
  {
    "url": "tags/search-query/index.html",
    "revision": "4e34f77913ca170a0b1e865dc51fc57d"
  },
  {
    "url": "tags/searching/index.html",
    "revision": "baaa0286bb90eadee58759a53048eff5"
  },
  {
    "url": "tags/sedgefield-elementary/index.html",
    "revision": "5f7c1b85aecff197f7290020a9d130bf"
  },
  {
    "url": "tags/sedgefield/index.html",
    "revision": "8b70d59817dd079415803d4cc266d248"
  },
  {
    "url": "tags/seema/index.html",
    "revision": "441dd9af47af662bbdddf5cd45097def"
  },
  {
    "url": "tags/selection-sort/index.html",
    "revision": "23ad6d7540c31f35440a2573fe88967c"
  },
  {
    "url": "tags/selection/index.html",
    "revision": "3967ef036e41242277326bff16649383"
  },
  {
    "url": "tags/selective-honesty/index.html",
    "revision": "4566773b4fd0ce804c051fc2477fc856"
  },
  {
    "url": "tags/semicolons/index.html",
    "revision": "ca6a72454dcfa4a9f3f0c25c36d9fbae"
  },
  {
    "url": "tags/senior-phase/index.html",
    "revision": "f27f5e148b8275c01f0b1f6ce11f14e2"
  },
  {
    "url": "tags/sesame-street/index.html",
    "revision": "512eee516d3537cb1d8bcff8f49c251f"
  },
  {
    "url": "tags/seven-days/index.html",
    "revision": "d18cf54df415cc2ad9788013f9fcfda8"
  },
  {
    "url": "tags/seven-deadly-sins/index.html",
    "revision": "ce6133707bac40d9906cd4fbc13fc040"
  },
  {
    "url": "tags/shaan/index.html",
    "revision": "5e6cbb85d8627643c1054e61151500bc"
  },
  {
    "url": "tags/shakespeare/index.html",
    "revision": "3483d3cde19ed106f8fef30a4bc67310"
  },
  {
    "url": "tags/shakey/index.html",
    "revision": "ad27399ab9a7c22c3c0ab3ea3dfa1f7d"
  },
  {
    "url": "tags/shame/index.html",
    "revision": "0e3b4980f261afea4352817eab34d388"
  },
  {
    "url": "tags/sharing/index.html",
    "revision": "ba28325b25387714d72e5ec6155bb382"
  },
  {
    "url": "tags/short-operation/index.html",
    "revision": "2e48c97c8fa473c4147f8ec3fd007234"
  },
  {
    "url": "tags/short-stories/index.html",
    "revision": "d07a80c797fc70206035a5a0209eec5a"
  },
  {
    "url": "tags/shrthnd/index.html",
    "revision": "a6e507e9eb5ab18c060d83ee1e7884d7"
  },
  {
    "url": "tags/silicon-valley/index.html",
    "revision": "dc2c8fa13d7bbcbc0f9b8960f6a082e4"
  },
  {
    "url": "tags/silly/index.html",
    "revision": "9db4f6e8c17e6004eaf3621be4c64a99"
  },
  {
    "url": "tags/sims-2/index.html",
    "revision": "6dcf149cd16642f2532baaeabafb6976"
  },
  {
    "url": "tags/sims-3/index.html",
    "revision": "be359ccce3ce147d6af93a2eb311488a"
  },
  {
    "url": "tags/sims-medieval/index.html",
    "revision": "c882aa373806950706faa61d9726c2fb"
  },
  {
    "url": "tags/sins/index.html",
    "revision": "55ca1578caf548972ce1b774aa9dc584"
  },
  {
    "url": "tags/siri/index.html",
    "revision": "8470c15136818e554fa6375beb0cc3e9"
  },
  {
    "url": "tags/sitedrop/index.html",
    "revision": "83b7e5c0b07d4b4d93ddbf05510171f5"
  },
  {
    "url": "tags/sketch/index.html",
    "revision": "834d85a5ae7da2c0c5e68963ba61f9ec"
  },
  {
    "url": "tags/skiirty/index.html",
    "revision": "1c96c9c1ff16d87190fb140fe9a14152"
  },
  {
    "url": "tags/skype/index.html",
    "revision": "f1387abe2b60bce200e2e702a9017f7f"
  },
  {
    "url": "tags/slack/index.html",
    "revision": "ef7eb8ee40fc3315aa89d6505b3d4817"
  },
  {
    "url": "tags/slides-carnival/index.html",
    "revision": "a266fd2804bef95a7e6e94471d7ffdf9"
  },
  {
    "url": "tags/slidescarnival/index.html",
    "revision": "15219626c9cfcb5bfe8bc4bbb4768818"
  },
  {
    "url": "tags/sloth/index.html",
    "revision": "dddf386654c85ea9cd93de6fa50c1980"
  },
  {
    "url": "tags/smaller-problem/index.html",
    "revision": "07ba8be124d3752193d0ea40390f66a3"
  },
  {
    "url": "tags/smart-notes/index.html",
    "revision": "14c4d770b021618aa3d8103192cb0e04"
  },
  {
    "url": "tags/smile-train/index.html",
    "revision": "bd560d3f2568728239a1dc4a07f72793"
  },
  {
    "url": "tags/snow/index.html",
    "revision": "44c85ee3ecbad32d356e0b8ab9fbaaaf"
  },
  {
    "url": "tags/social-networking-connectedness/index.html",
    "revision": "62979c6e06971b101759da3c660b7d0d"
  },
  {
    "url": "tags/social-networking-sites/index.html",
    "revision": "bd6136a6463f64d167a6e53b50fbe35f"
  },
  {
    "url": "tags/social-networking/index.html",
    "revision": "3defa9d0a4fccd8b204d28d14229cec2"
  },
  {
    "url": "tags/social/index.html",
    "revision": "afd186a62b363df26c07d1841971cf64"
  },
  {
    "url": "tags/socket.io/index.html",
    "revision": "6c58b3500c22bcbaaf8ee0d29e8b5dd8"
  },
  {
    "url": "tags/socks/index.html",
    "revision": "98f6a4a9a867b0ceba1ab482cedaa23f"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "ed146fb83525304bd479da836bdfca42"
  },
  {
    "url": "tags/sonderkommando/index.html",
    "revision": "c743cf325aece04a7150f0e7b77ae534"
  },
  {
    "url": "tags/sophie-neveu/index.html",
    "revision": "ce017eafad42035cef40e77c1f29d9c2"
  },
  {
    "url": "tags/sort-detective/index.html",
    "revision": "c61e51bf2a98c4723e8841cdef6e5e3b"
  },
  {
    "url": "tags/sortdetective.jar/index.html",
    "revision": "e6d5864c18f8b5cfc7f482de18799f93"
  },
  {
    "url": "tags/sorting-methods/index.html",
    "revision": "d72ba450c41c4e7477eaecf7854ad3a8"
  },
  {
    "url": "tags/sortingexperiment/index.html",
    "revision": "b2b82cafdeed1f9cb4a6270f3e933114"
  },
  {
    "url": "tags/sorty-app/index.html",
    "revision": "1ff5f5ee9a0681ab7e0e4b6beb8c1408"
  },
  {
    "url": "tags/sorty-for-osx/index.html",
    "revision": "486d3fd23c2983f8884d5fc3d7dc8f4f"
  },
  {
    "url": "tags/sorty/index.html",
    "revision": "2b97a6adf7093fbe5da21c8d1e1f46df"
  },
  {
    "url": "tags/sound-cloud/index.html",
    "revision": "fe774f8a5f9c3c68e2aed58b8a597299"
  },
  {
    "url": "tags/source-code/index.html",
    "revision": "dae983ead8249d10c7b7f44de8316ea0"
  },
  {
    "url": "tags/spanish/index.html",
    "revision": "17d424dbe01630d5e03110da8b9edbdd"
  },
  {
    "url": "tags/spank-the-money/index.html",
    "revision": "15166623b43aa017b2bec32d54c26a07"
  },
  {
    "url": "tags/spank-the-monkey/index.html",
    "revision": "119c4a48fba8a2f2ab2906753b19c958"
  },
  {
    "url": "tags/speakdeck/index.html",
    "revision": "804e510076bc896aac5c9005d4093bb9"
  },
  {
    "url": "tags/speakerdeck/index.html",
    "revision": "90979a00c22881a064fb058ad3ef9497"
  },
  {
    "url": "tags/speech/index.html",
    "revision": "b28a44bb7e981e77327b94a341aa0813"
  },
  {
    "url": "tags/speros-misirlakis/index.html",
    "revision": "5998f1661b3cf0dc2b7a86e944e32585"
  },
  {
    "url": "tags/spider/index.html",
    "revision": "84b69b707db5f9bad0638cfb4e12de0f"
  },
  {
    "url": "tags/spoiler/index.html",
    "revision": "1b6e4c82124a987074c358af913a7e48"
  },
  {
    "url": "tags/spoilers/index.html",
    "revision": "8b6de373693b52fef3edf019970a49bc"
  },
  {
    "url": "tags/spore/index.html",
    "revision": "86d9884cf9dfec582a3e5255611d55cb"
  },
  {
    "url": "tags/spotify-download-mp3/index.html",
    "revision": "220217083fe52d76b1908aa48de32492"
  },
  {
    "url": "tags/spotify-download/index.html",
    "revision": "c41350f5f4f8f63b50551770facdeedd"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "1fab34b2f3f5d913537e975d4e300a42"
  },
  {
    "url": "tags/spreadsheet-app/index.html",
    "revision": "8b213240698c87d586cba653cfb3059b"
  },
  {
    "url": "tags/stackathon/index.html",
    "revision": "7420a94a74782415bda91ec68debd6af"
  },
  {
    "url": "tags/stackstore/index.html",
    "revision": "ebd8248cf6b5e6ffa9f57864f5230344"
  },
  {
    "url": "tags/star-trek-monopoly/index.html",
    "revision": "ea2e4cd46075947c579ef4e93000bec6"
  },
  {
    "url": "tags/stardust/index.html",
    "revision": "b41b36aa5b2536ef4c19063bff9113e5"
  },
  {
    "url": "tags/starter-league/index.html",
    "revision": "e346c6bcec052df9929811938016ca07"
  },
  {
    "url": "tags/static-ui/index.html",
    "revision": "dadd76b6a85603682fb1760e275a0e05"
  },
  {
    "url": "tags/stem/index.html",
    "revision": "d408d20b76f660978de3fa5b931a9f87"
  },
  {
    "url": "tags/string/index.html",
    "revision": "ae94aa727c140edcd38edd114930da3a"
  },
  {
    "url": "tags/strings-python/index.html",
    "revision": "cbd6c9c96d2414d958a1373c78750605"
  },
  {
    "url": "tags/student-experience/index.html",
    "revision": "db85f0650848d1af66128ab5de599bdd"
  },
  {
    "url": "tags/student-id/index.html",
    "revision": "32d80b3dd28ec52a7eca4d1bc39ab8eb"
  },
  {
    "url": "tags/study-better/index.html",
    "revision": "ff84ae38b6cbda87a14022811571d6e4"
  },
  {
    "url": "tags/study-guide/index.html",
    "revision": "19ddb3e2c6dcd83a5ff3fc1652a06903"
  },
  {
    "url": "tags/study-strategies/index.html",
    "revision": "b6b6e71c0a1a3e510612f652d45d5785"
  },
  {
    "url": "tags/study-time/index.html",
    "revision": "31f557c8ac1db2856a40046adbc1ddf1"
  },
  {
    "url": "tags/studying-smart/index.html",
    "revision": "a5ef350fc4209493e41e3798aebbe503"
  },
  {
    "url": "tags/stupid/index.html",
    "revision": "424a38df7ed5fe6e98910e34e2c24d03"
  },
  {
    "url": "tags/sublime-text-3/index.html",
    "revision": "877f56b3b4f055527ea7ff858b4b130c"
  },
  {
    "url": "tags/subtree/index.html",
    "revision": "24478756029affaa7b4b976d6426560e"
  },
  {
    "url": "tags/summer-bootcamp/index.html",
    "revision": "a501d3e24fb16167f0cf4687756f2618"
  },
  {
    "url": "tags/summer-program/index.html",
    "revision": "285373dafa4c03a6d02b6d5c4d3ba881"
  },
  {
    "url": "tags/summer/index.html",
    "revision": "b0b79eb664e232d49e407f6764a1ac9d"
  },
  {
    "url": "tags/super-shuttle/index.html",
    "revision": "0a467bc83e62cd3841cdd585a8c28748"
  },
  {
    "url": "tags/super-smash-bros/index.html",
    "revision": "265a2547b3d1a1481bedcdc848dfac0e"
  },
  {
    "url": "tags/superhero-js/index.html",
    "revision": "945951711205c556e3d193b11f4d8e7e"
  },
  {
    "url": "tags/support/index.html",
    "revision": "3a9ce5e3be3177fb8bc187d3d0461980"
  },
  {
    "url": "tags/surfing/index.html",
    "revision": "62d1556e7ed617f2e7b3de2065875451"
  },
  {
    "url": "tags/surgeon/index.html",
    "revision": "dd89dbe4bbf32fa7c9dfcfdf92825e62"
  },
  {
    "url": "tags/switch-up/index.html",
    "revision": "f50dd31dc3f034fa60b7d09d22cffd45"
  },
  {
    "url": "tags/switch/index.html",
    "revision": "cda1637ab2e19ee0d72ab5bb3aa10e65"
  },
  {
    "url": "tags/switchup/index.html",
    "revision": "9c035b0cc413346d025de730b95b7635"
  },
  {
    "url": "tags/system/index.html",
    "revision": "56373eaee661085974404d9370c2e692"
  },
  {
    "url": "tags/talkies/index.html",
    "revision": "dd23f2c234986d30a6cb0972f7be3eb1"
  },
  {
    "url": "tags/tallwood/index.html",
    "revision": "1908b7c2c66079c0104fa562323b7f28"
  },
  {
    "url": "tags/tanzania/index.html",
    "revision": "8cb1e619e4efdcc9bc3fb352b59c18eb"
  },
  {
    "url": "tags/tapia/index.html",
    "revision": "87d2c8df9254752569026d53c1972a34"
  },
  {
    "url": "tags/tech-cocktail/index.html",
    "revision": "09b50cec7049fd67431858829b537350"
  },
  {
    "url": "tags/tech-companies/index.html",
    "revision": "3622711a51edbd65df0b67fbda1a969e"
  },
  {
    "url": "tags/tech-conference/index.html",
    "revision": "747d9e366aa69c50d8c0fddf5616a858"
  },
  {
    "url": "tags/tech-diversity/index.html",
    "revision": "ba10554928877c5fa633c318733fa73a"
  },
  {
    "url": "tags/tech-talk/index.html",
    "revision": "55da2f3d6c2e0d1b023606c782ddcc94"
  },
  {
    "url": "tags/techendo/index.html",
    "revision": "c9a8d4f6eb4ad48008ff431f09d3450a"
  },
  {
    "url": "tags/technical-challenge/index.html",
    "revision": "abacd83c919af520024a634ee97c6730"
  },
  {
    "url": "tags/technical-interview/index.html",
    "revision": "a21c3d085d6e8d31c7c74da77c6c4187"
  },
  {
    "url": "tags/technical-questions/index.html",
    "revision": "e9264a0e31ea94b1e3f6fc77005afd7b"
  },
  {
    "url": "tags/technological-dependence/index.html",
    "revision": "c06770833e4c425225be9b9a2683231f"
  },
  {
    "url": "tags/technological-unemployment/index.html",
    "revision": "9cd365a0ba0187659cb85506e85aacf3"
  },
  {
    "url": "tags/technology/index.html",
    "revision": "3df410e20d414f19f81a84aa3c6bbfce"
  },
  {
    "url": "tags/template/index.html",
    "revision": "90a79498d7756c1d87737c161328573f"
  },
  {
    "url": "tags/texas/index.html",
    "revision": "06b75291e967a1fe9d1fa02e3cc2402c"
  },
  {
    "url": "tags/text-messaging/index.html",
    "revision": "35b5eace45b7aa50e59a55e74e2a3862"
  },
  {
    "url": "tags/the-grid/index.html",
    "revision": "84c94e4c0b66107a789d772a867c8581"
  },
  {
    "url": "tags/the-stocks/index.html",
    "revision": "27288775388b3551b351de5f1f6b06a3"
  },
  {
    "url": "tags/the-test/index.html",
    "revision": "b0b9f0462601550a82c58698b994b365"
  },
  {
    "url": "tags/theology/index.html",
    "revision": "c658effae87dcca87c6fac3cd424a18a"
  },
  {
    "url": "tags/thinkful/index.html",
    "revision": "a010e56d16650d7c1333cfc1eda379f2"
  },
  {
    "url": "tags/thoughts/index.html",
    "revision": "d61fbc8837dbdde638e4c2f658cb7ddd"
  },
  {
    "url": "tags/tim-burton/index.html",
    "revision": "b6a4e46a4fe3e85e2076b6feaea35db1"
  },
  {
    "url": "tags/timber/index.html",
    "revision": "1eb3ef5fcf4236386e7a332c6957cd5f"
  },
  {
    "url": "tags/time-management/index.html",
    "revision": "a65224c1b97ef1d7b44c400f65451fc8"
  },
  {
    "url": "tags/time-measurements/index.html",
    "revision": "8321039c727ccdfad2435c2b7c4c8467"
  },
  {
    "url": "tags/time-travel/index.html",
    "revision": "2ab3009d550697493c0df57ebf0d4e48"
  },
  {
    "url": "tags/time/index.html",
    "revision": "f205345a29e2e4eb5c640d8560b22f0e"
  },
  {
    "url": "tags/tips-and-tricks/index.html",
    "revision": "522012dc97b02c2f1ff136bba541f215"
  },
  {
    "url": "tags/tips/index.html",
    "revision": "143a438827943f32319ea65e6bf302df"
  },
  {
    "url": "tags/tncc/index.html",
    "revision": "1e86e8e6d50366fd32f876750a170f69"
  },
  {
    "url": "tags/todo-app-laravel/index.html",
    "revision": "84cfe50d5d2e415efb8a81d3fe4b45d2"
  },
  {
    "url": "tags/todo-app/index.html",
    "revision": "aa9e66ac5adf879d14ba858e30288892"
  },
  {
    "url": "tags/todo/index.html",
    "revision": "2effe7cf3ec1c4e9d840112138736fbb"
  },
  {
    "url": "tags/tom-hanks/index.html",
    "revision": "bcbb6b784ce03fdd137b0c1a37ce7a32"
  },
  {
    "url": "tags/toolbar/index.html",
    "revision": "9775731e5452f88878c73c49b6a9034f"
  },
  {
    "url": "tags/topcoder/index.html",
    "revision": "9c671e8b2eed23540bb02adacb02d50d"
  },
  {
    "url": "tags/toronto/index.html",
    "revision": "1560da687f25f207c32147e8864b0cc1"
  },
  {
    "url": "tags/tortuga/index.html",
    "revision": "5782e126531aa1973e52644a3a0cebbd"
  },
  {
    "url": "tags/towers-of-hanoi/index.html",
    "revision": "d4c92a9987a5b5386dcdb31cfdabe45f"
  },
  {
    "url": "tags/trampoline/index.html",
    "revision": "552eb4cd02e8bf3f6efe96a6b83fd5d9"
  },
  {
    "url": "tags/transplant/index.html",
    "revision": "6eb309688ec96b79222d0aded05c852f"
  },
  {
    "url": "tags/transportation/index.html",
    "revision": "42d9276d7fc14a0bfd71b3783ff90eb6"
  },
  {
    "url": "tags/traumatized/index.html",
    "revision": "3c6a5402a550cd48eba1accff09bf620"
  },
  {
    "url": "tags/travel/index.html",
    "revision": "b7443a018168a3be62b9b2932b6e86c4"
  },
  {
    "url": "tags/traversal/index.html",
    "revision": "76f5fd3be194b979a45d17fd9e196134"
  },
  {
    "url": "tags/travis-ci/index.html",
    "revision": "284d0a70bcc8b2247ebff88fa68af207"
  },
  {
    "url": "tags/tree/index.html",
    "revision": "0a36b3f16e82dfd648b78dcf613fef5c"
  },
  {
    "url": "tags/treehouse/index.html",
    "revision": "3ffaae3ddb4b5a5c063c0ee2ccd22bde"
  },
  {
    "url": "tags/trial-and-death/index.html",
    "revision": "48edecca37a651590deee3dd4119c1b6"
  },
  {
    "url": "tags/tricks/index.html",
    "revision": "8b0bd233bd67179d0e937ffa5baa08e0"
  },
  {
    "url": "tags/trip-planner/index.html",
    "revision": "12e6ee2b9257ae151371f6512d4e13df"
  },
  {
    "url": "tags/tristan-walker/index.html",
    "revision": "381202b417b5d3364d18bf616c088d0f"
  },
  {
    "url": "tags/tristan/index.html",
    "revision": "489c5babf8a240de6087da7f0ae732e3"
  },
  {
    "url": "tags/tron-legacy/index.html",
    "revision": "217040eb668f6f5f0138629c9758fde1"
  },
  {
    "url": "tags/tuition-price/index.html",
    "revision": "2f703333a54aff1379e50b966a90b201"
  },
  {
    "url": "tags/tumblr/index.html",
    "revision": "bf4a949160b3172e2046eaef4b422ee3"
  },
  {
    "url": "tags/tutorial/index.html",
    "revision": "e9a10fd409ac48382abe4015f8ff826e"
  },
  {
    "url": "tags/tv-shows/index.html",
    "revision": "678e13f553eb21579de35da47f4a6acb"
  },
  {
    "url": "tags/tweet/index.html",
    "revision": "f4fbbc918996f4eb08be4c6593217fc5"
  },
  {
    "url": "tags/twitter/index.html",
    "revision": "5132145218e77e33a5e60f56e2f43ca9"
  },
  {
    "url": "tags/typeform/index.html",
    "revision": "8f3445be19ee697294a7d02086182012"
  },
  {
    "url": "tags/typing.io/index.html",
    "revision": "a17d15b59985389f62556ca2bb656362"
  },
  {
    "url": "tags/typography/index.html",
    "revision": "e478ac07d70c60b85293206aa5690d27"
  },
  {
    "url": "tags/u/index.html",
    "revision": "21ea3728042080daac5677c6fafb0cd0"
  },
  {
    "url": "tags/ubersicht/index.html",
    "revision": "34b9a1ce5c1f07315968e51885e7293e"
  },
  {
    "url": "tags/ui-design/index.html",
    "revision": "10ecc089c3d328ff67bd67a3c9715078"
  },
  {
    "url": "tags/ui/index.html",
    "revision": "280af89b0e6ba7bcc9c8e669792ad416"
  },
  {
    "url": "tags/ui/ux/index.html",
    "revision": "3c1923887b026949dbb9c8bcf637980b"
  },
  {
    "url": "tags/ulyssess/index.html",
    "revision": "8b93699849c813f1f5651bf29b0d431d"
  },
  {
    "url": "tags/unarmed/index.html",
    "revision": "7fc2d8baecd9b143f9191e694f006054"
  },
  {
    "url": "tags/unbaptized/index.html",
    "revision": "6fde14f473169fea731113d3da115431"
  },
  {
    "url": "tags/undergrad/index.html",
    "revision": "2bb9b95bfccdfedda1a5f4f421efb117"
  },
  {
    "url": "tags/undergraduate-conference/index.html",
    "revision": "d7c0f49178c6b73aac1c9b1e5ccfa595"
  },
  {
    "url": "tags/underscore/index.html",
    "revision": "e25b015897f15d6ab88212694cea92bc"
  },
  {
    "url": "tags/unforeseen-destiny/index.html",
    "revision": "678c0bb28c9d0771a3b000e1bd8c5db8"
  },
  {
    "url": "tags/union-city/index.html",
    "revision": "2a14ad8783435eea781ccf62cb13279a"
  },
  {
    "url": "tags/universe/index.html",
    "revision": "279c893db1bb9b23372ed2b66463360d"
  },
  {
    "url": "tags/uno/index.html",
    "revision": "79efee60bda6389e6aa95b25d1468482"
  },
  {
    "url": "tags/unsplash/index.html",
    "revision": "1e844c85a5a0eee7206a92630ca1f88b"
  },
  {
    "url": "tags/ut-austin/index.html",
    "revision": "a4d5941339d7fb4fabb7336fee5db8f5"
  },
  {
    "url": "tags/ux/index.html",
    "revision": "12bf3650664b385998a07bf59a1b32cb"
  },
  {
    "url": "tags/va-acm/index.html",
    "revision": "3ebe28ccc35446b405695a725375b0d7"
  },
  {
    "url": "tags/va-governor-schools/index.html",
    "revision": "5fb1405b26c93a22cde999804b723bf1"
  },
  {
    "url": "tags/variables/index.html",
    "revision": "ed496f0fe5b5793fe59bf35a86687b58"
  },
  {
    "url": "tags/vccs/index.html",
    "revision": "061e82e024253f7980ff2b7f7c57c027"
  },
  {
    "url": "tags/vegan-candy/index.html",
    "revision": "ccef898fa7b531514dade6a7cb5df3e4"
  },
  {
    "url": "tags/vegan/index.html",
    "revision": "5e0a6065ddb74e18d4f65a19b368bd7f"
  },
  {
    "url": "tags/vegetarian/index.html",
    "revision": "fc27dbd1f2536715a5d873bca42ed2f9"
  },
  {
    "url": "tags/venmo/index.html",
    "revision": "5d0f221d035c515b78fd7399d886bb11"
  },
  {
    "url": "tags/very-nice-sites/index.html",
    "revision": "3abe52f6b799646dcc47a27c6559a1d9"
  },
  {
    "url": "tags/victoria/index.html",
    "revision": "7b320a1591467951441ad095a5089f1d"
  },
  {
    "url": "tags/video-games/index.html",
    "revision": "3c94a9121195dc432712451cd9383458"
  },
  {
    "url": "tags/video/index.html",
    "revision": "a962c758047837649228e473bb8859ac"
  },
  {
    "url": "tags/videogames/index.html",
    "revision": "13b010c340dd1def2f53638225e995ac"
  },
  {
    "url": "tags/vimeo/index.html",
    "revision": "80e97576806565f29880fbafa17ea98d"
  },
  {
    "url": "tags/virginia-beach/index.html",
    "revision": "3062685581640666e339d60a7335c35a"
  },
  {
    "url": "tags/virginia/index.html",
    "revision": "8727e6abdca3e2ccbf8d7037afcd8c76"
  },
  {
    "url": "tags/visual-hierarchy/index.html",
    "revision": "d4213877ebb82be06a6abb305ee71b81"
  },
  {
    "url": "tags/walk/index.html",
    "revision": "990ef419f4ea063fb81b32e9d4f9c6d3"
  },
  {
    "url": "tags/walking-dead/index.html",
    "revision": "027f27e3763b79fefe292ea7939097cc"
  },
  {
    "url": "tags/walkthroughs/index.html",
    "revision": "c4ece3b69df1b8009314414be7302e3e"
  },
  {
    "url": "tags/war/index.html",
    "revision": "5e1a7f9721ce47e208dc69b2ced68d61"
  },
  {
    "url": "tags/wary-of-friends/index.html",
    "revision": "a65fff747c0fcd9049608cb8a7991acc"
  },
  {
    "url": "tags/waves-of-tech/index.html",
    "revision": "6f559754ccf55ed6b61904c549f09253"
  },
  {
    "url": "tags/wayne/index.html",
    "revision": "2854a6263f3780e1cebcd7b66cca45a7"
  },
  {
    "url": "tags/weaknesses/index.html",
    "revision": "2d9256bc99e64c8884e58840e071daf7"
  },
  {
    "url": "tags/weather/index.html",
    "revision": "24bbf32e89f3b7d75d9801049d9016a9"
  },
  {
    "url": "tags/web-crawler/index.html",
    "revision": "766bc54ac62c774a518bd3fb9e7da660"
  },
  {
    "url": "tags/web-design-talk/index.html",
    "revision": "e09073727ed3b2cc3e7cdb1a1d8bba79"
  },
  {
    "url": "tags/web-design/index.html",
    "revision": "998b3d1c7f08975104ea1a9f39f08a96"
  },
  {
    "url": "tags/web-dev/index.html",
    "revision": "c27b1a53cb11427e3fe6107bcff1a348"
  },
  {
    "url": "tags/web-development-bootcamp/index.html",
    "revision": "94185d0b7175836b60e09038a2c76430"
  },
  {
    "url": "tags/web-development-hawaii/index.html",
    "revision": "693ccfaadacaa032dde67135baa73d41"
  },
  {
    "url": "tags/web-development/index.html",
    "revision": "431bd7f584f638964910de28fd4117da"
  },
  {
    "url": "tags/web-store/index.html",
    "revision": "9d1f3cf788be09bf6b8a8ef7b0c289d6"
  },
  {
    "url": "tags/websites/index.html",
    "revision": "0fb13b9ad64806e7d7f8d04f7614ea6d"
  },
  {
    "url": "tags/week-2/index.html",
    "revision": "e8fdeb45a5a71e7e67a0c247738854f0"
  },
  {
    "url": "tags/week-3/index.html",
    "revision": "a3a3a061040b54a8a81849ab03dd92cf"
  },
  {
    "url": "tags/week-4/index.html",
    "revision": "26a7847f176000297032ead70eba26b4"
  },
  {
    "url": "tags/week-6/index.html",
    "revision": "46b58aabc982d59645386cfd19651d2a"
  },
  {
    "url": "tags/westin-copley/index.html",
    "revision": "2e099982c0e5a1a81e39fd4eefe0e1be"
  },
  {
    "url": "tags/whales/index.html",
    "revision": "0bad34f5da45d77506a5bda05cc969df"
  },
  {
    "url": "tags/what-i-use/index.html",
    "revision": "0304231e628fd6d99856d239ee47cd29"
  },
  {
    "url": "tags/whiteboard/index.html",
    "revision": "a43e41e59916db4ef6d80aa0ee6cc06c"
  },
  {
    "url": "tags/wii-sports/index.html",
    "revision": "dbc7bd452e9070a7a8f5555454eeb281"
  },
  {
    "url": "tags/wii/index.html",
    "revision": "f7a876a492ae15a7cb86ff6ea6ddfe0d"
  },
  {
    "url": "tags/wikistack/index.html",
    "revision": "66e3490800e99ac1dc16cfa1e6c3b7a6"
  },
  {
    "url": "tags/wiles.dk/index.html",
    "revision": "a50182bb3c80ce91d99fdaa06eacd416"
  },
  {
    "url": "tags/wilson/index.html",
    "revision": "dbe56f20f494badb09c21c999ea027f5"
  },
  {
    "url": "tags/winter-conference/index.html",
    "revision": "2997e92476e4ed7c98ef6ce4579f54c8"
  },
  {
    "url": "tags/winter-storm/index.html",
    "revision": "ad5241df44a7244ff95a5e1bb50db605"
  },
  {
    "url": "tags/wish-list/index.html",
    "revision": "fea691629543db66a180531851ff4abb"
  },
  {
    "url": "tags/witchcraft/index.html",
    "revision": "783c63e4bac0b21b2cdbb8be91424ec1"
  },
  {
    "url": "tags/women-who-code/index.html",
    "revision": "991b1ccf160d7cadfcf4bd0dcb001a38"
  },
  {
    "url": "tags/word/index.html",
    "revision": "37abd83dc24536b96010c0e369170e2b"
  },
  {
    "url": "tags/wordpress/index.html",
    "revision": "32389a3ea070db60fd3f3bff175be152"
  },
  {
    "url": "tags/work-routines/index.html",
    "revision": "e2b0b9b8a66a98f7391e0baa9df9a566"
  },
  {
    "url": "tags/work/index.html",
    "revision": "5d0bccea0681d9d22184fe83554b364f"
  },
  {
    "url": "tags/workforce/index.html",
    "revision": "302adad0e61e6a1448caca1f04ec298f"
  },
  {
    "url": "tags/working-harder/index.html",
    "revision": "8c2f3f23d121964b16fa5e77aba8de46"
  },
  {
    "url": "tags/working-smarter/index.html",
    "revision": "da97b16b5a297261b7d0b906f0dd2bd1"
  },
  {
    "url": "tags/wrath/index.html",
    "revision": "ee456df88010141ffbdc852e9ce870d6"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "9ae6572a13b1710a9e08df85ea86f0b7"
  },
  {
    "url": "tags/yelp/index.html",
    "revision": "c5b8cabd1813ea98e0ee847d9996a10a"
  },
  {
    "url": "tags/yeti/index.html",
    "revision": "5e7f05726c223570880dbae09c252d2b"
  },
  {
    "url": "tags/yield-rate/index.html",
    "revision": "52c9ffd79fba2c44afb3caa3db41d833"
  },
  {
    "url": "tags/yoink/index.html",
    "revision": "f53f39c8195d0986a69afc1e04751e1e"
  },
  {
    "url": "tags/yosemite-launchpad-reset/index.html",
    "revision": "17f0dc4dbf6b2c30d31a477ba8038108"
  },
  {
    "url": "tags/yosemite-launchpad/index.html",
    "revision": "8a443a3c4ad5b048b37fc89cea5a816f"
  },
  {
    "url": "tags/yosemite/index.html",
    "revision": "ac7cb442d3be33ff331146f1d9efb947"
  },
  {
    "url": "tags/youtube-dl/index.html",
    "revision": "326dadf79bacfdc43d4a0168e96d1e6a"
  },
  {
    "url": "tags/youtube/index.html",
    "revision": "53a46c740eccbeec7b9221ac89711056"
  },
  {
    "url": "tags/yvaine/index.html",
    "revision": "338e5a66d15cbfc33169b9ed99798467"
  },
  {
    "url": "tags/zeta/index.html",
    "revision": "7dd863449f9706efe56e398ca1fedf39"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
