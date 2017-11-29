import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'
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
        if (localStorage.getItem('token')) {
          auth.user.authenticated = true
        }
        if (auth.user.authenticated) return next()
        return next({path: '/authentication'})
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: LogoutComponent
    }
  ]
})
