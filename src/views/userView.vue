<template lang="html">
  <div class="userView">
    <scroller>
      <div class="userView-header">
        <div class="user-avatar">
          <image :src="user_avatar" @click="redirect('/loginView')" class="avatar-media" style="width:140px;height:140px;"></image>
        </div>
        <div class="padding-tb-20" @click="redirect('/loginView')">
          <text class="login-guid">symeny</text>
        </div>
        <div @click="redirect('/loginView')">
          <text class="login-guid">登陆/注册</text>
        </div>
      </div>
      <div class="order-header border-1px-b padding-tb-20 padding-rl-20">
        <text class="font-dark font-normal">我的订单</text>
      </div>
      <div class="order-content padding-tb-20">
        <div class="order-item" v-for="(item,index) in order_item" @click="redirect('/orderView')">
          <text class="iconfont text-center font-5x font-gray" v-if="index==0">&#xe6bb;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==1">&#xe6c6;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==2">&#xe60c;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==3">&#xe73a;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==4">&#xe632;</text>
          <text class="padding-tb-10 text-center font-mini font-dark">{{item.title}}</text>
        </div>
      </div>
      <div class="order-header border-1px-b margin-t-20 padding-tb-20 padding-rl-20">
        <text class="font-dark font-normal">其他</text>
      </div>
      <div class="order-content-1 padding-tb-20">
        <div class="order-item-1 padding-tb-20" v-for="(item,index) in others">
          <text class="iconfont text-center font-5x font-gray" v-if="index==0">&#xe601;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==1">&#xe891;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==2">&#xe638;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==3">&#xe6ce;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==4">&#xe65d;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==5">&#xe624;</text>
          <text class="iconfont text-center font-5x font-gray" v-if="index==6">&#xe665;</text>
          <text class="padding-tb-10 text-center font-mini font-dark">{{item.title}}</text>
        </div>
      </div>
  
  
    </scroller>
    <x-navbar></x-navbar>
  </div>
</template>

<script>
  import XNavbar from '../components/x-navbar.vue'
  
  import * as config from '../config/config.js'
  
  const animation = weex.requireModule("animation")
  const domModule = weex.requireModule('dom');
  const navigator = weex.requireModule('navigator');
  const modal = weex.requireModule('modal');
  var getBaseUrl = require("../config/baseUrl.js").getBaseURL
  
  export default {
    name: 'userView',
    data: function() {
      return {
        user_avatar: config.baseUrl.image_url + '/images/slice/user_logo.jpg',
        order_item: [{
          title: '代付款',
          url: '/',
          icon: '&#xe6bb;',
          src: config.baseUrl.image_url + '/images/icons/needpay.png',
        }, {
          title: '待发货',
          url: '/',
          icon: '',
          src: config.baseUrl.image_url + '/images/icons/icon-order.png',
        }, {
          title: '已发货',
          url: '/',
          icon: '',
          src: config.baseUrl.image_url + '/images/icons/send.png',
        }, {
          title: '待评价',
          url: '/',
          icon: '',
          src: config.baseUrl.image_url + '/images/icons/icon-list.png',
        }, {
          title: '售后服务',
          url: '/',
          icon: '',
          src: config.baseUrl.image_url + '/images/icons/refund.png',
        }],
        others: [{
            title: '个人设置',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/setting.png',
          }, {
            title: '收货地址',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/location.png',
          }, {
            title: '我的卡券',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/location.png',
          }, {
            title: '礼品卡',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/location.png',
          },
          {
            title: '推广服务',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/flash.png',
          }, {
            title: '帮助服务',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/service.png',
          }, {
            title: '意见反馈',
            url: '/',
            icon: '',
            src: config.baseUrl.image_url + '/images/icons/service.png',
          }
        ]
      }
    },
    created: function() {
      //处理 iconfont 字体图标
      var domModule = weex.requireModule("dom");
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont",
        'src': `url('${config.iconfont_src}')`
      });
    },
    methods: {
      redirect: function(to) {
        var baseUrl = getBaseUrl(this);
        navigator.push({
          url: baseUrl + to + '.js',
          animated: "true"
        }, function() {
  
        })
      }
    },
    components: {
      XNavbar
    }
  }
</script>

<style scoped>
  .userView {
    background-color: #efeff4;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
  }
  
  .userView-header {
    height: 350px;
    background-color: #34314c;
    padding-top: 40px;
  }
  
  .user-avatar {
    margin-top: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .avatar-media {
    border-radius: 70px;
  }
  
  .padding-tb-20 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .padding-b-20 {
    padding-bottom: 20px;
  }
  
  .padding-rl-20 {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .padding-tb-10 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .login-guid {
    text-align: center;
    color: #fff;
  }
  
  .order-header {
    background-color: #fff;
  }
  
  .order-content {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    flex-wrap: wrap;
  }
  
  .order-item {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  
  .order-content-1 {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    flex-wrap: wrap;
  }
  
  .order-item-1 {
    width: 187px;
  }
  
  .order-item-icon {
    width: 80px;
    height: 80px;
  }
  
  .font-mini {
    font-size: 24px;
  }
  
  .border-1px-b {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #c9c9c9;
  }
  
  .margin-t-20 {
    margin-top: 20px;
  }
  
  .iconfont {
    font-family: iconfont;
  }
  
  .font-5x {
    font-size: 60px;
  }
  
  .font-gray {
    color: #5f646e;
  }
  
  .font-normal {
    font-size: 28px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .font-dark {
    color: #454552;
  }
</style>
