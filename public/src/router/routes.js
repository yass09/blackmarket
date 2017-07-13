import Home from '@/components/home'
import LoginPage from '@/components/login'
import SignUp from '@/components/signUp'
import SellPage from '@/components/sell'
import ProfilePage from '@/components/profile-page'

export const routes = [
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
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/sell',
    name: 'Sell',
    component: SellPage
  },
  {
    path: '/profile',
    name: 'Profile-Page',
    component: ProfilePage
  }
]
