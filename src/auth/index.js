import axios from 'axios'

export default {
  user: {
    authenticated: false
  },

  login (credentials, next) {
    axios.post('http://dev.lumen/auth/login', credentials)
    .then(res => {
      let data = res.data
      console.log('Data received on login attempt', data)
      console.log('Token: ' + data.token + ' will be set as authentication token')
      localStorage.setItem('token', data.token)
      console.log('It would redirect to ' + next)
    }).catch(e => console.log(e))
  },

  logout () {
    console.log('Attempt to logout')
    localStorage.removeItem('token')
  },

  check () {
    console.log('Attempt to check auth')
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
}
