<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="300">
        <template slot-scope="scope">
          <div class="block">
            <el-date-picker v-model="scope.row.date" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="300">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>

      <el-table-column label="联系方式" width="300">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <div :class="{'disdetail': scope.row.active}">
              <el-input placeholder="请输入内容" v-model="scope.row.contact"></el-input>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作" width>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleSumit(scope.$index, scope.row)"
            :class="{'disedit':scope.row.editactive}"
          >提交</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="primary" @click="handleAdd">增加</el-button>
        </template>
      </el-table-column>
    </el-table>

    <button @click="handleSave">save</button>

  </div>
</template>

<script>

export default {
  data() {
    return {
      active: false,
      editactive: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          contact: "110",
          editactive: true,
          active: false
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          contact: "110",
          editactive: true,
          active: false
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          contact: "110",
          editactive: true,
          active: false
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          contact: "110",
          editactive: true,
          active: false
        }
      ],
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
  
  },
  methods: {
    handleSave() {
      console.log(this.tableData);
    },
    handleEdit(index, row) {
      console.log(index, row);
      row.active = true;
      row.editactive = false;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },
    handleSumit(index, row) {
      row.active = false;
      row.editactive = true;
    },
    handleAdd() {
      let valu = {
        date: "2019-05-02",
        name: "陈晨",
        address: "北京市",
        contact: "",
        editactive: true,
        active: false
      };
      this.tableData.push(valu);
    }
  }
};
</script>
<style  scoped>

.disdetail {
  display: none;
}
.disedit {
  display: none;
}

</style>