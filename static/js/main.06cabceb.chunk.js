(this["webpackJsonp@fseehawer/react-circular-slider"]=this["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=(a(14),a(1)),c=a(6),s=a(5),d=a(2),u=a.n(d),p=function(e,t){switch(t.type){case"init":case"setKnobPosition":return Object(i.a)({},e,{},t.payload);case"onMouseDown":case"onMouseUp":case"setInitialKnobPosition":return Object(i.a)({},e,{},t.payload);default:throw new Error}},f=function(e,t){var a=Object(n.useRef)(null);Object(n.useEffect)((function(){a.current=t}),[t]),Object(n.useEffect)((function(){if("undefined"!==typeof u.a){var t=function(e){return a.current(e)};return u.a.addEventListener(e,t,{passive:!1}),function(){u.a.removeEventListener(e,t)}}}),[e])},m=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){o(!1)}),[]),a},h=(a(16),function(e){var t=e.isDragging,a=e.knobPosition,n=e.knobColor,r=e.knobRadius,l=void 0===r?12:r,c=e.knobSize,s=void 0===c?36:c,d=e.hideKnob,u=e.onMouseDown,p=e.trackSize,f=e.children,m={knob:{position:"absolute",left:"-".concat(s/2-p/2,"px"),top:"-".concat(s/2-p/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{transformOrigin:"50% 50%",animationTimingFunction:"ease-out",animationDuration:"1500ms",animationIterationCount:"infinite",animationName:"pulse"},hide:{opacity:0}};return o.a.createElement("div",{style:Object(i.a)({transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},m.knob,{},t&&m.dragging,{},d&&m.hide),onMouseDown:u,onTouchStart:u},o.a.createElement("svg",{width:"".concat(s,"px"),height:"".concat(s,"px"),viewBox:"0 0 ".concat(s," ").concat(s)},o.a.createElement("circle",{style:Object(i.a)({},m.animation,{},t&&m.pause),fill:n,fillOpacity:"0.2",stroke:"none",cx:s/2,cy:s/2,r:s/2}),o.a.createElement("circle",{fill:n,stroke:"none",cx:s/2,cy:s/2,r:l}),f||o.a.createElement(o.a.Fragment,null,o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"}))))}),v=function(e){var t=e.labelColor,a=e.labelBottom,n=e.labelFontSize,r=e.valueFontSize,l=e.appendToValue,c=e.prependToValue,s=e.verticalOffset,d=e.hideLabelValue,u=e.label,p=e.value,f={labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(r),position:"relative"},bottomMargin:{marginBottom:"calc(".concat(s,")")},appended:{position:"absolute",right:"0",top:"0",transform:"translate(100%, 0)"},prepended:{position:"absolute",left:"0",top:"0",transform:"translate(-100%, 0)"},hide:{display:"none"}};return o.a.createElement("div",{style:Object(i.a)({},f.labels,{},d&&f.hide)},a||o.a.createElement("div",{style:{fontSize:n}},u),o.a.createElement("div",{style:Object(i.a)({},f.value,{},!a&&f.bottomMargin)},o.a.createElement("code",null,o.a.createElement("span",{style:f.prepended},c),p,o.a.createElement("span",{style:f.appended},l))),a&&o.a.createElement("div",{style:{fontSize:n}},u))},g=function(e){var t=e.width,a=e.label,n=e.direction,r=e.strokeDasharray,l=e.strokeDashoffset,i=e.progressColorFrom,c=e.progressColorTo,s=e.trackColor,d=e.progressSize,u=e.trackSize,p=e.svgFullPath,f=e.radiansOffset,m=e.progressLineCap,h={svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(f,"rad) ").concat(-1===n?"scale(-1, 1)":"scale(1, 1)"),transformOrigin:"center center"}},v=u/2,g=t/2-v;return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",style:h.svg},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:i}),o.a.createElement("stop",{offset:"100%",stopColor:c}))),o.a.createElement("circle",{strokeWidth:u,fill:"none",stroke:s,cx:t/2,cy:t/2,r:g}),o.a.createElement("path",{style:h.path,ref:p,strokeDasharray:r,strokeDashoffset:l,strokeWidth:d,strokeLinecap:"round"!==m?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2-v,"\n                        a ").concat(t/2-v,",").concat(t/2-v," 0 0,1 0,").concat(t-2*v,"\n                        a -").concat(t/2-v,",-").concat(t/2-v," 0 0,1 0,-").concat(t-2*v,"\n                    ")}))},b={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},y=function(e){return e<0?-1:1},E=function(e){return e*Math.PI/180},k=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a},x={circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}},C=function(e){var t=e.label,a=void 0===t?"ANGLE":t,r=e.width,l=void 0===r?280:r,d=e.direction,C=void 0===d?1:d,O=e.min,F=void 0===O?0:O,w=e.max,S=void 0===w?360:w,j=e.knobColor,z=void 0===j?"#4e63ea":j,P=e.knobPosition,D=void 0===P?"top":P,I=e.labelColor,M=void 0===I?"#272b77":I,T=e.labelBottom,V=void 0!==T&&T,L=e.labelFontSize,R=void 0===L?"1rem":L,B=e.valueFontSize,A=void 0===B?"3rem":B,K=e.appendToValue,N=void 0===K?"":K,U=e.prependToValue,W=void 0===U?"":U,X=e.verticalOffset,Y=void 0===X?"1.5rem":X,G=e.hideLabelValue,H=void 0!==G&&G,J=e.hideKnob,$=void 0!==J&&J,Q=e.knobDraggable,Z=void 0===Q||Q,_=e.progressColorFrom,q=void 0===_?"#80C3F3":_,ee=e.progressColorTo,te=void 0===ee?"#4990E2":ee,ae=e.progressSize,ne=void 0===ae?8:ae,oe=e.trackColor,re=void 0===oe?"#DDDEFB":oe,le=e.trackSize,ie=void 0===le?8:le,ce=e.data,se=void 0===ce?[]:ce,de=e.dataIndex,ue=void 0===de?0:de,pe=e.progressLineCap,fe=void 0===pe?"round":pe,me=e.renderLabelValue,he=void 0===me?null:me,ve=e.children,ge=e.onChange,be=void 0===ge?function(e){}:ge,ye={mounted:!1,isDragging:!1,width:l,radius:l/2,knobPosition:D,label:0,data:se,radians:0,offset:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0},Ee=m(),ke=Object(n.useReducer)(p,ye),xe=Object(s.a)(ke,2),Ce=xe[0],Oe=xe[1],Fe=Object(n.useRef)(null),we=Object(n.useRef)(null),Se=!Ee&&"ontouchstart"in u.a,je={DOWN:Se?"touchstart":"mousedown",UP:Se?"touchend":"mouseup",MOVE:Se?"touchmove":"mousemove"},ze=Object(n.useCallback)((function(e){var t=Ce.radius-ie/2,a=e+b[D],n=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),o=n/360*Ce.dashFullArray;n=-1===y(C)?360-n:n;var r=(Ce.data.length-1)/360,l=Math.round(n*r);Ce.data[l]!==Ce.label&&be(Ce.data[l]),Oe({type:"setKnobPosition",payload:{dashFullOffset:-1===y(C)?o:Ce.dashFullArray-o,label:Ce.data[l],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}}})}),[Ce.dashFullArray,Ce.radius,Ce.data,Ce.label,D,ie,C,be]),Pe=Object(n.useCallback)((function(e){if(Ce.isDragging){var t;e.preventDefault(),"touchmove"===e.type&&(t=e.changedTouches[0]);var a=function(e){var t,a,n,o,r,l,i,c,s=e.current.getBoundingClientRect(),d=!Ee&&((null!==(t=null===u.a||void 0===u.a?void 0:u.a.pageXOffset)&&void 0!==t?t:0)||(null!==(a=null===(n=document)||void 0===n||null===(o=n.documentElement)||void 0===o?void 0:o.scrollLeft)&&void 0!==a?a:0)),p=!Ee&&((null!==(r=null===u.a||void 0===u.a?void 0:u.a.pageYOffset)&&void 0!==r?r:0)||(null!==(l=null===(i=document)||void 0===i||null===(c=i.documentElement)||void 0===c?void 0:c.scrollTop)&&void 0!==l?l:0));return{top:s.top+p,left:s.left+d}},n=("touchmove"===e.type?t.pageX:e.pageX)-(a(Fe).left+Ce.radius),o=("touchmove"===e.type?t.pageY:e.pageY)-(a(Fe).top+Ce.radius),r=Math.atan2(o,n);ze(r)}}),[Ce.isDragging,Ce.radius,ze,Ee]);return Object(n.useEffect)((function(){Oe({type:"init",payload:{mounted:!0,data:Ce.data.length?Object(c.a)(Ce.data):Object(c.a)(k(F,S)),dashFullArray:we.current.getTotalLength?we.current.getTotalLength():0}})}),[S,F]),Object(n.useEffect)((function(){var e=Ce.data.length,t=ue>e-1?e-1:ue;if(e){var a=360/e,n=E(a)/2;if(Oe({type:"setInitialKnobPosition",payload:{radians:Math.PI/2-b[Ce.knobPosition],offset:n}}),t){var o=y(C)*t*a,r=E(o)-b[Ce.knobPosition];return ze(r+n*y(C))}ze(-b[Ce.knobPosition]*y(C)+n*y(C))}}),[Ce.dashFullArray,Ce.knobPosition,Ce.data.length,ue,C]),f(je.MOVE,Pe),f(je.UP,(function(){Oe({type:"onMouseUp",payload:{isDragging:!1}})})),o.a.createElement("div",{style:Object(i.a)({},x.circularSlider,{},Ce.mounted&&x.mounted),ref:Fe},o.a.createElement(g,{width:l,label:a.split(" ").join(""),direction:C,strokeDasharray:Ce.dashFullArray,strokeDashoffset:Ce.dashFullOffset,svgFullPath:we,progressSize:ne,progressColorFrom:q,progressColorTo:te,progressLineCap:fe,trackColor:re,trackSize:ie,radiansOffset:Ce.radians}),Z&&o.a.createElement(h,{isDragging:Ce.isDragging,knobPosition:{x:Ce.knob.x,y:Ce.knob.y},knobColor:z,trackSize:ie,hideKnob:$,onMouseDown:function(){Oe({type:"onMouseDown",payload:{isDragging:!0}})}},ve),he||o.a.createElement(v,{label:a,labelColor:M,labelBottom:V,labelFontSize:R,verticalOffset:Y,valueFontSize:A,appendToValue:N,prependToValue:W,hideLabelValue:H,value:"".concat(Ce.label)}))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var w=o.a.createElement("g",null,o.a.createElement("path",{fill:"#ffffff",d:"M495.9,990c-3.9-5.6-7.2-11.6-11.7-16.6c-40.1-44.6-80.4-89-120.6-133.6c-4.6-5-8.7-10.4-15.9-19c33.1,0,62.5,0,93.1,0c0-88.9,0-175.3,0-262.9c-86.8,0-173.1,0-261.6,0c0,30.6,0,60.1,0,94.9C120.9,600.2,66.3,550.9,10,500.1c55.9-50.6,110.5-100,168.6-152.5c0,32.5,0,60.7,0,90.2c88.6,0,174.9,0,262.3,0c0-85.6,0-170.8,0-258.4c-30.1,0-59.6,0-94.4,0C399.5,120.8,448.7,66.3,499.5,10c50.7,56.2,100,110.8,152.8,169.2c-33.8,0-62.6,0-92.6,0c0,87.6,0,172.6,0,258.9c86.6,0,172.4,0,260.3,0c0-29.1,0-57.5,0-91.8c59,53.3,113.9,102.9,170.1,153.8c-56.2,50.7-110.8,100.1-169,152.5c0-33.9,0-63.3,0-94.3c-88,0-173.7,0-261.4,0c-0.4,4.9-1.3,10.4-1.3,15.8c-0.1,75.9,0.4,151.9-0.5,227.8c-0.2,16.2,5.8,19.3,20,18.7c22.9-0.9,45.9-0.2,74.9-0.2C599.7,879.2,549.7,934.6,499.8,990C498.5,990,497.2,990,495.9,990z"})),S=function(e){var t=e.svgRef,a=e.title,n=F(e,["svgRef","title"]);return o.a.createElement("svg",O({x:"0px",y:"0px",viewBox:"0 0 1000 1000",enableBackground:"new 0 0 1000 1000",xmlSpace:"preserve",ref:t},n),a?o.a.createElement("title",null,a):null,w)},j=o.a.forwardRef((function(e,t){return o.a.createElement(S,O({svgRef:t},e))}));a.p;function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var D=function(e){var t=e.svgRef,a=e.title,n=P(e,["svgRef","title"]);return o.a.createElement("svg",z({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 473.931 473.931",style:{enableBackground:"new 0 0 473.931 473.931"},xmlSpace:"preserve",ref:t},n),a?o.a.createElement("title",null,a):null,o.a.createElement("circle",{style:{fill:"#FFC10E"},cx:236.966,cy:236.966,r:236.966}),o.a.createElement("path",{style:{fill:"#333333"},d:"M81.391,237.127c0,85.911,69.649,155.56,155.56,155.56c85.915,0,155.567-69.649,155.567-155.56 H81.391z"}),o.a.createElement("path",{style:{fill:"#CA2027"},d:"M150.452,298.705c0,47.771,38.731,86.498,86.498,86.498c47.775,0,86.502-38.731,86.502-86.498 H150.452z"}),o.a.createElement("g",null,o.a.createElement("circle",{style:{fill:"#333333"},cx:164.937,cy:155.231,r:37.216}),o.a.createElement("circle",{style:{fill:"#333333"},cx:305.664,cy:155.231,r:37.216})))},I=o.a.forwardRef((function(e,t){return o.a.createElement(D,z({svgRef:t},e))})),M=(a.p,function(){var e={wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}};return o.a.createElement("div",{style:e.wrapper},o.a.createElement("h3",{style:e.h3},'Anticlockwise rotation with the knob positioned to the right and "\xb0" appended to the value:'),o.a.createElement("div",{style:e.slider},o.a.createElement(C,{direction:-1,knobPosition:"right",appendToValue:"\xb0",valueFontSize:"4rem"})),o.a.createElement("pre",{className:e.pre},'<CircularSlider\n    min={0}\n    max={360}\n    direction={-1}\n    knobPosition="right"\n    appendToValue="\xb0"\n    valueFontSize="4rem"\n/>'),o.a.createElement("h3",{className:e.h3},'An initial value of 20, "$" prepended and "K" appended to the value with a custom knob icon and the label on the bottom:'),o.a.createElement("div",{className:e.slider},o.a.createElement(C,{label:"savings account",min:0,max:100,dataIndex:20,prependToValue:"$",appendToValue:"K",labelColor:"#005a58",labelBottom:!0,knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24},o.a.createElement(j,{x:"9",y:"9",width:"18px",height:"18px"}))),o.a.createElement("pre",{className:e.pre},'import { ReactComponent as PowerIcon } from \'./assets/power.svg\';\n.\n.\n.\n<CircularSlider\n    label="savings"\n    min={0}\n    max={100}\n    dataIndex={20}\n    prependToValue="$"\n    appendToValue="K"\n    labelColor="#005a58"\n    labelBottom={true}\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n>\n    <DragIcon x="9" y="8" width="18px" height="18px" />\n</CircularSlider>'),o.a.createElement("h3",{className:e.h3},"A flat line cap with the track size smaller than the progress track size and a smiley knob:"),o.a.createElement("div",{className:e.slider},o.a.createElement(C,{label:"Alphabet",progressLineCap:"flat",dataIndex:1,width:250,labelColor:"#212121",valueFontSize:"6rem",verticalOffset:"1rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")},o.a.createElement(I,{x:"9",y:"9",width:"18px",height:"18px"}))),o.a.createElement("pre",{className:e.pre},'\nimport { ReactComponent as EmojiIcon } from \'./assets/emoji.svg\';\n.\n.\n.\n<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    dataIndex={1}\n    label="Alphabet"\n    data=["A","B","C"]//...\n    labelColor="#212121"\n    valueFontSize="6rem"\n    verticalOffset="1rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n>\n    <EmojiIcon x="9" y="9" width="18px" height="18px" />\n</CircularSlider>'))});l.a.render(o.a.createElement(M,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.06cabceb.chunk.js.map