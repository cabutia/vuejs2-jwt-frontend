<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>VueJS</h2>
    <ul>
        <li>{{ token }}</li>
        <li><router-link :to="{ name: 'AuthPage', params: {} }">Go!</router-link></li>
        <li><router-link :to="{ name: 'Logout', params: {} }">Logout</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',

  beforeCreate () {
    console.log(localStorage.getItem('token'))
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      token: localStorage.getItem('token')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
