<template lang="html">
  <form class="auth-form" action="#">
    <h1>Login</h1>
    <div class="input">
      <input type="email" name="email" placeholder="Email" v-model.trim="user.email">
      <label for="email">Enter your email</label>
    </div>
    <div class="input">
      <input type="password" name="password" placeholder="Password" v-model.trim="user.password">
      <label for="password">Enter your password</label>
    </div>
    <div class="submit-input">
      <button type="button" class="submit-button" v-on:click="authLogin">Login</button>
    </div>
  </form>
</template>

<script>
  // import axios from 'axios'
  import auth from '@/auth'

  export default {
    data () {
      return {
        wrapper: {
          status: '',
          text: ''
        },
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      authLogin () {
        auth.login(this.user, '/')
        console.log(auth.getAuthHeader())
        // axios.post('http://dev.lumen/auth/login', this.user)
        //      .then(res => {
        //        console.log(res.data)
        //      }).catch(e => {
        //        console.log(e)
        //      })
      }
    }
  }
</script>
