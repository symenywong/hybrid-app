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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/topicView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-c266c872"
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(12)
	)

	/* script */
	__vue_exports__ = __webpack_require__(13)

	/* template */
	var __vue_template__ = __webpack_require__(14)
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

/***/ 12:
/***/ (function(module, exports) {

	module.exports = {
	  "status-bar": {
	    "height": 40,
	    "backgroundColor": "#454552"
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
	  "header-title": {
	    "height": 80,
	    "color": "#454552",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "bg-gray": {
	    "backgroundColor": "#f7f7f7"
	  }
	}

/***/ }),

/***/ 13:
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

	exports.default = {
	  props: {
	    title: String
	  }
	};
	module.exports = exports["default"];

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-header", "bg-gray"]
	  }, [_c('div', {
	    staticClass: ["status-bar"]
	  }), _c('div', {
	    staticClass: ["header-title"]
	  }, [_c('text', {
	    staticClass: ["x-header-title"]
	  }, [_vm._v(_vm._s(_vm.title))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

	module.exports = {
	  "topicView": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "space-between",
	    "paddingBottom": 100,
	    "paddingTop": 120
	  },
	  "topic-header": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "topic-header-item": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "topic-header-media": {
	    "width": 220,
	    "height": 125,
	    "borderRadius": 4
	  },
	  "topic-item-avatar": {
	    "width": 62,
	    "height": 62,
	    "borderRadius": 31
	  },
	  "topic-item-header": {
	    "paddingLeft": 30,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "topic-item-cover": {
	    "width": 750,
	    "height": 420
	  },
	  "gray-divider": {
	    "height": 20
	  },
	  "color-dark": {
	    "color": "#454552"
	  },
	  "color-gray": {
	    "color": "#5f646e"
	  },
	  "bg-gray": {
	    "backgroundColor": "#efeff4"
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
	  "padding-b-20": {
	    "paddingBottom": 20
	  },
	  "padding-t-60": {
	    "paddingTop": 60
	  },
	  "margin-tb-20": {
	    "marginTop": 20,
	    "marginBottom": 20
	  },
	  "padding-tb-10": {
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "padding-t-10": {
	    "paddingTop": 10
	  },
	  "padding-tb-15": {
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "border-1px-b": {
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#cccccc"
	  },
	  "font-normal": {
	    "fontSize": 28
	  }
	}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _xHeader = __webpack_require__(11);

	var _xHeader2 = _interopRequireDefault(_xHeader);

	var _xNavbar = __webpack_require__(3);

	var _xNavbar2 = _interopRequireDefault(_xNavbar);

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'topicView',
	    data: function data() {
	        return {
	            topic_header: [{
	                src: config.baseUrl.image_url + '/images/topic/d943675462a06f817d33062d4eb059f5.jpg',
	                title: '严选推荐'
	            }, {
	                src: config.baseUrl.image_url + '/images/topic/dc1b671ad54e16339f1b26cfeec6a1ea.jpg',
	                title: '严选幕后'
	            }, {
	                src: config.baseUrl.image_url + '/images/topic/1de4da49367dd7c01af1f7a2b23b0237.jpg',
	                title: '丁磊推荐'
	            }],
	            topic_list: [{
	                title: '成就一室笋香',
	                subtitle: '20元饮食类目优惠券限时发放中',
	                cover: [{
	                    src: config.baseUrl.image_url + '/images/topic/14927695046601069.jpg'
	                }],
	                user: {
	                    name: '丁磊',
	                    avatar: config.baseUrl.image_url + '/images/topic/14927695155801070.png'
	                }
	            }, {
	                title: '治愈生活的满怀柔软',
	                subtitle: '太鼓抱枕的上架历程，是从失踪开始的。由于表面的绒感，最初它被安排在秋冬季上架。某...',
	                cover: [{
	                    src: config.baseUrl.image_url + '/images/topic/14927695046601069.jpg'
	                }],
	                user: {
	                    name: '居家组·多多',
	                    avatar: config.baseUrl.image_url + '/images/topic/14926748590030593.png'
	                }
	            }, {
	                title: '料理也要精细简单',
	                subtitle: '破壁料理机限时159元优惠价',
	                cover: [{
	                    src: config.baseUrl.image_url + '/images/topic/14925200530030186.jpg'
	                }],
	                user: {
	                    name: '丁磊',
	                    avatar: config.baseUrl.image_url + '/images/topic/14927695155801070.png'
	                }
	            }]
	        };
	    },
	    components: {
	        XNavbar: _xNavbar2.default,
	        XHeader: _xHeader2.default
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
	//
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
	    staticClass: ["topicView"]
	  }, [_c('scroller', [_c('x-header', {
	    attrs: {
	      "title": "专题"
	    }
	  }), _c('div', {
	    staticClass: ["topic-header", "padding-tb-20"]
	  }, _vm._l((_vm.topic_header), function(item, index) {
	    return _c('div', {
	      staticClass: ["topic-header-item"]
	    }, [_c('image', {
	      staticClass: ["topic-header-media"],
	      attrs: {
	        "src": item.src
	      }
	    })])
	  })), _c('div', {
	    staticClass: ["gray-divider", "bg-gray"]
	  }), _vm._l((_vm.topic_list), function(item, index) {
	    return _c('div', {
	      staticClass: ["border-1px-b"]
	    }, [_c('div', {
	      staticClass: ["topic-item-header", "padding-tb-20"]
	    }, [_c('image', {
	      staticClass: ["topic-item-avatar"],
	      attrs: {
	        "src": item.user.avatar
	      }
	    }), _c('text', {
	      staticClass: ["font-mini", "padding-t-10", "padding-rl-20"]
	    }, [_vm._v(_vm._s(item.user.name))])]), _c('div', {
	      staticClass: ["topic-item-body"]
	    }, [_c('image', {
	      staticClass: ["topic-item-cover"],
	      attrs: {
	        "src": item.cover[0].src
	      }
	    })]), _c('div', {
	      staticClass: ["topic-item-footer", "padding-rl-20"]
	    }, [_c('text', {
	      staticClass: ["color-dark", "padding-tb-20"]
	    }, [_vm._v(_vm._s(item.title))]), _c('text', {
	      staticClass: ["color-gray", "padding-b-20", "font-normal"]
	    }, [_vm._v(_vm._s(item.subtitle))])])])
	  })], 2), _c('x-navbar')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })

/******/ });