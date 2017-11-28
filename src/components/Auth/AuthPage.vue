<template lang="html">
  <section>
    <h1 class="mainH1">Authentication</h1>
    <LoginComponent></LoginComponent>
    <RegisterComponent></RegisterComponent>
  </section>
</template>

<script>
import LoginComponent from './LoginComponent'
import RegisterComponent from './RegisterComponent'

export default {
  components: {
    LoginComponent,
    RegisterComponent
  }
}
</script>

<style lang="css" src="./css/RegisterForms.css"></style>
