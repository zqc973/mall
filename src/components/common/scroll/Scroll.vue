<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

export default {
  name : 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
      return {
          scroll: null
      }
  },
  mounted () {
    this._initScroll()
  },
  methods: {
    _initScroll() {
        BScroll.use(Pullup)
        //3.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })
        //2.监听滚动的位置
        this.scroll.on('scroll', (position) => {
          this.$emit("scroll", position)
        })
        //监听上拉事件
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit("pullingUp");
          })
        }
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time=300);
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();      
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}

</script>

<style scoped>

</style>