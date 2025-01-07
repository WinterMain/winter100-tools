System.register(["./6OEEx3mq-legacy.js"],(function(t,s){"use strict";var e,i;return{setters:[t=>{e=t.a,i=t.u}],execute:function(){var s=t("s",{}),r=t("_",{});Object.defineProperty(r,"__esModule",{value:!0}),r.HashMD=r.Maj=r.Chi=void 0;const h=e,o=i;r.Chi=(t,s,e)=>t&s^~t&e,r.Maj=(t,s,e)=>t&s^t&e^s&e;class n extends o.Hash{constructor(t,s,e,i){super(),this.blockLen=t,this.outputLen=s,this.padOffset=e,this.isLE=i,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,o.createView)(this.buffer)}update(t){(0,h.exists)(this);const{view:s,buffer:e,blockLen:i}=this,r=(t=(0,o.toBytes)(t)).length;for(let h=0;h<r;){const n=Math.min(i-this.pos,r-h);if(n!==i)e.set(t.subarray(h,h+n),this.pos),this.pos+=n,h+=n,this.pos===i&&(this.process(s,0),this.pos=0);else{const s=(0,o.createView)(t);for(;i<=r-h;h+=i)this.process(s,h)}}return this.length+=t.length,this.roundClean(),this}digestInto(t){(0,h.exists)(this),(0,h.output)(t,this),this.finished=!0;const{buffer:s,view:e,blockLen:i,isLE:r}=this;let{pos:n}=this;s[n++]=128,this.buffer.subarray(n).fill(0),this.padOffset>i-n&&(this.process(e,0),n=0);for(let h=n;h<i;h++)s[h]=0;!function(t,s,e,i){if("function"==typeof t.setBigUint64)return t.setBigUint64(s,e,i);const r=BigInt(32),h=BigInt(4294967295),o=Number(e>>r&h),n=Number(e&h),u=i?4:0,c=i?0:4;t.setUint32(s+u,o,i),t.setUint32(s+c,n,i)}(e,i-8,BigInt(8*this.length),r),this.process(e,0);const u=(0,o.createView)(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=c/4,a=this.get();if(f>a.length)throw new Error("_sha2: outputLen bigger than state");for(let h=0;h<f;h++)u.setUint32(4*h,a[h],r)}digest(){const{buffer:t,outputLen:s}=this;this.digestInto(t);const e=t.slice(0,s);return this.destroy(),e}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:s,buffer:e,length:i,finished:r,destroyed:h,pos:o}=this;return t.length=i,t.pos=o,t.finished=r,t.destroyed=h,i%s&&t.buffer.set(e),t}}r.HashMD=n,Object.defineProperty(s,"__esModule",{value:!0}),s.sha224=s.sha256=void 0;const u=r,c=i,f=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),a=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),l=new Uint32Array(64);class p extends u.HashMD{constructor(){super(64,32,8,!1),this.A=0|a[0],this.B=0|a[1],this.C=0|a[2],this.D=0|a[3],this.E=0|a[4],this.F=0|a[5],this.G=0|a[6],this.H=0|a[7]}get(){const{A:t,B:s,C:e,D:i,E:r,F:h,G:o,H:n}=this;return[t,s,e,i,r,h,o,n]}set(t,s,e,i,r,h,o,n){this.A=0|t,this.B=0|s,this.C=0|e,this.D=0|i,this.E=0|r,this.F=0|h,this.G=0|o,this.H=0|n}process(t,s){for(let u=0;u<16;u++,s+=4)l[u]=t.getUint32(s,!1);for(let u=16;u<64;u++){const t=l[u-15],s=l[u-2],e=(0,c.rotr)(t,7)^(0,c.rotr)(t,18)^t>>>3,i=(0,c.rotr)(s,17)^(0,c.rotr)(s,19)^s>>>10;l[u]=i+l[u-7]+e+l[u-16]|0}let{A:e,B:i,C:r,D:h,E:o,F:n,G:a,H:p}=this;for(let d=0;d<64;d++){const t=p+((0,c.rotr)(o,6)^(0,c.rotr)(o,11)^(0,c.rotr)(o,25))+(0,u.Chi)(o,n,a)+f[d]+l[d]|0,s=((0,c.rotr)(e,2)^(0,c.rotr)(e,13)^(0,c.rotr)(e,22))+(0,u.Maj)(e,i,r)|0;p=a,a=n,n=o,o=h+t|0,h=r,r=i,i=e,e=t+s|0}e=e+this.A|0,i=i+this.B|0,r=r+this.C|0,h=h+this.D|0,o=o+this.E|0,n=n+this.F|0,a=a+this.G|0,p=p+this.H|0,this.set(e,i,r,h,o,n,a,p)}roundClean(){l.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class d extends p{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}s.sha256=(0,c.wrapConstructor)((()=>new p)),s.sha224=(0,c.wrapConstructor)((()=>new d))}}}));