import{H as p,bC as y,b6 as O,b$ as m}from"./9v22XJCx.js";import{j as v,f as x,l as b,o as w,U as i}from"./CvNVApEV.js";var a=Object.create,P=function(){function e(){}return function(r){if(!p(r))return{};if(a)return a(r);e.prototype=r;var n=new e;return e.prototype=void 0,n}}();function z(e,r){var n=-1,t=e.length;for(r||(r=Array(t));++n<t;)r[n]=e[n];return r}function H(e,r,n,t){var g=!n;n||(n={});for(var u=-1,h=r.length;++u<h;){var s=r[u],o=void 0;o===void 0&&(o=e[s]),g?y(n,s,o):O(n,s,o)}return n}function A(e){var r=[];if(e!=null)for(var n in Object(e))r.push(n);return r}var C=Object.prototype,U=C.hasOwnProperty;function I(e){if(!p(e))return A(e);var r=v(e),n=[];for(var t in e)t=="constructor"&&(r||!U.call(e,t))||n.push(t);return n}function M(e){return x(e)?b(e,!0):I(e)}var K=w(Object.getPrototypeOf,Object),d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,L=f&&f.exports===d,c=L?m.Buffer:void 0,l=c?c.allocUnsafe:void 0;function N(e,r){if(r)return e.slice();var n=e.length,t=l?l(n):new e.constructor(n);return e.copy(t),t}function T(e){var r=new e.constructor(e.byteLength);return new i(r).set(new i(e)),r}function $(e,r){var n=r?T(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function j(e){return typeof e.constructor=="function"&&!v(e)?P(K(e)):{}}export{T as a,$ as b,H as c,z as d,N as e,K as g,j as i,M as k};
