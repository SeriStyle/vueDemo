// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
// import {Button,Select,Option ,Form} from 'element-ui'; 按需加载
import i18n from './lang/i18n';
import './icons' // icon
import store from './store/store.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.component(Button.name,Button); 按需加载
Vue.use(VueAxios,axios);
 Vue.use(ElementUI)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  // components: { App },
 render: h => h(App) ,//渲染视图同上功能，创建一个元素
  // template: '<App/>'
})
