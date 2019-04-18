<template>
  <div>
    <p>Reversed messaged1: "{{ reversedMessage1 }}"</p>
    <p>Reversed messaged2: "{{ reversedMessage2() }}"</p>
    <p>{{ now }}</p>
    <!-- $forceUpdate() 迫使 Vue 实例重新渲染。-->
    <button @click="() => $forceUpdate()">强制更新</button>
    <br /><br />
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hellow Message"
    };
  },
  //计算属性
  computed: {
    //面向字面量方法
    reversedMessage1: function() {
      console.log("执行reversedMessage1!!!");
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return new Date().toLocaleDateString();
    }
  },
  //该方法被混入vue实例里面
  methods: {
    reversedMessage2: function() {
      console.log("执行reversedMessage2!!!");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
