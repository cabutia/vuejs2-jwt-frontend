import axios from 'axios'
import router from '@/router'

export default {
  user: {
    authenticated: false
  },

  mounted () {
    this.check()
  },

  login (credentials, next) {
    console.log('Attempt to login')
    axios.post('http://dev.lumen/auth/login', credentials)
    .then(res => {
      let data = res.data
      localStorage.setItem('token', data.token)
      this.user.authenticated = true
      this.check()
      console.log(data)
    }).catch(e => console.log(e))
  },

  logout () {
    console.log('Attempt to logout')
    localStorage.removeItem('token')
    this.user.authenticated = false
    router.push('/authentication')
  },

  check () {
    if (localStorage.getItem('token')) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }

    console.log('Attempt to check auth')
    console.log('Auth status:', this.user.authenticated, localStorage.getItem('token'))
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  },

  guard (to, from, next) {
    if (localStorage.getItem('token')) {
      this.user.authenticated = true
    }
    if (this.user.authenticated) return next()
    return next({path: '/authentication'})
  }
}
