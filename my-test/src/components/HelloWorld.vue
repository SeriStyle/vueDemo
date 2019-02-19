<template>
  <div class="hello-vue">
            <img  :src="imgsrc" alt=""> 
            <p>hello  {{$route.params.id}}</p> 
            <!-- index.js文件中的:id配置 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你好',
      imgsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541558140&di=3c7ebd77e9b3f61ab8c102a01188138f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0136e25989a2d5a801215603b84e2e.jpg',
    }
  },
  props:{
    hello:{
      type:String,
      required:true,
    }
  },
  methods:{
    passValue:function(){
          this.hello="我要改变这个值";
          //this.$emit("changValue","子像父组件传值");
    },
  },
  computed:{
    changValue:function(){
       // this.hello="我要改变这个值";
       console.log("计算属性");
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello-vue img{
          width: 500px;
          height: 300px;
    }
</style>
