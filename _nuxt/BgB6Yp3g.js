import{aq as B,ar as Re,k as Ie,l as G,m as Le,X as _e,n as ue,as as be,at as Fe,au as He,av as ze,y as $e,aw as Ve,r as x,ax as Be,s as Pe,L as w,z as he,A as Se,o as ye,a as i,c as H,w as I,d as _,ay as De,b as l,F as y,e,G as re,az as Xe,a3 as S,E as M,P as Ye,D as v,ac as R,N as Ke,O as je,aA as We,aB as Ue,aC as xe,aD as Ge,ad as Ze,ab as Z,a1 as qe,a2 as Qe,S as ie,aE as Je,H as Ee,aF as P,Q as V,aG as et,a4 as Ne,aH as tt,aI as nt,aJ as st,t as O,aK as ce,aL as at,W as ot,aM as lt,an as de,a9 as me,aN as it,aO as rt,aP as ct,aQ as ut,aR as Te,u as Ae,ao as dt,aS as mt}from"./B-QOD2V0.js";import{d as ft}from"./BIomoyrG.js";import{u as vt}from"./DAHZR6uB.js";import{u as Oe}from"./ChrII4EK.js";import{_ as pt}from"./Vkcgyatk.js";import{u as gt,_ as _t}from"./B5nNN18o.js";const ht=(n,r)=>{if(!B||!n||!r)return!1;const a=n.getBoundingClientRect();let p;return r instanceof Element?p=r.getBoundingClientRect():p={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},a.top<p.bottom&&a.bottom>p.top&&a.right>p.left&&a.left<p.right};var yt="Expected a function";function ge(n,r,a){var p=!0,u=!0;if(typeof n!="function")throw new TypeError(yt);return Re(a)&&(p="leading"in a?!!a.leading:p,u="trailing"in a?!!a.trailing:u),ft(n,r,{leading:p,maxWait:r,trailing:u})}const kt=Ie({urlList:{type:G(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:G(String)}}),wt={close:()=>!0,switch:n=>_e(n),rotate:n=>_e(n)},bt=ue({name:"ElImageViewer"}),Ct=ue({...bt,props:kt,emits:wt,setup(n,{expose:r,emit:a}){var p;const u=n,g={CONTAIN:{name:"contain",icon:be(Fe)},ORIGINAL:{name:"original",icon:be(He)}},{t:E}=ze(),o=$e("image-viewer"),{nextZIndex:m}=Ve(),f=x(),d=x([]),c=Be(),$=x(!0),L=x(u.initialIndex),z=Pe(g.CONTAIN),k=x({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=x((p=u.zIndex)!=null?p:m()),X=w(()=>{const{urlList:s}=u;return s.length<=1}),q=w(()=>L.value===0),Q=w(()=>L.value===u.urlList.length-1),Y=w(()=>u.urlList[L.value]),fe=w(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!u.infinite&&q.value)]),J=w(()=>[o.e("btn"),o.e("next"),o.is("disabled",!u.infinite&&Q.value)]),K=w(()=>{const{scale:s,deg:C,offsetX:h,offsetY:N,enableTransition:T}=k.value;let A=h/s,F=N/s;const U=C*Math.PI/180,ke=Math.cos(U),we=Math.sin(U);A=A*ke+F*we,F=F*ke-h/s*we;const pe={transform:"scale(".concat(s,") rotate(").concat(C,"deg) translate(").concat(A,"px, ").concat(F,"px)"),transition:T?"transform .3s":""};return z.value.name===g.CONTAIN.name&&(pe.maxWidth=pe.maxHeight="100%"),pe});function j(){ee(),a("close")}function ve(){const s=ge(h=>{switch(h.code){case V.esc:u.closeOnPressEscape&&j();break;case V.space:oe();break;case V.left:le();break;case V.up:b("zoomIn");break;case V.right:t();break;case V.down:b("zoomOut");break}}),C=ge(h=>{const N=h.deltaY||h.deltaX;b(N<0?"zoomIn":"zoomOut",{zoomRate:u.zoomRate,enableTransition:!1})});c.run(()=>{P(document,"keydown",s),P(document,"wheel",C)})}function ee(){c.stop()}function te(){$.value=!1}function ne(s){$.value=!1,s.target.alt=E("el.image.error")}function se(s){if($.value||s.button!==0||!f.value)return;k.value.enableTransition=!1;const{offsetX:C,offsetY:h}=k.value,N=s.pageX,T=s.pageY,A=ge(U=>{k.value={...k.value,offsetX:C+U.pageX-N,offsetY:h+U.pageY-T}}),F=P(document,"mousemove",A);P(document,"mouseup",()=>{F()}),s.preventDefault()}function ae(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function oe(){if($.value)return;const s=et(g),C=Object.values(g),h=z.value.name,T=(C.findIndex(A=>A.name===h)+1)%s.length;z.value=g[s[T]],ae()}function W(s){const C=u.urlList.length;L.value=(s+C)%C}function le(){q.value&&!u.infinite||W(L.value-1)}function t(){Q.value&&!u.infinite||W(L.value+1)}function b(s,C={}){if($.value)return;const{minScale:h,maxScale:N}=u,{zoomRate:T,rotateDeg:A,enableTransition:F}={zoomRate:u.zoomRate,rotateDeg:90,enableTransition:!0,...C};switch(s){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/T).toFixed(3)));break;case"zoomIn":k.value.scale<N&&(k.value.scale=Number.parseFloat((k.value.scale*T).toFixed(3)));break;case"clockwise":k.value.deg+=A,a("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=A,a("rotate",k.value.deg);break}k.value.enableTransition=F}return he(Y,()=>{Se(()=>{const s=d.value[0];s!=null&&s.complete||($.value=!0)})}),he(L,s=>{ae(),a("switch",s)}),ye(()=>{var s,C;ve(),(C=(s=f.value)==null?void 0:s.focus)==null||C.call(s)}),r({setActiveItem:W}),(s,C)=>(i(),H(e(Je),{to:"body",disabled:!s.teleported},{default:I(()=>[_(De,{name:"viewer-fade",appear:""},{default:I(()=>[l("div",{ref_key:"wrapper",ref:f,tabindex:-1,class:y(e(o).e("wrapper")),style:re({zIndex:D.value})},[l("div",{class:y(e(o).e("mask")),onClick:Xe(h=>s.hideOnClickModal&&j(),["self"])},null,10,["onClick"]),S(" CLOSE "),l("span",{class:y([e(o).e("btn"),e(o).e("close")]),onClick:j},[_(e(M),null,{default:I(()=>[_(e(Ye))]),_:1})],2),S(" ARROW "),e(X)?S("v-if",!0):(i(),v(R,{key:0},[l("span",{class:y(e(fe)),onClick:le},[_(e(M),null,{default:I(()=>[_(e(Ke))]),_:1})],2),l("span",{class:y(e(J)),onClick:t},[_(e(M),null,{default:I(()=>[_(e(je))]),_:1})],2)],64)),S(" ACTIONS "),l("div",{class:y([e(o).e("btn"),e(o).e("actions")])},[l("div",{class:y(e(o).e("actions__inner"))},[_(e(M),{onClick:h=>b("zoomOut")},{default:I(()=>[_(e(We))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("zoomIn")},{default:I(()=>[_(e(Ue))]),_:1},8,["onClick"]),l("i",{class:y(e(o).e("actions__divider"))},null,2),_(e(M),{onClick:oe},{default:I(()=>[(i(),H(xe(e(z).icon)))]),_:1}),l("i",{class:y(e(o).e("actions__divider"))},null,2),_(e(M),{onClick:h=>b("anticlockwise")},{default:I(()=>[_(e(Ge))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("clockwise")},{default:I(()=>[_(e(Ze))]),_:1},8,["onClick"])],2)],2),S(" CANVAS "),l("div",{class:y(e(o).e("canvas"))},[(i(!0),v(R,null,Z(s.urlList,(h,N)=>qe((i(),v("img",{ref_for:!0,ref:T=>d.value[N]=T,key:h,src:h,style:re(e(K)),class:y(e(o).e("img")),crossorigin:s.crossorigin,onLoad:te,onError:ne,onMousedown:se},null,46,["src","crossorigin"])),[[Qe,N===L.value]])),128))],2),ie(s.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var It=Ee(Ct,[["__file","image-viewer.vue"]]);const Lt=Ne(It),zt=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:G([String,Object])},previewSrcList:{type:G(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:G(String)}}),$t={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>_e(n),close:()=>!0,show:()=>!0},St=ue({name:"ElImage",inheritAttrs:!1}),xt=ue({...St,props:zt,emits:$t,setup(n,{emit:r}){const a=n;let p="";const{t:u}=ze(),g=$e("image"),E=tt(),o=w(()=>nt(Object.entries(E).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),m=vt({excludeListeners:!0,excludeKeys:w(()=>Object.keys(o.value))}),f=x(),d=x(!1),c=x(!0),$=x(!1),L=x(),z=x(),k=B&&"loading"in HTMLImageElement.prototype;let D,X;const q=w(()=>[g.e("inner"),Y.value&&g.e("preview"),c.value&&g.is("loading")]),Q=w(()=>{const{fit:t}=a;return B&&t?{objectFit:t}:{}}),Y=w(()=>{const{previewSrcList:t}=a;return Array.isArray(t)&&t.length>0}),fe=w(()=>{const{previewSrcList:t,initialIndex:b}=a;let s=b;return b>t.length-1&&(s=0),s}),J=w(()=>a.loading==="eager"?!1:!k&&a.loading==="lazy"||a.lazy),K=()=>{B&&(c.value=!0,d.value=!1,f.value=a.src)};function j(t){c.value=!1,d.value=!1,r("load",t)}function ve(t){c.value=!1,d.value=!0,r("error",t)}function ee(){ht(L.value,z.value)&&(K(),se())}const te=st(ee,200,!0);async function ne(){var t;if(!B)return;await Se();const{scrollContainer:b}=a;at(b)?z.value=b:ot(b)&&b!==""?z.value=(t=document.querySelector(b))!=null?t:void 0:L.value&&(z.value=lt(L.value)),z.value&&(D=P(z,"scroll",te),setTimeout(()=>ee(),100))}function se(){!B||!z.value||!te||(D==null||D(),z.value=void 0)}function ae(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function oe(){Y.value&&(X=P("wheel",ae,{passive:!1}),p=document.body.style.overflow,document.body.style.overflow="hidden",$.value=!0,r("show"))}function W(){X==null||X(),document.body.style.overflow=p,$.value=!1,r("close")}function le(t){r("switch",t)}return he(()=>a.src,()=>{J.value?(c.value=!0,d.value=!1,se(),ne()):K()}),ye(()=>{J.value?ne():K()}),(t,b)=>(i(),v("div",ce({ref_key:"container",ref:L},e(o),{class:[e(g).b(),t.$attrs.class]}),[d.value?ie(t.$slots,"error",{key:0},()=>[l("div",{class:y(e(g).e("error"))},O(e(u)("el.image.error")),3)]):(i(),v(R,{key:1},[f.value!==void 0?(i(),v("img",ce({key:0},e(m),{src:f.value,loading:t.loading,style:e(Q),class:e(q),crossorigin:t.crossorigin,onClick:oe,onLoad:j,onError:ve}),null,16,["src","loading","crossorigin"])):S("v-if",!0),c.value?(i(),v("div",{key:1,class:y(e(g).e("wrapper"))},[ie(t.$slots,"placeholder",{},()=>[l("div",{class:y(e(g).e("placeholder"))},null,2)])],2)):S("v-if",!0)],64)),e(Y)?(i(),v(R,{key:2},[$.value?(i(),H(e(Lt),{key:0,"z-index":t.zIndex,"initial-index":e(fe),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:W,onSwitch:le},{default:I(()=>[t.$slots.viewer?(i(),v("div",{key:0},[ie(t.$slots,"viewer")])):S("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):S("v-if",!0)],64)):S("v-if",!0)],16))}});var Et=Ee(xt,[["__file","image.vue"]]);const Nt=Ne(Et),Tt={class:"item-title"},At=["src"],Ot={key:1},Mt={class:"text-title"},Rt={class:"image-slot"},Ft={key:1,class:"text-tertiary d-text"},Ht={class:"item-title"},Vt=["src"],Bt={key:1},Pt={class:"text-title"},Dt={class:"item-des"},Me={__name:"FuncItem",props:{item:{type:Object,default:()=>{}},isTheme:{type:Boolean,default:!1}},setup(n){const r=n,a=de(),{likes:p}=me(a),u=w(()=>r.item.href?{is:"a",props:{href:r.item.href,target:"_blank",rel:"noopener noreferrer"}}:{is:it,props:{to:rt(r.item)}}),g=w(()=>{const o=r.item.name||r.item.title;return p.value.includes(o)}),E=o=>{o.stopPropagation(),o.preventDefault();const m=r.item.name||r.item.title,f=p.value.findIndex(c=>c===m),d=p.value.concat();f>=0?d.splice(f,1):d.push(m),a.setLikes(d)};return(o,m)=>{const f=M,d=Nt,c=ut;return i(),H(xe(e(u).is),ce(e(u).props,{class:["c-func-item",{"is-theme":n.isTheme}]}),{default:I(()=>[_(c,{placement:"bottom",width:320,offset:25,trigger:"hover",disabled:!n.item.image,persistent:!1,"popper-class":"popper-func-item","popper-style":o.$attrs},{reference:I(()=>[l("div",null,[l("div",Ht,[l("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(i(),v("img",{key:0,src:n.item.logo},null,8,Vt)):(i(),v("span",Bt,O(n.item.title[0].toUpperCase()),1))],2),l("span",Pt,O(n.item.title),1)]),l("p",Dt,O(n.item.description),1),l("i",{class:y(["iconfont for-store",e(g)?"icon-store":"icon-unstore"]),onClick:E},null,2)])]),default:I(()=>[l("div",ce(o.$attrs,{class:["popper-func-item-main",{"is-theme":n.isTheme}]}),[l("div",Tt,[l("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(i(),v("img",{key:0,src:n.item.logo},null,8,At)):(i(),v("span",Ot,O(n.item.title[0].toUpperCase()),1))],2),l("span",Mt,O(n.item.title),1)]),l("div",{class:y(["description-area",{"col-view":n.item.colView}])},[n.item.image?(i(),H(d,{key:0,src:n.item.image,class:"w-full"},{error:I(()=>[l("div",Rt,[_(f,null,{default:I(()=>[_(e(ct))]),_:1})])]),_:1},8,["src"])):S("",!0),n.item.description?(i(),v("p",Ft,O(n.item.description),1)):S("",!0)],2)],16)]),_:1},8,["disabled","popper-style"])]),_:1},16,["class"])}}},Xt={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},Yt={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},Kt={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},Ce={en_US:Xt,zh_Hans_CN:Yt,zh_Hant_HK:Kt},jt={class:"c-common-like-func"},Wt={key:0,class:"empty"},Ut=["id"],Gt={class:"sub-items"},Zt={__name:"LikeFunc",setup(n){const r=m=>{const d=Ae().$lang.value||"zh_Hans_CN",c=Ce[d]||Ce.zh_Hans_CN||{};return c[m]===void 0?m:c[m]},{menus:a}=Oe(),p=de(),{category:u,likes:g}=me(p);Te();const E=w(()=>g.value.reduce((m,f)=>(m[f]=!0,m),{})),o=w(()=>{const m=[];for(let f=0;f<a.length;f++){const d=[];a[f].subMenus.forEach(c=>{const $=c.name||c.title;E.value[$]&&d.push(c)}),d.length>0&&m.push({...a[f],subMenus:d})}return m});return(m,f)=>{const d=Me;return i(),v("div",jt,[e(o).length===0?(i(),v("div",Wt,[f[0]||(f[0]=l("img",{src:pt},null,-1)),l("p",null,O(r("还没有收藏，快去_e17e")),1)])):S("",!0),(i(!0),v(R,null,Z(e(o),(c,$)=>(i(),v("div",{key:$,class:"category"},[l("p",{id:c.name,class:y(["title",{active:c.name===e(u)}])},O(c.title),11,Ut),l("div",Gt,[(i(!0),v(R,null,Z(c.subMenus,(L,z)=>(i(),H(d,{key:z,item:L,style:re({"--bg-color":c.color,"--logo-color":c.logoColor}),"is-theme":c.isTheme},null,8,["item","style","is-theme"]))),128))])]))),128))])}}},qt={class:"c-common-all-func"},Qt=["id"],Jt={class:"sub-items"},en={__name:"AllFunc",setup(n){const{menus:r}=Oe(),a=de(),{category:p}=me(a),u=Te();return ye(()=>{const g=u.hash.slice(1).toLowerCase();if(g){const E=document.getElementById(g);E&&E.scrollIntoView()}else a.setCategory("")}),(g,E)=>{const o=Me;return i(),v("div",qt,[(i(!0),v(R,null,Z(e(r),(m,f)=>(i(),v("div",{key:f,class:"category"},[l("div",{id:m.name,class:"anchor"},null,8,Qt),l("p",{class:y(["title",{active:m.name===e(p)}])},O(m.title),3),l("div",Jt,[(i(!0),v(R,null,Z(m.subMenus,(d,c)=>(i(),v(R,{key:c},[!d.brand||d.brand.includes(g.$brandName)?(i(),H(o,{key:0,item:d,class:y({"small-size":d.title.length>18}),style:re({"--bg-color":m.color,"--logo-color":m.logoColor}),"is-theme":m.isTheme},null,8,["item","class","style","is-theme"])):S("",!0)],64))),128))])]))),128))])}}},tn={class:"p-index"},nn={key:0,class:"page-stage pb-60"},sn={class:"left-content"},an={class:"fixed-area"},on={class:"right-content"},fn={__name:"index",setup(n){const r=Ae(),a=x();gt(a),dt({title:r.$brand.name,ogTitle:r.$brand.name,description:r.$brand.description,ogDescription:r.$brand.description});const p=de(),{nav:u}=me(p);return(g,E)=>{const o=Zt,m=_t,f=mt,d=en;return i(),v("div",tn,[e(u)==="like"?(i(),v("div",nn,[_(o)])):(i(),v("div",{key:1,ref_key:"container",ref:a,class:"page-container pt-30 pb-60"},[l("div",sn,[l("div",an,[_(m),_(f)])]),l("div",on,[_(d)])],512))])}}};export{fn as default};
