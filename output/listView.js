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
	__vue_styles__.push(__webpack_require__(110)
	)

	/* script */
	__vue_exports__ = __webpack_require__(111)

	/* template */
	var __vue_template__ = __webpack_require__(112)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/listView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2ef66f60"
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
	var iconfont_src = exports.iconfont_src = 'http://at.alicdn.com/t/font_la3vhqq4fyo80k9.woff';

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	module.exports = {
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["listView"]
	  }, [_c('text', [_vm._v(" 商品列表")]), _c('scroller', {
	    staticClass: ["introduce-list", "bg-white"]
	  }, [_vm._m(0), _c('div', {
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
	  }))])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["introduce-header", "padding-tb-30"]
	  }, [_c('text', {
	    staticClass: ["text-center", "font-dark"]
	  }, [_vm._v("居家好物")])])
	}]}
	module.exports.render._withStripped = true

/***/ })

/******/ });