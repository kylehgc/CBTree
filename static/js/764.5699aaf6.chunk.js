"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[764],{6764:function(e,r,a){a.r(r),a.d(r,{default:function(){return p}});var n=a(885),i=a(9982),l=a(3393),t=a(1340),o=a(6134),s=a(2791);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var d=["className","rows"],c=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Textarea",e),n=(0,t.Lr)(e),i=n.className,c=n.rows,v=function(e,r){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(i[a]=e[a]);return i}(n,d),m=(0,l.Yp)(v),f=c?(0,o.CE)(a,["h","minH","height","minHeight"]):a;return s.createElement(t.m$.textarea,u({ref:r,rows:c},m,{className:(0,o.cx)("chakra-textarea",i),__css:f}))}));o.Ts&&(c.displayName="Textarea");var v=a(8735),m=a(2504),f=a(1789),h=a(184),p=function(){var e=(0,f.Z)().foregroundColor,r=(0,s.useState)(""),a=(0,n.Z)(r,2),l=a[0],t=a[1],o=(0,i.Z)({answer:l}),u=(0,n.Z)(o,2),d=(u[0],u[1]);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(v.gC,{rounded:"3xl",w:"full",minH:"100%",flexDirection:"column",spacing:8,justifyContent:"center",mx:2,pb:6,px:5,pt:2,children:[(0,h.jsx)(c,{placeholder:"We're testing right now",onChange:function(e){t(e.target.value)},value:l,_placeholder:{color:"blackAlpha.800",fontSize:"3xl"},p:4,m:2,bg:e,h:"80%",w:"full",rounded:"xl",size:"lg"}),(0,h.jsx)(m.zx,{onClick:d,variant:"submit",children:"Submit"})]})})}},9982:function(e,r,a){var n=a(2791),i=a(6871),l=["/situationquestion","/mood","/thoughts","/evidencefor","/evidenceagainst","/alternativethought","/reratemood","/Submit"],t={"/situationquestion":"What is the Situation?","/mood":"Add any emotions you felt and rate them","/thoughts":"List any thoughts and rate your Belief","/evidencefor":"What is the Evidence for","/evidenceagainst":"What is the Evidence Against","/alternativethought":"List any alternative thoughts and rate them","/reratemood":"rerate your moods","/Submit":"something"};r.Z=function(e){var r=(0,i.s0)(),a=(0,i.TH)().pathname;console.log(a);var o=t[a];console.log(o),(0,n.useEffect)((function(){window.localStorage.setItem(a,JSON.stringify(e)),console.log(a,window.localStorage.getItem(a))}),[e,a]);return[o,function(){var e=l.indexOf(a)+1;return function(){return r(l[e])}}()]}},3393:function(e,r,a){a.d(r,{J1:function(){return k},NI:function(){return p},Yp:function(){return x},lX:function(){return _}});var n=a(5223),i=a(1340),l=a(6134),t=a(9611),o=a(2791),s=a(9113);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function d(e,r){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(i[a]=e[a]);return i}var c=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],m=(0,t.kr)({strict:!1,name:"FormControlContext"}),f=m[0],h=m[1];var p=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Form",e),s=function(e){var r=e.id,a=e.isRequired,i=e.isInvalid,s=e.isDisabled,v=e.isReadOnly,m=d(e,c),f=(0,n.Me)(),h=r||"field-"+f,p=h+"-label",b=h+"-feedback",g=h+"-helptext",y=o.useState(!1),x=y[0],k=y[1],q=o.useState(!1),I=q[0],_=q[1],N=(0,n.kt)(),R=N[0],O=N[1],F=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({id:g},e,{ref:(0,t.lq)(r,(function(e){e&&_(!0)}))})}),[g]),T=o.useCallback((function(e,r){var a,n;return void 0===e&&(e={}),void 0===r&&(r=null),u({},e,{ref:r,"data-focus":(0,l.PB)(R),"data-disabled":(0,l.PB)(s),"data-invalid":(0,l.PB)(i),"data-readonly":(0,l.PB)(v),id:null!=(a=e.id)?a:p,htmlFor:null!=(n=e.htmlFor)?n:h})}),[h,s,R,i,v,p]),E=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({id:b},e,{ref:(0,t.lq)(r,(function(e){e&&k(!0)})),"aria-live":"polite"})}),[b]),P=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({},e,m,{ref:r,role:"group"})}),[m]),C=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!i,isReadOnly:!!v,isDisabled:!!s,isFocused:!!R,onFocus:O.on,onBlur:O.off,hasFeedbackText:x,setHasFeedbackText:k,hasHelpText:I,setHasHelpText:_,id:h,labelId:p,feedbackId:b,helpTextId:g,htmlProps:m,getHelpTextProps:F,getErrorMessageProps:E,getRootProps:P,getLabelProps:T,getRequiredIndicatorProps:C}}((0,i.Lr)(e)),m=s.getRootProps;s.htmlProps;var h=d(s,v),p=(0,l.cx)("chakra-form-control",e.className);return o.createElement(f,{value:h},o.createElement(i.Fo,{value:a},o.createElement(i.m$.div,u({},m({},r),{className:p,__css:a.container}))))}));l.Ts&&(p.displayName="FormControl");var b=(0,i.Gp)((function(e,r){var a=h(),n=(0,i.yK)(),t=(0,l.cx)("chakra-form__helper-text",e.className);return o.createElement(i.m$.div,u({},null==a?void 0:a.getHelpTextProps(e,r),{__css:n.helperText,className:t}))}));l.Ts&&(b.displayName="FormHelperText");var g=["isDisabled","isInvalid","isReadOnly","isRequired"],y=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function x(e){var r=function(e){var r,a,n,i=h(),t=e.id,o=e.disabled,s=e.readOnly,c=e.required,v=e.isRequired,m=e.isInvalid,f=e.isReadOnly,p=e.isDisabled,b=e.onFocus,g=e.onBlur,x=d(e,y),k=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&k.push(i.feedbackId);null!=i&&i.hasHelpText&&k.push(i.helpTextId);return u({},x,{"aria-describedby":k.join(" ")||void 0,id:null!=t?t:null==i?void 0:i.id,isDisabled:null!=(r=null!=o?o:p)?r:null==i?void 0:i.isDisabled,isReadOnly:null!=(a=null!=s?s:f)?a:null==i?void 0:i.isReadOnly,isRequired:null!=(n=null!=c?c:v)?n:null==i?void 0:i.isRequired,isInvalid:null!=m?m:null==i?void 0:i.isInvalid,onFocus:(0,l.v0)(null==i?void 0:i.onFocus,b),onBlur:(0,l.v0)(null==i?void 0:i.onBlur,g)})}(e),a=r.isDisabled,n=r.isInvalid,i=r.isReadOnly,t=r.isRequired;return u({},d(r,g),{disabled:a,readOnly:i,required:t,"aria-invalid":(0,l.Qm)(n),"aria-required":(0,l.Qm)(t),"aria-readonly":(0,l.Qm)(i)})}var k=(0,i.Gp)((function(e,r){var a=(0,i.jC)("FormError",e),n=(0,i.Lr)(e),t=h();return null!=t&&t.isInvalid?o.createElement(i.Fo,{value:a},o.createElement(i.m$.div,u({},null==t?void 0:t.getErrorMessageProps(n,r),{className:(0,l.cx)("chakra-form__error-message",e.className),__css:u({display:"flex",alignItems:"center"},a.text)}))):null}));l.Ts&&(k.displayName="FormErrorMessage");var q=(0,i.Gp)((function(e,r){var a=(0,i.yK)(),n=h();if(null==n||!n.isInvalid)return null;var t=(0,l.cx)("chakra-form__error-icon",e.className);return o.createElement(s.ZP,u({ref:r,"aria-hidden":!0},e,{__css:a.icon,className:t}),o.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));l.Ts&&(q.displayName="FormErrorIcon");var I=["className","children","requiredIndicator"],_=(0,i.Gp)((function(e,r){var a,n=(0,i.mq)("FormLabel",e),t=(0,i.Lr)(e);t.className;var s=t.children,c=t.requiredIndicator,v=void 0===c?o.createElement(N,null):c,m=d(t,I),f=h(),p=null!=(a=null==f?void 0:f.getLabelProps(m,r))?a:u({ref:r},m);return o.createElement(i.m$.label,u({},p,{className:(0,l.cx)("chakra-form__label",t.className),__css:u({display:"block",textAlign:"start"},n)}),s,null!=f&&f.isRequired?v:null)}));l.Ts&&(_.displayName="FormLabel");var N=(0,i.Gp)((function(e,r){var a=h(),n=(0,i.yK)();if(null==a||!a.isRequired)return null;var t=(0,l.cx)("chakra-form__required-indicator",e.className);return o.createElement(i.m$.span,u({},null==a?void 0:a.getRequiredIndicatorProps(e,r),{__css:n.requiredIndicator,className:t}))}));l.Ts&&(N.displayName="RequiredIndicator")}}]);
//# sourceMappingURL=764.5699aaf6.chunk.js.map