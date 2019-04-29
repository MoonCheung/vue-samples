<template>
  <a-tabs>
    <a-tab-pane key="Directives"
                tab="内置指令">
      <Directive />
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import Directive from "@/components/Directive_cmpt";
export default {
  components: {
    Directive
  }
};
</script>

<style>
</style>
