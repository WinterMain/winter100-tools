import{au as j,bg as le,e as g,ar as ie,I as N,s as v,o as f,c as E,V as w,n as b,j as n,W as y,A as V,av as L,r as T,at as Y,am as ce,g as X,D as pe,T as P,U as A,aX as de,al as me,G as fe,i as H,w as C,t as F,v as k,d as K,aY as Ee,bh as he,bi as ge,bj as R,y as Z,b as B,a as d,bk as _e,F as x,q as z,H as ve,E as Ce,p as Fe,l as M,z as be,bl as De,m as Be,bf as we,_ as ye}from"./hz-ZsJna.js";import{u as Q}from"./CyONZC5O.js";import{u as Ae}from"./Bg3L-Z5f.js";import{_ as ee}from"./DyRaS7w9.js";import{j as U,f as D,E as $e}from"./Rqyylnqw.js";import{u as te,a as Te,l as I,g as Ne}from"./DqYIm9zy.js";import{E as xe}from"./C7c47519.js";import{_ as Se}from"./BTPJYwOk.js";const su=j(le),ke=g({name:"ElContainer"}),Me=g({...ke,props:{direction:{type:String}},setup(o){const t=o,e=ie(),u=N("container"),r=v(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:e&&e.default?e.default().some(i=>{const a=i.type.name;return a==="ElHeader"||a==="ElFooter"}):!1);return(m,i)=>(f(),E("section",{class:b([n(u).b(),n(u).is("vertical",n(r))])},[w(m.$slots,"default")],2))}});var Le=y(Me,[["__file","container.vue"]]);const Pe=g({name:"ElAside"}),He=g({...Pe,props:{width:{type:String,default:null}},setup(o){const t=o,e=N("aside"),u=v(()=>t.width?e.cssVarBlock({width:t.width}):{});return(r,m)=>(f(),E("aside",{class:b(n(e).b()),style:V(n(u))},[w(r.$slots,"default")],6))}});var ue=y(He,[["__file","aside.vue"]]);const ze=g({name:"ElFooter"}),Ie=g({...ze,props:{height:{type:String,default:null}},setup(o){const t=o,e=N("footer"),u=v(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,m)=>(f(),E("footer",{class:b(n(e).b()),style:V(n(u))},[w(r.$slots,"default")],6))}});var oe=y(Ie,[["__file","footer.vue"]]);const Oe=g({name:"ElHeader"}),Re=g({...Oe,props:{height:{type:String,default:null}},setup(o){const t=o,e=N("header"),u=v(()=>t.height?e.cssVarBlock({height:t.height}):{});return(r,m)=>(f(),E("header",{class:b(n(e).b()),style:V(n(u))},[w(r.$slots,"default")],6))}});var ne=y(Re,[["__file","header.vue"]]);const Ue=g({name:"ElMain"}),je=g({...Ue,setup(o){const t=N("main");return(e,u)=>(f(),E("main",{class:b(n(t).b())},[w(e.$slots,"default")],2))}});var ae=y(je,[["__file","main.vue"]]);const lu=j(Le,{Aside:ue,Footer:oe,Header:ne,Main:ae});L(ue);L(oe);const Ve=L(ne);L(ae);const Ke=g({inheritAttrs:!1});function Ye(o,t,e,u,r,m){return w(o.$slots,"default")}var Ge=y(Ke,[["render",Ye],["__file","collection.vue"]]);const Je=g({name:"ElCollectionItem",inheritAttrs:!1});function We(o,t,e,u,r,m){return w(o.$slots,"default")}var qe=y(Je,[["render",We],["__file","collection-item.vue"]]);const Xe="data-el-collection-item",Ze=o=>{const t=`El${o}Collection`,e=`${t}Item`,u=Symbol(t),r=Symbol(e),m={...Ge,name:t,setup(){const a=T(null),l=new Map;Y(u,{itemMap:l,getItems:()=>{const h=n(a);if(!h)return[];const p=Array.from(h.querySelectorAll(`[${Xe}]`));return[...l.values()].sort(($,S)=>p.indexOf($.ref)-p.indexOf(S.ref))},collectionRef:a})}},i={...qe,name:e,setup(a,{attrs:l}){const c=T(null),h=ce(u,void 0);Y(r,{collectionItemRef:c}),X(()=>{const p=n(c);p&&h.itemMap.set(p,{ref:p,...l})}),pe(()=>{const p=n(c);h.itemMap.delete(p)})}};return{COLLECTION_INJECTION_KEY:u,COLLECTION_ITEM_INJECTION_KEY:r,ElCollection:m,ElCollectionItem:i}},O=P({trigger:U.trigger,effect:{...D.effect,default:"light"},type:{type:A(String)},placement:{type:A(String),default:"bottom"},popperOptions:{type:A(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:A([Number,String]),default:0},maxHeight:{type:A([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:A(Object)},teleported:D.teleported});P({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:de}});P({onKeydown:{type:A(Function)}});Ze("Dropdown");const Qe=P({trigger:U.trigger,placement:O.placement,disabled:U.disabled,visible:D.visible,transition:D.transition,popperOptions:O.popperOptions,tabindex:O.tabindex,content:D.content,popperStyle:D.popperStyle,popperClass:D.popperClass,enterable:{...D.enterable,default:!0},effect:{...D.effect,default:"light"},teleported:D.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),et={"update:visible":o=>me(o),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},tt="onUpdate:visible",ut=g({name:"ElPopover"}),ot=g({...ut,props:Qe,emits:et,setup(o,{expose:t,emit:e}){const u=o,r=v(()=>u[tt]),m=N("popover"),i=T(),a=v(()=>{var s;return(s=n(i))==null?void 0:s.popperRef}),l=v(()=>[{width:fe(u.width)},u.popperStyle]),c=v(()=>[m.b(),u.popperClass,{[m.m("plain")]:!!u.content}]),h=v(()=>u.transition===`${m.namespace.value}-fade-in-linear`),p=()=>{var s;(s=i.value)==null||s.hide()},_=()=>{e("before-enter")},$=()=>{e("before-leave")},S=()=>{e("after-enter")},se=()=>{e("update:visible",!1),e("after-leave")};return t({popperRef:a,hide:p}),(s,Zt)=>(f(),H(n($e),Ee({ref_key:"tooltipRef",ref:i},s.$attrs,{trigger:s.trigger,placement:s.placement,disabled:s.disabled,visible:s.visible,transition:s.transition,"popper-options":s.popperOptions,tabindex:s.tabindex,content:s.content,offset:s.offset,"show-after":s.showAfter,"hide-after":s.hideAfter,"auto-close":s.autoClose,"show-arrow":s.showArrow,"aria-label":s.title,effect:s.effect,enterable:s.enterable,"popper-class":n(c),"popper-style":n(l),teleported:s.teleported,persistent:s.persistent,"gpu-acceleration":n(h),"onUpdate:visible":n(r),onBeforeShow:_,onBeforeHide:$,onShow:S,onHide:se}),{content:C(()=>[s.title?(f(),E("div",{key:0,class:b(n(m).e("title")),role:"title"},F(s.title),3)):k("v-if",!0),w(s.$slots,"default",{},()=>[K(F(s.content),1)])]),default:C(()=>[s.$slots.reference?w(s.$slots,"reference",{key:0}):k("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var nt=y(ot,[["__file","popover.vue"]]);const G=(o,t)=>{const e=t.arg||t.value,u=e==null?void 0:e.popperRef;u&&(u.triggerRef=o)};var at={mounted(o,t){G(o,t)},updated(o,t){G(o,t)}};const rt="popover",st=he(at,rt),re=j(nt,{directive:st}),lt=o=>{const t=Object.create(null);for(const e in o){const u=o[e];u!==void 0&&(t[e]=u)}return t},it=(o,t)=>(e,u)=>(Q(()=>o({...lt(e),...u.attrs},u)),()=>{var r,m;return t?(m=(r=u.slots).default)==null?void 0:m.call(r):null}),iu=g({name:"Title",inheritAttrs:!1,setup:it((o,{slots:t})=>{var e,u,r;return{title:((r=(u=(e=t.default)==null?void 0:e.call(t))==null?void 0:u[0])==null?void 0:r.children)||null}})}),ct=g({name:"Head",inheritAttrs:!1,setup:(o,t)=>()=>{var e,u;return(u=(e=t.slots).default)==null?void 0:u.call(e)}}),cu={__name:"Meta",setup(o){return ge().public.NODE_ENV!=="development"&&Q({script:[{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-T0LMCZBX4G"},`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-T0LMCZBX4G');
`,{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9684175232031230",crossorigin:"anonymous"}]}),Ae({ogImage:"/slogan.png",twitterCard:"summary_large_image"}),(e,u)=>{const r=ct;return f(),H(r)}}},pt={class:"c-lang-legal"},dt={class:"relative ml-32 inline-flex items-center cursor-pointer border-gray-06 border px-8 py-4 rounded-8"},mt=["src"],ft={class:"c-lang-legal-box"},Et={class:"c-contain"},ht={class:"c-list"},gt=["onClick"],_t=["src"],vt={class:"flex-shrink-0"},Ct={__name:"LangSelect",setup(o){const{setLang:t}=R(),e=T(!1),u=R(),{langOptions:r,lang:m,currentLang:i}=Z(u);return(a,l)=>{const c=Ce,h=re;return f(),E("div",pt,[B(h,{visible:n(e),"onUpdate:visible":l[0]||(l[0]=p=>ve(e)?e.value=p:null),width:"160",placement:"bottom-end","popper-class":"c-lang-legal-popover",trigger:"hover","show-arrow":!1},{reference:C(()=>[d("span",dt,[d("img",{src:n(i).icon,class:"mr-8"},null,8,mt),K(" "+F(n(i).text)+" ",1),B(c,{class:"ml-4 text-12"},{default:C(()=>[B(n(_e))]),_:1})])]),default:C(()=>[d("div",ft,[d("div",Et,[d("ul",ht,[(f(!0),E(x,null,z(n(r),(p,_)=>(f(),E("li",{key:_+p.val,class:b(`item-list ${n(m)===p.val&&"list-item-active"}`),onClick:$=>n(t)(p.val)},[d("img",{src:p.icon,class:"mr-12"},null,8,_t),d("div",vt,F(p.text),1)],10,gt))),128))])])])]),_:1},8,["visible"])])}}},Ft=Fe("/logo.svg"),bt={打赏:"Donate",技术博客:"Technology Blog",首页:"Home"},Dt={打赏:"打赏",技术博客:"技术博客",首页:"首页"},Bt={打赏:"打賞",技术博客:"技術博客",首页:"首頁"},J={en_US:bt,zh_Hans_CN:Dt,zh_Hant_HK:Bt},wt={class:"c-common-header"},yt={key:0,class:"sub-logo"},At={class:"nav-items"},$t=["href"],pu={__name:"Header",setup(o){const t=i=>{const l=M().$lang.value||"zh_Hans_CN",c=J[l]||J.zh_Hans_CN||{};return c[i]===void 0?i:c[i]},e=M(),u=te(),r=be(),m=v(()=>[{title:t("首页"),url:"/",inner:!0},{title:t("技术博客"),url:e.$brand.site},{title:t("打赏"),url:"/donate",inner:!0}]);return X(()=>{u.initLikes()}),(i,a)=>{const l=ee,c=Ct,h=Ve;return f(),E("div",wt,[B(h,{class:"c-common-header-inner"},{default:C(()=>[B(l,{to:"/",class:"flex space-x-8 items-center"},{default:C(()=>[i.$brandName==="winter100"?(f(),E("div",yt,a[0]||(a[0]=[d("svg",{t:"1696732448231",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6740","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"},[d("defs",null,[d("linearGradient",{id:"left-to-right"},[d("stop",{offset:"0","stop-color":"#ed3da1"},[d("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})]),d("stop",{offset:"0","stop-color":"#ffe9f6"},[d("animate",{dur:"3s",attributeName:"offset",fill:"freeze",values:"-1;2;0",repeatCount:"indefinite"})])])]),d("path",{d:"M105.321374 914.265136c-11.700669 0-17.551004-11.702475-17.551003-17.541972 0-5.870203 5.850335-17.551004 11.7097-17.551004 269.155125-111.194286 561.722425-169.684988 848.441196-181.3983v5.839497c23.410369 0 52.662042-5.839497 76.076024-5.839497v11.711506c-292.558269 29.251673-579.284266 87.756824-854.300562 175.535323-17.551004 17.541972-40.964985 23.403144-64.375355 29.244447zM772.382332 580.741882c-29.260704 0-58.514183-5.861172-76.054349-29.240835-17.55281-23.412175-35.123682-46.826157-35.123681-76.079636 0-81.917327 23.403144-157.984319 76.068798-222.350642 46.835188-64.377161 117.042815-111.168999 193.106195-140.433316 29.251673 0 52.654817 17.563647 64.368129 40.954148-5.862978 5.850335-11.711506 11.711506-17.563647 11.711506 29.251673 11.700669 40.952342 35.102007 40.952342 64.366324 5.862978 163.834654-99.459299 310.121916-245.753787 351.072451z m157.996963-374.484627c-11.702475 5.850335-29.273347 17.551004-40.954148 29.264316-5.870203 0-5.870203-5.850335-5.870203-11.711506-87.778499 52.665654-146.281844 146.294487-152.114116 245.742949 0 11.711506 5.832272 52.665654 23.38147 46.835188 29.284184-11.7097 52.662042-23.423013 70.225688-46.835188 19.503523-21.441593 39.00524-42.894024 58.506958-64.344648 35.121876-46.81532 58.535857-105.320471 70.216658-163.847297 11.700669-17.55281-5.848528-29.253479-23.392307-35.103814zM122.872378 288.185419l-64.366323 29.251673c-5.839497 5.839497-11.689832 5.839497-17.540167 5.839497-5.862978 0-5.862978-11.713313-5.862978-17.540166 0-17.551004 11.713313-29.264316 29.273347-35.114651 35.103813-29.264316 70.20582-52.654817 111.158163-70.216657 17.551004 5.850335 29.264316 23.403144 35.11465 40.952341 0 17.540166 0 17.540166-81.919133 204.812282-29.249866 58.505151-52.651204 122.873281-58.523213 187.237798 0 5.852141 5.872009 17.55281 5.872009 23.412176v5.841303c-1.959745 1.948907-3.910458 3.912264-5.872009 5.861172-5.830466 0-11.700669 0-11.700669-5.861172-29.253479 0-52.663848-17.55281-58.505152-46.804482 0-46.813513 11.711506-99.470137 29.251673-140.433316 23.413982-64.366323 58.517795-122.871475 93.619802-187.237798zM637.792126 282.326054c11.700669 157.984319-87.760436 298.417635-239.892614 339.380813-29.264316 0-58.515989-5.850335-76.07783-29.264316-23.401338-17.561841-35.092976-46.813513-35.092976-76.056155 0-81.926358 23.403144-157.99335 76.068798-222.359673 46.804482-64.355486 117.008497-111.159968 193.086327-140.433316 29.242642 0 52.665654 17.551004 64.368129 40.975823-5.852141 5.839497-11.702475 11.689832-17.55281 11.689832 17.551004 17.549197 35.092976 46.811707 35.092976 76.066992z m-81.908295-35.103814c-11.7097 5.850335-29.260704 17.551004-40.963179 29.251673-5.850335 0-5.850335-5.850335-5.850335-11.700669-87.769468 52.665654-146.272813 146.28365-152.135791 245.762818 0 11.680801 5.862978 52.663848 23.413982 46.793645 29.251673-11.702475 52.665654-23.403144 70.20582-46.793645a140273.571944 140273.571944 0 0 0 58.515989-64.366324c35.103813-46.826157 58.514183-105.320471 70.214852-163.84549 11.713313-17.551004-5.839497-29.253479-23.401338-35.102008zM23.414885 808.944665c269.155125-111.170806 561.711587-169.684988 848.437584-181.3983v5.859365c29.251673 0 52.665654-5.859366 76.068798-5.859365v11.711506c-292.558269 29.26251-579.287878 87.778499-854.302368 175.544354-23.413982 11.713313-40.954148 17.554616-64.36813 23.3905h-5.837691c-5.872009 0-11.702475-5.835885-11.702475-17.551003 3.903233-3.896009 7.804661-7.797436 11.704282-11.697057z",fill:"url(#left-to-right)","p-id":"6741",class:"logo-path"})],-1)]))):k("",!0),d("img",{class:b(i.$brandName==="winter100"?"h-40":"h-30"),src:Ft},null,2)]),_:1}),d("div",At,[(f(!0),E(x,null,z(n(m),(p,_)=>(f(),E(x,{key:_},[p.inner?(f(),H(l,{key:1,to:p.url,class:b(["nav-item",{active:n(r).path===p.url}])},{default:C(()=>[K(F(p.title),1)]),_:2},1032,["to","class"])):(f(),E("a",{key:0,class:"nav-item",target:"_blank",rel:"noopener noreferrer",href:p.url},F(p.title),9,$t))],64))),128))]),a[1]||(a[1]=d("div",{class:"flex-1"},null,-1)),B(c)]),_:1})])}}},Tt={搜索:"Search"},Nt={搜索:"搜索"},xt={搜索:"搜索"},W={en_US:Tt,zh_Hans_CN:Nt,zh_Hant_HK:xt},St={class:"c-search-tool"},kt={class:"search-list"},Mt={key:0,class:"empty",src:Se},Lt={class:"font-w500 text-primary"},Pt={class:"description text-12 text-tertiary"},Ht={__name:"SearchTool",setup(o){const t=a=>{const c=M().$lang.value||"zh_Hans_CN",h=W[c]||W.zh_Hans_CN||{};return h[a]===void 0?a:h[a]},e=T(""),u=T(!1),{menus:r}=Te(),m=v(()=>{const a=[];for(let l=0;l<r.length;l++)r[l].subMenus.forEach(c=>{a.push(c)});return a}),i=v(()=>(I(e.value),e.value?m.value.filter(a=>I(a.title).includes(e.value)||I(a.description).includes(e.value)):m.value));return(a,l)=>{const c=xe,h=ee,p=re;return f(),E("div",St,[B(p,{visible:u.value,"onUpdate:visible":l[2]||(l[2]=_=>u.value=_),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"hover","show-arrow":!1},{reference:C(()=>[B(c,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_),style:{width:"240px"},size:"small",placeholder:t("搜索"),"prefix-icon":n(De)},null,8,["modelValue","placeholder","prefix-icon"])]),default:C(()=>[d("div",kt,[n(i).length===0?(f(),E("img",Mt)):k("",!0),(f(!0),E(x,null,z(n(i),(_,$)=>(f(),H(h,{key:$,class:"search-item",to:("getRouteName"in a?a.getRouteName:n(Ne))(_),onClick:l[1]||(l[1]=S=>u.value=!1)},{default:C(()=>[d("p",Lt,F(_.title),1),d("p",Pt,F(_.description),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["visible"])])}}},zt={万花筒工具箱:"A Kaleidoscope Toolbox",全部:"All",我的收藏:"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},It={万花筒工具箱:"万花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},Ot={万花筒工具箱:"萬花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"},q={en_US:zt,zh_Hans_CN:It,zh_Hant_HK:Ot},Rt={class:"c-common-slogan"},Ut={class:"slogan-text"},jt={class:"slogan-nav"},Vt=["onClick"],Kt=["href"],du={__name:"Slogan",setup(o){const t=i=>{const l=M().$lang.value||"zh_Hans_CN",c=q[l]||q.zh_Hans_CN||{};return c[i]===void 0?i:c[i]},e=te(),{nav:u}=Z(e),r=Be([{title:t("全部"),icon:"iconfont icon-quanbu",active:"text-red-01",val:"all"},{title:t("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]),m=i=>{e.setNav(i),we().push("/")};return(i,a)=>{const l=Ht;return f(),E("div",Rt,[a[0]||(a[0]=d("i",{class:"iconfont icon-wonhot"},null,-1)),d("p",Ut,F(t("万花筒工具箱")),1),d("div",jt,[(f(!0),E(x,null,z(n(r),(c,h)=>(f(),E("div",{key:h,class:b(["nav-item",{active:c.val===n(u)}]),onClick:p=>m(c.val)},[d("i",{class:b([c.icon,c.val===n(u)?c.active:""])},null,2),d("span",null,F(c.title),1)],10,Vt))),128))]),a[1]||(a[1]=d("div",{class:"flex-1"},null,-1)),d("a",{href:i.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},F(t("没有找到工具？提_ff19")),9,Kt),B(l)])}}},Yt={},Gt={class:"c-footer"};function Jt(o,t){return f(),E("div",Gt)}const mu=ye(Yt,[["render",Jt]]);/*! Element Plus v2.8.2 */var Wt={name:"zh-cn",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"确定",clear:"清空",defaultLabel:"颜色选择器",description:"当前颜色 {color}，按 Enter 键选择新颜色",alphaLabel:"选择透明度的值"},datepicker:{now:"此刻",today:"今天",cancel:"取消",clear:"清空",confirm:"确定",dateTablePrompt:"使用方向键与 Enter 键可选择日期",monthTablePrompt:"使用方向键与 Enter 键可选择月份",yearTablePrompt:"使用方向键与 Enter 键可选择年份",selectedDate:"已选日期",selectDate:"选择日期",selectTime:"选择时间",startDate:"开始日期",startTime:"开始时间",endDate:"结束日期",endTime:"结束时间",prevYear:"前一年",nextYear:"后一年",prevMonth:"上个月",nextMonth:"下个月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"减少数值",increase:"增加数值"},select:{loading:"加载中",noMatch:"无匹配数据",noData:"无数据",placeholder:"请选择"},dropdown:{toggleDropdown:"切换下拉选项"},mention:{loading:"加载中"},cascader:{noMatch:"无匹配数据",loading:"加载中",placeholder:"请选择",noData:"暂无数据"},pagination:{goto:"前往",pagesize:"条/页",total:"共 {total} 条",pageClassifier:"页",page:"页",prev:"上一页",next:"下一页",currentPage:"第 {pager} 页",prevPages:"向前 {pager} 页",nextPages:"向后 {pager} 页",deprecationWarning:"你使用了一些已被废弃的用法，请参考 el-pagination 的官方文档"},dialog:{close:"关闭此对话框"},drawer:{close:"关闭此对话框"},messagebox:{title:"提示",confirm:"确定",cancel:"取消",error:"输入的数据不合法!",close:"关闭此对话框"},upload:{deleteTip:"按 delete 键可删除",delete:"删除",preview:"查看图片",continue:"继续上传"},slider:{defaultLabel:"滑块介于 {min} 至 {max}",defaultRangeStartLabel:"选择起始值",defaultRangeEndLabel:"选择结束值"},table:{emptyText:"暂无数据",confirmFilter:"筛选",resetFilter:"重置",clearFilter:"全部",sumText:"合计"},tour:{next:"下一步",previous:"上一步",finish:"结束导览"},tree:{emptyText:"暂无数据"},transfer:{noMatch:"无匹配数据",noData:"无数据",titles:["列表 1","列表 2"],filterPlaceholder:"请输入搜索内容",noCheckedFormat:"共 {total} 项",hasCheckedFormat:"已选 {checked}/{total} 项"},image:{error:"加载失败"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"确定",cancelButtonText:"取消"},carousel:{leftArrow:"上一张幻灯片",rightArrow:"下一张幻灯片",indicator:"幻灯片切换至索引 {index}"}}};/*! Element Plus v2.8.2 */var qt={name:"zh-tw",el:{breadcrumb:{label:"面包屑"},colorpicker:{confirm:"確認",clear:"清空",defaultLabel:"色彩選擇器",description:"目前色彩為 {color}。按一下 Enter 以選擇新色彩。",alphaLabel:"選擇透明度的值"},datepicker:{now:"現在",today:"今天",cancel:"取消",clear:"清空",confirm:"確認",dateTablePrompt:"使用方向鍵與 Enter 鍵以選擇日期",monthTablePrompt:"使用方向鍵與 Enter 鍵以選擇月份",yearTablePrompt:"使用方向鍵與 Enter 鍵以選擇年份",selectedDate:"已選日期",selectDate:"選擇日期",selectTime:"選擇時間",startDate:"開始日期",startTime:"開始時間",endDate:"結束日期",endTime:"結束時間",prevYear:"前一年",nextYear:"後一年",prevMonth:"上個月",nextMonth:"下個月",year:"年",month1:"1 月",month2:"2 月",month3:"3 月",month4:"4 月",month5:"5 月",month6:"6 月",month7:"7 月",month8:"8 月",month9:"9 月",month10:"10 月",month11:"11 月",month12:"12 月",weeks:{sun:"日",mon:"一",tue:"二",wed:"三",thu:"四",fri:"五",sat:"六"},weeksFull:{sun:"星期日",mon:"星期一",tue:"星期二",wed:"星期三",thu:"星期四",fri:"星期五",sat:"星期六"},months:{jan:"一月",feb:"二月",mar:"三月",apr:"四月",may:"五月",jun:"六月",jul:"七月",aug:"八月",sep:"九月",oct:"十月",nov:"十一月",dec:"十二月"}},inputNumber:{decrease:"減少數值",increase:"增加數值"},select:{loading:"載入中",noMatch:"無相符資料",noData:"無資料",placeholder:"請選擇"},mention:{loading:"載入中"},dropdown:{toggleDropdown:"切換下拉選單"},cascader:{noMatch:"無相符資料",loading:"載入中",placeholder:"請選擇",noData:"無資料"},pagination:{goto:"前往",pagesize:"項/頁",total:"共 {total} 項",pageClassifier:"頁",page:"頁",prev:"上一頁",next:"下一頁",currentPage:"第 {pager} 頁",prevPages:"向前 {pager} 頁",nextPages:"向後 {pager} 頁",deprecationWarning:"偵測到已過時的使用方式，請參閱 el-pagination 說明文件以了解更多資訊"},dialog:{close:"關閉此對話框"},drawer:{close:"關閉此對話框"},messagebox:{title:"提示",confirm:"確定",cancel:"取消",error:"輸入的資料不符規定!",close:"關閉此對話框"},upload:{deleteTip:"按一下 Delete 鍵以刪除",delete:"刪除",preview:"查看圖片",continue:"繼續上傳"},slider:{defaultLabel:"滑桿介於 {min} 至 {max}",defaultRangeStartLabel:"選擇起始值",defaultRangeEndLabel:"選擇結束值"},table:{emptyText:"暫無資料",confirmFilter:"篩選",resetFilter:"重置",clearFilter:"全部",sumText:"合計"},tour:{next:"下一步",previous:"上一步",finish:"結束導覽"},tree:{emptyText:"暫無資料"},transfer:{noMatch:"無相符資料",noData:"無資料",titles:["列表 1","列表 2"],filterPlaceholder:"請輸入搜尋內容",noCheckedFormat:"共 {total} 項",hasCheckedFormat:"已選 {checked}/{total} 項"},image:{error:"載入失敗"},pageHeader:{title:"返回"},popconfirm:{confirmButtonText:"確認",cancelButtonText:"取消"},carousel:{leftArrow:"上一張投影片",rightArrow:"下一張投影片",indicator:"投影片切換至索引 {index}"}}};/*! Element Plus v2.8.2 */var Xt={name:"en",el:{breadcrumb:{label:"Breadcrumb"},colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color.",alphaLabel:"pick alpha value"},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},mention:{loading:"Loading"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"},carousel:{leftArrow:"Carousel arrow left",rightArrow:"Carousel arrow right",indicator:"Carousel switch to index {index}"}}};function fu(){const o=R();return v(()=>{const e=o.lang||o.defaultLang;return e==="zh_Hans_CN"?Wt:e==="en_US"?Xt:qt})}export{su as E,ct as H,iu as T,cu as _,pu as a,du as b,mu as c,lu as d,fu as u};
