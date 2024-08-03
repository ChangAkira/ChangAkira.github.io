/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","9fb0e4e980200f39f8a17c4c3775e09b"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","1a59646ba55d1c2105c0c8cf60e157b4"],["/2023/07/23/easyx/index.html","add318c081c7d481e0ca50752f6c9858"],["/2024/02/07/bili图床/index.html","4cda40de6deb148d1c20a7ecd258591c"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","00fb35b8c569c4245bbc489a717fda34"],["/2024/02/07/我回来啦/index.html","42e654dafbbf8393d50a4c922a84022b"],["/2024/02/08/Hyper-V/index.html","59728cce8595a86c511c2bf9fe0fb546"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","b5b896b970ef56be9ce8a6e9a3b73516"],["/2024/05/10/mysql-reset-password/index.html","de07ceffd7abf7ecd0710e7224bbf24c"],["/2024/05/11/qt-connect-mysql/index.html","bc62638e95dcff6cc492e4afea2a020e"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","c097fa18a24dba51132f570132cfe1cc"],["/2024/05/23/hackrf在linux下/index.html","25f912e24ac090dcaac0bb7d7c429912"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","702b26d78aca6cf4a0234cdb0d5af763"],["/2024/05/23/windows与hackRF收听广播/index.html","813a46e9ad5c273f17caea5793c9518c"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","6c375eba08127a8fc470f441a7a11f77"],["/2024/05/23/wsl2的网络连接/index.html","cf1938619c2775312e5ec035fc5d4517"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","025bb5df4241e852016c36717feefd13"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","2576261283f0550e8a3a1f4efe9d7c12"],["/2024/05/23/二进制文件/index.html","e0e4d10ef298b99bc49c42ab9c7d585f"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","ceba5c4a170832c6894bd2784cbc5b7f"],["/2024/07/12/html-posts/index.html","276be2be5dcacf9bc7b4c264d7ee54c1"],["/2024/07/13/misc-重复造轮子/index.html","87acd57f6e3b339c8143db3cb103ab71"],["/2024/07/24/HiVolanyisAssistant/index.html","5c938540e686cc1efc4f99e832f9f4c9"],["/2024/07/25/datawhale-24-3-3-1/index.html","16e4e7fd1f5ded0c3d0cf3f3366b0bd3"],["/2024/07/29/datawhale-24-3-3-2/index.html","77d65892cc2fe42f58fd9a94b04cf9cf"],["/2024/08/01/关于hexo-helper-live2d无法显示自己的模型的一种可能/index.html","5612374abb8519b15c39e9048eb6cfae"],["/404.html","6d324f57f7dc06b12b2aaf7af1a5de09"],["/HTML/divining.html","786f6c395351dc5bbff12f293f6680f3"],["/HTML/study2.html","d41d8cd98f00b204e9800998ecf8427e"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/about/index.html","8f5265a369ada3f29199624a4a3a1b67"],["/archives/2023/07/index.html","87352c6d7a16472741b87e6917577c7a"],["/archives/2023/index.html","70cba21ed3fe10719ddf1e4acf40ce2a"],["/archives/2024/02/index.html","7bbf25c77d97baaaa88254bfe6e06232"],["/archives/2024/05/index.html","4e9ebf56cc678a58cee022d4a659b20c"],["/archives/2024/07/index.html","3b31c1c8a6f1944b6cdb88247cd2cc23"],["/archives/2024/08/index.html","9069359bde4a9478dc65b75b8fb077f8"],["/archives/2024/index.html","70ae27bfdcd4b29273e282eeca8478ab"],["/archives/index.html","8c24e8f06068482ae4ef9c66cf62dd2b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","100f4b960e80bef2d64b12da890bacad"],["/categories/Hexo/index.html","d5e3a4d23165a20703cc715fd53a55e3"],["/categories/Hexo/图床/index.html","36cb1fe39f97cd79a7f3377fd74f5e57"],["/categories/Hexo/建站/index.html","c5ef7adb8cb7c924f8987ab7ffaa6406"],["/categories/Hexo/注入器/index.html","284c6a39a21a379f87522387adc4db34"],["/categories/Qt/index.html","9ce94c49910fcf05323ddbf18ac01c23"],["/categories/Qt/数据库/index.html","369c97afbf1f8c20c2c68624ddc977a8"],["/categories/VS/index.html","622d99bef7524ccd5fdb6002beeb476d"],["/categories/easyx/index.html","e1595395894cad87a70ba75ab9eb7dd4"],["/categories/forBOEclub/easyx/index.html","69ba193e06877ed26f3f990e4683dbf8"],["/categories/forBOEclub/index.html","5c63e1c698abb45d7dcd6cb25fe24f6d"],["/categories/html/index.html","ace4f3fbce70046ac91832d77b44f8c9"],["/categories/index.html","3b2f51acb373635cc206eeebaa38c1af"],["/categories/misc/index.html","22c2bdbeb3f878a30c06ee6f48948e9f"],["/categories/volantis/index.html","76dd5221556b0410b14126c58b7d9b14"],["/categories/windows/Hyper-V/index.html","c6a591b45d4bb6a25350ae8b22efbbd9"],["/categories/windows/index.html","b40927940c2ea37012f13db65319ab18"],["/categories/windows/terminal/index.html","119ba13bc00544bc8969588d9bd19821"],["/categories/wsl/index.html","256935eba7c6b75576090ec71a3c37b4"],["/categories/xfce4/index.html","3846871144d15947d16067572628565b"],["/categories/大语言模型/index.html","e629840e4c6fb26c99cc361fbbe27261"],["/categories/数据库/index.html","af75f77762b761c6c93f8a1ab43adb87"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","dfb861e5579c7c333d893ebcdfcb3817"],["/imgs/guaiqiao.jpg","e9e56063ee35739aadfc7c9158463a33"],["/imgs/noallow.jpg","744c99c788496f1f7253c05fdee683d9"],["/imgs/wantwhat.jpg","ef75e384074700725749498120ba865a"],["/index.html","3b97ba264e4426021e4fdfdeac83e704"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/assets/14.jpg","65837c79f3bcfe24441c850e721c65d3"],["/live2dw/assets/Violet.1024/texture_00.png","00c034d08af4966cf79d634b9c0cb060"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","c8546315f07fce168dc2ec96f86b1fc5"],["/sw-register.js","addd354778db59404e0812de6ea1f610"],["/tags/C/index.html","51c776b566eefc883841aa5ad45860b5"],["/tags/C语言/index.html","4810da48cc5fc333e2e4f385996009cc"],["/tags/Datawhale-AI夏令营/index.html","da296d4b6aec55a618b457bd35879ed9"],["/tags/Hexo/index.html","cc41b78dea71f80d5b511c9500649ff5"],["/tags/Hyper-V/index.html","fe0f9b1386980cd73cc75a018b594de5"],["/tags/VS/index.html","9c6de513e50b1a63cb415b5a7ad8bd17"],["/tags/easyx/index.html","cb048566e1a8ee9fe2fd7a16731ba76a"],["/tags/forBOEclub/index.html","8b1d5b17e58326f192b7a0485914338f"],["/tags/freshman/index.html","34ffec3eae5829ee00b9b7e69c44bd15"],["/tags/html/index.html","067f362d63eb2824624a7d0c9f08d296"],["/tags/index.html","c883b5c26557abd35b83b9bc76081d3d"],["/tags/linux/index.html","22abca22007928d8b0816ac14943d894"],["/tags/live2d/index.html","e73fa0e47e2d2372b8e2f9dca485bee0"],["/tags/misc/index.html","e46fcafa15922f3872acef84bd5ab455"],["/tags/mysql/index.html","76d9f018dbd3b5602f1c223cca428fe0"],["/tags/qt/index.html","1ba90ceb7fa35f29c2c483894badad4e"],["/tags/volantis/index.html","442a6dfd16902158fb9bf380cadfc6ff"],["/tags/windows/index.html","937be869e3d44de6e0408eff2ca9ad24"],["/tags/wsl/index.html","911658cc9a9d66be44f6408969f25f51"],["/tags/xfce4/index.html","db0e76eb73af05f2227a637fdd14db81"],["/tags/博客/index.html","c4310104e8c54320a91d3e6797df07d2"],["/tags/图床/index.html","1ba2254ae895e60fcb4dc8dcafcf7735"],["/tags/虚拟机/index.html","06c66c528bfe0ee85e2653985f019801"],["/tags/随想/index.html","12b722b649f07cad62eff003bd2d2d3a"]];
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
