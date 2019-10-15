<template>
  <div class="variable_bg">
    <div class="controls">
      <label for="spacing">Spacing:</label>
      <input type="range"
             ref="range"
             name="spacing"
             min="10"
             max="200"
             value="10"
             data-sizing="px">

      <label for="blur">Blur:</label>
      <input type="range"
             ref="range"
             name="blur"
             min="0"
             max="25"
             value="10"
             data-sizing="px">

      <label for="base">Base Color:</label>
      <input type="color"
             ref="range"
             name="base"
             value="#ffc600">
    </div>

    <img class="variable_img"
         src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
  </div>
</template>

<script>
export default {
  name: "Variable",
  mounted () {
    this.handleInpute();
  },
  methods: {
    handleInpute: function () {
      let inputs = document.querySelectorAll(".controls input");
      inputs.forEach(input => input.addEventListener('change', this.handleUpdate));
      inputs.forEach(input => input.addEventListener('mousemove', this.handleUpdate));
    },
    handleUpdate: function () {
      const suffix = this.$refs.range.dataset.sizing || '';
      let name = this.$refs.range.name
      let value = this.$refs.range.value
      document.documentElement.style.setProperty(`--${name}`, value + suffix);
    }
  }
}
</script>

<style>
.variable_bg {
  text-align: center;
  background: #193549;
  color: white;
  font-family: "helvetica neue", sans-serif;
  font-weight: 100;
  font-size: 50px;
  min-height: 100vh;
}

:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

.variable_img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}

.controls {
  margin-bottom: 50px;
}

input {
  width: 100px;
}
</style>
