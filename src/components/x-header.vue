<template lang="html">
  <div class="x-header bg-gray">
    <div class="status-bar"></div>
    <div class="header-title">
      <text class="x-header-title">{{title}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="css">
  .status-bar {
    height: 40px;
    background-color: #454552;
  }
  
  .x-header {
    position: fixed;
    top: 0;
    left: 0;
    height: 120px;
    width: 750px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    background-color: #eff2f7;
  }
  
  .header-title {
    height: 80px;
    color: #454552;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .bg-gray {
    background-color: #f7f7f7;
  }
</style>
