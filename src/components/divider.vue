<template lang="html">
  <div class="divider">
    <div class="divider-left-border divider-border">
    </div>
    <div class="divider-text">
      <text>{{title}}</text>
    </div>
    <div class="divider-right-border divider-border">
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {

    }
  },
  props:{
    title:String
  }
}
</script>

<style lang="css">
.divider{
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:10px;
  margin-bottom:10px;
}
.divider-border{
  margin-left: 10px;
  margin-right: 10px;
  flex:.3;
  height:1px;
  background-color: #aaa;
}
.divider-text{
  flex:.4;
  justify-content: center;
  align-items: center;
}

</style>
