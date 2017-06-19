import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import LoginPage from '@/components/login'
import userProfile from '@/components/userProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home-Products',
      component: Home
    },
    {
      path: '/login',
      name: 'Login-Page',
      component: LoginPage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: userProfile
    }
  ],
  mode: 'history'
})
