import{_ as Re}from"./opOlbjla.js";import{l as H,m as Fe,n as Ie,q as Z,v as Le,x as _e,y as ue,z as be,A as Ve,B as Be,C as $e,D as ze,G as He,r as E,H as Pe,I as De,J as w,K as he,L as xe,M as ye,o as l,e as V,w as I,b as _,T as Ye,a as i,N as y,f as e,O as re,P as Xe,k as x,E as M,Q as je,c as v,F as R,R as Ke,S as Ue,U as We,V as Ze,W as Se,X as qe,Y as Ge,j as q,Z as Je,$ as Qe,a0 as ie,a1 as Ee,a2 as P,a3 as B,a4 as et,a5 as Ne,a6 as tt,a7 as nt,a8 as st,t as O,a9 as ce,aa as ot,ab as at,ac as de,ad as lt,ae as Te,u as Ae}from"./CM6sNaJg.js";import{E as it}from"./Cl_RHiaA.js";import{d as rt}from"./BDtCPg9z.js";import{u as ct}from"./feKY90yR.js";import{g as ut}from"./hJQv79V4.js";import{E as dt}from"./CrFDMAT5.js";import{u as me,g as mt,a as ft}from"./DBvRdj0v.js";import{u as Oe}from"./BKeiBsLc.js";import{_ as vt,a as pt}from"./BsWZ4yHn.js";import{_ as gt}from"./Dw5N4cCG.js";import"./BLneWbPv.js";import"./JAUZZBS7.js";import"./q9ARtzS4.js";const _t=(n,r)=>{if(!H||!n||!r)return!1;const o=n.getBoundingClientRect();let p;return r instanceof Element?p=r.getBoundingClientRect():p={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},o.top<p.bottom&&o.bottom>p.top&&o.right>p.left&&o.left<p.right};var ht="Expected a function";function ge(n,r,o){var p=!0,u=!0;if(typeof n!="function")throw new TypeError(ht);return Fe(o)&&(p="leading"in o?!!o.leading:p,u="trailing"in o?!!o.trailing:u),rt(n,r,{leading:p,maxWait:r,trailing:u})}const yt=Ie({urlList:{type:Z(Array),default:()=>Le([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),kt={close:()=>!0,switch:n=>_e(n),rotate:n=>_e(n)},wt=ue({name:"ElImageViewer"}),bt=ue({...wt,props:yt,emits:kt,setup(n,{expose:r,emit:o}){var p;const u=n,g={CONTAIN:{name:"contain",icon:be(Ve)},ORIGINAL:{name:"original",icon:be(Be)}},{t:S}=$e(),a=ze("image-viewer"),{nextZIndex:d}=He(),m=E(),f=E([]),c=Pe(),z=E(!0),L=E(u.initialIndex),$=De(g.CONTAIN),k=E({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=E((p=u.zIndex)!=null?p:d()),Y=w(()=>{const{urlList:s}=u;return s.length<=1}),G=w(()=>L.value===0),J=w(()=>L.value===u.urlList.length-1),X=w(()=>u.urlList[L.value]),fe=w(()=>[a.e("btn"),a.e("prev"),a.is("disabled",!u.infinite&&G.value)]),Q=w(()=>[a.e("btn"),a.e("next"),a.is("disabled",!u.infinite&&J.value)]),j=w(()=>{const{scale:s,deg:C,offsetX:h,offsetY:N,enableTransition:T}=k.value;let A=h/s,F=N/s;const W=C*Math.PI/180,ke=Math.cos(W),we=Math.sin(W);A=A*ke+F*we,F=F*ke-h/s*we;const pe={transform:"scale(".concat(s,") rotate(").concat(C,"deg) translate(").concat(A,"px, ").concat(F,"px)"),transition:T?"transform .3s":""};return $.value.name===g.CONTAIN.name&&(pe.maxWidth=pe.maxHeight="100%"),pe});function K(){ee(),o("close")}function ve(){const s=ge(h=>{switch(h.code){case B.esc:u.closeOnPressEscape&&K();break;case B.space:ae();break;case B.left:le();break;case B.up:b("zoomIn");break;case B.right:t();break;case B.down:b("zoomOut");break}}),C=ge(h=>{const N=h.deltaY||h.deltaX;b(N<0?"zoomIn":"zoomOut",{zoomRate:u.zoomRate,enableTransition:!1})});c.run(()=>{P(document,"keydown",s),P(document,"wheel",C)})}function ee(){c.stop()}function te(){z.value=!1}function ne(s){z.value=!1,s.target.alt=S("el.image.error")}function se(s){if(z.value||s.button!==0||!m.value)return;k.value.enableTransition=!1;const{offsetX:C,offsetY:h}=k.value,N=s.pageX,T=s.pageY,A=ge(W=>{k.value={...k.value,offsetX:C+W.pageX-N,offsetY:h+W.pageY-T}}),F=P(document,"mousemove",A);P(document,"mouseup",()=>{F()}),s.preventDefault()}function oe(){k.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ae(){if(z.value)return;const s=et(g),C=Object.values(g),h=$.value.name,T=(C.findIndex(A=>A.name===h)+1)%s.length;$.value=g[s[T]],oe()}function U(s){const C=u.urlList.length;L.value=(s+C)%C}function le(){G.value&&!u.infinite||U(L.value-1)}function t(){J.value&&!u.infinite||U(L.value+1)}function b(s,C={}){if(z.value)return;const{minScale:h,maxScale:N}=u,{zoomRate:T,rotateDeg:A,enableTransition:F}={zoomRate:u.zoomRate,rotateDeg:90,enableTransition:!0,...C};switch(s){case"zoomOut":k.value.scale>h&&(k.value.scale=Number.parseFloat((k.value.scale/T).toFixed(3)));break;case"zoomIn":k.value.scale<N&&(k.value.scale=Number.parseFloat((k.value.scale*T).toFixed(3)));break;case"clockwise":k.value.deg+=A,o("rotate",k.value.deg);break;case"anticlockwise":k.value.deg-=A,o("rotate",k.value.deg);break}k.value.enableTransition=F}return he(X,()=>{xe(()=>{const s=f.value[0];s!=null&&s.complete||(z.value=!0)})}),he(L,s=>{oe(),o("switch",s)}),ye(()=>{var s,C;ve(),(C=(s=m.value)==null?void 0:s.focus)==null||C.call(s)}),r({setActiveItem:U}),(s,C)=>(l(),V(e(it),{to:"body",disabled:!s.teleported},{default:I(()=>[_(Ye,{name:"viewer-fade",appear:""},{default:I(()=>[i("div",{ref_key:"wrapper",ref:m,tabindex:-1,class:y(e(a).e("wrapper")),style:re({zIndex:D.value})},[i("div",{class:y(e(a).e("mask")),onClick:Xe(h=>s.hideOnClickModal&&K(),["self"])},null,10,["onClick"]),x(" CLOSE "),i("span",{class:y([e(a).e("btn"),e(a).e("close")]),onClick:K},[_(e(M),null,{default:I(()=>[_(e(je))]),_:1})],2),x(" ARROW "),e(Y)?x("v-if",!0):(l(),v(R,{key:0},[i("span",{class:y(e(fe)),onClick:le},[_(e(M),null,{default:I(()=>[_(e(Ke))]),_:1})],2),i("span",{class:y(e(Q)),onClick:t},[_(e(M),null,{default:I(()=>[_(e(Ue))]),_:1})],2)],64)),x(" ACTIONS "),i("div",{class:y([e(a).e("btn"),e(a).e("actions")])},[i("div",{class:y(e(a).e("actions__inner"))},[_(e(M),{onClick:h=>b("zoomOut")},{default:I(()=>[_(e(We))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("zoomIn")},{default:I(()=>[_(e(Ze))]),_:1},8,["onClick"]),i("i",{class:y(e(a).e("actions__divider"))},null,2),_(e(M),{onClick:ae},{default:I(()=>[(l(),V(Se(e($).icon)))]),_:1}),i("i",{class:y(e(a).e("actions__divider"))},null,2),_(e(M),{onClick:h=>b("anticlockwise")},{default:I(()=>[_(e(qe))]),_:1},8,["onClick"]),_(e(M),{onClick:h=>b("clockwise")},{default:I(()=>[_(e(Ge))]),_:1},8,["onClick"])],2)],2),x(" CANVAS "),i("div",{class:y(e(a).e("canvas"))},[(l(!0),v(R,null,q(s.urlList,(h,N)=>Je((l(),v("img",{ref_for:!0,ref:T=>f.value[N]=T,key:h,src:h,style:re(e(j)),class:y(e(a).e("img")),crossorigin:s.crossorigin,onLoad:te,onError:ne,onMousedown:se},null,46,["src","crossorigin"])),[[Qe,N===L.value]])),128))],2),ie(s.$slots,"default")],6)]),_:3})]),_:3},8,["disabled"]))}});var Ct=Ee(bt,[["__file","image-viewer.vue"]]);const It=Ne(Ct),Lt=Ie({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:Z([String,Object])},previewSrcList:{type:Z(Array),default:()=>Le([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:Z(String)}}),$t={load:n=>n instanceof Event,error:n=>n instanceof Event,switch:n=>_e(n),close:()=>!0,show:()=>!0},zt=ue({name:"ElImage",inheritAttrs:!1}),xt=ue({...zt,props:Lt,emits:$t,setup(n,{emit:r}){const o=n;let p="";const{t:u}=$e(),g=ze("image"),S=tt(),a=w(()=>nt(Object.entries(S).filter(([t])=>/^(data-|on[A-Z])/i.test(t)||["id","style"].includes(t)))),d=ct({excludeListeners:!0,excludeKeys:w(()=>Object.keys(a.value))}),m=E(),f=E(!1),c=E(!0),z=E(!1),L=E(),$=E(),k=H&&"loading"in HTMLImageElement.prototype;let D,Y;const G=w(()=>[g.e("inner"),X.value&&g.e("preview"),c.value&&g.is("loading")]),J=w(()=>{const{fit:t}=o;return H&&t?{objectFit:t}:{}}),X=w(()=>{const{previewSrcList:t}=o;return Array.isArray(t)&&t.length>0}),fe=w(()=>{const{previewSrcList:t,initialIndex:b}=o;let s=b;return b>t.length-1&&(s=0),s}),Q=w(()=>o.loading==="eager"?!1:!k&&o.loading==="lazy"||o.lazy),j=()=>{H&&(c.value=!0,f.value=!1,m.value=o.src)};function K(t){c.value=!1,f.value=!1,r("load",t)}function ve(t){c.value=!1,f.value=!0,r("error",t)}function ee(){_t(L.value,$.value)&&(j(),se())}const te=st(ee,200,!0);async function ne(){var t;if(!H)return;await xe();const{scrollContainer:b}=o;ot(b)?$.value=b:at(b)&&b!==""?$.value=(t=document.querySelector(b))!=null?t:void 0:L.value&&($.value=ut(L.value)),$.value&&(D=P($,"scroll",te),setTimeout(()=>ee(),100))}function se(){!H||!$.value||!te||(D==null||D(),$.value=void 0)}function oe(t){if(t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function ae(){X.value&&(Y=P("wheel",oe,{passive:!1}),p=document.body.style.overflow,document.body.style.overflow="hidden",z.value=!0,r("show"))}function U(){Y==null||Y(),document.body.style.overflow=p,z.value=!1,r("close")}function le(t){r("switch",t)}return he(()=>o.src,()=>{Q.value?(c.value=!0,f.value=!1,se(),ne()):j()}),ye(()=>{Q.value?ne():j()}),(t,b)=>(l(),v("div",ce({ref_key:"container",ref:L},e(a),{class:[e(g).b(),t.$attrs.class]}),[f.value?ie(t.$slots,"error",{key:0},()=>[i("div",{class:y(e(g).e("error"))},O(e(u)("el.image.error")),3)]):(l(),v(R,{key:1},[m.value!==void 0?(l(),v("img",ce({key:0},e(d),{src:m.value,loading:t.loading,style:e(J),class:e(G),crossorigin:t.crossorigin,onClick:ae,onLoad:K,onError:ve}),null,16,["src","loading","crossorigin"])):x("v-if",!0),c.value?(l(),v("div",{key:1,class:y(e(g).e("wrapper"))},[ie(t.$slots,"placeholder",{},()=>[i("div",{class:y(e(g).e("placeholder"))},null,2)])],2)):x("v-if",!0)],64)),e(X)?(l(),v(R,{key:2},[z.value?(l(),V(e(It),{key:0,"z-index":t.zIndex,"initial-index":e(fe),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,crossorigin:t.crossorigin,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:U,onSwitch:le},{default:I(()=>[t.$slots.viewer?(l(),v("div",{key:0},[ie(t.$slots,"viewer")])):x("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","crossorigin","hide-on-click-modal","teleported","close-on-press-escape"])):x("v-if",!0)],64)):x("v-if",!0)],16))}});var St=Ee(xt,[["__file","image.vue"]]);const Et=Ne(St),Nt={class:"item-title"},Tt=["src"],At={key:1},Ot={class:"text-title"},Mt={class:"image-slot"},Rt={key:1,class:"text-tertiary d-text"},Ft={class:"item-title"},Vt=["src"],Bt={key:1},Ht={class:"text-title"},Pt={class:"item-des"},Me={__name:"FuncItem",props:{item:{type:Object,default:()=>{}},isTheme:{type:Boolean,default:!1}},setup(n){const r=n,o=me(),{likes:p}=de(o),u=w(()=>r.item.href?{is:"a",props:{href:r.item.href,target:"_blank",rel:"noopener noreferrer"}}:{is:Re,props:{to:mt(r.item)}}),g=w(()=>{const a=r.item.name||r.item.title;return p.value.includes(a)}),S=a=>{a.stopPropagation(),a.preventDefault();const d=r.item.name||r.item.title,m=p.value.findIndex(c=>c===d),f=p.value.concat();m>=0?f.splice(m,1):f.push(d),o.setLikes(f)};return(a,d)=>{const m=M,f=Et,c=dt;return l(),V(Se(e(u).is),ce(e(u).props,{class:["c-func-item",{"is-theme":n.isTheme}]}),{default:I(()=>[_(c,{placement:"bottom",width:320,offset:25,trigger:"hover",persistent:!1,disabled:!n.item.image,"popper-class":"popper-func-item","popper-style":a.$attrs},{reference:I(()=>[i("div",null,[i("div",Ft,[i("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(l(),v("img",{key:0,src:n.item.logo},null,8,Vt)):(l(),v("span",Bt,O(n.item.title[0].toUpperCase()),1))],2),i("span",Ht,O(n.item.title),1)]),i("p",Pt,O(n.item.description),1),i("i",{class:y(["iconfont for-store",e(g)?"icon-store":"icon-unstore"]),onClick:S},null,2)])]),default:I(()=>[i("div",ce(a.$attrs,{class:["popper-func-item-main",{"is-theme":n.isTheme}]}),[i("div",Nt,[i("div",{class:y(["item-logo",{"has-icon":n.item.logo}])},[n.item.logo?(l(),v("img",{key:0,src:n.item.logo},null,8,Tt)):(l(),v("span",At,O(n.item.title[0].toUpperCase()),1))],2),i("span",Ot,O(n.item.title),1)]),i("div",{class:y(["description-area",{"col-view":n.item.colView}])},[n.item.image?(l(),V(f,{key:0,src:n.item.image,class:"w-full"},{error:I(()=>[i("div",Mt,[_(m,null,{default:I(()=>[_(e(lt))]),_:1})])]),_:1},8,["src"])):x("",!0),n.item.description?(l(),v("p",Rt,O(n.item.description),1)):x("",!0)],2)],16)]),_:1},8,["disabled","popper-style"])]),_:1},16,["class"])}}},Dt={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},Yt={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},Xt={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},Ce={en_US:Dt,zh_Hans_CN:Yt,zh_Hant_HK:Xt},jt={class:"c-common-like-func"},Kt={key:0,class:"empty"},Ut=["id"],Wt={class:"sub-items"},Zt={__name:"LikeFunc",setup(n){const r=d=>{const f=Ae().$lang.value||"zh_Hans_CN",c=Ce[f]||Ce.zh_Hans_CN||{};return c[d]===void 0?d:c[d]},{menus:o}=Oe(),p=me(),{category:u,likes:g}=de(p);Te();const S=w(()=>g.value.reduce((d,m)=>(d[m]=!0,d),{})),a=w(()=>{const d=[];for(let m=0;m<o.length;m++){const f=[];o[m].subMenus.forEach(c=>{const z=c.name||c.title;S.value[z]&&f.push(c)}),f.length>0&&d.push({...o[m],subMenus:f})}return d});return(d,m)=>{const f=Me;return l(),v("div",jt,[e(a).length===0?(l(),v("div",Kt,[m[0]||(m[0]=i("img",{src:vt},null,-1)),i("p",null,O(r("还没有收藏，快去_e17e")),1)])):x("",!0),(l(!0),v(R,null,q(e(a),(c,z)=>(l(),v("div",{key:z,class:"category"},[i("p",{id:c.name,class:y(["title",{active:c.name===e(u)}])},O(c.title),11,Ut),i("div",Wt,[(l(!0),v(R,null,q(c.subMenus,(L,$)=>(l(),V(f,{key:$,item:L,style:re({"--bg-color":c.color,"--logo-color":c.logoColor}),"is-theme":c.isTheme},null,8,["item","style","is-theme"]))),128))])]))),128))])}}},qt={class:"c-common-all-func"},Gt=["id"],Jt={class:"sub-items"},Qt={__name:"AllFunc",setup(n){const{menus:r}=Oe(),o=me(),{category:p}=de(o),u=Te();return ye(()=>{const g=u.hash.slice(1).toLowerCase();if(g){const S=document.getElementById(g);S&&S.scrollIntoView()}else o.setCategory("")}),(g,S)=>{const a=Me;return l(),v("div",qt,[(l(!0),v(R,null,q(e(r),(d,m)=>(l(),v("div",{key:m,class:"category"},[i("div",{id:d.name,class:"anchor"},null,8,Gt),i("p",{class:y(["title",{active:d.name===e(p)}])},O(d.title),3),i("div",Jt,[(l(!0),v(R,null,q(d.subMenus,(f,c)=>(l(),v(R,{key:c},[!f.brand||f.brand.includes(g.$brandName)?(l(),V(a,{key:0,item:f,class:y({"small-size":f.title.length>18}),style:re({"--bg-color":d.color,"--logo-color":d.logoColor}),"is-theme":d.isTheme},null,8,["item","class","style","is-theme"])):x("",!0)],64))),128))])]))),128))])}}},en={class:"p-index"},tn={key:0,class:"page-stage pb-60"},nn={key:1,class:"page-container pt-30 pb-60"},sn={class:"left-content"},on={class:"right-content"},kn={__name:"index",setup(n){const r=Ae();ft({title:r.$brand.name,ogTitle:r.$brand.name,description:r.$brand.description,ogDescription:r.$brand.description});const o=me(),{nav:p}=de(o);return(u,g)=>{const S=Zt,a=gt,d=pt,m=Qt;return l(),v("div",en,[e(p)==="like"?(l(),v("div",tn,[_(S)])):(l(),v("div",nn,[i("div",sn,[_(a),_(d)]),i("div",on,[_(m)])]))])}}};export{kn as default};