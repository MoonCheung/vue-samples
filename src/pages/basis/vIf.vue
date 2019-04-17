<template>
  <div>
    <div v-if="isLogin == true ">hello,MoonCheung!!!</div>
    <div v-else>请登录！</div>
    <div v-show="isLogin">这是显示Vue-Router</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style>
</style>
