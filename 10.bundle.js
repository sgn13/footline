(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{114:function(n,e,t){"use strict";t.d(e,"a",(function(){return O}));var r,i,o,a,l,c,s,d,u=t(45),m=t.n(u),p=t(44),f=t.n(p),b=t(0),h=t.n(b),g=t(111),x=g.c.span(r||(r=f()(["\n  font-size: ","rem;\n\n  ","\n  ","\n     ","\n  ","\n"])),(function(n){var e=n.size,t=void 0===e?"md":e;return"lg"===t?1.5:"md"===t?1.2:1}),(function(n){return"label"===n.type&&"\n    font-weight: bold;\n   "}),(function(n){return"help"===n.type&&"\n    color:".concat(g.b.color.gray,";\n    \n    font-style: italic;\n   ")}),(function(n){return"error"===n.type&&"\n    color:".concat(g.b.color.red,";\n\n    font-weight: bold;\n   ")}),(function(n){return n.icon&&"\n      display: flex;\n      align-items:center;\n      text-align:left;\n      svg{\n        margin-right: .5rem;\n      }\n   "})),w=g.c.span(i||(i=f()(["\n  margin-right: 0.1rem;\n"]))),y=function(n){var e=n.children,t=n.icon,r=n.required;return h.a.createElement(x,n,r&&h.a.createElement(w,null,"*"),t,e)},v=["name","label","icon","required","errors","helpText","onClear","children","size","inputSize"],E=g.c.div(o||(o=f()(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n\n  width: 100%;\n  min-width: 100px;\n"]))),k=g.c.div(a||(a=f()(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: -10px;\n  top: 15px;\n\n  color: white;\n\n  text-align: center;\n\n  background: ",";\n\n  border-radius: 100%;\n\n  cursor: pointer;\n  z-index: 2;\n"])),g.b.color.red),O=Object(g.c)(y)(l||(l=f()(["\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n"]))),j=Object(g.c)(y)(c||(c=f()(["\n  margin-top: 0.5rem;\n"]))),z=Object(g.c)(y)(s||(s=f()(["\n  margin: 0.5rem 0;\n  font-weight: 400;\n  font-size: 0.75rem;\n"])));Object(g.c)(y)(d||(d=f()(["\n  display: inline-block;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  width: 100%;\n"]))),e.b=function(n){var e=n.name,t=n.label,r=n.icon,i=n.required,o=n.errors,a=n.helpText,l=n.onClear,c=n.children,s=n.size,d=n.inputSize,u=m()(n,v);return h.a.createElement(E,u,l&&h.a.createElement(k,{onClick:l},"X"),t&&h.a.createElement(O,{required:i,icon:r,size:s||d},t),c,o&&h.a.createElement(z,{type:"error"}," ",function(){if(e&&Object.values(o).length){if(!e.includes("."))return o[e];var n=e.split(".");return 1===n.length?o[n[0]]:2===n.length?o[n[0]]&&o[n[0]][n[1]]:3===n.length?o[n[0]]&&o[n[0]][n[1]]&&o[n[0]][n[1]][n[2]]:void 0}}()),a&&h.a.createElement(j,{type:"help"}," ",a))}},120:function(n,e,t){"use strict";var r,i=t(9),o=t.n(i),a=t(44),l=t.n(a),c=t(114),s=t(0),d=t.n(s),u=t(111);function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){o()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var f=u.c.input(r||(r=l()(["\n  font-size: ","rem;\n  height: ","px;\n\n  /* padding: ","; */\n\n  position: relative;\n  width: 100%;\n\n  transition: border, color 0.2s ease-in-out;\n  background-color: ",";\n\n  border: 1px solid\n    ",";\n\n  border-radius: 8px;\n\n  :-webkit-autofill {\n    :focus {\n      border: 1px solid black;\n    }\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n\n  :hover {\n    border: 1px solid ",";\n  }\n\n  :focus {\n    outline: 0;\n    border: 2px solid ",";\n  }\n"])),(function(n){var e=n.inputSize,t=void 0===e?"md":e;return"lg"===t?1.2:"md"===t?1:.7}),(function(n){var e=n.inputSize,t=void 0===e?"md":e;return"lg"===t?50:"md"===t?40:20}),(function(n){var e=n.inputIcon;return"1rem 1rem 1rem ".concat(e?"3":".3","rem;")}),u.b.color.white,(function(n){var e=n.errors,t=n.value,r=n.required;return e&&!t&&r?u.b.color.red:u.b.color.gray}),u.b.color.gray,u.b.primary.default,u.b.primary.default);e.a=function(n){var e=n.inputIcon,t=n.icon,r=n.name,i=n.label,o=n.required,a=n.errors,l=n.helpText,s=n.onClear,u=n.style,m=n.inputSize,b={name:r,label:i,required:o,errors:a,helpText:l,onClear:s,style:u,icon:t};return d.a.createElement(c.b,p(p({},b),{},{size:m}),e,d.a.createElement(f,n))}},122:function(n,e,t){"use strict";var r,i,o,a=t(44),l=t.n(a),c=t(114),s=t(0),d=t.n(s),u=t(111),m=t(134),p=u.c.button(r||(r=l()(["\n  ","\n\n  ","\n"])),(function(n){var e=n.size,t=n.primary,r=void 0===t||t,i=n.transparent,o=void 0!==i&&i,a=n.variant,l=n.color,c=n.btnType;return"\n    min-width: 6.25em;\n    padding: ".concat("lg"===e?"0.625em 1em":"md"===e?"0.5em .8em":"0.4em .5em",";\n\n    background-color: ").concat(o||"outlined"===c?"transparent":r?"".concat(Object(u.a)({type:a})):u.b.secondary.default,";\n    display: inline-block;\n    position: relative;\n    box-sizing: border-box;\n    background-clip: padding-box;\n    box-shadow: inset 0 1px inherit;\n    width:fit-content;\n    font-size: ").concat("lg"===e?1.875:"md"===e?1.125:1,"rem;\n    font-family: ").concat(r?u.b.font.primary:u.b.font.secondary,";\n    color: ").concat(l||("outlined"===c?u.b.font.primary:a?u.b.color.white:r?u.b.primary.text:u.b.secondary.text),";\n    text-align: center;\n    text-decoration: none;\n    // text-shadow: 0 -1px rgb(0 0 0 / 69%);\n\n    border: ").concat("outlined"===c?"1px solid ".concat(u.b.primary.default):"0",";\n    border-radius: 0.3125em;\n\n    appearance: none;\n    cursor: pointer;\n    transition: 0.3s ease-out;\n    outline: 0;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    &:hover {\n      background-color: ").concat(o?"transparent":"outlined"===c?u.b.primary.default:r?"".concat(Object(u.a)({type:a,mode:"hover"})):u.b.secondary.default,";\n      color: ").concat("outlined"===c?"white":"inherit",";\n    }\n\n    &:focus, &:focus:hover {\n      background-color: ").concat(o?"transparent":r?"".concat(Object(u.a)({type:a,mode:"hover"})):u.b.secondary.default,";\n    }\n\n  ").concat(m.a," & {\n    // margin: 4px;\n   }\n  ")}),(function(n){return n.icon&&"\n      display: flex;\n      align-items: center;\n\n      svg{\n        margin-right: .5rem;\n      }\n   "})),f=u.c.div(i||(i=l()(["\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 5px solid;\n  margin-left: 0.5rem;\n"]))),b=Object(u.c)(c.b)(o||(o=l()(["\n  width: min-content;\n"])));e.a=function(n){var e=n.children,t=n.icon,r=n.name,i=n.label,o=n.required,a=n.errors,l=n.helpText,c=n.onClear,s=n.style,u=n.dropdown,m=n.btnType,h={name:r,label:i,required:o,errors:a,helpText:l,onClear:c,style:s,icon:t,btnType:void 0===m?"contained":m};return d.a.createElement(b,h,d.a.createElement(p,n,t,e,u&&d.a.createElement(f,null)))}},134:function(n,e,t){"use strict";var r,i,o=t(44),a=t.n(o),l=t(114),c=t(0),s=t.n(c),d=t(111),u=d.c.div(r||(r=a()(["\n  display: inline-flex;\n  align-items: center;\n  width: fit-content;\n  justify-content: flex-end;\n"]))),m=Object(d.c)(l.b)(i||(i=a()(["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n"])));e.a=function(n){var e=n.children,t=n.icon,r={name:n.name,label:n.label,required:n.required,errors:n.errors,helpText:n.helpText,onClear:n.onClear,style:n.style,icon:t};return s.a.createElement(m,r,s.a.createElement(u,null,e))}},154:function(n,e,t){"use strict";var r=t(22),i=t.n(r)()((function(n){return n[1]}));i.push([n.i,"#toast{position:fixed;z-index:100000000000000;right:30px;bottom:30px;display:flex;flex-direction:row;width:min-content;margin:auto;background-color:#333;color:#fff;text-align:center;font-size:18px;white-space:nowrap;visibility:visible;-webkit-animation:fadein 0.5s, expand 0.5s 0.5s, stay 10s 1s, shrink 0.5s 10s, fadeout 0.5s 10s;animation:fadein 0.5s, expand 0.5s 0.5s, stay 10s 1s, shrink 0.5s 10s, fadeout 0.5s 10s;padding-right:10px}#toast .badge{border-radius:0px}#toast .img{box-sizing:border-box;padding:15px}#toast #desc{color:#fff;overflow:hidden;white-space:nowrap;display:flex;justify-content:space-between;align-items:center;width:100%;margin-left:16px}.close-button{cursor:pointer}.resend-button{margin-right:10px;cursor:pointer;font-size:15px;padding:5px}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes expand{from{min-width:50px}to{min-width:350px}}@keyframes expand{from{min-width:50px}to{min-width:350px}}@-webkit-keyframes stay{from{min-width:350px}to{min-width:350px}}@keyframes stay{from{min-width:350px}to{min-width:350px}}@-webkit-keyframes shrink{from{min-width:350px}to{min-width:50px}}@keyframes shrink{from{min-width:350px}to{min-width:50px}}\n",""]),e.a=i},161:function(n,e,t){"use strict";t.d(e,"b",(function(){return en})),t.d(e,"c",(function(){return tn})),t.d(e,"a",(function(){return rn}));var r,i,o,a=t(31),l=t.n(a),c=t(121),s=t.n(c),d=t(44),u=t.n(d),m=t(0),p=t.n(m),f=t(122),b=t(120),h=t(9),g=t.n(h),x=t(116),w=t.n(x),y=t(114),v=t(111),E=t(130);function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function O(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){g()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j,z,P,C,S,q,T,N,D,F,X,I,R,U=v.c.input(r||(r=u()(["\n  font-size: ","rem;\n  height: ","px;\n\n  padding: ",";\n\n  position: relative;\n  width: 100%;\n\n  transition: border, color 0.2s ease-in-out;\n  background-color: ",";\n\n  border: 1px solid\n    ",";\n\n  border-radius: 4px;\n\n  :-webkit-autofill {\n    -webkit-text-fill-color: #fff;\n    box-shadow: 0 0 0px 1000px "," inset;\n\n    :focus {\n      box-shadow: 0 0 0px 1000px "," inset;\n    }\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n\n  :hover {\n    border: 1px solid ",";\n  }\n\n  :focus {\n    outline: 0;\n    border: 1px solid ",";\n  }\n"])),(function(n){var e=n.inputSize,t=void 0===e?"md":e;return"lg"===t?1.2:"md"===t?1:.7}),(function(n){var e=n.inputSize,t=void 0===e?"md":e;return"lg"===t?50:"md"===t?40:20}),(function(n){var e=n.inputIcon;return"1rem 1rem 1rem ".concat(e?"3":".3","rem;")}),v.b.color.white,(function(n){var e=n.errors,t=n.value,r=n.required;return e&&!t&&r?v.b.color.red:v.b.color.gray}),v.b.color.black,v.b.primary.default,v.b.color.gray,v.b.primary.default,v.b.primary.default),B=v.c.div(i||(i=u()(["\n  display: flex;\n"]))),J=v.c.div(o||(o=u()(["\n  display: flex;\n  align-items: center;\n\n  padding: 0 0.5rem;\n\n  height: ","px;\n\n  position: absolute;\n  right: 0rem;\n\n  background: ",";\n\n  cursor: pointer;\n\n  border: 1px solid ",";\n  border-left: 0px;\n\n  border-radius: 4px;\n"])),(function(n){var e=n.inputSize,t=void 0===e?"md":e;return"lg"===t?50:"md"===t?40:20}),v.b.color.spaceGray,v.b.color.gray),A=function(n){n.inputIcon;var e=n.icon,t=n.name,r=n.label,i=n.required,o=n.errors,a=n.helpText,l=n.onClear,c=n.style,d=n.inputSize,u={name:t,label:r,required:i,errors:o,helpText:a,onClear:l,style:c,icon:e},f=Object(m.useState)(!0),b=w()(f,2),h=b[0],g=b[1];return p.a.createElement(y.b,O(O({},u),{},{size:d}),p.a.createElement(B,null,p.a.createElement(U,s()({},n,{type:h?"password":"text"})),p.a.createElement(J,{onClick:function(){return g(!h)}},h?p.a.createElement(E.h,null):p.a.createElement(E.g,null))))},G=t(149),H=t(133),M=v.c.div(j||(j=u()(["\n  // background-color: #fff;\n  // border-radius: 7px;\n  // box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  // position: relative;\n  // overflow: hidden;\n  // width: 60vw;\n  // max-width: 100%;\n  // min-height: 70vh;\n"]))),V=v.c.div(z||(z=u()(["\n  position: absolute;\n  top: 0;\n  right: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n"]))),K=v.c.div(P||(P=u()(["\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  position: relative;\n  left: 0%;\n  height: 100%;\n  width: 100%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n"]))),L=v.c.div(C||(C=u()(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n"]))),Q=v.c.div(S||(S=u()(["\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n  right: 0;\n  width: 50%;\n  z-index: 2;\n"]))),W=Object(v.c)(H.a)(q||(q=u()(["\n  // background-color: ",";\n  // display: flex;\n  // align-items: center;\n  // justify-content: center;\n  // flex-direction: column;\n  // padding: 0 50px;\n  // height: 100%;\n  // position: relative;\n"])),v.b.primary.default),Y=v.c.div(T||(T=u()(["\n  font-weight: 600;\n  font-size: 1.5rem;\n  line-height: 2.43rem;\n\n  position: relative;\n\n  margin-bottom: 0.25rem;\n\n  &::before {\n    content: '';\n    position: absolute;\n    height: 3px;\n    width: 30%;\n    background: #fff;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: -20%;\n  }\n"]))),Z=v.c.div(N||(N=u()(["\n  margin: 0 0 2rem 0;\n"]))),$=v.c.p(D||(D=u()(["\n  margin: 0.5rem auto 0 auto;\n"]))),_=(v.c.div(F||(F=u()(["\n  width: 180px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),v.c.div(X||(X=u()(["\n  // margin-top: 1.5rem;\n\n  // width: 90%;\n\n  // display: flex;\n  // flex-direction: column;\n  // justify-content: center;\n  // align-items: center;\n\n  // color: ",";\n"])),v.b.color.white)),nn=Object(v.c)(f.a)(I||(I=u()(["\n  width: min-content;\n\n  background: ",";\n\n  -webkit-border-radius: 24;\n  -moz-border-radius: 24;\n  border-radius: 8px;\n  font-family: Arial;\n  font-size: 20px;\n  padding: 10px 20px 10px 20px;\n  text-decoration: none;\n\n  margin: 1rem auto auto;\n\n  color: ",";\n"])),v.b.primary.default,v.b.color.white),en=function(n){var e=s()({},(l()(n),n)),t=e.overlay,r=e.form;return p.a.createElement(M,null,p.a.createElement(V,null,p.a.createElement(K,null,t?p.a.createElement(L,null,t):p.a.createElement(p.a.Fragment,null))),p.a.createElement(Q,null,r))},tn=v.c.div(R||(R=u()(["\n  background: #f6f5f7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: ",";\n"])),v.b.constant.authBodyHeight),rn=function(n){var e=n.formTitle,t=n.formDesc,r=n.elements,i=n.buttonName,o=n.actions,a=void 0===o?[]:o,l=n.onSubmit,c=n.isSubmitting,s=G.a().shape({email:r.email?G.c().required().label("Email"):G.c().optional(),username:r.username?G.c().required().label("Username"):G.c().optional(),password:r.password?G.c().required().label("Password"):G.c().optional(),confirmPassword:r.password&&r.confirmPassword?G.c().oneOf([G.b("password"),null],"Passwords must match"):G.c().optional()});return p.a.createElement(H.b,{initialValues:{email:"",password:"",confirmPassword:"",username:""},onSubmit:l,validationSchema:s,validateOnMount:!1,validateOnChange:!1,validateOnBlur:!1,enableReinitialize:!0},(function(n){var o=n.values,s=n.errors,d=n.handleChange;return p.a.createElement(W,null,p.a.createElement(_,null,p.a.createElement(Z,null,e&&p.a.createElement(Y,null,e),t&&p.a.createElement("p",null,t)),r.email&&p.a.createElement(b.a,{name:"email",value:o.email,errors:s,type:"email",label:"Email",placeholder:"Enter Email",onChange:d,icon:p.a.createElement(E.p,null)})," ",r.username&&p.a.createElement(b.a,{name:"username",value:o.username,errors:s,label:"Username",placeholder:"Enter Username",onChange:d,icon:p.a.createElement(E.p,null)}),r.password&&p.a.createElement(p.a.Fragment,null,p.a.createElement("br",null),p.a.createElement(A,{name:"password",value:o.password,errors:s,type:"password",label:"Password",placeholder:"Enter Password",onChange:d,icon:p.a.createElement(E.k,null)}))," ",r.password&&r.confirmPassword&&p.a.createElement(p.a.Fragment,null,p.a.createElement("br",null),p.a.createElement(A,{name:"confirmPassword",value:o.confirmPassword,errors:s,type:"confirmPassword",label:"Confirm Password",placeholder:"Enter Confirm Password",onChange:d,icon:p.a.createElement(E.k,null)})),i&&l&&p.a.createElement(nn,{className:"auth",type:"submit",size:"sm",disabled:c},c?"Submitting":p.a.createElement(p.a.Fragment,null,i)),a.map((function(n){return p.a.createElement($,{onClick:n.action},n.name)}))))}))}},162:function(n,e,t){"use strict";var r=t(0),i=t.n(r),o=t(21),a=t.n(o),l=t(154),c={insert:"head",singleton:!1};a()(l.a,c),l.a.locals,e.a=function(n){var e,t=n.data,o=n.resetNotification,a=(t.name,t.message),l=t.level;return Object(r.useEffect)((function(){e=setTimeout(o,5e3)}),[]),i.a.createElement("div",{id:"toast"},i.a.createElement("div",{className:"error"===l?"img badge badge-danger":"success"===l?"img badge badge-success":"img"},i.a.createElement("span",{className:"close-button",onClick:function(){o(),clearTimeout(e)}},"X")),i.a.createElement("div",{id:"desc"},i.a.createElement("span",null," ",a)))}},507:function(n,e,t){"use strict";t.r(e);var r,i,o=t(44),a=t.n(o),l=t(0),c=t.n(l),s=t(19),d=t(6),u=t(161),m=t(111),p=t(162),f=m.c.div(r||(r=a()(["\n  background: #fff;\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),b=m.c.img(i||(i=a()(["\n  width: 100%;\n"]))),h={resetNotification:d.d},g=Object(s.b)((function(n){return{notification:n.appState.notification}}),h);e.default=g((function(n){var e=n.notification,t=n.resetNotification;return Object(l.useEffect)((function(){"granted"!==Notification.permission&&Notification.requestPermission()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.c,null,c.a.createElement(u.b,{overlay:c.a.createElement(f,null,c.a.createElement(b,{src:""})),form:c.a.createElement(u.a,{formTitle:"Reset Password",elements:{password:!0,confirmPassword:!0},buttonName:"Reset",onSubmit:function(n){}})})),!(!e||!e.length)&&c.a.createElement(p.a,{data:e[0],resetNotification:t}))}))}}]);