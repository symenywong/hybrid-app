<template lang="html">
  <div class="activityView">
    <scroller>
      <text>活动页面</text>
  
    </scroller>
    <x-navbar></x-navbar>
  </div>
</template>

<script>
  import XNavbar from '../components/x-navbar.vue'
  export default {
    name: 'activityView',
    data: function() {
      return {
  
      }
    },
    components: {
      XNavbar
    }
  }
</script>

<style scoped>
  .activityView{
    padding-bottom:100px;
  }
</style>
