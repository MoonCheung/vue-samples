<template>
  <div>
    <strong>{{ massage }}</strong>
    <ol>
      <li><router-link to='/vIf'>vIf&vElse&vShow 实例</router-link></li>
    </ol>
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

<style lang="sass" scoped>

</style>
