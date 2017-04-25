<template>
    <div class="detailView">
        <scroller></scroller>
        <div class="bar-detail"></div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .bar-detail {
        position: fixed;
        width:750px;
        height:100px;
        bottom:0;
        left:0;
        flex:1;
        background-color:#f7f7f7;
    }
    .border-1px-b{
        border-bottom-style:solid;
        border-bottom-width:1px;
        border-bottom-color:#ccc;
    }
    .border-1px-t{
        border-top-style:solid;
        border-top-width:1px;
        border-top-color:#ccc;
    }
    .detailView {
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 100px;
        background-color: #eff2f7;
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
    
    .text-center {
        text-align: center;
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
    
    .active {
        color: #D53642;
    }
    
    .bg-gray {
        background-color: #eff2f7;
    }
    
    .font-dark {
        color: #454552;
    }
</style>