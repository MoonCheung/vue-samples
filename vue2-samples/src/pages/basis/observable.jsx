import Vue from 'vue';
const state = Vue.observable({ count: 0 });

export default {
  name: 'observable',
  render(h) {
    return h(
      'a-button',
      {
        on: {
          click: () => {
            state.count++;
          }
        }
      },
      `count is: ${state.count}`
    );
  }
};
