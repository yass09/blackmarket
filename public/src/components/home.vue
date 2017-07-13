<template>
  <main class="home view-container">
    <home-heading></home-heading>
    <home-products></home-products>
  </main>
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

<style lang='scss'>

</style>
