<template>
  <div id="app">
    <nav class="nav-global-container">
      <a href="/">
        <div class="nav-items-container nav-items-left">
          <img src="./assets/img/blackmarket-logo.svg" alt="" class="nav-logo">
          <h1 v-if="$resize && $mq.above(768)" class="nav-branding black">Blackmarket</h1>
        </div>
      </a>
      <div v-if="$resize && $mq.above(768)" class="nav-items-container nav-items-lg">
        <a href="/sell"><button class="nav-button button bg-dark-grey">Vendre</button></a>
        <a href="/login"><button class="nav-button button nav-login">Connexion</button></a>
      </div>
      <div v-else class="nav-items-container nav-items-sm">
        <div class="nav-menu-icon-container" @click='menuOpen = !menuOpen' v-bind:class='{ open : menuOpen }'>
          <div class="nav-menu-icon-bar1"></div>
          <div class="nav-menu-icon-bar2"></div>
          <div class="nav-menu-icon-bar3"></div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer-global-container">
      <ul class="footer-items-container">
        <a href="">
          <li class="footer-item">Vendre</li>
        </a>
        <a href="#">
          <li class="footer-item">FAQ</li>
        </a>
        <a href="#">
          <li class="footer-item">Support</li>
        </a>
        <a href="#">
          <li class="footer-item">Contact</li>
        </a>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      menuOpen: false
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

// NAV

// Containers
.nav-global-container{
  height: $nav-footer-height;
  width: $full;
  background-color: $white;
  display: flex;
  align-items: center;
  border-bottom: 3px solid $lightgrey;
  justify-content: space-between;
  padding: 0 20px;
}

.nav-items-container{
  align-items: center;
}

.nav-items-left{
  display: flex;
}

// Content
.nav-logo{
  width: 50px;
}

.nav-branding{
  margin: 0 10px;
  line-height: 0.8;
}

.nav-menu-icon-container{
  cursor: pointer;
}

.nav-items-lg{
  .button{
    height: 35px;
    font-size: 1.6em;
    &:nth-of-type(2){
      background-color: #9B9B9B
    }
  }
}

// Menu icon animation
.nav-menu-icon-bar1, .nav-menu-icon-bar2, .nav-menu-icon-bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.open {
  /* Rotate first bar */
  .nav-menu-icon-bar1 {
    transform: rotate(-45deg) translate(-9px, 6px) ;
  }

  /* Fade out the second bar */
  .nav-menu-icon-bar2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .nav-menu-icon-bar3 {
    transform: rotate(45deg) translate(-8px, -8px) ;
  }
}

// FOOTER
.footer-global-container{
  background-color: $lightgrey;
  height: $nav-footer-height;
  @include flex-row-center;
  padding: 20px;
}

.footer-items-container{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  min-width: 250px;
}

.footer-item{
  font-size:: 1.4rem;
}

</style>
