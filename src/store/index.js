import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import products from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state：使用单一状态树，用一个对象就包含了全部的应用层级状态
  state: {
    count: 0,
    userInfo: {
      email: 'salvador23@163.com'
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        // state.count++; //不要对state进行更改数据，应该通过commit交给mutations去处理
        commit('increment');
        console.log('actions 激活');
      }, 1000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  modules: {
    cart,
    products
  }
});

export default store;
