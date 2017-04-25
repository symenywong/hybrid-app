<template lang="html">
  <div class="cartView">
    <x-header title="购物车"></x-header>
    <scroller class="cart-content padding-rl-20">
      <div class="cart-items padding-tb-20 border-1px-b" v-for="item in 8">
        <x-radio class="cart-item padding-tb-30 cart-item-radio"></x-radio>
        <div class="cart-item cart-item-media">
          <image :src="cart_src" class="cart-item-image"></image>
        </div>
        <div class="cart-item cart-item-content">
          <text class="font-mini cart-item-title font-dark">YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010</text>
          <text class="font-mini cart-item-title font-dark">bn: 85230010</text>
        </div>
      </div>
    </scroller>
    <div class="bar-secondary border-1px-t">
      <x-radio class="padding-rl-30 cart-secondary-radio"></x-radio>
      <text class="cart-secondary-price active">¥999.00</text>
      <div class="cart-secondary-submit"><text class="color-white text-center">结算</text></div>
    </div>
    <x-navbar></x-navbar>
  </div>
</template>

<script>
  import XNavbar from '../components/x-navbar.vue'
  import XHeader from '../components/x-header.vue'
  import XRadio from '../include/x-radio.vue'
  import * as config from '../config/config.js'
  export default {
    name: 'cartView',
    data: function() {
      return {
        cart_src: config.baseUrl.image_url + '/images/products/product_4.jpg'
      }
    },
    components: {
      XNavbar,
      XHeader,
      XRadio
    }
  }
</script>

<style scoped>
  .cart-content {
    padding-bottom: 100px;
  }
  
  .cartView {
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
    padding-top: 120px;
  }
  
  .border-1px-b {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #dddddd;
  }
  
  .border-1px-t {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #dddddd;
  }
  
  .padding-tb-20 {
    padding-top: 20px;
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
  
  .padding-rl-30 {
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .cart-items {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .cart-item-content {
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .cart-item-image {
    width: 160px;
    height: 160px;
  }
  
  .font-mini {
    font-size: 28px;
  }
  
  .font-dark {
    color: #454552;
  }
  
  .active {
    color: #D53642;
  }
  
  .bar-secondary {
    background-color: #f7f7f7;
    position: fixed;
    bottom: 100px;
    width: 750px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .cart-secondary-radio {
    flex: 20;
    height:50px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .cart-secondary-price {
    flex: 40;
    text-align: right;
    padding-right: 30px;
  }
  
  .cart-secondary-submit {
    flex: 40;
    height: 100px;
    background-color: #FB4F5B;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .padding-tb-30 {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  
  .text-center {
    text-align: center;
  }
  
  .color-white {
    color: #fff;
  }
</style>
