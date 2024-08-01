/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/20/hello-world/index.html","9acac89f5889391d12bb78cd1ce63ec1"],["/2023/07/23/BeginYourCreattiveMindFromHere/index.html","c85d8f21f7f40d402b6c57a6b55fd900"],["/2023/07/23/easyx/index.html","416f8ac4b3a422d5130f1aea66b0ff6e"],["/2024/02/07/bili图床/index.html","591519f44251698c0c48c928ab39e1a1"],["/2024/02/07/在此系统上禁止运行脚本？/index.html","2adb93b6223edba32ee6b8fa37b37e93"],["/2024/02/07/我回来啦/index.html","2aa6ef559b2860e678b48f95dfd93529"],["/2024/02/08/Hyper-V/index.html","96198279590a85eb98b18fd78d20611f"],["/2024/02/08/QT5-7-1与VisualStudio2015/index.html","42fda1e376f0c8d0d5b8498c5249a7b5"],["/2024/05/10/mysql-reset-password/index.html","b761e5918a171d5f5caf5180b3503480"],["/2024/05/11/qt-connect-mysql/index.html","092714f46035bffb0a42be99a9a6ca25"],["/2024/05/23/hackRF-one-基本使用（linux下录制与Windows中绘制图形）（包括Windows访问wsl2文件）/index.html","68219d18029d8fca735cdd9f6dad0a3d"],["/2024/05/23/hackrf在linux下/index.html","f46b10a494937c1dda822580e2e88847"],["/2024/05/23/qCharts避免多个表造成的卡顿/index.html","acd6ac2d9f612399ee2465d7db78814c"],["/2024/05/23/windows与hackRF收听广播/index.html","16b1cc25f4f267452d533a9f5f03193e"],["/2024/05/23/wsl2与xfce4中文与输入法设置/index.html","66475626123aaf370274f6b2be44152c"],["/2024/05/23/wsl2的网络连接/index.html","14d0b38f761339845d65f510c596ce41"],["/2024/05/23/wsl与图形化界面（Ubuntu24-04与xfce4为例）/index.html","35717479921a3a0fb5c1404c4b3391df"],["/2024/05/23/wsl共享主机usb设备（以hackrf-one为例）/index.html","1a1f5488ab7a35b103866473ad502e9a"],["/2024/05/23/二进制文件/index.html","2ac99422cdd3034f91142d95d871d4e2"],["/2024/05/23/使用bat文件进行预操作的思路/index.html","c2d5fc6e8e187f5e0ad0a0ce8463e303"],["/2024/07/12/html-posts/index.html","fa9db1ddf42aded3cac36a1d74b06b54"],["/2024/07/13/misc-重复造轮子/index.html","5d58558c577271523b2e842be144f45a"],["/2024/07/24/HiVolanyisAssistant/index.html","0c35f8ec14658cfca25a901288d53e28"],["/2024/07/25/datawhale-24-3-3-1/index.html","753097ff67b166d37e5432e7e45135c6"],["/2024/07/29/datawhale-24-3-3-2/index.html","ab721577045d58db38f2839001b7c73b"],["/404.html","3d86577b186d3f185ab86de3145fe57d"],["/HTML/test.html","7b80f96f6602091ef9d5c35291995229"],["/about/index.html","8588d3c13b626d4863f27d4af7cca0c0"],["/archives/2023/07/index.html","83af27a0c36d4b8bdc195ffae2316e4d"],["/archives/2023/index.html","c26b190e478c4e7d61930011576f4ac3"],["/archives/2024/02/index.html","207d5dfbf6ea550b544ee613fd06b9f3"],["/archives/2024/05/index.html","d231ee36762a9682d0179248ee9b207d"],["/archives/2024/07/index.html","8ddb041731cc068fbe0be5b7442d639b"],["/archives/2024/index.html","f45688cdbbf1095bcaf1200259e37c12"],["/archives/index.html","1305bdd000fcf8a7c55fa55303a20497"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/AI/index.html","fc502f21c2a5ce356c2fda01f937bbb6"],["/categories/Hexo/index.html","7ad7ca5683a1bf3827e9d6829a2a6eb0"],["/categories/Hexo/图床/index.html","059bbc36a143fe8b08e489fd1be64d90"],["/categories/Hexo/建站/index.html","8b86206f7d7bae60ceb2a54a0841d184"],["/categories/Hexo/注入器/index.html","60c02c4ad2f142d8d942296a23338a4d"],["/categories/Qt/index.html","8acc26b74eb013ed9707646a87ceac8a"],["/categories/Qt/数据库/index.html","89d161598bc29909e666ffae1707b10b"],["/categories/VS/index.html","833b1a0132b794a56909fbf8c0d6b2e8"],["/categories/easyx/index.html","93cb14adb1adf8a80d2542ee3228a470"],["/categories/forBOEclub/easyx/index.html","cb71440407ed2edf230c3a4445caf3f8"],["/categories/forBOEclub/index.html","649de70f86339aae5f55b3e5855bc3c8"],["/categories/html/index.html","ed1261be479fdb3e65b2d70ce70e8b09"],["/categories/index.html","295c11d6ad8f3f101540df0b5a50c7b8"],["/categories/misc/index.html","c0fae909f1d5a8d3fe8023c3d624de2d"],["/categories/volantis/index.html","32f9111859c0a8a6f159a6cce0d9ba44"],["/categories/windows/Hyper-V/index.html","dae92f466ba1125f90b3bfd746dda185"],["/categories/windows/index.html","6317a966b9792ba37fc44fe07aece4df"],["/categories/windows/terminal/index.html","a8c2c06dc831f7c68922c9b24c2d66c3"],["/categories/wsl/index.html","65270149adb69a72bae313fc7b60cf26"],["/categories/xfce4/index.html","79d935c2fa5ef60a1c731907887114bc"],["/categories/大语言模型/index.html","810f3cc7daa66ed137cba2908975b89f"],["/categories/数据库/index.html","cb7129679b5d432289eb6a26681818a9"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/first.css","08b37dff0481f0ec20062f0020be8b4c"],["/css/style.css","d1fa3033c24a8aaf1b6f28e7fdce5428"],["/friends/index.html","91244e32f3d5a5cb1afd6297a51b5557"],["/index.html","4f052b4aa09111f80ca74c7f86f8cdb6"],["/js/app.js","7a2c825eba3f2495f5c0f48cbe70482e"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/live2dw/assets/ariu.2048/texture_00.png","45f9781698a5a677e43f0c59916e846d"],["/live2dw/assets/ariu.2048/texture_01.png","803fdf3bae84582a021e05e0cc297f05"],["/live2dw/assets/ariu.2048/texture_02.png","880f01b66224b4fddebc83804b44abac"],["/live2dw/assets/ariu.2048/texture_03.png","4736c17611b95ad97aea1d369930703e"],["/live2dw/assets/ariu.2048/texture_04.png","0996f9f48d0c906ccb64add811d6c2cc"],["/live2dw/assets/ariu.2048/texture_05.png","d5232128c82f7ad82c26c867c7bd3f2d"],["/live2dw/assets/ariu.2048/texture_06.png","0534f6e3e973a848581b3d8971211786"],["/live2dw/assets/ariu.2048/texture_07.png","865776ad1e8b2c452c340ff8642b8170"],["/live2dw/assets/ariu.2048/texture_08.png","5151da942f3e9f689ece257a8b9e27c2"],["/live2dw/assets/ariu.2048/texture_09.png","c1a63f938d3384ceed1726ff70456819"],["/live2dw/assets/ariu.2048/texture_10.png","741d985d64bae2dab108ba93a95d0037"],["/live2dw/assets/ariu.2048/texture_11.png","3ad0d12a25284a7ace98bc2eee1a351d"],["/live2dw/assets/ariu.2048/texture_12.png","df5ff1048a68cdef28d04ceb0ccd69ae"],["/live2dw/assets/ariu.2048/texture_13.png","da097706b885c046bac41be4654fb082"],["/live2dw/assets/ariu.4096/texture_00.png","f891a170789dc055cadee7f75970969f"],["/live2dw/assets/ariu.4096/texture_01.png","3a4d5ebad766e18ceb1173ef9842a4c0"],["/live2dw/assets/ariu.4096/texture_02.png","921fc621303c853c116243f872a3d9c6"],["/live2dw/assets/ariu.4096/texture_03.png","07e6474b75bdd39cedcaef2322b8f558"],["/live2dw/assets/ariu.png","8555c020f23095b01e6a5b82039ffa17"],["/meting-plus.js","f7033dd0a54cd3b1597eba2edc255e5b"],["/musics/11.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/mystic/index.html","5ad529c99004c3b8a939e2434c51152f"],["/sw-register.js","c3c058b2e4d8cfaeefd61b1aefde2f7f"],["/tags/C/index.html","144bfcac7cc2964651bda22474a3ec29"],["/tags/C语言/index.html","e4c21db8308567159c577ad604668cea"],["/tags/Datawhale-AI夏令营/index.html","57eb280a76a850bce4d6fad1aca4b23e"],["/tags/Hexo/index.html","619c8a0cdd0d49e3309227948e8b3821"],["/tags/Hyper-V/index.html","e25393bc485ff1732850b33e993ab93f"],["/tags/VS/index.html","91a99629f163b60df6bde649e2380362"],["/tags/easyx/index.html","a01c738e986ce136ddd0ff814ddee244"],["/tags/forBOEclub/index.html","cda0bedbd21c687f837e6c262d29a3dc"],["/tags/freshman/index.html","3c3e22b2bca4fc7f973219bff4f008d9"],["/tags/html/index.html","6d28c922745ed8c04d8cf2363cc3c68a"],["/tags/index.html","a4ec5913a4a0e4176a09e755f5359630"],["/tags/linux/index.html","afd7a13d74fa22b4c81e5fc283377824"],["/tags/misc/index.html","a1127981365c4bfe77b68b68fe3c7515"],["/tags/mysql/index.html","98f530bd8821a829b7fe4879e505664c"],["/tags/qt/index.html","8b5d413cc760ddf5dbce2abb083e010e"],["/tags/volantis/index.html","f49b31163d719afd5c1205a22e672efe"],["/tags/windows/index.html","133d3f1ba1d88e2d065048fc7ece38fd"],["/tags/wsl/index.html","261002a75c7738f94dce8bb1f8c0b532"],["/tags/xfce4/index.html","f0f0d2fe96315e6c639e16e9b19a790a"],["/tags/博客/index.html","6b97713d0b2db76d37f4c4660b5a80d6"],["/tags/图床/index.html","c884f991253d6c47453061ee576f328c"],["/tags/虚拟机/index.html","ea70af0013f6525b6b3e88a1a9f3c53d"],["/tags/随想/index.html","3f212df484453bdbf5886efd3d42c3e1"]];
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
