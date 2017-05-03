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
	__vue_styles__.push(__webpack_require__(48)
	)

	/* script */
	__vue_exports__ = __webpack_require__(49)

	/* template */
	var __vue_template__ = __webpack_require__(50)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/orderConfirmView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-71a8cd58"
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
	var iconfont_src = exports.iconfont_src = 'http://at.alicdn.com/t/font_y2m3fkemd0lik9.ttf';

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getBaseURL = getBaseURL;
	function getBaseURL(vm) {
	    vm.dir = '';
	    // var bundleUrl = weex.config.bundleUrl;

	    // var nativeBase;
	    // var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0;
	    // var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    // if (isAndroidAssets) {
	    //     nativeBase = 'file://assets/';
	    // } else if (isiOSAssets) {
	    //     nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    // } else {
	    //     var host = '1.1.1.11:8080';
	    //     var matches = /\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);
	    //     if (matches && matches.length >= 2) {
	    //         host = matches[1];
	    //     }
	    //     nativeBase = 'http://' + host + '/dist/';
	    // }
	    // var h5Base = './weex.html?page=./dist/';
	    // // in Native
	    // var base = nativeBase;
	    // if (typeof window === 'object') {
	    //     // in Browser or WebView
	    //     base = h5Base;
	    // }
	    var base = '';
	    base = 'http://1.1.1.11:8080/output';
	    // base='http://192.168.3.13:8080/output' //192.168.3.13:8080 home
	    return base;
	}

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/x-header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-65325c0f"
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

