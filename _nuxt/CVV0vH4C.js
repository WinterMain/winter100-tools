import{o as p,c as m,a as i,t as l,y as d,u as f,k as _,A as g}from"./F2-WhJ1E.js";import{u as x}from"./DNAJPhxc.js";import{u as v,a as F,c as y}from"./hVp2VZEe.js";const S={class:"c-page-title"},b={class:"p-title"},h={class:"text-12 text-quaternary"},A={__name:"PageTitle",props:{currentFunc:{type:Object,default:()=>{}}},setup(t){return(s,n)=>(p(),m("div",S,[i("p",b,l(t.currentFunc.title||t.currentFunc.name),1),i("p",h,l(t.currentFunc.description),1)]))}};function B(){var u,r;const t=d(),{menus:s}=x(),n=f(),a=v(),e=_(()=>y(s,t.name)||{});return F({title:e.value.title+n.$brand.websiteSuffix,ogTitle:e.value.title+n.$brand.websiteSuffix,description:e.value.description,ogDescription:e.value.description}),a.setCategory(((r=(u=e.value)==null?void 0:u.parent)==null?void 0:r.name)||""),g(()=>{setTimeout(()=>{var c,o;a.setCategory(((o=(c=e.value)==null?void 0:c.parent)==null?void 0:o.name)||"")},200)}),{currentFunc:e}}export{A as _,B as u};
