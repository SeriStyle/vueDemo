<template>
  <div>
  <ul id="test">
        <li class="a11">
            <p>11111111111</p>
        </li>
        <li class="a22">
            <div class="aa22"> 
              2222222222222
            </div>
        </li>
        <li class="a33">
            <span>3333333333</span>
        </li>
        <router-link  to="center"> <li>4444444</li></router-link>
       
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
       
    }
  },
  mounted(){
    var oUl = document.getElementById('test');
    oUl.addEventListener('click',function(ev){
        var target = ev.target;
        while(target !== oUl ){
            if(target.tagName.toLowerCase() == 'li'){
               console.log(target.className);

                switch(target.className){
                   case "a11":
                
                  this.a11(target);
                  break;
                  case "a22":
                  this.a22();
                   target.style.color='pink';
                    break;
                }
            }
            target = target.parentNode;
        }
    }.bind(this))
   },
  methods: {
    a11(target){
        target.style.backgroundColor='#f40';
       console.log(target);
    },
    click1(e){
     console.log(e);
     let ele=e.target;
     let ele2=e.srcElement.firstElementChild;
     console.log(ele);
     console.log(ele2);
    //  ele2.style.color='red';
    console.log(ele.nodeName.toLocaleLowerCase());
    
       if(ele.nodeName.toLowerCase()=='li'){
          alert(ele.innerHTML)
       }

    },
    click2(e){
 
         console.log(e,"222222222222222");
    }

  },
}
</script>
<style>
  
</style>
