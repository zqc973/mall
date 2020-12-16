<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">      
    <div v-if="!isActive">
      <slot name="item-icon" ></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active" ></slot>
    </div>      
    <div :style="activeFontColor">
      <slot name="item-text"></slot>
    </div>      
  </div>
</template>

<script>
export default {
  name:"tab-bar-item",
  props: {
    link: String,
    activeColor: {
      type: String,
      default() {
        return "#ff5777"
      } 
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeFontColor(){
      return this.isActive ? {color: this.activeColor} : {};
    }
  },
  methods: {
    itemClick(){
      if(! this.$route.path.lastIndexOf(this.link)==0){
        this.$router.replace(this.link)
      }
      
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    margin-top: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /* .active{
    color: #ff5777;
  } */
</style>
