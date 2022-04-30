"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[554],{7231:function(t,n,e){e.d(n,{Rg:function(){return D},UO:function(){return w},pT:function(){return k}});var i=e(6134),r=e(6198),a=e.n(r),o=e(7425),s=e(5456),l=e(2791);function u(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}function d(){return d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},d.apply(this,arguments)}var c={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},f={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},v={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},x={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},y={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function m(t){var n;switch(null!=(n=null==t?void 0:t.direction)?n:"right"){case"right":default:return v;case"left":return f;case"bottom":return y;case"top":return x}}var E={enter:{duration:.2,ease:c.easeOut},exit:{duration:.1,ease:c.easeIn}},p=function(t,n){return d({},t,{delay:(0,i.hj)(n)?n:null==n?void 0:n.enter})},h=function(t,n){return d({},t,{delay:(0,i.hj)(n)?n:null==n?void 0:n.exit})},g=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],O={exit:{height:{duration:.2,ease:c.ease},opacity:{duration:.3,ease:c.ease}},enter:{height:{duration:.3,ease:c.ease},opacity:{duration:.4,ease:c.ease}}},b={exit:function(t){var n,e,i=t.animateOpacity,r=t.startingHeight,a=t.transition,o=t.transitionEnd,s=t.delay;return d({},i&&{opacity:(e=r,null!=e&&parseInt(e.toString(),10)>0?1:0)},{overflow:"hidden",height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(n=null==a?void 0:a.exit)?n:h(O.exit,s)})},enter:function(t){var n,e=t.animateOpacity,i=t.endingHeight,r=t.transition,a=t.transitionEnd,o=t.delay;return d({},e&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(n=null==r?void 0:r.enter)?n:p(O.enter,o)})}},w=l.forwardRef((function(t,n){var e=t.in,r=t.unmountOnExit,c=t.animateOpacity,f=void 0===c||c,v=t.startingHeight,x=void 0===v?0:v,y=t.endingHeight,m=void 0===y?"auto":y,E=t.style,p=t.className,h=t.transition,O=t.transitionEnd,w=u(t,g),N=l.useState(!1),j=N[0],k=N[1];l.useEffect((function(){var t=setTimeout((function(){k(!0)}));return function(){return clearTimeout(t)}}),[]),(0,i.ZK)({condition:Boolean(x>0&&r),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var S=parseFloat(x.toString())>0,P={startingHeight:x,endingHeight:m,animateOpacity:f,transition:j?h:{enter:{duration:0}},transitionEnd:a()(O,{enter:{overflow:"initial"},exit:r?void 0:{display:S?"block":"none"}})},H=!r||e,T=e||r?"enter":"exit";return l.createElement(o.M,{initial:!1,custom:P},H&&l.createElement(s.E.div,d({ref:n},w,{className:(0,i.cx)("chakra-collapse",p),style:d({overflow:"hidden",display:"block"},E),custom:P,variants:b,initial:!!r&&"exit",animate:T,exit:"exit"})))}));i.Ts&&(w.displayName="Collapse");var N=["unmountOnExit","in","className","transition","transitionEnd","delay"],j={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(t){var n,e=void 0===t?{}:t,i=e.transition,r=e.transitionEnd,a=e.delay;return{opacity:1,transition:null!=(n=null==i?void 0:i.enter)?n:p(E.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(t){var n,e=void 0===t?{}:t,i=e.transition,r=e.transitionEnd,a=e.delay;return{opacity:0,transition:null!=(n=null==i?void 0:i.exit)?n:h(E.exit,a),transitionEnd:null==r?void 0:r.exit}}}},k=l.forwardRef((function(t,n){var e=t.unmountOnExit,r=t.in,a=t.className,c=t.transition,f=t.transitionEnd,v=t.delay,x=u(t,N),y=r||e?"enter":"exit",m=!e||r&&e,E={transition:c,transitionEnd:f,delay:v};return l.createElement(o.M,{custom:E},m&&l.createElement(s.E.div,d({ref:n,className:(0,i.cx)("chakra-fade",a),custom:E},j,{animate:y},x)))}));i.Ts&&(k.displayName="Fade");var S=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],P={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(t){var n,e=t.reverse,i=t.initialScale,r=t.transition,a=t.transitionEnd,o=t.delay;return d({opacity:0},e?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:d({scale:i},null==a?void 0:a.exit)},{transition:null!=(n=null==r?void 0:r.exit)?n:h(E.exit,o)})},enter:function(t){var n,e=t.transitionEnd,i=t.transition,r=t.delay;return{opacity:1,scale:1,transition:null!=(n=null==i?void 0:i.enter)?n:p(E.enter,r),transitionEnd:null==e?void 0:e.enter}}}},H=l.forwardRef((function(t,n){var e=t.unmountOnExit,r=t.in,a=t.reverse,c=void 0===a||a,f=t.initialScale,v=void 0===f?.95:f,x=t.className,y=t.transition,m=t.transitionEnd,E=t.delay,p=u(t,S),h=!e||r&&e,g=r||e?"enter":"exit",O={initialScale:v,reverse:c,transition:y,transitionEnd:m,delay:E};return l.createElement(o.M,{custom:O},h&&l.createElement(s.E.div,d({ref:n,className:(0,i.cx)("chakra-offset-slide",x)},P,{animate:g,custom:O},p)))}));i.Ts&&(H.displayName="ScaleFade");var T=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],R={exit:{duration:.15,ease:c.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},Y={exit:function(t){var n,e=t.direction,i=t.transition,r=t.transitionEnd,a=t.delay;return d({},m({direction:e}).exit,{transition:null!=(n=null==i?void 0:i.exit)?n:h(R.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(t){var n,e=t.direction,i=t.transitionEnd,r=t.transition,a=t.delay;return d({},m({direction:e}).enter,{transition:null!=(n=null==r?void 0:r.enter)?n:p(R.enter,a),transitionEnd:null==i?void 0:i.enter})}},I=l.forwardRef((function(t,n){var e=t.direction,r=void 0===e?"right":e,a=t.style,c=t.unmountOnExit,f=t.in,v=t.className,x=t.transition,y=t.transitionEnd,E=t.delay,p=u(t,T),h=m({direction:r}),g=Object.assign({position:"fixed"},h.position,a),O=!c||f&&c,b=f||c?"enter":"exit",w={transitionEnd:y,transition:x,direction:r,delay:E};return l.createElement(o.M,{custom:w},O&&l.createElement(s.E.div,d({},p,{ref:n,initial:"exit",className:(0,i.cx)("chakra-slide",v),animate:b,exit:"exit",custom:w,variants:Y,style:g})))}));i.Ts&&(I.displayName="Slide");var M=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],X={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(t){var n,e=t.offsetX,i=t.offsetY,r=t.transition,a=t.transitionEnd,o=t.delay;return{opacity:0,x:e,y:i,transition:null!=(n=null==r?void 0:r.exit)?n:h(E.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(t){var n,e=t.transition,i=t.transitionEnd,r=t.delay;return{opacity:1,x:0,y:0,transition:null!=(n=null==e?void 0:e.enter)?n:p(E.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(t){var n,e=t.offsetY,i=t.offsetX,r=t.transition,a=t.transitionEnd,o=t.reverse,s=t.delay,l={x:i,y:e};return d({opacity:0,transition:null!=(n=null==r?void 0:r.exit)?n:h(E.exit,s)},o?d({},l,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:d({},l,null==a?void 0:a.exit)})}}},D=l.forwardRef((function(t,n){var e=t.unmountOnExit,r=t.in,a=t.reverse,c=void 0===a||a,f=t.className,v=t.offsetX,x=void 0===v?0:v,y=t.offsetY,m=void 0===y?8:y,E=t.transition,p=t.transitionEnd,h=t.delay,g=u(t,M),O=!e||r&&e,b=r||e?"enter":"exit",w={offsetX:x,offsetY:m,reverse:c,transition:E,transitionEnd:p,delay:h};return l.createElement(o.M,{custom:w},O&&l.createElement(s.E.div,d({ref:n,className:(0,i.cx)("chakra-offset-slide",f),custom:w},X,{animate:b},g)))}));i.Ts&&(D.displayName="SlideFade")},4942:function(t,n,e){function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return i}})},1413:function(t,n,e){e.d(n,{Z:function(){return a}});var i=e(4942);function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){(0,i.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}}}]);
//# sourceMappingURL=554.cf0198ab.chunk.js.map