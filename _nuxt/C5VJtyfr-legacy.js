System.register([],(function(t,e){"use strict";return{execute:function(){t("a",{format(t,e=8){if(/\./.test(t)){let r=/\.(\d*)?/.exec(t);return r&&r.length&&(r=r[1]),r&&r.length>=e?t.split(".")[0]+"."+r.substring(0,e):t}return t},check(t){const{val:e,oldVal:r,maxVal:i,callback:n,decimals:c,minVal:s}=t;try{if(void 0!==i&&e.cmp(i)>0)return n(i);if(void 0!==s&&e.cmp(s)<0)return n(s);if(e!==r&&e){const t=e.plus("0");if("NaN"===t)return n(r);let i=c;(void 0===c||isNaN(parseInt(c)))&&(i=8);const s=this.format(t,i);n(s!==t?s:this.format(e,i))}}catch{n(r)}}})}}}));
