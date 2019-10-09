<template>
  <div class="border2">
    <h3 :style="{color: theme.color}">F 节点</h3>
    <a-button @click="getChildARef">获取父节点A的Ref</a-button>
    <a-button @click="getChildGRef">获取子节点G的Ref</a-button>
  </div>
</template>

<script>
export default {
  inject: {
    theme: {
      from: "theme",
      default: () => { }
    },
    getParentRef: {
      from: "getRef",
      default: () => { }
    },
    getParentChildRef: {
      from: "getChildrenRef",
      default: () => { }
    }
  },
  methods: {
    getChildARef () {
      console.log(this.getParentRef());
    },
    getChildGRef () {
      console.log(this.getParentChildRef("childrenG")); //打印出来undefine
    }
  }
};
</script>

<style>
</style>
