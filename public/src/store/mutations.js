import {LOGIN, LOGIN_SUCCESS, LOGOUT, STORE_USER} from './constants'

export default {
  [LOGIN] (state, creds) {
    state.pending = true
  },
  [LOGIN_SUCCESS] (state) {
    state.isLoggedIn = true
    // state.pending = false
  },
  [STORE_USER] (state, response) {
    state.currentUser = response
  },
  [LOGOUT] (state) {
    state.isLoggedIn = false
  }
}
