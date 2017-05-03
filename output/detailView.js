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
	__vue_styles__.push(__webpack_require__(31)
	)

	/* script */
	__vue_exports__ = __webpack_require__(32)

	/* template */
	var __vue_template__ = __webpack_require__(33)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/detailView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-83d2e25a"
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

/***/ 31:
/***/ (function(module, exports) {

	module.exports = {
	  "close-box": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "position": "absolute",
	    "top": -40,
	    "right": 10,
	    "width": 80,
	    "height": 80,
	    "backgroundColor": "#D53642",
	    "borderRadius": 40
	  },
	  "close-btn": {
	    "color": "#ffffff"
	  },
	  "flex-start": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "flexWrap": "wrap"
	  },
	  "popup-header": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "popup-header-media": {
	    "width": 150,
	    "height": 150
	  },
	  "popup-header-content": {
	    "width": 580
	  },
	  "button": {
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "borderStyle": "solid",
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "marginRight": 20,
	    "borderRadius": 4,
	    "fontSize": 28,
	    "marginTop": 20
	  },
	  "popup": {
	    "position": "fixed",
	    "bottom": 0,
	    "height": 900,
	    "width": 750,
	    "backgroundColor": "#ffffff"
	  },
	  "frame-media": {
	    "width": 750,
	    "height": 750
	  },
	  "slider": {
	    "width": 750,
	    "height": 750
	  },
	  "indicator": {
	    "width": 750,
	    "height": 100,
	    "position": "absolute",
	    "top": 680,
	    "left": 0,
	    "itemColor": "#fff",
	    "itemSelectedColor": "#1ABC9C"
	  },
	  "scroller": {
	    "backgroundColor": "#efeff4"
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
	  "bar-detail-item": {
	    "flex": 1,
	    "height": 100,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bar-detail-left": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bar-detail-left-item": {
	    "flex": 1
	  },
	  "icon-cart": {
	    "height": 100,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "header": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "opacity": 0.5,
	    "paddingTop": 40
	  },
	  "header-item": {
	    "height": 80
	  },
	  "service": {
	    "width": 500,
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "service-item": {
	    "width": 250
	  },
	  "back": {
	    "flex": 20,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "spec-info-nav": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "right-btns": {
	    "flex": 80,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "detail-content-image": {
	    "width": 750,
	    "height": 240
	  },
	  "border-1px-b": {
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc"
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
	  },
	  "detailView": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "space-between",
	    "paddingBottom": 100
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "line-ellispse-2": {
	    "lines": 2,
	    "textOverflow": "ellipsis"
	  },
	  "text-center": {
	    "textAlign": "center"
	  },
	  "bg-white": {
	    "backgroundColor": "#ffffff"
	  },
	  "padding-tb-30": {
	    "paddingTop": 30,
	    "paddingBottom": 30
	  },
	  "padding-rl-30": {
	    "paddingRight": 30,
	    "paddingLeft": 30
	  },
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "margin-tb-20": {
	    "marginTop": 20,
	    "marginBottom": 20
	  },
	  "margin-b-20": {
	    "marginBottom": 20
	  },
	  "padding-b-20": {
	    "paddingBottom": 20
	  },
	  "padding-t-20": {
	    "paddingTop": 20
	  },
	  "padding-tb-15": {
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "padding-b-15": {
	    "paddingBottom": 15
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "padding-l-20": {
	    "marginLeft": 20
	  },
	  "margin-l-10": {
	    "marginLeft": 10
	  },
	  "margin-r-10": {
	    "marginRight": 10
	  },
	  "active": {
	    "color": "#D53642"
	  },
	  "bg-gray": {
	    "backgroundColor": "#eff2f7"
	  },
	  "font-dark": {
	    "color": "#454552"
	  },
	  "iconfont": {
	    "fontFamily": "iconfont"
	  },
	  "bg-danger": {
	    "backgroundColor": "#D53642"
	  },
	  "color-gray": {
	    "color": "#a0a0a0"
	  },
	  "color-warning": {
	    "color": "#ffb300"
	  },
	  "color-white": {
	    "color": "#ffffff"
	  },
	  "font-2x": {
	    "fontSize": 48
	  },
	  "font-1x": {
	    "fontSize": 36
	  }
	}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var domModule = weex.requireModule("dom"); //
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

	var navigator = weex.requireModule("navigator");
	var modal = weex.requireModule("modal");
	var getBaseUrl = __webpack_require__(7).getBaseURL;

	exports.default = {
	    name: 'detailView',
	    data: function data() {
	        return {
	            popup_show: false,
	            colors: ["红色", "白色", "粉色", "紫色", "蓝色", "黄色"],
	            sizes: ["36", "37", "38", "39", "40", "41", "42"],
	            banner_list: [{
	                src: config.baseUrl.image_url + '/images/detail/05645050f7c8df7b4a87994c3fd72475.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/52e1230341bde01128645c65650f601c.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/49b3a096adad4ba4228d5d4fc00eb85f.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/01460a9963bdecead79ce86c7df1e90a.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/ed12a0fc67eea2fec8a81dd044af28d2.jpg'
	            }],
	            detail_media: [{
	                src: config.baseUrl.image_url + '/images/detail/4fc7bbf24ca3aa7c7991dcdc27f64f26.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/99b0f7110b67307ab02f18673a460cd4.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/8b2ed3ac4084c4608ea951311dfa14e5.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/aa64cb95f94066a4de15083fe741bae4.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/0de1b826d70069e199b1a7bb0a9dcf20.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/b19d147f0edf0bcfd270c0aca6f138db.jpg'
	            }, {
	                src: config.baseUrl.image_url + '/images/detail/b9bf6fd8849795c9f3c5912898aa6493.jpg'
	            }]
	        };
	    },
	    created: function created() {
	        domModule.addRule('fontFace', {
	            'fontFamily': 'iconfont',
	            'src': "url('" + config.iconfont_src + "')"
	        });
	    },
	    methods: {
	        redirect: function redirect(to) {
	            var baseUrl = getBaseUrl(this);
	            navigator.push({
	                url: baseUrl + to + '.js',
	                animated: "true"
	            }, function () {});
	        },
	        back: function back() {
	            navigator.pop({
	                animated: "true"
	            }, function () {});
	        },
	        toggle_popup: function toggle_popup() {
	            this.popup_show = !this.popup_show;
	        },
	        add_cart: function add_cart() {
	            this.redirect('/orderConfirmView');
	        }
	    },
	    components: {}
	};
	module.exports = exports["default"];

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["detailView"]
	  }, [_c('div', {
	    staticClass: ["header", "padding-rl-30"]
	  }, [_c('div', {
	    staticClass: ["back", "header-item"]
	  }, [_c('text', {
	    staticClass: ["iconfont", "font-2x"],
	    on: {
	      "click": _vm.back
	    }
	  }, [_vm._v("")])]), _c('div', {
	    staticClass: ["right-btns", "header-item"]
	  }, [_c('text', {
	    staticClass: ["iconfont", "font-2x", "padding-rl-30"],
	    on: {
	      "click": function($event) {
	        _vm.redirect('/homeView')
	      }
	    }
	  }, [_vm._v("")]), _c('text', {
	    staticClass: ["iconfont", "font-2x"],
	    on: {
	      "click": function($event) {
	        _vm.redirect('/homeView')
	      }
	    }
	  }, [_vm._v("")])])]), _c('scroller', {
	    staticClass: ["scroller"]
	  }, [_c('slider', {
	    staticClass: ["slider"]
	  }, [_vm._l((_vm.banner_list), function(item, index) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["frame-media"],
	      attrs: {
	        "src": item.src
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2), _vm._m(0), _c('div', {
	    staticClass: ["border-1px-b", "bg-white", "padding-tb-30", "padding-rl-30", "spec-info-nav"],
	    on: {
	      "click": _vm.toggle_popup
	    }
	  }, [_c('text', {
	    staticClass: ["font-dark", "font-normal"]
	  }, [_vm._v("规格数量选择")]), _c('text', {
	    staticClass: ["iconfont"]
	  }, [_vm._v("")])]), _vm._m(1), _vm._m(2), _c('div', {
	    staticClass: ["detail-content", "bg-white"]
	  }, [_c('text', {
	    staticClass: ["padding-tb-30", "text-center", "font-dark"]
	  }, [_vm._v("商品详情")]), _vm._l((_vm.detail_media), function(item, index) {
	    return _c('image', {
	      staticClass: ["detail-content-image"],
	      attrs: {
	        "src": item.src
	      }
	    })
	  })], 2)]), _c('div', {
	    staticClass: ["bar-detail", "border-1px-t"]
	  }, [_vm._m(3), _vm._m(4), _c('div', {
	    staticClass: ["addcart", "bar-detail-item", "bg-danger"],
	    on: {
	      "click": _vm.add_cart
	    }
	  }, [_c('text', {
	    staticClass: ["text-center", "color-white"]
	  }, [_vm._v("加入购物车")])])]), (_vm.popup_show) ? _c('div', {
	    staticClass: ["popup", "border-1px-t"]
	  }, [_c('div', {
	    staticClass: ["close-box"],
	    on: {
	      "click": _vm.toggle_popup
	    }
	  }, [_c('text', {
	    staticClass: ["iconfont", "close-btn"]
	  }, [_vm._v("")])]), _c('div', {
	    staticClass: ["popup-header", "padding-tb-20", "border-1px-b"]
	  }, [_c('image', {
	    staticClass: ["popup-header-media", "padding-l-20"],
	    attrs: {
	      "src": _vm.banner_list[0].src
	    }
	  }), _vm._m(5)]), _c('text', {
	    staticClass: ["padding-rl-20", "padding-t-20", "color-dark", "font-normal"]
	  }, [_vm._v("颜色:")]), _c('div', {
	    staticClass: ["color-box", "flex-start", "padding-rl-20", "border-1px-b", "padding-b-20"]
	  }, _vm._l((_vm.colors), function(item) {
	    return _c('text', {
	      staticClass: ["button"]
	    }, [_vm._v(_vm._s(item))])
	  })), _c('text', {
	    staticClass: ["padding-rl-20", "padding-t-20", "color-dark", "font-normal"]
	  }, [_vm._v("尺码:")]), _c('div', {
	    staticClass: ["color-box", "flex-start", "padding-rl-20", "border-1px-b", "padding-b-20"]
	  }, _vm._l((_vm.sizes), function(item) {
	    return _c('text', {
	      staticClass: ["button"]
	    }, [_vm._v(_vm._s(item))])
	  })), _c('text', {
	    staticClass: ["padding-rl-20", "padding-t-20", "color-dark", "font-normal"]
	  }, [_vm._v("库存: 23 (件)")]), _vm._m(6)]) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["detail-desc", "padding-tb-20", "bg-white", "padding-rl-30", "border-1px-b"]
	  }, [_c('text', {
	    staticClass: ["font-dark"]
	  }, [_vm._v("安睡慢回弹记忆绵床垫")]), _c('text', {
	    staticClass: ["padding-tb-20", "font-mini", "color-gray"]
	  }, [_vm._v("5cm记忆绵的亲密包裹")]), _c('text', {
	    staticClass: ["active", "padding-b-20"]
	  }, [_vm._v("¥26.00~75.00")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["border-1px-b", "bg-white", "padding-tb-30", "padding-rl-30", "spec-info-nav"]
	  }, [_c('text', {
	    staticClass: ["font-dark", "font-normal"]
	  }, [_vm._v("1个促销")]), _c('text', {
	    staticClass: ["color-warning", "font-mini"]
	  }, [_vm._v("领取¥140抵价券,新品买2送1")]), _c('text', {
	    staticClass: ["iconfont"]
	  }, [_vm._v("")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["padding-tb-30", "bg-white", "padding-rl-30", "spec-info-nav", "margin-b-20"]
	  }, [_c('text', {
	    staticClass: ["font-dark", "font-normal"]
	  }, [_vm._v("服务")]), _c('div', {
	    staticClass: ["service"]
	  }, [_c('text', {
	    staticClass: ["service-item", "padding-tb-20", "color-gray", "font-mini"]
	  }, [_vm._v("48小时快速退款")]), _c('text', {
	    staticClass: ["service-item", "color-gray", "font-mini"]
	  }, [_vm._v("满88免邮费")]), _c('text', {
	    staticClass: ["service-item", "padding-tb-20", "color-gray", "font-mini"]
	  }, [_vm._v("自营品牌")]), _c('text', {
	    staticClass: ["service-item", "color-gray", "font-mini"]
	  }, [_vm._v("部分地区无法配送")])]), _c('text', {
	    staticClass: ["iconfont"]
	  }, [_vm._v("")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bar-detail-item", "bar-detail-left", "border-1px-r"]
	  }, [_c('div', {
	    staticClass: ["border-1px-r", "bar-detail-left-item", "icon-cart"]
	  }, [_c('text', {
	    staticClass: ["iconfont", "text-center", "font-1x", "font-dark"]
	  }, [_vm._v("")])]), _c('text', {
	    staticClass: ["iconfont", "bar-detail-left-item", "font-1x", "font-dark", "text-center", "icon-fav"]
	  }, [_vm._v("")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bar-detail-item"]
	  }, [_c('text', {
	    staticClass: ["text-center", "font-dark"]
	  }, [_vm._v("立即购买")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["popup-header-content", "padding-l-20"]
	  }, [_c('text', {
	    staticClass: ["font-dark"]
	  }, [_vm._v("安睡慢回弹记忆绵床垫")]), _c('text', {
	    staticClass: ["padding-tb-20", "font-mini", "color-gray"]
	  }, [_vm._v("5cm记忆绵的亲密包裹")]), _c('text', {
	    staticClass: ["active", "padding-b-20"]
	  }, [_vm._v("¥26.00~75.00")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bar-detail", "border-1px-t"]
	  }, [_c('div', {
	    staticClass: ["bar-detail-item", "bar-detail-left", "border-1px-r"]
	  }, [_c('div', {
	    staticClass: ["border-1px-r", "bar-detail-left-item", "icon-cart"]
	  }, [_c('text', {
	    staticClass: ["iconfont", "text-center", "font-1x", "font-dark"]
	  }, [_vm._v("")])]), _c('text', {
	    staticClass: ["iconfont", "bar-detail-left-item", "font-1x", "font-dark", "text-center", "icon-fav"]
	  }, [_vm._v("")])]), _c('div', {
	    staticClass: ["bar-detail-item"]
	  }, [_c('text', {
	    staticClass: ["text-center", "font-dark"]
	  }, [_vm._v("立即购买")])]), _c('div', {
	    staticClass: ["addcart", "bar-detail-item", "bg-danger"]
	  }, [_c('text', {
	    staticClass: ["text-center", "color-white"]
	  }, [_vm._v("加入购物车")])])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });