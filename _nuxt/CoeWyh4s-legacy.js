System.register(["./BaVGexq9-legacy.js","./BpAMG_v1-legacy.js"],(function(e,t){"use strict";var n,o,i,c,a,s,r,m,l,u,g,d,p,f,h,x,y,b;return{setters:[e=>{n=e.an,o=e.a9,i=e.aR,c=e.bi,a=e.z,s=e.o,r=e.a,m=e.D,l=e.ac,u=e.ab,g=e.c,d=e.w,p=e.b,f=e.F,h=e.t,x=e.e,y=e.aN},e=>{b=e.u}],execute:function(){var t=document.createElement("style");t.textContent=".c-common-left-menu{border-radius:10px;width:200px;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-bottom:20px;padding-top:20px}.c-common-left-menu .menu-item{align-items:center;display:flex}.c-common-left-menu .menu-item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(8px*(1 - var(--tw-space-x-reverse)));margin-right:calc(8px*var(--tw-space-x-reverse))}.c-common-left-menu .menu-item{color:#5e6773;cursor:pointer;margin-left:16px;margin-right:16px;padding:8px 16px;white-space:nowrap}.c-common-left-menu .menu-item .iconfont{font-size:13px;font-weight:300;line-height:22px}.c-common-left-menu .menu-item.active{border-radius:10px;--tw-bg-opacity:1;background-color:rgb(239 241 245/var(--tw-bg-opacity))}\n",document.head.appendChild(t),e("u",(function(e){const t=()=>{if(!e)return;const t=e.value||e;if(!t||!t.getElementsByClassName)return;const n=t.getElementsByClassName("left-content")[0],o=t.getElementsByClassName("right-content")[0],i=n.getElementsByClassName("fixed-area")[0];if(i&&i.clientHeight&&i.clientWidth>0)if(o.offsetHeight-50>i.offsetHeight){const e=n.getBoundingClientRect(),t=i.getBoundingClientRect(),o=e.top,c=i.clientHeight+o;if(o<0&&c<window.innerHeight){const n=t.width;i.setAttribute("fixed",!0),i.style.width=n+"px";const o=()=>Math.min(e.bottom,window.innerHeight)-80>t.height&&(i.style.bottom="auto",i.style.top="80px",!0);e.bottom<window.innerHeight?o()||(i.style.top="auto",i.style.bottom=window.innerHeight-e.bottom+"px"):o()||(i.style.top="auto",i.style.bottom="10px")}else i.removeAttribute("fixed")}else o.offsetHeight-50<=i.offsetHeight&&i.removeAttribute("fixed")};s((()=>{document.addEventListener("scroll",t)}))}));const w={class:"c-common-left-menu"};e("_",{__name:"LeftMenu",setup(e){const{menus:t}=b(),v=n(),{category:C}=o(v),H=i();return c(),a((()=>H.hash),(e=>{v.setCategory(e.replace("#","").toLowerCase())})),s((()=>{})),(e,n)=>{const o=y;return r(),m("div",w,[(r(!0),m(l,null,u(x(t),((e,t)=>(r(),g(o,{key:t,class:f(["menu-item",{active:x(C)===e.name}]),to:"/#"+e.name,onClick:t=>(e=>{v.setCategory(e.name)})(e)},{default:d((()=>[p("i",{class:f(["iconfont",e.icon])},null,2),p("p",null,h(e.title),1)])),_:2},1032,["to","class","onClick"])))),128))])}}})}}}));
