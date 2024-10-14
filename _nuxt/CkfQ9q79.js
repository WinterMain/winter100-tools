import{d as N,u as s,a as M}from"./CuOrCuoF.js";import{a1 as S,y as g,a0 as y,r as I,av as $,ap as k,M as R,f as l,au as U,n as h,q as c,bG as D,b5 as j,J as v,D as V,bp as K,o as T,e as H,w as B,c as J,N as q,t as _,k as P,d as z,a9 as F,cd as G,a5 as Y}from"./sHdJEn5x.js";const W=g({inheritAttrs:!1});function Q(t,r,n,o,d,i){return y(t.$slots,"default")}var X=S(W,[["render",Q],["__file","collection.vue"]]);const Z=g({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,d,i){return y(t.$slots,"default")}var ee=S(Z,[["render",x],["__file","collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r="El".concat(t,"Collection"),n="".concat(r,"Item"),o=Symbol(r),d=Symbol(n),i={...X,name:r,setup(){const b=I(null),f=new Map;$(o,{itemMap:f,getItems:()=>{const p=l(b);if(!p)return[];const a=Array.from(p.querySelectorAll("[".concat(te,"]")));return[...f.values()].sort((C,E)=>a.indexOf(C.ref)-a.indexOf(E.ref))},collectionRef:b})}},m={...ee,name:n,setup(b,{attrs:f}){const u=I(null),p=k(o,void 0);$(d,{collectionItemRef:u}),R(()=>{const a=l(u);a&&p.itemMap.set(a,{ref:a,...f})}),U(()=>{const a=l(u);p.itemMap.delete(a)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:d,ElCollection:i,ElCollectionItem:m}},w=h({trigger:N.trigger,effect:{...s.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:Boolean,role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:s.teleported});h({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:D}});h({onKeydown:{type:c(Function)}});oe("Dropdown");const re=h({trigger:N.trigger,placement:w.placement,disabled:N.disabled,visible:s.visible,transition:s.transition,popperOptions:w.popperOptions,tabindex:w.tabindex,content:s.content,popperStyle:s.popperStyle,popperClass:s.popperClass,enterable:{...s.enterable,default:!0},effect:{...s.effect,default:"light"},teleported:s.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>j(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},ae="onUpdate:visible",se=g({name:"ElPopover"}),le=g({...se,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,d=v(()=>o[ae]),i=V("popover"),m=I(),b=v(()=>{var e;return(e=l(m))==null?void 0:e.popperRef}),f=v(()=>[{width:K(o.width)},o.popperStyle]),u=v(()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}]),p=v(()=>o.transition==="".concat(i.namespace.value,"-fade-in-linear")),a=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},C=()=>{n("before-leave")},E=()=>{n("after-enter")},L=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:b,hide:a}),(e,fe)=>(T(),H(l(M),F({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":l(u),"popper-style":l(f),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":l(p),"onUpdate:visible":l(d),onBeforeShow:O,onBeforeHide:C,onShow:E,onHide:L}),{content:B(()=>[e.title?(T(),J("div",{key:0,class:q(l(i).e("title")),role:"title"},_(e.title),3)):P("v-if",!0),y(e.$slots,"default",{},()=>[z(_(e.content),1)])]),default:B(()=>[e.$slots.reference?y(e.$slots,"reference",{key:0}):P("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ie=S(le,[["__file","popover.vue"]]);const A=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var pe={mounted(t,r){A(t,r)},updated(t,r){A(t,r)}};const ce="popover",de=G(pe,ce),be=Y(ie,{directive:de});export{be as E};
