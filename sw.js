/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","69b97314b7cc0a116481b169eb70246d"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","f1ccb2dac0a879643bdd7239fbd62310"],["/2023/07/23/easyx/index.html","6081e21ce218869e907a63ecb185dd40"],["/2024/02/07/bili图床/index.html","739390dbb8ddda52e421a34b10ebaafb"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","67811d4e5a642711cbcb4a297a01b9f2"],["/2024/02/07/我回来啦/index.html","9589b1c31e3eb8b780646fd30c01bd1a"],["/2024/02/08/Hyper-V/index.html","066ee1aa3ecb69e3d1e4e0d1bedbd040"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","4b54a2be878212f098f3e34b941b9d0e"],["/2024/05/10/mysql-reset-password/index.html","94b695735122f0eb8abfc8915963b722"],["/2024/05/11/qt-connect-mysql/index.html","216207ca6376c3402f1d7008643b6846"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","4ded444c61b784a8998e724f94eeb7d8"],["/2024/05/23/hackrf在linux下/index.html","d71d303ead338992b7f857ae7d497a55"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","423a5401193eb6a5c1897f9f26d769c5"],["/2024/05/23/windows与hackRF收听广播/index.html","df563f21365e4282938cec1fe4ea4436"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","ed8cd927718835d7394e9f21585a3bb1"],["/2024/05/23/wsl2的网络连接/index.html","69042ecd53ba5ee94ffa1eeef5d1f62c"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","0afcd183393baa3ade97116a05284348"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","fc28312b1dd68e7dd972231600b71212"],["/2024/05/23/二进制文件/index.html","e68de7ab5fd184de0fc1bfe583e6715a"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","fcca2a55463692efd8bcbc5fb358e5e9"],["/2024/07/12/html-posts/index.html","86d9214fb3e38aca7e1448aa05ebb2f8"],["/2024/07/13/misc-重复造轮子/index.html","60e305adeb59f164f709817b28f27ee0"],["/2024/07/24/HiVolanyisAssistant/index.html","95b8a840e8bf52a56e1f60634ba0677f"],["/2024/07/25/datawhale-24-3-3-1/index.html","7ebf26b76dd40c7c8ad613cfed6c45c1"],["/2024/07/29/datawhale-24-3-3-2/index.html","abe354cbe97e7bfb6a03ff5bab1dd686"],["/2024/08/01/关于hexo-helper-live2d无法显示自己的模型的一种可能/index.html","c842a3becf22f1503deff061ecd02a9a"],["/404.html","4f2795a96d9d140983fd5f74f35e284d"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/about/index.html","08aa67afb1bc826aec52ba21b0a118ad"],["/archives/2023/07/index.html","ab7fb9a6bc71052f10e80832a3d0f225"],["/archives/2023/index.html","c148c5ac7a86edc8e3dd819328565682"],["/archives/2024/02/index.html","2dc615402eadbf298a32f45d2cb25c77"],["/archives/2024/05/index.html","08395165afcfe6f2193b1bd6aa50a4c9"],["/archives/2024/07/index.html","9a3ea83687a63f4cde1fa34e22fc9039"],["/archives/2024/08/index.html","7222375a088b047cd5cf4122bd91a713"],["/archives/2024/index.html","30af9a32f37b58698829311535315bf7"],["/archives/index.html","f689c04741924cd24ecec16e3f9cbf02"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","1cbbc62c40e93838922a8a77fe031cf3"],["/categories/Hexo/index.html","8b979c4f10346ad9024a49c480ac8f8f"],["/categories/Hexo/图床/index.html","5f3d4d187a3fedc3b54de3e555ccb70d"],["/categories/Hexo/建站/index.html","8e042c4d04e59ec90177eef6ad1d8d5f"],["/categories/Hexo/注入器/index.html","7b2d9a3c1f24839391e5f0b76dacc5bb"],["/categories/Qt/index.html","01f54fd8021000ae42cd079ff9fe1b34"],["/categories/Qt/数据库/index.html","854310842848d2d9eed3a04de6a593cf"],["/categories/VS/index.html","dc2a225421d7b51ed4a0e40cd3f2b1ff"],["/categories/easyx/index.html","0aa3e4e245e7d36d4e8eee55540c19d0"],["/categories/forBOEclub/easyx/index.html","7212ad8c470986a4320ae18e5e8123f3"],["/categories/forBOEclub/index.html","59020f05e2969fece09b892ba1ffa72a"],["/categories/html/index.html","25e3d2b17db7fe8df589ab18a1c2d64d"],["/categories/index.html","dfb0eebe594a8d168ffa991cae7c2226"],["/categories/misc/index.html","d69b0fb21f957163ed7a121e06f0d737"],["/categories/volantis/index.html","6a002766f03337a4610f9bbc0de40a57"],["/categories/windows/Hyper-V/index.html","f5732ff7cf52ada53a556c836457ae19"],["/categories/windows/index.html","783a7f66bd65e705307271601cff8761"],["/categories/windows/terminal/index.html","f53c96c02138d6457d98f62336daf8ba"],["/categories/wsl/index.html","bf4dfbc423ea017488b04cce6943d6ec"],["/categories/xfce4/index.html","c23f4dab2058867e8290cbac624b9e85"],["/categories/大语言模型/index.html","bf93bee38f8350401c1e76a4f0915693"],["/categories/数据库/index.html","55ef2d853e957a5b58cb1299571e898b"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","54d228d274be67b9e1a5a7069ea0d150"],["/index.html","dcb37682aeeb4662afb6adfda961af8f"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/assets/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2dw/assets/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","2778742f5df83ada41f265fa3bf5bf26"],["/sw-register.js","642c95edc2d08709fd1f06cfc25f59be"],["/tags/C/index.html","f32107ce990412a07d0e3f17be85ff91"],["/tags/C语言/index.html","9f42c6b80286ecffb2abc86695abedbe"],["/tags/Datawhale-AI夏令营/index.html","8768af1348706d3778d658fa2652977f"],["/tags/Hexo/index.html","5d7153d70f2cc9711965b1558b24bc6e"],["/tags/Hyper-V/index.html","94e96d723908a995b6a5675f0add8f43"],["/tags/VS/index.html","dd682a1ad92146b93c2339816c18ff26"],["/tags/easyx/index.html","323d87425f89acd6187d149e81b2782c"],["/tags/forBOEclub/index.html","42c5171666bcce3c21394d15757071a7"],["/tags/freshman/index.html","a8b890128d04a163897fabb403673b06"],["/tags/html/index.html","d41634c81edb1bed31cf048a975629c3"],["/tags/index.html","ce71375bcdd652302384b928c67fc457"],["/tags/linux/index.html","97de30877afe264a2eec3c07c8c66634"],["/tags/live2d/index.html","8f4ed01d90736065961f2e8a756484d4"],["/tags/misc/index.html","4c2048b812a48c0f32e41b572979209f"],["/tags/mysql/index.html","78c009e5d26ff5d169223ac3b4f99120"],["/tags/qt/index.html","f5b0021871b95e91d1fb7a3917f7e454"],["/tags/volantis/index.html","964dbae385f112f491fe0326ed1ad5ba"],["/tags/windows/index.html","d6ea20418e931f5388eb155ac4429cb0"],["/tags/wsl/index.html","5ef84a4de964097120058183fa1ef911"],["/tags/xfce4/index.html","178bad7edfed54af5f0b34f0afc88b64"],["/tags/博客/index.html","0099d64921413bd4a1f6f3611133f695"],["/tags/图床/index.html","c627bf540477c6ed2752939863a5ad19"],["/tags/虚拟机/index.html","70e1c9a523b0aacb5093c3be7d73e14e"],["/tags/随想/index.html","83c510655011d058305459c9d6a28668"]];
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
