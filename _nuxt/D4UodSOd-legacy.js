System.register(["./CFoDEbrb-legacy.js","./CyvqdYRj-legacy.js"],(function(t,r){"use strict";var e,n,o,u,c,f,i,a,s;return{setters:[t=>{e=t.bk,n=t.bQ,o=t.bm,u=t.c7},t=>{c=t.j,f=t.f,i=t.l,a=t.o,s=t.U}],execute:function(){t({a:h,b:function(t,r){var e=r?h(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)},c:function(t,r,e,u){var c=!e;e||(e={});for(var f=-1,i=r.length;++f<i;){var a=r[f],s=void 0;void 0===s&&(s=t[a]),c?n(e,a,s):o(e,a,s)}return e},d:function(t,r){var e=-1,n=t.length;for(r||(r=Array(n));++e<n;)r[e]=t[e];return r},e:function(t,r){if(r)return t.slice();var e=t.length,n=d?d(e):new t.constructor(e);return t.copy(n),n},i:function(t){return"function"!=typeof t.constructor||c(t)?{}:p(b(t))},k:function(t){return f(t)?i(t,!0):function(t){if(!e(t))return function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}(t);var r=c(t),n=[];for(var o in t)("constructor"!=o||!r&&y.call(t,o))&&n.push(o);return n}(t)}});var v=Object.create,p=function(){function t(){}return function(r){if(!e(r))return{};if(v)return v(r);t.prototype=r;var n=new t;return t.prototype=void 0,n}}(),y=Object.prototype.hasOwnProperty,b=t("g",a(Object.getPrototypeOf,Object)),l="object"==typeof t&&t&&!t.nodeType&&t,g=l&&"object"==typeof r&&r&&!r.nodeType&&r,j=g&&g.exports===l?u.Buffer:void 0,d=j?j.allocUnsafe:void 0;function h(t){var r=new t.constructor(t.byteLength);return new s(r).set(new s(t)),r}}}}));
