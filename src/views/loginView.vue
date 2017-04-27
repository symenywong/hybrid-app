<template>
    <div class="loginView">
        <x-header :show_back="true"></x-header>
        <div class="login-content padding-rl-30">
            <div class="logo-content">
                <image class="logo-image" src="//misc.360buyimg.com/mtd/pc/index/home/images/logo.v2@2x.png"></image>
            </div>
            <div class="border-1px-b">
                <input type="text" class="username input font-dark" placeholder="邮箱账号/手机号"></input>
            </div>
            <div class="border-1px-b">
                <input type="text" class="pwd input font-dark" placeholder="密码"></input>
            </div>
            <text class="login-btn bg-danger">登录</text>
            <div class="margin-tb-30 link-content">
                <text class="register padding-tb-20 color-gray" @click="redirect('/registerView')">注册</text>
                <text class="forgot-pwd padding-tb-20 color-gray">忘记密码</text>
            </div>
        </div>
    </div>
</template>

<script>
    import XHeader from '../components/x-header.vue'
    
    const navigator = weex.requireModule("navigator")
    var getBaseUrl = require("../config/baseUrl.js").getBaseURL
    
    export default {
        name: 'loginView',
        data: function() {
            return {
    
            }
        },
        methods: {
            redirect: function(to) {
                var baseUrl = getBaseUrl(this);
                navigator.push({
                    url: baseUrl + to + '.js',
                    animated: "true"
                }, function() {
    
                })
            }
        },
        components: {
            XHeader
        }
    }
</script>

<style scoped>
    .input {
        placeholder-color: #a0a0a0;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    
    .login-content {
        padding-top: 120px;
    }
    
    .border-1px-b {
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #ccc;
    }
    
    .username {
        margin-top: 40px;
    }
    
    .padding-rl-30 {
        padding-right: 30px;
        padding-left: 30px;
    }
    
    .margin-tb-30 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    
    .logo-content {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .logo-image {
        width: 260px;
        height: 260px;
    }
    
    .bg-danger {
        background-color: #D53642;
    }
    
    .login-btn {
        padding-top: 30px;
        padding-bottom: 30px;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        margin-top: 50px;
    }
    
    .font-dark {
        color: #454552;
    }
    
    .padding-tb-20 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
    
    .forgot-pwd {
        text-align: right;
    }
    
    .color-gray {
        color: #a0a0a0;
    }
    
    .link-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>