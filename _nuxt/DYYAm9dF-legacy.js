System.register(["./C-dh9UVq-legacy.js","./DryMa_jX-legacy.js","./BuzHZMZ1-legacy.js","./zsYBdDWW-legacy.js","./C-miimWZ-legacy.js","./D_V6B1vg-legacy.js","./DpUN88-8-legacy.js","./C5VJtyfr-legacy.js","./BLytQnz9-legacy.js","./DFI-uc9--legacy.js","./DE65B0TC-legacy.js","./CqCjhz4E-legacy.js","./DYNyp6Zb-legacy.js","./DVyiNuFI-legacy.js","./lK-Bw6on-legacy.js","./DHRfTqxd-legacy.js","./BsteJtbu-legacy.js"],(function(e,a){"use strict";var l,t,n,i,u,r,s,o,c,p,h,d,m,g,f,v,b,x,y,_,w,H,k,S,A,P,V,D,j,K,B;return{setters:[e=>{l=e.u,t=e._},e=>{n=e.E},e=>{i=e.E},e=>{u=e.E,r=e.a},e=>{s=e.r,o=e.$,c=e.L,p=e.c8,h=e.z,d=e.a,m=e.D,g=e.b,f=e.t,v=e.d,b=e.e,x=e.i,y=e.a3,_=e.w,w=e.f,H=e.ac,k=e.ab,S=e.c,A=e.ae,P=e.u,V=e.E,D=e.aR},null,null,e=>{j=e.a},e=>{K=e.C},e=>{B=e.E},null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".c-hash{padding:20px}.c-hash .input-tip{color:#5e6773;margin-top:20px}.c-hash .label{font-size:14px;font-weight:600;line-height:22px;padding-bottom:8px}.c-hash .result-text{background-image:none;border-radius:4px;border-width:1px;box-sizing:border-box;color:#606266;font-size:inherit;line-height:1.5;min-height:170px;padding:15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%;word-break:break-all;--tw-bg-opacity:1;background-color:rgb(248 250 253/var(--tw-bg-opacity));border-color:#eff1f5}.c-hash .input-area{padding-top:12px}.c-hash .input-area,.c-hash .input-area .input-subitem-key{align-items:center;display:flex}.c-hash .input-area .input-select{margin-right:20px;width:120px}.c-hash .input-area .btn-confirm{width:120px}.c-hash .input-area .input-label{color:#3d424a;margin-right:8px}.c-hash .input-area .el-select__prefix{border-color:#eff1f5;border-right-width:1px;padding-right:12px}.c-hash .input-area .el-input{height:32px;margin-right:20px}.c-hash .input-area .el-input .el-input-group__prepend{border-bottom-left-radius:8px;border-top-left-radius:8px;box-shadow:none}.c-hash .input-area .input-psw{width:280px}.c-hash .input-area .input-pbkdf{width:250px}.c-hash .input-area .input-iteration{width:200px}.c-hash .input-area .el-button{margin-left:20px}@media (max-width:767px){.c-hash .input-area{display:block}.c-hash .input-area .input-subitem-key .el-input{flex:1 1 0%;margin-right:0;width:auto}.c-hash .input-area .btn-confirm{margin-left:0;margin-top:20px;width:100%}.c-hash .input-area .input-select{margin-right:0;width:100%}.c-hash .input-area .input-iteration,.c-hash .input-area .input-pbkdf{margin-right:0;margin-top:8px;width:100%}}.p-hash{padding-bottom:60px}\n",document.head.appendChild(a);const C={en_US:{"PBKDF2为新_a0f2":"PBKDF2 uses SHA256 as the internal hash algorithm of the new version. Some old versions of PBKDF2 implement the internal hash algorithm of SHA1. The hash results calculated by the old version will be inconsistent with the new version.","出错了":"Something went wrong","刷新":"Refresh","取消":"Cancel","确定":"Confirm","秘钥：":"Secret key:","算法初始化错误，_f61b":"Algorithm initialization error, please refresh and try again","结果":"Result","计算":"Calculate","请输入":"Please input","请输入以下参数，_a896":"Please enter the following parameters and click Confirm to hash","请输入内容":"Please enter content","请选择":"Please select","输入":"Input"},zh_Hans_CN:{"PBKDF2为新_a0f2":"PBKDF2为新版内部哈希算法采用的是SHA256，有一些旧版的PBKDF2实现其内部哈希算法是SHA1，旧版计算的哈希结果会与新版的不一致","出错了":"出错了","刷新":"刷新","取消":"取消","确定":"确定","秘钥：":"秘钥：","算法初始化错误，_f61b":"算法初始化错误，请刷新重试","结果":"结果","计算":"计算","请输入":"请输入","请输入以下参数，_a896":"请输入以下参数，点击确定进行哈希","请输入内容":"请输入内容","请选择":"请选择","输入":"输入"},zh_Hant_HK:{"PBKDF2为新_a0f2":"PBKDF2為新版內部哈希算法采用的是SHA256，有一些舊版的PBKDF2實現其內部哈希算法是SHA1，舊版計算的哈希結果會與新版的不一致","出错了":"出錯了","刷新":"刷新","取消":"取消","确定":"確定","秘钥：":"秘鑰：","算法初始化错误，_f61b":"算法初始化錯誤，請刷新重試","结果":"結果","计算":"計算","请输入":"請輸入","请输入以下参数，_a896":"請輸入以下參數，點擊確定進行哈希","请输入内容":"請輸入內容","请选择":"請選擇","输入":"輸入"}},F={class:"c-hash"},z={class:"label"},E={key:0,class:"input-tip"},U={key:1,class:"input-area"},I={class:"input-subitem-key"},M={class:"input-label"},R={key:2,class:"input-area"},L={key:3,class:"pt-20 flex flex-wrap items-center space-x-20"},N={class:"label mt-20"},T={class:"result-text"},$={key:4,class:"mt-12 text-quaternary text-12"},q={__name:"Hash",props:{algo:{type:String,default:""}},setup(e){const a=e=>{const a=P().$lang.value||"zh_Hans_CN",l=C[a]||C.zh_Hans_CN||{};return void 0===l[e]?e:l[e]},l=e,t=["HmacMD5","HmacSHA1","HmacSHA224","HmacSHA256","HmacSHA384","HmacSHA512","HmacRIPEMD160","PBKDF2"],D=s(""),q=o(["MD5","SHA1","SHA224","SHA256","SHA384","SHA512",{title:"SHA3",algo:"SHA3",outs:[512,384,256,224]},"RIPEMD160"].concat(t)),J=s(256),G=s(""),O=s(128),Q=s(""),W=s("1"),X=s(""),Y=s([128,256,512]);let Z="";const ee=c((()=>{const e=p(l.algo);return q.find((a=>"string"==typeof a?p(a)===e:p(a.algo)===e))||""})),ae=c((()=>ee.value&&(ee.value.algo||ee.value))),le=c((()=>"PBKDF2"===ae.value)),te=c((()=>t.includes(ae.value)&&!le.value)),ne=e=>{Z=e||"",X.value=Z.toString()},ie=e=>{try{"SHA3"===ae.value?ne(K[ae.value](D.value,{outputLength:J.value})):"PBKDF2"===ae.value?ne(K[ae.value](D.value,Q.value,{keySize:O.value/32,iterations:parseInt(W.value)})):t.includes(ae.value)?ne(K[ae.value](D.value,G.value)):ne(K[ae.value](D.value))}catch(l){l.message&&l.message.includes("Maximum call stack size exceeded")&&B.confirm(a("算法初始化错误，_f61b"),a("出错了"),{confirmButtonText:a("刷新"),cancelButtonText:a("取消"),type:"warning"}).then((()=>{location.reload()})).catch((()=>{location.reload()}))}},ue=()=>{ne(""),"PBKDF2"===ae.value||t.includes(ae.value)||ie()};return h(W,((e,a)=>{j.check({val:e,oldVal:oldVal,minVal:"1",decimals:0,callback:e=>{W.value=e}})})),(e,l)=>{const t=n,s=i,o=u,c=r,p=V;return d(),m("div",F,[g("p",z,f(a("输入")),1),v(t,{modelValue:b(D),"onUpdate:modelValue":l[0]||(l[0]=e=>x(D)?D.value=e:null),type:"textarea",placeholder:a("请输入内容"),rows:6,resize:"none",onInput:l[1]||(l[1]=e=>ue())},null,8,["modelValue","placeholder"]),b(te)||b(le)?(d(),m("p",E,f(a("请输入以下参数，_a896")),1)):y("",!0),b(te)?(d(),m("div",U,[g("div",I,[g("span",M,f(a("秘钥：")),1),v(t,{modelValue:b(G),"onUpdate:modelValue":l[2]||(l[2]=e=>x(G)?G.value=e:null),class:"input-psw"},null,8,["modelValue"])]),v(s,{type:"primary",class:"btn-confirm",plain:"",onClick:ie},{default:_((()=>[w(f(a("确定")),1)])),_:1})])):b(le)?(d(),m("div",R,[v(c,{modelValue:b(O),"onUpdate:modelValue":l[3]||(l[3]=e=>x(O)?O.value=e:null),placeholder:a("请选择"),class:"input-select",onChange:l[4]||(l[4]=e=>ue())},{prefix:_((()=>l[10]||(l[10]=[w("Key")]))),default:_((()=>[(d(!0),m(H,null,k(b(Y),(e=>(d(),S(o,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"]),v(t,{modelValue:b(Q),"onUpdate:modelValue":l[5]||(l[5]=e=>x(Q)?Q.value=e:null),placeholder:a("请输入"),class:"input-pbkdf"},{prepend:_((()=>l[11]||(l[11]=[w("Salt")]))),_:1},8,["modelValue","placeholder"]),v(t,{modelValue:b(W),"onUpdate:modelValue":l[6]||(l[6]=e=>x(W)?W.value=e:null),placeholder:a("请输入"),class:"input-iteration"},{prepend:_((()=>l[12]||(l[12]=[w("Iterations")]))),_:1},8,["modelValue","placeholder"]),v(s,{type:"primary",class:"btn-confirm",plain:"",onClick:ie},{default:_((()=>[w(f(a("确定")),1)])),_:1})])):(d(),m("div",L,[b(ee).title?(d(),S(c,{key:0,modelValue:b(J),"onUpdate:modelValue":l[7]||(l[7]=e=>x(J)?J.value=e:null),placeholder:a("请选择"),class:"w-120",onChange:l[8]||(l[8]=e=>ue())},{default:_((()=>[(d(!0),m(H,null,k(b(ee).outs,(e=>(d(),S(o,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])):y("",!0),v(s,{class:"w-120",type:"primary",onClick:l[9]||(l[9]=e=>ue())},{default:_((()=>[w(f(a("计算")),1)])),_:1})])),g("p",N,f(a("结果")),1),g("div",T,f(b(X)),1),b(le)?(d(),m("div",$,[v(p,null,{default:_((()=>[v(b(A))])),_:1}),w(" "+f(a("PBKDF2为新_a0f2")),1)])):y("",!0)])}}},J={class:"p-hash"};e("default",{__name:"hash",setup(e){const a=D(),{currentFunc:n}=l();return(e,l)=>{const i=t,u=q;return d(),m("div",J,[v(i,{"current-func":b(n)},null,8,["current-func"]),v(u,{algo:b(a).name},null,8,["algo"])])}}})}}}));
