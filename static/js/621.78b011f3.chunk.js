"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[621],{5621:function(e,t,r){r.r(t),r.d(t,{default:function(){return b},isMood:function(){return v}});var n=r(885),a=r(2504),l=r(2791),u=JSON.parse('[{"label":"Afraid","value":"Afraid"},{"label":"Aggravated","value":"Aggravated"},{"label":"Angry","value":"Angry"},{"label":"Anxious","value":"Anxious"},{"label":"Ashamed","value":"Ashamed"},{"label":"Assertive","value":"Assertive"},{"label":"Burdened","value":"Burdened"},{"label":"Brave","value":"Brave"},{"label":"Calm","value":"Calm"},{"label":"Cautious","value":"Cautious"},{"label":"Challenged","value":"Challenged"},{"label":"Cheerful","value":"Cheerful"},{"label":"Cherished","value":"Cherished"},{"label":"Comforted","value":"Comforted"},{"label":"Contented","value":"Contented"},{"label":"Creative","value":"Creative"},{"label":"Curious","value":"Curious"},{"label":"Depressed","value":"Depressed"},{"label":"Embarrassed","value":"Embarrassed"},{"label":"Energized","value":"Energized"},{"label":"Envious","value":"Envious"},{"label":"Excited","value":"Excited"},{"label":"Furious","value":"Furious"},{"label":"Guilty","value":"Guilty"},{"label":"Grumpy","value":"Grumpy"},{"label":"Happy","value":"Happy"},{"label":"Hopeful","value":"Hopeful"},{"label":"Humiliated","value":"Humiliated"},{"label":"Hurt","value":"Hurt"},{"label":"Indifferent","value":"Indifferent"},{"label":"Insecure","value":"Insecure"},{"label":"Irritated","value":"Irritated"},{"label":"Lonely","value":"Lonely"},{"label":"Loved","value":"Loved"},{"label":"Mad","value":"Mad"},{"label":"Optimistic","value":"Optimistic"},{"label":"Overwhelmed","value":"Overwhelmed"},{"label":"Panicked","value":"Panicked"},{"label":"Peaceful","value":"Peaceful"},{"label":"Positive","value":"Positive"},{"label":"Pessimistic","value":"Pessimistic"},{"label":"Prepared","value":"Prepared"},{"label":"Proud","value":"Proud"},{"label":"Ready for Change","value":"Ready for Change"},{"label":"Regretful","value":"Regretful"},{"label":"Relieved","value":"Relieved"},{"label":"Renewed","value":"Renewed"},{"label":"Sad","value":"Sad"},{"label":"Self-confident","value":"Self-confident"},{"label":"Shameful","value":"Shameful"},{"label":"Skeptical","value":"Skeptical"},{"label":"Sorrowful","value":"Sorrowful"},{"label":"Suicidal","value":"Suicidal"},{"label":"Worried","value":"Worried"}]'),i=r(1789),o=r(164),s=r(1396),c=r(913),d=r(7657),f=r(184),v=function(e){return!!(Array.isArray(e)&&e.length>0)&&"mood"in e[0]},b=function(){var e=(0,l.useState)([]),t=(0,n.Z)(e,2),r=t[0],b=t[1],h=(0,i.Z)().foregroundColor,m=(0,o.Z)(),p=m.label,x=m.onSubmit,g=m.thoughtRecord,w=m.currentQuestion,y=m.isSubmitting;return(0,l.useEffect)((function(){"reratemoods"===w&&null!==g&&void 0!==g&&g.mood&&b(g.mood)}),[w,b,g]),(0,l.useEffect)((function(){if(g&&(0,d.yt)(w,g)&&0===r.length){var e=g[w];v(e)&&b(e)}}),[w,g]),g?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{isSubmitting:y,moods:r,setMoods:b,selectOptions:u,label:p}),r.length>0?(0,f.jsx)(a.zx,{mt:8,mb:2,minH:10,variant:"submit",w:"60%",isLoading:y,bg:h,loadingText:"Submitting",onClick:function(){return x(r)},children:"Submit"}):null]}):(0,f.jsx)(s.Z,{})}},457:function(e,t,r){r.d(t,{w:function(){return b}});var n=r(885),a=r(8735),l=r(7231),u=r(1022),i=r(1070),o=r(2504),s=r(5272),c=r(2791),d=r(1789),f=r(164),v=r(184),b=function(e){return e<25?"green.400":e<50?"yellow.600":e<75?"orange.400":"red.800"},h=function(e){var t=e.deleteHandler,r=e.mood,o=e.moodRating,s=e.sliderChange,h=(0,f.Z)().currentQuestion,p=(0,c.useState)(!1),x=(0,n.Z)(p,2),g=x[0],w=x[1],y=(0,d.Z)().foregroundColor;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l.pT,{in:!g,transition:{enter:{duration:.5},exit:{duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},children:(0,v.jsx)(a.xu,{w:{base:"full",lg:"50%"},my:3,alignSelf:"center",children:(0,v.jsxs)(a.Ug,{rounded:"2xl",mx:3,pl:2,minH:20,pr:1,bg:y,justifyContent:"center",children:[(0,v.jsxs)(a.gC,{ml:2,spacing:2,p:1,w:"100%",children:[(0,v.jsx)(a.xv,{w:"100%",textAlign:"left",children:r}),(0,v.jsxs)(u.iR,{colorScheme:b(o).slice(0,-4),ml:2,mr:1,mb:2,onChange:function(e){return s(e)},value:o,children:[(0,v.jsx)(u.Uj,{children:(0,v.jsx)(u.Ms,{})}),(0,v.jsx)(i.u,{hasArrow:!0,zIndex:-9999,fontSize:"sm",bg:b(o),color:"white",placement:"right",isOpen:!g,label:"".concat(o,"%"),children:(0,v.jsx)(u.gs,{bg:"teal.400"})})]})]}),"reratemoods"!==h?(0,v.jsx)(m,{deleteHandler:function(){return function(e){w(!0),setTimeout(e,500)}(t)}}):null]})})})})},m=function(e){var t=e.deleteHandler;return(0,v.jsx)(o.hU,{color:"black","aria-label":"Delete Mood",variant:"ghost",size:"lg",icon:(0,v.jsx)(s.Tw,{}),onClick:t})};t.Z=function(e){var t=e.moods,r=e.setMoods;return(0,v.jsx)(a.M5,{flexDirection:"column",w:"100%",mt:0,mb:0,children:t.map((function(e){var n,a=e.mood,l=e.moodRating;return(0,v.jsx)(h,{mood:a,deleteHandler:function(){return e=a,void r(t.filter((function(t){return t.mood!==e})));var e},sliderChange:(n=a,function(e){r((function(t){return t.map((function(t){return t.mood===n?{mood:t.mood,moodRating:e}:t}))}))}),moodRating:l},a)}))})}},913:function(e,t,r){var n=r(2982),a=r(885),l=r(4607),u=r(7231),i=r(8735),o=r(3393),s=r(2504),c=r(2791),d=r(457),f=r(164),v=r(184);t.Z=function(e){var t=e.isSubmitting,r=e.moods,b=e.setMoods,h=e.selectOptions,m=e.label,p=(0,f.Z)().currentQuestion,x=(0,c.useState)(""),g=(0,a.Z)(x,2),w=g[0],y=g[1];return(0,v.jsxs)(v.Fragment,{children:["reratemoods"!==p?(0,v.jsxs)(u.Rg,{offsetY:0,offsetX:50,transition:{enter:{delay:.2,duration:.5},exit:{delay:.4,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},in:!t,children:[(0,v.jsxs)(i.xu,{p:2,w:"92%",mt:6,mb:2,mx:7,children:[(0,v.jsx)(o.lX,{mb:2,color:"white",fontSize:14,children:m}),(0,v.jsx)(l.a7,{size:"md",onChange:function(e,t){e&&y(e.value)},options:h})]}),(0,v.jsx)(s.zx,{alignSelf:"center",bg:"white",onClick:function(){return e=w,void(!r.map((function(e){return e.mood})).includes(e)&&e&&b([].concat((0,n.Z)(r),[{mood:e,moodRating:0}])));var e},w:"60%",minH:10,my:6,children:"Add"})]}):(0,v.jsxs)(i.X6,{children:[" ",m," "]}),(0,v.jsx)(d.Z,{moods:r,setMoods:b})]})}},164:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(1413),a=r(5861),l=r(885),u=r(7762),i=r(7757),o=r.n(i),s=r(7957),c=r(2791),d=r(6871),f=r(7657),v=r(2331),b=r(4942),h=r(20),m=function(){var e=(0,s.pm)(),t=(0,d.s0)(),r=(0,d.TH)(),i=r.pathname,m=r.state,p=(0,c.useState)(),x=(0,l.Z)(p,2),g=x[0],w=x[1],y=(0,c.useState)(null),S=(0,l.Z)(y,2),Z=S[0],k=S[1],C=function(){var e=(0,h.Z)().logout,t=(0,v.Ek)(),r=(0,c.useState)(!1),u=(0,l.Z)(r,2),i=u[0],s=u[1],d=function(){var t=(0,a.Z)(o().mark((function t(r,n){var a,l;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,s(!0);case 4:return t.next=6,fetch(r,n);case 6:if(!(a=t.sent).ok){t.next=13;break}return t.next=10,a.json();case 10:return l=t.sent,s(!1),t.abrupt("return",l);case 13:a.status,e(),t.next=18;break;case 17:throw Error(a.statusText);case 18:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(v.n3,t);case 2:if(n=e.sent,!(0,f.OZ)(n)){e.next=5;break}return e.abrupt("return",n);case 5:throw Error("not a thought record");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(o().mark((function e(){var r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,n.Z)({method:"POST"},t),e.next=3,d(v.n3,r);case 3:if(a=e.sent,!(0,f.OZ)(a)){e.next=8;break}return e.abrupt("return",a);case 8:throw Error("response isnt valid");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:(0,n.Z)((0,n.Z)({},(0,v.Ek)().headers),{},{Accept:"application/json","Content-Type":"application/json"}),method:"POST"},e.next=3,d("".concat(v.xr,"/thoughtrecord"),t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,a.Z)(o().mark((function e(r,a,l){var u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u={headers:(0,n.Z)({Accept:"application/json","Content-Type":"application/json"},t.headers),method:"PATCH"}).body=JSON.stringify((0,b.Z)({},l,r)),e.next=4,d("".concat(v.n3,"/").concat(a),u);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return{updateThoughtRecord:g,getActiveThoughtRecord:m,getNewThoughtRecord:p,isSubmitting:i,saveThoughtRecord:x}}(),j=C.updateThoughtRecord,R=C.getActiveThoughtRecord,A=C.isSubmitting,E=C.saveThoughtRecord,T=(0,v.LP)();if(!T)throw Error;(0,c.useEffect)((function(){if(!Z&&(0,f.KX)(i)&&g){var e=function(e,t){var r,n=(0,u.Z)(f.wv);try{for(n.s();!(r=n.n()).done;){var a=r.value,l=a.slice(1);if(a===e)return a;if((0,f.yt)(l,t)&&null===t[l])return a}}catch(i){n.e(i)}finally{n.f()}return e}(i,g);e!==i?t(e):k(!0)}}),[Z,t,i,g]),(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=10;break}if(!(0,f.OZ)(m)){e.next=5;break}w(m),e.next=10;break;case 5:return e.t0=w,e.next=8,R(T);case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();A||e()}),[R,A,m,g,T]);var H=function(){var r=(0,a.Z)(o().mark((function r(a){var l,u,s,c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(0,f.KX)(i)){r.next=26;break}if("/submit"!==i){r.next=13;break}return r.prev=2,r.next=5,E();case 5:t("/"),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),r.t0 instanceof Error&&e({status:"error",description:"problem submitting"});case 11:r.next=26;break;case 13:return l=i.slice(1),u=(0,f.OZ)(g)?g.key:"",s=f.wv.indexOf(i)+1,r.prev=16,r.next=19,j(a,u,l);case 19:c=r.sent,t(f.wv[s],{state:(0,n.Z)({},c)}),r.next=26;break;case 23:r.prev=23,r.t1=r.catch(16),e({status:"error",description:"problem with update"});case 26:case"end":return r.stop()}}),r,null,[[2,8],[16,23]])})));return function(e){return r.apply(this,arguments)}}(),O="",P="";return(0,f.KX)(i)&&(O=f.AB[i].label,P=i.slice(1)),{label:O,onSubmit:H,isSubmitting:A,currentQuestion:P,thoughtRecord:g,isValidQuestion:Z}}}}]);
//# sourceMappingURL=621.78b011f3.chunk.js.map