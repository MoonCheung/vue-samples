<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.themes.color }">H 节点</h3>
  </div>
</template>

<script>
export default {
  inject: {
    themes: {
      from: "themes",
      default: () => {}
    }
  }
};
</script>

<style>
</style>
