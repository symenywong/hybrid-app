<template lang="html">
  <div class="x-search">
    <div class="status-bar"></div>
    <div class="search-content padding-tb-15">
      <input type="text" placeholder="搜索商品" v-model="search" @focus="onfocus" @blur="onblur" class="search-input font-dark font-normal padding-rl-20"></input>
      <div v-if="focus" class="serach-btn" @click="submit_search"><text class="color-gray font-normal">搜索</text></div>
    </div>
  </div>
</template>

<script>
  import * as config from '../config/config.js'
  const modal = weex.requireModule("modal")
  
  export default {
    data: function() {
      return {
        focus: false,
        search:'',
        icon_search: config.baseUrl.image_url + '/images/icons/search.png',
        icon_clear: config.baseUrl.image_url + '/images/icons/clear.png',
        icon_category: config.baseUrl.image_url + '/images/icons/icon-category.png',
      }
    },
    created: function() {
  
    },
    methods: {
      onfocus: function() {
        this.focus = true;
        modal.toast({
          message: 'focus',
          duration: 0.8
        })
      },
      onblur: function() {
        //还原数据初始状态
        this.focus = false;
        this.search='';
        modal.toast({
          message: 'blur',
          duration: 0.8
        })
      },
      submit_search:function(){
        var self=this;
        modal.toast({
          message: self.search,
          duration: 0.8
        })
      }
    }
  }
</script>

<style scoped>
  .x-search {
    position: fixed;
    width: 750px;
    top: 0;
    left: 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    background-color: #fafafa;
  }
  
  .status-bar {
    height: 40px;
    background-color: #454552;
  }
  
  .search-content {
    padding-left: 30px;
    padding-right: 30px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }
  
  .search-input {
    height: 60px;
    background-color: #ededed;
    border-radius: 6px;
    flex:85;
    placeholder-color:#a0a0a0;
  }
  .serach-btn{
    flex:15;
    height: 60px;
    text-align:center;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }
  .padding-rl-20 {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .padding-tb-20 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .padding-tb-15 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  .font-normal {
    font-size: 28px;
  }
  
  .font-dark {
    color: #454552;
  }
  .color-gray{
    color:#5f646e;
  }
</style>
