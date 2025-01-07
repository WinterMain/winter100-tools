import{a as M,u as B}from"./LDn0seCD.js";var w={},l={};Object.defineProperty(l,"__esModule",{value:!0});l.HashMD=l.Maj=l.Chi=void 0;const A=M,_=B;function U(f,t,n,s){if(typeof f.setBigUint64=="function")return f.setBigUint64(t,n,s);const i=BigInt(32),h=BigInt(4294967295),e=Number(n>>i&h),c=Number(n&h),o=s?4:0,x=s?0:4;f.setUint32(t+o,e,s),f.setUint32(t+x,c,s)}const j=(f,t,n)=>f&t^~f&n;l.Chi=j;const D=(f,t,n)=>f&t^f&n^t&n;l.Maj=D;class L extends _.Hash{constructor(t,n,s,i){super(),this.blockLen=t,this.outputLen=n,this.padOffset=s,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,_.createView)(this.buffer)}update(t){(0,A.exists)(this);const{view:n,buffer:s,blockLen:i}=this;t=(0,_.toBytes)(t);const h=t.length;for(let e=0;e<h;){const c=Math.min(i-this.pos,h-e);if(c===i){const o=(0,_.createView)(t);for(;i<=h-e;e+=i)this.process(o,e);continue}s.set(t.subarray(e,e+c),this.pos),this.pos+=c,e+=c,this.pos===i&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){(0,A.exists)(this),(0,A.output)(t,this),this.finished=!0;const{buffer:n,view:s,blockLen:i,isLE:h}=this;let{pos:e}=this;n[e++]=128,this.buffer.subarray(e).fill(0),this.padOffset>i-e&&(this.process(s,0),e=0);for(let r=e;r<i;r++)n[r]=0;U(s,i-8,BigInt(this.length*8),h),this.process(s,0);const c=(0,_.createView)(t),o=this.outputLen;if(o%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const x=o/4,b=this.get();if(x>b.length)throw new Error("_sha2: outputLen bigger than state");for(let r=0;r<x;r++)c.setUint32(4*r,b[r],h)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const s=t.slice(0,n);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:s,length:i,finished:h,destroyed:e,pos:c}=this;return t.length=i,t.pos=c,t.finished=h,t.destroyed=e,i%n&&t.buffer.set(s),t}}l.HashMD=L;Object.defineProperty(w,"__esModule",{value:!0});w.sha224=w.sha256=void 0;const C=l,a=B,I=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),u=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),d=new Uint32Array(64);class m extends C.HashMD{constructor(){super(64,32,8,!1),this.A=u[0]|0,this.B=u[1]|0,this.C=u[2]|0,this.D=u[3]|0,this.E=u[4]|0,this.F=u[5]|0,this.G=u[6]|0,this.H=u[7]|0}get(){const{A:t,B:n,C:s,D:i,E:h,F:e,G:c,H:o}=this;return[t,n,s,i,h,e,c,o]}set(t,n,s,i,h,e,c,o){this.A=t|0,this.B=n|0,this.C=s|0,this.D=i|0,this.E=h|0,this.F=e|0,this.G=c|0,this.H=o|0}process(t,n){for(let r=0;r<16;r++,n+=4)d[r]=t.getUint32(n,!1);for(let r=16;r<64;r++){const g=d[r-15],p=d[r-2],y=(0,a.rotr)(g,7)^(0,a.rotr)(g,18)^g>>>3,H=(0,a.rotr)(p,17)^(0,a.rotr)(p,19)^p>>>10;d[r]=H+d[r-7]+y+d[r-16]|0}let{A:s,B:i,C:h,D:e,E:c,F:o,G:x,H:b}=this;for(let r=0;r<64;r++){const g=(0,a.rotr)(c,6)^(0,a.rotr)(c,11)^(0,a.rotr)(c,25),p=b+g+(0,C.Chi)(c,o,x)+I[r]+d[r]|0,H=((0,a.rotr)(s,2)^(0,a.rotr)(s,13)^(0,a.rotr)(s,22))+(0,C.Maj)(s,i,h)|0;b=x,x=o,o=c,c=e+p|0,e=h,h=i,i=s,s=p+H|0}s=s+this.A|0,i=i+this.B|0,h=h+this.C|0,e=e+this.D|0,c=c+this.E|0,o=o+this.F|0,x=x+this.G|0,b=b+this.H|0,this.set(s,i,h,e,c,o,x,b)}roundClean(){d.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class E extends m{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}w.sha256=(0,a.wrapConstructor)(()=>new m);w.sha224=(0,a.wrapConstructor)(()=>new E);export{l as _,w as s};
