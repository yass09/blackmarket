<template>
  <main class="sign-up view-container">
    <back-button></back-button>
    <div class="header-container">
      <img src="../assets/img/blackmarket-logo.svg" alt="" class="header-img">
      <h1 class="header-name">Inscription</h1>
    </div>
    <form action="" class="common-form-container" @submit.prevent>
      <div class="input-container">
        <label for="" class="input-label">E-mail*</label>
        <input type="email" class="input input-md" v-model="userData.mail">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Username*</label>
        <input type="text" class="input input-md" v-model="userData.username">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Mot de passe*</label>
        <input type="password" minlength='6' class="input input-md" v-model="userData.password">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Confirmer Mot de passe*</label>
        <input type="password" minlength='6' class="input input-md" v-model="confirmPassword">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Pays*</label>
        <input type="text" class="input input-md" v-model="userData.country">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Ville*</label>
        <input type="text" class="input input-md" v-model="userData.city">
      </div>
      <button @click="signupUser" class="button btn-md bg-dark-grey">S'inscrire</button>
    </form>
  </main>
</template>
<script>
import axios from 'axios'
import BackButton from './back-button.vue'

export default {
  data: () => {
    return {
      passwordCheck: '',
      confirmPassword: '',
      userData: {
        mail: '',
        username: '',
        password: '',
        country: '',
        city: ''
      }
    }
  },
  components: {
    BackButton
  },
  methods: {
    signupUser () {
      console.log('I SEND THIS', this.userData)
      if (this.userData.password === this.confirmPassword) {
        this.passwordCheck = true
        axios.post('http://localhost:5000/api/users', this.userData)
        .then(response => {
          console.log('THIS IS RESPONSE', response.data)
          if (response.data.token) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('username', response.data.username)
            this.$store.commit('LOGIN_SUCCESS')
            this.$router.push('/profile')
          }
        })
        .catch(e => {
          console.log(e)
        })
      } else {
        this.passwordCheck = false
      }
    }
  },
  created () {
    if (this.$store.getters.logStatus) {
      this.$router.replace('/')
    }
  }
}

</script>
<style lang="scss">
.sign-up{
  .button{
    margin-top: 50px;
  }
}
</style>
