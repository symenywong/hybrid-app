<template>
    <div class="orderDetailView">
        <x-header :show_back="true" title="订单详情"></x-header>
        <scroller class="scroller">
            <div class="order-header bg-white margin-b-20 padding-tb-20 padding-rl-20">
                <text class="color-dark font-normal">下单时间:2017.04.26 12:36</text>
                <text class="color-dark font-normal">订单编号:11970750</text>
            </div>
            <div class="margin-b-20 bg-white">
                <div class="order-item padding-rl-20 padding-tb-20 border-1px-b" v-for="(item,index) in order_detail.product_data">
                    <image :src="item.src" class="order-media"></image>
                    <div class="order-item-content">
                        <div class="order-item-title padding-tb-15">
                            <text class="color-dark font-normal">{{item.name}}</text>
                            <text class="color-dark font-normal">×{{item.num}}</text>
                        </div>
                        <text class="color-gray font-mini">{{item.spec_info}}</text>
                        <text class="color-dark font-normal padding-tb-15">¥{{item.price}}</text>
                    </div>
                </div>
                <div class="order-footer padding-tb-15">
                    <text class="color-dark button font-normal check-logistics">追踪物流</text>
                    <text class="font-normal button confirm-receive button-danger">确认收货</text>
                </div>
            </div>
            <div class="ship-info margin-b-20 bg-white">
                <div class="border-1px-b padding-rl-20">
                    <text class="font-normal padding-tb-15 color-dark">王小明     185****9595</text>
                    <text class="font-normal padding-b-15 color-dark">广东省/深圳市/龙华新区/**街道**号</text>
                </div>
                <div class="pay-info border-1px-b padding-rl-20">
                    <text class="font-normal padding-tb-15 color-dark">支付方式:支付宝</text>
                    <text class="font-normal color-dark">商品合计:¥ 319.00</text>
                    <text class="font-normal padding-tb-15 color-dark">运费:¥ 0.00</text>
                </div>
                <div class="padding-tb-20 padding-rl-20">
                    <text class="font-normal color-danger">实付: ¥319.00</text>
                </div>
            </div>
            <div class="service-info padding-rl-20 margin-b-20 bg-white">
                <text class="font-mini padding-tb-15 color-gray">服务时间</text>
                <div class="service-methods flex-start padding-tb-20">
                    <text class="font-normal button color-dark">在线客服</text>
                    <text class="font-normal button color-dark">电话客服</text>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    import XHeader from '../components/x-header.vue'
    import * as config from '../config/config.js'
    
    export default {
        name: 'orderDetailView',
        data: function() {
            return {
                order_detail: {
                    product_data: [{
                        name: '轻摔牛皮男士休闲鞋',
                        price: '319.00',
                        spec_info: '墨绿;41码',
                        num: 1,
                        src: config.baseUrl.image_url + '/images/netease/85566d138ea55e6aaeda2cda02df66f8.png'
                    }, {
                        name: '网易智造安卓快充数据线',
                        price: '0.00',
                        spec_info: '1米',
                        num: 1,
                        src: config.baseUrl.image_url + '/images/netease/c09d784ba592e4fadabbaef6b2e95a95.png'
                    }]
                }
            }
        },
        components: {
            XHeader
        }
    }
</script>

<style scoped>
    .orderDetailView {
        padding-top: 120px;
    }
    
    .scroller {
        background-color: #efeff4;
    }
    
    .order-media {
        width: 160px;
        height: 160px;
    }
    
    .order-media {
        width: 180px;
    }
    
    .order-item-content {
        width: 530px;
    }
    
    .order-item-title {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .order-item {
        flex-direction: row;
        justify-content: center;
    }
    
    .order-footer {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    
    .flex-start {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    
    .padding-tb-20 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .padding-rl-20 {
        padding-right: 20px;
        padding-left: 20px;
    }
    
    .padding-tb-15 {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    
    .padding-b-15 {
        padding-bottom: 15px;
    }
    
    .margin-b-20 {
        margin-bottom: 20px;
    }
    
    .bg-white {
        background-color: #ffffff;
    }
    
    .border-1px-b {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ccc;
    }
    
    .color-dark {
        color: #454552;
    }
    
    .color-gray {
        color: #a0a0a0;
    }
    
    .color-danger {
        color: #D53642;
    }
    
    .font-normal {
        font-size: 28px;
    }
    
    .font-mini {
        font-size: 24px;
    }
    
    .button {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 15px;
        padding-left: 15px;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: #ccc;
        margin-right: 20px;
    }
    
    .button-danger {
        border-color: #D53642;
        color: #D53642;
    }
</style>