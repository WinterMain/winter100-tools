import{c9 as u,o as m,e as i,w as o,a as d,f as c,b as l,N as C,ca as f,u as g,E as N}from"./D7w8Vnyg.js";import{a as H}from"./DmX2goCy.js";import"./l0sNRNKZ.js";const z={已复制:"Copied"},h={已复制:"已复制"},x={已复制:"已復制"},p={en_US:z,zh_Hans_CN:h,zh_Hant_HK:x},A={__name:"Copy",props:{msg:{type:String,default:""},className:{type:String,default:""}},setup(e){const _=s=>{const n=g().$lang.value||"zh_Hans_CN",t=p[n]||p.zh_Hans_CN||{};return t[s]===void 0?s:t[s]},{copy:r}=u();return(s,a)=>{const n=N,t=H;return m(),i(t,{content:_("已复制"),manual:"",placement:"top",trigger:"click","auto-close":2e3},{default:o(()=>[d("span",{class:"c-copy",onClick:a[0]||(a[0]=y=>c(r)(e.msg))},[l(n,{class:C(e.className)},{default:o(()=>[l(c(f))]),_:1},8,["class"])])]),_:1},8,["content"])}}};export{A as _};
