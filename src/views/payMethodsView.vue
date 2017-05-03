<template>
    <div class="payMethodsView">
        <x-header title="支付方式" :show_back="true"></x-header>
        <scroller class="scroller">
            <text class="button button-wx color-white">微信支付</text>
            <text class="button button-alipay color-white">支付宝</text>
            <text class="button button-bank color-white">银行卡</text>
        </scroller>
    </div>
</template>

<script>
    import XHeader from '../components/x-header.vue'
    export default {
        name: 'payMethodsView',
        data: function() {
            return {
                
            }
        },
        components: {
            XHeader
        }
    }
</script>

<style scoped>
    .scroller {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .button {
        width: 600px;
        margin-bottom: 40px;
        border-radius: 8px;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
        color: #fff;
    }
    
    .scroller {
        padding-top: 200px;
    }
    
    
    .button-wx {
        background-color: #26a866;
    }
    
    .button-alipay {
        background-color: #47b8e0;
    }
    
    .button-bank {
        background-color: #34314c;
    }
</style>