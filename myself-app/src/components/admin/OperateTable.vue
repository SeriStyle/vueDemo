
<template>
  <div class="kinds">
    <div class="form-content">
      <div class="form-title">
        <div class="form-titlespan">
          <span>标题1</span>
          <span>标题2</span>
          <span>标题3</span>
          <span>标题4</span>
        </div>
        <div class="form-add">
          <el-button type="primary" size="small" @click="addEle">新建</el-button>
        </div>
      </div>
      <div class="form-main"> 
        <div class="form-inputwrap">
          <div class="form-inputcont" v-for="items in 4" :key="items">
            <el-input  placeholder="请输入内容"></el-input>
          </div>

          <div class="form-delt">
            <el-button type="danger" size="small" plain>删除</el-button>
          </div>
        </div>
    
      </div>
    </div>

  </div>
</template>

<script>
import TableForm from  './TableForm'
export default {
  components:{
     TableForm
  },
  data() {
    return {
      input: null,
      ele:'',
      itemArr:[0],
    };
  },
  methods: {
    addEle(){
        this.ele++;
        this.itemArr.push(this.ele);
    }
  },
};
</script>

<style scoped >
.kinds {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  
}
ul li{
  display: inline-block;
  list-style: none;
  padding: 20px;
}
.form-content {
  border: 1px solid #ddd;
  padding: 20px;
}
.form-content .form-inputcont {
  width: 200px;
  display: inline-block;
  margin-left: 5px;
}
.form-title span {
  display: inline-block;
  width: 200px;
  height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  margin-left: 5px;
}
.form-titlespan,
.form-delt,
.form-title .form-add {
  display: inline-block;
}
.form-inputwrap {
  margin-bottom: 5px;
}
.router-link-active{
	color:gold;
}
</style>
