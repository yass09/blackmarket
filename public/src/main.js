// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {MediaQueries} from 'vue-media-queries'
import router from './router'
import {store} from './store/store'
import axios from 'axios'

const mediaQueries = new MediaQueries()
Vue.use(mediaQueries)
Vue.use(axios)

Vue.filter('titlecase', (value) => {
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase()
})

Vue.filter('currency', (value, currencySign) => {
  return `${currencySign} ${value.toLocaleString('en-UK')}`
})

Vue.filter('date', (value) => {
  const date = new Date(value)
  return date.toLocaleDateString('fr-FR')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mediaQueries: mediaQueries
})