/***/ 13:
/***/ (function(module, exports) {

	module.exports = {
	  "status-bar": {
	    "height": 40,
	    "backgroundColor": "#454552"
	  },
	  "x-header-left": {
	    "flex": 15
	  },
	  "x-header-right": {
	    "flex": 15
	  },
	  "x-header-center": {
	    "flex": 70,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "x-header": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "height": 120,
	    "width": 750,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "backgroundColor": "#eff2f7"
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "header-title": {
	    "height": 80,
	    "color": "#454552",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bg-gray": {
	    "backgroundColor": "#f7f7f7"
	  },
	  "iconfont": {
	    "fontFamily": "iconfont",
	    "fontSize": 48
	  },
	  "font-dark": {
	    "color": "#454552"
	  }
	}

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

	var domModule = weex.requireModule("dom");
	var navigator = weex.requireModule("navigator");

	var getBaseUrl = __webpack_require__(7).getBaseURL;

	exports.default = {
	  name: 'x-header',
	  data: function data() {
	    return {};
	  },
	  created: function created() {
	    domModule.addRule("fontFace", {
	      'fontFamily': 'iconfont',
	      'src': "url('" + config.iconfont_src + "')"
	    });
	  },
	  methods: {
	    redirect: function redirect(to) {
	      var baseUrl = getBaseUrl(this);
	      navigator.push({
	        'url': baseUrl + to + '.js',
	        animated: "true"
	      }, function () {});
	    },
	    back: function back() {
	      navigator.pop({
	        animated: "true"
	      }, function () {});
	    }
	  },
	  props: {
	    title: String,
	    show_back: {
	      default: false,
	      type: Boolean
	    },
	    show_search: {
	      default: false,
	      type: Boolean
	    }
	  }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-header", "bg-gray"]
	  }, [_c('div', {
	    staticClass: ["status-bar"]
	  }), _c('div', {
	    staticClass: ["header-title", "padding-rl-20"]
	  }, [_c('div', {
	    staticClass: ["x-header-left"]
	  }, [(_vm.show_back) ? _c('text', {
	    staticClass: ["iconfont", "font-dark", "back"],
	    on: {
	      "click": _vm.back
	    }
	  }, [_vm._v("")]) : _vm._e()]), _c('div', {
	    staticClass: ["x-header-center", "x-header-item"]
	  }, [_c('text', {
	    staticClass: ["font-dark"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["x-header-right"]
	  }, [(_vm.show_search) ? _c('text', {
	    staticClass: ["iconfont", "font-dark"],
	    on: {
	      "click": function($event) {
	        _vm.redirect('/homeView')
	      }
	    }
	  }, [_vm._v("")]) : _vm._e()])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	module.exports = {
	  "order-item-media": {
	    "width": 160,
	    "height": 160
	  },
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "textarea": {
	    "flex": 1,
	    "height": 300
	  },
	  "flex-space-between": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "order-item-cell": {
	    "width": 180
	  },
	  "order-item-content": {
	    "width": 530
	  },
	  "scroller": {
	    "paddingTop": 120
	  },
	  "flex-center": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "address-header": {
	    "flex": 20
	  },
	  "address-content": {
	    "flex": 75
	  },
	  "address-more": {
	    "width": 46
	  },
	  "icon-right": {
	    "fontSize": 40
	  },
	  "text-center": {
	    "textAlign": "center"
	  },
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "padding-t-20": {
	    "paddingTop": 20
	  },
	  "padding-b-20": {
	    "paddingBottom": 20
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "font-2x": {
	    "fontSize": 48
	  },
	  "color-dark": {
	    "color": "#454552"
	  },
	  "color-danger": {
	    "color": "#D53642"
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "margin-tb-10": {
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "def-address": {
	    "backgroundColor": "#fec8c9",
	    "color": "#FF7043",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderRadius": 4,
	    "marginRight": 20,
	    "textAlign": "center"
	  },
	  "border-1px-b": {
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#cccccc"
	  },
	  "bg-gray": {
	    "backgroundColor": "#efeff4"
	  },
	  "bg-white": {
	    "backgroundColor": "#ffffff"
	  },
	  "margin-b-20": {
	    "marginBottom": 20
	  },
	  "bar-detail": {
	    "position": "fixed",
	    "width": 750,
	    "bottom": 0,
	    "left": 0,
	    "flex": 1,
	    "backgroundColor": "#f7f7f7",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bar-detail-left": {
	    "flex": 60,
	    "paddingLeft": 30,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "bar-detail-right": {
	    "flex": 40
	  },
	  "bar-detail-item": {
	    "height": 100,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bg-danger": {
	    "backgroundColor": "#D53642"
	  },
	  "color-white": {
	    "color": "#ffffff"
	  },
	  "border-1px-t": {
	    "borderTopStyle": "solid",
	    "borderTopWidth": 1,
	    "borderTopColor": "#cccccc"
	  },
	  "border-1px-r": {
	    "borderRightStyle": "solid",
	    "borderRightWidth": 1,
	    "borderRightColor": "#cccccc"
	  }
	}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	var _xHeader = __webpack_require__(12);

	var _xHeader2 = _interopRequireDefault(_xHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

	var domModule = weex.requireModule("dom");
	var navigator = weex.requireModule("navigator");

	var getBaseUrl = __webpack_require__(7).getBaseURL;

	exports.default = {
	    name: 'orderConfirmView',
	    data: function data() {
	        return {
	            order_data: [{
	                name: '全棉针织纯色四件套',
	                src: config.baseUrl.image_url + '/images/netease-home/6634f9fb99d222eef1b690f136db1ccc.png',
	                price: '299'
	            }, {
	                name: '大头风扇',
	                src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
	                price: '119'
	            }, {
	                name: '安睡慢回弹记忆绵床垫',
	                src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                price: '599'
	            }]
	        };
	    },
	    created: function created() {
	        domModule.addRule("fontFace", {
	            'fontFamily': 'iconfont',
	            'src': "url('" + config.iconfont_src + "')"
	        });
	    },
	    methods: {
	        add_cart: function add_cart() {
	            this.redirect("/payMethodsView");
	        },
	        redirect: function redirect(to) {
	            var baseUrl = getBaseUrl(this);
	            navigator.push({
	                url: baseUrl + to + '.js',
	                animated: "true"
	            }, function () {});
	        }
	    },
	    components: {
	        XHeader: _xHeader2.default
	    }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["orderConfirmView"]
	  }, [_c('x-header', {
	    attrs: {
	      "title": "订单确认",
	      "show_back": true
	    }
	  }), _c('scroller', {
	    staticClass: ["scroller", "bg-gray"]
	  }, [_vm._m(0), _vm._m(1), _vm._m(2), _c('div', {
	    staticClass: ["order-list", "bg-white", "margin-b-20", "padding-rl-20"]
	  }, _vm._l((_vm.order_data), function(item, index) {
	    return _c('div', {
	      staticClass: ["order-item", "flex-center", "border-1px-b"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('/orderDetailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-cell"]
	    }, [_c('image', {
	      staticClass: ["order-item-media"],
	      attrs: {
	        "src": item.src
	      }
	    })]), _c('div', {
	      staticClass: ["order-item-content", "padding-rl-20", "padding-tb-15"]
	    }, [_c('text', {
	      staticClass: ["font-normal", "color-dark"]
	    }, [_vm._v(_vm._s(item.name))])])])
	  })), _c('div', {
	    staticClass: ["order-memo", "bg-white"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-dark", "padding-rl-20", "padding-tb-20", "border-1px-b"]
	  }, [_vm._v("留言/备注:")]), _c('textarea', {
	    staticClass: ["textarea", "font-normal", "color-dark", "padding-rl-20", "padding-tb-20"],
	    attrs: {
	      "placeholder": "请输入您的留言备注"
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["bar-detail", "border-1px-t"]
	  }, [_vm._m(3), _c('div', {
	    staticClass: ["bar-detail-right", "bar-detail-item", "bg-danger"],
	    on: {
	      "click": _vm.add_cart
	    }
	  }, [_c('text', {
	    staticClass: ["text-center", "color-white"]
	  }, [_vm._v("去付款")])])])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["address", "bg-white", "flex-center", "padding-tb-20", "margin-b-20", "padding-rl-20"]
	  }, [_c('div', {
	    staticClass: ["address-header"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "margin-tb-10", "color-dark"]
	  }, [_vm._v("王小明")]), _c('text', {
	    staticClass: ["font-normal", "color-dark", "def-address", "font-mini"]
	  }, [_vm._v("默认地址")])]), _c('div', {
	    staticClass: ["address-content"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "margin-tb-10", "color-danger"]
	  }, [_vm._v("18503009595")]), _c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("广东省深圳市宝安区****室***号")])]), _c('div', {
	    staticClass: ["address-more", "padding-tb-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "icon-right", "color-dark", "text-center", "iconfont"]
	  }, [_vm._v("")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["coupon-list", "bg-white", "padding-tb-20", "margin-b-20", "padding-rl-20"]
	  }, [_c('div', {
	    staticClass: ["coupon-item", "flex-space-between", "border-1px-b", "padding-b-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("优惠券: 未选择")]), _c('text', {
	    staticClass: ["iconfont", "color-dark"]
	  }, [_vm._v("")])]), _c('div', {
	    staticClass: ["coupon-item", "padding-t-20", "flex-space-between"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("礼品卡余额: ¥0.00")]), _c('text', {
	    staticClass: ["iconfont", "color-dark"]
	  }, [_vm._v("")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["margin-b-20", "padding-rl-20", "padding-tb-20", "bg-white"]
	  }, [_c('div', {
	    staticClass: ["coupon-item", "flex-space-between", "border-1px-b", "padding-b-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("商品合计")]), _c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("¥0.00")])]), _c('div', {
	    staticClass: ["coupon-item", "padding-tb-20", "border-1px-b", "flex-space-between"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("运费")]), _c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("¥0.00")])]), _c('div', {
	    staticClass: ["coupon-item", "padding-t-20", "flex-space-between"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("我要开发票")]), _c('text', {
	    staticClass: ["iconfont", "color-dark"]
	  }, [_vm._v("")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bar-detail-item", "bar-detail-left", "border-1px-r"]
	  }, [_c('text', {
	    staticClass: ["color-danger"]
	  }, [_vm._v("实付:¥")]), _c('text', {
	    staticClass: ["color-danger", "font-2x"]
	  }, [_vm._v("185.90")])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });