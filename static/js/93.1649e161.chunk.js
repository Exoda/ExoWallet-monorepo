(this.webpackJsonp=this.webpackJsonp||[]).push([[93,109],{3086:function(e,t,r){"use strict";var n=r(3153);r.d(t,"a",(function(){return n.a}))},3153:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(10),o=r.n(n),a=r(16),c=r.n(a),i=r(1),s=r(248),d=r(254),l=r(249),u=r(207);var b=r(556),j=r(652),f=r(24),O=["children"];function m(e){var t=e.children,r=c()(e,O),n=Object(s.a)("Hidden",r,{},{ignoreProps:["only","platform"]}),a=n.from,i=n.till,m=n.only,h=n.platform,p=n.colorMode,g=Object(d.a)().breakpoints,v=Object(j.b)(),_=function(e){var t,r=null===(t=Object(l.a)())||void 0===t?void 0:t.width,n=Object(d.a)();if(Object(u.k)(e,n.breakpoints)){var o=Object(u.g)(n.breakpoints,r);return Object(u.f)(e,n.breakpoints,o)}return e}(Object.keys(g).reduce((function(e,t){return e[t]=t,e}),{})),y=Object(b.a)("breakpoints",[_]),k=o()(y,1)[0],x=Object(b.a)("breakpoints",[a]),C=o()(x,1)[0],w=Object(b.a)("breakpoints",[i]),M=o()(w,1)[0];return a||i||m||p||h?a&&i&&k>=C&&k<M||a&&!i&&k>=C||i&&!a&&k<M||Array.isArray(m)&&m.includes(_)||m===_||Array.isArray(h)&&h.includes(f.a.OS)||h===f.a.OS||p===v.colorMode?null:t:null}Object(i.memo)(m)},3729:function(e,t,r){"use strict";r.r(t);var n=r(3086),o=r(41),a=r(744),c=r(32),i=r(1110),s=r(70),d=r(1),l=r(508),u=r(43),b=r(3062),j=r(176),f=r(42),O=r(94),m=r(0),h=function(e){var t=e.title,r=e.onToggle,n=e.divider,o=e.isChecked;return Object(m.jsxs)(c.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",py:4,px:{base:4,md:6},borderBottomWidth:n?"1 ":void 0,borderBottomColor:"divider",children:[Object(m.jsx)(s.a,{typography:{sm:"Body1Strong",md:"Body2Strong"},flex:"1",numberOfLines:1,mr:"3",children:t}),Object(m.jsx)(c.a,{children:Object(m.jsx)(i.a,{labelType:"false",isChecked:o,onToggle:r})})]})};t.default=function(){var e=Object(l.a)(),t=Object(j.o)(),r=Object(f.o)().authenticationType,i=Object(f.n)().validationSetting,s=void 0===i?{}:i,p=Object(a.a)().themeVariant;Object(d.useLayoutEffect)((function(){var r=e.formatMessage({id:"action__protection"});t.setOptions({title:r})}),[t,e,r]);var g=Object(d.useCallback)((function(e,t){u.a.dispatch(Object(O.K)({key:e,value:t}))}),[]);return Object(m.jsx)(c.a,{w:"full",h:"full",bg:"background-default",p:"4",maxW:768,mx:"auto",children:Object(m.jsxs)(c.a,{children:[Object(m.jsx)(o.h.Caption,{mt:"2",color:"text-subdued",children:e.formatMessage({id:"content__password_required_even_unlocked"})}),Object(m.jsx)(c.a,{w:"full",mt:"6",children:Object(m.jsxs)(c.a,{mt:"2",borderRadius:"12",bg:"surface-default",borderWidth:"light"===p?1:void 0,borderColor:"border-subdued",children:[Object(m.jsx)(h,{title:e.formatMessage({id:"form__create_transactions"}),isChecked:s.Payment,divider:!0,onToggle:function(){return g(b.a.Payment,!s.Payment)}}),Object(m.jsx)(h,{title:e.formatMessage({id:"form__create_delete_wallets"}),isChecked:s.Wallet,divider:!0,onToggle:function(){return g(b.a.Wallet,!s.Wallet)}}),Object(m.jsx)(h,{title:e.formatMessage({id:"form__create_delete_accounts"}),isChecked:s.Account,onToggle:function(){return g(b.a.Account,!s.Account)}}),Object(m.jsx)(n.a,{children:Object(m.jsx)(h,{title:e.formatMessage({id:"form__view_recovery_phrase_private_key"}),isChecked:s.Secret,onToggle:function(){return g(b.a.Secret,!s.Secret)}})})]})})]})})}}}]);