<template>
  <div class="wechat">
    <div class="imgcon">
        <img :src='weChat'>
    </div>

  </div>
</template>
<script>
  import weChat from  '@/assets/wechat/wechat.png'
  export default{
    data() {
      return {
       weChat:weChat,
      }
    },
  }
</script>
<style lang="">
   .wechat{
     margin: 0;
     padding: 0;
     width: 100vw;
     height:100vh;
     background:#0e0e0e;
     z-index: -1;
     /* text-align: center; */
     display: flex;
     justify-content: center;
     align-items: center;
   }
   .imgcon{
     width: 300px;
     height: 300px;
 
     /* margin: 0 auto; */
   }
   img{
    width: 300px;
     height: 300px;
   }
 
</style>