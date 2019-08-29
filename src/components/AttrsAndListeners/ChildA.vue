<template>
  <div class="center">
    <div>ChildA:{{attrsA}}</div>
    <div>ChildA的$attrs:{{$attrs}}</div>
    <button @click="this.reduceA">组件A减量</button>
    <child-b v-bind="$attrs"
             v-on="$listeners"></child-b>
  </div>
</template>

<script>
import ChildB from './ChildB'

export default {
  name: 'ChildA',
  components: {
    ChildB
  },
  data () {
    return {}
  },
  props: {
    attrsA: {
      type: Number,
      default: null
    }
  },
  methods: {
    reduceA () {
      this.$emit('reduce')
    }
  }

}
</script>

<style>
</style>
