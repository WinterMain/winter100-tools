System.register(["./Ddmi6xI2-legacy.js"],(function(t,n){"use strict";var r,e,i;return{setters:[t=>{r=t.cF,e=t.ar,i=t.c7}],execute:function(){t("d",(function(t,n,r){var i,u,o,a,f,c,v=0,s=!1,g=!1,h=!0;if("function"!=typeof t)throw new TypeError(m);function T(n){var r=i,e=u;return i=u=void 0,v=n,a=t.apply(e,r)}function x(t){var r=t-c;return void 0===c||r>=n||r<0||g&&t-v>=o}function w(){var t=d();if(x(t))return $(t);f=setTimeout(w,function(t){var r=n-(t-c);return g?y(r,o-(t-v)):r}(t))}function $(t){return f=void 0,h&&i?T(t):(i=u=void 0,a)}function b(){var t=d(),r=x(t);if(i=arguments,u=this,c=t,r){if(void 0===f)return function(t){return v=t,f=setTimeout(w,n),s?T(t):a}(c);if(g)return clearTimeout(f),f=setTimeout(w,n),T(c)}return void 0===f&&(f=setTimeout(w,n)),a}return n=l(n)||0,e(r)&&(s=!!r.leading,o=(g="maxWait"in r)?p(l(r.maxWait)||0,n):o,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==f&&clearTimeout(f),v=0,i=c=u=f=void 0},b.flush=function(){return void 0===f?a:$(d())},b}));var n=/\s/,u=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}(t)+1).replace(u,""):t}var a=NaN,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,v=/^0o[0-7]+$/i,s=parseInt;function l(t){if("number"==typeof t)return t;if(r(t))return a;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var i=c.test(t);return i||v.test(t)?s(t.slice(2),i?2:8):f.test(t)?a:+t}var d=function(){return i.Date.now()},m="Expected a function",p=Math.max,y=Math.min}}}));
