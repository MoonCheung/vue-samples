<template>
  <div class="center">
    <div>ChildA:{{attrsA}}</div>
    <div>ChildA的$attrs:{{$attrs}}</div>
    <a-button @click="this.reduceA">组件A减量</a-button>
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
