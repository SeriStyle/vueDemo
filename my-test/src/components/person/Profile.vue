<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li v-for="(value, key) in data" v-bind:key="key">{{value}}</li>
    </ul>
    <div class="loading-wrapper"></div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        data: [1,2,3,4,5,6]
      }
    },
    created() {
      // this.loadData()
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
      }
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