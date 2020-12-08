import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import storeGround from './store/idxGround';
import DatePicker from 'ant-design-vue';
import ref from 'vue-ref';
import 'ant-design-vue/dist/antd.css';
import VueCompositionApi from '@vue/composition-api';
import utils from './utils'; //引入工具函数

Vue.config.productionTip = false;
// Vue 核心底层原理
Vue.prototype.$store = storeGround;

Vue.use(DatePicker);
Vue.use(ref);
Vue.use(VueCompositionApi);
Vue.use(utils);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
