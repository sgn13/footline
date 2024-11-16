(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r,a,o,l,i,c,u,m,s=t(45),p=t.n(s),d=t(44),f=t.n(d),b=t(0),y=t.n(b),g=t(111),v=g.c.span(r||(r=f()(["\n  font-size: ","rem;\n\n  ","\n  ","\n     ","\n  ","\n"])),(function(e){var n=e.size,t=void 0===n?"md":n;return"lg"===t?1.5:"md"===t?1.2:1}),(function(e){return"label"===e.type&&"\n    font-weight: bold;\n   "}),(function(e){return"help"===e.type&&"\n    color:".concat(g.b.color.gray,";\n    \n    font-style: italic;\n   ")}),(function(e){return"error"===e.type&&"\n    color:".concat(g.b.color.red,";\n\n    font-weight: bold;\n   ")}),(function(e){return e.icon&&"\n      display: flex;\n      align-items:center;\n      text-align:left;\n      svg{\n        margin-right: .5rem;\n      }\n   "})),j=g.c.span(a||(a=f()(["\n  margin-right: 0.1rem;\n"]))),h=function(e){var n=e.children,t=e.icon,r=e.required;return y.a.createElement(v,e,r&&y.a.createElement(j,null,"*"),t,n)},O=["name","label","icon","required","errors","helpText","onClear","children","size","inputSize"],E=g.c.div(o||(o=f()(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n\n  justify-content: center;\n\n  width: 100%;\n  min-width: 100px;\n"]))),x=g.c.div(l||(l=f()(["\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: -10px;\n  top: 15px;\n\n  color: white;\n\n  text-align: center;\n\n  background: ",";\n\n  border-radius: 100%;\n\n  cursor: pointer;\n  z-index: 2;\n"])),g.b.color.red),w=Object(g.c)(h)(i||(i=f()(["\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.75rem;\n"]))),_=Object(g.c)(h)(c||(c=f()(["\n  margin-top: 0.5rem;\n"]))),S=Object(g.c)(h)(u||(u=f()(["\n  margin: 0.5rem 0;\n  font-weight: 400;\n  font-size: 0.75rem;\n"])));Object(g.c)(h)(m||(m=f()(["\n  display: inline-block;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  width: 100%;\n"]))),n.b=function(e){var n=e.name,t=e.label,r=e.icon,a=e.required,o=e.errors,l=e.helpText,i=e.onClear,c=e.children,u=e.size,m=e.inputSize,s=p()(e,O);return y.a.createElement(E,s,i&&y.a.createElement(x,{onClick:i},"X"),t&&y.a.createElement(w,{required:a,icon:r,size:u||m},t),c,o&&y.a.createElement(S,{type:"error"}," ",function(){if(n&&Object.values(o).length){if(!n.includes("."))return o[n];var e=n.split(".");return 1===e.length?o[e[0]]:2===e.length?o[e[0]]&&o[e[0]][e[1]]:3===e.length?o[e[0]]&&o[e[0]][e[1]]&&o[e[0]][e[1]][e[2]]:void 0}}()),l&&y.a.createElement(_,{type:"help"}," ",l))}},120:function(e,n,t){"use strict";var r,a=t(9),o=t.n(a),l=t(44),i=t.n(l),c=t(114),u=t(0),m=t.n(u),s=t(111);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=s.c.input(r||(r=i()(["\n  font-size: ","rem;\n  height: ","px;\n\n  /* padding: ","; */\n\n  position: relative;\n  width: 100%;\n\n  transition: border, color 0.2s ease-in-out;\n  background-color: ",";\n\n  border: 1px solid\n    ",";\n\n  border-radius: 8px;\n\n  :-webkit-autofill {\n    :focus {\n      border: 1px solid black;\n    }\n  }\n\n  ::placeholder {\n    color: ",";\n  }\n\n  :hover {\n    border: 1px solid ",";\n  }\n\n  :focus {\n    outline: 0;\n    border: 2px solid ",";\n  }\n"])),(function(e){var n=e.inputSize,t=void 0===n?"md":n;return"lg"===t?1.2:"md"===t?1:.7}),(function(e){var n=e.inputSize,t=void 0===n?"md":n;return"lg"===t?50:"md"===t?40:20}),(function(e){var n=e.inputIcon;return"1rem 1rem 1rem ".concat(n?"3":".3","rem;")}),s.b.color.white,(function(e){var n=e.errors,t=e.value,r=e.required;return n&&!t&&r?s.b.color.red:s.b.color.gray}),s.b.color.gray,s.b.primary.default,s.b.primary.default);n.a=function(e){var n=e.inputIcon,t=e.icon,r=e.name,a=e.label,o=e.required,l=e.errors,i=e.helpText,u=e.onClear,s=e.style,p=e.inputSize,b={name:r,label:a,required:o,errors:l,helpText:i,onClear:u,style:s,icon:t};return m.a.createElement(c.b,d(d({},b),{},{size:p}),n,m.a.createElement(f,e))}},512:function(e,n,t){"use strict";t.r(n);var r=t(15),a=t.n(r),o=t(9),l=t.n(o),i=t(31),c=t.n(i),u=t(116),m=t.n(u),s=t(0),p=t.n(s),d=t(19),f=t(291),b=t.n(f),y=t(510),g=t(511),v=[{id:1,name:"Sagun",player_number:1,jersey_color:"#FF0000",top:245,left:50,team:"A"},{id:2,name:"Adarsha",player_number:4,jersey_color:"#FF0000",top:100,left:120,team:"A"},{id:3,name:"Yogesh",player_number:8,jersey_color:"#FF0000",top:380,left:120,team:"A"},{id:4,name:"Sandeep",player_number:7,jersey_color:"#FF0000",top:180,left:300,team:"A"},{id:5,name:"Ujjwol",player_number:10,jersey_color:"#FF0000",top:250,left:260,team:"A"}],j=[{id:1,name:"Sunil",player_number:1,jersey_color:"blue",top:250,left:630,team:"B"},{id:2,name:"Sanjit",player_number:4,jersey_color:"blue",top:180,left:530,team:"B"},{id:3,name:"Tapendra",player_number:8,jersey_color:"blue",top:250,left:380,team:"B"},{id:4,name:"Bikash",player_number:7,jersey_color:"blue",top:430,left:450,team:"B"},{id:5,name:"Inish",player_number:10,jersey_color:"blue",top:100,left:430,team:"B"}],h=t(294),O=t(292),E=t(120),x=t(295);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S="box",P=function(e){var n=e.name,t=(e.index,e.jersey_color),r=e.id,a=e.team,o=e.top,l=e.left,i=Object(y.a)((function(){return{type:S,item:{id:r,team:a,left:l,top:o},collect:function(e){return{isDragging:e.isDragging()}}}}),[r,a,l,o]),c=m()(i,2),u=(c[0].isDragging,c[1]);return p.a.createElement("div",{style:{left:l,top:o},ref:u,className:"teamA_player"},p.a.createElement("div",null,p.a.createElement(h.a,{style:{fill:"".concat(t),fontSize:"3rem"}})),p.a.createElement("div",{style:{color:"white"}},n))},z=Object(d.b)((function(e){return{me:e.appState.me}}),{});n.default=z((function(e){var n,t;c()(e);var r=Object(s.useState)(v),o=m()(r,2),i=o[0],u=o[1],d=Object(s.useState)(j),f=m()(d,2),y=f[0],h=f[1],w="box",S=Object(s.useCallback)((function(e,n,t,r){"A"==n?u(b()(i,l()({},e-1,{$merge:{left:t,top:r}}))):h(b()(y,l()({},e-1,{$merge:{left:t,top:r}})))}),[i,u,y,h]),z=Object(s.useRef)(),k=Object(g.a)((function(){return{accept:w,drop:function(e,n){var t=n.getDifferenceFromInitialOffset(),r=Math.round(e.left+t.x),a=Math.round(e.top+t.y);S(e.id,null==e?void 0:e.team,r,a)}}}),[S]),C=m()(k,2)[1],D=function(e,n){var t=a()(i);t[e].name=n,u(t)},N=Object(s.useState)(!0),F=m()(N,2),A=F[0];F[1];return console.log(A,"Sdf "),p.a.createElement("div",{id:"playground"},p.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},p.a.createElement("div",{style:{width:"300px",borderRight:"1px solid silver"}},p.a.createElement("div",{style:{borderBottom:"1px solid silver",padding:"0.75rem"}},"Team A"),i.map((function(e,n){return p.a.createElement("div",{style:{margin:"1rem"}},p.a.createElement(E.a,{value:e.name,onChange:function(e){return D(n,e.target.value)}}))})),p.a.createElement("input",{type:"color",value:null===(n=i[0])||void 0===n?void 0:n.jersey_color,onChange:function(e){return u(i.map((function(n){return _(_({},n),{},{jersey_color:e.target.value})})))}})),p.a.createElement("div",null,p.a.createElement("div",{style:{padding:"0.75rem 0",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"1rem"}},p.a.createElement(x.a,{onClick:function(){return Object(O.exportComponentAsPNG)(z)}}),p.a.createElement(x.b,null)),p.a.createElement("div",{ref:z},p.a.createElement("div",{ref:C,className:"container"},p.a.createElement("div",null,A&&y.map((function(e,n){return p.a.createElement(P,{key:n,id:e.id,left:e.left,top:e.top,index:n,name:e.name,team:e.team,jersey_color:e.jersey_color})})),i.map((function(e,n){return p.a.createElement(P,{key:n,id:e.id,left:e.left,top:e.top,index:n,name:e.name,team:e.team,jersey_color:e.jersey_color})}))),p.a.createElement("div",{className:"line"}),p.a.createElement("div",{className:"half"}),p.a.createElement("div",{className:"panelty left"}),p.a.createElement("div",{className:"panelty right"}),p.a.createElement("div",{className:"p-spot left"}," "),p.a.createElement("div",{className:"p-spot right"}," "),p.a.createElement("div",{className:"center"}),p.a.createElement("div",{className:"p-place left"}),p.a.createElement("div",{className:"p-place right"})))),p.a.createElement("div",{style:{width:"300px",borderLeft:"1px solid silver"}},p.a.createElement("div",{style:{borderBottom:"1px solid silver",padding:"0.75rem"}},"Team B"),y.map((function(e,n){return p.a.createElement("div",{style:{margin:"1rem"}},p.a.createElement(E.a,{value:e.name,onChange:function(e){return D(n,e.target.value)}}))})),p.a.createElement("input",{type:"color",value:null===(t=y[0])||void 0===t?void 0:t.jersey_color,onChange:function(e){return h(y.map((function(n){return _(_({},n),{},{jersey_color:e.target.value})})))}}))))}))}}]);