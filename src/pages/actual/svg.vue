<template>
  <div class="svg-wrap">
    <h2 id="title"></h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="svg"
      version="1.1"
      width="800"
      height="800"
      viewBox="0 0 1600 1600"
    ></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'svgIndex',
  data() {
    this.dataSource = 'https://s5.ssl.qhres.com/static/b0695e2dd30daa64.json';
    return {};
  },
  created() {
    this.drawRegionSvg();
  },
  methods: {
    async drawRegionSvg() {
      const data = await d3.json(this.dataSource);
      const regions = d3
        .hierarchy(data)
        .sum((d) => 1)
        .sort((a, b) => b.value - a.value);

      const pack = d3
        .pack()
        .size([1600, 1600])
        .padding(3);
      // 使用默认的设置创建一个打包布局
      const root = pack(regions);

      const svgroot = document.querySelector('.svg');
      function draw(parent, node, { fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white' } = {}) {
        const children = node.children;
        const { x, y, r } = node;
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', r);
        circle.setAttribute('fill', fillStyle);
        circle.setAttribute('data-name', node.data.name);
        parent.appendChild(circle);
        if (children) {
          const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          for (let i = 0; i < children.length; i++) {
            draw(group, children[i], { fillStyle, textColor });
          }
          group.setAttribute('data-name', node.data.name);
          parent.appendChild(group);
        } else {
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.setAttribute('fill', textColor);
          text.setAttribute('font-family', 'Arial');
          text.setAttribute('font-size', '1.5rem');
          text.setAttribute('text-anchor', 'middle');
          text.setAttribute('x', x);
          text.setAttribute('y', y);
          const name = node.data.name;
          text.textContent = name;
          parent.appendChild(text);
        }
      }

      draw(svgroot, root);

      const titleEl = document.getElementById('title');

      let activeTarget = null;
      svgroot.addEventListener('mousemove', (evt) => {
        let target = evt.target;
        if (target.nodeName === 'text') target = target.previousSibling;
        if (activeTarget !== target) {
          if (activeTarget) activeTarget.setAttribute('fill', 'rgba(0, 0, 0, 0.2)');
        }
        target.setAttribute('fill', 'rgba(0, 128, 0, 0.1)');
        titleEl.textContent = this.getTitle(target);
        activeTarget = target;
      });
    },
    // 获取区域标题触发
    getTitle(target) {
      const name = target.getAttribute('data-name');
      if (target.parentNode && target.parentNode.nodeName === 'g') {
        const parentName = target.parentNode.getAttribute('data-name');
        return `${parentName}-${name}`;
      }
      return name;
    }
  }
};
</script>

<style></style>
