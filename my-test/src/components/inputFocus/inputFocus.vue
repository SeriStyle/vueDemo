<template>
  <div class="input">
    <p>自定义指令用法</p>
    <!-- <input type="text" v-model="vlau" v-focus ref='input' @blur="blurEvent" v-on:focus="focuEvent" :class="{'inputbac1':change1,'inputbac2':change2,}"> -->
    <input type="text" v-on:input="$emit('input',$event.target.value)" >
    <ul>
      <li v-for="(item,index) in arr" :key="index">
        {{item.label}}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "inputFocus",
    data() {
      return {
        input: '',
        change1: true,
        change2: false,
        vlau:'请输入个性签名',
      }
    },
    props: {
      arr: {
        type: Array,
        default: '',
      },
    },
    directives: { //自定义指令
      focus: {
        inserted(el) {
          console.log(el);
          console.log(window);
          console.log(document.URL);
          // el.focus();实现聚焦 （1）
        }
      }
    },
    created() {

    },
    mounted() {
      // this.$refs.input.autofocus=true;  实现聚焦 （2） 
    },
    methods: {
      blurEvent() {
        this.change2 = false;
        this.change1 = true;
        if(this.vlau){
          this.vlau=vlau;
        }else{
          this.vlau="请输入个性签名";
        }
      },
      focuEvent() {
        this.change2 = true;
        this.change1 = false;
        this.vlau='';
      }

    },
  }

</script>
<style lang="scss" scoped>
  .input {
    background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1887776369,1495007136&fm=26&gp=0.jpg');
    background-repeat: no-repeat;
    width: 400px;
    height: 100%;
  }

  input {
    margin: 10px;
  }

  .inputbac1 {
    border: none;
    background: rgba(0, 0, 0, 0);
    outline: none;
    color: antiquewhite;
  }

  ul li {
    color: antiquewhite;
  }

  .inputbac2 {
    background: white;
    border: 1px solid rosybrown;
    outline: none;
  }

</style>
