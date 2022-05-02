"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[439],{439:function(e,t,n){n.r(t),n.d(t,{default:function(){return v},emotions:function(){return m}});var r=n(885),o=n(8735),a=n(2504),i=n(2791),u=n(8227),c=n(855),s=n(4483),f=n(184),l=function(e){var t=e.emotionName,n=e.setSelected,r=e.selected,o=m.filter((function(e){return t===e.emotionName}))[0],a=o.emotionColor,i=o.icon,l=(0,u.ff)("black","white"),p=(0,c.Sx)({base:"3x",lg:"5x"}),h=function(e){return r&&e!==r?l:a}(t);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(s.G,{size:p,onClick:function(){return function(e){n(e===r?"":e)}(t)},"aria-label":"".concat(t," button"),color:h,icon:i})})},p=n(1396),h=n(164),d=n(3174),m=[{icon:d.jur,emotionColor:"#322659",emotionName:"Awful"},{icon:d.FRD,emotionColor:"#2C5282",emotionName:"Meh"},{icon:d.pkM,emotionColor:"#68D391",emotionName:"Good"},{icon:d.g91,emotionColor:"#F6E05E",emotionName:"Awesome"}],v=function(){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],c=function(e){var t;return null===(t=m.filter((function(t){return t.emotionName===e}))[0])||void 0===t?void 0:t.emotionColor}(n),s=(0,h.Z)(),d=s.label,v=s.isSubmitting,b=s.onSubmit;return s.thoughtRecord?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(o.M5,{rounded:"75px",border:n?"15px solid":"none",borderColor:c,m:0,mx:-20,w:{base:"auto",lg:"100vw"},p:2,height:"150vh",flexDir:"column",children:[(0,f.jsx)(o.X6,{position:"fixed",top:48,p:0,children:d}),(0,f.jsx)(o.Ug,{height:"50%",p:2,w:{base:"100%",lg:"50%"},spacing:{base:12,lg:"auto"},children:m.map((function(e){var t=e.emotionName;return(0,f.jsx)(l,{emotionName:t,selected:n,setSelected:u},t)}))}),(0,f.jsx)(o.gC,{p:2,w:"full",height:"10vh",spacing:6,children:n?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(o.X6,{color:c,children:[" ",n," "]}),(0,f.jsx)(a.zx,{m:2,isLoading:v,onClick:function(){return b(n)},w:"60%",minH:"40px",bg:"white",children:"Submit"})]}):null})]})}):(0,f.jsx)(p.Z,{})}},164:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(1413),o=n(5861),a=n(885),i=n(7762),u=n(7757),c=n.n(u),s=n(7957),f=n(2791),l=n(6871),p=n(7657),h=n(2331),d=n(4942),m=n(20),v=function(){var e=(0,s.pm)(),t=(0,l.s0)(),n=(0,l.TH)(),u=n.pathname,v=n.state,b=(0,f.useState)(),x=(0,a.Z)(b,2),g=x[0],w=x[1],k=(0,f.useState)(null),Z=(0,a.Z)(k,2),y=Z[0],S=Z[1],j=function(){var e=(0,m.Z)().logout,t=(0,h.Ek)(),n=(0,f.useState)(!1),i=(0,a.Z)(n,2),u=i[0],s=i[1],l=function(){var t=(0,o.Z)(c().mark((function t(n,r){var o,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,s(!0);case 4:return t.next=6,fetch(n,r);case 6:if(!(o=t.sent).ok){t.next=13;break}return t.next=10,o.json();case 10:return a=t.sent,s(!1),t.abrupt("return",a);case 13:o.status,e(),t.next=18;break;case 17:throw Error(o.statusText);case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(h.n3,t);case 2:if(r=e.sent,!(0,p.OZ)(r)){e.next=5;break}return e.abrupt("return",r);case 5:throw Error("not a thought record");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)(c().mark((function e(){var n,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,r.Z)({method:"POST"},t),e.next=3,l(h.n3,n);case 3:if(o=e.sent,!(0,p.OZ)(o)){e.next=8;break}return e.abrupt("return",o);case 8:throw Error("response isnt valid");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,o.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:(0,r.Z)((0,r.Z)({},(0,h.Ek)().headers),{},{Accept:"application/json","Content-Type":"application/json"}),method:"POST"},e.next=3,l("".concat(h.xr,"/thoughtrecord"),t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)(c().mark((function e(n,o,a){var i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i={headers:(0,r.Z)({Accept:"application/json","Content-Type":"application/json"},t.headers),method:"PATCH"}).body=JSON.stringify((0,d.Z)({},a,n)),e.next=4,l("".concat(h.n3,"/").concat(o),i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return{updateThoughtRecord:g,getActiveThoughtRecord:v,getNewThoughtRecord:b,isSubmitting:u,saveThoughtRecord:x}}(),C=j.updateThoughtRecord,T=j.getActiveThoughtRecord,E=j.isSubmitting,N=j.saveThoughtRecord,A=(0,h.LP)();if(!A)throw Error;(0,f.useEffect)((function(){if(!y&&(0,p.KX)(u)&&g){var e=function(e,t){var n,r=(0,i.Z)(p.wv);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.slice(1);if(o===e)return o;if((0,p.yt)(a,t)&&null===t[a])return o}}catch(u){r.e(u)}finally{r.f()}return e}(u,g);e!==u?t(e):S(!0)}}),[y,t,u,g]),(0,f.useEffect)((function(){var e=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=10;break}if(!(0,p.OZ)(v)){e.next=5;break}w(v),e.next=10;break;case 5:return e.t0=w,e.next=8,T(A);case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();E||e()}),[T,E,v,g,A]);var R=function(){var n=(0,o.Z)(c().mark((function n(o){var a,i,s,f;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,p.KX)(u)){n.next=26;break}if("/submit"!==u){n.next=13;break}return n.prev=2,n.next=5,N();case 5:t("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),n.t0 instanceof Error&&e({status:"error",description:"problem submitting"});case 11:n.next=26;break;case 13:return a=u.slice(1),i=(0,p.OZ)(g)?g.key:"",s=p.wv.indexOf(u)+1,n.prev=16,n.next=19,C(o,i,a);case 19:f=n.sent,t(p.wv[s],{state:(0,r.Z)({},f)}),n.next=26;break;case 23:n.prev=23,n.t1=n.catch(16),e({status:"error",description:"problem with update"});case 26:case"end":return n.stop()}}),n,null,[[2,8],[16,23]])})));return function(e){return n.apply(this,arguments)}}(),O="",F="";return(0,p.KX)(u)&&(O=p.AB[u].label,F=u.slice(1)),{label:O,onSubmit:R,isSubmitting:E,currentQuestion:F,thoughtRecord:g,isValidQuestion:y}}},7762:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw i}}}}}}]);
//# sourceMappingURL=439.a71c0749.chunk.js.map