import{E as y}from"./DRNIXGAY.js";import{r as N,n as C,cS as v,o as r,j as c,b as g,w as m,d as _,cT as A,a as o,D as M,F as x,x as k,t as u,c as U,aq as E,u as b,ap as K,as as R,z as B,ao as q,m as F,Y as S,b0 as D}from"./BPOgqgBF.js";import{u as j}from"./BgcUteYh.js";import{_ as I}from"./BFnnQD3q.js";const L={搜索:"Search"},P={搜索:"搜索"},Y={搜索:"搜索"},H={en_US:L,zh_Hans_CN:P,zh_Hant_HK:Y},G={class:"c-search-tool"},J={class:"search-list"},O={key:0,class:"empty",src:I},Q=["href"],W={class:"font-w500 text-primary"},X={class:"description text-12 text-tertiary"},Z={class:"font-w500 text-primary"},ee={class:"description text-12 text-tertiary"},se={__name:"SearchTool",setup(w){const p=e=>{const t=b().$lang.value||"zh_Hans_CN",d=H[t]||H.zh_Hans_CN||{};return d[e]===void 0?e:d[e]},l=N(""),i=N(!1),{menus:h}=j(),f=C(()=>{const e=[];for(let s=0;s<h.length;s++)h[s].subMenus.forEach(t=>{e.push(t)});return e}),a=C(()=>(v(l.value),l.value?f.value.filter(e=>v(e.title).includes(l.value)||v(e.description).includes(l.value)):f.value));return(e,s)=>{const t=y,d=K,$=R;return r(),c("div",G,[g($,{visible:i.value,"onUpdate:visible":s[3]||(s[3]=n=>i.value=n),width:"240",placement:"bottom-end","popper-class":"c-search-tool-popover",trigger:"click","show-arrow":!1},{reference:m(()=>[g(t,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=n=>l.value=n),style:{width:"240px"},size:"small",placeholder:p("搜索"),"prefix-icon":_(A)},null,8,["modelValue","placeholder","prefix-icon"])]),default:m(()=>[o("div",J,[_(a).length===0?(r(),c("img",O)):M("",!0),(r(!0),c(x,null,k(_(a),(n,V)=>(r(),c(x,{key:V},[n.href?(r(),c("a",{key:0,href:n.href,target:"_blank",rel:"noopener noreferrer",class:"search-item",onClick:s[1]||(s[1]=T=>i.value=!1)},[o("p",W,u(n.title),1),o("p",X,u(n.description),1)],8,Q)):(r(),U(d,{key:1,class:"search-item",to:("getRouteName"in e?e.getRouteName:_(E))(n),onClick:s[2]||(s[2]=T=>i.value=!1)},{default:m(()=>[o("p",Z,u(n.title),1),o("p",ee,u(n.description),1)]),_:2},1032,["to"]))],64))),128))])]),_:1},8,["visible"])])}}},te={万花筒工具箱:"A Kaleidoscope Toolbox",全部:"All",我的收藏:"Favorite","没有找到工具？提_ff19":"Not found tool? Make a request"},oe={万花筒工具箱:"万花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"没有找到工具？提个需求吧"},ne={万花筒工具箱:"萬花筒工具箱",全部:"全部",我的收藏:"我的收藏","没有找到工具？提_ff19":"沒有找到工具？提個需求吧"},z={en_US:te,zh_Hans_CN:oe,zh_Hant_HK:ne},ae={class:"c-common-slogan"},le={class:"flex items-center"},re={class:"slogan-text"},ce={class:"slogan-nav"},ie=["onClick"],_e=["href"],fe={__name:"Slogan",setup(w){const p=a=>{const s=b().$lang.value||"zh_Hans_CN",t=z[s]||z.zh_Hans_CN||{};return t[a]===void 0?a:t[a]},l=B(),{nav:i}=q(l),h=F([{title:p("全部"),icon:"iconfont icon-quanbu",active:"text-theme",val:"all"},{title:p("我的收藏"),icon:"iconfont icon-unstore",active:"text-orange-01 icon-store",val:"like"}]),f=a=>{l.setNav(a),D().push("/")};return(a,e)=>{const s=se;return r(),c("div",ae,[o("div",le,[e[0]||(e[0]=o("i",{class:"iconfont icon-wonhot"},null,-1)),o("p",re,u(p("万花筒工具箱")),1),o("div",ce,[(r(!0),c(x,null,k(_(h),(t,d)=>(r(),c("div",{key:d,class:S(["nav-item",{active:t.val===_(i)}]),onClick:$=>f(t.val)},[o("i",{class:S([t.icon,t.val===_(i)?t.active:""])},null,2),o("span",null,u(t.title),1)],10,ie))),128))])]),e[1]||(e[1]=o("div",{class:"flex-1"},null,-1)),o("a",{href:a.$brand.issue,class:"no-tool mr-20",target:"_blank",rel:"noopener noreferrer"},u(p("没有找到工具？提_ff19")),9,_e),g(s)])}}};export{fe as _};