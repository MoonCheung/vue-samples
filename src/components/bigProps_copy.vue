<template>
  <div>
    {{ name }}<br />
    <button @click="handleChange">改变名称</button><br />
    <!-- {{ slotDefault }} -->
    <VNodes :vnodes="slotDefault" /><br />
    <VNodes :vnodes="slotTitle" /><br />
    <VNodes :vnodes="slotScopeItem({value: 'vue'})" /><br />
  </div>
</template>

<script>
export default {
  name: "bigProps",
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  props: {
    name: String,
    onChange: {
      type: Function,
      default: () => {}
    },
    slotDefault: Array,
    slotTitle: Array,
    slotScopeItem: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleChange() {
      this.onChange("Hello 子组件");
    }
  }
};
</script>

<style>
</style>
