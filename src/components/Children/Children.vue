<template>
  <div class="border2">
    <a-input v-model="phone" oninput="value=value.replace(/[^\d]/g,'')" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ''
    };
  }
};
</script>

<style></style>
