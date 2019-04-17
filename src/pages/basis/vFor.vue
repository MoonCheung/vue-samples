<template>
  <div>
    <ul>
      <li v-for="item in sortItems">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(student,index) in sortStudents">
        {{ index }}:{{ student.name }} -> {{ student.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
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
    sortItems: function() {
      return this.items.sort((a, b) => a - b);
    },
    sortStudents: function() {
      let self = this;
      return self.sortByKey(self.students, "age");
    }
  },
  mounted() {
    this.sortByKey();
  },
  methods: {
    //数组对象方法排序：
    sortByKey(array, key) {
      return array.sort(function(a, b) {
        let x = a[key];
        let y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
  }
};
</script>

<style lang="css">
</style>