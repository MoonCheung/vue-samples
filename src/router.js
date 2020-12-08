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
        },
        {
          path: 'Emit',
          component: () => import('./pages/basis/Emit')
        },
        {
          path: 'EmitAndOn',
          component: () => import('./pages/basis/EmitAndOn')
        },
        {
          path: 'AttrsAndList',
          component: () => import('./pages/basis/AttrsAndListeners')
        },
        {
          path: 'nextTick',
          component: () => import('./pages/basis/nextTick')
        },
        {
          path: 'observable',
          component: () => import('./pages/basis/observable.jsx')
        }
      ]
    },
    {
      path: '/vue3_basis/:id',
      name: 'vue3_basis',
      props: true,
      component: Index,
      // children选项里component属性相应引入组件会被渲染在 Index 的 <router-view/> 中
      children: [
        {
          path: 'setup',
          component: () => import('./pages/vue3_basis/setup')
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
    },
    {
      path: '/chap/:id',
      name: 'chap',
      props: true,
      component: Index,
      children: [
        {
          path: 'verifyForm',
          name: 'Form',
          component: () => import('./pages/actual/verifyForm')
        },
        {
          path: 'pdf',
          name: 'HTMLToPDF',
          component: () => import('./pages/actual/htmlToPdf')
        },
        {
          path: 'table',
          name: 'TableIndex',
          component: () => import('./pages/actual/tables')
        },
        {
          path: 'canvas',
          name: 'canvasIndex',
          component: () => import('./pages/actual/canvas')
        },
        {
          path: 'svg',
          name: 'svgIndex',
          component: () => import('./pages/actual/svg')
        }
      ]
    },
    {
      path: '/js30/:id',
      name: 'js30',
      props: true,
      component: Index,
      children: [
        {
          path: 'drumKit',
          name: 'DurmKits',
          component: () => import('./pages/javaScript30/DurmKit')
        },
        {
          path: 'clock',
          name: 'Clocks',
          component: () => import('./pages/javaScript30/Clock')
        },
        {
          path: 'variable',
          name: 'Variables',
          component: () => import('./pages/javaScript30/Variable')
        },
        {
          path: 'flexPanel',
          name: 'FlexPanels',
          component: () => import('./pages/javaScript30/FlexPanel')
        },
        {
          path: 'typeAhead',
          name: 'TypeAheads',
          component: () => import('./pages/javaScript30/TypeAhead')
        },
        {
          path: 'H5Canvas',
          name: 'HTML5Canvas',
          component: () => import('./pages/javaScript30/H5Canvas')
        },
        {
          path: 'checkBox',
          name: 'CheckBoxs',
          component: () => import('./pages/javaScript30/CheckBox')
        },
        {
          path: 'scroll',
          name: 'SlideScrolls',
          component: () => import('./pages/javaScript30/SlideScroll')
        },
        {
          path: 'shadow',
          name: 'Shadows',
          component: () => import('./pages/javaScript30/Shadow')
        },
        {
          path: 'notArt',
          name: 'NotArticles',
          component: () => import('./pages/javaScript30/NotArticle')
        },
        {
          path: 'geo',
          name: 'Geo',
          component: () => import('./pages/javaScript30/Geolocation')
        },
        {
          path: 'linkHigh',
          name: 'LinkHighlight',
          component: () => import('./pages/javaScript30/LinkHigh')
        },
        {
          path: 'speech',
          name: 'Speechs',
          component: () => import('./pages/javaScript30/Speech')
        },
        {
          path: 'drag',
          name: 'Drags',
          component: () => import('./pages/javaScript30/Drag')
        },
        {
          path: 'video',
          name: 'Videos',
          component: () => import('./pages/javaScript30/Video')
        },
        {
          path: 'timer',
          name: 'Timers',
          component: () => import('./pages/javaScript30/Timer')
        }
      ]
    }
  ]
});
