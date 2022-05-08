<template>
  <div class="shadow_bg">
    <div ref="shadows"
         class="hero">
      <h1 ref="shaTexts"
          class="hero_child"
          contenteditable>🔥WOAH!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shadows',
  data () {
    return {
      factor: 0.4
    }
  },
  mounted () {
    this.$refs.shadows.addEventListener('mousemove', this.shadowMove)
  },
  methods: {
    shadowMove: function (e) {
      //对象解构赋值
      const {
        offsetWidth: width,
        offsetHeight: height
      } = this.$refs.shadows;
      const {
        offsetX: x,
        offsetY: y
      } = e;
      if (this !== e.target) {
        let selfX = x + e.target.offsetLeft;
        let selfY = y + e.target.offsetTop;
      }

      let xWalk = parseInt((x - width / 2) * this.factor);
      let yWalk = parseInt((y - height / 2) * this.factor);

      // 使用模板字符串赋值
      this.$refs.shaTexts.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
      `;
    }
  }
}
</script>

<style>
.shadow_bg {
  color: black;
  font-family: sans-serif;
  margin: 0;
}
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.hero_child {
  text-shadow: 10px 10px 0 rgba(0, 0, 0, 1);
  font-size: 100px;
}
</style>
