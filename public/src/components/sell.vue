<template lang="html">
  <main class="sell view-container">
    <header class="header-container">
      <img src="../assets/img/blackmarket-logo.svg" alt="" class="header-img">
      <h1 class="header-name">Vendre</h1>
    </header>
    <section class="sell-content">
      <form action="" class="sell-form common-form-container" @submit.prevent v-bind:class="{'show-hide': isListed}">
        <div class="input-container">
          <label for="" class="input-label">Marque</label>
          <select class="input input-md" v-model="productData.brand">
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Reebok">Reebok</option>
            <option value="Puma">Puma</option>
            <option value="Asics">Asics</option>
            <option value="Diadora">Diadora</option>
          </select>
        </div>
        <div class="input-container">
          <label for="" class="input-label">Modèle</label>
          <input type="text" class="input input-md" v-model="productData.model">
        </div>
        <div class="input-container">
          <label for="" class="input-label">Couleur</label>
          <select class="input input-md" v-model="productData.colorway">
            <option value="Noir">Noir</option>
            <option value="Blanc">Blanc</option>
            <option value="Bleu">Bleu</option>
            <option value="Rouge">Rouge</option>
            <option value="Vert">Vert</option>
          </select>
        </div>
        <div class="input-container">
          <label for="" class="input-label">Année de Production</label>
          <input type="number" minlength='4' maxlength="4" class="input input-md" v-model="productData.productionYear">
        </div>
        <div class="input-container">
          <label for="" class="input-label">Taille</label>
          <input type="Number" class="input input-md" v-model="productData.size">
        </div>
        <div class="input-container">
          <label for="" class="input-label">Prix</label>
          <input type="text" class="input input-md" v-model="productData.price">
        </div>
        <button @click="postProduct" class="button btn-lg bg-dark-grey">Vendre</button>
        <p class="general-error" v-if="isListed=='failed'">Impossible de mettre en vente votre paire</p>
      </form>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      productData: {
        brand: '',
        model: '',
        colorway: '',
        productionYear: '',
        size: '',
        price: '',
        token: localStorage.getItem('token')
      },
      currentLog: {},
      isListed: ''
    }
  },
  methods: {
    postProduct () {
      axios.post('http://localhost:5000/api/products', this.productData)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">

</style>
