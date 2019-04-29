<template>
  <div class="border2">
    <!-- v-ant-ref确实使用vue-ref实现方法：利用指令，把实例传递出来 -->
    <!-- https://github.com/vueComponent/vue-ref -->
    <h3 v-ant-ref="v => setChildrenRef('childrenI', v)">I 节点</h3>
  </div>
</template>

<script>
export default {
  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
};
</script>

<style>
</style>
