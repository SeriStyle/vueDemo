<template>
  <div>
    <pre>
    <code>
          var tiger = Object.create(cat, {
      say: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function() {
          console.log("roar!");
        }
      }
    });

    var anotherCat = Object.create(cat);

      anotherCat.say();

    var anotherTiger = Object.create(tiger);
    </code>
  </pre>
  <Line-Point v-bind:linevalue='linevalue'></Line-Point>

  <Proxy-Event></Proxy-Event>
  </div>
</template>
<script>
import LinePoint from "@/components/summary/LinePoint"
import ProxyEvent from "@/components/summary/ProxyEvent"

console.log("101"-2);
export default {
  components:{
    LinePoint,
    ProxyEvent,
  },
  data() {
    return {
      linevalue:[
        {date:'2019-01-24',content:"如何打造个人ip",url:'/tableForm'},
        {date:'2019-01-24',content:"如何打造个人ip",url:'/'},
        {date:'2019-01-24',content:"如何打造个人ip",url:'/tableForm'},
      ]
    };
  },
  created() {
    var o = { a: 1 };
    Object.defineProperty(o, "b", {
      value: 2,
      writable: false,
      enumerable: false,
      configurable: true
    });

    //a 和 b 都是数据属性o.b = 3;，但特征值变化了
    Object.getOwnPropertyDescriptor(o, "a"); // {value: 1, writable: true, enumerable: true, configurable: true}
    Object.getOwnPropertyDescriptor(o, "b"); // {value: 2, writable: false, enumerable: false, configurable: true}
    //
    console.log(Object.getOwnPropertyDescriptor(o, "a")); // 2

    var cat = {
      say() {
        console.log("meow~");
      },
      jump() {
        console.log("jump");
      }
    };

    var tiger = Object.create(cat, {
      say: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function() {
          console.log("roar!");
        }
      }
    });

    var anotherCat = Object.create(cat);

    // anotherCat.say();

    var anotherTiger = Object.create(tiger);

    //anotherTiger.say();
   function TangGuo(opt){
        this.a=opt.name;
        this.b=opt.address;
        console.log(this)
  
   }
     TangGuo.prototype={
        say(){
          console.log(this.b);
        },
  
     };
    new TangGuo({name:'hy',address:'北京'})

    console.log(TangGuo.__proto__);
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
      // Getter
      get area() {
        return this.calcArea();
      }
      // Method
      calcArea() {
        return this.height * this.width;
      }
    }

 
  },
  mounted() {},
  methods: {}
};
</script>
<style  scoped lang='scss'>
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>