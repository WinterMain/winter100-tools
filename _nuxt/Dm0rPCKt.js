import{k as q,o as C,c as E,F as J,j as R,O as G,a as n,f as m,p as be,r as w,ag as X,N as Te,aO as Oe,av as je,e as He,w as O,m as Je,t as $,b as _,aP as me,aQ as ke,aR as Re,aS as Ve,aT as Pe,aU as We,u as Ze,E as Ke}from"./Cd6Bqf1O.js";import{E as Ue}from"./XYzsEU-X.js";import{_ as Fe}from"./CviNkJmE.js";import{u as Ye}from"./BeKS07vu.js";import{s as Qe}from"./DJqb6mek.js";import"./W-QnKJ1X.js";import"./NFpAc76G.js";import"./JAUZZBS7.js";import"./Bbku4ntO.js";import"./Co703A2h.js";import"./CY9JnvBY.js";const Xe={class:"c-main-tetris-brick"},qe={__name:"TetrisBrick",props:{xCount:{type:Number,default:4},yCount:{type:Number,default:4},coords:{type:Array,default:()=>[]}},setup(M){const k=M,l=p=>{let i=k.xCount*-1,u=k.yCount*-1,d=k.xCount,g=k.yCount;const S=[];for(let h=0;h<p.length;h++){const f=p[h];S.push("".concat(f[0],"-").concat(f[1])),d>=f[0]&&(d=f[0]),g>=f[1]&&(g=f[1]),i<=f[0]&&(i=f[0]),u<=f[1]&&(u=f[1])}return{xMax:i,yMax:u,xMin:d,yMin:g,unfold:S.join(",")}},z=p=>{const{xMin:i,xMax:u,yMax:d,yMin:g}=l(p),S=Math.round((k.xCount-(u-i+1))/2)-i,h=[];for(let L=0;L<p.length;L++){const D=p[L];h.push([D[0]+S,D[1]])}const f=[],A=Math.round((k.yCount-(d-g+1))/2)-g;for(let L=0;L<p.length;L++){const D=h[L];f.push([D[0],D[1]+A])}return f},b=q(()=>{const p=[];for(let i=0;i<k.yCount;i++){const u=[];for(let d=0;d<k.xCount;d++){let g=!1;k.coords.length&&z(k.coords).find(h=>h.join("-")==="".concat(d,"-").concat(i))&&(g=!0),u.push({take:g})}p.push(u)}return{bricks:p}});return(p,i)=>(C(),E("div",Xe,[(C(!0),E(J,null,R(m(b).bricks,(u,d)=>(C(),E("div",{key:d,class:"tetris-row"},[(C(!0),E(J,null,R(u,(g,S)=>(C(),E("div",{key:S,class:G(["tetris-brick",{take:g.take}])},i[0]||(i[0]=[n("div",{class:"brick-inner"},null,-1)]),2))),128))]))),128))]))}},Ge=be("/images/gameover.svg"),Me=be("/images/rabit1.svg?t=1"),ye={"大按钮，旋转按钮_6e4b":"Large button is the rotate button, or use one of the following: Arrow key↑, space bar, W key.","小按钮，控制左、_5fd0":"Small button to control left, right, and down directions. Note that the up direction is rotation. Or use one of the following: ↑←→↓ arrow keys on the keyboard, W A S D keys on the keyboard.",开始或者暂停:"Start or Pause",操作说明:"Instructions",重新开始:"Restart game"},xe={"大按钮，旋转按钮_6e4b":"大按钮，旋转按钮，或者下面其中一种：方向键↑、空格键、W按键。","小按钮，控制左、_5fd0":"小按钮，控制左、右、下方向，注意方向上为旋转。或者下面其中一种：键盘上的↑←→↓方向键、键盘上W A S D按键。",开始或者暂停:"开始或者暂停",操作说明:"操作说明",重新开始:"重新开始"},et={"大按钮，旋转按钮_6e4b":"大按鈕，旋轉按鈕，或者下面其中一種：方向鍵↑、空格鍵、W按鍵。","小按钮，控制左、_5fd0":"小按鈕，控制左、右、下方向，注意方向上為旋轉。或者下面其中一種：鍵盤上的↑←→↓方向鍵、鍵盤上W A S D按鍵。",开始或者暂停:"開始或者暫停",操作说明:"操作說明",重新开始:"重新開始"},ge={en_US:ye,zh_Hans_CN:xe,zh_Hant_HK:et},tt={class:"tetris-stage"},st={class:"tetris-main"},ot={key:0,class:"gameover",src:Ge},rt={class:"text-12 flex-1 text-right space-y-20 flex flex-col"},nt={class:"t-field"},lt={class:"f-pixel"},ct={class:"t-field"},at={class:"flex justify-end"},it={class:"t-field"},ut={class:"f-pixel"},dt={class:"flex justify-end flex-1"},ft={class:"t-field"},pt={class:"f-pixel",style:{"font-size":"5px"}},_t={class:"op-stage"},vt={class:"pb-20 text-center"},ht={class:"flex items-center justify-between"},mt={class:"btns-side relative"},kt={class:"flex items-center whitespace-nowrap relative"},gt={class:"direct"},bt={class:"mt-40"},wt={class:"label select-none"},Ct={class:"space-y-12"},St={class:"flex items-center"},Lt={class:"ml-20 select-none"},Et={class:"flex items-center"},Bt={class:"ml-20"},Dt={class:"flex items-center"},$t={class:"ml-20"},zt={class:"flex items-center"},At={class:"ml-20"},Zt={__name:"tetris",setup(M){const k=t=>{const s=Ze().$lang.value||"zh_Hans_CN",o=ge[s]||ge.zh_Hans_CN||{};return o[t]===void 0?t:o[t]};Ye({meta:[{name:"viewport",content:"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-touch-fullscreen",content:"yes"},{name:"browsermode",content:"application"},{name:"x5-page-mode",content:"app"},{name:"apple-mobile-web-app-status-bar-style",content:"black"}]});const l={S:"S",Z:"Z",L:"L",I:"I",O:"O",T:"T",J:"J"},z=[600,500,400,300,200,150,100,90,80,70,60,50],b=w(10),p=w(20),i=X([]),u=X({type:l.S,coords:[]}),d=X({type:l.S,coords:[]}),g=w(z[0]),S=w(),h=w(!1),f=w(!0),A=w(0),L=w(!1),D=w(),y=w(),x=w(),V=[{side:"left",ref:D,inter:null},{side:"right",ref:y,inter:null},{side:"down",ref:x,inter:null}],we=q(()=>z.findIndex(t=>t===g.value)+1),Ce=q(()=>{const t=[];for(let e=0;e<p.value;e++){const s=[];for(let o=0;o<b.value;o++){let r=!1;i[o]&&i[o][e]&&(r=!0),u.coords.find(c=>c.join("-")==="".concat(o,"-").concat(e))&&(r=!0),s.push({take:r})}t.push(s)}return{bricks:t}}),ee=()=>{for(let t=0;t<b.value;t++)i[t]=[]},j=t=>{let e=b.value*-1,s=p.value*-1,o=b.value,r=p.value;const c=[];for(let a=0;a<t.length;a++){const v=t[a];c.push("".concat(v[0],"-").concat(v[1])),o>=v[0]&&(o=v[0]),r>=v[1]&&(r=v[1]),e<=v[0]&&(e=v[0]),s<=v[1]&&(s=v[1])}return{xMax:e,yMax:s,xMin:o,yMin:r,unfold:c.join(",")}},Se=t=>{const{xMin:e,xMax:s}=j(t),o=Math.round((b.value-(s-e+1))/2)-e,r=[];for(let c=0;c<t.length;c++){const a=t[c];r.push([a[0]+o,a[1]])}return r},te=(t=0,e=0,s=!0)=>s?[[t,e],[t,e+1],[t+1,e+1],[t+1,e+2]]:[[t+1,e],[t+2,e],[t,e+1],[t+1,e+1]],se=(t=0,e=0,s=!0)=>s?[[t+1,e],[t,e+1],[t+1,e+1],[t,e+2]]:[[t,e],[t+1,e],[t+1,e+1],[t+2,e+1]],oe=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 1:return[[t,e],[t+1,e],[t,e+1],[t,e+2]];case 2:return[[t,e],[t+1,e],[t+2,e],[t+2,e+1]];case 3:return[[t+1,e],[t+1,e+1],[t,e+2],[t+1,e+2]]}},re=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t+2,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 1:return[[t,e],[t,e+1],[t,e+2],[t+1,e+2]];case 2:return[[t,e],[t+1,e],[t+2,e],[t,e+1]];case 3:return[[t,e],[t+1,e],[t+1,e+1],[t+1,e+2]]}},ne=(t=0,e=0,s=!0)=>s?[[t,e],[t,e+1],[t,e+2],[t,e+3]]:[[t,e],[t+1,e],[t+2,e],[t+3,e]],Le=(t=0,e=0)=>[[t,e],[t+1,e],[t,e+1],[t+1,e+1]],le=(t=0,e=0,s=0)=>{switch(s){case 0:return[[t+1,e],[t,e+1],[t+1,e+1],[t+1,e+2]];case 1:return[[t+1,e],[t,e+1],[t+1,e+1],[t+2,e+1]];case 2:return[[t,e],[t,e+1],[t+1,e+1],[t,e+2]];case 3:return[[t,e],[t+1,e],[t+2,e],[t+1,e+1]]}},Ee=(t,e)=>{const{xMin:s,yMin:o,yMax:r}=j(t),c=r-o>=2;return l.I===e?ne(s,o,!c):e===l.S?te(s,o,!c):se(s,o,!c)},P=(t,e,s)=>{const{xMin:o,yMin:r,yMax:c,unfold:a}=j(e),v=c-r,Y={0:1,1:2,2:1,3:2};let B=0;const T=s({xMin:o,yMin:r,yMax:c,unfold:a});for(let I=0;I<T.length;I++){const Ne=typeof T[I].offset>"u"?Y[T[I].side]:T[I].offset;if(v===Ne){const _e=T[I].coords;let ve=!0;for(let Q=0;Q<_e.length;Q++){const he=_e[Q];if(a.includes("".concat(he[0],"-").concat(he[1]))){ve=!1;break}}if(ve){B=T[I].side;break}}}return B++,B>3&&(B=0),t===l.L?oe(o,r,B):t===l.J?re(o,r,B):le(o,r,B)},Be=t=>P(l.L,t,({xMin:e,yMin:s})=>[{coords:[[e+1,s],[e+2,s]],side:0},{coords:[[e+1,s+1],[e+1,s+2]],side:1},{coords:[[e,s+1],[e+1,s+1]],side:2},{coords:[[e,s],[e,s+1]],side:3}]),De=t=>P(l.J,t,({xMin:e,yMin:s})=>[{coords:[[e,s],[e+1,s]],side:0},{coords:[[e+1,s],[e+1,s+1]],side:1},{coords:[[e+1,s+1],[e+2,s+1]],side:2},{coords:[[e,s+1],[e,s+2]],side:3}]),$e=t=>P(l.T,t,({xMin:e,yMin:s})=>[{coords:[[e,s],[e,s+2]],side:0,offset:2},{coords:[[e,s],[e+2,s]],side:1,offset:1},{coords:[[e+1,s],[e+1,s+2]],side:2,offset:2},{coords:[[e,s+1],[e+2,s+1]],side:3,offset:1}]),ze=(t,e)=>{switch(t){case l.S:return te(0,0,e);case l.Z:return se(0,0,e);case l.L:return oe(0,0,e);case l.J:return re(0,0,e);case l.I:return ne(0,0,e);case l.O:return Le(0,0);case l.T:return le(0,0,e)}},Ae=({type:t,coords:e})=>{let s=e;switch(t){case l.S:case l.Z:case l.I:s=Ee(e,u.type);break;case l.L:s=Be(e);break;case l.J:s=De(e);break;case l.T:s=$e(e);break;default:s=e}for(let o=0;o<s.length;o++)if(!ce(s[o]))return e;return s},ce=t=>t[0]>=0&&t[0]<b.value&&t[1]<p.value&&!(i[t[0]]&&i[t[0]][t[1]]),ae=({type:t,coords:e})=>{u.type=t;const s=Se(e),{yMax:o}=j(s);for(let r=0;r<s.length;r++)s[r][1]=s[r][1]-o-1;u.coords=s},H=()=>{const t=parseInt(Date.now()*Math.random()),e=Object.keys(l),s=l[e[t%e.length]];let o=t%4;[l.S,l.Z,l.I].includes(s)&&(o=o>1);const r=ze(s,o);u.coords.length===0?(ae({type:s,coords:r}),H()):d.coords.length===0?(d.type=s,d.coords=r):(ae({...d}),d.type=s,d.coords=r)},Ie=t=>{t.forEach(e=>{e[0]>=0&&e[1]>=0&&(i[e[0]][e[1]]=!0)})},ie=(t=0,e=0)=>{let s=!0,o=t;for(;o<p.value;o++){s=!0;for(let r=0;r<b.value;r++)if(!i[r][o]){s=!1;break}if(s)break}if(s){A.value+=2**e*100;const r=Math.min(z.length-1,parseInt(A.value/(p.value*100)));console.log(r,parseInt(A.value/(p*100))),g.value=z[r];for(let a=0;a<b.value;a++)i[a][o]=!1;const c=JSON.parse(JSON.stringify(i));if(o>=0&&o<p.value)for(let a=o;a>=0;a--)for(let v=0;v<b.value;v++)i[v][a]=a-1>=0?c[v][a-1]:!1;ie(o,e+1)}},N=(t,e)=>{const s=[];h.value=!1,L.value=!L.value;for(let o=0;o<u.coords.length;o++){const r=u.coords[o];let c;if(t==="left"?c=[r[0]-1,r[1]]:t==="right"?c=[r[0]+1,r[1]]:t==="up"?c=[r[0],r[1]-1]:t==="down"&&(c=[r[0],r[1]+1]),ce(c))s.push(c);else{if(t==="down")if(c[1]<=0){h.value=!0,F();return}else Ie(u.coords),ie(),H();return}}u.coords=s},W=(t,e)=>{h.value||(V.forEach(s=>{clearInterval(s.inter)}),N(t),e.preventDefault())},Z=()=>{h.value||(u.coords=Ae(u))};let K;const U=()=>{f.value=!1,clearTimeout(K),K=setTimeout(()=>{U(),N("down")},g.value)},ue=()=>{f.value?(h.value&&de(),h.value=!1,(u.coords.length===0||d.coords.length===0)&&H(),U()):F()},F=()=>{f.value=!0,clearTimeout(K)},de=()=>{h.value=!1,u.coords=[],d.coords=[],ee(),H(),U(),f.value=!1,A.value=0,g.value=z[0]},fe=t=>{if(h.value){t.preventDefault();return}switch(t.code){case"KeyS":case"ArrowDown":N("down"),t.preventDefault();break;case"Space":case"KeyW":case"ArrowUp":Z(),t.preventDefault();break;case"KeyA":case"ArrowLeft":N("left"),t.preventDefault();break;case"KeyD":case"ArrowRight":N("right"),t.preventDefault();break}},pe=function(t){t.preventDefault()};return Te(()=>{ee(),ue(),window.addEventListener("keydown",fe,{}),S.value.focus(),V.forEach(t=>{Oe(t.ref,()=>{V.forEach(e=>{clearInterval(e.inter)}),t.inter=Qe(()=>{N(t.side)},100)},{delay:200}),t.ref.value.$el.addEventListener("pointerup",()=>{clearInterval(t.inter)}),t.ref.value.$el.addEventListener("dblclick",e=>{e.preventDefault()},{passive:!1})}),document.addEventListener("touchstart",pe,!1)}),je(()=>{F(),window.removeEventListener("keydown",fe),window.removeEventListener("touchstart",pe)}),(t,e)=>{const s=qe,o=Ue,r=Ke,c=Fe;return C(),He(c,{class:"p-tetris"},{default:O(()=>[n("div",{ref_key:"tetrisCore",ref:S,class:"tetris-core",tabindex:"-1"},[e[7]||(e[7]=n("div",{class:"t-logo"},[n("svg",{viewBox:"0 0 500 200",xmlns:"http://www.w3.org/2000/svg"},[n("g",null,[n("title",null,"Layer 1"),n("polyline",{stroke:"null",fill:"white",points:"110.58999633789062,290.98870849609375 110.58999633789062,291.6787109375 110.58999633789062,291.98870849609375 ",class:"cls-1"}),n("g",{id:"svg_4"},[n("path",{stroke:"null",fill:"white",d:"m161.70001,64.285l0,48.6c0,24 -15.36,37.32 -41.28,37.32c-11,0 -19.67,-2.88 -26,-7.92c-6.24,5 -15,7.92 -26,7.92c-25.8,0 -41.16,-13.32 -41.16,-37.32l0,-48.6l28.32,0l0,47.78c-0.07,10.08 3.77,15.22 12.34,15.22s12.36,-5.16 12.36,-15.24l0,-47.76l28.32,0l0,47.78c0,10.08 3.84,15.24 12.47,15.24s12.36,-5.16 12.36,-15.24l0,-47.78l28.27,0z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m171.07001,63.585c0,-7.79 6.36,-13.79 16.32,-13.79s16.32,5.49 16.32,13.32c0,8.27 -6.36,14.27 -16.32,14.27s-16.32,-6 -16.32,-13.8zm2.76,19.08l27.09,0l0,65.62l-27.09,0l0,-65.62z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m285.42001,110.865l0,37.42l-27.12,0l0,-32.74c0,-8.16 -3.12,-11.28 -8,-11.28c-5.51,0 -10.2,3.48 -10.2,13.2l0,30.82l-27.18,0l0,-65.62l25.8,0l0,6.48c5.15,-5.16 12.11,-7.68 19.79,-7.68c15.15,0 26.91,8.76 26.91,29.4z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m342.30001,146.025c-4.2,2.4 -10.32,3.48 -16.68,3.48c-18.12,0 -28.67,-8.52 -28.67,-26.64l0,-55l27.11,0l0,18.42l13.44,0l0,19.8l-13.44,0l0,16.54c0,4.08 2.4,6.36 5.64,6.36a11.06,11.06 0 0 0 6.12,-1.8l6.48,18.84z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m398.10001,124.665l14.16,14.28c-6.48,7 -15.72,10.56 -28.68,10.56c-24.12,0 -39.71,-14.52 -39.71,-34.08c0,-19.92 16.08,-34 37.67,-34c19.08,0 35.64,11.76 35.64,33.6l-44.88,8.64c2.16,4.08 6.24,5.76 12.12,5.76s9.36,-1.52 13.68,-4.76zm-27.6,-13.8l21,-4.08a10,10 0 0 0 -9.84,-6.84c-6.12,0 -10.32,3.48 -11.16,10.92z",class:"cls-1"}),n("path",{stroke:"null",fill:"white",d:"m472.74001,81.465l0,24a37.58,37.58 0 0 0 -6,-0.48c-8.16,0 -13.92,3.72 -13.92,14.16l0,29.14l-27.11,0l0,-65.62l25.79,0l0,7.08c4.8,-5.52 12.12,-8.28 21.24,-8.28z",class:"cls-1"})])])])],-1)),n("div",tt,[n("div",st,[(C(!0),E(J,null,R(m(Ce).bricks,(a,v)=>(C(),E("div",{key:v,class:"tetris-row"},[(C(!0),E(J,null,R(a,(Y,B)=>(C(),E("div",{key:B,class:G(["tetris-brick",{take:Y.take}])},e[3]||(e[3]=[n("div",{class:"brick-inner"},null,-1)]),2))),128))]))),128)),m(h)?(C(),E("img",ot)):Je("",!0)]),n("div",rt,[n("div",nt,[n("p",lt,$(m(A)),1),e[4]||(e[4]=n("p",{class:"f-pixel"},"SCORE",-1))]),n("div",ct,[n("div",at,[_(s,{coords:m(d).coords},null,8,["coords"])]),e[5]||(e[5]=n("p",{class:"f-pixel"},"NEXT",-1))]),n("div",it,[n("p",ut,$(m(we)),1),e[6]||(e[6]=n("p",{class:"f-pixel"},"SPEED LEVEL",-1))]),n("div",dt,[n("img",{src:Me,class:G(["h-30",{cartoon:!m(f)}])},null,2)]),n("div",ft,[n("p",pt,$(t.$brandName)+".com",1)])])]),n("div",_t,[n("div",vt,[_(o,{type:"danger",round:"",icon:m(f)?m(me):m(ke),onClick:ue},null,8,["icon"]),_(o,{type:"danger",round:"",class:"bg-red-01",onClick:de})]),n("div",ht,[n("div",mt,[_(o,{class:"btn-op z-1 -mb-4",onClick:Z}),n("div",kt,[_(o,{ref_key:"btnLeft",ref:D,class:"btn-op",onClick:e[0]||(e[0]=a=>W("left",a))},null,512),n("div",gt,[_(r,null,{default:O(()=>[_(m(Re))]),_:1}),_(r,null,{default:O(()=>[_(m(Ve))]),_:1}),_(r,null,{default:O(()=>[_(m(Pe))]),_:1}),_(r,null,{default:O(()=>[_(m(We))]),_:1})]),_(o,{ref_key:"btnRight",ref:y,class:"btn-op",onClick:e[1]||(e[1]=a=>W("right",a))},null,512)]),_(o,{ref_key:"btnDown",ref:x,class:"btn-op z-1 -mt-4",onClick:e[2]||(e[2]=a=>W("down",a))},null,512)]),_(o,{class:"btn-sure",onClick:Z})])])],512),n("div",bt,[n("p",wt,$(k("操作说明")),1),n("div",Ct,[n("div",St,[_(o,{type:"danger",round:"",icon:m(f)?m(me):m(ke)},null,8,["icon"]),n("p",Lt,$(k("开始或者暂停")),1)]),n("div",Et,[_(o,{type:"danger",round:"",class:"bg-red-01"}),n("p",Bt,$(k("重新开始")),1)]),n("div",Dt,[_(o,{type:"danger",class:"w-32 min-w-32",round:""}),n("p",$t,$(k("小按钮，控制左、_5fd0")),1)]),n("div",zt,[_(o,{type:"danger",class:"w-32 min-w-32",round:""}),n("p",At,$(k("大按钮，旋转按钮_6e4b")),1)])])])]),_:1})}}};export{Zt as default};
