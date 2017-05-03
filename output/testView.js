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
	__vue_styles__.push(__webpack_require__(71)
	)

	/* script */
	__vue_exports__ = __webpack_require__(72)

	/* template */
	var __vue_template__ = __webpack_require__(73)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/testView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-18f0cf54"
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

/***/ 71:
/***/ (function(module, exports) {

	module.exports = {
	  "flex-center": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "tabbar": {
	    "height": 80
	  },
	  "tabbar-item": {
	    "flex": 1
	  },
	  "page-1": {
	    "backgroundColor": "#cccccc"
	  },
	  "page-2": {
	    "backgroundColor": "#0000FF"
	  },
	  "page-3": {
	    "backgroundColor": "#FF0000"
	  },
	  "progress-box": {
	    "backgroundColor": "#cccccc"
	  },
	  "progress": {
	    "height": 20,
	    "width": 250,
	    "backgroundColor": "#008000"
	  },
	  "slider": {
	    "width": 750,
	    "height": 400
	  },
	  "slider-media": {
	    "width": 750,
	    "height": 400
	  }
	}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	exports.default = {
	    name: 'testView',
	    data: function data() {
	        return {
	            index: 0,
	            progress: 0,
	            banner: [{
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
	            }]
	        };
	    },
	    methods: {
	        change: function change(e) {
	            console.log(e.index);
	            this.go(parseInt(e.index));
	        },
	        go: function go(index) {
	            this.index = index;
	            console.log(index);
	            this.progress = 250 * index;
	        },
	        scroll: function scroll(e) {
	            var ratio = parseFloat(e.offsetXRatio);
	            // console.log(ratio);
	            console.log(this.index);
	            this.progress = 250 * this.index + 250 * -ratio;
	            console.log(this.progress);
	        }
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

	module.exports = exports['default'];

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["testView"]
	  }, [_c('div', {
	    staticClass: ["tabbar", "flex-center"]
	  }, [_c('div', {
	    staticClass: ["tabbar-item", "flex-center", "page-1"],
	    on: {
	      "click": function($event) {
	        _vm.go(0)
	      }
	    }
	  }, [_c('text', [_vm._v("page1")])]), _c('div', {
	    staticClass: ["tabbar-item", "flex-center", "page-2"],
	    on: {
	      "click": function($event) {
	        _vm.go(1)
	      }
	    }
	  }, [_c('text', [_vm._v("page2")])]), _c('div', {
	    staticClass: ["tabbar-item", "flex-center", "page-3"],
	    on: {
	      "click": function($event) {
	        _vm.go(2)
	      }
	    }
	  }, [_c('text', [_vm._v("page3")])])]), _c('div', {
	    staticClass: ["progress-box"]
	  }, [_c('div', {
	    staticClass: ["progress"],
	    style: {
	      'margin-left': _vm.progress + 'px'
	    }
	  })]), _c('slider', {
	    staticClass: ["slider"],
	    attrs: {
	      "index": _vm.index
	    },
	    on: {
	      "change": _vm.change,
	      "scroll": _vm.scroll
	    }
	  }, _vm._l((_vm.banner), function(item, index) {
	    return _c('div', {
	      staticClass: ["frame"]
	    }, [_c('image', {
	      staticClass: ["slider-media"],
	      attrs: {
	        "src": item.src
	      }
	    })])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });