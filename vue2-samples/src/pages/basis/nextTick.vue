<template>
  <div>
    <ul>
      <li class="nextList"
          v-for="item in list"
          :key="item.id">{{item}}</li>
    </ul>
    <ol>
      <li class="nextList1"
          v-for="item in list1"
          :key="item.id">{{item}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'NextTick',
  data () {
    return {
      list: [],
      list1: []
    }
  },
  // 实例创建完成后被调用
  created () {
    this.compileList()
    this.$nextTick(function () {
      // DOM 更新了
      console.log('created 实例完成之后: ' + new Date().toString(), document.querySelectorAll('.nextList').length)
    })
  },
  methods: {
    compileList () {
      let self = this;
      let count = 100;

      for (let i = 0; i < count; i++) {
        self.$set(self.list, i, 'I am a ul列表测试～～啦啦啦->' + i)
      }
      // 没有vm.$nextTick的情况下Dom没有更新了
      console.log('该方法完成渲染列表: ' + new Date().toString(), document.querySelectorAll('.nextList').length)

      self.$nextTick(function () {
        // DOM 更新了
        console.log('该方法在$nextTick实例完成之后: ' + new Date().toString(), document.querySelectorAll('.nextList').length)
      })

      //定时间隔5秒
      setTimeout(self.setTimeouts, 5000);
    },
    setTimeouts () {
      let self = this;
      let count = 100;

      for (let i = 0; i < count; i++) {
        self.$set(self.list1, i, 'I am a ol列表测试～～啦啦啦->' + i)
      }
      // 没有vm.$nextTick的情况下Dom没有更新了
      console.log('该setTimeouts方法完成渲染列表: ' + new Date().toString(), document.querySelectorAll('.nextList1').length)

      self.$nextTick(function () {
        // DOM 更新了
        console.log('该setTimeouts方法在$nextTick实例完成之后: ' + new Date().toString(), document.querySelectorAll('.nextList1').length)
      })
    }
  }
}
</script>

<style>
ul,
ol {
  list-style-type: none;
  padding: 0;
}
</style>
