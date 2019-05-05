import Vue from "vue";
import VuexGround from "./min-vuex";

Vue.use(VuexGround);

const store1 = new VuexGround.Store({
  //提供响应式数据
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
});

export default store1