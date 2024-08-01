/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","ee34b4f9efd25d2c81092c8758f66ad0"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","a30df453c5468fa88d0f6685156b10d3"],["/2023/07/23/easyx/index.html","5afee10d7e55201465c36e715b0752dc"],["/2024/02/07/bili图床/index.html","e499762a016a0770a920f28738306b26"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","cb041770ef17da35398a61e09f7c99a3"],["/2024/02/07/我回来啦/index.html","199a61d23b974b976dc34334d4fe543c"],["/2024/02/08/Hyper-V/index.html","6eaffce9ee19377bfef6f9e2961b8c1b"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","32ede500436c27676ff035460e175c58"],["/2024/05/10/mysql-reset-password/index.html","f79a8bc07bce7487f2990dfad4403b6b"],["/2024/05/11/qt-connect-mysql/index.html","a76a968d7ad12a2353934112155d5cce"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","ff890e44633c0e97224d7f6fb0e4a5d4"],["/2024/05/23/hackrf在linux下/index.html","bcb126c13fdd4e7602134f375ffccca0"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","f0ced67785ad6f45b1fb1db57899909d"],["/2024/05/23/windows与hackRF收听广播/index.html","1b8507e9d2628862f7e7b3c723b05b8d"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","5f14d7e4bdfe4e03f54a8a8ed4132a10"],["/2024/05/23/wsl2的网络连接/index.html","62c28371703cc1c94d2c067f5d539496"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","4e9fce0b1f5f8ae287bb0e2526fb793a"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","7eec260dc07a871af7f87a434c33d41c"],["/2024/05/23/二进制文件/index.html","9310ec569599586478b3676fe82e3ab0"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","fb888d1398f52682d2415a6e55ae2c7e"],["/2024/07/12/html-posts/index.html","9386159ef85465d6908b90d9ae41c68c"],["/2024/07/13/misc-重复造轮子/index.html","930522548d3ad72471347144d00936cf"],["/2024/07/24/HiVolanyisAssistant/index.html","b9c40c54ead5588cf67a09652b324fdc"],["/2024/07/25/datawhale-24-3-3-1/index.html","b6ea1650861f0fc1392b9b568cdcd7b9"],["/2024/07/29/datawhale-24-3-3-2/index.html","174c58f2a1da327a8943ff5b9b574abb"],["/2024/08/01/关于hexo-helper-live2d无法显示自己的模型的一种可能/index.html","adcb6c94ca30b8b4c4463f573791f422"],["/404.html","950c142441d2f9e2ea268b8e1eb9ea25"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/about/index.html","e0b664eee396618415a27f1b96882ba8"],["/archives/2023/07/index.html","00c2c3958581889e9a4702f8f94d16b4"],["/archives/2023/index.html","f214c03606f25cad09b1631695e6e3c9"],["/archives/2024/02/index.html","7cfc18fae0b1be759ca7a25a6cf5c8bf"],["/archives/2024/05/index.html","3bab4600db41004d49eed924d15cfce4"],["/archives/2024/07/index.html","754b74702bd2357c1d5b90e7acfbae39"],["/archives/2024/08/index.html","853bcf34b6698fe2ba428d9993f30c1f"],["/archives/2024/index.html","0c4cbbad26c404f9911b3a0c284fea80"],["/archives/index.html","95945c90a5b7c4849b914e0d12dd01d6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","e7cabd6863893568dec8c4a4374fd1c3"],["/categories/Qt/index.html","83d296521698a42b9a1fb8a3472ad84e"],["/categories/Qt/数据库/index.html","94835ef2a5d679a2b2f470d1411940e9"],["/categories/VS/index.html","2f0c187bc37553fac8f4956f76ee6192"],["/categories/easyx/index.html","bce0b921ebb0a043aba4138133ae10c7"],["/categories/forBOEclub/easyx/index.html","cbe2b323b5b120abb1c474c8263823fe"],["/categories/forBOEclub/index.html","db8d60222dab34dee8bea431fcaf45c8"],["/categories/hexo/index.html","d55c43cc3dafb99dd59b9c5817f4d347"],["/categories/hexo/图床/index.html","7feffe4d5bf6400fcb442e9289c4b2f8"],["/categories/hexo/建站/index.html","2fb8029c6e38a7a927156e2cb87a0811"],["/categories/hexo/注入器/index.html","ae417dea7b5cd25a5c26b14c404c26d8"],["/categories/html/index.html","c08bfa870e567a32cfcffd8596a28c6f"],["/categories/index.html","a1679760213a976e61df316e8773b33e"],["/categories/misc/index.html","887b63cd7cb1b0970265b9c59d393e82"],["/categories/volantis/index.html","532dca95cd474270970f1cc4f15c5bac"],["/categories/windows/Hyper-V/index.html","fb312986afa9f8432a30e9b7fbea2a36"],["/categories/windows/index.html","7a5cf20c868e8ed704251de7120da3bf"],["/categories/windows/terminal/index.html","6c6a74dad962334139bf21f8a2e5baa9"],["/categories/wsl/index.html","9b2df62a0e88b969d13aeb40a24358c0"],["/categories/xfce4/index.html","8d2b181cc4a9f99075d71b11d0ba2731"],["/categories/大语言模型/index.html","e03efe6841ae59dc3267efebf78da827"],["/categories/数据库/index.html","8edb8b42dadae42bed95401bef6a14d6"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","3d67a8c09f798c72868366990aa546cc"],["/index.html","9411c3fc7a7c7260f186ea415693cd5d"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/assets/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2dw/assets/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","7222a013c9cb6b91fc27e833beb39da4"],["/sw-register.js","044301063dcd776d8a4959a36c0b0677"],["/tags/C/index.html","31441f7688725a19939ca7ca01a57553"],["/tags/C语言/index.html","b272f9c4a259343006641f63710b3da6"],["/tags/Datawhale-AI夏令营/index.html","be0d94293961a7340edd4a9771ffab86"],["/tags/Hyper-V/index.html","6943ae5dda6775d505fcea1fe1cc4c48"],["/tags/VS/index.html","b0307734baf3642766ee362a1934223d"],["/tags/easyx/index.html","ed9f66fcd6bdd2a7589fa56a3d2c1387"],["/tags/forBOEclub/index.html","a8909fb65a606a593d87aa4865f694f7"],["/tags/freshman/index.html","f46559b9df7d66ba3a7f615d2c116c0e"],["/tags/hexo/index.html","3344e6a32ccc771de416d1685044da4c"],["/tags/html/index.html","2f927f0ac5a9895b4bc8d2e20bd2cc56"],["/tags/index.html","08a6cb872487445440deaa41e908eb89"],["/tags/linux/index.html","018ed49d82e8504cb2ec79221721ae0f"],["/tags/live2d/index.html","a4510bfdef8ecdbdb80552cbfa912048"],["/tags/misc/index.html","d7a31352f51db31ae1e8d3460668c531"],["/tags/mysql/index.html","127b0a18e8ac2f6f9974f6bb17805849"],["/tags/qt/index.html","39fd0583ee4e7fb047d5dce3c843ff16"],["/tags/volantis/index.html","6989a76a1792e9a7f07a51848d46fb0b"],["/tags/windows/index.html","b7dba4492760c9a83fcfd15db7bc2d71"],["/tags/wsl/index.html","e1d08ea16e88c4d272fbe7e41ed4e5ae"],["/tags/xfce4/index.html","9139be4ab04214ab5ad60fcd4065bc58"],["/tags/博客/index.html","e9b63e629913e486b4921fe9444d4f51"],["/tags/图床/index.html","e9f5207bb0851f3fb9417ed8ef8d6bc3"],["/tags/虚拟机/index.html","3d8a43c9adec121dceb39a7e4d000861"],["/tags/随想/index.html","a8e521b1859774e8024ef7d9dedfe230"]];
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
