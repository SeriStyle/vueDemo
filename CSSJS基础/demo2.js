function A(pram){
  // console.log(pram)
function A2(){
   console.log("a2-------------------");
 }
 A2();

}

//console.log(typeof A)
var a=[];
//console.log(a )

//console.log(Array.prototype.isPrototypeOf(a))


console.log(Array.isArray(a))
console.log(a instanceof Array);

const cl={
  a:'',
  b:'aaaaaaaa'
};
Object.defineProperties(cl,{
  'a':{
    
    // writable:false, //可修改变为false，不可赋值更改
    get(){

    },
    set(){
    
    }
  },
},
)

cl.a='你好';
console.log(cl);