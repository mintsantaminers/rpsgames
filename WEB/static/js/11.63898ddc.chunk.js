(this.webpackJsonpgamesclub=this.webpackJsonpgamesclub||[]).push([[11],{1533:function(e,t,a){"use strict";a.r(t);var s=a(21),n=a(314),c=a(19),l=a(2),i=a(288),r=a(1379),j=a(1380),d=a(1381),o=a(1536),m=a(70),u=a(1482),h=a(1382),b=a(1383),O=a(1384),x=a(1385),g=a(1386),p=a(1387),f=a(1388),N=a(1389),I=a(1390),v=a(1391),C=a(1392),y=a(1393),R=a(1394),S=a(1395),w=a(1396),k=a(1397),A=a(1398),P=a(1399),E=a(1400),F=a(5),G=function(e){return Object(F.jsx)("div",{className:"gameAntes col-3 col-md-2",children:Object(F.jsx)("img",{className:"my-3 image-game",src:"Rock"===e.image&&b.a||"Paper"===e.image&&O.a||"Scissors"===e.image&&x.a,alt:"Rock"})})},D=function(e){return Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{type:"radio",name:"hand",id:"rock",onChange:e.handleInputChange,value:"ROCK"}),Object(F.jsx)("div",{className:"rps-img rock-img"})]})},L=function(e){return Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{type:"radio",name:"hand",id:"paper",onChange:e.handleInputChange,value:"PAPER"}),Object(F.jsx)("div",{className:"rps-img paper-img"})]})},M=function(e){return Object(F.jsxs)("label",{children:[Object(F.jsx)("input",{type:"radio",name:"hand",id:"scissors",onChange:e.handleInputChange,value:"SCISSORS"}),Object(F.jsx)("div",{className:"rps-img scissors-img"})]})},T=function(e){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("label",{className:"amount",children:[Object(F.jsx)("input",{type:"radio",name:"amount",onChange:e.handleInputChange,value:e.amount}),Object(F.jsx)("p",{children:e.amount})]})})},H=function(e){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"processing-game",children:[Object(F.jsx)("img",{className:"card-selected",src:"ROCK"===e.userhand&&p.a||"PAPER"===e.userhand&&f.a||"SCISSORS"===e.userhand&&N.a}),Object(F.jsx)("img",{className:"vs",src:I.a}),Object(F.jsx)("img",{className:"rotating-card",src:v.a})]}),Object(F.jsxs)("h3",{children:[Object(F.jsxs)("span",{className:"text-playing",children:["Playing ",e.userhand," for"]}),Object(F.jsx)("br",{}),Object(F.jsx)("span",{className:"valor-matic",children:e.useramount+" MATIC"})]}),Object(F.jsx)("div",{children:e.save?Object(F.jsx)("button",{className:"DoubleOrNothing",onClick:e.showResult,children:"SHOW RESULT"}):Object(F.jsxs)("div",{className:"playing",children:[Object(F.jsxs)("button",{disabled:!0,children:[e.gameLog,"\xa0\xa0",Object(F.jsx)(o.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})]}),Object(F.jsx)("div",{children:Object(F.jsxs)(m.m,{className:"tabla-pequena",bordeless:"true",size:"lg",children:[Object(F.jsx)("thead",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("th",{className:"text-yellow",children:"ID"}),Object(F.jsx)("th",{className:"text-yellow",children:"Hand"}),Object(F.jsx)("th",{className:"text-yellow",children:"Amount"})]})}),Object(F.jsx)("tbody",{children:Object(F.jsxs)("tr",{children:[Object(F.jsx)("td",{children:e.gameId?e.gameId:"-"}),Object(F.jsx)("td",{children:e.userhand}),Object(F.jsx)("td",{children:e.useramount})]})})]})})]})})]})},Y=function(e){var t;return e.gameResult?("ROCK"===e.userhand&&(t=C.a),"PAPER"===e.userhand&&(t=R.a),"SCISSORS"===e.userhand&&(t=w.a)):("ROCK"===e.userhand&&(t=y.a),"PAPER"===e.userhand&&(t=S.a),"SCISSORS"===e.userhand&&(t=k.a)),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"relative-result-img",children:[e.result&&e.gameResult&&Object(F.jsx)(u.a,{options:{autoresize:!0,opacity:.5,acceleration:1.02,friction:.97,gravity:1.5,particles:50,traceSpeed:10,explosion:6,intensity:30,flickering:50,lineStyle:"round",hue:{min:0,max:360},delay:{min:30,max:60},rocketsPoint:{min:50,max:50},lineWidth:{explosion:{min:1,max:4},trace:{min:.1,max:1}},brightness:{min:50,max:80},decay:{min:.001,max:.05},mouse:{click:!1,move:!1,max:1},sound:{enabled:"on"===e.sound,files:["https://fireworks.js.org/sounds/explosion0.mp3","https://fireworks.js.org/sounds/explosion1.mp3","https://fireworks.js.org/sounds/explosion2.mp3"],volume:{min:4,max:8}}},style:{top:20,left:0,width:"100%",height:"100%",position:"fixed",background:"transparent"}}),Object(F.jsx)("div",{className:"anim-win-lose",children:Object(F.jsx)("img",{className:"result-rps-image",src:t})}),Object(F.jsx)("div",{children:Object(F.jsx)("img",{className:"absolute-image",src:e.gameResult?P.a:A.a})})]}),Object(F.jsxs)("div",{className:"d-flex flex-column justify-content-between mx-auto mt-4",children:[Object(F.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(F.jsx)("span",{className:"rps-result-title",children:Object(F.jsx)("p",{className:"text-result-game text-white",children:e.gameResult?"You won":"You lost"})}),Object(F.jsxs)("div",{className:"resultado-flex",children:[e.gameResult&&Object(F.jsx)("img",{src:E.a}),Object(F.jsxs)("span",{className:"rps-result-amount",style:{color:e.gameResult?"#f1cf61":"#9845eb"},children:[e.gameResult?2*e.useramount:e.useramount," MATIC"]}),e.gameResult&&Object(F.jsx)("img",{src:E.a})]})]}),Object(F.jsx)("div",{className:"d-flex justify-content-center",children:Object(F.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[!e.gameResult&&Object(F.jsx)("span",{className:"processing-title text-white",children:"TRY AGAIN?"}),Object(F.jsx)("button",{className:"DoubleOrNothing",onClick:e.backGame,children:e.gameResult?"CLAIM REWARD":"DOUBLE OR NOTHING"})]})})]})]})},B=function(){return Object(F.jsx)("div",{className:"left-content-rps",children:Object(F.jsx)("img",{src:h.a,alt:""})})},K=function(e){var t=e.age,a=e.playing,s=e.animation,n=e.result,c=e.verifyGame,l=e.randomItem,i=e.save,r=e.gameLog,j=e.gameId,d=e.usergame,o=e.busyNetwork,m=e.gameResult,u=e.showResult,h=e.backGame,b=e.sound,O=e.handleInputChange;return Object(F.jsx)("div",{className:"game-container",children:a?Object(F.jsxs)("div",{className:"game-playing-container",children:[s&&Object(F.jsx)(H,{save:i,gameLog:r,gameId:j,userhand:d.hand,useramount:d.amount,busyNetwork:o,showResult:u}),n&&Object(F.jsx)(Y,{userhand:d.hand,useramount:d.amount,gameResult:m,result:n,sound:b,backGame:h})]}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"text-container",children:Object(F.jsx)("p",{children:"Select your bet:"})}),Object(F.jsxs)("div",{className:"game-selection-hand",children:["a"===l&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(D,{handleInputChange:O}),Object(F.jsx)(L,{handleInputChange:O}),Object(F.jsx)(M,{handleInputChange:O})]}),"b"===l&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(D,{handleInputChange:O}),Object(F.jsx)(M,{handleInputChange:O}),Object(F.jsx)(L,{handleInputChange:O})]}),"c"===l&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(L,{handleInputChange:O}),Object(F.jsx)(M,{handleInputChange:O}),Object(F.jsx)(D,{handleInputChange:O})]}),"d"===l&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(L,{handleInputChange:O}),Object(F.jsx)(D,{handleInputChange:O}),Object(F.jsx)(M,{handleInputChange:O})]}),"e"===l&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(M,{handleInputChange:O}),Object(F.jsx)(D,{handleInputChange:O}),Object(F.jsx)(L,{handleInputChange:O})]}),"f"===l&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(M,{handleInputChange:O}),Object(F.jsx)(L,{handleInputChange:O}),Object(F.jsx)(D,{handleInputChange:O})]})]}),Object(F.jsx)("div",{className:"text-container-amounts",children:Object(F.jsx)("p",{children:"Select the amount to bet:"})}),Object(F.jsxs)("div",{className:"MaticGeneral d-flex align-items-center justify-content-center",children:[Object(F.jsx)("img",{className:"imgMatic",src:g.a,alt:"Matic"}),Object(F.jsx)(T,{handleInputChange:O,amount:1}),Object(F.jsx)(T,{handleInputChange:O,amount:2}),Object(F.jsx)(T,{handleInputChange:O,amount:5}),Object(F.jsx)(T,{handleInputChange:O,amount:10}),Object(F.jsx)(T,{handleInputChange:O,amount:25}),Object(F.jsx)(T,{handleInputChange:O,amount:50})]}),Object(F.jsx)("button",{onClick:c,className:"DoubleOrNothing",disabled:a,children:"DOUBLE OR NOTHING"}),"false"===t&&Object(F.jsxs)("p",{className:"text-center mb-3 mt-3",children:[Object(F.jsxs)("label",{className:"switch",children:[Object(F.jsx)("input",{id:"age",type:"checkbox"}),"\xa0",Object(F.jsx)("span",{className:"slider round"})]}),"\xa0\xa0\xa0",Object(F.jsx)("span",{className:"text-white",children:"I confirm that I am at least"}),Object(F.jsx)("span",{style:{color:"#ffdb5b"},children:" 18 years old"})]})]})})};t.default=function(){var e=Object(l.useRef)(null),t=Object(l.useState)({hand:"",amount:0}),a=Object(c.a)(t,2),o=a[0],m=a[1],u=Object(l.useState)(""),h=Object(c.a)(u,2),b=h[0],O=h[1],x=Object(l.useState)(!1),g=Object(c.a)(x,2),p=g[0],f=g[1],N=Object(l.useState)(!1),I=Object(c.a)(N,2),v=I[0],C=I[1],y=Object(l.useState)(!1),R=Object(c.a)(y,2),S=R[0],w=R[1],k=Object(l.useState)(!1),A=Object(c.a)(k,2),P=A[0],E=A[1],D=Object(l.useState)(!1),L=Object(c.a)(D,2),M=L[0],T=L[1],H=Object(l.useState)(!1),Y=Object(c.a)(H,2),U=Y[0],z=Y[1],W=Object(l.useState)(!1),J=Object(c.a)(W,2),q=J[0],V=J[1],Q=new Audio(r.a),X=window.localStorage.getItem("age"),Z=window.localStorage.getItem("sound");Object(l.useEffect)((function(){V(!0)}),[]);Object(l.useEffect)((function(){e.current.scrollIntoView({behavior:"smooth"})}),[q,v,S]);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(B,{}),Object(F.jsxs)("article",{children:[v?Object(F.jsx)(K,{age:X,playing:S,animation:P,result:M,randomItem:b,save:U,usergame:o,gameResult:p,verifyGame:function(){return""===o.hand?(i.c.error("Select a hand"),!1):0===o.amount?(i.c.error("Select an amount"),!1):"false"!==X&&null!==X||!1!==document.getElementById("age").checked?(w(!0),E(!0),void z(!0)):(i.c.error("Confirm that you are at least 18 years old"),!1)},showResult:function(){f(!0),E(!1),T(!0);var e=["a","b"],t=e[Math.random()*e.length|0],a={duration:5e3,position:"bottom-left",style:{},className:"pop-up toast-modal",icon:Object(F.jsx)("img",{src:"a"===t?j.a:d.a,width:"25",height:"25",alt:""}),iconTheme:{primary:"#000",secondary:"#fff"},ariaProps:{role:"status","aria-live":"polite"}};"on"===Z&&Q.play(),Object(i.c)("a"===p?"You doubled your money!!":"You are doing some business here",a),z(!1),E(!1)},backGame:function(){m({hand:"",amount:0}),f(!1),w(!1),E(!1),T(!1)},handleInputChange:function(e){m(Object(n.a)(Object(n.a)({},o),{},Object(s.a)({},e.target.name,e.target.value)))},sound:Z}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"game-gifs-wrapper",children:[Object(F.jsx)(G,{image:"Rock"}),Object(F.jsx)(G,{image:"Paper"}),Object(F.jsx)(G,{image:"Scissors"})]}),Object(F.jsx)("div",{className:"center",children:Object(F.jsx)("button",{className:"DoubleOrNothing",onClick:function(){var e=["a","b","c","d","e","f"],t=Math.random()*e.length|0;O(e[t]),C(!0)},children:"DOUBLE OR NOTHING"})})]}),Object(F.jsx)("div",{ref:e})]})]})}}}]);
//# sourceMappingURL=11.63898ddc.chunk.js.map