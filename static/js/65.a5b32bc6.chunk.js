(this.webpackJsonp=this.webpackJsonp||[]).push([[65],{3063:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u}));var n=r(1),o=r(52),c=r(36),i=r(42),a=r(142),l=c.a.eth;function s(){var e=Object(i.l)().networks;return Object(n.useMemo)((function(){return e.find((function(e){return e.id===l}))}),[e])}function u(){var e=Object(o.u)();return Object(n.useCallback)((function(t){var r=t.collection,n=t.networkId,o=t.contractAddress,c=t.title;e.navigate(a.a.NFTMarketCollectionScreen,{networkId:n,contractAddress:o,collection:r,title:c})}),[e])}},3067:function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return f}));var n,o=r(2),c=r.n(o),i=r(70),a=r(16),l=r.n(a),s=r(36),u=r(0),d=["prefix","price","networkId","symbol"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=((n={})[s.a.eth]="ETH",n[s.a.optimism]="ETH",n[s.a.bsc]="BNB",n[s.a.polygon]="MATIC",n[s.a.arbitrum]="ETH",n[s.a.sol]="SOL",n[s.a.avalanche]="AVAX",n);function f(e){var t=e.prefix,r=e.price,n=e.networkId,o=e.symbol,c=null!=o?o:p[null!=n?n:""],i="\u2013";return r&&null!==r&&(i=r+" "+(null!=c?c:"")),t?t+" "+i:""+i}t.b=function(e){var t=e.prefix,r=void 0===t?"":t,n=e.price,o=e.networkId,c=e.symbol,a=l()(e,d);return Object(u.jsx)(i.a,j(j({},a),{},{children:f({prefix:r,price:n,networkId:o,symbol:c})}))}},3077:function(e,t,r){"use strict";var n=r(32),o=r(2),c=r.n(o),i=r(1107),a=r(110),l=r(79),s=r(16),u=r.n(s),d=r(1),b=r(0),j=["verified"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=Object(d.memo)((function(e){var t=e.verified,r=u()(e,j),o=r.width,c=r.height,s=r.src,p=Object(d.useMemo)((function(){return Object(b.jsx)(a.a,{width:o,height:o,borderRadius:"12px",bgColor:"surface-neutral-subdued",children:Object(b.jsx)(l.a,{name:"ImageBrokenIllus",size:20})})}),[o]);return s&&s.length>0?Object(b.jsxs)(n.a,{width:o,height:c,children:[Object(b.jsx)(i.a,f({preview:!1,skeleton:!0,borderRadius:"12px",fallbackElement:p},r)),!0===t?Object(b.jsx)(n.a,{bgColor:"background-default",position:"absolute",right:"-4px",bottom:"-4px",borderRadius:"full",children:Object(b.jsx)(l.a,{size:16,name:"BadgeCheckMini",color:"icon-success"})}):null]}):p}))},3091:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var n=r(1),o=Object(n.createContext)(null);function c(){return Object(n.useContext)(o)}},3097:function(e,t,r){"use strict";var n=r(2),o=r.n(n),c=r(3064),i=r(3053),a=r(3056),l=r(1106),s=r(85),u=r(16),d=r.n(u),b=r(32),j=r(1),p=r(0),f=["isTab","numberOfData"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(){return Object(p.jsx)(b.a,{h:"4px"})};t.a=function(e){e.isTab;var t=e.numberOfData,r=d()(e,f),n=Object(s.a)(),o=new Array(t).fill(0),u=Object(j.useMemo)((function(){return n?{ItemSeparatorComponent:h}:{showDivider:!0}}),[n]);return Object(p.jsx)(c.a,x(x({data:o,renderItem:function(){return Object(p.jsxs)(a.a,{children:[Object(p.jsx)(a.a.Column,{children:Object(p.jsx)(l.a,{width:n?"56px":"40px",height:n?"56px":"40px",borderRadius:"12px"})}),Object(p.jsx)(a.a.Column,{flex:1,text:{label:Object(p.jsx)(i.a,{shape:"Body1"}),description:Object(p.jsx)(i.a,{shape:"Body2"})}}),Object(p.jsx)(a.a.Column,{children:Object(p.jsx)(b.a,{pb:{base:"24px",md:0},children:Object(p.jsx)(i.a,{shape:"Body1"})})})]})},keyExtractor:function(e,t){return""+t}},u),r))}},3123:function(e,t,r){"use strict";var n=r(389),o=r(2),c=r.n(o),i=r(32),a=r(79),l=r(70),s=r(742),u=r(85),d=r(1),b=r(547),j=r(508),p=r(176),f=r(36),O=r(0);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=[f.a.eth,f.a.bsc,f.a.optimism,f.a.polygon,f.a.arbitrum,f.a.avalanche];t.a=function(e){var t=e.tiggerProps,r=e.selectedNetwork,o=e.triggerSize,c=e.onChange,f=Object(j.a)(),x=Object(u.a)(),m=Object(p.m)().enabledNetworks,v=Object(d.useMemo)((function(){return m?m.filter((function(e){return g.includes(e.id)})).map((function(e){return{title:e.shortName,label:e.name,value:e,tokenProps:{token:{logoURI:null==e?void 0:e.logoURI,name:null==e?void 0:e.name}}}})):[]}),[m]);return Object(O.jsx)(i.a,{children:Object(O.jsx)(n.b,{title:f.formatMessage({id:"network__network"}),dropdownPosition:"right",dropdownProps:x?{}:{minW:"240px"},headerShown:!1,options:v,isTriggerPlain:!0,activatable:!0,footer:null,onChange:c,renderTrigger:function(e){var n=e.isHovered,c=e.isPressed;return Object(O.jsx)(i.a,h(h({m:"-8px"},t),{},{children:Object(O.jsxs)(b.a,{alignItems:"center",p:"8px",bgColor:c?"surface-pressed":n?"surface-hovered":"transparent",borderRadius:"xl",children:[Object(O.jsx)(s.c,{size:"lg"===o?"24px":"20px",token:{logoURI:null==r?void 0:r.logoURI}}),!x&&Object(O.jsx)(l.a,{ml:"8px",typography:"Body2Strong",children:null==r?void 0:r.name}),Object(O.jsx)(i.a,{ml:"4px",children:Object(O.jsx)(a.a,{size:20,name:"ChevronDownMini",color:"icon-subdued"})})]})}))}})})}},3138:function(e,t,r){"use strict";var n=r(32),o=r(110),c=r(2),i=r.n(c),a=r(186),l=r(16),s=r.n(l),u=r(1),d=r(115),b=r(1852),j=r(179),p=r(699),f=r(623),O=r(0),x=["children","renderLeftArrow","renderRightArrow","bg","selectedIndex","leftButtonProps","rightButtonProps"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=Object(u.forwardRef)((function(e,t){var r=e.children,c=e.renderLeftArrow,i=e.renderRightArrow,l=e.bg,h=void 0===l?"surface-default":l,m=e.selectedIndex,v=e.leftButtonProps,w=e.rightButtonProps,y=s()(e,x),P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=Object(u.useRef)(t);return Object(u.useEffect)((function(){e&&("function"===typeof e?e(r.current):e.current=r.current)}),[e]),r}(t),_=Object(d.a)(!1),k=Object(d.a)(!1),C=Object(d.a)(0),S=Object(d.a)(0),T=Object(d.a)(0),D=Object(u.useCallback)((function(e){T.value=e,S.value&&(k.value=Math.floor(T.value-C.value)>S.value)}),[]),I=Object(b.a)(function(){var e=function(e){var t=e.contentOffset,r=e.contentSize;C.value=t.x,_.value=C.value>0,k.value=Math.floor(r.width-C.value)>S.value};return e._closure={currentOffsetX:C,showLeftArrow:_,showRightArrow:k,containerWidth:S},e.asString="function _f({contentOffset:contentOffset,contentSize:contentSize}){const{currentOffsetX,showLeftArrow,showRightArrow,containerWidth}=jsThis._closure;{currentOffsetX.value=contentOffset.x;showLeftArrow.value=currentOffsetX.value>0;showRightArrow.value=Math.floor(contentSize.width-currentOffsetX.value)>containerWidth.value;}}",e.__workletHash=0xd8f9392efcb,e.__location="/home/runner/work/app-monorepo/app-monorepo/packages/components/src/ScrollableButtonGroup/ScrollableButtonGroup.tsx (64:6)",e}(),[]),M=Object(u.useRef)([]),A=Object(u.useRef)(0),N=Object(u.useRef)(),E=Object(u.useCallback)((function(e){if(e!==m){if(P.current){var t=M.current[e];if(t){var r=t.x+t.width/2-A.current/2;return N.current=void 0,P.current.scrollTo({x:r,animated:!0})}}N.current=e}}),[P,m]),B=u.Children.count(r);Object(u.useEffect)((function(){M.current=[],N.current=void 0}),[B]),Object(u.useEffect)((function(){void 0!==m&&E(m)}),[E,m]);var L=Object(u.useCallback)((function(){var e;null==(e=P.current)||e.scrollTo({x:C.value-S.value||0,animated:!0})}),[]),R=Object(u.useCallback)((function(){var e;null==(e=P.current)||e.scrollTo({x:C.value+S.value,animated:!0})}),[]),z=Object(u.useCallback)((function(e){var t=e.nativeEvent.layout.width;S.value=t,k.value=Math.floor(T.value-C.value)>S.value}),[]);return Object(O.jsxs)(n.a,g(g({bg:h},y),{},{onLayout:z,children:[Object(O.jsx)(j.default.View,{style:[{position:"absolute"},Object(p.a)(function(){var e=function(){return{opacity:Object(f.a)(_.value?1:0,{duration:300}),scale:Object(f.a)(_.value?1:0,{duration:300}),zIndex:Object(f.a)(_.value?1:-1,{duration:300})}};return e._closure={withTiming:f.a,showLeftArrow:_},e.asString="function _f(){const{withTiming,showLeftArrow}=jsThis._closure;{return{opacity:withTiming(showLeftArrow.value?1:0,{duration:300}),scale:withTiming(showLeftArrow.value?1:0,{duration:300}),zIndex:withTiming(showLeftArrow.value?1:-1,{duration:300})};}}",e.__workletHash=4700141212306,e.__location="/home/runner/work/app-monorepo/app-monorepo/packages/components/src/ScrollableButtonGroup/ScrollableButtonGroup.tsx (151:14)",e.__optimalization=2,e}(),[])],children:Object(O.jsx)(o.a,{bg:h,children:c?c({onPress:L}):Object(O.jsx)(a.a,g({type:"plain",circle:!0,name:"ChevronLeftMini",size:"sm",onPress:L},v))})}),Object(O.jsx)(j.default.ScrollView,{ref:P,onLayout:function(e){var t=e.nativeEvent.layout.width;A.current=t},style:{flex:1},horizontal:!0,onScroll:I,scrollEventThrottle:16,showsHorizontalScrollIndicator:!1,onContentSizeChange:D,children:u.Children.map(r,(function(e,t){return Object(u.cloneElement)(e,g(g({},e.props),{},{onPress:function(){E(t),null==e.props.onPress||e.props.onPress()},onLayout:function(e){var r=e.nativeEvent.layout,n=r.width,o=r.x,c=M.current;c[t]={x:o,width:n},c.length===B&&void 0!==N.current&&E(N.current)}}))}))}),Object(O.jsx)(j.default.View,{style:[{position:"absolute",right:0},Object(p.a)(function(){var e=function(){return{opacity:Object(f.a)(k.value?1:0,{duration:300}),scale:Object(f.a)(k.value?1:0,{duration:300}),zIndex:Object(f.a)(k.value?1:-1,{duration:300})}};return e._closure={withTiming:f.a,showRightArrow:k},e.asString="function _f(){const{withTiming,showRightArrow}=jsThis._closure;{return{opacity:withTiming(showRightArrow.value?1:0,{duration:300}),scale:withTiming(showRightArrow.value?1:0,{duration:300}),zIndex:withTiming(showRightArrow.value?1:-1,{duration:300})};}}",e.__workletHash=0xa6e322ee692,e.__location="/home/runner/work/app-monorepo/app-monorepo/packages/components/src/ScrollableButtonGroup/ScrollableButtonGroup.tsx (232:14)",e.__optimalization=2,e}(),[])],children:Object(O.jsx)(o.a,{bg:h,children:i?i({onPress:R}):Object(O.jsx)(a.a,g({type:"plain",circle:!0,name:"ChevronRightMini",size:"sm",onPress:R},w))})})]}))}));m.displayName="ScrollableButtonGroup";t.a=m},3154:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(2),o=r.n(n),c=r(16),i=r.n(c),a=r(125),l=r(234),s=r(41),u=r(110),d=r(1107),b=r(79),j=r(1),p=r(3138),f=r(0),O=["buttons","selectedIndex","onButtonPress","size","bg","maxTextWidth"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.text,r=e.leftIcon,n=e.leftImage,o=e.leftComponentRender,c=e.isCurrent,i=e.onPress,p=e.leftIconSize,O=e.onLayout,x=e.size,h=e.maxTextWidth,g=e.leftIconSelectedColor,m="sm"===x,v=p||(m?"16px":"20px"),w=g||"icon-hovered",y=Object(j.useMemo)((function(){var e="0px";return t.length>0&&(e=m?"4px":"8px"),e}),[m,t.length]);return Object(f.jsx)(a.a,{mr:"8px",onPress:i,onLayout:O,children:function(e){var i=e.isHovered,a=e.isPressed;return Object(f.jsxs)(l.a,{alignItems:"center",h:m?"32px":"36px",px:m?"8px":"12px",py:m?"6px":"8px",borderRadius:"9999px",bg:c?"surface-selected":a?"surface-pressed":i?"surface-hovered":"transparent",children:[(!!r||!!n)&&Object(f.jsxs)(u.a,{borderRadius:"9999px",w:v,h:v,mr:y,children:[!!r&&Object(f.jsx)(b.a,{name:r,color:c?w:"icon-default"}),!!n&&Object(f.jsx)(d.a,{height:v,width:v,src:n})]}),null==o?void 0:o(),t.length>0?Object(f.jsx)(s.h.Body2Strong,{maxW:h,isTruncated:!0,color:c?"text-default":"text-subdued",children:t}):null]})}})},m=function(e){var t=e.buttons,r=e.selectedIndex,n=e.onButtonPress,o=e.size,c=void 0===o?"sm":o,a=e.bg,l=void 0===a?"surface-default":a,s=e.maxTextWidth,u=i()(e,O);return Object(f.jsx)(p.a,h(h({bg:l,overflow:"hidden",w:"full",flexDirection:"row",alignItems:"center",position:"relative",selectedIndex:r},u),{},{children:t.map((function(e,t){return Object(f.jsx)(g,h(h({isCurrent:r===t},e),{},{size:c,maxTextWidth:s,onPress:function(){n(t)}}),t)}))}))};m.displayName="ToggleButtonGroup";var v=m},3306:function(e,t,r){"use strict";var n=r(2),o=r.n(n),c=r(3064),i=r(32),a=r(70),l=r(3056),s=r(16),u=r.n(s),d=r(1),b=r(27),j=r(4420),p=r(508),f=r(3077),O=r(3067),x=r(3063),h=r(3091),g=r(3097),m=r(0),v=["onSelectCollection","selectNetwork","listData"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r,n,o=e.onSelectCollection,s=e.selectNetwork,w=e.listData,P=u()(e,v),_=null==(t=Object(h.b)())?void 0:t.context,k=Object(p.a)(),C=Object(x.a)(),S=null!=(r=null==_?void 0:_.selectedNetwork)?r:s,T=Object(d.useCallback)((function(e){var t,r,n,c,s,u,d,j=e.item,p=e.index,x=null!=(t=j.volume_change)?t:"-";return null!=j&&null!=(r=j.volume_change)&&r.startsWith("-")?(u="surface-critical-subdued",d="text-critical"):null!=j&&null!=(n=j.volume_change)&&n.startsWith("0.00%")?d="text-subdued":(u="surface-success-subdued",d="text-success"),Object(m.jsxs)(l.a,{onPress:function(){o?o({contractAddress:j.contract_address,networkId:null==S?void 0:S.id,title:j.contract_name}):C({contractAddress:j.contract_address,networkId:null==S?void 0:S.id,title:j.contract_name})},children:[Object(m.jsx)(l.a.Column,{children:Object(m.jsx)(f.a,{src:j.logo_url,width:"56px",height:"56px",verified:j.openseaVerified})}),Object(m.jsx)(l.a.Column,{text:{label:""+(p+1),labelProps:{pb:"24px",typography:"Body1Mono"}}}),Object(m.jsx)(l.a.Column,{flex:1,text:{label:j.contract_name,labelProps:{isTruncated:!0},description:Object(O.a)({prefix:k.formatMessage({id:"content__floor"}),price:j.floor_price,networkId:null==S?void 0:S.id}),descriptionProps:{numberOfLines:1}}}),Object(m.jsx)(l.a.Column,{alignItems:"flex-end",text:{label:Object(O.a)({price:new b.BigNumber(null!=(c=j.volume)?c:"0").decimalPlaces(2).toString(),networkId:null==_||null==(s=_.selectedNetwork)?void 0:s.id}),labelProps:{textAlign:"right",numberOfLines:1},description:Object(m.jsx)(i.a,{borderRadius:"6px",bgColor:u,paddingX:"6px",paddingY:"2px",children:Object(m.jsx)(a.a,{typography:"CaptionStrong",color:d,textAlign:"right",numberOfLines:1,children:x})})}})]})}),[k,null==S?void 0:S.id,null==_||null==(n=_.selectedNetwork)?void 0:n.id,o,C]);return void 0===w||0===(null==w?void 0:w.length)||null!=_&&_.loading?Object(m.jsx)(g.a,{isTab:null==_?void 0:_.isTab,numberOfData:null!=_&&_.isTab?5:10,ListHeaderComponent:P.ListHeaderComponent}):Object(m.jsx)(j.a,{style:{flex:1},from:{opacity:.5},animate:{opacity:1},children:Object(m.jsx)(c.a,y({data:w,renderItem:T,keyExtractor:function(e,t){return""+e.contract_address+t},ItemSeparatorComponent:function(){return Object(m.jsx)(i.a,{h:"4px"})},ListFooterComponent:function(){return Object(m.jsx)(i.a,{height:"20px"})}},P))})}},3405:function(e,t,r){"use strict";r.d(t,"a",(function(){return ne}));var n=r(1112),o=r(3154),c=r(85),i=r(234),a=r(32),l=r(125),s=r(79),u=r(2),d=r.n(u),b=r(70),j=r(10),p=r.n(j),f=r(1),O=r(52),x=r(508),h=r(142),g=r(3123),m=r(389),v=r(547),w=r(0),y=function(e){var t=e.title,r=e.onChange,n=Object(x.a)(),o=[{title:n.formatMessage({id:"content__hours"}),label:"6h",value:0},{title:n.formatMessage({id:"content__hours"}),label:"12h",value:1},{title:n.formatMessage({id:"content__day"}),label:"1d",value:2}];return Object(w.jsx)(a.a,{m:"-8px",children:Object(w.jsx)(m.b,{title:n.formatMessage({id:"content__duration"}),dropdownPosition:"left",headerShown:!1,options:o,isTriggerPlain:!0,footer:null,activatable:!1,onChange:r,renderTrigger:function(e){var r=e.isHovered,n=e.isPressed;return Object(w.jsxs)(v.a,{alignItems:"center",p:"8px",bgColor:n?"surface-pressed":r?"surface-hovered":"transparent",borderRadius:"xl",children:[Object(w.jsx)(b.a,{color:"text-subdued",typography:"Body2Strong",children:t}),Object(w.jsx)(a.a,{ml:"4px",children:Object(w.jsx)(s.a,{size:20,name:"ChevronDownMini",color:"icon-subdued"})})]})}})})},P=r(3063),_=r(3091),k=r(3),C=r.n(k),S=r(43),T=r(3064),D=r(3056),I=r(27),M=r(4420),A=r(939),N=r(3077),E=r(3067),B=r(3097),L=function(){var e=Object(x.a)();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(D.a,{children:[Object(w.jsx)(D.a.Column,{flex:1,text:{label:e.formatMessage({id:"content__collection"}),labelProps:{typography:"Subheading",color:"text-subdued"}}}),Object(w.jsx)(D.a.Column,{w:"160px",text:{label:e.formatMessage({id:"content__market_cap"}),labelProps:{typography:"Subheading",color:"text-subdued",textAlign:"right"}}})]}),Object(w.jsx)(a.a,{mx:"8px",borderBottomWidth:1,borderColor:"divider"})]})},R=function(e){var t,r,n=e.listData,o=null==(t=Object(_.b)())?void 0:t.context,c=Object(x.a)(),i=Object(P.a)(),a=Object(f.useCallback)((function(e){var t,r,n,a=e.item,l=e.index;return Object(w.jsxs)(D.a,{onPress:function(){var e;i({contractAddress:a.contract_address,networkId:null==o||null==(e=o.selectedNetwork)?void 0:e.id,title:a.contract_name})},children:[Object(w.jsx)(D.a.Column,{children:Object(w.jsx)(N.a,{src:a.logo_url,width:"40px",height:"40px",verified:a.openseaVerified})}),Object(w.jsx)(D.a.Column,{text:{label:""+(l+1),labelProps:{pb:"24px",typography:"Body1Mono"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:a.contract_name,labelProps:{isTruncated:!0},description:Object(E.a)({prefix:c.formatMessage({id:"content__floor"}),price:a.floor_price,networkId:null==o||null==(t=o.selectedNetwork)?void 0:t.id}),descriptionProps:{numberOfLines:1}}}),Object(w.jsx)(D.a.Column,{w:"160px",text:{label:Object(E.a)({price:Object(A.c)(new I.BigNumber(null!=(r=a.market_cap)?r:"0").decimalPlaces(2).toNumber()),networkId:null==o||null==(n=o.selectedNetwork)?void 0:n.id}),labelProps:{textAlign:"right"}}})]})}),[null==o||null==(r=o.selectedNetwork)?void 0:r.id,i,c]);return void 0===n||0===(null==n?void 0:n.length)||null!=o&&o.loading?Object(w.jsx)(B.a,{ListHeaderComponent:function(){return L()},isTab:null==o?void 0:o.isTab,numberOfData:null!=o&&o.isTab?5:10}):Object(w.jsx)(M.a,{from:{opacity:.5},animate:{opacity:1},children:Object(w.jsx)(T.a,{ListHeaderComponent:function(){return L()},data:n,showDivider:!0,renderItem:a,keyExtractor:function(e,t){return""+e.contract_address+t}})})},z=function(){return Object(w.jsx)(a.a,{h:"4px"})},H=function(){return Object(w.jsx)(a.a,{height:"20px"})},W=function(e){var t,r,n=e.listData,o=null==(t=Object(_.b)())?void 0:t.context,c=Object(x.a)(),i=Object(P.a)(),a=Object(f.useCallback)((function(e){var t,r,n,a=e.item,l=e.index;return Object(w.jsxs)(D.a,{onPress:function(){var e;i({contractAddress:a.contract_address,networkId:null==o||null==(e=o.selectedNetwork)?void 0:e.id,title:a.contract_name})},children:[Object(w.jsx)(D.a.Column,{children:Object(w.jsx)(N.a,{src:a.logo_url,width:"56px",height:"56px",verified:a.openseaVerified})}),Object(w.jsx)(D.a.Column,{text:{label:""+(l+1),labelProps:{pb:"24px",typography:"Body1Mono"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:a.contract_name,labelProps:{isTruncated:!0},description:Object(E.a)({prefix:c.formatMessage({id:"content__floor"}),price:a.floor_price,networkId:null==o||null==(t=o.selectedNetwork)?void 0:t.id}),descriptionProps:{numberOfLines:1}}}),Object(w.jsx)(D.a.Column,{text:{label:Object(w.jsx)(b.a,{typography:"Body1Strong",textAlign:"right",mb:"24px",numberOfLines:1,children:Object(E.a)({price:Object(A.c)(new I.BigNumber(null!=(r=a.market_cap)?r:"0").decimalPlaces(2).toNumber()),networkId:null==o||null==(n=o.selectedNetwork)?void 0:n.id})})}})]})}),[null==o||null==(r=o.selectedNetwork)?void 0:r.id,i,c]);return void 0===n||0===(null==n?void 0:n.length)||null!=o&&o.loading?Object(w.jsx)(B.a,{isTab:null==o?void 0:o.isTab,numberOfData:null!=o&&o.isTab?5:10}):Object(w.jsx)(M.a,{from:{opacity:.5},animate:{opacity:1},children:Object(w.jsx)(T.a,{data:n,renderItem:a,keyExtractor:function(e,t){return""+e.contract_address+t},ItemSeparatorComponent:z,ListFooterComponent:H})})};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=function(){var e,t,r,n,o,i=Object(c.a)(),a=null==(e=Object(_.b)())?void 0:e.context,l=null==(t=Object(_.b)())?void 0:t.setContext,s=S.a.serviceNFT;return Object(f.useEffect)((function(){C()((function*(){if(1===(null==a?void 0:a.selectedIndex)&&l){var e;l((function(e){return G(G({},e),{},{loading:!0})}));var t=yield s.getMarketCapCollection({chain:null==(e=a.selectedNetwork)?void 0:e.id,limit:a.isTab?5:100});t&&l((function(e){var r=e.isTab;return G(G({},e),{},{marketCapList:r?t.slice(0,5):t,loading:!1})}))}}))()}),[null==a||null==(r=a.selectedNetwork)?void 0:r.id,s,l]),i?Object(w.jsx)(W,{listData:null!=(n=null==a?void 0:a.marketCapList)?n:[]}):Object(w.jsx)(R,{listData:null!=(o=null==a?void 0:a.marketCapList)?o:[]})},X=r(1109),U=r(457),J=function(){var e,t=Object(x.a)(),r=null==(e=Object(_.b)())?void 0:e.context,n=Object(U.a)().screenWidth-224<900,o=Object(f.useMemo)((function(){switch(null==r?void 0:r.selectedTime){case 0:return t.formatMessage({id:"content__int_hours_sales"},{0:6});case 1:return t.formatMessage({id:"content__int_hours_sales"},{0:12});case 2:return t.formatMessage({id:"content__int_day_sales"},{0:1})}}),[null==r?void 0:r.selectedTime,t]),c=Object(f.useMemo)((function(){switch(null==r?void 0:r.selectedTime){case 0:return t.formatMessage({id:"content__int_hours_volume"},{0:6});case 1:return t.formatMessage({id:"content__int_hours_volume"},{0:12});case 2:return t.formatMessage({id:"content__int_day_volume"},{0:1})}}),[null==r?void 0:r.selectedTime,t]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(D.a,{children:[Object(w.jsx)(D.a.Column,{p:0,flex:1.9,text:{label:t.formatMessage({id:"content__collection"}),labelProps:{typography:"Subheading",color:"text-subdued"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:t.formatMessage({id:"content__uique_owner"}),labelProps:{typography:"Subheading",color:"text-subdued",textAlign:"right"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:t.formatMessage({id:"content__blue_chip_rates"}),labelProps:{typography:"Subheading",color:"text-subdued",textAlign:"right"}}}),!n&&Object(w.jsx)(D.a.Column,{flex:1,text:{label:o,labelProps:{typography:"Subheading",color:"text-subdued",textAlign:"right"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:c,labelProps:{typography:"Subheading",color:"text-subdued",textAlign:"right"}}})]}),Object(w.jsx)(a.a,{mx:"8px",borderBottomWidth:1,borderColor:"divider"})]})},q=function(e){var t,r,n=e.listData,o=null==(t=Object(_.b)())?void 0:t.context,c=Object(x.a)(),i=Object(P.a)(),l=Object(U.a)().screenWidth-224<900,s=Object(f.useCallback)((function(e){var t,r,n,s,u,d,b,j,p,f,O,x,h=e.item,g=e.index,m=(null!=(t=h.owners_total)?t:0)/(null!=(r=h.items_total)?r:0)*100,y=null!=(n=h.volume_change)?n:"-";return null!=h&&null!=(s=h.volume_change)&&s.startsWith("-")?(O="surface-critical-subdued",x="text-critical"):null!=h&&null!=(u=h.volume_change)&&u.startsWith("0.00%")?x="text-subdued":(O="surface-success-subdued",x="text-success"),Object(w.jsxs)(D.a,{onPress:function(){var e;i({contractAddress:h.contract_address,networkId:null==o||null==(e=o.selectedNetwork)?void 0:e.id,title:h.contract_name})},children:[Object(w.jsxs)(v.a,{flex:1.9,space:"12px",alignItems:"center",children:[Object(w.jsx)(N.a,{src:h.logo_url,width:"40px",height:"40px",verified:h.openseaVerified}),Object(w.jsx)(D.a.Column,{text:{label:""+(g+1),labelProps:{pb:"24px",typography:"Body1Mono"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:h.contract_name,labelProps:{isTruncated:!0},description:Object(E.a)({prefix:c.formatMessage({id:"content__floor"}),price:h.floor_price,networkId:null==o||null==(d=o.selectedNetwork)?void 0:d.id}),descriptionProps:{numberOfLines:1}}})]}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:m<=100?new I.BigNumber(null!=m?m:"0").decimalPlaces(2).toString()+"%":"",labelProps:{textAlign:"right"}}}),Object(w.jsx)(D.a.Column,{flex:1,text:{label:null!=(b=null==(j=h.blueChip)?void 0:j.next_blue_chip_probability)?b:"-",labelProps:{textAlign:"right"}}}),!l&&Object(w.jsx)(D.a.Column,{flex:1,text:{label:h.sales,labelProps:{textAlign:"right"}}}),Object(w.jsx)(D.a.Column,{space:"2px",flex:1,text:{label:Object(E.a)({price:new I.BigNumber(null!=(p=h.volume)?p:"0").decimalPlaces(2).toString(),networkId:null==o||null==(f=o.selectedNetwork)?void 0:f.id}),labelProps:{textAlign:"right"},description:Object(w.jsx)(a.a,{justifyContent:"flex-end",flex:1,width:"full",flexDirection:"row",children:Object(w.jsx)(X.a,{size:"sm",bgColor:O,title:y,color:x})})}})]})}),[null==o||null==(r=o.selectedNetwork)?void 0:r.id,i,l,c]);return void 0===n||0===(null==n?void 0:n.length)||null!=o&&o.loading?Object(w.jsx)(B.a,{ListHeaderComponent:function(){return J()},isTab:null==o?void 0:o.isTab,numberOfData:null!=o&&o.isTab?5:10}):Object(w.jsx)(M.a,{from:{opacity:.5},animate:{opacity:1},children:Object(w.jsx)(T.a,{ListHeaderComponent:function(){return J()},data:n,showDivider:!0,renderItem:s,keyExtractor:function(e,t){return""+e.contract_address+t}})})},Y=r(3306);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={0:"6h",1:"12h",2:"1d"},$=function(){var e,t,r,n,o,i=Object(c.a)(),a=null==(e=Object(_.b)())?void 0:e.context,l=null==(t=Object(_.b)())?void 0:t.setContext,s=S.a.serviceNFT;return Object(f.useEffect)((function(){C()((function*(){if(0===(null==a?void 0:a.selectedIndex)&&l){var e;l((function(e){return Q(Q({},e),{},{loading:!0})}));var t=yield s.getMarketRanking({chain:null==(e=a.selectedNetwork)?void 0:e.id,time:Z[a.selectedTime]});t&&l((function(e){var r=e.isTab;return Q(Q({},e),{},{rankingList:r?t.slice(0,5):t,loading:!1})}))}}))()}),[null==a||null==(r=a.selectedNetwork)?void 0:r.id,null==a?void 0:a.selectedTime,s,l]),i?Object(w.jsx)(Y.a,{listData:null!=(n=null==a?void 0:a.rankingList)?n:[]}):Object(w.jsx)(q,{listData:null!=(o=null==a?void 0:a.rankingList)?o:[]})};function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(){var e,t,r=Object(P.b)(),n=Object(f.useState)(r),o=p()(n,2),c=o[0],u=o[1],d=Object(O.u)(),j=null==(e=Object(_.b)())?void 0:e.setContext,m=null==(t=Object(_.b)())?void 0:t.context,v=Object(x.a)();return Object(w.jsxs)(a.a,{flexDirection:"row",justifyContent:"space-between",mb:"12px",children:[Object(w.jsx)(b.a,{typography:"Heading",children:v.formatMessage({id:"content__stats"})}),Object(w.jsxs)(i.a,{alignItems:"center",space:"20px",children:[Object(w.jsx)(g.a,{selectedNetwork:c,onChange:function(e){u(e),j&&j((function(t){return te(te({},t),{},{selectedNetwork:e})}))}}),Object(w.jsx)(a.a,{m:"-8px",mr:"-12px",children:Object(w.jsxs)(l.a,{onPress:function(){d.navigate(h.a.NFTMarketStatsList,{network:c,selectedIndex:null==m?void 0:m.selectedIndex})},p:"8px",rounded:"xl",flexDirection:"row",alignItems:"center",_hover:{bg:"surface-hovered"},_pressed:{bg:"surface-pressed"},children:[Object(w.jsx)(b.a,{typography:{sm:"Body1Strong",md:"Body2Strong"},color:"text-subdued",mr:"4px",children:v.formatMessage({id:"action__see_all"})}),Object(w.jsx)(s.a,{name:"ChevronRightMini",color:"icon-subdued",size:20})]})})]})]})},ne=function(){var e,t,r,i,l=null==(e=Object(_.b)())?void 0:e.context,s=null==(t=Object(_.b)())?void 0:t.setContext,u=Object(f.useState)(null!=(r=null==l?void 0:l.selectedTime)?r:0),d=p()(u,2),j=d[0],O=d[1],h=Object(f.useState)(null!=(i=null==l?void 0:l.selectedIndex)?i:0),g=p()(h,2),m=g[0],v=g[1],P=Object(c.a)(),k=Object(x.a)(),C=Object(f.useMemo)((function(){switch(null==l?void 0:l.selectedTime){case 0:return k.formatMessage({id:"content__int_hours_volume"},{0:6});case 1:return k.formatMessage({id:"content__int_hours_volume"},{0:12});case 2:return k.formatMessage({id:"content__int_day_volume"},{0:1})}}),[null==l?void 0:l.selectedTime,k]);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(a.a,{flexDirection:"row",justifyContent:"space-between",alignItems:"center",mb:"16px",children:[Object(w.jsx)(o.a,{buttons:[{text:k.formatMessage({id:"content__ranking"})},{text:k.formatMessage({id:"content__market_cap"})}],size:"lg",selectedIndex:m,bg:"transparent",onButtonPress:function(e){v(e),s&&s((function(t){return te(te({},t),{},{selectedIndex:e})}))},flex:1}),(null==l?void 0:l.isTab)&&P&&Object(w.jsx)(b.a,{typography:"Body2",color:"text-subdued",textAlign:"right",children:0===m?k.formatMessage({id:"content__int_day_volume"},{0:1}):""}),!(null!=l&&l.isTab)&&0===(null==l?void 0:l.selectedIndex)&&P&&Object(w.jsx)(y,{title:C,onChange:function(e){O(e),s&&s((function(t){return te(te({},t),{},{selectedTime:e})}))}}),!(null!=l&&l.isTab)&&0===(null==l?void 0:l.selectedIndex)&&!P&&Object(w.jsx)(a.a,{width:"160px",children:Object(w.jsx)(n.a,{values:["6H","12H","1D"],selectedIndex:j,onChange:function(e){O(e),s&&s((function(t){return te(te({},t),{},{selectedTime:e})}))}})})]}),0===m?Object(w.jsx)($,{}):Object(w.jsx)(V,{})]})};t.b=function(){var e=Object(P.b)(),t=Object(f.useState)({isTab:!0,selectedNetwork:e,selectedIndex:0,selectedTime:2}),r=p()(t,2),n=r[0],o=r[1],c=Object(f.useMemo)((function(){return{context:n,setContext:o}}),[n]);return Object(w.jsxs)(_.a.Provider,{value:c,children:[Object(w.jsx)(re,{}),Object(w.jsx)(ne,{})]})}},3735:function(e,t,r){"use strict";r.r(t);var n=r(559),o=r(2),c=r.n(o),i=r(10),a=r.n(i),l=r(558),s=r(1),u=r(52),d=r(508),b=r(3123),j=r(3405),p=r(3091),f=r(0);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=Object(l.a)().bottom,t=Object(u.u)(),r=Object(d.a)(),o=Object(u.x)().params,c=o.network,i=o.selectedIndex,O=Object(s.useState)(c),h=a()(O,2),g=h[0],m=h[1],v=Object(s.useState)({isTab:!1,selectedIndex:i,selectedTime:2,selectedNetwork:g}),w=a()(v,2),y=w[0],P=w[1];Object(s.useLayoutEffect)((function(){t.setOptions({title:"Stats",headerRight:function(){return Object(f.jsx)(b.a,{triggerSize:"lg",selectedNetwork:g,onChange:function(e){m(e),P&&P((function(t){return x(x({},t),{},{selectedNetwork:e})}))},tiggerProps:{paddingRight:"16px"}})}})}),[r,t,g]);var _=Object(s.useMemo)((function(){return{context:y,setContext:P}}),[y]);return Object(f.jsx)(p.a.Provider,{value:_,children:Object(f.jsx)(n.a,{p:{base:"16px",md:"32px"},contentContainerStyle:{width:"100%",maxWidth:992,paddingBottom:e,alignSelf:"center"},children:Object(f.jsx)(j.a,{})})})}}}]);