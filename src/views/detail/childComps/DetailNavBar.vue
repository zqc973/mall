<!--  -->
<template>
  <div class="nav-bar">
    <nav-bar>
      <template #left>
        <div class="back" @click="backClick">
            <img src="~assets/images/common/back.svg" alt="" />
        </div>
      </template>

      <template #center>
        <div class="title">
          <div v-for="(item,index) in titles" 
                :key="index"
                class="title-item" 
                :class="{active: currentIndex===index}"
                @click="titleClick(index)">
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>


<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },

  components: {
    NavBar,
  },
  methods: {
      backClick() {
        this.$router.back()
      },
      titleClick(index) {
        this.currentIndex = index
      }
  }
};
</script>

<style scoped>
  .nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .title {
    display: flex;   
    font-size: 13px; 
  }
  .title-item {
    flex: 1;
  }
  .back img {
    margin-top: 12px;
    width: 20px;
  }
  .active {
      color: var(--color-high-text);
  }
</style>