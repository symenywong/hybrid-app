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
	__vue_styles__.push(__webpack_require__(51)
	)

	/* script */
	__vue_exports__ = __webpack_require__(52)

	/* template */
	var __vue_template__ = __webpack_require__(53)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/orderDetailView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-cb5a40d2"
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

/***/ 51:
/***/ (function(module, exports) {

	module.exports = {
	  "orderDetailView": {
	    "paddingTop": 120
	  },
	  "scroller": {
	    "backgroundColor": "#efeff4"
	  },
	  "order-media": {
	    "width": 180,
	    "height": 160
	  },
	  "order-item-content": {
	    "width": 530
	  },
	  "order-item-title": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "order-item": {
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "order-footer": {
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "flex-start": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "padding-rl-20": {
	    "paddingRight": 20,
	    "paddingLeft": 20
	  },
	  "padding-tb-15": {
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "padding-b-15": {
	    "paddingBottom": 15
	  },
	  "margin-b-20": {
	    "marginBottom": 20
	  },
	  "bg-white": {
	    "backgroundColor": "#ffffff"
	  },
	  "border-1px-b": {
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc"
	  },
	  "color-dark": {
	    "color": "#454552"
	  },
	  "color-gray": {
	    "color": "#a0a0a0"
	  },
	  "color-danger": {
	    "color": "#D53642"
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "button": {
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingRight": 15,
	    "paddingLeft": 15,
	    "borderRadius": 4,
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "marginRight": 20
	  },
	  "button-danger": {
	    "borderColor": "#D53642",
	    "color": "#D53642"
	  }
	}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _xHeader = __webpack_require__(12);

	var _xHeader2 = _interopRequireDefault(_xHeader);

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
	//

	exports.default = {
	    name: 'orderDetailView',
	    data: function data() {
	        return {
	            order_detail: {
	                product_data: [{
	                    name: '轻摔牛皮男士休闲鞋',
	                    price: '319.00',
	                    spec_info: '墨绿;41码',
	                    num: 1,
	                    src: config.baseUrl.image_url + '/images/netease/85566d138ea55e6aaeda2cda02df66f8.png'
	                }, {
	                    name: '网易智造安卓快充数据线',
	                    price: '0.00',
	                    spec_info: '1米',
	                    num: 1,
	                    src: config.baseUrl.image_url + '/images/netease/c09d784ba592e4fadabbaef6b2e95a95.png'
	                }]
	            }
	        };
	    },
	    components: {
	        XHeader: _xHeader2.default
	    }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["orderDetailView"]
	  }, [_c('x-header', {
	    attrs: {
	      "show_back": true,
	      "title": "订单详情"
	    }
	  }), _c('scroller', {
	    staticClass: ["scroller"]
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["margin-b-20", "bg-white"]
	  }, [_vm._l((_vm.order_detail.product_data), function(item, index) {
	    return _c('div', {
	      staticClass: ["order-item", "padding-rl-20", "padding-tb-20", "border-1px-b"]
	    }, [_c('image', {
	      staticClass: ["order-media"],
	      attrs: {
	        "src": item.src
	      }
	    }), _c('div', {
	      staticClass: ["order-item-content"]
	    }, [_c('div', {
	      staticClass: ["order-item-title", "padding-tb-15"]
	    }, [_c('text', {
	      staticClass: ["color-dark", "font-normal"]
	    }, [_vm._v(_vm._s(item.name))]), _c('text', {
	      staticClass: ["color-dark", "font-normal"]
	    }, [_vm._v("×" + _vm._s(item.num))])]), _c('text', {
	      staticClass: ["color-gray", "font-mini"]
	    }, [_vm._v(_vm._s(item.spec_info))]), _c('text', {
	      staticClass: ["color-dark", "font-normal", "padding-tb-15"]
	    }, [_vm._v("¥" + _vm._s(item.price))])])])
	  }), _vm._m(1)], 2), _vm._m(2), _vm._m(3)])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-header", "bg-white", "margin-b-20", "padding-tb-20", "padding-rl-20"]
	  }, [_c('text', {
	    staticClass: ["color-dark", "font-normal"]
	  }, [_vm._v("下单时间:2017.04.26 12:36")]), _c('text', {
	    staticClass: ["color-dark", "font-normal"]
	  }, [_vm._v("订单编号:11970750")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-footer", "padding-tb-15"]
	  }, [_c('text', {
	    staticClass: ["color-dark", "button", "font-normal", "check-logistics"]
	  }, [_vm._v("追踪物流")]), _c('text', {
	    staticClass: ["font-normal", "button", "confirm-receive", "button-danger"]
	  }, [_vm._v("确认收货")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["ship-info", "margin-b-20", "bg-white"]
	  }, [_c('div', {
	    staticClass: ["border-1px-b", "padding-rl-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-tb-15", "color-dark"]
	  }, [_vm._v("王小明     185****9595")]), _c('text', {
	    staticClass: ["font-normal", "padding-b-15", "color-dark"]
	  }, [_vm._v("广东省/深圳市/龙华新区/**街道**号")])]), _c('div', {
	    staticClass: ["pay-info", "border-1px-b", "padding-rl-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-tb-15", "color-dark"]
	  }, [_vm._v("支付方式:支付宝")]), _c('text', {
	    staticClass: ["font-normal", "color-dark"]
	  }, [_vm._v("商品合计:¥ 319.00")]), _c('text', {
	    staticClass: ["font-normal", "padding-tb-15", "color-dark"]
	  }, [_vm._v("运费:¥ 0.00")])]), _c('div', {
	    staticClass: ["padding-tb-20", "padding-rl-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "color-danger"]
	  }, [_vm._v("实付: ¥319.00")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["service-info", "padding-rl-20", "margin-b-20", "bg-white"]
	  }, [_c('text', {
	    staticClass: ["font-mini", "padding-tb-15", "color-gray"]
	  }, [_vm._v("服务时间")]), _c('div', {
	    staticClass: ["service-methods", "flex-start", "padding-tb-20"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "button", "color-dark"]
	  }, [_vm._v("在线客服")]), _c('text', {
	    staticClass: ["font-normal", "button", "color-dark"]
	  }, [_vm._v("电话客服")])])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });