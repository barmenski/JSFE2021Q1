(()=>{"use strict";var e={309:(e,t,s)=>{s.r(t)},42:(e,t,s)=>{s.r(t)},76:(e,t,s)=>{s.r(t)},80:(e,t,s)=>{s.r(t)},442:(e,t,s)=>{s.r(t)},361:(e,t,s)=>{s.r(t)},528:(e,t,s)=>{s.r(t)},533:(e,t,s)=>{s.r(t)},814:(e,t,s)=>{s.r(t)},730:(e,t,s)=>{s.r(t)},984:(e,t,s)=>{s.r(t)},3:(e,t,s)=>{s.r(t)},148:(e,t,s)=>{s.r(t)},580:(e,t,s)=>{s.r(t)},387:(e,t,s)=>{s.r(t)},752:function(e,t,s){var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(n,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=s(366),a=s(186),r=s(229),o=s(936),l=s(464),c=s(646),d=s(295),m=s(831),h=s(432),p=s(916);t.App=class{constructor(e){this.rootElement=e,this.gamePage=()=>{this.wrapper.element.innerHTML="",window.app.start(),this.wrapper.element.appendChild(this.game.element)},this.settingsPage=()=>{this.wrapper.element.innerHTML="",this.wrapper.element.appendChild(this.settings.element),this.settings.initSettings()},this.initPage=()=>{this.rootElement.innerHTML="",this.rootElement.appendChild(this.header.element),this.rootElement.appendChild(this.wrapper.element),this.wrapper.element.appendChild(this.aboutGame.element),this.database.init("barmenski",1)},this.aboutGamePage=()=>{this.wrapper.element.innerHTML="",this.wrapper.element.appendChild(this.aboutGame.element)},this.bestScorePage=()=>{this.wrapper.element.innerHTML="",this.score.reset(),this.wrapper.element.appendChild(this.score.element),this.score.addLine()},this.indexedDbPage=()=>{this.wrapper.element.innerHTML="",this.indexedDbTest.init("idb-test"),this.wrapper.element.appendChild(this.indexedDbTest.dbTestWrapper)},this.header=new o.Header,this.gameButton=new l.GameButton,this.regForm=new c.RegForm,this.game=new r.Game,this.aboutGame=new n.AboutGame,this.settings=new m.Settings,this.score=new d.Score,this.wrapper=new h.Wrapper,this.database=new a.Database,this.indexedDbTest=new p.IndexedDbTest,this.rootElement=e}start(){return i(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[this.settings.categoryCards],s=t.images.map((e=>`${t.category}/${e}`)).slice(32-this.settings.amountCards);this.game.newGame(s)}))}}},366:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutGame=void 0;const i=s(583);s(309);class n extends i.BaseComponent{constructor(){super("div",["about-game"]),this.element.innerHTML='\n      <h1 class="heading">How to play?</h1>\n      <div class="main-section">\n        <div class="step one">\n          <div class="description-container">\n            <p class="description__number">1</p>\n            <p class="description__text">Register new player in game</p>\n          </div>\n          <div class="step-image"></div>\n        </div>\n        <div class="step two">\n          <div class="description-container">\n            <p class="description__number">2</p>\n            <p class="description__text">Configure your game settings</p>\n          </div>\n          <div class="step-image"></div>\n        </div>\n        <div class="step three">\n          <div class="description-container">\n            <p class="description__number">3</p>\n            <p class="description__text">Start you new game! Remember card positions and match it before times up.</p>\n          </div>\n          <div class="step-image"></div>\n        </div>\n      </div>\n      '}}t.AboutGame=n},332:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0,s(42),t.Avatar=class{constructor(){this.refresh=()=>{this.avatar.setAttribute("src",`${window.player.image}`),console.log("refresh",window.player.image)},this.avatar=document.createElement("img"),this.avatar.className="avatar__img",this.avatar.setAttribute("src",`${window.player.image}`)}}},583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},977:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,s(76);const i=s(583);class n extends i.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1,this.element.innerHTML=`\n    <div class="card">\n      <div class="card__front" style="background-image: url('./images/${e}')"></div>\n      <div class="card__back"></div>\n    </div>\n    `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip()}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=n},610:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,s(80);const i=s(583),n=s(831);class a extends i.BaseComponent{constructor(){super("div",["cards-field"]),this.cards=[],this.SHOW_TIME=30,this.show_timer=null,this.settings=new n.Settings}clear(){this.cards=[],this.element.innerHTML="",this.show_timer&&clearTimeout(this.show_timer)}addCards(e){this.SHOW_TIME=window.app.settings.showTime,this.cards=e,this.cards.forEach((e=>this.element.appendChild(e.element))),this.show_timer=setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),1e3*this.SHOW_TIME)}}t.CardsField=a},342:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Congrat=void 0;const i=s(583);s(442);class n extends i.BaseComponent{constructor(){super("div",["congrat","notVisible"]),this.element.innerHTML='\n      <p class="congrat__text"></p>\n      <button type="submit" class="congrat__btn">OK</button>\n    '}}t.Congrat=n},186:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Database=void 0,t.Database=class{init(e,t){const s=window.indexedDB.open(e,t);s.onupgradeneeded=()=>{const e=s.result,t=e.createObjectStore("players",{keyPath:"id",autoIncrement:!0});t.createIndex("score","score"),t.createIndex("email","email"),this.db=e},s.onsuccess=()=>{this.db=s.result}}write(e,t){return new Promise(((s,i)=>{let n;const a=this.db.transaction(e,"readwrite");a.oncomplete=()=>s(n);const r=a.objectStore(e),o=r.add({});o.onsuccess=()=>{const e=Object.assign(Object.assign({},t),{id:o.result});n=e;const s=r.put(e);s.onsuccess=()=>{console.log("complete",s.result)},s.onerror=()=>{console.log("error",s.result)},a.onabort=()=>{console.log("abort")}}}))}readAll(e){return new Promise(((t,s)=>{const i=this.db.transaction(e,"readonly"),n=i.objectStore(e).getAll();i.oncomplete=()=>{t(n.result)},i.onerror=()=>{s(n.error)}}))}readFiltered(e){return new Promise(((t,s)=>{const i=this.db.transaction(e,"readonly"),n=i.objectStore(e).index("score").openCursor(null,"next"),a=[];n.onsuccess=()=>{const e=n.result;e&&(e.value.id&&a.push(e.value),null==e||e.continue())},i.oncomplete=()=>{t(a)}}))}}},464:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GameButton=void 0,s(361),t.GameButton=class{constructor(){this.wrapperBtn=document.createElement("div"),this.wrapperBtn.className="wrapper__btn",this.regBtn=document.createElement("button"),this.regBtn.className="reg__btn",this.regBtn.innerHTML="REGISTER NEW PLAYER",this.regBtn.addEventListener("click",(()=>{document.body.classList.add("notScrollable"),window.app.header.cover.classList.remove("notVisible"),window.app.header.regForm.regFormWrapper.classList.remove("notVisible")})),this.startBtn=document.createElement("button"),this.startBtn.classList.add("start__btn","notVisible"),this.startBtn.innerHTML="START GAME",this.startBtn.addEventListener("click",(()=>{this.startBtn.classList.add("notVisible"),this.stopBtn.classList.remove("notVisible"),window.location.hash="#game"})),this.stopBtn=document.createElement("button"),this.stopBtn.classList.add("stop__btn","notVisible"),this.stopBtn.innerHTML="STOP GAME",this.stopBtn.addEventListener("click",(()=>{this.stopBtn.classList.add("notVisible"),this.startBtn.classList.remove("notVisible"),window.location.hash="#about-game"}));const e=document.createElement("div");e.className="game__btn",e.append(this.regBtn),e.append(this.startBtn),e.append(this.stopBtn),this.wrapperBtn.append(e)}}},229:function(e,t,s){var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(n,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function o(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,o)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const n=s(680),a=s(583),r=s(977),o=s(610),l=s(342),c=s(831),d=s(981),m=s(646);let h,p;s(936);class u extends a.BaseComponent{constructor(){super("div",["wrapper-cards"]),this.isAnimation=!1,this.regForm=new m.RegForm,this.finishGame=()=>{const e=document.querySelector(".timer"),t=document.querySelector(".start__btn"),s=document.querySelector(".stop__btn"),i=document.querySelector(".cover"),n=document.querySelector(".congrat"),a=document.querySelector(".congrat__text"),r=document.querySelector(".congrat__btn");t.classList.remove("notVisible"),s.classList.add("notVisible"),this.timer.Stop(),h=e.innerHTML,p=this.timer.resultTime;let o=100*this.rightClick-10*p;o<0&&(o=0),i.classList.remove("notVisible"),n.classList.remove("notVisible"),a.innerHTML=`Congratulations! You successfully found all matches on ${h} minutes. Score: ${o}`,window.player.score=o,console.log("player from game",window.player),window.app.database.write("players",window.player),r.addEventListener("click",(()=>{i.classList.add("notVisible"),n.classList.add("notVisible"),a.innerHTML="",window.location.hash="#best-score"})),i.addEventListener("click",(()=>{i.classList.add("notVisible"),n.classList.add("notVisible"),a.innerHTML="",window.location.hash="#best-score"}))},this.cardsField=new o.CardsField,this.timer=new d.Timer,this.congrat=new l.Congrat,this.timer.Clear(),this.timer.Start(),this.settings=new c.Settings,this.rightClick=0,this.wrongClick=0,this.scoreClick=0,this.score=0,this.element.appendChild(this.timer.element),this.element.appendChild(this.cardsField.element),this.element.appendChild(this.congrat.element)}newGame(e){this.timer.Clear(),this.timer.Start(),this.cardsField.clear(),this.rightClick=0,this.wrongClick=0,this.scoreClick=0,this.score=0;const t=e.concat(e).map((e=>new r.Card(e))).sort((()=>Math.random()-.5));t.forEach((e=>{e.element.addEventListener("click",(()=>this.cardHandler(e)))})),this.cardsField.addCards(t);const s=document.querySelector(".timer"),i=document.querySelector(".start__btn"),n=document.querySelector(".stop__btn");n.addEventListener("click",(()=>{i.classList.remove("notVisible"),n.classList.add("notVisible"),this.timer.Stop(),h=s.innerHTML,p=this.timer.resultTime,window.location.hash="#best-score"}))}cardHandler(e){return i(this,void 0,void 0,(function*(){if(!this.isAnimation&&e.isFlipped){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(e.element.classList.add("wrong"),this.activeCard.element.classList.add("wrong"),this.wrongClick++,yield(0,n.delay)(1e3),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()]),e.element.classList.remove("wrong"),this.activeCard.element.classList.remove("wrong")):(e.element.classList.add("right"),this.activeCard.element.classList.add("right"),this.rightClick++,this.rightClick===this.settings.amountCards&&this.finishGame()),this.activeCard=void 0,this.isAnimation=!1}}))}}t.Game=u},936:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const i=s(583);s(528);const n=s(186),a=s(178),r=s(55),o=s(464),l=s(646),c=s(332);class d extends i.BaseComponent{constructor(){super("header",["header"]),this.avatar=new c.Avatar,this.database=new n.Database,this.logoLink=new a.LogoLink,this.navBar=new r.NavBar([{ref:"#about-game",styles:["nav-link__about","active"],text:"About Game"},{ref:"#best-score",styles:["nav-link__score"],text:"Best Score"},{ref:"#settings",styles:["nav-link__settings"],text:"Game Settings"},{ref:"#indexeddb-test",styles:["nav-link__default"],text:"IndexedDB test"}]),this.gameButton=new o.GameButton,this.regForm=new l.RegForm,this.cover=document.createElement("div"),this.cover.classList.add("cover","notVisible"),this.cover.addEventListener("click",(()=>{document.body.classList.remove("notScrollable"),this.cover.classList.add("notVisible"),this.regForm.regFormWrapper.classList.contains("notVisible")&&this.regForm.regFormWrapper.classList.add("notVisible")})),this.element.appendChild(this.logoLink.element),this.element.append(this.navBar.list),this.element.append(this.gameButton.wrapperBtn),this.element.append(this.avatar.avatar),this.element.append(this.cover),this.element.append(this.regForm.regFormWrapper)}}t.Header=d},916:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IndexedDbTest=void 0,s(533),t.IndexedDbTest=class{constructor(){this.dbTestWrapper=document.createElement("div"),this.dbTestWrapper.className="dbtest__wrapper",this.dbTestInput=document.createElement("input"),this.dbTestInput.type="text",this.dbTestGetIn=document.createElement("input"),this.dbTestGetIn.type="text",this.dbTestGetOut=document.createElement("ul"),this.dbTestGetOut.className="dbTest-out",this.dbTestAddBtn=document.createElement("button"),this.dbTestAddBtn.className="dbtest__button",this.dbTestAddBtn.innerHTML="Add note",this.dbTestAddBtn.addEventListener("click",(()=>{this.addStickyNote(this.dbTest,this.dbTestInput.value)})),this.dbTestGetBtn=document.createElement("button"),this.dbTestGetBtn.className="dbtest__button",this.dbTestGetBtn.innerHTML="Get note",this.dbTestGetBtn.addEventListener("click",(()=>{this.readStickyNote(this.dbTest,this.dbTestGetIn.value)})),this.dbTestWrapper.append(this.dbTestInput),this.dbTestWrapper.append(this.dbTestAddBtn),this.dbTestWrapper.append(this.dbTestGetIn),this.dbTestWrapper.append(this.dbTestGetBtn),this.dbTestWrapper.append(this.dbTestGetOut)}init(e,t){const s=indexedDB.open(e,t);s.onupgradeneeded=()=>{this.dbTest=s.result,this.dbTest.createObjectStore("notes",{autoIncrement:!0})},s.onsuccess=()=>{this.dbTest=s.result},s.onerror=()=>{console.log(`error opening database${s.error}`)}}addStickyNote(e=this.dbTest,t){const s=e.transaction(["notes"],"readwrite"),i=s.objectStore("notes"),n={text:t,timestamp:Date.now()};i.add(n),s.oncomplete=()=>{console.log(`stored note!${t}`)},s.onerror=()=>{console.log(`error storing note${s.error}`)}}readStickyNote(e,t){const s=e.transaction(["notes"],"readonly").objectStore("notes").get(Number(t));s.onsuccess=()=>{const e=s.result;if(e){const t=document.createElement("li");t.innerHTML=`text: ${e.text} timestamp: ${e.timestamp}`,this.dbTestGetOut.append(t)}else console.log(`note ${t} note found`)},s.onerror=()=>{console.log(`error${s.error}`)}}}},178:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LogoLink=void 0;const i=s(583);s(814);class n extends i.BaseComponent{constructor(){super("a",["logo-link"]),this.element.innerHTML="",this.element.setAttribute("href","#game"),this.element.setAttribute("title","Go to game!")}}t.LogoLink=n},55:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0,s(730),t.NavBar=class{constructor(e){this.list=document.createElement("ul"),this.list.className="nav-list";for(let t=0;t<e.length;t++){const s=document.createElement("li");s.className="nav-item";const i=document.createElement("a");i.href=e[t].ref,i.classList.add(...e[t].styles),i.innerHTML=e[t].text,s.append(i),this.list.append(s)}window.addEventListener("hashchange",(()=>{const e=window.location.hash.slice(1);document.querySelectorAll(".nav-item a").forEach((e=>{e.classList.remove("active")})),document.querySelectorAll(".nav-item a").forEach((t=>{t.hash.slice(1)===e&&(t.classList.contains("active")||t.classList.add("active"))}))}))}}},170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0,t.Player=class{constructor(e,t,s,i,n){this.FirstName=e,this.LastName=t,this.email=s,this.score=i,this.image=n}}},646:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RegForm=void 0;const n=s(332);s(984);const a=i(s(48));t.RegForm=class{constructor(){this.avatar=new n.Avatar,this.validateFirstName=()=>{""===this.firstName.value?(this.firstName.classList.add("inputError"),this.validArray[0].classList.add("notVisible"),this.firstNameError.innerHTML="Имя не может быть пустым."):this.firstName.value.match(/[0-9]/)?(this.firstName.classList.add("inputError"),this.validArray[0].classList.add("notVisible"),this.firstNameError.innerHTML="Имя не может состоять из цифр."):this.firstName.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)?(this.firstName.classList.add("inputError"),this.validArray[0].classList.add("notVisible"),this.firstNameError.innerHTML="Имя не может содержать служебные символы."):(this.firstNameError.innerHTML="",this.firstName.classList.remove("inputError"),this.validArray[0].classList.remove("notVisible"))},this.validateLastName=()=>{""===this.lastName.value?(this.lastName.classList.add("inputError"),this.validArray[1].classList.add("notVisible"),this.lastNameError.innerHTML="Имя не может быть пустым."):this.lastName.value.match(/[0-9]/)?(this.lastName.classList.add("inputError"),this.validArray[1].classList.add("notVisible"),this.lastNameError.innerHTML="Имя не может состоять из цифр."):this.lastName.value.match(/[~!@#$%*()_—+=|:;"'`<>,.?/^]/)?(this.lastName.classList.add("inputError"),this.validArray[1].classList.add("notVisible"),this.lastNameError.innerHTML="Имя не может содержать служебные символы."):(this.lastNameError.innerHTML="",this.lastName.classList.remove("inputError"),this.validArray[1].classList.remove("notVisible"))},this.validateEmail=()=>{this.email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)?(this.emailError.innerHTML="",this.email.classList.remove("inputError"),this.validArray[2].classList.remove("notVisible")):""===this.email.value?(this.email.classList.add("inputError"),this.validArray[2].classList.add("notVisible"),this.emailError.innerHTML="Адрес не может быть пустым"):(this.email.classList.add("inputError"),this.validArray[2].classList.add("notVisible"),this.emailError.innerHTML="Адрес должен соответствовать стандартному правилу формированию email [RFC].")},this.checkAddButton=()=>{this.firstName.validity.valid&&this.lastName.validity.valid&&this.email.value.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,5}$/g)?(this.addBtn.classList.remove("invalid"),this.addBtn.removeAttribute("disabled")):(this.addBtn.classList.add("invalid"),this.addBtn.setAttribute("disabled",""))},this.regFormWrapper=document.createElement("div"),this.regFormWrapper.classList.add("reg-form__wrapper","notVisible");const e=document.createElement("h1");e.className="heading-form",e.innerHTML="Registration new Player";const t=document.createElement("div");t.className="action";const s=document.createElement("div");s.className="input-wrapper";const i=document.createElement("div");i.className="input-container",this.firstName=document.createElement("input"),this.firstName.setAttribute("type","text"),this.firstName.setAttribute("placeholder","First Name"),this.firstName.setAttribute("maxlength","30"),this.firstName.setAttribute("required","true"),this.firstName.className="first-name",this.firstName.addEventListener("input",(()=>{this.validateFirstName(),this.checkAddButton()})),this.lastName=document.createElement("input"),this.lastName.setAttribute("type","text"),this.lastName.setAttribute("placeholder","Last Name"),this.lastName.setAttribute("maxlength","30"),this.lastName.setAttribute("required","true"),this.lastName.className="last-name",this.lastName.addEventListener("input",(()=>{this.validateLastName(),this.checkAddButton()})),this.email=document.createElement("input"),this.email.setAttribute("type","text"),this.email.setAttribute("placeholder","E-mail"),this.email.setAttribute("maxlength","30"),this.email.setAttribute("required","true"),this.email.className="email",this.email.addEventListener("input",(()=>{this.validateEmail(),this.checkAddButton()})),this.regAvatar=document.createElement("div"),this.regAvatar.className="reg-avatar",this.imageContainer=document.createElement("img"),this.imageContainer.className="image-container",this.imageContainer.setAttribute("src",`${a.default}`),this.avatarInput=document.createElement("input"),this.avatarInput.setAttribute("type","file"),this.avatarInput.className="avatar-input",this.avatarInput.addEventListener("change",(()=>{if(this.avatarInput.files){const e=this.avatarInput.files[0],t=new FileReader;t.onload=()=>{this.imageContainer.setAttribute("src",`${t.result}`),window.player.image=t.result},t.readAsDataURL(e),this.avatarInput.value=""}})),this.firstNameError=document.createElement("div"),this.firstNameError.className="first-name-error",this.lastNameError=document.createElement("div"),this.lastNameError.className="last-name-error",this.emailError=document.createElement("div"),this.emailError.className="email-error",this.validCheckImage=document.createElement("div"),this.validCheckImage.classList.add("validCheck__image","notVisible"),this.validArray=[];for(let e=0;e<3;e++){const e=this.validCheckImage.cloneNode(!0);this.validArray.push(e)}const r=document.createElement("div");r.className="button-container",this.addBtn=document.createElement("button"),this.addBtn.classList.add("reg-form-add__btn","invalid"),this.addBtn.setAttribute("type","submit"),this.addBtn.setAttribute("disabled","true"),this.addBtn.innerHTML="Add User",this.addBtn.addEventListener("click",(()=>{window.app.header.gameButton.regBtn.classList.add("notVisible"),window.app.header.gameButton.startBtn.classList.remove("notVisible"),document.body.classList.remove("notScrollable"),window.app.header.cover.classList.add("notVisible"),window.app.header.avatar.refresh(),this.regFormWrapper.classList.add("notVisible"),window.player.FirstName=this.firstName.value,window.player.LastName=this.lastName.value,window.player.email=this.email.value,window.player.score=0,console.log("player from reg-form",window.player)})),this.cancelBtn=document.createElement("button"),this.cancelBtn.className="reg-form-cancel__btn",this.cancelBtn.setAttribute("type","submit"),this.cancelBtn.innerHTML="Cancel",this.cancelBtn.addEventListener("click",(()=>{document.body.classList.remove("notScrollable"),window.app.header.avatar.refresh(),window.app.header.cover.classList.add("notVisible"),this.regFormWrapper.classList.add("notVisible")})),this.regFormWrapper.append(e),this.regFormWrapper.append(t),t.append(s),t.append(r),s.append(i),i.append(this.firstName),i.append(this.firstNameError),i.append(this.validArray[0]),i.append(this.lastName),i.append(this.lastNameError),i.append(this.validArray[1]),i.append(this.email),i.append(this.emailError),i.append(this.validArray[2]),this.regAvatar.append(this.imageContainer),this.regAvatar.append(this.avatarInput),s.append(this.regAvatar),r.append(this.addBtn),r.append(this.cancelBtn)}}},295:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Score=void 0;const i=s(583);s(3);const n=s(155);class a extends i.BaseComponent{constructor(){super("div",["main"]),this.innerElement=null,this.reset=()=>{this.element.innerHTML='\n    <h1 class="heading">Best players</h1>\n    <ul class="score-list">\n    </ul>\n    '},this.addAll=()=>{this.innerElement=document.querySelector(".score-list"),window.app.database.readAll("players").then((e=>{var t;for(let s=0;s<e.length;s++)this.scoreLine=new n.ScoreLine(e[s].FirstName,e[s].LastName,e[s].email,e[s].score,e[s].image),null===(t=this.innerElement)||void 0===t||t.insertAdjacentElement("afterbegin",this.scoreLine.item)}))},this.addLine=()=>{this.innerElement=null,this.innerElement=document.querySelector(".score-list"),window.app.database.readFiltered("players").then((e=>{var t;console.log(e);for(let s=0;s<e.length;s++)this.scoreLine=new n.ScoreLine(e[s].FirstName,e[s].LastName,e[s].email,e[s].score,e[s].image),null===(t=this.innerElement)||void 0===t||t.insertAdjacentElement("afterbegin",this.scoreLine.item)}))},this.element.innerHTML='\n    <h1 class="heading">Best players</h1>\n    <ul class="score-list">\n    </ul>\n    <button class="clear__btn" type="submit">Clear</button>\n    '}}t.Score=a},155:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScoreLine=void 0,t.ScoreLine=class{constructor(e,t,s,i,n){this.item=document.createElement("li"),this.item.className="score-item";const a=document.createElement("img");a.className="avatar__img",a.setAttribute("src",`${n}`);const r=document.createElement("div");r.className="item-container";const o=document.createElement("div");o.className="item__name",o.innerHTML=`${e} ${t}`;const l=document.createElement("div");l.className="item__email",l.innerHTML=`${s}`;const c=document.createElement("div");c.className="item__score",c.innerHTML=`Score: <span>${i}</span>`,this.item.append(a),r.append(o),r.append(l),this.item.append(r),this.item.append(c),console.log(e,t,s,i,n)}}},831:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0;const i=s(583);s(148);class n extends i.BaseComponent{constructor(){super("div",["settings"]),this.initSettings=()=>{const e=document.querySelector(".category-cards-select"),t=document.querySelector(".amount-cards-select"),s=document.querySelector(".show-time-select");e.addEventListener("change",(e=>{this.categoryCards=parseInt(e.target.value,10)})),t.addEventListener("change",(e=>{this.amountCards=parseInt(e.target.value,10)})),s.addEventListener("change",(e=>{this.showTime=parseInt(e.target.value,10)}))},this.categoryCards=0,this.amountCards=8,this.showTime=10,this.element.innerHTML='\n      <div class="game-cards">\n        <div class="select-container">\n          <h1 class="heading-settings">Game cards</h1>\n          <select class="category-cards-select">\n            <option value="">select game cards type</option>\n            <option class="select-item" value="0">Argentina</option>\n            <option class="select-item" value="1">Real assets</option>\n          </select>\n        </div>\n        <div class="select-container">\n          <h1 class="heading-settings">Difficulty</h1>\n          <select class="amount-cards-select">\n            <option value="">select game type</option>\n            <option class="select-item" value="8">4x4</option>\n            <option class="select-item" value="18">6x6</option>\n            <option class="select-item" value="32">8x8</option>\n          </select>\n        </div>\n        <div class="select-container">\n          <h1 class="heading-settings">Show time</h1>\n          <select class="show-time-select">\n            <option value="">select show time</option>\n            <option class="select-item" value="1">1</option>\n            <option class="select-item" value="5">5</option>\n            <option class="select-item" value="10">10</option>\n            <option class="select-item" value="20">20</option>\n            <option class="select-item" value="30">30</option>\n          </select>\n        </div>\n      </div>\n    '}}t.Settings=n},981:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0,s(580),t.Timer=class{constructor(){this.sec=0,this.min=0,this.resultTime=0,this.tick=()=>{this.sec++,this.sec>=60&&(this.min++,this.sec-=60),this.sec<10?this.min<10?this.element.innerHTML=`0${this.min}:0${this.sec}`:this.element.innerHTML=`${this.min}:0${this.sec}`:this.min<10?this.element.innerHTML=`0${this.min}:${this.sec}`:this.element.innerHTML=`${this.min}:${this.sec}`},this.Start=()=>{this.timerId=setInterval(this.tick,1e3)},this.Stop=()=>{this.timerId&&clearInterval(this.timerId),this.resultTime=this.sec+60*this.min},this.Clear=()=>{this.sec=0,this.min=0,this.timerId&&clearInterval(this.timerId),this.element.innerHTML=`0${this.min}:0${this.sec}`},this.element=document.createElement("div"),this.element.classList.add("timer"),this.timerId=null}}},432:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Wrapper=void 0;const i=s(583);class n extends i.BaseComponent{constructor(){super("div",["wrapper"])}}t.Wrapper=n},607:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),s(387);const n=s(752),a=s(170),r=i(s(48));window.player=new a.Player("","","",0,`${r.default}`);const o=document.querySelector("body");if(!o)throw Error("<body> element not found");window.app=new n.App(o),window.app.initPage();const l=[{name:"settings",component:window.app.settingsPage},{name:"game",component:window.app.gamePage},{name:"best-score",component:window.app.bestScorePage},{name:"indexeddb-test",component:window.app.indexedDbPage}],c={name:"default",component:window.app.aboutGamePage};window.addEventListener("hashchange",(()=>{const e=window.location.hash.slice(1);(l.find((t=>t.name===e))||c).component()}))},680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},48:(e,t,s)=>{e.exports=s.p+"assets/5fdcfa39728467149e6e.svg"}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,s),a.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),s(607)})();