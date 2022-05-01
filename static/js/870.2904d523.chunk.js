"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[870],{7870:function(e,r,s){s.r(r);var n=s(1413),o=s(5861),i=s(7757),t=s.n(i),a=s(7957),l=s(8735),c=s(2504),d=s(20),u=s(5290),g=s(2331),x=s(8361),h=s(1789),p=s(2791),m=s(6871),v=s(3504),b=s(4176),j=s(184);r.default=function(){var e=(0,a.pm)(),r=(0,d.ZP)(),s=r.login,i=r.currentUser,f=(0,h.Z)(),w=f.foregroundColor,S=f.backgroundColor,k=(0,u.cI)(),I=k.register,Z=k.handleSubmit,q=k.formState,y=q.errors,U=q.isSubmitting,L=(0,m.s0)(),P=(0,m.TH)().state,C=(0,g.LP)();(0,p.useEffect)((function(){i&&L((null===P||void 0===P?void 0:P.path)||"/emotion")}),[i,L,null===P||void 0===P?void 0:P.path]);var E=function(){var r=(0,o.Z)(t().mark((function r(o){var i,a;return t().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch(g.gs,{body:new URLSearchParams((0,n.Z)({},o)),method:"POST",mode:"cors"});case 3:if(200!==(i=r.sent).status){r.next=13;break}return r.next=7,i.json();case 7:return a=r.sent,e({status:"success",description:"Logged in.  Redirecting..."}),r.next=11,s(a);case 11:r.next=14;break;case 13:throw new Error("Incorrect Username or Password");case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),r.t0 instanceof Error&&e({status:"error",description:r.t0.message});case 19:case"end":return r.stop()}}),r,null,[[0,16]])})));return function(e){return r.apply(this,arguments)}}();return C?(0,j.jsx)(b.Z,{}):(0,j.jsxs)(l.Kq,{spacing:8,mx:"auto",maxW:"lg",maxH:"100%",py:12,px:6,children:[(0,j.jsx)(l.Kq,{align:"center",children:(0,j.jsx)(l.X6,{fontSize:"4xl",children:"Sign in to your account"})}),(0,j.jsx)("form",{onSubmit:Z(E),children:(0,j.jsx)(l.xu,{rounded:"lg",bg:w,boxShadow:"lg",p:8,children:(0,j.jsxs)(l.Kq,{spacing:4,children:[(0,j.jsx)(x.Z,{register:I,errors:y}),(0,j.jsxs)(l.Kq,{spacing:8,children:[(0,j.jsx)(l.Kq,{direction:{base:"column",sm:"row"},align:"start",spacing:4,justify:"space-between",children:(0,j.jsx)(l.rU,{color:"blue.400",children:"Forgot password?"})}),(0,j.jsx)(c.zx,{type:"submit",isLoading:U,loadingText:"Submitting",variant:"loginSubmit",textColor:"white",bg:S,_hover:{bg:"blue.500"},children:"Sign in"}),(0,j.jsx)(l.rU,{as:v.rU,to:"/signup",textAlign:"center",color:"blue.400",children:"New User? Sign up here!"})]})]})})})]})}},8361:function(e,r,s){var n=s(1413),o=s(3393),i=s(5798),t=(s(2791),s(184));r.Z=function(e){var r,s,a,l=e.errors,c=e.register;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.NI,{isRequired:!0,isInvalid:!(null===l||void 0===l||!l.username),id:"email",children:[(0,t.jsx)(o.lX,{color:"black",children:"Email address"}),(0,t.jsx)(i.II,(0,n.Z)({color:"black",type:"text",placeholder:"Email"},c("username",{required:!0,pattern:{value:/^\S+@\S+$/i,message:"Not a valid email address"}}))),(0,t.jsx)(o.J1,{children:null===l||void 0===l||null===(r=l.username)||void 0===r?void 0:r.message})]}),(0,t.jsxs)(o.NI,{isInvalid:!(null===l||void 0===l||null===(s=l.password)||void 0===s||!s.message),id:"password",children:[(0,t.jsx)(o.lX,{color:"black",children:"Password"}),(0,t.jsx)(i.II,(0,n.Z)({color:"black",type:"password",placeholder:"password"},c("password",{required:!0,maxLength:{value:10,message:"Your password is too long"},minLength:{value:4,message:"Your password is too short"}}))),(0,t.jsx)(o.J1,{children:null===l||void 0===l||null===(a=l.password)||void 0===a?void 0:a.message})]})]})}}}]);
//# sourceMappingURL=870.2904d523.chunk.js.map