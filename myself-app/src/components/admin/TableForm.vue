<template>
  <div>
     <!-- <Ele-Table> </Ele-Table> -->
   
  <h3>js动态生成table</h3>
    <div id="form1"></div>

    <div class="hello">
      <h3>--</h3>
    </div>
  </div>
  
</template>

<script>
import CreateForm from "./table/table";
import EleTable from "./EleTable"
export default {
   components:{
     EleTable
   },
  data() {
    return {
      data2: [
        {
          intfo: 1,
          begin: "20180101",
          end: "20181112",
          school: "中山大学",
          tech: "计算机"
        },
        {
          begin: "20180101",
          end: "20181112",
          school: "中山大学",
          tech: "计算机"
        }
      ],
      layout2: [
        { label: "开始时间", prop: "begin", placeHolder: "请输入" },
        { label: "结束时间", prop: "end", placeHolder: "请输入" },
        { label: "学校", prop: "school", placeHolder: "请输入" },
        { label: "专业", prop: "tech", placeHolder: "请输入" }
      ]
    };
  },
  created(){
    
  },
  mounted() {
    const tableData=new CreateForm({
      el: "#form1",
      data: this.data2,
      layout: this.layout2
    });
  },
  methods: {
   
  }
};
</script>
<style   rel="stylesheet/scss" lang="scss" scoped>
 $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

.disdetail {
  display: none;
}
.disedit {
  display: none;
}
.hello{
  h3{
    background-color: $bg;
  }
}

</style>