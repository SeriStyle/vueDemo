
<template>
  <div class="kinds">
    <nav>
      <ul>
        <router-link to="/tableForm">
          <li>tableForm</li>
        </router-link>
        <router-link to="/vuexdemo">
          <li>VuexDemo</li>
        </router-link>
        <router-link to="/operate">
          <li>Operate</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import TableForm from "./TableForm";
export default {
  components: {
    TableForm
  },
  data() {
    return {
      input: null,
      ele: "",
      itemArr: [0]
    };
  },
  methods: {
    addEle() {
      this.ele++;
      this.itemArr.push(this.ele);
    }
  }
};
</script>

<style scoped >
.kinds {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
ul li {
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
.router-link-active {
  color: gold;
}
</style>
