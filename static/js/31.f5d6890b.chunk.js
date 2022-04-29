"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[31],{2031:function(e,s,n){n.r(s),n.d(s,{default:function(){return I}});var r=n(1413),i=n(5861),a=n(7757),t=n.n(a),l=n(7957),o=n(8735),d=n(3393),u=n(5798),c=n(2504),x=n(6871),g=n(3504),m=n(2791),h=n(2331),p=n(5290),v=n(8361),j=n(1789),f=n(20),b=n(184);function I(){var e,s,n,a,I=(0,j.Z)(),w=I.foregroundColor,N=I.backgroundColor,S=(0,l.pm)(),y=(0,p.cI)(),k=y.register,q=y.handleSubmit,L=y.formState,Z=L.errors,Y=L.isSubmitting,C=(0,f.ZP)(),J=C.login,K=C.currentUser,U=(0,x.s0)();(0,m.useEffect)((function(){K&&U("/situationquestion")}),[K,U]);var X=function(){var e=(0,i.Z)(t().mark((function e(s){var n,r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h.$W,{body:JSON.stringify(s),method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:r=e.sent,J(r),e.next=12;break;case 11:400===n.status&&S({status:"warning",description:"UserName Already Taken"});case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(s){return e.apply(this,arguments)}}();return(0,b.jsxs)(o.Kq,{spacing:8,height:"100%",mx:"auto",maxW:"lg",py:12,px:6,children:[(0,b.jsx)(o.Kq,{align:"center",children:(0,b.jsx)(o.X6,{fontSize:"4xl",textAlign:"center",children:"Sign up"})}),(0,b.jsx)(o.xu,{rounded:"lg",bg:w,boxShadow:"lg",p:8,children:(0,b.jsx)("form",{onSubmit:q(X),children:(0,b.jsxs)(o.Kq,{spacing:4,children:[(0,b.jsxs)(o.Ug,{children:[(0,b.jsx)(o.xu,{children:(0,b.jsxs)(d.NI,{isInvalid:!(null===Z||void 0===Z||null===(e=Z.firstName)||void 0===e||!e.message),children:[(0,b.jsx)(d.lX,{children:"First Name"}),(0,b.jsx)(u.II,(0,r.Z)({type:"text"},k("firstName",{maxLength:{value:20,message:"Your name is too long"},minLength:{value:2,message:"Your name is too short"}}))),(0,b.jsx)(d.J1,{children:null===Z||void 0===Z||null===(s=Z.firstName)||void 0===s?void 0:s.message})]})}),(0,b.jsx)(o.xu,{children:(0,b.jsxs)(d.NI,{isInvalid:!(null===Z||void 0===Z||null===(n=Z.lastName)||void 0===n||!n.message),children:[(0,b.jsx)(d.lX,{children:"Last Name"}),(0,b.jsx)(u.II,(0,r.Z)({type:"text"},k("lastName",{maxLength:{value:20,message:"Your name is too long"},minLength:{value:2,message:"Your name is too short"}}))),(0,b.jsx)(d.J1,{children:null===Z||void 0===Z||null===(a=Z.lastName)||void 0===a?void 0:a.message})]})})]}),(0,b.jsx)(v.Z,{register:k,errors:Z}),(0,b.jsx)(o.Kq,{spacing:10,pt:2,children:(0,b.jsx)(c.zx,{type:"submit",isLoading:Y,loadingText:"Submitting",size:"lg",bg:N,color:w,_hover:{bg:"blue.500"},children:"Sign up"})}),(0,b.jsx)(o.Kq,{pt:6,children:(0,b.jsxs)(o.xv,{align:"center",children:["Already a user? ",(0,b.jsx)(o.rU,{as:g.rU,to:"/",color:"blue.400",children:"Login"})]})})]})})})]})}},8361:function(e,s,n){var r=n(1413),i=n(3393),a=n(5798),t=(n(2791),n(184));s.Z=function(e){var s,n,l,o=e.errors,d=e.register;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.NI,{isRequired:!0,isInvalid:!(null===o||void 0===o||!o.username),id:"email",children:[(0,t.jsx)(i.lX,{children:"Email address"}),(0,t.jsx)(a.II,(0,r.Z)({type:"text",placeholder:"Email"},d("username",{required:!0,pattern:{value:/^\S+@\S+$/i,message:"Not a valid email address"}}))),(0,t.jsx)(i.J1,{children:null===o||void 0===o||null===(s=o.username)||void 0===s?void 0:s.message})]}),(0,t.jsxs)(i.NI,{isInvalid:!(null===o||void 0===o||null===(n=o.password)||void 0===n||!n.message),id:"password",children:[(0,t.jsx)(i.lX,{children:"Password"}),(0,t.jsx)(a.II,(0,r.Z)({type:"password",placeholder:"password"},d("password",{required:!0,maxLength:{value:10,message:"Your password is too long"},minLength:{value:4,message:"Your password is too short"}}))),(0,t.jsx)(i.J1,{children:null===o||void 0===o||null===(l=o.password)||void 0===l?void 0:l.message})]})]})}}}]);
//# sourceMappingURL=31.f5d6890b.chunk.js.map