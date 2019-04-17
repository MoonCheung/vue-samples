<template>
  <div>
    <v-props name='Hello Vue'
             :type="type"
             :is-visible="false"
             :on-change="handlePropChange"
             title="属性Demo"
             class="test1"
             :class="['test2']"
             :style="{ mariginTop: '20px'}"
             style="marginTop: 10px" />
  </div>
</template>

<script>
import VProps from "@/components/Props_cmpt";

export default {
  components: {
    VProps
  },
  data() {
    return {
      type: "success"
    };
  },
  methods: {
    handlePropChange(val) {
      this.type = val;
    }
  }
};
</script>

<style>
</style>
