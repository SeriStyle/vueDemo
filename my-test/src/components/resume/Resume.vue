<template>
  <div class="content">

  <div>
    <h1 class="title">{{text.title}}</h1>
    <p class="slogan">{{text.slogan}}</p>
    <ul class="navi">
      <li >
        <router-link to='/wechat' exact>
          WeChat
        </router-link>
      </li>
      <li> <router-link to='/aboutlist' exact>
         AboutList </router-link></li>
      <li> 
        <a href="https://vuex.vuejs.org/zh/" target="_blank">
        Vue.js
        </a>
        </li>
      <li>
        <a href="mailto:styhss@qq.com" >
          Email
        </a>
        </li>
    </ul>
  </div>
  <div :class="classObject" :style='styleObject'>
  </div>
  </div>
</template>
<script>
  export default {
    name: "Resume",
    data() {
      return {
        width: 0,
        height: 0,
        loading: true,
        img: '',
        navidata:[
          {href:'/wechat',text:'WeChat'},
        ],
        text:{
          title:'Hei ! Guys',
          slogan:" I'm sangsang , a technical poet of China ",
        },
        classObject: {
          background: true,
          loading: true,
        },
        styleObject: {},
      }
    },
    props: {},
    directives: {},
    created() {
      this.componentWillMount();
    },
    mounted() {

    },
    methods: {
      handleLoad() {
        this.loading = false;
        this.classObject.loading = false;
        console.log("load");
      },
      componentWillMount() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.img = new window.Image();
        this.img.src = `https://source.unsplash.com/random/${width}x${height}`;
       
        console.log(this.img.src);
        this.styleObject = {
          'background-image': `url(${this.img.src})`,

        }
        this.img.onload = this.handleLoad; //图片加载成功后执行函数
      },
    },
  }

</script>
<style lang="scss" scoped>
  @import './public.css';

  .content {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title,
  .slogan {
    font-weight: 300;
    font-family:Againts;
    animation: fadeIn 2s both;
    letter-spacing:5px;
  }
  .title {
  
    margin: 0 0 1rem;
    margin-top: 200px;
    color:#eee;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8);
    font-size: 5rem;
    animation-delay: 0.25s;
  }
  .slogan {
    margin: 0 0 4rem;
    color:#e0cd22;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.6);
    font-size: 2rem;
    animation-delay: 0.5s;
  }
  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    background-size: 0;
  }
  .background::before,
  .background::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }
  .background::before {
    background: no-repeat center / cover;
    background-image: inherit;
    transition-delay: 0.5s;
    transition-duration: 2.5s;
    transition-property: opacity, filter, transform;
  }
  .background.loading::before {
    opacity: 0;
    filter: blur(5rem);
    transform: scale(1.35);
  }
  .background::after {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.6)), 0 / 1px url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><g><rect x="0" y="0" width="1" height="1"/><rect x="1" y="1" width="1" height="1"/></g></svg>');
  }
.navi{
  animation: fadeIn 2s 0.75s both;
}
.router-link-active{
	color:gold;
}
</style>
