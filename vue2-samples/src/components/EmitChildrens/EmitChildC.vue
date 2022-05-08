<template>
  <div class="center">
    我的名字是{{name}},今年{{age}}岁了
  </div>
</template>

<script>
export default {
  name: 'EmitChildC',
  data () {
    return {
      name: '',
      age: '',
    }
  },
  props: {
    Event
  },
  mounted () {
    this.Event.$on('message-A', name => {
      this.name = name
    })
    this.Event.$on('message-B', age => {
      this.age = age;
    })
  }
}
</script>

<style>
</style>
