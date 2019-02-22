import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
 import am from '@/components/a'
// import main from '@/components/home'
import Settings from '@/components/person/Settings'
import EmailSubscriptions from '@/components/person/EmailSubscriptions'
import Profile from '@/components/person/Profile'
import ProfilePreview from '@/components/person/ProfilePreview'

Vue.use(Router)
   // component: () => import('@/views/login/index'),
export const constantRouterMap=[
      { path:'/settings',
        component:Settings,
        children:[ //子路由
        {
          path:'emails',
          component:() =>import('@/components/person/EmailSubscriptions'),//直接import的写法
        },
        {
          path:'profile',
          //redirect:'emails',
          components:{
            default:()=>import('@/components/person/Profile'),
            //default:Profile,另外一种写法
            helper:ProfilePreview,
          }
        },
        {
          path:'a',
          component:()=>import( '@/components/a'),
        },
        {
          path:'store',
          component:()=>import('@/components/storeTest/CityList'),
        }

      ]
      },
      {
        path:'/am',
        name:am,
        component:am,
      },
   
  ];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

/*
    {
      path: '/',
      name: 'main',
      component: main
    },{
      path:'/am',
      name:'am',
      component:am
    },
     {
      path: '/hello/:id',
      name: 'HelloWorld',
      component: HelloWorld
    }


*/ 



/*
export const constantRouterMap=[
      { path:'/settings',
        component:Settings,
        children:[
        {
          path:'emails',
          component:() =>import('@/components/person/EmailSubscriptions'),//直接import的写法
        },
        {
          path:'profile',
          //redirect:'emails',
          components:{
            default:()=>import('@/components/person/Profile'),
            //default:Profile,另外一种写法
            helper:ProfilePreview,
          }
        }]
      }
  ];

*/ 