import{a as c,f as p}from"./JAUZZBS7.js";import{J as t,aH as z,r,cs as b,ap as i,f as m,M as y,K as F,bv as h,aE as w,aN as K}from"./Cn7PFGzK.js";const I=o=>{const s=z();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},R=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),a=s.global?u:b(),e=s.form?{size:void 0}:i(c,void 0),n=s.formItem?{size:void 0}:i(p,void 0);return t(()=>l.value||m(o)||(n==null?void 0:n.size)||(e==null?void 0:e.size)||a.value||"")},S=o=>{const s=I("disabled"),u=i(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},U=()=>{const o=i(c,void 0),s=i(p,void 0);return{form:o,formItem:s}},j=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const a=r();let e;const n=t(()=>{var v;return!!(!(o.label||o.ariaLabel)&&s&&s.inputIds&&((v=s.inputIds)==null?void 0:v.length)<=1)});return y(()=>{e=F([w(o,"id"),u],([v,f])=>{const d=v!=null?v:f?void 0:h().value;d!==a.value&&(s!=null&&s.removeInputId&&(a.value&&s.removeInputId(a.value),!(l!=null&&l.value)&&!f&&d&&s.addInputId(d)),a.value=d)},{immediate:!0})}),K(()=>{e&&e(),s!=null&&s.removeInputId&&a.value&&s.removeInputId(a.value)}),{isLabeledByFormItem:n,inputId:a}};export{R as a,S as b,j as c,U as u};
