<template>
  <div>
    <p>props.info: {{ info }}</p>
    <p>props.name: {{ name }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <p>
      <button v-on:click="handleBChange">改变 data.b</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "PropsAndData",
  props: {
    info: Object,
    name: String,
    list: Array
  },
  data() {
    return {
      a: "hello",
      b: "Props And Data"
    };
  },
  // 由于数据更改导致的虚拟 DOM 重新渲染和补丁，在这之后会调用该钩子。
  updated() {
    console.log("触发 PropsAndData updated");
  },
  // 该方法被混入vue实例中。
  methods: {
    handleBChange() {
      this.b = "vue" + Date.now();
      console.log("data.b发生变化，但是还没触发组件更新", this.b);
    }
  }
};
</script>

<style>
</style>
