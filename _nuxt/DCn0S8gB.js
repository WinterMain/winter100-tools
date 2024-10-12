import{an as Q,ab as q,x as W,b5 as U,ap as _,J as h,aA as P,K as X,L as Y,aH as ee,r as O,al as F,bx as T,b8 as he,by as H,y as L,aD as ae,D as K,o as C,e as le,w as ne,a as J,N as g,f as n,Z as N,c as y,i as $,P as z,bz as D,a0 as M,F as pe,d as te,t as oe,k as A,W as ue,a1 as R,O as ke,n as ge,q as Ce,av as xe,b9 as ye,a5 as Ve,bl as se}from"./Cn7PFGzK.js";import{u as ie,p as Se}from"./D8WFLMxP.js";import{U as w,d as re}from"./pm526IDO.js";import{b as Le,u as j,a as Z,c as ce}from"./BE6rZyBb.js";import{i as Be}from"./uJj3mfAL.js";import{u as G}from"./CInsETlP.js";const de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:Q,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ie(["ariaControls"])},be={[w]:e=>q(e)||W(e)||U(e),change:e=>q(e)||W(e)||U(e)},B=Symbol("checkboxGroupContextKey"),Ee=({model:e,isChecked:c})=>{const i=_(B,void 0),l=h(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:Le(h(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Ie=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=_(B,void 0),{formItem:t}=j(),{emit:v}=ee();function s(a){var p,k,u,f;return[!0,e.trueValue,e.trueLabel].includes(a)?(k=(p=e.trueValue)!=null?p:e.trueLabel)!=null?k:!0:(f=(u=e.falseValue)!=null?u:e.falseLabel)!=null?f:!1}function o(a,p){v("change",s(a),p)}function m(a){if(i.value)return;const p=a.target;v("change",s(p.checked),a)}async function x(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await Y(),o(c.value,a)))}const V=h(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return X(()=>e.modelValue,()=>{V.value&&(t==null||t.validate("change").catch(a=>re()))}),{handleChange:m,onClickRoot:x}},Fe=e=>{const c=O(!1),{emit:i}=ee(),l=_(B,void 0),b=h(()=>P(l)===!1),r=O(!1),d=h({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&F(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(w,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},_e=(e,c,{model:i})=>{const l=_(B,void 0),b=O(!1),r=h(()=>T(e.value)?e.label:e.value),d=h(()=>{const o=i.value;return U(o)?o:F(o)?he(r.value)?o.map(H).some(m=>Be(m,r.value)):o.map(H).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=Z(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=Z(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=h(()=>!!c.default||!T(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},ve=(e,c)=>{const{formItem:i}=j(),{model:l,isGroup:b,isLimitExceeded:r}=Fe(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=_e(e,c,{model:l}),{isDisabled:x}=Ee({model:l,isChecked:t}),{inputId:V,isLabeledByFormItem:a}=ce(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:p,onClickRoot:k}=Ie(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:x,isLabeledByFormItem:a});return(()=>{function f(){var E,I;F(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(I=(E=e.trueValue)!=null?E:e.trueLabel)!=null?I:!0}e.checked&&f()})(),G({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>b.value&&T(e.value))),G({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.trueLabel)),G({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:a,isChecked:t,isDisabled:x,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:p,onClickRoot:k}},Ne=L({name:"ElCheckbox"}),$e=L({...Ne,props:de,emits:be,setup(e){const c=e,i=ae(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:x,onClickRoot:V}=ve(c,i),a=K("checkbox"),p=h(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),k=h(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,f)=>(C(),le(ue(!n(s)&&n(b)?"span":"label"),{class:g(n(p)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(V)},{default:ne(()=>{var E,I;return[J("span",{class:g(n(k))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?N((C(),y("input",{key:0,id:n(l),"onUpdate:modelValue":S=>$(o)?o.value=S:null,class:g(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(E=u.trueValue)!=null?E:u.trueLabel,"false-value":(I=u.falseValue)!=null?I:u.falseLabel,onChange:n(x),onFocus:S=>t.value=!0,onBlur:S=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[D,n(o)]]):N((C(),y("input",{key:1,id:n(l),"onUpdate:modelValue":S=>$(o)?o.value=S:null,class:g(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(x),onFocus:S=>t.value=!0,onBlur:S=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[D,n(o)]]),J("span",{class:g(n(a).e("inner"))},null,2)],2),n(s)?(C(),y("span",{key:0,class:g(n(a).e("label"))},[M(u.$slots,"default"),u.$slots.default?A("v-if",!0):(C(),y(pe,{key:0},[te(oe(u.label),1)],64))],2)):A("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var ze=R($e,[["__file","checkbox.vue"]]);const De=L({name:"ElCheckboxButton"}),we=L({...De,props:de,emits:be,setup(e){const c=e,i=ae(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=ve(c,i),o=_(B,void 0),m=K("checkbox"),x=h(()=>{var a,p,k,u;const f=(p=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?p:"";return{backgroundColor:f,borderColor:f,color:(u=(k=o==null?void 0:o.textColor)==null?void 0:k.value)!=null?u:"",boxShadow:f?"-1px 0 0 0 ".concat(f):void 0}}),V=h(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,p)=>{var k,u;return C(),y("label",{class:g(n(V))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?N((C(),y("input",{key:0,"onUpdate:modelValue":f=>$(t)?t.value=f:null,class:g(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(k=a.trueValue)!=null?k:a.trueLabel,"false-value":(u=a.falseValue)!=null?u:a.falseLabel,onChange:n(s),onFocus:f=>l.value=!0,onBlur:f=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[D,n(t)]]):N((C(),y("input",{key:1,"onUpdate:modelValue":f=>$(t)?t.value=f:null,class:g(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:f=>l.value=!0,onBlur:f=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[D,n(t)]]),a.$slots.default||a.label?(C(),y("span",{key:2,class:g(n(m).be("button","inner")),style:ke(n(b)?n(x):void 0)},[M(a.$slots,"default",{},()=>[te(oe(a.label),1)])],6)):A("v-if",!0)],2)}}});var me=R(we,[["__file","checkbox-button.vue"]]);const Ge=ge({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Q,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ie(["ariaLabel"])}),Ue={[w]:e=>F(e),change:e=>F(e)},Pe=L({name:"ElCheckboxGroup"}),Oe=L({...Pe,props:Ge,emits:Ue,setup(e,{emit:c}){const i=e,l=K("checkbox"),{formItem:b}=j(),{inputId:r,isLabeledByFormItem:d}=ce(i,{formItemContext:b}),t=async s=>{c(w,s),await Y(),c("change",s)},v=h({get(){return i.modelValue},set(s){t(s)}});return xe(B,{...Se(ye(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),X(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>re()))}),(s,o)=>{var m;return C(),le(ue(s.tag),{id:n(r),class:g(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:ne(()=>[M(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var fe=R(Oe,[["__file","checkbox-group.vue"]]);const qe=Ve(ze,{CheckboxButton:me,CheckboxGroup:fe});se(me);se(fe);export{qe as E};
