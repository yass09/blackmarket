<template>
  <div class="back-button">
    <img src="../assets/img/back.svg" @click='goBack' alt="" class="back-button-icon">
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss'>
.back-button{
  align-self: flex-start;
}
.back-button-icon{
  width: 30px;
}
</style>
