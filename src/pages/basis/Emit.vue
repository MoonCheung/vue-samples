<template>
  <div class="container">
    <div class="title">{{title}}</div>
    <emit-child @changeTitle="parentTitle"></emit-child>
  </div>
</template>

<script>
import EmitChild from '@/components/EmitChild';

export default {
  name: 'Emit',
  components: {
    EmitChild
  },
  data () {
    return {
      title: null
    }
  },
  methods: {
    parentTitle (e) {
      this.title = e;
    }
  }

}
</script>

<style>
</style>
