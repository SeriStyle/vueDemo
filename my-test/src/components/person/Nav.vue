<template>
  <div class="us__nav">
    
 
  <el-select v-model="value" placeholder="请选择"  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"  @click.native="btn(item)">
    </el-option>
  </el-select>
  <inputFocus/>
    <h3>scss</h3>
    <router-link to="/settings/emails">emils</router-link>
    <router-link to="/settings/profile">profile</router-link>
    <router-link to="/settings/a">todo</router-link>
    <div>
      <h3>{{city}}</h3>
      <a :href="www" target="_blank">aaaaaaaa</a>
    <router-link  tag='button' to="/settings/store" >获取城市列表</router-link>
    </div>

  </div>
</template>
<script>
import inputFocus from "@/components/inputFocus/inputFocus"
export default {
  name: 'Nav',
  components:{
    inputFocus,
  },
  data() {
    return {
      www:"https://panjiachen.github.io/vue-element-admin-site/", //去调Https：// 页面前面会变成本地，跳转意想不到的结果
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
  },
  created() {
       console.log(this.options);
  },
  methods:{
    btn(item){
    console.log(item);
    }
  },

  watch: {
    // '$route'(to, from) {
    // this.$router.go(0);
    // }
  },
  computed: {
    city(){
      //通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getCityFn;
    }
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $font-size-base: 200px;
  $font-size-small: 18px;
  $font-size-smallest: 12px;
  $font-weight-normal: normal;
  $font-weight-bold: bold;
  $apixel: 1px;
  $coolor:rebeccapurple;
  div{
    h3{
   color: $coolor;
    }
  }

</style>
