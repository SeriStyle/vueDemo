<template>
  <div class="us__nav">
    
    <template>
  <el-select v-model="value" placeholder="请选择"  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"  @click.native="btn(item)">
    </el-option>
  </el-select>
</template>
    <h3>scss</h3>
    <router-link to="/settings/emails">emils</router-link>
    <router-link to="/settings/profile">profile</router-link>
    <router-link to="/settings/a">a</router-link>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {
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

  },
  methods:{
    btn(item){
    console.log(item);
    }
  },

  watch: {
    '$route'(to, from) {
      // console.log(to,from);
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  $font-size-base: 200px;
  $font-size-small: 18px;
  $font-size-smallest: 12px;
  $font-weight-normal: normal;
  $font-weight-bold: bold;
  $apixel: 1px;
  div{
    h3{
   color: rebeccapurple;
    }
  }

</style>
