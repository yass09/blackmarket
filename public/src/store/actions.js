import {LOGIN_SUCCESS, LOGOUT, STORE_USER} from './constants'

import axios from 'axios'

export default {
  login ({ commit, state }, creds) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:5000/api/login', creds)
      .then(response => {
        commit(LOGIN_SUCCESS)
        console.log(response.data)
        localStorage.setItem('username', response.data.username)
        localStorage.setItem('id', response.data.userId)
        localStorage.setItem('token', response.data.token)
        commit(STORE_USER, state, response.data)
        resolve(response)
      }, e => {
        console.log(e)
        reject(e)
      })
    })
  },
  logout ({commit}) {
    commit(LOGOUT)
    localStorage.removeItem('username')
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}
