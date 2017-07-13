// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {MediaQueries} from 'vue-media-queries'
import router from './router'
import {store} from './store/store'

const mediaQueries = new MediaQueries()
Vue.use(mediaQueries)

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
