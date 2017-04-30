<template>
    <div class="x-tabbar">
        <slot name="tabbar-item"></slot>
    </div>
</template>

<script>
    export default {
        name: 'x-tabbar',
        data: function() {
            return {
    
            }
        }
    }
</script>

<style scoped>
    .x-tabbar {
        background-color: #eff2f7;
        height: 80px;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    
</style>