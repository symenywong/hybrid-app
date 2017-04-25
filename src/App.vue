<template>
<div @androidback="back">
    <router-view style="flex:1"></router-view>
</div>
</template>

<script>
const animation = weex.requireModule("animation")
const modal = weex.requireModule("modal")
var event = weex.requireModule('event')
export default {
    methods: {
        back: function() {
            this.$router.back()
        },
        test: function() {
            modal.toast({
                message: 'callback: '
            })
        }
    }
}
</script>
<style scoped>
  .text-btn{
    width:100px;
    height:100px;
    background-color: red;
    margin-top:50px;
  }
</style>
