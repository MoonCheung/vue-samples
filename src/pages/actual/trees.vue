<template>
  <div class="tree-wrap">
    <!-- 05 如何用向量和坐标系描述点和线段？-->
    <canvas width="512" height="512">绘制随时树图形</canvas>
  </div>
</template>

<script>
import { Vector2D } from '@/utils/Vector2D';

export default {
  name: 'treeIndex',
  data() {
    return {};
  },
  mounted() {
    this.drawTrees();
  },
  methods: {
    drawTrees() {
      const length = 50; // 长度
      const thickness = 10; // 厚度
      const dir = 1; // 旋转
      const bias = 3; // 基数
      const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');

      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.lineCap = 'round';

      const v0 = new Vector2D(256, 0);
      this.drawBranch(ctx, v0, length, thickness, dir, bias);
    },
    drawBranch(context, v0, length, thickness, dir, bias) {
      const v = new Vector2D().rotate(dir).scale(length);
      const v1 = v0.copy().add(v);

      context.lineWidth = thickness;
      context.beginPath(); // 开始路径
      context.moveTo(...v0); // 移动
      context.lineTo(...v1); // 直线移动
      context.stroke(); // 图形轮廓

      if (thickness > 2) {
        const left = Math.PI / 4 + 0.5 * (dir + 0.2) + bias * (Math.random() - 0.5);
        this.drawBranch(context, v1, length * 0.9, thickness * 0.8, left, bias * 0.9);
        const right = Math.PI / 4 + 0.5 * (dir - 0.2) + bias * (Math.random() - 0.5);
        this.drawBranch(context, v1, length * 0.9, thickness * 0.8, right, bias * 0.9);
      }

      if (thickness < 5 && Math.random() < 0.3) {
        context.save(); // 保存画布(canvas)的所有状态
        context.strokeStyle = '#c72c35';
        context.lineWidth = Math.random() * 6 + 3;
        context.beginPath();
        context.moveTo(...v1);
        context.lineTo(v1.x, v1.y - 2);
        context.stroke();
        context.restore(); // 恢复默认状态
      }
    }
  }
};
</script>
