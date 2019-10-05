<template>
  <div>
    <ul>
      <li v-for="item in sortItems"
          :key="item.id">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(student,index) in sortStudents"
          :key="index">
        {{ index }}:{{ student.name }} -> {{ student.age }}
      </li>
    </ul>
  </div>
</template>

<script>

//用来封装函数：数组对象方法排序
function sortByKey (array, key) {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

export default {
  data () {
    return {
      items: [5, 63, 14, 35, 28, 36, 37],
      students: [
        { name: "jsVue", age: 26 },
        { name: "jsNg", age: 3 },
        { name: "jsReact", age: 54 },
        { name: "ThinkPHP", age: 65 },
        { name: "Laravel", age: 16 }
      ],
      array: []
    };
  },
  computed: {
    sortItems: function () {
      return this.items.sort((a, b) => a - b);
    },
    sortStudents: function () {
      return sortByKey(this.students, "age");
    }
  }
};
</script>

<style lang="css">
</style>