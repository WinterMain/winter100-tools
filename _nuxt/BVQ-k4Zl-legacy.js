System.register(["./CsvVX8NI-legacy.js"],(function(n,r){"use strict";var t,e,u,a,l,i,o,c,f,v,s;return{setters:[n=>{t=n.co,e=n.aZ,u=n.a_,a=n.bT,l=n.b0,i=n.cp,o=n.bL,c=n.aX,f=n.bM,v=n.cq,s=n.v}],execute:function(){function r(n){return n}n({b:z,c:w,d:M,f:D,h:I,i:r,o:S});var g,h,b,p=Date.now,y=t?function(n,r){return t(n,"toString",{configurable:!0,enumerable:!1,value:(e=r,function(){return e}),writable:!0});var e}:r,d=n("s",(g=y,h=0,b=0,function(){var n=p(),r=16-(n-b);if(b=n,r>0){if(++h>=800)return arguments[0]}else h=0;return g.apply(void 0,arguments)})),m=Math.max;function S(n,r,t){return r=m(void 0===r?n.length-1:r,0),function(){for(var e=arguments,u=-1,a=m(e.length-r,0),l=Array(a);++u<a;)l[u]=e[r+u];u=-1;for(var i=Array(r+1);++u<r;)i[u]=e[u];return i[r]=t(l),function(n,r,t){switch(t.length){case 0:return n.call(r);case 1:return n.call(r,t[0]);case 2:return n.call(r,t[0],t[1]);case 3:return n.call(r,t[0],t[1],t[2])}return n.apply(r,t)}(n,this,i)}}var j=9007199254740991;function w(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=j}function O(n){return e(n)&&"[object Arguments]"==u(n)}var A=Object.prototype,x=A.hasOwnProperty,C=A.propertyIsEnumerable,L=n("a",O(function(){return arguments}())?O:function(n){return e(n)&&x.call(n,"callee")&&!C.call(n,"callee")});function M(n,r){for(var t=-1,e=r.length,u=n.length;++t<e;)n[u+t]=r[t];return n}var k=a?a.isConcatSpreadable:void 0;function q(n){return l(n)||L(n)||!!(k&&n&&n[k])}function z(n,r,t,e,u){var a=-1,l=n.length;for(t||(t=q),u||(u=[]);++a<l;){var i=n[a];t(i)?M(u,i):u[u.length]=i}return u}function D(n){return null!=n&&n.length?z(n):[]}function E(n,r){return null!=n&&r in Object(n)}function I(n,r){return null!=n&&function(n,r,t){for(var e=-1,u=(r=i(r,n)).length,a=!1;++e<u;){var f=o(r[e]);if(!(a=null!=n&&t(n,f)))break;n=n[f]}return a||++e!=u?a:!!(u=null==n?0:n.length)&&w(u)&&c(f,u)&&(l(n)||L(n))}(n,r,E)}function P(n,r){return function(n,r,t){for(var e=-1,u=r.length,a={};++e<u;){var l=r[e],o=f(n,l);t(o,l)&&v(a,i(l,n),o)}return a}(n,r,(function(r,t){return I(n,t)}))}var T=n("p",function(n){return d(S(n,void 0,D),n+"")}((function(n,r){return null==n?{}:P(n,r)})));const X=s({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String});n("u",(n=>T(X,n)))}}}));
