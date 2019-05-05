<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <p>{{ msg }}</p>
    <ul class="list">
      <li>
        <router-link to='/vIf'>vIf&vElse&vShow 实例</router-link>
      </li>
      <li>
        <router-link to='/vFor'>vFor 实例</router-link>
      </li>
      <li>
        <router-link to='/Props'>Props 实例</router-link>
      </li>
      <li>
        <router-link to='/bigProps'>bigProps 实例</router-link>
      </li>
      <li>
        <router-link to='/Event'>Event 实例</router-link>
      </li>
      <li>
        <router-link to='/PersonalInfo'>双向绑定与单向数据流实例</router-link>
      </li>
      <li>
        <router-link to='/Children'>虚拟DOM实例</router-link>
      </li>
      <li>
        <router-link to='/PropsAndData'>Props属性与Data状态实例</router-link>
      </li>
      <li>
        <router-link to='/CAW'>计算属性与侦听器实例</router-link>
      </li>
      <li>
        <router-link to='/directive'>自定义指令</router-link>
      </li>
      <li>
        <router-link to='/ProvideAndInject'>常用特性Provide与Inject</router-link>
      </li>
      <li>
        <router-link to='/TempleteAndJSX'>Template和JSX对比以及其本质</router-link>
      </li>
    </ul>
    <p>{{ vuex_msg }}</p>
    <ul>
      <li>
        <router-link to="/vuex_example">Vuex Demo</router-link>
      </li>
      <li>
        <router-link to="/vuex_example1">Vuex 核心底层原理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "Vue2.0 基础篇",
      vuex_msg: "Vuex 生态篇"
    };
  }
};
</script>

<style lang="css">
ul,
li {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.home {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>