<template lang="html">
  <div class="cartView">
    <x-header title="购物车"></x-header>
    <scroller class="cart-content padding-rl-20">
      <div class="cart-items padding-tb-20 border-1px-b" v-for="(item,index) in cart_data">
        <x-radio class="cart-item padding-tb-30 cart-item-radio"></x-radio>
        <div class="cart-item cart-item-media">
          <image :src="item.src" class="cart-item-image"></image>
        </div>
        <div class="cart-item cart-item-content">
          <div class="cart-item-title">
             <text class="font-mini font-dark">{{item.name}}</text>
             <text class="font-mini cart-item font-dark">×{{item.num}}</text>
          </div>
          <text class="font-mini cart-item-subtitle color-gray padding-tb-20">{{item.spec_info}}</text>
          <text class="font-mini cart-item-subtitle active">¥{{item.price}}</text>
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
        cart_src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
        cart_data: [{
          name: '全棉针织纯色四件套',
          price: '238.00',
          num: 1,
          spec_info: '白色',
          src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
        }, {
          name: '大头风扇',
          price: '238.00',
          num: 1,
          spec_info: '白色',
          src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
        }, {
          name: '安睡慢回弹记忆绵床垫',
          price: '238.00',
          num: 1,
          spec_info: '白色',
          src: config.baseUrl.image_url + '/images/netease-home/6634f9fb99d222eef1b690f136db1ccc.png',
        }, {
          name: '全棉贡缎纯色床单',
          price: '238.00',
          num: 1,
          spec_info: '白色',
          src: config.baseUrl.image_url + '/images/netease-home/255a4888161f9b4fe530cf319f14551d.png',
        }, {
          name: '日式蓬软太鼓抱枕',
          price: '238.00',
          num: 1,
          spec_info: '白色',
          src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
        },{
          name: '全棉贡缎纯色床单',
          price: '238.00',
          num: 1,
          spec_info: '白色',
          src: config.baseUrl.image_url + '/images/netease-home/255a4888161f9b4fe530cf319f14551d.png',
        }]
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
  .cart-item-radio{
    width:50px;
  }
  .cart-item-media{
    
    width:160px;
  }
  .cart-item-content {
    width:500px;
    flex: 1;
    height: 160px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
   
  }
  
  .cart-item-image {
    width: 160px;
    height: 160px;
  }
  
  .cart-item-title {
    width:500px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
   
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
    height: 50px;
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
  
  .color-gray {
    color: #a0a0a0;
  }
</style>
