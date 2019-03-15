<template>
  <div class="list">
      <Nav-Header/>
      <Show-Artical/>
  </div>

</template>
<script>
  import Nav from '@/components/aboutlist/Nav'
  import ShowArtical from '@/components/aboutlist/ShowArtical'
  export default{
    components:{
      ShowArtical,
      NavHeader:Nav,
       },
     data() {
       return {
         navarr:['Artical','Pizza'],
       }
     },
  }
</script>
<style scoped>
  @import '../resume/public.css';

  .router-link-exact-active {
    font-size: 20px;
    color: #52bec7;
  }
  .list{
    margin: 0 auto;
  }
</style>