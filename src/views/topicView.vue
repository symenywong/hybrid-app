<template>
    <div class="topicView">
        <scroller> 
            <x-header title="专题"></x-header>
            <div class="topic-header padding-tb-20">
                <div class="topic-header-item" v-for="(item,index) in topic_header">
                    <image :src="item.src" class="topic-header-media"></image>
                </div>
            </div>
            <div class="gray-divider bg-gray"></div>
            <div v-for="(item,index) in topic_list" class="border-1px-b">
                <div class="topic-item-header padding-tb-20">
                    <image :src="item.user.avatar" class="topic-item-avatar"></image>
                    <text class="font-mini padding-t-10 padding-rl-20">{{item.user.name}}</text>
                </div>
                <div class="topic-item-body" @click="redirect('/topicDetailView')">
                    <image :src="item.cover[0].src" class="topic-item-cover"></image>
                </div>
                <div class="topic-item-footer padding-rl-20">
                    <text class="color-dark padding-tb-20">{{item.title}}</text>
                    <text class="color-gray padding-b-20 font-normal">{{item.subtitle}}</text>
                </div>
            </div>
    
        </scroller>
        <x-navbar></x-navbar>
    </div>
</template>

<script>
    import XHeader from '../components/x-header.vue'
    import XNavbar from '../components/x-navbar.vue'

    import * as config from '../config/config.js'
    const navigator=weex.requireModule("navigator")
    var getBaseUrl=require("../config/baseUrl.js").getBaseURL

    export default {
        name: 'topicView',
        data: function() {
            return {
                topic_header: [{
                    src: config.baseUrl.image_url + '/images/topic/d943675462a06f817d33062d4eb059f5.jpg',
                    title: '严选推荐'
                }, {
                    src: config.baseUrl.image_url + '/images/topic/dc1b671ad54e16339f1b26cfeec6a1ea.jpg',
                    title: '严选幕后'
                }, {
                    src: config.baseUrl.image_url + '/images/topic/1de4da49367dd7c01af1f7a2b23b0237.jpg',
                    title: '丁磊推荐'
                }],
                topic_list: [{
                    title: '成就一室笋香',
                    subtitle: '20元饮食类目优惠券限时发放中',
                    cover: [{
                        src: config.baseUrl.image_url + '/images/topic/14927695046601069.jpg',
                    }],
                    user: {
                        name: '丁磊',
                        avatar: config.baseUrl.image_url + '/images/topic/14927695155801070.png',
                    }
                }, {
                    title: '治愈生活的满怀柔软',
                    subtitle: '太鼓抱枕的上架历程，是从失踪开始的。由于表面的绒感，最初它被安排在秋冬季上架。某...',
                    cover: [{
                        src: config.baseUrl.image_url + '/images/topic/14927695046601069.jpg',
                    }],
                    user: {
                        name: '居家组·多多',
                        avatar: config.baseUrl.image_url + '/images/topic/14926748590030593.png',
                    }
                }, {
                    title: '料理也要精细简单',
                    subtitle: '破壁料理机限时159元优惠价',
                    cover: [{
                        src: config.baseUrl.image_url + '/images/topic/14925200530030186.jpg',
                    }],
                    user: {
                        name: '丁磊',
                        avatar: config.baseUrl.image_url + '/images/topic/14927695155801070.png',
                    }
                }]
            }
        },
        methods:{
            redirect:function(to){
                var baseUrl=getBaseUrl(this);
                navigator.push({
                    url:baseUrl+to+'.js',
                    animated:"true"
                },function(){
                    
                })
            }
        },
        components: {
            XNavbar,
            XHeader
        }
    }
</script>

<style scoped>
    .topicView {
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom:100px;
        padding-top:120px;
    }
    
    .topic-header {
        flex: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .topic-header-item {
        flex: 1;
        justify-content: center;
        align-items: center;
    }
    
    .topic-header-media {
        width: 220px;
        height: 125px;
        border-radius: 4px;
    }
    
    .topic-item-avatar {
        width: 62px;
        height: 62px;
        border-radius: 31px;
    }
    
    .topic-item-header {
        padding-left: 30px;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    
    .topic-item-cover {
        width: 750px;
        height: 420px;
    }
    
    .gray-divider {
        height: 20px;
    }
    
    .color-dark {
        color: #454552;
    }
    
    .color-gray {
        color: #5f646e
    }
    
    .bg-gray {
        background-color: #efeff4;
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
    
    .padding-b-20 {
        padding-bottom: 20px;
    }
    .padding-t-60{
        padding-top:60px;
    }
    .margin-tb-20 {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
    .padding-tb-10 {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    
    .padding-t-10 {
        padding-top: 10px;
    }
    
    .padding-tb-15 {
        padding-top: 15px;
        padding-bottom: 15px;
    }
    
    .padding-rl-20 {
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .font-mini {
        font-size: 24px;
    }
    
    .border-1px-b {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
    }
    
    .font-normal {
        font-size: 28px;
    }
</style>