<template>
  <div id="main">

    {{tip}}
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{
  },
  data(){
    return{
      app:'aaaaa',
      tip:'hi,what are you doing now?'
    }
  },
  methods:{
    father:function(value){
      this.app=value;
    }
  }
}
</script>

<style>
#main {
  background-color: #dddd;
}
ul{
  background-color: green;
}
.router-link-exact-active{
  font-size: 800;
  color: #f40;
}
</style>
