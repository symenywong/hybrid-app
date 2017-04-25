<template lang="html">
  <div class="homeView">
    <scroller class="home">
      <slider interval="3000" class="slider">
        <div class="slider-item" v-for="item in sliderList">
          <image :src="item.src" style="width: 750px;height:400px;" resize="cover" class="image"></image>
        </div>
        <indicator class="indicator"></indicator>
      </slider>
      <div class="slogen bg-white padding-tb-20 margin-b-20">
        <text class="slogen-item text-center font-dark font-normal">自营品牌</text>
        <text class="slogen-item text-center font-dark font-normal">30天无忧退货</text>
        <text class="slogen-item text-center font-dark font-normal">48小时快速退款</text>
      </div>
  
      <div class="introduce-list bg-white margin-b-20">
        <div class="introduce-header padding-tb-30"><text class="text-center font-dark">居家好物</text></div>
        <div class="introduce-content padding-rl-20">
          <div v-for="(item,index) in introduct_list" class="introduce-item" @click="redirect('/detailView')" :style="{'margin-right':index%2==0?'10px':'0','margin-left':index%2==1?'10px':'0'}">
            <div class="bg-gray introduce-item-media-box">
              <image class="introduce-item-media" :src="item.src"></image>
            </div>
            <text class="font-mini introduce-item-desc padding-tb-15 text-center">5cm记忆绵的亲密包裹</text>
            <text class="introduce-item-name font-normal font-dark padding-tb-15">{{item.name}}</text>
            <text class="introduce-item-price font-normal padding-b-15 active">¥{{item.price}}</text>
          </div>
        </div>
      </div>
      <div class="product-hots bg-white">
        <div class="introduce-header padding-tb-30"><text class="text-center font-dark">热销商品</text></div>
        <div class="introduce-list">
          <div class="introduce-content padding-rl-20 bg-gray">
            <div v-for="(item,index) in category_list" @click="redirect('/detailView')" class="introduce-item bg-white margin-b-20" :style="{'margin-right':index%2==0?'10px':'0','margin-left':index%2==1?'10px':'0'}">
              <div class="introduce-item-media-box">
                <image class="introduce-item-media" :src="item.src"></image>
              </div>
              <text class="introduce-item-name line-ellispse-2 font-normal font-dark padding-rl-20 padding-tb-15">{{item.name}}</text>
              <text class="introduce-item-price font-normal padding-b-15  padding-rl-20 active">¥{{item.price}}</text>
            </div>
          </div>
        </div>
      </div>
  
    </scroller>
    <x-navbar></x-navbar>
  </div>
</template>

