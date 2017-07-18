<template>
  <main class="product-page view-container">
    <back-button></back-button>
    <div class="if-container" v-if='product'>
      <header class="header-container">
        <p class="header-name">{{product.brand}}</p>
        <p class="header-name">{{product.model}}</p>
        <p class="header-data-name">{{product.colorway}}</p>
        <p class="header-data-name">{{product.productionYear}}</p>
      </header>
      <section class="section-lg">
        <div class="product-photo-group-container">
          <img src='https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63611742948-air-jordan-1-x-fragment-fragment-black-sport-royal-white-012101_1.jpg' alt="" class="product-hero-photo">
        </div>
        <div class="product-info-container">
          <h1 class="section-name">A propos de ce vendeur</h1>
          <div class="product-seller-info">
            <a href="/profile" class="user-info-container">
              <div class="log-status-container">
                <div class="log-status-img"></div>
                <p class="log-status-name">{{ owner.username | titlecase }}</p>
              </div>
            </a>
            <div class="user-info-container">
              <p class="header-data-name">Membre depuis</p>
              <p class="header-info">{{ owner.dateCreated | date }}</p>
            </div>
            <div class="user-info-container">
              <p class="header-data-name">Lieux</p>
              <p class="header-info">{{ owner.city }}, {{ owner.country }}</p>
            </div>
          </div>
          <div class="user-info-container">
            <p class="header-data-name">Tailles disponibles</p>
            <p class="header-data-name">{{product.size[0]}}</p>
          </div>
          <div class="user-info-container">
            <p class="header-data-name">{{ product.price | currency('€') }}</p>
          </div>
          <div class="user-info-container">
            <button class="button btn-lg bg-light-grey" v-if='isSold'>Vendu</button>
            <button class="button btn-lg bg-dark-grey" @click='purchaseProcess' v-else>Acheter</button>
          </div>
          <div class="user-info-container" v-if='isOwner && !isSold'>
            <p class="header-info edit">Ce produit vous appartient</p>
            <a :href="`/edit-product/${product._id}`"><button class="button btn-lg bg-light-grey">Modifier</button></a>
          </div>
        </div>
      </section>
      <section class="products-component-container">
        <h1 class="section-name">Les autres paires de ce vendeur</h1>
        <div class="product-group-container">
          <a :href="`/product/${product._id}`" v-for='product in ownerProducts'>
            <div class="product-container">
              <img src='' alt="" class="product-thumbnail-img">
              <p class="product-name bold">{{product.brand}}</p>
              <p class="product-name">{{product.model}}</p>
              <p class="product-name light-grey bold">{{product.price | currency('€') }}</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import axios from 'axios'
import BackButton from './back-button.vue'

export default {
  data () {
    return {
      product: null,
      owner: null,
      allProducts: [],
      ownerProducts: []
    }
  },
  components: {
    BackButton
  },
  methods: {
    getProduct () {
      axios.get('http://localhost:5000/api/products/' + this.$route.params.product_id)
      .then(response => {
        this.product = response.data
        console.log(response.data)
        this.getUser()
        this.getProducts()
      })
      .catch(err => {
        console.log(err)
      })
    },
    getUser () {
      axios.get('http://localhost:5000/api/users/' + this.product._owner)
      .then(response => {
        this.owner = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    getProducts () {
      axios.get('http://localhost:5000/api/products/')
      .then(response => {
        this.allProducts = response.data
        this.filterProducts()
      })
      .catch(err => {
        console.log(err)
      })
    },
    makePurchase () {
      axios.put('http://localhost:5000/api/products/' + this.$route.params.product_id, this.product)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    purchaseProcess () {
      if (!this.$store.getters.logStatus) {
        this.$router.replace('/login')
      } else if (!this.product._buyer) {
        this.product._buyer = localStorage.getItem('id')
        this.makePurchase()
        this.sold = true
        this.$router.push('/success-purchase')
      }
    },
    filterProducts () {
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i]._owner === this.owner.id) {
          this.ownerProducts.push(this.allProducts[i])
        }
      }
    }
  },
  computed: {
    isSold () {
      if (this.product._buyer) {
        return true
      } else {
        return false
      }
    },
    isOwner () {
      if (this.product._owner === localStorage.getItem('id')) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.getProduct()
  }
}
</script>
<style lang="scss">
.product-page{
  .header-container{
    margin: 0;
    .header-name{
      font-weight: bold;
      font-size: 4.5vh;
    }
    .header-data-name{
      margin: 5px 10px
    }
  }
}

.product-photo-group-container{
  min-width: 50vw;
  padding: 20px;
  .product-hero-photo{
    width: 50vw
  }
}

.product-seller-info{

}
.product-info-container{
  @include flex-column-center;
  width: 30vw;
  min-width: 285px;
  h1.section-name{
    margin-bottom: 10px
  }
  .header-data-name{
    margin-bottom: 8px;
  }
  .header-info{
    &.edit{
      margin-bottom: 10px
    }
  }
  .user-info-container{
    margin: 10px 0;

    .log-status-img{
      margin: 0;
      margin-right: 10px;
    }
  }
}


</style>
