System.register(["./CGyr_oMX-legacy.js"],(function(e,l){"use strict";var a,t,r,o,n,i,s,c,u,v,d,f,p,m,b,h,y,g,w,_,z,x,S,E,L,k,T,C,H,B,R,A,M,N,$,j,O,W,I,q,F,P,X;return{setters:[e=>{a=e.h,t=e.D,r=e.k,o=e.l,n=e.q,i=e.n,s=e.r,c=e.I,u=e.z,v=e.aC,d=e.bc,f=e.a,p=e.c,m=e.w,b=e.Z,h=e.b,y=e.B,g=e.e,w=e.C,_=e.$,z=e.av,x=e.an,S=e.A,E=e.d,L=e.a9,k=e.j,T=e.aZ,C=e.T,H=e.cc,B=e.s,R=e.y,A=e.x,M=e.O,N=e.X,$=e.cG,j=e.o,O=e.J,W=e.P,I=e.az,q=e.a0,F=e.bZ,P=e.a1,X=e.aI}],execute:function(){var l=document.createElement("style");l.textContent=".el-scrollbar{--el-scrollbar-opacity:.3;--el-scrollbar-bg-color:var(--el-text-color-secondary);--el-scrollbar-hover-opacity:.5;--el-scrollbar-hover-bg-color:var(--el-text-color-secondary);height:100%;overflow:hidden;position:relative}.el-scrollbar__wrap{height:100%;overflow:auto}.el-scrollbar__wrap--hidden-default{scrollbar-width:none}.el-scrollbar__wrap--hidden-default::-webkit-scrollbar{display:none}.el-scrollbar__thumb{background-color:var(--el-scrollbar-bg-color,var(--el-text-color-secondary));border-radius:inherit;cursor:pointer;display:block;height:0;opacity:var(--el-scrollbar-opacity,.3);position:relative;transition:var(--el-transition-duration) background-color;width:0}.el-scrollbar__thumb:hover{background-color:var(--el-scrollbar-hover-bg-color,var(--el-text-color-secondary));opacity:var(--el-scrollbar-hover-opacity,.5)}.el-scrollbar__bar{border-radius:4px;bottom:2px;position:absolute;right:2px;z-index:1}.el-scrollbar__bar.is-vertical{top:2px;width:6px}.el-scrollbar__bar.is-vertical>div{width:100%}.el-scrollbar__bar.is-horizontal{height:6px;left:2px}.el-scrollbar__bar.is-horizontal>div{height:100%}.el-scrollbar-fade-enter-active{transition:opacity .34s ease-out}.el-scrollbar-fade-leave-active{transition:opacity .12s ease-out}.el-scrollbar-fade-enter-from,.el-scrollbar-fade-leave-active{opacity:0}\n",document.head.appendChild(l);const Z={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},K=Symbol("scrollbarContextKey"),Y=a({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var D=t(r({__name:"thumb",props:Y,setup(e){const l=e,a=o(K),t=n("scrollbar");a||i("Thumb","can not inject scrollbar context");const r=s(),S=s(),E=s({}),L=s(!1);let k=!1,T=!1,C=x?document.onselectstart:null;const H=c((()=>Z[l.vertical?"vertical":"horizontal"])),B=c((()=>(({move:e,size:l,bar:a})=>({[a.size]:l,transform:`translate${a.axis}(${e}%)`}))({size:l.size,move:l.move,bar:H.value}))),R=c((()=>r.value[H.value.offset]**2/a.wrapElement[H.value.scrollSize]/l.ratio/S.value[H.value.offset])),A=e=>{var l;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(l=window.getSelection())||l.removeAllRanges(),N(e);const a=e.currentTarget;a&&(E.value[H.value.axis]=a[H.value.offset]-(e[H.value.client]-a.getBoundingClientRect()[H.value.direction]))},M=e=>{if(!S.value||!r.value||!a.wrapElement)return;const l=100*(Math.abs(e.target.getBoundingClientRect()[H.value.direction]-e[H.value.client])-S.value[H.value.offset]/2)*R.value/r.value[H.value.offset];a.wrapElement[H.value.scroll]=l*a.wrapElement[H.value.scrollSize]/100},N=e=>{e.stopImmediatePropagation(),k=!0,document.addEventListener("mousemove",$),document.addEventListener("mouseup",j),C=document.onselectstart,document.onselectstart=()=>!1},$=e=>{if(!r.value||!S.value)return;if(!1===k)return;const l=E.value[H.value.axis];if(!l)return;const t=100*(-1*(r.value.getBoundingClientRect()[H.value.direction]-e[H.value.client])-(S.value[H.value.offset]-l))*R.value/r.value[H.value.offset];a.wrapElement[H.value.scroll]=t*a.wrapElement[H.value.scrollSize]/100},j=()=>{k=!1,E.value[H.value.axis]=0,document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",j),O(),T&&(L.value=!1)};u((()=>{O(),document.removeEventListener("mouseup",j)}));const O=()=>{document.onselectstart!==C&&(document.onselectstart=C)};return v(d(a,"scrollbarElement"),"mousemove",(()=>{T=!1,L.value=!!l.size})),v(d(a,"scrollbarElement"),"mouseleave",(()=>{T=!0,L.value=k})),(e,l)=>(f(),p(z,{name:g(t).b("fade"),persisted:""},{default:m((()=>[b(h("div",{ref_key:"instance",ref:r,class:y([g(t).e("bar"),g(t).is(g(H).key)]),onMousedown:M},[h("div",{ref_key:"thumb",ref:S,class:y(g(t).e("thumb")),style:w(g(B)),onMousedown:A},null,38)],34),[[_,e.always||L.value]])])),_:1},8,["name"]))}}),[["__file","thumb.vue"]]);const G=a({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}});var J=t(r({__name:"bar",props:G,setup(e,{expose:l}){const a=e,t=o(K),r=s(0),n=s(0),i=s(""),c=s(""),u=s(1),v=s(1);return l({handleScroll:e=>{if(e){const l=e.offsetHeight-4,a=e.offsetWidth-4;n.value=100*e.scrollTop/l*u.value,r.value=100*e.scrollLeft/a*v.value}},update:()=>{const e=null==t?void 0:t.wrapElement;if(!e)return;const l=e.offsetHeight-4,r=e.offsetWidth-4,o=l**2/e.scrollHeight,n=r**2/e.scrollWidth,s=Math.max(o,a.minSize),d=Math.max(n,a.minSize);u.value=o/(l-o)/(s/(l-s)),v.value=n/(r-n)/(d/(r-d)),c.value=s+4<l?`${s}px`:"",i.value=d+4<r?`${d}px`:""}}),(e,l)=>(f(),S(L,null,[E(D,{move:r.value,ratio:v.value,size:i.value,always:e.always},null,8,["move","ratio","size","always"]),E(D,{move:n.value,ratio:u.value,size:c.value,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","bar.vue"]]);const V=a({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:k([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...T(["ariaLabel","ariaOrientation"])}),Q={scroll:({scrollTop:e,scrollLeft:l})=>[e,l].every(C)},U=r({name:"ElScrollbar"}),ee=r({...U,props:V,emits:Q,setup(e,{expose:l,emit:a}){const t=e,r=n("scrollbar");let o,i,u=0,d=0;const b=s(),_=s(),z=s(),x=s(),E=c((()=>{const e={};return t.height&&(e.height=H(t.height)),t.maxHeight&&(e.maxHeight=H(t.maxHeight)),[t.wrapStyle,e]})),L=c((()=>[t.wrapClass,r.e("wrap"),{[r.em("wrap","hidden-default")]:!t.native}])),k=c((()=>[r.e("view"),t.viewClass])),T=()=>{var e;_.value&&(null==(e=x.value)||e.handleScroll(_.value),u=_.value.scrollTop,d=_.value.scrollLeft,a("scroll",{scrollTop:_.value.scrollTop,scrollLeft:_.value.scrollLeft}))},P=()=>{var e;null==(e=x.value)||e.update()};return B((()=>t.noresize),(e=>{e?(null==o||o(),null==i||i()):(({stop:o}=R(z,P)),i=v("resize",P))}),{immediate:!0}),B((()=>[t.maxHeight,t.height]),(()=>{t.native||A((()=>{var e;P(),_.value&&(null==(e=x.value)||e.handleScroll(_.value))}))})),M(K,N({scrollbarElement:b,wrapElement:_})),$((()=>{_.value.scrollTop=u,_.value.scrollLeft=d})),j((()=>{t.native||A((()=>{P()}))})),O((()=>P())),l({wrapRef:_,update:P,scrollTo:function(e,l){F(e)?_.value.scrollTo(e):C(e)&&C(l)&&_.value.scrollTo(e,l)},setScrollTop:e=>{C(e)&&(_.value.scrollTop=e)},setScrollLeft:e=>{C(e)&&(_.value.scrollLeft=e)},handleScroll:T}),(e,l)=>(f(),S("div",{ref_key:"scrollbarRef",ref:b,class:y(g(r).b())},[h("div",{ref_key:"wrapRef",ref:_,class:y(g(L)),style:w(g(E)),onScroll:T},[(f(),p(I(e.tag),{id:e.id,ref_key:"resizeRef",ref:z,class:y(g(k)),style:w(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:m((()=>[W(e.$slots,"default")])),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?q("v-if",!0):(f(),p(J,{key:0,ref_key:"barRef",ref:x,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});e("E",P(t(ee,[["__file","scrollbar.vue"]])));const le=new Map;if(x){let e;document.addEventListener("mousedown",(l=>e=l)),document.addEventListener("mouseup",(l=>{if(e){for(const a of le.values())for(const{documentHandler:t}of a)t(l,e);e=void 0}}))}function ae(e,l){let a=[];return Array.isArray(l.arg)?a=l.arg:X(l.arg)&&a.push(l.arg),function(t,r){const o=l.instance.popperRef,n=t.target,i=null==r?void 0:r.target,s=!l||!l.instance,c=!n||!i,u=e.contains(n)||e.contains(i),v=e===n,d=a.length&&a.some((e=>null==e?void 0:e.contains(n)))||a.length&&a.includes(i),f=o&&(o.contains(n)||o.contains(i));s||c||u||v||d||f||l.value(t,r)}}e("C",{beforeMount(e,l){le.has(e)||le.set(e,[]),le.get(e).push({documentHandler:ae(e,l),bindingFn:l.value})},updated(e,l){le.has(e)||le.set(e,[]);const a=le.get(e),t=a.findIndex((e=>e.bindingFn===l.oldValue)),r={documentHandler:ae(e,l),bindingFn:l.value};t>=0?a.splice(t,1,r):a.push(r)},unmounted(e){le.delete(e)}})}}}));
