/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","23dc5b6cdccfc0d8131b78f284ae1ee9"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","2704dd008e84655f9a34cdf19bd63a3f"],["/2023/07/23/easyx/index.html","0878e6525e88c085a19f4b5d0d711754"],["/2024/02/07/bili图床/index.html","7092a526b19832dea2e9f00b773e15ea"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","e4a98470dc02db85d476a3dd984bce5e"],["/2024/02/07/我回来啦/index.html","5bc45987960c031477ba35a9d7f9afdc"],["/2024/02/08/Hyper-V/index.html","eaa45d52ee5394ec6e81046b3237fc27"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","1dd1a0e6c551ca3d9792611197697452"],["/2024/05/10/mysql-reset-password/index.html","5c6fb6e06afd964f13c44df77e97b822"],["/2024/05/11/qt-connect-mysql/index.html","a54cbfcbb3df3c32481ec1c07bb0d777"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","d34e4475d74afda7e8cc8b7c8e5be580"],["/2024/05/23/hackrf在linux下/index.html","410ea9d74d0b2e090f0e01895ddc8303"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","fdb125de1ea075169f1afe25ec67adbc"],["/2024/05/23/windows与hackRF收听广播/index.html","1cd5da51c4da80196cf3bcbb0b3c646d"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","f99b8f0edce087cca9afd7c0eecdb8f9"],["/2024/05/23/wsl2的网络连接/index.html","477e3056fb1812f5c23d6ed5e0149046"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","255f02e6cb79bdff85d4b2a7aa6692d6"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","9355aebf018ac617021910e7bc806021"],["/2024/05/23/二进制文件/index.html","502ff55e29cdc629df6eef48b847174b"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","2e89543c41d8434d4366a3c5112c8724"],["/2024/07/12/html-posts/index.html","8409799c493648aa17bcc1a3b3765075"],["/2024/07/13/misc-重复造轮子/index.html","08631eda60169416112d795448220d55"],["/2024/07/24/HiVolanyisAssistant/index.html","4ca99d98615f7802b425224a49fceb68"],["/2024/07/25/datawhale-24-3-3-1/index.html","855e1b2b1674bbdc61a28a9495502949"],["/2024/07/29/datawhale-24-3-3-2/index.html","8c1997d7967e468ebc6a410dab1f3d7e"],["/404.html","ee0ffe9a42a582e0939d35c83e1ec5d7"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/about/index.html","85fdad29d4dacde5f6ea7ea537b9b091"],["/archives/2023/07/index.html","8a1592d3cdddf96b6a46865eebcabbc4"],["/archives/2023/index.html","47c39f4b2b762e50fc6b4164f287da55"],["/archives/2024/02/index.html","3f35dad23956a48ece3358b2146e4063"],["/archives/2024/05/index.html","79f1468cbd76080a2cfbee9418f6be6e"],["/archives/2024/07/index.html","19204bde011cb99b540c4947f8f8c7cc"],["/archives/2024/index.html","a9f3d49a5f8fc28fb50192cb2e854604"],["/archives/index.html","062f9c5cc1da7884127c22819f2f0401"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","48d394a629aee753cffda09448accebb"],["/categories/Qt/index.html","dd4e7c3f42059137968bda433cbf8664"],["/categories/Qt/数据库/index.html","0e4a193f302b861ff59fd9309c0076f8"],["/categories/VS/index.html","d300dfa5f90ad5e7e13a7b73d9141ea1"],["/categories/easyx/index.html","fe318783e4cecef2dc2725d5a512c642"],["/categories/forBOEclub/easyx/index.html","964568b4ae2cc3913b338f87cd993508"],["/categories/forBOEclub/index.html","5e2583a36759612bfa514f23c10ffb39"],["/categories/hexo/index.html","5892fdc17d9adb330d96f8d120a27407"],["/categories/hexo/图床/index.html","4b60ea4fc8829f2efa0793f33f839d03"],["/categories/hexo/建站/index.html","c89c8ab79b33a0a542025f19e112a1a0"],["/categories/hexo/注入器/index.html","34fdf0596d9435be8a153c935cbd816d"],["/categories/html/index.html","e42b55e99e4535ea9ce7d656206b21ef"],["/categories/index.html","3eb8ef504974e8bd519e4209c3e59f02"],["/categories/misc/index.html","9e8d7d9cc49fd53d5f99c32fa5b3a6e2"],["/categories/volantis/index.html","933be0d1eb1473bc2c14417a87eeea41"],["/categories/windows/Hyper-V/index.html","1028712ce069f9866aebdd0fd4a813ea"],["/categories/windows/index.html","ed0146507c5a29a1cdea81f91f2660ed"],["/categories/windows/terminal/index.html","1d8a76bb7b271000cb2d8107ab8692c6"],["/categories/wsl/index.html","5d976520952d8a8e1ca0d0b572871e0e"],["/categories/xfce4/index.html","937c250c56da7353fdfd74c8aa15b46b"],["/categories/大语言模型/index.html","c1686ea53a714a69e136634e2442fb56"],["/categories/数据库/index.html","b52f58e0b82d7bac26056af312b821cd"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","05e750a566a9857e16c06c67b87241ec"],["/index.html","1474f33e3460659c96140382dd7ae2d5"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","5d79d09405b4284061fe5bc64e43b12c"],["/sw-register.js","161bbc0bd242837986aaa132499ceaf3"],["/tags/C/index.html","635fb2205dea53020e98f98fd846c6a0"],["/tags/C语言/index.html","5fb9701e3a75a5b1a60ba1a8ff144b98"],["/tags/Datawhale-AI夏令营/index.html","a88f020f841d976ebca1342057820d50"],["/tags/Hyper-V/index.html","772717b463b9aec75803bcd7ac12c0e4"],["/tags/VS/index.html","9a89e12833b26f8dba8e1ba8d74ec3c5"],["/tags/easyx/index.html","b61e313b75b2907aff252519e1f92b44"],["/tags/forBOEclub/index.html","8ee906914b282d6a6f04a0b95f6d42bd"],["/tags/freshman/index.html","89a6dd5e4eb6e59368aae93e03357ada"],["/tags/hexo/index.html","f6c3716e0a08461b11f8dc5cdec3f463"],["/tags/html/index.html","68eb48f9fe10c8fdeafaa4e438f83bde"],["/tags/index.html","8994dce1038c38ab4e945778abd85b2d"],["/tags/linux/index.html","833bdf41276278f65fc1b26c310f33f4"],["/tags/misc/index.html","4f71ca27897f1c13259c7468d01744f3"],["/tags/mysql/index.html","042003baaa8d4faa2c6cea1788f4d9a3"],["/tags/qt/index.html","a72f6ce0292a6f6dc138c507552d28d9"],["/tags/volantis/index.html","dfaa344ef8e380705e66159d1bfd8b14"],["/tags/windows/index.html","93647abfdb575659981eef438b45053a"],["/tags/wsl/index.html","d5f0c8c8b5af9a3353059e0ed61f06e0"],["/tags/xfce4/index.html","d943189c20c157fa62c994b6bdc37b6b"],["/tags/博客/index.html","52b4410681b84327400f5360257f311e"],["/tags/图床/index.html","3c59c142a0da5f201a7d6de437e1f22f"],["/tags/虚拟机/index.html","ab667897f3dc92a1275bdbc658312070"],["/tags/随想/index.html","49d86e20c702f1272c60f6029058c296"]];
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
