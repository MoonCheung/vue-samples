<template>
  <div class="center">
    <div>ChildB:{{attrsB}}</div>
    <div>ChildB的$attrs:{{$attrs}}</div>
    <button @click="this.reduceB">组件B减量</button>
    <child-c v-bind="$attrs"></child-c>
  </div>
</template>

<script>
import ChildC from './ChildC'
export default {
  name: 'ChildB',
  components: {
    ChildC
  },
  data () {
    return {}
  },
  props: {
    attrsB: {
      type: Number,
      default: null
    }
  },
  methods: {
    reduceB () {
      this.$emit('reduce')
    }
  }
}
</script>

<style>
</style>
