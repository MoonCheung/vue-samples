<template>
  <div class="center">
    1.我的名字是{{name}}
    <button @click="childEmit">我给C组件赋值</button>
  </div>
</template>

<script>
export default {
  name: 'EmitChildA',
  data () {
    return {
      name: 'Vue',
    }
  },
  props: {
    Event
  },
  methods: {
    childEmit () {
      this.Event.$emit('message-A', this.name)
    }
  }
}
</script>

<style>
</style>
