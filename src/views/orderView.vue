<template>
    <div class="orderView">
        <x-header title="我的订单" :show_back="true"></x-header>
        <x-tabbar>
            <tabbar-item slot="tabbar-item" v-for="(item,index) in tabbar" :title="item" :active="0" :index="index" :key="index"></tabbar-item>
        </x-tabbar>
        <list class="order-lists">
            <cell class="order-item bg-white" v-for="(item,index) in order_data">
                <div class="order-item-header padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-mini font-dark">订单编号:{{index}}</text>
                    <text class="font-mini font-dark iconfont font-2x">&#xe608;</text>
                </div>
                <div class="order-item-body padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <div class="order-item-cell flex-start">
                        <image :src="item1.src" class="order-item-media" v-for="(item1,index1) in item"></image>
                    </div>
                    <text class="font-mini font-dark">交易成功</text>
                </div>
                <div class="order-item-footer padding-rl-20 flex-end padding-tb-15">
                    <text class="font-normal padding-rl-30 padding-tb-15 button get-logistics font-dark">追踪物流</text>
                    <text class="font-normal padding-rl-30 font-dark padding-tb-15 button">评价有礼</text>
                </div>
                <div class="order-item-divider"></div>
            </cell>
        </list>
    </div>
</template>

<script>
    import XHeader from '../components/x-header.vue'
    import XTabbar from '../components/x-tabbar.vue'
    import TabbarItem from '../components/tabbar-item.vue'

    const navigator = weex.requireModule("navigator")
    const domModule = weex.requireModule("dom")
    var getBaseUrl = require("../config/baseUrl.js").getBaseURL
    import * as config from '../config/config.js'
    
    export default {
        name: 'orderView',
        data: function() {
            return {
                tabbar:['全部','待付款','待发货','已发货','待评价'],
                order_data: {
                    '11716979': [{
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
                    }],
                    '11716998': [{
                        name: '日式蓬软太鼓抱枕',
                        src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
                        price: '29',
                    }],
                    '11816008': [{
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }, {
                        name: '全棉贡缎纯色床单',
                        src: config.baseUrl.image_url + '/images/netease-home/255a4888161f9b4fe530cf319f14551d.png',
                        price: '99',
                    }]
                }
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
                    url: '',
                    animated: 'true'
                })
            }
        },
        components: {
            XHeader,
            XTabbar,
            TabbarItem
        }
    }
</script>

<style scoped>
    .orderView {
        padding-top: 120px;
        background-color: #efeff4;
    }
    
    .flex-center {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .flex-space-between {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .flex-start {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    
    .flex-end {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    
    .button {
        border-style: solid;
        border-width: 1px;
        border-color: #ccc;
        border-radius: 4px;
    }
    
    .get-logistics {
        margin-right: 30px;
    }
    
    .border-1px-b {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ccc;
    }
    
    .order-item-media {
        width: 130px;
        height: 130px;
    }
    
    .order-item-divider {
        height: 20px;
        background-color: #efeff4;
    }
    
    .font-mini {
        font-size: 24px;
    }
    
    .font-normal {
        font-size: 28px;
    }
    
    .font-2x {
        font-size: 40px;
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
    
    .padding-tb-20 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .padding-tb-15 {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    
    .margin-tb-20 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
    .margin-b-20 {
        margin-bottom: 20px;
    }
    
    .padding-rl-20 {
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .padding-rl-30 {
        padding-left: 30px;
        padding-right: 30px;
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
        font-family: iconfont
    }
</style>