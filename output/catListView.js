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
	__vue_styles__.push(__webpack_require__(21)
	)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/catListView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-da26bf28"
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
/* 3 */,
/* 4 */,
/* 5 */,
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

	module.exports = {
	  "listView": {
	    "paddingTop": 130
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
	  "text-center": {
	    "textAlign": "center"
	  },
	  "bg-white": {
	    "backgroundColor": "#ffffff"
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
	  }
	}

/***/ }),
/* 22 */
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

	exports.default = {
	    name: 'listView',
	    data: function data() {
	        return {
	            list_data: [{
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
	            }, {
	                name: '日式蓬软太鼓抱枕',
	                src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
	                price: '29'
	            }, {
	                name: '皮毛一体多用长毛坐垫',
	                src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
	                price: '109'
	            }, {
	                name: '日式蓬软太鼓抱枕',
	                src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
	                price: '29'
	            }, {
	                name: '皮毛一体多用长毛坐垫',
	                src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
	                price: '109'
	            }]
	        };
	    },
	    components: {
	        XHeader: _xHeader2.default
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["listView"]
	  }, [_c('x-header', {
	    attrs: {
	      "title": "居家好物",
	      "show_back": true,
	      "show_search": true
	    }
	  }), _c('scroller', {
	    staticClass: ["introduce-list", "bg-white"]
	  }, [_c('div', {
	    staticClass: ["introduce-content", "padding-rl-20"]
	  }, _vm._l((_vm.list_data), function(item, index) {
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
	  }))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);