import{a as p,D as m,b as i,t as l,aR as d,u as f,an as _,L as g,ao as x,o as v,cP as F}from"./BLlQ5L96.js";import{u as b}from"./BfWdUVSB.js";const S={class:"c-page-title"},y={class:"p-title"},h={class:"text-12 text-quaternary"},B={__name:"PageTitle",props:{currentFunc:{type:Object,default:()=>{}}},setup(t){return(a,n)=>(p(),m("div",S,[i("p",y,l(t.currentFunc.title||t.currentFunc.name),1),i("p",h,l(t.currentFunc.description),1)]))}};function D(){var u,r;const t=d(),{menus:a}=b(),n=f(),s=_(),e=g(()=>F(a,t.name)||{});return x({title:e.value.title+n.$brand.websiteSuffix,ogTitle:e.value.title+n.$brand.websiteSuffix,description:e.value.description,ogDescription:e.value.description}),s.setCategory(((r=(u=e.value)==null?void 0:u.parent)==null?void 0:r.name)||""),v(()=>{setTimeout(()=>{var c,o;s.setCategory(((o=(c=e.value)==null?void 0:c.parent)==null?void 0:o.name)||"")},200)}),{currentFunc:e}}export{B as _,D as u};
