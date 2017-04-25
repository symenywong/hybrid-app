// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(113)
	)

	/* script */
	__vue_exports__ = __webpack_require__(114)

	/* template */
	var __vue_template__ = __webpack_require__(115)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/userView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7ed1a4e6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/x-navbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3a9bc7dc"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = {
	  "x-navbar": {
	    "width": 750,
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "height": 100,
	    "backgroundColor": "#f7f7f7",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderTopStyle": "solid",
	    "borderTopWidth": 1,
	    "borderTopColor": "#cccccc"
	  },
	  "x-navbar-item": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "x-navbar-item-title": {
	    "fontSize": 24
	  },
	  "x-navbar-item-media": {
	    "width": 60,
	    "height": 60
	  },
	  "iconfont": {
	    "fontFamily": "iconfont",
	    "fontSize": 50,
	    "color": "#5f646e"
	  },
	  "color-dark": {
	    "color": "#5f646e"
	  }
	}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var domModule = weex.requireModule('dom'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var event = weex.requireModule('event');
	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');
	exports.default = {
	  data: function data() {
	    return {
	      navbar: config.navbar_conf
	    };
	  },
	  created: function created() {
	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont",
	      'src': 'url(\'' + config.iconfont_src + '\')'
	    });
	    console.log(this.navbar);
	  },
	  methods: {
	    redirect: function redirect(to, index) {
	      // modal.toast({
	      //   message: '视图跳转'
	      // })
	      //全局数据缓存当前 url
	      // if(index==this.active_index) return;
	      this.active_index = index;
	      navigator.push({
	        url: to,
	        animated: "true"
	      }, function () {});
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var baseUrl = exports.baseUrl = {
	  image_url: 'http://120.77.222.209'
	};

	//导航配置
	var navbar_conf = exports.navbar_conf = [{
	  url: '/homeView',
	  iconfont: '',
	  src: baseUrl.image_url + '/images/icons/icon-phone.png',
	  title: '商城'
	}, {
	  url: '/topicView',
	  iconfont: '',
	  src: baseUrl.image_url + '/images/icons/icon-list.png',
	  title: '专题'
	}, {
	  url: '/catView',
	  iconfont: '',
	  src: baseUrl.image_url + '/images/icons/icon-list.png',
	  title: '分类'
	}, {
	  url: '/cartView',
	  iconfont: '',
	  src: baseUrl.image_url + '/images/icons/icon-car.png',
	  title: '购物车'
	}, {
	  url: '/userView',
	  iconfont: '',
	  src: baseUrl.image_url + '/images/icons/icon-wallet.png',
	  title: '用户中心'
	}];
	var iconfont_src = exports.iconfont_src = 'http://at.alicdn.com/t/font_la3vhqq4fyo80k9.woff';

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-navbar"]
	  }, _vm._l((_vm.navbar), function(item, index) {
	    return _c('div', {
	      staticClass: ["x-navbar-item"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('http://1.1.1.11:8080/output' + item.url + '.js', index)
	        }
	      }
	    }, [(index == 0) ? _c('text', {
	      staticClass: ["iconfont"]
	    }, [_vm._v("")]) : _vm._e(), (index == 1) ? _c('text', {
	      staticClass: ["iconfont"]
	    }, [_vm._v("")]) : _vm._e(), (index == 2) ? _c('text', {
	      staticClass: ["iconfont"]
	    }, [_vm._v("")]) : _vm._e(), (index == 3) ? _c('text', {
	      staticClass: ["iconfont"]
	    }, [_vm._v("")]) : _vm._e(), (index == 4) ? _c('text', {
	      staticClass: ["iconfont"]
	    }, [_vm._v("")]) : _vm._e(), _c('text', {
	      staticClass: ["x-navbar-item-title", "color-dark"]
	    }, [_vm._v(_vm._s(item.title))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

	module.exports = {
	  "userView": {
	    "backgroundColor": "#efeff4",
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "space-between",
	    "paddingBottom": 100
	  },
	  "userView-header": {
	    "height": 350,
	    "backgroundColor": "#34314c",
	    "paddingTop": 40
	  },
	  "user-avatar": {
	    "marginTop": 20,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "avatar-media": {
	    "borderRadius": 70
	  },
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "padding-b-20": {
	    "paddingBottom": 20
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "padding-tb-10": {
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "login-guid": {
	    "textAlign": "center",
	    "color": "#ffffff"
	  },
	  "order-header": {
	    "backgroundColor": "#ffffff"
	  },
	  "order-content": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "backgroundColor": "#ffffff",
	    "flexWrap": "wrap"
	  },
	  "order-item": {
	    "flex": 1,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "order-content-1": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "flex-start",
	    "backgroundColor": "#ffffff",
	    "flexWrap": "wrap"
	  },
	  "order-item-1": {
	    "width": 187
	  },
	  "order-item-icon": {
	    "width": 80,
	    "height": 80
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "border-1px-b": {
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#c9c9c9"
	  },
	  "margin-t-20": {
	    "marginTop": 20
	  },
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "font-5x": {
	    "fontSize": 60
	  },
	  "font-gray": {
	    "color": "#5f646e"
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "text-center": {
	    "textAlign": "center"
	  },
	  "font-dark": {
	    "color": "#454552"
	  }
	}

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _xNavbar = __webpack_require__(3);

	var _xNavbar2 = _interopRequireDefault(_xNavbar);

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule("animation");
	var domModule = weex.requireModule('dom');
	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');
	exports.default = {
	  name: 'userView',
	  data: function data() {
	    return {
	      user_avatar: config.baseUrl.image_url + '/images/slice/user_logo.jpg',
	      order_item: [{
	        title: '代付款',
	        url: '/',
	        icon: '&#xe6bb;',
	        src: config.baseUrl.image_url + '/images/icons/needpay.png'
	      }, {
	        title: '待发货',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/icon-order.png'
	      }, {
	        title: '已发货',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/send.png'
	      }, {
	        title: '待评价',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/icon-list.png'
	      }, {
	        title: '售后服务',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/refund.png'
	      }],
	      others: [{
	        title: '个人设置',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/setting.png'
	      }, {
	        title: '收货地址',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/location.png'
	      }, {
	        title: '我的卡券',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/location.png'
	      }, {
	        title: '礼品卡',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/location.png'
	      }, {
	        title: '推广服务',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/flash.png'
	      }, {
	        title: '帮助服务',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/service.png'
	      }, {
	        title: '意见反馈',
	        url: '/',
	        icon: '',
	        src: config.baseUrl.image_url + '/images/icons/service.png'
	      }]
	    };
	  },
	  created: function created() {
	    //处理 iconfont 字体图标
	    var domModule = weex.requireModule("dom");
	    domModule.addRule('fontFace', {
	      'fontFamily': "iconfont",
	      'src': 'url(\'' + config.iconfont_src + '\')'
	    });
	  },
	  components: {
	    XNavbar: _xNavbar2.default
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["userView"]
	  }, [_c('scroller', [_c('div', {
	    staticClass: ["userView-header"]
	  }, [_c('div', {
	    staticClass: ["user-avatar"]
	  }, [_c('image', {
	    staticClass: ["avatar-media"],
	    staticStyle: {
	      width: "140px",
	      height: "140px"
	    },
	    attrs: {
	      "src": _vm.user_avatar
	    }
	  })]), _vm._m(0), _vm._m(1)]), _vm._m(2), _c('div', {
	    staticClass: ["order-content", "padding-tb-20"]
	  }, _vm._l((_vm.order_item), function(item, index) {
	    return _c('div', {
	      staticClass: ["order-item"]
	    }, [(index == 0) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 1) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 2) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 3) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 4) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), _c('text', {
	      staticClass: ["padding-tb-10", "text-center", "font-mini", "font-dark"]
	    }, [_vm._v(_vm._s(item.title))])])
	  })), _vm._m(3), _c('div', {
	    staticClass: ["order-content-1", "padding-tb-20"]
	  }, _vm._l((_vm.others), function(item, index) {
	    return _c('div', {
	      staticClass: ["order-item-1", "padding-tb-20"]
	    }, [(index == 0) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 1) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 2) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 3) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 4) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 5) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), (index == 6) ? _c('text', {
	      staticClass: ["iconfont", "text-center", "font-5x", "font-gray"]
	    }, [_vm._v("")]) : _vm._e(), _c('text', {
	      staticClass: ["padding-tb-10", "text-center", "font-mini", "font-dark"]
	    }, [_vm._v(_vm._s(item.title))])])
	  }))]), _c('x-navbar')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["padding-tb-20"]
	  }, [_c('text', {
	    staticClass: ["login-guid"]
	  }, [_vm._v("symeny")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('text', {
	    staticClass: ["login-guid"]
	  }, [_vm._v("登陆/注册")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-header", "border-1px-b", "padding-tb-20", "padding-rl-20"]
	  }, [_c('text', {
	    staticClass: ["font-dark", "font-normal"]
	  }, [_vm._v("我的订单")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-header", "border-1px-b", "margin-t-20", "padding-tb-20", "padding-rl-20"]
	  }, [_c('text', {
	    staticClass: ["font-dark", "font-normal"]
	  }, [_vm._v("其他")])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });