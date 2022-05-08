<template>
  <div>
    name:{{name || "--"}}<br />
    <input :value="name"
           @change="handleChange" /><br />
    <div @click="handleDivChick">
      <a-button @chick="handleChick">重置成功</a-button>
      <a-button @click.stop="handleChick">重置失败</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventDemo",
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange (e) {
      this.$emit("change", e.target.value);
    },
    handleDivChick () {
      this.$emit("change", "");
    },
    handleChick (e) {
      // 都会失败
      e.stopPropagation();
    }
  }
};
</script>

<style>
</style>
