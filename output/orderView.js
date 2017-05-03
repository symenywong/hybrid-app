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
	__vue_styles__.push(__webpack_require__(54)
	)

	/* script */
	__vue_exports__ = __webpack_require__(55)

	/* template */
	var __vue_template__ = __webpack_require__(64)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/orderView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1d127234"
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
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

	module.exports = {
	  "progress": {
	    "backgroundColor": "#f7f7f7",
	    "width": 750
	  },
	  "progress-slider": {
	    "backgroundColor": "#D53642",
	    "width": 150,
	    "height": 4,
	    "marginLeft": 0
	  },
	  "orderView": {
	    "paddingTop": 120,
	    "backgroundColor": "#efeff4"
	  },
	  "x-tabbar": {
	    "backgroundColor": "#eff2f7",
	    "height": 80,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "tabbar-item": {
	    "flex": 1
	  },
	  "flex-center": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "flex-space-between": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "flex-start": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "flex-end": {
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "button": {
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "borderRadius": 4
	  },
	  "get-logistics": {
	    "marginRight": 30
	  },
	  "border-1px-b": {
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc"
	  },
	  "order-item-media": {
	    "width": 130,
	    "height": 130
	  },
	  "order-item-divider": {
	    "height": 20,
	    "backgroundColor": "#efeff4"
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "font-2x": {
	    "fontSize": 40
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
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "padding-tb-15": {
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "margin-tb-20": {
	    "marginTop": 20,
	    "marginBottom": 20
	  },
	  "margin-b-20": {
	    "marginBottom": 20
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "padding-rl-30": {
	    "paddingLeft": 30,
	    "paddingRight": 30
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
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _xHeader = __webpack_require__(12);

	var _xHeader2 = _interopRequireDefault(_xHeader);

	var _xTabbar = __webpack_require__(56);

	var _xTabbar2 = _interopRequireDefault(_xTabbar);

	var _tabbarItem = __webpack_require__(60);

	var _tabbarItem2 = _interopRequireDefault(_tabbarItem);

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navigator = weex.requireModule("navigator"); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
	var modal = weex.requireModule("modal");

	var getBaseUrl = __webpack_require__(7).getBaseURL;
	exports.default = {
	    name: 'orderView',
	    data: function data() {
	        return {
	            active: 0,
	            progress: 0,
	            tabbar: ['全部', '待付款', '待发货', '已发货', '待评价'],
	            order_data: {
	                '1-111': [{
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
	                }],
	                '1-222': [{
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }],
	                '1-333': [{
	                    name: '大头风扇',
	                    src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
	                    price: '119'
	                }, {
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }]
	            },
	            order_needPay: {
	                '1-222': [{
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }],
	                '1-333': [{
	                    name: '大头风扇',
	                    src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
	                    price: '119'
	                }, {
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }]
	            },
	            order_needSend: {
	                '1-111': [{
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
	                }],
	                '1-333': [{
	                    name: '大头风扇',
	                    src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
	                    price: '119'
	                }, {
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }]
	            },
	            order_needReceive: {
	                '1-111': [{
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
	                }],
	                '1-222': [{
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }]
	            },
	            order_needCommit: {
	                '1-222': [{
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }],
	                '1-333': [{
	                    name: '大头风扇',
	                    src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
	                    price: '119'
	                }, {
	                    name: '安睡慢回弹记忆绵床垫',
	                    src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
	                    price: '599'
	                }]
	            }
	        };
	    },
	    created: function created() {
	        domModule.addRule("fontFace", {
	            'fontFamily': 'iconfont',
	            'src': 'url(\'' + config.iconfont_src + '\')'
	        });
	    },
	    methods: {
	        redirect: function redirect(to) {
	            var baseUrl = getBaseUrl(this);
	            navigator.push({
	                url: baseUrl + to + '.js',
	                animated: 'true'
	            }, function () {});
	        },
	        go: function go(index) {
	            this.active = index;
	            this.progress = index * 150;
	        },
	        scroll: function scroll(e) {
	            var ratio = parseFloat(e.offsetXRatio);
	            this.progress = 150 * (this.active - 1) + 150 * -ratio;
	        },
	        change: function change(e) {
	            this.go(parseInt(e.index));
	        }
	    },
	    components: {
	        XHeader: _xHeader2.default,
	        XTabbar: _xTabbar2.default,
	        TabbarItem: _tabbarItem2.default
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(57)
	)

	/* script */
	__vue_exports__ = __webpack_require__(58)

	/* template */
	var __vue_template__ = __webpack_require__(59)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/x-tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7ed34160"
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
/* 57 */
/***/ (function(module, exports) {

	module.exports = {
	  "x-tabbar": {
	    "backgroundColor": "#f7f7f7",
	    "height": 80,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    name: 'x-tabbar',
	    data: function data() {
	        return {};
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-tabbar"]
	  }, [_vm._t("tabbar-item")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(61)
	)

	/* script */
	__vue_exports__ = __webpack_require__(62)

	/* template */
	var __vue_template__ = __webpack_require__(63)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/tabbar-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6b2b48b6"
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
/* 61 */
/***/ (function(module, exports) {

	module.exports = {
	  "tabbar-item": {
	    "flex": 1,
	    "height": 100,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "text-center": {
	    "textAlign": "center"
	  },
	  "color-dark": {
	    "color": "#454552"
	  },
	  "font-normal": {
	    "fontSize": 28
	  }
	}

/***/ }),
/* 62 */
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

	var modal = weex.requireModule("modal");

	exports.default = {
	    name: 'tabbar-item',
	    data: function data() {
	        return {};
	    },
	    methods: {
	        go: function go(e) {
	            this.$emit("tabbarClick", this.index);
	        }
	    },
	    props: {
	        title: String,
	        index: Number,
	        active: Number
	    }
	};
	module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["tabbar-item"],
	    on: {
	      "click": _vm.go
	    }
	  }, [_c('text', {
	    staticClass: ["text-center", "font-normal", "color-dark"],
	    style: {
	      color: _vm.index == _vm.active ? '#D53642' : '#454552',
	      'font-size': _vm.index == _vm.active ? '30px' : '28px'
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["orderView"]
	  }, [_c('x-header', {
	    attrs: {
	      "title": "我的订单",
	      "show_back": true
	    }
	  }), _c('x-tabbar', _vm._l((_vm.tabbar), function(item, index) {
	    return _c('tabbar-item', {
	      key: index,
	      attrs: {
	        "title": item,
	        "active": _vm.active,
	        "index": index
	      },
	      on: {
	        "tabbarClick": _vm.go
	      },
	      slot: "tabbar-item"
	    })
	  })), _c('div', {
	    staticClass: ["progress"]
	  }, [_c('div', {
	    staticClass: ["progress-slider"],
	    style: {
	      'margin-left': _vm.progress + 'px',
	      width: 750 / _vm.tabbar.length + 'px'
	    }
	  })]), (false) ? _c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "index": _vm.active
	    },
	    on: {
	      "scroll": _vm.scroll,
	      "change": _vm.change
	    }
	  }, _vm._l((_vm.banner), function(item, index) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["frame-media"],
	      attrs: {
	        "src": item.src
	      }
	    })])
	  })) : _vm._e(), (_vm.active == 0) ? _c('list', {
	    staticClass: ["order-lists"]
	  }, _vm._l((_vm.order_data), function(item, index) {
	    return _c('cell', {
	      staticClass: ["order-item", "bg-white"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-header", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"]
	    }, [_c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("订单编号:" + _vm._s(index))]), _c('text', {
	      staticClass: ["font-mini", "font-dark", "iconfont", "font-2x"]
	    }, [_vm._v("")])]), _c('div', {
	      staticClass: ["order-item-body", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('/orderDetailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-cell", "flex-start"]
	    }, _vm._l((item), function(item1, index1) {
	      return _c('image', {
	        staticClass: ["order-item-media"],
	        attrs: {
	          "src": item1.src
	        }
	      })
	    })), _c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("交易成功")])]), _vm._m(0, true), _c('div', {
	      staticClass: ["order-item-divider"]
	    })])
	  })) : _vm._e(), (_vm.active == 1) ? _c('list', {
	    staticClass: ["order-lists"]
	  }, _vm._l((_vm.order_needPay), function(item, index) {
	    return _c('cell', {
	      staticClass: ["order-item", "bg-white"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-header", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"]
	    }, [_c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("订单编号:" + _vm._s(index))]), _c('text', {
	      staticClass: ["font-mini", "font-dark", "iconfont", "font-2x"]
	    }, [_vm._v("")])]), _c('div', {
	      staticClass: ["order-item-body", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('/orderDetailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-cell", "flex-start"]
	    }, _vm._l((item), function(item1, index1) {
	      return _c('image', {
	        staticClass: ["order-item-media"],
	        attrs: {
	          "src": item1.src
	        }
	      })
	    })), _c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("交易成功")])]), _vm._m(1, true), _c('div', {
	      staticClass: ["order-item-divider"]
	    })])
	  })) : _vm._e(), (_vm.active == 2) ? _c('list', {
	    staticClass: ["order-lists"]
	  }, _vm._l((_vm.order_needSend), function(item, index) {
	    return _c('cell', {
	      staticClass: ["order-item", "bg-white"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-header", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"]
	    }, [_c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("订单编号:" + _vm._s(index))]), _c('text', {
	      staticClass: ["font-mini", "font-dark", "iconfont", "font-2x"]
	    }, [_vm._v("")])]), _c('div', {
	      staticClass: ["order-item-body", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('/orderDetailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-cell", "flex-start"]
	    }, _vm._l((item), function(item1, index1) {
	      return _c('image', {
	        staticClass: ["order-item-media"],
	        attrs: {
	          "src": item1.src
	        }
	      })
	    })), _c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("交易成功")])]), _vm._m(2, true), _c('div', {
	      staticClass: ["order-item-divider"]
	    })])
	  })) : _vm._e(), (_vm.active == 3) ? _c('list', {
	    staticClass: ["order-lists"]
	  }, _vm._l((_vm.order_needReceive), function(item, index) {
	    return _c('cell', {
	      staticClass: ["order-item", "bg-white"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-header", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"]
	    }, [_c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("订单编号:" + _vm._s(index))]), _c('text', {
	      staticClass: ["font-mini", "font-dark", "iconfont", "font-2x"]
	    }, [_vm._v("")])]), _c('div', {
	      staticClass: ["order-item-body", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('/orderDetailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-cell", "flex-start"]
	    }, _vm._l((item), function(item1, index1) {
	      return _c('image', {
	        staticClass: ["order-item-media"],
	        attrs: {
	          "src": item1.src
	        }
	      })
	    })), _c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("交易成功")])]), _vm._m(3, true), _c('div', {
	      staticClass: ["order-item-divider"]
	    })])
	  })) : _vm._e(), (_vm.active == 4) ? _c('list', {
	    staticClass: ["order-lists"]
	  }, _vm._l((_vm.order_needCommit), function(item, index) {
	    return _c('cell', {
	      staticClass: ["order-item", "bg-white"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-header", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"]
	    }, [_c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("订单编号:" + _vm._s(index))]), _c('text', {
	      staticClass: ["font-mini", "font-dark", "iconfont", "font-2x"]
	    }, [_vm._v("")])]), _c('div', {
	      staticClass: ["order-item-body", "padding-rl-20", "padding-tb-20", "border-1px-b", "flex-space-between"],
	      on: {
	        "click": function($event) {
	          _vm.redirect('/orderDetailView')
	        }
	      }
	    }, [_c('div', {
	      staticClass: ["order-item-cell", "flex-start"]
	    }, _vm._l((item), function(item1, index1) {
	      return _c('image', {
	        staticClass: ["order-item-media"],
	        attrs: {
	          "src": item1.src
	        }
	      })
	    })), _c('text', {
	      staticClass: ["font-mini", "font-dark"]
	    }, [_vm._v("交易成功")])]), _vm._m(4, true), _c('div', {
	      staticClass: ["order-item-divider"]
	    })])
	  })) : _vm._e()], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-item-footer", "padding-rl-20", "flex-end", "padding-tb-15"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "padding-tb-15", "button", "get-logistics", "font-dark"]
	  }, [_vm._v("追踪物流")]), _c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "font-dark", "padding-tb-15", "button"]
	  }, [_vm._v("评价有礼")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-item-footer", "padding-rl-20", "flex-end", "padding-tb-15"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "padding-tb-15", "button", "get-logistics", "font-dark"]
	  }, [_vm._v("追踪物流")]), _c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "font-dark", "padding-tb-15", "button"]
	  }, [_vm._v("评价有礼")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-item-footer", "padding-rl-20", "flex-end", "padding-tb-15"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "padding-tb-15", "button", "get-logistics", "font-dark"]
	  }, [_vm._v("追踪物流")]), _c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "font-dark", "padding-tb-15", "button"]
	  }, [_vm._v("评价有礼")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-item-footer", "padding-rl-20", "flex-end", "padding-tb-15"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "padding-tb-15", "button", "get-logistics", "font-dark"]
	  }, [_vm._v("追踪物流")]), _c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "font-dark", "padding-tb-15", "button"]
	  }, [_vm._v("评价有礼")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["order-item-footer", "padding-rl-20", "flex-end", "padding-tb-15"]
	  }, [_c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "padding-tb-15", "button", "get-logistics", "font-dark"]
	  }, [_vm._v("追踪物流")]), _c('text', {
	    staticClass: ["font-normal", "padding-rl-30", "font-dark", "padding-tb-15", "button"]
	  }, [_vm._v("评价有礼")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);