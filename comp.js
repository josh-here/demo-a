var simplifySvgPath=(function(){class t{constructor(t){this.t=t,this.i=10**this.t}h(t){return this.t<16?Math.round(t*this.i)/this.i:t}o(t,s){return this.h(t)+","+this.h(s)}}class s{constructor(t,s){this.x=t,this.y=s}u(){return new s(-this.x,-this.y)}l(t=1){return this._(t/(this.M()||1/0))}g(t){return new s(this.x+t.x,this.y+t.y)}v(t){return new s(this.x-t.x,this.y-t.y)}_(t){return new s(this.x*t,this.y*t)}m(t){return this.x*t.x+this.y*t.y}M(){return Math.sqrt(this.x*this.x+this.y*this.y)}p(t){const s=this.x-t.x,e=this.y-t.y;return Math.sqrt(s*s+e*e)}}class e{constructor(t,s){this.C=t,this.L=s}}class r{constructor(t,s){this.k=t,this.B=s}D(t){const s=this.k;this.B&&(s.unshift(s[s.length-1]),s.push(s[1]));const r=s.length;if(0===r)return[];const i=[new e(s[0])];return this.P(i,t,0,r-1,s[1].v(s[0]),s[r-2].v(s[r-1])),this.B&&(i.shift(),i.pop()),i}P(t,s,e,r,i,n){const h=this.k;if(r-e==1){const s=h[e],o=h[r],c=s.p(o)/3;return void this.R(t,[s,s.g(i.l(c)),o.g(n.l(c)),o])}const o=this.j(e,r);let c,u=Math.max(s,s*s),l=!0;for(let h=0;h<=4;h++){const h=this.q(e,r,o,i,n),a=this.A(e,r,h,o);if(a.error<s&&l)return void this.R(t,h);if(c=a.index,a.error>=u)break;l=this.F(e,r,o,h),u=a.error}const a=h[c-1].v(h[c+1]);this.P(t,s,e,c,i,a),this.P(t,s,c,r,a.u(),n)}R(t,s){t[t.length-1].G=s[1].v(s[0]),t.push(new e(s[3],s[2].v(s[3])))}q(t,s,e,r,i){const n=1e-12,h=Math.abs,o=this.k,c=o[t],u=o[s],l=[[0,0],[0,0]],a=[0,0];for(let n=0,h=s-t+1;n<h;n++){const s=e[n],h=1-s,f=3*s*h,_=h*h*h,d=f*h,w=f*s,M=s*s*s,g=r.l(d),v=i.l(w),m=o[t+n].v(c._(_+d)).v(u._(w+M));l[0][0]+=g.m(g),l[0][1]+=g.m(v),l[1][0]=l[0][1],l[1][1]+=v.m(v),a[0]+=g.m(m),a[1]+=v.m(m)}const f=l[0][0]*l[1][1]-l[1][0]*l[0][1];let _,d;if(h(f)>n){const t=l[0][0]*a[1]-l[1][0]*a[0];_=(a[0]*l[1][1]-a[1]*l[0][1])/f,d=t/f}else{const t=l[0][0]+l[0][1],s=l[1][0]+l[1][1];_=d=h(t)>n?a[0]/t:h(s)>n?a[1]/s:0}const w=u.p(c),M=n*w;let g,v;if(_<M||d<M)_=d=w/3;else{const t=u.v(c);g=r.l(_),v=i.l(d),g.m(t)-v.m(t)>w*w&&(_=d=w/3,g=v=null)}return[c,c.g(g||r.l(_)),u.g(v||i.l(d)),u]}F(t,s,e,r){for(let i=t;i<=s;i++)e[i-t]=this.H(r,this.k[i],e[i-t]);for(let t=1,s=e.length;t<s;t++)if(e[t]<=e[t-1])return!1;return!0}H(t,s,e){const r=[],i=[];for(let s=0;s<=2;s++)r[s]=t[s+1].v(t[s])._(3);for(let t=0;t<=1;t++)i[t]=r[t+1].v(r[t])._(2);const n=this.I(3,t,e),h=this.I(2,r,e),o=this.I(1,i,e),c=n.v(s),u=h.m(h)+c.m(o);return(l=u)>=-112e-18&&l<=112e-18?e:e-c.m(h)/u;var l}I(t,s,e){const r=s.slice();for(let s=1;s<=t;s++)for(let i=0;i<=t-s;i++)r[i]=r[i]._(1-e).g(r[i+1]._(e));return r[0]}j(t,s){const e=[0];for(let r=t+1;r<=s;r++)e[r-t]=e[r-t-1]+this.k[r].p(this.k[r-1]);for(let r=1,i=s-t;r<=i;r++)e[r]/=e[i];return e}A(t,s,e,r){let i=Math.floor((s-t+1)/2),n=0;for(let h=t+1;h<s;h++){const s=this.I(3,e,r[h-t]).v(this.k[h]),o=s.x*s.x+s.y*s.y;o>=n&&(n=o,i=h)}return{error:n,index:i}}}return(e,i={})=>((s,e,r)=>{const i=s.length,n=new t(r);let h,o,c,u,l=!0;const a=[],f=(t,s)=>{const e=t.C.x,r=t.C.y;if(l)a.push("M"+n.o(e,r)),l=!1;else{const i=e+(t.L?.x??0),l=r+(t.L?.y??0);if(i===e&&l===r&&c===h&&u===o){if(!s){const t=e-h,s=r-o;a.push(0===t?"v"+n.h(s):0===s?"h"+n.h(t):"l"+n.o(t,s))}}else a.push("c"+n.o(c-h,u-o)+" "+n.o(i-h,l-o)+" "+n.o(e-h,r-o))}h=e,o=r,c=e+(t.G?.x??0),u=r+(t.G?.y??0)};if(!i)return"";for(let t=0;t<i;t++)f(s[t]);return e&&i>0&&(f(s[0],!0),a.push("z")),a.join("")})(new r(e.map((t=>new s(t[0],t[1]))),i.closed).D(i.tolerance??1),i.closed,i.precision??0);})()
