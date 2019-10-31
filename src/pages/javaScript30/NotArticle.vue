<template>
  <div class="notArti_bg">
    <ul ref="bands"
        class="bands"></ul>
  </div>
</template>

<script>
export default {
  name: 'NotArticles',
  data () {
    return {
      bands: [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil',
        'Norma Jean',
        'The Bled',
        'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'
      ]
    }
  },
  mounted () {
    const sortedbands = this.bands.sort((a, b) => {
      this.delPrefix(a) > this.delPrefix(b) ? 1 : -1;
    })
    this.$refs.bands.innerHTML = '<li>' + sortedbands.join('</li><li>') + '</li>'
  },
  methods: {
    //去前缀函数
    delPrefix: function (item) {
      item.replace(/^(The|A|An)\s{1}/, '');
    },
  }
}
</script>

<style>
.notArti_bg {
  margin: 0;
  font-family: sans-serif;
  background: url("https://source.unsplash.com/nDqA4d5NL0k/2000x2000");
  background-size: cover;
  display: flex;
  align-items: center;
  min-height: 100vh;
}
.bands {
  list-style: inside square;
  font-size: 20px;
  background: white;
  width: 500px;
  margin: auto;
  padding: 0;
  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.bands li {
  border-bottom: 1px solid #efefef;
  padding: 20px;
}

.bands li:last-child {
  border-bottom: 0;
}
</style>
