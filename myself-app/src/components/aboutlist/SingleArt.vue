<template>
<div>

  <div class="content">
    <div class="singleArtic">
          <h2 v-rainbow>《春逝》</h2>
          <b> 作者：<i>拜伦</i> </b>
      <article>
     <p>你我离别的时刻 </p>
     <p>沉默与泪水肆虐 </p>
     <p>心近乎绝望的碎裂 </p>
     <p>碎片辗过一大段的岁月 </p>
     <p>你的脸颊白如纸而冷若冰</p>
     <p>给我的寒洌之吻 </p>
     <p>此时此刻已经写下 </p>
     <p>如今伤痛的预言</p>
     <P></P>
     <p>早晨的寒露  </p>
     <p>为眉弯添上透骨的寒凉</p>
     <p>想来是个先兆 </p>
     <p>预告我现今的心境 </p>
     <p>誓言不复存在 </p>
     <p>你因冶荡艳名远播 </p>
     <p>惊闻你艳名狼藉</p>
     <p>我的心因羞愧而流血 </p>
      </article>
    </div>
  </div>

</div>

</template>
<script>
  export default{
        components:{
       },
    data() {
      return {
        blogs:[],
        serach:'',
        id:this.$route.params.id,
      }
    },
    computed:{

    },
    directives:{
      rainbow:{
        bind(el){
          el.style.color="#"+Math.random().toString(16).slice(2,8);
        }
      }
    },
    created() {
        /*
       this.axios.get('http://blog/'+ this.id).then((res)=>{ //请求文章内容，伪代码
        let blogarr=res.data.data.rule;
        this.blogs=blogarr;
       })
       * */
    },

  }
</script>
<style scoped>
 .content{
  max-width: 600px;
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
