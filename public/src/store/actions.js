import {LOGIN_SUCCESS, LOGOUT, STORE_USER} from './constants'

import axios from 'axios'

export default {
  login ({ commit }, creds) {
    // commit(LOGIN)
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:5000/api/login', creds)
      .then(response => {
        commit(LOGIN_SUCCESS)
        commit(STORE_USER)
        localStorage.setItem('token', response.data.token)
        resolve(response)
      }, e => {
        console.log(e)
        reject(e)
      })
    })
  },
  logout ({commit}) {
    commit(LOGOUT)
    localStorage.removeItem('token')
  }
}
