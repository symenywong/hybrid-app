<template>
    <div class="testView">
        <div class="tabbar flex-center">
            <div @click="go(0)" class="tabbar-item flex-center page-1"><text>page1</text></div>
            <div @click="go(1)" class="tabbar-item flex-center page-2"><text>page2</text></div>
            <div @click="go(2)" class="tabbar-item flex-center page-3"><text>page3</text></div>
        </div>
        <div class="progress-box">
            <div class="progress" :style="{'margin-left':progress+'px'}"></div>
        </div>
        <slider class="slider" @change="change" @scroll="scroll" :index="index">
            <div class="frame" v-for="(item,index) in banner">
                <image :src="item.src" class="slider-media"></image>
            </div>
        </slider>
    </div>
</template>

<script>
    import * as config from '../config/config.js'
    
    export default {
        name: 'testView',
        data: function() {
            return {
                index: 0,
                progress: 0,
                banner: [{
                    src: config.baseUrl.image_url + '/images/banner/5ebc2051ed15b73ccf472a7e1a058a56.jpg',
                    url: '#',
                    title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
                }, {
                    src: config.baseUrl.image_url + '/images/banner/4ad37295b9d489bffd412fc9f1a267de.jpg',
                    url: '#',
                    title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
                }, {
                    src: config.baseUrl.image_url + '/images/banner/8b9794d7191072b8155734f355f33ca1.jpg',
                    url: '#',
                    title: 'YINER音儿 2016夏装/蕾丝钩花拼接薄款衬衣女上衣薄85230010',
                }]
            }
        },
        methods: {
            change: function(e) {
                console.log(e.index);
                this.go(parseInt(e.index));
            },
            go: function(index) {
                this.index = index;
                console.log(index);
                this.progress = 250 * index;
            },
            scroll: function(e) {
                var ratio = parseFloat(e.offsetXRatio);
                // console.log(ratio);
                console.log(this.index);
                this.progress = 250 * this.index + (250 * -ratio);
               console.log(this.progress);
            }
        }
    }
</script>

<style scoped>
    .flex-center {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .tabbar {
        height: 80px;
    }
    
    .tabbar-item {
        flex: 1;
    }
    
    .page-1 {
        background-color: #ccc;
    }
    
    .page-2 {
        background-color: blue;
    }
    
    .page-3 {
        background-color: red;
    }
    
    .progress-box {
        background-color: #ccc;
    }
    
    .progress {
        height: 20px;
        width: 250px;
        background-color: green;
    }
    
    .slider {
        width: 750px;
        height: 400px;
    }
    
    .slider-media {
        width: 750px;
        height: 400px;
    }
</style>