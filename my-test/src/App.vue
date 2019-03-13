<template>
  <div id="app" ref="app">
      <!-- <ul>
      <li>
      <router-link  :to="{name:'HelloWorld',params:{id:12345678}}"  tag='p'>首页</router-link>  
      </li>
      <li>
      <router-link  to="/am" append>a组件</router-link>  
      </li>
    </ul>  -->
   <router-view></router-view>  
   <!-- <router-link to="/">page1</router-link> 
      <router-link to="/page2">page2</router-link>  -->
    <!-- <Settings/> -->
   <!-- <input type="text" v-on:input="handInput($event)">  -->

  </div>
</template>
<script>
import Settings from "@/components/person/Settings"
export default {
  name: 'App',
  components:{
  Settings,  
  },
  data(){
    return{
      path:"",
      input:"",
      app:null,
    }
  },

  beforeRouteEnter(to, from, next) {
     console.log(to,from);
    // getPost(to.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
  },
  beforeCreate() {
    debugger;
    console.log('Test beforeCreate');
  },
  created() {
    debugger;
    console.log('Test created');
  },
  mounted() {
    debugger;
    // this.$refs.input.autofocus=true;
    console.log('Test mounted');
  },
  methods: {
    handInput(e){
        console.log(e.target.value);
    }
  },
  beforeDestroy() {
    debugger;
    console.log('Test beforeDestroy');
  },
  destroyed() {
    debugger;
    console.log('Test destroyed');
    // this.$refs.app.innerHTML='';

  },
  beforeUpdate() {
    debugger;
    console.log('Test beforeUpdate');
  },
  updated() {
    debugger;
    console.log('Test updated');
  }
}
</script>

<style>
body{
/*  background-color: pink;*/
margin: 0;
padding: 0;
 /* background-color: #2d3a4b; */
}
li p{
  cursor: pointer;
}
.router-link-exact-active{
  font-size: 32px;
  color: #f40;
}
</style>
