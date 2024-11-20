import{h as M,j as b,k as T,q as V,I as o,by as q,bq as O,aW as j,br as R,M as U,b4 as G,S as B,a as l,A as c,B as i,e as t,b as y,C as f,P as C,t as D,a0 as I,c as N,w as H,az as J,E as K,D as Q,a1 as X}from"./D4Lpg9_V.js";const Y=M({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:u=>u>=0&&u<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:b(Function),default:u=>"".concat(u,"%")}}),Z=T({name:"ElProgress"}),_=T({...Z,props:Y,setup(u){const s=u,m={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=V("progress"),F=o(()=>{const e={width:"".concat(s.percentage,"%"),animationDuration:"".concat(s.duration,"s")},r=P(s.percentage);return r.includes("gradient")?e.background=r:e.backgroundColor=r,e}),g=o(()=>(s.strokeWidth/s.width*100).toFixed(1)),v=o(()=>["circle","dashboard"].includes(s.type)?Number.parseInt("".concat(50-Number.parseFloat(g.value)/2),10):0),w=o(()=>{const e=v.value,r=s.type==="dashboard";return"\n          M 50 50\n          m 0 ".concat(r?"":"-").concat(e,"\n          a ").concat(e," ").concat(e," 0 1 1 0 ").concat(r?"-":"").concat(e*2,"\n          a ").concat(e," ").concat(e," 0 1 1 0 ").concat(r?"":"-").concat(e*2,"\n          ")}),h=o(()=>2*Math.PI*v.value),k=o(()=>s.type==="dashboard"?.75:1),$=o(()=>{const e=-1*h.value*(1-k.value)/2;return"".concat(e,"px")}),E=o(()=>({strokeDasharray:"".concat(h.value*k.value,"px, ").concat(h.value,"px"),strokeDashoffset:$.value})),W=o(()=>({strokeDasharray:"".concat(h.value*k.value*(s.percentage/100),"px, ").concat(h.value,"px"),strokeDashoffset:$.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),x=o(()=>{let e;return s.color?e=P(s.percentage):e=m[s.status]||m.default,e}),z=o(()=>s.status==="warning"?q:s.type==="line"?s.status==="success"?O:j:s.status==="success"?R:U),A=o(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),S=o(()=>s.format(s.percentage));function L(e){const r=100/e.length;return e.map((n,p)=>B(n)?{color:n,percentage:(p+1)*r}:n).sort((n,p)=>n.percentage-p.percentage)}const P=e=>{var r;const{color:d}=s;if(G(d))return d(e);if(B(d))return d;{const n=L(d);for(const p of n)if(p.percentage>e)return p.color;return(r=n[n.length-1])==null?void 0:r.color}};return(e,r)=>(l(),c("div",{class:i([t(a).b(),t(a).m(e.type),t(a).is(e.status),{[t(a).m("without-text")]:!e.showText,[t(a).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(l(),c("div",{key:0,class:i(t(a).b("bar"))},[y("div",{class:i(t(a).be("bar","outer")),style:f({height:"".concat(e.strokeWidth,"px")})},[y("div",{class:i([t(a).be("bar","inner"),{[t(a).bem("bar","inner","indeterminate")]:e.indeterminate},{[t(a).bem("bar","inner","striped")]:e.striped},{[t(a).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:f(t(F))},[(e.showText||e.$slots.default)&&e.textInside?(l(),c("div",{key:0,class:i(t(a).be("bar","innerText"))},[C(e.$slots,"default",{percentage:e.percentage},()=>[y("span",null,D(t(S)),1)])],2)):I("v-if",!0)],6)],6)],2)):(l(),c("div",{key:1,class:i(t(a).b("circle")),style:f({height:"".concat(e.width,"px"),width:"".concat(e.width,"px")})},[(l(),c("svg",{viewBox:"0 0 100 100"},[y("path",{class:i(t(a).be("circle","track")),d:t(w),stroke:"var(".concat(t(a).cssVarName("fill-color-light"),", #e5e9f2)"),"stroke-linecap":e.strokeLinecap,"stroke-width":t(g),fill:"none",style:f(t(E))},null,14,["d","stroke","stroke-linecap","stroke-width"]),y("path",{class:i(t(a).be("circle","path")),d:t(w),stroke:t(x),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":t(g),style:f(t(W))},null,14,["d","stroke","opacity","stroke-linecap","stroke-width"])]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(l(),c("div",{key:2,class:i(t(a).e("text")),style:f({fontSize:"".concat(t(A),"px")})},[C(e.$slots,"default",{percentage:e.percentage},()=>[e.status?(l(),N(t(K),{key:1},{default:H(()=>[(l(),N(J(t(z))))]),_:1})):(l(),c("span",{key:0},D(t(S)),1))])],6)):I("v-if",!0)],10,["aria-valuenow"]))}});var ee=Q(_,[["__file","progress.vue"]]);const se=X(ee);export{se as E};
