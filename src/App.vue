<template>   
  <div >  
   <router-view/>  
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
