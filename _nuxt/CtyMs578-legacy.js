System.register(["./pBjq5_lV-legacy.js","./BBQPABHI-legacy.js","./CjmzuHYj-legacy.js","./CejvEbfS-legacy.js","./B3S0nAOL-legacy.js","./DfSlyK4w-legacy.js","./DUy6h7Im-legacy.js","./BuT_S1it-legacy.js","./pimxEqsG-legacy.js","./XldLGxAK-legacy.js"],(function(e,t){"use strict";var n,a,l,r,s,o,c,u,i,m,p,d,g,h,f,j;return{setters:[e=>{n=e.u,a=e._},e=>{l=e.E},e=>{r=e._},e=>{s=e.r,o=e.k,c=e.c,u=e.b,i=e.f,m=e.a,p=e.t,d=e.i,g=e.u,h=e.o},e=>{f=e.p},e=>{j=e.S},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".p-jsonformat .jsonformat{padding:20px}.p-jsonformat .jsonformat .label{align-items:center;display:flex;font-size:14px;font-weight:600;line-height:22px;padding-bottom:8px}.p-jsonformat .jsonformat .label>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(20px*(1 - var(--tw-space-x-reverse)));margin-right:calc(20px*var(--tw-space-x-reverse))}.p-jsonformat .jsonformat .el-textarea .el-textarea__inner{height:300px;min-height:320px!important}@media (max-width:767px){.p-jsonformat .jsonformat .el-textarea .el-textarea__inner{height:200px;min-height:200px!important}}\n",document.head.appendChild(t);const x={en_US:{"待格式化内容":"Content to be formatted","格式化结果":"Formatted result","请输入内容":"Please enter content","非法内容":"Illegal content"},zh_Hans_CN:{"待格式化内容":"待格式化内容","格式化结果":"格式化结果","请输入内容":"请输入内容","非法内容":"非法内容"},zh_Hant_HK:{"待格式化内容":"待格式化內容","格式化结果":"格式化結果","请输入内容":"請輸入內容","非法内容":"非法內容"}},v={class:"p-jsonformat"},_={class:"jsonformat"},y={class:"label"},w={class:"label mt-20"},b={class:"output-result"};e("default",{__name:"jsonformat",setup(e){const t=e=>{const t=g().$lang.value||"zh_Hans_CN",n=x[t]||x.zh_Hans_CN||{};return void 0===n[e]?e:n[e]},{currentFunc:z}=n(),C=s(""),H=o((()=>f(C.value,t("非法内容")))),N=o((()=>{try{return JSON.stringify(H.value,null,4)}catch(e){return""}}));return(e,n)=>{const s=a,o=l,g=r;return h(),c("div",v,[u(s,{"current-func":i(z)},null,8,["current-func"]),m("div",_,[m("div",y,[m("span",null,p(t("待格式化内容")),1)]),u(o,{modelValue:i(C),"onUpdate:modelValue":n[0]||(n[0]=e=>d(C)?C.value=e:null),type:"textarea",placeholder:t("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),m("div",w,[m("span",null,p(t("格式化结果")),1),u(g,{msg:i(N)},null,8,["msg"])]),m("div",b,[u(i(j),{data:i(H),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}})}}}));