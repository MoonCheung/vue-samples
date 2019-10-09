<template>
  <div class="border2">
    <h3 class="newColor"
        :style="{color: theme.color}">E 节点</h3>
    <a-button @click="handleChild()">子节点改变为orange</a-button>
  </div>
</template>

<script>
export default {
  inject: {
    theme: {
      from: "theme",
      default: () => { }
    }
  },
  methods: {
    handleChild () {
      if (this.theme.color) {
        let h3 = document.getElementsByClassName("newColor")["0"];
        h3.style.color = "orange";
      }
    }
  }
};
</script>

<style>
</style>
