(this.webpackJsonp=this.webpackJsonp||[]).push([[72],{3076:function(e,t,n){"use strict";n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return P})),n.d(t,"a",(function(){return E}));var r=n(2),a=n.n(r),s=n(16),o=n.n(s),i=n(110),c=n(32),l=n(70),d=n(79),u=n(268),b=n(1),f=n(3143),j=n.n(f),m=n(3144),p=n.n(m),O=n(3145),h=n.n(O),g=n(76),v=n(269),x=n(942),y=n(151),w=n(0),A=["size","avatarBgColor","walletImage","circular","hwWalletType","avatar","status","isPassphrase"],k=["wallet","deviceStatus"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t,n,r=e.size,a=e.walletImage,s=e.hwWalletType,o=e.avatar;if("hw"===a){var i,c,b={xl:{width:"20px",height:"30px"},lg:{width:"20px",height:"30px"},sm:{width:"14px",height:"21px"},xs:{width:"12px",height:"18px"}},f=j.a;return"classic"===s&&(f=j.a),"mini"===s&&(f=p.a),"touch"===s&&(f=h.a),Object(w.jsx)(u.a,{width:null==(i=b[r])?void 0:i.width,height:null==(c=b[r])?void 0:c.height,source:f},s)}var m,O,g={xs:16,sm:20,xl:24,lg:24};if("imported"===a||"watching"===a)return Object(w.jsx)(d.a,{name:"imported"===a?"InboxArrowDownOutline":"EyeOutline",size:null!=(t=g[null!=(n=r)?n:"lg"])?t:24,color:"icon-default"});if("external"===a)return Object(w.jsx)(d.a,{name:"LinkOutline",size:null!=(m=g[null!=(O=r)?O:"lg"])?m:24,color:"icon-default"});var v={xl:"DisplayXLarge",lg:"DisplayLarge",sm:"DisplayMedium",xs:"Body1"};return"hd"===a?Object(w.jsx)(l.a,{typography:v[r],children:null==o?void 0:o.emoji}):Object(w.jsx)(l.a,{typography:v[r],children:a})},S=function(e){var t=e.size,n=e.status;return Object(w.jsx)(c.a,{position:"absolute",right:-2,top:-3,rounded:"full",p:"2px",bgColor:"background-default",children:Object(w.jsx)(c.a,{rounded:"full",bgColor:"warning"===n?"icon-warning":"interactive-default",size:"xl"===t||"lg"===t?"10px":"8px"})})},B=function(e){var t=e.size;return Object(w.jsx)(i.a,{position:"absolute",right:-3,bottom:-3,borderColor:"background-default",rounded:"full",size:"xl"===t||"lg"===t?"16px":"12px",bgColor:"background-default",children:Object(w.jsx)(d.a,{name:"LockClosedMini",color:"icon-default",size:"xl"===t||"lg"===t?12:10})})},M=function(e){var t=e.size,n=e.avatarBgColor,r=e.walletImage,a=e.circular,s=e.hwWalletType,c=e.avatar,l=e.status,d=e.isPassphrase,u=o()(e,A),b=null!=c?c:x.b,f=n||("hd"===r?b.bgColor:"surface-neutral-default");return Object(w.jsxs)(i.a,C(C({rounded:a?"full":"xs"===t?"6px":"12px",size:"xl"===t?"56px":"lg"===t?12:"sm"===t?8:"xs"===t?6:void 0,bgColor:f},u),{},{pointerEvents:"none",children:[Object(w.jsx)(I,{size:t,walletImage:r,hwWalletType:s,avatar:b}),l?Object(w.jsx)(S,{size:t,status:l}):void 0,d?Object(w.jsx)(B,{size:t}):void 0]}))};M.defaultProps={size:"lg",circular:!1};function P(e){var t=e.deviceStatus,n=e.wallet;return Object(b.useMemo)((function(){var e,r,a,s,o=n.type,i=n.deviceType,c=n.associatedDevice||"",l=!1;o===g.c&&(a=function(e){if(e)return null!=e&&e.hasUpgrade?"warning":null!=e&&e.isConnected?"connected":void 0}(s=null==t?void 0:t[c]),l=Object(v.g)(n));var d=i;return d||(d=Object(y.b)(c)),{isPassphrase:l,status:a,hwWalletType:d,statusType:s,hasUpgrade:Boolean(null==(e=s)?void 0:e.hasUpgrade),isConnected:Boolean(null==(r=s)?void 0:r.isConnected)}}),[t,n])}function E(e){var t=e.wallet,n=e.deviceStatus,r=o()(e,k),a=t.avatar,s=t.type,i=null==a?void 0:a.bgColor,c=P({deviceStatus:n,wallet:t});return Object(w.jsx)(M,C({walletImage:s,avatarBgColor:i,avatar:a,hwWalletType:c.hwWalletType,status:c.status,isPassphrase:c.isPassphrase},r))}t.c=Object(b.memo)(M)},3143:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABACAMAAABWbGUSAAAAllBMVEUAAAAgICBDQ0MPDw8ICAhGRkZiYmIyMjIvLy81NTViYmIyMjJjY2NbW1s1NTVhYWE0NDRjY2MyMjI6OjpUVFRgYGBiYmIrKysyMjI0NDRhYWFiYmJGRkYXFxcMDAwwMDATExMQEBA/Pz80NDRiYmJQUFBKSko4ODg7OzsoKChMTExPT09DQ0NUVFQiIiIfHx9ZWVlfX197zIXbAAAAHHRSTlMAA2MFCGNgZibw71UgEsHAo6BnY2JSUBdIRUJBZStvwQAAAX5JREFUSMfVkolygyAURUO0rUvWZuuCGrAFNGb7/5/rA7VGHTBpx2l6MpnrcrwDzBv8iPH6UcP7uKGOph8G5qNLd+Wd959aTmdvfdHr7bGRvVd1z8HtsKeo3NsJAyLSwDFwKnf5xjCmQaglyDBmq7waLeHLQ0i2Gkh4AGFZyA9wTcJACyEgPFzIITHIIQjD3uXh9TL6h2vuu5mYZFJv7h6k4aA658w0orS+DIBHGgTGtWWY+bWcxVQGrYWQ0ZaTkJCkFURFc4NUHvSW060Knkcsg2QtWQSSiKuIYxU8yu9aMkvg8ZHlkeIjxIGpSFh7zTsa8R3GKUQKIVSwWEZbxmyX1kIVphCNDRq5S/mW2bCubwZuaEZ9zvN9nPOfy+iOBgktrpEXIEv8rNvNXovmjeiWhVPI1qTTpjOrlB23wxauA3Jh+y4XVIuIXR/cAst2ZrGBiWNLt6y2befl6Ztn9S/xN7ZlgVXZgK0D3qniSgdfAwIGTeQzVAK3ecpf/3wBJ33rfjd+//8AAAAASUVORK5CYII="},3144:function(e,t,n){e.exports=n.p+"static/media/deviceIcon_mini.96e3b384.png"},3145:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABICAMAAACHrYYZAAAAz1BMVEUAAABkZGRkZGRra2tgYGBOTk5+fn5jY2Nqampubm5eXl5gYGBra2tnZ2dmZmZGRkZ1dXVLS0tLS0t5eXl1dXVVVVVTU1NQUFCBgYGAgIBgYGCAgICAgIAAAAApKSkvLy8sLCwyMjI2NjYkJCQHBwcmJiYhISENDQ07Ozs5OTkeHh5bW1tfX19ycnIFBQVERERAQEBOTk7///+AgIAbGxtiYmIPDw8SEhI9PT1hYWEUFBRXV1dPT08WFhZJSUloaGhTU1O/v79vb29kZGTv7+/qo1HcAAAAHXRSTlMAQCDbMO/f37+IQBDv7+/v39/Pv7+/n4B/YGAgEJ5ceGIAAAI9SURBVEjHvZNpd6IwGIUdtdt09n0DZROsNMSpIg5u0/b//6aSiNxwkpecfulTLR68z7l5Sey9FH9+fBnsl8v1smItLuKfRN58eDu46qv53+f7cjMHm/qNG4d0MFSE830W5CFjLKz/GsJQvuNtUb5Bx8/b3daxwPz0shE+P0TMccIOKmN7eNcIH2ZVQVAURZJMJb7Ak4wkLnO22bpZ0+0sdFiVTozpcYW7cmKeDlUhLKi8JHfiJH3VEpAXgt8WXIugrcgktBeEPClMNQF5ogF5X8axILpBH4AWMDHy0nAJgZrYtQrYAghRbGvAgmgBeb3AJJALogU0IN8hIK8JESHQE0QBIXjantkEnyggBQyAfJeAfLuAEEynNKqEgBA88hHZG8YS5I2CZ8rbBWzBkTo/MQjUnkVWARMjbxKIBUUibxIYVUAKWh4TdzaoeZugn7o6TgjEAEG3oJwJteHGIOiPVAoTWkCBnu8SsGdYECFgYhTYBOTVAkLAzwBnohFCStD34OYZAgoWBkHPQ1iYGvRTGsi4LDA1jFsCCkhhpD1SFFAN2LPnCJE+gVFwIgygFyyYLrB/R1YNuSQWhI4m2KCF/P4OTCghxhf//yo85hC4KqzaAlCE3ez1SbifjbCmyZ0Cd3B/DmFQZgvL2GxVzMv+Sbgss8wbuRVi85rr6bN4eTzbHXonrtKM86wTzovdt0a4vtgk04rEzFTCz/q9hv7FPPGPeHh5nrhRX/jZsKfy6+tH0UuQvf/0/br3QjwBXAV+n5hC73IAAAAASUVORK5CYII="},3147:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.NewAddressRoute="NewAddressRoute",e.EditAddressRoute="EditAddressRoute",e.PickAddressRoute="PickAddressRoute",e.EnterAddressRoute="EnterAddressRoute"}(r||(r={}))},3239:function(e,t,n){"use strict";n.d(t,"b",(function(){return _}));var r=n(326),a=n(389),s=n(79),o=n(41),i=n(3),c=n.n(i),l=n(85),d=n(10),u=n.n(d),b=n(2),f=n.n(b),j=n(32),m=n(16),p=n.n(m),O=n(1),h=n(508),g=n(43),v=n(176),x=n(0),y=["children"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.children,n=p()(e,y);return Object(x.jsx)(j.a,A(A({flexDirection:"row",alignSelf:"stretch",px:"12px",py:"8px",rounded:"12px",bgColor:"action-secondary-default",borderWidth:1,borderColor:"border-default"},n),{},{children:t}))},_=function(){var e=Object(O.useState)(),t=u()(e,2),n=t[0],r=t[1],a=Object(O.useMemo)((function(){return!(null==n||!n.isValidName)&&(!(null==n||!n.isSearching)||(!(null==n||!n.errorMessage)||void 0))}),[null==n?void 0:n.isSearching,null==n?void 0:n.isValidName,null==n?void 0:n.errorMessage]);return Object(O.useMemo)((function(){return{onChange:r,address:null==n?void 0:n.activeAddress,disableSubmitBtn:a,name:null==n?void 0:n.name,isValid:null==n?void 0:n.isValidName}}),[null==n?void 0:n.activeAddress,a,null==n?void 0:n.name,null==n?void 0:n.isValidName])};t.a=Object(O.memo)((function(e){var t,n=e.name,i=e.onChange,d=e.disableBTC,b=e.networkId,f=e.disable,m=void 0!==f&&f,p=Object(v.i)(n,500),y=Object(l.a)(),w=Object(h.a)(),_=g.a.serviceNameResolver,C=Object(O.useState)({isSearching:!1,isValidName:!1,length:0,options:[],activeAddress:"",shownSymbol:"",name:""}),I=u()(C,2),S=I[0],B=I[1],M=Object(O.useCallback)((function(e){B((function(t){var n=e(t);return null==i||i(n),n}))}),[i,B]),P=Object(O.useCallback)(function(){var e=c()((function*(e){var t=yield _.checkIsValidName(e);return M((function(e){return A(A({},e),{},{isValidName:t,activeAddress:"",name:""})})),t}));return function(t){return e.apply(this,arguments)}}(),[_,M]),E=Object(O.useCallback)(c()((function*(){M((function(e){return A(A({},e),{},{isSearching:!0,options:[],errorMessage:""})}));try{var e=yield _.resolveName(p,{disableBTC:d,networkId:b}),t=e.success,n=e.names,r=e.message,a=e.length,s=e.shownSymbol;if(t){var o,i,c,l,u=(null!=(o=null==n||null==(i=n[0])||null==(c=i.options)||null==(l=c[0])?void 0:l.value)?o:"").split("-")[1];M((function(e){var t,r,o;return A(A({},e),{},{length:a,options:n,activeAddress:null!=u?u:"",shownSymbol:s,name:null!=(t=null==p||null==(r=p.split("."))||null==(o=r.slice(0,-1))?void 0:o.join("."))?t:""})}))}else M((function(e){return A(A({},e),{},{options:[],shownSymbol:s,activeAddress:"",name:"",errorMessage:r})}))}catch(f){}finally{M((function(e){return A(A({},e),{},{isSearching:!1})}))}})),[_,p,M,d,b]);if(Object(O.useEffect)((function(){m||P(p)}),[p,P,m]),Object(O.useEffect)((function(){m||S.isValidName&&E()}),[E,S.isValidName,p,m]),m)return null;if(null==S||!S.isValidName)return null;if(null!=S&&S.errorMessage)return Object(x.jsx)(o.h.Body1,{color:"action-critical-default",children:w.formatMessage({id:null==S?void 0:S.errorMessage},{0:null==S?void 0:S.shownSymbol})});if(null!=S&&null!=(t=S.options)&&t.length){var T,V,D,N,R,z,U,G=null!=(T=S.options)?T:[],W=null!=(V=null==G||null==(D=G[0])||null==(N=D.options)||null==(R=N[0])?void 0:R.value)?V:"",Y=null==G||null==(z=G[0])?void 0:z.title,H=null==S?void 0:S.length;return Number(H)<=1?Object(x.jsxs)(k,{children:[Object(x.jsx)(o.h.Body2Strong,{mr:"12px",color:"text-subdued",children:null!=Y?Y:"-"}),Object(x.jsx)(o.h.Body2,{flex:1,wordBreak:"break-all",color:"text-default",children:null!=(U=null==S?void 0:S.activeAddress)?U:"-"})]}):Object(x.jsx)(a.b,{defaultValue:W,onChange:function(e){var t=e.split("-")[1];M((function(e){return A(A({},e),{},{activeAddress:t})}))},title:w.formatMessage({id:"message__choose_address"}),headerShown:!!y,renderTrigger:function(e){var t,n=e.activeOption,r=e.isHovered,a=e.isPressed,i=e.visible,c=G.find((function(e){return!!e.options.find((function(e){return e.value===n.value}))})),l=n.value.split("-")[1];return Object(x.jsxs)(k,{bgColor:r?"action-secondary-hovered":a?"action-secondary-pressed":i?"surface-selected":"action-secondary-default",children:[Object(x.jsx)(o.h.Body2Strong,{mr:"12px",color:"text-subdued",children:null!=(t=null==c?void 0:c.title)?t:"-"}),Object(x.jsx)(o.h.Body2,{flex:1,wordBreak:"break-all",color:"text-default",children:l}),Object(x.jsx)(j.a,{ml:"12px",children:Object(x.jsx)(s.a,{name:"ChevronDownMini",color:"icon-subdued",size:20})})]})},dropdownPosition:"left",dropdownProps:{height:y?"70%":"240px"},footer:null,options:G})}return Object(x.jsxs)(j.a,{py:"8px",flexDirection:"row",children:[Object(x.jsx)(r.b,{size:"sm"}),Object(x.jsx)(o.h.Body2,{ml:"12px",color:"text-subdued",children:w.formatMessage({id:"message__fetching_addresses"})})]})}))},3245:function(e,t,n){"use strict";var r=n(32),a=n(125),s=n(41),o=n(79),i=n(387),c=n(2),l=n.n(c),d=n(1159),u=n(3),b=n.n(u),f=n(10),j=n.n(f),m=n(16),p=n.n(m),O=n(1),h=n(508),g=n(746),v=n(15),x=n(176),y=n(142),w=n(1118),A=n(3147),k=n(0),_=["value","onChange","onChangeAddressName","plugins","networkId"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.value,n=e.onChange,c=e.onChangeAddressName,l=e.plugins,u=void 0===l?["paste","scan"]:l,f=e.networkId,m=p()(e,_),C=Object(h.a)(),S=Object(x.o)(),B=Object(O.useState)(!1),M=j()(B,2),P=M[0],E=M[1],T=Object(O.useCallback)((function(e){e!==t&&(null==n||n(e))}),[t,n]),V=Object(O.useCallback)(b()((function*(){var e=yield Object(g.b)();null==T||T(e)})),[T]),D=Object(O.useCallback)((function(){Object(w.a)(T)}),[T]),N=Object(O.useCallback)((function(){S.navigate(y.c.Modal,{screen:y.b.AddressBook,params:{screen:A.a.PickAddressRoute,params:{networkId:f,onSelected:function(e){var t=e.address,n=e.name;null==T||T(t),n&&(null==c||c(n))}}}})}),[S,T,f,c]),R=Object(O.useCallback)((function(){E(!1)}),[]);return Object(k.jsxs)(r.a,{w:"full",borderRadius:12,overflow:"hidden",borderWidth:"1",borderColor:P?"focused-default":"border-default",children:[Object(k.jsx)(d.a,I(I({trimValue:!0,borderRadius:0,w:"full",value:t,onChangeText:n,placeholder:C.formatMessage({id:"form__address"})+", ENS "+C.formatMessage({id:"content__or_lowercase"})+" .bit ",borderWidth:"0",onFocus:function(){E(!0)}},m),{},{onBlur:R})),Object(k.jsx)(i.a,{}),Object(k.jsxs)(r.a,{display:"flex",flexDirection:"row",bg:"action-secondary-default",children:[u.includes("paste")&&v.a.canGetClipboard?Object(k.jsxs)(a.a,{flex:"1",justifyContent:"center",alignItems:"center",py:"3",onPress:V,flexDirection:"row",children:[Object(k.jsx)(o.a,{size:20,name:"ClipboardMini"}),Object(k.jsx)(s.h.Body2,{ml:"3",children:C.formatMessage({id:"action__paste"})})]}):null,u.includes("contact")?Object(k.jsxs)(a.a,{flex:"1",justifyContent:"center",alignItems:"center",py:"3",onPress:N,flexDirection:"row",children:[Object(k.jsx)(o.a,{size:20,name:"BookOpenMini"}),Object(k.jsx)(s.h.Body2,{ml:"3",children:C.formatMessage({id:"action__contact"})})]}):null,u.includes("scan")?Object(k.jsxs)(a.a,{flex:"1",justifyContent:"center",alignItems:"center",py:"3",onPress:D,flexDirection:"row",children:[Object(k.jsx)(o.a,{size:20,name:"ViewfinderCircleMini"}),Object(k.jsx)(s.h.Body2,{ml:"3",children:C.formatMessage({id:"action__scan"})})]}):null]})]})}},3286:function(e,t,n){"use strict";var r=n(2),a=n.n(r),s=n(200),o=n(10),i=n.n(o),c=n(85),l=n(16),d=n.n(l),u=n(1),b=n(508),f=n(176),j=n(42),m=n(0),p=["selectableNetworks","networkId","hideHelpText"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.selectableNetworks,n=e.networkId,r=e.hideHelpText,a=void 0!==r&&r,o=d()(e,p),l=Object(b.a)(),O=Object(f.m)().enabledNetworks,g=Object(j.h)().activeNetworkId,v=Object(c.a)(),x=null!=n?n:g;if("undefined"!==typeof t&&("undefined"===typeof g||!t.includes(null!=g?g:""))){var y=i()(t,1);x=y[0]}var w=Object(u.useMemo)((function(){return O?O.filter((function(e){return"undefined"===typeof t||t.includes(e.id)})).map((function(e){return{label:e.shortName,value:e.id,tokenProps:{token:{logoURI:null==e?void 0:e.logoURI,name:null==e?void 0:e.shortName}},badge:"evm"===e.impl?"EVM":void 0}})):[]}),[O,t]),A=Object(u.useCallback)((function(e){if(!O)return null;var t=null;return O.forEach((function(n){n.id===e&&(t=n)})),t}),[O]);return Object(m.jsx)(s.a.Item,h(h({label:l.formatMessage({id:"network__network"}),helpText:a?void 0:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=A(t);return l.formatMessage({id:"form__network_helperText"},{impl:null!=(e=null==n?void 0:n.impl)?e:"-"})},defaultValue:x},o),{},{children:Object(m.jsx)(s.a.Select,{title:l.formatMessage({id:"network__network"}),footer:null,triggerSize:v?"xl":"default",options:w,headerShown:!1,dropdownProps:v?void 0:{maxHeight:"272px"},dropdownPosition:"right"})}))}},3549:function(e,t,n){"use strict";n.r(t);var r=n(85),a=n(163),s=n(1),o=n(52),i=n(508),c=n(43),l=n(42),d=n(763),u=n(2),b=n.n(u),f=n(283),j=n(32),m=n(646),p=n(200),O=n(3),h=n.n(O),g=n(745),v=n(16),x=n.n(v),y=n(3239),w=n(3245),A=n(3286),k=n(176),_=n(146),C=n(0),I=["defaultValues","header","showAlert","onSubmit","editing"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var B=function(e){var t=e.defaultValues,n=e.header,r=(e.showAlert,e.onSubmit),a=e.editing,o=x()(e,I),l=Object(i.a)(),d=Object(s.useRef)(),u=Object(k.h)((function(e){return e.contacts.contacts})),O=Object(k.h)((function(e){return e.status.hideAddressBookAttention})),v=Object(s.useMemo)((function(){return new Map(Object.values(u).map((function(e){return[e.address.toLowerCase(),e]})))}),[u]),B=Object(g.a)({defaultValues:t,mode:"onChange"}),M=B.control,P=B.handleSubmit,E=B.setValue,T=B.watch,V=B.trigger,D=B.formState.isValid,N=T("name"),R=T("address"),z=T("networkId"),U=Object(y.b)(),G=U.onChange,W=U.disableSubmitBtn,Y=U.address,H=U.name,L=Object(k.i)(R,300),Z=Y||L;Object(s.useEffect)((function(){function e(){return(e=h()((function*(){if(Z&&z)try{yield c.a.validator.validateAddress(z,Z.trim()),d.current=!1,V("address")}catch(e){d.current=!0,V("address")}}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Z,z,V,l]),Object(s.useEffect)((function(){N.length>24&&E("name",N.slice(0,24)),H&&!N&&E("name",H)}),[N,E,H]),Object(s.useEffect)((function(){R.length>103&&E("address",R.slice(0,103))}),[R,E]);var F=Object(s.useCallback)((function(){c.a.dispatch(Object(_.g)())}),[]),Q=Object(s.useCallback)((function(e){G(e),V("address")}),[V,G]),J=Object(s.useCallback)((function(e){return Object(C.jsx)(y.a,{name:e,onChange:Q,disableBTC:!1,networkId:z})}),[Q,z]);return Object(C.jsx)(f.b,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({header:n,hideSecondaryAction:!0,primaryActionProps:{isDisabled:!D||W,onPress:function(){return P((function(e){return!W&&Y&&(e.address=Y),r(e)}))()}},scrollViewProps:{children:Object(C.jsxs)(j.a,{w:"full",h:"full",children:[Object(C.jsxs)(p.a,{children:[Object(C.jsx)(A.a,{hideHelpText:!0,control:M,name:"networkId"}),Object(C.jsx)(p.a.Item,{control:M,name:"name",label:l.formatMessage({id:"form__contact_name"}),rules:{required:{value:!0,message:l.formatMessage({id:"form__field_is_required"})}},children:Object(C.jsx)(p.a.Input,{size:"lg",placeholder:l.formatMessage({id:"form__enter_address_name"})})}),Object(C.jsx)(p.a.Item,{control:M,name:"address",label:l.formatMessage({id:"form__address"}),helpText:J,rules:{required:{value:!0,message:l.formatMessage({id:"form__field_is_required"})},validate:function(e){var n=(null==Y?void 0:Y.toLowerCase())||(null==e?void 0:e.toLowerCase()),r=t.address.toLowerCase();if(n)return!a&&v.get(n)||a&&v.get(n)&&n!==r?l.formatMessage({id:"msg__this_address_already_exists"}):d.current?l.formatMessage({id:"form__address_invalid"}):void 0}},children:Object(C.jsx)(w.a,{})})]}),O?null:Object(C.jsx)(j.a,{mt:"6",children:Object(C.jsx)(m.a,{alertType:"info",title:l.formatMessage({id:"content__all_addresses_are_stored_locally"}),onDismiss:F})})]})}},o))},M=function(){var e=Object(i.a)(),t=Object(o.u)(),n=Object(o.x)(),r=Object(l.l)().networks,u=n.params,b=u.defaultValues,f=u.uuid,j=Object(s.useCallback)((function(n){var s=r.find((function(e){return e.id===n.networkId}));s&&(c.a.dispatch(Object(d.d)({uuid:f,contact:{name:n.name,address:n.address,badge:s.impl,networkId:s.id}})),c.a.serviceCloudBackup.requestBackup(),a.a.show({title:e.formatMessage({id:"msg__address_changed"})}),t.goBack())}),[r,t,f,e]);return Object(C.jsx)(B,{defaultValues:{address:b.address,name:b.name,networkId:b.networkId},onSubmit:j,header:e.formatMessage({id:"title__edit_address"}),primaryActionTranslationId:"action__save",editing:!0})},P=function(){var e,t=Object(i.a)(),n=Object(o.u)(),r=null!=(e=Object(o.x)().params)?e:{},l=r.onSelected,d=r.networkId,u=r.defaultAddress,b=Object(g.a)({defaultValues:{address:null!=u?u:""},mode:"onChange"}),j=b.control,m=b.watch,O=b.trigger,v=b.setError,x=b.setValue,y=b.handleSubmit,A=b.formState.isValid,_=Object(k.i)(m("address"),300);Object(s.useEffect)((function(){function e(){return(e=h()((function*(){if(_&&d)try{yield c.a.validator.validateAddress(d,_.trim()),O("address")}catch(e){v("address",{message:t.formatMessage({id:"form__address_invalid"})})}}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[_,d,O,v,t]);var I=Object(s.useCallback)(function(){var e=h()((function*(e){if(d)try{yield c.a.validator.validateAddress(d,e.address.trim())}catch(r){return void a.a.show({title:t.formatMessage({id:"form__address_invalid"})})}null==l||l({address:e.address.trim(),name:e.name}),n.goBack()}));return function(t){return e.apply(this,arguments)}}(),[n,l,t,d]);return Object(C.jsx)(f.b,{header:t.formatMessage({id:"form__enter_address"}),hideSecondaryAction:!0,primaryActionTranslationId:"action__confirm",primaryActionProps:{isDisabled:!A,onPress:function(){return y(I)()}},children:Object(C.jsx)(p.a.Item,{control:j,name:"address",rules:{required:{value:!0,message:t.formatMessage({id:"form__field_is_required"})}},children:Object(C.jsx)(w.a,{networkId:d,onChangeAddressName:function(e){return x("name",e)},plugins:["contact","paste","scan"]})})})},E=function(){var e=Object(i.a)(),t=Object(o.u)(),n=(Object(o.x)().params||{}).address,r=void 0===n?"":n,u=Object(l.l)().networks,b=Object(s.useCallback)(function(){var n=h()((function*(n){var r=u.find((function(e){return e.id===n.networkId}));if(n.networkId)try{yield c.a.validator.validateAddress(n.networkId,n.address)}catch(s){return void a.a.show({title:e.formatMessage({id:"form__address_invalid"})})}r&&(c.a.dispatch(Object(d.a)({name:n.name,address:n.address,badge:r.impl,networkId:r.id})),c.a.serviceCloudBackup.requestBackup(),a.a.show({title:e.formatMessage({id:"msg__address_added"})},{}),t.goBack())}));return function(e){return n.apply(this,arguments)}}(),[u,t,e]);return Object(C.jsx)(B,{defaultValues:{address:r,name:""},onSubmit:b,header:e.formatMessage({id:"action__add_new_address"}),showAlert:!0,primaryActionTranslationId:"action__add"})},T=n(1112),V=n(1114),D=n(20),N=n.n(D),R=n(10),z=n.n(R),U=n(1105),G=n(110),W=n(743),Y=n(125),H=n(1109),L=n(41),Z=n(387),F=n(284),Q=n(151),J=n(269),K=n(3076),X=n(3147),q=function(){return Object(C.jsx)(j.a,{mx:{base:4,md:6},children:Object(C.jsx)(Z.a,{})})},$=function(){var e,t=Object(i.a)(),n=Object(o.u)(),r=null!=(e=Object(o.x)().params)?e:{},a=r.networkId,c=r.onSelected,l=Object(k.h)((function(e){return e.contacts.contacts})),d=Object(s.useMemo)((function(){var e=Object.values(l);if(e=e.sort((function(e,t){return e.createAt,t.createAt,-1})),a){var t=a.split("--")[0];e=e.filter((function(e){return e.badge.toUpperCase()===t.toUpperCase()}))}return e}),[l,a]),u=Object(s.useCallback)((function(e){null==c||c({address:e.address,name:e.name}),n.goBack()}),[c,n]),b=Object(s.useCallback)((function(e){var t=e.item,n=e.index;return Object(C.jsxs)(Y.a,{py:"4",px:"4",mx:{base:4,md:6},flexDirection:"row",alignItems:"center",bg:"surface-default",borderTopRadius:0===n?"12":void 0,borderBottomRadius:n===d.length-1?"12":void 0,onPress:function(){return u(t)},children:[Object(C.jsx)(j.a,{w:"8",h:"8",borderRadius:"full",bg:"decorative-surface-one",justifyContent:"center",alignItems:"center",children:Object(C.jsx)(L.h.DisplaySmall,{color:"decorative-icon-one",children:t.name.toUpperCase()[0]})}),Object(C.jsxs)(j.a,{flex:"1",ml:"4",children:[Object(C.jsxs)(j.a,{flexDirection:"row",children:[Object(C.jsx)(L.h.Body1Strong,{mr:"2",numberOfLines:1,maxWidth:"80%",children:t.name}),Object(C.jsx)(H.a,{size:"sm",title:t.badge.toUpperCase()})]}),Object(C.jsx)(j.a,{children:Object(C.jsx)(L.h.Body2,{color:"text-subdued",numberOfLines:2,children:t.address})})]})]})}),[d,u]),f=Object(s.useMemo)((function(){return Object(C.jsx)(G.a,{w:"full",h:"full",children:Object(C.jsx)(W.a,{title:t.formatMessage({id:"title__no_cantact"}),subTitle:t.formatMessage({id:"title__no_cantact_desc"}),emoji:"\ud83d\udcc7"})})}),[t]);return Object(C.jsx)(U.b,{ListEmptyComponent:f,data:d,ItemSeparatorComponent:q,renderItem:b,keyExtractor:function(e){return e.address}})},ee=function(){var e,t=Object(i.a)(),n=Object(l.l)().wallets,r=Object(o.u)(),a=null!=(e=Object(o.x)().params)?e:{},d=a.networkId,u=a.onSelected,b=Object(s.useState)([]),f=z()(b,2),m=f[0],p=f[1];Object(s.useEffect)((function(){function e(){return(e=h()((function*(){for(var e=function*(e){var t=n[e],r=yield c.a.engine.getAccounts(t.accounts,d);r&&r.length>0&&p((function(e){return[].concat(N()(e),[{wallet:t,data:r,key:t.id}])}))},t=0;t<n.length;t+=1)yield*e(t)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var O=Object(s.useCallback)((function(e){null==u||u({address:e.address,name:e.name}),r.goBack()}),[u,r]),g=Object(s.useCallback)((function(e){return"external"===e.type?t.formatMessage({id:"content__external_account"}):"imported"===e.type?t.formatMessage({id:"wallet__imported_accounts"}):"watching"===e.type?t.formatMessage({id:"wallet__watched_accounts"}):e.name}),[t]);return Object(C.jsx)(V.a,{stickySectionHeadersEnabled:!1,sections:m,contentContainerStyle:{flexGrow:1},keyExtractor:function(e,t){return""+e.address+t},renderItem:function(e){var t=e.item,n=e.section,r=e.index;return Object(C.jsxs)(Y.a,{flexDirection:"row",p:"4",bg:"surface-default",mx:{base:4,md:6},borderTopLeftRadius:0===r?"12":void 0,borderTopRightRadius:0===r?"12":void 0,borderBottomLeftRadius:r===n.data.length-1?"12":void 0,borderBottomRightRadius:r===n.data.length-1?"12":void 0,onPress:function(){return O({address:t.address,name:t.name})},alignItems:"center",children:[Object(C.jsx)(j.a,{mr:"3",children:Object(C.jsx)(K.c,{avatar:n.wallet.avatar,walletImage:n.wallet.type,hwWalletType:n.wallet.deviceType||Object(Q.b)(n.wallet.associatedDevice),isPassphrase:Object(J.g)(n.wallet),size:"sm"})},t.address),Object(C.jsxs)(j.a,{flex:"1",children:[Object(C.jsx)(L.h.Body1Strong,{color:"text-default",numberOfLines:1,children:t.name}),Object(C.jsx)(L.h.Body2,{color:"text-subdued",children:Object(F.c)(t.address)})]})]})},ItemSeparatorComponent:q,renderSectionHeader:function(e){var t=e.section;return Object(C.jsx)(L.h.Subheading,{my:"2",mx:{base:4,md:6},children:g(t.wallet)})}})},te=function(){var e=Object(i.a)(),t=Object(s.useState)(0),n=z()(t,2),r=n[0],a=n[1],c=Object(o.u)(),l=Object(s.useCallback)((function(){c.navigate(X.a.NewAddressRoute)}),[c]),d=Object(s.useMemo)((function(){return Object(C.jsx)(ee,{})}),[]),u=Object(s.useMemo)((function(){return Object(C.jsx)($,{})}),[]);return Object(C.jsxs)(f.b,{header:e.formatMessage({id:"title__select_contact"}),hideSecondaryAction:!0,footer:0===r?void 0:null,primaryActionTranslationId:"action__add_new_address",primaryActionProps:{leftIconName:"PlusMini",type:"basic",onPress:l},maxHeight:"560px",hidePrimaryAction:0!==r,staticChildrenProps:{flex:1,py:6},children:[Object(C.jsx)(j.a,{mb:"6",px:{base:4,md:6},children:Object(C.jsx)(T.a,{values:[e.formatMessage({id:"title__address_book"}),e.formatMessage({id:"form__my_wallet"})],selectedIndex:r,onChange:a})}),Object(C.jsx)(j.a,{flex:"1",children:0===r?u:d})]})},ne=n(456),re=Object(ne.a)(),ae=[{name:X.a.NewAddressRoute,component:E},{name:X.a.PickAddressRoute,component:te},{name:X.a.EditAddressRoute,component:M},{name:X.a.EnterAddressRoute,component:P}];t.default=function(){var e=Object(r.a)();return Object(C.jsx)(re.Navigator,{screenOptions:{headerShown:!1,animationEnabled:!!e},children:ae.map((function(e){return Object(C.jsx)(re.Screen,{name:e.name,component:e.component},e.name)}))})}}}]);