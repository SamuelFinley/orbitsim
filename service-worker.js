"use strict";var precacheConfig=[["/orbitsim/index.html","3f87d5dca915ad1d74b54e86bfb6025c"],["/orbitsim/static/css/main.8f07170e.css","b3f48f47f67be1fa778c96024506f701"],["/orbitsim/static/js/main.522acb1e.js","8cdfd5738ee4c8550d8bfdd441a467e2"],["/orbitsim/static/media/Eris.c2aa68b5.jpg","c2aa68b5583e065d1ab05c0bbc65b666"],["/orbitsim/static/media/Halley.6cde567a.jpg","6cde567a9bdbe27da2cb96b11bcd3971"],["/orbitsim/static/media/Jupiter.02de4d30.jpg","02de4d3034df062f1990c1ca1f093f26"],["/orbitsim/static/media/Mercury.a64eda4c.jpg","a64eda4c8795ab17e3bb84d51fb91f45"],["/orbitsim/static/media/Neptune.baf03d6f.jpg","baf03d6fa6de30dbf1ebf4e980fbee00"],["/orbitsim/static/media/Pluto.81d06128.jpg","81d0612842726a76d6421e30829245f4"],["/orbitsim/static/media/Saturn.e5004e70.jpg","e5004e700e2beaa725e06f17fdfb4231"],["/orbitsim/static/media/Uranus.6841a819.jpg","6841a819b1a6da8020e80bdd1a49fcbd"],["/orbitsim/static/media/Venus.ca6a28ce.jpg","ca6a28ce0c62eaa5c096e421392d3a88"],["/orbitsim/static/media/asteroid2.bebd82b5.svg","bebd82b5084db1f290bf036aab1ffc55"],["/orbitsim/static/media/kupier.7deb83d2.svg","7deb83d2cc109b48250b0c588a095483"],["/orbitsim/static/media/solar.47130bba.svg","47130bbaf9ec3fb5916faf1cf40ede75"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/orbitsim/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});