import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },

  ]
})