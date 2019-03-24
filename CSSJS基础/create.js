let obj=Object.create(null,{
   name:{
     value:'hss',
     enumerable:true,
   },
   age:{
     enumerable:true,
     get(){
       return "我的名字"+ this._Age;
     },
     set(value){
        this._Age=value;
     }
   }
})
obj.age="100";

function Obj2(pram){
   this.diglog(pram);
}
Obj2.prototype={
  constructor:Obj2,
  diglog(pram){
    console.log(pram);
  }
}
let newobj=new Obj2('AA----------');
console.log(newobj);
