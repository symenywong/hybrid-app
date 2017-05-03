<template>
    <div class="orderConfirmView">
        <x-header title="订单确认" :show_back="true"></x-header>
        <scroller class="scroller bg-gray">
            <div class="address bg-white flex-center padding-tb-20 margin-b-20 padding-rl-20">
                <div class="address-header">
                    <text class="font-normal margin-tb-10 color-dark">王小明</text>
                    <text class="font-normal color-dark def-address font-mini">默认地址</text>
                </div>
                <div class="address-content">
                    <text class="font-normal margin-tb-10 color-danger">18503009595</text>
                    <text class="font-normal color-dark">广东省深圳市宝安区****室***号</text>
                </div>
                <div class="address-more padding-tb-20">
                    <text class="font-normal icon-right color-dark text-center iconfont">&#xe6da;</text>
                </div>
            </div>
            <div class="coupon-list bg-white padding-tb-20 margin-b-20 padding-rl-20">
                <div class="coupon-item flex-space-between border-1px-b padding-b-20">
                    <text class="font-normal color-dark">优惠券: 未选择</text>
                    <text class="iconfont color-dark">&#xe6da;</text>
                </div>
                <div class="coupon-item padding-t-20 flex-space-between">
                    <text class="font-normal color-dark">礼品卡余额: ¥0.00</text>
                    <text class="iconfont color-dark">&#xe6da;</text>
                </div>
            </div>
            <div class="margin-b-20 padding-rl-20 padding-tb-20 bg-white">
                <div class="coupon-item flex-space-between border-1px-b padding-b-20">
                    <text class="font-normal color-dark">商品合计</text>
                    <text class="font-normal color-dark">¥0.00</text>
                </div>
                <div class="coupon-item padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-normal color-dark">运费</text>
                    <text class="font-normal color-dark">¥0.00</text>
                </div>
                <div class="coupon-item padding-t-20 flex-space-between">
                    <text class="font-normal color-dark">我要开发票</text>
                    <text class="iconfont color-dark">&#xe6da;</text>
                </div>
            </div>
            <div class="order-list bg-white margin-b-20 padding-rl-20">
                <div class="order-item flex-center border-1px-b" @click="redirect('/orderDetailView')" v-for="(item,index) in order_data">
                    <div class="order-item-cell">
                        <image :src="item.src" class="order-item-media"></image>
                    </div>
                    <div class="order-item-content padding-rl-20 padding-tb-15">
                        <text class="font-normal color-dark">{{item.name}}</text>
                    </div>
                </div>
            </div>
            <div class="order-memo bg-white">
                <text class="font-normal color-dark padding-rl-20 padding-tb-20 border-1px-b">留言/备注:</text>
                <textarea class="textarea font-normal color-dark padding-rl-20 padding-tb-20" placeholder="请输入您的留言备注"></textarea>
            </div>
        </scroller>
        <div class="bar-detail border-1px-t">
            <div class="bar-detail-item bar-detail-left border-1px-r">
                <text class="color-danger">实付:¥</text>
                <text class="color-danger font-2x">185.90</text>
            </div>
            <div class="bar-detail-right bar-detail-item bg-danger" @click="add_cart">
                <text class="text-center color-white">去付款</text>
            </div>
        </div>
    </div>
</template>

<script>
    const domModule = weex.requireModule("dom")
    const navigator=weex.requireModule("navigator")
    import * as config from '../config/config.js'
    var getBaseUrl=require("../config/baseUrl.js").getBaseURL
    
    import XHeader from '../components/x-header.vue'
    export default {
        name: 'orderConfirmView',
        data: function() {
            return {
                order_data: [{
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
                }]
            }
        },
        created: function() {
            domModule.addRule("fontFace", {
                'fontFamily': 'iconfont',
                'src': `url('${config.iconfont_src}')`
            })
    
        },
        methods: {
            add_cart: function() {
                this.redirect("/payMethodsView");
            },
            redirect: function(to) {
                var baseUrl = getBaseUrl(this);
                navigator.push({
                    url: baseUrl + to + '.js',
                    animated: "true"
                }, function() {
    
                })
            },
        },
        components: {
            XHeader
        }
    }
</script>

<style scoped>
    .order-item-media {
        width: 160px;
        height: 160px;
    }
    
    .iconfont {
        font-family: iconfont;
    }
    
    .textarea {
        flex: 1;
        height: 300px;
    }
    
    .flex-space-between {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .order-item-cell {
        width: 180px;
    }
    
    .order-item-content {
        width: 530px;
    }
    
    .scroller {
        padding-top: 120px;
    }
    
    .flex-center {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .address-header {
        flex: 20;
    }
    
    .address-content {
        flex: 75;
    }
    
    .address-more {
        width: 46px;
    }
    
    .icon-right {
        font-size: 40px;
    }
    
    .text-center {
        text-align: center;
    }
    
    .padding-tb-20 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .padding-t-20 {
        padding-top: 20px;
    }
    
    .padding-b-20 {
        padding-bottom: 20px;
    }
    
    .padding-rl-20 {
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .font-normal {
        font-size: 28px;
    }
    
    .font-2x {
        font-size: 48px;
    }
    
    .color-dark {
        color: #454552;
    }
    
    .color-danger {
        color: #D53642;
    }
    
    .font-mini {
        font-size: 24px;
    }
    
    .margin-tb-10 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .def-address {
        background-color: #fec8c9;
        color: #FF7043;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 4px;
        margin-right: 20px;
        text-align: center;
    }
    
    .border-1px-b {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
    }
    
    .bg-gray {
        background-color: #efeff4;
    }
    
    .bg-white {
        background-color: #fff;
    }
    
    .margin-b-20 {
        margin-bottom: 20px;
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
    
    .bar-detail-left {
        flex: 60;
        padding-left: 30px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    
    .bar-detail-right {
        flex: 40;
    }
    
    .bar-detail-item {
        height: 100px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .bg-danger {
        background-color: #D53642;
    }
    
    .color-white {
        color: #fff;
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
</style>