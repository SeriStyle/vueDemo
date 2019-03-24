<template>
  <div>
 
  </div>
</template>
<script>
import Cookies from 'js-cookie';
const Tokenkey='Admin-Token';
Cookies.set(Tokenkey,'hello');
console.log(Cookies.get(Tokenkey));
export default {
   data(){
    return{
      arr:[1,2,3,4],
      setIndex:0,
    }
  },
  directives:{
      demo:{
        bind(el,binding,vnode,oldNode){
            console.log(vnode.context.setIndex);
         el.onclick=(e)=>{
            // el.style.background='pink';
            vnode.context.setIndex=binding.value.index;
             console.log(binding.value.index);
       
           
         }
      
        }
      }
  },
  mounted(){
     this.getToken();
     console.log(this.getToken());
  },
  methods:{
    getToken(){
      return Cookies.Tokenkey
    },
  }

};
</script>
<style scoped>
  ul li{
    list-style: none;
    margin: 2px;
  }
  .active{
       background-color:palegreen;
  }
</style>