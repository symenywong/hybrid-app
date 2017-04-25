<template>
    <div class="listView">
        <x-header title="居家好物" :show_back="true" :show_search="true"></x-header>
        <scroller class="introduce-list bg-white">
            <div class="introduce-content padding-rl-20">
                <div v-for="(item,index) in list_data" class="introduce-item" @click="redirect('/detailView')" :style="{'margin-right':index%2==0?'10px':'0','margin-left':index%2==1?'10px':'0'}">
                    <div class="bg-gray introduce-item-media-box">
                        <image class="introduce-item-media" :src="item.src"></image>
                    </div>
                    <text class="font-mini introduce-item-desc padding-tb-15 text-center">5cm记忆绵的亲密包裹</text>
                    <text class="introduce-item-name font-normal font-dark padding-tb-15">{{item.name}}</text>
                    <text class="introduce-item-price font-normal padding-b-15 active">¥{{item.price}}</text>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
    import XHeader from '../components/x-header.vue'

    import * as config from '../config/config.js'
    
    export default {
        name: 'listView',
        data: function() {
            return {
                list_data: [{
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
                },{
                    name: '日式蓬软太鼓抱枕',
                    src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
                    price: '29',
                }, {
                    name: '皮毛一体多用长毛坐垫',
                    src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
                    price: '109',
                },{
                    name: '日式蓬软太鼓抱枕',
                    src: config.baseUrl.image_url + '/images/netease-home/ad953e16ad8c33b714e7af941ce8cd56.png',
                    price: '29',
                }, {
                    name: '皮毛一体多用长毛坐垫',
                    src: config.baseUrl.image_url + '/images/netease-home/442b9d99c0e7f39efd7967e0e5987374.png',
                    price: '109',
                }]
            }
        },
        components:{
            XHeader
        }
    }
</script>

<style scoped>
.listView{
    padding-top:130px;
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
    
    .text-center {
        text-align: center;
    }
    
    .bg-white {
        background-color: #fff;
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
</style>