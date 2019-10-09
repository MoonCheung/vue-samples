<template>
  <div class="center">
    2.我的岁数是{{age}}
    <a-button @click="childEmit">我给C组件赋值</a-button>
  </div>
</template>

<script>
export default {
  name: 'EmitChildB',
  data () {
    return {
      age: '28',
    }
  },
  props: {
    Event
  },
  methods: {
    childEmit () {
      this.Event.$emit('message-B', this.age)
    }
  }
}
</script>

<style>
</style>
