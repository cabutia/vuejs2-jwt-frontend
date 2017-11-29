import Vue from 'vue'
import auth from '@/auth'
import axios from 'axios'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AuthPage from '@/components/Auth/AuthPage'
import StudentsComponent from '@/components/StudentsComponent'
import LogoutComponent from '@/components/Auth/LogoutComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/authentication',
      name: 'AuthPage',
      component: AuthPage
    },
    {
      path: '/platform/students',
      name: 'Students',
      component: StudentsComponent,
      beforeEnter (to, from, next) {
        axios.get('http://dev.lumen/auth/check', auth.getAuthHeader())
        .then(res => {
          console.log('Response received', res.data)
          next()
        }).catch(e => {
          next('/authentication')
        })
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutComponent
    }
  ]
})
