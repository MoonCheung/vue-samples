<template>
  <div class="variable_bg">
    <div class="controls">
      <label for="spacing">Spacing:</label>
      <input type="range"
             ref="spacings"
             name="spacing"
             min="10"
             max="200"
             value="10"
             data-sizing="px">

      <label for="blur">Blur:</label>
      <input type="range"
             ref="blurs"
             name="blur"
             min="0"
             max="25"
             value="10"
             data-sizing="px">

      <label for="base">Base Color:</label>
      <input type="color"
             ref="bases"
             name="base"
             value="#ffc600">
    </div>

    <img class="variable_img"
         src="https://source.unsplash.com/7bwQXzbF6KE/800x500">
  </div>
</template>

<script>
export default {
  name: "Variables",
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
      const suffix1 = this.$refs.spacings.dataset.sizing || '';
      const suffix2 = this.$refs.blurs.dataset.sizing || '';
      let spaName = this.$refs.spacings.name
      let blurName = this.$refs.blurs.name
      let baseName = this.$refs.bases.name
      let spaVal = this.$refs.spacings.value
      let blurVal = this.$refs.blurs.value
      let baseVal = this.$refs.bases.value
      document.documentElement.style.setProperty(`--${spaName}`, spaVal + suffix1);
      document.documentElement.style.setProperty(`--${blurName}`, blurVal + suffix2);
      document.documentElement.style.setProperty(`--${baseName}`, baseVal);
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
