"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[397],{6431:function(e,t,n){var r=n(5790),o=n(8735),i=n(1789),a=n(184);t.Z=function(e){var t=e.label,n=e.popoverText,u=(0,i.Z)().foregroundColor;return(0,a.jsxs)(r.Qd,{my:2,ml:5,w:"90%",bg:u,children:[(0,a.jsx)(o.X6,{color:"black",children:(0,a.jsxs)(r.KF,{children:[(0,a.jsx)(o.xu,{flex:"1",textAlign:"left",children:t}),(0,a.jsx)(r.XE,{})]})}),(0,a.jsx)(r.Hk,{p:4,children:n})]})}},2404:function(e,t,n){var r=n(5790),o=n(6431),i=n(184);t.Z=function(e){var t=e.argumentsText,n=t.argFor,a=t.argAgainst;return(0,i.jsxs)(r.UQ,{allowMultiple:!0,alignSelf:"center",w:"100%",allowToggle:!0,children:[(0,i.jsx)(o.Z,{label:"Arguments For",popoverText:n}),(0,i.jsx)(o.Z,{label:"Arguments Against",popoverText:a})]})}},439:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},emotions:function(){return f}});var r=n(885),o=n(8735),i=n(2504),a=n(2791),u=n(9482),s=n(1789),c=n(184),l=function(e){var t=e.emotion,n=e.setSelected,r=e.selected,o=(0,s.Z)().backgroundColor,a=t.emotionName,u=t.emotionColor,l=t.icon;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.hU,{size:"lg",_hover:{background:o},_active:{background:o},onClick:function(){return function(e){n(e===r?"":e)}(a)},"aria-label":"".concat(a," button"),as:l,bg:o,color:function(e){return r&&e!==r?"black":u}(a)})})},d=n(4176),h=n(164),f=[{icon:u.O4l,emotionColor:"purple.900",emotionName:"Awful"},{icon:u.FKc,emotionColor:"blue.700",emotionName:"Meh"},{icon:u.b8H,emotionColor:"green.300",emotionName:"Good"},{icon:u.Cjz,emotionColor:"yellow.300",emotionName:"Awesome"}],m=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],u=t[1],s=function(e){var t;return null===(t=f.filter((function(t){return t.emotionName===e}))[0])||void 0===t?void 0:t.emotionColor}(n),m=(0,h.Z)(),x=m.label,g=m.isSubmitting,p=m.onSubmit;return m.thoughtRecord?(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.M5,{rounded:"75px",border:n?"15px solid":"none",borderColor:s,p:4,height:"full",minHeight:"90%",flexDir:"column",children:[(0,c.jsxs)(o.X6,{position:"fixed",top:"25vh",children:[" ",x," "]}),(0,c.jsx)(o.Ug,{height:"50%",w:"100%",spacing:8,children:f.map((function(e){return(0,c.jsx)(l,{emotion:e,selected:n,setSelected:u},e.emotionName)}))}),(0,c.jsx)(o.gC,{p:2,w:"full",height:"15vh",spacing:12,children:n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.X6,{color:s,children:["  ",n," "]}),(0,c.jsx)(i.zx,{isLoading:g,onClick:function(){return p(n)},w:"60%",minH:"60px",bg:"white",children:" Submit "})]}):null})]})}):(0,c.jsx)(d.Z,{})}},7083:function(e,t,n){var r=n(8735),o=n(1789),i=n(184);t.Z=function(e){var t=e.hotThought,n=(0,o.Z)().foregroundColor;return(0,i.jsxs)(r.gC,{w:"full",spacing:-1,children:[(0,i.jsx)(r.Ct,{alignSelf:"end",my:2,mr:6,colorScheme:"red",variant:"solid",children:"Hot Thought"}),(0,i.jsx)(r.M5,{bg:"red.500",p:2,color:n,alignSelf:"center",w:"90%",textAlign:"center",minH:"80px",rounded:"2xl",children:t})]})}},457:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(885),o=n(8735),i=n(7231),a=n(1022),u=n(1070),s=n(2504),c=n(5272),l=n(2791),d=n(1789),h=n(164),f=n(184),m=function(e){return e<25?"green.400":e<50?"yellow.600":e<75?"orange.400":"red.800"},x=function(e){var t=e.deleteHandler,n=e.mood,s=e.moodRating,c=e.sliderChange,x=(0,h.Z)().currentQuestion,p=(0,l.useState)(!1),v=(0,r.Z)(p,2),b=v[0],j=v[1],w=(0,d.Z)().foregroundColor;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.pT,{in:!b,transition:{enter:{duration:.5},exit:{duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},children:(0,f.jsx)(o.xu,{w:{base:"full",lg:"50%"},my:3,alignSelf:"center",children:(0,f.jsxs)(o.Ug,{rounded:"2xl",mx:3,pl:2,minH:20,pr:1,bg:w,justifyContent:"center",children:[(0,f.jsxs)(o.gC,{ml:2,spacing:2,p:1,w:"100%",children:[(0,f.jsx)(o.xv,{w:"100%",textAlign:"left",children:n}),(0,f.jsxs)(a.iR,{colorScheme:m(s).slice(0,-4),ml:2,mr:1,mb:2,onChange:function(e){return c(e)},value:s,children:[(0,f.jsx)(a.Uj,{children:(0,f.jsx)(a.Ms,{})}),(0,f.jsx)(u.u,{hasArrow:!0,zIndex:-9999,fontSize:"sm",bg:m(s),color:"white",placement:"right",isOpen:!b,label:"".concat(s,"%"),children:(0,f.jsx)(a.gs,{bg:"teal.400"})})]})]}),"reratemoods"!==x?(0,f.jsx)(g,{deleteHandler:function(){return function(e){j(!0),setTimeout(e,500)}(t)}}):null]})})})})},g=function(e){var t=e.deleteHandler;return(0,f.jsx)(s.hU,{"aria-label":"Delete Mood",variant:"ghost",size:"lg",icon:(0,f.jsx)(c.Tw,{}),onClick:t})};t.Z=function(e){var t=e.moods,n=e.setMoods;return(0,f.jsx)(o.M5,{flexDirection:"column",w:"100%",mt:0,mb:0,children:t.map((function(e){var r,o=e.mood,i=e.moodRating;return(0,f.jsx)(x,{mood:o,deleteHandler:function(){return e=o,void n(t.filter((function(t){return t.mood!==e})));var e},sliderChange:(r=o,function(e){n((function(t){return t.map((function(t){return t.mood===r?{mood:t.mood,moodRating:e}:t}))}))}),moodRating:i},o)}))})}},1397:function(e,t,n){n.r(t);var r=n(164),o=n(8735),i=n(7279),a=n(9113),u=n(4176),s=n(7657),c=n(1789),l=n(9482),d=n(457),h=n(5790),f=n(6431),m=n(7083),x=n(2404),g=n(439),p=n(184),v=function(e){var t=e.moods,n=e.label,r=(0,c.Z)().foregroundColor;return(0,p.jsxs)(o.kC,{flexDirection:"column",m:2,alignItems:"flexStart",justifyContent:"left",w:"100%",children:[(0,p.jsxs)(o.X6,{m:2,ml:4,textAlign:"center",children:[" ",n," "]}),(0,p.jsx)(o.aV,{m:2,w:"80%",alignItems:"center",alignSelf:"center",bg:r,p:2,pb:4,children:t.map((function(e){var t=e.mood,n=e.moodRating;return(0,p.jsxs)(o.HC,{p:2,width:"full",children:[(0,p.jsx)(o.DE,{boxSize:8,color:(0,d.w)(n),as:l.bOb}),(0,p.jsx)(o.xv,{m:2,position:"relative",bottom:2,textAlign:"right",display:"inline-flex",children:t}),(0,p.jsx)(i.Ex,{size:"xs",colorScheme:(0,d.w)(n).slice(0,-4),value:n})]},t)}))})]})},b=function(e){var t=e.emotionName,n=e.label,r=g.emotions.filter((function(e){return t===e.emotionName}))[0],i=r.icon,u=r.emotionColor;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(o.gC,{spacing:2,children:[(0,p.jsxs)(o.X6,{textAlign:"center",children:[" ",n," "]}),(0,p.jsx)(a.JO,{boxSize:36,as:i,color:u}),(0,p.jsxs)(o.X6,{color:u,children:[" ",t," "]})]})})};t.default=function(){var e=(0,r.Z)().thoughtRecord;if(!(0,s.lr)(e))return(0,p.jsx)(u.Z,{});var t={argFor:e.evidencefor,argAgainst:e.evidenceagainst};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(o.gC,{overflow:"scroll",m:0,spacing:10,width:"100%",children:[(0,p.jsx)(b,{label:"Emotion",emotionName:e.emotion}),(0,p.jsx)(h.UQ,{allowToggle:!0,w:"100%",children:(0,p.jsx)(f.Z,{label:"The Situation",popoverText:e.situationquestion})}),(0,p.jsx)(v,{moods:e.mood,label:"Moods"}),(0,p.jsx)(v,{moods:e.thoughts.thoughts,label:"Thoughts"}),(0,p.jsx)(m.Z,{hotThought:e.thoughts.hotThought}),(0,p.jsx)(x.Z,{argumentsText:t}),(0,p.jsx)(v,{moods:e.alternativethought,label:"Alternative thoughts"}),(0,p.jsx)(b,{label:"After Emotion",emotionName:e.rerateemotion})]})})}},7657:function(e,t,n){n.d(t,{OZ:function(){return i},lr:function(){return a},yt:function(){return r}});var r=function(e,t){return e in t},o=["key","emotion","userKey","timeCreated","mood","thoughts","answer","rerateemotion","situationquestion","evidencefor","evidenceagainst","alternativethought"],i=function(e){return!!e&&"timeCreated"in e},a=function(e){if(!e)return!1;for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if(!o.includes(r))return!1}return!0}},164:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(1413),o=n(5861),i=n(885),a=n(7757),u=n.n(a),s=n(7957),c=n(2791),l=n(6871),d=n(7657),h=n(2331),f=n(4942),m=n(20),x=["/emotion","/situationquestion","/mood","/thoughts","/evidencefor","/evidenceagainst","/alternativethought","/rerateemotion","/thoughtrecord"],g={"/emotion":{label:"How do you feel?",type:"Emotion"},"/situationquestion":{label:"What is the Situation?",type:"Text"},"/mood":{label:"Add any emotions you felt and rate them",type:"Mood"},"/thoughts":{label:"List any thoughts and rate your Belief",type:"Thoughts"},"/evidencefor":{label:"What is the Evidence for",type:"Text"},"/evidenceagainst":{label:"What is the Evidence Against",type:"Text"},"/alternativethought":{label:"",type:"Text"},"/rerateemotion":{label:"How Do you feel now?",type:"Emotion"},"/thoughtrecord":{label:"something",type:"Submit"}},p=function(e){return x.includes(e)},v=function(){var e=(0,s.pm)(),t=(0,l.s0)(),n=(0,l.TH)(),a=n.pathname,v=n.state,b=(0,c.useState)(),j=(0,i.Z)(b,2),w=j[0],Z=j[1],y=function(){var e=(0,m.ZP)().logout,t=((0,s.pm)(),(0,h.Ek)()),n=(0,c.useState)(!1),a=(0,i.Z)(n,2),l=a[0],x=a[1],g=function(){var t=(0,o.Z)(u().mark((function t(n,r){var o,i;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,x(!0);case 4:return t.next=6,fetch(n,r);case 6:if(!(o=t.sent).ok){t.next=13;break}return t.next=10,o.json();case 10:return i=t.sent,x(!1),t.abrupt("return",i);case 13:o.status,e(),t.next=18;break;case 17:throw Error(o.statusText);case 18:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(h.n3,t);case 2:if(r=e.sent,!(0,d.OZ)(r)){e.next=5;break}return e.abrupt("return",r);case 5:throw Error("not a thought record");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(u().mark((function e(n){var o,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,r.Z)({method:"POST"},t),e.next=3,g(h.n3,o);case 3:if(i=e.sent,!(0,d.OZ)(i)){e.next=8;break}return e.abrupt("return",i);case 8:throw Error("response isnt valid");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,o.Z)(u().mark((function e(n,o,i,a){var s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s={headers:(0,r.Z)({Accept:"application/json","Content-Type":"application/json"},t.headers),method:"PATCH"}).body=JSON.stringify((0,f.Z)({},a,n)),e.next=4,g("".concat(h.n3,"/").concat(o),s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}();return{updateThoughtRecord:b,getActiveThoughtRecord:p,getNewThoughtRecord:v,isSubmitting:l}}(),C=y.updateThoughtRecord,k=y.getActiveThoughtRecord,T=y.isSubmitting,S=(0,h.LP)();if(!S)throw Error;(0,c.useEffect)((function(){var e=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=10;break}if(!(0,d.OZ)(v)){e.next=5;break}Z(v),e.next=10;break;case 5:return e.t0=Z,e.next=8,k(S);case 8:e.t1=e.sent,(0,e.t0)(e.t1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();T||e()}),[k,T,v,w,S]);var A=function(){var n=(0,o.Z)(u().mark((function n(o){var i,s,c,l;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!p(a)){n.next=14;break}return i=a.slice(1),s=(0,d.OZ)(w)?w.key:"",c=x.indexOf(a)+1,n.prev=4,n.next=7,C(o,s,S,i);case 7:l=n.sent,t(x[c],{state:(0,r.Z)({},l)}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),e({status:"error",description:"problem with update"});case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}(),H="",E="";return p(a)&&(H=g[a].label,E=a.slice(1)),{label:H,onSubmit:A,isSubmitting:T,currentQuestion:E,thoughtRecord:w}}}}]);
//# sourceMappingURL=397.ceff9207.chunk.js.map