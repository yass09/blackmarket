<template>
  <main class="sign-up view-container">
    <back-button></back-button>
    <div class="header-container">
      <img src="../assets/img/blackmarket-logo.svg" alt="" class="header-img">
      <h1 class="header-name">Modifier mon profil</h1>
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
        <label for="" class="input-label">Pays*</label>
        <input type="text" class="input input-md" v-model="userData.country">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Ville*</label>
        <input type="text" class="input input-md" v-model="userData.city">
      </div>
      <!-- <div class="input-container">
        <label for="" class="input-label">Ancien passe*</label>
        <input type="password" minlength='6' class="input input-md" v-model="newPasswordData.oldPassword">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Mot de passe*</label>
        <input type="password" minlength='6' class="input input-md" v-model="newPasswordData.newPassword">
      </div>
      <div class="input-container">
        <label for="" class="input-label">Confirmer Mot de passe*</label>
        <input type="password" minlength='6' class="input input-md" v-model="newPasswordData.confirmPassword">
      </div> -->
      <button @click="updateUser" class="button btn-md bg-dark-grey">Modifier</button>
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
      // newPasswordData: {
      //   oldPassword: '',
      //   newPassword: '',
      //   confirmPassword: ''
      // },
      userData: ''
    }
  },
  components: {
    BackButton
  },
  methods: {
    getUser () {
      axios.get('http://localhost:5000/api/users/' + this.$route.params.user_id)
      .then(response => {
        this.userData = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateUser () {
      console.log('I SEND THIS', this.userData)
      // if (this.userData.hash === this.newPasswordData.oldPassword && this.newPasswordData.newPassword === this.confirmPassword) {
      // this.passwordCheck = true
      // this.userData.hash = this.newPasswordData.newPassword
      axios.put('http://localhost:5000/api/users/' + this.$route.params.user_id, this.userData)
      .then(response => {
        console.log('THIS IS RESPONSE', response.data)
        localStorage.setItem('username', response.data.username)
        this.$router.push('/profile')
      })
      .catch(e => {
        console.log(e)
      })
      // } else {
      //   this.passwordCheck = false
      // }
    }
  },
  mounted () {
    this.getUser()
  },
  created () {
    if (!this.$store.getters.logStatus) {
      this.$router.replace('/login')
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
