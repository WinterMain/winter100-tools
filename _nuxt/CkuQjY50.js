import{E as Ve}from"./Cnwxc6cw.js";import{E as Pe}from"./BQJDZ3qb.js";import{h as _e,T as qe,V as Re,r as d,I as M,e,s as W,au as Je,o as ge,y as De,z as Ue,O as Ke,S as Fe,bA as Ge,bB as je,F as ye,k as ee,q as Ce,ar as We,a as N,A as z,c as x,w as J,Z as Y,b as _,B as P,aw as X,d as q,E as fe,K as Xe,$ as Q,av as de,a0 as F,L as Ye,P as Ie,C as Se,a9 as be,a8 as we,t as Z,D as Ne,l as Qe,X as Ze,Y as xe,R as et,a1 as tt,a2 as at,i as st,bz as nt,u as ot,p as lt}from"./D4Lpg9_V.js";import{u as rt}from"./BpB6Y798.js";import{t as me}from"./C6ZIX_6E.js";import{_ as it}from"./xUW6vRXE.js";import"./CCoHzPKU.js";import"./aNE3o6kV.js";import"./Biecg7Td.js";import"./BEj4jyXG.js";import"./DY5SYOjV.js";const ut=_e({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),ct={change:(n,l)=>[n,l].every(qe)},ke=Symbol("carouselContextKey"),le="ElCarouselItem",he=300,vt=(n,l,u)=>{const{children:s,addChild:T,removeChild:v}=rt(ye(),le),g=Re(),a=d(-1),f=d(null),b=d(!1),y=d(),k=d(0),m=d(!0),h=d(!0),w=d(!1),D=M(()=>n.arrow!=="never"&&!e($)),L=M(()=>s.value.some(t=>t.props.label.toString().length>0)),B=M(()=>n.type==="card"),$=M(()=>n.direction==="vertical"),o=M(()=>n.height!=="auto"?{height:n.height}:{height:"".concat(k.value,"px"),overflow:"hidden"}),r=me(t=>{A(t)},he,{trailing:!0}),C=me(t=>{R(t)},he),I=t=>m.value?a.value<=1?t<=1:t>1:!0;function S(){f.value&&(clearInterval(f.value),f.value=null)}function H(){n.interval<=0||!n.autoplay||f.value||(f.value=setInterval(()=>E(),n.interval))}const E=()=>{h.value||(w.value=!0),h.value=!1,a.value<s.value.length-1?a.value=a.value+1:n.loop?a.value=0:w.value=!1};function A(t){if(h.value||(w.value=!0),h.value=!1,Fe(t)){const V=s.value.filter(K=>K.props.name===t);V.length>0&&(t=s.value.indexOf(V[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const c=s.value.length,O=a.value;t<0?a.value=n.loop?c-1:0:t>=c?a.value=n.loop?0:c-1:a.value=t,O===a.value&&i(O),ie()}function i(t){s.value.forEach((c,O)=>{c.translateItem(O,a.value,t)})}function G(t,c){var O,V,K,ue;const j=e(s),ce=j.length;if(ce===0||!t.states.inStage)return!1;const He=c+1,Ae=c-1,ve=ce-1,Be=j[ve].states.active,Oe=j[0].states.active,ze=(V=(O=j[He])==null?void 0:O.states)==null?void 0:V.active,Le=(ue=(K=j[Ae])==null?void 0:K.states)==null?void 0:ue.active;return c===ve&&Oe||ze?"left":c===0&&Be||Le?"right":!1}function te(){b.value=!0,n.pauseOnHover&&S()}function ae(){b.value=!1,H()}function se(){w.value=!1}function p(t){e($)||s.value.forEach((c,O)=>{t===G(c,O)&&(c.states.hover=!0)})}function re(){e($)||s.value.forEach(t=>{t.states.hover=!1})}function U(t){t!==a.value&&(h.value||(w.value=!0)),a.value=t}function R(t){n.trigger==="hover"&&t!==a.value&&(a.value=t,h.value||(w.value=!0))}function ne(){A(a.value-1)}function Me(){A(a.value+1)}function ie(){S(),n.pauseOnHover||H()}function Te(t){n.height==="auto"&&(k.value=t)}function $e(){var t;const c=(t=g.default)==null?void 0:t.call(g);if(!c)return null;const V=Ge(c).filter(K=>je(K)&&K.type.name===le);return(V==null?void 0:V.length)===2&&n.loop&&!B.value?(m.value=!0,V):(m.value=!1,null)}W(()=>a.value,(t,c)=>{i(c),m.value&&(t=t%2,c=c%2),c>-1&&l("change",t,c)}),W(()=>n.autoplay,t=>{t?H():S()}),W(()=>n.loop,()=>{A(a.value)}),W(()=>n.interval,()=>{ie()});const oe=Je();return ge(()=>{W(()=>s.value,()=>{s.value.length>0&&A(n.initialIndex)},{immediate:!0}),oe.value=De(y.value,()=>{i()}),H()}),Ue(()=>{S(),y.value&&oe.value&&oe.value.stop()}),Ke(ke,{root:y,isCardType:B,isVertical:$,items:s,loop:n.loop,cardScale:n.cardScale,addItem:T,removeItem:v,setActiveItem:A,setContainerHeight:Te}),{root:y,activeIndex:a,arrowDisplay:D,hasLabel:L,hover:b,isCardType:B,isTransitioning:w,items:s,isVertical:$,containerStyle:o,isItemsTwoLength:m,handleButtonEnter:p,handleTransitionEnd:se,handleButtonLeave:re,handleIndicatorClick:U,handleMouseEnter:te,handleMouseLeave:ae,setActiveItem:A,prev:ne,next:Me,PlaceholderItem:$e,isTwoLengthShow:I,throttledArrowClick:r,throttledIndicatorHover:C}},ft="ElCarousel",dt=ee({name:ft}),mt=ee({...dt,props:ut,emits:ct,setup(n,{expose:l,emit:u}){const s=n,{root:T,activeIndex:v,arrowDisplay:g,hasLabel:a,hover:f,isCardType:b,items:y,isVertical:k,containerStyle:m,handleButtonEnter:h,handleButtonLeave:w,isTransitioning:D,handleIndicatorClick:L,handleMouseEnter:B,handleMouseLeave:$,handleTransitionEnd:o,setActiveItem:r,prev:C,next:I,PlaceholderItem:S,isTwoLengthShow:H,throttledArrowClick:E,throttledIndicatorHover:A}=vt(s,u),i=Ce("carousel"),{t:G}=We(),te=M(()=>{const p=[i.b(),i.m(s.direction)];return e(b)&&p.push(i.m("card")),p}),ae=M(()=>{const p=[i.e("container")];return s.motionBlur&&e(D)&&p.push(e(k)?"".concat(i.namespace.value,"-transitioning-vertical"):"".concat(i.namespace.value,"-transitioning")),p}),se=M(()=>{const p=[i.e("indicators"),i.em("indicators",s.direction)];return e(a)&&p.push(i.em("indicators","labels")),s.indicatorPosition==="outside"&&p.push(i.em("indicators","outside")),e(k)&&p.push(i.em("indicators","right")),p});return l({activeIndex:v,setActiveItem:r,prev:C,next:I}),(p,re)=>(N(),z("div",{ref_key:"root",ref:T,class:P(e(te)),onMouseenter:X(e(B),["stop"]),onMouseleave:X(e($),["stop"])},[e(g)?(N(),x(de,{key:0,name:"carousel-arrow-left",persisted:""},{default:J(()=>[Y(_("button",{type:"button",class:P([e(i).e("arrow"),e(i).em("arrow","left")]),"aria-label":e(G)("el.carousel.leftArrow"),onMouseenter:U=>e(h)("left"),onMouseleave:e(w),onClick:X(U=>e(E)(e(v)-1),["stop"])},[q(e(fe),null,{default:J(()=>[q(e(Xe))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[Q,(p.arrow==="always"||e(f))&&(s.loop||e(v)>0)]])]),_:1})):F("v-if",!0),e(g)?(N(),x(de,{key:1,name:"carousel-arrow-right",persisted:""},{default:J(()=>[Y(_("button",{type:"button",class:P([e(i).e("arrow"),e(i).em("arrow","right")]),"aria-label":e(G)("el.carousel.rightArrow"),onMouseenter:U=>e(h)("right"),onMouseleave:e(w),onClick:X(U=>e(E)(e(v)+1),["stop"])},[q(e(fe),null,{default:J(()=>[q(e(Ye))]),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[Q,(p.arrow==="always"||e(f))&&(s.loop||e(v)<e(y).length-1)]])]),_:1})):F("v-if",!0),_("div",{class:P(e(ae)),style:Se(e(m)),onTransitionend:e(o)},[q(e(S)),Ie(p.$slots,"default")],46,["onTransitionend"]),p.indicatorPosition!=="none"?(N(),z("ul",{key:2,class:P(e(se))},[(N(!0),z(be,null,we(e(y),(U,R)=>Y((N(),z("li",{key:R,class:P([e(i).e("indicator"),e(i).em("indicator",p.direction),e(i).is("active",R===e(v))]),onMouseenter:ne=>e(A)(R),onClick:X(ne=>e(L)(R),["stop"])},[_("button",{class:P(e(i).e("button")),"aria-label":e(G)("el.carousel.indicator",{index:R+1})},[e(a)?(N(),z("span",{key:0},Z(U.props.label),1)):F("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[Q,e(H)(R)]])),128))],2)):F("v-if",!0),s.motionBlur?(N(),z("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[_("defs",null,[_("filter",{id:"elCarouselHorizontal"},[_("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),_("filter",{id:"elCarouselVertical"},[_("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):F("v-if",!0)],42,["onMouseenter","onMouseleave"]))}});var ht=Ne(mt,[["__file","carousel.vue"]]);const pt=_e({name:{type:String,default:""},label:{type:[String,Number],default:""}}),_t=n=>{const l=Qe(ke),u=ye(),s=d(),T=d(!1),v=d(0),g=d(1),a=d(!1),f=d(!1),b=d(!1),y=d(!1),{isCardType:k,isVertical:m,cardScale:h}=l;function w(o,r,C){const I=C-1,S=r-1,H=r+1,E=C/2;return r===0&&o===I?-1:r===I&&o===0?C:o<S&&r-o>=E?C+1:o>H&&o-r>=E?-2:o}function D(o,r){var C,I;const S=e(m)?((C=l.root.value)==null?void 0:C.offsetHeight)||0:((I=l.root.value)==null?void 0:I.offsetWidth)||0;return b.value?S*((2-h)*(o-r)+1)/4:o<r?-(1+h)*S/4:(3+h)*S/4}function L(o,r,C){const I=l.root.value;return I?((C?I.offsetHeight:I.offsetWidth)||0)*(o-r):0}const B=(o,r,C)=>{var I;const S=e(k),H=(I=l.items.value.length)!=null?I:Number.NaN,E=o===r;!S&&!et(C)&&(y.value=E||o===C),!E&&H>2&&l.loop&&(o=w(o,r,H));const A=e(m);a.value=E,S?(b.value=Math.round(Math.abs(o-r))<=1,v.value=D(o,r),g.value=e(a)?1:h):v.value=L(o,r,A),f.value=!0,E&&s.value&&l.setContainerHeight(s.value.offsetHeight)};function $(){if(l&&e(k)){const o=l.items.value.findIndex(({uid:r})=>r===u.uid);l.setActiveItem(o)}}return ge(()=>{l.addItem({props:n,states:Ze({hover:T,translate:v,scale:g,active:a,ready:f,inStage:b,animating:y}),uid:u.uid,translateItem:B})}),xe(()=>{l.removeItem(u.uid)}),{carouselItemRef:s,active:a,animating:y,hover:T,inStage:b,isVertical:m,translate:v,isCardType:k,scale:g,ready:f,handleItemClick:$}},gt=ee({name:le}),yt=ee({...gt,props:pt,setup(n){const l=n,u=Ce("carousel"),{carouselItemRef:s,active:T,animating:v,hover:g,inStage:a,isVertical:f,translate:b,isCardType:y,scale:k,ready:m,handleItemClick:h}=_t(l),w=M(()=>[u.e("item"),u.is("active",T.value),u.is("in-stage",a.value),u.is("hover",g.value),u.is("animating",v.value),{[u.em("item","card")]:y.value,[u.em("item","card-vertical")]:y.value&&f.value}]),D=M(()=>{const L="translate".concat(e(f)?"Y":"X"),B="".concat(L,"(").concat(e(b),"px)"),$="scale(".concat(e(k),")");return{transform:[B,$].join(" ")}});return(L,B)=>Y((N(),z("div",{ref_key:"carouselItemRef",ref:s,class:P(e(w)),style:Se(e(D)),onClick:e(h)},[e(y)?Y((N(),z("div",{key:0,class:P(e(u).e("mask"))},null,2)),[[Q,!e(T)]]):F("v-if",!0),Ie(L.$slots,"default")],14,["onClick"])),[[Q,e(m)]])}});var Ee=Ne(yt,[["__file","carousel-item.vue"]]);const Ct=tt(ht,{CarouselItem:Ee}),It=at(Ee),St={JSON数组:"JSON string array",内容:"Content",清除:"Clear",生成结果:"Generate result",非法内容:"Illegal content"},bt={JSON数组:"JSON数组",内容:"内容",清除:"清除",生成结果:"生成结果",非法内容:"非法内容"},wt={JSON数组:"JSON數組",内容:"內容",清除:"清除",生成结果:"生成結果",非法内容:"非法內容"},pe={en_US:St,zh_Hans_CN:bt,zh_Hant_HK:wt},Nt={class:"qrcode-stage"},kt={class:"input-qr"},Et={class:"label"},Mt={class:"result-qr"},Tt={key:0},$t={class:"label"},Ht={class:"qrcode-area"},Ut={__name:"qrcodemul",setup(n){const l=v=>{const a=ot().$lang.value||"zh_Hans_CN",f=pe[a]||pe.zh_Hans_CN||{};return f[v]===void 0?v:f[v]},u=d('["1", "2"]');d("black"),d("white");const s=M(()=>lt(u.value,l("非法内容"))),T=M(()=>s.value instanceof Array?s.value:[(s.value||"").toString()]);return(v,g)=>{const a=Ve,f=Pe,b=It,y=Ct,k=it;return N(),x(k,{class:"p-qrcodemul"},{default:J(()=>[_("div",Nt,[_("div",kt,[_("div",Et,[_("span",null,Z(l("内容")),1),q(a,{class:"p-3 h-20 text-12 mr-12",size:"small",onClick:g[0]||(g[0]=m=>u.value="")},{default:J(()=>[_("span",null,Z(l("清除")),1)]),_:1})]),q(f,{modelValue:e(u),"onUpdate:modelValue":g[1]||(g[1]=m=>st(u)?u.value=m:null),type:"textarea",placeholder:l("JSON数组"),resize:"none"},null,8,["modelValue","placeholder"])]),_("div",Mt,[e(u)?(N(),z("div",Tt,[_("div",$t,[_("span",null,Z(l("生成结果")),1)]),q(y,{"indicator-position":"outside",class:"mt-24",interval:500},{default:J(()=>[(N(!0),z(be,null,we(e(T),(m,h)=>(N(),x(b,{key:h},{default:J(()=>[_("div",Ht,[q(nt,{value:m,size:250},null,8,["value"])])]),_:2},1024))),128))]),_:1})])):F("",!0)])])]),_:1})}}};export{Ut as default};