import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
let store=new Vuex.Store({
  // state
  state:{
    city:"城市名",
  },
  // getters
  getters:{
    getCityFn(state){
      return state.city;
    }
  },
  actions:{
    // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
    setCityName({commit,state},name){
      commit("setCity",name);
    }
  },
  mutations:{
    setCity(state,name){
      state.city=name; //讲传参设置给state的city
    }
  }
})
export default store;