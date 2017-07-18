import Home from '@/components/home'
import LoginPage from '@/components/login'
import SignUp from '@/components/signUp'
import SellPage from '@/components/sell'
import ProfilePage from '@/components/profile-page'
import productPage from '@/components/product-page'
import successSale from '@/components/success-sale'
import successPurchase from '@/components/success-purchase'
import EditProfile from '@/components/edit-profile'
import EditProduct from '@/components/edit-product'

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
  },
  {
    path: '/edit-profile/:user_id',
    name: 'Edit-Profile',
    component: EditProfile
  },
  {
    path: '/product/:product_id',
    name: 'Product-Page',
    component: productPage
  },
  {
    path: '/edit-product/:product_id',
    name: 'Edit-Product',
    component: EditProduct
  },
  {
    path: '/success-sale',
    name: 'Successful-Sale',
    component: successSale
  },
  {
    path: '/success-purchase',
    name: 'Successful-Purchase',
    component: successPurchase
  }
]
