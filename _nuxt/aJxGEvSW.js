import{I as D,ac as $,M as P,aF as q,R as G,b7 as te,r as m,q as C,aL as ae,ad as N,aY as U,a as R,c as A,w as J,a8 as se,b as O,Y as B,e as g,Z as W,a9 as le,X as oe,G as Q,k as Z,d as Y,F as re,J as ne,aE as ie,L as k,c2 as j,V as I,bU as ce,W as K,aM as ue,n as ve,cx as fe,o as de,bQ as me,aa as pe,a5 as he,D as be,bL as ye,ag as ge,al as we}from"./DtyxRZHk.js";const L=4,Se={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ze=({move:a,size:t,bar:s})=>({[s.size]:t,transform:"translate".concat(s.axis,"(").concat(a,"%)")}),F=Symbol("scrollbarContextKey"),Ee=D({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),_e="Thumb",He=P({__name:"thumb",props:Ee,setup(a){const t=a,s=q(F),l=G("scrollbar");s||te(_e,"can not inject scrollbar context");const i=m(),c=m(),v=m({}),f=m(!1);let p=!1,b=!1,r=Q?document.onselectstart:null;const o=C(()=>Se[t.vertical?"vertical":"horizontal"]),n=C(()=>ze({size:t.size,move:t.move,bar:o.value})),d=C(()=>i.value[o.value.offset]**2/s.wrapElement[o.value.scrollSize]/t.ratio/c.value[o.value.offset]),h=u=>{var E;if(u.stopPropagation(),u.ctrlKey||[1,2].includes(u.button))return;(E=window.getSelection())==null||E.removeAllRanges(),S(u);const T=u.currentTarget;T&&(v.value[o.value.axis]=T[o.value.offset]-(u[o.value.client]-T.getBoundingClientRect()[o.value.direction]))},H=u=>{if(!c.value||!i.value||!s.wrapElement)return;const E=Math.abs(u.target.getBoundingClientRect()[o.value.direction]-u[o.value.client]),T=c.value[o.value.offset]/2,M=(E-T)*100*d.value/i.value[o.value.offset];s.wrapElement[o.value.scroll]=M*s.wrapElement[o.value.scrollSize]/100},S=u=>{u.stopImmediatePropagation(),p=!0,document.addEventListener("mousemove",w),document.addEventListener("mouseup",y),r=document.onselectstart,document.onselectstart=()=>!1},w=u=>{if(!i.value||!c.value||p===!1)return;const E=v.value[o.value.axis];if(!E)return;const T=(i.value.getBoundingClientRect()[o.value.direction]-u[o.value.client])*-1,M=c.value[o.value.offset]-E,ee=(T-M)*100*d.value/i.value[o.value.offset];s.wrapElement[o.value.scroll]=ee*s.wrapElement[o.value.scrollSize]/100},y=()=>{p=!1,v.value[o.value.axis]=0,document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",y),e(),b&&(f.value=!1)},x=()=>{b=!1,f.value=!!t.size},z=()=>{b=!0,f.value=p};ae(()=>{e(),document.removeEventListener("mouseup",y)});const e=()=>{document.onselectstart!==r&&(document.onselectstart=r)};return N(U(s,"scrollbarElement"),"mousemove",x),N(U(s,"scrollbarElement"),"mouseleave",z),(u,E)=>(R(),A(oe,{name:g(l).b("fade"),persisted:""},{default:J(()=>[se(O("div",{ref_key:"instance",ref:i,class:B([g(l).e("bar"),g(l).is(g(o).key)]),onMousedown:H},[O("div",{ref_key:"thumb",ref:c,class:B(g(l).e("thumb")),style:W(g(n)),onMousedown:h},null,38)],34),[[le,u.always||f.value]])]),_:1},8,["name"]))}});var V=$(He,[["__file","thumb.vue"]]);const Te=D({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),Le=P({__name:"bar",props:Te,setup(a,{expose:t}){const s=a,l=q(F),i=m(0),c=m(0),v=m(""),f=m(""),p=m(1),b=m(1);return t({handleScroll:n=>{if(n){const d=n.offsetHeight-L,h=n.offsetWidth-L;c.value=n.scrollTop*100/d*p.value,i.value=n.scrollLeft*100/h*b.value}},update:()=>{const n=l==null?void 0:l.wrapElement;if(!n)return;const d=n.offsetHeight-L,h=n.offsetWidth-L,H=d**2/n.scrollHeight,S=h**2/n.scrollWidth,w=Math.max(H,s.minSize),y=Math.max(S,s.minSize);p.value=H/(d-H)/(w/(d-w)),b.value=S/(h-S)/(y/(h-y)),f.value=w+L<d?"".concat(w,"px"):"",v.value=y+L<h?"".concat(y,"px"):""}}),(n,d)=>(R(),Z(re,null,[Y(V,{move:i.value,ratio:b.value,size:v.value,always:n.always},null,8,["move","ratio","size","always"]),Y(V,{move:c.value,ratio:p.value,size:f.value,vertical:"",always:n.always},null,8,["move","ratio","size","always"])],64))}});var Ce=$(Le,[["__file","bar.vue"]]);const ke=D({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:ne([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,...ie(["ariaLabel","ariaOrientation"])}),Re={scroll:({scrollTop:a,scrollLeft:t})=>[a,t].every(k)},Be="ElScrollbar",Pe=P({name:Be}),xe=P({...Pe,props:ke,emits:Re,setup(a,{expose:t,emit:s}){const l=a,i=G("scrollbar");let c,v,f=0,p=0;const b=m(),r=m(),o=m(),n=m(),d=C(()=>{const e={};return l.height&&(e.height=j(l.height)),l.maxHeight&&(e.maxHeight=j(l.maxHeight)),[l.wrapStyle,e]}),h=C(()=>[l.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!l.native}]),H=C(()=>[i.e("view"),l.viewClass]),S=()=>{var e;r.value&&((e=n.value)==null||e.handleScroll(r.value),f=r.value.scrollTop,p=r.value.scrollLeft,s("scroll",{scrollTop:r.value.scrollTop,scrollLeft:r.value.scrollLeft}))};function w(e,u){ye(e)?r.value.scrollTo(e):k(e)&&k(u)&&r.value.scrollTo(e,u)}const y=e=>{k(e)&&(r.value.scrollTop=e)},x=e=>{k(e)&&(r.value.scrollLeft=e)},z=()=>{var e;(e=n.value)==null||e.update()};return I(()=>l.noresize,e=>{e?(c==null||c(),v==null||v()):({stop:c}=ce(o,z),v=N("resize",z))},{immediate:!0}),I(()=>[l.maxHeight,l.height],()=>{l.native||K(()=>{var e;z(),r.value&&((e=n.value)==null||e.handleScroll(r.value))})}),ue(F,ve({scrollbarElement:b,wrapElement:r})),fe(()=>{r.value.scrollTop=f,r.value.scrollLeft=p}),de(()=>{l.native||K(()=>{z()})}),me(()=>z()),t({wrapRef:r,update:z,scrollTo:w,setScrollTop:y,setScrollLeft:x,handleScroll:S}),(e,u)=>(R(),Z("div",{ref_key:"scrollbarRef",ref:b,class:B(g(i).b())},[O("div",{ref_key:"wrapRef",ref:r,class:B(g(h)),style:W(g(d)),onScroll:S},[(R(),A(he(e.tag),{id:e.id,ref_key:"resizeRef",ref:o,class:B(g(H)),style:W(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:J(()=>[pe(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?be("v-if",!0):(R(),A(Ce,{key:0,ref_key:"barRef",ref:n,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Me=$(xe,[["__file","scrollbar.vue"]]);const Ae=ge(Me),_=new Map;if(Q){let a;document.addEventListener("mousedown",t=>a=t),document.addEventListener("mouseup",t=>{if(a){for(const s of _.values())for(const{documentHandler:l}of s)l(t,a);a=void 0}})}function X(a,t){let s=[];return Array.isArray(t.arg)?s=t.arg:we(t.arg)&&s.push(t.arg),function(l,i){const c=t.instance.popperRef,v=l.target,f=i==null?void 0:i.target,p=!t||!t.instance,b=!v||!f,r=a.contains(v)||a.contains(f),o=a===v,n=s.length&&s.some(h=>h==null?void 0:h.contains(v))||s.length&&s.includes(f),d=c&&(c.contains(v)||c.contains(f));p||b||r||o||n||d||t.value(l,i)}}const Oe={beforeMount(a,t){_.has(a)||_.set(a,[]),_.get(a).push({documentHandler:X(a,t),bindingFn:t.value})},updated(a,t){_.has(a)||_.set(a,[]);const s=_.get(a),l=s.findIndex(c=>c.bindingFn===t.oldValue),i={documentHandler:X(a,t),bindingFn:t.value};l>=0?s.splice(l,1,i):s.push(i)},unmounted(a){_.delete(a)}};export{Oe as C,Ae as E};
