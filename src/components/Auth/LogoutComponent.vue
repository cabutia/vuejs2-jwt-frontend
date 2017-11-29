<template></template>
<script>
  import auth from '@/auth'

  export default {

    mounted () {
      auth.logout()
    }

  }
</script>
