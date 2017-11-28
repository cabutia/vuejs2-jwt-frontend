import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AuthPage from '@/components/Auth/AuthPage'
import StudentsComponent from '@/components/StudentsComponent'

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
      component: StudentsComponent
    }
  ]
})
