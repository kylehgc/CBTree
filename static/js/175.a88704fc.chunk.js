"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[175],{5175:function(e,t,n){n.r(t),n.d(t,{default:function(){return b},emotions:function(){return x}});var r=n(885),o=n(7231),a=n(8735),u=n(2504),c=n(2791),i=n(8227),s=n(855),f=n(4483),p=n(184),h=function(e){var t=e.emotionName,n=e.setSelected,r=e.selected,o=x.filter((function(e){return t===e.emotionName}))[0],a=o.emotionColor,u=o.icon,c=(0,i.ff)("black","white"),h=(0,s.Sx)({base:"3x",md:"5x",lg:"9x"}),l=function(e){return r&&e!==r?c:a}(t);return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(f.G,{size:h,onClick:function(){return function(e){n(e===r?"":e)}(t)},"aria-label":"".concat(t," button"),color:l,icon:u})})},l=n(4913),d=n(9982),m=n(3174),v=n(6601),x=[{icon:m.jur,emotionColor:"#322659",emotionName:"Awful"},{icon:m.FRD,emotionColor:"#2C5282",emotionName:"Meh"},{icon:m.pkM,emotionColor:"#68D391",emotionName:"Good"},{icon:m.g91,emotionColor:"#F6E05E",emotionName:"Awesome"}],b=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=function(e){var t;return null===(t=x.filter((function(t){return t.emotionName===e}))[0])||void 0===t?void 0:t.emotionColor}(n),f=(0,d.Z)(),m=f.label,b=f.isSubmitting,g=f.onSubmit,w=f.currentQuestion,Z=f.thoughtRecord;return(0,c.useEffect)((function(){if(Z&&(0,v.yt)(w,Z)){var e=Z[w];"string"===typeof e&&i(e)}}),[w,Z]),Z?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(o.MT,{in:!0,delay:{enter:.3},children:(0,p.jsx)(a.kC,{p:2,minH:"80vh",children:(0,p.jsxs)(a.M5,{mt:4,rounded:"75px",outline:n?"15px solid":"none",borderColor:s,mx:-20,w:{base:"auto",sm:"90vw",md:"100vw"},p:2,minHeight:"70vh",flexDir:"column",children:[(0,p.jsx)(a.X6,{children:m}),(0,p.jsx)(a.Ug,{height:"50%",mx:1,p:2,w:{base:"auto",lg:"80%"},spacing:{base:"9",md:"auto"},children:x.map((function(e){var t=e.emotionName;return(0,p.jsx)(h,{emotionName:t,selected:n,setSelected:i},t)}))}),(0,p.jsx)(a.gC,{p:2,w:"full",height:"10vh",spacing:6,children:n?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a.X6,{color:s,children:[" ",n," "]}),(0,p.jsx)(u.zx,{m:2,variant:"submit",isLoading:b,onClick:function(){return g(n)},w:"60%",minH:"40px",children:"Submit"})]}):null})]})})})}):(0,p.jsx)(l.Z,{})}},9982:function(e,t,n){var r=n(1413),o=n(5861),a=n(885),u=n(7762),c=n(7757),i=n.n(c),s=n(2908),f=n(2791),p=n(6871),h=n(6601),l=n(893);t.Z=function(){var e=(0,s.pm)(),t=(0,p.s0)(),n=(0,p.TH)(),c=n.pathname,d=n.state,m=(0,f.useState)(),v=(0,a.Z)(m,2),x=v[0],b=v[1],g=(0,f.useState)(null),w=(0,a.Z)(g,2),Z=w[0],k=w[1],y=(0,l.Z)(),j=y.updateThoughtRecord,T=y.getActiveThoughtRecord,S=y.isSubmitting,C=y.saveThoughtRecord;(0,f.useEffect)((function(){if(!Z&&(0,h.KX)(c)&&x){var e=function(e,t){var n,r=(0,u.Z)(h.wv);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=o.slice(1);if(o===e)return o;if((0,h.yt)(a,t)&&null===t[a])return o}}catch(c){r.e(c)}finally{r.f()}return e}(c,x);e!==c?t(e):k(!0)}}),[Z,t,c,x]),(0,f.useEffect)((function(){var e=function(){var e=(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=10;break}if(!(0,h.OZ)(d)){e.next=5;break}b(d),e.next=10;break;case 5:return e.t0=b,e.next=8,T();case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();x||e()}),[]);var E=function(){var n=(0,o.Z)(i().mark((function n(o){var a,u,s,f;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,h.KX)(c)){n.next=26;break}if("/submit"!==c){n.next=13;break}return n.prev=2,n.next=5,C();case 5:t("/thoughtrecords"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),n.t0 instanceof Error&&e({status:"error",description:"problem submitting"});case 11:n.next=26;break;case 13:return a=c.slice(1),u=(0,h.OZ)(x)?x.key:"",s=h.wv.indexOf(c)+1,n.prev=16,n.next=19,j(o,u,a);case 19:f=n.sent,t(h.wv[s],{state:(0,r.Z)({},f)}),n.next=26;break;case 23:n.prev=23,n.t1=n.catch(16),e({status:"error",description:"problem with update"});case 26:case"end":return n.stop()}}),n,null,[[2,8],[16,23]])})));return function(e){return n.apply(this,arguments)}}(),R="",N="";return(0,h.KX)(c)&&(R=h.AB[c].label,N=c.slice(1)),{label:R,onSubmit:E,isSubmitting:S,currentQuestion:N,thoughtRecord:x,isValidQuestion:Z}}},893:function(e,t,n){var r=n(4942),o=n(1413),a=n(5861),u=n(885),c=n(7757),i=n.n(c),s=n(2791),f=n(5117),p=n(20),h=n(6601);t.Z=function(){var e=(0,p.Z)().logout,t=(0,f.Ek)(),n=(0,s.useState)(!1),c=(0,u.Z)(n,2),l=c[0],d=c[1],m=function(){var t=(0,a.Z)(i().mark((function t(n,r){var o,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,d(!0);case 4:return t.next=6,fetch(n,r);case 6:if(!(o=t.sent).ok){t.next=13;break}return t.next=10,o.json();case 10:return a=t.sent,d(!1),t.abrupt("return",a);case 13:o.status,0,e(),t.next=18;break;case 17:throw Error(o.statusText);case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(f.n3,t);case 2:if(n=e.sent,!(0,h.OZ)(n)){e.next=5;break}return e.abrupt("return",n);case 5:throw Error("not a thought record");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.Z)({method:"POST"},t),e.next=3,m(f.n3,n);case 3:if(r=e.sent,!(0,h.OZ)(r)){e.next=8;break}return e.abrupt("return",r);case 8:throw Error("response isnt valid");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.Z)({},t),e.next=3,m("".concat(f.n3,"/all"),n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:(0,o.Z)((0,o.Z)({},t.headers),{},{Accept:"application/json","Content-Type":"application/json"}),method:"POST"},e.next=3,m("".concat(f.xr,"/thoughtrecord"),n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,o.Z)((0,o.Z)({},t),{},{method:"DELETE"}),e.next=3,m("".concat(f.n3,"/").concat(n),r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=(0,a.Z)(i().mark((function e(n){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,o.Z)((0,o.Z)({},t),{},{method:"POST"}),e.next=3,m("".concat(f.n3,"/edit/").concat(n),r);case 3:if(a=e.sent,!(0,h.OZ)(a)){e.next=6;break}return e.abrupt("return",a);case 6:throw Error("Invalid return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=(0,a.Z)(i().mark((function e(n,a,u){var c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c={headers:(0,o.Z)({Accept:"application/json","Content-Type":"application/json"},t.headers),method:"PATCH"}).body=JSON.stringify((0,r.Z)({},u,n)),e.next=4,m("".concat(f.n3,"/").concat(a),c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return{deleteThoughtRecord:w,getAllThoughtRecords:b,updateThoughtRecord:k,getActiveThoughtRecord:v,getNewThoughtRecord:x,isSubmitting:l,saveThoughtRecord:g,editThoughtRecord:Z}}}}]);
//# sourceMappingURL=175.a88704fc.chunk.js.map