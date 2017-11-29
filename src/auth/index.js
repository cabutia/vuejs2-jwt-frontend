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

  check (to, from, next) {
    axios.get('http://dev.lumen/auth/check', this.getAuthHeader())
    .then(res => {
      console.log('Response received', res.data)
      next()
    }).catch(e => {
      router.push('/authentication')
    })

    //   .then((res) => {
    //     console.log('Received response')
    //     this.user.authenticated = true
    //     status = true
    //   }).catch(e => {
    //     console.log('Error received', e)
    //     this.user.authenticated = false
    //     status = false
    //   })
    // }
    // this.user.authenticated = false
    // return status
  },

  getAuthHeader () {
    return {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
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
