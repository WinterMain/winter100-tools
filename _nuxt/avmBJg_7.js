import{n as t,a$ as z,r,cX as b,aF as v,cY as c,cZ as p,d as m,q as F,V as y,c8 as h,aY as w,bm as _}from"./9v22XJCx.js";const I=o=>{const s=z();return t(()=>{var u,l;return(l=(u=s==null?void 0:s.proxy)==null?void 0:u.$props)==null?void 0:l[o]})},L=(o,s={})=>{const u=r(void 0),l=s.prop?u:I("size"),e=s.global?u:b(),a=s.form?{size:void 0}:v(c,void 0),i=s.formItem?{size:void 0}:v(p,void 0);return t(()=>l.value||m(o)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||e.value||"")},R=o=>{const s=I("disabled"),u=v(c,void 0);return t(()=>s.value||m(o)||(u==null?void 0:u.disabled)||!1)},S=()=>{const o=v(c,void 0),s=v(p,void 0);return{form:o,formItem:s}},U=(o,{formItemContext:s,disableIdGeneration:u,disableIdManagement:l})=>{u||(u=r(!1)),l||(l=r(!1));const e=r();let a;const i=t(()=>{var n;return!!(!(o.label||o.ariaLabel)&&s&&s.inputIds&&((n=s.inputIds)==null?void 0:n.length)<=1)});return F(()=>{a=y([w(o,"id"),u],([n,f])=>{const d=n!=null?n:f?void 0:h().value;d!==e.value&&(s!=null&&s.removeInputId&&(e.value&&s.removeInputId(e.value),!(l!=null&&l.value)&&!f&&d&&s.addInputId(d)),e.value=d)},{immediate:!0})}),_(()=>{a&&a(),s!=null&&s.removeInputId&&e.value&&s.removeInputId(e.value)}),{isLabeledByFormItem:i,inputId:e}};export{L as a,R as b,U as c,S as u};
