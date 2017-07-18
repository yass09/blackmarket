<template>
  <section class="products-component-container">
    <h1 class="section-name">Les dernières paires</h1>
    <div class="product-group-container">
      <a :href="`/product/${product._id}`" v-for='product in products'>
        <div class="product-container">
          <img src='' alt="" class="product-thumbnail-img">
          <p class="product-name bold">{{product.brand}}</p>
          <p class="product-name">{{product.model}}</p>
          <p class="product-name light-grey bold">{{product.price | currency('€') }}</p>
        </div>
      </a>
    </div>
    <!-- <button class="button btn-md bg-dark-grey">Voir Plus</button> -->
  </section>
</template>
<script>
// import { products } from './test-data.js'
import axios from 'axios'
export default {
  data () {
    return {
      // products: products
      products: null
    }
  },
  created () {
    axios.get('http://localhost:5000/api/products/')
    .then(response => {
      console.log(response.data)
      this.products = response.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}

</script>
<style lang='scss'>

</style>
