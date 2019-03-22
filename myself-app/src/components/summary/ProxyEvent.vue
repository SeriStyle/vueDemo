<template>
  <div>
    <ul>
      <li>aaaaaaaaaaa</li>
      <li @click="click1($event)" >bbbbbb

          <p @click="click2($event)" >cccccccc</p>
      </li>
    
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){ },
  methods: {
    click1(e){
     console.log(e);
     let ele=e.target;
     ele.style.color='red';
    },
    click2(e){
       e.stopPropagation();
         // console.log(e,"222222222222222");
    }
  },
}
</script>
<style>
  
</style>
