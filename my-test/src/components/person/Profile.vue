<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="(value, key) in data" v-bind:key="key">{{value}}</li>
    </ul>
    <div class="loading-wrapper"></div>
    <input type="button" value="点击触发" @click='getData'>
    <span>{{getval}}</span>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Bus from "@/bus.js" 
  export default {
    data() {
      return {
        data: [1,2,3,4,5,6],
        eleValu:0,
      }
    },
    created() {
      // this.loadData()
      console.log(this.data);
    },
    mounted(){
      var vm=this
      //用 $on 事件接受参数
      // Bus.$on('val',(data)=>{ 
      //   vm.name=data
      //   console.log(vm.name)
      // })
     
    },
    computed: {
      getval(){
        //通过vuex的getters方法来获取state里面的数据
        return this.$store.getters.getAVal
      }
    },
    methods: {
      loadData() {
        requestData().then((res) => {
          this.data = res.data.concat(this.data)
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapper, {})
              this.scroll.on('touchend', (pos) => {
                // 下拉动作
                if (pos.y > 50) {
                  this.loadData()
                }
              })
            } else {
              this.scroll.refresh()
            }
          })

          
        })
      },
      getData(){ //
        this.name++
      },
    }
  }
</script>




















<!-- 
<template>
	<div>
		<h3>Edit your profile</h3>
       <sub-sri/>
	</div>
</template>
<script>
import Subscriptions from "@/components/person/Subscriptions"
	export default{
		name:'Profile',
		components:{
			"sub-sri":Subscriptions,
		},
		data(){
			return {

			}
		}
	}
</script>
<style scoped>
   div{
   	background-color: #f40;
   }
</style> -->