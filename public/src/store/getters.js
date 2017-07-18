// import {LOGIN, LOGIN_SUCCESS, LOGOUT} from './constants'

export default {
  logStatus: state => {
    return state.isLoggedIn
  },
  getUser: state => {
    return state.currentUser
  }
}
