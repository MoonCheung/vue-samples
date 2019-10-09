<template>
  <div class="center">
    <a-button @click="childTitle">我是给父组件传值</a-button>
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



