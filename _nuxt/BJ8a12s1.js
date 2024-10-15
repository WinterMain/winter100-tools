import{G as B,H as Re,I as Ie,J as Z,K as Le,L as _e,M as ue,N as be,O as Ve,P as Fe,Q as $e,R as ze,S as He,r as S,T as Be,U as Pe,n as w,V as he,W as xe,q as ye,o as i,c as F,w as I,b as _,X as De,a as l,Y as y,d as e,Z as re,$ as Ye,D as x,E as M,a0 as Xe,j as v,F as R,a1 as je,a2 as Ke,a3 as Ue,a4 as We,a5 as Se,a6 as Ze,a7 as qe,x as q,a8 as Ge,a9 as Je,aa as ie,ab as Qe,ac as Ee,ad as P,ae as H,af as et,ag as Ne,ah as tt,ai as nt,aj as st,t as O,ak as ce,al as at,am as ot,an as lt,z as de,ao as me,ap as it,aq as rt,ar as ct,as as ut,at as Te,u as Ae,A as dt,au as mt}from"./ETL2Ph-G.js";import{d as ft}from"./B5iexJJX.js";import{u as vt}from"./CokT7RAc.js";import{u as Oe}from"./C5puGL26.js";import{_ as pt}from"./D8jo1q60.js";import{u as gt,_ as _t}from"./Co1aNXvv.js";const ht=(n,r)=>{if(!B||!n||!r)return!1;const a=n.getBoundingClientRect();let p;return r instanceof Element?p=r.getBoundingClientRect():p={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},a.top<p.bottom&&a.bottom>p.top&&a.right>p.left&&a.left<p.right};var yt="Expected a function";function ge(n,r,a){var p=!0,u=!0;if(typeof n!="function")throw new TypeError(yt);return Re(a)&&(p="leading"in a?!!a.leading:p,u="trailing"in a?!!a.trailing:u),ft(n,r,{leading:p,maxWait:r,trailing:u})}const kt=Ie({urlList:{type:Z(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),wt={close:()=>!0,switch:n=>_e(n),rotate:n=>_e(n)},bt=ue({name:"ElImageViewer"}),Ct=ue({...bt,props:kt,emits:wt,setup(n,{expose:r,emit:a}){var p;const u=n,g={CONTAIN:{name:"contain",icon:be(Ve)},ORIGINAL:{name:"original",icon:be(Fe)}},{t:E}=$e(),o=ze("image-viewer"),{nextZIndex:m}=He(),f=S(),d=S([]),c=Be(),z=S(!0),L=S(u.initialIndex),$=Pe(g.CONTAIN),k=S({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=S((p=u.zIndex)!=null?p:m()),Y=w(()=>{const{urlList:s}=u;return s.length<=1}),G=w(()=>L.value===0),J=w(()=>L.value===u.urlList.length-1),X=w(()=>u.urlList[L.value]),fe=w(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!u.infinite&&G.value)]),Q=w(()=>[o.e("btn"),o.e("next"),o.is("disabled",!u.infinite&&J.value)]),j=w(()=>{const{scale:s,deg:C,offsetX:h,offsetY:N,enableTransition:T}=k.value;let A=h/s,V=N/s;const W=C*Math.PI/180,ke=Math.cos(W),we=Math.sin(W);A=A*ke+V*we,V=V*ke-h/s*we;const pe={transform:"scale(".concat(s,") rotate(").concat(C,"deg) translate(").concat(A,"px, ").concat(V,"px)"),transition:T?"transform .3s":""};return $.value.name===g.CONTAIN.name&&(pe.maxWidth=pe.maxHeight="100%"),pe});function K(){ee(),a("close")}function ve(){const s=ge(h=>{switch(h.code){case H.esc:u.closeOnPressEscape&&K();break;case H.space:oe();break;case H.left:le();break;case H.up:b("zoomIn");break;case H.right:t();break;case H.down:b("zoomOut");break}}),C=ge(h=>{const N=h.deltaY||h.deltaX;b(N<0?"zoomIn":"zoomOut",{zoomRate:u.zoomRate,enableTransition:!1})});c.run(()=>{P(document,"keydown",s),P(document,"wheel",C)})}function ee(){c.stop()}function te(){z.value=!1}function ne(s){z.value=!1,s.target.alt=E("el.image.error")}function se(s){if(z.value||s.button!==0||!f.value)return;k.value.enableTransition=!1;const{offsetX:C,offsetY:h}=k.value,N=s.pageX,T=s.pageY,A=ge(W=>{k.value={...k.value,offsetX:C+W.pageX-N,offsetY:h+W.pageY-T}}),V=P(document,"mousemove",A);P(document,"mouseup",()=>{V()}),s.preventDefault()}function ae(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function oe(){if(z.value)return;const s=et(g),C=Object.values(g),h=$.value.name,T=(C.findIndex(A=>A.name===h)+1)%s.length;$.value=g[s[T]],ae()}function U(s){const C=u.urlList.length;L.value=(s+C)%C}function le(){G.value&&!u.infinite||U(L.value-1)}function t(){J.value&&!u.infinite||U(L.value+1)}function b(s,C={}){if(z.value)return;const{minScale:h,maxScale:N}=u,{zoomRate:T,rotateDeg:A,enableTransition:V}={zoomRate:u.zoomRate,rotateDeg:90,enableTransition:!0,...C};switch(s){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/T).toFixed(3)));break;case"zoomIn":k.value.scale<N&&(k.value.scale=Number.parseFloat((k.value.scale*T).toFixed(3)));break;case"clockwise":k.value.deg+=A,a("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=A,a("rotate",k.value.deg);break}k.value.enableTransition=V}return he(X,()=>{xe(()=>{const s=d.value[0];s!=null&&s.complete||(z.value=!0)})}),he(L,s=>{ae(),a("switch",s)}),ye(()=>{var s,C;ve(),(C=(s=f.value)==null?void 0:s.focus)==null||C.call(s)}),r({setActiveItem:U}),(s,C)=>(i(),F(e(Qe),{to:"body",disabled:!s.teleported},{default:I(()=>[_(De,{name:"viewer-fade",appear:""},{default:I(()=>[l("div",{ref_key:"wrapper",ref:f,tabindex:-1,class:y(e(o).e("wrapper")),style:re({zIndex:D.value})},[l("div",{class:y(e(o).e("mask")),onClick:Ye(h=>s.hideOnClickModal&&K(),["self"])},null,10,["onClick"]),x(" CLOSE "),l("span",{class:y([e(o).e("btn"),e(o).e("close")]),onClick:K},[_(e(M),null,{default:I(()=>[_(e(Xe))]),_:1})],2),x(" ARROW "),e(Y)?x("v-if",!0):(i(),v(R,{key:0},[l("span",{class:y(e(fe)),onClick:le},[_(e(M),null,{default:I(()=>[_(e(je))]),_:1})],2),l("span",{class:y(e(Q)),onClick:t},[_(e(M),null,{default:I(()=>[_(e(Ke))]),_:1})],2)],64)),x(" ACTIONS "),l("div",{class:y([e(o).e("btn"),e(o).e("actions")])},[l("div",{class:y(e(o).e("actions__inner"))},[_(e(M),{onClick:h=>b("zoomOut")},{default:I(()=>[_(e(Ue))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("zoomIn")},{default:I(()=>[_(e(We))]),_:1},8,["onClick"]),l("i",{class:y(e(o).e("actions__divider"))},null,2),_(e(M),{onClick:oe},{default:I(()=>[(i(),F(Se(e($).icon)))]),_:1}),l("i",{class:y(e(o).e("actions__divider"))},null,2),_(e(M),{onClick:h=>b("anticlockwise")},{default:I(()=>[_(e(Ze))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("clockwise")},{default:I(()=>[_(e(qe))]),_:1},8,["onClick"])],2)],2),x(" CANVAS "),l("div",{class:y(e(o).e("canvas"))},[(i(!0),v(R,null,q(s.urlList,(h,N)=>Ge((i(),v("img",{ref_for:!0,ref:T=>d.value[N]=T,key:h,src:h,style:re(e(j)),class:y(e(o).e("img")),crossorigin:s.crossorigin,onLoad:te,onError:ne,onMousedown:se},null,46,["src","crossorigin"])),[[Je,N===L.value]])),128))],2),ie(s.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var It=Ee(Ct,[["__file","image-viewer.vue"]]);const Lt=Ne(It),$t=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),zt={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>_e(n),close:()=>!0,show:()=>!0},xt=ue({name:"ElImage",inheritAttrs:!1}),St=ue({...xt,props:$t,emits:zt,setup(n,{emit:r}){const a=n;let p="";const{t:u}=$e(),g=ze("image"),E=tt(),o=w(()=>nt(Object.entries(E).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),m=vt({excludeListeners:!0,excludeKeys:w(()=>Object.keys(o.value))}),f=S(),d=S(!1),c=S(!0),z=S(!1),L=S(),$=S(),k=B&&"loading"in HTMLImageElement.prototype;let D,Y;const G=w(()=>[g.e("inner"),X.value&&g.e("preview"),c.value&&g.is("loading")]),J=w(()=>{const{fit:t}=a;return B&&t?{objectFit:t}:{}}),X=w(()=>{const{previewSrcList:t}=a;return Array.isArray(t)&&t.length>0}),fe=w(()=>{const{previewSrcList:t,initialIndex:b}=a;let s=b;return b>t.length-1&&(s=0),s}),Q=w(()=>a.loading==="eager"?!1:!k&&a.loading==="lazy"||a.lazy),j=()=>{B&&(c.value=!0,d.value=!1,f.value=a.src)};function K(t){c.value=!1,d.value=!1,r("load",t)}function ve(t){c.value=!1,d.value=!0,r("error",t)}function ee(){ht(L.value,$.value)&&(j(),se())}const te=st(ee,200,!0);async function ne(){var t;if(!B)return;await xe();const{scrollContainer:b}=a;at(b)?$.value=b:ot(b)&&b!==""?$.value=(t=document.querySelector(b))!=null?t:void 0:L.value&&($.value=lt(L.value)),$.value&&(D=P($,"scroll",te),setTimeout(()=>ee(),100))}function se(){!B||!$.value||!te||(D==null||D(),$.value=void 0)}function ae(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function oe(){X.value&&(Y=P("wheel",ae,{passive:!1}),p=document.body.style.overflow,document.body.style.overflow="hidden",z.value=!0,r("show"))}function U(){Y==null||Y(),document.body.style.overflow=p,z.value=!1,r("close")}function le(t){r("switch",t)}return he(()=>a.src,()=>{Q.value?(c.value=!0,d.value=!1,se(),ne()):j()}),ye(()=>{Q.value?ne():j()}),(t,b)=>(i(),v("div",ce({ref_key:"container",ref:L},e(o),{class:[e(g).b(),t.$attrs.class]}),[d.value?ie(t.$slots,"error",{key:0},()=>[l("div",{class:y(e(g).e("error"))},O(e(u)("el.image.error")),3)]):(i(),v(R,{key:1},[f.value!==void 0?(i(),v("img",ce({key:0},e(m),{src:f.value,loading:t.loading,style:e(J),class:e(G),crossorigin:t.crossorigin,onClick:oe,onLoad:K,onError:ve}),null,16,["src","loading","crossorigin"])):x("v-if",!0),c.value?(i(),v("div",{key:1,class:y(e(g).e("wrapper"))},[ie(t.$slots,"placeholder",{},()=>[l("div",{class:y(e(g).e("placeholder"))},null,2)])],2)):x("v-if",!0)],64)),e(X)?(i(),v(R,{key:2},[z.value?(i(),F(e(Lt),{key:0,"z-index":t.zIndex,"initial-index":e(fe),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:U,onSwitch:le},{default:I(()=>[t.$slots.viewer?(i(),v("div",{key:0},[ie(t.$slots,"viewer")])):x("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):x("v-if",!0)],64)):x("v-if",!0)],16))}});var Et=Ee(St,[["__file","image.vue"]]);const Nt=Ne(Et),Tt={class:"item-title"},At=["src"],Ot={key:1},Mt={class:"text-title"},Rt={class:"image-slot"},Vt={key:1,class:"text-tertiary d-text"},Ft={class:"item-title"},Ht=["src"],Bt={key:1},Pt={class:"text-title"},Dt={class:"item-des"},Me={__name:"FuncItem",props:{item:{type:Object,default:()=>{}},isTheme:{type:Boolean,default:!1}},setup(n){const r=n,a=de(),{likes:p}=me(a),u=w(()=>r.item.href?{is:"a",props:{href:r.item.href,target:"_blank",rel:"noopener noreferrer"}}:{is:it,props:{to:rt(r.item)}}),g=w(()=>{const o=r.item.name||r.item.title;return p.value.includes(o)}),E=o=>{o.stopPropagation(),o.preventDefault();const m=r.item.name||r.item.title,f=p.value.findIndex(c=>c===m),d=p.value.concat();f>=0?d.splice(f,1):d.push(m),a.setLikes(d)};return(o,m)=>{const f=M,d=Nt,c=ut;return i(),F(Se(e(u).is),ce(e(u).props,{class:["c-func-item",{"is-theme":n.isTheme}]}),{default:I(()=>[_(c,{placement:"bottom",width:320,offset:25,trigger:"hover",disabled:!n.item.image,persistent:!1,"popper-class":"popper-func-item","popper-style":o.$attrs},{reference:I(()=>[l("div",null,[l("div",Ft,[l("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(i(),v("img",{key:0,src:n.item.logo},null,8,Ht)):(i(),v("span",Bt,O(n.item.title[0].toUpperCase()),1))],2),l("span",Pt,O(n.item.title),1)]),l("p",Dt,O(n.item.description),1),l("i",{class:y(["iconfont for-store",e(g)?"icon-store":"icon-unstore"]),onClick:E},null,2)])]),default:I(()=>[l("div",ce(o.$attrs,{class:["popper-func-item-main",{"is-theme":n.isTheme}]}),[l("div",Tt,[l("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(i(),v("img",{key:0,src:n.item.logo},null,8,At)):(i(),v("span",Ot,O(n.item.title[0].toUpperCase()),1))],2),l("span",Mt,O(n.item.title),1)]),l("div",{class:y(["description-area",{"col-view":n.item.colView}])},[n.item.image?(i(),F(d,{key:0,src:n.item.image,class:"w-full"},{error:I(()=>[l("div",Rt,[_(f,null,{default:I(()=>[_(e(ct))]),_:1})])]),_:1},8,["src"])):x("",!0),n.item.description?(i(),v("p",Vt,O(n.item.description),1)):x("",!0)],2)],16)]),_:1},8,["disabled","popper-style"])]),_:1},16,["class"])}}},Yt={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},Xt={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},jt={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},Ce={en_US:Yt,zh_Hans_CN:Xt,zh_Hant_HK:jt},Kt={class:"c-common-like-func"},Ut={key:0,class:"empty"},Wt=["id"],Zt={class:"sub-items"},qt={__name:"LikeFunc",setup(n){const r=m=>{const d=Ae().$lang.value||"zh_Hans_CN",c=Ce[d]||Ce.zh_Hans_CN||{};return c[m]===void 0?m:c[m]},{menus:a}=Oe(),p=de(),{category:u,likes:g}=me(p);Te();const E=w(()=>g.value.reduce((m,f)=>(m[f]=!0,m),{})),o=w(()=>{const m=[];for(let f=0;f<a.length;f++){const d=[];a[f].subMenus.forEach(c=>{const z=c.name||c.title;E.value[z]&&d.push(c)}),d.length>0&&m.push({...a[f],subMenus:d})}return m});return(m,f)=>{const d=Me;return i(),v("div",Kt,[e(o).length===0?(i(),v("div",Ut,[f[0]||(f[0]=l("img",{src:pt},null,-1)),l("p",null,O(r("还没有收藏，快去_e17e")),1)])):x("",!0),(i(!0),v(R,null,q(e(o),(c,z)=>(i(),v("div",{key:z,class:"category"},[l("p",{id:c.name,class:y(["title",{active:c.name===e(u)}])},O(c.title),11,Wt),l("div",Zt,[(i(!0),v(R,null,q(c.subMenus,(L,$)=>(i(),F(d,{key:$,item:L,style:re({"--bg-color":c.color,"--logo-color":c.logoColor}),"is-theme":c.isTheme},null,8,["item","style","is-theme"]))),128))])]))),128))])}}},Gt={class:"c-common-all-func"},Jt=["id"],Qt={class:"sub-items"},en={__name:"AllFunc",setup(n){const{menus:r}=Oe(),a=de(),{category:p}=me(a),u=Te();return ye(()=>{const g=u.hash.slice(1).toLowerCase();if(g){const E=document.getElementById(g);E&&E.scrollIntoView()}else a.setCategory("")}),(g,E)=>{const o=Me;return i(),v("div",Gt,[(i(!0),v(R,null,q(e(r),(m,f)=>(i(),v("div",{key:f,class:"category"},[l("div",{id:m.name,class:"anchor"},null,8,Jt),l("p",{class:y(["title",{active:m.name===e(p)}])},O(m.title),3),l("div",Qt,[(i(!0),v(R,null,q(m.subMenus,(d,c)=>(i(),v(R,{key:c},[!d.brand||d.brand.includes(g.$brandName)?(i(),F(o,{key:0,item:d,class:y({"small-size":d.title.length>18}),style:re({"--bg-color":m.color,"--logo-color":m.logoColor}),"is-theme":m.isTheme},null,8,["item","class","style","is-theme"])):x("",!0)],64))),128))])]))),128))])}}},tn={class:"p-index"},nn={key:0,class:"page-stage pb-60"},sn={class:"left-content"},an={class:"fixed-area"},on={class:"right-content"},fn={__name:"index",setup(n){const r=Ae(),a=S();gt(a),dt({title:r.$brand.name,ogTitle:r.$brand.name,description:r.$brand.description,ogDescription:r.$brand.description});const p=de(),{nav:u}=me(p);return(g,E)=>{const o=qt,m=_t,f=mt,d=en;return i(),v("div",tn,[e(u)==="like"?(i(),v("div",nn,[_(o)])):(i(),v("div",{key:1,ref_key:"container",ref:a,class:"page-container pt-30 pb-60"},[l("div",sn,[l("div",an,[_(m),_(f)])]),l("div",on,[_(d)])],512))])}}};export{fn as default};
