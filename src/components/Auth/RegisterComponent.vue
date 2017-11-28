<template lang="html">
  <form class="auth-form" action="#">
    <div class="status-wrapper" v-bind:class="wrapper.status">
      <h1>{{ wrapper.text }}</h1>
    </div>
    <h1>Register</h1>
    <div class="input">
      <input type="text" name="name" placeholder="Name" v-model="newUser.name">
      <label for="name">Enter your name</label>
    </div>
    <div class="input">
      <input type="email" name="email" placeholder="Email" v-model="newUser.email">
      <label for="email">Enter your email</label>
    </div>
    <div class="input">
      <input type="password" name="password" placeholder="Password" v-model="newUser.password">
      <label for="password">Enter your password</label>
    </div>
    <div class="submit-input">
      <button type="button" class="submit-button" v-on:click="authRegister">Register</button>
    </div>
  </form>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        wrapper: {
          status: '',
          text: ''
        },
        newUser: {
          name: '',
          email: '',
          password: ''
        }
      }
    },

    methods: {
      authRegister () {
        axios.post('http://dev.lumen/auth/register', this.newUser)
             .then(res => {
               console.log(res.data)
             }).catch(e => {
               console.log(e)
             })
      }
    }
  }
</script>
