<template>
  <div>
    <div>{{count}}</div><br />
    <a-button @click="$store.commit('increment')">Mutation 增加</a-button>
  </div>
</template>

<script>
export default {
  name: "example1",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
