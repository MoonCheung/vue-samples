<template>
  <div class="webgl_wrap">
    <canvas class="webgl" width="300" height="300"></canvas>
  </div>
</template>

<script>
export default {
  name: 'WebGLIndex',
  mounted() {
    this.drawRegionWebGL();
  },
  methods: {
    drawRegionWebGL() {
      const canvas = document.querySelector('.webgl');
      const gl = canvas.getContext('webgl');

      const vertex = `
        attribute vec2 position;
        varying vec3 color;

        void main() {
          gl_PointSize = 1.0;
          color = vec3(0.5 + position * 0.5, 0.0);
          gl_Position = vec4(position * 0.5, 1.0, 1.0);
        }
      `;

      const fragment = `
        precision mediump float;
        varying vec3 color;

        void main()
        {
          gl_FragColor = vec4(color, 1.0);
        }
      `;

      // 顶点着色器
      const vertexShader = gl.createShader(gl.VERTEX_SHADER);
      // 设置一个源码
      gl.shaderSource(vertexShader, vertex);
      // 编译着色器
      gl.compileShader(vertexShader);

      // 图元着色器
      const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
      // 设置一个源码
      gl.shaderSource(fragmentShader, fragment);
      // 编译着色器
      gl.compileShader(fragmentShader);

      // 将两个shader关联到WebGL程序
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      // 通过useProgram启用WebGLProgram 对象
      gl.useProgram(program);

      const points = new Float32Array([-1, -1, 0, 1, 1, -1]);
      const bufferId = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
      gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

      // 获取顶点着色器中的position变量的地址;
      const vPosition = gl.getAttribLocation(program, 'position');
      // 给变量设置长度和类型;
      gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
      // 激活这个变量;
      gl.enableVertexAttribArray(vPosition);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, points.length / 2);
    }
  }
};
</script>

<style></style>
