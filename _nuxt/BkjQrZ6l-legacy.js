System.register(["./qiUvxWtS-legacy.js"],(function(e,t){"use strict";var n,r;return{setters:[e=>{n=e.n,r=e.bT}],execute:function(){e("_",{props:{text:{type:String,default:""},closeTag:{type:String,default:"/"},containerTag:{type:String,default:"div"}},setup(e,{slots:t}){const a=n((()=>{const t=e.text,n=RegExp(`\\[(.+?)\\](.*?)\\[\\${e.closeTag}\\1\\]`,"g");return t.replace(n,(e=>`#@#${e}#@#`)).split("#@#").map((e=>{const t=n.exec(e);return t?[t[2],t[1]]:[e]}))}));return()=>r(e.containerTag,{class:["c-common-language","div"===e.containerTag&&"inline-block"]},a.value.map((e=>{const n=e[0],r=e[1],a=r&&t[r];return a?a({value:n}):n})))}})}}}));
