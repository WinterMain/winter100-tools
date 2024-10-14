import{J as q,o as C,c as E,F as H,j as V,N as G,a as r,f as m,p as we,r as w,af as X,M as je,aP as Oe,au as Je,e as He,w as j,k as Ve,t as $,b as p,aQ as ke,aR as ge,aS as Re,aT as Pe,aU as We,aV as Ze,u as Ke,E as Ue}from"./sHdJEn5x.js";import{E as Fe}from"./zBvDbdqo.js";import{_ as Ye}from"./CmwUzqvL.js";import{u as Qe}from"./CrA-vTk6.js";import{s as Xe}from"./CxDodSry.js";import"./DBobFfM-.js";import"./JAUZZBS7.js";import"./C7EKrcwD.js";import"./RR06LwDi.js";import"./Dcfw-k-P.js";const qe={class:"c-main-tetris-brick"},Ge={__name:"TetrisBrick",props:{xCount:{type:Number,default:4},yCount:{type:Number,default:4},coords:{type:Array,default:()=>[]}},setup(M){const k=M,c=_=>{let i=k.xCount*-1,u=k.yCount*-1,d=k.xCount,g=k.yCount;const S=[];for(let v=0;v<_.length;v++){const f=_[v];S.push("".concat(f[0],"-").concat(f[1])),d>=f[0]&&(d=f[0]),g>=f[1]&&(g=f[1]),i<=f[0]&&(i=f[0]),u<=f[1]&&(u=f[1])}return{xMax:i,yMax:u,xMin:d,yMin:g,unfold:S.join(",")}},z=_=>{const{xMin:i,xMax:u,yMax:d,yMin:g}=c(_),S=Math.round((k.xCount-(u-i+1))/2)-i,v=[];for(let L=0;L<_.length;L++){const D=_[L];v.push([D[0]+S,D[1]])}const f=[],I=Math.round((k.yCount-(d-g+1))/2)-g;for(let L=0;L<_.length;L++){const D=v[L];f.push([D[0],D[1]+I])}return f},b=q(()=>{const _=[];for(let i=0;i<k.yCount;i++){const u=[];for(let d=0;d<k.xCount;d++){let g=!1;k.coords.length&&z(k.coords).find(v=>v.join("-")==="".concat(d,"-").concat(i))&&(g=!0),u.push({take:g})}_.push(u)}return{bricks:_}});return(_,i)=>(C(),E("div",qe,[(C(!0),E(H,null,V(m(b).bricks,(u,d)=>(C(),E("div",{key:d,class:"tetris-row"},[(C(!0),E(H,null,V(u,(g,S)=>(C(),E("div",{key:S,class:G(["tetris-brick",{take:g.take}])},i[0]||(i[0]=[r("div",{class:"brick-inner"},null,-1)]),2))),128))]))),128))]))}},Me=we("/images/gameover.svg"),ye=we("/images/rabit1.svg?t=1"),xe={"大按钮，旋转按钮_6e4b":"Large button is the rotate button, or use one of the following: Arrow key↑, space bar, W key.","小按钮，控制左、_5fd0":"Small button to control left, right, and down directions. Note that the up direction is rotation. Or use one of the following: ↑←→↓ arrow keys on the keyboard, W A S D keys on the keyboard.",开始或者暂停:"Start or Pause",操作说明:"Instructions",重新开始:"Restart game"},et={"大按钮，旋转按钮_6e4b":"大按钮，旋转按钮，或者下面其中一种：方向键↑、空格键、W按键。","小按钮，控制左、_5fd0":"小按钮，控制左、右、下方向，注意方向上为旋转。或者下面其中一种：键盘上的↑←→↓方向键、键盘上W A S D按键。",开始或者暂停:"开始或者暂停",操作说明:"操作说明",重新开始:"重新开始"},tt={"大按钮，旋转按钮_6e4b":"大按鈕，旋轉按鈕，或者下面其中一種：方向鍵↑、空格鍵、W按鍵。","小按钮，控制左、_5fd0":"小按鈕，控制左、右、下方向，注意方向上為旋轉。或者下面其中一種：鍵盤上的↑←→↓方向鍵、鍵盤上W A S D按鍵。",开始或者暂停:"開始或者暫停",操作说明:"操作說明",重新开始:"重新開始"},be={en_US:xe,zh_Hans_CN:et,zh_Hant_HK:tt},st={class:"tetris-stage"},ot={class:"tetris-main"},rt={key:0,class:"gameover",src:Me},nt={class:"text-12 flex-1 text-right space-y-20 flex flex-col"},lt={class:"t-field"},ct={class:"f-pixel"},at={class:"t-field"},it={class:"flex justify-end"},ut={class:"t-field"},dt={class:"f-pixel"},ft={class:"flex justify-end flex-1"},pt={class:"t-field"},_t={class:"f-pixel",style:{"font-size":"5px"}},ht={class:"op-stage"},vt={class:"pb-20 text-center"},mt={class:"flex items-center justify-between"},kt={class:"btns-side relative"},gt={class:"flex items-center whitespace-nowrap relative"},bt={class:"direct"},wt={class:"mt-40"},Ct={class:"label select-none"},St={class:"space-y-12"},Lt={class:"flex items-center"},Et={class:"ml-20 select-none"},Bt={class:"flex items-center"},Dt={class:"ml-20"},$t={class:"flex items-center"},zt={class:"ml-20"},At={class:"flex items-center"},It={class:"ml-20"},Zt={__name:"tetris",setup(M){const k=t=>{const s=Ke().$lang.value||"zh_Hans_CN",o=be[s]||be.zh_Hans_CN||{};return o[t]===void 0?t:o[t]};Qe({meta:[{name:"viewport",content:"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-touch-fullscreen",content:"yes"},{name:"browsermode",content:"application"},{name:"x5-page-mode",content:"app"},{name:"apple-mobile-web-app-status-bar-style",content:"black"}]});const c={S:"S",Z:"Z",L:"L",I:"I",O:"O",T:"T",J:"J"},z=[600,500,400,300,200,150,100,90,80,70,60,50],b=w(10),_=w(20),i=X([]),u=X({type:c.S,coords:[]}),d=X({type:c.S,coords:[]}),g=w(z[0]),S=w(),v=w(!1),f=w(!0),I=w(0),L=w(!1),D=w(),y=w(),x=w(),R=[{side:"left",ref:D,inter:null},{side:"right",ref:y,inter:null},{side:"down",ref:x,inter:null}],Ce=q(()=>z.findIndex(t=>t===g.value)+1),Se=q(()=>{const t=[];for(let e=0;e<_.value;e++){const s=[];for(let o=0;o<b.value;o++){let n=!1;i[o]&&i[o][e]&&(n=!0),u.coords.find(a=>a.join("-")==="".concat(o,"-").concat(e))&&(n=!0),s.push({take:n})}t.push(s)}return{bricks:t}}),ee=()=>{for(let t=0;t<b.value;t++)i[t]=[]},O=t=>{let e=b.value*-1,s=_.value*-1,o=b.value,n=_.value;const a=[];for(let l=0;l<t.length;l++){const h=t[l];a.push("".concat(h[0],"-").concat(h[1])),o>=h[0]&&(o=h[0]),n>=h[1]&&(n=h[1]),e<=h[0]&&(e=h[0]),s<=h[1]&&(s=h[1])}return{xMax:e,yMax:s,xMin:o,yMin:n,unfold:a.join(",")}},Le=t=>{const{xMin:e,xMax:s}=O(t),o=Math.round((b.value-(s-e+1))/2)-e,n=[];for(let a=0;a<t.length;a++){const l=t[a];n.push([l[0]+o,l[1]])}return n},te=(t=0,e=0,s=!0)=>s?[[t,e],[t,e+1],[t+1,e+1],[t+1,e+2]]:[[t+1,e],[t+2,e],[t,e+1],[t+1,e+1]],se=(t=0,e=0,s=!0)=>s?[[t+1,e],[t,e+1],[t+1,e+1],[t,e+2]]:[[t,e],[t+1,e],[t+1,e+1],[t+2,e+1]],oe=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 1:return[[t,e],[t+1,e],[t,e+1],[t,e+2]];case 2:return[[t,e],[t+1,e],[t+2,e],[t+2,e+1]];case 3:return[[t+1,e],[t+1,e+1],[t,e+2],[t+1,e+2]]}},re=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t+2,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 1:return[[t,e],[t,e+1],[t,e+2],[t+1,e+2]];case 2:return[[t,e],[t+1,e],[t+2,e],[t,e+1]];case 3:return[[t,e],[t+1,e],[t+1,e+1],[t+1,e+2]]}},ne=(t=0,e=0,s=!0)=>s?[[t,e],[t,e+1],[t,e+2],[t,e+3]]:[[t,e],[t+1,e],[t+2,e],[t+3,e]],Ee=(t=0,e=0)=>[[t,e],[t+1,e],[t,e+1],[t+1,e+1]],le=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t+1,e],[t,e+1],[t+1,e+1],[t+1,e+2]];case 1:return[[t+1,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 2:return[[t,e],[t,e+1],[t+1,e+1],[t,e+2]];case 3:return[[t,e],[t+1,e],[t+2,e],[t+1,e+1]]}},Be=(t,e)=>{const{xMin:s,yMin:o,yMax:n}=O(t),a=n-o>=2;return c.I===e?ne(s,o,!a):e===c.S?te(s,o,!a):se(s,o,!a)},P=(t,e,s)=>{const{xMin:o,yMin:n,yMax:a,unfold:l}=O(e),h=a-n,Y={0:1,1:2,2:1,3:2};let B=0;const T=s({xMin:o,yMin:n,yMax:a,unfold:l});for(let A=0;A<T.length;A++){const Te=typeof T[A].offset>"u"?Y[T[A].side]:T[A].offset;if(h===Te){const he=T[A].coords;let ve=!0;for(let Q=0;Q<he.length;Q++){const me=he[Q];if(l.includes("".concat(me[0],"-").concat(me[1]))){ve=!1;break}}if(ve){B=T[A].side;break}}}return B++,B>3&&(B=0),t===c.L?oe(o,n,B):t===c.J?re(o,n,B):le(o,n,B)},De=t=>P(c.L,t,({xMin:e,yMin:s})=>[{coords:[[e+1,s],[e+2,s]],side:0},{coords:[[e+1,s+1],[e+1,s+2]],side:1},{coords:[[e,s+1],[e+1,s+1]],side:2},{coords:[[e,s],[e,s+1]],side:3}]),$e=t=>P(c.J,t,({xMin:e,yMin:s})=>[{coords:[[e,s],[e+1,s]],side:0},{coords:[[e+1,s],[e+1,s+1]],side:1},{coords:[[e+1,s+1],[e+2,s+1]],side:2},{coords:[[e,s+1],[e,s+2]],side:3}]),ze=t=>P(c.T,t,({xMin:e,yMin:s})=>[{coords:[[e,s],[e,s+2]],side:0,offset:2},{coords:[[e,s],[e+2,s]],side:1,offset:1},{coords:[[e+1,s],[e+1,s+2]],side:2,offset:2},{coords:[[e,s+1],[e+2,s+1]],side:3,offset:1}]),Ae=(t,e)=>{switch(t){case c.S:return te(0,0,e);case c.Z:return se(0,0,e);case c.L:return oe(0,0,e);case c.J:return re(0,0,e);case c.I:return ne(0,0,e);case c.O:return Ee(0,0);case c.T:return le(0,0,e)}},Ie=({type:t,coords:e})=>{let s=e;switch(t){case c.S:case c.Z:case c.I:s=Be(e,u.type);break;case c.L:s=De(e);break;case c.J:s=$e(e);break;case c.T:s=ze(e);break;default:s=e}for(let o=0;o<s.length;o++)if(!ce(s[o]))return e;return s},ce=t=>t[0]>=0&&t[0]<b.value&&t[1]<_.value&&!(i[t[0]]&&i[t[0]][t[1]]),ae=({type:t,coords:e})=>{u.type=t;const s=Le(e),{yMax:o}=O(s);for(let n=0;n<s.length;n++)s[n][1]=s[n][1]-o-1;u.coords=s},J=()=>{const t=parseInt(Date.now()*Math.random()),e=Object.keys(c),s=c[e[t%e.length]];let o=t%4;[c.S,c.Z,c.I].includes(s)&&(o=o>1);const n=Ae(s,o);u.coords.length===0?(ae({type:s,coords:n}),J()):d.coords.length===0?(d.type=s,d.coords=n):(ae({...d}),d.type=s,d.coords=n)},Ne=t=>{t.forEach(e=>{e[0]>=0&&e[1]>=0&&(i[e[0]][e[1]]=!0)})},ie=(t=0,e=0)=>{let s=!0,o=t;for(;o<_.value;o++){s=!0;for(let n=0;n<b.value;n++)if(!i[n][o]){s=!1;break}if(s)break}if(s){I.value+=2**e*100;const n=Math.min(z.length-1,parseInt(I.value/(_.value*100)));g.value=z[n];for(let l=0;l<b.value;l++)i[l][o]=!1;const a=JSON.parse(JSON.stringify(i));if(o>=0&&o<_.value)for(let l=o;l>=0;l--)for(let h=0;h<b.value;h++)i[h][l]=l-1>=0?a[h][l-1]:!1;ie(o,e+1)}},N=(t,e,s)=>{const o=[];v.value=!1,L.value=!L.value;for(let n=0;n<u.coords.length;n++){const a=u.coords[n];let l;if(t==="left"?l=[a[0]-1,a[1]]:t==="right"?l=[a[0]+1,a[1]]:t==="up"?l=[a[0],a[1]-1]:t==="down"&&(l=[a[0],a[1]+1]),e)o.push(l);else if(ce(l))o.push(l);else{if(t==="down")if(l[1]<=0){v.value=!0,F();return}else Ne(u.coords),ie(),J();return}}if(e)return o;u.coords=o,s&&s()},ue=(t,e)=>{v.value||(R.forEach(s=>{clearInterval(s.inter)}),N(t),e.preventDefault())},W=()=>{N("down",!1,()=>{W()})},Z=()=>{v.value||(u.coords=Ie(u))};let K;const U=()=>{f.value=!1,clearTimeout(K),K=setTimeout(()=>{U(),N("down")},g.value)},de=()=>{f.value?(v.value&&fe(),v.value=!1,(u.coords.length===0||d.coords.length===0)&&J(),U()):F()},F=()=>{f.value=!0,clearTimeout(K)},fe=()=>{v.value=!1,u.coords=[],d.coords=[],ee(),J(),U(),f.value=!1,I.value=0,g.value=z[0]},pe=t=>{if(v.value){t.preventDefault();return}switch(t.code){case"KeyS":case"ArrowDown":W(),t.preventDefault();break;case"Space":case"KeyW":case"ArrowUp":Z(),t.preventDefault();break;case"KeyA":case"ArrowLeft":N("left"),t.preventDefault();break;case"KeyD":case"ArrowRight":N("right"),t.preventDefault();break}},_e=function(t){t.preventDefault()};return je(()=>{ee(),de(),window.addEventListener("keydown",pe,{}),S.value.focus(),R.forEach(t=>{Oe(t.ref,()=>{R.forEach(e=>{clearInterval(e.inter)}),t.inter=Xe(()=>{N(t.side)},100)},{delay:200}),t.ref.value.$el.addEventListener("pointerup",()=>{clearInterval(t.inter)}),t.ref.value.$el.addEventListener("dblclick",e=>{e.preventDefault()},{passive:!1})}),document.addEventListener("touchstart",_e,!1)}),Je(()=>{F(),window.removeEventListener("keydown",pe),window.removeEventListener("touchstart",_e)}),(t,e)=>{const s=Ge,o=Fe,n=Ue,a=Ye;return C(),He(a,{class:"p-tetris"},{default:j(()=>[r("div",{ref_key:"tetrisCore",ref:S,class:"tetris-core",tabindex:"-1"},[e[6]||(e[6]=r("div",{class:"t-logo"},[r("svg",{viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg"},[r("g",null,[r("title",null,"Layer 1"),r("polyline",{stroke:"null",fill:"white",points:"110.58999633789062,290.98870849609375 110.58999633789062,291.6787109375 110.58999633789062,291.98870849609375 ",class:"cls-1"}),r("g",{id:"svg_4"},[r("path",{stroke:"null",fill:"white",d:"m161.70001,64.285l0,48.6c0,24 -15.36,37.32 -41.28,37.32c-11,0 -19.67,-2.88 -26,-7.92c-6.24,5 -15,7.92 -26,7.92c-25.8,0 -41.16,-13.32 -41.16,-37.32l0,-48.6l28.32,0l0,47.78c-0.07,10.08 3.77,15.22 12.34,15.22s12.36,-5.16 12.36,-15.24l0,-47.76l28.32,0l0,47.78c0,10.08 3.84,15.24 12.47,15.24s12.36,-5.16 12.36,-15.24l0,-47.78l28.27,0z",class:"cls-1"}),r("path",{stroke:"null",fill:"white",d:"m171.07001,63.585c0,-7.79 6.36,-13.79 16.32,-13.79s16.32,5.49 16.32,13.32c0,8.27 -6.36,14.27 -16.32,14.27s-16.32,-6 -16.32,-13.8zm2.76,19.08l27.09,0l0,65.62l-27.09,0l0,-65.62z",class:"cls-1"}),r("path",{stroke:"null",fill:"white",d:"m285.42001,110.865l0,37.42l-27.12,0l0,-32.74c0,-8.16 -3.12,-11.28 -8,-11.28c-5.51,0 -10.2,3.48 -10.2,13.2l0,30.82l-27.18,0l0,-65.62l25.8,0l0,6.48c5.15,-5.16 12.11,-7.68 19.79,-7.68c15.15,0 26.91,8.76 26.91,29.4z",class:"cls-1"}),r("path",{stroke:"null",fill:"white",d:"m342.30001,146.025c-4.2,2.4 -10.32,3.48 -16.68,3.48c-18.12,0 -28.67,-8.52 -28.67,-26.64l0,-55l27.11,0l0,18.42l13.44,0l0,19.8l-13.44,0l0,16.54c0,4.08 2.4,6.36 5.64,6.36a11.06,11.06 0 0 0 6.12,-1.8l6.48,18.84z",class:"cls-1"}),r("path",{stroke:"null",fill:"white",d:"m398.10001,124.665l14.16,14.28c-6.48,7 -15.72,10.56 -28.68,10.56c-24.12,0 -39.71,-14.52 -39.71,-34.08c0,-19.92 16.08,-34 37.67,-34c19.08,0 35.64,11.76 35.64,33.6l-44.88,8.64c2.16,4.08 6.24,5.76 12.12,5.76s9.36,-1.52 13.68,-4.76zm-27.6,-13.8l21,-4.08a10,10 0 0 0 -9.84,-6.84c-6.12,0 -10.32,3.48 -11.16,10.92z",class:"cls-1"}),r("path",{stroke:"null",fill:"white",d:"m472.74001,81.465l0,24a37.58,37.58 0 0 0 -6,-0.48c-8.16,0 -13.92,3.72 -13.92,14.16l0,29.14l-27.11,0l0,-65.62l25.79,0l0,7.08c4.8,-5.52 12.12,-8.28 21.24,-8.28z",class:"cls-1"})])])])],-1)),r("div",st,[r("div",ot,[(C(!0),E(H,null,V(m(Se).bricks,(l,h)=>(C(),E("div",{key:h,class:"tetris-row"},[(C(!0),E(H,null,V(l,(Y,B)=>(C(),E("div",{key:B,class:G(["tetris-brick",{take:Y.take}])},e[2]||(e[2]=[r("div",{class:"brick-inner"},null,-1)]),2))),128))]))),128)),m(v)?(C(),E("img",rt)):Ve("",!0)]),r("div",nt,[r("div",lt,[r("p",ct,$(m(I)),1),e[3]||(e[3]=r("p",{class:"f-pixel"},"SCORE",-1))]),r("div",at,[r("div",it,[p(s,{coords:m(d).coords},null,8,["coords"])]),e[4]||(e[4]=r("p",{class:"f-pixel"},"NEXT",-1))]),r("div",ut,[r("p",dt,$(m(Ce)),1),e[5]||(e[5]=r("p",{class:"f-pixel"},"SPEED LEVEL",-1))]),r("div",ft,[r("img",{src:ye,class:G(["h-30",{cartoon:!m(f)}])},null,2)]),r("div",pt,[r("p",_t,$(t.$brandName)+".com",1)])])]),r("div",ht,[r("div",vt,[p(o,{type:"danger",round:"",icon:m(f)?m(ke):m(ge),onClick:de},null,8,["icon"]),p(o,{type:"danger",round:"",class:"bg-red-01",onClick:fe})]),r("div",mt,[r("div",kt,[p(o,{class:"btn-op z-1 -mb-4",onClick:Z}),r("div",gt,[p(o,{ref_key:"btnLeft",ref:D,class:"btn-op",onClick:e[0]||(e[0]=l=>ue("left",l))},null,512),r("div",bt,[p(n,null,{default:j(()=>[p(m(Re))]),_:1}),p(n,null,{default:j(()=>[p(m(Pe))]),_:1}),p(n,null,{default:j(()=>[p(m(We))]),_:1}),p(n,null,{default:j(()=>[p(m(Ze))]),_:1})]),p(o,{ref_key:"btnRight",ref:y,class:"btn-op",onClick:e[1]||(e[1]=l=>ue("right",l))},null,512)]),p(o,{ref_key:"btnDown",ref:x,class:"btn-op z-1 -mt-4",onClick:W},null,512)]),p(o,{class:"btn-sure",onClick:Z})])])],512),r("div",wt,[r("p",Ct,$(k("操作说明")),1),r("div",St,[r("div",Lt,[p(o,{type:"danger",round:"",icon:m(f)?m(ke):m(ge)},null,8,["icon"]),r("p",Et,$(k("开始或者暂停")),1)]),r("div",Bt,[p(o,{type:"danger",round:"",class:"bg-red-01"}),r("p",Dt,$(k("重新开始")),1)]),r("div",$t,[p(o,{type:"danger",class:"w-32 min-w-32",round:""}),r("p",zt,$(k("小按钮，控制左、_5fd0")),1)]),r("div",At,[p(o,{type:"danger",class:"w-32 min-w-32",round:""}),r("p",It,$(k("大按钮，旋转按钮_6e4b")),1)])])])]),_:1})}}};export{Zt as default};
