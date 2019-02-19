import Vue from "vue"
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import zh from './zh.js'
import en from './en.js'
Vue.use(VueI18n);
	//console.log({...zh});
const messages={
	zh:{ ...zh},
	en:{ ...en},
};
const i18n=new VueI18n({
	locale:Cookies.get('language') || 'en',
	messages,
})
// console.log(i18n);
export default i18n