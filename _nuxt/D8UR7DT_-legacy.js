System.register(["./PjG-vgMt-legacy.js","./84Qvei94-legacy.js","./gLRbTdft-legacy.js","./DGI7vmsl-legacy.js","./BLpBzzyn-legacy.js","./BMjqGRD7-legacy.js","./CKx8s2Oz-legacy.js","./CGQV3WkK-legacy.js","./C3X_O0Bj-legacy.js","./4pP76ox--legacy.js","./Cz9gYjXO-legacy.js","./BnAamJr1-legacy.js","./thrsW4a0-legacy.js","./Brwn14Y6-legacy.js"],(function(e,t){"use strict";var n,l,a,s,r,o,c,u,i,m,p,d,g,h,j,f;return{setters:[e=>{n=e.u,l=e._},e=>{a=e.E},e=>{s=e._},e=>{r=e.r,o=e.J,c=e.c,u=e.b,i=e.f,m=e.a,p=e.t,d=e.i,g=e.u,h=e.o},e=>{j=e.p},e=>{f=e.S},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-jsonformat .jsonformat{padding:20px}.p-jsonformat .jsonformat .label{align-items:center;display:flex;font-size:14px;font-weight:600;line-height:22px;padding-bottom:8px}.p-jsonformat .jsonformat .label>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(20px*(1 - var(--tw-space-x-reverse)));margin-right:calc(20px*var(--tw-space-x-reverse))}.p-jsonformat .jsonformat .el-textarea .el-textarea__inner{height:300px;min-height:320px!important}@media (max-width:767px){.p-jsonformat .jsonformat .el-textarea .el-textarea__inner{height:200px;min-height:200px!important}}\n",document.head.appendChild(t);const x={en_US:{"待格式化内容":"Content to be formatted","格式化结果":"Formatted result","请输入内容":"Please enter content","非法内容":"Illegal content"},zh_Hans_CN:{"待格式化内容":"待格式化内容","格式化结果":"格式化结果","请输入内容":"请输入内容","非法内容":"非法内容"},zh_Hant_HK:{"待格式化内容":"待格式化內容","格式化结果":"格式化結果","请输入内容":"請輸入內容","非法内容":"非法內容"}},y={class:"p-jsonformat"},v={class:"jsonformat"},_={class:"label"},w={class:"label mt-20"},b={class:"output-result"};e("default",{__name:"jsonformat",setup(e){const t=e=>{const t=g().$lang.value||"zh_Hans_CN",n=x[t]||x.zh_Hans_CN||{};return void 0===n[e]?e:n[e]},{currentFunc:z}=n(),C=r(""),H=o((()=>j(C.value,t("非法内容")))),N=o((()=>{try{return JSON.stringify(H.value,null,4)}catch(e){return""}}));return(e,n)=>{const r=l,o=a,g=s;return h(),c("div",y,[u(r,{"current-func":i(z)},null,8,["current-func"]),m("div",v,[m("div",_,[m("span",null,p(t("待格式化内容")),1)]),u(o,{modelValue:i(C),"onUpdate:modelValue":n[0]||(n[0]=e=>d(C)?C.value=e:null),type:"textarea",placeholder:t("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),m("div",w,[m("span",null,p(t("格式化结果")),1),u(g,{msg:i(N)},null,8,["msg"])]),m("div",b,[u(i(f),{data:i(H),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}})}}}));
