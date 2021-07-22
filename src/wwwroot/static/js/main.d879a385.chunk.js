(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(21),c=a.n(n),i=a(2),o=(a(27),a(19)),d=a(4),l=a(5),u=a(7),p=a(6),h=a(8),m=(a(28),a(14)),j=(a(29),a(30),a(0)),b=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={isPlay:!0},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"switch-container",children:[Object(j.jsx)("span",{className:"train"+(this.props.isPlay?" non-active":""),children:"Train"}),Object(j.jsxs)("label",{className:"switch",children:[Object(j.jsx)("input",{type:"checkbox",onChange:function(){return e.props.changeMode(e.state.isPlay)},className:"switch-input",checked:this.props.isPlay}),Object(j.jsx)("span",{className:"slider round"})]}),Object(j.jsx)("span",{className:"play"+(this.props.isPlay?"":" non-active"),children:"Play"})]})}}]),a}(r.a.Component),y=(a(32),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={isPlay:!0,startPressed:!0,repeatBtn:!0},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"play-btn-container",children:[Object(j.jsx)("button",{className:"start-btn"+(this.props.isPlay&&!this.props.startPressed?"":" hidden"),onClick:function(){return e.props.startPlay(e.state.startPressed)},children:"Start game"}),Object(j.jsx)("button",{className:"repeat-btn"+(this.props.startPressed&&this.props.isPlay?"":" hidden"),onClick:function(){return e.props.repeat(e.state.repeatBtn)},children:"Repeat"})]})}}]),a}(r.a.Component)),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).updateChecked=function(){!1===s.state.isChecked?s.setState({isChecked:!0}):s.setState({isChecked:!1})},s.state={isChecked:!1},s.updateViewState=s.updateViewState.bind(Object(m.a)(s)),s}return Object(l.a)(a,[{key:"updateViewState",value:function(e){e.target.classList.contains("menu-input")&&!1===this.state.isChecked?this.setState({isChecked:!0}):this.setState({isChecked:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("mousedown",this.updateViewState)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousedown",this.updateViewState)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"header-container",children:[Object(j.jsxs)("div",{className:"menuToggle",children:[Object(j.jsx)("input",{type:"checkbox",className:"menu-input",onChange:function(){return e.updateChecked},checked:this.state.isChecked}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsxs)("ul",{className:"menu"+(this.props.isPlay?" play-mode":""),children:[Object(j.jsx)(h.a,{to:"/",className:"menu-item",children:"Main Page"}),Object(j.jsx)(h.a,{to:"/cards/0",className:"menu-item",children:"Action (set A)"}),Object(j.jsx)(h.a,{to:"/cards/1",className:"menu-item",children:"Action (set B)"}),Object(j.jsx)(h.a,{to:"/cards/2",className:"menu-item",children:"Animal (set A)"}),Object(j.jsx)(h.a,{to:"/cards/3",className:"menu-item",children:"Animal (set B)"}),Object(j.jsx)(h.a,{to:"/cards/4",className:"menu-item",children:"Clothets"}),Object(j.jsx)(h.a,{to:"/cards/5",className:"menu-item",children:"Emotion"}),Object(j.jsx)(h.a,{to:"/cards/6",className:"menu-item",children:"Electronics"}),Object(j.jsx)(h.a,{to:"/cards/7",className:"menu-item",children:"Garage"})]})]}),Object(j.jsx)(b,{isPlay:this.props.isPlay,changeMode:this.props.changeMode})]}),Object(j.jsx)(y,{isPlay:this.props.isPlay,startPlay:this.props.startPlay,startPressed:this.props.startPressed,repeat:this.props.repeat,repeatBtn:this.props.repeatBtn})]})}}]),a}(r.a.Component),f=(a(38),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("footer",{className:"footer-container",children:[Object(j.jsx)("a",{href:"https://github.com/barmenski/",className:"git-link",children:" "}),Object(j.jsx)("span",{className:"year-span",children:"2021"}),Object(j.jsx)("a",{href:"https://rs.school/js/",className:"course-link",children:" "})]})}}]),a}(s.Component)),v="https://barmenski-english-for-kids.herokuapp.com",g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).state={error:null,category:[]},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/api/category")).then((function(e){return e.json()})).then((function(t){e.setState({category:t})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{isChecked:!0,changeMode:this.props.changeMode,isPlay:this.props.isPlay,startPlay:this.props.startPlay,startPressed:this.props.startPressed,repeat:this.props.repeat,repeatBtn:this.props.repeatBtn}),Object(j.jsx)("div",{className:"category-container container",children:this.state.category.map((function(t){return Object(j.jsxs)(h.a,{to:"/cards/".concat(t.url),className:"category-card"+(e.props.isPlay?" play-mode":""),children:[Object(j.jsx)("img",{src:"./"+t.image,alt:t.text}),t.text]},t.image)}))}),Object(j.jsx)(f,{})]})}}]),a}(s.Component),P=(a(39),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).categoryNumber=Number(s.props.match.params.cat_url),s.cardArray=[],s.arrLength=s.state.cards[s.categoryNumber].length,s.cardArrayMake=function(){for(var e=0;e<s.arrLength;e++)s.cardArray.push(s.state.cards[s.categoryNumber][e].audioSrc);s.cardArray.sort((function(){return Math.random()-.5}))},s.randomRead=function(){s.props.startPressed&&new Audio("../"+s.cardArray[0]).play()},s.repeat=function(){s.props.repeatBtn&&new Audio("../"+s.cardArray[0]).play()},s.mouseLeave=function(e){var t=document.querySelector('[data-translation="'.concat(e.translation,'"]')),a=document.querySelector('[data-word="'.concat(e.word,'"]'));if(t&&a){if(t.classList.contains("hidden"))return;t.classList.add("hidden"),a.classList.remove("hidden")}},s.onClickHandlerTrain=function(e){new Audio("../"+e.audioSrc).play();var t=document.querySelector('[data-spk-img="'.concat(e.word,'"]'));if(t){t.classList.remove("hidden"),setTimeout((function(){t.classList.add("hidden")}),1e3);var a=document.querySelector('[data-translation="'.concat(e.translation,'"]'));a&&a.classList.remove("hidden");var s=document.querySelector('[data-word="'.concat(e.word,'"]'));if(s){if(s.classList.contains("hidden"))return;s.classList.add("hidden")}}},s.onClickHandlerPlay=function(e){var t=document.querySelector(".play-btn-container"),a=document.querySelector('[data-url="../'.concat(e.audioSrc,'"]'));if(s.cardArray[0]===e.audioSrc){if(!(null===a||void 0===a?void 0:a.classList.contains("non-active"))){new Audio("../audio/correct.mp3").play(),a&&a.classList.add("non-active");var r=document.createElement("div");if(r.className="star-win",t&&t.prepend(r),s.cardArray.splice(0,1),0===s.cardArray.length)if(0===s.state.errorAmount){new Audio("../audio/success.mp3").play();var n=document.querySelector(".cards-container");n&&n.classList.add("hidden");var c=document.querySelector(".success__img");c&&c.classList.remove("hidden")}else{new Audio("../audio/failure.mp3").play();var i=document.querySelector(".cards-container");i&&i.classList.add("hidden");var o=document.querySelector(".failure__img");o&&o.classList.remove("hidden")}setTimeout(s.randomRead,500)}}else if(!(null===a||void 0===a?void 0:a.classList.contains("non-active"))){var d=document.createElement("div");d.className="star-lose",t&&t.prepend(d),new Audio("../audio/error.mp3").play(),s.setState({errorAmount:s.state.errorAmount+1})}},s.state={isPlay:!0,startPressed:!1,repeatBtn:!1,errorAmount:0,cards:[],error:null},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/api/cards")).then((function(e){return e.json()})).then((function(t){e.setState({cards:t})}),(function(t){e.setState({error:t})})),this.cardArrayMake(),this.randomRead(),this.repeat()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{isChecked:!0,changeMode:this.props.changeMode,isPlay:this.props.isPlay,startPlay:this.props.startPlay,startPressed:this.props.startPressed,repeat:this.props.repeat,repeatBtn:this.props.repeatBtn}),Object(j.jsx)("div",{className:"cards-container container",children:this.state.cards[this.categoryNumber].map((function(t){return Object(j.jsxs)("div",{className:"card",onClick:e.props.isPlay?function(){return e.onClickHandlerPlay(t)}:function(){return e.onClickHandlerTrain(t)},onMouseLeave:function(){return e.mouseLeave(t)},children:[Object(j.jsx)("img",{src:"../"+t.image,className:"card__img",alt:t.word,"data-url":"../"+t.audioSrc}),Object(j.jsx)("span",{className:"card-word"+(e.props.isPlay?" hidden":""),"data-word":t.word,children:t.word}),Object(j.jsx)("span",{className:"card-translation hidden","data-translation":t.translation,children:t.translation}),Object(j.jsx)("span",{className:"card-empty"+(e.props.isPlay?" play-mode":" hidden"),children:" "}),Object(j.jsx)("img",{src:"../img/speaker-icon.svg",alt:"speaker",className:"speaker-icon hidden","data-spk-img":t.word})]},t.word)}))}),Object(j.jsxs)("div",{className:"result-container",children:[Object(j.jsx)("img",{src:"../img/success.jpg",className:"success__img hidden",alt:"Success"}),Object(j.jsx)("img",{src:"../img/failure.jpg",className:"failure__img hidden",alt:"Failure"})]}),Object(j.jsx)(f,{})]})}}]),a}(r.a.Component)),x=(a(40),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={isPlay:!1,changeMode:!1,startPlay:!1,startPressed:!1,repeatBtn:!1},e.changeMode=function(){e.setState({startPressed:!1}),!1===e.state.isPlay?e.setState({isPlay:!0}):e.setState({isPlay:!1})},e.startPlay=function(){e.setState({startPressed:!0})},e.repeat=function(){e.setState({repeatBtn:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/category",component:function(){return Object(j.jsx)(g,{isPlay:e.state.isPlay,changeMode:e.changeMode,startPlay:e.startPlay,startPressed:e.state.startPressed,repeat:e.repeat,repeatBtn:e.state.repeatBtn})}}),Object(j.jsx)(i.a,{exact:!0,from:"/",to:"/category"}),Object(j.jsx)(i.b,{path:"/cards/:cat_url",component:function(t){return Object(j.jsx)(P,Object(o.a)(Object(o.a)({},t),{},{isPlay:e.state.isPlay,changeMode:e.changeMode,startPlay:e.startPlay,startPressed:e.state.startPressed,repeat:e.repeat,repeatBtn:e.state.repeatBtn}))}})]})})}}]),a}(r.a.Component)),k=Object(i.g)(x),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))},S=a(9),w=Object(S.a)();c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.c,{history:w,children:Object(j.jsx)(k,{})})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.d879a385.chunk.js.map