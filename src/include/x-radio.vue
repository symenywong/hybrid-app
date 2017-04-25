<template>
    <div class="x-radio" @click="toggle_status">
        <div class="x-radio-circle" v-if="!checked"></div>
        <text class="checked-icon" v-else>&#xe660;</text>
    </div>
</template>

<script>
    import * as config from '../config/config.js'
    var domModule = weex.requireModule('dom');
    export default {
        name: 'x-radio',
        data: function() {
            return {
                checked: false,
                checked_icon: config.baseUrl.image_url + '/images/icons/checked.png'
            }
        },
        props: {
    
        },
        created: function() {
            domModule.addRule('fontFace', {
                'fontFamily': "iconfont",
                'src': `url('${config.iconfont_src}')`
            });
        },
        methods: {
            toggle_status: function() {
                this.checked = !this.checked;
            }
        }
    
    }
</script>

<style scoped>
    .x-radio-circle {
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-style: solid;
        border-width: 1px;
        border-color: #c9c9c9;
        border-radius: 20px;
    }
    
    .checked {
        width: 40px;
        height: 40px;
    }
    
    .checked-icon {
        color: red;
        font-size: 40;
        font-family: iconfont;
    }
    .x-radio{
       
    }
    .padding-tb-30 {
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>
