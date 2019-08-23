import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/basis/:id',
      name: 'basis',
      props: true,
      component: Index,
      // children选项里component属性相应引入组件会被渲染在 Index 的 <router-view/> 中
      children: [
        {
          path: 'vIf',
          component: () => import('./pages/basis/vIf')
        },
        {
          path: 'vFor',
          component: () => import('./pages/basis/vFor')
        },
        {
          path: 'props',
          component: () => import('./pages/basis/Props')
        },
        {
          path: 'bigProps',
          component: () => import('./pages/basis/bigProps')
        },
        {
          path: 'event',
          component: () => import('./pages/basis/Event')
        },
        {
          path: 'personalInfo',
          component: () => import('./pages/basis/PersonalInfo')
        },
        {
          path: 'children',
          component: () => import('./pages/basis/Children')
        },
        {
          path: 'PropsAndData',
          component: () => import('./pages/basis/PropsAndData')
        },
        {
          path: 'CAW',
          component: () => import('./pages/basis/CAW')
        },
        {
          path: 'directive',
          component: () => import('./pages/basis/Directive')
        },
        {
          path: 'ProvideAndInject',
          component: () => import('./pages/basis/ProvideAndInject')
        },
        {
          path: 'TempleteAndJSX',
          component: () => import('./pages/basis/TempleteAndJSX')
        }
      ]
    },
    {
      path: '/ecology/:id',
      name: 'ecology',
      props: true,
      component: Index,
      // children选项里component属性相应引入组件会被渲染在 Index 的 <router-view/> 中
      children: [
        {
          path: 'vuex_example',
          component: () => import('./pages/ecology/example')
        },
        {
          path: 'vuex_example1',
          component: () => import('./pages/ecology/example1')
        },
        {
          path: 'vuex_example2',
          component: () => import('./pages/ecology/example2')
        }
      ]
    }
  ]
});
