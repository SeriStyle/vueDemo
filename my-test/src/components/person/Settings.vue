<template>
	<div class="us">  
	  <!-- <keep-alive> -->
	  	 <Navsett/>
	  <!-- </keep-alive> -->
      <!-- <Subscriptions/> -->
 <router-view/>
	<!-- <transition name="slide-fade" > -->
    <!-- <router-view class="us__conten"></router-view> -->
	<!-- </transition> -->
      <!-- <router-view name="helper" class="us__conten us__content--helper"></router-view>	 -->
	</div>
</template>
<script>
import Nav from "@/components/person/Nav"
import Subscriptions from "@/components/person/Subscriptions"
	export default{
		name:'Settings',
		components:{
			"Navsett":Nav,
			Subscriptions,
		},
		data(){
			return {

			}
		}
	}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>