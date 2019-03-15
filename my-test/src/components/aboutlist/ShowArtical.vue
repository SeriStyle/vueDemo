<template>
  <div class="content">
    <h1>Reading Time</h1>
    <input type="text" placeholder="搜索" v-model="serach">
    <div class="singleArtic" v-for="(item,index) in getBlogs" :key="index">
      <!-- <router-link to=''> -->
          <h2 v-rainbow>{{item.title}}</h2>
      <!-- </router-link> -->

      <article>
      {{item.content}}
      </article>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        blogs:[],
        serach:'',
      }
    },
    computed:{
      getBlogs(){
        return this.blogs.filter((valu,index,arr)=>{
          return valu.title.match(this.serach)
        })
      }
    },
    directives:{
      rainbow:{
        bind(el){
          el.style.color="#"+Math.random().toString(16).slice(2,8);
        }
      }
    },
    created() {
      console.log(Math.random());
       this.axios.get('api/data').then((res)=>{
         console.log(res);
        let blogarr=res.data.data.rule;
        this.blogs=blogarr;
       })
    },

  }
</script>
<style scoped>
 .content{
  max-width: 800px;
   padding: 30px;
   background: linear-gradient(80deg,#e66465, #9198e5);
   color: black;
   margin: 0px auto;
   margin-top: 10px;
 }
 input{
   width: 100%;
   height: 30px;
   outline: none;
 }
 .singleArtic{
   background-color: aliceblue;
 }
 h1{
   color: rgb(117, 178, 231);
 }
 article,h2{
   padding: 10px;
 }
</style>
