<template>
  <div class="drag_bg">
    <div ref="items"
         class="items"
         @mousedown="drapDown"
         @mousemove="drapMove"
         @mouseup="drapUp">
      <div class="item"
           v-for="item in array"
           :key="item.id"
           :class="'item' + item.id">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drags',
  data () {
    return {
      array: [
        { id: '1', name: '01' },
        { id: '2', name: '02' },
        { id: '3', name: '03' },
        { id: '4', name: '04' },
        { id: '5', name: '05' },
        { id: '6', name: '06' },
        { id: '7', name: '07' },
        { id: '8', name: '08' },
        { id: '9', name: '09' },
        { id: '10', name: '10' },
        { id: '11', name: '11' },
        { id: '12', name: '12' },
        { id: '13', name: '13' },
        { id: '14', name: '14' },
        { id: '15', name: '15' }
      ],
      isMouseDown: false,
      scrollLeft: 0, //按下时位置的x坐标
      startX: 0 //记录视口相对于items最左侧已滚过的距离
    }
  },
  // 该方法被混入实例当中
  methods: {
    drapDown: function (e) {
      this.isMouseDown = true;
      let slider = this.$refs.items
      slider.classList.add('active');
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    },
    drapMove: function (e) {
      //阻止默认行为
      e.preventDefault();
      let slider = this.$refs.items;
      // 当鼠标未按下按钮时会返回停止操作
      if (!this.isMouseDown) {
        return;
      }
      let x = e.pageX - slider.offsetLeft;
      let walk = (x - this.startX) * 3;
      slider.scrollLeft = this.scrollLeft - walk;
    },
    drapUp: function (e) {
      this.isMouseDown = false;
      let slider = this.$refs.items
      slider.classList.remove('active');
    }
  }
}
</script>

<style>
.drag_bg {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0;
}

.items {
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid white;
  box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.09);
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0;
  perspective: 500px;
}

.items.active {
  background: rgba(255, 255, 255, 0.3);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}

.item {
  width: 200px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 0 10px rgba(179, 97, 97, 0.15);
}

.item:nth-child(9n + 1) {
  background: dodgerblue;
}
.item:nth-child(9n + 2) {
  background: goldenrod;
}
.item:nth-child(9n + 3) {
  background: paleturquoise;
}
.item:nth-child(9n + 4) {
  background: gold;
}
.item:nth-child(9n + 5) {
  background: cadetblue;
}
.item:nth-child(9n + 6) {
  background: tomato;
}
.item:nth-child(9n + 7) {
  background: lightcoral;
}
.item:nth-child(9n + 8) {
  background: darkslateblue;
}
.item:nth-child(9n + 9) {
  background: rebeccapurple;
}

.item:nth-child(even) {
  transform: scaleX(1.31) rotateY(40deg);
}
.item:nth-child(odd) {
  transform: scaleX(1.31) rotateY(-40deg);
}

.wrap {
  width: auto;
  border: 2px solid green;
  height: 100%;
}
</style>
