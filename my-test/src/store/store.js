import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const moduleA={
    // state
    state:{
      city:"城市名",
      todoprams:"修改值",

    },
    // getters
    getters:{
      getCityFn(state){
        return state.city;
      },
      getToDo(state){
        return state.todoprams;
      },
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
};
// 测试
const moduleB={
   state:{
    eleValu:4,
   },
   getters:{
     getAVal(state){
        return state.eleValu;
     }
   },
   actions:{
     setAVal({commit,state},name){
       commit("setA",name);
     }
   },
   mutations:{
     setA(state,name){
       state.eleValu=name;
     }
   }
}
let store=new Vuex.Store({
  modules:{
    a:moduleA,
    b:moduleB,
  }
})
export default store;