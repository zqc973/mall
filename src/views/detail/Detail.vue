<!--  -->
<template>
  <div>
      <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue';
export default {
  components: { DetailNavBar },
  name : 'Detail', 
  data () {
    return {
        iid: null
    };
  },
  created() {
      this.iid = this.$route.params.iid      
  },

  methods: {}
}

</script>

<style scoped>

</style>