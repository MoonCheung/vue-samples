<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <v-Index />
  </div>
</template>

<script>
import vIndex from './pages/index'

export default {
  name: 'app',
  components: {
    vIndex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, ul, ol, li, h1, h2, h3, h4, h5, h6, p, form, dl, dt, dd { 
    margin: 0px; 
    padding: 0px; 
    font-size: 12px; 
    font-weight: normal; }
ul { list-style: none; }
img { border-style: none; }
</style>
