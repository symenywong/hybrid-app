<template lang="html">
  <div class="x-navbar">
    <div class="x-navbar-item" @click="redirect(item.url,index)" v-for="(item,index) in navbar">
      <text class="iconfont" v-if="index==0">&#xe6c5;</text>
      <text class="iconfont" v-if="index==1">&#xe63c;</text>
      <text class="iconfont" v-if="index==2">&#xe778;</text>
      <text class="iconfont" v-if="index==3">&#xe602;</text>
      <text class="iconfont" v-if="index==4">&#xe600;</text>
      <text class="x-navbar-item-title color-dark">{{item.title}}</text>
    </div>
  </div>
</template>

<script>
  import * as config from '../config/config.js'
  const domModule = weex.requireModule('dom');
  const event = weex.requireModule('event');
  const navigator = weex.requireModule('navigator');
  const modal = weex.requireModule('modal');
  var getBaseURL = require('../config/baseUrl.js').getBaseURL
  export default {
    data: function() {
      return {
        navbar: config.navbar_conf,
      }
    },
    created: function() {
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont",
        'src': `url('${config.iconfont_src}')`
      });
      console.log(this.navbar);
    },
    methods: {
      redirect: function(to, index) {
        // modal.toast({
        //   message: '视图跳转'
        // })
        //全局数据缓存当前 url
        // if(index==this.active_index) return;
        var baseUrl=getBaseURL(this);
        this.active_index = index;
        navigator.push({
          url: baseUrl+to+'.js',
          animated: "true"
        }, function() {})
      }
    }
  }
</script>

<style lang="css">
  .x-navbar {
    width: 750px;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100px;
    background-color: #f7f7f7;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #ccc;
  }
  
  .x-navbar-item {
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .x-navbar-item-title {
    font-size: 24px;
  }
  
  .x-navbar-item-media {
    width: 60px;
    height: 60px
  }
  
  .iconfont {
    font-family: iconfont;
    font-size: 50px;
    color: #5f646e;
  }
  
  .color-dark {
    color: #5f646e;
  }
</style>
