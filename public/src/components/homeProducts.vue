<template>
  <div class="products-component-container">
    <h1 class="section-name">Les dernières paires</h1>
    <div class="product-group-container">
      <div class="product-container" v-for='product in products'>
        <img :src="product.thumbnail" alt="" class="product-thumbnail-img">
        <h2 class="product-name">{{product.brand}}</h2>
        <h2 class="product-name">{{product.name}}</h2>
        <h1 class="product-name light-grey">{{product.price | currency('€') }}</h1>
      </div>
    </div>
    <button class="button bg-dark-grey">Voir Plus</button>
  </div>
</template>
<script>
import { products } from './test-data.js'
import Vue from 'vue'

Vue.filter('currency', (value, currencySign) => {
  // return '€ ' + value
  return `${currencySign} ${value.toLocaleString('en-UK')}`
})

export default {
  data () {
    return {
      products: products
    }
  }
}

</script>
<style lang='scss'>

.product-thumbnail-img{
  width: 225px;
  margin-bottom: 10px
}

.products-component-container{
  margin-top: 50px;
  max-width: 75%;
  .button{
    font-size: 1.6rem;
    margin: 30px 0 0 0;
  }
}

.product-container{
  @include flex-column-center;
  margin: 10px
}

.product-group-container{
  @include flex-row-wrap-center;
}

.product-name, .product-price{
  margin-bottom: 5px;
}

</style>
