import{E as h}from"./kuw1fBmn.js";import{_ as g}from"./B8Q96yIL.js";import{r as l,e as v,w as V,o as _,a as e,t as d,b as u,f as s,i as q,c as x,m as z,u as C}from"./F2-WhJ1E.js";import{Q as H}from"./EQK5fSww.js";import"./B41824XF.js";import"./CVV0vH4C.js";import"./DNAJPhxc.js";import"./hVp2VZEe.js";import"./Cn_4T5AS.js";const N={内容:"Content","支持文本、网址和_3558":"Supports text, URL and email",生成结果:"Generate result"},b={内容:"内容","支持文本、网址和_3558":"支持文本、网址和电子邮箱",生成结果:"生成结果"},k={内容:"內容","支持文本、网址和_3558":"支持文本、網址和電子郵箱",生成结果:"生成結果"},i={en_US:N,zh_Hans_CN:b,zh_Hant_HK:k},B={class:"qrcode-stage"},S={class:"input-qr"},U={class:"label"},$={class:"result-qr"},w={key:0},A={class:"label"},E={class:"qrcode-area"},P={__name:"qrcode",setup(K){const a=t=>{const c=C().$lang.value||"zh_Hans_CN",n=i[c]||i.zh_Hans_CN||{};return n[t]===void 0?t:n[t]},o=l(""),p=l("black"),m=l("white");return(t,r)=>{const c=h,n=g;return _(),v(n,{class:"p-qrcode"},{default:V(()=>[e("div",B,[e("div",S,[e("div",U,[e("span",null,d(a("内容")),1)]),u(c,{modelValue:s(o),"onUpdate:modelValue":r[0]||(r[0]=f=>q(o)?o.value=f:null),type:"textarea",placeholder:a("支持文本、网址和_3558"),resize:"none"},null,8,["modelValue","placeholder"])]),e("div",$,[s(o)?(_(),x("div",w,[e("div",A,[e("span",null,d(a("生成结果")),1)]),e("div",E,[u(H,{value:s(o),size:180,background:s(p),foreground:s(m)},null,8,["value","background","foreground"])])])):z("",!0)])])]),_:1})}}};export{P as default};
