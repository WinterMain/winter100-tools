import{a as c,f as p}from"./JAUZZBS7.js";import{k as t,aI as b,r,cr as z,aq as v,f as m,N as F,L as y,bt as h,aF as w,bd as L}from"./BXJhvq4L.js";const I=o=>{const s=b();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},R=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),e=s.global?u:z(),a=s.form?{size:void 0}:v(c,void 0),n=s.formItem?{size:void 0}:v(p,void 0);return t(()=>l.value||m(o)||(n==null?void 0:n.size)||(a==null?void 0:a.size)||e.value||"")},S=o=>{const s=I("disabled"),u=v(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},U=()=>{const o=v(c,void 0),s=v(p,void 0);return{form:o,formItem:s}},j=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let a;const n=t(()=>{var i;return!!(!(o.label||o.ariaLabel)&&s&&s.inputIds&&((i=s.inputIds)==null?void 0:i.length)<=1)});return F(()=>{a=y([w(o,"id"),u],([i,f])=>{const d=i!=null?i:f?void 0:h().value;d!==e.value&&(s!=null&&s.removeInputId&&(e.value&&s.removeInputId(e.value),!(l!=null&&l.value)&&!f&&d&&s.addInputId(d)),e.value=d)},{immediate:!0})}),L(()=>{a&&a(),s!=null&&s.removeInputId&&e.value&&s.removeInputId(e.value)}),{isLabeledByFormItem:n,inputId:e}};export{R as a,S as b,j as c,U as u};
