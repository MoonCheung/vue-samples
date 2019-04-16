<template>
  <div>
    name:{{name || "--"}}<br />
    <input :value="name"
           @change="handleChange" /><br />
    <div @click="handleDivChick">
      <button @chick="handleChick">重置成功</button>
      <button @click.stop="handleChick">重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: String
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
    handleDivChick() {
      this.$emit("change", "");
    },
    handleChick(e) {
      // 都会失败
      e.stopPropagation();
    }
  }
};
</script>

<style>
</style>
