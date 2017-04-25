<template lang="html">
  <div class="x-header bg-gray">
    <div class="status-bar"></div>
    <div class="header-title padding-rl-20">
      <div>
       <text class="iconfont font-dark back" @click="redirect('/homeView')" v-if="show_back">&#xe670;</text>
      </div>
      <div class="x-header-center">
        <text class="font-dark">{{title}}</text>
      </div>
      <div>
      <text class="iconfont font-dark" @click="redirect('/homeView')" v-if="show_search">&#xe606;</text>
        
      </div>
    </div>
  </div>
</template>

<script>
  const domModule = weex.requireModule("dom")
  const navigator = weex.requireModule("navigator")
  
  import * as config from '../config/config.js'
  var getBaseUrl = require("../config/baseUrl.js").getBaseURL
  
  export default {
    name: 'x-header',
    data: function() {
      return {
  
      }
    },
    created: function() {
      domModule.addRule("fontFace", {
        'fontFamily': 'iconfont',
        'src': `url('${config.iconfont_src}')`
      })
    },
    methods: {
      redirect: function(to) {
        var baseUrl = getBaseUrl(this);
        navigator.push({
          'url': baseUrl + to + '.js',
          animated: "true"
        }, function() {
  
        })
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
  }
</script>

<style lang="css">
  .status-bar {
    height: 40px;
    background-color: #454552;
  }
  
  .x-header {
    position: fixed;
    top: 0;
    left: 0;
    height: 120px;
    width: 750px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    background-color: #eff2f7;
  }
  
  .padding-rl-20 {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .header-title {
    height: 80px;
    color: #454552;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .x-header-center {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  
  }
  
  .bg-gray {
    background-color: #f7f7f7;
  }
  
  .iconfont {
    font-family: iconfont;
    font-size: 48px;
  }
  
  .font-dark {
    color: #454552;
  }
</style>
