<!--  -->
<template>
  <div class="detail">
      <detail-nav-bar/>
      <scroll ref="scroll">
        <detail-swiper :topImages="topImages"/>
        <detail-base-info :goods="goodsInfo"/>
        <detail-shop-info :shop="shopInfo"/>
        <detail-image-info :detailInfo="detailInfo"/>
      </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';

import Scroll from 'components/common/scroll/Scroll.vue';

import {getDetail,Goods} from 'network/detail.js'
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailImageInfo from './childComps/DetailImageInfo.vue';

export default {  
  name : 'Detail', 
  data () {
    return {
        iid: null,
        topImages: [],
        goodsInfo: {},
        shopInfo: {},
        detailInfo: {}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,

    Scroll,
    DetailShopInfo,
    DetailImageInfo 
  },
  created() {
    this.iid = this.$route.params.iid   
      
    this.getDetail();
  },
  methods: {
    getDetail() {
      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.result;

        //获取轮播图
        this.topImages = data.itemInfo.topImages;
      
        //获取基本信息
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      
        //获取店铺信息
        this.shopInfo = data.shopInfo;

        //获取商品详情信息
        this.detailInfo = data.detailInfo
      });
    }
  }
}

</script>

<style scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.wrapper {
  background: #fff;
  height: calc(100% - 44px);
}
</style>