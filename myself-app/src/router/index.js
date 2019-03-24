import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/resume/Resume'
Vue.use(Router)
export const constantRouterMap = [{
    path: '/',
    name: "resume", //name?
    component: Resume,
  },
  {
    path: '/wechat',
    component: () => import('@/components/resume/wechat/WeChat'),
  },
  {
    path: '/aboutlist',
    component: () => import('@/components/aboutlist/list'),
    children: [
      {
        path: 'showArtical',
        component: () => import('@/components/aboutlist/ShowArtical'),
      },
      {
        path: 'kinds',
        component: () => import('@/components/admin/PubKinds'),
      },
    ]
  },
  {
    path: '/detail/:id',
    component: () => import('@/components/aboutlist/SingleArt'),
  },
  {
    path: '/tableForm',
    component: () => import('@/components/admin/TableForm'),
  },
  {
    path: '/vuexdemo',
    component: () => import('@/components/admin/VuexDemo'),
  },
  {
    path: '/operate',
    component: () => import('@/components/admin/OperateTable'),
  },
  {
    path:'/summary',
    component:()=>import('@/components/summary/Summary')
  },
  {
    path:'https://juejin.im/post/5c8f9e595188252db756920c?utm_source=gold_browser_extension',
    name:'center',
    meta:{
      title:'文档',
      target:'_blank',//打开新窗口
    },
  }
];
export default new Router({
  mode:'history',
  scrollBehavior:()=>({
    y:0
  }),
  routes:constantRouterMap
})
