!function(){var t,e={757:function(t,e,n){t.exports=n(666)},708:function(t,e,n){"use strict";var r=n(757),o=n.n(r);function a(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))}}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.overlayElmt=document.getElementById("overlay"),this.alertElmt=document.getElementById("alert"),this.bodyElmt=document.getElementById("alert-body"),this.footerElmt=document.getElementById("alert-footer"),this.game=e,this.datas=e.datas;var r=function(){var t=i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.datas.createDatabase();case 2:t.sent&&n.showRanking();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();for(var a in r(),this.buttonsElmts=[{action:"Play",label:"Jouer"},{action:"Replay",label:"Rejouer"},{action:"Save",label:"Enregistrer mon score"},{action:"Cancel",label:"Terminé"}],this.buttonsElmts){var s=document.createElement("button");s.type="button",s.textContent=this.buttonsElmts[a].label,s.classList.add("hide","alert__button"),this.footerElmt.appendChild(s),this["btn".concat(this.buttonsElmts[a].action)]=s}this.btnPlay.addEventListener("click",(function(){n.hide(),n.game.launch()})),this.btnReplay.addEventListener("click",(function(){n.hide(),n.game.replay()})),this.btnCancel.addEventListener("click",(function(){n.hide()})),this.btnSave.addEventListener("click",(function(){var t=n.bodyElmt.querySelector("input").value.trim(),e={player:""===t?"-":t,score:n.game.score};n.hide();var r=function(){var t=i(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.datas.setScore(e);case 2:r=t.sent,a="<p>Votre score a bien été enregistré.</p>",!1===r&&(a="<p>Une erreur est survenue. Votre score n'a pas été enregistré.</p>"),n.btnCancel.classList.remove("hide"),n.btnReplay.classList.remove("hide"),n.show(a);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();r()}))}var e,n,r;return e=t,n=[{key:"hide",value:function(){for(var t in this.overlayElmt.classList.remove("show"),this.alertElmt.classList.remove("alert--scores"),this.bodyElmt.innerHTML="",this.buttonsElmts)this["btn".concat(this.buttonsElmts[t].action)].classList.add("hide")}},{key:"show",value:function(t){this.bodyElmt.innerHTML=t,this.overlayElmt.classList.add("show")}},{key:"win",value:function(){var t=this,e=this.game.counter.secondsToMinutes(this.game.score),n="<p>Félicitations, vous avez gagné !<br>Votre temps est de <strong>".concat(e,"</strong>.</p>"),r=function(){var e=i(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.datas.getRank(t.game.score);case 2:(r=e.sent)<=t.datas.rankingLimit?(n+="<p>Vous occupez la <strong>".concat(r+(1===r?"ère":"ème"),'</strong> place du classement&nbsp;!</p>\n        <p><input type="text" name="pseudo" placeholder="Votre pseudo" maxlength="15" class="alert__input"></p>'),t.btnSave.classList.remove("hide")):t.btnReplay.classList.remove("hide"),t.show(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r()}},{key:"loose",value:function(){this.btnCancel.classList.remove("hide"),this.btnReplay.classList.remove("hide"),this.show("<p>Désolé, le temps imparti est écoulé !</p>")}},{key:"showRanking",value:function(){var t=this,e=function(){var e=i(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.datas.getRanking();case 2:n=e.sent,Array.isArray(n)&&(r='<h2 class="alert__title">Meilleurs scores</h2>',n.length?(r+='<table class="alert__table">\n            <tbody>',n.forEach((function(e,n){var o=String(n+1).padStart(2,0),a=e.date.split(" "),i="".concat(a[0].split("-")[2],"-").concat(a[0].split("-")[1],"-").concat(a[0].split("-")[0]),s=a[1];r+='\n                <tr>\n                  <td class="rank">'.concat(o,'</td>\n                  <td class="player">\n                    <strong>').concat(null===e.player?"-":e.player,'</strong>\n                    <span class="hide-md"><br>').concat(i," <small>").concat(s,'</small></span>\n                  </td>\n                  <td class="date show-md">').concat(i," <small>").concat(s,'</small></td>\n                  <td class="time"><strong>').concat(t.game.counter.secondsToMinutes(e.score),"</strong></td>\n                </tr>")})),r+="</tbody>\n          </table>"):r+="<p>Aucun score sauvegardé. Jouez maintenant pour enregistrer le vôtre !</p>",t.btnPlay.classList.remove("hide"),t.alertElmt.classList.add("alert--scores"),t.show(r));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}],n&&s(e.prototype,n),r&&s(e,r),t}();var u=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.bgPosition=n,this.value=e,this.isVisible=!1,this.isReturnable=!0};function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.countUpElmt=document.getElementById("count-up"),this.durationElmt=document.getElementById("duration"),this.game=e,this.elapsedTime=0,this.durationElmt.innerHTML=this.secondsToMinutes(e.duration)}var e,n,r;return e=t,(n=[{key:"secondsToMinutes",value:function(t){return new Date(1e3*t).toISOString().substr(14,5)}},{key:"start",value:function(){var t=this,e=this,n=new Date,r=new Date;this.interval=setInterval((function(){r.setSeconds(r.getSeconds()+1);var o=Math.abs(r-n);t.countUpElmt.innerHTML=new Date(o).toISOString().substr(14,5);var a=(e.elapsedTime+1)/e.game.duration*100;e.game.progress.move(a),e.elapsedTime===e.game.duration&&e.game.gameOver(),e.elapsedTime++}),1e3)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"reset",value:function(){this.elapsedTime=0,this.countUpElmt.innerHTML="00:00"}}])&&l(e.prototype,n),r&&l(e,r),t}();function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.endPoint="data",this.backupMethod=e,this.rankingLimit=n}var e,n,r;return e=t,(n=[{key:"createDatabase",value:function(){return"database"===this.backupMethod?fetch("".concat(this.endPoint,"/setDb"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){if(t.error)throw new Error(t.error);return t.success})).catch((function(t){alert(t)})):(null===localStorage.getItem("memoryGame")&&localStorage.setItem("memoryGame",JSON.stringify([])),!0)}},{key:"getRanking",value:function(){if("database"===this.backupMethod)return fetch("".concat(this.endPoint,"/getRanking"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:this.formUrlEncoder({limit:this.rankingLimit})}).then((function(t){return t.json()})).then((function(t){return t.ranking}));var t=JSON.parse(localStorage.getItem("memoryGame"));return t.sort((function(t,e){return t.score>e.score?1:e.score>t.score?-1:0})),t.slice(0,this.rankingLimit)}},{key:"getRank",value:function(t){if("database"===this.backupMethod)return fetch("".concat(this.endPoint,"/getRank"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:this.formUrlEncoder({score:t})}).then((function(t){return t.json()})).then((function(t){return Number(t.rank)}));var e=JSON.parse(localStorage.getItem("memoryGame")),n=0;return e.push({identifier:!0,score:t}),e.sort((function(t,e){return t.score>e.score?1:e.score>t.score?-1:0})),e.every((function(t,e){return!Object.prototype.hasOwnProperty.call(t,"identifier")||(n=e+1,!1)})),n}},{key:"setScore",value:function(t){var e=new Date,n=Intl.DateTimeFormat().resolvedOptions(),r=e.toISOString().substr(0,10).split("-");if(t.date="".concat(r[0],"-").concat(r[1],"-").concat(r[2]," ").concat(e.toLocaleTimeString(n)),"database"===this.backupMethod)return fetch("".concat(this.endPoint,"/saveScore"),{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:this.formUrlEncoder(t)}).then((function(t){return t.json()})).then((function(t){if(t.error)throw new Error(t.error);return t.success}));var o=JSON.parse(localStorage.getItem("memoryGame"));return o.push(t),localStorage.setItem("memoryGame",JSON.stringify(o)),!0}},{key:"formUrlEncoder",value:function(t){var e=[];for(var n in t){var r=encodeURIComponent(n),o=encodeURIComponent(t[n]);e.push("".concat(r,"=").concat(o))}return e.join("&")}}])&&f(e.prototype,n),r&&f(e,r),t}();function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.barElmt=document.getElementById("progress-bar")}var e,n,r;return e=t,(n=[{key:"move",value:function(t){this.barElmt.style.clipPath="inset(0 ".concat(100-t,"% 0 0)")}},{key:"reset",value:function(){this.barElmt.removeAttribute("style")}}])&&p(e.prototype,n),r&&p(e,r),t}();function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),fetch("settings.json").then((function(t){return t.json()})).then((function(t){if(!e.checkSettings(t))return!1;e.boardElmt=document.getElementById("cards"),e.countDownElmt=document.getElementById("countdown"),e.countDownValueElmt=document.getElementById("countdown-value"),e.progress=new m,e.counter=new h(e),e.datas=new d(e.backupMethod,e.rankingLimit),e.alert=new c(e),e.init()}))}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.ended=!1,this.cards=[],this.selectedCards=[],this.flippedCards=[],this.isWin=!1,this.score=0;for(var t=this.cardsValues,e=1;e<this.nbOccurences;)t=t.concat(t),e++;for(var n=0;n<t.length;n++){var r=t[n],o="0px ".concat(-1*this.bgCardIncrement*n,"px"),a=new u(r,o);this.cards.push(a)}this.displayCards()}},{key:"displayCards",value:function(){var t=this;this.cards.sort((function(){return Math.random()-.5}));var e,n=v(this.cards);try{var r=function(){var n=e.value,r=document.createElement("li"),o=document.createElement("div"),a=document.createElement("div");r.className="",r.classList.add("card"),o.classList.add("card__front"),o.style.backgroundPosition=n.bgPosition,a.classList.add("card__back"),a.innerHTML=t.debug?'<span class="card__value">'.concat(n.value,"</span>"):"",r.append(a,o),n.elmt=r,n.elmt.addEventListener("click",(function(){if(t.ended)return!1;t.selectedCards.length!==t.nbOccurences&&(n.elmt.classList.add("card--flipped"),n.isVisible=!0,t.selectedCards.push(n.value),t.selectedCards.length===t.nbOccurences&&t.checkFlippedCards())})),t.boardElmt.appendChild(n.elmt)};for(n.s();!(e=n.n()).done;)r()}catch(t){n.e(t)}finally{n.f()}}},{key:"checkFlippedCards",value:function(){for(var t=this,e=this.selectedCards[0]===this.selectedCards[1],n=function(n){var r=t.cards[n];if(r.elmt.classList.toggle("card--disabled",r.isReturnable&&!1===r.isVisible),r.elmt.classList.toggle("card--blink",e&&t.selectedCards.includes(r.value)),e&&t.selectedCards.includes(r.value))return t.flippedCards.push(r),r.isReturnable=!1,"continue";r.isVisible=!1,r.isReturnable&&setTimeout((function(){r.elmt.classList.remove("card--flipped","card--disabled")}),1e3*t.visibleDuration)},r=0;r<this.cards.length;r++)n(r);if(this.selectedCards=[],this.flippedCards.length===this.cards.length)return this.isWin=!0,void this.gameOver()}},{key:"launch",value:function(){var t=this,e=3;this.countDownElmt.classList.remove("hide"),this.countDown=setInterval((function(){var n;switch(e){case 0:n="GO";break;case-1:t.play(),n="";break;default:n=e}t.countDownValueElmt.innerHTML=n,t.countDownElmt.classList.toggle("hide",e<0),e--}),1e3)}},{key:"play",value:function(){clearInterval(this.countDown),this.counter.start()}},{key:"gameOver",value:function(){if(this.counter.stop(),this.ended=!0,!1!==this.isWin){this.score=this.counter.elapsedTime;var t=this.counter.secondsToMinutes(this.score);this.alert.win(t)}else this.alert.loose()}},{key:"replay",value:function(){this.boardElmt.innerHTML="",this.counter.reset(),this.progress.reset(),this.init(),this.launch()}},{key:"checkSettings",value:function(t){for(var e in t){var n=t[e];switch(e){case"debug":if("boolean"!=typeof n)return console.error("debug setting is not a boolean."),!1;break;case"duration":if("number"!=typeof n)return console.error("Duration setting is not a number."),!1;if(n<60||n>3599)return console.error("duration setting must be between 60 and 3599."),!1;break;case"bgCardIncrement":if("number"!=typeof n)return console.error("bgCardIncrement setting is not a number."),!1;break;case"cardsValues":if(!Array.isArray(n))return console.error("cardsValues setting is not an array."),!1;break;case"nbOccurences":if("number"!=typeof n)return console.error("nbOccurences setting is not a number."),!1;if(n<2||n>3)return console.error("rankingLimit setting must be 2 or 3."),!1;break;case"visibleDuration":if("number"!=typeof n)return console.error("visibleDuration setting is not a number."),!1;if(n<2||n>5)return console.error("rankingLimit setting must be between 2 and 5."),!1;break;case"backupMethod":if(!["database","localStorage"].includes(n))return console.error('backupMethod setting must be equal to "database" or "localStorage".'),!1;break;case"rankingLimit":if("number"!=typeof n)return console.error("rankingLimit setting is not a number."),!1;if(n<2||n>10)return console.error("rankingLimit setting must be between 2 and 10."),!1;break;default:return console.error("".concat(e," setting is not valid.")),!1}this[e]=n}return!0}}])&&g(e.prototype,n),r&&g(e,r),t}())},350:function(){},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new C(r||[]);return a._invoke=function(t,e,n){var r=h;return function(o,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return j()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=x(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function v(){}function y(){}function g(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(I([])));k&&k!==n&&r.call(k,a)&&(b=k);var E=g.prototype=v.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function I(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=g,c(E,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(O.prototype),c(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new O(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),c(E,s,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,t=[],r.O=function(e,n,o,a){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,o,a]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={889:0,138:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,i=n[0],s=n[1],c=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(e&&e(n);u<i.length;u++)a=i[u],r.o(t,a)&&t[a]&&t[a][0](),t[i[u]]=0;return r.O(l)},n=self.webpackChunkmemory_game=self.webpackChunkmemory_game||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),r.O(void 0,[138],(function(){return r(708)}));var o=r.O(void 0,[138],(function(){return r(350)}));o=r.O(o)}();