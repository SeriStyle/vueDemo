<template>
  <div class="content">


    <h1>Hei !  Guys</h1>
    <p class="slogan">I'm sangsang , a technical poet of China</p>
    <ul class="navi">
      <li > 
        <router-link  to='/wechat'>
            WeChat
        </router-link>
       </li>
      <li>Blog</li>
      <li>GitHub</li>
      <li>Email</li>
    </ul>
  
    <div class="resume" style='background-image: url("https://source.unsplash.com/random/575x757");'>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Resume",
    data() {
      return {
        input: '',
        chat:'https://www.baidu.com/',

      }
    },
    props: {

    },
    directives: { //自定义指令
      focus: {
        inserted(el) {
          console.log(el);
          console.log(window);
          console.log(document.URL);
          // el.focus();实现聚焦 （1）
        }
      }
    },
    created() {
      console.log("---------------");
    },
    mounted() {
      // this.$refs.input.autofocus=true;  实现聚焦 （2） 
    },
    methods: {
      blurEvent() {
        this.change2 = false;
        this.change1 = true;
        if (this.vlau) {
          this.vlau = vlau;
        } else {
          this.vlau = "请输入个性签名";
        }
      },
      focuEvent() {
        this.change2 = true;
        this.change1 = false;
        this.vlau = '';
      }

    },
  }

</script>
<style lang="scss" scoped>
  @import url(https://fonts.googleapis.com/css?family=Exo+2);

  .content {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #eee;
    
  }
  ul li{
    list-style: none;
    display: inline;
    padding: 20px;
  }

  .resume {

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    background-size: 0;
    background: no-repeat center / cover;
    background-image: inherit;
  }

  .resume::after,
  .resume::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
  }

  .resume::before {
    background: no-repeat center / cover;
    background-image: inherit;
    transition-delay: 0.5s;
    transition-duration: 2.5s;
    transition-property: opacity, filter, transform;
  }

  .resume.loading::before {
    opacity: 0;
    filter: blur(5rem);
    transform: scale(1.25);
  }

  .resume::after {
    background: linear-gradient(transparent, rgba(0, 0, 0, .4) 60%, rgba(0, 0, 0, .9)), 0/1px url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path d="M0 0h1v1H0zM1 1h1v1H1z"/></svg>')
  }

  .slogan {
    margin: 0 0 4rem;
    color: #eee;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, .6);
    font-size: 2rem;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
    font-family: Againts;

  }


</style>
