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
	__vue_styles__.push(__webpack_require__(20)
	)

	/* script */
	__vue_exports__ = __webpack_require__(21)

	/* template */
	var __vue_template__ = __webpack_require__(26)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/views/catView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a803aba4"
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
	var iconfont_src = exports.iconfont_src = 'http://at.alicdn.com/t/font_la3vhqq4fyo80k9.woff';

/***/ }),
/* 7 */
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
/* 8 */,
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
/* 20 */
/***/ (function(module, exports) {

	module.exports = {
	  "catView": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "space-between",
	    "paddingBottom": 100,
	    "paddingTop": 130,
	    "backgroundColor": "#ffffff"
	  },
	  "cat-content": {
	    "flex": 1,
	    "flexDirection": "row"
	  },
	  "cat-cover": {
	    "width": 528,
	    "height": 192,
	    "borderRadius": 4
	  },
	  "cat-cover-content": {
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "cat-item-cover": {
	    "width": 144,
	    "height": 144,
	    "marginLeft": 17
	  },
	  "cat-left-view": {
	    "flex": 25,
	    "backgroundColor": "#fafafa"
	  },
	  "border-1px-r": {
	    "borderRightStyle": "solid",
	    "borderRightWidth": 1,
	    "borderRightColor": "#cccccc"
	  },
	  "cat-left-items": {
	    "width": 180
	  },
	  "cat-right-view": {
	    "flex": 75
	  },
	  "cat-right-view-content": {
	    "flexDirection": "row",
	    "flexWrap": "wrap",
	    "justifyContent": "flex-start"
	  },
	  "cat-item": {
	    "width": 178
	  },
	  "font-mini": {
	    "fontSize": 24
	  },
	  "padding-tb-30": {
	    "paddingTop": 30,
	    "paddingBottom": 30
	  },
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "padding-t-60": {
	    "paddingTop": 60
	  },
	  "padding-tb-15": {
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "padding-l-20": {
	    "paddingLeft": 20
	  },
	  "padding-r-20": {
	    "paddingRight": 20
	  },
	  "padding-tb-10": {
	    "paddingTop": 10,
	    "paddingBottom": 10
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "border-1px-b": {
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#c9c9c9"
	  },
	  "text-center": {
	    "textAlign": "center"
	  },
	  "list-active": {
	    "color": "#FB4F5B"
	  },
	  "font-dark": {
	    "color": "#454552"
	  }
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _xNavbar = __webpack_require__(3);

	var _xNavbar2 = _interopRequireDefault(_xNavbar);

	var _xSearch = __webpack_require__(22);

	var _xSearch2 = _interopRequireDefault(_xSearch);

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'catView',
	  data: function data() {
	    return {
	      active_index: 0,
	      category: [{
	        title: '推荐',
	        cover: config.baseUrl.image_url + "/images/netease/fb670ff3511182833e5b035275e4ac09.png",
	        children: [{
	          title: '丁磊推荐',
	          cover: config.baseUrl.image_url + "/images/netease/fbee769af73c0f63f6120eb27ff3ce96.png"
	        }, {
	          title: '趣味粉系列',
	          cover: config.baseUrl.image_url + "/images/netease/87fc01e5876482d521ecca13aea42653.png"
	        }, {
	          title: '端午粽系列',
	          cover: config.baseUrl.image_url + "/images/netease/937cedd2224839f1d3622c74500ad12b.png"
	        }, {
	          title: '黑凤梨系列',
	          cover: config.baseUrl.image_url + "/images/netease/03aba83cd4cd55c2151856cc1e45770a.png"
	        }, {
	          title: '金生蛋',
	          cover: config.baseUrl.image_url + "/images/netease/1fc6a2f96e5200de39595319e89c86a7.png"
	        }, {
	          title: '送朋友',
	          cover: config.baseUrl.image_url + "/images/netease/cf4a950f63be398f7de4574baf1e7343.png"
	        }, {
	          title: '送宝贝',
	          cover: config.baseUrl.image_url + "/images/netease/db435de494ea203e6d218157ddd88b62.png"
	        }, {
	          title: '送爸妈',
	          cover: config.baseUrl.image_url + "/images/netease/0108081c97f92958578d3755a18959ca.png"
	        }, {
	          title: '送给她',
	          cover: config.baseUrl.image_url + "/images/netease/e93010a6dbe0a702a9b3288beab22d0a.png"
	        }, {
	          title: '送给他',
	          cover: config.baseUrl.image_url + "/images/netease/4d765e20e019374e6f452edd58b226d6.png"
	        }]
	      }, {
	        title: '居家',
	        cover: config.baseUrl.image_url + "/images/netease/e8bf0cf08cf7eda21606ab191762e35c.png",
	        children: [{
	          title: '被枕',
	          cover: config.baseUrl.image_url + "/images/netease/b43ef7cececebe6292d2f7f590522e05.png"
	        }, {
	          title: '床品件套',
	          cover: config.baseUrl.image_url + "/images/netease/81f671bd36bce05d5f57827e5c88dd1b.png"
	        }, {
	          title: '床垫',
	          cover: config.baseUrl.image_url + "/images/netease/d6e0e84961032fc70fd52a8d4d0fb514.png"
	        }, {
	          title: '地毯',
	          cover: config.baseUrl.image_url + "/images/netease/1611ef6458e244d1909218becfe87c4d.png"
	        }, {
	          title: '家具',
	          cover: config.baseUrl.image_url + "/images/netease/d5d41841136182bf49c1f99f5c452dd6.png"
	        }, {
	          title: '舒坐',
	          cover: config.baseUrl.image_url + "/images/netease/2e2fb4f2856a021bbcd1b4c8400f2b06.png"
	        }, {
	          title: '灯具',
	          cover: config.baseUrl.image_url + "/images/netease/f702dc399d14d4e1509d5ed6e57acd19.png"
	        }, {
	          title: '家饰',
	          cover: config.baseUrl.image_url + "/images/netease/79275db76b5865e6167b0fbd141f2d7e.png"
	        }, {
	          title: '宠物',
	          cover: config.baseUrl.image_url + "/images/netease/dae4d6e89ab8a0cd3e8da026e4660137.png"
	        }]
	      }, {
	        title: '餐厨',
	        cover: config.baseUrl.image_url + "/images/netease/3708dbcb35ad5abf9e001500f73db615.png",
	        children: [{
	          title: '锅具',
	          cover: config.baseUrl.image_url + "/images/netease/d2db0d1d0622c621a8aa5a7c06b0fc6d.png"
	        }, {
	          title: '刀铲',
	          cover: config.baseUrl.image_url + "/images/netease/555afbfe05dab48c1a3b90dcaf89b4f2.png"
	        }, {
	          title: '功能厨具',
	          cover: config.baseUrl.image_url + "/images/netease/5b94463017437467a93ae4af17c2ba4f.png"
	        }, {
	          title: '餐具',
	          cover: config.baseUrl.image_url + "/images/netease/695ed861a63d8c0fc51a51f42a5a993b.png"
	        }, {
	          title: '杯具',
	          cover: config.baseUrl.image_url + "/images/netease/ec53828a3814171079178a59fb2593da.png"
	        }, {
	          title: '茶具',
	          cover: config.baseUrl.image_url + "/images/netease/be3ba4056e274e311d1c23bd2931018d.png"
	        }, {
	          title: '置物保鲜',
	          cover: config.baseUrl.image_url + "/images/netease/04cd632e1589adcc4345e40e8ad75d2b.png"
	        }, {
	          title: '清洁',
	          cover: config.baseUrl.image_url + "/images/netease/3a40faaef0a52627357d98ceed7a3c45.png"
	        }, {
	          title: '厨房电器',
	          cover: config.baseUrl.image_url + "/images/netease/c09d784ba592e4fadabbaef6b2e95a95.png"
	        }]
	      }, {
	        title: '配件',
	        cover: config.baseUrl.image_url + "/images/netease/02f9a44d05c05c0dd439a5eb674570a2.png",
	        children: [{
	          title: '功能箱包',
	          cover: config.baseUrl.image_url + "/images/netease/0645dcda6172118f9295630c2a6f234f.png"
	        }, {
	          title: '双肩包',
	          cover: config.baseUrl.image_url + "/images/netease/506d19510c967ba137283035a93738a1.png"
	        }, {
	          title: '单肩包',
	          cover: config.baseUrl.image_url + "/images/netease/55f34f23ed31f31e1313ff33602f90cc.png"
	        }, {
	          title: '鞋',
	          cover: config.baseUrl.image_url + "/images/netease/85566d138ea55e6aaeda2cda02df66f8.png"
	        }, {
	          title: '靴',
	          cover: config.baseUrl.image_url + "/images/netease/59485f1aa100e4210e16175f3412fa41.png"
	        }, {
	          title: '拖鞋',
	          cover: config.baseUrl.image_url + "/images/netease/984ddb9671aab41651784ba55b2cbdcf.png"
	        }, {
	          title: '围巾件套',
	          cover: config.baseUrl.image_url + "/images/netease/6beb3fd67106e42dc0f026b173373d16.png"
	        }, {
	          title: '配饰',
	          cover: config.baseUrl.image_url + "/images/netease/57ce29ca06f592d65aabfa5f0f87ad43.png"
	        }, {
	          title: '数码',
	          cover: config.baseUrl.image_url + "/images/netease/c33b13875a86da535c935e3d454a6fd2.png"
	        }]
	      }, {
	        title: '服装',
	        cover: config.baseUrl.image_url + "/images/netease/622c8d79292154017b0cbda97588a0d7.png",
	        children: [{
	          title: '内裤',
	          cover: config.baseUrl.image_url + "/images/netease/0a7fe0a08c195ca2cf55d12cd3c30f09.png"
	        }, {
	          title: '内衣',
	          cover: config.baseUrl.image_url + "/images/netease/02fede55aba1bc6c9d7f7c01682f9e2d.png"
	        }, {
	          title: '袜子',
	          cover: config.baseUrl.image_url + "/images/netease/13f256bac02bb27d74e035ad25cbd375.png"
	        }, {
	          title: '外衣',
	          cover: config.baseUrl.image_url + "/images/netease/647f7c39eb7c353958274a59fd821d03.png"
	        }, {
	          title: '家居服',
	          cover: config.baseUrl.image_url + "/images/netease/5da102ea4c64081ce3a05a91c855fbc9.png"
	        }, {
	          title: '衬衫',
	          cover: config.baseUrl.image_url + "/images/netease/7927f8422c341f7353041a30d01045a2.png"
	        }, {
	          title: 'T恤',
	          cover: config.baseUrl.image_url + "/images/netease/505c9a5a794b79e85fef4654722b3447.png"
	        }, {
	          title: '丝袜',
	          cover: config.baseUrl.image_url + "/images/netease/4f8f86dfd1d4b46a9cf783b4980db47f.png"
	        }]
	      }, {
	        title: '洗护',
	        cover: config.baseUrl.image_url + "/images/netease/1526ab0f5982722adbc8726f9f2a338c.png",
	        children: [{
	          title: '毛巾',
	          cover: config.baseUrl.image_url + "/images/netease/c53d2dd5ba6b1cfb55bd42ea0783f051.png"
	        }, {
	          title: '香薰',
	          cover: config.baseUrl.image_url + "/images/netease/fc7764ff8e12d18f6c5881a32318ed16.png"
	        }, {
	          title: '美妆',
	          cover: config.baseUrl.image_url + "/images/netease/d6a7b9a2eb6af92d709429798a4ca3ea.png"
	        }, {
	          title: '面部护理',
	          cover: config.baseUrl.image_url + "/images/netease/babf6573f8acd53f21205a7577ec03e1.png"
	        }, {
	          title: '护发',
	          cover: config.baseUrl.image_url + "/images/netease/398375d0e39574c6e87273d328316186.png"
	        }, {
	          title: '日常清洁',
	          cover: config.baseUrl.image_url + "/images/netease/729638bb13997f9c4c435b41ce6ed910.png"
	        }, {
	          title: '用具',
	          cover: config.baseUrl.image_url + "/images/netease/4e3aebbd7ffef5bb250d19f13cb85620.png"
	        }]
	      }, {
	        title: '婴童',
	        cover: config.baseUrl.image_url + "/images/netease/9cc0b3e0d5a4f4a22134c170f10b70f2.png",
	        children: [{
	          title: '服饰',
	          cover: config.baseUrl.image_url + "/images/netease/004f5f96df4aeb0645abbd70c0637239.png"
	        }, {
	          title: '妈咪',
	          cover: config.baseUrl.image_url + "/images/netease/844e2f4dce94f71283840c141d4ca71b.png"
	        }, {
	          title: '寝居',
	          cover: config.baseUrl.image_url + "/images/netease/476995896abea91d3f2e9ec20d56bd8d.png"
	        }, {
	          title: '玩具',
	          cover: config.baseUrl.image_url + "/images/netease/34b3267efcddad09cd652f181d87aab0.png"
	        }, {
	          title: '婴童洗护',
	          cover: config.baseUrl.image_url + "/images/netease/f2e301b189befff1d99adf917ba8ce20.png"
	        }, {
	          title: '喂养',
	          cover: config.baseUrl.image_url + "/images/netease/6b6f1672fe041594245fe56a5dd80871.png"
	        }]
	      }, {
	        title: '杂货',
	        cover: config.baseUrl.image_url + "/images/netease/547853361d29a37282f377b9a755dd37.png",
	        children: [{
	          title: '文具',
	          cover: config.baseUrl.image_url + "/images/netease/e074795f61a83292d0f20eb7d124e2ac.png"
	        }, {
	          title: '收纳',
	          cover: config.baseUrl.image_url + "/images/netease/2a62f6c53f4ff089fa6a210c7a0c2e63.png"
	        }, {
	          title: '旅行',
	          cover: config.baseUrl.image_url + "/images/netease/81e18c6970a7809ee0d86f0545428aa4.png"
	        }, {
	          title: '雨具',
	          cover: config.baseUrl.image_url + "/images/netease/589da0f02917b8393197a43175764381.png"
	        }, {
	          title: '海外',
	          cover: config.baseUrl.image_url + "/images/netease/fd1de05d274222f1e56d057d2f2c20c6.png"
	        }, {
	          title: '口罩',
	          cover: config.baseUrl.image_url + "/images/netease/11d9700da759f2c962c2f6d9412ac2a1.png"
	        }, {
	          title: '唱片',
	          cover: config.baseUrl.image_url + "/images/netease/3b69079ea27f90b4f539e8c3b76680f5.png"
	        }, {
	          title: '户外',
	          cover: config.baseUrl.image_url + "/images/netease/833476fc3ecc30a7446279b787328775.png"
	        }, {
	          title: '节日礼物',
	          cover: config.baseUrl.image_url + "/images/netease/bbb6f0ab4f6321121250c12583b0ff9a.png"
	        }]
	      }, {
	        title: '饮食',
	        cover: config.baseUrl.image_url + "/images/netease/fb670ff3511182833e5b035275e4ac09.png",
	        children: [{
	          title: '糕点',
	          cover: config.baseUrl.image_url + "/images/netease/66ea1d6ad602a8e441af7cada93bdc7a.png"
	        }, {
	          title: '小食',
	          cover: config.baseUrl.image_url + "/images/netease/418f86049f957108a31ad55cec42c349.png"
	        }, {
	          title: '果干',
	          cover: config.baseUrl.image_url + "/images/netease/4cdbf6ae196671cca154fe16e152d8d4.png"
	        }, {
	          title: '炒货',
	          cover: config.baseUrl.image_url + "/images/netease/3972963a4b6f9588262d2a667f4c1c73.png"
	        }, {
	          title: '冲饮',
	          cover: config.baseUrl.image_url + "/images/netease/1e3d8f65c7c7811baccdfda6711cbfd5.png"
	        }, {
	          title: '茗茶',
	          cover: config.baseUrl.image_url + "/images/netease/cfeb623929f3936cc882ffc6a9a2e927.png"
	        }, {
	          title: '食材',
	          cover: config.baseUrl.image_url + "/images/netease/80db363e0687b1a65edc6e75c1b99726.png"
	        }]
	      }, {
	        title: '志趣',
	        cover: "",
	        children: [{
	          title: '魔兽世界',
	          cover: config.baseUrl.image_url + "/images/netease/becfba90e8a5c95d403b8a6b9bb77825.png"
	        }, {
	          title: '炉石传说',
	          cover: config.baseUrl.image_url + "/images/netease/b5af3f6bfcbeb459d6c448ba87f8cc35.png"
	        }, {
	          title: '守望先锋',
	          cover: config.baseUrl.image_url + "/images/netease/a562f05bf38f5ee478fefb81856aad3d.png"
	        }, {
	          title: '暗黑破坏神',
	          cover: config.baseUrl.image_url + "/images/netease/1e19e948de63a1d0895a8620250c441f.png"
	        }, {
	          title: '星际争霸',
	          cover: config.baseUrl.image_url + "/images/netease/7394ce778791ae8242013d6c974f47e0.png"
	        }, {
	          title: '风暴英雄',
	          cover: config.baseUrl.image_url + "/images/netease/ff1e28fb7151008f8dc46bbf8b357f63.png"
	        }, {
	          title: '夏日甜心',
	          cover: config.baseUrl.image_url + "/images/netease/2b8497fe583d3c9759128b2d76f89dfd.png"
	        }, {
	          title: '礼品卡',
	          cover: config.baseUrl.image_url + "/images/netease/1266f0767a3f67298a40574df0d177fb.png"
	        }]
	      }]
	    };
	  },
	  methods: {
	    change_index: function change_index(index) {
	      this.active_index == index ? null : this.active_index = index;
	    }
	  },
	  components: {
	    XNavbar: _xNavbar2.default,
	    XSearch: _xSearch2.default
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

	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(23)
	)

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
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
	__vue_options__.__file = "/Users/symeny/hybrid-app/src/components/x-search.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-760a4cac"
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
/* 23 */
/***/ (function(module, exports) {

	module.exports = {
	  "x-search": {
	    "position": "fixed",
	    "width": 750,
	    "top": 0,
	    "left": 0,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#cccccc",
	    "backgroundColor": "#fafafa"
	  },
	  "status-bar": {
	    "height": 40,
	    "backgroundColor": "#454552"
	  },
	  "search-content": {
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "search-input": {
	    "height": 60,
	    "backgroundColor": "#ededed",
	    "borderRadius": 6,
	    "flex": 85,
	    "placeholderColor": "#a0a0a0"
	  },
	  "serach-btn": {
	    "flex": 15,
	    "height": 60,
	    "textAlign": "center",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "padding-rl-20": {
	    "paddingLeft": 20,
	    "paddingRight": 20
	  },
	  "padding-tb-20": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "padding-tb-15": {
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "font-normal": {
	    "fontSize": 28
	  },
	  "font-dark": {
	    "color": "#454552"
	  },
	  "color-gray": {
	    "color": "#5f646e"
	  }
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var config = _interopRequireWildcard(_config);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var modal = weex.requireModule("modal"); //
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
	    return {
	      focus: false,
	      search: '',
	      icon_search: config.baseUrl.image_url + '/images/icons/search.png',
	      icon_clear: config.baseUrl.image_url + '/images/icons/clear.png',
	      icon_category: config.baseUrl.image_url + '/images/icons/icon-category.png'
	    };
	  },
	  created: function created() {},
	  methods: {
	    onfocus: function onfocus() {
	      this.focus = true;
	      modal.toast({
	        message: 'focus',
	        duration: 0.8
	      });
	    },
	    onblur: function onblur() {
	      //还原数据初始状态
	      this.focus = false;
	      this.search = '';
	      modal.toast({
	        message: 'blur',
	        duration: 0.8
	      });
	    },
	    submit_search: function submit_search() {
	      var self = this;
	      modal.toast({
	        message: self.search,
	        duration: 0.8
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["x-search"]
	  }, [_c('div', {
	    staticClass: ["status-bar"]
	  }), _c('div', {
	    staticClass: ["search-content", "padding-tb-15"]
	  }, [_c('input', {
	    staticClass: ["search-input", "font-dark", "font-normal", "padding-rl-20"],
	    attrs: {
	      "type": "text",
	      "placeholder": "搜索商品",
	      "value": (_vm.search)
	    },
	    on: {
	      "focus": _vm.onfocus,
	      "blur": _vm.onblur,
	      "input": function($event) {
	        _vm.search = $event.target.attr.value
	      }
	    }
	  }), (_vm.focus) ? _c('div', {
	    staticClass: ["serach-btn"],
	    on: {
	      "click": _vm.submit_search
	    }
	  }, [_c('text', {
	    staticClass: ["color-gray", "font-normal"]
	  }, [_vm._v("搜索")])]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["catView"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('x-search'), _c('div', {
	    staticClass: ["cat-content"]
	  }, [_c('list', {
	    staticClass: ["cat-left-view"]
	  }, _vm._l((_vm.category), function(item, index) {
	    return _c('cell', {
	      staticClass: ["cat-left-items"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      },
	      on: {
	        "click": function($event) {
	          _vm.change_index(index)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["font-normal", "padding-tb-30", "font-dark", "text-center"],
	      style: {
	        color: _vm.active_index == index ? '#FB4F5B' : '#333',
	        'font-weight': _vm.active_index == index ? '600' : '400',
	        'font-size': _vm.active_index == index ? '32px' : '28px'
	      }
	    }, [_vm._v(_vm._s(item.title))])])
	  })), _c('list', {
	    staticClass: ["cat-right-view"]
	  }, [_c('cell', {
	    staticClass: ["padding-tb-15", "cat-cover-content"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('image', {
	    staticClass: ["cat-cover"],
	    attrs: {
	      "src": _vm.category[_vm.active_index].cover
	    }
	  })]), _c('cell', {
	    staticClass: ["padding-tb-15", "cat-right-view-content"],
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((_vm.category[_vm.active_index].children), function(item) {
	    return _c('div', {
	      staticClass: ["cat-item"]
	    }, [_c('image', {
	      staticClass: ["cat-item-cover"],
	      attrs: {
	        "src": item.cover
	      }
	    }), _c('text', {
	      staticClass: ["text-center", "font-dark", "font-mini"]
	    }, [_vm._v(_vm._s(item.title))])])
	  }))])]), _c('x-navbar')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);