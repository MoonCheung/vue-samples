<template>
  <div class="container">
    <a-button @click="parentReduce">父组件减量</a-button>
    <child-a :attrs-c="c"
             :attrs-b="b"
             :attrs-a="a"
             @reduce="parentReduce"></child-a>
  </div>
</template>

<script>
import ChildA from '@/components/AttrsAndListeners/ChildA'
export default {
  name: 'AttrsAndList',
  components: {
    ChildA
  },
  data () {
    return {
      a: 1,
      b: 2,
      c: 100,
    }
  },
  methods: {
    parentReduce () {
      this.c--;
    }
  }
}
</script>

<style>
</style>
