<template>
    <div class="topicDetailView">
        <x-header title="条纹新风尚"></x-header>
        <web ref="webview" class="webview" @error="error" :src="weburl"></web>
    </div>
</template>

<script>
    const webview = weex.requireModule("webview")
    const modal = weex.requireModule("modal")
    
    import XHeader from '../components/x-header.vue'
    export default {
        name: "topicDetailView",
        data: function() {
            return {
                weburl: 'http://m.you.163.com/topic/v1/pub/JYf70Tlt2f.html'
            }
        },
        methods: {
            error: function(event) {
                console.log('error', event);
                // modal.toast({
                //     message: 'error'
                // })
            }
        },
        components: {
            XHeader
        }
    }
</script>

<style scoped>
    .topicDetailView {
        padding-top: 120px;
    }
    
    .webview {
        width: 750px;
        height: 1214px;
    }
</style>