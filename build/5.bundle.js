(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{120:function(e,t,n){"use strict";var r,a=n(9),o=n.n(a),i=n(44),c=n.n(i),u=n(114),s=n(0),l=n.n(s),f=n(111);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=f.c.input(r||(r=c()(["\n  font-size: ","rem;\n  height: ","px;\n\n  /* padding: ","; */\n\n  position: relative;\n  width: 100%;\n\n  transition: border, color 0.2s ease-in-out;\n  background-color: ",";\n\n  border: 1px solid\n    ",";\n\n  border-radius: 8px;\n\n  :-webkit-autofill {\n    :focus {\n      border: 1px solid black;\n    }\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n\n  :hover {\n    border: 1px solid ",";\n  }\n\n  :focus {\n    outline: 0;\n    border: 2px solid ",";\n  }\n"])),(function(e){var t=e.inputSize,n=void 0===t?"md":t;return"lg"===n?1.2:"md"===n?1:.7}),(function(e){var t=e.inputSize,n=void 0===t?"md":t;return"lg"===n?50:"md"===n?40:20}),(function(e){var t=e.inputIcon;return"1rem 1rem 1rem ".concat(t?"3":".3","rem;")}),f.b.color.white,(function(e){var t=e.errors,n=e.value,r=e.required;return t&&!n&&r?f.b.color.red:f.b.color.gray}),f.b.color.gray,f.b.primary.default,f.b.primary.default);t.a=function(e){var t=e.inputIcon,n=e.icon,r=e.name,a=e.label,o=e.required,i=e.errors,c=e.helpText,s=e.onClear,f=e.style,d=e.inputSize,b={name:r,label:a,required:o,errors:i,helpText:c,onClear:s,style:f,icon:n};return l.a.createElement(u.b,p(p({},b),{},{size:d}),t,l.a.createElement(m,e))}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===(void 0===e?"undefined":r(e))&&!(e instanceof Array)}))},c=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},u=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(a(e),a(t)))}),[]))},s=t.jsons2arrays=function(e,t){var n=t=t||u(e),r=t;i(t)&&(n=t.map((function(e){return e.label})),r=t.map((function(e){return e.key})));var o=e.map((function(e){return r.map((function(t){return l(t,e)}))}));return[n].concat(a(o))},l=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var a=e[t];if(null!=a)return a;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},f=t.elementOrEmpty=function(e){return null==e?"":e},d=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return f(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,n,r){return d(t?[t].concat(a(e)):e,n,r)},m=t.jsons2csv=function(e,t,n,r){return d(s(e,t),n,r)},b=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},y=t.toCSV=function(e,t,n,r){if(i(e))return m(e,t,n,r);if(c(e))return p(e,t,n,r);if("string"==typeof e)return b(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,a){var i=y(e,n,r,a),c=o()?"application/csv":"text/csv",u=new Blob([t?"\ufeff":"",i],{type:c}),s="data:"+c+";charset=utf-8,"+(t?"\ufeff":"")+i,l=window.URL||window.webkitURL;return void 0===l.createObjectURL?s:l.createObjectURL(u)}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,a=n(0),o=((r=a)&&r.__esModule,n(23));t.propTypes={data:(0,o.oneOfType)([o.string,o.array,o.func]).isRequired,headers:o.array,target:o.string,separator:o.string,filename:o.string,uFEFF:o.bool,onClick:o.func,asyncOnClick:o.bool,enclosingCharacter:o.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]},128:function(e,t,n){var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},136:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(0);n(46);const a=["xxl","xl","lg","md","sm","xs"],o=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:i,Provider:c}=o;function u(e,t){const{prefixes:n}=Object(r.useContext)(o);return e||n[t]||t}function s(){const{breakpoints:e}=Object(r.useContext)(o);return e}function l(){const{minBreakpoint:e}=Object(r.useContext)(o);return e}},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CSVLink=t.CSVDownload=void 0;var r=o(n(140)),a=o(n(141));function o(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,t.CSVLink=a.default},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(125),u=n(126);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,a=e.enclosingCharacter,o=e.uFEFF,i=e.target,c=e.specs,u=e.replace;this.state.page=window.open(this.buildURI(t,o,n,r,a),i,c,u)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);s.defaultProps=Object.assign(u.defaultProps,{target:"_blank"}),s.propTypes=u.propTypes,t.default=s},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=(r=i)&&r.__esModule?r:{default:r},u=n(125),s=n(126);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return u.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,a=n.headers,o=n.separator,i=n.filename,c=n.enclosingCharacter,s=n.uFEFF,l=t&&"function"==typeof r?r():r,f=new Blob([s?"\ufeff":"",(0,u.toCSV)(l,a,o,c)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"==typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,o=t.separator,i=t.filename,u=t.uFEFF,s=t.children,l=(t.onClick,t.asyncOnClick,t.enclosingCharacter),f=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"==typeof window?"":this.buildURI(n,u,r,o,l);return c.default.createElement("a",a({download:i},f,{ref:function(t){return e.link=t},target:"_self",href:d,onClick:this.handleClick()}),s)}}]),t}(c.default.Component);l.defaultProps=s.defaultProps,l.propTypes=s.propTypes,t.default=l},155:function(e,t,n){"use strict";var r,a=n(121),o=n.n(a),i=n(9),c=n.n(i),u=n(45),s=n.n(u),l=n(44),f=n.n(l),d=n(0),p=n.n(d),m=n(133),b=n(111),y=["renderForm","initialValues","validationSchema","onSubmit"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=b.c.div(r||(r=f()([""])));t.a=function(e){var t=e.renderForm,n=e.initialValues,r=e.validationSchema,a=e.onSubmit,i=s()(e,y);return p.a.createElement(h,null,p.a.createElement(m.b,o()({validateOnBlur:!1,validateOnMount:!1,validateOnChange:!1,enableReinitialize:!0,onSubmit:a,initialValues:n,validationSchema:r},i),(function(e){return t(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))})))}},156:function(e,t,n){"use strict";var r,a,o,i=n(44),c=n.n(i),u=n(114),s=n(0),l=n.n(s),f=n(111),d=f.c.label(r||(r=c()(["\n  position: relative;\n  display: inline-block;\n  width: 3em;\n  height: 1.5em;\n"]))),p=f.c.input.attrs({type:"checkbox"})(a||(a=c()(["\n  height: 0;\n  width: 0;\n"]))),m=f.c.span(o||(o=c()(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 3em;\n\n  &::before {\n    position: absolute;\n    content: '';\n    height: 1em;\n    width: 1em;\n    left: 0.55em;\n    bottom: 0.25em;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  ",":checked + & {\n    background-color: ",";\n  }\n\n  ",":checked + &::before {\n    -webkit-transform: translateX(1.2em);\n    -ms-transform: translateX(1.2em);\n    transform: translateX(1.2em);\n  }\n\n  ",":focus + & {\n    box-shadow: 0 0 0.1em ",";\n  }\n\n  ",":disabled + & {\n    pointer-events: none;\n    background: ",";\n  }\n"])),p,f.b.color.gray_700,p,p,f.b.primary.default,p,f.b.color.silver);t.a=function(e){var t=e.icon,n=e.name,r=e.label,a=e.required,o=e.errors,i=e.helpText,c=e.onClear,s=e.style,f=e.onClick,b={name:n,label:r,required:a,errors:o,helpText:i,onClear:c,style:s,icon:t};return l.a.createElement(u.b,b,l.a.createElement(d,{onClick:f},l.a.createElement(p,e),l.a.createElement(m,null)))}},170:function(e,t,n){e.exports=n(139)},198:function(e,t,n){"use strict";t.a={}},243:function(e,t,n){"use strict";var r=n(128),a=n.n(r),o=n(0),i=n(136),c=n(46);const u=o.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const u=Object(i.c)(e,"row"),s=Object(i.a)(),l=Object(i.b)(),f=u+"-cols",d=[];return s.forEach(e=>{const t=r[e];let n;delete r[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const a=e!==l?"-"+e:"";null!=n&&d.push(`${f}${a}-${n}`)}),Object(c.jsx)(n,{ref:o,...r,className:a()(t,u,...d)})});u.displayName="Row",t.a=u},244:function(e,t,n){"use strict";var r=n(128),a=n.n(r),o=n(0),i=n(136),c=n(46);const u=o.forwardRef((e,t)=>{const[{className:n,...r},{as:o="div",bsPrefix:u,spans:s}]=function({as:e,bsPrefix:t,className:n,...r}){t=Object(i.c)(t,"col");const o=Object(i.a)(),c=Object(i.b)(),u=[],s=[];return o.forEach(e=>{const n=r[e];let a,o,i;delete r[e],"object"==typeof n&&null!=n?({span:a,offset:o,order:i}=n):a=n;const l=e!==c?"-"+e:"";a&&u.push(!0===a?`${t}${l}`:`${t}${l}-${a}`),null!=i&&s.push(`order${l}-${i}`),null!=o&&s.push(`offset${l}-${o}`)}),[{...r,className:a()(n,...u,...s)},{as:e,bsPrefix:t,spans:u}]}(e);return Object(c.jsx)(o,{...r,ref:t,className:a()(n,!s.length&&u)})});u.displayName="Col",t.a=u},513:function(e,t,n){"use strict";n.r(t),n.d(t,"pageName",(function(){return _}));var r=n(116),a=n.n(r),o=n(13),i=n.n(o),c=n(31),u=n.n(c),s=n(4),l=n.n(s),f=n(0),d=n.n(f),p=n(19),m=n(184),b=n(186),y=n(171),v=n(121),h=n.n(v),g=n(133),w=n(149),O=n(155),j=n(243),k=n(244),x=n(120),C=n(122),E=n(156),S=function(e){var t=e.isSubmitting,n=e.formData,r=e.onCreate,a=e.onEdit,o=e.onBack,i=n?{name:n.name,is_active:n.is_active}:{name:"",is_active:!0},c=w.a().shape({name:w.c().required().label("Name")});return d.a.createElement(O.a,{initialValues:i,validationSchema:c,onSubmit:function(e,t){var o=h()({},(u()(e),e));n?a(o,t):r(o,t)},renderForm:function(e){var r=e.values,a=e.errors,i=e.handleChange,c=e.resetForm,u=e.setFieldValue;return d.a.createElement(g.a,null,d.a.createElement(j.a,null,d.a.createElement(k.a,{lg:12},d.a.createElement(x.a,{name:"name",label:"Name",placeholder:"Enter name",value:r.name,onChange:i,errors:a})),d.a.createElement(k.a,{lg:12},d.a.createElement(E.a,{label:"Active",checked:r.is_active,onChange:function(){return u("is_active",!r.is_active)},className:"mr-2 ml-2"})),d.a.createElement("div",{className:"clear mt-3",style:{display:"flex",justifyContent:"space-between"}},!t&&d.a.createElement(C.a,{className:"btn btn-primary float-right ml-2",size:"sm",primary:!1,disabled:t,onClick:function(){c(),o()}},"Cancel"),d.a.createElement(C.a,{type:"submit",size:"sm",className:"btn btn-primary float-right",disabled:t},t?"Submitting":d.a.createElement(d.a.Fragment,null,n?"Save":"Add"," ",_)))))}})},P=n(198),_="Example",T=[],F=[{value:"Name"},{value:"Gender"},{value:"Email"}],A=function(e){return e.map((function(e){return[{value:e.id,hidden:!0,type:"key",styles:{width:"150px"}},{value:"".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last)},{value:e.gender},{value:e.email}]}))},N=function(e){return e.map((function(e){return{id:e.id,name:e.name}}))},R=Object(p.b)((function(e){return u()(e),{}}),{});t.default=R((function(e){u()(e);var t=function(e){return u()(e),!0},n=function(){var e=i()(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u()(t),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=i()(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u()(t),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=i()(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u()(t),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=[{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:"9278 new road",city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"},{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:"9278 new road",city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"},{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:"9278 new road",city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"},{gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:"9278 new road",city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"}],s=Object(f.useState)(void 0),p=a()(s,2),v=p[0],h=p[1],g=Object(f.useState)(void 0),w=a()(g,2),O=w[0],j=w[1],k=function(e){return h(e)},x=function(){return h(void 0)};return Object(f.useEffect)((function(){t({})}),[]),d.a.createElement(d.a.Fragment,null,d.a.createElement(b.b,{show:"create"===v||"update"===v,name:_,formData:"update"===v?O:null,onClose:x},d.a.createElement(S,{isSubmitting:!1,formData:"update"===v?O:null,onCreate:function(){var e=i()(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.resetForm,e.next=3,n({values:t});case 3:if(!e.sent){e.next=6;break}h(!1),a();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onEdit:function(){var e=i()(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.resetForm,e.next=3,r({pageId:O.id,values:t});case 3:if(!e.sent){e.next=6;break}h(!1),a();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),onBack:x})),O&&d.a.createElement(d.a.Fragment,null,d.a.createElement(b.c,{show:"view"===v,name:_,body:d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,{data:[{key:"Name :",value:O.name}]})),onClose:x}),d.a.createElement(b.a,{show:"delete"===v,name:_,onClick:i()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({pageId:O.id});case 2:if(e.t0=e.sent,!e.t0){e.next=5;break}e.t0=x();case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)}))),onClose:x,isSubmitting:!1})),d.a.createElement(m.a,{name:_,tableHeaders:F,showDownloadCSV:!1,columns:T,dataSource:c,renderTableData:A,renderCSVData:N,showRefreshButton:!1,funktion:t,permissions:[],permission:P.a[""],isLoading:!1,metadata:{},resetSearchFunction:function(e){return u()(e),!0},onAdd:function(){return k("create")},onRead:function(e){var t=e.item.find((function(e){return"key"===e.type})),n=c.find((function(e){return e.id===t.value}));j(n),k("view")},onUpdate:function(){var e=i()(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.item,r=n.find((function(e){return"key"===e.type})),a=c.find((function(e){return e.id===r.value})),j(a),k("update");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onDelete:function(e){var t=e.item.find((function(e){return"key"===e.type})),n=c.find((function(e){return e.id===t.value}));j(n),k("delete")}}))}))}}]);