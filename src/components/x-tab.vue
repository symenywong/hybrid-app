<template lang="html">
  <div class="x-tab">
    <div v-for="(item,index) in tab_data" class="x-tab-item">
      <text>{{item.title}}</text>
    </div>
  </div>
</template>

<script>
  import * as config from '../config/config.js'
  export default {
    name: 'xtab',
    data: function() {
      return {
        tab_data: [{
          title: '推荐',
          url: '',
        }, {
          title: '限时购',
          url: '',
        }, {
          title: '居家',
          url: '',
        }, {
          title: '餐厨',
          url: '',
        }, {
          title: '配件',
          url: '',
        }, {
          title: '服装',
          url: '',
        }, {
          title: '洗护',
          url: '',
        }, {
          title: '婴童',
          url: '',
        }, {
          title: '杂货',
          url: '',
        }, {
          title: '饮食',
          url: '',
        }, {
          title: '志趣',
          url: '',
        }]
      }
    }
  }
</script>

<style scoped>
  .x-tab{
    height:80px;
    flex:1;
    width:750px;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:flex-start;
   
  }
  .x-tab-item{
    width:100px;
    flex:1;
    background-color:red;
  }
</style>
