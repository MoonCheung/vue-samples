<template>
  <div>
    <a-tabs>
      <a-tab-pane tab="计算属性"
                  key="1">
        <v-computed />
      </a-tab-pane>
      <a-tab-pane tab="侦听器"
                  key="2">
        <v-watch />
      </a-tab-pane>
      <a-tab-pane tab="计算属性与侦听器"
                  key="3">
        <VComputed1 />
        <br />
        <VWatch1 />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import VComputed from "@/components/ComputedAndWatch/computed";
import VWatch from "@/components/ComputedAndWatch/watch";
import VComputed1 from "@/components/ComputedAndWatch/computed1";
import VWatch1 from "@/components/ComputedAndWatch/watch1";

export default {
  components: {
    VComputed,
    VComputed1,
    VWatch,
    VWatch1
  }
};
</script>
