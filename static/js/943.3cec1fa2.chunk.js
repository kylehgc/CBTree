"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[943],{4562:function(e,t,n){n.d(t,{n:function(){return v}});var r=n(9611),o=n(2791);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e){return e.sort((function(e,t){var n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function s(e,t,n){var r=e+1;return n&&r>=t&&(r=0),r}function f(e,t,n){var r=e-1;return n&&r<0&&(r=t),r}var u="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,c=function(){var e=this;this.descendants=new Map,this.register=function(t){var n;if(null!=t)return"object"==typeof(n=t)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?e.registerNode(t):function(n){e.registerNode(n,t)}},this.unregister=function(t){e.descendants.delete(t);var n=a(Array.from(e.descendants.keys()));e.assignIndex(n)},this.destroy=function(){e.descendants.clear()},this.assignIndex=function(t){e.descendants.forEach((function(e){var n=t.indexOf(e.node);e.index=n,e.node.dataset.index=e.index.toString()}))},this.count=function(){return e.descendants.size},this.enabledCount=function(){return e.enabledValues().length},this.values=function(){return Array.from(e.descendants.values()).sort((function(e,t){return e.index-t.index}))},this.enabledValues=function(){return e.values().filter((function(e){return!e.disabled}))},this.item=function(t){if(0!==e.count())return e.values()[t]},this.enabledItem=function(t){if(0!==e.enabledCount())return e.enabledValues()[t]},this.first=function(){return e.item(0)},this.firstEnabled=function(){return e.enabledItem(0)},this.last=function(){return e.item(e.descendants.size-1)},this.lastEnabled=function(){var t=e.enabledValues().length-1;return e.enabledItem(t)},this.indexOf=function(t){var n,r;return t&&null!=(n=null==(r=e.descendants.get(t))?void 0:r.index)?n:-1},this.enabledIndexOf=function(t){return null==t?-1:e.enabledValues().findIndex((function(e){return e.node.isSameNode(t)}))},this.next=function(t,n){void 0===n&&(n=!0);var r=s(t,e.count(),n);return e.item(r)},this.nextEnabled=function(t,n){void 0===n&&(n=!0);var r=e.item(t);if(r){var o=s(e.enabledIndexOf(r.node),e.enabledCount(),n);return e.enabledItem(o)}},this.prev=function(t,n){void 0===n&&(n=!0);var r=f(t,e.count()-1,n);return e.item(r)},this.prevEnabled=function(t,n){void 0===n&&(n=!0);var r=e.item(t);if(r){var o=f(e.enabledIndexOf(r.node),e.enabledCount()-1,n);return e.enabledItem(o)}},this.registerNode=function(t,n){if(t&&!e.descendants.has(t)){var r=a(Array.from(e.descendants.keys()).concat(t));null!=n&&n.disabled&&(n.disabled=!!n.disabled);var o=i({node:t,index:-1},n);e.descendants.set(t,o),e.assignIndex(r)}}};var l=(0,r.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),d=l[0],p=l[1];function v(){return[d,function(){return p()},function(){return function(){var e=(0,o.useRef)(new c);return u((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var t=p(),n=(0,o.useState)(-1),i=n[0],a=n[1],s=(0,o.useRef)(null);u((function(){return function(){s.current&&t.unregister(s.current)}}),[]),u((function(){if(s.current){var e=Number(s.current.dataset.index);i==e||Number.isNaN(e)||a(e)}}));var f=e?t.register(e):t.register;return{descendants:t,index:i,enabledIndex:t.enabledIndexOf(s.current),register:(0,r.lq)(f,s)}}(e)}]}},565:function(e,t,n){n.d(t,{j:function(){return be},D:function(){return Re}});var r=n(9611);function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof o(e).Element||e instanceof Element}function a(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!==typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}var f=Math.max,u=Math.min,c=Math.round;function l(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(a(e)&&t){var i=e.offsetHeight,s=e.offsetWidth;s>0&&(r=c(n.width)/s||1),i>0&&(o=c(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function d(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function p(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function h(e){return l(v(e)).left+d(e).scrollLeft}function m(e){return o(e).getComputedStyle(e)}function g(e){var t=m(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function b(e,t,n){void 0===n&&(n=!1);var r=a(t),i=a(t)&&function(e){var t=e.getBoundingClientRect(),n=c(t.width)/e.offsetWidth||1,r=c(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),s=v(t),f=l(e,i),u={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(r||!r&&!n)&&(("body"!==p(t)||g(s))&&(u=function(e){return e!==o(e)&&a(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:d(e);var t}(t)),a(t)?((m=l(t,!0)).x+=t.clientLeft,m.y+=t.clientTop):s&&(m.x=h(s))),{x:f.left+u.scrollLeft-m.x,y:f.top+u.scrollTop-m.y,width:f.width,height:f.height}}function y(e){var t=l(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function w(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||v(e)}function x(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:a(e)&&g(e)?e:x(w(e))}function O(e,t){var n;void 0===t&&(t=[]);var r=x(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],g(r)?r:[]):r,f=t.concat(s);return i?f:f.concat(O(w(s)))}function E(e){return["table","td","th"].indexOf(p(e))>=0}function N(e){return a(e)&&"fixed"!==m(e).position?e.offsetParent:null}function j(e){for(var t=o(e),n=N(e);n&&E(n)&&"static"===m(n).position;)n=N(n);return n&&("html"===p(n)||"body"===p(n)&&"static"===m(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&a(e)&&"fixed"===m(e).position)return null;var n=w(e);for(s(n)&&(n=n.host);a(n)&&["html","body"].indexOf(p(n))<0;){var r=m(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="top",C="bottom",I="right",P="left",k="auto",A=[D,C,I,P],R="start",S="end",T="viewport",M="popper",W=A.reduce((function(e,t){return e.concat([t+"-"+R,t+"-"+S])}),[]),L=[].concat(A,[k]).reduce((function(e,t){return e.concat([t,t+"-"+R,t+"-"+S])}),[]),z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function B(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function _(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var H={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function V(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?H:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},H,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],f=!1,u={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},a,o.options,f),o.scrollParents={reference:i(e)?O(e):e.contextElement?O(e.contextElement):[],popper:O(t)};var l=function(e){var t=B(e);return z.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),f=function(){};s.push(a||f)}})),u.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(q(t,n)){o.rects={reference:b(t,j(n),"fixed"===o.options.strategy),popper:y(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,c=void 0===s?{}:s,l=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:l,instance:u})||o)}else o.reset=!1,r=-1}}},update:_((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!q(e,t))return u;function c(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var U={passive:!0};function F(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?F(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case D:t={x:s,y:n.y-r.height};break;case C:t={x:s,y:n.y+n.height};break;case I:t={x:n.x+n.width,y:f};break;case P:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var u=i?G(i):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case R:t[u]=t[u]-(n[c]/2-r[c]/2);break;case S:t[u]=t[u]+(n[c]/2-r[c]/2)}}return t}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,f=e.position,u=e.gpuAcceleration,l=e.adaptive,d=e.roundOffsets,p=e.isFixed,h=s.x,g=void 0===h?0:h,b=s.y,y=void 0===b?0:b,w="function"===typeof d?d({x:g,y:y}):{x:g,y:y};g=w.x,y=w.y;var x=s.hasOwnProperty("x"),O=s.hasOwnProperty("y"),E=P,N=D,k=window;if(l){var A=j(n),R="clientHeight",T="clientWidth";if(A===o(n)&&"static"!==m(A=v(n)).position&&"absolute"===f&&(R="scrollHeight",T="scrollWidth"),i===D||(i===P||i===I)&&a===S)N=C,y-=(p&&A===k&&k.visualViewport?k.visualViewport.height:A[R])-r.height,y*=u?1:-1;if(i===P||(i===D||i===C)&&a===S)E=I,g-=(p&&A===k&&k.visualViewport?k.visualViewport.width:A[T])-r.width,g*=u?1:-1}var M,W=Object.assign({position:f},l&&J),L=!0===d?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:c(t*r)/r||0,y:c(n*r)/r||0}}({x:g,y:y}):{x:g,y:y};return g=L.x,y=L.y,u?Object.assign({},W,((M={})[N]=O?"0":"",M[E]=x?"0":"",M.transform=(k.devicePixelRatio||1)<=1?"translate("+g+"px, "+y+"px)":"translate3d("+g+"px, "+y+"px, 0)",M)):Object.assign({},W,((t={})[N]=O?y+"px":"",t[E]=x?g+"px":"",t.transform="",t))}var Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=L.reduce((function(e,n){return e[n]=function(e,t,n){var r=F(e),o=[P,D].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,I].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},Z={left:"right",right:"left",bottom:"top",top:"bottom"};function $(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===T?re(function(e){var t=o(e),n=v(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:i,height:a,x:s+h(e),y:f}}(e)):i(t)?function(e){var t=l(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,n=v(e),r=d(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=f(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=f(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+h(e),u=-r.scrollTop;return"rtl"===m(o||n).direction&&(s+=f(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:u}}(v(e)))}function ie(e,t,n){var r="clippingParents"===t?function(e){var t=O(w(e)),n=["absolute","fixed"].indexOf(m(e).position)>=0&&a(e)?j(e):e;return i(n)?t.filter((function(e){return i(e)&&ne(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),s=o[0],c=o.reduce((function(t,n){var r=oe(e,n);return t.top=f(r.top,t.top),t.right=u(r.right,t.right),t.bottom=u(r.bottom,t.bottom),t.left=f(r.left,t.left),t}),oe(e,s));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,s=void 0===a?"clippingParents":a,f=n.rootBoundary,u=void 0===f?T:f,c=n.elementContext,d=void 0===c?M:c,p=n.altBoundary,h=void 0!==p&&p,m=n.padding,g=void 0===m?0:m,b=ae("number"!==typeof g?g:se(g,A)),y=d===M?"reference":M,w=e.rects.popper,x=e.elements[h?y:d],O=ie(i(x)?x:x.contextElement||v(e.elements.popper),s,u),E=l(e.elements.reference),N=X({reference:E,element:w,strategy:"absolute",placement:o}),j=re(Object.assign({},w,N)),P=d===M?j:E,k={top:O.top-P.top+b.top,bottom:P.bottom-O.bottom+b.bottom,left:O.left-P.left+b.left,right:P.right-O.right+b.right},R=e.modifiersData.offset;if(d===M&&R){var S=R[o];Object.keys(k).forEach((function(e){var t=[I,C].indexOf(e)>=0?1:-1,n=[D,C].indexOf(e)>=0?"y":"x";k[e]+=S[n]*t}))}return k}function ue(e,t,n){return f(e,u(t,n))}var ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.padding,v=n.tether,h=void 0===v||v,m=n.tetherOffset,g=void 0===m?0:m,b=fe(t,{boundary:c,rootBoundary:l,padding:p,altBoundary:d}),w=F(t.placement),x=Y(t.placement),O=!x,E=G(w),N="x"===E?"y":"x",k=t.modifiersData.popperOffsets,A=t.rects.reference,S=t.rects.popper,T="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,M="number"===typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),W=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(k){if(i){var z,B="y"===E?D:P,_="y"===E?C:I,H="y"===E?"height":"width",q=k[E],V=q+b[B],U=q-b[_],X=h?-S[H]/2:0,J=x===R?A[H]:S[H],K=x===R?-S[H]:-A[H],Q=t.elements.arrow,Z=h&&Q?y(Q):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[B],te=$[_],ne=ue(0,A[H],Z[H]),re=O?A[H]/2-X-ne-ee-M.mainAxis:J-ne-ee-M.mainAxis,oe=O?-A[H]/2+X+ne+te+M.mainAxis:K+ne+te+M.mainAxis,ie=t.elements.arrow&&j(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(z=null==W?void 0:W[E])?z:0,ce=q+oe-se,le=ue(h?u(V,q+re-se-ae):V,q,h?f(U,ce):U);k[E]=le,L[E]=le-q}if(s){var de,pe="x"===E?D:P,ve="x"===E?C:I,he=k[N],me="y"===N?"height":"width",ge=he+b[pe],be=he-b[ve],ye=-1!==[D,P].indexOf(w),we=null!=(de=null==W?void 0:W[N])?de:0,xe=ye?ge:he-A[me]-S[me]-we+M.altAxis,Oe=ye?he+A[me]+S[me]-we-M.altAxis:be,Ee=h&&ye?function(e,t,n){var r=ue(e,t,n);return r>n?n:r}(xe,he,Oe):ue(h?xe:ge,he,h?Oe:be);k[N]=Ee,L[N]=Ee-he}t.modifiersData[r]=L}},requiresIfExists:["offset"]};var le={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=F(n.placement),f=G(s),u=[P,I].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return ae("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,A))}(o.padding,n),l=y(i),d="y"===f?D:P,p="y"===f?C:I,v=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],h=a[f]-n.rects.reference[f],m=j(i),g=m?"y"===f?m.clientHeight||0:m.clientWidth||0:0,b=v/2-h/2,w=c[d],x=g-l[u]-c[p],O=g/2-l[u]/2+b,E=ue(w,O,x),N=f;n.modifiersData[r]=((t={})[N]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ne(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function de(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[D,I,C,P].some((function(t){return e[t]>=0}))}var ve=V({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,f=void 0===s||s,u=o(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&c.forEach((function(e){e.addEventListener("scroll",n.update,U)})),f&&u.addEventListener("resize",n.update,U),function(){a&&c.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),f&&u.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,u={placement:F(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];a(o)&&p(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});a(r)&&p(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Q,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,u=n.padding,c=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,v=void 0===p||p,h=n.allowedAutoPlacements,m=t.options.placement,g=F(m),b=f||(g===m||!v?[$(m)]:function(e){if(F(e)===k)return[];var t=$(e);return[te(e),t,te(t)]}(m)),y=[m].concat(b).reduce((function(e,n){return e.concat(F(n)===k?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?L:f,c=Y(r),l=c?s?W:W.filter((function(e){return Y(e)===c})):A,d=l.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=l);var p=d.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[F(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}(t,{placement:n,boundary:c,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,N=y[0],j=0;j<y.length;j++){var S=y[j],T=F(S),M=Y(S)===R,z=[D,C].indexOf(T)>=0,B=z?"width":"height",_=fe(t,{placement:S,boundary:c,rootBoundary:l,altBoundary:d,padding:u}),H=z?M?I:P:M?C:D;w[B]>x[B]&&(H=$(H));var q=$(H),V=[];if(i&&V.push(_[T]<=0),s&&V.push(_[H]<=0,_[q]<=0),V.every((function(e){return e}))){N=S,E=!1;break}O.set(S,V)}if(E)for(var U=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return N=t,"break"},G=v?3:1;G>0;G--){if("break"===U(G))break}t.placement!==N&&(t.modifiersData[r]._skip=!0,t.placement=N,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ce,le,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=de(a,r),u=de(s,o,i),c=pe(f),l=pe(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),he=n(2791);function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},me.apply(this,arguments)}var ge=function(e,t){return{var:e,varRef:t?"var("+e+", "+t+")":"var("+e+")"}},be={arrowShadowColor:ge("--popper-arrow-shadow-color"),arrowSize:ge("--popper-arrow-size","8px"),arrowSizeHalf:ge("--popper-arrow-size-half"),arrowBg:ge("--popper-arrow-bg"),transformOrigin:ge("--popper-transform-origin"),arrowOffset:ge("--popper-arrow-offset")};var ye={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},we={scroll:!0,resize:!0};var xe={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;t.styles.popper.width=t.rects.reference.width+"px"},effect:function(e){var t=e.state;return function(){var e=t.elements.reference;t.elements.popper.style.width=e.offsetWidth+"px"}}},Oe={name:"transformOrigin",enabled:!0,phase:"write",fn:function(e){var t=e.state;Ee(t)},effect:function(e){var t=e.state;return function(){Ee(t)}}},Ee=function(e){var t;e.elements.popper.style.setProperty(be.transformOrigin.var,(t=e.placement,ye[t]))},Ne={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;je(t)}},je=function(e){var t;if(e.placement){var n=De(e.placement);if(null!=(t=e.elements)&&t.arrow&&n){var r,o;Object.assign(e.elements.arrow.style,((r={})[n.property]=n.value,r.width=be.arrowSize.varRef,r.height=be.arrowSize.varRef,r.zIndex=-1,r));var i=((o={})[be.arrowSizeHalf.var]="calc("+be.arrowSize.varRef+" / 2)",o[be.arrowOffset.var]="calc("+be.arrowSizeHalf.varRef+" * -1)",o);for(var a in i)e.elements.arrow.style.setProperty(a,i[a])}}},De=function(e){return e.startsWith("top")?{property:"bottom",value:be.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:be.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:be.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:be.arrowOffset.varRef}:void 0},Ce={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:function(e){var t=e.state;Ie(t)},effect:function(e){var t=e.state;return function(){Ie(t)}}},Ie=function(e){if(e.elements.arrow){var t,n=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(n)Object.assign(n.style,{transform:"rotate(45deg)",background:be.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:(t=e.placement,t.includes("top")?"1px 1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("bottom")?"-1px -1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("right")?"-1px 1px 1px 0 var(--popper-arrow-shadow-color)":t.includes("left")?"1px -1px 1px 0 var(--popper-arrow-shadow-color)":void 0)})}},Pe={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},ke={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};var Ae=["size","shadowColor","bg","style"];function Re(e){void 0===e&&(e={});var t=e,n=t.enabled,o=void 0===n||n,i=t.modifiers,a=t.placement,s=void 0===a?"bottom":a,f=t.strategy,u=void 0===f?"absolute":f,c=t.arrowPadding,l=void 0===c?8:c,d=t.eventListeners,p=void 0===d||d,v=t.offset,h=t.gutter,m=void 0===h?8:h,g=t.flip,b=void 0===g||g,y=t.boundary,w=void 0===y?"clippingParents":y,x=t.preventOverflow,O=void 0===x||x,E=t.matchWidth,N=t.direction,j=void 0===N?"ltr":N,D=(0,he.useRef)(null),C=(0,he.useRef)(null),I=(0,he.useRef)(null),P=function(e,t){var n,r;void 0===t&&(t="ltr");var o=(null==(n=Pe[e])?void 0:n[t])||e;return"ltr"===t?o:null!=(r=ke[e])?r:o}(s,j),k=(0,he.useRef)((function(){})),A=(0,he.useCallback)((function(){var e;o&&D.current&&C.current&&(null==k.current||k.current(),I.current=ve(D.current,C.current,{placement:P,modifiers:[Ce,Ne,Oe,me({},xe,{enabled:!!E}),me({name:"eventListeners"},(e=p,"object"===typeof e?{enabled:!0,options:me({},we,e)}:{enabled:e,options:we})),{name:"arrow",options:{padding:l}},{name:"offset",options:{offset:null!=v?v:[0,m]}},{name:"flip",enabled:!!b,options:{padding:8}},{name:"preventOverflow",enabled:!!O,options:{boundary:w}}].concat(null!=i?i:[]),strategy:u}),I.current.forceUpdate(),k.current=I.current.destroy)}),[P,o,i,E,p,l,v,m,b,O,w,u]);(0,he.useEffect)((function(){return function(){var e;D.current||C.current||(null==(e=I.current)||e.destroy(),I.current=null)}}),[]);var R=(0,he.useCallback)((function(e){D.current=e,A()}),[A]),S=(0,he.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),me({},e,{ref:(0,r.lq)(R,t)})}),[R]),T=(0,he.useCallback)((function(e){C.current=e,A()}),[A]),M=(0,he.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),me({},e,{ref:(0,r.lq)(T,t),style:me({},e.style,{position:u,minWidth:"max-content",inset:"0 auto auto 0"})})}),[u,T]),W=(0,he.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);var n=e;return n.size,n.shadowColor,n.bg,n.style,me({},function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,Ae),{ref:t,"data-popper-arrow":"",style:Se(e)})}),[]),L=(0,he.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),me({},e,{ref:t,"data-popper-arrow-inner":""})}),[]);return{update:function(){var e;null==(e=I.current)||e.update()},forceUpdate:function(){var e;null==(e=I.current)||e.forceUpdate()},transformOrigin:be.transformOrigin.varRef,referenceRef:R,popperRef:T,getPopperProps:M,getArrowProps:W,getArrowInnerProps:L,getReferenceProps:S}}function Se(e){var t=e.size,n=e.shadowColor,r=e.bg,o=me({},e.style,{position:"absolute"});return t&&(o["--popper-arrow-size"]=t),n&&(o["--popper-arrow-shadow-color"]=n),r&&(o["--popper-arrow-bg"]=r),o}}}]);
//# sourceMappingURL=943.3cec1fa2.chunk.js.map