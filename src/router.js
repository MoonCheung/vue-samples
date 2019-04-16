import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/vIf',
      component: () => import('./pages/basic/vIf')
    },
    {
      path: '/vFor',
      component: () => import('./pages/basic/vFor')
    },
    {
      path: '/props',
      component: () => import('./pages/basic/Props')
    },
    {
      path: '/bigProps',
      component: () => import('./pages/basic/bigProps')
    },
    {
      path: '/event',
      component: () => import('./pages/basic/Event')
    }
  ]
})