import{cq as s,a_ as g,a$ as m,bS as o,b1 as d,cr as b,bB as S,aY as y,bC as P,cs as w,n as O}from"./pzHmHsNK.js";function x(n){return n}function T(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var A=800,I=16,C=Date.now;function E(n){var e=0,t=0;return function(){var a=C(),r=I-(a-t);if(t=a,r>0){if(++e>=A)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function _(n){return function(){return n}}var N=s?function(n,e){return s(n,"toString",{configurable:!0,enumerable:!1,value:_(e),writable:!0})}:x,k=E(N),f=Math.max;function F(n,e,t){return e=f(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,i=f(a.length-e,0),u=Array(i);++r<i;)u[r]=a[e+r];r=-1;for(var l=Array(e+1);++r<e;)l[r]=a[r];return l[e]=t(u),T(n,this,l)}}var G=9007199254740991;function H(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=G}var L="[object Arguments]";function c(n){return g(n)&&m(n)==L}var p=Object.prototype,M=p.hasOwnProperty,R=p.propertyIsEnumerable,v=c(function(){return arguments}())?c:function(n){return g(n)&&M.call(n,"callee")&&!R.call(n,"callee")};function B(n,e){for(var t=-1,a=e.length,r=n.length;++t<a;)n[r+t]=e[t];return n}var h=o?o.isConcatSpreadable:void 0;function $(n){return d(n)||v(n)||!!(h&&n&&n[h])}function q(n,e,t,a,r){var i=-1,u=n.length;for(t||(t=$),r||(r=[]);++i<u;){var l=n[i];t(l)?B(r,l):r[r.length]=l}return r}function z(n){var e=n==null?0:n.length;return e?q(n):[]}function D(n){return k(F(n,void 0,z),n+"")}function K(n,e){return n!=null&&e in Object(n)}function U(n,e,t){e=b(e,n);for(var a=-1,r=e.length,i=!1;++a<r;){var u=S(e[a]);if(!(i=n!=null&&t(n,u)))break;n=n[u]}return i||++a!=r?i:(r=n==null?0:n.length,!!r&&H(r)&&y(u,r)&&(d(n)||v(n)))}function X(n,e){return n!=null&&U(n,e,K)}function Y(n,e,t){for(var a=-1,r=e.length,i={};++a<r;){var u=e[a],l=P(n,u);t(l,u)&&w(i,b(u,n),l)}return i}function J(n,e){return Y(n,e,function(t,a){return X(n,a)})}var Q=D(function(n,e){return n==null?{}:J(n,e)});const V=O({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Z=n=>Q(V,n);export{v as a,q as b,H as c,B as d,z as f,X as h,x as i,F as o,Q as p,k as s,Z as u};
