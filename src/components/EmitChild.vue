<template>
  <div class="center">
    <button @click="childTitle">我是给父组件传值</button>
  </div>
</template>

<script>
export default {
  name: 'EmitChild',
  data () {
    return {
      key: 1
    }
  },
  methods: {
    childTitle () {
      this.$emit('changeTitle', `我给父组件的第${this.key}`);
      this.key++;
    }
  }
}
</script>

<style>
</style>



