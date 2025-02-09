/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","0c69dfe3143c76f84557a19cdf173c48"],["/2023/07/23/easyx/index.html","c845013d77a52c4bed1456de2a39e8a1"],["/2024/02/07/bili图床/index.html","cfa08b068698d0cf1a51fea45aa13e35"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","3d7d625492432cb3ea0f449d48180d03"],["/2024/02/07/我回来啦/index.html","cd0fa754958e7c9ccf766c04d00255a3"],["/2024/02/08/Hyper-V/index.html","055c41703b2b2204a86aba7dbe664afe"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","987eecc288e2590e2971c84d46a8fcfd"],["/2024/05/10/mysql-reset-password/index.html","f184b6985e5feaad17776e032a1edc89"],["/2024/05/11/qt-connect-mysql/index.html","04968a7578112d9d9d098259ee4a0b4d"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","5e3eb3b2a8534991ce43ecca4000a288"],["/2024/05/23/hackrf在linux下/index.html","5b7eac89cb585c6a30524fc7947e56c2"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","adb2e8509d6ab3b4fe3c92b91fc88f87"],["/2024/05/23/windows与hackRF收听广播/index.html","c98a042478fc40b8d36cab3505062ffb"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","bdddfb4961c87bdd56b7b1e09314ecfc"],["/2024/05/23/wsl2的网络连接/index.html","37a37060e669f6cc512fd878ef126995"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","8e57463ad793183ac77093bbb51a251f"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","00001c8b357b2707b0af87cf9eb56b7b"],["/2024/05/23/二进制文件/index.html","e897fb5a5c7f53be9b527e8ee4de016f"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","249f30e5b59249f697c33c4c39ffe54c"],["/2024/07/12/html-posts/index.html","f62299bd3aa593dae8c758189b2c41b1"],["/2024/07/13/misc-重复造轮子/index.html","0d3ae26b78cf25bb5ee58b3f06bfbde0"],["/2024/07/24/HiVolanyisAssistant/index.html","1ab008a870bcbf1c6d832e0b2d4bee27"],["/2024/07/25/datawhale-24-3-3-1/index.html","7be94fcc41606c4eca7604c98d242dc7"],["/2024/07/29/datawhale-24-3-3-2/index.html","65a2ccf3401970be07893e2003b80382"],["/2024/08/01/关于hexo-helper-live2d无法显示自己的模型的一种可能/index.html","005357fde12f834148d98df7a0353176"],["/2024/08/07/hexo网站访问速度优化/index.html","131e75ea896bc61a2a38957176ed421d"],["/2024/08/07/volantis-navbar-logo-title的彩色方式/index.html","6bd422108786c69dff93fc32a5e5a7c2"],["/2024/08/09/DataWhale-AI夏令营-四期AIGC方向-task01/index.html","fe8cf87d9ea76654fc2b7f369fad204f"],["/2024/08/14/DataWhaleX魔搭-AI夏令营-四期AIGC方向-task02/index.html","9fd849dab861ce73cec23761deefa974"],["/2024/08/17/DataWhaleX魔搭-AI夏令营-四期AIGC方向-task03/index.html","7196477ef06062ac1a8e7f4a6992fbe0"],["/2024/08/17/Volantis主题外部-md引用详解/index.html","45bf1e01470e036b4cf25f4b0dd9afde"],["/2024/08/22/bilibili-card-test/index.html","bfa60c2bc31b03e86232b86cce920fbd"],["/2024/08/30/2th-celebration/index.html","9d4e8ba147178a92243cd64f2795515b"],["/404.html","2c3e84eed4ae45ec799c007731ff0dd6"],["/DEMO/MathJax-master/es5/a11y/assistive-mml.js","918c4b601376f0a30785cc4b2c30f674"],["/DEMO/MathJax-master/es5/a11y/complexity.js","84224127c322bb2aeaa14bf1d04c3ea3"],["/DEMO/MathJax-master/es5/a11y/explorer.js","d47484887c0f4a163d6da7d784689d03"],["/DEMO/MathJax-master/es5/a11y/semantic-enrich.js","0bc9ae214f26896d9c5fce25864277fb"],["/DEMO/MathJax-master/es5/a11y/sre.js","813e4f9c198ecceba26f1dc768b2fae9"],["/DEMO/MathJax-master/es5/adaptors/liteDOM.js","3deebcc025e2a32004fc3020d0c894c8"],["/DEMO/MathJax-master/es5/core.js","f71bc0bfb7d2ac8261747f97a5d47dd4"],["/DEMO/MathJax-master/es5/input/asciimath.js","c2d4076dd8e26d509bfe3a378e71cfa7"],["/DEMO/MathJax-master/es5/input/mml.js","254feb449795092b38e972d1347d2e0c"],["/DEMO/MathJax-master/es5/input/mml/entities.js","447e265a6d57481475bafb4d96cb24a0"],["/DEMO/MathJax-master/es5/input/mml/extensions/mml3.js","bd10514b3a39695e04677f83c6dba5b5"],["/DEMO/MathJax-master/es5/input/tex-base.js","4d7207fab9d7152f1262998c54c70f17"],["/DEMO/MathJax-master/es5/input/tex-full.js","5835895fdfb30335428c459dcc66c397"],["/DEMO/MathJax-master/es5/input/tex.js","5c4f470da2ccb1acf85041fcecd6fff6"],["/DEMO/MathJax-master/es5/input/tex/extensions/action.js","82f38dc5dbc07e16a58b4f46e785e531"],["/DEMO/MathJax-master/es5/input/tex/extensions/all-packages.js","441050e5e08393be059505f8f8ae5ff0"],["/DEMO/MathJax-master/es5/input/tex/extensions/ams.js","1bc2af18771242b1222acff1fba2e45c"],["/DEMO/MathJax-master/es5/input/tex/extensions/amscd.js","255cca7d23142a2e567bcb55479e061b"],["/DEMO/MathJax-master/es5/input/tex/extensions/autoload.js","9e5e62bc4fe5ff3d50c3546c9bfb1b28"],["/DEMO/MathJax-master/es5/input/tex/extensions/bbox.js","f459b9ce964b8961cc1ff70298b171d3"],["/DEMO/MathJax-master/es5/input/tex/extensions/boldsymbol.js","d760e63e3b60823d5657500aa6e25168"],["/DEMO/MathJax-master/es5/input/tex/extensions/braket.js","ec3ac028377b3524b84e7dd3c0c2535e"],["/DEMO/MathJax-master/es5/input/tex/extensions/bussproofs.js","f3adca1cbc0e808590ebd7657527bc45"],["/DEMO/MathJax-master/es5/input/tex/extensions/cancel.js","f58274c9f463b215296b8ab98e03d88b"],["/DEMO/MathJax-master/es5/input/tex/extensions/cases.js","f3e7ea5ce4d6e59f89c3d20a6f099935"],["/DEMO/MathJax-master/es5/input/tex/extensions/centernot.js","c355de00ee56d6fd405e683b9a164776"],["/DEMO/MathJax-master/es5/input/tex/extensions/color.js","01fa7bdb219173457f79bc02d4e562fe"],["/DEMO/MathJax-master/es5/input/tex/extensions/colortbl.js","733216970fffb9bc232f91f9b2aa0ffd"],["/DEMO/MathJax-master/es5/input/tex/extensions/colorv2.js","e57003d4dafb627ca6d1fc9cc9afe20d"],["/DEMO/MathJax-master/es5/input/tex/extensions/configmacros.js","2293a193396536cc952f06ef9c7ccdc9"],["/DEMO/MathJax-master/es5/input/tex/extensions/empheq.js","646f560f8eb7d8c911bc023a7cb212c0"],["/DEMO/MathJax-master/es5/input/tex/extensions/enclose.js","cdc7b8ab5a9523971b1d38d9edbfb37e"],["/DEMO/MathJax-master/es5/input/tex/extensions/extpfeil.js","1c400bd6cabff3d92fd23beb407d2258"],["/DEMO/MathJax-master/es5/input/tex/extensions/gensymb.js","753faef0aa2b86157c56c5ebabfd1bb6"],["/DEMO/MathJax-master/es5/input/tex/extensions/html.js","55035b2d982da9fac043592ca9f4fa2c"],["/DEMO/MathJax-master/es5/input/tex/extensions/mathtools.js","6a8c3c09e18f448f4e4f476dd68cc0ee"],["/DEMO/MathJax-master/es5/input/tex/extensions/mhchem.js","a9146aa693c09f4691058942f19366c1"],["/DEMO/MathJax-master/es5/input/tex/extensions/newcommand.js","831e36797e263d5ca7e309dc9b3817ca"],["/DEMO/MathJax-master/es5/input/tex/extensions/noerrors.js","306ed70d73440c68978c68a6a33ecc38"],["/DEMO/MathJax-master/es5/input/tex/extensions/noundefined.js","6030554420d1b79c3e4e12557334434a"],["/DEMO/MathJax-master/es5/input/tex/extensions/physics.js","34ffa3cc3446f8772c7cd9804af03cac"],["/DEMO/MathJax-master/es5/input/tex/extensions/require.js","ddffe3c9bd5c024bb61e6067786d460c"],["/DEMO/MathJax-master/es5/input/tex/extensions/setoptions.js","422038bb49cfa762a97c91625f7116b7"],["/DEMO/MathJax-master/es5/input/tex/extensions/tagformat.js","d4442e62854022d3ccc25f62250289e6"],["/DEMO/MathJax-master/es5/input/tex/extensions/textcomp.js","28742f119fd3173b5a6436a7e8d1b5be"],["/DEMO/MathJax-master/es5/input/tex/extensions/textmacros.js","25e1a713baa09d10b8de20da4f138b3f"],["/DEMO/MathJax-master/es5/input/tex/extensions/unicode.js","c95abb61e0e26ea3d0d6856e80348d43"],["/DEMO/MathJax-master/es5/input/tex/extensions/upgreek.js","05380fb592bf1f80959ed3a3452900db"],["/DEMO/MathJax-master/es5/input/tex/extensions/verb.js","51168d1882ff4646d76b5f9d15970ea7"],["/DEMO/MathJax-master/es5/latest.js","c071e4e61133a33575c9b898c7b7cfdf"],["/DEMO/MathJax-master/es5/loader.js","1bdc3a0eb0e9952a02c2f0fc7d107be0"],["/DEMO/MathJax-master/es5/mml-chtml.js","91bc2fda5057b903ea4d9a5c7254420d"],["/DEMO/MathJax-master/es5/mml-svg.js","8a3a96e4bc66315d208ba529067076f8"],["/DEMO/MathJax-master/es5/node-main.js","030e0f466add1ad485c9515884a3d73e"],["/DEMO/MathJax-master/es5/output/chtml.js","c80c187298a5b7d039aa08fa29fcccec"],["/DEMO/MathJax-master/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/DEMO/MathJax-master/es5/output/svg.js","4f55967d16197ebb01b86356d8ab179a"],["/DEMO/MathJax-master/es5/output/svg/fonts/tex.js","6eab785a3788ea805bd2b552d1f0aab8"],["/DEMO/MathJax-master/es5/startup.js","dc7130cdc866593293dbb5dde11ceb40"],["/DEMO/MathJax-master/es5/tex-chtml-full-speech.js","2f6cd542ee78bb0406620092e6bec4de"],["/DEMO/MathJax-master/es5/tex-chtml-full.js","541aca0b8f231a30a53a3cbf8cb97235"],["/DEMO/MathJax-master/es5/tex-chtml.js","1d4e370eb01c3768d4304e3245b0afa6"],["/DEMO/MathJax-master/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/DEMO/MathJax-master/es5/tex-mml-svg.js","034cfac446e1b0444e04e26640fc3167"],["/DEMO/MathJax-master/es5/tex-svg-full.js","e903f718ada4629fc5f2837c2d143a40"],["/DEMO/MathJax-master/es5/tex-svg.js","e767e9be86ed9a6bbe91b3908df7faf1"],["/DEMO/MathJax-master/es5/ui/lazy.js","1cdd9a0ac8e476ff0ae95f0074c36f0e"],["/DEMO/MathJax-master/es5/ui/menu.js","755933cb19f2fd90817c976d0e32c3a9"],["/DEMO/MathJax-master/es5/ui/safe.js","8c1fcfee7c879588ad409edcdd9cce53"],["/DEMO/START/2.html","20cbd6d01c55cc222a76622d70b24d9a"],["/DEMO/START/icons/demo.css","31103ad158e19b978f7e730ff5ac959b"],["/DEMO/START/icons/demo_index.html","af56454100b8fe6d1819274fdc720f7d"],["/DEMO/START/icons/iconfont.css","02bcf57b1834fcf03e766da1436bab68"],["/DEMO/START/icons/iconfont.js","96f0515da63b8a809aa90ecce9b028d6"],["/DEMO/START/icons/iconfont.ttf","8cbe106cfa2639fa25d92408850427f2"],["/DEMO/START/index.html","50e71d3f09bec6b8b4bdc73da1250b9e"],["/DEMO/START/index2.html","a3ed60969d843ffe656635e1fcf979aa"],["/DEMO/START/index3gemini方案.html","57c7857321c0a4ed2b79557cbbe8b8e1"],["/DEMO/html5up-photon_VER1/assets/css/fontawesome-all.min.css","1d4a5860bcbe24db028f661a8fc0ab67"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay1.png","b960068458fc2e88f91cd1ae23b9c182"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay2.png","db108b3b0d81ecfab7c9f47f9e490c3c"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay3.svg","22514a523d857a434a117146186da72b"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay4.svg","6133505efaee835a6930fc4ce0f283fe"],["/DEMO/html5up-photon_VER1/assets/css/main.css","0a94c669d1c68bf716571f38a5093702"],["/DEMO/html5up-photon_VER1/assets/css/noscript.css","3a83f4ce6bdbbbb2a03a3f212b861594"],["/DEMO/html5up-photon_VER1/assets/js/breakpoints.min.js","81a479eb099e3b187613943b085923b8"],["/DEMO/html5up-photon_VER1/assets/js/browser.min.js","c3368a3e74d51bcb77f4d673769b7ba6"],["/DEMO/html5up-photon_VER1/assets/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/DEMO/html5up-photon_VER1/assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["/DEMO/html5up-photon_VER1/assets/js/main.js","0420cfd732dcea619139d642f74d3d1f"],["/DEMO/html5up-photon_VER1/assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.eot","592643a83b8541edc52063d84c468700"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.svg","1d5619cd804367cefe6da2d79289218a"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.ttf","513aa607d398efaccc559916c3431403"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.woff","1a575a4138e5f366474f0e7c5bd614a5"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.woff2","ed311c7a0ade9a75bb3ebf5a7670f31d"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.eot","b0e2db3b634d1bc3928e127458d993d8"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.svg","c5d109be8edd3de0f60eb472bd9ef691"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.ttf","766913e6c0088ab8c9f73e18b4127bc4"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.woff","d1d7e3b4c219fde0f7376c6facfd7149"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.woff2","b91d376b8d7646d671cd820950d5f7f1"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.eot","0c6bfc668a72935760178f91327aed3a"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.svg","37bc7099f6f1ba80236164f22e905837"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.ttf","b9625119ce4300f0ef890a8f3234c773"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.woff","d745348d289b149026921f197929a893"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.woff2","d824df7eb2e268626a2dd9a6a741ac4e"],["/DEMO/html5up-photon_VER1/images/header.jpg","9a79c1e4b6ee359af63593cfcc5a5528"],["/DEMO/html5up-photon_VER1/images/pic01.jpg","6a4b7086fbd8da14f9de2389ba0b7058"],["/DEMO/html5up-photon_VER1/images/pic02.jpg","401163253acfe21c1c020dfc484c30a0"],["/DEMO/html5up-photon_VER1/images/pic03.jpg","f4331617feccb90bdf83ab44479f76d6"],["/DEMO/html5up-photon_VER1/images/pic04.jpg","0794cb033b83373c2ae7727d150f4eee"],["/DEMO/html5up-photon_VER1/images/pic05.jpg","c7a3077ff337c080b36dbf38c132b7c9"],["/DEMO/html5up-photon_VER1/images/pic06.jpg","37951df06702766c010a22d9d31e85e9"],["/DEMO/html5up-photon_VER1/index - 副本.html","4875a4c2dc6d99c8a13f77f0bca9e23d"],["/DEMO/html5up-photon_VER1/index.html","7ea9f506eb0be1f7bad30cd2ac40f41f"],["/DEMO/infos/assets/css/fontawesome-all.min.css","1d4a5860bcbe24db028f661a8fc0ab67"],["/DEMO/infos/assets/css/images/overlay.png","b930a63a23f31c4dcca568a7ebbac447"],["/DEMO/infos/assets/css/main.css","6911188faf93e8521755eba22173ca01"],["/DEMO/infos/assets/css/noscript.css","d42767bc6af1036b4ce9b29f644d0b0e"],["/DEMO/infos/assets/js/breakpoints.min.js","81a479eb099e3b187613943b085923b8"],["/DEMO/infos/assets/js/browser.min.js","c3368a3e74d51bcb77f4d673769b7ba6"],["/DEMO/infos/assets/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/DEMO/infos/assets/js/jquery.scrollex.min.js","f89065e3d988006af9791b44561d7c90"],["/DEMO/infos/assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["/DEMO/infos/assets/js/main.js","dc12e20e595111a976b30ad3237232f5"],["/DEMO/infos/assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["/DEMO/infos/assets/webfonts/fa-brands-400.eot","592643a83b8541edc52063d84c468700"],["/DEMO/infos/assets/webfonts/fa-brands-400.svg","1d5619cd804367cefe6da2d79289218a"],["/DEMO/infos/assets/webfonts/fa-brands-400.ttf","513aa607d398efaccc559916c3431403"],["/DEMO/infos/assets/webfonts/fa-brands-400.woff","1a575a4138e5f366474f0e7c5bd614a5"],["/DEMO/infos/assets/webfonts/fa-brands-400.woff2","ed311c7a0ade9a75bb3ebf5a7670f31d"],["/DEMO/infos/assets/webfonts/fa-regular-400.eot","b0e2db3b634d1bc3928e127458d993d8"],["/DEMO/infos/assets/webfonts/fa-regular-400.svg","c5d109be8edd3de0f60eb472bd9ef691"],["/DEMO/infos/assets/webfonts/fa-regular-400.ttf","766913e6c0088ab8c9f73e18b4127bc4"],["/DEMO/infos/assets/webfonts/fa-regular-400.woff","d1d7e3b4c219fde0f7376c6facfd7149"],["/DEMO/infos/assets/webfonts/fa-regular-400.woff2","b91d376b8d7646d671cd820950d5f7f1"],["/DEMO/infos/assets/webfonts/fa-solid-900.eot","0c6bfc668a72935760178f91327aed3a"],["/DEMO/infos/assets/webfonts/fa-solid-900.svg","37bc7099f6f1ba80236164f22e905837"],["/DEMO/infos/assets/webfonts/fa-solid-900.ttf","b9625119ce4300f0ef890a8f3234c773"],["/DEMO/infos/assets/webfonts/fa-solid-900.woff","d745348d289b149026921f197929a893"],["/DEMO/infos/assets/webfonts/fa-solid-900.woff2","d824df7eb2e268626a2dd9a6a741ac4e"],["/DEMO/infos/elements.html","c4d7e6bb1f96db791d0dd045d3479e2d"],["/DEMO/infos/generic.html","cc6196216540bdfed6121c4f554e3b5a"],["/DEMO/infos/images/logo.svg","4ca991d368fae6e03b8b82be031f3cea"],["/DEMO/infos/images/pic01.jpg","b9959e167f94349be29be7284e7b9112"],["/DEMO/infos/images/pic02.jpg","fd57fd018957fb01d0ba1ed0f80a2b70"],["/DEMO/infos/images/pic03.jpg","945f10e24d6f90d675e8291e2e2ca824"],["/DEMO/infos/images/pic04.jpg","1609dea61acb9e992d846c586683a226"],["/DEMO/infos/images/pic05.jpg","8eb8d7a3e364dc7210ca09841f703800"],["/DEMO/infos/images/pic06.jpg","51e864e8e56585bcd8427b14e9fc17ed"],["/DEMO/infos/index.html","d611aa775e39a50829bbad94915e94d2"],["/DEMO/marked.min.js","afe3c02b16ebc00057ded67b4c5673b0"],["/DEMO/thetwo/assets/css/fontawesome-all.min.css","1d4a5860bcbe24db028f661a8fc0ab67"],["/DEMO/thetwo/assets/css/images/overlay1.png","b960068458fc2e88f91cd1ae23b9c182"],["/DEMO/thetwo/assets/css/images/overlay2.png","db108b3b0d81ecfab7c9f47f9e490c3c"],["/DEMO/thetwo/assets/css/images/overlay3.svg","22514a523d857a434a117146186da72b"],["/DEMO/thetwo/assets/css/images/overlay4.svg","6133505efaee835a6930fc4ce0f283fe"],["/DEMO/thetwo/assets/css/main.css","0a94c669d1c68bf716571f38a5093702"],["/DEMO/thetwo/assets/css/noscript.css","3a83f4ce6bdbbbb2a03a3f212b861594"],["/DEMO/thetwo/assets/js/breakpoints.min.js","81a479eb099e3b187613943b085923b8"],["/DEMO/thetwo/assets/js/browser.min.js","c3368a3e74d51bcb77f4d673769b7ba6"],["/DEMO/thetwo/assets/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/DEMO/thetwo/assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["/DEMO/thetwo/assets/js/main.js","0420cfd732dcea619139d642f74d3d1f"],["/DEMO/thetwo/assets/js/textinput.js","f80f17836dcd564c00620ce4fb4c4bd5"],["/DEMO/thetwo/assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.eot","592643a83b8541edc52063d84c468700"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.svg","1d5619cd804367cefe6da2d79289218a"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.ttf","513aa607d398efaccc559916c3431403"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.woff","1a575a4138e5f366474f0e7c5bd614a5"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.woff2","ed311c7a0ade9a75bb3ebf5a7670f31d"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.eot","b0e2db3b634d1bc3928e127458d993d8"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.svg","c5d109be8edd3de0f60eb472bd9ef691"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.ttf","766913e6c0088ab8c9f73e18b4127bc4"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.woff","d1d7e3b4c219fde0f7376c6facfd7149"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.woff2","b91d376b8d7646d671cd820950d5f7f1"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.eot","0c6bfc668a72935760178f91327aed3a"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.svg","37bc7099f6f1ba80236164f22e905837"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.ttf","b9625119ce4300f0ef890a8f3234c773"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.woff","d745348d289b149026921f197929a893"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.woff2","d824df7eb2e268626a2dd9a6a741ac4e"],["/DEMO/thetwo/images/header.jpg","9a79c1e4b6ee359af63593cfcc5a5528"],["/DEMO/thetwo/images/pic01.jpg","6a4b7086fbd8da14f9de2389ba0b7058"],["/DEMO/thetwo/images/pic02.jpg","401163253acfe21c1c020dfc484c30a0"],["/DEMO/thetwo/images/pic03.jpg","f4331617feccb90bdf83ab44479f76d6"],["/DEMO/thetwo/images/pic04.jpg","0794cb033b83373c2ae7727d150f4eee"],["/DEMO/thetwo/images/pic05.jpg","c7a3077ff337c080b36dbf38c132b7c9"],["/DEMO/thetwo/images/pic06.jpg","37951df06702766c010a22d9d31e85e9"],["/HTML/divining.html","786f6c395351dc5bbff12f293f6680f3"],["/HTML/drinks.html","54647660016de641abc21cc841c29591"],["/HTML/study2.html","d41d8cd98f00b204e9800998ecf8427e"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/HTML/test3.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","433f3806ee3368c9e5413b3463a6c955"],["/archives/2023/07/index.html","135b874a4c7b155877e93d52fe67155b"],["/archives/2023/index.html","a5093772f710867a7409683cac6d7132"],["/archives/2024/02/index.html","c77dfad8270d8edc5ad87d986ae7262e"],["/archives/2024/05/index.html","e554ce59c41c9ec2a357bfb467fc5ad9"],["/archives/2024/07/index.html","bc252e4059e87e57687f17555d6dd6cd"],["/archives/2024/08/index.html","a71fc5bd07cdecdbdd7a67a5ab2d89f6"],["/archives/2024/index.html","7c310fff8d3dad3d4cf3272268c1b0d9"],["/archives/index.html","54431ad630478faaeb1d7231c3fbce17"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C-C/EasyX/index.html","e7bbb9714eaffda92c0f02a3121076f7"],["/categories/C-C/index.html","1f6817033f639f1bd5d3e27420e4dc39"],["/categories/Hexo/index.html","8efa81ed858baaf158dc10a4de881d3b"],["/categories/Hexo/优化/index.html","11d54e195db39b8b0d0c88ad289e3bd1"],["/categories/Hexo/优化/速度优化/index.html","10bbdc9d76acca15ef8e8a352f53c43e"],["/categories/Hexo/建站/index.html","6369d66afc4f5594129a0966cca1eb48"],["/categories/Hexo/插件/index.html","0486af15355a90a7ce875f44045bc754"],["/categories/Hexo/用法/index.html","f1cf3ec11b861197321927a205e6207a"],["/categories/Hexo/用法/自定义html/index.html","52eb0770bed8155492b30bba871c2342"],["/categories/Hexo/用法，注入器/index.html","d17238e4d92c8c1532af88184823f97b"],["/categories/Qt/index.html","1a3788ee0a7390a2c078ee18dca8b627"],["/categories/Qt/技巧/index.html","f61213b88ca5c9712bb4b6de3eba36fd"],["/categories/Qt/用法/index.html","c26cf1e3e0e5d5d6fdd3360380f498f1"],["/categories/WSL2/index.html","ef083d7018ead285684d6ccffc90aa20"],["/categories/WSL2/用法/index.html","e47e022e2eb2a13d19ef909859c4d4be"],["/categories/WSL2/用法/xfce4/index.html","d2f664f16d1fcde3c6135be05dfe041e"],["/categories/WSL2/遇到问题/index.html","e1c72933f4f175a9a7454d771961882c"],["/categories/Windows/Windows技巧/Hyper-V/index.html","7f0780f990753d213a7b7710d1d8f5d7"],["/categories/Windows/Windows技巧/index.html","d34db9878f91f7419af3760451be1876"],["/categories/Windows/index.html","ea573644c6e5dbee81f33ece219cd649"],["/categories/Windows/遇到问题/index.html","fda544ecbbb2e993e60fd603878cee2e"],["/categories/Windows/遇到问题/terminal/index.html","0580d9aca751111993d2cf3423b31916"],["/categories/hackRF/index.html","93fdeb45f8c948647b579c284a26a232"],["/categories/hackRF/用法/index.html","91a0e8770755ff6f1096770a7dea0d6c"],["/categories/index.html","2df37830ce4e989e7f0fb30b0586db38"],["/categories/volantis主题/index.html","87512002b6fbd8653b28841e9007b357"],["/categories/volantis主题/技巧/index.html","845d8de6e686ebc55092a8a9d93f9c4e"],["/categories/volantis主题/用法/index.html","ada78d439aead177885086ccea5cadcc"],["/categories/存档点/VS2015-QT5-7-1/index.html","3786c2ad232ee90b0d1c5f23550b3ef9"],["/categories/存档点/index.html","b96c700f8a79a12b7dc018673d2acb03"],["/categories/小玩意儿/Qt5-7-1/index.html","8cc76de42176e61ca4c30123f39be099"],["/categories/小玩意儿/Qt5-7-1/volantis-assistant/index.html","3388118cdac0a0d2a37ca53e096ae414"],["/categories/小玩意儿/index.html","4660965d2985160408dd58b1d4635f2c"],["/categories/庆典/index.html","b82777b486621dfc089b2fa16cd85fb7"],["/categories/数据库/index.html","d9263ae3b47deaa34a6fd64b4701fa77"],["/categories/数据库/mysql/index.html","e10b866b2b78d24c0b5de5c40a5d5748"],["/categories/数据库/mysql/用法/index.html","b75cf0ab9c13ec995e44f392215dbf57"],["/categories/数据库/mysql/遇到问题/index.html","01aad586abbbdce84a0f12d753d0ab22"],["/categories/杂谈/index.html","05f4af44735a04694bc5c2253638fade"],["/categories/杂项/index.html","2a1cbdda062e376f85fe452c56162725"],["/categories/笔记/AI/index.html","025dd8ceb9f21781ca1486596672e95e"],["/categories/笔记/index.html","45e2f69370b1a01456483c21491043c1"],["/class_1/Volantis主题外部.md引用详解/官方文档效果.gif","7baacde4672d71d7bea807be3d23975d"],["/class_1/Volantis主题外部.md引用详解/放上.md文件.png","9e5f3eaa6a47124bdfc199b553cee64f"],["/class_1/Volantis主题外部.md引用详解/文件夹准备.png","0a88a974a1d01e0d2a247c93be5b98d4"],["/class_1/Volantis主题外部.md引用详解/随便写了点内容.png","de2492e864daef0d37bb6236895b106f"],["/class_1/volantis_navbar_logo_title的彩色方式/不协调！.png","29505815c228d4023bf8d21aab30b1da"],["/class_1/volantis_navbar_logo_title的彩色方式/于是我按下F12.png","14c0136105b7d9b5c3da95708cf41afb"],["/class_1/volantis_navbar_logo_title的彩色方式/俩文字情况动图.gif","0743e26c6a3ecfac4113e64e70e60724"],["/class_1/volantis_navbar_logo_title的彩色方式/出来俩文字.png","391c1e0b2ab30bf101233306ee2f69dd"],["/class_1/wsl，xfce4与XLaunch的图形化界面/X-Launch软件.png","63d8b8e839750814d98db43082eb7d95"],["/class_1/wsl，xfce4与XLaunch的图形化界面/linux中显示内容.png","71822802e89262fa26cb01a7a49aa185"],["/class_1/wsl，xfce4与XLaunch的图形化界面/将最后一项勾选上.png","6bd288c24a138ce49ec28163dec0bc8f"],["/class_1/wsl，xfce4与XLaunch的图形化界面/按Ctrl+C.png","574eddd9dfda36b7afafdfda0ff84463"],["/class_1/wsl，xfce4与XLaunch的图形化界面/桌面.png","ead7d1ae5af755f34c8b15a946f1df76"],["/class_1/wsl，xfce4与XLaunch的图形化界面/点击Exit.png","f504ba1b77e7eb4dc1c2837996caa69d"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/AllSigned策略描述.png","cf4a4c375f1bb78099fa659cdc05928f"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/Bypass策略描述.png","ecd1732b81a42919875fde85088aa2ba"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/Restricted和Undefined执行策略描述.png","08b8df587b3e26b2f9e2f8ef12bc2d84"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/在此系统上禁止运行脚本.png","564e648690a5ba95c26c0beca9a5fc47"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/获取有效的执行策略、获取影响当前会话的所有执行策略.png","1fded14e7e602b4a2bd17ed70f5dca22"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/问题解决图示.png","41befa7d825673565698805a169f9a2f"],["/class_2/图片/头像.jpg","bdf26dcbd584654fcf4abe786d0f4634"],["/class_2/图片/首图.jpg","c183bf9856b2d53dc4bd11f32a6ce139"],["/class_2/图片/魔法书.png","44d6574f13ed7000cb711a8108514439"],["/components/bilibili-card/bilibili-card.css","39abc3f25e7a1deefcd743375cc58d9e"],["/components/bilibili-card/bilibili-card.js","5119ac4f058477811558fa8274ef8e3d"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","029c3404800536620aaba84853a8c6c7"],["/friends/index.html","308a06da0990280400ccfa874133d91d"],["/imgs/guaiqiao.jpg","e9e56063ee35739aadfc7c9158463a33"],["/imgs/loading.png","69d56343bdeef3c33a8d3d16d9498011"],["/imgs/noallow.jpg","744c99c788496f1f7253c05fdee683d9"],["/imgs/wantwhat.jpg","ef75e384074700725749498120ba865a"],["/index.html","04cd571c37eeb0bf40d95151ece1578b"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/musics/111111.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","bf2ec9c3d35fd29c35d5a005693b2929"],["/others/2th_happy_birthday.html","53722e9dd519d7c46caab6b58fc451b0"],["/page/2/index.html","215cc17e4b87b9b48d47f756a262b827"],["/page/3/index.html","6cb4b28668b74d08ba8e5fd8d845b43b"],["/page/4/index.html","536e218c3450872fad624a16de76ea2b"],["/projects/index.html","71e1051d21e2549415bddbb1d0b66266"],["/sw-register.js","35c9c3b436ae29f85c86a910c85ce4a7"],["/tags/C-C/index.html","5670e243693567564387819f844d895b"],["/tags/Datawhale-AI夏令营/index.html","afc784d6cf3094b717993260db3539f2"],["/tags/Hexo/index.html","1b2ab7bc5f131e10561f49cbb9307ab7"],["/tags/Hexo插件/index.html","cccac69564cd7b50d641d9385c51b5e3"],["/tags/Hyper-V/index.html","772d03ee3eddf6caf2bd93897f0b7748"],["/tags/Qt/index.html","0fb86b1bb84f43a63721bcd9bdd1fee3"],["/tags/Qt5/index.html","f2440d219756d7e5625a1f78a4a68fb8"],["/tags/VS/index.html","916ff24ae564e3c7416e43f9dd19d12a"],["/tags/Volantis主题/index.html","50def3d43034dce989056c5674b87f49"],["/tags/WSL2/index.html","ae814278fbf4b793fd6adf15ff86031e"],["/tags/Windows/index.html","9c165502616763455c4e277e6d1bb22d"],["/tags/bat文件/index.html","c5f873b093daacd5b968c84bed48d1ae"],["/tags/hackRF/index.html","d2a98e57dda40cabb92c23ff62374968"],["/tags/html/index.html","19291d76ac5c833886e91a9d3f23d05a"],["/tags/index.html","68efb3d44ec42c43c8934968d6897d92"],["/tags/mysql/index.html","a540e0ed30d916b0a22a2784db0ff516"],["/tags/terminal/index.html","995d367790a5edf9f9d699fadb8c88f0"],["/tags/xfce4/index.html","85604d94dd00cb755f4100d7375a2752"],["/tags/二进制文件/index.html","fd9359a70f2be16e14a68f0f2a8d7ed1"],["/tags/存档/index.html","0f46f57d2a78d351b738088cdbb01635"],["/tags/小玩意儿/index.html","e2698ebfefa42e45f4f9114ffad6e6b0"],["/tags/庆典/index.html","0a2dee7aac4e6e904fddf1ded24e317e"],["/tags/杂谈/index.html","21459d3bd2810aeff63c7a34b7874b93"],["/tags/杂项/index.html","542c184120a684d59cbfaf43108d87f4"],["/tags/笔记/index.html","8ba7dc3149632a0b661b0418c0d43343"],["/yi/TV_series/index.html","6ee0d2aa465f4cb882cd5e5a2ca6948b"],["/yi/books/index.html","9a089e28398dda48bb495cf8b0cdb56e"],["/yi/cards/index.html","9c17e436ad5895e54010c22eee7b8a15"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
