<template>
  <div class="border2">
    <a-input v-model="phone"
             type="number" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: ""
    };
  }
};
</script>

<style>
</style>
