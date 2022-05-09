"use strict";(self.webpackChunkcb_tree=self.webpackChunkcb_tree||[]).push([[584],{6584:function(e,r,a){a.r(r),a.d(r,{default:function(){return F}});var n=a(5861),t=a(7757),o=a.n(t),l=a(3046),i=a(1340),s=a(6134),c=a(2791),d=a(9611);function u(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}var v=["name","getInitials"],g=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],f=(0,i.Gp)((function(e,r){var a=m({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,i.yK)().badge);return c.createElement(i.m$.div,m({ref:r},e,{className:(0,s.cx)("chakra-avatar__badge",e.className),__css:a}))}));function h(e){var r=e.split(" "),a=r[0],n=r[1];return a&&n?""+a.charAt(0)+n.charAt(0):a.charAt(0)}s.Ts&&(f.displayName="AvatarBadge");var b=function(e){var r=e.name,a=e.getInitials,n=u(e,v),t=(0,i.yK)();return c.createElement(i.m$.div,m({role:"img","aria-label":r},n,{__css:t.label}),r?null==a?void 0:a(r):null)},p=function(e){return c.createElement(i.m$.svg,m({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),c.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),c.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},x={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},C=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Avatar",e),n=(0,i.Lr)(e),t=n.src,o=n.srcSet,l=n.name,d=n.showBorder,v=n.borderRadius,f=void 0===v?"full":v,b=n.onError,C=n.getInitials,j=void 0===C?h:C,k=n.icon,E=void 0===k?c.createElement(p,null):k,y=n.iconLabel,N=void 0===y?" avatar":y,w=n.loading,I=n.children,R=n.borderColor,L=n.ignoreFallback,A=u(n,g),F=m({borderRadius:f,borderWidth:d?"2px":void 0},x,a.container);return R&&(F.borderColor=R),c.createElement(i.m$.span,m({ref:r},A,{className:(0,s.cx)("chakra-avatar",e.className),__css:F}),c.createElement(i.Fo,{value:a},c.createElement(_,{src:t,srcSet:o,loading:w,onError:b,getInitials:j,name:l,borderRadius:f,icon:E,iconLabel:N,ignoreFallback:L}),I))}));s.Ts&&(C.displayName="Avatar");var _=function(e){var r=e.src,a=e.srcSet,n=e.onError,t=e.getInitials,o=e.name,s=e.borderRadius,d=e.loading,u=e.iconLabel,m=e.icon,v=void 0===m?c.createElement(p,null):m,g=e.ignoreFallback,f=(0,l.d9)({src:r,onError:n,ignoreFallback:g});return!r||!("loaded"===f)?o?c.createElement(b,{className:"chakra-avatar__initials",getInitials:t,name:o}):c.cloneElement(v,{role:"img","aria-label":u}):c.createElement(i.m$.img,{src:r,srcSet:a,alt:o,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})};s.Ts&&(_.displayName="AvatarImage");var j=["children","borderColor","max","spacing","borderRadius"],k=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Avatar",e),n=(0,i.Lr)(e),t=n.children,o=n.borderColor,l=n.max,v=n.spacing,g=void 0===v?"-0.75rem":v,f=n.borderRadius,h=void 0===f?"full":f,b=u(n,j),p=(0,d.WR)(t),C=l?p.slice(0,l):p,_=null!=l&&p.length-l,k=C.reverse().map((function(r,a){var n,t={marginEnd:0===a?0:g,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:o,showBorder:!0};return c.cloneElement(r,(0,s.YU)(t))})),E=m({borderRadius:h,marginStart:g},x,a.excessLabel);return c.createElement(i.m$.div,m({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},b,{className:(0,s.cx)("chakra-avatar__group",e.className)}),_>0&&c.createElement(i.m$.span,{className:"chakra-avatar__excess",__css:E},"+"+_),k)}));s.Ts&&(k.displayName="AvatarGroup");var E=a(4047),y=a(2504),N=a(8735),w=a(6871),I=a(20),R=a(1789),L=a(893),A=a(184),F=function(e){var r=e.displayName,a=(0,L.Z)().getNewThoughtRecord,t=(0,R.Z)(),l=t.backgroundColor,i=t.foregroundColor,s=(0,w.s0)(),c=(0,I.Z)().logout,d=function(){var e=(0,n.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:s("/emotion");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,A.jsxs)(E.v2,{children:[(0,A.jsx)(E.j2,{bg:l,as:y.zx,rounded:"full",variant:"link",cursor:"pointer",minW:0,children:(0,A.jsx)(C,{name:r,size:"md",color:l,bg:i})}),(0,A.jsxs)(E.qy,{alignItems:"center",zIndex:"overlay",children:[(0,A.jsx)("br",{}),(0,A.jsx)(N.M5,{children:(0,A.jsx)(C,{size:"2xl",bg:l,color:i,name:r})}),(0,A.jsx)("br",{}),(0,A.jsx)(N.M5,{children:(0,A.jsx)("p",{children:r})}),(0,A.jsx)("br",{}),(0,A.jsx)(E.R,{}),(0,A.jsx)(E.sN,{onClick:d,children:"New Thought Record"}),(0,A.jsx)(E.sN,{onClick:function(){c(),s("/")},children:"Logout"})]})]})}}}]);
//# sourceMappingURL=584.262cd32c.chunk.js.map