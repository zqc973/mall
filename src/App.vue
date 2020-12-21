<template>   
  <div >  
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
     
   <main-tab-bar/>
  </div>
</template>

<script>  
  import MainTabBar from "components/content/mainTabBar/MainTabBar.vue"

  export default {
    name: 'App',
    components: {
      MainTabBar
    }    
  }
</script>

<style>
  @import "assets/style/base.css"; 
  
</style>
