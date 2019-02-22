<template>
  <div class="hello-vue">
    <TodoList/>
  </div>
</template>

<script>
  import TodoList from '@/components/todo/TodoList.vue'
  export default {
    name: 'HelloWorld',
    components:{
      TodoList,
    },
    data() {
      return {
        msg: '使用vue-route',

      }
    },
    props: {
      // hello:{
      //   type:String,
      //   required:true,
      // }
    },
    methods: {

    },
    computed: {

    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .hello-vue {
    /* background: #3eaf7c; */
  }

  .a {
    width: 300px;
    height: 300px;
    border: 0.5px solid rgb(164, 164, 179);
    margin: 20px;
  }
  .a:hover{
    background: palegoldenrod;
    cursor:progress;
  }

</style>
