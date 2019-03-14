<template>
  <div class="list">
    <div class="listcontent">
      <ul>
        <li>
          <router-link to='/aboutlist/checkbox'>
              checkbox
          </router-link>
        </li>
        <li>tablerender</li>
        <li>tableoperate</li>
      </ul>
      <router-view></router-view>  
    </div>
  </div>
</template>
<script>
</script>
<style>
  @import '../resume/public.css';
  .list{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    text-align: center;
    font-weight: 400;

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