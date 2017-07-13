<template lang="html">
  <main class="login view-container">
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
        <button type="submit" class="button btn-lg bg-dark-grey" @click="logIn">Connexion</button>
        <p class="caption">Pas de compte? <a href="/signup" class="caption-link"><strong>Inscrivez-vous ici</strong></a></p>
      </form>
    </section>
  </main>
</template>

<script>
// import axios from 'axios'

export default {
  data: () => {
    return {
      loginForm: {
        mail: '',
        password: ''
      }
    }
  },
  methods: {
    logIn () {
      this.$store.dispatch('login', this.loginForm).then(() => {
        this.$router.push('/')
      })
      // axios.post('http://localhost:5000/api/login', this.loginForm)
      // .then(response => {
      //   console.log(response.data)
      //   if (response.data.token) {
      //     console.log(response.data)
      //     localStorage.setItem('token', response.data.token)
      //     this.user = response.data
      //     console.log(this.user)
      //     // this.$router.go(-1)
      //   }
      // })
      // .catch(e => {
      //   console.log('ERROR' + e)
      // })
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
