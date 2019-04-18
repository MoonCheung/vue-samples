<template>
  <div>
    <p>
      <button @click="handleNameChange">改变 this.name</button>
      <button @click="handleInfoChange">改变 this.info</button>
      <button @click="handleListChange">改变 this.list</button>
    </p>
    <props-and-data :name="name"
                    :info="info"
                    :list="list" />
  </div>
</template>

<script>
import PropsAndData from "@/components/PropsAndData_cmpt";
let name = "Vue Basis"; //全局上下文

export default {
  components: {
    PropsAndData
  },
  data() {
    // this.name = name;
    return {
      name: name,
      // info: {},
      // 修改info对象
      info: {
        nubmer: undefined //此表示不存在值，这个变量被已经声明，但是还没未定义，返回undefined
      },
      list: []
    };
  },
  methods: {
    //以下三个匿名函数
    handleNameChange() {
      this.name = "Vue " + new Date().toLocaleDateString();
      console.log(
        "this.name 发生了变化，但是并没有触发子组件更新，",
        this.name
      );
    },
    handleInfoChange() {
      this.info.nubmer = 1;
      console.log(
        "this.info 发生了变化，但是并没有触发子组件更新，",
        this.info
      );
    },
    handleListChange() {
      this.list.push(1, 2, 3);
      console.log(
        "this.list 发生了变化，但是并没有触发子组件更新，",
        this.list
      );
    }
  }
};
</script>

<style>
</style>
