<!--  -->
<template>
  <tab-bar>
      <tab-bar-item link="/home" activeColor="#ff5777">
        <template v-slot:item-icon>
           <img src="~assets/images/tabbar/home.svg" />
        </template>   
        <template v-slot:item-icon-active>
           <img src="~assets/images/tabbar/home_active.svg" />
        </template>    
        <template v-slot:item-text>
           <div >首页</div>
        </template>        
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="#ff5777">        
        <template v-slot:item-icon>
           <img src="~assets/images/tabbar/category.svg" />
        </template>  
        <template v-slot:item-icon-active>
           <img src="~assets/images/tabbar/category_active.svg" />
        </template>     
        <template v-slot:item-text>
           <div >分类</div>
        </template> 
      </tab-bar-item>
      <tab-bar-item link="/shopcart" activeColor="#ff5777">
        <template v-slot:item-icon>
           <img src="~assets/images/tabbar/shopcart.svg" />
        </template> 
        <template v-slot:item-icon-active>
           <img src="~assets/images/tabbar/shopcart_active.svg" />
        </template>      
        <template v-slot:item-text>
           <div >购物车</div>
        </template> 
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="#ff5777">
        <template v-slot:item-icon>
           <img src="~assets/images/tabbar/profile.svg" />
        </template>  
        <template v-slot:item-icon-active>
           <img src="~assets/images/tabbar/profile_active.svg" />
        </template>     
        <template v-slot:item-text>
           <div >我的</div>
        </template> 
      </tab-bar-item>
     </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar.vue"
  import TabBarItem from "components/common/tabbar/TabBarItem.vue"

export default {
  name: "MainTabBar",
  data () {
    return {
    };
  },
  components: {
      TabBar,
      TabBarItem
  }
}

</script>
<style scoped>
</style>