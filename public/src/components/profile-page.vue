<template lang="html">
  <main class="profile view-container">
    <header class="header-container">
      <div class="header-img"></div>
      <p class="header-name">Hello</p>
      <p class="log-status-name" @click='logOut'>Deconnexion</p>
      <div class="button-container">
        <a href="/"><button class="button btn-md">Modifier</button></a>
        <a href="/sell"><button class="button btn-md bg-dark-grey">Vendre</button></a>
      </div>
    </header>
    <section class="product-component-container">
      <div class="product-display-container">
        <h1 class="section-name">En Vente</h1>
        <h1 class="section-name">Collection</h1>
      </div>
      <div class="product-group-container"></div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    logOut () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.profile{
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
}
</style>
