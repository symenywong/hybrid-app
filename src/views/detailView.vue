<template>
    <div class="detailView">
        <div class="header padding-rl-30">
            <div class="back header-item"><text @click="back" class="iconfont font-2x">&#xe670;</text></div>
            <div class="right-btns header-item">
                <text @click="redirect('/homeView')" class="iconfont font-2x padding-rl-30">&#xe6c5;</text>
                <text @click="redirect('/homeView')" class="iconfont font-2x">&#xe65d;</text>
            </div>
        </div>
        <scroller class="scroller">
            <slider class="slider">
                <div class="frame" v-for="(item,index) in banner_list">
                    <image :src="item.src" class="frame-media"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
            <div class="detail-desc padding-tb-20 bg-white padding-rl-30 border-1px-b">
                <text class="font-dark">安睡慢回弹记忆绵床垫</text>
                <text class="padding-tb-20 font-mini color-gray">5cm记忆绵的亲密包裹</text>
                <text class="active padding-b-20">¥26.00~75.00</text>
            </div>
            <div class="border-1px-b bg-white padding-tb-30 padding-rl-30 spec-info-nav" @click="toggle_popup">
                <text class="font-dark font-normal">规格数量选择</text>
                <text class="iconfont">&#xe6da;</text>
            </div>
            <div class="border-1px-b bg-white padding-tb-30 padding-rl-30 spec-info-nav">
                <text class="font-dark font-normal">1个促销</text>
                <text class="color-warning font-mini">领取¥140抵价券,新品买2送1</text>
                <text class="iconfont">&#xe6da;</text>
            </div>
            <div class="padding-tb-30 bg-white padding-rl-30 spec-info-nav margin-b-20">
                <text class="font-dark font-normal">服务</text>
                <div class="service">
                    <text class="service-item padding-tb-20 color-gray font-mini">48小时快速退款</text>
                    <text class="service-item color-gray font-mini">满88免邮费</text>
                    <text class="service-item padding-tb-20 color-gray font-mini">自营品牌</text>
                    <text class="service-item color-gray font-mini">部分地区无法配送</text>
                </div>
                <text class="iconfont">&#xe6da;</text>
            </div>
            <div class="detail-content bg-white">
                <text class="padding-tb-30 text-center font-dark">商品详情</text>
                <image class="detail-content-image" :src="item.src" v-for="(item,index) in detail_media"></image>
            </div>
        </scroller>
        <div class="bar-detail border-1px-t">
            <div class="bar-detail-item bar-detail-left border-1px-r">
                <div class="border-1px-r bar-detail-left-item icon-cart">
                    <text class="iconfont text-center font-1x font-dark">&#xe602;</text>
                </div>
                <text class="iconfont bar-detail-left-item font-1x font-dark text-center icon-fav">&#xe623;</text>
            </div>
            <div class="bar-detail-item">
                <text class="text-center font-dark">立即购买</text>
            </div>
            <div class="addcart bar-detail-item bg-danger" @click="add_cart">
                <text class="text-center color-white">加入购物车</text>
            </div>
        </div>
        <div class="popup border-1px-t" v-if="popup_show">
            <div class="close-box" @click="toggle_popup">
                <text class="iconfont close-btn">&#xe60b;</text>
            </div>
            <div class="popup-header padding-tb-20 border-1px-b">
                <image :src="banner_list[0].src" class="popup-header-media padding-l-20"></image>
                <div class="popup-header-content padding-l-20">
                    <text class="font-dark">安睡慢回弹记忆绵床垫</text>
                    <text class="padding-tb-20 font-mini color-gray">5cm记忆绵的亲密包裹</text>
                    <text class="active padding-b-20">¥26.00~75.00</text>
                </div>
            </div>
            <text class="padding-rl-20 padding-t-20 color-dark font-normal">颜色:</text>
            <div class="color-box flex-start padding-rl-20 border-1px-b padding-b-20">
                <text class="button" v-for="item in colors">{{item}}</text>
            </div>
            <text class="padding-rl-20 padding-t-20 color-dark font-normal">尺码:</text>
            <div class="color-box flex-start padding-rl-20 border-1px-b padding-b-20">
                <text class="button" v-for="item in sizes">{{item}}</text>
            </div>
            <text class="padding-rl-20 padding-t-20 color-dark font-normal">库存: 23 (件)</text>
            <div class="bar-detail border-1px-t">
                <div class="bar-detail-item bar-detail-left border-1px-r">
                    <div class="border-1px-r bar-detail-left-item icon-cart">
                        <text class="iconfont text-center font-1x font-dark">&#xe602;</text>
                    </div>
                    <text class="iconfont bar-detail-left-item font-1x font-dark text-center icon-fav">&#xe623;</text>
                </div>
                <div class="bar-detail-item">
                    <text class="text-center font-dark">立即购买</text>
                </div>
                <div class="addcart bar-detail-item bg-danger">
                    <text class="text-center color-white">加入购物车</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as config from '../config/config.js'
    const domModule = weex.requireModule("dom")
    const navigator = weex.requireModule("navigator")
    const modal = weex.requireModule("modal")
    var getBaseUrl = require("../config/baseUrl.js").getBaseURL
    
    export default {
        name: 'detailView',
        data: function() {
            return {
                popup_show: false,
                colors: ["红色", "白色", "粉色", "紫色", "蓝色", "黄色"],
                sizes: ["36", "37", "38", "39", "40", "41", "42"],
                banner_list: [{
                    src: config.baseUrl.image_url + '/images/detail/05645050f7c8df7b4a87994c3fd72475.jpg',
                }, {
                    src: config.baseUrl.image_url + '/images/detail/52e1230341bde01128645c65650f601c.jpg',
                }, {
                    src: config.baseUrl.image_url + '/images/detail/49b3a096adad4ba4228d5d4fc00eb85f.jpg',
                }, {
                    src: config.baseUrl.image_url + '/images/detail/01460a9963bdecead79ce86c7df1e90a.jpg',
                }, {
                    src: config.baseUrl.image_url + '/images/detail/ed12a0fc67eea2fec8a81dd044af28d2.jpg',
                }],
                detail_media: [{
                    src: config.baseUrl.image_url + '/images/detail/4fc7bbf24ca3aa7c7991dcdc27f64f26.jpg'
                }, {
                    src: config.baseUrl.image_url + '/images/detail/99b0f7110b67307ab02f18673a460cd4.jpg'
                }, {
                    src: config.baseUrl.image_url + '/images/detail/8b2ed3ac4084c4608ea951311dfa14e5.jpg'
                }, {
                    src: config.baseUrl.image_url + '/images/detail/aa64cb95f94066a4de15083fe741bae4.jpg'
                }, {
                    src: config.baseUrl.image_url + '/images/detail/0de1b826d70069e199b1a7bb0a9dcf20.jpg'
                }, {
                    src: config.baseUrl.image_url + '/images/detail/b19d147f0edf0bcfd270c0aca6f138db.jpg'
                }, {
                    src: config.baseUrl.image_url + '/images/detail/b9bf6fd8849795c9f3c5912898aa6493.jpg'
                }]
            }
        },
        created: function() {
            domModule.addRule('fontFace', {
                'fontFamily': 'iconfont',
                'src': `url('${config.iconfont_src}')`
            })
        },
        methods: {
            redirect: function(to) {
                var baseUrl = getBaseUrl(this);
                navigator.push({
                    url: baseUrl + to + '.js',
                    animated: "true"
                }, function() {
    
                })
            },
            back: function() {
                navigator.pop({
                    animated: "true"
                }, function() {
    
                })
            },
            toggle_popup: function() {
                this.popup_show = !this.popup_show;
            },
            add_cart: function() {
                this.redirect('/orderConfirmView');
            }
        },
        components: {
    
        }
    }
