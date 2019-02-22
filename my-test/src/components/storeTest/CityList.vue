<template>
  <div class="city">
    <ul>
      <li v-for="(item,index) in cityArr" :key="index" @click="backFn(index)">
        <h2>{{item}}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name:'city',
  data(){
    return{
      cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山'],
    }
  },
  methods: {
    backFn(index){
       // 调用vuex的ations设置城市的值
       this.$store.dispatch('setCityName',this.cityArr[index]);
       //返回某个页面
       this.$router.push("/settings");
    }
  },
}
</script>