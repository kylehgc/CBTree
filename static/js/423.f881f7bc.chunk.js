"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[423],{913:function(e,t,n){var o=n(2982),i=n(885),l=n(1678),s=n(7231),a=n(8735),r=n(3393),u=n(2504),d=n(2791),c=n(2386),h=n(9982),m=n(184);t.Z=function(e){var t=e.isSubmitting,n=e.moods,f=e.setMoods,g=e.selectOptions,b=e.label,x=(0,h.Z)().currentQuestion,p=(0,d.useState)(""),v=(0,i.Z)(p,2),y=v[0],j=v[1];return(0,m.jsxs)(m.Fragment,{children:["reratemoods"!==x?(0,m.jsxs)(s.Rg,{offsetY:0,offsetX:50,transition:{enter:{delay:.2,duration:.5},exit:{delay:.4,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",height:"auto",width:"100%"},in:!t,children:[(0,m.jsxs)(a.xu,{p:2,w:"92%",mt:6,mb:2,mx:7,children:[(0,m.jsx)(r.lX,{mb:2,color:"white",fontSize:14,children:b}),(0,m.jsx)(l.a7,{size:"md",onChange:function(e,t){e&&j(e.value)},options:g})]}),(0,m.jsx)(u.zx,{alignSelf:"center",onClick:function(){return e=y,void(!n.map((function(e){return e.mood})).includes(e)&&e&&f([].concat((0,o.Z)(n),[{mood:e,moodRating:0}])));var e},w:"60%",minH:10,my:6,children:"Add"})]}):(0,m.jsxs)(a.X6,{children:[" ",b," "]}),(0,m.jsx)(c.Z,{moods:n,setMoods:f})]})}},423:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var o=n(885),i=n(1413),l=n(2791),s=JSON.parse('[{"label":"I can\u2019t do this"},{"label":"I\u2019ll try"},{"label":"There\u2019s no use in trying"},{"label":"Let me do my best"},{"label":"I can deal with this problem one step at a time"},{"label":"Everyone will laugh at me"},{"label":"I have good ideas"},{"label":"I\u2019ve never been able to succeed"},{"label":"I don\u2019t deserve to be loved"},{"label":"I am worthy of more"},{"label":"What\u2019s the worst that can happen"},{"label":"I have valuable talents"},{"label":"So what if I don\u2019t live up to my expectations"},{"label":"Nobody\u2019s perfect"},{"label":"I can do some things well, and there are some things I need to work on"}]'),a=n(913),r=n(7231),u=n(2504),d=n(8735),c=n(1789),h=n(184),m=function(e){var t=e.thoughts,n=e.onSelect,o=e.selected,i=(0,c.Z)().foregroundColor;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.X6,{mt:4,mx:4,textAlign:"center",children:"Choose the Hot Thought"}),(0,h.jsx)(d.M5,{p:4,flexDirection:"column",mx:2,w:"100%",minHeight:"50vh",justifyContent:"space-evenly",children:t.map((function(e){return(0,h.jsx)(d.M5,{p:2,rounded:"2xl",fontSize:14,color:o===e?"white":"inital",minH:"10vh",width:"90%",bg:o===e?"red.500":i,onClick:function(){return n(e)},children:e},e)}))})]})},f=n(9982),g=n(1396),b=function(){var e=s.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{value:e.label})})),t=(0,l.useState)([]),n=(0,o.Z)(t,2),d=n[0],b=n[1],x=(0,l.useState)(""),p=(0,o.Z)(x,2),v=p[0],y=p[1],j=(0,f.Z)(),w=j.label,S=j.onSubmit,Z=j.isSubmitting,I=j.thoughtRecord,C=(0,l.useState)(!1),k=(0,o.Z)(C,2),H=k[0],z=k[1],M=(0,c.Z)().foregroundColor;(0,l.useEffect)((function(){null!==I&&void 0!==I&&I.thoughts&&b(I.thoughts.thoughts)}),[I,b]);var R=d.map((function(e){return e.mood}));return I?(0,h.jsxs)(h.Fragment,{children:[H?(0,h.jsx)(r.Rg,{in:!Z,offsetY:-100,transition:{enter:{delay:.3,duration:.5},exit:{delay:.5,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",minHeight:"50%",width:"100%"},children:(0,h.jsx)(m,{thoughts:R,onSelect:function(e){y(e)},selected:v})}):(0,h.jsx)(a.Z,{moods:d,isSubmitting:Z,setMoods:b,selectOptions:e,label:w}),d.length>0?(0,h.jsx)(r.Rg,{offsetY:50,transition:{enter:{delay:.4,duration:.5},exit:{delay:.3,duration:.5}},style:{flexDirection:"column",alignItems:"center",display:"flex",minHeight:"auto",width:"100%"},in:!Z,children:(0,h.jsx)(u.zx,{mb:2,minH:10,w:"60%",mt:8,isLoading:Z,bg:M,loadingText:"Submitting",onClick:function(){H?v&&S({thoughts:d,hotThought:v}):z(!0)},children:"Submit"})}):null]}):(0,h.jsx)(g.Z,{})}}}]);
//# sourceMappingURL=423.f881f7bc.chunk.js.map