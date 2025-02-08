/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","c24d0363788b327e33b21ee45750a114"],["/2023/07/23/easyx/index.html","8056cc765306347155596066f9eeca00"],["/2024/02/07/bili图床/index.html","73d33d45a491c4510dc4c1e3a19e82fd"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","b6c91b8c85c5de7d15b00a211ec5e2d2"],["/2024/02/07/我回来啦/index.html","9cbff04e61c015ff062e423b933fe39d"],["/2024/02/08/Hyper-V/index.html","b9985fb216a8c95fcfe3aba7d5f38e47"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","1f5ac4242c1bff9230b40645129c9e20"],["/2024/05/10/mysql-reset-password/index.html","cb4f4bc0b0800ed5bd8686688181b308"],["/2024/05/11/qt-connect-mysql/index.html","ea68c5cac3109018f1b9109604acfe4e"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","55731b626d095c56050cdfe524ba6c30"],["/2024/05/23/hackrf在linux下/index.html","975bdd05c997ba6cf502f2aebe37254e"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","a97db7751a581aabbdc273a4975d163a"],["/2024/05/23/windows与hackRF收听广播/index.html","46afaeb6449ceff4c0614f9f1dbfff91"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","4d6bce87ac4097362f1c7684e32ff197"],["/2024/05/23/wsl2的网络连接/index.html","e44985749985ca6eca3d77d82f3e6c1e"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","30eeea321d92af56694d6c412f885916"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","4aabbbd65613c1751e23743f8ad00e4c"],["/2024/05/23/二进制文件/index.html","4551bc737c3981964dbd43345151d233"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","3facce7784c8f1b9cfaf79c808b84409"],["/2024/07/12/html-posts/index.html","66165cb3ea2d2a33c9808aeeeb2ebd7d"],["/2024/07/13/misc-重复造轮子/index.html","ea843a3b485af9506f0b31a99c8dcb0e"],["/2024/07/24/HiVolanyisAssistant/index.html","d998f27d7aa60b18262b835cc118b37b"],["/2024/07/25/datawhale-24-3-3-1/index.html","cd5f6e7cb2857e76f86745965110c4b5"],["/2024/07/29/datawhale-24-3-3-2/index.html","24e2d24bd5cb51d0d68a1a50f67cc803"],["/2024/08/01/关于hexo-helper-live2d无法显示自己的模型的一种可能/index.html","a8fb978da3664c1d1d0f3d25e3c2282c"],["/2024/08/07/hexo网站访问速度优化/index.html","98d03ff76a4b6deb6406c171351d6843"],["/2024/08/07/volantis-navbar-logo-title的彩色方式/index.html","abaea9d0764735e47d1d170fb2783f3b"],["/2024/08/09/DataWhale-AI夏令营-四期AIGC方向-task01/index.html","59237c1e34e072edd6fbb5d4b83e8dba"],["/2024/08/14/DataWhaleX魔搭-AI夏令营-四期AIGC方向-task02/index.html","1879545114b26914c9f63d21e3c6c2c2"],["/2024/08/17/DataWhaleX魔搭-AI夏令营-四期AIGC方向-task03/index.html","4050a7ecf57fa1557756bab0d77690b7"],["/2024/08/17/Volantis主题外部-md引用详解/index.html","dfd85fc83e20e71de4f6016f6642379d"],["/2024/08/22/bilibili-card-test/index.html","7e578e6a5822782470dbe9feb5fe98ae"],["/2024/08/30/2th-celebration/index.html","79d1579eb5f9954a67863c532dafd5da"],["/404.html","ad0d79d5671dc72478c3708756f1ee16"],["/DEMO/MathJax-master/es5/a11y/assistive-mml.js","918c4b601376f0a30785cc4b2c30f674"],["/DEMO/MathJax-master/es5/a11y/complexity.js","84224127c322bb2aeaa14bf1d04c3ea3"],["/DEMO/MathJax-master/es5/a11y/explorer.js","d47484887c0f4a163d6da7d784689d03"],["/DEMO/MathJax-master/es5/a11y/semantic-enrich.js","0bc9ae214f26896d9c5fce25864277fb"],["/DEMO/MathJax-master/es5/a11y/sre.js","813e4f9c198ecceba26f1dc768b2fae9"],["/DEMO/MathJax-master/es5/adaptors/liteDOM.js","3deebcc025e2a32004fc3020d0c894c8"],["/DEMO/MathJax-master/es5/core.js","f71bc0bfb7d2ac8261747f97a5d47dd4"],["/DEMO/MathJax-master/es5/input/asciimath.js","c2d4076dd8e26d509bfe3a378e71cfa7"],["/DEMO/MathJax-master/es5/input/mml.js","254feb449795092b38e972d1347d2e0c"],["/DEMO/MathJax-master/es5/input/mml/entities.js","447e265a6d57481475bafb4d96cb24a0"],["/DEMO/MathJax-master/es5/input/mml/extensions/mml3.js","bd10514b3a39695e04677f83c6dba5b5"],["/DEMO/MathJax-master/es5/input/tex-base.js","4d7207fab9d7152f1262998c54c70f17"],["/DEMO/MathJax-master/es5/input/tex-full.js","5835895fdfb30335428c459dcc66c397"],["/DEMO/MathJax-master/es5/input/tex.js","5c4f470da2ccb1acf85041fcecd6fff6"],["/DEMO/MathJax-master/es5/input/tex/extensions/action.js","82f38dc5dbc07e16a58b4f46e785e531"],["/DEMO/MathJax-master/es5/input/tex/extensions/all-packages.js","441050e5e08393be059505f8f8ae5ff0"],["/DEMO/MathJax-master/es5/input/tex/extensions/ams.js","1bc2af18771242b1222acff1fba2e45c"],["/DEMO/MathJax-master/es5/input/tex/extensions/amscd.js","255cca7d23142a2e567bcb55479e061b"],["/DEMO/MathJax-master/es5/input/tex/extensions/autoload.js","9e5e62bc4fe5ff3d50c3546c9bfb1b28"],["/DEMO/MathJax-master/es5/input/tex/extensions/bbox.js","f459b9ce964b8961cc1ff70298b171d3"],["/DEMO/MathJax-master/es5/input/tex/extensions/boldsymbol.js","d760e63e3b60823d5657500aa6e25168"],["/DEMO/MathJax-master/es5/input/tex/extensions/braket.js","ec3ac028377b3524b84e7dd3c0c2535e"],["/DEMO/MathJax-master/es5/input/tex/extensions/bussproofs.js","f3adca1cbc0e808590ebd7657527bc45"],["/DEMO/MathJax-master/es5/input/tex/extensions/cancel.js","f58274c9f463b215296b8ab98e03d88b"],["/DEMO/MathJax-master/es5/input/tex/extensions/cases.js","f3e7ea5ce4d6e59f89c3d20a6f099935"],["/DEMO/MathJax-master/es5/input/tex/extensions/centernot.js","c355de00ee56d6fd405e683b9a164776"],["/DEMO/MathJax-master/es5/input/tex/extensions/color.js","01fa7bdb219173457f79bc02d4e562fe"],["/DEMO/MathJax-master/es5/input/tex/extensions/colortbl.js","733216970fffb9bc232f91f9b2aa0ffd"],["/DEMO/MathJax-master/es5/input/tex/extensions/colorv2.js","e57003d4dafb627ca6d1fc9cc9afe20d"],["/DEMO/MathJax-master/es5/input/tex/extensions/configmacros.js","2293a193396536cc952f06ef9c7ccdc9"],["/DEMO/MathJax-master/es5/input/tex/extensions/empheq.js","646f560f8eb7d8c911bc023a7cb212c0"],["/DEMO/MathJax-master/es5/input/tex/extensions/enclose.js","cdc7b8ab5a9523971b1d38d9edbfb37e"],["/DEMO/MathJax-master/es5/input/tex/extensions/extpfeil.js","1c400bd6cabff3d92fd23beb407d2258"],["/DEMO/MathJax-master/es5/input/tex/extensions/gensymb.js","753faef0aa2b86157c56c5ebabfd1bb6"],["/DEMO/MathJax-master/es5/input/tex/extensions/html.js","55035b2d982da9fac043592ca9f4fa2c"],["/DEMO/MathJax-master/es5/input/tex/extensions/mathtools.js","6a8c3c09e18f448f4e4f476dd68cc0ee"],["/DEMO/MathJax-master/es5/input/tex/extensions/mhchem.js","a9146aa693c09f4691058942f19366c1"],["/DEMO/MathJax-master/es5/input/tex/extensions/newcommand.js","831e36797e263d5ca7e309dc9b3817ca"],["/DEMO/MathJax-master/es5/input/tex/extensions/noerrors.js","306ed70d73440c68978c68a6a33ecc38"],["/DEMO/MathJax-master/es5/input/tex/extensions/noundefined.js","6030554420d1b79c3e4e12557334434a"],["/DEMO/MathJax-master/es5/input/tex/extensions/physics.js","34ffa3cc3446f8772c7cd9804af03cac"],["/DEMO/MathJax-master/es5/input/tex/extensions/require.js","ddffe3c9bd5c024bb61e6067786d460c"],["/DEMO/MathJax-master/es5/input/tex/extensions/setoptions.js","422038bb49cfa762a97c91625f7116b7"],["/DEMO/MathJax-master/es5/input/tex/extensions/tagformat.js","d4442e62854022d3ccc25f62250289e6"],["/DEMO/MathJax-master/es5/input/tex/extensions/textcomp.js","28742f119fd3173b5a6436a7e8d1b5be"],["/DEMO/MathJax-master/es5/input/tex/extensions/textmacros.js","25e1a713baa09d10b8de20da4f138b3f"],["/DEMO/MathJax-master/es5/input/tex/extensions/unicode.js","c95abb61e0e26ea3d0d6856e80348d43"],["/DEMO/MathJax-master/es5/input/tex/extensions/upgreek.js","05380fb592bf1f80959ed3a3452900db"],["/DEMO/MathJax-master/es5/input/tex/extensions/verb.js","51168d1882ff4646d76b5f9d15970ea7"],["/DEMO/MathJax-master/es5/latest.js","c071e4e61133a33575c9b898c7b7cfdf"],["/DEMO/MathJax-master/es5/loader.js","1bdc3a0eb0e9952a02c2f0fc7d107be0"],["/DEMO/MathJax-master/es5/mml-chtml.js","91bc2fda5057b903ea4d9a5c7254420d"],["/DEMO/MathJax-master/es5/mml-svg.js","8a3a96e4bc66315d208ba529067076f8"],["/DEMO/MathJax-master/es5/node-main.js","030e0f466add1ad485c9515884a3d73e"],["/DEMO/MathJax-master/es5/output/chtml.js","c80c187298a5b7d039aa08fa29fcccec"],["/DEMO/MathJax-master/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/DEMO/MathJax-master/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/DEMO/MathJax-master/es5/output/svg.js","4f55967d16197ebb01b86356d8ab179a"],["/DEMO/MathJax-master/es5/output/svg/fonts/tex.js","6eab785a3788ea805bd2b552d1f0aab8"],["/DEMO/MathJax-master/es5/startup.js","dc7130cdc866593293dbb5dde11ceb40"],["/DEMO/MathJax-master/es5/tex-chtml-full-speech.js","2f6cd542ee78bb0406620092e6bec4de"],["/DEMO/MathJax-master/es5/tex-chtml-full.js","541aca0b8f231a30a53a3cbf8cb97235"],["/DEMO/MathJax-master/es5/tex-chtml.js","1d4e370eb01c3768d4304e3245b0afa6"],["/DEMO/MathJax-master/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/DEMO/MathJax-master/es5/tex-mml-svg.js","034cfac446e1b0444e04e26640fc3167"],["/DEMO/MathJax-master/es5/tex-svg-full.js","e903f718ada4629fc5f2837c2d143a40"],["/DEMO/MathJax-master/es5/tex-svg.js","e767e9be86ed9a6bbe91b3908df7faf1"],["/DEMO/MathJax-master/es5/ui/lazy.js","1cdd9a0ac8e476ff0ae95f0074c36f0e"],["/DEMO/MathJax-master/es5/ui/menu.js","755933cb19f2fd90817c976d0e32c3a9"],["/DEMO/MathJax-master/es5/ui/safe.js","8c1fcfee7c879588ad409edcdd9cce53"],["/DEMO/START/2.html","20cbd6d01c55cc222a76622d70b24d9a"],["/DEMO/START/index.html","57c7857321c0a4ed2b79557cbbe8b8e1"],["/DEMO/START/index2.html","770ddd6ded0ac00ed0ca275679206f21"],["/DEMO/START/index3gemini方案.html","57c7857321c0a4ed2b79557cbbe8b8e1"],["/DEMO/html5up-photon_VER1/assets/css/fontawesome-all.min.css","1d4a5860bcbe24db028f661a8fc0ab67"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay1.png","b960068458fc2e88f91cd1ae23b9c182"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay2.png","db108b3b0d81ecfab7c9f47f9e490c3c"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay3.svg","22514a523d857a434a117146186da72b"],["/DEMO/html5up-photon_VER1/assets/css/images/overlay4.svg","6133505efaee835a6930fc4ce0f283fe"],["/DEMO/html5up-photon_VER1/assets/css/main.css","0a94c669d1c68bf716571f38a5093702"],["/DEMO/html5up-photon_VER1/assets/css/noscript.css","3a83f4ce6bdbbbb2a03a3f212b861594"],["/DEMO/html5up-photon_VER1/assets/js/breakpoints.min.js","81a479eb099e3b187613943b085923b8"],["/DEMO/html5up-photon_VER1/assets/js/browser.min.js","c3368a3e74d51bcb77f4d673769b7ba6"],["/DEMO/html5up-photon_VER1/assets/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/DEMO/html5up-photon_VER1/assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["/DEMO/html5up-photon_VER1/assets/js/main.js","0420cfd732dcea619139d642f74d3d1f"],["/DEMO/html5up-photon_VER1/assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.eot","592643a83b8541edc52063d84c468700"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.svg","1d5619cd804367cefe6da2d79289218a"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.ttf","513aa607d398efaccc559916c3431403"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.woff","1a575a4138e5f366474f0e7c5bd614a5"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-brands-400.woff2","ed311c7a0ade9a75bb3ebf5a7670f31d"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.eot","b0e2db3b634d1bc3928e127458d993d8"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.svg","c5d109be8edd3de0f60eb472bd9ef691"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.ttf","766913e6c0088ab8c9f73e18b4127bc4"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.woff","d1d7e3b4c219fde0f7376c6facfd7149"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-regular-400.woff2","b91d376b8d7646d671cd820950d5f7f1"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.eot","0c6bfc668a72935760178f91327aed3a"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.svg","37bc7099f6f1ba80236164f22e905837"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.ttf","b9625119ce4300f0ef890a8f3234c773"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.woff","d745348d289b149026921f197929a893"],["/DEMO/html5up-photon_VER1/assets/webfonts/fa-solid-900.woff2","d824df7eb2e268626a2dd9a6a741ac4e"],["/DEMO/html5up-photon_VER1/images/header.jpg","9a79c1e4b6ee359af63593cfcc5a5528"],["/DEMO/html5up-photon_VER1/images/pic01.jpg","6a4b7086fbd8da14f9de2389ba0b7058"],["/DEMO/html5up-photon_VER1/images/pic02.jpg","401163253acfe21c1c020dfc484c30a0"],["/DEMO/html5up-photon_VER1/images/pic03.jpg","f4331617feccb90bdf83ab44479f76d6"],["/DEMO/html5up-photon_VER1/images/pic04.jpg","0794cb033b83373c2ae7727d150f4eee"],["/DEMO/html5up-photon_VER1/images/pic05.jpg","c7a3077ff337c080b36dbf38c132b7c9"],["/DEMO/html5up-photon_VER1/images/pic06.jpg","37951df06702766c010a22d9d31e85e9"],["/DEMO/html5up-photon_VER1/index - 副本.html","4875a4c2dc6d99c8a13f77f0bca9e23d"],["/DEMO/html5up-photon_VER1/index.html","7ea9f506eb0be1f7bad30cd2ac40f41f"],["/DEMO/infos/assets/css/fontawesome-all.min.css","1d4a5860bcbe24db028f661a8fc0ab67"],["/DEMO/infos/assets/css/images/overlay.png","b930a63a23f31c4dcca568a7ebbac447"],["/DEMO/infos/assets/css/main.css","6911188faf93e8521755eba22173ca01"],["/DEMO/infos/assets/css/noscript.css","d42767bc6af1036b4ce9b29f644d0b0e"],["/DEMO/infos/assets/js/breakpoints.min.js","81a479eb099e3b187613943b085923b8"],["/DEMO/infos/assets/js/browser.min.js","c3368a3e74d51bcb77f4d673769b7ba6"],["/DEMO/infos/assets/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/DEMO/infos/assets/js/jquery.scrollex.min.js","f89065e3d988006af9791b44561d7c90"],["/DEMO/infos/assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["/DEMO/infos/assets/js/main.js","dc12e20e595111a976b30ad3237232f5"],["/DEMO/infos/assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["/DEMO/infos/assets/webfonts/fa-brands-400.eot","592643a83b8541edc52063d84c468700"],["/DEMO/infos/assets/webfonts/fa-brands-400.svg","1d5619cd804367cefe6da2d79289218a"],["/DEMO/infos/assets/webfonts/fa-brands-400.ttf","513aa607d398efaccc559916c3431403"],["/DEMO/infos/assets/webfonts/fa-brands-400.woff","1a575a4138e5f366474f0e7c5bd614a5"],["/DEMO/infos/assets/webfonts/fa-brands-400.woff2","ed311c7a0ade9a75bb3ebf5a7670f31d"],["/DEMO/infos/assets/webfonts/fa-regular-400.eot","b0e2db3b634d1bc3928e127458d993d8"],["/DEMO/infos/assets/webfonts/fa-regular-400.svg","c5d109be8edd3de0f60eb472bd9ef691"],["/DEMO/infos/assets/webfonts/fa-regular-400.ttf","766913e6c0088ab8c9f73e18b4127bc4"],["/DEMO/infos/assets/webfonts/fa-regular-400.woff","d1d7e3b4c219fde0f7376c6facfd7149"],["/DEMO/infos/assets/webfonts/fa-regular-400.woff2","b91d376b8d7646d671cd820950d5f7f1"],["/DEMO/infos/assets/webfonts/fa-solid-900.eot","0c6bfc668a72935760178f91327aed3a"],["/DEMO/infos/assets/webfonts/fa-solid-900.svg","37bc7099f6f1ba80236164f22e905837"],["/DEMO/infos/assets/webfonts/fa-solid-900.ttf","b9625119ce4300f0ef890a8f3234c773"],["/DEMO/infos/assets/webfonts/fa-solid-900.woff","d745348d289b149026921f197929a893"],["/DEMO/infos/assets/webfonts/fa-solid-900.woff2","d824df7eb2e268626a2dd9a6a741ac4e"],["/DEMO/infos/elements.html","c4d7e6bb1f96db791d0dd045d3479e2d"],["/DEMO/infos/generic.html","cc6196216540bdfed6121c4f554e3b5a"],["/DEMO/infos/images/logo.svg","4ca991d368fae6e03b8b82be031f3cea"],["/DEMO/infos/images/pic01.jpg","b9959e167f94349be29be7284e7b9112"],["/DEMO/infos/images/pic02.jpg","fd57fd018957fb01d0ba1ed0f80a2b70"],["/DEMO/infos/images/pic03.jpg","945f10e24d6f90d675e8291e2e2ca824"],["/DEMO/infos/images/pic04.jpg","1609dea61acb9e992d846c586683a226"],["/DEMO/infos/images/pic05.jpg","8eb8d7a3e364dc7210ca09841f703800"],["/DEMO/infos/images/pic06.jpg","51e864e8e56585bcd8427b14e9fc17ed"],["/DEMO/infos/index.html","d611aa775e39a50829bbad94915e94d2"],["/DEMO/marked.min.js","afe3c02b16ebc00057ded67b4c5673b0"],["/DEMO/thetwo/assets/css/fontawesome-all.min.css","1d4a5860bcbe24db028f661a8fc0ab67"],["/DEMO/thetwo/assets/css/images/overlay1.png","b960068458fc2e88f91cd1ae23b9c182"],["/DEMO/thetwo/assets/css/images/overlay2.png","db108b3b0d81ecfab7c9f47f9e490c3c"],["/DEMO/thetwo/assets/css/images/overlay3.svg","22514a523d857a434a117146186da72b"],["/DEMO/thetwo/assets/css/images/overlay4.svg","6133505efaee835a6930fc4ce0f283fe"],["/DEMO/thetwo/assets/css/main.css","0a94c669d1c68bf716571f38a5093702"],["/DEMO/thetwo/assets/css/noscript.css","3a83f4ce6bdbbbb2a03a3f212b861594"],["/DEMO/thetwo/assets/js/breakpoints.min.js","81a479eb099e3b187613943b085923b8"],["/DEMO/thetwo/assets/js/browser.min.js","c3368a3e74d51bcb77f4d673769b7ba6"],["/DEMO/thetwo/assets/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/DEMO/thetwo/assets/js/jquery.scrolly.min.js","1ed5a78bde1476875a40f6b9ff44fc14"],["/DEMO/thetwo/assets/js/main.js","0420cfd732dcea619139d642f74d3d1f"],["/DEMO/thetwo/assets/js/textinput.js","f80f17836dcd564c00620ce4fb4c4bd5"],["/DEMO/thetwo/assets/js/util.js","fd2716a7b68ce7748c9676787b61db43"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.eot","592643a83b8541edc52063d84c468700"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.svg","1d5619cd804367cefe6da2d79289218a"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.ttf","513aa607d398efaccc559916c3431403"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.woff","1a575a4138e5f366474f0e7c5bd614a5"],["/DEMO/thetwo/assets/webfonts/fa-brands-400.woff2","ed311c7a0ade9a75bb3ebf5a7670f31d"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.eot","b0e2db3b634d1bc3928e127458d993d8"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.svg","c5d109be8edd3de0f60eb472bd9ef691"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.ttf","766913e6c0088ab8c9f73e18b4127bc4"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.woff","d1d7e3b4c219fde0f7376c6facfd7149"],["/DEMO/thetwo/assets/webfonts/fa-regular-400.woff2","b91d376b8d7646d671cd820950d5f7f1"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.eot","0c6bfc668a72935760178f91327aed3a"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.svg","37bc7099f6f1ba80236164f22e905837"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.ttf","b9625119ce4300f0ef890a8f3234c773"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.woff","d745348d289b149026921f197929a893"],["/DEMO/thetwo/assets/webfonts/fa-solid-900.woff2","d824df7eb2e268626a2dd9a6a741ac4e"],["/DEMO/thetwo/images/header.jpg","9a79c1e4b6ee359af63593cfcc5a5528"],["/DEMO/thetwo/images/pic01.jpg","6a4b7086fbd8da14f9de2389ba0b7058"],["/DEMO/thetwo/images/pic02.jpg","401163253acfe21c1c020dfc484c30a0"],["/DEMO/thetwo/images/pic03.jpg","f4331617feccb90bdf83ab44479f76d6"],["/DEMO/thetwo/images/pic04.jpg","0794cb033b83373c2ae7727d150f4eee"],["/DEMO/thetwo/images/pic05.jpg","c7a3077ff337c080b36dbf38c132b7c9"],["/DEMO/thetwo/images/pic06.jpg","37951df06702766c010a22d9d31e85e9"],["/HTML/divining.html","786f6c395351dc5bbff12f293f6680f3"],["/HTML/drinks.html","54647660016de641abc21cc841c29591"],["/HTML/study2.html","d41d8cd98f00b204e9800998ecf8427e"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/HTML/test3.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","7ac098f84d660f4e3838efee21af0b86"],["/archives/2023/07/index.html","bdb5de94788e6cee2e78715e6a97778a"],["/archives/2023/index.html","f32a4be9789234375f94915951cd1bf4"],["/archives/2024/02/index.html","b992a6cadf602dc229381eac5f21a30e"],["/archives/2024/05/index.html","7ffc997df315065e2bba034186d7efdd"],["/archives/2024/07/index.html","3bd864a9564636c5a0db100e1ddfb265"],["/archives/2024/08/index.html","b24471033b07486e5050aa1b4807cc73"],["/archives/2024/index.html","8b8a5241cd1af7d209fe9ff5f31ac145"],["/archives/index.html","4718d229de0638a04c3c276c978d8a1e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C-C/EasyX/index.html","000a89aaf4d92a4afa17f323a1db630a"],["/categories/C-C/index.html","8ccf7a06c321026619aa563c5a752c89"],["/categories/Hexo/index.html","f3e130e2a898a1586afd4213bcf099f8"],["/categories/Hexo/优化/index.html","ff1ba9db7046b4b62870117c41b174a5"],["/categories/Hexo/优化/速度优化/index.html","4bc62df5cdcfbfa816a54ac0b3a533e0"],["/categories/Hexo/建站/index.html","c67f4a39ad05d68151f9b95b6371d293"],["/categories/Hexo/插件/index.html","51388cdb91d1f308b0471854e60267cc"],["/categories/Hexo/用法/index.html","f726c478a7dbabf91ff37354f84fc440"],["/categories/Hexo/用法/自定义html/index.html","8cb7c2b1f6bf7ac38cc01c92320a54c1"],["/categories/Hexo/用法，注入器/index.html","a1c819ef0933646799defbcdfa6a0133"],["/categories/Qt/index.html","33464510da0e9259f17efff90c95efdb"],["/categories/Qt/技巧/index.html","4a4fc11f59ee2f2a1f7af3e6be680ed7"],["/categories/Qt/用法/index.html","102e7172b71d64f4ac5b2109d5a4e592"],["/categories/Volantis主题/index.html","09f478b950cca87bc52069a67c00f556"],["/categories/Volantis主题/技巧/index.html","a27af8c0ef512313890fcb071634abd0"],["/categories/Volantis主题/用法/index.html","b1d3ec7645e90230a2a09b29c552f973"],["/categories/WSL2/index.html","717d00e68361393cb5899cca8696bb84"],["/categories/WSL2/用法/index.html","445247eb53c08178cfc2e1b05f8b80a3"],["/categories/WSL2/用法/xfce4/index.html","1171e8b03155adcc41cf546fba41786b"],["/categories/WSL2/遇到问题/index.html","87580a67b2ae45986498996430a55c35"],["/categories/Windows/Windows技巧/Hyper-V/index.html","b393efb54b5c49e83565b56ab99d126f"],["/categories/Windows/Windows技巧/index.html","e38a5135c1565d7160eb240b90881828"],["/categories/Windows/index.html","8864d9bf1f5ab55f8b6e56b9f37802a0"],["/categories/Windows/遇到问题/index.html","f73c460c91d5b3ed0ac60ee686114d49"],["/categories/Windows/遇到问题/terminal/index.html","04e68edeb7eb386f9bc90157a43a310b"],["/categories/hackRF/index.html","4353c1a885335010980e1058a1503f64"],["/categories/hackRF/用法/index.html","f752cb849e35e6d03901edace504710b"],["/categories/index.html","102bca1c854915a15ac5149afd333e95"],["/categories/存档点/VS2015-QT5-7-1/index.html","4aef089e4e05f5f169b64f08abcb319d"],["/categories/存档点/index.html","7aa797939512b90a4f84748592c83750"],["/categories/小玩意儿/Qt5-7-1/index.html","3be158fe0a55e652fe43efcac8a2f895"],["/categories/小玩意儿/Qt5-7-1/volantis-assistant/index.html","c2d00618879ddf3a65249626d938938e"],["/categories/小玩意儿/index.html","4b810805e63f661e968298e38aa74ec2"],["/categories/庆典/index.html","fc9a5863fc8238247ccc112c2557e1ae"],["/categories/数据库/index.html","72ee5bee7643ce4b6408053c5c8fd092"],["/categories/数据库/mysql/index.html","e608e42a2acc5a51ed3b7dd421b3c271"],["/categories/数据库/mysql/用法/index.html","d61592787c7c777523218892a99bb452"],["/categories/数据库/mysql/遇到问题/index.html","2ad04085beee6f0b9d0c28554eeba1f6"],["/categories/杂谈/index.html","535afa8db6c695ca2c878c1cd50b9dd2"],["/categories/杂项/index.html","ef210def46e918a451a0657fe2dc5506"],["/categories/笔记/AI/index.html","832ba9ea60ab3c296ef20a12faba62ca"],["/categories/笔记/index.html","1a1e40b01d88e4052dafdec4b95ee695"],["/class_1/Volantis主题外部.md引用详解/官方文档效果.gif","7baacde4672d71d7bea807be3d23975d"],["/class_1/Volantis主题外部.md引用详解/放上.md文件.png","9e5f3eaa6a47124bdfc199b553cee64f"],["/class_1/Volantis主题外部.md引用详解/文件夹准备.png","0a88a974a1d01e0d2a247c93be5b98d4"],["/class_1/Volantis主题外部.md引用详解/随便写了点内容.png","de2492e864daef0d37bb6236895b106f"],["/class_1/volantis_navbar_logo_title的彩色方式/不协调！.png","29505815c228d4023bf8d21aab30b1da"],["/class_1/volantis_navbar_logo_title的彩色方式/于是我按下F12.png","14c0136105b7d9b5c3da95708cf41afb"],["/class_1/volantis_navbar_logo_title的彩色方式/俩文字情况动图.gif","0743e26c6a3ecfac4113e64e70e60724"],["/class_1/volantis_navbar_logo_title的彩色方式/出来俩文字.png","391c1e0b2ab30bf101233306ee2f69dd"],["/class_1/wsl，xfce4与XLaunch的图形化界面/X-Launch软件.png","63d8b8e839750814d98db43082eb7d95"],["/class_1/wsl，xfce4与XLaunch的图形化界面/linux中显示内容.png","71822802e89262fa26cb01a7a49aa185"],["/class_1/wsl，xfce4与XLaunch的图形化界面/将最后一项勾选上.png","6bd288c24a138ce49ec28163dec0bc8f"],["/class_1/wsl，xfce4与XLaunch的图形化界面/按Ctrl+C.png","574eddd9dfda36b7afafdfda0ff84463"],["/class_1/wsl，xfce4与XLaunch的图形化界面/桌面.png","ead7d1ae5af755f34c8b15a946f1df76"],["/class_1/wsl，xfce4与XLaunch的图形化界面/点击Exit.png","f504ba1b77e7eb4dc1c2837996caa69d"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/AllSigned策略描述.png","cf4a4c375f1bb78099fa659cdc05928f"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/Bypass策略描述.png","ecd1732b81a42919875fde85088aa2ba"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/Restricted和Undefined执行策略描述.png","08b8df587b3e26b2f9e2f8ef12bc2d84"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/在此系统上禁止运行脚本.png","564e648690a5ba95c26c0beca9a5fc47"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/获取有效的执行策略、获取影响当前会话的所有执行策略.png","1fded14e7e602b4a2bd17ed70f5dca22"],["/class_1/在此系统上禁止运行脚本或未对文件数字签名而不能运行脚本/问题解决图示.png","41befa7d825673565698805a169f9a2f"],["/class_2/图片/头像.jpg","bdf26dcbd584654fcf4abe786d0f4634"],["/class_2/图片/首图.jpg","c183bf9856b2d53dc4bd11f32a6ce139"],["/class_2/图片/魔法书.png","44d6574f13ed7000cb711a8108514439"],["/components/bilibili-card/bilibili-card.css","39abc3f25e7a1deefcd743375cc58d9e"],["/components/bilibili-card/bilibili-card.js","5119ac4f058477811558fa8274ef8e3d"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","029c3404800536620aaba84853a8c6c7"],["/friends/index.html","c0743636cc808deba03aa2b1e87be9c7"],["/imgs/guaiqiao.jpg","e9e56063ee35739aadfc7c9158463a33"],["/imgs/loading.png","69d56343bdeef3c33a8d3d16d9498011"],["/imgs/noallow.jpg","744c99c788496f1f7253c05fdee683d9"],["/imgs/wantwhat.jpg","ef75e384074700725749498120ba865a"],["/index.html","626268c46affee63594f6750ef016499"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/musics/111111.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","54fcd56e59a4334be7de0bb04a59959b"],["/others/2th_happy_birthday.html","2627d76134070875bb23018dd49cd2d3"],["/page/2/index.html","94db9837eb20e0da3a156b8f3e1b37e4"],["/page/3/index.html","99ac21d362da9ca0ba45997ea9498e57"],["/page/4/index.html","c42328e7ab74882a9fb95e57b528ba1a"],["/projects/index.html","18550cfa48866933abf4635114aac126"],["/sw-register.js","429c7ce44a20f30432d6c34e608d7126"],["/tags/C-C/index.html","0a6d09cc54a1f4c8b32e7bdff63b519c"],["/tags/Datawhale-AI夏令营/index.html","faac97d0935175bcd1803442d0cceae2"],["/tags/Hexo/index.html","f60f0d81a92e0bf732e5cfdf8a058773"],["/tags/Hexo插件/index.html","c487aac6e91884bd6811b3fbf95c9672"],["/tags/Hyper-V/index.html","b3f8906c3e9e89fb3e3a46d4da9c0a42"],["/tags/Qt/index.html","dcb415b3572fa1db8680e8fa0cb72c9c"],["/tags/Qt5/index.html","9cc4eaa4c0082806caad82203dc11009"],["/tags/VS/index.html","40fdecfbef27464876c45dd86e39019c"],["/tags/Volantis主题/index.html","e90a259b05fc5d178ef3b78af5cf317a"],["/tags/WSL2/index.html","ea1a2056167e3b9558729a37d8cdc006"],["/tags/Windows/index.html","a5746be05ee1e2fb17ee78703f767d42"],["/tags/bat文件/index.html","fa283562577db0b55dc9a339b706b972"],["/tags/hackRF/index.html","7f97fb1b99593f3a80f725a838d8625e"],["/tags/html/index.html","6a8ea6cba40cdd4c9ecbb26b5c08293e"],["/tags/index.html","aeb37035371789baba1b9ab04dd22897"],["/tags/mysql/index.html","9494f04fe71afa2e44c19f6cdfbcf4ba"],["/tags/terminal/index.html","e7c29066c79cc578c58345203570bc38"],["/tags/xfce4/index.html","e2deba7fcb4fc21f1979690bdb1d0444"],["/tags/二进制文件/index.html","3523b780d4701def98b2545c87de52ee"],["/tags/存档/index.html","815d93ebf61a95a96463d1c7b473da6e"],["/tags/小玩意儿/index.html","46b38c18d11cb4d33d450f1e1635f944"],["/tags/庆典/index.html","b140b19e63f80c7cdaadd91179f90952"],["/tags/杂谈/index.html","6779092a7c13775e641aec1ed5a88a98"],["/tags/杂项/index.html","527b7f13b8243ae5e6d49b938e539a5d"],["/tags/笔记/index.html","fcf960a8287df79c0cfeb29faae776fd"],["/yi/TV_series/index.html","4f4482f96ec2f040ee44297cbb61bc69"],["/yi/books/index.html","913f6c972bd857427e4f927597d22a2c"],["/yi/cards/index.html","224bdf0aa6c1c36fecae53317594ab73"]];
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
