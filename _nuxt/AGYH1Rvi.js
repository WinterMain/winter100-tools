import{E as f}from"./BySYsSZv.js";import{_ as g}from"./Br9Ej3RJ.js";import{r as l,e as v,w as V,o as _,a as e,t as d,b as i,f as t,i as q,c as x,k as z,u as C}from"./B_JgNmNl.js";import{Q as H}from"./Df0rpWsp.js";import"./CIVpQs43.js";import"./HvMx9WCC.js";import"./bBxyvPKl.js";import"./JAUZZBS7.js";import"./C6TqigyH.js";import"./BSAOm_Ht.js";import"./BBoz5Ox0.js";import"./Dm9glivw.js";const N={内容:"Content","支持文本、网址和_3558":"Supports text, URL and email",生成结果:"Generate result"},b={内容:"内容","支持文本、网址和_3558":"支持文本、网址和电子邮箱",生成结果:"生成结果"},k={内容:"內容","支持文本、网址和_3558":"支持文本、網址和電子郵箱",生成结果:"生成結果"},u={en_US:N,zh_Hans_CN:b,zh_Hant_HK:k},B={class:"qrcode-stage"},S={class:"input-qr"},U={class:"label"},$={class:"result-qr"},w={key:0},A={class:"label"},E={class:"qrcode-area"},O={__name:"qrcode",setup(K){const a=s=>{const c=C().$lang.value||"zh_Hans_CN",n=u[c]||u.zh_Hans_CN||{};return n[s]===void 0?s:n[s]},o=l("hello"),p=l("black"),m=l("white");return(s,r)=>{const c=f,n=g;return _(),v(n,{class:"p-qrcode"},{default:V(()=>[e("div",B,[e("div",S,[e("div",U,[e("span",null,d(a("内容")),1)]),i(c,{modelValue:t(o),"onUpdate:modelValue":r[0]||(r[0]=h=>q(o)?o.value=h:null),type:"textarea",placeholder:a("支持文本、网址和_3558"),resize:"none"},null,8,["modelValue","placeholder"])]),e("div",$,[t(o)?(_(),x("div",w,[e("div",A,[e("span",null,d(a("生成结果")),1)]),e("div",E,[i(H,{value:t(o),size:180,background:t(p),foreground:t(m)},null,8,["value","background","foreground"])])])):z("",!0)])])]),_:1})}}};export{O as default};
