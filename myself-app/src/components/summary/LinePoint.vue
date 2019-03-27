<template>
  <div>
    <ul>
      <li v-for="(item,index) in linevalue" :key="index">
        <span>{{item.date}}</span>
        <router-link :to="item.url">
           <i>{{item.content}}</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    linevalue: {
      type: Array,
      default: ""
    }
  }
};
</script>
<style  scoped lang='scss'>
ul li span {
  position: relative;
  line-height: 32px;
  padding-right: 40px;
  color: #999;
}
span:after {
  position: absolute;
  content: "";
  width: 2px;
  height: 40px;
  background: #e0dfdf;
  right: 18px;
}
li {
  position: relative;
  font-style: normal;
  list-style: none;
}
li i:before {
  content: " ";
  height: 10px;
  width: 10px;
  border: 2px solid #cccaca;
  background: #fff;
  position: absolute;
  top: 4px;
  left: 103px;
  border-radius: 50%;
  transition: all 0.5s ease;
  
}
li i:hover:before {
  background:black;
}
  a{
    color: #20a0de;
    text-decoration: none;
    font-family: 'Exo 2', sans-serif;

  }
  a:hover {
    color: #22b8cf;
  text-shadow: 0 0 0.5rem rgba(255,255,255,0.5)
  }
  a:focus{
    outline: 0;
    color: #3bc9db;
    text-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.5);
  }
</style>