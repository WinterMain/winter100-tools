System.register(["./DJLEEBS8-legacy.js","./BEt_WA6M-legacy.js","./CuZw9rr7-legacy.js","./L_YpumfZ-legacy.js"],(function(e,t){"use strict";var o,a,n,r,l,i,c,s,p,d,g,m,h,v,x,u,f,w,b,_,y,k,z,C,N,H,S;return{setters:[e=>{o=e.E},e=>{a=e.r,n=e.L,r=e.c_,l=e.a,i=e.D,c=e.d,s=e.w,p=e.e,d=e.c$,g=e.b,m=e.a3,h=e.ac,v=e.ab,x=e.t,u=e.c,f=e.aO,w=e.u,b=e.aN,_=e.aQ,y=e.an,k=e.a9,z=e.$,C=e.F,N=e.bi},e=>{H=e.u},e=>{S=e._}],execute:function(){var t=document.createElement("style");t.textContent=".c-search-tool .el-input{height:30px}.c-search-tool .el-input .el-input__wrapper{--tw-border-opacity:1;border-color:rgb(213 217 221/var(--tw-border-opacity))}.c-search-tool .el-input .el-input__wrapper,.c-search-tool .el-input .el-input__wrapper .el-input__inner{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.c-search-tool .el-input .el-input__prefix{padding-left:0!important}.c-search-tool .el-input .el-input__inner{padding-right:0!important}@media (max-width:767px){.c-search-tool{margin-top:12px}.c-search-tool .el-input{width:100%!important}}.c-search-tool-popover .search-list{margin-left:-8px;margin-right:-8px;max-height:300px;overflow-y:auto}.c-search-tool-popover .search-list .search-item{border-bottom-width:1px;border-color:#eff1f5;cursor:pointer;display:block;overflow-x:hidden;padding:8px;text-overflow:ellipsis;white-space:nowrap}.c-search-tool-popover .search-list .search-item p{overflow:hidden;text-overflow:ellipsis}.c-search-tool-popover .search-list .search-item:last-child{border-bottom-width:0}.c-search-tool-popover .search-list .search-item:hover{border-radius:8px;--tw-bg-opacity:1;background-color:rgb(239 241 245/var(--tw-bg-opacity))}.c-search-tool-popover .search-list .empty{height:80px;margin:auto;width:80px}@media (max-width:767px){.c-search-tool-popover{width:calc(100% - 40px)!important}}.c-common-slogan{align-items:center;display:flex;margin-bottom:-12px;margin-left:auto;margin-right:auto;overflow-x:hidden;padding-top:20px;width:1200px}.c-common-slogan .icon-wonhot{font-size:20px;line-height:28px;--tw-text-opacity:1;animation:hue 6s infinite;color:rgb(237 61 161/var(--tw-text-opacity))}.c-common-slogan .slogan-text{color:#22262a;font-size:18px;line-height:26px;margin-left:8px}.c-common-slogan .slogan-nav{align-items:center;display:flex;margin-left:60px}.c-common-slogan .slogan-nav>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(20px*(1 - var(--tw-space-x-reverse)));margin-right:calc(20px*var(--tw-space-x-reverse))}.c-common-slogan .slogan-nav{color:#5e6773;padding-bottom:4px;padding-top:4px}.c-common-slogan .slogan-nav .nav-item{cursor:pointer}.c-common-slogan .slogan-nav .nav-item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(4px*(1 - var(--tw-space-x-reverse)));margin-right:calc(4px*var(--tw-space-x-reverse))}.c-common-slogan .slogan-nav .nav-item{background-color:transparent;border-color:transparent;border-radius:10px;border-width:1px;padding:4px 8px}.c-common-slogan .slogan-nav .nav-item.active{border-width:1px;--tw-bg-opacity:1;background-color:rgb(213 217 221/var(--tw-bg-opacity));font-weight:500}.c-common-slogan .no-tool{font-size:12px;line-height:20px;--tw-text-opacity:1;color:rgb(237 61 161/var(--tw-text-opacity));opacity:.7}@keyframes hue{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@media (max-width:767px){.c-common-slogan{display:block;overflow:hidden;padding-bottom:16px;padding-left:20px;padding-right:20px;position:relative;width:100%}.c-common-slogan .slogan-text{font-size:14px;line-height:22px}.c-common-slogan .slogan-nav{display:flex;flex:1 1 0%;justify-content:flex-end;margin-left:0}.c-common-slogan .slogan-nav>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(4px*(1 - var(--tw-space-x-reverse)));margin-right:calc(4px*var(--tw-space-x-reverse))}.c-common-slogan .slogan-nav .nav-item{padding:2px 4px}.c-common-slogan .no-tool{bottom:-17px;margin:8px;padding-bottom:4px;padding-top:4px;position:absolute;right:0}}\n",document.head.appendChild(t);const j={en_US:{"搜索":"Search"},zh_Hans_CN:{"搜索":"搜索"},zh_Hant_HK:{"搜索":"搜索"}},$={class:"c-search-tool"},U={class:"search-list"},E={key:0,class:"empty",src:S},K=["href"],M={class:"font-w500 text-primary"},V={class:"description text-12 text-tertiary"},q={class:"font-w500 text-primary"},A={class:"description text-12 text-tertiary"},F={__name:"SearchTool",setup(e){const t=e=>{const t=w().$lang.value||"zh_Hans_CN",o=j[t]||j.zh_Hans_CN||{};return void 0===o[e]?e:o[e]},y=a(""),k=a(!1),{menus:z}=H(),C=n((()=>{const e=[];for(let t=0;t<z.length;t++)z[t].subMenus.forEach((t=>{e.push(t)}));return e})),N=n((()=>(r(y.value),y.value?C.value.filter((e=>r(e.title).includes(y.value)||r(e.description).includes(y.value))):C.value)));return(e,a)=>{const n=o,r=b,w=_;return l(),i("div",$,[c(w,{visible:k.value,"onUpdate:visible":a[3]||(a[3]=e=>k.value=e),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"click","show-arrow":!1},{reference:s((()=>[c(n,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),style:{width:"240px"},size:"small",placeholder:t("搜索"),"prefix-icon":p(d)},null,8,["modelValue","placeholder","prefix-icon"])])),default:s((()=>[g("div",U,[0===p(N).length?(l(),i("img",E)):m("",!0),(l(!0),i(h,null,v(p(N),((t,o)=>(l(),i(h,{key:o},[t.href?(l(),i("a",{key:0,href:t.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:a[1]||(a[1]=e=>k.value=!1)},[g("p",M,x(t.title),1),g("p",V,x(t.description),1)],8,K)):(l(),u(r,{key:1,class:"search-item",to:("getRouteName"in e?e.getRouteName:p(f))(t),onClick:a[2]||(a[2]=e=>k.value=!1)},{default:s((()=>[g("p",q,x(t.title),1),g("p",A,x(t.description),1)])),_:2},1032,["to"]))],64)))),128))])])),_:1},8,["visible"])])}}},R={en_US:{"万花筒工具箱":"A Kaleidoscope Toolbox","全部":"All","我的收藏":"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},zh_Hans_CN:{"万花筒工具箱":"万花筒工具箱","全部":"全部","我的收藏":"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},zh_Hant_HK:{"万花筒工具箱":"萬花筒工具箱","全部":"全部","我的收藏":"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"}},T={class:"c-common-slogan"},D={class:"flex items-center"},L={class:"slogan-text"},O={class:"slogan-nav"},Q=["onClick"],B=["href"];e("_",{__name:"Slogan",setup(e){const t=e=>{const t=w().$lang.value||"zh_Hans_CN",o=R[t]||R.zh_Hans_CN||{};return void 0===o[e]?e:o[e]},o=y(),{nav:a}=k(o),n=z([{title:t("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:t("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]);return(e,r)=>{const s=F;return l(),i("div",T,[g("div",D,[r[0]||(r[0]=g("i",{class:"iconfont icon-wonhot"},null,-1)),g("p",L,x(t("万花筒工具箱")),1),g("div",O,[(l(!0),i(h,null,v(p(n),((e,t)=>(l(),i("div",{key:t,class:C(["nav-item",{active:e.val===p(a)}]),onClick:t=>{return a=e.val,o.setNav(a),void N().push("/");var a}},[g("i",{class:C([e.icon,e.val===p(a)?e.active:""])},null,2),g("span",null,x(e.title),1)],10,Q)))),128))])]),r[1]||(r[1]=g("div",{class:"flex-1"},null,-1)),g("a",{href:e.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},x(t("没有找到工具？提_ff19")),9,B),c(s)])}}})}}}));
