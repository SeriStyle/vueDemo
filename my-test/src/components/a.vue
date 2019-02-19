
<template>
  <div class="hello-vue">
    aaaaaaaaaaaa
       {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '使用vue-route',

    }
  },
  props:{
    // hello:{
    //   type:String,
    //   required:true,
    // }
  },
  methods:{

  },
  computed:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello-vue{
	background: #3eaf7c;
}
    .hello-vue img{
          width: 500px;
          height: 300px;
    }
</style>
