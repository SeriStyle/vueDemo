<template>
  <div class='content' >
     <h2 v-for="(item,index) in slotValu" :key="index">
       {{item.label}}
     </h2>
 {{mixval }}
  </div>
</template>
<script>
  export default{
     data(){
       var _this=this;
       return{
         hell:'字符模板',
         mixval:`${_this.hell}`,
       }
     },
     props:{
       slotValu:{
         type:Array,
         default:'',
       },
     },
  }
</script>
<style lang="scss" scoped>
  
</style>