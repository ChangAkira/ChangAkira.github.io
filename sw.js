/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","fcef02bef3aeb69bf0aa8ad3db9eb42c"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","1dbbd82dec6b2b1dd925111ea440a6c5"],["/2023/07/23/easyx/index.html","4de180c2fc5dbcea7d310c6449ca16a0"],["/2024/02/07/bili图床/index.html","98f23e5f1e2e5d26edbc02ed812e796e"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","92e6e7afea51ca6896bdabceb40726cb"],["/2024/02/07/我回来啦/index.html","88b34c3e6bfdb8350e599f90b2cab1bc"],["/2024/02/08/Hyper-V/index.html","a21f95fb09a11e7533fd91117626ebfe"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","9cf808dfeb7ece1769237072104d13c6"],["/2024/05/10/mysql-reset-password/index.html","021710d101012c5edaec6ce6095747b4"],["/2024/05/11/qt-connect-mysql/index.html","7c403c69b1e585718e18efd9f2a316fd"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","6f8944267baff148aadee0875071007b"],["/2024/05/23/hackrf在linux下/index.html","39660cd33b807bf5763383f590051da2"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","ac81a89bbc808be91dd9c3e309f6770a"],["/2024/05/23/windows与hackRF收听广播/index.html","68343dc22c64929bffcae5f24bb6d699"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","90aabfd9a5260658d960fd950122854f"],["/2024/05/23/wsl2的网络连接/index.html","ad7f272504a328b9a53ab5f8414352bb"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","42bedc9311759b06286804c5ea4dc36e"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","ea4303b6f219eb223cde9a25d74d13eb"],["/2024/05/23/二进制文件/index.html","54b73ac3b68ce6213ac40a16632a9719"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","799efa723f8df419ba9a183189c5ffc6"],["/2024/07/12/html-posts/index.html","4660a987a05485036250be1156061839"],["/2024/07/13/misc-重复造轮子/index.html","512c861ec42deaa7e614cec263aa2047"],["/2024/07/24/HiVolanyisAssistant/index.html","7b7b829310fc7a0bfa982775815fe253"],["/2024/07/25/datawhale-24-3-3-1/index.html","1703abdeb4945a4ce0c9bbf20ad99719"],["/2024/07/29/datawhale-24-3-3-2/index.html","1839f4a0f0d97521e95bacf4d1c4ad4e"],["/404.html","79cea5c259915dee66d907fe5f22d38f"],["/HTML/test.html","eb5b8a94479432171a918141053866e6"],["/about/index.html","c2d8e0842b8e21ff3f8cf7330b1a23dc"],["/archives/2023/07/index.html","b5b0ca7f47d9642a12c1e1c261756c7e"],["/archives/2023/index.html","b39b30f88ba103e22fa5e727c6a9cf2e"],["/archives/2024/02/index.html","188cecba423701ee5e99c4799a9bdff9"],["/archives/2024/05/index.html","ba4a23a187ba00f24992b8d1f80e2b2f"],["/archives/2024/07/index.html","e5e57cb00ee5ec8becf54e01c77acf2b"],["/archives/2024/index.html","ba1b74a07b7d199845711415ddb6b3d8"],["/archives/index.html","bbd3dc33e134c98e4d8ac1e103555e0e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","74f1f469a29e5518098f8da1d0bb9336"],["/categories/Hexo/index.html","c7cd03e49c8773c831b3ebcb70825023"],["/categories/Hexo/图床/index.html","aca7ed341169ccf6e8685d331af47bc1"],["/categories/Hexo/建站/index.html","c23468b589ad2e853cd3c6b91ec6ff6b"],["/categories/Hexo/注入器/index.html","458e8fd2d8dfac844a92524bed8a45fd"],["/categories/Qt/index.html","726d494186a80ef607759b5cf148a994"],["/categories/Qt/数据库/index.html","c7d6a69e02fd7e04649a3f2ce97179fc"],["/categories/VS/index.html","f7a198e443e1bb8e5ff3f2c836071d3a"],["/categories/easyx/index.html","bd3fa6e47feee16f7b6115f250f8b078"],["/categories/forBOEclub/easyx/index.html","bd585461d7cfcb632971dcf2e1ca962c"],["/categories/forBOEclub/index.html","489bb0dde9cbddc9fe9daebe58d2a72e"],["/categories/html/index.html","128096a44973ddaab93e8bee75da968c"],["/categories/index.html","091f9d890c04e30a92bad1340cb4b8cc"],["/categories/misc/index.html","a8fdcf38da903942e2d356bd01ee56e7"],["/categories/volantis/index.html","3be47e332becd1b5b7c094f336118340"],["/categories/windows/Hyper-V/index.html","f7133a7e5a1dcd5e2688ff1cc83058df"],["/categories/windows/index.html","727de021833825e5795e32f94eceb48f"],["/categories/windows/terminal/index.html","e1cfd71af617ea56deb02b3099a355a7"],["/categories/wsl/index.html","7dcaffb4859b2811a9ebbe45f18be4fa"],["/categories/xfce4/index.html","282f780f2e2fdc6d1bf684e785f0453c"],["/categories/大语言模型/index.html","189e73bbc610eb2d1ea5118236602e8c"],["/categories/数据库/index.html","50b3b70e66d3448410c6eccd8b8fba7b"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","ea991b00fc8a775d86b3070af6791e38"],["/index.html","fd08106e4c28b36c9d067618ef0da18a"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/assets/moc/miku.2048/texture_00.png","f69191e3aa1aa64d66bef43d38bb45e8"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","3f5925986c23d71820ff2725b2e77d7f"],["/sw-register.js","898eaf0e11176ca37b66db9989f4b5e0"],["/tags/C/index.html","929c1da95a784bf1efb992a93eba2870"],["/tags/C语言/index.html","778d758023f0ca4a41a768f8c4f90137"],["/tags/Datawhale-AI夏令营/index.html","98dd4d489af988930a2c9a23fd0e846d"],["/tags/Hexo/index.html","e9b6965c3df976a69d0be27eb18e932d"],["/tags/Hyper-V/index.html","0697345f27b732c4942635c66d54a9d4"],["/tags/VS/index.html","ff7746124b8b63f15c6fa12b8ee96c79"],["/tags/easyx/index.html","d01305de00943cee941037072fa9668c"],["/tags/forBOEclub/index.html","fca1d0787c1c570ccffa235786933f80"],["/tags/freshman/index.html","8afd85aacd0d6d67a1c66f3fa651545a"],["/tags/html/index.html","f32dbdc0fc58829e0afc13eb6466b585"],["/tags/index.html","bc0aee91f203be276e1de8b551284a49"],["/tags/linux/index.html","756848ed4caad3fc0268ea56eb3a1f07"],["/tags/misc/index.html","d614ee099f9a12355501a9f2e64bec25"],["/tags/mysql/index.html","7496bc11bab62defef0f9cb0bb30dc00"],["/tags/qt/index.html","2912ceb92206585376ea20528ccfac50"],["/tags/volantis/index.html","73e5d05c0cde73202824f40d0c3d9d57"],["/tags/windows/index.html","33d4998c41a47abb9055cc2ed8f44058"],["/tags/wsl/index.html","ca8a527518429cd82daf3c25b8ba51e9"],["/tags/xfce4/index.html","a0b9f6912dd6b6df6d9a52245edeae29"],["/tags/博客/index.html","16c2698a97e181f25045dfea82d8d828"],["/tags/图床/index.html","85985eee68e6641858b891103675ef24"],["/tags/虚拟机/index.html","b8377374a61f364d295bee302ab30353"],["/tags/随想/index.html","ab600778afd1accd29f2e163b60cb047"]];
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
