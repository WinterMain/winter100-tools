import{au as L,bf as me,bg as G,f as N,bh as fe,aR as he,B as Y,C as v,L as S,l as C,o as d,g as z,w as b,u as a,c as f,A as P,v as D,a6 as _e,r as $,b as F,E as ue,bi as Ee,n as M,a9 as ge,X as A,ar as ve,av as I,at as q,am as Ce,J as Fe,V as O,W as x,b0 as be,al as De,K as Be,t as g,d as R,x as we,bj as ye,bk as $e,e as T,bl as j,q as oe,a as o,bm as Ae,F as y,k,i as xe,p as ke,z as Ne,bn as Te,D as Se,be as Me}from"./Ccqljx7q.js";import{t as ze,E as He}from"./C2m9bYFe.js";import{u as ne}from"./4h5rkSAl.js";import{a as Le,u as W,l as U,g as Pe}from"./D454AdkX.js";import{_ as J}from"./BxJ7qmXw.js";import{j as K,e as w,g as Ie}from"./wu8WpSfQ.js";import{u as Oe}from"./CF_9Wpf7.js";import{_ as Re,a as Ue}from"./-Cf3gSn3.js";import{_ as Ve}from"./BuOsYYjh.js";import{_ as je}from"./CWM5oQQd.js";const qu=L(me),Ke={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},Ye={click:n=>n instanceof MouseEvent},We=(n,u,e)=>{const t=G(),c=G(),p=N(!1),r=()=>{t.value&&(p.value=t.value.scrollTop>=n.visibilityHeight)},s=i=>{var E;(E=t.value)==null||E.scrollTo({top:0,behavior:"smooth"}),u("click",i)},l=fe(r,300,!0);return he(c,"scroll",l),Y(()=>{var i;c.value=document,t.value=document.documentElement,n.target&&(t.value=(i=document.querySelector(n.target))!=null?i:void 0,t.value||ze(e,`target does not exist: ${n.target}`),c.value=t.value),r()}),{visible:p,handleClick:s}},ae="ElBacktop",Je=v({name:ae}),Ge=v({...Je,props:Ke,emits:Ye,setup(n,{emit:u}){const e=n,t=S("backtop"),{handleClick:c,visible:p}=We(e,u,ae),r=C(()=>({right:`${e.right}px`,bottom:`${e.bottom}px`}));return(s,l)=>(d(),z(ge,{name:`${a(t).namespace.value}-fade-in`},{default:b(()=>[a(p)?(d(),f("div",{key:0,style:P(a(r)),class:D(a(t).b()),onClick:_e(a(c),["stop"])},[$(s.$slots,"default",{},()=>[F(a(ue),{class:D(a(t).e("icon"))},{default:b(()=>[F(a(Ee))]),_:1},8,["class"])])],14,["onClick"])):M("v-if",!0)]),_:3},8,["name"]))}});var qe=A(Ge,[["__file","backtop.vue"]]);const Qu=L(qe),Qe=v({name:"ElContainer"}),Xe=v({...Qe,props:{direction:{type:String}},setup(n){const u=n,e=ve(),t=S("container"),c=C(()=>u.direction==="vertical"?!0:u.direction==="horizontal"?!1:e&&e.default?e.default().some(r=>{const s=r.type.name;return s==="ElHeader"||s==="ElFooter"}):!1);return(p,r)=>(d(),f("section",{class:D([a(t).b(),a(t).is("vertical",a(c))])},[$(p.$slots,"default")],2))}});var Ze=A(Xe,[["__file","container.vue"]]);const et=v({name:"ElAside"}),tt=v({...et,props:{width:{type:String,default:null}},setup(n){const u=n,e=S("aside"),t=C(()=>u.width?e.cssVarBlock({width:u.width}):{});return(c,p)=>(d(),f("aside",{class:D(a(e).b()),style:P(a(t))},[$(c.$slots,"default")],6))}});var se=A(tt,[["__file","aside.vue"]]);const ut=v({name:"ElFooter"}),ot=v({...ut,props:{height:{type:String,default:null}},setup(n){const u=n,e=S("footer"),t=C(()=>u.height?e.cssVarBlock({height:u.height}):{});return(c,p)=>(d(),f("footer",{class:D(a(e).b()),style:P(a(t))},[$(c.$slots,"default")],6))}});var re=A(ot,[["__file","footer.vue"]]);const nt=v({name:"ElHeader"}),at=v({...nt,props:{height:{type:String,default:null}},setup(n){const u=n,e=S("header"),t=C(()=>u.height?e.cssVarBlock({height:u.height}):{});return(c,p)=>(d(),f("header",{class:D(a(e).b()),style:P(a(t))},[$(c.$slots,"default")],6))}});var le=A(at,[["__file","header.vue"]]);const st=v({name:"ElMain"}),rt=v({...st,setup(n){const u=S("main");return(e,t)=>(d(),f("main",{class:D(a(u).b())},[$(e.$slots,"default")],2))}});var ie=A(rt,[["__file","main.vue"]]);const Xu=L(Ze,{Aside:se,Footer:re,Header:le,Main:ie});I(se);I(re);const lt=I(le);I(ie);const it=v({inheritAttrs:!1});function ct(n,u,e,t,c,p){return $(n.$slots,"default")}var dt=A(it,[["render",ct],["__file","collection.vue"]]);const pt=v({name:"ElCollectionItem",inheritAttrs:!1});function mt(n,u,e,t,c,p){return $(n.$slots,"default")}var ft=A(pt,[["render",mt],["__file","collection-item.vue"]]);const ht="data-el-collection-item",_t=n=>{const u=`El${n}Collection`,e=`${u}Item`,t=Symbol(u),c=Symbol(e),p={...dt,name:u,setup(){const s=N(null),l=new Map;q(t,{itemMap:l,getItems:()=>{const E=a(s);if(!E)return[];const _=Array.from(E.querySelectorAll(`[${ht}]`));return[...l.values()].sort((B,H)=>_.indexOf(B.ref)-_.indexOf(H.ref))},collectionRef:s})}},r={...ft,name:e,setup(s,{attrs:l}){const i=N(null),E=Ce(t,void 0);q(c,{collectionItemRef:i}),Y(()=>{const _=a(i);_&&E.itemMap.set(_,{ref:_,...l})}),Fe(()=>{const _=a(i);E.itemMap.delete(_)})}};return{COLLECTION_INJECTION_KEY:t,COLLECTION_ITEM_INJECTION_KEY:c,ElCollection:p,ElCollectionItem:r}},V=O({trigger:K.trigger,effect:{...w.effect,default:"light"},type:{type:x(String)},placement:{type:x(String),default:"bottom"},popperOptions:{type:x(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:x([Number,String]),default:0},maxHeight:{type:x([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:x(Object)},teleported:w.teleported});O({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:be}});O({onKeydown:{type:x(Function)}});_t("Dropdown");const Et=O({trigger:K.trigger,placement:V.placement,disabled:K.disabled,visible:w.visible,transition:w.transition,popperOptions:V.popperOptions,tabindex:V.tabindex,content:w.content,popperStyle:w.popperStyle,popperClass:w.popperClass,enterable:{...w.enterable,default:!0},effect:{...w.effect,default:"light"},teleported:w.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),gt={"update:visible":n=>De(n),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},vt="onUpdate:visible",Ct=v({name:"ElPopover"}),Ft=v({...Ct,props:Et,emits:gt,setup(n,{expose:u,emit:e}){const t=n,c=C(()=>t[vt]),p=S("popover"),r=N(),s=C(()=>{var h;return(h=a(r))==null?void 0:h.popperRef}),l=C(()=>[{width:Be(t.width)},t.popperStyle]),i=C(()=>[p.b(),t.popperClass,{[p.m("plain")]:!!t.content}]),E=C(()=>t.transition===`${p.namespace.value}-fade-in-linear`),_=()=>{var h;(h=r.value)==null||h.hide()},m=()=>{e("before-enter")},B=()=>{e("before-leave")},H=()=>{e("after-enter")},pe=()=>{e("update:visible",!1),e("after-leave")};return u({popperRef:s,hide:_}),(h,Iu)=>(d(),z(a(Ie),we({ref_key:"tooltipRef",ref:r},h.$attrs,{trigger:h.trigger,placement:h.placement,disabled:h.disabled,visible:h.visible,transition:h.transition,"popper-options":h.popperOptions,tabindex:h.tabindex,content:h.content,offset:h.offset,"show-after":h.showAfter,"hide-after":h.hideAfter,"auto-close":h.autoClose,"show-arrow":h.showArrow,"aria-label":h.title,effect:h.effect,enterable:h.enterable,"popper-class":a(i),"popper-style":a(l),teleported:h.teleported,persistent:h.persistent,"gpu-acceleration":a(E),"onUpdate:visible":a(c),onBeforeShow:m,onBeforeHide:B,onShow:H,onHide:pe}),{content:b(()=>[h.title?(d(),f("div",{key:0,class:D(a(p).e("title")),role:"title"},g(h.title),3)):M("v-if",!0),$(h.$slots,"default",{},()=>[R(g(h.content),1)])]),default:b(()=>[h.$slots.reference?$(h.$slots,"reference",{key:0}):M("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var bt=A(Ft,[["__file","popover.vue"]]);const Q=(n,u)=>{const e=u.arg||u.value,t=e==null?void 0:e.popperRef;t&&(t.triggerRef=n)};var Dt={mounted(n,u){Q(n,u)},updated(n,u){Q(n,u)}};const Bt="popover",wt=ye(Dt,Bt),ce=L(bt,{directive:wt}),yt=n=>{const u=Object.create(null);for(const e in n){const t=n[e];t!==void 0&&(u[e]=t)}return u},$t=(n,u)=>(e,t)=>(ne(()=>n({...yt(e),...t.attrs},t)),()=>{var c,p;return u?(p=(c=t.slots).default)==null?void 0:p.call(c):null}),Zu=v({name:"Title",inheritAttrs:!1,setup:$t((n,{slots:u})=>{var e,t,c;return{title:((c=(t=(e=u.default)==null?void 0:e.call(u))==null?void 0:t[0])==null?void 0:c.children)||null}})}),At=v({name:"Head",inheritAttrs:!1,setup:(n,u)=>()=>{var e,t;return(t=(e=u.slots).default)==null?void 0:t.call(e)}}),eo={__name:"Meta",setup(n){const u=$e().public,e=T();return u.NODE_ENV!=="development"&&ne({script:[{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${e.$brand.ga}`},`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${e.$brand.ga}');
`,{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9684175232031230",crossorigin:"anonymous"}]}),Le({ogImage:"/slogan.png",twitterCard:"summary_large_image"}),(t,c)=>{const p=At;return d(),z(p)}}},xt={class:"c-lang-legal"},kt={class:"relative ml-32 inline-flex items-center cursor-pointer border-gray-06 border px-8 py-4 rounded-8"},Nt=["src"],Tt={class:"c-lang-legal-box"},St={class:"c-contain"},Mt={class:"c-list"},zt=["onClick"],Ht=["src"],Lt={class:"flex-shrink-0"},Pt={__name:"LangSelect",setup(n){const{setLang:u}=j(),e=N(!1),t=j(),{langOptions:c,lang:p,currentLang:r}=oe(t);return(s,l)=>{const i=ue,E=ce;return d(),f("div",xt,[F(E,{visible:a(e),"onUpdate:visible":l[0]||(l[0]=_=>xe(e)?e.value=_:null),width:"160",placement:"bottom-end","popper-class":"c-lang-legal-popover",trigger:"hover","show-arrow":!1},{reference:b(()=>[o("span",kt,[o("img",{src:a(r).icon,class:"mr-8"},null,8,Nt),R(" "+g(a(r).text)+" ",1),F(i,{class:"ml-4 text-12"},{default:b(()=>[F(a(Ae))]),_:1})])]),default:b(()=>[o("div",Tt,[o("div",St,[o("ul",Mt,[(d(!0),f(y,null,k(a(c),(_,m)=>(d(),f("li",{key:m+_.val,class:D(`item-list ${a(p)===_.val&&"list-item-active"}`),onClick:B=>a(u)(_.val)},[o("img",{src:_.icon,class:"mr-12"},null,8,Ht),o("div",Lt,g(_.text),1)],10,zt))),128))])])])]),_:1},8,["visible"])])}}},de=ke("/logo.svg"),It={打赏:"Donate",技术博客:"Technology Blog",首页:"Home"},Ot={打赏:"打赏",技术博客:"技术博客",首页:"首页"},Rt={打赏:"打賞",技术博客:"技術博客",首页:"首頁"},X={en_US:It,zh_Hans_CN:Ot,zh_Hant_HK:Rt},Ut={class:"c-common-header"},Vt={key:0,class:"sub-logo"},jt={class:"nav-items"},Kt=["href"],to={__name:"Header",setup(n){const u=r=>{const l=T().$lang.value||"zh_Hans_CN",i=X[l]||X.zh_Hans_CN||{};return i[r]===void 0?r:i[r]},e=T(),t=W(),c=Ne(),p=C(()=>[{title:u("首页"),url:"/",inner:!0},{title:u("技术博客"),url:e.$brand.site},{title:u("打赏"),url:"/donate",inner:!0}]);return Y(()=>{t.initLikes()}),(r,s)=>{const l=J,i=Pt,E=lt;return d(),f("div",Ut,[F(E,{class:"c-common-header-inner"},{default:b(()=>[F(l,{to:"/",class:"flex space-x-8 items-center"},{default:b(()=>[r.$brandName==="winter100"?(d(),f("div",Vt,s[0]||(s[0]=[o("svg",{t:"1696732448231",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6740","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"},[o("defs",null,[o("linearGradient",{id:"left-to-right"},[o("stop",{offset:"0","stop-color":"#ed3da1"},[o("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})]),o("stop",{offset:"0","stop-color":"#ffe9f6"},[o("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})])])]),o("path",{d:"M105.321374 914.265136c-11.700669 0-17.551004-11.702475-17.551003-17.541972 0-5.870203 5.850335-17.551004 11.7097-17.551004 269.155125-111.194286 561.722425-169.684988 848.441196-181.3983v5.839497c23.410369 0 52.662042-5.839497 76.076024-5.839497v11.711506c-292.558269 29.251673-579.284266 87.756824-854.300562 175.535323-17.551004 17.541972-40.964985 23.403144-64.375355 29.244447zM772.382332 580.741882c-29.260704 0-58.514183-5.861172-76.054349-29.240835-17.55281-23.412175-35.123682-46.826157-35.123681-76.079636 0-81.917327 23.403144-157.984319 76.068798-222.350642 46.835188-64.377161 117.042815-111.168999 193.106195-140.433316 29.251673 0 52.654817 17.563647 64.368129 40.954148-5.862978 5.850335-11.711506 11.711506-17.563647 11.711506 29.251673 11.700669 40.952342 35.102007 40.952342 64.366324 5.862978 163.834654-99.459299 310.121916-245.753787 351.072451z m157.996963-374.484627c-11.702475 5.850335-29.273347 17.551004-40.954148 29.264316-5.870203 0-5.870203-5.850335-5.870203-11.711506-87.778499 52.665654-146.281844 146.294487-152.114116 245.742949 0 11.711506 5.832272 52.665654 23.38147 46.835188 29.284184-11.7097 52.662042-23.423013 70.225688-46.835188 19.503523-21.441593 39.00524-42.894024 58.506958-64.344648 35.121876-46.81532 58.535857-105.320471 70.216658-163.847297 11.700669-17.55281-5.848528-29.253479-23.392307-35.103814zM122.872378 288.185419l-64.366323 29.251673c-5.839497 5.839497-11.689832 5.839497-17.540167 5.839497-5.862978 0-5.862978-11.713313-5.862978-17.540166 0-17.551004 11.713313-29.264316 29.273347-35.114651 35.103813-29.264316 70.20582-52.654817 111.158163-70.216657 17.551004 5.850335 29.264316 23.403144 35.11465 40.952341 0 17.540166 0 17.540166-81.919133 204.812282-29.249866 58.505151-52.651204 122.873281-58.523213 187.237798 0 5.852141 5.872009 17.55281 5.872009 23.412176v5.841303c-1.959745 1.948907-3.910458 3.912264-5.872009 5.861172-5.830466 0-11.700669 0-11.700669-5.861172-29.253479 0-52.663848-17.55281-58.505152-46.804482 0-46.813513 11.711506-99.470137 29.251673-140.433316 23.413982-64.366323 58.517795-122.871475 93.619802-187.237798zM637.792126 282.326054c11.700669 157.984319-87.760436 298.417635-239.892614 339.380813-29.264316 0-58.515989-5.850335-76.07783-29.264316-23.401338-17.561841-35.092976-46.813513-35.092976-76.056155 0-81.926358 23.403144-157.99335 76.068798-222.359673 46.804482-64.355486 117.008497-111.159968 193.086327-140.433316 29.242642 0 52.665654 17.551004 64.368129 40.975823-5.852141 5.839497-11.702475 11.689832-17.55281 11.689832 17.551004 17.549197 35.092976 46.811707 35.092976 76.066992z m-81.908295-35.103814c-11.7097 5.850335-29.260704 17.551004-40.963179 29.251673-5.850335 0-5.850335-5.850335-5.850335-11.700669-87.769468 52.665654-146.272813 146.28365-152.135791 245.762818 0 11.680801 5.862978 52.663848 23.413982 46.793645 29.251673-11.702475 52.665654-23.403144 70.20582-46.793645a140273.571944 140273.571944 0 0 0 58.515989-64.366324c35.103813-46.826157 58.514183-105.320471 70.214852-163.84549 11.713313-17.551004-5.839497-29.253479-23.401338-35.102008zM23.414885 808.944665c269.155125-111.170806 561.711587-169.684988 848.437584-181.3983v5.859365c29.251673 0 52.665654-5.859366 76.068798-5.859365v11.711506c-292.558269 29.26251-579.287878 87.778499-854.302368 175.544354-23.413982 11.713313-40.954148 17.554616-64.36813 23.3905h-5.837691c-5.872009 0-11.702475-5.835885-11.702475-17.551003 3.903233-3.896009 7.804661-7.797436 11.704282-11.697057z",fill:"url(#left-to-right)","p-id":"6741",class:"logo-path"})],-1)]))):M("",!0),o("img",{class:D(r.$brandName==="winter100"?"h-40":"h-30"),src:de},null,2)]),_:1}),o("div",jt,[(d(!0),f(y,null,k(a(p),(_,m)=>(d(),f(y,{key:m},[_.inner?(d(),z(l,{key:1,to:_.url,class:D(["nav-item",{active:a(c).path===_.url}])},{default:b(()=>[R(g(_.title),1)]),_:2},1032,["to","class"])):(d(),f("a",{key:0,class:"nav-item",target:"_blank",rel:"noopener noreferrer",href:_.url},g(_.title),9,Kt))],64))),128))]),s[1]||(s[1]=o("div",{class:"flex-1"},null,-1)),F(i)]),_:1})])}}},Yt={搜索:"Search"},Wt={搜索:"搜索"},Jt={搜索:"搜索"},Z={en_US:Yt,zh_Hans_CN:Wt,zh_Hant_HK:Jt},Gt={class:"c-search-tool"},qt={class:"search-list"},Qt={key:0,class:"empty",src:Re},Xt=["href"],Zt={class:"font-w500 text-primary"},eu={class:"description text-12 text-tertiary"},tu={class:"font-w500 text-primary"},uu={class:"description text-12 text-tertiary"},ou={__name:"SearchTool",setup(n){const u=s=>{const i=T().$lang.value||"zh_Hans_CN",E=Z[i]||Z.zh_Hans_CN||{};return E[s]===void 0?s:E[s]},e=N(""),t=N(!1),{menus:c}=Oe(),p=C(()=>{const s=[];for(let l=0;l<c.length;l++)c[l].subMenus.forEach(i=>{s.push(i)});return s}),r=C(()=>(U(e.value),e.value?p.value.filter(s=>U(s.title).includes(e.value)||U(s.description).includes(e.value)):p.value));return(s,l)=>{const i=He,E=J,_=ce;return d(),f("div",Gt,[F(_,{visible:t.value,"onUpdate:visible":l[3]||(l[3]=m=>t.value=m),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"hover","show-arrow":!1},{reference:b(()=>[F(i,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=m=>e.value=m),style:{width:"240px"},size:"small",placeholder:u("搜索"),"prefix-icon":a(Te)},null,8,["modelValue","placeholder","prefix-icon"])]),default:b(()=>[o("div",qt,[a(r).length===0?(d(),f("img",Qt)):M("",!0),(d(!0),f(y,null,k(a(r),(m,B)=>(d(),f(y,{key:B},[m.href?(d(),f("a",{key:0,href:m.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:l[1]||(l[1]=H=>t.value=!1)},[o("p",Zt,g(m.title),1),o("p",eu,g(m.description),1)],8,Xt)):(d(),z(E,{key:1,class:"search-item",to:("getRouteName"in s?s.getRouteName:a(Pe))(m),onClick:l[2]||(l[2]=H=>t.value=!1)},{default:b(()=>[o("p",tu,g(m.title),1),o("p",uu,g(m.description),1)]),_:2},1032,["to"]))],64))),128))])]),_:1},8,["visible"])])}}},nu={万花筒工具箱:"A Kaleidoscope Toolbox",全部:"All",我的收藏:"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},au={万花筒工具箱:"万花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},su={万花筒工具箱:"萬花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"},ee={en_US:nu,zh_Hans_CN:au,zh_Hant_HK:su},ru={class:"c-common-slogan"},lu={class:"slogan-text"},iu={class:"slogan-nav"},cu=["onClick"],du=["href"],uo={__name:"Slogan",setup(n){const u=r=>{const l=T().$lang.value||"zh_Hans_CN",i=ee[l]||ee.zh_Hans_CN||{};return i[r]===void 0?r:i[r]},e=W(),{nav:t}=oe(e),c=Se([{title:u("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:u("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]),p=r=>{e.setNav(r),Me().push("/")};return(r,s)=>{const l=ou;return d(),f("div",ru,[s[0]||(s[0]=o("i",{class:"iconfont icon-wonhot"},null,-1)),o("p",lu,g(u("万花筒工具箱")),1),o("div",iu,[(d(!0),f(y,null,k(a(c),(i,E)=>(d(),f("div",{key:E,class:D(["nav-item",{active:i.val===a(t)}]),onClick:_=>p(i.val)},[o("i",{class:D([i.icon,i.val===a(t)?i.active:""])},null,2),o("span",null,g(i.title),1)],10,cu))),128))]),s[1]||(s[1]=o("div",{class:"flex-1"},null,-1)),o("a",{href:r.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},g(u("没有找到工具？提_ff19")),9,du),F(l)])}}},pu={导航:"Links",打赏:"Donate",技术博客:"Technology Blog",首页:"Home"},mu={导航:"导航",打赏:"打赏",技术博客:"技术博客",首页:"首页"},fu={导航:"導航",打赏:"打賞",技术博客:"技術博客",首页:"首頁"},te={en_US:pu,zh_Hans_CN:mu,zh_Hant_HK:fu},hu={class:"c-footer"},_u={class:"common-footer-inner"},Eu={key:0,class:"sub-logo"},gu={class:"contacts"},vu=["href"],Cu={class:"ml-120 flex flex-1 pl-100"},Fu={class:"label"},bu={class:"z-1"},Du={class:"nav-items ml-20"},Bu=["href"],wu={class:"ml-20 flex flex-1"},yu={class:"label"},$u={class:"z-1"},Au={class:"donate-list ml-20"},xu={class:"ml-12"},ku={class:"flex items-center mt-4"},Nu=["src"],Tu={class:"ml-8 text-primary font-w500 text-16 flex-1"},Su={class:"mt-12 text-addr"},Mu={class:""},zu={class:"flex-1 ml-20 flex justify-end"},oo={__name:"Footer",setup(n){const u=r=>{const l=T().$lang.value||"zh_Hans_CN",i=te[l]||te.zh_Hans_CN||{};return i[r]===void 0?r:i[r]},e=T(),{donateCoins:t}=W(),c=C(()=>[{title:u("首页"),url:"/",inner:!0},{title:u("技术博客"),url:e.$brand.site},{title:"Winter100",url:"https://winter100.com"},{title:"WinterCCC",url:"https://www.winterccc.com"}]),p=C(()=>[{icon:"iconfont icon-youxiang",url:"mailto:yldiswinter@gmail.com"},{icon:"iconfont icon-github",url:"https://github.com/WinterMain"}]);return(r,s)=>{const l=J,i=Ve,E=je,_=Ue;return d(),f("div",hu,[o("div",_u,[o("div",null,[F(l,{to:"/",class:"inline-flex space-x-8 items-center"},{default:b(()=>[r.$brandName==="winter100"?(d(),f("div",Eu,s[0]||(s[0]=[o("svg",{t:"1696732448231",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6740","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"},[o("defs",null,[o("linearGradient",{id:"left-to-right"},[o("stop",{offset:"0","stop-color":"#ed3da1"},[o("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})]),o("stop",{offset:"0","stop-color":"#ffe9f6"},[o("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})])])]),o("path",{d:"M105.321374 914.265136c-11.700669 0-17.551004-11.702475-17.551003-17.541972 0-5.870203 5.850335-17.551004 11.7097-17.551004 269.155125-111.194286 561.722425-169.684988 848.441196-181.3983v5.839497c23.410369 0 52.662042-5.839497 76.076024-5.839497v11.711506c-292.558269 29.251673-579.284266 87.756824-854.300562 175.535323-17.551004 17.541972-40.964985 23.403144-64.375355 29.244447zM772.382332 580.741882c-29.260704 0-58.514183-5.861172-76.054349-29.240835-17.55281-23.412175-35.123682-46.826157-35.123681-76.079636 0-81.917327 23.403144-157.984319 76.068798-222.350642 46.835188-64.377161 117.042815-111.168999 193.106195-140.433316 29.251673 0 52.654817 17.563647 64.368129 40.954148-5.862978 5.850335-11.711506 11.711506-17.563647 11.711506 29.251673 11.700669 40.952342 35.102007 40.952342 64.366324 5.862978 163.834654-99.459299 310.121916-245.753787 351.072451z m157.996963-374.484627c-11.702475 5.850335-29.273347 17.551004-40.954148 29.264316-5.870203 0-5.870203-5.850335-5.870203-11.711506-87.778499 52.665654-146.281844 146.294487-152.114116 245.742949 0 11.711506 5.832272 52.665654 23.38147 46.835188 29.284184-11.7097 52.662042-23.423013 70.225688-46.835188 19.503523-21.441593 39.00524-42.894024 58.506958-64.344648 35.121876-46.81532 58.535857-105.320471 70.216658-163.847297 11.700669-17.55281-5.848528-29.253479-23.392307-35.103814zM122.872378 288.185419l-64.366323 29.251673c-5.839497 5.839497-11.689832 5.839497-17.540167 5.839497-5.862978 0-5.862978-11.713313-5.862978-17.540166 0-17.551004 11.713313-29.264316 29.273347-35.114651 35.103813-29.264316 70.20582-52.654817 111.158163-70.216657 17.551004 5.850335 29.264316 23.403144 35.11465 40.952341 0 17.540166 0 17.540166-81.919133 204.812282-29.249866 58.505151-52.651204 122.873281-58.523213 187.237798 0 5.852141 5.872009 17.55281 5.872009 23.412176v5.841303c-1.959745 1.948907-3.910458 3.912264-5.872009 5.861172-5.830466 0-11.700669 0-11.700669-5.861172-29.253479 0-52.663848-17.55281-58.505152-46.804482 0-46.813513 11.711506-99.470137 29.251673-140.433316 23.413982-64.366323 58.517795-122.871475 93.619802-187.237798zM637.792126 282.326054c11.700669 157.984319-87.760436 298.417635-239.892614 339.380813-29.264316 0-58.515989-5.850335-76.07783-29.264316-23.401338-17.561841-35.092976-46.813513-35.092976-76.056155 0-81.926358 23.403144-157.99335 76.068798-222.359673 46.804482-64.355486 117.008497-111.159968 193.086327-140.433316 29.242642 0 52.665654 17.551004 64.368129 40.975823-5.852141 5.839497-11.702475 11.689832-17.55281 11.689832 17.551004 17.549197 35.092976 46.811707 35.092976 76.066992z m-81.908295-35.103814c-11.7097 5.850335-29.260704 17.551004-40.963179 29.251673-5.850335 0-5.850335-5.850335-5.850335-11.700669-87.769468 52.665654-146.272813 146.28365-152.135791 245.762818 0 11.680801 5.862978 52.663848 23.413982 46.793645 29.251673-11.702475 52.665654-23.403144 70.20582-46.793645a140273.571944 140273.571944 0 0 0 58.515989-64.366324c35.103813-46.826157 58.514183-105.320471 70.214852-163.84549 11.713313-17.551004-5.839497-29.253479-23.401338-35.102008zM23.414885 808.944665c269.155125-111.170806 561.711587-169.684988 848.437584-181.3983v5.859365c29.251673 0 52.665654-5.859366 76.068798-5.859365v11.711506c-292.558269 29.26251-579.287878 87.778499-854.302368 175.544354-23.413982 11.713313-40.954148 17.554616-64.36813 23.3905h-5.837691c-5.872009 0-11.702475-5.835885-11.702475-17.551003 3.903233-3.896009 7.804661-7.797436 11.704282-11.697057z",fill:"url(#left-to-right)","p-id":"6741",class:"logo-path"})],-1)]))):M("",!0),o("img",{class:D(r.$brandName==="winter100"?"h-50":"h-40"),src:de},null,2)]),_:1}),o("div",gu,[(d(!0),f(y,null,k(a(p),(m,B)=>(d(),f("a",{key:B,class:"contact-item",href:m.url},[o("i",{class:D(m.icon)},null,2)],8,vu))),128))])]),o("div",Cu,[o("div",null,[o("p",Fu,[o("span",bu,g(u("导航")),1)])]),o("div",Du,[(d(!0),f(y,null,k(a(c),(m,B)=>(d(),f(y,{key:B},[m.inner?(d(),z(l,{key:1,to:m.url,class:"nav-item"},{default:b(()=>[R(g(m.title),1)]),_:2},1032,["to"])):(d(),f("a",{key:0,class:"nav-item",target:"_blank",rel:"noopener noreferrer",href:m.url},g(m.title),9,Bu))],64))),128))])]),o("div",wu,[o("div",null,[o("p",yu,[o("span",$u,g(u("打赏")),1)])]),o("div",Au,[(d(!0),f(y,null,k(a(t),(m,B)=>(d(),f("div",{key:B,class:"donate-item"},[F(i,{value:m.address,size:60},null,8,["value"]),o("div",xu,[o("div",ku,[o("img",{src:m.icon,height:"30",class:"h-20"},null,8,Nu),o("span",Tu,g(m.coin),1),F(E,{msg:m.address,"class-name":"text-12"},null,8,["msg"])]),o("p",Su,[o("span",Mu,g(m.address),1)])])]))),128))])]),o("div",zu,[F(_,{class:"mt-0"})])])])}}};/*! Element Plus v2.8.2 */var Hu={name:"zh-cn",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"确定",clear:"清空",defaultLabel:"颜色选择器",description:"当前颜色 {color}，按 Enter 键选择新颜色",alphaLabel:"选择透明度的值"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",dateTablePrompt:"使用方向键与 Enter 键可选择日期",monthTablePrompt:"使用方向键与 Enter 键可选择月份",yearTablePrompt:"使用方向键与 Enter 键可选择年份",selectedDate:"已选日期",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"减少数值",increase:"增加数值"},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},dropdown:{toggleDropdown:"切换下拉选项"},mention:{loading:"加载中"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},dialog:{close:"关闭此对话框"},drawer:{close:"关闭此对话框"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!",close:"关闭此对话框"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},slider:{defaultLabel:"滑块介于 {min} 至 {max}",defaultRangeStartLabel:"选择起始值",defaultRangeEndLabel:"选择结束值"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tour:{next:"下一步",previous:"上一步",finish:"结束导览"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},carousel:{leftArrow:"上一张幻灯片",rightArrow:"下一张幻灯片",indicator:"幻灯片切换至索引 {index}"}}};/*! Element Plus v2.8.2 */var Lu={name:"zh-tw",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"確認",clear:"清空",defaultLabel:"色彩選擇器",description:"目前色彩為 {color}。按一下 Enter 以選擇新色彩。",alphaLabel:"選擇透明度的值"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",dateTablePrompt:"使用方向鍵與 Enter 鍵以選擇日期",monthTablePrompt:"使用方向鍵與 Enter 鍵以選擇月份",yearTablePrompt:"使用方向鍵與 Enter 鍵以選擇年份",selectedDate:"已選日期",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",prevYear:"前一年",nextYear:"後一年",prevMonth:"上個月",nextMonth:"下個月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"減少數值",increase:"增加數值"},select:{loading:"載入中",noMatch:"無相符資料",noData:"無資料",placeholder:"請選擇"},mention:{loading:"載入中"},dropdown:{toggleDropdown:"切換下拉選單"},cascader:{noMatch:"無相符資料",loading:"載入中",placeholder:"請選擇",noData:"無資料"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁",page:"頁",prev:"上一頁",next:"下一頁",currentPage:"第 {pager} 頁",prevPages:"向前 {pager} 頁",nextPages:"向後 {pager} 頁",deprecationWarning:"偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊"},dialog:{close:"關閉此對話框"},drawer:{close:"關閉此對話框"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!",close:"關閉此對話框"},upload:{deleteTip:"按一下 Delete 鍵以刪除",delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},slider:{defaultLabel:"滑桿介於 {min} 至 {max}",defaultRangeStartLabel:"選擇起始值",defaultRangeEndLabel:"選擇結束值"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"合計"},tour:{next:"下一步",previous:"上一步",finish:"結束導覽"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無相符資料",noData:"無資料",titles:["列表 1","列表 2"],filterPlaceholder:"請輸入搜尋內容",noCheckedFormat:"共 {total} 項",hasCheckedFormat:"已選 {checked}/{total} 項"},image:{error:"載入失敗"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"確認",cancelButtonText:"取消"},carousel:{leftArrow:"上一張投影片",rightArrow:"下一張投影片",indicator:"投影片切換至索引 {index}"}}};/*! Element Plus v2.8.2 */var Pu={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};function no(){const n=j();return C(()=>{const e=n.lang||n.defaultLang;return e==="zh_Hans_CN"?Hu:e==="en_US"?Pu:Lu})}export{qu as E,At as H,Zu as T,eo as _,to as a,uo as b,oo as c,Qu as d,Xu as e,no as u};
