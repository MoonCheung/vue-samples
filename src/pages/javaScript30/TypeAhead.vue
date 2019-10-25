<template>
  <div class="search-bg">
    <form class="search-form">
      <a-input type="text"
               size="large"
               ref="searchs"
               class="search"
               v-model="value"
               @keyup.enter="displayMatches"
               @change.stop="displayMatches"
               placheholder="城市或国家" />
      <ul ref="suggestions"
          class="suggestions">
        <li>筛选城市或国家</li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TypeAheads',
  data () {
    return {
      cities: [],
      value: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
      fetch(endpoint)
        .then(res => res.json())
        .then(data => this.cities.push(...data));
    })
  },
  //该方法被混入实例调用
  methods: {
    findMatches: function (wordToMatch, cities) {
      return cities.filter(place => {
        // 这里我们需要弄清楚城市或州是否与搜索到的内容相匹配
        // NOTE：g -> 全局匹配, i -> 忽略大小写
        const regex = new RegExp(wordToMatch, 'gi');
        // NOTE：match方法：检索返回一个字符串匹配正则表达式结果
        return place.city.match(regex) || place.state.match(regex)
      })
    },
    numberWithCommas: function (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    displayMatches: function () {
      const matchArray = this.findMatches(this.value, this.cities)
      const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        // replace方法：返回一个由替换值替换一些或者所有匹配的模式后的新字符串
        const cityname = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        const statename = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        return `
          <li>
            <span class="name">${cityname},${statename}</span>
            <span class="population">${this.numberWithCommas(place.population)}</span>
          </li>
        `
      }).join('');
      this.$refs.suggestions.innerHTML = html;
    }
  }
}
</script>

<style>
.search-bg {
  box-sizing: border-box;
  background: hsla(193, 30%, 64%, 0.78);
  font-family: "Kaiti", "SimHei", "Hiragino Sans GB ", "helvetica neue";
  font-size: 20px;
  font-weight: 200;
  height: 100%;
}
input {
  width: 100%;
  padding: 20px;
  font-family: "Kaiti", "helvetica neue";
}
.search-form {
  max-width: 700px;
  margin: 50px auto;
}

input.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 4px solid #f7f7f7;
  border-radius: 5px;
  width: 120%;
  height: 40%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  font-size: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}
.suggestions {
  margin: 0;
  padding: 0;
  position: relative;
  /*perspective:20px;*/
}

.suggestions li {
  background: white;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
}

.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

span.population {
  font-size: 15px;
  line-height: 30px;
  margin-left: 10px;
}

span.info {
  display: flex;
  flex-direction: column;
}

span.author,
span.title {
  font-size: 0.8em;
  /*		right: 0;*/
}

span.title {
  color: #7c8e94;
  position: absolute;
  right: 5px;
  bottom: 1px;
}

.details {
  text-align: center;
  font-size: 15px;
}

.hl {
  background: hsla(193, 37%, 64%, 0.65);
}

.love {
  text-align: center;
}

a {
  color: black;
  background: rgba(0, 0, 0, 0.1);
  text-decoration: none;
}
</style>
