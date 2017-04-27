<template>
    <div class="tabbar-item">
        <text class="text-center font-normal color-dark" :style="{color:index==active?'#D53642':'#454552','font-size':index==active?'30px':'28px'}">{{title}}</text>
    </div>
</template>

<script>
    export default {
        name: 'tabbar-item',
        data: function() {
            return {
    
            }
        },
        props: {
            title: String,
            index: Number,
            active:Number
        }
    }
</script>

<style scoped>
    .tabbar-item {
        flex: 1;
    }
    
    .text-center {
        text-align: center;
    }
    
    .color-dark {
        color: #454552;
    }
    
    .font-normal {
        font-size: 28px;
    }
</style>