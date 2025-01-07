System.register([],(function(t,e){"use strict";return{execute:function(){var e=t("a",{});function n(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`positive integer expected, not ${t}`)}function o(t){if("boolean"!=typeof t)throw new Error(`boolean expected, not ${t}`)}function r(t){return t instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name}function s(t,...e){if(!r(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error(`Uint8Array expected of length ${e}, not of length=${t.length}`)}function c(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");n(t.outputLen),n(t.blockLen)}function i(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function u(t,e){s(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=e.isBytes=void 0,e.number=n,e.bool=o,e.isBytes=r,e.bytes=s,e.hash=c,e.exists=i,e.output=u;const a={number:n,bool:o,bytes:s,hash:c,exists:i,output:u};t("_",e.default=a);var f=t("u",{}),y={};Object.defineProperty(y,"__esModule",{value:!0}),y.crypto=void 0,y.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,function(t){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(t,"__esModule",{value:!0}),t.randomBytes=t.wrapXOFConstructorWithOpts=t.wrapConstructorWithOpts=t.wrapConstructor=t.checkOpts=t.Hash=t.concatBytes=t.toBytes=t.utf8ToBytes=t.asyncLoop=t.nextTick=t.hexToBytes=t.bytesToHex=t.byteSwap32=t.byteSwapIfBE=t.byteSwap=t.isLE=t.rotl=t.rotr=t.createView=t.u32=t.u8=t.isBytes=void 0;const n=y,o=e;t.isBytes=function(t){return t instanceof Uint8Array||null!=t&&"object"==typeof t&&"Uint8Array"===t.constructor.name},t.u8=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength),t.u32=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),t.createView=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),t.rotr=(t,e)=>t<<32-e|t>>>e,t.rotl=(t,e)=>t<<e|t>>>32-e>>>0,t.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],t.byteSwap=t=>t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255,t.byteSwapIfBE=t.isLE?t=>t:e=>(0,t.byteSwap)(e),t.byteSwap32=function(e){for(let n=0;n<e.length;n++)e[n]=(0,t.byteSwap)(e[n])};const r=Array.from({length:256},((t,e)=>e.toString(16).padStart(2,"0")));t.bytesToHex=function(t){(0,o.bytes)(t);let e="";for(let n=0;n<t.length;n++)e+=r[t[n]];return e};const s={_0:48,_9:57,_A:65,_F:70,_a:97,_f:102};function c(t){return t>=s._0&&t<=s._9?t-s._0:t>=s._A&&t<=s._F?t-(s._A-10):t>=s._a&&t<=s._f?t-(s._a-10):void 0}function i(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}function u(t){return"string"==typeof t&&(t=i(t)),(0,o.bytes)(t),t}t.hexToBytes=function(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);const e=t.length,n=e/2;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const o=new Uint8Array(n);for(let r=0,s=0;r<n;r++,s+=2){const e=c(t.charCodeAt(s)),n=c(t.charCodeAt(s+1));if(void 0===e||void 0===n){const e=t[s]+t[s+1];throw new Error('hex string expected, got non-hex character "'+e+'" at index '+s)}o[r]=16*e+n}return o},t.nextTick=async()=>{},t.asyncLoop=async function(e,n,o){let r=Date.now();for(let s=0;s<e;s++){o(s);const e=Date.now()-r;e>=0&&e<n||(await(0,t.nextTick)(),r+=e)}},t.utf8ToBytes=i,t.toBytes=u,t.concatBytes=function(...t){let e=0;for(let r=0;r<t.length;r++){const n=t[r];(0,o.bytes)(n),e+=n.length}const n=new Uint8Array(e);for(let o=0,r=0;o<t.length;o++){const e=t[o];n.set(e,r),r+=e.length}return n},t.Hash=class{clone(){return this._cloneInto()}};const a={}.toString;t.checkOpts=function(t,e){if(void 0!==e&&"[object Object]"!==a.call(e))throw new Error("Options should be object or undefined");return Object.assign(t,e)},t.wrapConstructor=function(t){const e=e=>t().update(u(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e},t.wrapConstructorWithOpts=function(t){const e=(e,n)=>t(n).update(u(e)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=e=>t(e),e},t.wrapXOFConstructorWithOpts=function(t){const e=(e,n)=>t(n).update(u(e)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=e=>t(e),e},t.randomBytes=function(t=32){if(n.crypto&&"function"==typeof n.crypto.getRandomValues)return n.crypto.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}}(f)}}}));
