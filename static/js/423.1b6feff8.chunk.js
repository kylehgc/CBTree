"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[423],{457:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(885),o=n(8735),i=n(7231),a=n(1022),u=n(1070),s=n(2504),l=n(5272),c=n(2791),d=n(1789),h=n(164),f=n(184),m=function(e){return e<25?"green.400":e<50?"yellow.600":e<75?"orange.400":"red.800"},g=function(e){var t=e.deleteHandler,n=e.mood,s=e.moodRating,l=e.sliderChange,g=(0,h.Z)().currentQuestion,x=(0,c.useState)(!1),b=(0,r.Z)(x,2),v=b[0],y=b[1],w=(0,d.Z)().foregroundColor;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.pT,{in:!v,transition:{enter:{duration:.5},exit:{duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},children:(0,f.jsx)(o.xu,{w:{base:"full",lg:"50%"},my:3,alignSelf:"center",children:(0,f.jsxs)(o.Ug,{rounded:"2xl",mx:3,pl:2,minH:20,pr:1,bg:w,justifyContent:"center",children:[(0,f.jsxs)(o.gC,{ml:2,spacing:2,p:1,w:"100%",children:[(0,f.jsx)(o.xv,{w:"100%",textAlign:"left",children:n}),(0,f.jsxs)(a.iR,{colorScheme:m(s).slice(0,-4),ml:2,mr:1,mb:2,onChange:function(e){return l(e)},value:s,children:[(0,f.jsx)(a.Uj,{children:(0,f.jsx)(a.Ms,{})}),(0,f.jsx)(u.u,{hasArrow:!0,zIndex:-9999,fontSize:"sm",bg:m(s),color:"white",placement:"right",isOpen:!v,label:"".concat(s,"%"),children:(0,f.jsx)(a.gs,{bg:"teal.400"})})]})]}),"reratemoods"!==g?(0,f.jsx)(p,{deleteHandler:function(){return function(e){y(!0),setTimeout(e,500)}(t)}}):null]})})})})},p=function(e){var t=e.deleteHandler;return(0,f.jsx)(s.hU,{color:"black","aria-label":"Delete Mood",variant:"ghost",size:"lg",icon:(0,f.jsx)(l.Tw,{}),onClick:t})};t.Z=function(e){var t=e.moods,n=e.setMoods;return(0,f.jsx)(o.M5,{flexDirection:"column",w:"100%",mt:0,mb:0,children:t.map((function(e){var r,o=e.mood,i=e.moodRating;return(0,f.jsx)(g,{mood:o,deleteHandler:function(){return e=o,void n(t.filter((function(t){return t.mood!==e})));var e},sliderChange:(r=o,function(e){n((function(t){return t.map((function(t){return t.mood===r?{mood:t.mood,moodRating:e}:t}))}))}),moodRating:i},o)}))})}},913:function(e,t,n){var r=n(2982),o=n(885),i=n(278),a=n(7231),u=n(8735),s=n(3393),l=n(2504),c=n(2791),d=n(457),h=n(1789),f=n(164),m=n(184);t.Z=function(e){var t=e.isSubmitting,n=e.moods,g=e.setMoods,p=e.selectOptions,x=e.label,b=((0,h.Z)().foregroundColor,(0,f.Z)().currentQuestion),v=(0,c.useState)(""),y=(0,o.Z)(v,2),w=y[0],j=y[1];return(0,m.jsxs)(m.Fragment,{children:["reratemoods"!==b?(0,m.jsxs)(a.Rg,{offsetY:0,offsetX:50,transition:{enter:{delay:.2,duration:.5},exit:{delay:.4,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},in:!t,children:[(0,m.jsxs)(u.xu,{p:2,w:"92%",mt:6,mb:2,mx:7,children:[(0,m.jsxs)(s.lX,{mb:2,color:"white",fontSize:14,children:[" ",x,"  "]}),(0,m.jsx)(i.a7,{size:"md",onChange:function(e,t){e&&j(e.value)},options:p})]}),(0,m.jsx)(l.zx,{alignSelf:"center",bg:"white",onClick:function(){return e=w,void(!n.map((function(e){return e.mood})).includes(e)&&e&&g([].concat((0,r.Z)(n),[{mood:e,moodRating:0}])));var e},w:"60%",minH:10,my:6,children:" Add "})]}):(0,m.jsxs)(u.X6,{children:[" ",x," "]}),(0,m.jsx)(d.Z,{moods:n,setMoods:g})]})}},423:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(885),o=n(1413),i=n(2791),a=JSON.parse('[{"label":"I can\u2019t do this"},{"label":"I\u2019ll try"},{"label":"There\u2019s no use in trying"},{"label":"Let me do my best"},{"label":"I can deal with this problem one step at a time"},{"label":"Everyone will laugh at me"},{"label":"I have good ideas"},{"label":"I\u2019ve never been able to succeed"},{"label":"I don\u2019t deserve to be loved"},{"label":"I am worthy of more"},{"label":"What\u2019s the worst that can happen"},{"label":"I have valuable talents"},{"label":"So what if I don\u2019t live up to my expectations"},{"label":"Nobody\u2019s perfect"},{"label":"I can do some things well, and there are some things I need to work on"}]'),u=n(913),s=n(7231),l=n(2504),c=n(8735),d=n(1789),h=n(184),f=function(e){var t=e.thoughts,n=e.onSelect,r=e.selected,o=(0,d.Z)().foregroundColor;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.X6,{mt:4,mx:4,textAlign:"center",children:" Choose the Hot Thought "}),(0,h.jsx)(c.M5,{p:4,flexDirection:"column",mx:2,w:"100%",minHeight:"50vh",justifyContent:"space-evenly",children:t.map((function(e){return(0,h.jsx)(c.M5,{p:2,rounded:"2xl",fontSize:14,color:r===e?o:"black",minH:"10vh",width:"90%",bg:r===e?"red.500":o,onClick:function(){return n(e)},children:e},e)}))})]})},m=n(164),g=n(4176),p=function(){var e=a.map((function(e){return(0,o.Z)((0,o.Z)({},e),{},{value:e.label})})),t=(0,i.useState)([]),n=(0,r.Z)(t,2),c=n[0],p=n[1],x=(0,i.useState)(""),b=(0,r.Z)(x,2),v=b[0],y=b[1],w=(0,m.Z)(),j=w.label,Z=w.onSubmit,k=w.isSubmitting,S=w.thoughtRecord,C=(0,i.useState)(!1),T=(0,r.Z)(C,2),H=T[0],I=T[1],R=(0,d.Z)().foregroundColor;(0,i.useEffect)((function(){console.log(S),null!==S&&void 0!==S&&S.thoughts&&p(S.thoughts.thoughts)}),[S,p]);var O=c.map((function(e){return e.mood}));return S?(0,h.jsxs)(h.Fragment,{children:[H?(0,h.jsx)(s.Rg,{in:!k,offsetY:-100,transition:{enter:{delay:.3,duration:.5},exit:{delay:.5,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",minHeight:"50%",width:"100%"},children:(0,h.jsx)(f,{thoughts:O,onSelect:function(e){y(e)},selected:v})}):(0,h.jsx)(u.Z,{moods:c,isSubmitting:k,setMoods:p,selectOptions:e,label:j}),c.length>0?(0,h.jsxs)(s.Rg,{offsetY:50,transition:{enter:{delay:.4,duration:.5},exit:{delay:.3,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",minHeight:"auto",width:"100%"},in:!k,children:[(0,h.jsx)(l.zx,{mb:2,minH:10,w:"60%",mt:8,isLoading:k,bg:R,loadingText:"Submitting",onClick:function(){H?v&&Z({thoughts:c,hotThought:v}):I(!0)},children:"Submit "})," "]}):null]}):(0,h.jsx)(g.Z,{})}},7657:function(e,t,n){n.d(t,{OZ:function(){return i},lr:function(){return a},yt:function(){return r}});var r=function(e,t){return e in t},o=["key","emotion","userKey","timeCreated","mood","thoughts","answer","rerateemotion","situationquestion","evidencefor","evidenceagainst","alternativethought"],i=function(e){return!!e&&"timeCreated"in e},a=function(e){if(!e)return!1;for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if(!o.includes(r))return!1}return!0}},164:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(1413),o=n(5861),i=n(885),a=n(7757),u=n.n(a),s=n(7957),l=n(2791),c=n(6871),d=n(7657),h=n(2331),f=n(4942),m=n(20),g=["/emotion","/situationquestion","/mood","/thoughts","/evidencefor","/evidenceagainst","/alternativethought","/rerateemotion","/thoughtrecord"],p={"/emotion":{label:"How do you feel?",type:"Emotion"},"/situationquestion":{label:"What is the Situation?",type:"Text"},"/mood":{label:"Add any emotions you felt and rate them",type:"Mood"},"/thoughts":{label:"List any thoughts and rate your Belief",type:"Thoughts"},"/evidencefor":{label:"What is the Evidence for",type:"Text"},"/evidenceagainst":{label:"What is the Evidence Against",type:"Text"},"/alternativethought":{label:"",type:"Text"},"/rerateemotion":{label:"How Do you feel now?",type:"Emotion"},"/thoughtrecord":{label:"something",type:"Submit"}},x=function(e){return g.includes(e)},b=function(){var e=(0,s.pm)(),t=(0,c.s0)(),n=(0,c.TH)(),a=n.pathname,b=n.state,v=(0,l.useState)(),y=(0,i.Z)(v,2),w=y[0],j=y[1],Z=function(){var e=(0,m.ZP)().logout,t=((0,s.pm)(),(0,h.Ek)()),n=(0,l.useState)(!1),a=(0,i.Z)(n,2),c=a[0],g=a[1],p=function(){var t=(0,o.Z)(u().mark((function t(n,r){var o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,g(!0);case 4:return t.next=6,fetch(n,r);case 6:if(!(o=t.sent).ok){t.next=13;break}return t.next=10,o.json();case 10:return i=t.sent,g(!1),t.abrupt("return",i);case 13:o.status,e(),t.next=18;break;case 17:throw Error(o.statusText);case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var e=(0,o.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(h.n3,t);case 2:if(r=e.sent,!(0,d.OZ)(r)){e.next=5;break}return e.abrupt("return",r);case 5:throw Error("not a thought record");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)(u().mark((function e(n){var o,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,r.Z)({method:"POST"},t),e.next=3,p(h.n3,o);case 3:if(i=e.sent,!(0,d.OZ)(i)){e.next=8;break}return e.abrupt("return",i);case 8:throw Error("response isnt valid");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(u().mark((function e(n,o,i,a){var s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s={headers:(0,r.Z)({Accept:"application/json","Content-Type":"application/json"},t.headers),method:"PATCH"}).body=JSON.stringify((0,f.Z)({},a,n)),e.next=4,p("".concat(h.n3,"/").concat(o),s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}();return{updateThoughtRecord:v,getActiveThoughtRecord:x,getNewThoughtRecord:b,isSubmitting:c}}(),k=Z.updateThoughtRecord,S=Z.getActiveThoughtRecord,C=Z.isSubmitting,T=(0,h.LP)();if(!T)throw Error;(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=10;break}if(!(0,d.OZ)(b)){e.next=5;break}j(b),e.next=10;break;case 5:return e.t0=j,e.next=8,S(T);case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();C||e()}),[S,C,b,w,T]);var H=function(){var n=(0,o.Z)(u().mark((function n(o){var i,s,l,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!x(a)){n.next=14;break}return i=a.slice(1),s=(0,d.OZ)(w)?w.key:"",l=g.indexOf(a)+1,n.prev=4,n.next=7,k(o,s,T,i);case 7:c=n.sent,t(g[l],{state:(0,r.Z)({},c)}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),e({status:"error",description:"problem with update"});case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}(),I="",R="";return x(a)&&(I=p[a].label,R=a.slice(1)),{label:I,onSubmit:H,isSubmitting:C,currentQuestion:R,thoughtRecord:w}}}}]);
//# sourceMappingURL=423.1b6feff8.chunk.js.map