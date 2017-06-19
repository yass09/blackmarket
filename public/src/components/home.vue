<template>
  <div class="home view-container">
    <home-heading></home-heading>
    <home-products></home-products>
  </div>
</template>

<script>

import HomeHeading from './homeHeading.vue'
import HomeProducts from './homeProducts.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeading,
    HomeProducts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

</style>
