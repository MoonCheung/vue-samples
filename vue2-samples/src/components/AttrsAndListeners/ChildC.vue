<template>
  <div class="center">
    <div>ChildC:{{attrsC}}</div>
    <div>ChildC的$attrs:{{$attrs}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildC',
  data () {
    return {}
  },
  props: {
    attrsC: {
      type: Number,
      default: null
    }
  }
}
</script>

<style>
</style>
