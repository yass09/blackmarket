<template lang="html">
  <main class="login view-container">
    <back-button></back-button>
    <section class="global-form-container">
      <div class="header-container">
        <img src="../assets/img/blackmarket-logo.svg" alt="" class="header-img">
        <h1 class="header-name">Connexion</h1>
      </div>
      <form action="" class="login-signup-form-container" @submit.prevent>
        <div class="input-container">
          <label for="" class="input-label">E-mail</label>
          <input type="email" class="input input-md" v-model='loginForm.mail'>
        </div>
        <div class="input-container">
          <label for="" class="input-label">Mot de passe</label>
          <input type="password" class="input input-md" minlength='8' v-model='loginForm.password'>
        </div>
        <button type="submit" class="button btn-lg bg-dark-grey" @click="login">Connexion</button>
        <p class="caption">Pas de compte? <a href="/signup" class="caption-link"><strong>Inscrivez-vous ici</strong></a></p>
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
      loginForm: {
        mail: '',
        password: ''
      }
    }
  },
  components: {
    BackButton
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.loginForm).then(response => {
        if (localStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        }
      }).catch(e => {
        console.log(e)
      })
      this.$router.push('/')
    }
  },
  created () {
    if (this.$store.getters.logStatus) {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang='scss'>
  .login{
    .button{
      margin-top: 50px;
    }
  }


</style>
