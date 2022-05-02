"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[862],{6431:function(e,t,n){var r=n(5790),o=n(8735),i=n(1789),a=n(184);t.Z=function(e){var t=e.label,n=e.popoverText,c=(0,i.Z)().foregroundColor;return(0,a.jsxs)(r.Qd,{alignSelf:"center",my:2,ml:{base:5,lg:0},w:{base:"90%",lg:"100%"},bg:c,children:[(0,a.jsx)(o.X6,{color:"black",children:(0,a.jsxs)(r.KF,{children:[(0,a.jsx)(o.xu,{textColor:"black",flex:"1",textAlign:"left",children:t}),(0,a.jsx)(r.XE,{})]})}),(0,a.jsx)(r.Hk,{color:"black",p:4,children:n})]})}},2404:function(e,t,n){var r=n(5790),o=n(6431),i=n(184);t.Z=function(e){var t=e.argumentsText,n=t.argFor,a=t.argAgainst;return(0,i.jsxs)(r.UQ,{allowMultiple:!0,alignSelf:"center",w:"100%",allowToggle:!0,children:[(0,i.jsx)(o.Z,{label:"Arguments For",popoverText:n}),(0,i.jsx)(o.Z,{label:"Arguments Against",popoverText:a})]})}},439:function(e,t,n){n.r(t),n.d(t,{default:function(){return g},emotions:function(){return m}});var r=n(885),o=n(8735),i=n(2504),a=n(2791),c=n(8227),s=n(855),u=n(4483),l=n(184),d=function(e){var t=e.emotionName,n=e.setSelected,r=e.selected,o=m.filter((function(e){return t===e.emotionName}))[0],i=o.emotionColor,a=o.icon,d=(0,c.ff)("black","white"),h=(0,s.Sx)({base:"3x",lg:"5x"}),f=function(e){return r&&e!==r?d:i}(t);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(u.G,{size:h,onClick:function(){return function(e){n(e===r?"":e)}(t)},"aria-label":"".concat(t," button"),color:f,icon:a})})},h=n(1396),f=n(164),x=n(3174),m=[{icon:x.jur,emotionColor:"#322659",emotionName:"Awful"},{icon:x.FRD,emotionColor:"#2C5282",emotionName:"Meh"},{icon:x.pkM,emotionColor:"#68D391",emotionName:"Good"},{icon:x.g91,emotionColor:"#F6E05E",emotionName:"Awesome"}],g=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],c=t[1],s=function(e){var t;return null===(t=m.filter((function(t){return t.emotionName===e}))[0])||void 0===t?void 0:t.emotionColor}(n),u=(0,f.Z)(),x=u.label,g=u.isSubmitting,p=u.onSubmit;return u.thoughtRecord?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.M5,{rounded:"75px",border:n?"15px solid":"none",borderColor:s,m:0,mx:-20,w:{base:"auto",lg:"100vw"},p:2,height:"150vh",flexDir:"column",children:[(0,l.jsx)(o.X6,{position:"fixed",top:48,p:0,children:x}),(0,l.jsx)(o.Ug,{height:"50%",p:2,w:{base:"100%",lg:"50%"},spacing:{base:12,lg:"auto"},children:m.map((function(e){var t=e.emotionName;return(0,l.jsx)(d,{emotionName:t,selected:n,setSelected:c},t)}))}),(0,l.jsx)(o.gC,{p:2,w:"full",height:"10vh",spacing:6,children:n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.X6,{color:s,children:[" ",n," "]}),(0,l.jsx)(i.zx,{m:2,isLoading:g,onClick:function(){return p(n)},w:"60%",minH:"40px",bg:"white",children:"Submit"})]}):null})]})}):(0,l.jsx)(h.Z,{})}},7083:function(e,t,n){var r=n(8735),o=n(1789),i=n(184);t.Z=function(e){var t=e.hotThought,n=(0,o.Z)().foregroundColor;return(0,i.jsxs)(r.gC,{w:"full",spacing:-1,children:[(0,i.jsx)(r.Ct,{alignSelf:"end",my:2,mr:6,colorScheme:"red",variant:"solid",children:"Hot Thought"}),(0,i.jsx)(r.M5,{bg:"red.500",p:2,color:n,alignSelf:"center",w:"90%",textAlign:"center",minH:{base:"80px",lg:"20vh"},rounded:"2xl",children:t})]})}},457:function(e,t,n){n.d(t,{w:function(){return x}});var r=n(885),o=n(8735),i=n(7231),a=n(1022),c=n(1070),s=n(2504),u=n(5272),l=n(2791),d=n(1789),h=n(164),f=n(184),x=function(e){return e<25?"green.400":e<50?"yellow.600":e<75?"orange.400":"red.800"},m=function(e){var t=e.deleteHandler,n=e.mood,s=e.moodRating,u=e.sliderChange,m=(0,h.Z)().currentQuestion,p=(0,l.useState)(!1),v=(0,r.Z)(p,2),b=v[0],j=v[1],w=(0,d.Z)().foregroundColor;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.pT,{in:!b,transition:{enter:{duration:.5},exit:{duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},children:(0,f.jsx)(o.xu,{w:{base:"full",lg:"50%"},my:3,alignSelf:"center",children:(0,f.jsxs)(o.Ug,{rounded:"2xl",mx:3,pl:2,minH:20,pr:1,bg:w,justifyContent:"center",children:[(0,f.jsxs)(o.gC,{ml:2,spacing:2,p:1,w:"100%",children:[(0,f.jsx)(o.xv,{w:"100%",textAlign:"left",children:n}),(0,f.jsxs)(a.iR,{colorScheme:x(s).slice(0,-4),ml:2,mr:1,mb:2,onChange:function(e){return u(e)},value:s,children:[(0,f.jsx)(a.Uj,{children:(0,f.jsx)(a.Ms,{})}),(0,f.jsx)(c.u,{hasArrow:!0,zIndex:-9999,fontSize:"sm",bg:x(s),color:"white",placement:"right",isOpen:!b,label:"".concat(s,"%"),children:(0,f.jsx)(a.gs,{bg:"teal.400"})})]})]}),"reratemoods"!==m?(0,f.jsx)(g,{deleteHandler:function(){return function(e){j(!0),setTimeout(e,500)}(t)}}):null]})})})})},g=function(e){var t=e.deleteHandler;return(0,f.jsx)(s.hU,{color:"black","aria-label":"Delete Mood",variant:"ghost",size:"lg",icon:(0,f.jsx)(u.Tw,{}),onClick:t})};t.Z=function(e){var t=e.moods,n=e.setMoods;return(0,f.jsx)(o.M5,{flexDirection:"column",w:"100%",mt:0,mb:0,children:t.map((function(e){var r,o=e.mood,i=e.moodRating;return(0,f.jsx)(m,{mood:o,deleteHandler:function(){return e=o,void n(t.filter((function(t){return t.mood!==e})));var e},sliderChange:(r=o,function(e){n((function(t){return t.map((function(t){return t.mood===r?{mood:t.mood,moodRating:e}:t}))}))}),moodRating:i},o)}))})}},862:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(2504),o=n(164),i=n(1396),a=n(8735),c=n(8227),s=n(7279),u=n(7657),l=n(1789),d=n(457),h=n(5790),f=n(6431),x=n(7083),m=n(2404),g=n(439),p=n(4483),v=n(9482),b=n(184),j=function(e){var t=e.moods,n=e.label,r=(0,l.Z)().foregroundColor;return(0,b.jsxs)(a.kC,{flexDirection:"column",m:2,alignItems:"flexStart",justifyContent:"left",w:"100%",children:[(0,b.jsx)(a.X6,{m:2,ml:4,textAlign:"center",children:n}),(0,b.jsx)(a.aV,{m:2,w:"85%",alignItems:"center",alignSelf:"center",bg:r,p:2,pb:4,children:t.map((function(e){var t=e.mood,n=e.moodRating;return(0,b.jsxs)(a.HC,{p:2,width:"full",children:[(0,b.jsx)(a.DE,{boxSize:8,color:(0,d.w)(n),as:v.bOb}),(0,b.jsx)(a.xv,{m:2,color:"black",position:"relative",bottom:2,textAlign:"center",display:"inline-flex",children:t}),(0,b.jsx)(c.iJ,{children:(0,b.jsx)(s.Ex,{size:"sm",colorScheme:(0,d.w)(n).slice(0,-4),value:n})})]},t)}))})]})},w=function(e){var t=e.emotionName,n=e.label,r=g.emotions.filter((function(e){return t===e.emotionName}))[0],o=r.icon,i=r.emotionColor;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(a.gC,{spacing:4,children:[(0,b.jsxs)(a.X6,{textAlign:"center",children:[" ",n," "]}),(0,b.jsx)(p.G,{size:"6x",icon:o,color:i}),(0,b.jsxs)(a.X6,{color:i,children:[" ",t," "]})]})})},Z=function(e){var t=e.thoughtRecord;if(!(0,u.lr)(t))return(0,b.jsx)(i.Z,{});var n={argFor:t.evidencefor,argAgainst:t.evidenceagainst};return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(a.gC,{m:0,overflow:{base:"auto",lg:"visible"},spacing:10,width:{base:"100%",lg:"70%"},children:[(0,b.jsx)(w,{label:"Emotion",emotionName:t.emotion}),(0,b.jsx)(h.UQ,{allowToggle:!0,w:"100%",children:(0,b.jsx)(f.Z,{label:"The Situation",popoverText:t.situationquestion})}),(0,b.jsx)(j,{moods:t.mood,label:"Moods"}),(0,b.jsx)(j,{moods:t.thoughts.thoughts,label:"Thoughts"}),(0,b.jsx)(x.Z,{hotThought:t.thoughts.hotThought}),(0,b.jsx)(m.Z,{argumentsText:n}),(0,b.jsx)(j,{moods:t.alternativethought,label:"Alternative thoughts"}),(0,b.jsx)(w,{label:"After Emotion",emotionName:t.rerateemotion})]})})},k=function(){var e=(0,o.Z)(),t=e.thoughtRecord,n=e.onSubmit,a=e.isSubmitting;return e.isValidQuestion&&t?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z,{thoughtRecord:t}),(0,b.jsx)(r.zx,{mt:2,variant:"submit",isLoading:a,onClick:function(){return n(t)},children:"Finish Thought Record"})]}):(0,b.jsx)(i.Z,{})}},164:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(1413),o=n(5861),i=n(885),a=n(7762),c=n(7757),s=n.n(c),u=n(7957),l=n(2791),d=n(6871),h=n(7657),f=n(2331),x=n(4942),m=n(20),g=function(){var e=(0,u.pm)(),t=(0,d.s0)(),n=(0,d.TH)(),c=n.pathname,g=n.state,p=(0,l.useState)(),v=(0,i.Z)(p,2),b=v[0],j=v[1],w=(0,l.useState)(null),Z=(0,i.Z)(w,2),k=Z[0],C=Z[1],S=function(){var e=(0,m.Z)().logout,t=(0,f.Ek)(),n=(0,l.useState)(!1),a=(0,i.Z)(n,2),c=a[0],u=a[1],d=function(){var t=(0,o.Z)(s().mark((function t(n,r){var o,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,u(!0);case 4:return t.next=6,fetch(n,r);case 6:if(!(o=t.sent).ok){t.next=13;break}return t.next=10,o.json();case 10:return i=t.sent,u(!1),t.abrupt("return",i);case 13:o.status,e(),t.next=18;break;case 17:throw Error(o.statusText);case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f.n3,t);case 2:if(r=e.sent,!(0,h.OZ)(r)){e.next=5;break}return e.abrupt("return",r);case 5:throw Error("not a thought record");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)(s().mark((function e(){var n,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,r.Z)({method:"POST"},t),e.next=3,d(f.n3,n);case 3:if(o=e.sent,!(0,h.OZ)(o)){e.next=8;break}return e.abrupt("return",o);case 8:throw Error("response isnt valid");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:(0,r.Z)((0,r.Z)({},(0,f.Ek)().headers),{},{Accept:"application/json","Content-Type":"application/json"}),method:"POST"},e.next=3,d("".concat(f.xr,"/thoughtrecord"),t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)(s().mark((function e(n,o,i){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a={headers:(0,r.Z)({Accept:"application/json","Content-Type":"application/json"},t.headers),method:"PATCH"}).body=JSON.stringify((0,x.Z)({},i,n)),e.next=4,d("".concat(f.n3,"/").concat(o),a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return{updateThoughtRecord:b,getActiveThoughtRecord:g,getNewThoughtRecord:p,isSubmitting:c,saveThoughtRecord:v}}(),T=S.updateThoughtRecord,y=S.getActiveThoughtRecord,A=S.isSubmitting,R=S.saveThoughtRecord,E=(0,f.LP)();if(!E)throw Error;(0,l.useEffect)((function(){if(!k&&(0,h.KX)(c)&&b){var e=function(e,t){var n,r=(0,a.Z)(h.wv);try{for(r.s();!(n=r.n()).done;){var o=n.value,i=o.slice(1);if(o===e)return o;if((0,h.yt)(i,t)&&null===t[i])return o}}catch(c){r.e(c)}finally{r.f()}return e}(c,b);e!==c?t(e):C(!0)}}),[k,t,c,b]),(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=10;break}if(!(0,h.OZ)(g)){e.next=5;break}j(g),e.next=10;break;case 5:return e.t0=j,e.next=8,y(E);case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();A||e()}),[y,A,g,b,E]);var N=function(){var n=(0,o.Z)(s().mark((function n(o){var i,a,u,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,h.KX)(c)){n.next=26;break}if("/submit"!==c){n.next=13;break}return n.prev=2,n.next=5,R();case 5:t("/"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),n.t0 instanceof Error&&e({status:"error",description:"problem submitting"});case 11:n.next=26;break;case 13:return i=c.slice(1),a=(0,h.OZ)(b)?b.key:"",u=h.wv.indexOf(c)+1,n.prev=16,n.next=19,T(o,a,i);case 19:l=n.sent,t(h.wv[u],{state:(0,r.Z)({},l)}),n.next=26;break;case 23:n.prev=23,n.t1=n.catch(16),e({status:"error",description:"problem with update"});case 26:case"end":return n.stop()}}),n,null,[[2,8],[16,23]])})));return function(e){return n.apply(this,arguments)}}(),F="",H="";return(0,h.KX)(c)&&(F=h.AB[c].label,H=c.slice(1)),{label:F,onSubmit:N,isSubmitting:A,currentQuestion:H,thoughtRecord:b,isValidQuestion:k}}}}]);
//# sourceMappingURL=862.2e16cab8.chunk.js.map