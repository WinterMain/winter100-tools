import{aq as ke,s as q,r as H,z as X,aF as Q,b7 as xe,I as je,A as F,X as we,k as Ue,a_ as Ye,l as ee,cz as Ce,m as qe,b0 as Xe,U as ne,W as te,n as Fe,aH as Ze,Y as _e,L as m,y as Se,ct as Ge,d0 as Je,d1 as Qe,bp as et,B as tt,b2 as Ie,o as ot,bf as at,a as v,D as C,a3 as h,ac as oe,F as b,e as t,S as j,b as T,c as I,w as R,aC as U,E as A,aK as ae,d as nt,aZ as st,az as lt,bq as it,t as Y,G as rt,H as ut,bZ as Ee,a4 as ct}from"./B-QOD2V0.js";import{u as dt}from"./DAHZR6uB.js";import{u as pt,c as ft,a as vt,b as mt}from"./Bqp38iMX.js";const ht=()=>ke&&/firefox/i.test(window.navigator.userAgent),gt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a);function bt(a){let u;function i(){if(a.value==null)return;const{selectionStart:l,selectionEnd:c,value:p}=a.value;if(l==null||c==null)return;const s=p.slice(0,Math.max(0,l)),r=p.slice(Math.max(0,c));u={selectionStart:l,selectionEnd:c,value:p,beforeTxt:s,afterTxt:r}}function o(){if(a.value==null||u==null)return;const{value:l}=a.value,{beforeTxt:c,afterTxt:p,selectionStart:s}=u;if(c==null||p==null||s==null)return;let r=l.length;if(l.endsWith(p))r=l.length-p.length;else if(l.startsWith(c))r=c.length;else{const y=c[s-1],x=l.indexOf(y,s-1);x!==-1&&(r=x+1)}a.value.setSelectionRange(r,r)}return[i,o]}function yt(a,{beforeFocus:u,afterFocus:i,beforeBlur:o,afterBlur:l}={}){const c=je(),{emit:p}=c,s=q(),r=H(!1),y=g=>{xe(u)&&u(g)||r.value||(r.value=!0,p("focus",g),i==null||i())},x=g=>{var E;xe(o)&&o(g)||g.relatedTarget&&((E=s.value)!=null&&E.contains(g.relatedTarget))||(r.value=!1,p("blur",g),l==null||l())},f=()=>{var g,E;(g=s.value)!=null&&g.contains(document.activeElement)&&s.value!==document.activeElement||(E=a.value)==null||E.focus()};return X(s,g=>{g&&g.setAttribute("tabindex","-1")}),Q(s,"focus",y,!0),Q(s,"blur",x,!0),Q(s,"click",f,!0),{isFocused:r,wrapperRef:s,handleFocus:y,handleBlur:x}}function xt({afterComposition:a,emit:u}){const i=H(!1),o=s=>{u==null||u("compositionstart",s),i.value=!0},l=s=>{var r;u==null||u("compositionupdate",s);const y=(r=s.target)==null?void 0:r.value,x=y[y.length-1]||"";i.value=!gt(x)},c=s=>{u==null||u("compositionend",s),i.value&&(i.value=!1,F(()=>a(s)))};return{isComposing:i,handleComposition:s=>{s.type==="compositionend"?c(s):l(s)},handleCompositionStart:o,handleCompositionUpdate:l,handleCompositionEnd:c}}let w;const wt="\n  height:0 !important;\n  visibility:hidden !important;\n  ".concat(ht()?"":"overflow:hidden !important;","\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n"),Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function St(a){const u=window.getComputedStyle(a),i=u.getPropertyValue("box-sizing"),o=Number.parseFloat(u.getPropertyValue("padding-bottom"))+Number.parseFloat(u.getPropertyValue("padding-top")),l=Number.parseFloat(u.getPropertyValue("border-bottom-width"))+Number.parseFloat(u.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(p=>"".concat(p,":").concat(u.getPropertyValue(p))).join(";"),paddingSize:o,borderSize:l,boxSizing:i}}function ze(a,u=1,i){var o;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:l,borderSize:c,boxSizing:p,contextStyle:s}=St(a);w.setAttribute("style","".concat(s,";").concat(wt)),w.value=a.value||a.placeholder||"";let r=w.scrollHeight;const y={};p==="border-box"?r=r+c:p==="content-box"&&(r=r-l),w.value="";const x=w.scrollHeight-l;if(we(u)){let f=x*u;p==="border-box"&&(f=f+l+c),r=Math.max(f,r),y.minHeight="".concat(f,"px")}if(we(i)){let f=x*i;p==="border-box"&&(f=f+l+c),r=Math.min(f,r)}return y.height="".concat(r,"px"),(o=w.parentNode)==null||o.removeChild(w),w=void 0,y}const It=Ue({id:{type:String,default:void 0},size:Ye,disabled:Boolean,modelValue:{type:ee([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ee([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ee([Object,Array,String]),default:()=>qe({})},autofocus:Boolean,rows:{type:Number,default:2},...Xe(["ariaLabel"])}),Et={[ne]:a=>te(a),input:a=>te(a),change:a=>te(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},zt=Fe({name:"ElInput",inheritAttrs:!1}),kt=Fe({...zt,props:It,emits:Et,setup(a,{expose:u,emit:i}){const o=a,l=Ze(),c=_e(),p=m(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),s=m(()=>[o.type==="textarea"?se.b():n.b(),n.m(E.value),n.is("disabled",z.value),n.is("exceed",$e.value),{[n.b("group")]:c.prepend||c.append,[n.m("prefix")]:c.prefix||o.prefixIcon,[n.m("suffix")]:c.suffix||o.suffixIcon||o.clearable||o.showPassword,[n.bm("suffix","password-clear")]:W.value&&_.value,[n.b("hidden")]:o.type==="hidden"},l.class]),r=m(()=>[n.e("wrapper"),n.is("focus",K.value)]),y=dt({excludeKeys:m(()=>Object.keys(p.value))}),{form:x,formItem:f}=pt(),{inputId:g}=ft(o,{formItemContext:f}),E=vt(),z=mt(),n=Se("input"),se=Se("textarea"),L=q(),S=q(),Z=H(!1),O=H(!1),le=H(),D=q(o.inputStyle),P=m(()=>L.value||S.value),{wrapperRef:Pe,isFocused:K,handleFocus:Ne,handleBlur:Ve}=yt(P,{beforeFocus(){return z.value},afterBlur(){var e;o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"blur").catch(d=>Ie()))}}),ie=m(()=>{var e;return(e=x==null?void 0:x.statusIcon)!=null?e:!1}),B=m(()=>(f==null?void 0:f.validateState)||""),re=m(()=>B.value&&Ge[B.value]),Te=m(()=>O.value?Je:Qe),Be=m(()=>[l.style]),ue=m(()=>[o.inputStyle,D.value,{resize:o.resize}]),k=m(()=>et(o.modelValue)?"":String(o.modelValue)),W=m(()=>o.clearable&&!z.value&&!o.readonly&&!!k.value&&(K.value||Z.value)),_=m(()=>o.showPassword&&!z.value&&!o.readonly&&!!k.value&&(!!k.value||K.value)),N=m(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!z.value&&!o.readonly&&!o.showPassword),G=m(()=>k.value.length),$e=m(()=>!!N.value&&G.value>Number(o.maxlength)),Me=m(()=>!!c.suffix||!!o.suffixIcon||W.value||o.showPassword||N.value||!!B.value&&ie.value),[Re,Ae]=bt(L);tt(S,e=>{if(He(),!N.value||o.resize!=="both")return;const d=e[0],{width:V}=d.contentRect;le.value={right:"calc(100% - ".concat(V+15+6,"px)")}});const $=()=>{const{type:e,autosize:d}=o;if(!(!ke||e!=="textarea"||!S.value))if(d){const V=Ee(d)?d.minRows:void 0,be=Ee(d)?d.maxRows:void 0,ye=ze(S.value,V,be);D.value={overflowY:"hidden",...ye},F(()=>{S.value.offsetHeight,D.value=ye})}else D.value={minHeight:ze(S.value).minHeight}},He=(e=>{let d=!1;return()=>{var V;if(d||!o.autosize)return;((V=S.value)==null?void 0:V.offsetParent)===null||(e(),d=!0)}})($),M=()=>{const e=P.value,d=o.formatter?o.formatter(k.value):k.value;!e||e.value===d||(e.value=d)},J=async e=>{Re();let{value:d}=e.target;if(o.formatter&&(d=o.parser?o.parser(d):d),!de.value){if(d===k.value){M();return}i(ne,d),i("input",d),await F(),M(),Ae()}},ce=e=>{i("change",e.target.value)},{isComposing:de,handleCompositionStart:pe,handleCompositionUpdate:fe,handleCompositionEnd:ve}=xt({emit:i,afterComposition:J}),Le=()=>{O.value=!O.value,me()},me=async()=>{var e;await F(),(e=P.value)==null||e.focus()},Oe=()=>{var e;return(e=P.value)==null?void 0:e.blur()},De=e=>{Z.value=!1,i("mouseleave",e)},Ke=e=>{Z.value=!0,i("mouseenter",e)},he=e=>{i("keydown",e)},We=()=>{var e;(e=P.value)==null||e.select()},ge=()=>{i(ne,""),i("change",""),i("clear"),i("input","")};return X(()=>o.modelValue,()=>{var e;F(()=>$()),o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(d=>Ie()))}),X(k,()=>M()),X(()=>o.type,async()=>{await F(),M(),$()}),ot(()=>{!o.formatter&&o.parser,M(),F($)}),u({input:L,textarea:S,ref:P,textareaStyle:ue,autosize:at(o,"autosize"),isComposing:de,focus:me,blur:Oe,select:We,clear:ge,resizeTextarea:$}),(e,d)=>(v(),C("div",ae(t(p),{class:[t(s),{[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend}],style:t(Be),role:e.containerRole,onMouseenter:Ke,onMouseleave:De}),[h(" input "),e.type!=="textarea"?(v(),C(oe,{key:0},[h(" prepend slot "),e.$slots.prepend?(v(),C("div",{key:0,class:b(t(n).be("group","prepend"))},[j(e.$slots,"prepend")],2)):h("v-if",!0),T("div",{ref_key:"wrapperRef",ref:Pe,class:b(t(r))},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),C("span",{key:0,class:b(t(n).e("prefix"))},[T("span",{class:b(t(n).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(v(),I(t(A),{key:0,class:b(t(n).e("icon"))},{default:R(()=>[(v(),I(U(e.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),T("input",ae({id:t(g),ref_key:"input",ref:L,class:t(n).e("inner")},t(y),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:J,onChange:ce,onKeydown:he}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","onCompositionstart","onCompositionupdate","onCompositionend"]),h(" suffix slot "),t(Me)?(v(),C("span",{key:1,class:b(t(n).e("suffix"))},[T("span",{class:b(t(n).e("suffix-inner"))},[!t(W)||!t(_)||!t(N)?(v(),C(oe,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(v(),I(t(A),{key:0,class:b(t(n).e("icon"))},{default:R(()=>[(v(),I(U(e.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),t(W)?(v(),I(t(A),{key:1,class:b([t(n).e("icon"),t(n).e("clear")]),onMousedown:lt(t(it),["prevent"]),onClick:ge},{default:R(()=>[nt(t(st))]),_:1},8,["class","onMousedown"])):h("v-if",!0),t(_)?(v(),I(t(A),{key:2,class:b([t(n).e("icon"),t(n).e("password")]),onClick:Le},{default:R(()=>[(v(),I(U(t(Te))))]),_:1},8,["class"])):h("v-if",!0),t(N)?(v(),C("span",{key:3,class:b(t(n).e("count"))},[T("span",{class:b(t(n).e("count-inner"))},Y(t(G))+" / "+Y(e.maxlength),3)],2)):h("v-if",!0),t(B)&&t(re)&&t(ie)?(v(),I(t(A),{key:4,class:b([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(B)==="validating")])},{default:R(()=>[(v(),I(U(t(re))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(v(),C("div",{key:1,class:b(t(n).be("group","append"))},[j(e.$slots,"append")],2)):h("v-if",!0)],64)):(v(),C(oe,{key:1},[h(" textarea "),T("textarea",ae({id:t(g),ref_key:"textarea",ref:S,class:[t(se).e("inner"),t(n).is("focus",t(K))]},t(y),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ue),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:J,onFocus:t(Ne),onBlur:t(Ve),onChange:ce,onKeydown:he}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(N)?(v(),C("span",{key:0,style:rt(le.value),class:b(t(n).e("count"))},Y(t(G))+" / "+Y(e.maxlength),7)):h("v-if",!0)],64))],16,["role"]))}});var Ft=ut(kt,[["__file","input.vue"]]);const Bt=ct(Ft);export{Bt as E,yt as a,xt as u};
