/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","6466b75896607443b1c991f94df07e52"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","729c30eb660a3c9a75fab27aee26eae3"],["/2023/07/23/easyx/index.html","072ce4c44b089666c89ad2e5d5fba03c"],["/2024/02/07/bili图床/index.html","51fdc52aa8b0e9afec8c7f741e94ac34"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","a319e533dbf25ae443e837682400a2a9"],["/2024/02/07/我回来啦/index.html","1a91bb8cbd47b9547e73c816682b1d68"],["/2024/02/08/Hyper-V/index.html","54420edb605c5faba749bd782cb3cb36"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","9f1e10badf250bfceabfcaac28172e18"],["/2024/05/10/mysql-reset-password/index.html","37e51dc8f1b40bd287d36b7837e57797"],["/2024/05/11/qt-connect-mysql/index.html","c1299bcc29ed565ac42975ea41fc6f53"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","ad19d348279dae73b9fc274ffd1a5442"],["/2024/05/23/hackrf在linux下/index.html","d45379e363162a4466f928ca814cc4c7"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","913239f8093836f3a853a3b6076668c6"],["/2024/05/23/windows与hackRF收听广播/index.html","4f70bf1e8fb2440e12720abd05b58f45"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","0ff9eaeac8d40582c86c5fa158ce8a26"],["/2024/05/23/wsl2的网络连接/index.html","2d5a66fa7df29fc936773ea7735d8af4"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","b3fdcfde58d5d47752e92d84b57cc576"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","c497fe095abd3acf3dd5c2dc601b708a"],["/2024/05/23/二进制文件/index.html","ac9cd1992f5f863c13693ffdf1ea52ba"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","6cf056a98eb90ba5918936de69513b03"],["/2024/07/12/html-posts/index.html","3f83d98fabdd2e5e285fa1930f782ea2"],["/2024/07/13/misc-重复造轮子/index.html","9a390ae89660cf4b6d5f0adda0ca86e9"],["/2024/07/24/HiVolanyisAssistant/index.html","447ed3626e93a7bcc76f6d255cc11e5a"],["/2024/07/25/datawhale-24-3-3-1/index.html","bc6d25497d27ce6f8c13b60ab88f64d8"],["/2024/07/29/datawhale-24-3-3-2/index.html","2b79bd6d1aeff09f103f265d2f9ced14"],["/2024/08/01/关于hexo-helper-live2d无法显示自己的模型的一种可能/index.html","ba7347c2e59ecd8f5ae05f16812a8fba"],["/404.html","8b011f9b32fc6177d4744b3e16c5ff70"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/about/index.html","f7af28af7dd4b00a01cf7dd616b309d6"],["/archives/2023/07/index.html","c7de91dc6f8e9fac9fb8d2c63cc4b4a5"],["/archives/2023/index.html","fe860864e0e817be08ebc6d586aa6c11"],["/archives/2024/02/index.html","659bc06b465a8d7c2f121ba44c91798a"],["/archives/2024/05/index.html","608fd33e3daf97657871ff3c479b2ca5"],["/archives/2024/07/index.html","62ab3d40526e617fa2a21df0a0de7fa6"],["/archives/2024/08/index.html","c8474ba4608a036890fbf90b300a82b0"],["/archives/2024/index.html","efff0025c2391f19153e3097446add79"],["/archives/index.html","0adebd437cdb515f587769ab493c39a1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","b8d58a586440b79e2157b810b6a0a3cb"],["/categories/Qt/index.html","d3c94e7df0aca52fbdaf905881e5426f"],["/categories/Qt/数据库/index.html","24999ad41003a66eb4d67b2d719972c2"],["/categories/VS/index.html","05eb5115ffacf48d852b22672b21aeba"],["/categories/easyx/index.html","49d539699e303a68193bc336b60463aa"],["/categories/forBOEclub/easyx/index.html","b09884d35247d3dca81f5e2e88a97ee5"],["/categories/forBOEclub/index.html","077ce8af3817ece6832e93c71c57e9d6"],["/categories/hexo/index.html","40dc731c453931d62fbd20791b4ca51f"],["/categories/hexo/图床/index.html","29e8a17f617a0567ff5687b88d82938f"],["/categories/hexo/建站/index.html","07a8399f5c4cbb9a5393e5d23c50a253"],["/categories/hexo/注入器/index.html","bf8f9754354e5ca4622d21bc767ab4a0"],["/categories/html/index.html","5ee68467afb60af5298dbefcf9ba85de"],["/categories/index.html","69d49e061e5807de9e93a5ab3d222a5b"],["/categories/misc/index.html","72927a021cbb320055d70095f242c27f"],["/categories/volantis/index.html","03a1b1f04068cab1a4297405cedb98ab"],["/categories/windows/Hyper-V/index.html","6e06071544d30e6d5725e732dd637da2"],["/categories/windows/index.html","028addfb989f74fcbc8c4dc845514dbb"],["/categories/windows/terminal/index.html","9c81c8ed77409378d4a49e036436dd86"],["/categories/wsl/index.html","7a6653ce3b9d2bb59d5b3dad2289c2a1"],["/categories/xfce4/index.html","57a9d781eb0cda8ac8536faa934db568"],["/categories/大语言模型/index.html","a239945777e86a5c04e61aa070bcce46"],["/categories/数据库/index.html","5ce28e918ea76f0a3ee421383043b876"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","ee010f2a731c46dbb554335081d39162"],["/index.html","352dfe2d0e9e2fec15b78e78a61cc236"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/assets/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2dw/assets/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","359d4f68d653b85f77515774da29b9db"],["/sw-register.js","0cacb83d385620226082797501ddf0a8"],["/tags/C/index.html","68cecbe19d1b8c40d7e4d359ef6a91f0"],["/tags/C语言/index.html","002ad9a6dcc4414f33e7b14707e3b8c9"],["/tags/Datawhale-AI夏令营/index.html","66daeb8969ecfb242027d8bfeff3b0f7"],["/tags/Hyper-V/index.html","eab2423f46e1d17780dbb4f280db6d1c"],["/tags/VS/index.html","8f79158d20e36f83677f9d348c7a2496"],["/tags/easyx/index.html","25920a521a29993a9e3e6c7d282ee659"],["/tags/forBOEclub/index.html","dce7c0792d32c098fc8a3adc5188b4df"],["/tags/freshman/index.html","242b645c491590d7939a17d32d54ce9b"],["/tags/hexo/index.html","7bc6e0ef92a781678975d5033188103a"],["/tags/html/index.html","3277eeb96f20269733ea07361affa751"],["/tags/index.html","502e2b4377313af95728dd253fd946e5"],["/tags/linux/index.html","4da84f98ac954ffab1d79d299b7114cb"],["/tags/live2d/index.html","16e61738f9ccca9a6ab929acbef9c8ff"],["/tags/misc/index.html","3fa7f8a743020a5db23447730ac80b77"],["/tags/mysql/index.html","9c575e20f5459318a54c830d4bac5583"],["/tags/qt/index.html","81ce69430e338c42993a93367ee74c05"],["/tags/volantis/index.html","6487c816ac818b139baf990ab1aa5567"],["/tags/windows/index.html","a13be8068b9fa643bfb910d60602603d"],["/tags/wsl/index.html","0c6e7098526ef06544f4893bb7abd771"],["/tags/xfce4/index.html","7ca7003c844aaf7efa320505537fc3a0"],["/tags/博客/index.html","b75f9682eb04f28fb174cf865b9ecb61"],["/tags/图床/index.html","f73202be797e3300be693216d7f0f7b9"],["/tags/虚拟机/index.html","ce7fa683af4b5c3baead7bb7ab224b1b"],["/tags/随想/index.html","e6bb20980903c4c7abd5edb3f369efba"]];
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
