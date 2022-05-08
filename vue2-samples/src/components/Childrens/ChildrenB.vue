<template>
  <div class="border1">
    <h2>B 节点</h2>
    <ChildrenE />
    <ChildrenF />
  </div>
</template>

<script>
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  components: {
    ChildrenE,
    ChildrenF
  },
  provide() {
    return {
      theme: {
        color: "green"
      }
    };
  }
};
</script>