<template>
  <div>
    <!-- Vue 实例观察的数据对象。 -->
    {{ $data }}<br />
    <a-button @click="() => (a += 1)">a+1</a-button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  // watch方法是一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
  watch: {
    //采用对象字面量这些方法
    a: function (val, oldVal) {
      this.b.c += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.c": function (val, oldVal) {
      this.b.d += 2;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.d": function (val, oldVal) {
      this.e.f.g += 3;
      console.log("new: %s, old: %s", val, oldVal);
    },
    //深度watcher
    e: {
      handler: function (val, oldVal) {
        this.h.push("🐏");
        console.log("new: %s, old: %s", val, oldVal);
      },
      deep: true
    }
    // h: function(val, oldVal) {
    //   console.log("new: %s, old: %s", val, oldVal);
    // }
  }
};
</script>

<style>
</style>
