<template>
  <!-- DOM触摸事件说明：
     mouseup事件在鼠标设备按钮抬起时触发
     mousemove事件在鼠标在元素上移动时，mousemove事件被触发
     mouseout事件在当鼠标移出附加侦听器的元素或者关闭了它的一个子元素时触发
     mousedown事件在当鼠标按钮按下时候触发 -->
  <div class="canvas_bg">
    <canvas ref="draw"
            width="1000"
            height="1000"
            @mouseup="isDrawing = false"
            @mouseout="isDrawing = false"
            @mousemove="draws($event)"
            @mousedown="isDrawing = true"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HTML5Canvas',
  data () {
    return {
      isDrawing: false,
      lastX: 0,
      lastY: 0,
      hue: 0,
      direcion: true
    }
  },
  mounted () {
    let ctx = this.$refs.draw.getContext('2d');
    this.$refs.draw.width = window.innerWidth;
    this.$refs.draw.height = window.innerHeight;
    ctx.strokeStyle = '#BADA55'; //描述画笔（绘制图形）颜色或者样式的属性
    ctx.lineJoin = "round"; // 设置2个长度不为0的线段，圆弧，曲线如何连接在一起的属性
    ctx.lineCap = "round"; // Canvas 2D API 指定如何绘制每一条线段末端的属性
    ctx.lineWidth = 100;
  },
  methods: {
    draws: function (e) {
      let ctx = this.$refs.draw.getContext('2d');

      //当鼠标没有点击时候会停止运行
      if (!this.isDrawing) return;
      [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
      ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      // NOTE: stroke方法：Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法
      ctx.stroke();

      this.hue++;
      if (this.hue >= 360) {
        this.hue = 0;
      }
      //方向变化
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        this.direcion = !this.direcion;
      }
      if (this.direcion) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    }
  }
}
</script>

<style>
.canvas_bg {
  margin: 0;
}
</style>
