System.register(["./BN24T_FV-legacy.js","./CFoDEbrb-legacy.js","./DA6yCkM2-legacy.js","./Dzz2-s_a-legacy.js"],(function(e,t){"use strict";var o,a,n,r,l,i,c,s,p,d,g,m,h,v,x,u,f,w,b,_,y,k,z,C,N,H,S;return{setters:[e=>{o=e.E},e=>{a=e.r,n=e.u,r=e.I,l=e.c_,i=e.a,c=e.A,s=e.d,p=e.w,d=e.e,g=e.c$,m=e.b,h=e.a0,v=e.a9,x=e.a8,u=e.t,f=e.c,w=e.aL,b=e.aK,_=e.aN,y=e.ak,k=e.a6,z=e.X,C=e.B,N=e.bf},e=>{H=e.u},e=>{S=e._}],execute:function(){var t=document.createElement("style");t.textContent=".c-search-tool .el-input{height:30px}.c-search-tool .el-input .el-input__wrapper{--tw-border-opacity:1;border-color:rgb(213 217 221/var(--tw-border-opacity))}.c-search-tool .el-input .el-input__wrapper,.c-search-tool .el-input .el-input__wrapper .el-input__inner{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.c-search-tool .el-input .el-input__prefix{padding-left:0!important}.c-search-tool .el-input .el-input__inner{padding-right:0!important}@media (max-width:767px){.c-search-tool{margin-top:12px}.c-search-tool .el-input{width:100%!important}}.c-search-tool-popover .search-list{margin-left:-8px;margin-right:-8px;max-height:300px;overflow-y:auto}.c-search-tool-popover .search-list .search-item{border-bottom-width:1px;border-color:#eff1f5;cursor:pointer;display:block;overflow-x:hidden;padding:8px;text-overflow:ellipsis;white-space:nowrap}.c-search-tool-popover .search-list .search-item p{overflow:hidden;text-overflow:ellipsis}.c-search-tool-popover .search-list .search-item:last-child{border-bottom-width:0}.c-search-tool-popover .search-list .search-item:hover{border-radius:8px;--tw-bg-opacity:1;background-color:rgb(239 241 245/var(--tw-bg-opacity))}.c-search-tool-popover .search-list .empty{height:80px;margin:auto;width:80px}@media (max-width:767px){.c-search-tool-popover{width:calc(100% - 40px)!important}}.c-common-slogan{align-items:center;display:flex;margin-bottom:-12px;margin-left:auto;margin-right:auto;overflow-x:hidden;padding-top:20px;width:1200px}.c-common-slogan .icon-wonhot{font-size:20px;line-height:28px;--tw-text-opacity:1;animation:hue 6s infinite;color:rgb(237 61 161/var(--tw-text-opacity))}.c-common-slogan .slogan-text{color:#22262a;font-size:18px;line-height:26px;margin-left:8px}.c-common-slogan .slogan-nav{align-items:center;display:flex;margin-left:60px}.c-common-slogan .slogan-nav>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(20px*(1 - var(--tw-space-x-reverse)));margin-right:calc(20px*var(--tw-space-x-reverse))}.c-common-slogan .slogan-nav{color:#5e6773;padding-bottom:4px;padding-top:4px}.c-common-slogan .slogan-nav .nav-item{cursor:pointer}.c-common-slogan .slogan-nav .nav-item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(4px*(1 - var(--tw-space-x-reverse)));margin-right:calc(4px*var(--tw-space-x-reverse))}.c-common-slogan .slogan-nav .nav-item{background-color:transparent;border-color:transparent;border-radius:10px;border-width:1px;padding:4px 8px}.c-common-slogan .slogan-nav .nav-item.active{border-width:1px;--tw-bg-opacity:1;background-color:rgb(213 217 221/var(--tw-bg-opacity));font-weight:500}.c-common-slogan .no-tool{font-size:12px;line-height:20px;--tw-text-opacity:1;color:rgb(237 61 161/var(--tw-text-opacity));opacity:.7}@keyframes hue{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@media (max-width:767px){.c-common-slogan{display:block;overflow:hidden;padding-bottom:16px;padding-left:20px;padding-right:20px;position:relative;width:100%}.c-common-slogan .slogan-text{font-size:14px;line-height:22px}.c-common-slogan .slogan-nav{display:flex;flex:1 1 0%;justify-content:flex-end;margin-left:0}.c-common-slogan .slogan-nav>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(4px*(1 - var(--tw-space-x-reverse)));margin-right:calc(4px*var(--tw-space-x-reverse))}.c-common-slogan .slogan-nav .nav-item{padding:2px 4px}.c-common-slogan .no-tool{bottom:-17px;margin:8px;padding-bottom:4px;padding-top:4px;position:absolute;right:0}}\n",document.head.appendChild(t);const j={en_US:{"搜索":"Search"},zh_Hans_CN:{"搜索":"搜索"},zh_Hant_HK:{"搜索":"搜索"}},$={class:"c-search-tool"},K={class:"search-list"},U={key:0,class:"empty",src:S},A=["href"],E={class:"font-w500 text-primary"},V={class:"description text-12 text-tertiary"},q={class:"font-w500 text-primary"},M={class:"description text-12 text-tertiary"},R={__name:"SearchTool",setup(e){const t=e=>{const t=n().$lang.value||"zh_Hans_CN",o=j[t]||j.zh_Hans_CN||{};return void 0===o[e]?e:o[e]},y=a(""),k=a(!1),{menus:z}=H(),C=n(),N=r((()=>{const e=[];for(let t=0;t<z.length;t++)z[t].subMenus.forEach((t=>{t.brand&&!t.brand.includes(C.$brandName)||e.push(t)}));return e})),S=r((()=>(l(y.value),y.value?N.value.filter((e=>l(e.title).includes(y.value)||l(e.description).includes(y.value))):N.value)));return(e,a)=>{const n=o,r=b,l=_;return i(),c("div",$,[s(l,{visible:k.value,"onUpdate:visible":a[3]||(a[3]=e=>k.value=e),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"click","show-arrow":!1},{reference:p((()=>[s(n,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),style:{width:"240px"},size:"small",placeholder:t("搜索"),"prefix-icon":d(g)},null,8,["modelValue","placeholder","prefix-icon"])])),default:p((()=>[m("div",K,[0===d(S).length?(i(),c("img",U)):h("",!0),(i(!0),c(v,null,x(d(S),((t,o)=>(i(),c(v,{key:o},[t.href?(i(),c("a",{key:0,href:t.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:a[1]||(a[1]=e=>k.value=!1)},[m("p",E,u(t.title),1),m("p",V,u(t.description),1)],8,A)):(i(),f(r,{key:1,class:"search-item",to:("getRouteName"in e?e.getRouteName:d(w))(t),onClick:a[2]||(a[2]=e=>k.value=!1)},{default:p((()=>[m("p",q,u(t.title),1),m("p",M,u(t.description),1)])),_:2},1032,["to"]))],64)))),128))])])),_:1},8,["visible"])])}}},T={en_US:{"万花筒工具箱":"A Kaleidoscope Toolbox","全部":"All","我的收藏":"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},zh_Hans_CN:{"万花筒工具箱":"万花筒工具箱","全部":"全部","我的收藏":"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},zh_Hant_HK:{"万花筒工具箱":"萬花筒工具箱","全部":"全部","我的收藏":"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"}},B={class:"c-common-slogan"},F={class:"flex items-center"},I={class:"slogan-text"},L={class:"slogan-nav"},P=["onClick"],X=["href"];e("_",{__name:"Slogan",setup(e){const t=e=>{const t=n().$lang.value||"zh_Hans_CN",o=T[t]||T.zh_Hans_CN||{};return void 0===o[e]?e:o[e]},o=y(),{nav:a}=k(o),r=z([{title:t("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:t("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]);return(e,n)=>{const l=R;return i(),c("div",B,[m("div",F,[n[0]||(n[0]=m("i",{class:"iconfont icon-wonhot"},null,-1)),m("p",I,u(t("万花筒工具箱")),1),m("div",L,[(i(!0),c(v,null,x(d(r),((e,t)=>(i(),c("div",{key:t,class:C(["nav-item",{active:e.val===d(a)}]),onClick:t=>{return a=e.val,o.setNav(a),void N().push("/");var a}},[m("i",{class:C([e.icon,e.val===d(a)?e.active:""])},null,2),m("span",null,u(e.title),1)],10,P)))),128))])]),n[1]||(n[1]=m("div",{class:"flex-1"},null,-1)),m("a",{href:e.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},u(t("没有找到工具？提_ff19")),9,X),s(l)])}}})}}}));
