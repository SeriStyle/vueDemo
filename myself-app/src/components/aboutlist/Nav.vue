<template>
    <div class="list">
      <div class="listcontent">
        <ul>
          <router-link to='/aboutlist/showArtical'>
          <li>
            {{navarr[0]}}
          </li>
          </router-link>
          <router-link to='/aboutlist/pizza'>
          <li>
            {{navarr[1]}}
          </li> 
          </router-link>
         
        </ul>
      </div>
  
    </div>
  
  </template>
  <script>

    export default{
      components:{

         },
       data() {
         return {
           navarr:['Artical','Admin'],
         }
       },
    }
  </script>
  <style scoped>
    @import '../resume/public.css';
    .list{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      text-align: center;
      font-weight: 400;
     /* position: fixed; */
    }
    ul li{
      display: inline-block;
      list-style:none;
      padding: 0;
      margin: 0;
      padding-left: 30PX;
    
    }
    .listcontent{
      height: 50px;
      color: aliceblue;
      background-color: #15254a;
      width: 100vw;
      font-size: 16PX;
    
    }
    .router-link-exact-active {
      font-size: 20px;
      color: #52bec7;
    }
  </style>