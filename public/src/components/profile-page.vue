<template lang="html">
  <main class="profile view-container">
    <back-button></back-button>
    <header class="header-container">
      <div class="header-img"></div>
      <p class="header-name">{{ user.username | titlecase}}</p>
      <div class="button-container">
        <a :href="`/edit-profile/${user.id}`" v-if='isLoggedIn'><button class="button btn-md bg-light-grey">Modifier</button></a>
        <a href="/sell"><button class="button btn-md bg-dark-grey">Vendre</button></a>
      </div>
      <p class="log-status-name" v-if='isLoggedIn' @click='logOut'>Deconnexion</p>
      <div class="user-info-group-container">
        <div class="user-info-container">
          <p class="header-data-name">Lieux</p>
          <p class="header-info">{{ user.city }}, {{ user.country }}</p>
        </div>
        <div class="user-info-container">
          <p class="header-data-name">Membre depuis</p>
          <p class="header-info">{{ user.dateCreated | date }}</p>
        </div>
        <div class="user-info-container">
          <p class="header-data-name">Ventes</p>
          <p class="header-info">{{ sales }}</p>
        </div>
      </div>
    </header>
    <section class="product-component-container">
      <div class="product-display-container">
        <h1 class="section-name" v-bind:class="{focused: category ==='vente'}"  @click="category ='vente'">A Vendre</h1>
        <h1 class="section-name" v-bind:class="{focused: category ==='collection'}" @click="category ='collection'">Collection</h1>
      </div>
      <div class="product-group-container" v-if="category === 'vente'">
        <a :href="`/product/${ownerProduct._id}`" v-for='ownerProduct in ownerProducts'>
          <div class="product-container">
            <img src='' alt="" class="product-thumbnail-img">
            <p class="product-name bold">{{ownerProduct.brand}}</p>
            <p class="product-name">{{ownerProduct.model}}</p>
            <p class="product-name light-grey bold">{{ownerProduct.price | currency('€') }}</p>
          </div>
        </a>
      </div>
      <div class="product-group-container" v-else>
        <a :href="`/product/${buyerProduct._id}`" v-for='buyerProduct in buyerProducts'>
          <div class="product-container">
            <img src='' alt="" class="product-thumbnail-img">
            <p class="product-name bold">{{buyerProduct.brand}}</p>
            <p class="product-name">{{buyerProduct.model}}</p>
            <p class="product-name light-grey bold">{{buyerProduct.price | currency('€') }}</p>
          </div>
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import BackButton from './back-button.vue'

export default {
  data: () => {
    return {
      user: null,
      userId: localStorage.getItem('id'),
      category: 'vente',
      allProducts: [],
      ownerProducts: [],
      buyerProducts: [],
      soldProducts: [],
      sales: 0
    }
  },
  components: {
    BackButton
  },
  methods: {
    logOut () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    getUser () {
      axios.get('http://localhost:5000/api/users/' + this.userId)
      .then(response => {
        this.user = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    getProducts () {
      axios.get('http://localhost:5000/api/products/')
      .then(response => {
        this.allProducts = response.data
        this.filterOwnerProducts()
        this.filterBuyerProducts()
        this.filterSales()
      })
      .catch(err => {
        console.log(err)
      })
    },
    filterOwnerProducts () {
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i]._owner === this.user.id) {
          this.ownerProducts.push(this.allProducts[i])
        }
      }
    },
    filterBuyerProducts () {
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i]._buyer && this.allProducts[i]._buyer === this.user.id) {
          this.buyerProducts.push(this.allProducts[i])
        }
      }
    },
    filterSales () {
      for (let i = 0; i < this.allProducts.length; i++) {
        if (this.allProducts[i]._buyer) {
          this.soldProducts.push(this.allProducts[i])
        }
      }
      this.sales = this.soldProducts.length
    }
  },
  mounted () {
    this.getUser()
    this.getProducts()
  },
  created () {
    if (!this.$store.getters.logStatus) {
      this.$router.replace('/login')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.logStatus
    }
  }
}
</script>

<style lang="scss">
.profile{
  .header-container{
    width: 80%
  }
  .header-img{
    border-radius: 50%;
    height: 12vh;
    width: 12vh;
    background: url('../assets/img/blackmarket-logo.svg') no-repeat center / 75% 100%;
    border: 3px solid $lightgrey;
  }
  .log-status-name{
    margin-top: 10px;
    cursor: pointer;
  }

  .product-group-container{
    min-height: 400px;
  }
}

.product-display-container{
  .section-name{
    color: $lightgrey;
    margin: 10px;
    &.focused{
      color: black;
      border-bottom: 4px solid $darkgrey;
    }
  }
}

</style>
