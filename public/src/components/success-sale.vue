<template>
  <div class="success view-container">
    <div class="success-page">
      <img src="../assets/img/check.svg" alt="" class="success-icon">
      <p class="success-message">Merci, votre paire a bien été mise en vente</p>
      <div class="button-container">
        <a :href="`/profile`"><button class="button btn-lg bg-light-grey">Voir mon profil</button></a>
        <a href="/sell"><button class="button btn-xl bg-dark-grey">Ajouter une paire</button></a>
      </div>
      <p class="caption">ou retourner à l'<a href="/"><strong>Accueil</strong></a></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userId: localStorage.getItem('id')
    }
  }
}
</script>
<style lang="scss">
</style>
