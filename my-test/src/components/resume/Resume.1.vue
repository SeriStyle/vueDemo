<template>
  <div class="content">

    <!-- <el-container>
          <el-header>Header</el-header>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </el-container> -->










    <!-- <div class="resume" style='background-image: url("https://source.unsplash.com/random/575x757");'> -->
    <div class="resume" style='background-image: url("https://images.unsplash.com/photo-1550410668-07111b31da19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=813&h=757&fit=crop&ixid=eyJhcHBfaWQiOjF9");'>
    </div>
    <p class="slogan">I'm Lei Wang, a technical poet of China</p>
    <!-- <div class="cirle">
      <div class="header">

      </div>
    </div> -->

  </div>
</template>
<script>
  export default {
    name: "Resume",
    data() {
      return {
        input: '',

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
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .content {
    margin: 0;
    padding: 0;
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
    transition-delay: 0.5s;
    transition-duration: 2.5s;
    transition-property: opacity, filter, transform;
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
    text-shadow: 0 0 0.5rem rgba(0,0,0,.6);
    font-size: 2rem;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
    font-family: Againts;
    
 }

  @-webkit-keyframes cirle {
    from {
      -webkit-transform: rotate(0deg);
    }

    to {
      -webkit-transform: rotate(360deg);
    }
  }

  .cirle {
    position: absolute;
    top: 0;
    left: 0;
  }

  .cirle:hover {
    /* transition: transform 2s ease,border-radius 3s ease-out;
    transform: rotate(-360deg);  */
    animation: cirle 9s linear infinite;
  }

  .header {
    width: 150px;
    height: 150px;
    background-image: url('https://images.unsplash.com/photo-1550410668-07111b31da19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=813&h=757&fit=crop&ixid=eyJhcHBfaWQiOjF9');
    background-size: cover;
    border-radius: 50%;
    z-index: 100;
    font-family: Againts;
  }

  /*
  .slide-fade-enter-active {
    transition: all .7s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

   .slide-fade-leave-active for below version 2.1.8 
    {
    transform: translateX(20px);
    opacity: 0.6;
  }
*/

</style>
