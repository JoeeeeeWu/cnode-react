webpackJsonp([6,7],{342:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),c=o(u),f=n(343),s=o(f),d=n(296),p=o(d),b=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.left,o=e.right,r=e.leftClick,i=e.rightClick,a=n?"btnActive":null,l=o?"btnActive":null;return c.default.createElement(p.default,{transitionName:"down",transitionAppear:!0,transitionAppearTimeout:200,transitionEnterTimeout:200,transitionLeaveTimeout:200},c.default.createElement("header",{className:s.default.header,key:"header"},c.default.createElement("div",{className:s.default.left+" "+s.default[a],onClick:r},n),c.default.createElement("h2",{className:s.default.title},t),c.default.createElement("div",{className:s.default.right+" "+s.default[l],onClick:i},o)))}}]),t}(u.Component);t.default=b},343:function(e,t,n){var o=n(344);"string"==typeof o&&(o=[[e.id,o,""]]);n(283)(o,{});o.locals&&(e.exports=o.locals)},344:function(e,t,n){t=e.exports=n(282)(),t.push([e.id,".header__header-P1JXb{height:.4rem;line-height:.4rem;background-color:#383b45;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center}.header__header-P1JXb .iconfont{color:#383b45}.header__left-1LJ0R,.header__right-OV-TJ{width:.4rem;height:.4rem;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.header__btnActive-1M7qR{background-color:#66b32f}.header__title-2UExb{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}",""]),t.locals={header:"header__header-P1JXb",left:"header__left-1LJ0R",right:"header__right-OV-TJ",btnActive:"header__btnActive-1M7qR",title:"header__title-2UExb"}},378:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),f=r(c),s=n(178),d=n(342),p=r(d),b=n(379),h=r(b),m=n(225),_=n(309),g=r(_),y=n(381),x=o(y),v=n(296),k=r(v),w="https://cnodejs.org/api/v1/",E=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSubmit=n.handleSubmit.bind(n),n}return l(t,e),u(t,[{key:"handleSubmit",value:function(e){var t=this.props.getLogin,n=this.input.value.trim();e.preventDefault(),n?this.getLoginData(t,n):alert("请输入您的Access Token!")}},{key:"getLoginData",value:function(e,t){g.default.post(w+"accesstoken",{accesstoken:t}).then(function(n){e(n.data),localStorage.setItem("accesstoken",t),localStorage.setItem("loginname",n.data.loginname),m.hashHistory.push("/my")}).catch(function(e){console.log(e),alert("可能您的Access Token有误！")})}},{key:"render",value:function(){var e=this,t=f.default.createElement("i",{className:"iconfont icon-back"}),n=m.hashHistory.goBack;return f.default.createElement("div",{className:h.default.login},f.default.createElement("div",{className:h.default.headerContainer},f.default.createElement(p.default,{title:"登录",left:t,leftClick:n})),f.default.createElement("form",{className:h.default.form,onSubmit:this.handleSubmit},f.default.createElement(k.default,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},f.default.createElement("input",{ref:function(t){e.input=t},type:"text",placeholder:"请输入你的Access Token"}),f.default.createElement("button",{type:"submit"},"登录"))))}}]),t}(c.Component),O=function(e){return{getLogin:function(t){e(x.getLogin(t))}}};t.default=(0,s.connect)(null,O)(E)},379:function(e,t,n){var o=n(380);"string"==typeof o&&(o=[[e.id,o,""]]);n(283)(o,{});o.locals&&(e.exports=o.locals)},380:function(e,t,n){t=e.exports=n(282)(),t.push([e.id,".login__login-JU3QT{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100vh;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.login__headerContainer-1pjNa{width:100%;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.login__form-1exfe{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:90%}.login__form-1exfe button,.login__form-1exfe input{line-height:.35rem;margin-bottom:.25rem;border-radius:.05rem;width:100%;padding:.05rem .1rem;box-sizing:border-box}",""]),t.locals={login:"login__login-JU3QT",headerContainer:"login__headerContainer-1pjNa",form:"login__form-1exfe"}},381:function(e,t){"use strict";function n(e){return{type:"GET_LOGINDATA",loginData:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getLogin=n}});