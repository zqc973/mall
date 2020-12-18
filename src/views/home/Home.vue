<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control class="tab-control"
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControlFixed"
                  v-show="isTabFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3"
            :pullUpLoad="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="setTabOffsetTop"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control 
                  :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControl"/>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>    

    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecomendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'


import {getHomeMultidata, getHomeGoods} from 'network/home.js'
import {debounce} from 'assets/js/utils.js'


export default {
  name: "Home",
  components: { 
    HomeSwiper,   
    RecommendView,
    FeatureView,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners : [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }    
  },
  computed: {
    showGoods(){      
      return this.goods[this.currentType].list
    }
  },
  created() {
    //请求轮播图及推荐数据
    this.getHomeMultidata()

    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted () {    

    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("itemImageLoad", () => {      
      refresh();
    })    
    
  },
  activated () {
    this.$refs.scroll.refresh();
  },
  methods: {
    /**
     *事件监听相关方法 
     */
    tabClick(index) {
      switch (index){
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2: 
          this.currentType = 'sell'
          break; 
      }     
      this.$refs.tabControlFixed.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    backTop() {
      
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {   
      //判断backTop是否显示
      this.isShowBackTop = position.y < -600
      
      //决定TabControl是否吸顶
      this.isTabFixed = position.y < -this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType);

      this.$refs.scroll.finishPullUp();
    },
    setTabOffsetTop() {
      //获取tabControl的offsetTop
      //所有的组件都有一个$el：用于获取组件中的元素
     this.tabOffsetTop =  this.$refs.tabControl.$el.offsetTop
    },

    /**
     *网络请求相关方法 
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page += 1;
    })
    }

  }
}

</script>
<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
  .wrapper {
    /* height: calc(100% - 49px);  */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>