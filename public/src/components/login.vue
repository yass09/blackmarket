<template lang="html">
  <div class="login view-container">
    <div class="global-form-container">
      <div class="home-logo-container">
        <img src="../assets/img/blackmarket-logo.svg" alt="" class="home-logo">
        <h1 class="home-logo-branding">Connexion</h1>
      </div>
      <form action="" class="login-form-container">
        <div class="input-container">
          <label for="" class="input-label">E-mail</label>
          <input type="email" class="input input-md">
        </div>
        <div class="input-container">
          <label for="" class="input-label">Mot de passe</label>
          <input type="password" class="input input-md" minlength='8'>
        </div>
        <button type="submit" class="button bg-dark-grey">Connexion</button>
      </form>
    </div>
  </div>
</template>

<script>
// import axios

export default {
  data: () => {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang='scss'>
  .login{
    .button{
      margin-top: 50px;
      font-size: 2rem;
      width: 200px;
      padding: 10px 30px 10px 30px;
      height: auto;
    }
  }
</style>
