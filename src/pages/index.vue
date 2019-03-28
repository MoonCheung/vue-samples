<template>
  <div>
    <strong>{{ massage }}</strong>
    <ul class="list">
      <li><router-link to='/vIf'>vIf&vElse&vShow 实例</router-link></li>
      <li><router-link to='/vFor'>vFor 实例</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      massage: 'Vue2.0基础'
    }
  }
}
</script>

<style lang="css">
ul,li{
  margin: 0;
  padding: 0;
}
ul{
  list-style: none;
}
</style>