import{o as p,c as m,a as i,t as l,ae as d,u as f,J as _,M as g}from"./sHdJEn5x.js";import{u as x}from"./RR06LwDi.js";import{u as v,a as F,c as S}from"./Dcfw-k-P.js";const b={class:"c-page-title"},y={class:"p-title"},M={class:"text-12 text-quaternary"},T={__name:"PageTitle",props:{currentFunc:{type:Object,default:()=>{}}},setup(t){return(s,n)=>(p(),m("div",b,[i("p",y,l(t.currentFunc.title||t.currentFunc.name),1),i("p",M,l(t.currentFunc.description),1)]))}};function k(){var u,r;const t=d(),{menus:s}=x(),n=f(),a=v(),e=_(()=>S(s,t.name)||{});return F({title:e.value.title+n.$brand.websiteSuffix,ogTitle:e.value.title+n.$brand.websiteSuffix,description:e.value.description,ogDescription:e.value.description}),a.setCategory(((r=(u=e.value)==null?void 0:u.parent)==null?void 0:r.name)||""),g(()=>{setTimeout(()=>{var c,o;a.setCategory(((o=(c=e.value)==null?void 0:c.parent)==null?void 0:o.name)||"")},200)}),{currentFunc:e}}export{T as _,k as u};