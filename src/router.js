import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./pages/index')
    },{
      path: '/vIf',
      component: () => import('./pages/basic/vIf')
    }
  ]
})