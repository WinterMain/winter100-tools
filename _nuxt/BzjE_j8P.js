import{i as Ue,d as Z,a as we,b as Ne,c as Ae,C as x,u as Pe,_ as Ge}from"./CgAHc0L6.js";import{U as X,u as Te,a as te,d as fe,b as ie,c as he,E as He}from"./nLcKvgGF.js";import{aj as ge,aa as ce,ak as de,al as ee,am as j,s as C,af as le,L as Ce,R as ke,an as Ve,r as R,ao as O,ap as ae,ae as Me,aq as ve,e as A,ar as _e,I as ne,o as k,i as H,w as U,a as B,n as D,j as e,a4 as q,c as S,H as L,a5 as W,as as J,V as oe,F as T,d as M,t as w,v as K,a6 as ye,W as se,A as Oe,T as Ke,U as je,at as qe,a2 as We,au as Je,av as xe,l as me,m as Q,b as I,q as be,aw as Xe,ax as Ze,E as Qe,z as Ye}from"./BmFdHkeb.js";import{u as Se,p as el}from"./DEPSAv6c.js";import{b as Y}from"./BeJ3Napg.js";import"./BxWK3w1N.js";import"./D2Q_MaKq.js";const Ee={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:ge,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...Se(["ariaControls"])},Ie={[X]:l=>ce(l)||de(l)||ee(l),change:l=>ce(l)||de(l)||ee(l)},P=Symbol("checkboxGroupContextKey"),ll=({model:l,isChecked:u})=>{const m=j(P,void 0),t=C(()=>{var r,p;const n=(r=m==null?void 0:m.max)==null?void 0:r.value,f=(p=m==null?void 0:m.min)==null?void 0:p.value;return!le(n)&&l.value.length>=n&&!u.value||!le(f)&&l.value.length<=f&&u.value});return{isDisabled:Te(C(()=>(m==null?void 0:m.disabled.value)||t.value)),isLimitDisabled:t}},al=(l,{model:u,isLimitExceeded:m,hasOwnLabel:t,isDisabled:c,isLabeledByFormItem:r})=>{const p=j(P,void 0),{formItem:n}=te(),{emit:f}=Ve();function d(a){var V,_,o,g;return[!0,l.trueValue,l.trueLabel].includes(a)?(_=(V=l.trueValue)!=null?V:l.trueLabel)!=null?_:!0:(g=(o=l.falseValue)!=null?o:l.falseLabel)!=null?g:!1}function s(a,V){f("change",d(a),V)}function i(a){if(m.value)return;const V=a.target;f("change",d(V.checked),a)}async function y(a){m.value||!t.value&&!c.value&&r.value&&(a.composedPath().some(o=>o.tagName==="LABEL")||(u.value=d([!1,l.falseValue,l.falseLabel].includes(u.value)),await ke(),s(u.value,a)))}const E=C(()=>(p==null?void 0:p.validateEvent)||l.validateEvent);return Ce(()=>l.modelValue,()=>{E.value&&(n==null||n.validate("change").catch(a=>fe()))}),{handleChange:i,onClickRoot:y}},tl=l=>{const u=R(!1),{emit:m}=Ve(),t=j(P,void 0),c=C(()=>le(t)===!1),r=R(!1),p=C({get(){var n,f;return c.value?(n=t==null?void 0:t.modelValue)==null?void 0:n.value:(f=l.modelValue)!=null?f:u.value},set(n){var f,d;c.value&&O(n)?(r.value=((f=t==null?void 0:t.max)==null?void 0:f.value)!==void 0&&n.length>(t==null?void 0:t.max.value)&&n.length>p.value.length,r.value===!1&&((d=t==null?void 0:t.changeEvent)==null||d.call(t,n))):(m(X,n),u.value=n)}});return{model:p,isGroup:c,isLimitExceeded:r}},nl=(l,u,{model:m})=>{const t=j(P,void 0),c=R(!1),r=C(()=>ae(l.value)?l.label:l.value),p=C(()=>{const s=m.value;return ee(s)?s:O(s)?Me(r.value)?s.map(ve).some(i=>Ue(i,r.value)):s.map(ve).includes(r.value):s!=null?s===l.trueValue||s===l.trueLabel:!!s}),n=ie(C(()=>{var s;return(s=t==null?void 0:t.size)==null?void 0:s.value}),{prop:!0}),f=ie(C(()=>{var s;return(s=t==null?void 0:t.size)==null?void 0:s.value})),d=C(()=>!!u.default||!ae(r.value));return{checkboxButtonSize:n,isChecked:p,isFocused:c,checkboxSize:f,hasOwnLabel:d,actualValue:r}},Be=(l,u)=>{const{formItem:m}=te(),{model:t,isGroup:c,isLimitExceeded:r}=tl(l),{isFocused:p,isChecked:n,checkboxButtonSize:f,checkboxSize:d,hasOwnLabel:s,actualValue:i}=nl(l,u,{model:t}),{isDisabled:y}=ll({model:t,isChecked:n}),{inputId:E,isLabeledByFormItem:a}=he(l,{formItemContext:m,disableIdGeneration:s,disableIdManagement:c}),{handleChange:V,onClickRoot:_}=al(l,{model:t,isLimitExceeded:r,hasOwnLabel:s,isDisabled:y,isLabeledByFormItem:a});return(()=>{function g(){var z,F;O(t.value)&&!t.value.includes(i.value)?t.value.push(i.value):t.value=(F=(z=l.trueValue)!=null?z:l.trueLabel)!=null?F:!0}l.checked&&g()})(),Z({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},C(()=>c.value&&ae(l.value))),Z({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},C(()=>!!l.trueLabel)),Z({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},C(()=>!!l.falseLabel)),{inputId:E,isLabeledByFormItem:a,isChecked:n,isDisabled:y,isFocused:p,checkboxButtonSize:f,checkboxSize:d,hasOwnLabel:s,model:t,actualValue:i,handleChange:V,onClickRoot:_}},ol=A({name:"ElCheckbox"}),sl=A({...ol,props:Ee,emits:Ie,setup(l){const u=l,m=_e(),{inputId:t,isLabeledByFormItem:c,isChecked:r,isDisabled:p,isFocused:n,checkboxSize:f,hasOwnLabel:d,model:s,actualValue:i,handleChange:y,onClickRoot:E}=Be(u,m),a=ne("checkbox"),V=C(()=>[a.b(),a.m(f.value),a.is("disabled",p.value),a.is("bordered",u.border),a.is("checked",r.value)]),_=C(()=>[a.e("input"),a.is("disabled",p.value),a.is("checked",r.value),a.is("indeterminate",u.indeterminate),a.is("focus",n.value)]);return(o,g)=>(k(),H(ye(!e(d)&&e(c)?"span":"label"),{class:D(e(V)),"aria-controls":o.indeterminate?o.ariaControls:null,onClick:e(E)},{default:U(()=>{var z,F;return[B("span",{class:D(e(_))},[o.trueValue||o.falseValue||o.trueLabel||o.falseLabel?q((k(),S("input",{key:0,id:e(t),"onUpdate:modelValue":$=>L(s)?s.value=$:null,class:D(e(a).e("original")),type:"checkbox",indeterminate:o.indeterminate,name:o.name,tabindex:o.tabindex,disabled:e(p),"true-value":(z=o.trueValue)!=null?z:o.trueLabel,"false-value":(F=o.falseValue)!=null?F:o.falseLabel,onChange:e(y),onFocus:$=>n.value=!0,onBlur:$=>n.value=!1,onClick:W(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[J,e(s)]]):q((k(),S("input",{key:1,id:e(t),"onUpdate:modelValue":$=>L(s)?s.value=$:null,class:D(e(a).e("original")),type:"checkbox",indeterminate:o.indeterminate,disabled:e(p),value:e(i),name:o.name,tabindex:o.tabindex,onChange:e(y),onFocus:$=>n.value=!0,onBlur:$=>n.value=!1,onClick:W(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[J,e(s)]]),B("span",{class:D(e(a).e("inner"))},null,2)],2),e(d)?(k(),S("span",{key:0,class:D(e(a).e("label"))},[oe(o.$slots,"default"),o.$slots.default?K("v-if",!0):(k(),S(T,{key:0},[M(w(o.label),1)],64))],2)):K("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var ul=se(sl,[["__file","checkbox.vue"]]);const rl=A({name:"ElCheckboxButton"}),il=A({...rl,props:Ee,emits:Ie,setup(l){const u=l,m=_e(),{isFocused:t,isChecked:c,isDisabled:r,checkboxButtonSize:p,model:n,actualValue:f,handleChange:d}=Be(u,m),s=j(P,void 0),i=ne("checkbox"),y=C(()=>{var a,V,_,o;const g=(V=(a=s==null?void 0:s.fill)==null?void 0:a.value)!=null?V:"";return{backgroundColor:g,borderColor:g,color:(o=(_=s==null?void 0:s.textColor)==null?void 0:_.value)!=null?o:"",boxShadow:g?`-1px 0 0 0 ${g}`:void 0}}),E=C(()=>[i.b("button"),i.bm("button",p.value),i.is("disabled",r.value),i.is("checked",c.value),i.is("focus",t.value)]);return(a,V)=>{var _,o;return k(),S("label",{class:D(e(E))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?q((k(),S("input",{key:0,"onUpdate:modelValue":g=>L(n)?n.value=g:null,class:D(e(i).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:e(r),"true-value":(_=a.trueValue)!=null?_:a.trueLabel,"false-value":(o=a.falseValue)!=null?o:a.falseLabel,onChange:e(d),onFocus:g=>t.value=!0,onBlur:g=>t.value=!1,onClick:W(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[J,e(n)]]):q((k(),S("input",{key:1,"onUpdate:modelValue":g=>L(n)?n.value=g:null,class:D(e(i).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:e(r),value:e(f),onChange:e(d),onFocus:g=>t.value=!0,onBlur:g=>t.value=!1,onClick:W(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[J,e(n)]]),a.$slots.default||a.label?(k(),S("span",{key:2,class:D(e(i).be("button","inner")),style:Oe(e(c)?e(y):void 0)},[oe(a.$slots,"default",{},()=>[M(w(a.label),1)])],6)):K("v-if",!0)],2)}}});var Le=se(il,[["__file","checkbox-button.vue"]]);const cl=Ke({modelValue:{type:je(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ge,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...Se(["ariaLabel"])}),dl={[X]:l=>O(l),change:l=>O(l)},vl=A({name:"ElCheckboxGroup"}),ml=A({...vl,props:cl,emits:dl,setup(l,{emit:u}){const m=l,t=ne("checkbox"),{formItem:c}=te(),{inputId:r,isLabeledByFormItem:p}=he(m,{formItemContext:c}),n=async d=>{u(X,d),await ke(),u("change",d)},f=C({get(){return m.modelValue},set(d){n(d)}});return qe(P,{...el(We(m),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:n}),Ce(()=>m.modelValue,()=>{m.validateEvent&&(c==null||c.validate("change").catch(d=>fe()))}),(d,s)=>{var i;return k(),H(ye(d.tag),{id:e(r),class:D(e(t).b("group")),role:"group","aria-label":e(p)?void 0:d.ariaLabel||"checkbox-group","aria-labelledby":e(p)?(i=e(c))==null?void 0:i.labelId:void 0},{default:U(()=>[oe(d.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Re=se(ml,[["__file","checkbox-group.vue"]]);const bl=Je(ul,{CheckboxButton:Le,CheckboxGroup:Re});xe(Le);xe(Re);const pl={加密:"Encrypt",密文:"Cipher text",密码:"Password",明文:"Plain text",自定义IV:"Custom IV",解密:"Decrypt",计算完成:"Calculation completed",请输入内容:"Please enter content",请选择:"Please select"},fl={加密:"加密",密文:"密文",密码:"密码",明文:"明文",自定义IV:"自定义IV",解密:"解密",计算完成:"计算完成",请输入内容:"请输入内容",请选择:"请选择"},hl={加密:"加密",密文:"密文",密码:"密碼",明文:"明文",自定义IV:"自定義IV",解密:"解密",计算完成:"計算完成",请输入内容:"請輸入內容",请选择:"請選擇"},pe={en_US:pl,zh_Hans_CN:fl,zh_Hant_HK:hl},gl={class:"c-encrypt space-x-20"},Cl={class:"flex-1"},kl={class:"label"},Vl={class:"flex flex-col pt-60"},_l={class:"sub-label mt-20"},yl={class:"flex-1"},xl={class:"label"},Sl={__name:"Encrypt",props:{algo:{type:String,default:""}},setup(l){const u=b=>{const N=me().$lang.value||"zh_Hans_CN",G=pe[N]||pe.zh_Hans_CN||{};return G[b]===void 0?b:G[b]},m=l,t=me(),c=R(""),r=R(""),p=Q(["AES","DES","TripleDES","Rabbit","RC4","RC4Drop"]),n=R("CBC"),f=Q(["CBC","CFB","CTR","OFB","ECB"]),d=R("Pkcs7"),s=Q(["Pkcs7","Iso97971","AnsiX923","Iso10126","ZeroPadding","NoPadding"]),i=R(""),y=R(192),E=R(!1),a=R("");let V="";const _=C(()=>{const b=Y(m.algo);return p.find(v=>typeof v=="string"?Y(v)===b:Y(v.algo)===b)||""}),o=C(()=>_.value&&(_.value.algo||_.value)),g=C(()=>["AES","DES","TripleDES"].includes(o.value)),z=b=>{V=b||"",r.value=V.toString()},F=b=>{try{b&&b(),t.$message.success(u("计算完成","计算完成"))}catch(v){t.$message.error(v.message)}},$=b=>(E.value&&(b=b||{},b.iv=x.enc.Hex.parse(a.value)),b),De=()=>{z(),F(()=>{let b;g.value?b=x.AES.encrypt(c.value,i.value,$({mode:x.mode[n.value],padding:x.pad[d.value]})):o.value==="Rabbit"?b=x.Rabbit.encrypt(c.value,i.value,$()):o.value==="RC4"?b=x.RC4.encrypt(c.value,i.value):o.value==="RC4Drop"&&(b=x.RC4Drop.encrypt(c.value,i.value,{drop:parseInt(y.value)})),z(b)})},$e=()=>{c.value="",F(()=>{let b;g.value?b=x.AES.decrypt(r.value,i.value,{mode:x.mode[n.value],padding:x.pad[d.value]}):o.value==="Rabbit"?b=x.Rabbit.decrypt(r.value,i.value):o.value==="RC4"?b=x.RC4.decrypt(r.value,i.value):o.value==="RC4Drop"&&(b=x.RC4Drop.decrypt(r.value,i.value,{drop:parseInt(y.value)})),c.value=b.toString(x.enc.Utf8)})};return(b,v)=>{const N=He,G=we,ue=Ne,ze=bl,re=Ae,Fe=Qe;return k(),S("div",gl,[B("div",Cl,[B("p",kl,w(u("明文")),1),I(N,{modelValue:e(c),"onUpdate:modelValue":v[0]||(v[0]=h=>L(c)?c.value=h:null),type:"textarea",placeholder:u("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"])]),B("div",Vl,[e(g)?(k(),S(T,{key:0},[v[8]||(v[8]=B("div",{class:"sub-label mt-20"},"Mode",-1)),I(ue,{modelValue:e(n),"onUpdate:modelValue":v[1]||(v[1]=h=>L(n)?n.value=h:null),placeholder:u("请选择"),class:"select"},{default:U(()=>[(k(!0),S(T,null,be(e(f),h=>(k(),H(G,{key:h,label:h,value:h},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),v[9]||(v[9]=B("div",{class:"sub-label mt-20"},"Padding scheme",-1)),I(ue,{modelValue:e(d),"onUpdate:modelValue":v[2]||(v[2]=h=>L(d)?d.value=h:null),placeholder:u("请选择"),class:"select"},{default:U(()=>[(k(!0),S(T,null,be(e(s),h=>(k(),H(G,{key:h,label:h,value:h},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])],64)):e(o)==="RC4Drop"?(k(),S(T,{key:1},[v[10]||(v[10]=B("div",{class:"sub-label mt-20"},"Drop words",-1)),I(N,{modelValue:e(y),"onUpdate:modelValue":v[3]||(v[3]=h=>L(y)?y.value=h:null),size:"small",class:"select"},null,8,["modelValue"])],64)):K("",!0),I(ze,{modelValue:e(E),"onUpdate:modelValue":v[4]||(v[4]=h=>L(E)?E.value=h:null),class:"mt-20"},{default:U(()=>[M(w(u("自定义IV")),1)]),_:1},8,["modelValue"]),e(E)?(k(),H(N,{key:2,modelValue:e(a),"onUpdate:modelValue":v[5]||(v[5]=h=>L(a)?a.value=h:null),placeholder:"Hex string",size:"small",class:"select mt-5 h-32"},null,8,["modelValue"])):K("",!0),B("div",_l,w(u("密码")),1),I(N,{modelValue:e(i),"onUpdate:modelValue":v[6]||(v[6]=h=>L(i)?i.value=h:null),"show-password":"",class:"select h-32"},null,8,["modelValue"]),I(re,{type:"primary",class:"m-auto w-full mt-40",icon:e(Xe),onClick:De},{default:U(()=>[M(w(u("加密")),1)]),_:1},8,["icon"]),I(re,{type:"primary",class:"m-auto w-full mt-20",onClick:$e},{default:U(()=>[M(w(u("解密")),1),I(Fe,null,{default:U(()=>[I(e(Ze))]),_:1})]),_:1}),v[11]||(v[11]=B("div",{class:"flex-1"},null,-1))]),B("div",yl,[B("p",xl,w(u("密文")),1),I(N,{modelValue:e(r),"onUpdate:modelValue":v[7]||(v[7]=h=>L(r)?r.value=h:null),type:"textarea",placeholder:u("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"])])])}}},El={class:"p-cipher"},Fl={__name:"cipher",setup(l){const u=Ye(),{currentFunc:m}=Pe();return(t,c)=>{const r=Ge,p=Sl;return k(),S("div",El,[I(r,{"current-func":e(m)},null,8,["current-func"]),I(p,{algo:e(u).name},null,8,["algo"])])}}};export{Fl as default};
