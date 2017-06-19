<!-- <template id="userProfile">
  <div class="form-container">
    <form action="" class="form-edit">
      <input type="text" class="form-edit-input" v-model='email' placeholder="e-mail">
      <input type="text" class="form-edit-input" v-model='username' placeholder="username">
      <input type="text" class="form-edit-input" v-model='password' placeholder="password">
      <input type="text" class="form-edit-input" v-model='confirmPassword' placeholder="confirm password">
      <button type="submit" @click='testmethod'>Register</button>
    </form>
    {{ email }}
  </div>
</template>

<script>
  export default {
    name: 'userProfile',
    data () {
      return {
        email: this.email,
        username: '',
        password: '',
        confirmPassword: '',
        users: []
      }
    },
    methods: {
      testmethod: (email, ) => {
        // this.$http.get('http://localhost:5000/api/users')
        // .then(response => {
        //   this.users = response.body
        // }, err => {
        //   console.log(err + 'ca marche pas')
        // })
      }
    }
  }
</script> -->
<template>
  <div id="create-product">
    <input type="text" v-model="form.a">
    <input type="text" v-model="form.b">
    <input type="button" @click="sayWhat(form)" value="validate">
  </div>
</template>

<script>
// import axios from 'axios'
const product = {
  data: () => {
    return {
      form: {
        a: '',
        b: ''
      },
      sayWhat: (form) => {
        console.log(form.a)
        const user = {
          yo: form.a,
          where: form.b
        }
        console.log(user)
        fetch('http://localhost:5000/api/users')
        .then(response => {
          return response.json()
        })
        .then(e => {
          console.log(e)
        })
      }
    }
  }
}

export default product
</script>
