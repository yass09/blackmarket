<template lang="html">
  <main class="sell view-container">
    <back-button></back-button>
    <header class="header-container">
      <img src="../assets/img/blackmarket-logo.svg" alt="" class="header-img">
      <h1 class="header-name">Modifier Votre Paire</h1>
    </header>
    <section class="sell-content">
      <form action="" enctype="multipart/form-data" class="sell-form common-form-container" @submit.prevent>
        <p for="" class="input-label">Photos</p>
        <div class="sell-photo-group-container">
          <div class="sell-photo-container">
            <div v-if='!currentImage' class="sell-photo-upload-container">
              <p class="sell-photo-add">+</p>
              <input class="input input-md" accept="image/*" type="file" name="" value="" @change="onFileChange">
            </div>
            <div v-else class="sell-photo-upload-container">
              <img class='sell-uploaded-img' :src='currentImage' alt="">
            </div>
            <div class="sell-photo-controls">
              <img v-if='currentImage' @click='removeImage' class="sell-photo-icon" src="../assets/img/garbage.svg" alt="">
            </div>
          </div>
          <div class="sell-photo-container">
            <div v-if='!currentImage' class="sell-photo-upload-container">
              <p class="sell-photo-add">+</p>
              <input class="input input-md" accept="image/*" type="file" name="" value="" @change="onFileChange">
            </div>
            <div v-else class="sell-photo-upload-container">
              <img class='sell-uploaded-img' :src='currentImage' alt="">
            </div>
            <div class="sell-photo-controls">
              <img v-if='currentImage' @click='removeImage' class="sell-photo-icon" src="../assets/img/garbage.svg" alt="">
            </div>
          </div>
          <div class="sell-photo-container">
            <div v-if='!currentImage' class="sell-photo-upload-container">
              <p class="sell-photo-add">+</p>
              <input class="input input-md" accept="image/*" type="file" name="" value="" @change="onFileChange">
            </div>
            <div v-else class="sell-photo-upload-container">
              <img class='sell-uploaded-img' :src='currentImage' alt="">
            </div>
            <div class="sell-photo-controls">
              <img v-if='currentImage' @click='removeImage' class="sell-photo-icon" src="../assets/img/garbage.svg" alt="">
            </div>
          </div>
          <div class="sell-photo-container">
            <div v-if='!currentImage' class="sell-photo-upload-container">
              <p class="sell-photo-add">+</p>
              <input class="input input-md" accept="image/*" type="file" name="" value="" @change="onFileChange">
            </div>
            <div v-else class="sell-photo-upload-container">
              <img class='sell-uploaded-img' :src='currentImage' alt="">
            </div>
            <div class="sell-photo-controls">
              <img v-if='currentImage' @click='removeImage' class="sell-photo-icon" src="../assets/img/garbage.svg" alt="">
            </div>
          </div>
        </div>
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
        <div class="button-container">
          <button @click="removeProduct" class="button btn-lg bg-light-grey">Supprimer</button>
          <button @click="updateProduct" class="button btn-lg bg-dark-grey">Vendre</button>

        </div>
        <p class="general-error" v-if="isListed=='failed'">Impossible de mettre en vente votre paire</p>
      </form>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import BackButton from './back-button.vue'

export default {
  data: () => {
    return {
      productData: {},
      isListed: null,
      currentImage: ''
    }
  },
  components: {
    BackButton
  },
  methods: {
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
      console.log(files[0])
    },
    createImage (file) {
      this.currentImage = new Image()
      let reader = new FileReader()
      reader.onload = (e) => {
        this.currentImage = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.currentImage = ''
    },
    getProduct () {
      axios.get('http://localhost:5000/api/products/' + this.$route.params.product_id)
      .then(response => {
        console.log('RECEIVED THIS', response.data)
        this.productData = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateProduct () {
      axios.put('http://localhost:5000/api/products/' + this.$route.params.product_id, this.productData)
      .then(response => {
        console.log(response.data)
        this.$router.push('/success-sale')
      })
      .catch(err => {
        console.log(err)
      })
    },
    removeProduct () {
      axios.delete('http://localhost:5000/api/products/' + this.$route.params.product_id)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    if (!this.$store.getters.logStatus) {
      this.$router.replace('/login')
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style lang="scss">
.sell-photo-group-container{
  width: $full;
  @include flex-row-wrap-center;
}

.sell-photo-container{
  @include flex-column-center;
  margin: 20px;
  width: 250px;
}
.sell-photo-controls{
  background-color: $lightgrey;
  border-top: 1px solid white;
  width: $full;
  height: 40px;
  @include flex-row;
  justify-content: flex-end;
  padding: 0 15px;
}

.sell-photo-icon{
  width: 20px;
}

.sell-photo-upload-container{
  @include flex-row-center;
  background-color: $lightgrey;
  position: relative;
  cursor:pointer;
  height: 200px;
  width: 250px;
  margin: 0;
  &:hover{
    background-color: $darkgrey
  }
  .input, .sell-uploaded-img{
    height: 200px;
    width: 250px;
    position: absolute;
    cursor:pointer;
    margin: 0
  }
  .input{
    opacity: 0;
  }
  .sell-photo-add{
    position: relative;
    font-size: 8rem
  }
}

</style>
