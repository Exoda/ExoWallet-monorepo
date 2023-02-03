(this.webpackJsonp=this.webpackJsonp||[]).push([[89],{3062:function(e,t,a){"use strict";a.d(t,"a",(function(){return k.a}));var r=a(41),i=a(326),n=a(32),s=a(3),o=a.n(s),c=a(163),l=a(10),u=a.n(l),d=a(1),f=a(52),x=a(508),m=a(76),b=a(43),p=a(42),h=a(151),j=a(22),y=a(110),O=a(15),g=a(176),k=a(648),w=a(747),v=a(98),_=a(200),P=a(1125),A=a.n(P),E=a(745),S=a(3088),D=a(328),M=a(1124),B=a(0),V=function(e){var t=e.onOk,a=e.hideTitle,i=Object(x.a)(),s=Object(d.useRef)(),c=Object(p.d)((function(e){return e.settings.enableLocalAuthentication})),l=Object(E.a)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:{password:""}}),u=l.control,f=l.handleSubmit,m=l.setError,h=Object(S.a)({useFormReturn:l,revalidate:!1,clearErrorIfEmpty:!0}).formValues,j=f(function(){var e=o()((function*(e){(yield b.a.serviceApp.verifyPassword(e.password))?null==t||t(e.password,!1):m("password",{message:i.formatMessage({id:"msg__wrong_password"})})}));return function(t){return e.apply(this,arguments)}}()),O=Object(d.useMemo)((function(){return A()(j,1e3,{trailing:!1})}),[j]),g=Object(d.useCallback)((function(e){null==t||t(e,!0)}),[t]);return Object(d.useEffect)((function(){c?Object(D.b)().then((function(e){e||setTimeout((function(){var e;return null==(e=s.current)?void 0:e.focus()}),100)})):setTimeout((function(){var e;return null==(e=s.current)?void 0:e.focus()}),100)}),[]),Object(B.jsxs)(w.a,{px:{base:a?0:4,md:0},children:[a?null:Object(B.jsxs)(n.a,{mb:"8",children:[Object(B.jsx)(r.h.DisplayLarge,{textAlign:"center",mb:2,children:i.formatMessage({id:"Verify_Password"})}),Object(B.jsx)(r.h.Body1,{textAlign:"center",color:"text-subdued",children:i.formatMessage({id:"Verify_password_to_continue"})})]}),Object(B.jsxs)(_.a,{children:[Object(B.jsx)(_.a.Item,{name:"password",defaultValue:"",control:u,rules:{minLength:{value:8,message:i.formatMessage({id:"msg__password_validation"})},maxLength:{value:128,message:i.formatMessage({id:"msg__password_validation"})}},children:Object(B.jsx)(_.a.PasswordInput,{ref:s,onSubmitEditing:j})}),Object(B.jsx)(v.a,{isDisabled:!(null!=h&&h.password),type:"primary",size:"xl",onPress:O,children:i.formatMessage({id:"action__continue",defaultMessage:"Continue"})})]}),Object(B.jsx)(y.a,{mt:"8",children:Object(B.jsx)(M.a,{onOk:g})})]})},C=function(e){var t=e.field,a=e.onOk,r=e.hideTitle,n=Object(d.useState)(!1),s=u()(n,2),c=s[0],l=s[1],f=Object(d.useState)(!1),x=u()(f,2),m=x[0],p=x[1],h=Object(d.useState)(),j=u()(h,2),w=j[0],v=j[1],_=Object(g.h)((function(e){return e.settings.validationSetting})),P=Object(d.useMemo)((function(){var e=!!t&&!(null==_||!_[t]);return!(!t||t!==k.a.Secret)||e}),[_,t]);Object(d.useEffect)((function(){function e(){return(e=o()((function*(){var e=yield b.a.servicePassword.getPassword();e&&(p(!0),O.a.isNative?setTimeout((function(){return null==a?void 0:a(e,!1)}),500):null==a||a(e,!1)),v(!!e),l(!0)}))).apply(this,arguments)}P||function(){e.apply(this,arguments)}()}),[]);var A=Object(d.useCallback)(function(){var e=o()((function*(e,t){p(!0),yield b.a.servicePassword.savePassword(e),null==a||a(e,t)}));return function(t,a){return e.apply(this,arguments)}}(),[a]);if(!m){if(P)return Object(B.jsx)(V,{onOk:A,hideTitle:r});if(c&&!w)return Object(B.jsx)(V,{onOk:A,hideTitle:r})}return Object(B.jsx)(y.a,{w:"full",h:"full",children:Object(B.jsx)(i.b,{size:"lg"})})},T=function(e){var t=e.onOk,a=e.skipSavePassword,i=e.hideTitle,s=e.isAutoHeight,l=Object(x.a)(),u=Object(g.l)().isOk,f=Object(g.h)((function(e){return e.status.boardingCompleted})),m=Object(g.h)((function(e){return e.status.authenticationType})),p=Object(E.a)({mode:"onBlur",reValidateMode:"onBlur",defaultValues:{password:"",confirmPassword:""}}),h=p.control,j=p.handleSubmit,y=p.getValues,O=Object(S.a)({useFormReturn:p,revalidate:!1,clearErrorIfEmpty:!0}).formValues,k=Object(d.useMemo)((function(){return!(null!=O&&O.password)||!(null!=O&&O.confirmPassword)}),[null==O?void 0:O.confirmPassword,null==O?void 0:O.password]),P=Object(d.useCallback)(function(){var e=o()((function*(e){e.password===e.confirmPassword?(f&&!a&&(yield b.a.serviceApp.updatePassword("",e.password)),null==t||t(e.password,e.withEnableAuthentication)):c.a.show({title:l.formatMessage({id:"msg__password_needs_to_be_the_same"})},{type:"error"})}));return function(t){return e.apply(this,arguments)}}(),[f,a,t,l]),A="FACIAL"===m?l.formatMessage({id:"content__face_id"}):l.formatMessage({id:"content__touch_id"});return Object(B.jsxs)(w.a,{h:s?{base:"full",sm:"auto"}:"full",px:{base:i?0:4,md:0},children:[i?null:Object(B.jsxs)(n.a,{mb:"8",children:[Object(B.jsxs)(r.h.DisplayLarge,{textAlign:"center",mb:2,children:["\ud83d\udd10"," ",l.formatMessage({id:"title__set_password",defaultMessage:"Set Password"})]}),Object(B.jsx)(r.h.Body1,{textAlign:"center",color:"text-subdued",children:l.formatMessage({id:"Only_you_can_unlock_your_wallet",defaultMessage:"Only you can unlock your wallet"})})]}),Object(B.jsxs)(_.a,{children:[Object(B.jsx)(_.a.Item,{name:"password",defaultValue:"",control:h,rules:{minLength:{value:8,message:l.formatMessage({id:"msg__password_validation"})},maxLength:{value:128,message:l.formatMessage({id:"msg__password_validation"})},validate:function(e){var t=y("confirmPassword");if(t&&e)return t!==e?l.formatMessage({id:"msg__password_needs_to_be_the_same"}):void 0}},children:Object(B.jsx)(_.a.PasswordInput,{autoFocus:!0,onSubmitEditing:j(P),placeholder:l.formatMessage({id:"form__rule_at_least_int_digits"},{0:8})})}),Object(B.jsx)(_.a.Item,{name:"confirmPassword",defaultValue:"",control:h,rules:{minLength:{value:8,message:l.formatMessage({id:"msg__password_validation"})},validate:function(e){var t=y("password");if(t&&e)return t!==e?l.formatMessage({id:"msg__password_needs_to_be_the_same"}):void 0}},children:Object(B.jsx)(_.a.PasswordInput,{onSubmitEditing:j(P),placeholder:l.formatMessage({id:"Confirm_password"})})}),u?Object(B.jsx)(_.a.Item,{name:"withEnableAuthentication",defaultValue:u,control:h,children:Object(B.jsx)(_.a.CheckBox,{title:l.formatMessage({id:"content__authentication_with"},{0:A})})}):null,Object(B.jsx)(v.a,{type:"primary",size:"xl",onPress:j(P),isDisabled:k,children:l.formatMessage({id:"action__continue",defaultMessage:"Continue"})})]})]})};t.b=Object(d.memo)((function(e){var t=e.children,a=e.skipSavePassword,s=e.field,l=e.walletId,y=e.hideTitle,O=e.isAutoHeight,g=Object(f.u)(),k=Object(p.i)(l),w=Object(x.a)(),v=b.a.engine,_=b.a.serviceHardware,P=Object(d.useState)(),A=u()(P,2),E=A[0],S=A[1],D=Object(d.useState)(""),M=u()(D,2),V=M[0],I=M[1],G=Object(d.useState)(),F=u()(G,2),L=F[0],W=F[1],R=Object(d.useState)(),z=u()(R,2),H=z[0],J=z[1],N=Object(p.f)().isPasswordSet,K=Object(d.useState)(N),q=u()(K,1)[0],Q=Object(d.useCallback)((function(e,t){J(t),I(e)}),[]),U=Object(d.useCallback)((function(e,t){W(t),I(e)}),[]),X=Object(d.useCallback)((function(){null!=g&&null!=g.canGoBack&&g.canGoBack()&&g.goBack()}),[g]),Y="hw"===(null==k?void 0:k.type),Z=(null==k?void 0:k.type)===m.a;return Object(d.useEffect)((function(){function e(){c.a.show({title:w.formatMessage({id:"action__connection_timeout"})}),X()}function t(){return(t=o()((function*(){if(null!=k&&k.id){var t=yield v.getHWDeviceByWalletId(k.id);if(t){var a=null;try{var r=yield _.getFeatursByWalletId(k.id);r?(a=r,j.a.hardwareSDK.debug("use features cache: ",r)):a=yield _.getFeatures(t.mac)}catch(i){return X(),void h.a.showErrorToast(i)}if(!a)return c.a.show({title:w.formatMessage({id:"action__connection_timeout"})}),void X();S(a)}else e()}else e()}))).apply(this,arguments)}Y&&function(){t.apply(this,arguments)}()}),[Y,v,null==k?void 0:k.id,w,X,_]),Z?Object(B.jsx)(n.a,{flex:1,children:t(V,{withEnableAuthentication:L,isLocalAuthentication:H})}):V?Object(B.jsx)(n.a,{w:"full",h:"full",children:t(V,{withEnableAuthentication:L,isLocalAuthentication:H})}):Y?E?Object(B.jsx)(n.a,{w:"full",h:"full",children:t(V,{withEnableAuthentication:L,isLocalAuthentication:H,deviceFeatures:E})}):Object(B.jsxs)(n.a,{h:"100%",justifyContent:"center",alignItems:"center",children:[Object(B.jsx)(i.b,{size:"lg"}),Object(B.jsx)(r.h.DisplayMedium,{mt:6,children:w.formatMessage({id:"modal__device_status_check"})})]}):q?Object(B.jsx)(C,{onOk:Q,field:s,hideTitle:y}):Object(B.jsx)(T,{onOk:U,skipSavePassword:a,hideTitle:y,isAutoHeight:O})}))},3088:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(209),i=a.n(r),n=a(10),s=a.n(n),o=a(1),c=a(1126);function l(e){var t=e.useFormReturn,a=e.wait,r=void 0===a?500:a,n=e.revalidate,l=void 0===n||n,u=e.clearErrorIfEmpty,d=void 0!==u&&u,f=e.onChange,x=t.watch,m=t.trigger,b=t.formState,p=t.clearErrors,h=t.getValues,j=Object(o.useRef)(!1),y=Object(o.useState)(),O=s()(y,2),g=O[0],k=O[1];Object(o.useEffect)((function(){var e=h();k(e),setTimeout((function(){return m()}),0)}),[h,m]),Object(o.useEffect)((function(){var e=i()((function(e,t){var a=t.name,r=t.type;j.current=!1,"change"!==r&&void 0!==r||(k(e),f&&f(e,{name:a,type:r}),d&&""===(null==e?void 0:e[a])&&p(a),l&&m(a))}),r,{leading:!1,trailing:!0}),t=x((function(t,a){var r=a.name,i=a.type;j.current=!0,e(t,{name:r,type:i})}));return function(){return t.unsubscribe()}}),[d,p,f,l,m,r,x]);var w=Object(c.a)(b.isValid&&!Object.keys(b.errors).length&&!b.isValidating,100);return{loadingRef:j,isLoading:j.current,formValues:g,isValid:w}}},3152:function(e,t,a){"use strict";var r=a(2),i=a.n(r),n=a(16),s=a.n(n),o=a(1),c=a(32),l=a(0),u=["children"];function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){var t=e.children,a=s()(e,u);return Object(l.jsx)(c.a,f(f({w:"100%",flexDirection:"column",bg:"surface-default",borderRadius:"12px",overflow:"hidden"},a),{},{children:t&&(t instanceof Array?t:[t]).map((function(e,a){if(!0!==e&&!1!==e&&null!==e){var r=e.props.children;return Object(o.cloneElement)(e,f(f({},e.props),{},{key:a.toString(),hasDivider:a!==(t instanceof Array?t:[t]).length-1,children:r}))}}))}))},m=a(738),b=a(387),p=a(79),h=a(186),j=a(1115),y=a(70),O=a(41),g=["onPress"];function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v=function(e){var t=e.title,a=e.titleColor,r=e.describe,i=e.describeColor,n=e.subDescribe,s=e.subDescribeCustom,o=e.hasArrow,u=e.customArrowIconName,d=e.hasDivider,f=e.children,x=e.hidePadding,j=e.wrap,g=e.onArrowIconPress;return Object(l.jsxs)(c.a,{w:"100%",flexDirection:"column",children:[j||Object(l.jsxs)(c.a,{px:x?"0":{base:"4",lg:"6"},py:x?0:4,w:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[!!t&&Object(l.jsx)(y.a,{h:"100%",maxW:"60%",flexWrap:"wrap",color:null!=a?a:"text-subdued",typography:{sm:"Body1Strong",md:"Body2Strong"},children:t}),Object(l.jsxs)(c.a,{flex:1,w:"100%",ml:3,flexDirection:"column",flexWrap:"wrap",alignItems:"flex-end",children:[!!f&&Object(l.jsx)(c.a,{w:"100%",flexWrap:"wrap",justifyContent:"flex-end",flexDirection:"row",children:f}),!!r&&Object(l.jsx)(y.a,{typography:{sm:"Body1Strong",md:"Body2Strong"},w:"100%",flexWrap:"wrap",color:null!=i?i:"text-default",textAlign:"right",children:r}),!!n&&n.length>0&&(n instanceof Array?n.map((function(e,t){return Object(l.jsx)(O.h.Body2,{w:"100%",flexWrap:"wrap",color:"text-subdued",textAlign:"right",children:e},"subDescribe-"+t)})):Object(l.jsx)(O.h.Body2,{w:"100%",color:"text-subdued",flexWrap:"wrap",textAlign:"right",children:n})),!!s&&Object(l.jsx)(c.a,{w:"100%",flexWrap:"wrap",flexDirection:"row",justifyContent:"flex-end",children:s})]}),(o||!!u)&&(g?Object(l.jsx)(m.a,{my:-1,ml:2,mr:-1,children:Object(l.jsx)(h.a,{size:"xs",circle:!0,name:null!=u?u:"ChevronRightMini",type:"plain",onPress:g})}):Object(l.jsx)(c.a,{ml:3,children:Object(l.jsx)(p.a,{name:null!=u?u:"ChevronRightMini",color:"icon-subdued",size:20})}))]}),d&&Object(l.jsx)(b.a,{})]})},_=function(e){var t=e.onPress,a=s()(e,g);return t?Object(l.jsx)(j.a,{px:0,py:0,onPress:t,children:Object(l.jsx)(v,w({},a))}):Object(l.jsx)(v,w({},a))};_.defaultProps={hasArrow:!1,valueColor:null,hidePadding:!1};var P={Box:x,Item:_};t.a=P},3383:function(e){e.exports=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":24,"ip":0,"op":47,"w":520,"h":520,"nm":"Checklist 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Checklist","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":46.728,"s":[100]},{"t":62,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[259.587,260.119,0],"ix":2},"a":{"a":0,"k":[297.587,298.119,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[54.754,-36.121],[-17.487,36.12],[-54.754,-1.147]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":23,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[294.971,298.679],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":13.637,"s":[100]},{"t":28.9091796875,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":720,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Cricle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":46.728,"s":[100]},{"t":62,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2},"a":{"a":0,"k":[-7.627,-7.691,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":6,"s":[124.222,124.222,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":8.546,"s":[134.222,134.222,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":11.091,"s":[114.222,114.222,100]},{"t":13.63671875,"s":[124.222,124.222,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[178.46,178.46],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.239],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":13.63671875,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":4},"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11.091,"s":[0]},{"t":13.63671875,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-7.627,-7.691],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":720,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":19,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":32.728,"s":[100]},{"t":46.7275390625,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2},"a":{"a":0,"k":[298,298,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":19,"s":[46,46,100]},{"t":46.7275390625,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-120.208,0],[0,-120.208],[120.207,0],[0,120.208]],"o":[[120.207,0],[0,120.208],[-120.208,0],[0,-120.208]],"v":[[0,-217.655],[217.655,0],[0,217.655],[-217.655,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[297.587,298.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":19,"op":720,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shadow","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11.091,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25.091,"s":[20]},{"t":39.0908203125,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,260,0],"ix":2},"a":{"a":0,"k":[298,298,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":11.091,"s":[60,60,100]},{"t":39.0908203125,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-94.797,0],[0,-94.797],[94.797,0],[0,94.798]],"o":[[94.797,0],[0,94.798],[-94.797,0],[0,-94.797]],"v":[[0,-171.646],[171.646,0],[0,171.646],[-171.646,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.180392156863,0.721568627451,0.235294117647,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[297.587,298.119],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":720,"st":0,"bm":0}],"markers":[]}')}}]);