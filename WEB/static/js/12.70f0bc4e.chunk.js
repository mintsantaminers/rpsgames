(this.webpackJsonpgamesclub=this.webpackJsonpgamesclub||[]).push([[12],{1528:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(70),c=a(21),r=a(314),i=a(20),l=a(1),o=a(7),j=a(1533),u=a(65),m=a(1479),d=a(288),b=a(29),g=a(61),h=a(5),A=a(1376),x=a.p+"static/media/lose1.4e51795e.gif",O=a(1377),p=a(1378),C=a(1379),f=a(1380),I=a(1381),v=a(1382),w=a(1383),B=a(1384),N=a(1385),D=a(1386),y=a(1387),G=a(1388),k=a(1389),S=a(1390),P=a(1391),E=a(1392),Q=a(1393),R=a(1394),Y=a(1395),F=a(1396),M=a(1397),K=function(e){return Object(h.jsx)("div",{className:"gameAntes col-3 col-md-2",children:Object(h.jsx)("img",{className:"my-3 image-game",src:"Rock"===e.image&&f.a||"Paper"===e.image&&I.a||"Scissors"===e.image&&v.a,alt:"Rock"})})},L=function(e){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"hand",id:"rock",onChange:e.handleInputChange,value:"ROCK"}),Object(h.jsx)("div",{className:"rps-img rock-img"})]})},z=function(e){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"hand",id:"paper",onChange:e.handleInputChange,value:"PAPER"}),Object(h.jsx)("div",{className:"rps-img paper-img"})]})},W=function(e){return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"hand",id:"scissors",onChange:e.handleInputChange,value:"SCISSORS"}),Object(h.jsx)("div",{className:"rps-img scissors-img"})]})},J=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("label",{className:"amount",children:[Object(h.jsx)("input",{type:"radio",name:"amount",onChange:e.handleInputChange,value:e.amount}),Object(h.jsx)("p",{children:e.amount})]})})},T=function(e){var t=Object(n.useContext)(s.a).setBalance,a=new Audio(A.a),c=function(){var n=Object(o.a)(Object(l.a)().mark((function n(){var s,c,r,i;return Object(l.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.setAnimation(!1),e.setResult(!0),e.privateWeb3&&"0x000000000000000000000000000000000000dEaD"!==e.account&&e.privateWeb3.eth.getBalance(e.account).then((function(e){var a=parseFloat(e/1e9/1e9).toFixed(3);t(a)})).catch((function(e){return console.log(e)})),s=["a","b"],c=Math.random()*s.length|0,r=s[c],i={duration:5e3,position:"bottom-left",style:{},className:"pop-up toast-modal",icon:Object(h.jsx)("img",{src:"a"===r?e.gameResult?O.a:x:e.gameResult?p.a:"data:image/png;base64,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",width:"25",height:"25",alt:""}),iconTheme:{primary:"#000",secondary:"#fff"},ariaProps:{role:"status","aria-live":"polite"}},e.gameResult?("on"===e.sound&&a.play(),Object(d.c)("a"===r?"You doubled your money!!":"You are doing some business here",i)):Object(d.c)("a"===r?"Better luck next time":"Wrong hand :P",i),e.setSave(!1);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"processing-game",children:[Object(h.jsx)("img",{className:"card-selected",src:"ROCK"===e.userGame.hand&&B.a||"PAPER"===e.userGame.hand&&N.a||"SCISSORS"===e.userGame.hand&&D.a}),Object(h.jsx)("img",{className:"vs",src:y.a}),Object(h.jsx)("img",{className:"rotating-card",src:G.a})]}),Object(h.jsxs)("h3",{children:[Object(h.jsxs)("span",{className:"text-playing",children:["Playing ",e.userGame.hand," for"]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"valor-matic",children:e.userGame.amount+" MATIC"})]}),Object(h.jsx)("div",{children:e.save?Object(h.jsx)("button",{className:"DoubleOrNothing",onClick:c,children:"SHOW RESULT"}):Object(h.jsxs)("div",{className:"playing",children:[Object(h.jsxs)("button",{disabled:!0,children:[e.gameLog,"\xa0\xa0",Object(h.jsx)(j.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})]}),Object(h.jsx)("div",{children:Object(h.jsxs)(u.n,{className:"tabla-pequena",bordeless:"true",size:"lg",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"text-yellow",children:"ID"}),Object(h.jsx)("th",{className:"text-yellow",children:"Hand"}),Object(h.jsx)("th",{className:"text-yellow",children:"Amount"})]})}),Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.gameId?e.gameId:"-"}),Object(h.jsx)("td",{children:e.userGame.hand}),Object(h.jsx)("td",{children:e.userGame.amount})]})})]})})]})})]})},X=function(e){var t;return e.gameResult?("ROCK"===e.userGame.hand&&(t=k.a),"PAPER"===e.userGame.hand&&(t=P.a),"SCISSORS"===e.userGame.hand&&(t=Q.a)):("ROCK"===e.userGame.hand&&(t=S.a),"PAPER"===e.userGame.hand&&(t=E.a),"SCISSORS"===e.userGame.hand&&(t=R.a)),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"relative-result-img",children:[e.result&&e.gameResult&&Object(h.jsx)(m.a,{options:{autoresize:!0,opacity:.5,acceleration:1.02,friction:.97,gravity:1.5,particles:50,traceSpeed:10,explosion:6,intensity:30,flickering:50,lineStyle:"round",hue:{min:0,max:360},delay:{min:30,max:60},rocketsPoint:{min:50,max:50},lineWidth:{explosion:{min:1,max:4},trace:{min:.1,max:1}},brightness:{min:50,max:80},decay:{min:.001,max:.05},mouse:{click:!1,move:!1,max:1},sound:{enabled:"on"===e.sound,files:["https://fireworks.js.org/sounds/explosion0.mp3","https://fireworks.js.org/sounds/explosion1.mp3","https://fireworks.js.org/sounds/explosion2.mp3"],volume:{min:4,max:8}}},style:{top:20,left:0,width:"100%",height:"100%",position:"fixed",background:"transparent"}}),Object(h.jsx)("div",{className:"anim-win-lose",children:Object(h.jsx)("img",{className:"result-rps-image",src:t})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"absolute-image",src:e.gameResult?F.a:Y.a})})]}),Object(h.jsxs)("div",{className:"d-flex flex-column justify-content-between mx-auto mt-4",children:[Object(h.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(h.jsx)("span",{className:"rps-result-title",children:Object(h.jsx)("p",{className:"text-result-game text-white",children:e.gameResult?"You won":"You lost"})}),Object(h.jsxs)("div",{className:"resultado-flex",children:[e.gameResult&&Object(h.jsx)("img",{src:M.a}),Object(h.jsxs)("span",{className:"rps-result-amount",style:{color:e.gameResult?"#f1cf61":"#9845eb"},children:[e.gameResult?2*e.userGame.amount:e.userGame.amount," MATIC"]}),e.gameResult&&Object(h.jsx)("img",{src:M.a})]})]}),Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[!e.gameResult&&Object(h.jsx)("span",{className:"processing-title text-white",children:"TRY AGAIN?"}),Object(h.jsx)("button",{className:"DoubleOrNothing",onClick:e.backGame,children:e.gameResult?"CLAIM REWARD":"DOUBLE OR NOTHING"})]})})]})]})},H=function(e){var t=e.account,a=e.userGame,c=e.age,r=e.web3,i=e.privateGamesClub,j=e.rpsgame,u=e.network,m=e.maticPrice,A=e.setGameLog,x=e.setGameId,O=e.setPlaying,p=e.setAnimation,C=e.setGameResult,f=e.setSave,I=e.backGame,v=e.playing,w=e.gas,B=Object(n.useContext)(s.a).playerDocument,N=function(e){return new Promise((function(t){return setTimeout(t,e)}))},D=function(){var e=Object(o.a)(Object(l.a)().mark((function e(n,s){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"false"===c&&window.localStorage.setItem("age",!0),j.methods.play(n).send({from:t,value:s,gasPrice:r.utils.toWei(w.toString(),"gwei"),gasLimit:5e5}).on("transactionHash",(function(e){A("SAVING YOUR GAME")})).on("receipt",function(){var e=Object(o.a)(Object(l.a)().mark((function e(n){var s,c,r,o,j,u,d;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A("PLAYING"),s=parseInt(n.events.BetPlaced.returnValues.betId),c=n.blockNumber,r=n.transactionHash,o=parseInt(a.amount)*m,j={game:"RPS",uid:B.uid,account:t,name:B.name,photo:B.photo,txHash:r,createdAt:Math.round((new Date).getTime()/1e3),block:c,gameId:s,amount:o,hand:a.hand,maticAmount:parseInt(a.amount),state:"pending"},Object(b.a)(Object(b.b)(g.a,"allGames"),j),x(s),u=[!1,!1,!1,!1,!1,!1];case 9:if(u[5]){e.next=22;break}return e.prev=10,e.next=13,i.methods.bets(s).call();case 13:u=e.sent,e.next=18;break;case 16:e.prev=16,e.t0=e.catch(10);case 18:return e.next=20,N(1e3);case 20:e.next=9;break;case 22:u[5]&&(d=parseInt(u[3])>0,C(d),f(!0));case 23:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t){return e.apply(this,arguments)}}()).on("error",function(){var e=Object(o.a)(Object(l.a)().mark((function e(t,a){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-32603!==t.code){e.next=4;break}return d.c.error("This transaction needs more gas to be executed"),I(),e.abrupt("return",!1);case 4:if(4001!==t.code){e.next=8;break}return d.c.error("You denied transaction signature"),I(),e.abrupt("return",!1);case 8:if(t.code){e.next=12;break}return d.c.error("Transaction reverted"),I(),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(h.jsx)("button",{onClick:function(){if(""===a.hand)return d.c.error("Select a hand"),!1;if(0===a.amount)return d.c.error("Select an amount"),!1;if(("false"===c||null===c)&&!1===document.getElementById("age").checked)return d.c.error("Confirm that you are at least 18 years old"),!1;if(137!==u)return d.c.error("Network not supported, please select Polygon network"),!1;var e=r.utils.toWei(a.amount.toString(),"ether");i.methods.calculateValue(e).call().then((function(t){D(e,t),A("WAITING FOR DEPOSIT"),O(!0),p(!0)}))},className:"DoubleOrNothing",disabled:v,children:"DOUBLE OR NOTHING"})},U=function(){return Object(h.jsx)("div",{className:"left-content-rps",children:Object(h.jsx)("img",{src:C.a,alt:""})})},Z=function(e){var t=e.web3,a=e.privateWeb3,s=e.privateGamesClub,l=e.rpsgame,o=e.network,j=e.maticPrice,u=e.screen,m=e.account,b=e.gas,g=Object(n.useState)(void 0),A=Object(i.a)(g,2),x=A[0],O=A[1],p=Object(n.useState)(""),C=Object(i.a)(p,2),f=C[0],I=C[1],v=Object(n.useState)(!1),B=Object(i.a)(v,2),N=B[0],D=B[1],y=Object(n.useState)(!1),G=Object(i.a)(y,2),k=G[0],S=G[1],P=Object(n.useState)(!1),E=Object(i.a)(P,2),Q=E[0],R=E[1],Y=Object(n.useState)(!1),F=Object(i.a)(Y,2),M=F[0],K=F[1],U=Object(n.useState)(!1),Z=Object(i.a)(U,2),V=Z[0],q=(Z[1],Object(n.useState)(!1)),$=Object(i.a)(q,2),_=$[0],ee=$[1],te=Object(n.useState)({hand:"",amount:0}),ae=Object(i.a)(te,2),ne=ae[0],se=ae[1],ce=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=window.localStorage.getItem("token");return Object(n.useEffect)((function(){null===c&&Object(d.c)("Log in if you want to save your game stats and achievements",{duration:1e4,position:"top-right",style:{},className:"pop-up toast-modal",icon:Object(h.jsx)("i",{className:"fa-solid fa-circle-info text-primary"}),iconTheme:{primary:"#000",secondary:"#fff"},ariaProps:{role:"status","aria-live":"polite"}}),s(!0)}),[c]),{load:a}}(),re=ce.load,ie=function(e){var t=e.playing,a=Object(n.useState)(""),s=Object(i.a)(a,2),c=s[0],r=s[1];return Object(n.useEffect)((function(){var e=["a","b","c","d","e","f"],t=Math.random()*e.length|0;r(e[t])}),[t]),{randomItem:c}}({playing:N}),le=ie.randomItem,oe=window.localStorage.getItem("age"),je=window.localStorage.getItem("sound"),ue=function(e){se(Object(r.a)(Object(r.a)({},ne),{},Object(c.a)({},e.target.name,e.target.value)))},me=function(){D(!1),S(!1),R(!1),ee(!1),O(void 0),se({hand:"",amount:0})};return Object(n.useEffect)((function(){u.current.scrollIntoView({behavior:"smooth"})}),[re,m,N]),Object(h.jsx)("div",{className:"game-container",children:N?Object(h.jsxs)("div",{className:"game-playing-container",children:[k&&Object(h.jsx)(T,{account:m,privateWeb3:a,save:M,gameLog:f,gameId:Q,userGame:ne,busyNetwork:V,animation:k,result:_,gameResult:x,privateGamesClub:s,setAnimation:S,setResult:ee,setSave:K,sound:je}),_&&Object(h.jsx)(X,{userGame:ne,gameResult:x,result:_,backGame:me,sound:je})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"text-container",children:Object(h.jsx)("p",{children:"Select your bet:"})}),Object(h.jsxs)("div",{className:"game-selection-hand",children:["a"===le&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L,{handleInputChange:ue}),Object(h.jsx)(z,{handleInputChange:ue}),Object(h.jsx)(W,{handleInputChange:ue})]}),"b"===le&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(L,{handleInputChange:ue}),Object(h.jsx)(W,{handleInputChange:ue}),Object(h.jsx)(z,{handleInputChange:ue})]}),"c"===le&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(z,{handleInputChange:ue}),Object(h.jsx)(W,{handleInputChange:ue}),Object(h.jsx)(L,{handleInputChange:ue})]}),"d"===le&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(z,{handleInputChange:ue}),Object(h.jsx)(L,{handleInputChange:ue}),Object(h.jsx)(W,{handleInputChange:ue})]}),"e"===le&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(W,{handleInputChange:ue}),Object(h.jsx)(L,{handleInputChange:ue}),Object(h.jsx)(z,{handleInputChange:ue})]}),"f"===le&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(W,{handleInputChange:ue}),Object(h.jsx)(z,{handleInputChange:ue}),Object(h.jsx)(L,{handleInputChange:ue})]})]}),Object(h.jsx)("div",{className:"text-container-amounts",children:Object(h.jsx)("p",{children:"Select the amount to bet:"})}),Object(h.jsxs)("div",{className:"MaticGeneral d-flex align-items-center justify-content-center",children:[Object(h.jsx)("img",{className:"imgMatic",src:w.a,alt:"Matic"}),Object(h.jsx)(J,{handleInputChange:ue,amount:1}),Object(h.jsx)(J,{handleInputChange:ue,amount:2}),Object(h.jsx)(J,{handleInputChange:ue,amount:5}),Object(h.jsx)(J,{handleInputChange:ue,amount:10}),Object(h.jsx)(J,{handleInputChange:ue,amount:25}),Object(h.jsx)(J,{handleInputChange:ue,amount:50})]}),Object(h.jsx)(H,{account:m,userGame:ne,age:oe,playing:N,gas:b,web3:t,privateGamesClub:s,rpsgame:l,network:o,maticPrice:j,setGameLog:I,setGameId:R,setPlaying:D,setAnimation:S,setGameResult:O,setSave:K,backGame:me}),"false"===oe&&Object(h.jsxs)("p",{className:"text-center mb-3 mt-3",children:[Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{id:"age",type:"checkbox"}),"\xa0",Object(h.jsx)("span",{className:"slider round"})]}),"\xa0\xa0\xa0",Object(h.jsx)("span",{className:"text-white",children:"I confirm that I am at least"}),Object(h.jsx)("span",{style:{color:"#ffdb5b"},children:" 18 years old"})]})]})})},V=function(e){var t=e.readBlockchainData;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"game-gifs-wrapper",children:[Object(h.jsx)(K,{image:"Rock"}),Object(h.jsx)(K,{image:"Paper"}),Object(h.jsx)(K,{image:"Scissors"})]}),Object(h.jsx)("div",{className:"center",children:Object(h.jsx)("button",{className:"DoubleOrNothing",onClick:t,children:"CONNECT WALLET"})})]})},q=a(106),$=a(427);t.default=function(){var e=Object(n.useRef)(null),t=Object(n.useContext)(s.a).account,a=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),r=Object(i.a)(c,2),j=r[0],u=r[1];Object(n.useEffect)((function(){var e=setInterval((function(){d()}),2e3);return function(){clearInterval(e),s(!1)}}),[]);var m=window.localStorage.getItem("gas");Object(n.useEffect)((function(){null!==m&&a&&("standard"===m&&u(parseInt(a.safeLow.maxFee)),"fast"===m&&u(parseInt(a.standard.maxFee)),"instant"===m&&u(parseInt(a.fast.maxFee)))}),[m,a]);var d=function(){var e=Object(o.a)(Object(l.a)().mark((function e(){var t,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gasstation-mainnet.matic.network/v2");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{gas:j}}(),c=a.gas,r=Object($.a)(),j=r.web3,u=r.privateWeb3,m=r.privateGamesClub,d=r.rpsgame,b=r.network,g=r.maticPrice,A=r.readBlockchainData;return Object(h.jsxs)(h.Fragment,{children:[void 0!==t&&"0x000000000000000000000000000000000000dEaD"!==t&&c&&Object(h.jsx)(U,{}),void 0===t||"0x000000000000000000000000000000000000dEaD"===t&&Object(h.jsx)(U,{}),Object(h.jsxs)("article",{children:[void 0!==t&&"0x000000000000000000000000000000000000dEaD"!==t?c?Object(h.jsx)(Z,{web3:j,privateWeb3:u,privateGamesClub:m,rpsgame:d,network:b,maticPrice:g,screen:e,account:t,gas:c}):Object(h.jsx)(q.a,{}):Object(h.jsx)(V,{readBlockchainData:A}),Object(h.jsx)("div",{ref:e})]})]})}}}]);
//# sourceMappingURL=12.70f0bc4e.chunk.js.map