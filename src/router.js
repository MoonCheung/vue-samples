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
      component: () => import('./pages/basis/vIf')
    },
    {
      path: '/vFor',
      component: () => import('./pages/basis/vFor')
    },
    {
      path: '/props',
      component: () => import('./pages/basis/Props')
    },
    {
      path: '/bigProps',
      component: () => import('./pages/basis/bigProps')
    },
    {
      path: '/event',
      component: () => import('./pages/basis/Event')
    },
    {
      path: '/personalInfo',
      component: () => import('./pages/basis/PersonalInfo')
    },
    {
      path: '/children',
      component: () => import('./pages/basis/Children')
    },
    {
      path: '/PropsAndData',
      component: () => import('./pages/basis/PropsAndData')
    },
    {
      path: '/CAW',
      component: () => import('./pages/basis/CAW')
    }
  ]
})