</script>

<style scoped>
    .close-box {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -40px;
        right: 10px;
        width: 80px;
        height: 80px;
        background-color: #D53642;
        border-radius: 40px;
    }
    
    .close-btn {
        color: #fff;
    }
    
    .flex-start {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .popup-header {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .popup-header-media {
        width: 150px;
        height: 150px;
    }
    
    .popup-header-content {
        width: 580px;
    }
    
    .button {
        border-width: 1px;
        border-color: #ccc;
        border-style: solid;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 30px;
        padding-right: 30px;
        margin-right: 20px;
        border-radius: 4px;
        font-size: 28px;
        margin-top: 20px;
    }
    
    .popup {
        position: fixed;
        bottom: 0;
        height: 900px;
        width: 750px;
        background-color: #fff;
    }
    
    .frame-media {
        width: 750px;
        height: 750px;
    }
    
    .slider {
        width: 750px;
        height: 750px;
    }
    
    .indicator {
        width: 750px;
        height: 100px;
        position: absolute;
        top: 680px;
        left: 0;
        item-color: #fff;
        item-selected-color: #1ABC9C;
    }
    
    .scroller {
        background-color: #efeff4;
    }
    
    .bar-detail {
        position: fixed;
        width: 750px;
        bottom: 0;
        left: 0;
        flex: 1;
        background-color: #f7f7f7;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .bar-detail-item {
        flex: 1;
        height: 100px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .bar-detail-left {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .bar-detail-left-item {
        flex: 1;
    }
    
    .icon-cart {
        height: 100px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 750px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        opacity: 0.5;
        padding-top: 40px;
    }
    
    .header-item {
        height: 80px;
    }
    
    .service {
        width: 500px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }
    
    .service-item {
        width: 250px;
    }
    
    .back {
        flex: 20;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    
    .spec-info-nav {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .right-btns {
        flex: 80;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    
    .detail-content-image {
        width: 750px;
        height: 240px;
    }
    
    .border-1px-b {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ccc;
    }
    
    .border-1px-t {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: #ccc;
    }
    
    .border-1px-r {
        border-right-style: solid;
        border-right-width: 1px;
        border-right-color: #ccc;
    }
    
    .detailView {
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 100px;
    }
    
    .font-mini {
        font-size: 24px;
    }
    
    .font-normal {
        font-size: 28px;
    }
    
    .line-ellispse-2 {
        lines: 2;
        text-overflow: ellipsis;
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
    
    .padding-rl-30 {
        padding-right: 30px;
        padding-left: 30px;
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
    
    .padding-b-20 {
        padding-bottom: 20px;
    }
    
    .padding-t-20 {
        padding-top: 20px;
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
    
    .padding-l-20 {
        margin-left: 20px;
    }
    
    .margin-l-10 {
        margin-left: 10px;
    }
    
    .margin-r-10 {
        margin-right: 10px;
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
    
    .iconfont {
        font-family: iconfont;
    }
    
    .bg-danger {
        background-color: #D53642;
    }
    
    .color-gray {
        color: #a0a0a0;
    }
    
    .color-warning {
        color: #ffb300;
    }
    
    .color-white {
        color: #fff;
    }
    
    .font-2x {
        font-size: 48px;
    }
    
    .font-1x {
        font-size: 36px;
    }
</style>