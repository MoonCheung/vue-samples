import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
  //提供响应式数据
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({
      commit
    }) {
      setTimeout(() => {
        // state.count++; //不要对state进行更改数据，应该通过commit交给mutations去处理
        commit('increment')
        console.log('actions 激活')
      }, 1000)
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
});

export default store