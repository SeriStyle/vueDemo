<template>
	<div>
		<h3>Email Subscriptions</h3>
		<input type="button" value="点击触发" @click="eleByValu">
	</div>
</template>
<script>
	// 引入公共的bug，来做为中间传达的工具
	import Bus from "@/bus.js" 
	export default{
		name:'EmailSubscriptions',
		data(){
			return {
        eleValu:4,
			}
		},
		methods: {
			eleByValu(){
				this.$store.dispatch('setAVal','你好');
				this.$router.push('/settings/profile');
				console.log(this.eleValu);
      // Bus.$emit('val',this.eleValu) 使用这个bus来实现不同组件之间通行，失败；另外一个组件是profile
			},
		},
	}
</script>
<style scoped>
   div{
   	background-color: green;
		 width: 200px;
		 height: 40px;
		 line-height: 40px;
   }
</style>