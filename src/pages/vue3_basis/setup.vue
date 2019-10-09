<template>
  <a-button @click="increment">
    数字: {{ state.count }}, 翻倍数字: {{ state.double }}
  </a-button>
</template>

<script>
import { reactive, computed, watch } from '@vue/composition-api'

export default {
  setup () {

    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    //事件方法
    function increment () {
      return state.count++;
    }

    //暴露于模板
    return {
      state,
      increment
    }
  }
}
</script>