<script>
  import * as config from '../config/config.js'
  
  const animation = weex.requireModule("animation")
  const modal = weex.requireModule("modal")
  const navigator = weex.requireModule('navigator')
  var getBaseURL = require('../config/baseUrl.js').getBaseURL
  
  import Divider from '../components/divider.vue'
  import XNavbar from '../components/x-navbar.vue'
  import XTab from '../components/x-tab.vue'
  
  export default {
    name: 'homeView',
    created: function() {
      // var base = getBaseURL(this);
    },
    data() {
      return {
        introduct_list: [{
          name: '全棉针织纯色四件套',
          src: config.baseUrl.image_url + '/images/netease-home/6634f9fb99d222eef1b690f136db1ccc.png',
          price: '299',
        }, {
          name: '大头风扇',
          src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
          price: '119',
        }, {
          name: '安睡慢回弹记忆绵床垫',
          src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
          price: '599',
        }, {
          name: '全棉贡缎纯色床单',
          src: config.baseUrl.image_url + '/images/netease-home/255a4888161f9b4fe530cf319f14551d.png',
          price: '99',
        }, {
          name: '日式蓬软太鼓抱枕',
          src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
          price: '29',
        }, {
          name: '皮毛一体多用长毛坐垫',
          src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
          price: '109',
        }],
        banner_list: [{
            src: config.baseUrl.image_url + '/images/banner/brand_list.jpg'
          },
          {
            src: config.baseUrl.image_url + '/images/banner/cat_area.jpg'
          },
          {
            src: config.baseUrl.image_url + '/images/banner/11.jpg'
          }
        ],
        category_list: [{
            url: '',
            src: config.baseUrl.image_url + '/images/products/product_1.jpg',
            name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
            price: '999.00',
          },
          {
            url: '',
            src: config.baseUrl.image_url + '/images/products/product_2.jpg',
            name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
            price: '999.00',
          },
          {
            url: '',
            src: config.baseUrl.image_url + '/images/products/product_3.jpg',
            name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
            price: '999.00',
          },
          {
            url: '',
            src: config.baseUrl.image_url + '/images/products/product_4.jpg',
            name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
            price: '999.00',
          },
          {
            url: '',
            src: config.baseUrl.image_url + '/images/products/product_5.jpg',
            name: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
            price: '999.00',
          }
        ],
        sliderList: [{
            src: config.baseUrl.image_url + '/images/banner/5ebc2051ed15b73ccf472a7e1a058a56.jpg',
            url: '#',
            title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
          },
          {
            src: config.baseUrl.image_url + '/images/banner/4ad37295b9d489bffd412fc9f1a267de.jpg',
            url: '#',
            title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
          }, {
            src: config.baseUrl.image_url + '/images/banner/8b9794d7191072b8155734f355f33ca1.jpg',
            url: '#',
            title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
          }, {
            src: config.baseUrl.image_url + '/images/banner/068f2183f6cbfcb1c2c3a9970afe01f5.jpg',
            url: '#',
            title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
          }, {
            src: config.baseUrl.image_url + '/images/banner/e4d42cb63d2e1954952b37214c05c99b.jpg',
            url: '#',
            title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
          }
        ]
      }
    },
    components: {
      Divider,
      XNavbar,
      XTab
    },
    methods: {
      redirect: function(to) {
        // modal.toast({
        //   message: '视图跳转'
        // })
        //全局数据缓存当前 url
        // if(index==this.active_index) return;
        console.log(getBaseURL);
        
        var baseUrl=getBaseURL(this);
        console.log("*****************");
        console.log(baseUrl);
        navigator.push({
          url: baseUrl+to+'.js',
          animated: "true"
        }, function() {})
      }
    },
  }
</script>

<style scoped>
  .homeView {
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
  }
  
  .home {
    background-color: #eff2f7;
  }
  
  .slider {
    width: 750px;
    height: 400px;
  }
  
  .indicator {
    width: 750px;
    height: 400px;
    top: 160px;
    item-color: #fff;
    item-selected-color: #1ABC9C;
  }
  
  .image {
    width: 750px;
    height: 360px;
  }
  
  .slider-item {
    width: 750px;
    height: 360px;
  }
  
  .category-list {
    flex-direction: column;
  }
  
  .divider-title {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .category-image {
    width: 245px;
    height: 245px;
  }
  
  .category-media {
    flex: 1;
  }
  
  .category-list {
    flex-direction: column;
  }
  
  .category-list-row {
    flex-direction: row;
    justify-content: flex-start;
    flex: 1;
  }
  
  .category-list-item {
    width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .font-mini {
    font-size: 24px;
  }
  
  .font-normal {
    font-size: 28px;
  }
  
  .subtitle {
    font-size: 24px;
  }
  
  .line-ellispse-2 {
    lines: 2;
    text-overflow: ellipsis;
  }
  
  .slogen {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .slogen-item {
    flex: 1;
  }
  
  .text-center {
    text-align: center;
  }
  
  .bg-white {
    background-color: #fff;
  }
  
  .padding-tb-30 {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  
  .padding-tb-20 {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .margin-tb-20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  .margin-b-20 {
    margin-bottom: 20px;
  }
  
  .padding-tb-15 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  .padding-b-15 {
    padding-bottom: 15px;
  }
  
  .padding-rl-20 {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .margin-l-10 {
    margin-left: 10px;
  }
  
  .margin-r-10 {
    margin-right: 10px;
  }
  
  .introduce-content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .introduce-item-media-box {
    width: 345px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  
  .introduce-item {
    width: 345px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .introduce-item-media {
    width: 300px;
    height: 300px;
  }
  
  .active {
    color: #D53642;
  }
  
  .bg-gray {
    background-color: #eff2f7;
  }
  
  .font-dark {
    color: #454552;
  }
  
  .introduce-item-desc {
    width: 345px;
    background-color: #fec8c9;
    color: #FF7043;
  }
</style>
