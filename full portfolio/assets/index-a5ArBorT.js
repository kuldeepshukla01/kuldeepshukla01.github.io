(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Rd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},Vu,hn,Pt,di=1e8,yt=1/di,bc=Math.PI*2,Lm=bc/4,Im=0,Cd=Math.sqrt,Um=Math.cos,Nm=Math.sin,ln=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},nr=function(e){return typeof e=="number"},Hu=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},zn=function(e){return e!==!1},Wu=function(){return typeof window<"u"},no=function(e){return Ot(e)||ln(e)},Pd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yn=Array.isArray,Fm=/random\([^)]+\)/g,Om=/,\s*/g,kh=/(?:-?\.?\d|\.)+/gi,Dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Dl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ld=/[+-]=-?[.\d]+/,Bm=/[^,'"\[\]\s]+/gi,zm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ri,Ac,Xu,ri={},il={},Id,Ud=function(e){return(il=Ws(e,ri))&&Wn},Yu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fa=function(e,t){return!t&&console.warn(e)},Nd=function(e,t){return e&&(ri[e]=t)&&il&&(il[e]=t)||ri},Oa=function(){return 0},km={suppressEvents:!0,isStart:!0,kill:!1},Vo={suppressEvents:!0,kill:!1},Gm={suppressEvents:!0},qu={},Sr=[],wc={},Fd,Kn={},Ll={},Gh=30,Ho=[],$u="",Ku=function(e){var t=e[0],n,i;if(zi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ho.length;i--&&!Ho[i].targetTest(t););n=Ho[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new rp(e[i],n)))||e.splice(i,1);return e},Wr=function(e){return e._gsap||Ku(pi(e))[0]._gsap},Od=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():Hu(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Ns=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Vm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},rl=function(){var e=Sr.length,t=Sr.slice(0),n,i;for(wc={},Sr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zu=function(e){return!!(e._initted||e._startAt||e.add)},Bd=function(e,t,n,i){Sr.length&&!hn&&rl(),e.render(t,n,!!(hn&&t<0&&Zu(e))),Sr.length&&!hn&&rl()},zd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Bm).length<2?t:ln(e)?e.trim():e},kd=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hm=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ws=function(e,t){for(var n in t)e[n]=t[n];return e},Vh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},sl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Sa=function(e){var t=e.parent||It,n=e.keyframes?Hm(yn(e.keyframes)):si;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Wm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Gd=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},yl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Xm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Rc=function(e,t,n,i){return e._startAt&&(hn?e._startAt.revert(Vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ym=function r(e){return!e||e._ts&&r(e.parent)},Hh=function(e){return e._repeat?Xs(e._tTime,e=e.duration()+e._rDelay)*e:0},Xs=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},El=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||yt)||0))},Tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),El(e),n._dirty||Xr(n,e)),e},Vd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||Za(0,t.totalDuration(),n)-t._tTime>yt)&&t.render(n,!0)),Xr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-yt}},Di=function(e,t,n,i){return t.parent&&Tr(t),t._start=Lt((nr(n)?n:n||e!==It?ci(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gd(e,t,"_first","_last",e._sort?"_start":0),Cc(t)||(e._recent=t),i||Vd(e,t),e._ts<0&&Tl(e,e._tTime),e},Hd=function(e,t){return(ri.ScrollTrigger||Yu("scrollTrigger",t))&&ri.ScrollTrigger.create(t,e)},Wd=function(e,t,n,i,s){if(Qu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!hn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fd!==Qn.frame)return Sr.push(e),e._lazy=[s,i],1},qm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Cc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$m=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&qm(e)&&!(!e._initted&&Cc(e))||(e._ts<0||e._dp._ts<0)&&!Cc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Za(0,e._tDur,t),u=Xs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Xs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||hn||i||e._zTime===yt||!t&&e._zTime){if(!e._initted&&Wd(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?yt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Rc(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Tr(e,1),!n&&!hn&&(ti(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Km=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ys=function(e,t,n,i){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Tl(e,e._tTime=e._tDur*o),e.parent&&El(e),n||Xr(e.parent,e),e},Wh=function(e){return e instanceof On?Xr(e):Ys(e,e._dur)},Zm={_start:0,endTime:Oa,totalDuration:Oa},ci=function r(e,t,n){var i=e.labels,s=e._recent||Zm,a=e.duration()>=di?s.endTime(!1):e._dur,o,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(yn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ya=function(e,t,n){var i=nr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;a.immediateRender=zn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Zt(t[0],a,t[s+1])},Cr=function(e,t){return e||e===0?t(e):t},Za=function(e,t,n){return n<e?e:n>t?t:n},vn=function(e,t){return!ln(e)||!(t=zm.exec(e))?"":t[1]},Jm=function(e,t,n){return Cr(n,function(i){return Za(e,t,i)})},Pc=[].slice,Xd=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Ri},Qm=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ln(i)&&!t||Xd(i,1)?(s=n).push.apply(s,pi(i)):n.push(i)})||n},pi=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):ln(e)&&!n&&(Ac||!qs())?Pc.call((t||Xu).querySelectorAll(e),0):yn(e)?Qm(e,n):Xd(e)?Pc.call(e,0):e?[e]:[]},Dc=function(e){return e=pi(e)[0]||Fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pi(t,n.querySelectorAll?n:n===e?Fa("Invalid scope")||Xu.createElement("div"):e)}},Yd=function(e){return e.sort(function(){return .5-Math.random()})},qd=function(e){if(Ot(e))return e;var t=zi(e)?e:{each:e},n=Yr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return ln(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||t).length,m=a[_],p,S,w,M,y,b,A,x,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,di])[1],!T){for(A=-di;A<(A=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],p=l?Math.min(T,_)*u-.5:i%T,S=T===di?0:l?_*d/T-.5:i/T|0,A=0,x=di,b=0;b<_;b++)w=b%T-p,M=S-(b/T|0),m[b]=y=c?Math.abs(c==="y"?M:w):Cd(w*w+M*M),y>A&&(A=y),y<x&&(x=y);i==="random"&&Yd(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=vn(t.amount||t.each)||0,n=n&&_<0?h_(n):n}return _=(m[h]-m.min)/m.max||0,Lt(m.b+(n?n(_):_)*m.v)+m.u}},Lc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(nr(n)?0:vn(n))}},$d=function(e,t){var n=yn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||di,e.values?(e=pi(e.values),(s=!nr(e[0]))&&(i*=i)):e=Lc(e.increment)),Cr(t,n?Ot(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=di,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||nr(a)?u:u+vn(a)}:Lc(e))},Kd=function(e,t,n,i){return Cr(yn(e)?!t:n===!0?!!(n=0):!i,function(){return yn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},jm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},e_=function(e,t){return function(n){return e(parseFloat(n))+(t||vn(n))}},t_=function(e,t,n){return Jd(e,t,0,1,n)},Zd=function(e,t,n){return Cr(n,function(i){return e[~~t(i)]})},n_=function r(e,t,n){var i=t-e;return yn(e)?Zd(e,r(0,e.length),t):Cr(n,function(s){return(i+(s-e)%i)%i+e})},i_=function r(e,t,n){var i=t-e,s=i*2;return yn(e)?Zd(e,r(0,e.length-1),t):Cr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ba=function(e){return e.replace(Fm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Om);return Kd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Jd=function(e,t,n,i,s){var a=t-e,o=i-n;return Cr(s,function(l){return n+((l-e)/a*o||0)})},r_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=ln(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(yn(e)&&!yn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Ws(yn(e)?[]:{},e));if(!u){for(l in t)Ju.call(o,e,l,"get",t[l]);s=function(g){return th(g,o)||(a?e.p:e)}}}return Cr(n,s)},Xh=function(e,t,n){var i=e.labels,s=di,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ti=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Sr.length&&rl(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},fa=function(e){return Tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hn),e.progress()<1&&ti(e,"onInterrupt"),e},Ds,Qd=[],jd=function(e){if(e)if(e=!e.name&&e.default||e,Wu()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oa,render:th,add:Ju,kill:S_,modifier:M_,rawVars:0},a={targetTest:0,get:0,getSetter:eh,aliases:{},register:0};if(qs(),e!==i){if(Kn[t])return;si(i,si(sl(e,s),a)),Ws(i.prototype,Ws(s,sl(e,a))),Kn[i.prop=t]=i,e.targetTest&&(Ho.push(i),qu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Nd(t,i),e.register&&e.register(Wn,i,Gn)}else Qd.push(e)},St=255,da={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Il=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},ep=function(e,t,n){var i=e?nr(e)?[e>>16,e>>8&St,e&St]:0:da.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),da[e])i=da[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(kh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Il(l+1/3,s,a),i[1]=Il(l,s,a),i[2]=Il(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Dd),n&&i.length<4&&(i[3]=1),i}else i=e.match(kh)||da.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/St,a=i[1]/St,o=i[2]/St,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},tp=function(e){var t=[],n=[],i=-1;return e.split(yr).forEach(function(s){var a=s.match(Ps)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yh=function(e,t,n){var i="",s=(e+i).match(yr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=ep(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=tp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(yr,"1").split(Ps),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(yr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in da)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),s_=/hsl[a]?\(/,np=function(e){var t=e.join(" "),n;if(yr.lastIndex=0,yr.test(t))return n=s_.test(t),e[1]=Yh(e[1],n),e[0]=Yh(e[0],n,tp(e[1])),!0},za,Qn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(m){var p=r()-i,S=m===!0,w,M,y,b;if((p>e||p<0)&&(n+=p-t),i+=p,y=i-n,w=y-a,(w>0||S)&&(b=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,a+=w+(w>=s?4:s-w),M=1),S||(l=c(_)),M)for(f=0;f<o.length;f++)o[f](y,h,b,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Id&&(!Ac&&Wu()&&(Ri=Ac=window,Xu=Ri.document||{},ri.gsap=Wn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Wn.version),Ud(il||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Qd.forEach(jd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},za=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),za=0,c=Oa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,S){var w=p?function(M,y,b,A){m(M,y,b,A),d.remove(w)}:m;return d.remove(m),o[S?"unshift":"push"](w),qs(),w},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),qs=function(){return!za&&Qn.wake()},ct={},a_=/^[\d.\-M][\d.\-,\s]/,o_=/["']/g,l_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(o_,"").trim():+c,i=l.substr(o+1).trim();return t},c_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},u_=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[l_(t[1])]:c_(e).split(",").map(zd)):ct._CE&&a_.test(e)?ct._CE("",e):n},h_=function(e){return function(t){return 1-e(1-t)}},Yr=function(e,t){return e&&(Ot(e)?e:ct[e]||u_(e))||t},is=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return kn(e,function(o){ct[o]=ri[o]=s,ct[a=o.toLowerCase()]=n;for(var l in s)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=s[l]}),s},ip=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ul=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/bc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Nm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:ip(o);return s=bc/s,l.config=function(c,u){return r(e,c,u)},l},Nl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ip(n);return i.config=function(s){return r(e,s)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;is(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;is("Elastic",Ul("in"),Ul("out"),Ul());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};is("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);is("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});is("Circ",function(r){return-(Cd(1-r*r)-1)});is("Sine",function(r){return r===1?1:-Um(r*Lm)+1});is("Back",Nl("in"),Nl("out"),Nl());ct.SteppedEase=ct.steps=ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-yt;return function(o){return((i*Za(0,a,o)|0)+s)*n}}};Na.ease=ct["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $u+=r+","+r+"Params,"});var rp=function(e,t){this.id=Im++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Od,this.set=t?t.getSetter:eh},ka=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ys(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),za||Qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tl(this,n),!s._dp||s.parent||Vd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===yt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-yt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?al(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-yt?0:this._rts,this.totalTime(Za(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),El(this),Xm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==yt&&(this._tTime-=yt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Gm);var i=hn;return hn=n,Zu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),hn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-yt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-yt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-yt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-yt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ot(n)?n:kd,l=function(){var u=i.then;i.then=null,s&&s(),Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){fa(this)},r})();si(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-yt,_prom:0,_ps:!1,_rts:1});var On=(function(r){Rd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),It&&Di(n.parent||It,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Hd($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return ya(0,arguments,this),this},t.from=function(i,s,a){return ya(1,arguments,this),this},t.fromTo=function(i,s,a,o){return ya(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(i,s,ci(this,a),1),this},t.call=function(i,s,a){return Di(this,Zt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Zt(i,a,ci(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Sa(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Sa(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,m,p,S,w,M,y,b,A;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,M=this._start,w=this._ts,p=!w,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Lt(u%m),u===l?(_=this._repeat,h=c):(y=Lt(u/m),_=~~y,_&&_===y&&(h=c,_--),h>c&&(h=c)),y=Xs(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),b&&_&1&&(h=c-h,A=1),_!==y&&!this._lock){var x=b&&y&1,T=x===(b&&_&1);if(_<y&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Lt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Km(this,Lt(o),Lt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&(ti(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-yt);break}}f=g}else{f=this._last;for(var R=i<0?i:h;f;){if(g=f._prev,(f._act||R<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||hn&&Zu(f)),h!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=R?-yt:yt);break}}f=g}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-yt)._zTime=h>=o?1:-1,this._ts))return this._start=M,El(this),this.render(i,s,a);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Tr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ti(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(nr(s)||(s=ci(this,s,i)),!(i instanceof ka)){if(yn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ln(i))return this.addLabel(i,s);if(Ot(i))i=Zt.delayedCall(0,i);else return this}return this!==i?Di(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-di);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Zt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return ln(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&yl(this,i),i===this._recent&&(this._recent=this._last),Xr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Zt.delayedCall(0,s||Oa,a);return o.data="isPause",this._hasPause=1,Di(this,o,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Tr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=pi(i),l=this._first,c=nr(s),u;l;)l instanceof Zt?Vm(l._targets,o)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ci(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Zt.to(a,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||yt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ys(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,si({startAt:{time:ci(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xh(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xh(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+yt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Xr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=di,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ys(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(Bd(It,al(i,It)),Fd=Qn.frame),Qn.frame>=Gh){Gh+=ii.autoSleep||120;var s=It._first;if((!s||!s._ts)&&ii.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},e})(ka);si(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var f_=function(e,t,n,i,s,a,o){var l=new Gn(this._pt,e,t,0,1,up,null,s),c=0,u=0,d,h,f,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ba(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),h=n.match(Dl)||[];d=Dl.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ns(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Dl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ld.test(i)||p)&&(l.e=0),this._pt=l,l},Ju=function(e,t,n,i,s,a,o,l,c,u){Ot(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Ot(d)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Ot(d)?c?g_:lp:ju,g;if(ln(i)&&(~i.indexOf("random(")&&(i=Ba(i)),i.charAt(1)==="="&&(g=Ns(h,i)+(vn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ic)return!isNaN(h*i)&&i!==""?(g=new Gn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?v_:cp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Yu(t,i),f_.call(this,e,t,h,i,f,l||ii.stringFilter,c))},d_=function(e,t,n,i,s){if(Ot(e)&&(e=Ea(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||yn(e)||Pd(e))return ln(e)?Ea(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ea(e[o],s,t,n,i);return a},sp=function(e,t,n,i,s,a){var o,l,c,u;if(Kn[e]&&(o=new Kn[e]).init(s,o.rawVars?t[e]:d_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Gn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_r,Ic,Qu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,w=e._overwrite==="auto"&&!Vu,M=e.timeline,y=i.easeReverse||d,b,A,x,T,R,L,D,k,I,B,$,O,J;if(M&&(!h||!s)&&(s="none"),e._ease=Yr(s,Na.ease),e._rEase=y&&(Yr(y)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||h&&!i.stagger){if(k=m[0]?Wr(m[0]).harness:0,O=k&&i[k.prop],b=sl(i,qu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Vo:km),_._lazy=0),a){if(Tr(e._startAt=Zt.set(m,si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn||!o&&!f)&&e._startAt.revert(Vo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),x=si({overwrite:!1,data:"isFromStart",lazy:o&&!_&&zn(l),immediateRender:o,stagger:0,parent:p},b),O&&(x[k.prop]=O),Tr(e._startAt=Zt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(hn?e._startAt.revert(Vo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,yt,yt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&zn(l)||l&&!g,A=0;A<m.length;A++){if(R=m[A],D=R._gsap||Ku(m)[A]._gsap,e._ptLookup[A]=B={},wc[D.id]&&Sr.length&&rl(),$=S===m?A:S.indexOf(R),k&&(I=new k).init(R,O||b,e,$,S)!==!1&&(e._pt=T=new Gn(e._pt,R,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Y){B[Y]=T}),I.priority&&(L=1)),!k||O)for(x in b)Kn[x]&&(I=sp(x,b,e,$,R,S))?I.priority&&(L=1):B[x]=T=Ju.call(e,R,x,"get",b[x],$,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(R,e._op[A]),w&&e._pt&&(_r=e,It.killTweensOf(R,B,e.globalTime(t)),J=!e.parent,_r=0),e._pt&&l&&(wc[D.id]=1)}L&&hp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&M.render(di,!0,!0)},p_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ic=1,e.vars[t]="+=0",Qu(e,o),Ic=0,l?Fa(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Gt(n)+vn(d.e)),d.b&&(d.b=u.s+vn(d.b))},m_=function(e,t){var n=e[0]?Wr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Ws({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},__=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(yn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ea=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):ln(e)&&~e.indexOf("random(")?Ba(e):e},ap=$u+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",op={};kn(ap+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return op[r]=1});var Zt=(function(r){Rd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Sa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||It,S=(yn(n)||Pd(n)?nr(n[0]):"length"in i)?[n]:pi(n),w,M,y,b,A,x,T,R;if(o._targets=S.length?Ku(S):Fa("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||no(c)||no(u)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(w=o.timeline=new On({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),w.kill(),w.parent=w._dp=$i(o),w._start=0,h||no(c)||no(u)){if(b=S.length,T=h&&qd(h),zi(h))for(A in h)~ap.indexOf(A)&&(R||(R={}),R[A]=h[A]);for(M=0;M<b;M++)y=sl(i,op),y.stagger=0,L&&(y.easeReverse=L),R&&Ws(y,R),x=S[M],y.duration=+Ea(c,$i(o),M,x,S),y.delay=(+Ea(u,$i(o),M,x,S)||0)-o._delay,!h&&b===1&&y.delay&&(o._delay=u=y.delay,o._start+=u,y.delay=0),w.to(x,y,T?T(M,x,S):0),w._ease=ct.none;w.duration()?c=u=0:o.timeline=0}else if(g){Sa(si(w.vars.defaults,{ease:"none"})),w._ease=Yr(g.ease||i.ease||"none");var D=0,k,I,B;if(yn(g))g.forEach(function($){return w.to(S,$,">")}),w.duration();else{y={};for(A in g)A==="ease"||A==="easeEach"||__(A,g[A],y,g.easeEach);for(A in y)for(k=y[A].sort(function($,O){return $.t-O.t}),D=0,M=0;M<k.length;M++)I=k[M],B={ease:I.e,duration:(I.t-(M?k[M-1].t:0))/100*c},B[A]=I.v,w.to(S,B,D),D+=B.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return f===!0&&!Vu&&(_r=$i(o),It.killTweensOf(S),_r=0),Di(p,$i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Lt(p._time)&&zn(d)&&Ym($i(o))&&p.data!=="nested")&&(o._tTime=-yt,o.render(Math.max(0,-u)||0)),m&&Hd($i(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-yt&&!u?l:i<yt?0:i,h,f,g,_,m,p,S,w;if(!c)$m(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,w=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Lt(d%_),d===l?(g=this._repeat,h=c):(m=Lt(d/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Xs(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Lt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Wd(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=h<o;if(M!==this._inv){var y=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(M?-1:1)/y:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(h/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(ti(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Rc(this,i,s,a),ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Rc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Tr(this,1),!s&&!(u&&!o)&&(d||o||p)&&(ti(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){za||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Qu(this,c),u=this._ease(c/this._dur),p_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Tl(this,0),this.parent||Gd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?fa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_r&&_r.vars.overwrite!==!0)._first||fa(this),this.parent&&a!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?pi(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!s||s==="all")&&Wm(o,l))return s==="all"&&(this._pt=0),fa(this);for(d=this._op=this._op||[],s!=="all"&&(ln(s)&&(_={},kn(s,function(S){return _[S]=1}),s=_),s=m_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&yl(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&fa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ya(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return ya(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(ka);si(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(r){Zt[r]=function(){var e=new On,t=Pc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ju=function(e,t,n){return e[t]=n},lp=function(e,t,n){return e[t](n)},g_=function(e,t,n,i){return e[t](i.fp,n)},x_=function(e,t,n){return e.setAttribute(t,n)},eh=function(e,t){return Ot(e[t])?lp:Hu(e[t])&&e.setAttribute?x_:ju},cp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},v_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},up=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},th=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},M_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},S_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?yl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},y_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Gn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||cp,this.d=l||this,this.set=c||ju,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=y_,this.m=n,this.mt=s,this.tween=i},r})();kn($u+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return qu[r]=1});ri.TweenMax=ri.TweenLite=Zt;ri.TimelineLite=ri.TimelineMax=On;It=new On({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=np;var qr=[],Wo={},E_=[],qh=0,T_=0,Fl=function(e){return(Wo[e]||E_).map(function(t){return t()})},Uc=function(){var e=Date.now(),t=[];e-qh>2&&(Fl("matchMediaInit"),qr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ri.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Fl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qh=e,Fl("matchMedia"))},fp=(function(){function r(t,n){this.selector=n&&Dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=T_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var a=this,o=function(){var c=Pt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Dc(s)),Pt=a,d=i.apply(a,arguments),Ot(d)&&a._r.push(d),Pt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ot?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=qr.length;a--;)qr[a].id===this.id&&qr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),b_=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var a=new fp(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(qr.indexOf(a)<0&&qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Uc):l.addEventListener("change",Uc)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jd(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=pi(e)[0]);var s=Wr(e||{}).get,a=n?kd:zd;return n==="native"&&(n=""),e&&(t?a((Kn[t]&&Kn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Kn[o]&&Kn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=pi(e),e.length>1){var i=e.map(function(u){return Wn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Kn[t],o=Wr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Ds._pt=0,d.init(e,n?u+n:u,Ds,0,[e]),d.render(1,d),Ds._pt&&th(1,Ds)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Wn.to(e,si((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,Na.ease)),Vh(Na,e||{})},config:function(e){return Vh(ii,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Kn[o]&&!ri[o]&&Fa(t+" effect requires "+o+" plugin.")}),Ll[t]=function(o,l,c){return n(pi(o),si(l||{},s),c)},a&&(On.prototype[t]=function(o,l,c){return this.add(Ll[t](o,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):ct},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=zn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Zt&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=s;return Di(It,n,0),n},context:function(e,t){return e?new fp(e,t):Pt},matchMedia:function(e){return new b_(e)},matchMediaRefresh:function(){return qr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Uc()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:n_,wrapYoyo:i_,distribute:qd,random:Kd,snap:$d,normalize:t_,getUnit:vn,clamp:Jm,splitColor:ep,toArray:pi,selector:Dc,mapRange:Jd,pipe:jm,unitize:e_,interpolate:r_,shuffle:Yd},install:Ud,effects:Ll,ticker:Qn,updateRoot:On.updateRoot,plugins:Kn,globalTimeline:It,core:{PropTween:Gn,globals:Nd,Tween:Zt,Timeline:On,Animation:ka,getCache:Wr,_removeLinkedListItem:yl,reverting:function(){return hn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Vu=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ol[r]=Zt[r]});Qn.add(On.updateRoot);Ds=ol.to({},{duration:0});var A_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},w_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=A_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ol=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ln(s)&&(l={},kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}w_(o,s)}}}},Wn=ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)hn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ol("roundProps",Lc),Ol("modifiers"),Ol("snap",$d))||ol;Zt.version=On.version=Wn.version="3.15.0";Id=1;Wu()&&qs();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $h,gr,Fs,nh,kr,Kh,ih,R_=function(){return typeof window<"u"},ir={},Or=180/Math.PI,Os=Math.PI/180,us=Math.atan2,Zh=1e8,rh=/([A-Z])/g,C_=/(left|right|width|margin|padding|x)/i,P_=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},D_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},I_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},U_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},dp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},pp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},N_=function(e,t,n){return e.style[t]=n},F_=function(e,t,n){return e.style.setProperty(t,n)},O_=function(e,t,n){return e._gsap[t]=n},B_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},z_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},k_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",Vn=Ut+"Origin",G_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in ir&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ki(i,o)}):this.tfm[e]=a.x?a[e]:Ki(i,e),e===Vn&&(this.tfm.zOrigin=a.zOrigin);else return Ii.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},mp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},V_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ih(),(!s||!s.isStart)&&!n[Ut]&&(mp(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_p=function(e,t){var n={target:e,props:[],revert:V_,save:G_};return e._gsap||Wn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},gp,Fc=function(e,t){var n=gr.createElementNS?gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gr.createElement(e);return n&&n.style?n:gr.createElement(e)},ni=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,$s(t)||t,1)||""},Jh="O,Moz,ms,Ms,Webkit".split(","),$s=function(e,t,n){var i=t||kr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Jh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Jh[a]:"")+e},Oc=function(){R_()&&window.document&&($h=window,gr=$h.document,Fs=gr.documentElement,kr=Fc("div")||{style:{}},Fc("div"),Ut=$s(Ut),Vn=Ut+"Origin",kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gp=!!$s("perspective"),ih=Wn.core.reverting,nh=1)},Qh=function(e){var t=e.ownerSVGElement,n=Fc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Fs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Fs.removeChild(n),s},jh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xp=function(e){var t,n;try{t=e.getBBox()}catch{t=Qh(e),n=1}return t&&(t.width||t.height)||n||(t=Qh(e)),t&&!t.width&&!t.x&&!t.y?{x:+jh(e,["x","cx","x1"])||0,y:+jh(e,["y","cy","y1"])||0,width:0,height:0}:t},vp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xp(e))},br=function(e,t){if(t){var n=e.style,i;t in ir&&t!==Vn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rh,"-$1").toLowerCase())):n.removeAttribute(t)}},xr=function(e,t,n,i,s,a){var o=new Gn(e._pt,t,n,0,1,a?pp:dp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},ef={deg:1,rad:1,turn:1},H_={grid:1,flex:1},Ar=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=kr.style,l=C_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||ef[i]||ef[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&vp(e),(f||a==="%")&&(ir[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Gt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===gr||!_.appendChild)&&(_=gr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Qn.time&&!m.uncache)return Gt(s/m.width*d);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,g=e[u],S?e.style[t]=S:br(e,t)}else(f||a==="%")&&!H_[ni(_,"display")]&&(o.position=ni(e,"position")),_===e&&(o.position="static"),_.appendChild(kr),g=kr[u],_.removeChild(kr),o.position="absolute";return l&&f&&(m=Wr(_),m.time=Qn.time,m.width=_[u]),Gt(h?g*s/d:g&&s?d/g*s:0)},Ki=function(e,t,n,i){var s;return nh||Oc(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),ir[t]&&t!=="transform"?(s=Va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:cl(ni(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ll[t]&&ll[t](e,t,n)||ni(e,t)||Od(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ar(e,t,s,n)+n:s},W_=function(e,t,n,i){if(!n||n==="none"){var s=$s(t,e,1),a=s&&ni(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ni(e,"borderTopColor"))}var o=new Gn(this._pt,e.style,t,0,1,up),l=0,c=0,u,d,h,f,g,_,m,p,S,w,M,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ni(e,t)||i,_?e.style[t]=_:br(e,t)),u=[n,i],np(u),n=u[0],i=u[1],h=n.match(Ps)||[],y=i.match(Ps)||[],y.length){for(;d=Ps.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,M=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ns(f,m)+M),p=parseFloat(m),w=m.substr((p+"").length),l=Ps.lastIndex-w.length,w||(w=w||ii.units[t]||M,l===i.length&&(i+=w,o.e+=w)),M!==w&&(f=Ar(e,t,_,w)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?pp:dp;return Ld.test(i)&&(o.e=0),this._pt=o,o},tf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},X_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=tf[n]||n,t[1]=tf[i]||i,t.join(" ")},Y_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ir[o]&&(l=1,o=o==="transformOrigin"?Vn:Ut),br(n,o);l&&(br(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),a.uncache=1,mp(i)))}},ll={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Gn(e._pt,t,n,0,0,Y_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ga=[1,0,0,1,0,0],Mp={},Sp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},nf=function(e){var t=ni(e,Ut);return Sp(t)?Ga:t.substr(7).match(Dd).map(Gt)},sh=function(e,t){var n=e._gsap||Wr(e),i=e.style,s=nf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!e.offsetParent&&e!==Fs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Fs.appendChild(e)),s=nf(e),l?i.display=l:br(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Fs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bc=function(e,t,n,i,s,a){var o=e._gsap,l=s||sh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],w=t.split(" "),M=parseFloat(w[0])||0,y=parseFloat(w[1])||0,b,A,x,T;n?l!==Ga&&(A=f*m-g*_)&&(x=M*(m/A)+y*(-_/A)+(_*S-m*p)/A,T=M*(-g/A)+y*(f/A)-(f*S-g*p)/A,M=x,y=T):(b=xp(e),M=b.x+(~w[0].indexOf("%")?M/100*b.width:M),y=b.y+(~(w[1]||w[0]).indexOf("%")?y/100*b.height:y)),i||i!==!1&&o.smooth?(p=M-c,S=y-u,o.xOffset=d+(p*f+S*_)-p,o.yOffset=h+(p*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Vn]="0px 0px",a&&(xr(a,o,"xOrigin",c,M),xr(a,o,"yOrigin",u,y),xr(a,o,"xOffset",d,o.xOffset),xr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},Va=function(e,t){var n=e._gsap||new rp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ni(e,Vn)||"0",u,d,h,f,g,_,m,p,S,w,M,y,b,A,x,T,R,L,D,k,I,B,$,O,J,Y,C,j,Se,ye,ke,ze;return u=d=h=_=m=p=S=w=M=0,f=g=1,n.svg=!!(e.getCTM&&vp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),A=sh(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Bc(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,b=n.yOrigin||0,A!==Ga&&(L=A[0],D=A[1],k=A[2],I=A[3],u=B=A[4],d=$=A[5],A.length===6?(f=Math.sqrt(L*L+D*D),g=Math.sqrt(I*I+k*k),_=L||D?us(D,L)*Or:0,S=k||I?us(k,I)*Or+_:0,S&&(g*=Math.abs(Math.cos(S*Os))),n.svg&&(u-=y-(y*L+b*k),d-=b-(y*D+b*I))):(ze=A[6],ye=A[7],C=A[8],j=A[9],Se=A[10],ke=A[11],u=A[12],d=A[13],h=A[14],x=us(ze,Se),m=x*Or,x&&(T=Math.cos(-x),R=Math.sin(-x),O=B*T+C*R,J=$*T+j*R,Y=ze*T+Se*R,C=B*-R+C*T,j=$*-R+j*T,Se=ze*-R+Se*T,ke=ye*-R+ke*T,B=O,$=J,ze=Y),x=us(-k,Se),p=x*Or,x&&(T=Math.cos(-x),R=Math.sin(-x),O=L*T-C*R,J=D*T-j*R,Y=k*T-Se*R,ke=I*R+ke*T,L=O,D=J,k=Y),x=us(D,L),_=x*Or,x&&(T=Math.cos(x),R=Math.sin(x),O=L*T+D*R,J=B*T+$*R,D=D*T-L*R,$=$*T-B*R,L=O,B=J),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Gt(Math.sqrt(L*L+D*D+k*k)),g=Gt(Math.sqrt($*$+ze*ze)),x=us(B,$),S=Math.abs(x)>2e-4?x*Or:0,M=ke?1/(ke<0?-ke:ke):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Sp(ni(e,Ut)),O&&e.setAttribute("transform",O))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Gt(f),n.scaleY=Gt(g),n.rotation=Gt(_)+o,n.rotationX=Gt(m)+o,n.rotationY=Gt(p)+o,n.skewX=S+o,n.skewY=w+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vn]=cl(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?$_:gp?yp:q_,n.uncache=0,n},cl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bl=function(e,t,n){var i=vn(t);return Gt(parseFloat(t)+parseFloat(Ar(e,"x",n+"px",i)))+i},q_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yp(e,t)},Pr="0deg",ea="0px",Dr=") ",yp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,w=n.zOrigin,M="",y=p==="auto"&&e&&e!==1||p===!0;if(w&&(d!==Pr||u!==Pr)){var b=parseFloat(u)*Os,A=Math.sin(b),x=Math.cos(b),T;b=parseFloat(d)*Os,T=Math.cos(b),a=Bl(S,a,A*T*-w),o=Bl(S,o,-Math.sin(b)*-w),l=Bl(S,l,x*T*-w+w)}m!==ea&&(M+="perspective("+m+Dr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(y||a!==ea||o!==ea||l!==ea)&&(M+=l!==ea||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Dr),c!==Pr&&(M+="rotate("+c+Dr),u!==Pr&&(M+="rotateY("+u+Dr),d!==Pr&&(M+="rotateX("+d+Dr),(h!==Pr||f!==Pr)&&(M+="skew("+h+", "+f+Dr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Dr),S.style[Ut]=M||"translate(0, 0)"},$_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,w=parseFloat(a),M=parseFloat(o),y,b,A,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Os,c*=Os,y=Math.cos(l)*d,b=Math.sin(l)*d,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Os,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,b*=T)),y=Gt(y),b=Gt(b),A=Gt(A),x=Gt(x)):(y=d,x=h,b=A=0),(w&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(w=Ar(f,"x",a,"px"),M=Ar(f,"y",o,"px")),(g||_||m||p)&&(w=Gt(w+g-(g*y+_*A)+m),M=Gt(M+_-(g*b+_*x)+p)),(i||s)&&(T=f.getBBox(),w=Gt(w+i/100*T.width),M=Gt(M+s/100*T.height)),T="matrix("+y+","+b+","+A+","+x+","+w+","+M+")",f.setAttribute("transform",T),S&&(f.style[Ut]=T)},K_=function(e,t,n,i,s){var a=360,o=ln(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Or:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Zh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Zh)%a-~~(c/a)*a)),e._pt=h=new Gn(e._pt,t,n,i,c,D_),h.e=u,h.u="deg",e._props.push(n),h},rf=function(e,t){for(var n in t)e[n]=t[n];return e},Z_=function(e,t,n){var i=rf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=Va(n,1),br(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=Va(n,1),a[Ut]=c);for(l in ir)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=vn(c),g=vn(u),d=f!==g?Ar(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Gn(e._pt,o,l,d,h-d,Nc),e._pt.u=g||0,e._props.push(l));rf(o,i)};kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ll[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Ki(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Ep={name:"css",register:Oc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,_,m,p,S,w,M,y,b,A,x,T;nh||Oc(),this.styles=this.styles||_p(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Kn[_]&&sp(_,t,n,i,e,s)))){if(f=typeof u,g=ll[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ba(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",yr.lastIndex=0,yr.test(c)||(m=vn(c),p=vn(u),p?m!==p&&(c=Ar(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],ln(c)&&~c.indexOf("random(")&&(c=Ba(c)),vn(c+"")||c==="auto"||(c+=ii.units[_]||vn(Ki(e,_))||""),(c+"").charAt(1)==="="&&(c=Ki(e,_))):c=Ki(e,_),h=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),_ in Ii&&(_==="autoAlpha"&&(h===1&&Ki(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),xr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ii[_],~_.indexOf(",")&&(_=_.split(",")[0]))),w=_ in ir,w){if(this.styles.save(_),T=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ni(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=ni(e,"perspective"),R?e.style.perspective=R:br(e,"perspective")}d=parseFloat(u)}if(M||(y=e._gsap,y.renderTransform&&!t.parseTransform||Va(e,t.parseTransform),b=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new Gn(this._pt,o,Ut,0,1,y.renderTransform,y,0,-1),M.dep=1),_==="scale")this._pt=new Gn(this._pt,y,"scaleY",y.scaleY,(S?Ns(y.scaleY,S+d):d)-y.scaleY||0,Nc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Vn,0,o[Vn]),u=X_(u),y.svg?Bc(e,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&xr(this,y,"zOrigin",y.zOrigin,p),xr(this,o,_,cl(c),cl(u)));continue}else if(_==="svgOrigin"){Bc(e,u,1,b,0,this);continue}else if(_ in Mp){K_(this,y,_,h,S?Ns(h,S+u):u);continue}else if(_==="smoothOrigin"){xr(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){Z_(this,u,e);continue}}else _ in o||(_=$s(_)||_);if(w||(d||d===0)&&(h||h===0)&&!P_.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),p=vn(u)||(_ in ii.units?ii.units[_]:m),m!==p&&(h=Ar(e,_,c,p)),this._pt=new Gn(this._pt,w?y:o,_,h,(S?Ns(h,S+d):d)-h,!w&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?U_:Nc),this._pt.u=p||0,w&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=I_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=L_);else if(_ in o)W_.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,s);else if(_!=="parseTransform"){Yu(_,u);continue}w||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}A&&hp(this)},render:function(e,t){if(t.tween._time||!ih())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ki,aliases:Ii,getSetter:function(e,t,n){var i=Ii[t];return i&&i.indexOf(",")<0&&(t=i),t in ir&&t!==Vn&&(e._gsap.x||Ki(e,"x"))?n&&Kh===n?t==="scale"?B_:O_:(Kh=n||{})&&(t==="scale"?z_:k_):e.style&&!Hu(e.style[t])?N_:~t.indexOf("-")?F_:eh(e,t)},core:{_removeProperty:br,_getMatrix:sh}};Wn.utils.checkPrefix=$s;Wn.core.getStyleSaver=_p;(function(r,e,t,n){var i=kn(r+","+e+","+t,function(s){ir[s]=1});kn(e,function(s){ii.units[s]="deg",Mp[s]=1}),Ii[i[13]]=r+","+e,kn(n,function(s){var a=s.split(":");Ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ii.units[r]="px"});Wn.registerPlugin(Ep);var $t=Wn.registerPlugin(Ep)||Wn;$t.core.Tween;function J_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Q_(r,e,t){return e&&J_(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cn,Xo,jn,vr,Mr,Bs,Tp,Br,zs,bp,Ji,vi,Ap,wp=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},Rp=1,Ls=[],rt=[],Oi=[],Ta=Date.now,zc=function(e,t){return t},j_=function(){var e=zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Oi),rt=n,Oi=i,zc=function(a,o){return t[a](o)}},Er=function(e,t){return~Oi.indexOf(e)&&Oi[Oi.indexOf(e)+1][t]},ba=function(e){return!!~bp.indexOf(e)},Cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},io="scrollLeft",ro="scrollTop",kc=function(){return Ji&&Ji.isPressed||rt.cache++},ul=function(e,t){var n=function i(s){if(s||s===0){Rp&&(jn.history.scrollRestoration="manual");var a=Ji&&Ji.isPressed;s=i.v=Math.round(s)||(Ji&&Ji.iOS?1:0),e(s),i.cacheID=rt.cache,a&&zc("ss",s)}else(t||rt.cache!==i.cacheID||zc("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:io,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ul(function(r){return arguments.length?jn.scrollTo(r,jt.sc()):jn.pageXOffset||vr[io]||Mr[io]||Bs[io]||0})},jt={s:ro,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:ul(function(r){return arguments.length?jn.scrollTo(Un.sc(),r):jn.pageYOffset||vr[ro]||Mr[ro]||Bs[ro]||0})},Fn=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},eg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},wr=function(e,t){var n=t.s,i=t.sc;ba(e)&&(e=vr.scrollingElement||Mr);var s=rt.indexOf(e),a=i===jt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+a]||Cn(e,"scroll",kc);var o=rt[s+a],l=o||(rt[s+a]=ul(Er(e,n),!0)||(ba(e)?i:ul(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},Gc=function(e,t,n){var i=e,s=e,a=Ta(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ta();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,m=s,p=Ta();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},ta=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Cp=function(){zs=cn.core.globals().ScrollTrigger,zs&&zs.core&&j_()},Pp=function(e){return cn=e||wp(),!Xo&&cn&&typeof document<"u"&&document.body&&(jn=window,vr=document,Mr=vr.documentElement,Bs=vr.body,bp=[jn,vr,Mr,Bs],cn.utils.clamp,Ap=cn.core.context||function(){},Br="onpointerenter"in Bs?"pointer":"mouse",Tp=Ht.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=Ht.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Rp=0},500),Xo=1),zs||Cp(),Xo};Un.op=jt;rt.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xo||Pp(cn)||console.warn("Please gsap.registerPlugin(Observer)"),zs||Cp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,w=n.onPress,M=n.onRelease,y=n.onRight,b=n.onLeft,A=n.onUp,x=n.onDown,T=n.onChangeX,R=n.onChangeY,L=n.onChange,D=n.onToggleX,k=n.onToggleY,I=n.onHover,B=n.onHoverEnd,$=n.onMove,O=n.ignoreCheck,J=n.isNormalizer,Y=n.onGestureStart,C=n.onGestureEnd,j=n.onWheel,Se=n.onEnable,ye=n.onDisable,ke=n.onClick,ze=n.scrollSpeed,Ve=n.capture,K=n.allowClicks,ee=n.lockAxis,ge=n.onLockAxis;this.target=o=Fn(o)||Mr,this.vars=n,f&&(f=cn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,ze=ze||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(Bs).lineHeight)||22);var Oe,me,Ne,Be,Pe,We,Ke,V=this,tt=0,gt=0,Dt=n.passive||!u&&n.passive!==!1,Xe=wr(o,Un),ft=wr(o,jt),F=Xe(),Ct=ft(),He=~a.indexOf("touch")&&!~a.indexOf("pointer")&&vi[0]==="pointerdown",P=ba(o),v=o.ownerDocument||vr,z=[0,0,0],W=[0,0,0],Z=0,ce=function(){return Z=Ta()},ae=function(re,Ie){return(V.event=re)&&f&&eg(re.target,f)||Ie&&He&&re.pointerType!=="touch"||O&&O(re,Ie)},Q=function(){V._vx.reset(),V._vy.reset(),me.pause(),d&&d(V)},ne=function(){var re=V.deltaX=sf(z),Ie=V.deltaY=sf(W),se=Math.abs(re)>=i,Ue=Math.abs(Ie)>=i;L&&(se||Ue)&&L(V,re,Ie,z,W),se&&(y&&V.deltaX>0&&y(V),b&&V.deltaX<0&&b(V),T&&T(V),D&&V.deltaX<0!=tt<0&&D(V),tt=V.deltaX,z[0]=z[1]=z[2]=0),Ue&&(x&&V.deltaY>0&&x(V),A&&V.deltaY<0&&A(V),R&&R(V),k&&V.deltaY<0!=gt<0&&k(V),gt=V.deltaY,W[0]=W[1]=W[2]=0),(Be||Ne)&&($&&$(V),Ne&&(m&&Ne===1&&m(V),S&&S(V),Ne=0),Be=!1),We&&!(We=!1)&&ge&&ge(V),Pe&&(j(V),Pe=!1),Oe=0},fe=function(re,Ie,se){z[se]+=re,W[se]+=Ie,V._vx.update(re),V._vy.update(Ie),c?Oe||(Oe=requestAnimationFrame(ne)):ne()},Ae=function(re,Ie){ee&&!Ke&&(V.axis=Ke=Math.abs(re)>Math.abs(Ie)?"x":"y",We=!0),Ke!=="y"&&(z[2]+=re,V._vx.update(re,!0)),Ke!=="x"&&(W[2]+=Ie,V._vy.update(Ie,!0)),c?Oe||(Oe=requestAnimationFrame(ne)):ne()},de=function(re){if(!ae(re,1)){re=ta(re,u);var Ie=re.clientX,se=re.clientY,Ue=Ie-V.x,we=se-V.y,Ye=V.isDragging;V.x=Ie,V.y=se,(Ye||(Ue||we)&&(Math.abs(V.startX-Ie)>=s||Math.abs(V.startY-se)>=s))&&(Ne||(Ne=Ye?2:1),Ye||(V.isDragging=!0),Ae(Ue,we))}},he=V.onPress=function(oe){ae(oe,1)||oe&&oe.button||(V.axis=Ke=null,me.pause(),V.isPressed=!0,oe=ta(oe),tt=gt=0,V.startX=V.x=oe.clientX,V.startY=V.y=oe.clientY,V._vx.reset(),V._vy.reset(),Cn(J?o:v,vi[1],de,Dt,!0),V.deltaX=V.deltaY=0,w&&w(V))},le=V.onRelease=function(oe){if(!ae(oe,1)){Rn(J?o:v,vi[1],de,!0);var re=!isNaN(V.y-V.startY),Ie=V.isDragging,se=Ie&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ue=ta(oe);!se&&re&&(V._vx.reset(),V._vy.reset(),u&&K&&cn.delayedCall(.08,function(){if(Ta()-Z>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(v.createEvent){var we=v.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,jn,1,Ue.screenX,Ue.screenY,Ue.clientX,Ue.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(we)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Ie&&!J&&me.restart(!0),Ne&&ne(),p&&Ie&&p(V),M&&M(V,se)}},De=function(re){return re.touches&&re.touches.length>1&&(V.isGesturing=!0)&&Y(re,V.isDragging)},Fe=function(){return(V.isGesturing=!1)||C(V)},U=function(re){if(!ae(re)){var Ie=Xe(),se=ft();fe((Ie-F)*ze,(se-Ct)*ze,1),F=Ie,Ct=se,d&&me.restart(!0)}},ue=function(re){if(!ae(re)){re=ta(re,u),j&&(Pe=!0);var Ie=(re.deltaMode===1?l:re.deltaMode===2?jn.innerHeight:1)*g;fe(re.deltaX*Ie,re.deltaY*Ie,0),d&&!J&&me.restart(!0)}},te=function(re){if(!ae(re)){var Ie=re.clientX,se=re.clientY,Ue=Ie-V.x,we=se-V.y;V.x=Ie,V.y=se,Be=!0,d&&me.restart(!0),(Ue||we)&&Ae(Ue,we)}},pe=function(re){V.event=re,I(V)},xe=function(re){V.event=re,B(V)},ie=function(re){return ae(re)||ta(re,u)&&ke(V)};me=V._dc=cn.delayedCall(h||.25,Q).pause(),V.deltaX=V.deltaY=0,V._vx=Gc(0,50,!0),V._vy=Gc(0,50,!0),V.scrollX=Xe,V.scrollY=ft,V.isDragging=V.isGesturing=V.isPressed=!1,Ap(this),V.enable=function(oe){return V.isEnabled||(Cn(P?v:o,"scroll",kc),a.indexOf("scroll")>=0&&Cn(P?v:o,"scroll",U,Dt,Ve),a.indexOf("wheel")>=0&&Cn(o,"wheel",ue,Dt,Ve),(a.indexOf("touch")>=0&&Tp||a.indexOf("pointer")>=0)&&(Cn(o,vi[0],he,Dt,Ve),Cn(v,vi[2],le),Cn(v,vi[3],le),K&&Cn(o,"click",ce,!0,!0),ke&&Cn(o,"click",ie),Y&&Cn(v,"gesturestart",De),C&&Cn(v,"gestureend",Fe),I&&Cn(o,Br+"enter",pe),B&&Cn(o,Br+"leave",xe),$&&Cn(o,Br+"move",te)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Be=Ne=!1,V._vx.reset(),V._vy.reset(),F=Xe(),Ct=ft(),oe&&oe.type&&he(oe),Se&&Se(V)),V},V.disable=function(){V.isEnabled&&(Ls.filter(function(oe){return oe!==V&&ba(oe.target)}).length||Rn(P?v:o,"scroll",kc),V.isPressed&&(V._vx.reset(),V._vy.reset(),Rn(J?o:v,vi[1],de,!0)),Rn(P?v:o,"scroll",U,Ve),Rn(o,"wheel",ue,Ve),Rn(o,vi[0],he,Ve),Rn(v,vi[2],le),Rn(v,vi[3],le),Rn(o,"click",ce,!0),Rn(o,"click",ie),Rn(v,"gesturestart",De),Rn(v,"gestureend",Fe),Rn(o,Br+"enter",pe),Rn(o,Br+"leave",xe),Rn(o,Br+"move",te),V.isEnabled=V.isPressed=V.isDragging=!1,ye&&ye(V))},V.kill=V.revert=function(){V.disable();var oe=Ls.indexOf(V);oe>=0&&Ls.splice(oe,1),Ji===V&&(Ji=0)},Ls.push(V),J&&ba(o)&&(Ji=V),V.enable(_)},Q_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.15.0";Ht.create=function(r){return new Ht(r)};Ht.register=Pp;Ht.getAll=function(){return Ls.slice()};Ht.getById=function(r){return Ls.filter(function(e){return e.vars.id===r})[0]};wp()&&cn.registerPlugin(Ht);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var be,ws,it,mt,Zn,pt,ah,hl,Ha,Aa,pa,so,gn,bl,Vc,Ln,af,of,Rs,Dp,zl,Lp,Dn,Hc,Ip,Up,dr,Wc,oh,ks,lh,wa,Xc,kl,ao=1,xn=Date.now,Gl=xn(),mi=0,ma=0,lf=function(e,t,n){var i=$n(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},cf=function(e,t){return t&&(!$n(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},tg=function r(){return ma&&requestAnimationFrame(r)},uf=function(){return bl=1},hf=function(){return bl=0},Ci=function(e){return e},_a=function(e){return Math.round(e*1e5)/1e5||0},Np=function(){return typeof window<"u"},Fp=function(){return be||Np()&&(be=window.gsap)&&be.registerPlugin&&be},Jr=function(e){return!!~ah.indexOf(e)},Op=function(e){return(e==="Height"?lh:it["inner"+e])||Zn["client"+e]||pt["client"+e]},Bp=function(e){return Er(e,"getBoundingClientRect")||(Jr(e)?function(){return Zo.width=it.innerWidth,Zo.height=lh,Zo}:function(){return Zi(e)})},ng=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Er(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Op(s):e["client"+s])||0}},ig=function(e,t){return!t||~Oi.indexOf(e)?Bp(e):function(){return Zo}},Ui=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Er(e,n))?a()-Bp(e)()[s]:Jr(e)?(Zn[n]||pt[n])-Op(i):e[n]-e["offset"+i])},oo=function(e,t){for(var n=0;n<Rs.length;n+=3)(!t||~t.indexOf(Rs[n+1]))&&e(Rs[n],Rs[n+1],Rs[n+2])},$n=function(e){return typeof e=="string"},Mn=function(e){return typeof e=="function"},ga=function(e){return typeof e=="number"},zr=function(e){return typeof e=="object"},na=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},hs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},fs=Math.abs,zp="left",kp="top",ch="right",uh="bottom",$r="width",Kr="height",Ra="Right",Ca="Left",Pa="Top",Da="Bottom",Kt="padding",hi="margin",Ks="Width",hh="Height",Qt="px",fi=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},rg=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ff=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zi=function(e,t){var n=t&&fi(e)[Vc]!=="matrix(1, 0, 0, 1, 0, 0)"&&be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},fl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Gp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},sg=function(e){return function(t){return be.utils.snap(Gp(e),t)}},fh=function(e){var t=be.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},ag=function(e){return function(t,n){return fh(Gp(e))(t,n.direction)}},lo=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},co=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},df={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},uo={toggleActions:"play",anticipatePin:0},dl={top:0,left:0,center:.5,bottom:1,right:1},Yo=function(e,t){if($n(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in dl?dl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ho=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=mt.createElement("div"),_=Jr(n)||Er(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,w=S?c:u,M="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===jt?ch:uh)+":"+(a+parseFloat(h))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],qo(g,0,i,S),g},qo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ks]=1,s["border"+o+Ks]=0,s[n.p]=t+"px",be.set(e,s)},et=[],Yc={},Wa,pf=function(){return xn()-mi>34&&(Wa||(Wa=requestAnimationFrame(ji)))},ds=function(){(!Dn||!Dn.isPressed||Dn.startX>pt.clientWidth)&&(rt.cache++,Dn?Wa||(Wa=requestAnimationFrame(ji)):ji(),mi||jr("scrollStart"),mi=xn())},Vl=function(){Up=it.innerWidth,Ip=it.innerHeight},xa=function(e){rt.cache++,(e===!0||!gn&&!Lp&&!mt.fullscreenElement&&!mt.webkitFullscreenElement&&(!Hc||Up!==it.innerWidth||Math.abs(it.innerHeight-Ip)>it.innerHeight*.25))&&hl.restart(!0)},Qr={},og=[],Vp=function r(){return an(Qe,"scrollEnd",r)||Gr(!0)},jr=function(e){return Qr[e]&&Qr[e].map(function(t){return t()})||og},qn=[],Hp=function(e){for(var t=0;t<qn.length;t+=5)(!e||qn[t+4]&&qn[t+4].query===e)&&(qn[t].style.cssText=qn[t+1],qn[t].getBBox&&qn[t].setAttribute("transform",qn[t+2]||""),qn[t+3].uncache=1)},Wp=function(){return rt.forEach(function(e){return Mn(e)&&++e.cacheID&&(e.rec=e())})},dh=function(e,t){var n;for(Ln=0;Ln<et.length;Ln++)n=et[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));wa=!0,t&&Hp(t),t||jr("revert")},Xp=function(e,t){rt.cache++,(t||!In)&&rt.forEach(function(n){return Mn(n)&&n.cacheID++&&(n.rec=0)}),$n(e)&&(it.history.scrollRestoration=oh=e)},In,Zr=0,mf,lg=function(){if(mf!==Zr){var e=mf=Zr;requestAnimationFrame(function(){return e===Zr&&Gr(!0)})}},Yp=function(){pt.appendChild(ks),lh=!Dn&&ks.offsetHeight||it.innerHeight,pt.removeChild(ks)},_f=function(e){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Gr=function(e,t){if(Zn=mt.documentElement,pt=mt.body,ah=[it,mt,Zn,pt],mi&&!e&&!wa){on(Qe,"scrollEnd",Vp);return}Yp(),In=Qe.isRefreshing=!0,wa||Wp();var n=jr("refreshInit");Dp&&Qe.sort(),t||dh(),rt.forEach(function(i){Mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),wa=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Xc=1,_f(!0),et.forEach(function(i){var s=Ui(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),_f(!1),Xc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){Mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Xp(oh,1),hl.pause(),Zr++,In=2,ji(2),et.forEach(function(i){return Mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=Qe.isRefreshing=!1,jr("refresh")},qc=0,$o=1,La,ji=function(e){if(e===2||!In&&!wa){Qe.isUpdating=!0,La&&La.update(0);var t=et.length,n=xn(),i=n-Gl>=50,s=t&&et[0].scroll();if($o=qc>s?-1:1,In||(qc=s),i&&(mi&&!bl&&n-mi>200&&(mi=0,jr("scrollEnd")),pa=Gl,Gl=n),$o<0){for(Ln=t;Ln-- >0;)et[Ln]&&et[Ln].update(0,i);$o=1}else for(Ln=0;Ln<t;Ln++)et[Ln]&&et[Ln].update(0,i);Qe.isUpdating=!1}Wa=0},$c=[zp,kp,uh,ch,hi+Da,hi+Ra,hi+Pa,hi+Ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ko=$c.concat([$r,Kr,"boxSizing","max"+Ks,"max"+hh,"position",hi,Kt,Kt+Pa,Kt+Ra,Kt+Da,Kt+Ca]),cg=function(e,t,n){Gs(n);var i=e._gsap;if(i.spacerIsNative)Gs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=$c.length,a=t.style,o=e.style,l;s--;)l=$c[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[uh]=o[ch]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[$r]=fl(e,Un)+Qt,a[Kr]=fl(e,jt)+Qt,a[Kt]=o[hi]=o[kp]=o[zp]="0",Gs(i),o[$r]=o["max"+Ks]=n[$r],o[Kr]=o["max"+hh]=n[Kr],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ug=/([A-Z])/g,Gs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||be.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(ug,"-$1").toLowerCase())}},fo=function(e){for(var t=Ko.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ko[s],n[Ko[s]]);return i.t=e,i},hg=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Zo={left:0,top:0},gf=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){Mn(e)&&(e=e(l)),$n(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Yo("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,S;if(f&&f.seek(0),isNaN(e)||(e=+e),ga(e))f&&(e=be.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&qo(o,n,i,!0);else{Mn(t)&&(t=t(l));var w=(e||"0").split(" "),M,y,b,A;S=Fn(t,l)||pt,M=Zi(S)||{},(!M||!M.left&&!M.top)&&fi(S).display==="none"&&(A=S.style.display,S.style.display="block",M=Zi(S),A?S.style.display=A:S.style.removeProperty("display")),y=Yo(w[0],M[i.d]),b=Yo(w[1]||"0",n),e=M[i.p]-c[i.p]-u+y+s-b,o&&qo(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,T=a._isStart;m="scroll"+i.d2,qo(a,x,i,T&&x>20||!T&&(d?Math.max(pt[m],Zn[m]):a.parentNode[m])<=x+1),d&&(c=Zi(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Qt))}return f&&S&&(m=Zi(S),f.seek(h),p=Zi(S),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*h),f&&f.seek(_),f?e:Math.round(e)},fg=/(webkit|moz|length|cssText|inset)/i,xf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===pt){e._stOrig=s.cssText,o=fi(e);for(a in o)!+a&&!fg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;be.core.getCache(e).uncache=1,t.appendChild(e)}},qp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},po=function(e,t,n){var i={};i[t.p]="+="+n,be.set(e,i)},vf=function(e,t){var n=wr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=qp(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,a.tween&&ji()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=be.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(e,"wheel",n.wheelHandler),Qe.isTouch&&on(e,"touchmove",n.wheelHandler),s},Qe=(function(){function r(t,n){ws||r.register(be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Wc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ma){this.update=this.refresh=this.kill=Ci;return}n=ff($n(n)||ga(n)||n.nodeType?{trigger:n}:n,uo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,w=s.once,M=s.snap,y=s.pinReparent,b=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:jt,L=!d&&d!==0,D=Fn(n.scroller||it),k=be.core.getCache(D),I=Jr(D),B=("pinType"in n?n.pinType:Er(D,"pinType")||I&&"fixed")==="fixed",$=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=L&&n.toggleActions.split(" "),J="markers"in n?n.markers:uo.markers,Y=I?0:parseFloat(fi(D)["border"+R.p2+Ks])||0,C=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(C)},Se=ng(D,I,R),ye=ig(D,I),ke=0,ze=0,Ve=0,K=wr(D,R),ee,ge,Oe,me,Ne,Be,Pe,We,Ke,V,tt,gt,Dt,Xe,ft,F,Ct,He,P,v,z,W,Z,ce,ae,Q,ne,fe,Ae,de,he,le,De,Fe,U,ue,te,pe,xe;if(C._startClamp=C._endClamp=!1,C._dir=R,m*=45,C.scroller=D,C.scroll=A?A.time.bind(A):K,me=K(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Dp=1,n.refreshPriority===-9999&&(La=C)),k.tweenScroll=k.tweenScroll||{top:vf(D,jt),left:vf(D,Un)},C.tweenTo=ee=k.tweenScroll[R.p],C.scrubDuration=function(se){De=ga(se)&&se,De?le?le.duration(se):le=be.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:De,paused:!0,onComplete:function(){return p&&p(C)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(d),de=0,l||(l=i.vars.id)),M&&((!zr(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in pt.style&&be.set(I?[pt,Zn]:D,{scrollBehavior:"auto"}),rt.forEach(function(se){return Mn(se)&&se.target===(I?mt.scrollingElement||Zn:D)&&(se.smooth=!1)}),Oe=Mn(M.snapTo)?M.snapTo:M.snapTo==="labels"?sg(i):M.snapTo==="labelsDirectional"?ag(i):M.directional!==!1?function(se,Ue){return fh(M.snapTo)(se,xn()-ze<500?0:Ue.direction)}:be.utils.snap(M.snapTo),Fe=M.duration||{min:.1,max:2},Fe=zr(Fe)?Aa(Fe.min,Fe.max):Aa(Fe,Fe),U=be.delayedCall(M.delay||De/2||.1,function(){var se=K(),Ue=xn()-ze<500,we=ee.tween;if((Ue||Math.abs(C.getVelocity())<10)&&!we&&!bl&&ke!==se){var Ye=(se-Be)/Xe,Wt=i&&!L?i.totalProgress():Ye,nt=Ue?0:(Wt-he)/(xn()-pa)*1e3||0,bt=be.utils.clamp(-Ye,1-Ye,fs(nt/2)*nt/.185),nn=Ye+(M.inertia===!1?0:bt),At,vt,ot=M,bn=ot.onStart,Et=ot.onInterrupt,dn=ot.onComplete;if(At=Oe(nn,C),ga(At)||(At=nn),vt=Math.max(0,Math.round(Be+At*Xe)),se<=Pe&&se>=Be&&vt!==se){if(we&&!we._initted&&we.data<=fs(vt-se))return;M.inertia===!1&&(bt=At-Ye),ee(vt,{duration:Fe(fs(Math.max(fs(nn-Wt),fs(At-Wt))*.185/nt/.05||0)),ease:M.ease||"power3",data:fs(vt-se),onInterrupt:function(){return U.restart(!0)&&Et&&hs(C,Et)},onComplete:function(){C.update(),ke=K(),i&&!L&&(le?le.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),de=he=i&&!L?i.totalProgress():C.progress,S&&S(C),dn&&hs(C,dn)}},se,bt*Xe,vt-se-bt*Xe),bn&&hs(C,bn,ee.tween)}}else C.isActive&&ke!==se&&U.restart(!0)}).pause()),l&&(Yc[l]=C),h=C.trigger=Fn(h||f!==!0&&f),xe=h&&h._gsap&&h._gsap.stRevert,xe&&(xe=xe(C)),f=f===!0?h:Fn(f),$n(o)&&(o={targets:h,className:o}),f&&(g===!1||g===hi||(g=!g&&f.parentNode&&f.parentNode.style&&fi(f.parentNode).display==="flex"?!1:Kt),C.pin=f,ge=be.core.getCache(f),ge.spacer?ft=ge.pinState:(b&&(b=Fn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),ge.spacerIsNative=!!b,b&&(ge.spacerState=fo(b))),ge.spacer=He=b||mt.createElement("div"),He.classList.add("pin-spacer"),l&&He.classList.add("pin-spacer-"+l),ge.pinState=ft=fo(f)),n.force3D!==!1&&be.set(f,{force3D:!0}),C.spacer=He=ge.spacer,Ae=fi(f),ce=Ae[g+R.os2],v=be.getProperty(f),z=be.quickSetter(f,R.a,Qt),Hl(f,He,Ae),Ct=fo(f)),J){gt=zr(J)?ff(J,df):df,V=ho("scroller-start",l,D,R,gt,0),tt=ho("scroller-end",l,D,R,gt,0,V),P=V["offset"+R.op.d2];var ie=Fn(Er(D,"content")||D);We=this.markerStart=ho("start",l,ie,R,gt,P,0,A),Ke=this.markerEnd=ho("end",l,ie,R,gt,P,0,A),A&&(pe=be.quickSetter([We,Ke],R.a,Qt)),!B&&!(Oi.length&&Er(D,"fixedMarkers")===!0)&&(rg(I?pt:D),be.set([V,tt],{force3D:!0}),Q=be.quickSetter(V,R.a,Qt),fe=be.quickSetter(tt,R.a,Qt))}if(A){var oe=A.vars.onUpdate,re=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){C.update(0,0,1),oe&&oe.apply(A,re||[])})}if(C.previous=function(){return et[et.indexOf(C)-1]},C.next=function(){return et[et.indexOf(C)+1]},C.revert=function(se,Ue){if(!Ue)return C.kill(!0);var we=se!==!1||!C.enabled,Ye=gn;we!==C.isReverted&&(we&&(ue=Math.max(K(),C.scroll.rec||0),Ve=C.progress,te=i&&i.progress()),We&&[We,Ke,V,tt].forEach(function(Wt){return Wt.style.display=we?"none":"block"}),we&&(gn=C,C.update(we)),f&&(!y||!C.isActive)&&(we?cg(f,He,ft):Hl(f,He,fi(f),ae)),we||C.update(we),gn=Ye,C.isReverted=we)},C.refresh=function(se,Ue,we,Ye){if(!((gn||!C.enabled)&&!Ue)){if(f&&se&&mi){on(r,"scrollEnd",Vp);return}!In&&j&&j(C),gn=C,ee.tween&&!we&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(_e){return _e.vars.immediateRender&&_e.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Wt=Se(),nt=ye(),bt=A?A.duration():Ui(D,R),nn=Xe<=.01||!Xe,At=0,vt=Ye||0,ot=zr(we)?we.end:n.end,bn=n.endTrigger||h,Et=zr(we)?we.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),dn=C.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,C),An=h&&Math.max(0,et.indexOf(C))||0,Xt=An,Ft,Jt,Ti,as,rn,zt,ai,os,E,N,q,H,X;for(J&&zr(we)&&(H=be.getProperty(V,R.p),X=be.getProperty(tt,R.p));Xt-- >0;)zt=et[Xt],zt.end||zt.refresh(0,1)||(gn=C),ai=zt.pin,ai&&(ai===h||ai===f||ai===dn)&&!zt.isReverted&&(N||(N=[]),N.unshift(zt),zt.revert(!0,!0)),zt!==et[Xt]&&(An--,Xt--);for(Mn(Et)&&(Et=Et(C)),Et=lf(Et,"start",C),Be=gf(Et,h,Wt,R,K(),We,V,C,nt,Y,B,bt,A,C._startClamp&&"_startClamp")||(f?-.001:0),Mn(ot)&&(ot=ot(C)),$n(ot)&&!ot.indexOf("+=")&&(~ot.indexOf(" ")?ot=($n(Et)?Et.split(" ")[0]:"")+ot:(At=Yo(ot.substr(2),Wt),ot=$n(Et)?Et:(A?be.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Be):Be)+At,bn=h)),ot=lf(ot,"end",C),Pe=Math.max(Be,gf(ot||(bn?"100% 0":bt),bn,Wt,R,K()+At,Ke,tt,C,nt,Y,B,bt,A,C._endClamp&&"_endClamp"))||-.001,At=0,Xt=An;Xt--;)zt=et[Xt]||{},ai=zt.pin,ai&&zt.start-zt._pinPush<=Be&&!A&&zt.end>0&&(Ft=zt.end-(C._startClamp?Math.max(0,zt.start):zt.start),(ai===h&&zt.start-zt._pinPush<Be||ai===dn)&&isNaN(Et)&&(At+=Ft*(1-zt.progress)),ai===f&&(vt+=Ft));if(Be+=At,Pe+=At,C._startClamp&&(C._startClamp+=At),C._endClamp&&!In&&(C._endClamp=Pe||-.001,Pe=Math.min(Pe,Ui(D,R))),Xe=Pe-Be||(Be-=.01)&&.001,nn&&(Ve=be.utils.clamp(0,1,be.utils.normalize(Be,Pe,ue))),C._pinPush=vt,We&&At&&(Ft={},Ft[R.a]="+="+At,dn&&(Ft[R.p]="-="+K()),be.set([We,Ke],Ft)),f&&!(Xc&&C.end>=Ui(D,R)))Ft=fi(f),as=R===jt,Ti=K(),W=parseFloat(v(R.a))+vt,!bt&&Pe>1&&(q=(I?mt.scrollingElement||Zn:D).style,q={style:q,value:q["overflow"+R.a.toUpperCase()]},I&&fi(pt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(q.style["overflow"+R.a.toUpperCase()]="scroll")),Hl(f,He,Ft),Ct=fo(f),Jt=Zi(f,!0),os=B&&wr(D,as?Un:jt)(),g?(ae=[g+R.os2,Xe+vt+Qt],ae.t=He,Xt=g===Kt?fl(f,R)+Xe+vt:0,Xt&&(ae.push(R.d,Xt+Qt),He.style.flexBasis!=="auto"&&(He.style.flexBasis=Xt+Qt)),Gs(ae),dn&&et.forEach(function(_e){_e.pin===dn&&_e.vars.pinSpacing!==!1&&(_e._subPinOffset=!0)}),B&&K(ue)):(Xt=fl(f,R),Xt&&He.style.flexBasis!=="auto"&&(He.style.flexBasis=Xt+Qt)),B&&(rn={top:Jt.top+(as?Ti-Be:os)+Qt,left:Jt.left+(as?os:Ti-Be)+Qt,boxSizing:"border-box",position:"fixed"},rn[$r]=rn["max"+Ks]=Math.ceil(Jt.width)+Qt,rn[Kr]=rn["max"+hh]=Math.ceil(Jt.height)+Qt,rn[hi]=rn[hi+Pa]=rn[hi+Ra]=rn[hi+Da]=rn[hi+Ca]="0",rn[Kt]=Ft[Kt],rn[Kt+Pa]=Ft[Kt+Pa],rn[Kt+Ra]=Ft[Kt+Ra],rn[Kt+Da]=Ft[Kt+Da],rn[Kt+Ca]=Ft[Kt+Ca],F=hg(ft,rn,y),In&&K(0)),i?(E=i._initted,zl(1),i.render(i.duration(),!0,!0),Z=v(R.a)-W+Xe+vt,ne=Math.abs(Xe-Z)>1,B&&ne&&F.splice(F.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zl(0)):Z=Xe,q&&(q.value?q.style["overflow"+R.a.toUpperCase()]=q.value:q.style.removeProperty("overflow-"+R.a));else if(h&&K()&&!A)for(Jt=h.parentNode;Jt&&Jt!==pt;)Jt._pinOffset&&(Be-=Jt._pinOffset,Pe-=Jt._pinOffset),Jt=Jt.parentNode;N&&N.forEach(function(_e){return _e.revert(!1,!0)}),C.start=Be,C.end=Pe,me=Ne=In?ue:K(),!A&&!In&&(me<ue&&K(ue),C.scroll.rec=0),C.revert(!1,!0),ze=xn(),U&&(ke=-1,U.restart(!0)),gn=0,i&&L&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(nn||Ve!==C.progress||A||_||i&&!i._initted)&&(i&&!L&&(i._initted||Ve||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Be<-.001&&!Ve?be.utils.normalize(Be,Pe,0):Ve,!0),C.progress=nn||(me-Be)/Xe===Ve?0:Ve),f&&g&&(He._pinOffset=Math.round(C.progress*Z)),le&&le.invalidate(),isNaN(H)||(H-=be.getProperty(V,R.p),X-=be.getProperty(tt,R.p),po(V,R,H),po(We,R,H-(Ye||0)),po(tt,R,X),po(Ke,R,X-(Ye||0))),nn&&!In&&C.update(),u&&!In&&!Dt&&(Dt=!0,u(C),Dt=!1)}},C.getVelocity=function(){return(K()-Ne)/(xn()-pa)*1e3||0},C.endAnimation=function(){na(C.callbackAnimation),i&&(le?le.progress(1):i.paused()?L||na(i,C.direction<0,1):na(i,i.reversed()))},C.labelToScroll=function(se){return i&&i.labels&&(Be||C.refresh()||Be)+i.labels[se]/i.duration()*Xe||0},C.getTrailing=function(se){var Ue=et.indexOf(C),we=C.direction>0?et.slice(0,Ue).reverse():et.slice(Ue+1);return($n(se)?we.filter(function(Ye){return Ye.vars.preventOverlaps===se}):we).filter(function(Ye){return C.direction>0?Ye.end<=Be:Ye.start>=Pe})},C.update=function(se,Ue,we){if(!(A&&!we&&!se)){var Ye=In===!0?ue:C.scroll(),Wt=se?0:(Ye-Be)/Xe,nt=Wt<0?0:Wt>1?1:Wt||0,bt=C.progress,nn,At,vt,ot,bn,Et,dn,An;if(Ue&&(Ne=me,me=A?K():Ye,M&&(he=de,de=i&&!L?i.totalProgress():nt)),m&&f&&!gn&&!ao&&mi&&(!nt&&Be<Ye+(Ye-Ne)/(xn()-pa)*m?nt=1e-4:nt===1&&Pe>Ye+(Ye-Ne)/(xn()-pa)*m&&(nt=.9999)),nt!==bt&&C.enabled){if(nn=C.isActive=!!nt&&nt<1,At=!!bt&&bt<1,Et=nn!==At,bn=Et||!!nt!=!!bt,C.direction=nt>bt?1:-1,C.progress=nt,bn&&!gn&&(vt=nt&&!bt?0:nt===1?1:bt===1?2:3,L&&(ot=!Et&&O[vt+1]!=="none"&&O[vt+1]||O[vt],An=i&&(ot==="complete"||ot==="reset"||ot in i))),T&&(Et||An)&&(An||d||!i)&&(Mn(T)?T(C):C.getTrailing(T).forEach(function(Ti){return Ti.endAnimation()})),L||(le&&!gn&&!ao?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",nt,i._tTime/i._tDur):(le.vars.totalProgress=nt,le.invalidate().restart())):i&&i.totalProgress(nt,!!(gn&&(ze||se)))),f){if(se&&g&&(He.style[g+R.os2]=ce),!B)z(_a(W+Z*nt));else if(bn){if(dn=!se&&nt>bt&&Pe+1>Ye&&Ye+1>=Ui(D,R),y)if(!se&&(nn||dn)){var Xt=Zi(f,!0),Ft=Ye-Be;xf(f,pt,Xt.top+(R===jt?Ft:0)+Qt,Xt.left+(R===jt?0:Ft)+Qt)}else xf(f,He);Gs(nn||dn?F:Ct),ne&&nt<1&&nn||z(W+(nt===1&&!dn?Z:0))}}M&&!ee.tween&&!gn&&!ao&&U.restart(!0),o&&(Et||w&&nt&&(nt<1||!kl))&&Ha(o.targets).forEach(function(Ti){return Ti.classList[nn||w?"add":"remove"](o.className)}),a&&!L&&!se&&a(C),bn&&!gn?(L&&(An&&(ot==="complete"?i.pause().totalProgress(1):ot==="reset"?i.restart(!0).pause():ot==="restart"?i.restart(!0):i[ot]()),a&&a(C)),(Et||!kl)&&(c&&Et&&hs(C,c),$[vt]&&hs(C,$[vt]),w&&(nt===1?C.kill(!1,1):$[vt]=0),Et||(vt=nt===1?1:3,$[vt]&&hs(C,$[vt]))),x&&!nn&&Math.abs(C.getVelocity())>(ga(x)?x:2500)&&(na(C.callbackAnimation),le?le.progress(1):na(i,ot==="reverse"?1:!nt,1))):L&&a&&!gn&&a(C)}if(fe){var Jt=A?Ye/A.duration()*(A._caScrollDist||0):Ye;Q(Jt+(V._isFlipped?1:0)),fe(Jt)}pe&&pe(-Ye/A.duration()*(A._caScrollDist||0))}},C.enable=function(se,Ue){C.enabled||(C.enabled=!0,on(D,"resize",xa),I||on(D,"scroll",ds),j&&on(r,"refreshInit",j),se!==!1&&(C.progress=Ve=0,me=Ne=ke=K()),Ue!==!1&&C.refresh())},C.getTween=function(se){return se&&ee?ee.tween:le},C.setPositions=function(se,Ue,we,Ye){if(A){var Wt=A.scrollTrigger,nt=A.duration(),bt=Wt.end-Wt.start;se=Wt.start+bt*se/nt,Ue=Wt.start+bt*Ue/nt}C.refresh(!1,!1,{start:cf(se,we&&!!C._startClamp),end:cf(Ue,we&&!!C._endClamp)},Ye),C.update()},C.adjustPinSpacing=function(se){if(ae&&se){var Ue=ae.indexOf(R.d)+1;ae[Ue]=parseFloat(ae[Ue])+se+Qt,ae[1]=parseFloat(ae[1])+se+Qt,Gs(ae)}},C.disable=function(se,Ue){if(se!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Ue||le&&le.pause(),ue=0,ge&&(ge.uncache=1),j&&an(r,"refreshInit",j),U&&(U.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!I)){for(var we=et.length;we--;)if(et[we].scroller===D&&et[we]!==C)return;an(D,"resize",xa),I||an(D,"scroll",ds)}},C.kill=function(se,Ue){C.disable(se,Ue),le&&!Ue&&le.kill(),l&&delete Yc[l];var we=et.indexOf(C);we>=0&&et.splice(we,1),we===Ln&&$o>0&&Ln--,we=0,et.forEach(function(Ye){return Ye.scroller===C.scroller&&(we=1)}),we||In||(C.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ue||i.kill()),We&&[We,Ke,V,tt].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),La===C&&(La=0),f&&(ge&&(ge.uncache=1),we=0,et.forEach(function(Ye){return Ye.pin===f&&we++}),we||(ge.spacer=0)),n.onKill&&n.onKill(C)},et.push(C),C.enable(!1,!1),xe&&xe(C),i&&i.add&&!Xe){var Ie=C.update;C.update=function(){C.update=Ie,rt.cache++,Be||Pe||C.refresh()},be.delayedCall(.01,C.update),Xe=.01,Be=Pe=0}else C.refresh();f&&lg()},r.register=function(n){return ws||(be=n||Fp(),Np()&&window.document&&r.enable(),ws=ma),ws},r.defaults=function(n){if(n)for(var i in n)uo[i]=n[i];return uo},r.disable=function(n,i){ma=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),an(it,"wheel",ds),an(mt,"scroll",ds),clearInterval(so),an(mt,"touchcancel",Ci),an(pt,"touchstart",Ci),lo(an,mt,"pointerdown,touchstart,mousedown",uf),lo(an,mt,"pointerup,touchend,mouseup",hf),hl.kill(),oo(an);for(var s=0;s<rt.length;s+=3)co(an,rt[s],rt[s+1]),co(an,rt[s],rt[s+2])},r.enable=function(){if(it=window,mt=document,Zn=mt.documentElement,pt=mt.body,be){if(Ha=be.utils.toArray,Aa=be.utils.clamp,Wc=be.core.context||Ci,zl=be.core.suppressOverwrites||Ci,oh=it.history.scrollRestoration||"auto",qc=it.pageYOffset||0,be.core.globals("ScrollTrigger",r),pt){ma=1,ks=document.createElement("div"),ks.style.height="100vh",ks.style.position="absolute",Yp(),tg(),Ht.register(be),r.isTouch=Ht.isTouch,dr=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hc=Ht.isTouch===1,on(it,"wheel",ds),ah=[it,mt,Zn,pt],be.matchMedia?(r.matchMedia=function(u){var d=be.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},be.addEventListener("matchMediaInit",function(){Wp(),dh()}),be.addEventListener("matchMediaRevert",function(){return Hp()}),be.addEventListener("matchMedia",function(){Gr(0,1),jr("matchMedia")}),be.matchMedia().add("(orientation: portrait)",function(){return Vl(),Vl})):console.warn("Requires GSAP 3.11.0 or later"),Vl(),on(mt,"scroll",ds);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,a=be.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Zi(pt),jt.m=Math.round(o.top+jt.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),so=setInterval(pf,250),be.delayedCall(.5,function(){return ao=0}),on(mt,"touchcancel",Ci),on(pt,"touchstart",Ci),lo(on,mt,"pointerdown,touchstart,mousedown",uf),lo(on,mt,"pointerup,touchend,mouseup",hf),Vc=be.utils.checkPrefix("transform"),Ko.push(Vc),ws=xn(),hl=be.delayedCall(.2,Gr).pause(),Rs=[mt,"visibilitychange",function(){var u=it.innerWidth,d=it.innerHeight;mt.hidden?(af=u,of=d):(af!==u||of!==d)&&xa()},mt,"DOMContentLoaded",Gr,it,"load",Gr,it,"resize",xa],oo(on),et.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)co(an,rt[l],rt[l+1]),co(an,rt[l],rt[l+2])}else if(mt){var c=function u(){r.enable(),mt.removeEventListener("DOMContentLoaded",u)};mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(kl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(so)||(so=i)&&setInterval(pf,i),"ignoreMobileResize"in n&&(Hc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(oo(an)||oo(on,n.autoRefreshEvents||"none"),Lp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),a=rt.indexOf(s),o=Jr(s);~a&&rt.splice(a,o?6:2),i&&(o?Oi.unshift(it,i,pt,i,Zn,i):Oi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=($n(n)?Fn(n):n).getBoundingClientRect(),o=a[s?$r:Kr]*i||0;return s?a.right-o>0&&a.left+o<it.innerWidth:a.bottom-o>0&&a.top+o<it.innerHeight},r.positionInViewport=function(n,i,s){$n(n)&&(n=Fn(n));var a=n.getBoundingClientRect(),o=a[s?$r:Kr],l=i==null?o/2:i in dl?dl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/it.innerWidth:(a.top+l)/it.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qr.killAll||[];Qr={},i.forEach(function(s){return s()})}},r})();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?Ha(r).forEach(function(e){if(e&&e.style){var t=qn.indexOf(e);t>=0&&qn.splice(t,5),qn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),be.core.getCache(e),Wc())}}):qn};Qe.revert=function(r,e){return dh(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?xa(!0):(ws||Qe.register())&&Gr(!0)};Qe.update=function(r){return++rt.cache&&ji(r===!0?2:0)};Qe.clearScrollMemory=Xp;Qe.maxScroll=function(r,e){return Ui(r,e?Un:jt)};Qe.getScrollFunc=function(r,e){return wr(Fn(r),e?Un:jt)};Qe.getById=function(r){return Yc[r]};Qe.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!mi};Qe.snapDirectional=fh;Qe.addEventListener=function(r,e){var t=Qr[r]||(Qr[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Qr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=be.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Mn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Mn(s)&&(s=s(),on(Qe,"refresh",function(){return s=e.batchMax()})),Ha(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var Mf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Wl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===Zn&&r(pt,t)},mo={auto:1,scroll:1},dg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||be.core.getCache(s),o=xn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(mo[(l=fi(s)).overflowY]||mo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Jr(s)&&(mo[(l=fi(s)).overflowY]||mo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$p=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&dg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(mt,Ht.eventTypes[0],yf,!1,!0)},onDisable:function(){return an(mt,Ht.eventTypes[0],yf,!0)}})},pg=/(input|label|select|textarea)/i,Sf,yf=function(e){var t=pg.test(e.target.tagName);(t||Sf)&&(e._gsapAllow=!0,Sf=t)},mg=function(e){zr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Fn(e.target)||Zn,u=be.core.globals().ScrollSmoother,d=u&&u.get(),h=dr&&(e.content&&Fn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=wr(c,jt),g=wr(c,Un),_=1,m=(Ht.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,p=0,S=Mn(i)?function(){return i(o)}:function(){return i||2.8},w,M,y=$p(c,e.type,!0,s),b=function(){return M=!1},A=Ci,x=Ci,T=function(){l=Ui(c,jt),x=Aa(dr?1:0,l),n&&(A=Aa(0,Ui(c,Un))),w=Zr},R=function(){h._gsap.y=_a(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(M){requestAnimationFrame(b);var J=_a(o.deltaY/2),Y=x(f.v-J);if(h&&Y!==f.v+f.offset){f.offset=Y-f.v;var C=_a((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",f.cacheID=rt.cache,ji()}return!0}f.offset&&R(),M=!0},D,k,I,B,$=function(){T(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return h&&be.set(h,{y:"+=0"}),e.ignoreCheck=function(O){return dr&&O.type==="touchmove"&&L()||_>1.05&&O.type!=="touchstart"||o.isGesturing||O.touches&&O.touches.length>1},e.onPress=function(){M=!1;var O=_;_=_a((it.visualViewport&&it.visualViewport.scale||1)/m),D.pause(),O!==_&&Wl(c,_>1.01?!0:n?!1:"x"),k=g(),I=f(),T(),w=Zr},e.onRelease=e.onGestureStart=function(O,J){if(f.offset&&R(),!J)B.restart(!0);else{rt.cache++;var Y=S(),C,j;n&&(C=g(),j=C+Y*.05*-O.velocityX/.227,Y*=Mf(g,C,j,Ui(c,Un)),D.vars.scrollX=A(j)),C=f(),j=C+Y*.05*-O.velocityY/.227,Y*=Mf(f,C,j,Ui(c,jt)),D.vars.scrollY=x(j),D.invalidate().duration(Y).play(.01),(dr&&D.vars.scrollY>=l||C>=l-1)&&be.to({},{onUpdate:$,duration:Y})}a&&a(O)},e.onWheel=function(){D._ts&&D.pause(),xn()-p>1e3&&(w=0,p=xn())},e.onChange=function(O,J,Y,C,j){if(Zr!==w&&T(),J&&n&&g(A(C[2]===J?k+(O.startX-O.x):g()+J-C[1])),Y){f.offset&&R();var Se=j[2]===Y,ye=Se?I+O.startY-O.y:f()+Y-j[1],ke=x(ye);Se&&ye!==ke&&(I+=ke-ye),f(ke)}(Y||J)&&ji()},e.onEnable=function(){Wl(c,n?!1:"x"),Qe.addEventListener("refresh",$),on(it,"resize",$),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),y.enable()},e.onDisable=function(){Wl(c,!0),an(it,"resize",$),Qe.removeEventListener("refresh",$),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=dr,dr&&!f()&&f(1),dr&&be.ticker.add(Ci),B=o._dc,D=be.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qp(f,f(),function(){return D.pause()})},onUpdate:ji,onComplete:B.vars.onComplete}),o};Qe.sort=function(r){if(Mn(r))return et.sort(r);var e=it.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Ht(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var e=r instanceof Ht?r:mg(r);return Dn&&Dn.target===e.target&&Dn.kill(),Jr(e.target)&&(Dn=e),e};Qe.core={_getVelocityProp:Gc,_inputObserver:$p,_scrollers:rt,_proxies:Oi,bridge:{ss:function(){mi||jr("scrollStart"),mi=xn()},ref:function(){return gn}}};Fp()&&be.registerPlugin(Qe);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="186",_g=0,Ef=1,gg=2,Jo=1,xg=2,va=3,es=0,Hn=1,Li=2,er=0,Ia=1,Ua=2,Tf=3,bf=4,vg=5,Cs=100,Mg=101,Sg=102,yg=103,Eg=104,Tg=200,bg=201,Ag=202,wg=203,Kp=204,Zp=205,Rg=206,Cg=207,Pg=208,Dg=209,Lg=210,Ig=211,Ug=212,Ng=213,Fg=214,Kc=0,Zc=1,Jc=2,Xa=3,Qc=4,jc=5,eu=6,tu=7,Jp=0,Og=1,Bg=2,Bi=0,Qp=1,jp=2,em=3,mh=4,tm=5,nm=6,im=7,rm=300,ts=301,Zs=302,Xl=303,Yl=304,Al=306,nu=1e3,Qi=1001,iu=1002,un=1003,zg=1004,_o=1005,Sn=1006,ql=1007,Vr=1008,ei=1009,sm=1010,am=1011,Ya=1012,_h=1013,ki=1014,Ni=1015,Gi=1016,gh=1017,xh=1018,qa=1020,om=35902,lm=35899,cm=1021,um=1022,Si=1023,rr=1026,Hr=1027,hm=1028,vh=1029,ns=1030,Mh=1031,Sh=1033,Qo=33776,jo=33777,el=33778,tl=33779,ru=35840,su=35841,au=35842,ou=35843,lu=36196,cu=37492,uu=37496,hu=37488,fu=37489,pl=37490,du=37491,pu=37808,mu=37809,_u=37810,gu=37811,xu=37812,vu=37813,Mu=37814,Su=37815,yu=37816,Eu=37817,Tu=37818,bu=37819,Au=37820,wu=37821,Ru=36492,Cu=36494,Pu=36495,Du=36283,Lu=36284,ml=36285,Iu=36286,kg=3200,Uu=0,Gg=1,mr="",ui="srgb",_l="srgb-linear",gl="linear",_t="srgb",$l=7680,Vg=519,Hg=512,Wg=513,Xg=514,yh=515,Yg=516,qg=517,Eh=518,$g=519,Kg=35044,Af="300 es",Fi=2e3,$a=2001;function Zg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Jg(){const r=xl("canvas");return r.style.display="block",r}const wf={};function Rf(...r){const e="THREE."+r.shift();console.log(e,...r)}function fm(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ge(...r){r=fm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ht(...r){r=fm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Vs(...r){const e=r.join(" ");e in wf||(wf[e]=!0,Ge(...r))}function Qg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const jg={[Kc]:Zc,[Jc]:eu,[Qc]:tu,[Xa]:jc,[Zc]:Kc,[eu]:Jc,[tu]:Qc,[jc]:Xa};class rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,Nu=180/Math.PI;function Ja(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function e0(r,e){return(r%e+e)%e}function Zl(r,e,t){return(1-t)*r+t*e}function ia(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Uh=class Uh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uh.prototype.isVector2=!0;let je=Uh;class Qs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+_*o;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nh=class Nh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nh.prototype.isVector3=!0;let G=Nh;const Jl=new G,Cf=new Qs,Fh=class Fh{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],w=i[4],M=i[7],y=i[2],b=i[5],A=i[8];return s[0]=a*_+o*S+l*y,s[3]=a*m+o*w+l*b,s[6]=a*p+o*M+l*A,s[1]=c*_+u*S+d*y,s[4]=c*m+u*w+d*b,s[7]=c*p+u*M+d*A,s[2]=h*_+f*S+g*y,s[5]=h*m+f*w+g*b,s[8]=h*p+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;let qe=Fh;const Ql=new qe,Pf=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){const r={enabled:!0,workingColorSpace:_l,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===_t&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?gl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[_l]:{primaries:e,whitePoint:n,transfer:gl,toXYZ:Pf,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Pf,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const lt=t0();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ps;class n0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=xl("canvas")),ps.width=e.width,ps.height=e.height;const i=ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=tr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i0=0;class Th{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jl(i[a].image)):s.push(jl(i[a]))}else s=jl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?n0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let r0=0;const ec=new G;class En extends rs{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=Qi,i=Qi,s=Sn,a=Vr,o=Si,l=ei,c=En.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ja(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ec).x}get height(){return this.source.getSize(ec).y}get depth(){return this.source.getSize(ec).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=rm;En.DEFAULT_ANISOTROPY=1;const Oh=class Oh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(f+1)/2,y=(p+1)/2,b=(u+h)/4,A=(d+_)/4,x=(g+m)/4;return w>M&&w>y?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=A/n):M>y?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=x/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;let Nt=Oh;class s0 extends rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new En(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Th(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends s0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dm extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a0 extends En{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Sl=class Sl{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/ms.setFromMatrixColumn(e,0).length(),s=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,l0)}lookAt(e,t,n){const i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),lr.crossVectors(n,Xn),lr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),lr.crossVectors(n,Xn)),lr.normalize(),go.crossVectors(Xn,lr),i[0]=lr.x,i[4]=go.x,i[8]=Xn.x,i[1]=lr.y,i[5]=go.y,i[9]=Xn.y,i[2]=lr.z,i[6]=go.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],w=n[7],M=n[11],y=n[15],b=i[0],A=i[4],x=i[8],T=i[12],R=i[1],L=i[5],D=i[9],k=i[13],I=i[2],B=i[6],$=i[10],O=i[14],J=i[3],Y=i[7],C=i[11],j=i[15];return s[0]=a*b+o*R+l*I+c*J,s[4]=a*A+o*L+l*B+c*Y,s[8]=a*x+o*D+l*$+c*C,s[12]=a*T+o*k+l*O+c*j,s[1]=u*b+d*R+h*I+f*J,s[5]=u*A+d*L+h*B+f*Y,s[9]=u*x+d*D+h*$+f*C,s[13]=u*T+d*k+h*O+f*j,s[2]=g*b+_*R+m*I+p*J,s[6]=g*A+_*L+m*B+p*Y,s[10]=g*x+_*D+m*$+p*C,s[14]=g*T+_*k+m*O+p*j,s[3]=S*b+w*R+M*I+y*J,s[7]=S*A+w*L+M*B+y*Y,s[11]=S*x+w*D+M*$+y*C,s[15]=S*T+w*k+M*O+y*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=l*f-c*h,w=o*f-c*d,M=o*h-l*d,y=a*f-c*u,b=a*h-l*u,A=a*d-o*u;return t*(_*S-m*w+p*M)-n*(g*S-m*y+p*b)+i*(g*w-_*y+p*A)-s*(g*M-_*b+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=t*o-n*a,w=t*l-i*a,M=t*c-s*a,y=n*l-i*o,b=n*c-s*o,A=i*c-s*l,x=u*_-d*g,T=u*m-h*g,R=u*p-f*g,L=d*m-h*_,D=d*p-f*_,k=h*p-f*m,I=S*k-w*D+M*L+y*R-b*T+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=(o*k-l*D+c*L)*B,e[1]=(i*D-n*k-s*L)*B,e[2]=(_*A-m*b+p*y)*B,e[3]=(h*b-d*A-f*y)*B,e[4]=(l*R-a*k-c*T)*B,e[5]=(t*k-i*R+s*T)*B,e[6]=(m*M-g*A-p*w)*B,e[7]=(u*A-h*M+f*w)*B,e[8]=(a*D-o*R+c*x)*B,e[9]=(n*R-t*D-s*x)*B,e[10]=(g*b-_*M+p*S)*B,e[11]=(d*M-u*b-f*S)*B,e[12]=(o*T-a*L-l*x)*B,e[13]=(t*L-n*T+i*x)*B,e[14]=(_*w-g*y-m*S)*B,e[15]=(u*y-d*w+h*S)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,S=l*c,w=l*u,M=l*d,y=n.x,b=n.y,A=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+M)*y,i[2]=(g-w)*y,i[3]=0,i[4]=(f-M)*b,i[5]=(1-(h+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(g+w)*A,i[9]=(m-S)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=ms.set(i[0],i[1],i[2]).length();const o=ms.set(i[4],i[5],i[6]).length(),l=ms.set(i[8],i[9],i[10]).length();s<0&&(a=-a),_i.copy(this);const c=1/a,u=1/o,d=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=u,_i.elements[5]*=u,_i.elements[6]*=u,_i.elements[8]*=d,_i.elements[9]*=d,_i.elements[10]*=d,t.setFromRotationMatrix(_i),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Fi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Fi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$a)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Fi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Fi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===$a)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sl.prototype.isMatrix4=!0;let Rt=Sl;const ms=new G,_i=new Rt,o0=new G(0,0,0),l0=new G(1,1,1),lr=new G,go=new G,Xn=new G,Lf=new Rt,If=new Qs;class Rr{constructor(e=0,t=0,n=0,i=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c0=0;const Uf=new G,_s=new Qs,Hi=new Rt,xo=new G,ra=new G,u0=new G,h0=new Qs,Nf=new G(1,0,0),Ff=new G(0,1,0),Of=new G(0,0,1),Bf={type:"added"},f0={type:"removed"},gs={type:"childadded",child:null},tc={type:"childremoved",child:null};class Tn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new G,t=new Rr,n=new Qs,i=new G(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new qe}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ra,xo,this.up):Hi.lookAt(xo,ra,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Hi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bf),gs.child=e,this.dispatchEvent(gs),gs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bf),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,h0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tn.DEFAULT_UP=new G(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Is extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d0={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ic(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=e0(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ic(a,s,e+1/3),this.g=ic(a,s,e),this.b=ic(a,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=ui){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const n=pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return lt.workingToColorSpace(_n.copy(this),e),Math.round(at(_n.r*255,0,255))*65536+Math.round(at(_n.g*255,0,255))*256+Math.round(at(_n.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(_n.copy(this),t);const n=_n.r,i=_n.g,s=_n.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ui){lt.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,i=_n.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(vo);const n=Zl(cr.h,vo.h,t),i=Zl(cr.s,vo.s,t),s=Zl(cr.l,vo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new $e;$e.NAMES=pm;class Ah{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class p0 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gi=new G,Wi=new G,rc=new G,Xi=new G,xs=new G,vs=new G,zf=new G,sc=new G,ac=new G,oc=new G,lc=new Nt,cc=new Nt,uc=new Nt;class Mi{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gi.subVectors(e,t),i.cross(gi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){gi.subVectors(i,t),Wi.subVectors(n,t),rc.subVectors(e,t);const a=gi.dot(gi),o=gi.dot(Wi),l=gi.dot(rc),c=Wi.dot(Wi),u=Wi.dot(rc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(lc,s.x),a.addScaledVector(cc,s.y),a.addScaledVector(uc,s.z),a}static isFrontFacing(e,t,n,i){return gi.subVectors(n,t),Wi.subVectors(e,t),gi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),gi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xs.subVectors(i,n),vs.subVectors(s,n),sc.subVectors(e,n);const l=xs.dot(sc),c=vs.dot(sc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,i);const u=xs.dot(ac),d=vs.dot(ac);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xs,a);oc.subVectors(e,s);const f=xs.dot(oc),g=vs.dot(oc);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vs,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return zf.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(zf,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qa{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(s,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),So.subVectors(this.max,sa),Ms.subVectors(e.a,sa),Ss.subVectors(e.b,sa),ys.subVectors(e.c,sa),ur.subVectors(Ss,Ms),hr.subVectors(ys,Ss),Lr.subVectors(Ms,ys);let t=[0,-ur.z,ur.y,0,-hr.z,hr.y,0,-Lr.z,Lr.y,ur.z,0,-ur.x,hr.z,0,-hr.x,Lr.z,0,-Lr.x,-ur.y,ur.x,0,-hr.y,hr.x,0,-Lr.y,Lr.x,0];return!hc(t,Ms,Ss,ys,So)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,Ms,Ss,ys,So))?!1:(yo.crossVectors(ur,hr),t=[yo.x,yo.y,yo.z],hc(t,Ms,Ss,ys,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new G,new G,new G,new G,new G,new G,new G,new G],xi=new G,Mo=new Qa,Ms=new G,Ss=new G,ys=new G,ur=new G,hr=new G,Lr=new G,sa=new G,So=new G,yo=new G,Ir=new G;function hc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ir.fromArray(r,s);const o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qt=new G,Eo=new je;let m0=0;class Ei extends rs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kg,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class mm extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _m extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}const _0=new Qa,aa=new G,fc=new G;class ja{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const t=aa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(fc)),this.expandByPoint(aa.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let g0=0;const li=new Rt,dc=new Tn,Es=new G,Yn=new Qa,oa=new Qa,sn=new G;class fn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zg(e)?_m:mm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Yn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Yn.min,oa.min),Yn.expandByPoint(sn),sn.addVectors(Yn.max,oa.max),Yn.expandByPoint(sn)):(Yn.expandByPoint(oa.min),Yn.expandByPoint(oa.max))}Yn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)sn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),sn.add(Es)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new G,l[x]=new G;const c=new G,u=new G,d=new G,h=new je,f=new je,g=new je,_=new G,m=new G;function p(x,T,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[x].add(_),o[T].add(_),o[R].add(_),l[x].add(m),l[T].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,T=S.length;x<T;++x){const R=S[x],L=R.start,D=R.count;for(let k=L,I=L+D;k<I;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new G,M=new G,y=new G,b=new G;function A(x){y.fromBufferAttribute(i,x),b.copy(y);const T=o[x];w.copy(T),w.sub(y.multiplyScalar(y.dot(T))).normalize(),M.crossVectors(b,T);const L=M.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,T=S.length;x<T;++x){const R=S[x],L=R.start,D=R.count;for(let k=L,I=L+D;k<I;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Ei(h,u,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new G,x0=new G,v0=new qe;class pr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(pc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||v0.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let M0=0;class ss extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=Ia,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kp,this.blendDst=Zp,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$l,this.stencilZFail=$l,this.stencilZPass=$l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new G,mc=new G,To=new G,bo=new G;class wl{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mc.copy(e).add(t).multiplyScalar(.5),To.copy(t).sub(e).normalize(),bo.copy(this.origin).sub(mc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(To),o=bo.dot(this.direction),l=-bo.dot(To),c=bo.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(mc).addScaledVector(To,h),f}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,M=Math.abs(l),y=Math.abs(c),b=Math.abs(u);let A,x,T,R,L,D,k,I,B,$,O,J;if(M>=y&&M>=b?(T=l,D=d,B=g,J=p,l>=0?(A=c,x=u,R=h,L=f,k=_,I=m,$=S,O=w):(A=u,x=c,R=f,L=h,k=m,I=_,$=w,O=S)):y>=b?(T=c,D=h,B=_,J=S,c>=0?(A=u,x=l,R=f,L=d,k=m,I=g,$=w,O=p):(A=l,x=u,R=d,L=f,k=g,I=m,$=p,O=w)):(T=u,D=f,B=m,J=w,u>=0?(A=l,x=c,R=d,L=h,k=g,I=_,$=p,O=S):(A=c,x=l,R=h,L=d,k=_,I=g,$=S,O=p)),T===0)return null;const Y=A/T,C=x/T,j=1/T,Se=R-Y*D,ye=L-C*D,ke=k-Y*B,ze=I-C*B,Ve=$-Y*J,K=O-C*J,ee=Ve*ze-K*ke,ge=Se*K-ye*Ve,Oe=ke*ye-ze*Se;if(i){if(ee<0||ge<0||Oe<0)return null}else if((ee<0||ge<0||Oe<0)&&(ee>0||ge>0||Oe>0))return null;const me=ee+ge+Oe;if(me===0)return null;const Ne=j*(ee*D+ge*B+Oe*J);return(me>0?Ne<0:Ne>0)?null:this.at(Ne/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wh extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=Jp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kf=new Rt,Ur=new wl,Ao=new ja,Gf=new G,wo=new G,Ro=new G,Co=new G,_c=new G,Po=new G,Vf=new G,Do=new G;class Bn extends Tn{constructor(e=new fn,t=new wh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(_c.fromBufferAttribute(d,e),a?Po.addScaledVector(_c,u):Po.addScaledVector(_c.sub(t),u))}t.add(Po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(Ao.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Ao,Gf)===null||Ur.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(kf.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(kf),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,y=w;M<y;M+=3){const b=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);i=Lo(this,p,e,n,c,u,d,b,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);i=Lo(this,a,e,n,c,u,d,S,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,y=w;M<y;M+=3){const b=M,A=M+1,x=M+2;i=Lo(this,p,e,n,c,u,d,b,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,w=m+1,M=m+2;i=Lo(this,a,e,n,c,u,d,S,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function S0(r,e,t,n,i,s,a,o){let l;if(e.side===Hn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===es,o),l===null)return null;Do.copy(o),Do.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:r}}function Lo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,wo),r.getVertexPosition(l,Ro),r.getVertexPosition(c,Co);const u=S0(r,e,t,n,wo,Ro,Co,Vf);if(u){const d=new G;Mi.getBarycoord(Vf,wo,Ro,Co,d),i&&(u.uv=Mi.getInterpolatedAttribute(i,o,l,c,d,new je)),s&&(u.uv1=Mi.getInterpolatedAttribute(s,o,l,c,d,new je)),a&&(u.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Mi.getNormal(wo,Ro,Co,h.normal),u.face=h,u.barycoord=d}return u}class y0 extends En{constructor(e=null,t=1,n=1,i,s,a,o,l,c=un,u=un,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nr=new ja,E0=new je(.5,.5),Io=new G;class Rh{constructor(e=new pr,t=new pr,n=new pr,i=new pr,s=new pr,a=new pr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],S=s[12],w=s[13],M=s[14],y=s[15];if(i[0].setComponents(c-a,f-u,p-g,y-S).normalize(),i[1].setComponents(c+a,f+u,p+g,y+S).normalize(),i[2].setComponents(c+o,f+d,p+_,y+w).normalize(),i[3].setComponents(c-o,f-d,p-_,y-w).normalize(),n)i[4].setComponents(l,h,m,M).normalize(),i[5].setComponents(c-l,f-h,p-m,y-M).normalize();else if(i[4].setComponents(c-l,f-h,p-m,y-M).normalize(),t===Fi)i[5].setComponents(c+l,f+h,p+m,y+M).normalize();else if(t===$a)i[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const t=E0.distanceTo(e.center);return Nr.radius=.7071067811865476+t,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Io.x=i.normal.x>0?e.max.x:e.min.x,Io.y=i.normal.y>0?e.max.y:e.min.y,Io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gm extends ss{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vl=new G,Ml=new G,Hf=new Rt,la=new wl,Uo=new ja,gc=new G,Wf=new G;class T0 extends Tn{constructor(e=new fn,t=new gm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)vl.fromBufferAttribute(t,i-1),Ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=vl.distanceTo(Ml);e.setAttribute("lineDistance",new Bt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;Hf.copy(i).invert(),la.copy(e.ray).applyMatrix4(Hf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),w=No(this,e,la,l,p,S,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=No(this,e,la,l,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=No(this,e,la,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=No(this,e,la,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function No(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(vl.fromBufferAttribute(o,i),Ml.fromBufferAttribute(o,s),t.distanceSqToSegment(vl,Ml,gc,Wf)>n)return;gc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(gc);if(!(c<e.near||c>e.far))return{distance:c,point:Wf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Xf=new G,Yf=new G;class b0 extends T0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Xf.fromBufferAttribute(t,i),Yf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xf.distanceTo(Yf);e.setAttribute("lineDistance",new Bt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fu extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qf=new Rt,Ou=new wl,Fo=new ja,Oo=new G;class $f extends Tn{constructor(e=new fn,t=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;qf.copy(i).invert(),Ou.copy(e.ray).applyMatrix4(qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Oo.fromBufferAttribute(d,m),Kf(Oo,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Oo.fromBufferAttribute(d,g),Kf(Oo,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kf(r,e,t,n,i,s,a){const o=Ou.distanceSqToPoint(r);if(o<t){const l=new G;Ou.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xm extends En{constructor(e=[],t=ts,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A0 extends En{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ka extends En{constructor(e,t,n=ki,i,s,a,o=un,l=un,c,u=rr,d=1){if(u!==rr&&u!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class w0 extends Ka{constructor(e,t=ki,n=ts,i,s,a=un,o=un,l,c=rr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vm extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends fn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function g(_,m,p,S,w,M,y,b,A,x,T){const R=M/A,L=y/x,D=M/2,k=y/2,I=b/2,B=A+1,$=x+1;let O=0,J=0;const Y=new G;for(let C=0;C<$;C++){const j=C*L-k;for(let Se=0;Se<B;Se++){const ye=Se*R-D;Y[_]=ye*S,Y[m]=j*w,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Se/A),d.push(1-C/x),O+=1}}for(let C=0;C<x;C++)for(let j=0;j<A;j++){const Se=h+j+B*C,ye=h+j+B*(C+1),ke=h+(j+1)+B*(C+1),ze=h+(j+1)+B*C;l.push(Se,ye,ze),l.push(ye,ke,ze),J+=6}o.addGroup(f,J,T),f+=J,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class to extends fn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const w=new G,M=new G,y=new G;for(let b=0;b<t.length;b+=3)f(t[b+0],w),f(t[b+1],M),f(t[b+2],y),l(w,M,y,S)}function l(S,w,M,y){const b=y+1,A=[];for(let x=0;x<=b;x++){A[x]=[];const T=S.clone().lerp(M,x/b),R=w.clone().lerp(M,x/b),L=b-x;for(let D=0;D<=L;D++)D===0&&x===b?A[x][D]=T:A[x][D]=T.clone().lerp(R,D/L)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const R=Math.floor(T/2);T%2===0?(h(A[x][R+1]),h(A[x+1][R]),h(A[x][R])):(h(A[x][R+1]),h(A[x+1][R+1]),h(A[x+1][R]))}}function c(S){const w=new G;for(let M=0;M<s.length;M+=3)w.x=s[M+0],w.y=s[M+1],w.z=s[M+2],w.normalize().multiplyScalar(S),s[M+0]=w.x,s[M+1]=w.y,s[M+2]=w.z}function u(){const S=new G;for(let w=0;w<s.length;w+=3){S.x=s[w+0],S.y=s[w+1],S.z=s[w+2];const M=m(S)/2/Math.PI+.5,y=p(S)/Math.PI+.5;a.push(M,1-y)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const w=a[S+0],M=a[S+2],y=a[S+4],b=Math.max(w,M,y),A=Math.min(w,M,y);b>.9&&A<.1&&(w<.2&&(a[S+0]+=1),M<.2&&(a[S+2]+=1),y<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function f(S,w){const M=S*3;w.x=e[M+0],w.y=e[M+1],w.z=e[M+2]}function g(){const S=new G,w=new G,M=new G,y=new G,b=new je,A=new je,x=new je;for(let T=0,R=0;T<s.length;T+=9,R+=6){S.set(s[T+0],s[T+1],s[T+2]),w.set(s[T+3],s[T+4],s[T+5]),M.set(s[T+6],s[T+7],s[T+8]),b.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),y.copy(S).add(w).add(M).divideScalar(3);const L=m(y);_(b,R+0,S,L),_(A,R+2,w,L),_(x,R+4,M,L)}}function _(S,w,M,y){y<0&&S.x===1&&(a[w]=S.x-1),M.x===0&&M.z===0&&(a[w]=y/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.vertices,e.indices,e.radius,e.detail)}}class Ch extends to{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ch(e.radius,e.detail)}}class Ph extends to{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ph(e.radius,e.detail)}}class Dh extends to{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dh(e.radius,e.detail)}}class Rl extends fn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let w=0;w<c;w++){const M=w*d-s;g.push(M,-S,0),_.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const w=S+c*p,M=S+c*(p+1),y=S+1+c*(p+1),b=S+1+c*p;f.push(w,M,b),f.push(M,y,b)}this.setIndex(f),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lh extends fn{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const h=(t-e)/i,f=new G,g=new je;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,w=S,M=S+n+1,y=S+n+2,b=S+1;o.push(w,M,b),o.push(M,y,b)}}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ih extends fn{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new G,f=new G,g=new G;for(let _=0;_<=n;_++){const m=a+_/n*o;for(let p=0;p<=i;p++){const S=p/i*s;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const p=(i+1)*_+m-1,S=(i+1)*(_-1)+m-1,w=(i+1)*(_-1)+m,M=(i+1)*_+m;l.push(p,S,M),l.push(S,w,M)}this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(Zf(i))i.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Zf(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=Js(r[t]);for(const i in n)e[i]=n[i]}return e}function Zf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function R0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Mm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const C0={clone:Js,merge:Pn};var P0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(i.value);break;case"v2":this.uniforms[n].value=new je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class L0 extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bu extends ss{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends Bu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class I0 extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U0 extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sm extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const xc=new Rt,Qf=new G,jf=new G;class N0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qf),jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===$a||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bo=new G,zo=new Qs,Ai=new G;class ym extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,zo,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bo,zo,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new G,ed=new je,td=new je;class Jn extends ym{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nu*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,ed,td),t.subVectors(td,ed)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class F0 extends N0{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class ca extends Sm{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new F0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Em extends ym{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class O0 extends Sm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ts=-90,bs=1;class B0 extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Jn(Ts,bs,e,t);i.layers=this.layers,this.add(i);const s=new Jn(Ts,bs,e,t);s.layers=this.layers,this.add(s);const a=new Jn(Ts,bs,e,t);a.layers=this.layers,this.add(a);const o=new Jn(Ts,bs,e,t);o.layers=this.layers,this.add(o);const l=new Jn(Ts,bs,e,t);l.layers=this.layers,this.add(l);const c=new Jn(Ts,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class z0 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nd=new Rt;class k0{constructor(e,t,n=0,i=1/0){this.ray=new wl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(e,t=!0,n=[]){return zu(e,this,n,t),n.sort(id),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)zu(e[i],this,n,t);return n.sort(id),n}}function id(r,e){return r.distance-e.distance}function zu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)zu(s[a],e,t,!0)}}class G0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Bh=class Bh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Bh.prototype.isMatrix2=!0;let rd=Bh;function sd(r,e,t,n){const i=V0(n);switch(t){case cm:return r*e;case hm:return r*e/i.components*i.byteLength;case vh:return r*e/i.components*i.byteLength;case ns:return r*e*2/i.components*i.byteLength;case Mh:return r*e*2/i.components*i.byteLength;case um:return r*e*3/i.components*i.byteLength;case Si:return r*e*4/i.components*i.byteLength;case Sh:return r*e*4/i.components*i.byteLength;case Qo:case jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case el:case tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case su:case ou:return Math.max(r,16)*Math.max(e,8)/4;case ru:case au:return Math.max(r,8)*Math.max(e,8)/2;case lu:case cu:case hu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uu:case pl:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Cu:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Du:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ml:case Iu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function V0(r){switch(r){case ei:case sm:return{byteLength:1,components:1};case Ya:case am:case Gi:return{byteLength:2,components:1};case gh:case xh:return{byteLength:2,components:4};case ki:case _h:case Ni:return{byteLength:4,components:1};case om:case lm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function H0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Px=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Fx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ov=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:Y0,alphamap_pars_fragment:q0,alphatest_fragment:$0,alphatest_pars_fragment:K0,aomap_fragment:Z0,aomap_pars_fragment:J0,batching_pars_vertex:Q0,batching_vertex:j0,begin_vertex:ex,beginnormal_vertex:tx,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:rx,clipping_planes_fragment:sx,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:ox,clipping_planes_vertex:lx,color_fragment:cx,color_pars_fragment:ux,color_pars_vertex:hx,color_vertex:fx,common:dx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:_x,displacementmap_vertex:gx,emissivemap_fragment:xx,emissivemap_pars_fragment:vx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:yx,envmap_common_pars_fragment:Ex,envmap_pars_fragment:Tx,envmap_pars_vertex:bx,envmap_physical_pars_fragment:Fx,envmap_vertex:Ax,fog_vertex:wx,fog_pars_vertex:Rx,fog_fragment:Cx,fog_pars_fragment:Px,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Lx,lights_lambert_fragment:Ix,lights_lambert_pars_fragment:Ux,lights_pars_begin:Nx,lights_toon_fragment:Ox,lights_toon_pars_fragment:Bx,lights_phong_fragment:zx,lights_phong_pars_fragment:kx,lights_physical_fragment:Gx,lights_physical_pars_fragment:Vx,lights_fragment_begin:Hx,lights_fragment_maps:Wx,lights_fragment_end:Xx,lightprobes_pars_fragment:Yx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:$x,logdepthbuf_pars_vertex:Kx,logdepthbuf_vertex:Zx,map_fragment:Jx,map_pars_fragment:Qx,map_particle_fragment:jx,map_particle_pars_fragment:ev,metalnessmap_fragment:tv,metalnessmap_pars_fragment:nv,morphinstance_vertex:iv,morphcolor_vertex:rv,morphnormal_vertex:sv,morphtarget_pars_vertex:av,morphtarget_vertex:ov,normal_fragment_begin:lv,normal_fragment_maps:cv,normal_pars_fragment:uv,normal_pars_vertex:hv,normal_vertex:fv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:pv,clearcoat_normal_fragment_maps:mv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:gv,opaque_fragment:xv,packing:vv,premultiplied_alpha_fragment:Mv,project_vertex:Sv,dithering_fragment:yv,dithering_pars_fragment:Ev,roughnessmap_fragment:Tv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:wv,shadowmap_vertex:Rv,shadowmask_pars_fragment:Cv,skinbase_vertex:Pv,skinning_pars_vertex:Dv,skinning_vertex:Lv,skinnormal_vertex:Iv,specularmap_fragment:Uv,specularmap_pars_fragment:Nv,tonemapping_fragment:Fv,tonemapping_pars_fragment:Ov,transmission_fragment:Bv,transmission_pars_fragment:zv,uv_pars_fragment:kv,uv_pars_vertex:Gv,uv_vertex:Vv,worldpos_vertex:Hv,background_vert:Wv,background_frag:Xv,backgroundCube_vert:Yv,backgroundCube_frag:qv,cube_vert:$v,cube_frag:Kv,depth_vert:Zv,depth_frag:Jv,distance_vert:Qv,distance_frag:jv,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:lM,meshmatcap_frag:cM,meshnormal_vert:uM,meshnormal_frag:hM,meshphong_vert:fM,meshphong_frag:dM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:_M,meshtoon_frag:gM,points_vert:xM,points_frag:vM,shadow_vert:MM,shadow_frag:SM,sprite_vert:yM,sprite_frag:EM},ve={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Pi={basic:{uniforms:Pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Pn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Pn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new $e(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Pn([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Pn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Pn([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Pn([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Pn([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Pn([ve.lights,ve.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Pi.physical={uniforms:Pn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ko={r:0,b:0,g:0},TM=new Rt,bm=new qe;bm.set(-1,0,0,0,1,0,0,0,1);function bM(r,e,t,n,i,s){const a=new $e(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const M=S.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(S){let w=!1;const M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(S,w){const M=f(w);M&&(M.isCubeTexture||M.mapping===Al)?(c===void 0&&(c=new Bn(new eo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Js(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TM.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bm),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==_t,(u!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Bn(new Rl(2,2),new Vi({name:"BackgroundMaterial",uniforms:Js(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==_t,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(ko,Mm(r)),t.buffers.color.setClear(ko.r,ko.g,ko.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:p}}function AM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(L,D,k,I,B){let $=!1;const O=d(L,I,k,D);s!==O&&(s=O,c(s.object)),$=f(L,I,k,B),$&&g(L,I,k,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(L,D,k,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,D,k,I){const B=I.wireframe===!0;let $=n[D.id];$===void 0&&($={},n[D.id]=$);const O=L.isInstancedMesh===!0?L.id:0;let J=$[O];J===void 0&&(J={},$[O]=J);let Y=J[k.id];Y===void 0&&(Y={},J[k.id]=Y);let C=Y[B];return C===void 0&&(C=h(l()),Y[B]=C),C}function h(L){const D=[],k=[],I=[];for(let B=0;B<t;B++)D[B]=0,k[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,D,k,I){const B=s.attributes,$=D.attributes;let O=0;const J=k.getAttributes();for(const Y in J)if(J[Y].location>=0){const j=B[Y];let Se=$[Y];if(Se===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(L,D,k,I){const B={},$=D.attributes;let O=0;const J=k.getAttributes();for(const Y in J)if(J[Y].location>=0){let j=$[Y];j===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),B[Y]=Se,O++}s.attributes=B,s.attributesNum=O,s.index=I}function _(){const L=s.newAttributes;for(let D=0,k=L.length;D<k;D++)L[D]=0}function m(L){p(L,0)}function p(L,D){const k=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;k[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),B[L]!==D&&(r.vertexAttribDivisor(L,D),B[L]=D)}function S(){const L=s.newAttributes,D=s.enabledAttributes;for(let k=0,I=D.length;k<I;k++)D[k]!==L[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function w(L,D,k,I,B,$,O){O===!0?r.vertexAttribIPointer(L,D,k,B,$):r.vertexAttribPointer(L,D,k,I,B,$)}function M(L,D,k,I){_();const B=I.attributes,$=k.getAttributes(),O=D.defaultAttributeValues;for(const J in $){const Y=$[J];if(Y.location>=0){let C=B[J];if(C===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){const j=C.normalized,Se=C.itemSize,ye=e.get(C);if(ye===void 0)continue;const ke=ye.buffer,ze=ye.type,Ve=ye.bytesPerElement,K=ze===r.INT||ze===r.UNSIGNED_INT||C.gpuType===_h;if(C.isInterleavedBufferAttribute){const ee=C.data,ge=ee.stride,Oe=C.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<Y.locationSize;me++)m(Y.location+me);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let me=0;me<Y.locationSize;me++)w(Y.location+me,Se/Y.locationSize,ze,j,ge*Ve,(Oe+Se/Y.locationSize*me)*Ve,K)}else{if(C.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee,C.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let ee=0;ee<Y.locationSize;ee++)w(Y.location+ee,Se/Y.locationSize,ze,j,Se*Ve,Se/Y.locationSize*ee*Ve,K)}}else if(O!==void 0){const j=O[J];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(Y.location,j);break;case 3:r.vertexAttrib3fv(Y.location,j);break;case 4:r.vertexAttrib4fv(Y.location,j);break;default:r.vertexAttrib1fv(Y.location,j)}}}}S()}function y(){T();for(const L in n){const D=n[L];for(const k in D){const I=D[k];for(const B in I){const $=I[B];for(const O in $)u($[O].object),delete $[O];delete I[B]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const k in D){const I=D[k];for(const B in I){const $=I[B];for(const O in $)u($[O].object),delete $[O];delete I[B]}}delete n[L.id]}function A(L){for(const D in n){const k=n[D];for(const I in k){const B=k[I];if(B[L.id]===void 0)continue;const $=B[L.id];for(const O in $)u($[O].object),delete $[O];delete B[L.id]}}}function x(L){for(const D in n){const k=n[D],I=L.isInstancedMesh===!0?L.id:0,B=k[I];if(B!==void 0){for(const $ in B){const O=B[$];for(const J in O)u(O[J].object),delete O[J];delete B[$]}delete k[I],Object.keys(k).length===0&&delete n[D]}}}function T(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function wM(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function RM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Si&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ei&&A!==Ni&&!x&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:y,samples:b}}function CM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new pr,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,w=S*4;let M=p.clippingState||null;l.value=M,M=u(g,h,w,f);for(let y=0;y!==w;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=f;w!==_;++w,M+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Us=4,PM=6,DM=20,LM=256,ua=new Em,ad=new $e;let vc=null,Mc=0,Sc=0,yc=!1;const IM=new G,Fr=new G;class od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=IM}=s;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,Mc,Sc),this._renderer.xr.enabled=yc,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Gi,format:Si,colorSpace:_l,depthBuffer:!1},i=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=UM(s)),this._blurMaterial=FM(s,e,t),this._ggxMaterial=NM(s,e,t)}return i}_compileMaterial(e){const t=new Bn(new fn,e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,i,s){const l=new Jn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ad),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new eo,new wh({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(ad),p=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const y=this._cubeSize;As(i,M*y,w>2?y:0,y,y),d.setRenderTarget(i),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ts||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Us?n-g+Us:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,As(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,As(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,ua)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Us?i-this._lodMax+Us:0),h=4*(this._cubeSize-u);As(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,ua)}}function UM(r){const e=[],t=[];let n=r;const i=r-Us+1+PM;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){const S=p%3*2/3-1,w=p>2?0:-1,M=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(M,f*h*p);for(let y=0;y<h;y++){const b=u[y*2]*2-1,A=u[y*2+1]*2-1;p===0?Fr.set(1,A,b):p===1?Fr.set(-b,1,-A):p===2?Fr.set(-b,A,1):p===3?Fr.set(-1,A,-b):p===4?Fr.set(-b,-1,A):Fr.set(b,A,-1),Fr.toArray(_,(p*h+y)*f)}}const m=new fn;m.setAttribute("position",new Ei(g,f)),m.setAttribute("outputDirection",new Ei(_,f)),t.push(new Bn(m,null)),n>Us&&n--}return{lodMeshes:t,sizeLods:e}}function ld(r,e,t){const n=new yi(r,e,t);return n.texture.mapping=Al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function NM(r,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function FM(r,e,t){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:DM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function cd(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function ud(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Am extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new eo(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:er});s.uniforms.tEquirect.value=t;const a=new Bn(i,s),o=t.minFilter;return t.minFilter===Vr&&(t.minFilter=Sn),new B0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function OM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Xl||f===Yl)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Am(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Xl||f===Yl,_=f===ts||f===Zs;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new od(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new od(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Xl?h.mapping=ts:f===Yl&&(h.mapping=Zs),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function BM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Vs("WebGLRenderer: "+n+" extension not supported."),i}}}function zM(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const S=f.array;_=f.version;for(let w=0,M=S.length;w<M;w+=3){const y=S[w+0],b=S[w+1],A=S[w+2];h.push(y,b,b,A,A,y)}}else{const S=g.array;_=g.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const y=w+0,b=w+1,A=w+2;h.push(y,b,b,A,A,y)}}const m=new(g.count>=65535?_m:mm)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function kM(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function GM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function VM(r,e,t){const n=new WeakMap,i=new Nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*b*4*d),x=new dm(A,y,b,d);x.type=Ni,x.needsUpdate=!0;const T=M*4;for(let L=0;L<d;L++){const D=p[L],k=S[L],I=w[L],B=y*b*4*L;for(let $=0;$<D.count;$++){const O=$*T;g===!0&&(i.fromBufferAttribute(D,$),A[B+O+0]=i.x,A[B+O+1]=i.y,A[B+O+2]=i.z,A[B+O+3]=0),_===!0&&(i.fromBufferAttribute(k,$),A[B+O+4]=i.x,A[B+O+5]=i.y,A[B+O+6]=i.z,A[B+O+7]=0),m===!0&&(i.fromBufferAttribute(I,$),A[B+O+8]=i.x,A[B+O+9]=i.y,A[B+O+10]=i.z,A[B+O+11]=I.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new je(y,b)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function HM(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const WM={[Qp]:"LINEAR_TONE_MAPPING",[jp]:"REINHARD_TONE_MAPPING",[em]:"CINEON_TONE_MAPPING",[mh]:"ACES_FILMIC_TONE_MAPPING",[nm]:"AGX_TONE_MAPPING",[im]:"NEUTRAL_TONE_MAPPING",[tm]:"CUSTOM_TONE_MAPPING"};function XM(r,e,t,n,i,s){const a=new yi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new fn;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const u=new L0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Bn(c,u),h=new Em(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,S=[],w=!1;this.setSize=function(M,y){a.setSize(M,y),o!==null&&o.setSize(M,y),l!==null&&l.setSize(M,y);for(let b=0;b<S.length;b++){const A=S[b];A.setSize&&A.setSize(M,y)}},this.setEffects=function(M){S=M,w=S.length>0&&S[0].isRenderPass===!0;const y=a.width,b=a.height;S.length>0&&o===null&&(o=new yi(y,b,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new yi(y,b,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const x=S[A];x.setSize&&x.setSize(y,b)}},this.begin=function(M,y){if(_||M.toneMapping===Bi&&S.length===0)return!1;if(p=y,y!==null){const b=y.width,A=y.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return w===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Bi,!0},this.hasRenderPass=function(){return w},this.end=function(M,y){M.toneMapping=m,_=!0;let b=a,A=o;for(let x=0;x<S.length;x++){const T=S[x];T.enabled!==!1&&(T.render(M,A,b,y),T.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,u.defines={},lt.getTransfer(f)===_t&&(u.defines.SRGB_TRANSFER="");const x=WM[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const wm=new En,ku=new Ka(1,1),Rm=new dm,Cm=new a0,Pm=new xm,hd=[],fd=[],dd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function js(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=hd[i];if(s===void 0&&(s=new Float32Array(i),hd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pl(r,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function YM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function KM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function ZM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;md.set(n),r.uniformMatrix2fv(this.addr,!1,md),tn(t,n)}}function JM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;pd.set(n),r.uniformMatrix3fv(this.addr,!1,pd),tn(t,n)}}function QM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;dd.set(n),r.uniformMatrix4fv(this.addr,!1,dd),tn(t,n)}}function jM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function eS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function tS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function nS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function iS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function sS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function aS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function oS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ku.compareFunction=t.isReversedDepthBuffer()?Eh:yh,s=ku):s=wm,t.setTexture2D(e||s,i)}function lS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cm,i)}function cS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pm,i)}function uS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rm,i)}function hS(r){switch(r){case 5126:return YM;case 35664:return qM;case 35665:return $M;case 35666:return KM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return jM;case 35667:case 35671:return eS;case 35668:case 35672:return tS;case 35669:case 35673:return nS;case 5125:return iS;case 36294:return rS;case 36295:return sS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return oS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return cS;case 36289:case 36303:case 36311:case 36292:return uS}}function fS(r,e){r.uniform1fv(this.addr,e)}function dS(r,e){const t=js(e,this.size,2);r.uniform2fv(this.addr,t)}function pS(r,e){const t=js(e,this.size,3);r.uniform3fv(this.addr,t)}function mS(r,e){const t=js(e,this.size,4);r.uniform4fv(this.addr,t)}function _S(r,e){const t=js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function gS(r,e){const t=js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xS(r,e){const t=js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vS(r,e){r.uniform1iv(this.addr,e)}function MS(r,e){r.uniform2iv(this.addr,e)}function SS(r,e){r.uniform3iv(this.addr,e)}function yS(r,e){r.uniform4iv(this.addr,e)}function ES(r,e){r.uniform1uiv(this.addr,e)}function TS(r,e){r.uniform2uiv(this.addr,e)}function bS(r,e){r.uniform3uiv(this.addr,e)}function AS(r,e){r.uniform4uiv(this.addr,e)}function wS(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ku:a=wm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function RS(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cm,s[a])}function CS(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pm,s[a])}function PS(r,e,t){const n=this.cache,i=e.length,s=Pl(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Rm,s[a])}function DS(r){switch(r){case 5126:return fS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return _S;case 35675:return gS;case 35676:return xS;case 5124:case 35670:return vS;case 35667:case 35671:return MS;case 35668:case 35672:return SS;case 35669:case 35673:return yS;case 5125:return ES;case 36294:return TS;case 36295:return bS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return RS;case 35680:case 36300:case 36308:case 36293:return CS;case 36289:case 36303:case 36311:case 36292:return PS}}class LS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}}class IS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DS(t.type)}}class US{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function _d(r,e){r.seq.push(e),r.map[e.id]=e}function NS(r,e,t){const n=r.name,i=n.length;for(Ec.lastIndex=0;;){const s=Ec.exec(n),a=Ec.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_d(t,c===void 0?new LS(o,r,e):new IS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new US(o),_d(t,d)),t=d}}}class nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);NS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const FS=37297;let OS=0;function BS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const xd=new qe;function zS(r){lt._getMatrix(xd,lt.workingColorSpace,r);const e=`mat3( ${xd.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case gl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+BS(r.getShaderSource(e),o)}else return s}function kS(r,e){const t=zS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const GS={[Qp]:"Linear",[jp]:"Reinhard",[em]:"Cineon",[mh]:"ACESFilmic",[nm]:"AgX",[im]:"Neutral",[tm]:"Custom"};function VS(r,e){const t=GS[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Go=new G;function HS(){lt.getLuminanceCoefficients(Go);const r=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function XS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ma(r){return r!==""}function Md(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(r){return r.replace(qS,KS)}const $S=new Map;function KS(r,e){let t=Je[e];if(t===void 0){const n=$S.get(e);if(n!==void 0)t=Je[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gu(t)}const ZS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(r){return r.replace(ZS,JS)}function JS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ed(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QS={[Jo]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function jS(r){return QS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ey={[ts]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Al]:"ENVMAP_TYPE_CUBE_UV"};function ty(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ey[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const ny={[Zs]:"ENVMAP_MODE_REFRACTION"};function iy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":ny[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ry={[Jp]:"ENVMAP_BLENDING_MULTIPLY",[Og]:"ENVMAP_BLENDING_MIX",[Bg]:"ENVMAP_BLENDING_ADD"};function sy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ry[r.combine]||"ENVMAP_BLENDING_NONE"}function ay(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function oy(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=jS(t),c=ty(t),u=iy(t),d=sy(t),h=ay(t),f=WS(t),g=XS(s),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Bi?VS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,kS("linearToOutputTexel",t.outputColorSpace),HS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Gu(a),a=Md(a,t),a=Sd(a,t),o=Gu(o),o=Md(o,t),o=Sd(o,t),a=yd(a),o=yd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Af?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+a,M=S+p+o,y=gd(i,i.VERTEX_SHADER,w),b=gd(i,i.FRAGMENT_SHADER,M);i.attachShader(_,y),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(L){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(y)||"",I=i.getShaderInfoLog(b)||"",B=D.trim(),$=k.trim(),O=I.trim();let J=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,b);else{const C=vd(i,y,"vertex"),j=vd(i,b,"fragment");ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+C+`
`+j)}else B!==""?Ge("WebGLProgram: Program Info Log:",B):($===""||O==="")&&(Y=!1);Y&&(L.diagnostics={runnable:J,programLog:B,vertexShader:{log:$,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(y),i.deleteShader(b),x=new nl(i,_),T=YS(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,FS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let ly=0;class cy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uy(e),t.set(e,n)),n}}class uy{constructor(e){this.id=ly++,this.code=e,this.usedTimes=0}}function hy(r){return r===ns||r===pl||r===ml}function fy(r,e,t,n,i,s){const a=new bh,o=new cy,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,R,L,D,k){const I=L.fog,B=D.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||$,O),Y=J&&J.mapping===Al?J.image.height:null,C=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=j!==void 0?j.length:0;let ye=0;B.morphAttributes.position!==void 0&&(ye=1),B.morphAttributes.normal!==void 0&&(ye=2),B.morphAttributes.color!==void 0&&(ye=3);let ke,ze,Ve,K;if(C){const Ie=Pi[C];ke=Ie.vertexShader,ze=Ie.fragmentShader}else{ke=x.vertexShader,ze=x.fragmentShader;const Ie=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,Ie,se),Ve=Ie.id,K=se.id}const ee=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Ne=!!x.map,Be=!!x.matcap,Pe=!!J,We=!!x.aoMap,Ke=!!x.lightMap,V=!!x.bumpMap&&x.wireframe===!1,tt=!!x.normalMap,gt=!!x.displacementMap,Dt=!!x.emissiveMap,Xe=!!x.metalnessMap,ft=!!x.roughnessMap,F=x.anisotropy>0,Ct=x.clearcoat>0,He=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,Z=F&&!!x.anisotropyMap,ce=Ct&&!!x.clearcoatMap,ae=Ct&&!!x.clearcoatNormalMap,Q=Ct&&!!x.clearcoatRoughnessMap,ne=v&&!!x.iridescenceMap,fe=v&&!!x.iridescenceThicknessMap,Ae=z&&!!x.sheenColorMap,de=z&&!!x.sheenRoughnessMap,he=!!x.specularMap,le=!!x.specularColorMap,De=!!x.specularIntensityMap,Fe=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,ue=!!x.gradientMap,te=!!x.alphaMap,pe=x.alphaTest>0,xe=!!x.alphaHash,ie=!!x.extensions;let oe=Bi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=r.toneMapping);const re={shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:ze,defines:x.defines,customVertexShaderID:Ve,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:Be,envMap:Pe,envMapMode:Pe&&J.mapping,envMapCubeUVHeight:Y,aoMap:We,lightMap:Ke,bumpMap:V,normalMap:tt,displacementMap:gt,emissiveMap:Dt,normalMapObjectSpace:tt&&x.normalMapType===Gg,normalMapTangentSpace:tt&&x.normalMapType===Uu,packedNormalMap:tt&&x.normalMapType===Uu&&hy(x.normalMap.format),metalnessMap:Xe,roughnessMap:ft,anisotropy:F,anisotropyMap:Z,clearcoat:Ct,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Q,dispersion:He,retroreflection:P,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:he,specularColorMap:le,specularIntensityMap:De,transmission:W,transmissionMap:Fe,thicknessMap:U,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Ia&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:xe,combine:x.combine,mapUv:Ne&&g(x.map.channel),aoMapUv:We&&g(x.aoMap.channel),lightMapUv:Ke&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:tt&&g(x.normalMap.channel),displacementMapUv:gt&&g(x.displacementMap.channel),emissiveMapUv:Dt&&g(x.emissiveMap.channel),metalnessMapUv:Xe&&g(x.metalnessMap.channel),roughnessMapUv:ft&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:Fe&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(tt||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ne||te),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&tt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:ye,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Li,flipSided:x.side===Hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const T=f[x.type];let R;if(T){const L=Pi[T];R=C0.clone(L.uniforms)}else R=x.uniforms;return R}function M(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new oy(r,T,x,i),c.push(R),u.set(T,R)),R}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:A}}function dy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function py(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Td(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let S=r[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},r[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function l(h,f,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);const w=o(h,f,g,_,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(h,f,g,_,m,p){const S=o(h,f,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||py),n.length>1&&n.sort(f||Td),i.length>1&&i.sort(f||Td)}function d(){for(let h=e,f=r.length;h<f;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function my(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new bd,r.set(n,[a])):i>=s.length?(a=new bd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function _y(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function gy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xy=0;function vy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function My(r){const e=new _y,t=gy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const i=new G,s=new Rt,a=new Rt;function o(c){let u=0,d=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,w=0,M=0,y=0,b=0,A=0,x=0,T=0,R=0;c.sort(vy);for(let D=0,k=c.length;D<k;D++){const I=c[D],B=I.color,$=I.intensity,O=I.distance;let J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ns?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*$,d+=B.g*$,h+=B.b*$;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],$);R++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=J;const Se=C.getViewportCount();for(let ye=0;ye<Se;ye++)n.sunShadowMatrix[_+ye]=C.getMatrix(ye),n.sunShadowCascade[_+ye]=C._cascadeData[ye];_+=Se,g++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=I.shadow.matrix,y++}n.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar($),Y.distance=O,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[S]=Y;const C=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,C.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[S]=C.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,n.spotShadow[S]=j,n.spotShadowMap[S]=J,A++}S++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(B).multiplyScalar($),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=Y,w++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const C=I.shadow,j=t.get(I);j.shadowIntensity=C.intensity,j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=J,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=Y,p++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar($),Y.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[M]=Y,M++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==w||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=w,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=R,n.version=xy++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const M=c[S];if(M.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),d++}else if(M.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(M.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Ad(r){const e=new My(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Sy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ad(r),e.set(i,[o])):s>=a.length?(o=new Ad(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ty=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],by=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],wd=new Rt,ha=new G,Tc=new G;function Ay(r,e,t){let n=new Rh;const i=new je,s=new je,a=new Nt,o=new I0,l=new U0,c={},u=t.maxTextureSize,d={[es]:Hn,[Hn]:es,[Li]:Li},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:yy,fragmentShader:Ey}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new fn;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let p=this.type;this.render=function(b,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===xg&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jo);const T=r.getRenderTarget(),R=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(er),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=p!==this.type;k&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=b.length;I<B;I++){const $=b[I],O=$.shadow;if(O===void 0){Ge("WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const J=O.getFrameExtents();i.multiply(J),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,O.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=Y,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===va){if($.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new yi(i.x,i.y,{format:ns,type:Gi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),O.map.texture.name=$.name+".shadowMap",O.map.depthTexture=new Ka(i.x,i.y,Ni),O.map.depthTexture.name=$.name+".shadowMapDepth",O.map.depthTexture.format=rr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un}else $.isPointLight?(O.map=new Am(i.x),O.map.depthTexture=new w0(i.x,ki)):(O.map=new yi(i.x,i.y),O.map.depthTexture=new Ka(i.x,i.y,ki)),O.map.depthTexture.name=$.name+".shadowMap",O.map.depthTexture.format=rr,this.type===Jo?(O.map.depthTexture.compareFunction=Y?Eh:yh,O.map.depthTexture.minFilter=Sn,O.map.depthTexture.magFilter=Sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=un,O.map.depthTexture.magFilter=un);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);const C=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();$.isPointLight!==!0&&O.updateMatrices($,x);for(let j=0;j<C;j++){const Se=O.getCamera(j);if($.isPointLight){const ye=O.camera,ke=O.matrix,ze=$.distance||ye.far;ze!==ye.far&&(ye.far=ze,ye.updateProjectionMatrix()),ha.setFromMatrixPosition($.matrixWorld),ye.position.copy(ha),Tc.copy(ye.position),Tc.add(Ty[j]),ye.up.copy(by[j]),ye.lookAt(Tc),ye.updateMatrixWorld(),ke.makeTranslation(-ha.x,-ha.y,-ha.z),wd.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),O._frustum.setFromProjectionMatrix(wd,ye.coordinateSystem,ye.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,j),r.clear();else{j===0&&(r.setRenderTarget(O.map),r.clear());const ye=O.getViewport(j);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),D.viewport(a)}n=O.getFrustum(j),M(A,x,Se,$,this.type)}O.isPointLightShadow!==!0&&this.type===va&&S(O,x),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,R,L)};function S(b,A){const x=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new yi(i.x,i.y,{format:ns,type:Gi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,x,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,x,f,_,null)}function w(b,A,x,T){let R=null;const L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,k=A.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let B=I[k];B===void 0&&(B=R.clone(),I[k]=B,A.addEventListener("dispose",y)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,T===va?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=r.properties.get(R);D.light=x}return R}function M(b,A,x,T,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===va)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const k=e.update(b),I=b.material;if(Array.isArray(I)){const B=k.groups;for(let $=0,O=B.length;$<O;$++){const J=B[$],Y=I[J.materialIndex];if(Y&&Y.visible){const C=w(b,Y,T,R);b.onBeforeShadow(r,b,A,x,k,C,J),r.renderBufferDirect(x,null,k,C,b,J),b.onAfterShadow(r,b,A,x,k,C,J)}}}else if(I.visible){const B=w(b,I,T,R);b.onBeforeShadow(r,b,A,x,k,B,null),r.renderBufferDirect(x,null,k,B,b,null),b.onAfterShadow(r,b,A,x,k,B,null)}}const D=b.children;for(let k=0,I=D.length;k<I;k++)M(D[k],A,x,T,R)}function y(b){b.target.removeEventListener("dispose",y);for(const x in c){const T=c[x],R=b.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function wy(r,e){function t(){let U=!1;const ue=new Nt;let te=null;const pe=new Nt(0,0,0,0);return{setMask:function(xe){te!==xe&&!U&&(r.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ie,oe,re,Ie){Ie===!0&&(xe*=re,ie*=re,oe*=re),ue.set(xe,ie,oe,re),pe.equals(ue)===!1&&(r.clearColor(xe,ie,oe,re),pe.copy(ue))},reset:function(){U=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,te=null,pe=null,xe=null;return{setReversed:function(ie){if(ue!==ie){const oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const re=xe;xe=null,this.setClear(re)}},getReversed:function(){return ue},setTest:function(ie){ie?ee(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(ie){te!==ie&&!U&&(r.depthMask(ie),te=ie)},setFunc:function(ie){if(ue&&(ie=jg[ie]),pe!==ie){switch(ie){case Kc:r.depthFunc(r.NEVER);break;case Zc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case Xa:r.depthFunc(r.LEQUAL);break;case Qc:r.depthFunc(r.EQUAL);break;case jc:r.depthFunc(r.GEQUAL);break;case eu:r.depthFunc(r.GREATER);break;case tu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ie}},setLocked:function(ie){U=ie},setClear:function(ie){xe!==ie&&(xe=ie,ue&&(ie=1-ie),r.clearDepth(ie))},reset:function(){U=!1,te=null,pe=null,xe=null,ue=!1}}}function i(){let U=!1,ue=null,te=null,pe=null,xe=null,ie=null,oe=null,re=null,Ie=null;return{setTest:function(se){U||(se?ee(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(se){ue!==se&&!U&&(r.stencilMask(se),ue=se)},setFunc:function(se,Ue,we){(te!==se||pe!==Ue||xe!==we)&&(r.stencilFunc(se,Ue,we),te=se,pe=Ue,xe=we)},setOp:function(se,Ue,we){(ie!==se||oe!==Ue||re!==we)&&(r.stencilOp(se,Ue,we),ie=se,oe=Ue,re=we)},setLocked:function(se){U=se},setClear:function(se){Ie!==se&&(r.clearStencil(se),Ie=se)},reset:function(){U=!1,ue=null,te=null,pe=null,xe=null,ie=null,oe=null,re=null,Ie=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,w=null,M=null,y=null,b=null,A=null,x=new $e(0,0,0),T=0,R=!1,L=null,D=null,k=null,I=null,B=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,J=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=J>=2);let C=null,j={};const Se=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),ke=new Nt().fromArray(Se),ze=new Nt().fromArray(ye);function Ve(U,ue,te,pe){const xe=new Uint8Array(4),ie=r.createTexture();r.bindTexture(U,ie),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<te;oe++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(ue+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ie}const K={};K[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(Xa),V(!1),tt(Ef),ee(r.CULL_FACE),We(er);function ee(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function ge(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Oe(U,ue){return h[U]!==ue?(r.bindFramebuffer(U,ue),h[U]=ue,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ue),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function me(U,ue){let te=g,pe=!1;if(U){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));const xe=U.textures;if(te.length!==xe.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,oe=xe.length;ie<oe;ie++)te[ie]=r.COLOR_ATTACHMENT0+ie;te.length=xe.length,pe=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,pe=!0);pe&&r.drawBuffers(te)}function Ne(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const Be={[Cs]:r.FUNC_ADD,[Mg]:r.FUNC_SUBTRACT,[Sg]:r.FUNC_REVERSE_SUBTRACT};Be[yg]=r.MIN,Be[Eg]=r.MAX;const Pe={[Tg]:r.ZERO,[bg]:r.ONE,[Ag]:r.SRC_COLOR,[Kp]:r.SRC_ALPHA,[Lg]:r.SRC_ALPHA_SATURATE,[Pg]:r.DST_COLOR,[Rg]:r.DST_ALPHA,[wg]:r.ONE_MINUS_SRC_COLOR,[Zp]:r.ONE_MINUS_SRC_ALPHA,[Dg]:r.ONE_MINUS_DST_COLOR,[Cg]:r.ONE_MINUS_DST_ALPHA,[Ig]:r.CONSTANT_COLOR,[Ug]:r.ONE_MINUS_CONSTANT_COLOR,[Ng]:r.CONSTANT_ALPHA,[Fg]:r.ONE_MINUS_CONSTANT_ALPHA};function We(U,ue,te,pe,xe,ie,oe,re,Ie,se){if(U===er){m===!0&&(ge(r.BLEND),m=!1);return}if(m===!1&&(ee(r.BLEND),m=!0),U!==vg){if(U!==p||se!==R){if((S!==Cs||y!==Cs)&&(r.blendEquation(r.FUNC_ADD),S=Cs,y=Cs),se)switch(U){case Ia:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ua:r.blendFunc(r.ONE,r.ONE);break;case Tf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ht("WebGLState: Invalid blending: ",U);break}else switch(U){case Ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ua:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Tf:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bf:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",U);break}w=null,M=null,b=null,A=null,x.set(0,0,0),T=0,p=U,R=se}return}xe=xe||ue,ie=ie||te,oe=oe||pe,(ue!==S||xe!==y)&&(r.blendEquationSeparate(Be[ue],Be[xe]),S=ue,y=xe),(te!==w||pe!==M||ie!==b||oe!==A)&&(r.blendFuncSeparate(Pe[te],Pe[pe],Pe[ie],Pe[oe]),w=te,M=pe,b=ie,A=oe),(re.equals(x)===!1||Ie!==T)&&(r.blendColor(re.r,re.g,re.b,Ie),x.copy(re),T=Ie),p=U,R=!1}function Ke(U,ue){U.side===Li?ge(r.CULL_FACE):ee(r.CULL_FACE);let te=U.side===Hn;ue&&(te=!te),V(te),U.blending===Ia&&U.transparent===!1?We(er):We(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(U){L!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),L=U)}function tt(U){U!==_g?(ee(r.CULL_FACE),U!==D&&(U===Ef?r.cullFace(r.BACK):U===gg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),D=U}function gt(U){U!==k&&(O&&r.lineWidth(U),k=U)}function Dt(U,ue,te){U?(ee(r.POLYGON_OFFSET_FILL),(I!==ue||B!==te)&&(I=ue,B=te,a.getReversed()&&(ue=-ue),r.polygonOffset(ue,te))):ge(r.POLYGON_OFFSET_FILL)}function Xe(U){U?ee(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function ft(U){U===void 0&&(U=r.TEXTURE0+$-1),C!==U&&(r.activeTexture(U),C=U)}function F(U,ue,te){te===void 0&&(C===null?te=r.TEXTURE0+$-1:te=C);let pe=j[te];pe===void 0&&(pe={type:void 0,texture:void 0},j[te]=pe),(pe.type!==U||pe.texture!==ue)&&(C!==te&&(r.activeTexture(te),C=te),r.bindTexture(U,ue||K[U]),pe.type=U,pe.texture=ue)}function Ct(){const U=j[C];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function He(){try{r.compressedTexImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function v(){try{r.texSubImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function z(){try{r.texSubImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function ce(){try{r.texStorage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function ae(){try{r.texStorage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function Q(){try{r.texImage2D(...arguments)}catch(U){ht("WebGLState:",U)}}function ne(){try{r.texImage3D(...arguments)}catch(U){ht("WebGLState:",U)}}function fe(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function Ae(U,ue){d[U]!==ue&&(r.pixelStorei(U,ue),d[U]=ue)}function de(U){ke.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function he(U){ze.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function le(U,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(U);pe===void 0&&(pe=r.getUniformBlockIndex(ue,U.name),te.set(U,pe))}function De(U,ue){const pe=c.get(ue).get(U);l.get(ue)!==pe&&(r.uniformBlockBinding(ue,pe,U.__bindingPointIndex),l.set(ue,pe))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},C=null,j={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,w=null,M=null,y=null,b=null,A=null,x=new $e(0,0,0),T=0,R=!1,L=null,D=null,k=null,I=null,B=null,ke.set(0,0,r.canvas.width,r.canvas.height),ze.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ge,bindFramebuffer:Oe,drawBuffers:me,useProgram:Ne,setBlending:We,setMaterial:Ke,setFlipSided:V,setCullFace:tt,setLineWidth:gt,setPolygonOffset:Dt,setScissorTest:Xe,activeTexture:ft,bindTexture:F,unbindTexture:Ct,compressedTexImage2D:He,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:Ae,getParameter:fe,updateUBOMapping:le,uniformBlockBinding:De,texStorage2D:ce,texStorage3D:ae,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:de,viewport:he,reset:Fe}}function Ry(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return g?new OffscreenCanvas(P,v):xl("canvas")}function m(P,v,z){let W=1;const Z=He(P);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(W*Z.width),ae=Math.floor(W*Z.height);h===void 0&&(h=_(ce,ae));const Q=v?_(ce,ae):h;return Q.width=ce,Q.height=ae,Q.getContext("2d").drawImage(P,0,0,ce,ae),Ge("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+ae+")."),Q}else return"data"in P&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function p(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(P,v,z,W,Z,ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===r.RED&&(z===r.FLOAT&&(Q=r.R32F),z===r.HALF_FLOAT&&(Q=r.R16F),z===r.UNSIGNED_BYTE&&(Q=r.R8),z===r.UNSIGNED_SHORT&&ae&&(Q=ae.R16_EXT),z===r.SHORT&&ae&&(Q=ae.R16_SNORM_EXT)),v===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.R8UI),z===r.UNSIGNED_SHORT&&(Q=r.R16UI),z===r.UNSIGNED_INT&&(Q=r.R32UI),z===r.BYTE&&(Q=r.R8I),z===r.SHORT&&(Q=r.R16I),z===r.INT&&(Q=r.R32I)),v===r.RG&&(z===r.FLOAT&&(Q=r.RG32F),z===r.HALF_FLOAT&&(Q=r.RG16F),z===r.UNSIGNED_BYTE&&(Q=r.RG8),z===r.UNSIGNED_SHORT&&ae&&(Q=ae.RG16_EXT),z===r.SHORT&&ae&&(Q=ae.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RG8UI),z===r.UNSIGNED_SHORT&&(Q=r.RG16UI),z===r.UNSIGNED_INT&&(Q=r.RG32UI),z===r.BYTE&&(Q=r.RG8I),z===r.SHORT&&(Q=r.RG16I),z===r.INT&&(Q=r.RG32I)),v===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),z===r.UNSIGNED_INT&&(Q=r.RGB32UI),z===r.BYTE&&(Q=r.RGB8I),z===r.SHORT&&(Q=r.RGB16I),z===r.INT&&(Q=r.RGB32I)),v===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),z===r.UNSIGNED_INT&&(Q=r.RGBA32UI),z===r.BYTE&&(Q=r.RGBA8I),z===r.SHORT&&(Q=r.RGBA16I),z===r.INT&&(Q=r.RGBA32I)),v===r.RGB&&(z===r.UNSIGNED_SHORT&&ae&&(Q=ae.RGB16_EXT),z===r.SHORT&&ae&&(Q=ae.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),v===r.RGBA){const ne=ce?gl:lt.getTransfer(Z);z===r.FLOAT&&(Q=r.RGBA32F),z===r.HALF_FLOAT&&(Q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Q=ne===_t?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ae&&(Q=ae.RGBA16_EXT),z===r.SHORT&&ae&&(Q=ae.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(P,v){let z;return P?v===null||v===ki||v===qa?z=r.DEPTH24_STENCIL8:v===Ni?z=r.DEPTH32F_STENCIL8:v===Ya&&(z=r.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ki||v===qa?z=r.DEPTH_COMPONENT24:v===Ni?z=r.DEPTH_COMPONENT32F:v===Ya&&(z=r.DEPTH_COMPONENT16),z}function b(P,v){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function A(P){const v=P.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(P){const v=P.target;v.removeEventListener("dispose",x),L(v)}function T(P){const v=n.get(P);if(v.__webglInit===void 0)return;const z=P.source,W=f.get(z);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(P),Object.keys(W).length===0&&f.delete(z)}n.remove(P)}function R(P){const v=n.get(P);r.deleteTexture(v.__webglTexture);const z=P.source,W=f.get(z);delete W[v.__cacheKey],a.memory.textures--}function L(P){const v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)r.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else r.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)r.deleteFramebuffer(v.__webglFramebuffer[W]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=P.textures;for(let W=0,Z=z.length;W<Z;W++){const ce=n.get(z[W]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(z[W])}n.remove(P)}let D=0;function k(){D=0}function I(){return D}function B(P){D=P}function $(){const P=D;return P>=i.maxTextures&&Ge("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function O(P){const v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function J(P,v){const z=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const W=P.image;if(W===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,P,v);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+v)}function Y(P,v){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ge(z,P,v);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+v)}function C(P,v){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){ge(z,P,v);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+v)}function j(P,v){const z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Oe(z,P,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+v)}const Se={[nu]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[iu]:r.MIRRORED_REPEAT},ye={[un]:r.NEAREST,[zg]:r.NEAREST_MIPMAP_NEAREST,[_o]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[ql]:r.LINEAR_MIPMAP_NEAREST,[Vr]:r.LINEAR_MIPMAP_LINEAR},ke={[Hg]:r.NEVER,[$g]:r.ALWAYS,[Wg]:r.LESS,[yh]:r.LEQUAL,[Xg]:r.EQUAL,[Eh]:r.GEQUAL,[Yg]:r.GREATER,[qg]:r.NOTEQUAL};function ze(P,v){if(v.type===Ni&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===ql||v.magFilter===_o||v.magFilter===Vr||v.minFilter===Sn||v.minFilter===ql||v.minFilter===_o||v.minFilter===Vr)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Se[v.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[v.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[v.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,ye[v.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==_o&&v.minFilter!==Vr||v.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(P,v){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",A));const W=v.source;let Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));const ce=O(v);if(ce!==P.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[ce].usedTimes++;const ae=Z[P.__cacheKey];ae!==void 0&&(Z[P.__cacheKey].usedTimes--,ae.usedTimes===0&&R(v)),P.__cacheKey=ce,P.__webglTexture=Z[ce].texture}return z}function K(P,v,z){return Math.floor(Math.floor(P/z)/v)}function ee(P,v,z,W){const ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,z,W,v.data);else{ce.sort((Ae,de)=>Ae.start-de.start);let ae=0;for(let Ae=1;Ae<ce.length;Ae++){const de=ce[ae],he=ce[Ae],le=de.start+de.count,De=K(he.start,v.width,4),Fe=K(de.start,v.width,4);he.start<=le+1&&De===Fe&&K(he.start+he.count-1,v.width,4)===De?de.count=Math.max(de.count,he.start+he.count-de.start):(++ae,ce[ae]=he)}ce.length=ae+1;const Q=t.getParameter(r.UNPACK_ROW_LENGTH),ne=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ae=0,de=ce.length;Ae<de;Ae++){const he=ce[Ae],le=Math.floor(he.start/4),De=Math.ceil(he.count/4),Fe=le%v.width,U=Math.floor(le/v.width),ue=De,te=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Fe,U,ue,te,z,W,v.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function ge(P,v,z){let W=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=r.TEXTURE_3D);const Z=Ve(P,v),ce=v.source;t.bindTexture(W,P.__webglTexture,r.TEXTURE0+z);const ae=n.get(ce);if(ce.version!==ae.__version||Z===!0){if(t.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const te=lt.getPrimaries(lt.workingColorSpace),pe=v.colorSpace===mr?null:lt.getPrimaries(v.colorSpace),xe=v.colorSpace===mr||te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=m(v.image,!1,i.maxTextureSize);ne=Ct(v,ne);const fe=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type);let de=M(v.internalFormat,fe,Ae,v.normalized,v.colorSpace,v.isVideoTexture);ze(W,v);let he;const le=v.mipmaps,De=v.isVideoTexture!==!0,Fe=ae.__version===void 0||Z===!0,U=ce.dataReady,ue=b(v,ne);if(v.isDepthTexture)de=y(v.format===Hr,v.type),Fe&&(De?t.texStorage2D(r.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ae,null));else if(v.isDataTexture)if(le.length>0){De&&Fe&&t.texStorage2D(r.TEXTURE_2D,ue,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)he=le[te],De?U&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,fe,Ae,he.data):t.texImage2D(r.TEXTURE_2D,te,de,he.width,he.height,0,fe,Ae,he.data);v.generateMipmaps=!1}else De?(Fe&&t.texStorage2D(r.TEXTURE_2D,ue,de,ne.width,ne.height),U&&ee(v,ne,fe,Ae)):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ae,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){De&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,de,le[0].width,le[0].height,ne.depth);for(let te=0,pe=le.length;te<pe;te++)if(he=le[te],v.format!==Si)if(fe!==null)if(De){if(U)if(v.layerUpdates.size>0){const xe=sd(he.width,he.height,v.format,v.type);for(const ie of v.layerUpdates){const oe=he.data.subarray(ie*xe/he.data.BYTES_PER_ELEMENT,(ie+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,ie,he.width,he.height,1,fe,oe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,fe,he.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,de,he.width,he.height,ne.depth,0,he.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,fe,Ae,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,de,he.width,he.height,ne.depth,0,fe,Ae,he.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{De&&Fe&&t.texStorage2D(r.TEXTURE_2D,ue,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)he=le[te],v.format!==Si?fe!==null?De?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(r.TEXTURE_2D,te,de,he.width,he.height,0,he.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?U&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he.width,he.height,fe,Ae,he.data):t.texImage2D(r.TEXTURE_2D,te,de,he.width,he.height,0,fe,Ae,he.data)}else if(v.isDataArrayTexture)if(De){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,de,ne.width,ne.height,ne.depth),U)if(v.layerUpdates.size>0){const te=sd(ne.width,ne.height,v.format,v.type);for(const pe of v.layerUpdates){const xe=ne.data.subarray(pe*te/ne.data.BYTES_PER_ELEMENT,(pe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,fe,Ae,xe)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ae,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,fe,Ae,ne.data);else if(v.isData3DTexture)De?(Fe&&t.texStorage3D(r.TEXTURE_3D,ue,de,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ae,ne.data)):t.texImage3D(r.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,fe,Ae,ne.data);else if(v.isFramebufferTexture){if(Fe)if(De)t.texStorage2D(r.TEXTURE_2D,ue,de,ne.width,ne.height);else{let te=ne.width,pe=ne.height;for(let xe=0;xe<ue;xe++)t.texImage2D(r.TEXTURE_2D,xe,de,te,pe,0,fe,Ae,null),te>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){const te=r.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(v),te.onpaint=pe=>{const xe=pe.changedElements;for(const ie of d)xe.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ne);else{const xe=r.RGBA,ie=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ie,oe,ne)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(le.length>0){if(De&&Fe){const te=He(le[0]);t.texStorage2D(r.TEXTURE_2D,ue,de,te.width,te.height)}for(let te=0,pe=le.length;te<pe;te++)he=le[te],De?U&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe,Ae,he):t.texImage2D(r.TEXTURE_2D,te,de,fe,Ae,he);v.generateMipmaps=!1}else if(De){if(Fe){const te=He(ne);t.texStorage2D(r.TEXTURE_2D,ue,de,te.width,te.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ae,ne)}else t.texImage2D(r.TEXTURE_2D,0,de,fe,Ae,ne);p(v)&&S(W),ae.__version=ce.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Oe(P,v,z){if(v.image.length!==6)return;const W=Ve(P,v),Z=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);const ce=n.get(Z);if(Z.version!==ce.__version||W===!0){t.activeTexture(r.TEXTURE0+z);const ae=lt.getPrimaries(lt.workingColorSpace),Q=v.colorSpace===mr?null:lt.getPrimaries(v.colorSpace),ne=v.colorSpace===mr||ae===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ae=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!fe&&!Ae?de[ie]=m(v.image[ie],!0,i.maxCubemapSize):de[ie]=Ae?v.image[ie].image:v.image[ie],de[ie]=Ct(v,de[ie]);const he=de[0],le=s.convert(v.format,v.colorSpace),De=s.convert(v.type),Fe=M(v.internalFormat,le,De,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,ue=ce.__version===void 0||W===!0,te=Z.dataReady;let pe=b(v,he);ze(r.TEXTURE_CUBE_MAP,v);let xe;if(fe){U&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,he.width,he.height);for(let ie=0;ie<6;ie++){xe=de[ie].mipmaps;for(let oe=0;oe<xe.length;oe++){const re=xe[oe];v.format!==Si?le!==null?U?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Fe,re.width,re.height,0,re.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,De,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Fe,re.width,re.height,0,le,De,re.data)}}}else{if(xe=v.mipmaps,U&&ue){xe.length>0&&pe++;const ie=He(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ae){U?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,le,De,de[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,de[ie].width,de[ie].height,0,le,De,de[ie].data);for(let oe=0;oe<xe.length;oe++){const Ie=xe[oe].image[ie].image;U?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,Ie.width,Ie.height,le,De,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Fe,Ie.width,Ie.height,0,le,De,Ie.data)}}else{U?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le,De,de[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,le,De,de[ie]);for(let oe=0;oe<xe.length;oe++){const re=xe[oe];U?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,le,De,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Fe,le,De,re.image[ie])}}}p(v)&&S(r.TEXTURE_CUBE_MAP),ce.__version=Z.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function me(P,v,z,W,Z,ce){const ae=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),ne=M(z.internalFormat,ae,Q,z.normalized,z.colorSpace),fe=n.get(v),Ae=n.get(z);if(Ae.__renderTarget=v,!fe.__hasExternalTextures){const de=Math.max(1,v.width>>ce),he=Math.max(1,v.height>>ce);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,ne,de,he,v.depth,0,ae,Q,null):t.texImage2D(Z,ce,ne,de,he,0,ae,Q,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ft(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,Z,Ae.__webglTexture,0,Xe(v)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,Z,Ae.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(P,v,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ce=y(v.stencilBuffer,Z),ae=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe(v),ce,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe(v),ce,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ce,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,P)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const ce=W[Z],ae=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),ne=M(ce.internalFormat,ae,Q,ce.normalized,ce.colorSpace);ft(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xe(v),ne,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe(v),ne,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ne,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(P,v,z){const W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ze(r.TEXTURE_CUBE_MAP,v.depthTexture);const fe=s.convert(v.depthTexture.format),Ae=s.convert(v.depthTexture.type);let de;v.depthTexture.format===rr?de=r.DEPTH_COMPONENT24:v.depthTexture.format===Hr&&(de=r.DEPTH24_STENCIL8);for(let he=0;he<6;he++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,de,v.width,v.height,0,fe,Ae,null)}}else J(v.depthTexture,0);const ce=Z.__webglTexture,ae=Xe(v),Q=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,ne=v.depthTexture.format===Hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===rr)ft(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,ce,0);else if(v.depthTexture.format===Hr)ft(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(P){const v=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)Be(v.__webglFramebuffer[W],P,W);else{const W=P.texture.mipmaps;W&&W.length>0?Be(v.__webglFramebuffer[0],P,0):Be(v.__webglFramebuffer,P,0)}else if(z){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=r.createRenderbuffer(),Ne(v.__webglDepthbuffer[W],P,!1);else{const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ce)}}else{const W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ne(v.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(P,v,z){const W=n.get(P);v!==void 0&&me(W.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Pe(P)}function Ke(P){const v=P.texture,z=n.get(P),W=n.get(v);P.addEventListener("dispose",x);const Z=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=v.version,a.memory.textures++),ce){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let ne=0;ne<v.mipmaps.length;ne++)z.__webglFramebuffer[Q][ne]=r.createFramebuffer()}else z.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)z.__webglFramebuffer[Q]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ae)for(let Q=0,ne=Z.length;Q<ne;Q++){const fe=n.get(Z[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&ft(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<Z.length;Q++){const ne=Z[Q];z.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);const fe=s.convert(ne.format,ne.colorSpace),Ae=s.convert(ne.type),de=M(ne.internalFormat,fe,Ae,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),he=Xe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,de,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),ze(r.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)me(z.__webglFramebuffer[Q][ne],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else me(z.__webglFramebuffer[Q],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(v)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,ne=Z.length;Q<ne;Q++){const fe=Z[Q],Ae=n.get(fe);let de=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ae.__webglTexture),ze(de,fe),me(z.__webglFramebuffer,P,fe,r.COLOR_ATTACHMENT0+Q,de,0),p(fe)&&S(de)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),ze(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)me(z.__webglFramebuffer[ne],P,v,r.COLOR_ATTACHMENT0,Q,ne);else me(z.__webglFramebuffer,P,v,r.COLOR_ATTACHMENT0,Q,0);p(v)&&S(Q),t.unbindTexture()}P.depthBuffer&&Pe(P)}function V(P){const v=P.textures;for(let z=0,W=v.length;z<W;z++){const Z=v[z];if(p(Z)){const ce=w(P),ae=n.get(Z).__webglTexture;t.bindTexture(ce,ae),S(ce),t.unbindTexture()}}}const tt=[],gt=[];function Dt(P){if(P.samples>0){if(ft(P)===!1){const v=P.textures,z=P.width,W=P.height;let Z=r.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(P),Q=v.length>1;if(Q)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const Ae=n.get(v[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,z,W,0,0,z,W,Z,r.NEAREST),l===!0&&(tt.length=0,gt.length=0,tt.push(r.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(tt.push(ce),gt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,gt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);const Ae=n.get(v[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ae,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const v=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Xe(P){return Math.min(i.maxSamples,P.samples)}function ft(P){const v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(P){const v=a.render.frame;u.get(P)!==v&&(u.set(P,v),P.update())}function Ct(P,v){const z=P.colorSpace,W=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==_l&&z!==mr&&(lt.getTransfer(z)===_t?(W!==Si||Z!==ei)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",z)),v}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=C,this.setTextureCube=j,this.rebindTextures=We,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cy(r,e){function t(n,i=mr){let s;const a=lt.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===gh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===xh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===om)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===sm)return r.BYTE;if(n===am)return r.SHORT;if(n===Ya)return r.UNSIGNED_SHORT;if(n===_h)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===Gi)return r.HALF_FLOAT;if(n===cm)return r.ALPHA;if(n===um)return r.RGB;if(n===Si)return r.RGBA;if(n===rr)return r.DEPTH_COMPONENT;if(n===Hr)return r.DEPTH_STENCIL;if(n===hm)return r.RED;if(n===vh)return r.RED_INTEGER;if(n===ns)return r.RG;if(n===Mh)return r.RG_INTEGER;if(n===Sh)return r.RGBA_INTEGER;if(n===Qo||n===jo||n===el||n===tl)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===su||n===au||n===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu||n===hu||n===fu||n===pl||n===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lu||n===cu)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hu)return s.COMPRESSED_R11_EAC;if(n===fu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===pl)return s.COMPRESSED_RG11_EAC;if(n===du)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pu||n===mu||n===_u||n===gu||n===xu||n===vu||n===Mu||n===Su||n===yu||n===Eu||n===Tu||n===bu||n===Au||n===wu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Au)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Cu||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ru)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Lu||n===ml||n===Iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Du)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ly{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new vm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vi({vertexShader:Py,fragmentShader:Dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bn(new Rl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iy extends rs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ly,p={},S=t.getContextAttributes();let w=null,M=null;const y=[],b=[],A=new je;let x=null,T=null;const R=new Jn;R.viewport=new Nt;const L=new Jn;L.viewport=new Nt;const D=[R,L],k=new z0;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=y[K];return ee===void 0&&(ee=new nc,y[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=y[K];return ee===void 0&&(ee=new nc,y[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=y[K];return ee===void 0&&(ee=new nc,y[K]=ee),ee.getHandSpace()};function $(K){const ee=b.indexOf(K.inputSource);if(ee===-1)return;const ge=y[ee];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||a),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",J);for(let K=0;K<y.length;K++){const ee=b[K];ee!==null&&(b[K]=null,y[K].disconnect(ee))}I=null,B=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(w),f=null,h=null,d=null,i=null,M=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",O),i.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Oe=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?Hr:rr,Oe=S.stencil?qa:ki);const Ne={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ne),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new yi(h.textureWidth,h.textureHeight,{format:Si,type:ei,depthTexture:new Ka(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yi(f.framebufferWidth,f.framebufferHeight,{format:Si,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(K){for(let ee=0;ee<K.removed.length;ee++){const ge=K.removed[ee],Oe=b.indexOf(ge);Oe>=0&&(b[Oe]=null,y[Oe].disconnect(ge))}for(let ee=0;ee<K.added.length;ee++){const ge=K.added[ee];let Oe=b.indexOf(ge);if(Oe===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=b.length){b.push(ge),Oe=Ne;break}else if(b[Ne]===null){b[Ne]=ge,Oe=Ne;break}if(Oe===-1)break}const me=y[Oe];me&&me.connect(ge)}}const Y=new G,C=new G;function j(K,ee,ge){Y.setFromMatrixPosition(ee.matrixWorld),C.setFromMatrixPosition(ge.matrixWorld);const Oe=Y.distanceTo(C),me=ee.projectionMatrix.elements,Ne=ge.projectionMatrix.elements,Be=me[14]/(me[10]-1),Pe=me[14]/(me[10]+1),We=(me[9]+1)/me[5],Ke=(me[9]-1)/me[5],V=(me[8]-1)/me[0],tt=(Ne[8]+1)/Ne[0],gt=Be*V,Dt=Be*tt,Xe=Oe/(-V+tt),ft=Xe*-V;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ft),K.translateZ(Xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),me[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const F=Be+Xe,Ct=Pe+Xe,He=gt-ft,P=Dt+(Oe-ft),v=We*Pe/Ct*F,z=Ke*Pe/Ct*F;K.projectionMatrix.makePerspective(He,P,v,z,F,Ct),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Se(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ee=K.near,ge=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),k.near=L.near=R.near=ee,k.far=L.far=R.far=ge,(I!==k.near||B!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,B=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Oe=K.parent,me=k.cameras;Se(k,Oe);for(let Ne=0;Ne<me.length;Ne++)Se(me[Ne],Oe);me.length===2?j(k,R,L):k.projectionMatrix.copy(R.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),ye(K,k,Oe)};function ye(K,ee,ge){ge===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Nu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let ke=null;function ze(K,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){const ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Oe=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let Pe=0;Pe<ge.length;Pe++){const We=ge[Pe];let Ke=null;if(f!==null)Ke=f.getViewport(We);else{const tt=d.getViewSubImage(h,We);Ke=tt.viewport,Pe===0&&(e.setRenderTargetTextures(M,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(M))}let V=D[Pe];V===void 0&&(V=new Jn,V.layers.enable(Pe),V.viewport=new Nt,D[Pe]=V),V.matrix.fromArray(We.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(We.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Pe===0&&(k.matrix.copy(V.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(V)}const me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Pe=d.getDepthInformation(ge[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,i.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<ge.length;Pe++){const We=ge[Pe].camera;if(We){let Ke=p[We];Ke||(Ke=new vm,p[We]=Ke);const V=d.getCameraImage(We);Ke.sourceTexture=V}}}}for(let ge=0;ge<y.length;ge++){const Oe=b[ge],me=y[ge];Oe!==null&&me!==void 0&&me.update(Oe,ee,c||a)}ke&&ke(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Ve=new Tm;Ve.setAnimationLoop(ze),this.setAnimationLoop=function(K){ke=K},this.dispose=function(){}}}const Uy=new Rt,Dm=new qe;Dm.set(-1,0,0,0,1,0,0,0,1);function Ny(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function c(M,y){let b=i[M.id];b===void 0&&(m(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",S));const A=y.program;n.updateUBOMapping(M,A);const x=e.render.frame;s[M.id]!==x&&(h(M),s[M.id]=x)}function u(M){const y=d();M.__bindingPointIndex=y;const b=r.createBuffer(),A=M.__size,x=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],b=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let x=0,T=b.length;x<T;x++){const R=b[x];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)f(R[L],x,L,A);else f(R,x,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,y,b,A){if(_(M,y,b,A)===!0){const x=M.__offset,T=M.value;if(Array.isArray(T)){let R=0;for(let L=0;L<T.length;L++){const D=T[L],k=p(D);g(D,M.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,M.__data)}}function g(M,y,b){typeof M=="number"||typeof M=="boolean"?y[0]=M:M.isMatrix3?(y[0]=M.elements[0],y[1]=M.elements[1],y[2]=M.elements[2],y[3]=0,y[4]=M.elements[3],y[5]=M.elements[4],y[6]=M.elements[5],y[7]=0,y[8]=M.elements[6],y[9]=M.elements[7],y[10]=M.elements[8],y[11]=0):ArrayBuffer.isView(M)?y.set(new M.constructor(M.buffer,M.byteOffset,y.length)):M.toArray(y,b)}function _(M,y,b,A){const x=M.value,T=y+"_"+b;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{const R=A[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(M){const y=M.uniforms;let b=0;const A=16;for(let T=0,R=y.length;T<R;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let D=0,k=L.length;D<k;D++){const I=L[D],B=Array.isArray(I.value)?I.value:[I.value];for(let $=0,O=B.length;$<O;$++){const J=B[$],Y=p(J),C=b%A,j=C%Y.boundary,Se=C+j;b+=j,Se!==0&&A-Se<Y.storage&&(b+=A-Se),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=Y.storage}}}const x=b%A;return x>0&&(b+=A-x),M.__size=b,M.__cache={},this}function p(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),y}function S(M){const y=M.target;y.removeEventListener("dispose",S);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function w(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const Oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function By(){return wi===null&&(wi=new y0(Oy,16,16,ns,Gi),wi.name="DFG_LUT",wi.minFilter=Sn,wi.magFilter=Sn,wi.wrapS=Qi,wi.wrapT=Qi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class zy{constructor(e={}){const{canvas:t=Jg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ei}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,m=new Set([Sh,Mh,vh]),p=new Set([ei,ki,Ya,qa,gh,xh]),S=new Uint32Array(4),w=new Int32Array(4),M=new G;let y=null,b=null;const A=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,D=null,k=null,I=null,B=null;this._outputColorSpace=ui;let $=0,O=0,J=null,Y=-1,C=null;const j=new Nt,Se=new Nt;let ye=null;const ke=new $e(0);let ze=0,Ve=t.width,K=t.height,ee=1,ge=null,Oe=null;const me=new Nt(0,0,Ve,K),Ne=new Nt(0,0,Ve,K);let Be=!1;const Pe=new Rh;let We=!1,Ke=!1;const V=new Rt,tt=new G,gt=new Nt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ft(){return J===null?ee:1}let F=n;function Ct(E,N){return t.getContext(E,N)}let He,P,v,z,W,Z,ce,ae,Q,ne,fe,Ae,de,he,le,De,Fe,U,ue,te,pe,xe,ie;try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ph}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const N="webgl2";if(F=Ct(N,E),F===null)throw Ct(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(E){throw t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ht("WebGLRenderer: "+E.message),E}function oe(){He=new BM(F),He.init(),pe=new Cy(F,He),P=new RM(F,He,e,pe),v=new wy(F,He),P.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),k=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),z=new GM(F),W=new dy,Z=new Ry(F,He,v,W,P,pe,z),ce=new OM(R),ae=new H0(F),xe=new AM(F,ae),Q=new zM(F,ae,z,xe),ne=new HM(F,Q,ae,xe,z),U=new VM(F,P,Z),le=new CM(W),fe=new fy(R,ce,He,P,xe,le),Ae=new Ny(R,W),de=new my,he=new Sy(He),Fe=new bM(R,ce,v,ne,g,l),De=new Ay(R,ne,P),ie=new Fy(F,z,P,v),ue=new wM(F,He,z),te=new kM(F,He,z),z.programs=fe.programs,R.capabilities=P,R.extensions=He,R.properties=W,R.renderLists=de,R.shadowMap=De,R.state=v,R.info=z}_!==ei&&(T=new XM(_,t.width,t.height,o,i,s));const re=new Iy(R,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(Ve,K,!1))},this.getSize=function(E){return E.set(Ve,K)},this.setSize=function(E,N,q=!0){if(re.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=E,K=N,t.width=Math.floor(E*ee),t.height=Math.floor(N*ee),q===!0&&(t.style.width=E+"px",t.style.height=N+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Ve*ee,K*ee).floor()},this.setDrawingBufferSize=function(E,N,q){Ve=E,K=N,ee=q,t.width=Math.floor(E*q),t.height=Math.floor(N*q),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(_===ei){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,N,q,H){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,N,q,H),v.viewport(j.copy(me).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,N,q,H){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,N,q,H),v.scissor(Se.copy(Ne).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(E){v.setScissorTest(Be=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){Oe=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,q=!0){let H=0;if(E){let X=!1;if(J!==null){const _e=J.texture.format;X=m.has(_e)}if(X){const _e=J.texture.type,Te=p.has(_e),Me=Fe.getClearColor(),Re=Fe.getClearAlpha(),Le=Me.r,Ze=Me.g,st=Me.b;Te?(S[0]=Le,S[1]=Ze,S[2]=st,S[3]=Re,F.clearBufferuiv(F.COLOR,0,S)):(w[0]=Le,w[1]=Ze,w[2]=st,w[3]=Re,F.clearBufferiv(F.COLOR,0,w))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Fe.dispose(),de.dispose(),he.dispose(),W.dispose(),ce.dispose(),ne.dispose(),xe.dispose(),ie.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",At),re.removeEventListener("sessionend",vt),ot.stop()};function Ie(E){E.preventDefault(),Rf("WebGLRenderer: Context Lost."),L=!0}function se(){Rf("WebGLRenderer: Context Restored."),L=!1;const E=z.autoReset,N=De.enabled,q=De.autoUpdate,H=De.needsUpdate,X=De.type;oe(),z.autoReset=E,De.enabled=N,De.autoUpdate=q,De.needsUpdate=H,De.type=X}function Ue(E){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function we(E){const N=E.target;N.removeEventListener("dispose",we),Ye(N)}function Ye(E){Wt(E),W.remove(E)}function Wt(E){const N=W.get(E).programs;N!==void 0&&(N.forEach(function(q){fe.releaseProgram(q)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,q,H,X,_e){N===null&&(N=Dt);const Te=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=rn(E,N,q,H,X);v.setMaterial(H,Te);let Re=q.index,Le=1;if(H.wireframe===!0){if(Re=Q.getWireframeAttribute(q),Re===void 0)return;Le=2}const Ze=q.drawRange,st=q.attributes.position;let Ce=Ze.start*Le,dt=(Ze.start+Ze.count)*Le;_e!==null&&(Ce=Math.max(Ce,_e.start*Le),dt=Math.min(dt,(_e.start+_e.count)*Le)),Re!==null?(Ce=Math.max(Ce,0),dt=Math.min(dt,Re.count)):st!=null&&(Ce=Math.max(Ce,0),dt=Math.min(dt,st.count));const Yt=dt-Ce;if(Yt<0||Yt===1/0)return;xe.setup(X,H,Me,q,Re);let wt,Mt=ue;if(Re!==null&&(wt=ae.get(Re),Mt=te,Mt.setIndex(wt)),X.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*ft()),Mt.setMode(F.LINES)):Mt.setMode(F.TRIANGLES);else if(X.isLine){let pn=H.linewidth;pn===void 0&&(pn=1),v.setLineWidth(pn*ft()),X.isLineSegments?Mt.setMode(F.LINES):X.isLineLoop?Mt.setMode(F.LINE_LOOP):Mt.setMode(F.LINE_STRIP)}else X.isPoints?Mt.setMode(F.POINTS):X.isSprite&&Mt.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const pn=X._multiDrawStarts,Ee=X._multiDrawCounts,wn=X._multiDrawCount,ut=Re?ae.get(Re).bytesPerElement:1,oi=W.get(H).currentProgram.getUniforms();for(let bi=0;bi<wn;bi++)oi.setValue(F,"_gl_DrawID",bi),Mt.render(pn[bi]/ut,Ee[bi])}else if(X.isInstancedMesh)Mt.renderInstances(Ce,Yt,X.count);else if(q.isInstancedBufferGeometry){const pn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,pn);Mt.renderInstances(Ce,Yt,Ee)}else Mt.render(Ce,Yt)};function nt(E,N,q,H){D!==null&&E.isNodeMaterial&&D.setObject(H,E),We===!0&&le.setState(E,q,!1),E.transparent===!0&&E.side===Li&&E.forceSinglePass===!1?(E.side=Hn,E.needsUpdate=!0,Ft(E,N,H),E.side=es,E.needsUpdate=!0,Ft(E,N,H),E.side=Li):Ft(E,N,H)}this.compile=function(E,N,q=null){q===null&&(q=E),D!==null&&D.renderStart(E,N,q),b=he.get(q),b.init(N),x.push(b),q.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),E!==q&&E.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Ke=this.localClippingEnabled,We=le.init(this.clippingPlanes,Ke),We===!0&&le.setGlobalState(this.clippingPlanes,N),D!==null&&De.render(b.state.shadowsArray,q,N);const H=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let Te=0;Te<_e.length;Te++){const Me=_e[Te];nt(Me,q,N,X),H.add(Me)}else nt(_e,q,N,X),H.add(_e)}),b=x.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(E,N,q=null){const H=this.compile(E,N,q);return new Promise(X=>{function _e(){if(H.forEach(function(Te){const Re=W.get(Te).currentProgram;(Re===void 0||Re.isReady())&&H.delete(Te)}),H.size===0){X(E);return}setTimeout(_e,10)}He.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let bt=null;function nn(E){bt&&bt(E)}function At(){ot.stop()}function vt(){ot.start()}const ot=new Tm;ot.setAnimationLoop(nn),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(E){bt=E,re.setAnimationLoop(E),E===null?ot.stop():ot.start()},re.addEventListener("sessionstart",At),re.addEventListener("sessionend",vt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,N);const q=re.enabled===!0&&re.isPresenting===!0,H=T!==null&&(J===null||q)&&T.begin(R,J);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,J),b=he.get(E,x.length),b.init(N),b.state.textureUnits=Z.getTextureUnits(),x.push(b),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Pe.setFromProjectionMatrix(V,Fi,N.reversedDepth),Ke=this.localClippingEnabled,We=le.init(this.clippingPlanes,Ke),y=de.get(E,A.length),y.init(),A.push(y),re.enabled===!0&&re.isPresenting===!0){const Te=R.xr.getDepthSensingMesh();Te!==null&&bn(Te,N,-1/0,R.sortObjects)}bn(E,N,0,R.sortObjects),y.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&y.sort(ge,Oe),Xe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Xe&&Fe.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&le.beginShadows();const X=b.state.shadowsArray;if(De.render(X,E,N),We===!0&&le.endShadows(),(H&&T.hasRenderPass())===!1){const Te=y.opaque,Me=y.transmissive;if(b.setupLights(),N.isArrayCamera){const Re=N.cameras;if(Me.length>0)for(let Le=0,Ze=Re.length;Le<Ze;Le++){const st=Re[Le];dn(Te,Me,E,st)}Xe&&Fe.render(E);for(let Le=0,Ze=Re.length;Le<Ze;Le++){const st=Re[Le];Et(y,E,st,st.viewport)}}else Me.length>0&&dn(Te,Me,E,N),Xe&&Fe.render(E),Et(y,E,N)}J!==null&&O===0&&(Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J)),H&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),xe.resetDefaultState(),Y=-1,C=null,x.pop(),x.length>0?(b=x[x.length-1],Z.setTextureUnits(b.state.textureUnits),We===!0&&le.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,D!==null&&D.renderEnd()};function bn(E,N,q,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Pe)){H&&gt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const Te=ne.update(E),Me=E.material;Me.visible&&y.push(E,Te,Me,q,gt.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Pe))){const Te=ne.update(E),Me=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),gt.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),gt.copy(Te.boundingSphere.center)),gt.applyMatrix4(E.matrixWorld).applyMatrix4(V)),Array.isArray(Me)){const Re=Te.groups;for(let Le=0,Ze=Re.length;Le<Ze;Le++){const st=Re[Le],Ce=Me[st.materialIndex];Ce&&Ce.visible&&y.push(E,Te,Ce,q,gt.z,st,N)}}else Me.visible&&y.push(E,Te,Me,q,gt.z,null,N)}}const _e=E.children;for(let Te=0,Me=_e.length;Te<Me;Te++)bn(_e[Te],N,q,H)}function Et(E,N,q,H){const{opaque:X,transmissive:_e,transparent:Te}=E;b.setupLightsView(q),We===!0&&le.setGlobalState(R.clippingPlanes,q),H&&v.viewport(j.copy(H)),X.length>0&&An(X,N,q),_e.length>0&&An(_e,N,q),Te.length>0&&An(Te,N,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function dn(E,N,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ce=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new yi(1,1,{generateMipmaps:!0,type:Ce?Gi:ei,minFilter:Vr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const _e=b.state.transmissionRenderTarget[H.id],Te=H.viewport||j;_e.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);const Me=R.getRenderTarget(),Re=R.getActiveCubeFace(),Le=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(ke),ze=R.getClearAlpha(),ze<1&&R.setClearColor(16777215,.5),R.clear(),Xe&&Fe.render(q);const Ze=R.toneMapping;R.toneMapping=Bi;const st=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),We===!0&&le.setGlobalState(R.clippingPlanes,H),An(E,q,H),Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let dt=0,Yt=N.length;dt<Yt;dt++){const wt=N[dt],{object:Mt,geometry:pn,material:Ee,group:wn}=wt;if(Ee.side===Li&&Mt.layers.test(H.layers)){const ut=Ee.side;Ee.side=Hn,Ee.needsUpdate=!0,Xt(Mt,q,H,pn,Ee,wn),Ee.side=ut,Ee.needsUpdate=!0,Ce=!0}}Ce===!0&&(Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e))}R.setRenderTarget(Me,Re,Le),R.setClearColor(ke,ze),st!==void 0&&(H.viewport=st),R.toneMapping=Ze}function An(E,N,q){const H=N.isScene===!0?N.overrideMaterial:null;for(let X=0,_e=E.length;X<_e;X++){const Te=E[X],{object:Me,geometry:Re,group:Le}=Te;let Ze=Te.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),Me.layers.test(q.layers)&&Xt(Me,N,q,Re,Ze,Le)}}function Xt(E,N,q,H,X,_e){D!==null&&X.isNodeMaterial&&D.setObject(E,X),E.onBeforeRender(R,N,q,H,X,_e),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(R,N,q,H,E,_e),X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=Hn,X.needsUpdate=!0,R.renderBufferDirect(q,N,H,X,E,_e),X.side=es,X.needsUpdate=!0,R.renderBufferDirect(q,N,H,X,E,_e),X.side=Li):R.renderBufferDirect(q,N,H,X,E,_e),E.onAfterRender(R,N,q,H,X,_e)}function Ft(E,N,q){N.isScene!==!0&&(N=Dt);const H=W.get(E),X=b.state.lights,_e=b.state.shadowsArray,Te=X.state.version,Me=fe.getParameters(E,X.state,_e,N,q,b.state.lightProbeGridArray),Re=fe.getProgramCacheKey(Me);let Le=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=ce.get(E.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",we),Le=new Map,H.programs=Le);let st=Le.get(Re);if(st!==void 0){if(H.currentProgram===st&&H.lightsStateVersion===Te)return Ti(E,Me),st}else Me.uniforms=fe.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,q,Me),E.onBeforeCompile(Me,R),st=fe.acquireProgram(Me,Re),Le.set(Re,st),H.uniforms=Me.uniforms;const Ce=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=le.uniform),Ti(E,Me),H.needsLights=ai(E),H.lightsStateVersion=Te,H.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.sunLights.value=X.state.sun,Ce.sunLightShadows.value=X.state.sunShadow,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.sunShadowMatrix.value=X.state.sunShadowMatrix,Ce.sunShadowCascade.value=X.state.sunShadowCascade,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=st,H.uniformsList=null,st}function Jt(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=nl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ti(E,N){const q=W.get(E);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function as(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let q=0,H=E.length;q<H;q++){const X=E[q];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function rn(E,N,q,H,X){N.isScene!==!0&&(N=Dt),Z.resetTextureUnits();const _e=N.fog,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,Me=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:lt.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Le=ce.get(H.envMap||Te,Re),Ze=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,st=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,Yt=!!q.morphAttributes.color;let wt=Bi;H.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(wt=R.toneMapping);const Mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pn=Mt!==void 0?Mt.length:0,Ee=W.get(H),wn=b.state.lights;if(We===!0&&(Ke===!0||E!==C)){const Tt=E===C&&H.id===Y;le.setState(H,E,Tt)}let ut=!1;H.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==wn.state.version||Ee.outputColorSpace!==Me||X.isBatchedMesh&&Ee.batching===!1||!X.isBatchedMesh&&Ee.batching===!0||X.isBatchedMesh&&Ee.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ee.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ee.instancing===!1||!X.isInstancedMesh&&Ee.instancing===!0||X.isSkinnedMesh&&Ee.skinning===!1||!X.isSkinnedMesh&&Ee.skinning===!0||X.isInstancedMesh&&Ee.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ee.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ee.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ee.instancingMorph===!1&&X.morphTexture!==null||Ee.envMap!==Le||H.fog===!0&&Ee.fog!==_e||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==le.numPlanes||Ee.numIntersection!==le.numIntersection)||Ee.vertexAlphas!==Ze||Ee.vertexTangents!==st||Ee.morphTargets!==Ce||Ee.morphNormals!==dt||Ee.morphColors!==Yt||Ee.toneMapping!==wt||Ee.morphTargetsCount!==pn||!!Ee.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Ee.__version=H.version);let oi=Ee.currentProgram;ut===!0&&(oi=Ft(H,N,X),D&&H.isNodeMaterial&&D.onUpdateProgram(H,oi,Ee));let bi=!1,sr=!1,ls=!1;const xt=oi.getUniforms(),kt=Ee.uniforms;if(v.useProgram(oi.program)&&(bi=!0,sr=!0,ls=!0),H.id!==Y&&(Y=H.id,sr=!0),Ee.needsLights){const Tt=as(b.state.lightProbeGridArray,X);Ee.lightProbeGrid!==Tt&&(Ee.lightProbeGrid=Tt,sr=!0)}if(bi||C!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",E.projectionMatrix),xt.setValue(F,"viewMatrix",E.matrixWorldInverse);const or=xt.map.cameraPosition;or!==void 0&&or.setValue(F,tt.setFromMatrixPosition(E.matrixWorld)),P.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),C!==E&&(C=E,sr=!0,ls=!0)}if(Ee.needsLights&&(wn.state.sunShadowMap.length>0&&xt.setValue(F,"sunShadowMap",wn.state.sunShadowMap,Z),wn.state.directionalShadowMap.length>0&&xt.setValue(F,"directionalShadowMap",wn.state.directionalShadowMap,Z),wn.state.spotShadowMap.length>0&&xt.setValue(F,"spotShadowMap",wn.state.spotShadowMap,Z),wn.state.pointShadowMap.length>0&&xt.setValue(F,"pointShadowMap",wn.state.pointShadowMap,Z)),X.isSkinnedMesh){xt.setOptional(F,X,"bindMatrix"),xt.setOptional(F,X,"bindMatrixInverse");const Tt=X.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),xt.setValue(F,"boneTexture",Tt.boneTexture,Z))}X.isBatchedMesh&&(xt.setOptional(F,X,"batchingTexture"),xt.setValue(F,"batchingTexture",X._matricesTexture,Z),xt.setOptional(F,X,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",X._indirectTexture,Z),xt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",X._colorsTexture,Z));const ar=q.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&U.update(X,q,oi),(sr||Ee.receiveShadow!==X.receiveShadow)&&(Ee.receiveShadow=X.receiveShadow,xt.setValue(F,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(kt.envMapIntensity.value=N.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=By()),sr){if(xt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ee.needsLights&&zt(kt,ls),_e&&H.fog===!0&&Ae.refreshFogUniforms(kt,_e),Ae.refreshMaterialUniforms(kt,H,ee,K,b.state.transmissionRenderTarget[E.id]),Ee.needsLights&&Ee.lightProbeGrid){const Tt=Ee.lightProbeGrid;kt.probesSH.value=Tt.texture,kt.probesMin.value.copy(Tt.boundingBox.min),kt.probesMax.value.copy(Tt.boundingBox.max),kt.probesResolution.value.copy(Tt.resolution)}nl.upload(F,Jt(Ee),kt,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(nl.upload(F,Jt(Ee),kt,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(F,"center",X.center),xt.setValue(F,"modelViewMatrix",X.modelViewMatrix),xt.setValue(F,"normalMatrix",X.normalMatrix),xt.setValue(F,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){const Tt=H.uniformsGroups;for(let or=0,cs=Tt.length;or<cs;or++){const zh=Tt[or];ie.update(zh,oi),ie.bind(zh,oi)}}return oi}function zt(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function ai(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(E,N,q){const H=W.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=N,W.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const q=W.get(E);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,q=0){J=E,$=N,O=q;let H=null,X=!1,_e=!1;if(E){const Me=W.get(E);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),j.copy(E.viewport),Se.copy(E.scissor),ye=E.scissorTest,v.viewport(j),v.scissor(Se),v.setScissorTest(ye),Y=-1;return}else if(Me.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Me.__hasExternalTextures)Z.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ze=E.depthTexture;if(Me.__boundDepthTexture!==Ze){if(Ze!==null&&W.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(_e=!0);const Le=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?H=Le[N][q]:H=Le[N],X=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?H=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[q]:H=Le,j.copy(E.viewport),Se.copy(E.scissor),ye=E.scissorTest}else j.copy(me).multiplyScalar(ee).floor(),Se.copy(Ne).multiplyScalar(ee).floor(),ye=Be;if(q!==0&&(H=k),v.bindFramebuffer(F.FRAMEBUFFER,H)&&v.drawBuffers(E,H),v.viewport(j),v.scissor(Se),v.setScissorTest(ye),X){const Me=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,q)}else if(_e){const Me=N;for(let Re=0;Re<E.textures.length;Re++){const Le=W.get(E.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,Le.__webglTexture,q,Me)}}else if(E!==null&&q!==0){const Me=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,q)}Y=-1};function os(E){const N=W.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=P.textureFormatReadable(E.format),N.__typeReadable=P.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,q,H,X,_e,Te,Me=0){if(!(E&&E.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){v.bindFramebuffer(F.FRAMEBUFFER,Re);try{const Le=E.textures[Me],Ze=Le.format,st=Le.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);const Ce=os(Le);if(Ce.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&q>=0&&q<=E.height-X&&F.readPixels(N,q,H,X,pe.convert(Ze),pe.convert(st),_e)}finally{const Le=J!==null?W.get(J).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,N,q,H,X,_e,Te,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re)if(N>=0&&N<=E.width-H&&q>=0&&q<=E.height-X){v.bindFramebuffer(F.FRAMEBUFFER,Re);const Le=E.textures[Me],Ze=Le.format,st=Le.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);const Ce=os(Le);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,_e.byteLength,F.STREAM_READ),F.readPixels(N,q,H,X,pe.convert(Ze),pe.convert(st),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Yt=J!==null?W.get(J).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Yt);const wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qg(F,wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_e),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(wt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,q=0){const H=Math.pow(2,-q),X=Math.floor(E.image.width*H),_e=Math.floor(E.image.height*H),Te=N!==null?N.x:0,Me=N!==null?N.y:0;Z.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Te,Me,X,_e),v.unbindTexture()},this.copyTextureToTexture=function(E,N,q=null,H=null,X=0,_e=0){let Te,Me,Re,Le,Ze,st,Ce,dt,Yt;const wt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(q!==null)Te=q.max.x-q.min.x,Me=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,Ze=q.min.y,st=q.isBox3?q.min.z:0;else{const kt=Math.pow(2,-X);Te=Math.floor(wt.width*kt),Me=Math.floor(wt.height*kt),E.isDataArrayTexture?Re=wt.depth:E.isData3DTexture?Re=Math.floor(wt.depth*kt):Re=1,Le=0,Ze=0,st=0}H!==null?(Ce=H.x,dt=H.y,Yt=H.z):(Ce=0,dt=0,Yt=0);const Mt=pe.convert(N.format),pn=pe.convert(N.type);let Ee;N.isData3DTexture?(Z.setTexture3D(N,0),Ee=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Z.setTexture2DArray(N,0),Ee=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(N,0),Ee=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const wn=v.getParameter(F.UNPACK_ROW_LENGTH),ut=v.getParameter(F.UNPACK_IMAGE_HEIGHT),oi=v.getParameter(F.UNPACK_SKIP_PIXELS),bi=v.getParameter(F.UNPACK_SKIP_ROWS),sr=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),v.pixelStorei(F.UNPACK_SKIP_IMAGES,st);const ls=E.isDataArrayTexture||E.isData3DTexture,xt=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const kt=W.get(E),ar=W.get(N),Tt=W.get(kt.__renderTarget),or=W.get(ar.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let cs=0;cs<Re;cs++)ls&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(E).__webglTexture,X,st+cs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(N).__webglTexture,_e,Yt+cs)),F.blitFramebuffer(Le,Ze,Te,Me,Ce,dt,Te,Me,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||W.has(E)){const kt=W.get(E),ar=W.get(N);v.bindFramebuffer(F.READ_FRAMEBUFFER,I),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Tt=0;Tt<Re;Tt++)ls?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.__webglTexture,X,st+Tt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kt.__webglTexture,X),xt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ar.__webglTexture,_e,Yt+Tt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ar.__webglTexture,_e),X!==0?F.blitFramebuffer(Le,Ze,Te,Me,Ce,dt,Te,Me,F.COLOR_BUFFER_BIT,F.NEAREST):xt?F.copyTexSubImage3D(Ee,_e,Ce,dt,Yt+Tt,Le,Ze,Te,Me):F.copyTexSubImage2D(Ee,_e,Ce,dt,Le,Ze,Te,Me);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ee,_e,Ce,dt,Yt,Te,Me,Re,Mt,pn,wt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,_e,Ce,dt,Yt,Te,Me,Re,Mt,wt.data):F.texSubImage3D(Ee,_e,Ce,dt,Yt,Te,Me,Re,Mt,pn,wt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_e,Ce,dt,Te,Me,Mt,pn,wt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_e,Ce,dt,wt.width,wt.height,Mt,wt.data):F.texSubImage2D(F.TEXTURE_2D,_e,Ce,dt,Te,Me,Mt,pn,wt);v.pixelStorei(F.UNPACK_ROW_LENGTH,wn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut),v.pixelStorei(F.UNPACK_SKIP_PIXELS,oi),v.pixelStorei(F.UNPACK_SKIP_ROWS,bi),v.pixelStorei(F.UNPACK_SKIP_IMAGES,sr),_e===0&&N.generateMipmaps&&F.generateMipmap(Ee),v.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){$=0,O=0,J=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class ky{constructor(){this.ctx=null,this.muted=localStorage.getItem("sound_muted")==="true",this.ambientPlaying=!1,this.ambientGain=null,this.osc1=null,this.osc2=null,this.filter=null,this.chargeOsc=null,this.chargeGain=null}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,localStorage.setItem("sound_muted",this.muted),this.muted&&this.ambientPlaying&&this.stopAmbient(),!this.muted}isMuted(){return this.muted}playHover(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(700,e+.04),n.gain.setValueAtTime(.025,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.04),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.045)}catch{}}playClick(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(110,e+.07),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.07),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.08)}catch{}}playWarp(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();t.type="sine",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(480,e+.35),i.type="lowpass",i.frequency.setValueAtTime(600,e),n.gain.setValueAtTime(.04,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.38),t.connect(i),i.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.4)}catch{}}startCharge(){if(!this.muted&&(this.init(),!(!this.ctx||this.chargeOsc)))try{const e=this.ctx.currentTime;this.chargeOsc=this.ctx.createOscillator(),this.chargeGain=this.ctx.createGain(),this.chargeOsc.type="sawtooth",this.chargeOsc.frequency.setValueAtTime(180,e),this.chargeOsc.frequency.exponentialRampToValueAtTime(880,e+1.2),this.chargeGain.gain.setValueAtTime(.01,e),this.chargeGain.gain.linearRampToValueAtTime(.06,e+1);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(400,e),t.frequency.linearRampToValueAtTime(1800,e+1.2),this.chargeOsc.connect(t),t.connect(this.chargeGain),this.chargeGain.connect(this.ctx.destination),this.chargeOsc.start(e)}catch{}}stopCharge(){if(!(!this.chargeOsc||!this.ctx))try{const e=this.ctx.currentTime;this.chargeGain&&this.chargeGain.gain.exponentialRampToValueAtTime(1e-4,e+.15),setTimeout(()=>{this.chargeOsc&&(this.chargeOsc.stop(),this.chargeOsc.disconnect(),this.chargeOsc=null)},160)}catch{this.chargeOsc=null}}playDetonate(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[220,440,659.25,880,1318.5].forEach((n,i)=>{const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e+i*.03),a.gain.setValueAtTime(.05,e+i*.03),a.gain.exponentialRampToValueAtTime(1e-4,e+.45),s.connect(a),a.connect(this.ctx.destination),s.start(e+i*.03),s.stop(e+.5)})}catch{}}startAmbient(){if(!(this.muted||this.ambientPlaying)&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.setValueAtTime(.001,e),this.ambientGain.gain.linearRampToValueAtTime(.015,e+2.5),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.setValueAtTime(160,e),this.osc1=this.ctx.createOscillator(),this.osc1.type="sine",this.osc1.frequency.setValueAtTime(55,e),this.osc2=this.ctx.createOscillator(),this.osc2.type="sine",this.osc2.frequency.setValueAtTime(55.6,e),this.osc1.connect(this.filter),this.osc2.connect(this.filter),this.filter.connect(this.ambientGain),this.ambientGain.connect(this.ctx.destination),this.osc1.start(),this.osc2.start(),this.ambientPlaying=!0}catch{this.ambientPlaying=!1}}stopAmbient(){if(!(!this.ambientPlaying||!this.ctx))try{const e=this.ctx.currentTime;this.ambientGain&&(this.ambientGain.gain.linearRampToValueAtTime(1e-4,e+1),setTimeout(()=>{this.osc1&&(this.osc1.stop(),this.osc1.disconnect()),this.osc2&&(this.osc2.stop(),this.osc2.disconnect()),this.ambientPlaying=!1},1100))}catch{this.ambientPlaying=!1}}}const Vt=new ky;class Gy{constructor(e){this.container=document.getElementById(e),this.container&&(this.scene=null,this.camera=null,this.renderer=null,this.clock=new G0,this.sculptureGroup=new Is,this.innerCrystalMesh=null,this.outerFacetMesh=null,this.corePoints=null,this.orbitalRings=[],this.innerMaterial=null,this.outerMaterial=null,this.particleSystem=null,this.particleCount=2500,this.baseParticleSpeed=.035,this.currentParticleSpeed=.035,this.networkGroup=new Is,this.nodes=[],this.linesMesh=null,this.keyLight=null,this.fillLight=null,this.mouseLight=null,this.mouse={x:0,y:0,targetX:0,targetY:0},this.mouseNormalized=new je,this.raycaster=new k0,this.activePhase=1,this.hoveredNode=null,this.chargeFactor=0,this.skillsData=[{name:"1DayCrew AI / ML NIDS",tag:"XGBoost & SHAP (>97%)"},{name:"Android Security",tag:"EC-Council Bug Bounty"},{name:"Kali Linux",tag:"Penetration Testing OS"},{name:"NFStream Flow Telemetry",tag:"Feature Pipeline"},{name:"Burp Suite Pro",tag:"Web App Pentesting"},{name:"Nmap & Recon",tag:"Port Auditing"},{name:"Wireshark & PCAP",tag:"Packet Analysis"},{name:"Metasploit",tag:"Exploit Dev"},{name:"Python Automation",tag:"Security Tooling"},{name:"Web Cryptography",tag:"SHA-256 & PKI"},{name:"OWASP MASVS",tag:"Mobile Defense"},{name:"Ghidra / RE",tag:"Reverse Engineering"}],this.init())}init(){this.scene=new p0,this.scene.fog=new Ah(395278,.038);const e=window.innerWidth/window.innerHeight;this.camera=new Jn(46,e,.1,100),this.camera.position.set(0,0,8.5),this.renderer=new zy({powerPreference:"high-performance",antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=mh,this.renderer.toneMappingExposure=1.4,this.container.appendChild(this.renderer.domElement),this.buildPrismaticLighting(),this.buildRefractiveSculpture(),this.buildPrismaticParticleVortex(),this.buildConstellation(),this.bindEvents(),this.animate()}buildPrismaticLighting(){const e=new O0(659485,2.2);this.scene.add(e),this.keyLight=new ca(16777215,4.5,35),this.keyLight.position.set(5,6,6),this.scene.add(this.keyLight),this.rimLightCyan=new ca(62207,5.5,30),this.rimLightCyan.position.set(7,8,-6),this.scene.add(this.rimLightCyan),this.rimLightViolet=new ca(11811829,4.8,30),this.rimLightViolet.position.set(-7,-6,-5),this.scene.add(this.rimLightViolet),this.coreLight=new ca(3718648,3.2,12),this.coreLight.position.set(0,0,0),this.scene.add(this.coreLight),this.mouseLight=new ca(16777215,3.8,20),this.mouseLight.position.set(0,0,5),this.scene.add(this.mouseLight)}buildRefractiveSculpture(){const e=new Ch(1.25,0);this.innerMaterial=new Jf({color:790814,emissive:396829,emissiveIntensity:.5,roughness:.04,metalness:.06,transmission:.96,ior:1.62,thickness:2.2,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1.5,specularColor:new $e(16777215),attenuationColor:new $e(3718648),attenuationDistance:3.5}),"dispersion"in this.innerMaterial&&(this.innerMaterial.dispersion=.16),this.innerCrystalMesh=new Bn(e,this.innerMaterial),this.sculptureGroup.add(this.innerCrystalMesh);const t=new Ph(2.05,1);this.outerMaterial=new Bu({color:14870768,emissive:1976635,emissiveIntensity:.35,wireframe:!0,transparent:!0,opacity:.55,roughness:.1,metalness:.95}),this.outerFacetMesh=new Bn(t,this.outerMaterial),this.sculptureGroup.add(this.outerFacetMesh);const n=t.attributes.position.array,i=new fn,s=[];for(let l=0;l<n.length;l+=6)s.push(n[l],n[l+1],n[l+2]);i.setAttribute("position",new Bt(s,3));const a=new Fu({color:3718648,size:.08,transparent:!0,opacity:.9,blending:Ua});this.corePoints=new $f(i,a),this.sculptureGroup.add(this.corePoints),[{r:2.7,tube:.012,rotX:Math.PI/3,rotY:0},{r:3.3,tube:.01,rotX:-Math.PI/4,rotY:Math.PI/6},{r:3.9,tube:.015,rotX:Math.PI/6,rotY:-Math.PI/4}].forEach(l=>{const c=new Ih(l.r,l.tube,16,120),u=new Bu({color:16317180,emissive:1976635,emissiveIntensity:.4,roughness:.1,metalness:.95}),d=new Bn(c,u);d.rotation.set(l.rotX,l.rotY,0),this.sculptureGroup.add(d),this.orbitalRings.push({mesh:d,speedX:.003+Math.random()*.003,speedY:.004})}),this.scene.add(this.sculptureGroup)}buildPrismaticParticleVortex(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.3,"rgba(240, 248, 255, 0.9)"),n.addColorStop(.65,"rgba(180, 220, 255, 0.4)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new A0(e),s=new fn,a=new Float32Array(this.particleCount*3),o=new Float32Array(this.particleCount*3);for(let c=0;c<this.particleCount;c++){const u=2.2+Math.random()*15,d=Math.random()*Math.PI*2,h=(Math.random()-.5)*Math.PI*.8;a[c*3]=u*Math.cos(d)*Math.cos(h),a[c*3+1]=u*Math.sin(h)+(Math.random()-.5)*3,a[c*3+2]=u*Math.sin(d)*Math.cos(h);const f=Math.random();if(f<.65){const g=.75+Math.random()*.25;o[c*3]=g,o[c*3+1]=g,o[c*3+2]=g}else f<.85?(o[c*3]=.05,o[c*3+1]=.85+Math.random()*.15,o[c*3+2]=1):(o[c*3]=.78+Math.random()*.2,o[c*3+1]=.42,o[c*3+2]=1)}s.setAttribute("position",new Ei(a,3)),s.setAttribute("color",new Ei(o,3));const l=new Fu({size:.12,map:i,vertexColors:!0,transparent:!0,opacity:.85,blending:Ua,depthWrite:!1});this.particleSystem=new $f(s,l),this.scene.add(this.particleSystem)}buildConstellation(){const e=this.skillsData.length,t=4.2,n=[];if(this.nodes=[],this.skillsData.forEach((a,o)=>{const l=Math.acos(1-2*(o+.5)/e),c=Math.PI*(1+Math.sqrt(5))*(o+.5),u=t*Math.sin(l)*Math.cos(c),d=t*Math.sin(l)*Math.sin(c),h=t*Math.cos(l),f=new Dh(.24,0),g=new Jf({color:988970,emissive:61695,emissiveIntensity:.6,roughness:.08,metalness:.3,transmission:.8,ior:1.55}),_=new Bn(f,g);_.position.set(u,d,h),_.userData={skill:a,originalScale:1};const m=new Lh(.34,.38,16),p=new wh({color:3718648,transparent:!0,opacity:.55,wireframe:!0,side:Li}),S=new Bn(m,p);if(S.rotation.x=Math.PI/2,_.add(S),this.networkGroup.add(_),this.nodes.push(_),o>0){const w=this.nodes[o-1].position;n.push(u,d,h,w.x,w.y,w.z)}}),this.nodes.length>2){const a=this.nodes[0].position,o=this.nodes[this.nodes.length-1].position;n.push(a.x,a.y,a.z,o.x,o.y,o.z)}const i=new fn;i.setAttribute("position",new Bt(n,3));const s=new gm({color:3718648,transparent:!0,opacity:.35,blending:Ua});this.linesMesh=new b0(i,s),this.networkGroup.add(this.linesMesh),this.networkGroup.scale.set(.001,.001,.001),this.scene.add(this.networkGroup)}setChargeProgress(e){this.chargeFactor=Math.min(1,Math.max(0,e)),this.currentParticleSpeed=this.baseParticleSpeed+this.chargeFactor*.28,this.innerMaterial&&(this.innerMaterial.emissiveIntensity=.5+this.chargeFactor*2),this.sculptureGroup&&this.sculptureGroup.scale.setScalar(1+this.chargeFactor*.38)}triggerDetonate(){Vt.playDetonate(),this.currentParticleSpeed=.55,this.sculptureGroup&&(this.sculptureGroup.scale.set(1.65,1.65,1.65),setTimeout(()=>{this.sculptureGroup.scale.set(1,1,1),this.currentParticleSpeed=this.baseParticleSpeed},500))}bindEvents(){window.addEventListener("mousemove",e=>{this.mouse.targetX=e.clientX/window.innerWidth*2-1,this.mouse.targetY=-(e.clientY/window.innerHeight)*2+1,this.mouseNormalized.x=this.mouse.targetX,this.mouseNormalized.y=this.mouse.targetY},{passive:!0}),window.addEventListener("touchmove",e=>{if(e.touches.length>0){const t=e.touches[0];this.mouse.targetX=t.clientX/window.innerWidth*2-1,this.mouse.targetY=-(t.clientY/window.innerHeight)*2+1,this.mouseNormalized.x=this.mouse.targetX,this.mouseNormalized.y=this.mouse.targetY}},{passive:!0}),window.addEventListener("click",()=>{if(this.hoveredNode){Vt.playClick();const e=this.hoveredNode.scale.x;this.hoveredNode.scale.set(e*1.6,e*1.6,e*1.6),setTimeout(()=>this.hoveredNode.scale.set(e,e,e),250)}}),window.addEventListener("resize",()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)))})}checkRaycaster(){if(this.networkGroup.scale.x<.2)return;this.raycaster.setFromCamera(this.mouseNormalized,this.camera);const e=this.raycaster.intersectObjects(this.nodes);if(e.length>0){const t=e[0].object;if(this.hoveredNode!==t){this.hoveredNode&&this.hoveredNode.scale.set(1,1,1),this.hoveredNode=t,this.hoveredNode.scale.set(1.5,1.5,1.5),Vt.playHover(),document.body.style.cursor="pointer";const n=document.getElementById("skill-tooltip");if(n){const i=t.userData.skill;n.innerHTML=`<strong>${i.name.toUpperCase()}</strong> &bull; ${i.tag}`,n.style.opacity="1"}}}else if(this.hoveredNode){this.hoveredNode.scale.set(1,1,1),this.hoveredNode=null,document.body.style.cursor="default";const t=document.getElementById("skill-tooltip");t&&(t.style.opacity="0")}}setupScrollAnimations(e,t){!e||!t||(e.timeline({scrollTrigger:{trigger:"#about",start:"top bottom",end:"top center",scrub:1.2,onEnter:()=>{Vt.playWarp(),this.activePhase=2},onLeaveBack:()=>{this.activePhase=1}}}).to(this.camera.position,{x:-1.8,y:.3,z:7.2,ease:"power2.inOut"},0).to(this.sculptureGroup.position,{x:2.4,y:.2,z:.2,ease:"power2.inOut"},0).to(this.sculptureGroup.rotation,{y:Math.PI*.85,x:.35,ease:"none"},0),e.timeline({scrollTrigger:{trigger:"#work",start:"top bottom",end:"top center",scrub:1.2,onEnter:()=>{Vt.playWarp(),this.activePhase=3},onLeaveBack:()=>{this.activePhase=2}}}).to(this.camera.position,{x:1.9,y:-.3,z:6.8,ease:"power2.inOut"},0).to(this.sculptureGroup.position,{x:-2.3,y:-.2,z:-.5,ease:"power2.inOut"},0).to(this.sculptureGroup.scale,{x:1.25,y:1.25,z:1.25,ease:"power2.inOut"},0),e.timeline({scrollTrigger:{trigger:"#lab",start:"top bottom",end:"top center",scrub:1.4,onEnter:()=>{Vt.playWarp(),this.activePhase=4},onLeaveBack:()=>{this.activePhase=3}}}).to(this.camera.position,{x:0,y:0,z:8,ease:"power2.inOut"},0).to(this.sculptureGroup.position,{x:0,y:0,z:-2.2,ease:"power2.inOut"},0).to(this.sculptureGroup.scale,{x:.5,y:.5,z:.5,ease:"power2.inOut"},0).to(this.networkGroup.scale,{x:1,y:1,z:1,ease:"back.out(1.4)"},0),e.timeline({scrollTrigger:{trigger:"#contact",start:"top bottom",end:"top center",scrub:1.2,onEnter:()=>{Vt.playWarp(),this.activePhase=5},onLeaveBack:()=>{this.activePhase=4}}}).to(this.networkGroup.scale,{x:.001,y:.001,z:.001,ease:"power2.in"},0).to(this.camera.position,{x:0,y:-.2,z:6.9,ease:"power2.inOut"},0).to(this.sculptureGroup.position,{x:0,y:.4,z:-.2,ease:"power2.inOut"},0).to(this.sculptureGroup.scale,{x:1.35,y:1.35,z:1.35,ease:"power2.out"},0))}animate(){requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime();if(this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.06,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.06,this.camera&&(this.camera.position.x+=(this.mouse.x*.45-(this.camera.position.x-(this.activePhase===2?-1.8:this.activePhase===3?1.9:0)))*.03,this.camera.position.y+=(this.mouse.y*.45-(this.camera.position.y-(this.activePhase===2?.3:this.activePhase===3?-.3:0)))*.03,this.camera.lookAt(0,0,0)),this.mouseLight&&(this.mouseLight.position.x=this.mouse.x*5.5,this.mouseLight.position.y=this.mouse.y*5.5),this.coreLight&&(this.coreLight.intensity=3+Math.sin(e*2.8)*1.2+this.chargeFactor*6),this.sculptureGroup){const t=1+this.chargeFactor*4;this.innerCrystalMesh.rotation.x=e*.28*t,this.innerCrystalMesh.rotation.y=e*.38*t,this.outerFacetMesh.rotation.x=-e*.16*t,this.outerFacetMesh.rotation.y=e*.22*t,this.orbitalRings.forEach(n=>{n.mesh.rotation.z+=n.speedX*t,n.mesh.rotation.y+=n.speedY*t})}this.particleSystem&&(this.particleSystem.rotation.y=e*this.currentParticleSpeed,this.particleSystem.rotation.x=Math.sin(e*.05)*.08),this.networkGroup&&this.networkGroup.scale.x>.1&&(this.networkGroup.rotation.y=e*.15+this.mouse.x*.3,this.networkGroup.rotation.x=Math.sin(e*.1)*.12-this.mouse.y*.2,this.nodes.forEach(t=>{t.children[0]&&(t.children[0].rotation.z+=.025)}),this.checkRaycaster()),this.renderer.render(this.scene,this.camera)}}$t.registerPlugin(Qe);class Vy{constructor(e){this.threeScene=e,this.cursorDot=document.getElementById("cursor-dot"),this.cursorRing=document.getElementById("cursor-ring"),this.mouse={x:window.innerWidth/2,y:window.innerHeight/2},this.cursorPos={x:window.innerWidth/2,y:window.innerHeight/2},this.initCursor(),this.initPreloader(),this.initMenuModal(),this.initLongPressCharge(),this.initPhaseTracking(),this.initCard3DTilt(),this.initCounters()}initPreloader(){const e=document.getElementById("preloader"),t=document.getElementById("loader-percent"),n=document.getElementById("loader-egg-ring"),i=document.getElementById("loader-enter-btn");if(!e||!t||!n)return;const s={val:0};$t.to(s,{val:100,duration:1.8,ease:"power2.inOut",onUpdate:()=>{const a=Math.floor(s.val);t.textContent=`${a<10?"0"+a:a}%`;const o=251-251*(a/100);n.style.strokeDashoffset=o},onComplete:()=>{i?(i.classList.add("ready"),i.addEventListener("click",()=>{Vt.playClick(),Vt.startAmbient(),e.classList.add("loaded"),this.initHeroEntrance()})):setTimeout(()=>{e.classList.add("loaded"),this.initHeroEntrance()},400)}})}initCursor(){if(!this.cursorDot||!this.cursorRing)return;if(window.matchMedia("(pointer: coarse)").matches){this.cursorDot.style.display="none",this.cursorRing.style.display="none";return}let e=0,t=0;window.addEventListener("mousemove",i=>{this.mouse.x=i.clientX,this.mouse.y=i.clientY;const s=i.clientX-e,a=i.clientY-t,o=Math.min(1.4,Math.hypot(s,a)*.035);e=i.clientX,t=i.clientY,$t.to(this.cursorDot,{x:this.mouse.x,y:this.mouse.y,duration:.04,ease:"power2.out"}),$t.to(this.cursorRing,{scaleX:1+o*.25,scaleY:1-o*.12,duration:.2})}),$t.ticker.add(()=>{this.cursorPos.x+=(this.mouse.x-this.cursorPos.x)*.16,this.cursorPos.y+=(this.mouse.y-this.cursorPos.y)*.16,$t.set(this.cursorRing,{x:this.cursorPos.x,y:this.cursorPos.y})}),document.querySelectorAll("a, button, .project-card, .tool-pill, .tab-btn, .hold-btn").forEach(i=>{i.addEventListener("mouseenter",()=>{Vt.playHover(),$t.to(this.cursorRing,{scale:1.8,borderColor:"#ffffff",backgroundColor:"rgba(255, 255, 255, 0.08)",duration:.25}),$t.to(this.cursorDot,{scale:0,duration:.15})}),i.addEventListener("mouseleave",()=>{$t.to(this.cursorRing,{scale:1,borderColor:"rgba(255, 255, 255, 0.45)",backgroundColor:"transparent",duration:.25}),$t.to(this.cursorDot,{scale:1,duration:.15})}),i.addEventListener("click",()=>{Vt.playClick(),$t.timeline().to(this.cursorRing,{scale:.7,duration:.08}).to(this.cursorRing,{scale:1.4,duration:.18}).to(this.cursorRing,{scale:1,duration:.15})})})}initMenuModal(){const e=document.getElementById("menu-toggle"),t=document.getElementById("menu-close-btn"),n=document.getElementById("fullscreen-menu"),i=document.querySelectorAll(".menu-nav-link");if(!e||!n)return;const s=()=>{Vt.playClick(),n.classList.add("open"),$t.fromTo(".menu-nav-link",{opacity:0,y:35},{opacity:1,y:0,stagger:.08,duration:.6,ease:"power3.out",delay:.1})},a=()=>{Vt.playClick(),n.classList.remove("open")};e.addEventListener("click",s),t&&t.addEventListener("click",a),i.forEach(o=>{o.addEventListener("click",a)})}initLongPressCharge(){const e=document.getElementById("hold-interact-btn"),t=document.getElementById("hold-circle-svg"),n=document.getElementById("hold-status-label");if(!e)return;let i=!1,s=0,a=null;const o=1200,l=u=>{if(u.preventDefault(),i)return;i=!0,s=Date.now(),Vt.startCharge(),n&&(n.textContent="CHARGING CORE...");const d=()=>{if(!i)return;const h=Date.now()-s,f=Math.min(1,h/o);if(this.threeScene&&this.threeScene.setChargeProgress(f),t&&(t.style.strokeDashoffset=126-126*f),f>=1){c(),this.threeScene&&this.threeScene.triggerDetonate(),n&&(n.textContent="EXPLODED ✓",setTimeout(()=>{n&&(n.textContent="HOLD TO EXPLORE")},2500));return}a=requestAnimationFrame(d)};a=requestAnimationFrame(d)},c=()=>{i&&(i=!1,cancelAnimationFrame(a),Vt.stopCharge(),this.threeScene&&this.threeScene.setChargeProgress(0),t&&(t.style.strokeDashoffset=126),n&&n.textContent!=="EXPLODED ✓"&&(n.textContent="HOLD TO EXPLORE"))};e.addEventListener("mousedown",l),window.addEventListener("mouseup",c),e.addEventListener("touchstart",l,{passive:!1}),window.addEventListener("touchend",c)}initHeroEntrance(){$t.timeline({defaults:{ease:"power3.out"}}).from(".phase-number",{opacity:0,y:-20,duration:.8}).from(".hero-title-line",{opacity:0,y:60,stagger:.18,duration:1.1},"-=0.5").from(".hero-lead-text",{opacity:0,y:25,duration:.9},"-=0.6").from(".hero-cta-group",{opacity:0,y:20,duration:.8},"-=0.5").from(".proof-banner",{opacity:0,y:30,duration:.8},"-=0.5")}initPhaseTracking(){const e=[{id:"hero",num:"01"},{id:"about",num:"02"},{id:"work",num:"03"},{id:"lab",num:"04"},{id:"contact",num:"05"}],t=document.getElementById("phase-legend-text");e.forEach(n=>{const i=document.getElementById(n.id);i&&Qe.create({trigger:i,start:"top center",end:"bottom center",onEnter:()=>{t&&(t.textContent=`PHASE ${n.num} // 05`)},onEnterBack:()=>{t&&(t.textContent=`PHASE ${n.num} // 05`)}})})}initCard3DTilt(){document.querySelectorAll(".project-card").forEach(t=>{t.addEventListener("mousemove",n=>{const i=t.getBoundingClientRect(),s=n.clientX-i.left,a=n.clientY-i.top,o=i.width/2,l=i.height/2,c=(a-l)/l*-8,u=(s-o)/o*8;$t.to(t,{transformPerspective:1e3,rotateX:c,rotateY:u,duration:.35,ease:"power2.out"});const d=t.querySelector(".card-shine");if(d){const h=s/i.width*100,f=a/i.height*100;d.style.background=`radial-gradient(circle at ${h}% ${f}%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)`}}),t.addEventListener("mouseleave",()=>{$t.to(t,{rotateX:0,rotateY:0,duration:.7,ease:"elastic.out(1, 0.4)"})})})}initCounters(){document.querySelectorAll(".counter-val").forEach(t=>{const n=parseFloat(t.getAttribute("data-target")||"0"),i=t.getAttribute("data-prefix")||"",s=t.getAttribute("data-suffix")||"",a={val:0};$t.to(a,{scrollTrigger:{trigger:t,start:"top 90%",once:!0},val:n,duration:1.8,ease:"power2.out",onUpdate:()=>{t.textContent=`${i}${Math.floor(a.val)}${s}`}})})}}class Hy{constructor(){this.pageLoadTime=Date.now(),this.cipherMode="encode",this.initTabs(),this.initHasher(),this.initCipher(),this.initPasswordAnalyzer(),this.initBreachScanner(),this.initIntelFootprint()}initTabs(){const e=document.querySelectorAll(".tab-btn"),t=document.querySelectorAll(".tab-panel");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),t.forEach(a=>a.classList.remove("active")),n.classList.add("active");const i=n.getAttribute("data-tab"),s=document.getElementById(i);s&&s.classList.add("active")})})}initHasher(){const e=document.getElementById("hash-input"),t=document.getElementById("hash-sha1"),n=document.getElementById("hash-sha256");if(!e||!t||!n)return;const i=async(s,a)=>{const o=await crypto.subtle.digest(s,new TextEncoder().encode(a));return[...new Uint8Array(o)].map(l=>l.toString(16).padStart(2,"0")).join("")};e.addEventListener("input",async s=>{const a=s.target.value;if(!a){t.textContent="—",n.textContent="—";return}t.textContent=await i("SHA-1",a),n.textContent=await i("SHA-256",a)})}initCipher(){const e=document.getElementById("cipher-input"),t=document.getElementById("cipher-output"),n=document.querySelectorAll("[data-mode]");if(!e||!t)return;const i=()=>{const s=e.value;if(!s){t.textContent="—";return}try{this.cipherMode==="encode"?t.textContent=btoa(unescape(encodeURIComponent(s))):this.cipherMode==="decode"?t.textContent=decodeURIComponent(escape(atob(s.trim()))):t.textContent=s.replace(/[a-zA-Z]/g,a=>String.fromCharCode((a<="Z"?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26))}catch{t.textContent="[ERROR: INVALID_PAYLOAD]"}};n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(a=>a.classList.remove("on")),s.classList.add("on"),this.cipherMode=s.getAttribute("data-mode"),i()})}),e.addEventListener("input",i)}initPasswordAnalyzer(){const e=document.getElementById("password-input"),t=document.getElementById("strength-bar"),n=document.getElementById("strength-label"),i=document.getElementById("entropy-label"),s=document.getElementById("crack-time"),a=document.getElementById("complexity-audit"),o=document.getElementById("hibp-btn"),l=document.getElementById("hibp-result");if(!e||!t||!n)return;const c=u=>{if(!u)return 0;let d=0;return/[a-z]/.test(u)&&(d+=26),/[A-Z]/.test(u)&&(d+=26),/[0-9]/.test(u)&&(d+=10),/[^a-zA-Z0-9]/.test(u)&&(d+=33),Math.round(u.length*(d?Math.log2(d):0))};e.addEventListener("input",()=>{const u=e.value,d=c(u);t.style.width=Math.min(100,d/85*100)+"%";let h="—",f="var(--text-muted)";u&&(d<28?(h="CRITICAL (Very Weak)",f="#ff0055"):d<45?(h="VULNERABLE (Weak)",f="#ff5500"):d<60?(h="FAIR (Moderate)",f="#ffaa00"):d<80?(h="ROBUST (Strong)",f="#00ff88"):(h="HARDENED (Military Grade)",f="#00ff66")),t.style.background=f,n.textContent=h,n.style.color=f,i.textContent=d;const g=(/[a-z]/.test(u)?26:0)+(/[A-Z]/.test(u)?26:0)+(/[0-9]/.test(u)?10:0)+(/[^a-zA-Z0-9]/.test(u)?33:0),_=g&&u.length?Math.pow(g,u.length)/1e10:0;let m="Instantly";_>=1&&_<60?m=Math.round(_)+" sec":_>=60&&_<3600?m=Math.round(_/60)+" min":_>=3600&&_<86400?m=Math.round(_/3600)+" hours":_>=86400&&_<31536e3?m=Math.round(_/86400)+" days":_>=31536e3&&(m=(_/31536e3>1e3?"> 1,000":Math.round(_/31536e3))+" years"),s.textContent=u?m:"—";const p=[];u.length&&u.length<8&&p.push("Length < 8"),u&&!/[A-Z]/.test(u)&&p.push("Missing Uppercase"),u&&!/[a-z]/.test(u)&&p.push("Missing Lowercase"),u&&!/[0-9]/.test(u)&&p.push("Missing Digits"),u&&!/[^a-zA-Z0-9]/.test(u)&&p.push("Missing Symbols"),u?p.length?(a.textContent="⚠ "+p.join(", "),a.style.color="#ff5500"):(a.textContent="✓ Fully Compliant",a.style.color="var(--accent-green)"):(a.textContent="—",a.style.color="var(--text-muted)"),l.textContent="Not queried.",l.style.color="var(--text-muted)"}),o&&o.addEventListener("click",async()=>{const u=e.value;if(!u){l.textContent="Input password first.",l.style.color="#ff0055";return}l.textContent="Scanning HIBP SHA-1 database...";try{const d=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(u)),h=[...new Uint8Array(d)].map(S=>S.toString(16).padStart(2,"0")).join("").toUpperCase(),f=h.slice(0,5),g=h.slice(5),m=await(await fetch(`https://api.pwnedpasswords.com/range/${f}`)).text();let p=0;for(const S of m.split(`
`)){const[w,M]=S.split(":");if(w.trim()===g){p=parseInt(M,10);break}}p>0?l.innerHTML=`<span style="color:#ff0055">⚠ LEAKED: Found in ${p.toLocaleString()} known database breaches!</span>`:l.innerHTML='<span style="color:var(--accent-green)">✓ CLEAN: Zero occurrences in known breach dumps.</span>'}catch{l.textContent="Query blocked or offline.",l.style.color="#ff5500"}})}initBreachScanner(){const e=document.getElementById("breach-email"),t=document.getElementById("breach-btn"),n=document.getElementById("breach-status"),i=document.getElementById("breach-results");!t||!e||!n||t.addEventListener("click",async()=>{var a;const s=e.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){n.innerHTML='<span style="color:#ff0055">Valid email syntax required.</span>';return}n.textContent="Scanning threat intelligence feeds...",n.style.color="var(--accent-cyan)",i.innerHTML="";try{const l=await(await fetch(`https://api.xposedornot.com/v1/breach-analytics?email=${encodeURIComponent(s)}`)).json();if(!((a=l.ExposedBreaches)!=null&&a.breaches_details)){n.innerHTML='<span style="color:var(--accent-green)">✓ No exposure identified across public threat dumps.</span>';return}const c=l.ExposedBreaches.breaches_details;n.innerHTML=`<span style="color:#ff0055">⚠ EXPOSURE CONFIRMED: Found in ${c.length} breaches:</span>`,c.slice(0,5).forEach(u=>{const d=document.createElement("div");d.style.cssText="padding:6px 10px;margin-top:6px;background:rgba(255,0,85,0.08);border-left:2px solid #ff0055;border-radius:2px;font-size:0.8rem;",d.innerHTML=`<strong>${u.breach}</strong> &bull; Domain: ${u.domain||"N/A"}`,i.appendChild(d)})}catch{n.innerHTML='<span style="color:var(--text-muted)">Query rate-limited or target not indexed.</span>'}})}initIntelFootprint(){const e=s=>document.getElementById(s),t=navigator.userAgent;let n="Unknown OS";t.includes("Win")?n="Windows":t.includes("Mac")?n="macOS":t.includes("Linux")?n="Linux":t.includes("Android")?n="Android":t.includes("iPhone")&&(n="iOS");let i="Unknown Browser";if(t.includes("Firefox")?i="Firefox":t.includes("Edg")?i="Microsoft Edge":t.includes("Chrome")?i="Chrome / Chromium":t.includes("Safari")&&(i="Safari"),e("intel-os")&&(e("intel-os").textContent=n),e("intel-browser")&&(e("intel-browser").textContent=i),e("intel-cores")&&(e("intel-cores").textContent=`${navigator.hardwareConcurrency||4} Threads`),e("intel-ram")&&(e("intel-ram").textContent=`${navigator.deviceMemory?navigator.deviceMemory+" GB":"Protected"}`),e("intel-screen")&&(e("intel-screen").textContent=`${window.screen.width}x${window.screen.height} @ ${window.devicePixelRatio}x`),e("intel-tz")&&(e("intel-tz").textContent=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"),e("intel-conn")){const s=navigator.connection||navigator.mozConnection||navigator.webkitConnection;e("intel-conn").textContent=s?`${s.effectiveType||"4G"} (~${s.downlink||10} Mbps)`:"Direct TCP"}if(e("intel-canvas"))try{const s=document.createElement("canvas");s.width=120,s.height=30;const a=s.getContext("2d");a.textBaseline="top",a.font="14px 'Arial'",a.fillStyle="#f60",a.fillRect(10,1,62,20),a.fillStyle="#069",a.fillText("0xKULDEEP",2,8);const o=s.toDataURL();let l=0;for(let c=0;c<o.length;c++)l=(l<<5)-l+o.charCodeAt(c),l|=0;e("intel-canvas").textContent="0x"+Math.abs(l).toString(16).toUpperCase()}catch{e("intel-canvas").textContent="Blocked"}if(e("intel-bot")){const s=navigator.webdriver||window._phantom||window.__nightmare;e("intel-bot").textContent=s?"ALERT: AUTOMATION DETECTED":"HUMAN OPERATIVE",e("intel-bot").style.color=s?"#ff0055":"var(--accent-green)"}e("intel-time")&&setInterval(()=>{const s=Math.floor((Date.now()-this.pageLoadTime)/1e3);e("intel-time").textContent=`${s}s`},1e3)}}$t.registerPlugin(Qe);document.addEventListener("DOMContentLoaded",()=>{const r=new Gy("webgl-container");new Vy(r),r.setupScrollAnimations($t,Qe),new Hy;const e=document.getElementById("sound-toggle"),t=document.getElementById("sound-btn-text"),n=()=>{if(!e)return;Vt.isMuted()?(e.classList.remove("active"),t&&(t.textContent="SOUND OFF")):(e.classList.add("active"),t&&(t.textContent="SOUND ON"))};e&&(n(),e.addEventListener("click",()=>{Vt.toggleMute()&&(Vt.startAmbient(),Vt.playClick()),n()})),window.addEventListener("keydown",o=>{["INPUT","TEXTAREA"].includes(document.activeElement.tagName)||o.key.toLowerCase()==="m"&&e&&e.click()});const i=document.getElementById("contact-form"),s=document.getElementById("form-status"),a=document.getElementById("submit-btn");i&&s&&a&&i.addEventListener("submit",o=>{o.preventDefault();const l=document.getElementById("name"),c=document.getElementById("email"),u=a.innerHTML;a.disabled=!0,a.innerHTML="<span>ENCRYPTING & TRANSMITTING...</span>",Vt.playClick(),setTimeout(()=>{Vt.playDetonate(),s.className="form-status success",s.innerHTML=`
          <strong>[DISPATCH CONFIRMED &bull; TRANSMISSION SECURE]</strong><br>
          Thank you, ${l.value}! Your message has been received. I will respond to ${c.value} promptly.
        `,r.sculptureGroup&&$t.fromTo(r.sculptureGroup.scale,{x:1.8,y:1.8,z:1.8},{x:1.35,y:1.35,z:1.35,duration:1.2,ease:"elastic.out(1, 0.3)"}),i.reset(),a.disabled=!1,a.innerHTML=u,setTimeout(()=>{s.className="form-status"},8e3)},900)})});
