(function(e){function t(t){for(var n,a,c=t[0],u=t[1],i=t[2],p=0,l=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(l.length)l.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-a86b0e22":"22fdbe3f"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-a86b0e22":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-a86b0e22":"9c48f32e"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var i=s[c],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===n||p===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],p=i.getAttribute("data-href");if(p===n||p===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],f.parentNode.removeChild(f),r(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=c(e);var l=new Error;i=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=p;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s=(r("5c0b"),r("2877")),c={},u=Object(s["a"])(c,a,o,!1,null,null,null),i=u.exports,p=r("8c4f");n["a"].use(p["a"]);var l=new p["a"]({routes:[{path:"/",redirect:{name:"WelcomeView"}},{path:"/welcome",name:"WelcomeView",component:function(){return r.e("chunk-a86b0e22").then(r.bind(null,"0ac8"))}}]}),f=r("2f62"),d=(r("96cf"),r("3b8d")),m=(r("7514"),{"update/playerConnected":function(e,t){var r=e.state,n=e.commit,a=r.players.slice();a.push(t),n("setPlayers",a)},"update/playerDisconnected":function(e,t){var r=e.state,n=e.commit,a=r.players.find((function(e){return e.id===t.id}));if(a){var o=r.players.splice(r.players.indexOf(a),1);n("setPlayers",o)}},"chat/message":function(e,t){var r=e.state,n=e.commit,a=r.chatHistory.slice();a.push(t),n("setChatHistory",a)},"gameState/chat":function(e,t){e.state;var r=e.commit;r("setChatHistory",t)},"gameState/players":function(e,t){e.state;var r=e.commit;e.dispatch;r("setPlayers",t)}}),h={namespaced:!0,state:{id:"",players:[],chatHistory:[],webSocket:void 0},getters:{isInGame:function(e){return!!e.webSocket}},actions:{joinGame:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.state,a=t.commit,o=t.dispatch,a("setId",r.id),s=new WebSocket("wss://lootcaster.herokuapp.com/play/"+r.id),s.onopen=function(e){a("setWebSocket",s),s.send(JSON.stringify({type:"get/chat"})),s.send(JSON.stringify({type:"get/players"}))},s.onmessage=function(e){var t=JSON.parse(e.data),r=t.type,s=m[r];s?s({state:n,commit:a,dispatch:o},t.data):console.warn("No handler for "+t.type)},s.onclose=function(e){a("setWebSocket",void 0)};case 6:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},mutations:{setId:function(e,t){e.id=t},setPlayers:function(e,t){e.players=t},setChatHistory:function(e,t){e.chatHistory=t},setWebSocket:function(e,t){e.webSocket=t}}},v=r("bc3a"),y=r.n(v),g={namespaced:!0,state:{id:"",username:""},getters:{isAuthenticated:function(e){return!!e.id}},actions:{register:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,t.commit,n=r.username,a=r.password,o={username:n,password:a},e.prev=3,e.next=6,y.a.post("https://lootcaster.herokuapp.com/register",o);case 6:return s=e.sent,e.abrupt("return",{response:s.data});case 10:return e.prev=10,e.t0=e["catch"](3),console.error(e.t0),e.abrupt("return",{error:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,n=t.commit,a=r.username,o=r.password,s={username:a,password:o},e.prev=3,e.next=6,y.a.post("https://lootcaster.herokuapp.com/login",s);case 6:return c=e.sent,n("setId",c.data.id),n("setUsername",c.data.username),e.abrupt("return",c.data);case 12:return e.prev=12,e.t0=e["catch"](3),console.error(e.t0),e.abrupt("return",e.t0.response.data);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));function t(t,r){return e.apply(this,arguments)}return t}()},mutations:{setId:function(e,t){e.id=t},setUsername:function(e,t){e.username=t}}},b={namespaced:!0,state:{publicGames:[]},actions:{createGame:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,t.commit,r=t.dispatch,e.prev=1,e.next=4,y.a.put("https://lootcaster.herokuapp.com/games");case 4:r("fetchPublicGames"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t){return e.apply(this,arguments)}return t}(),fetchPublicGames:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,r=t.commit,e.prev=1,e.next=4,y.a.get("https://lootcaster.herokuapp.com/games");case 4:n=e.sent,r("setPublicGames",n.data.data),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),console.error(e.t0),r("setPublicGames",[]);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},mutations:{setPublicGames:function(e,t){e.publicGames=t}}};n["a"].use(f["a"]);var w=new f["a"].Store({modules:{player:g,currentGame:h,gameBrowser:b}});n["a"].config.productionTip=!1,y.a.defaults.withCredentials=!0,new n["a"]({router:l,store:w,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},e332:function(e,t,r){}});
//# sourceMappingURL=app.0df6165a.js.map