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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(34)
	)

	/* script */
	__vue_exports__ = __webpack_require__(35)

	/* template */
	var __vue_template__ = __webpack_require__(44)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/homeView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-23d0e2a1"
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(4)
	)

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(8)
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
/* 4 */
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
/* 5 */
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
	//

	var event = weex.requireModule('event');
	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');
	var getBaseURL = __webpack_require__(7).getBaseURL;
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
	      var baseUrl = getBaseURL(this);
	      this.active_index = index;
	      navigator.push({
	        url: baseUrl + to + '.js',
	        animated: "true"
	      }, function () {});
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-navbar"]
	  }, _vm._l((_vm.navbar), function(item, index) {
	    return _c('div', {
	      staticClass: ["x-navbar-item"],
	      on: {
	        "click": function($event) {
	          _vm.redirect(item.url, index)
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

	module.exports = {
	  "homeView": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "space-between",
	    "paddingBottom": 100
	  },
	  "home": {
	    "backgroundColor": "#eff2f7"
	  },
	  "slider": {
	    "width": 750,
	    "height": 400
	  },
	  "indicator": {
	    "width": 750,
	    "height": 400,
	    "top": 160,
	    "itemColor": "#fff",
	    "itemSelectedColor": "#1ABC9C"
	  },
	  "image": {
	    "width": 750,
	    "height": 360
	  },
	  "slider-item": {
	    "width": 750,
	    "height": 360
	  },
	  "category-list": {
	    "flexDirection": "column"
	  },
	  "divider-title": {
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "category-image": {
	    "width": 245,
	    "height": 245
	  },
	  "category-media": {
	    "flex": 1
	  },
	  "category-list-row": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "flex": 1
	  },
	  "category-list-item": {
	    "width": 250,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": 10,
	    "marginBottom": 10,
	    "paddingLeft": 10,
	    "paddingRight": 10
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "subtitle": {
	    "fontSize": 24
	  },
	  "line-ellispse-2": {
	    "lines": 2,
	    "textOverflow": "ellipsis"
	  },
	  "slogen": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "slogen-item": {
	    "flex": 1
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
	  "margin-l-10": {
	    "marginLeft": 10
	  },
	  "margin-r-10": {
	    "marginRight": 10
	  },
	  "introduce-content": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "flex-start"
	  },
	  "introduce-item-media-box": {
	    "width": 345,
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "introduce-item": {
	    "width": 345,
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "introduce-item-media": {
	    "width": 300,
	    "height": 300
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
	  "introduce-item-desc": {
	    "width": 345,
	    "backgroundColor": "#fec8c9",
	    "color": "#FF7043"
	  }
	}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	var _divider = __webpack_require__(36);

	var _divider2 = _interopRequireDefault(_divider);

	var _xNavbar = __webpack_require__(3);

	var _xNavbar2 = _interopRequireDefault(_xNavbar);

	var _xTab = __webpack_require__(40);

	var _xTab2 = _interopRequireDefault(_xTab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var animation = weex.requireModule("animation"); //
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

	var modal = weex.requireModule("modal");
	var navigator = weex.requireModule('navigator');
	var getBaseURL = __webpack_require__(7).getBaseURL;

	exports.default = {
	  name: 'homeView',
	  created: function created() {
	    // var base = getBaseURL(this);
	  },
	  data: function data() {
	    return {
	      introduct_list: [{
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
	      }, {
	        name: '全棉贡缎纯色床单',
	        src: config.baseUrl.image_url + '/images/netease-home/255a4888161f9b4fe530cf319f14551d.png',
	        price: '99'
	      }, {
	        name: '日式蓬软太鼓抱枕',
	        src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
	        price: '29'
	      }, {
	        name: '皮毛一体多用长毛坐垫',
	        src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
	        price: '109'
	      }],
	      banner_list: [{
	        src: config.baseUrl.image_url + '/images/banner/brand_list.jpg'
	      }, {
	        src: config.baseUrl.image_url + '/images/banner/cat_area.jpg'
	      }, {
	        src: config.baseUrl.image_url + '/images/banner/11.jpg'
	      }],
	      category_list: [{
	        url: '',
	        src: config.baseUrl.image_url + '/images/products/product_1.jpg',
	        name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
	        price: '999.00'
	      }, {
	        url: '',
	        src: config.baseUrl.image_url + '/images/products/product_2.jpg',
	        name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
	        price: '999.00'
	      }, {
	        url: '',
	        src: config.baseUrl.image_url + '/images/products/product_3.jpg',
	        name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
	        price: '999.00'
	      }, {
	        url: '',
	        src: config.baseUrl.image_url + '/images/products/product_4.jpg',
	        name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
	        price: '999.00'
	      }, {
	        url: '',
	        src: config.baseUrl.image_url + '/images/products/product_5.jpg',
	        name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
	        price: '999.00'
	      }],
	      sliderList: [{
	        src: config.baseUrl.image_url + '/images/banner/5ebc2051ed15b73ccf472a7e1a058a56.jpg',
	        url: '#',
	        title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010'
	      }, {
	        src: config.baseUrl.image_url + '/images/banner/4ad37295b9d489bffd412fc9f1a267de.jpg',
	        url: '#',
	        title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010'
	      }, {
	        src: config.baseUrl.image_url + '/images/banner/8b9794d7191072b8155734f355f33ca1.jpg',
	        url: '#',
	        title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010'
	      }, {
	        src: config.baseUrl.image_url + '/images/banner/068f2183f6cbfcb1c2c3a9970afe01f5.jpg',
	        url: '#',
	        title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010'
	      }, {
	        src: config.baseUrl.image_url + '/images/banner/e4d42cb63d2e1954952b37214c05c99b.jpg',
	        url: '#',
	        title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010'
	      }]
	    };
	  },

	  components: {
	    Divider: _divider2.default,
	    XNavbar: _xNavbar2.default,
	    XTab: _xTab2.default
	  },
	  methods: {
	    redirect: function redirect(to) {
	      // modal.toast({
	      //   message: '视图跳转'
	      // })
	      //全局数据缓存当前 url
	      // if(index==this.active_index) return;
	      console.log(getBaseURL);

	      var baseUrl = getBaseURL(this);
	      console.log("*****************");
	      console.log(baseUrl);
	      navigator.push({
	        url: baseUrl + to + '.js',
	        animated: "true"
	      }, function () {});
	    }
	  }
	};
	module.exports = exports["default"];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(37)
	)

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(39)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/divider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6a3ab99c"
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
/* 37 */
/***/ (function(module, exports) {

	module.exports = {
	  "divider": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "divider-border": {
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flex": 0.3,
	    "height": 1,
	    "backgroundColor": "#aaaaaa"
	  },
	  "divider-text": {
	    "flex": 0.4,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	  data: function data() {
	    return {};
	  },
	  props: {
	    title: String
	  }
	};
	module.exports = exports["default"];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["divider"]
	  }, [_c('div', {
	    staticClass: ["divider-left-border", "divider-border"]
	  }), _c('div', {
	    staticClass: ["divider-text"]
	  }, [_c('text', [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["divider-right-border", "divider-border"]
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(41)
	)

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(43)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/x-tab.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-50a85afa"
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
/* 41 */
/***/ (function(module, exports) {

	module.exports = {
	  "x-tab": {
	    "height": 80,
	    "flex": 1,
	    "width": 750,
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-start"
	  },
	  "x-tab-item": {
	    "width": 100,
	    "flex": 1,
	    "backgroundColor": "#FF0000"
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = {
	  name: 'xtab',
	  data: function data() {
	    return {
	      tab_data: [{
	        title: '推荐',
	        url: ''
	      }, {
	        title: '限时购',
	        url: ''
	      }, {
	        title: '居家',
	        url: ''
	      }, {
	        title: '餐厨',
	        url: ''
	      }, {
	        title: '配件',
	        url: ''
	      }, {
	        title: '服装',
	        url: ''
	      }, {
	        title: '洗护',
	        url: ''
	      }, {
	        title: '婴童',
	        url: ''
	      }, {
	        title: '杂货',
	        url: ''
	      }, {
	        title: '饮食',
	        url: ''
	      }, {
	        title: '志趣',
	        url: ''
	      }]
	    };
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-tab"]
	  }, _vm._l((_vm.tab_data), function(item, index) {
	    return _c('div', {
	      staticClass: ["x-tab-item"]
	    }, [_c('text', [_vm._v(_vm._s(item.title))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["homeView"]
	  }, [_c('scroller', {
	    staticClass: ["home"]
	  }, [_c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "interval": "3000"
	    }
	  }, [_vm._l((_vm.sliderList), function(item) {
	    return _c('div', {
	      staticClass: ["slider-item"]
	    }, [_c('image', {
	      staticClass: ["image"],
	      staticStyle: {
	        width: "750px",
	        height: "400px"
	      },
	      attrs: {
	        "src": item.src,
	        "resize": "cover"
	      }
	    })])
	  }), _c('indicator', {
	    staticClass: ["indicator"]
	  })], 2), _vm._m(0), _c('div', {
	    staticClass: ["introduce-list", "bg-white", "margin-b-20"]
	  }, [_vm._m(1), _c('div', {
	    staticClass: ["introduce-content", "padding-rl-20"]
	  }, _vm._l((_vm.introduct_list), function(item, index) {
	    return _c('div', {
	      staticClass: ["introduce-item"],
	      style: {
	        'margin-right': index % 2 == 0 ? '10px' : '0',
	        'margin-left': index % 2 == 1 ? '10px' : '0'
	      },
	      on: {
	        "click": function($event) {
	          _vm.redirect('/detailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["bg-gray", "introduce-item-media-box"]
	    }, [_c('image', {
	      staticClass: ["introduce-item-media"],
	      attrs: {
	        "src": item.src
	      }
	    })]), _c('text', {
	      staticClass: ["font-mini", "introduce-item-desc", "padding-tb-15", "text-center"]
	    }, [_vm._v("5cm记忆绵的亲密包裹")]), _c('text', {
	      staticClass: ["introduce-item-name", "font-normal", "font-dark", "padding-tb-15"]
	    }, [_vm._v(_vm._s(item.name))]), _c('text', {
	      staticClass: ["introduce-item-price", "font-normal", "padding-b-15", "active"]
	    }, [_vm._v("¥" + _vm._s(item.price))])])
	  }))]), _c('div', {
	    staticClass: ["product-hots", "bg-white"]
	  }, [_vm._m(2), _c('div', {
	    staticClass: ["introduce-list"]
	  }, [_c('div', {
	    staticClass: ["introduce-content", "padding-rl-20", "bg-gray"]
	  }, _vm._l((_vm.category_list), function(item, index) {
	    return _c('div', {
	      staticClass: ["introduce-item", "bg-white", "margin-b-20"],
	      style: {
	        'margin-right': index % 2 == 0 ? '10px' : '0',
	        'margin-left': index % 2 == 1 ? '10px' : '0'
	      },
	      on: {
	        "click": function($event) {
	          _vm.redirect('/detailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["introduce-item-media-box"]
	    }, [_c('image', {
	      staticClass: ["introduce-item-media"],
	      attrs: {
	        "src": item.src
	      }
	    })]), _c('text', {
	      staticClass: ["introduce-item-name", "line-ellispse-2", "font-normal", "font-dark", "padding-rl-20", "padding-tb-15"]
	    }, [_vm._v(_vm._s(item.name))]), _c('text', {
	      staticClass: ["introduce-item-price", "font-normal", "padding-b-15", "", "padding-rl-20", "active"]
	    }, [_vm._v("¥" + _vm._s(item.price))])])
	  }))])])]), _c('x-navbar')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["slogen", "bg-white", "padding-tb-20", "margin-b-20"]
	  }, [_c('text', {
	    staticClass: ["slogen-item", "text-center", "font-dark", "font-normal"]
	  }, [_vm._v("自营品牌")]), _c('text', {
	    staticClass: ["slogen-item", "text-center", "font-dark", "font-normal"]
	  }, [_vm._v("30天无忧退货")]), _c('text', {
	    staticClass: ["slogen-item", "text-center", "font-dark", "font-normal"]
	  }, [_vm._v("48小时快速退款")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["introduce-header", "padding-tb-30"]
	  }, [_c('text', {
	    staticClass: ["text-center", "font-dark"]
	  }, [_vm._v("居家好物")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["introduce-header", "padding-tb-30"]
	  }, [_c('text', {
	    staticClass: ["text-center", "font-dark"]
	  }, [_vm._v("热销商品")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);