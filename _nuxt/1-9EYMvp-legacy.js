System.register(["./CsTszqH8-legacy.js"],(function(e,t){"use strict";var n,o,r,a,l,c,i,u;return{setters:[e=>{n=e.I,o=e.f,r=e.d,a=e.k,l=e.X,c=e.r,i=e.s,u=e.aQ}],execute:function(){var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},d={};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function p(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function h(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.d(d,{Z:()=>B});const y=(m={computed:()=>n,createTextVNode:()=>o,createVNode:()=>r,defineComponent:()=>a,reactive:()=>l,ref:()=>c,watch:()=>i,watchEffect:()=>u},C={},t.d(C,m),C),v=(0,y.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,y.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),g=(0,y.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,y.computed)((function(){return e.isMultiple?"checkbox":"radio"})),model:(0,y.computed)({get:function(){return e.checked},set:function(e){return n("update:modelValue",e)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,y.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(e){return e.stopPropagation()}},[(0,y.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,y.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),b=(0,y.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n="objectStart"===e||"arrayStart"===e;return n||"objectCollapsed"===e||"arrayCollapsed"===e?(0,y.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,y.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,y.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});var m,C;function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=(arguments.length>3?arguments[3]:void 0)||{},r=o.key,a=o.index,l=o.type,c=void 0===l?"content":l,i=o.showComma,u=void 0!==i&&i,d=o.length,s=void 0===d?1:d,p=w(e);if("array"===p){var h=j(e.map((function(e,o,r){return N(e,"".concat(t,"[").concat(o,"]"),n+1,{index:o,showComma:o!==r.length-1,length:s,type:c})})));return[N("[",t,n,{showComma:!1,key:r,length:e.length,type:"arrayStart"})[0]].concat(h,N("]",t,n,{showComma:u,length:e.length,type:"arrayEnd"})[0])}if("object"===p){var f=Object.keys(e),y=j(f.map((function(o,r,a){return N(e[o],/^[a-zA-Z_]\w*$/.test(o)?"".concat(t,".").concat(o):"".concat(t,'["').concat(o,'"]'),n+1,{key:o,showComma:r!==a.length-1,length:s,type:c})})));return[N("{",t,n,{showComma:!1,key:r,index:a,length:f.length,type:"objectStart"})[0]].concat(y,N("}",t,n,{showComma:u,length:f.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:r,index:a,path:t,showComma:u,length:s,type:c}]}function j(e){if("function"==typeof Array.prototype.flat)return e.flat();for(var t=h(e),n=[];t.length;){var o=t.shift();Array.isArray(o)?t.unshift.apply(t,h(o)):n.push(o)}return n}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakMap;if(null==e)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if("object"!==k(e))return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map((function(e){return S(e,t)}));return t.set(e,n),n}var o={};for(var r in e)o[r]=S(e[r],t);return t.set(e,o),o}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},theme:{type:String,default:"light"},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}};const T=(0,y.defineComponent)({name:"TreeNode",props:V(V({},P),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,o=(0,y.computed)((function(){return w(e.node.content)})),r=(0,y.computed)((function(){return"vjs-value vjs-value-".concat(o.value)})),a=(0,y.computed)((function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key})),l=(0,y.computed)((function(){return"multiple"===e.selectableType})),c=(0,y.computed)((function(){return"single"===e.selectableType})),i=(0,y.computed)((function(){return e.nodeSelectable(e.node)&&(l.value||c.value)})),u=(0,y.reactive)({editing:!1}),d=function(t){var o,r,a="null"===(r=null===(o=t.target)||void 0===o?void 0:o.value)?null:"undefined"===r?void 0:"true"===r||"false"!==r&&(r[0]+r[r.length-1]==='""'||r[0]+r[r.length-1]==="''"?r.slice(1,-1):"number"==typeof Number(r)&&!isNaN(Number(r))||"NaN"===r?Number(r):r);n("valueChange",a,e.node.path)},s=(0,y.computed)((function(){var t,n=null===(t=e.node)||void 0===t?void 0:t.content;return null===n?n="null":void 0===n&&(n="undefined"),"string"===o.value?'"'.concat(n,'"'):n+""})),p=function(){var t=e.renderNodeValue;return t?t({node:e.node,defaultValue:s.value}):s.value},h=function(){n("bracketsClick",!e.collapsed,e.node)},f=function(){n("iconClick",!e.collapsed,e.node)},m=function(){n("selectedChange",e.node)},C=function(){n("nodeClick",e.node),i.value&&e.selectOnClickNode&&n("selectedChange",e.node)},k=function(t){if(e.editable&&!u.editing){u.editing=!0;var n=function e(n){var o;n.target!==t.target&&(null===(o=n.target)||void 0===o?void 0:o.parentElement)!==t.target&&(u.editing=!1,document.removeEventListener("click",e))};document.removeEventListener("click",n),document.addEventListener("click",n)}};return function(){var t,n=e.node;return(0,y.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked,dark:"dark"===e.theme},onClick:C,style:e.style},[e.showLineNumber&&(0,y.createVNode)("span",{class:"vjs-node-index"},[n.id+1]),e.showSelectController&&i.value&&"objectEnd"!==n.type&&"arrayEnd"!==n.type&&(0,y.createVNode)(g,{isMultiple:l.value,checked:e.checked,onChange:m},null),(0,y.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(n.level)).map((function(t,n){return(0,y.createVNode)("div",{key:n,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)})),e.showIcon&&(0,y.createVNode)(b,{nodeType:n.type,onClick:f},null)]),n.key&&(0,y.createVNode)("span",{class:"vjs-key"},[(t=e.renderNodeKey,t?t({node:e.node,defaultKey:a.value||""}):a.value),(0,y.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,y.createVNode)("span",null,["content"!==n.type&&n.content?(0,y.createVNode)(v,{data:n.content.toString(),onClick:h},null):(0,y.createVNode)("span",{class:r.value,onClick:!e.editable||e.editableTrigger&&"click"!==e.editableTrigger?void 0:k,onDblclick:e.editable&&"dblclick"===e.editableTrigger?k:void 0},[e.editable&&u.editing?(0,y.createVNode)("input",{value:s.value,onChange:d,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):p()]),n.showComma&&(0,y.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,y.createVNode)("span",{class:"vjs-comment"},[(0,y.createTextVNode)(" // "),n.length,(0,y.createTextVNode)(" items ")])])])}}});function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const B=(0,y.defineComponent)({name:"Tree",props:L(L({},P),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},collapsedNodeLength:{type:Number,default:1/0},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function},theme:{type:String,default:"light"}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,o=t.slots,r=(0,y.ref)(),a=(0,y.computed)((function(){return N(e.data,e.rootPath)})),l=function(t,n){return a.value.reduce((function(o,r){var a,l=r.level>=t||r.length>=n,c=null===(a=e.pathCollapsible)||void 0===a?void 0:a.call(e,r);return"objectStart"!==r.type&&"arrayStart"!==r.type||!l&&!c?o:L(L({},o),{},f({},r.path,1))}),{})},c=(0,y.reactive)({translateY:0,visibleData:null,hiddenPaths:l(e.deep,e.collapsedNodeLength)}),i=(0,y.computed)((function(){for(var e=null,t=[],n=a.value.length,o=0;o<n;o++){var r=L(L({},a.value[o]),{},{id:o}),l=c.hiddenPaths[r.path];if(e&&e.path===r.path){var i="objectStart"===e.type,u=L(L(L({},r),e),{},{showComma:r.showComma,content:i?"{...}":"[...]",type:i?"objectCollapsed":"arrayCollapsed"});e=null,t.push(u)}else{if(l&&!e){e=r;continue}if(e)continue;t.push(r)}}return t})),u=(0,y.computed)((function(){var t=e.selectedValue;return t&&"multiple"===e.selectableType&&Array.isArray(t)?t:[t]})),d=(0,y.computed)((function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."})),s=function(){var t=i.value;if(e.virtual){var n,o=e.height/e.itemHeight,a=(null===(n=r.value)||void 0===n?void 0:n.scrollTop)||0,l=Math.floor(a/e.itemHeight),u=l<0?0:l+o>t.length?t.length-o:l;u<0&&(u=0);var d=u+o;c.translateY=u*e.itemHeight,c.visibleData=t.filter((function(e,t){return t>=u&&t<d}))}else c.visibleData=t},v=function(){s()},g=function(t){var o,r=t.path,a=e.selectableType;if("multiple"===a){var l=u.value.findIndex((function(e){return e===r})),c=h(u.value);-1!==l?c.splice(l,1):c.push(r),n("update:selectedValue",c),n("selectedChange",c,h(u.value))}else if("single"===a&&u.value[0]!==r){var i=(o=u.value,function(e){if(Array.isArray(e))return e}(o)||function(e){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,r=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(r.push(n.value),1!==r.length);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return r}}(o)||p(o,1)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],d=r;n("update:selectedValue",d),n("selectedChange",d,i)}},b=function(e){n("nodeClick",e)},m=function(e,t){if(e)c.hiddenPaths=L(L({},c.hiddenPaths),{},f({},t,1));else{var n=L({},c.hiddenPaths);delete n[t],c.hiddenPaths=n}},C=function(t,o){e.collapsedOnClickBrackets&&m(t,o.path),n("bracketsClick",t,o)},k=function(e,t){m(e,t.path),n("iconClick",e,t)},w=function(t,o){var r=S(e.data),a=e.rootPath;new Function("data","val","data".concat(o.slice(a.length),"=val"))(r,t),n("update:data",r)};return(0,y.watchEffect)((function(){d.value&&function(e){throw new Error("[VueJSONPretty] ".concat(e))}(d.value)})),(0,y.watchEffect)((function(){i.value&&s()})),(0,y.watch)((function(){return e.deep}),(function(t){t&&(c.hiddenPaths=l(t,e.collapsedNodeLength))})),(0,y.watch)((function(){return e.collapsedNodeLength}),(function(t){t&&(c.hiddenPaths=l(e.deep,t))})),function(){var t,n,l=null!==(t=e.renderNodeKey)&&void 0!==t?t:o.renderNodeKey,d=null!==(n=e.renderNodeValue)&&void 0!==n?n:o.renderNodeValue,s=c.visibleData&&c.visibleData.map((function(t){return(0,y.createVNode)(T,{key:t.id,node:t,collapsed:!!c.hiddenPaths[t.path],theme:e.theme,showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:u.value.includes(t.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:l,renderNodeValue:d,onNodeClick:b,onBracketsClick:C,onIconClick:k,onSelectedChange:g,onValueChange:w,style:e.itemHeight&&20!==e.itemHeight?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)}));return(0,y.createVNode)("div",{ref:r,class:{"vjs-tree":!0,"is-virtual":e.virtual,dark:"dark"===e.theme},onScroll:e.virtual?v:void 0,style:e.showLineNumber?L({paddingLeft:"".concat(12*Number(a.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,y.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,y.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(i.value.length*e.itemHeight,"px")}},[(0,y.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(c.translateY,"px)")}},[s])])]):s])}}});e("S",d.Z)}}}));
