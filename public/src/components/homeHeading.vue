<template>
  <section class="heading">
    <div class="header-container">
      <img src="../assets/img/blackmarket-logo.svg" alt="" class="header-img">
      <h1 class="header-name">Blackmarket</h1>
    </div>
    <div class="home-title-container">
      <h1 class="home-title">Trouvez les meilleures sneakers</h1>
      <div class="home-subtitle-container">
        <h3 class="home-subtitle light-grey">et vendez les vôtres</h3>
        <a href="/sell"><button class="home-subtitle-cta btn-md bg-dark-grey button">Vendre</button></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home-Products',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.heading{
  .btn-md{
    font-size: 2rem
  }
}
</style>
