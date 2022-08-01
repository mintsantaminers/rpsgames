(this.webpackJsonpgamesclub=this.webpackJsonpgamesclub||[]).push([[14],{1529:function(e,t,n){"use strict";n.r(t);var s=n(185),a=n(2),r=n(32),c=n(186),i=n(62),o=n(19),l=n(80),d=n(1483),b=n(1522),j=n(5);d.d.register(d.c,d.i,d.k,d.h,d.o,d.f);var u,x,m,h,p,f=function(e){var t=e.data,n=Object(a.useRef)(null),s=Object(a.useState)({datasets:[]}),r=Object(o.a)(s,2),c=r[0],i=r[1],l=Object(a.useState)({datasets:[]}),d=Object(o.a)(l,2),u=d[0],x=d[1];return Object(a.useEffect)((function(){var e=n.current;if(e){x({responsive:!0,plugins:{tooltip:{backgroundColor:"#4d4763ec",mode:"index",intersect:!1,callbacks:{title:function(e){var n=parseInt(e[0].dataIndex);return"ID: "+e[0].label+"\nWallet: "+t.accounts[n].substring(0,5)+"..."+t.accounts[n].substring(38,42)},beforeFooter:function(e){var n=parseInt(e[0].dataIndex);return"Usd Amount: "+t.usdAmounts[n]},footer:function(e){var n=parseInt(e[0].dataIndex);return"Matic Amount: "+t.maticAmounts[n]},afterFooter:function(e){var t=parseInt(e[0].dataIndex),n=e[0].dataset.data,s="";return s=0===t&&n[t]>0?"Won":"Lost",t>0&&n[t-1]>n[t]&&(s="Lost"),t>0&&n[t-1]<n[t]&&(s="Won"),"Result: "+s}}}},hover:{mode:"index",intersect:!1},scales:{x:{ticks:{beginAtZero:!0,stepSize:100},grid:{display:!1,drawBorder:!1}},y:{ticks:{type:"category",labelOffset:35},grid:{display:!1,drawBorder:!1}}}}),i({labels:t.time,datasets:[{label:"Profit",data:t.profit,pointBackgroundColor:function(e){return e.raw>=0?"rgba(255, 245, 117, 1)":"rgba(255,  127, 80, 1)"},pointBorderColor:function(e){return e.raw>=0?"rgba(255, 245, 117, 1)":"rgba(255,  127, 80, 1)"},pointRadius:2,pointHoverRadius:5,tension:0,borderWidth:2,fill:{target:{value:t.profit[0]},above:function(t){return function(t){var n=e.ctx,s=e.chartArea,a=e.scales.y.getPixelForValue(t),r=n.createLinearGradient(0,a,0,s.top);return r.addColorStop(0,"rgba(255, 245, 117, 0)"),r.addColorStop(1,"rgba(255, 245, 117, 0.5)"),r}(t.dataset.data[0])},below:function(t){return function(t){var n=e.ctx,s=e.chartArea,a=e.scales.y.getPixelForValue(t),r=n.createLinearGradient(0,a,0,s.bottom);return r.addColorStop(0,"rgba(255, 127, 80, 0)"),r.addColorStop(1,"rgba(255, 127, 80, 0.5)"),r}(t.dataset.data[0])}},segment:{borderColor:function(e){if("segment"===e.type)return e.p0.raw>=0?"rgba(255, 245, 117, 1)":"rgba(255,  127, 80, 1)"}}}]})}}),[t]),Object(j.jsx)(b.a,{options:u,ref:n,data:c})},O=function(e){var t=e.clubData,n=e.userGames,s=Object(a.useState)(!1),r=Object(o.a)(s,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){var e=Object(l.a)(n).sort((function(e,t){return e.createdAt-t.createdAt})),t=[],s=[],a=[],r=[],c=e.map((function(e,n){var c=e.gameId,i=parseFloat(e.amount.toFixed(2)),o=e.maticAmount,l=parseFloat(e.profit.toFixed(2));return t.push(c),s.push(i),a.push(o),r.push(e.account),l}));i({time:t,profit:c,usdAmounts:s,maticAmounts:a,accounts:r})}),[t,n]),t&&c&&Object(j.jsx)(f,{data:c})},g=n(70),v=function(e){var t=e.userGames;return Object(j.jsxs)(g.m,{borderless:!0,responsive:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"modal-history-games",children:"Id"}),Object(j.jsx)("th",{className:"modal-history-games",children:"Result"}),Object(j.jsx)("th",{className:"modal-history-games",children:"Amount"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"https://polygonscan.com/tx/".concat(e.txHash),target:"_blank",children:e.gameId})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{style:{color:e.result?"mediumseagreen":"#ca5c7f"},children:e.result?"doubled ":"bankrupt "})}),Object(j.jsx)("td",{children:e.amount})]},t)}))})]})},A=n(314),N=function(e){var t=e.maxGames,n=e.minGames,s=e.cGames,a=e.xpClass;return t||n?Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(j.jsx)(g.l,{value:(s-n)/(t-n)*100,striped:!0,className:"w-100",color:a}),Object(j.jsx)("small",{className:"text-white",children:"".concat(s,"/").concat(t," games")})]}):Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(j.jsx)(g.l,{value:690,striped:!0,className:"w-100",color:a}),Object(j.jsx)("small",{children:"MAX LEVEL"})]})},w=function(e){var t,n=e.clubData,s=(e.showLvl,[10,20,30,40,55,70,85,100,115,140,165,190,215,240,280,320,360,400,440,490,540,590,640,690]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"my-2",children:Object(j.jsx)(N,Object(A.a)(Object(A.a)({},(t=n.level,t<s.length?{maxGames:s[t-1],minGames:s[t-2]?s[t-2]:0}:null)),{},{cGames:n.rps.gameWon+n.rps.gameLoss,xpClass:function(e){return e<=4?["xp-user-badge badge-yellow","yellow"]:e>4&&e<10?["xp-user-badge badge-orange","orange"]:e>9&&e<15?["xp-user-badge badge-pink","pink"]:e>14&&e<20?["xp-user-badge badge-blue","blue"]:e>19&&e<24?["xp-user-badge badge-green","green"]:["xp-user-badge badge-red","red"]}(n.level)[1]}))})})},y=n(420),L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABBCAMAAAAqoYzVAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuzl2PfDhxYiyvl0QaFgk2LxXHrU6fiT7ewFdfUiVPRR//vUyLAAAACnRSTlMARS9cssx2FZHhs4/t0wAAA9BJREFUaN7tmdm6oyAMgN1QiiJg7fu/6tSlHgIJiZ2Zb24md+cY6W82Aqmq//L3pe61Mh9Ruh0IvSFSS8R1fV8LNJWO1U5pEG2lMYrWMKJ0LdLsemAATajpJrOBEUjXiDRVey2rC2r9XSNcr0k09bnqxwXWLuNHrH19vggibLjTSMjTWnstXtCcrfXx6geBXzLF6VBTcoRj/QO+ZzSf9mLo9lCeUbXFZXbgEd6vHXbgNIM/zNXvJiBRfRoPEoQxbOiK1TxWb4sEb9m1orzoJAinHVjN5wfVPTkt/YOgRAjjKkIYw4m68B/0U6MeMoQgQzhRPaPlQTQIEc61JxnqBBJ2s7sFdplAUkCEOSoz3ubRMIFVzuqTx9ozidB9uRBFw/YPAcI7qNK3MASoNm7VwSVEJvPO9u9WghCvNToSATAs4MdCvNoE3foQIcSRXUCIPzCAP/f8Q7RsXBrKCFaGEDkfIkC1J0To/yjCQiGM4UXv7SKEWYgwAwQH89Q6gkGC4EUZkTnChGwXRW1R8wg+COrCJusIV7BoT+GI9olEcHYqVUcqKSeTeYJ0ib5VoM/sQhF8WppwM8T9zzcI1hAIHhprPL8zMI0NHQu/2S/8eNIF9nOIjGAW5jWvTyRax5ihv4EwGSmCxctaKi/QPvIIizdShEDWViS4pQjWGmKzw/yVZf660NbqhAhR/LIIFq3CK2aLZ9w95qUpeWcVIkyO3I+cnbFoaAt7BKg1gGEiqp5dudNm4hLL7ZQwq9FwnMxdcUuaZENpj/BIcb6BsL6PwwHCJxky89sU0j0/pAiBDNAAf+hR3innLNa/QEg7oPSHmiICOBXurhAjLGgYQbjDsG25X1jL21QBwVLlMm2hz92a7pqWrKoLEfw4sp2Nje5kaATgiuBkCF3aLCwO7Wxc1EMXesc1r74MQjfkL46TzQvkbGQI0BWeRdhuFB9MzwTDlEeAriggPLTum+vSxpiXsAmjY0GRrkgRumGXKr3ytPzVVTkjVIe5YisOGUJ28Y1VNvRWjEEYUFcsAoSKb9uyFhpF+LnsXWFx4BE6NAeJSlEVECrUFVaAEN1Ur4g3wHlKwwvr5NQ9yHqAHKGCtTo66ITrojo5ynTEwb/9FqEX9zCqKiOgDyQIZ3USSMMhDN8i1OamE0kEkSswBKErHgOPIHEFiiDzYV1E1uKxVY/P/Lo7BFVTeNyKI+quL1SdjmUo62rhNAyJSXXnPZ31HVKv6tKkti+PHOmx6jUXRUeuCmg23LhYo4NXYmo8fKT0bH9a0sQoIuh3Y1MP/2R2fg/6H8gvid4aLDR4vp8AAAAASUVORK5CYII=",E=c.a.div(u||(u=Object(s.a)(["\n  width: 75%;\n  .profile-game-stats {\n    border-bottom: 1px solid transparent;\n  }\n\n  .item1 {\n    width: 25%;\n  }\n\n  thead tr th {\n    color: #ffda5c;\n    border-left: 1px solid #554b77;\n    font-weight: 400;\n    height: 0px;\n    align-items: center;\n  }\n\n  .Logo {\n    border-left: none;\n  }\n\n  .LogoImg {\n    width: 75px;\n    margin-top: 20px;\n    margin-right: 15px;\n  }\n\n  tbody tr td {\n    border-left: 1px solid #554b77;\n  }\n\n  .Vacio {\n    border: none;\n  }\n"]))),I=function(e){var t=e.clubData;return Object(j.jsxs)(E,{children:[Object(j.jsxs)("table",{className:"profile-game-stats",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"tr-profile-text",children:[Object(j.jsx)("th",{className:"Logo h1",children:Object(j.jsx)("img",{src:L,className:"LogoImg",alt:"Logo"})}),Object(j.jsx)("th",{className:"item1",children:"Top Win Streak"}),Object(j.jsx)("th",{className:"item1",children:"Rock"}),Object(j.jsx)("th",{className:"item1",children:"Paper"}),Object(j.jsx)("th",{className:"item1",children:"Scissors"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"Vacio"}),Object(j.jsx)("td",{children:t.rps.topWinStreak}),Object(j.jsx)("td",{children:t.rps.rock}),Object(j.jsx)("td",{children:t.rps.paper}),Object(j.jsx)("td",{children:t.rps.scissors})]})})]}),Object(j.jsx)("span",{className:"text-center text-white",children:t.whitelist?"WHITELISTED":"NOT WHITELISTED"})]})},S=c.a.div(x||(x=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n\n  thead tr th {\n    padding-left: 30px;\n    color: #ffda5c;\n    padding-right: 30px;\n    border-left: 1px solid #554b77;\n    @media (max-width: 700px) {\n      border-left: none;\n    }\n  }\n\n  tbody tr td {\n    padding-left: 30px;\n    padding-right: 30px;\n    border-left: 1px solid #554b77;\n    @media (max-width: 700px) {\n      border-left: none;\n      border-bottom: 1px solid #554b77;\n    }\n  }\n\n  .table-responsive {\n    display: grid;\n    align-items: center;\n    gap: 40px;\n    border: none;\n  }\n  .wallet-info-text {\n    border-left: 1px solid transparent;\n  }\n"]))),T=function(e){var t=e.clubData,n=t.rps.gameWon+t.rps.gameLoss,s=t.rps.amountWon+t.rps.amountLoss,a=t.rps.amountWon-t.rps.amountLoss;return Object(j.jsx)(S,{children:Object(j.jsx)("div",{className:"table-responsive",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"wallet-info-text",children:"Wallet"}),Object(j.jsx)("th",{children:"Total Games"}),Object(j.jsx)("th",{children:"Total Amount"}),Object(j.jsx)("th",{children:"Profit"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"wallet-info-text",children:t.account.substring(0,5)+"..."+t.account.substring(38,42)}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:"$"+s.toFixed(2)}),Object(j.jsx)("td",{className:a>0?"profit-plus":"profit-minus",children:a>0?"$"+a.toFixed(2):"-$"+(a.toFixed(2)-2*a.toFixed(2))})]})})]})})})},R=n(1),k=n(7),C=n(29),D=n(61),F=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){if(""!==e&&void 0!==e){console.log("Reading useUserGames");var t=Object(C.i)(Object(C.b)(D.a,"allGames"),Object(C.l)("uid","==",e),Object(C.l)("state","==","confirmed")),n=Object(C.g)(t,function(){var e=Object(k.a)(Object(R.a)().mark((function e(t){var n;return Object(R.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.docs.map((function(e){return e.data()})),r(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return n()}}}),[e]),s},M=n(232),V=n(106),G=function(e){var t=e.uid,n=e.isMobileResolution,s=Object(a.useState)(!1),c=Object(o.a)(s,2),i=c[0],l=c[1],d=F(t),b=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){if(""!==e&&void 0!==e){console.log("Reading useUserProfile");var t=Object(C.i)(Object(C.b)(D.a,"clubUsers"),Object(C.l)("uid","==",e)),n=Object(C.g)(t,function(){var e=Object(k.a)(Object(R.a)().mark((function e(t){var n;return Object(R.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.docs.map((function(e){return e.data()})),r(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return n()}}}),[e]),s}(t),u=Object(r.h)();Object(a.useEffect)((function(){0===d.length&&0===b.length&&u("/stats",{replace:!0})}),[d,b]);return b[0]?Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsxs)("h3",{className:"TitleUsuario my-3 text-center",children:[b[0].name+"#"+b[0].id," Stats"]}),Object(j.jsxs)("div",{className:"profile-info",children:[Object(j.jsxs)("div",{className:"profile-info-container",children:[Object(j.jsx)("img",{className:"rounded-circle profile-img",src:b[0].photo,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src=M.a},alt:b[0].uid}),Object(j.jsxs)("div",{className:"d-flex m-auto",children:[Object(j.jsx)(y.a,{userLevel:b[0].level}),Object(j.jsx)("span",{className:function(){var e=b[0].level;return e<=4?"text-yellow":e>4&&e<10?"text-orange":e>9&&e<15?"text-pink":e>14&&e<20?"text-blue":e>19&&e<24?"text-green":"text-red"}(),children:b[0].name+"#"+b[0].id})]}),Object(j.jsx)(w,{clubData:b[0]})]}),!n&&Object(j.jsx)("div",{className:"profile-stats-container",children:Object(j.jsx)(I,{clubData:b[0]})})]}),n&&Object(j.jsx)("div",{className:"rps-stats-mobile mt-2",children:Object(j.jsx)(I,{clubData:b[0]})}),d.length>0?Object(j.jsxs)("div",{className:"mt-2",children:[Object(j.jsx)(T,{clubData:b[0],isMobileResolution:n}),Object(j.jsx)("div",{className:"botones-tabla mt-4 mb-4",children:Object(j.jsxs)("div",{className:"botones-tipos",children:[Object(j.jsx)("button",{onClick:function(){return l(!i)},disabled:!i,className:i?"btn-rango-left":"active btn-rango-left",children:"Chart"}),Object(j.jsx)("button",{onClick:function(){return l(!i)},disabled:i,className:i?"active btn-rango-right":"btn-rango-right",children:"Games"})]})}),i?Object(j.jsx)(v,{userGames:d}):Object(j.jsx)(O,{clubData:b[0],userGames:d})]}):Object(j.jsx)("h2",{className:"text-center text-white mt-5",children:"No games found"})]}):Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(V.a,{})})},U=function(e){var t=e.playerDocument,n=e.isMobileResolution,s=Object(a.useState)(!1),r=Object(o.a)(s,2),c=r[0],i=r[1],l=F(t.uid);return t?Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsxs)("h3",{className:"TitleUsuario my-3 text-center",children:[t.name+"#"+t.id," Stats"]}),Object(j.jsxs)("div",{className:"profile-info",children:[Object(j.jsxs)("div",{className:"profile-info-container",children:[Object(j.jsx)("img",{className:"rounded-circle profile-img",src:t.photo,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src=M.a},alt:t.uid}),Object(j.jsxs)("div",{className:"d-flex m-auto",children:[Object(j.jsx)(y.a,{userLevel:t.level}),Object(j.jsx)("span",{className:function(){var e=t.level;return e<=4?"text-yellow":e>4&&e<10?"text-orange":e>9&&e<15?"text-pink":e>14&&e<20?"text-blue":e>19&&e<24?"text-green":"text-red"}(),children:t.name+"#"+t.id})]}),Object(j.jsx)(w,{clubData:t})]}),!n&&Object(j.jsx)("div",{className:"profile-stats-container",children:Object(j.jsx)(I,{clubData:t})})]}),n&&Object(j.jsx)("div",{className:"rps-stats-mobile mt-2",children:Object(j.jsx)(I,{clubData:t})}),l.length>0?Object(j.jsxs)("div",{className:"mt-2",children:[Object(j.jsx)(T,{clubData:t,isMobileResolution:n}),Object(j.jsx)("div",{className:"botones-tabla mt-4 mb-4",children:Object(j.jsxs)("div",{className:"botones-tipos",children:[Object(j.jsx)("button",{onClick:function(){return i(!c)},disabled:!c,className:c?"btn-rango-left":"active btn-rango-left",children:"Chart"}),Object(j.jsx)("button",{onClick:function(){return i(!c)},disabled:c,className:c?"active btn-rango-right":"btn-rango-right",children:"Games"})]})}),c?Object(j.jsx)(v,{userGames:l}):Object(j.jsx)(O,{clubData:t,userGames:l})]}):Object(j.jsx)("h2",{className:"text-center text-white mt-5",children:"No games found"})]}):Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)(V.a,{})})},W=c.a.div(m||(m=Object(s.a)(["\n  width: 75%;\n  .profile-game-stats {\n    border-bottom: 1px solid transparent;\n  }\n\n  .item1 {\n    width: 25%;\n  }\n\n  thead tr th {\n    color: #ffda5c;\n    border-left: 1px solid #554b77;\n    font-weight: 400;\n    height: 0px;\n    align-items: center;\n  }\n\n  .Logo {\n    border-left: none;\n  }\n\n  .LogoImg {\n    width: 75px;\n    margin-top: 20px;\n    margin-right: 15px;\n  }\n\n  tbody tr td {\n    border-left: 1px solid #554b77;\n  }\n\n  .Vacio {\n    border: none;\n  }\n"]))),B=function(e){var t=e.account,n=e.isMobileResolution,s=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){if("0x000000000000000000000000000000000000dEaD"!==e){console.log("Reading useAnonProfile");var t=Object(C.i)(Object(C.b)(D.a,"anonUsers"),Object(C.l)("account","==",e)),n=Object(C.g)(t,function(){var e=Object(k.a)(Object(R.a)().mark((function e(t){var n;return Object(R.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.docs.map((function(e){return e.data()})),r(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return n()}}}),[e]),s}(t),c=Object(r.h)();Object(a.useEffect)((function(){0===s.length&&c("/stats",{replace:!0})}),[s]);return s[0]?Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsx)("h3",{className:"TitleUsuario my-3 text-center",children:s[0].account.substring(0,5)+"..."+s[0].account.substring(38,42)+" Stats"}),Object(j.jsxs)("div",{className:"profile-info",children:[Object(j.jsxs)("div",{className:"profile-info-container",children:[Object(j.jsx)("img",{className:"rounded-circle profile-img",src:s[0].photo,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src=M.a},alt:s[0].account}),Object(j.jsxs)("div",{className:"d-flex m-auto",children:[Object(j.jsx)(y.a,{userLevel:s[0].level}),Object(j.jsx)("span",{className:function(){var e=s[0].level;return e<=4?"text-yellow":e>4&&e<10?"text-orange":e>9&&e<15?"text-pink":e>14&&e<20?"text-blue":e>19&&e<24?"text-green":"text-red"}(),children:s[0].account.substring(0,5)+"..."+s[0].account.substring(38,42)})]}),Object(j.jsx)("span",{className:"text-white",children:"Login to save your game data"})]}),!n&&Object(j.jsx)("div",{className:"profile-stats-container",children:Object(j.jsxs)(W,{children:[Object(j.jsx)("div",{className:"Logo h1",children:Object(j.jsx)("img",{src:L,className:"LogoImg",alt:"Logo"})}),Object(j.jsx)("span",{className:"text-center text-white",children:s[0].whitelist?"WHITELISTED":"NOT WHITELISTED"})]})})]})]}):Object(j.jsx)("div",{className:"d-flex justify-content-center text-center",children:Object(j.jsx)(V.a,{})})},H=c.a.div(h||(h=Object(s.a)(["\n  width: 75%;\n  .profile-game-stats {\n    border-bottom: 1px solid transparent;\n  }\n\n  .item1 {\n    width: 25%;\n  }\n\n  thead tr th {\n    color: #ffda5c;\n    border-left: 1px solid #554b77;\n    font-weight: 400;\n    height: 0px;\n    align-items: center;\n  }\n\n  .Logo {\n    border-left: none;\n  }\n\n  .LogoImg {\n    width: 75px;\n    margin-top: 20px;\n    margin-right: 15px;\n  }\n\n  tbody tr td {\n    border-left: 1px solid #554b77;\n  }\n\n  .Vacio {\n    border: none;\n  }\n"]))),P=function(e){var t=e.playerDocument,n=e.isMobileResolution;return Object(j.jsxs)("div",{className:"profile-container",children:[Object(j.jsx)("h3",{className:"TitleUsuario my-3 text-center",children:t.account.substring(0,5)+"..."+t.account.substring(38,42)+" Stats"}),Object(j.jsxs)("div",{className:"profile-info",children:[Object(j.jsxs)("div",{className:"profile-info-container",children:[Object(j.jsx)("img",{className:"rounded-circle profile-img",src:t.photo,onError:function(e){var t=e.currentTarget;t.onerror=null,t.src=M.a},alt:t.account}),Object(j.jsxs)("div",{className:"d-flex m-auto",children:[Object(j.jsx)(y.a,{userLevel:t.level}),Object(j.jsx)("span",{className:function(){var e=t.level;return e<=4?"text-yellow":e>4&&e<10?"text-orange":e>9&&e<15?"text-pink":e>14&&e<20?"text-blue":e>19&&e<24?"text-green":"text-red"}(),children:t.account.substring(0,5)+"..."+t.account.substring(38,42)})]}),Object(j.jsx)("span",{className:"text-white",children:"Login to save your game data"})]}),!n&&Object(j.jsx)("div",{className:"profile-stats-container",children:Object(j.jsxs)(H,{children:[Object(j.jsx)("div",{className:"Logo h1",children:Object(j.jsx)("img",{src:L,className:"LogoImg",alt:"Logo"})}),Object(j.jsx)("span",{className:"text-center text-white",children:t.whitelist?"WHITELISTED":"NOT WHITELISTED"})]})})]})]})},Q=n(146),X=c.a.div(p||(p=Object(s.a)(["\n  width: 100%;\n  .TitleUsuario {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    color: white;\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n    font-size: 20px;\n    justify-content: center;\n    background-color: #554c77;\n  }\n\n  .profile-container {\n    width: 100%;\n  }\n  .profile-info {\n    display: flex;\n  }\n  .rps-stats-mobile {\n    display: flex;\n    justify-content: center;\n  }\n  .statsNew-mobile {\n    display: flex;\n    justify-content: center;\n  }\n"])));t.default=function(){var e=Object(a.useContext)(i.a),t=e.account,n=e.playerDocument,s=Object(r.i)().urlParams,c=Object(Q.a)("(max-width:700px)",!1),o=Object(r.h)();return Object(a.useEffect)((function(){s&&18!==s.length&&42!==s.length&&o("/stats",{replace:!0})}),[s]),Object(j.jsxs)(X,{children:[s?Object(j.jsxs)(j.Fragment,{children:[18===s.length&&Object(j.jsx)(G,{uid:s,isMobileResolution:c}),42===s.length&&Object(j.jsx)(B,{account:s.toLocaleLowerCase(),isMobileResolution:c})]}):Object(j.jsxs)(j.Fragment,{children:["anonymous"!==n.uid&&"0x000000000000000000000000000000000000dEaD"!==t&&Object(j.jsx)(U,{playerDocument:n,isMobileResolution:c}),"anonymous"===n.uid&&"0x000000000000000000000000000000000000dEaD"!==t&&Object(j.jsx)(P,{playerDocument:n,isMobileResolution:c})]}),!n&&"0x000000000000000000000000000000000000dEaD"===t&&!s&&Object(j.jsx)("h2",{className:"text-center text-white",children:"Login or connect wallet"})]})}}}]);
//# sourceMappingURL=14.1d9d3c0d.chunk.js.map