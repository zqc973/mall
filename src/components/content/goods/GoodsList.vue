<!--  -->
<template>
  <div class="goods">
    <goods-list-item v-for="item in goods">
      <a :href="">
        <img :src="" alt="">
        <span></span>
        <span></span>
      </a>
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {  
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  components: { GoodsListItem }
}
</script>

<style  scoped>

</style>
