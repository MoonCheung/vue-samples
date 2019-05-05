<template>
  <div>
    <div>{{count}}</div>
    <div>两倍:{{$store.getters.doubleCount}}</div>
    <a-button @click="$store.commit('increment')">Mutation 增加</a-button>
    <a-button @click="$store.dispatch('increment')">Action 增加</a-button>
  </div>
</template>

<script>
export default {
  name: "example",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
