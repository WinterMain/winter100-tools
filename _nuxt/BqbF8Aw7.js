import{co as s,aZ as g,a_ as m,bT as o,b0 as d,cp as p,bL as y,aX as S,bM as P,cq as w,v as O}from"./BXJhvq4L.js";function x(n){return n}function T(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var A=800,I=16,E=Date.now;function _(n){var e=0,t=0;return function(){var a=E(),r=I-(a-t);if(t=a,r>0){if(++e>=A)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function C(n){return function(){return n}}var L=s?function(n,e){return s(n,"toString",{configurable:!0,enumerable:!1,value:C(e),writable:!0})}:x,M=_(L),f=Math.max;function N(n,e,t){return e=f(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,i=f(a.length-e,0),u=Array(i);++r<i;)u[r]=a[e+r];r=-1;for(var l=Array(e+1);++r<e;)l[r]=a[r];return l[e]=t(u),T(n,this,l)}}var k=9007199254740991;function F(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=k}var G="[object Arguments]";function c(n){return g(n)&&m(n)==G}var b=Object.prototype,H=b.hasOwnProperty,R=b.propertyIsEnumerable,v=c(function(){return arguments}())?c:function(n){return g(n)&&H.call(n,"callee")&&!R.call(n,"callee")};function X(n,e){for(var t=-1,a=e.length,r=n.length;++t<a;)n[r+t]=e[t];return n}var h=o?o.isConcatSpreadable:void 0;function q(n){return d(n)||v(n)||!!(h&&n&&n[h])}function z(n,e,t,a,r){var i=-1,u=n.length;for(t||(t=q),r||(r=[]);++i<u;){var l=n[i];t(l)?X(r,l):r[r.length]=l}return r}function B(n){var e=n==null?0:n.length;return e?z(n):[]}function D(n){return M(N(n,void 0,B),n+"")}function K(n,e){return n!=null&&e in Object(n)}function U(n,e,t){e=p(e,n);for(var a=-1,r=e.length,i=!1;++a<r;){var u=y(e[a]);if(!(i=n!=null&&t(n,u)))break;n=n[u]}return i||++a!=r?i:(r=n==null?0:n.length,!!r&&F(r)&&S(u,r)&&(d(n)||v(n)))}function Z(n,e){return n!=null&&U(n,e,K)}function $(n,e,t){for(var a=-1,r=e.length,i={};++a<r;){var u=e[a],l=P(n,u);t(l,u)&&w(i,p(u,n),l)}return i}function J(n,e){return $(n,e,function(t,a){return Z(n,a)})}var Q=D(function(n,e){return n==null?{}:J(n,e)});const V=O({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Y=n=>Q(V,n);export{v as a,z as b,F as c,X as d,B as f,Z as h,x as i,N as o,Q as p,M as s,Y as u};
