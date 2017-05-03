<template>
    <div class="orderView">
        <x-header title="我的订单" :show_back="true"></x-header>
        <x-tabbar>
            <tabbar-item @tabbarClick="go" v-for="(item,index) in tabbar" :key="index" :title="item" :active="active" :index="index" slot="tabbar-item"></tabbar-item>
        </x-tabbar>
        <div class="progress">
            <div class="progress-slider" :style="{'margin-left':progress+'px',width:750/tabbar.length+'px'}"></div>
        </div>
        <slider class="slider" :index="active" @scroll="scroll" @change="change" v-if="false">
            <div class="frame" v-for="(item,index) in banner">
                <image :src="item.src" class="frame-media"></image>
            </div>
        </slider>
        <list class="order-lists" v-if="active==0">
            <cell class="order-item bg-white" v-for="(item,index) in order_data">
                <div class="order-item-header padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-mini font-dark">订单编号:{{index}}</text>
                    <text class="font-mini font-dark iconfont font-2x">&#xe608;</text>
                </div>
                <div @click="redirect('/orderDetailView')" class="order-item-body padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
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
        <list class="order-lists" v-if="active==1">
            <cell class="order-item bg-white" v-for="(item,index) in order_needPay">
                <div class="order-item-header padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-mini font-dark">订单编号:{{index}}</text>
                    <text class="font-mini font-dark iconfont font-2x">&#xe608;</text>
                </div>
                <div @click="redirect('/orderDetailView')" class="order-item-body padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
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
        <list class="order-lists" v-if="active==2">
            <cell class="order-item bg-white" v-for="(item,index) in order_needSend">
                <div class="order-item-header padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-mini font-dark">订单编号:{{index}}</text>
                    <text class="font-mini font-dark iconfont font-2x">&#xe608;</text>
                </div>
                <div @click="redirect('/orderDetailView')" class="order-item-body padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
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
        <list class="order-lists" v-if="active==3">
            <cell class="order-item bg-white" v-for="(item,index) in order_needReceive">
                <div class="order-item-header padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-mini font-dark">订单编号:{{index}}</text>
                    <text class="font-mini font-dark iconfont font-2x">&#xe608;</text>
                </div>
                <div @click="redirect('/orderDetailView')" class="order-item-body padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
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
        <list class="order-lists" v-if="active==4">
            <cell class="order-item bg-white" v-for="(item,index) in order_needCommit">
                <div class="order-item-header padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
                    <text class="font-mini font-dark">订单编号:{{index}}</text>
                    <text class="font-mini font-dark iconfont font-2x">&#xe608;</text>
                </div>
                <div @click="redirect('/orderDetailView')" class="order-item-body padding-rl-20 padding-tb-20 border-1px-b flex-space-between">
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
    const modal = weex.requireModule("modal")
    
    var getBaseUrl = require("../config/baseUrl.js").getBaseURL
    import * as config from '../config/config.js'
    
    export default {
        name: 'orderView',
        data: function() {
            return {
                active: 0,
                progress: 0,
                tabbar: ['全部', '待付款', '待发货', '已发货', '待评价'],
                order_data: {
                    '1-111': [{
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
                    '1-222': [{
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }],
                    '1-333': [{
                        name: '大头风扇',
                        src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
                        price: '119',
                    }, {
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }]
                },
                order_needPay: {
                    '1-222': [{
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }],
                    '1-333': [{
                        name: '大头风扇',
                        src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
                        price: '119',
                    }, {
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }]
                },
                order_needSend: {
                    '1-111': [{
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
                    '1-333': [{
                        name: '大头风扇',
                        src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
                        price: '119',
                    }, {
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }]
                },
                order_needReceive: {
                    '1-111': [{
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
                    '1-222': [{
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }],
                },
                order_needCommit: {
                    '1-222': [{
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }],
                    '1-333': [{
                        name: '大头风扇',
                        src: config.baseUrl.image_url + '/images/netease-home/a7a524512c34d24a4b9762766dd9d0f0.png',
                        price: '119',
                    }, {
                        name: '安睡慢回弹记忆绵床垫',
                        src: config.baseUrl.image_url + '/images/netease-home/a03ea6f4509439acdafcb7ceba1debe0.png',
                        price: '599',
                    }]
                },
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
                    url: baseUrl+to+'.js',
                    animated: 'true'
                },function(){

                })
            },
            go: function(index) {
                this.active = index;
                this.progress = index * 150;
            },
            scroll: function(e) {
                var ratio = parseFloat(e.offsetXRatio);
                this.progress = 150 * (this.active - 1) + (150 * -ratio);
            },
            change: function(e) {
                this.go(parseInt(e.index));
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
    .progress {
        background-color: #f7f7f7;
        width: 750px;
    }
    
    .progress-slider {
        background-color: #D53642;
        width: 150px;
        height: 4px;
        margin-left: 0;
    }
    
    .orderView {
        padding-top: 120px;
        background-color: #efeff4;
    }
    
    .x-tabbar {
        background-color: #eff2f7;
        height: 80px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .tabbar-item {
        flex: 1;
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