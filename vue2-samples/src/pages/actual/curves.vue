<template>
  <div class="curve-wrap">
    <!-- 07 如何用向量和参数方程描述曲线 -->
    <canvas class="curve01" width="512" height="512"></canvas>
  </div>
</template>

<script>
export default {
  name: 'curveIndex',
  mounted(){
    this.drawCurves()
  },
  methods: {
    drawCurves(){
      const canvas = document.querySelector('.curve01');
      const ctx = canvas.getContext('2d');
      const { width, height } = canvas;
      ctx.translate(0.5 * width, 0.5 * height); // 对网格添加平移并转化
      ctx.scale(1, -1); // 缩放

      // 第一步
      function draw(points, strokeStyle = 'black', fillStyle = null){
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath(); // 开始路径
        ctx.moveTo(...points[0]); // 移动画笔
        for(let i = 1; i < points.length; i++) {
          ctx.lineTo(...points[i]); // 直线
        }
        ctx.closePath();
        if(fillStyle) {
          ctx.fillStyle = fillStyle; // 填充样式
          ctx.fill(); // 填充
        }
        ctx.stroke(); // 绘制曲线
      }

      // 第二步
      const TAU_SEGMENTS = 60;
      const TAU = Math.PI * 2; // 计算给定半径的圆周长, 就是π圆周率约3.14
      function arc(x0, y0, radius, startAng = 0, endAng = Math.PI * 2) {
        const ang = Math.min(TAU, endAng - startAng);
        const ret = ang === TAU ? [] : [[x0, y0]];
        const segments = Math.round(TAU_SEGMENTS * ang / TAU);
        for(let i = 0; i <= segments; i++) {
          const x = x0 + radius * Math.cos(startAng + ang * i / segments);
          const y = y0 + radius * Math.sin(startAng + ang * i / segments);
          ret.push([x, y]);
        }
        return ret;
      }
      draw(arc(0, 0, 100));
    }
  }
};
</script>

<style></style>
