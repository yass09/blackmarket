import {LOGIN, LOGIN_SUCCESS, LOGOUT} from './constants'

import axios from 'axios'

export default {
  login ({ commit }, creds) {
    commit(LOGIN)
    return new Promise(resolve => {
      axios.post('http://localhost:5000/api/login', creds)
      .then(response => {
        commit(LOGIN_SUCCESS)
        console.log(response.data)
        if (response !== 'failed') {
          localStorage.setItem('token', response.data.token)
          console.log(response.data)
          this.user = response.data
        }
      })
      resolve()
    })
  },
  logout ({commit}) {
    commit(LOGOUT)
    localStorage.removeItem('token')
  }
}
