<template>
  <div>
    <event :name="name"
           @change="handleEventChange" />
  </div>
</template>

<script>
import Event from "@/components/Event_copy";
export default {
  components: {
    Event
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleEventChange(val) {
      this.name = val;
    }
  }
};
</script>

<style>
</style>
