<template>
  <div class="home">
    <a-row :gutter="16">
      <a-col class="gutter-row"
             :span="6">
        <div class="gutter-box">
          <img alt="Vue logo"
               src="../assets/logo.png">
          <p>{{ msg }}</p>
          <ul class="list">
            <li>
              <router-link to='/basis/1/vIf'>vIf&vElse&vShow 实例</router-link>
            </li>
            <li>
              <router-link to='/basis/2/vFor'>vFor 实例</router-link>
            </li>
            <li>
              <router-link to='/basis/3/Props'>Props 实例</router-link>
            </li>
            <li>
              <router-link to='/basis/3/bigProps'>bigProps 实例</router-link>
            </li>
            <li>
              <router-link to='/basis/4/Event'>Event 实例</router-link>
            </li>
            <li>
              <router-link to='/basis/5/PersonalInfo'>双向绑定与单向数据流实例</router-link>
            </li>
            <li>
              <router-link to='/basis/6/Children'>虚拟DOM实例</router-link>
            </li>
            <li>
              <router-link to='/basis/7/PropsAndData'>Props属性与Data状态实例</router-link>
            </li>
            <li>
              <router-link to='/basis/8/CAW'>计算属性与侦听器实例</router-link>
            </li>
            <li>
              <router-link to='/basis/9/directive'>自定义指令</router-link>
            </li>
            <li>
              <router-link to='/basis/10/ProvideAndInject'>常用特性Provide与Inject</router-link>
            </li>
            <li>
              <router-link to='/basis/11/TempleteAndJSX'>Template和JSX对比以及其本质</router-link>
            </li>
          </ul>
          <p>{{ vuex_msg }}</p>
          <ul>
            <li>
              <router-link to="/ecology/1/vuex_example">Vuex 基础</router-link>
            </li>
            <li>
              <router-link to="/ecology/2/vuex_example1">Vuex 核心底层原理</router-link>
            </li>
            <li>
              <router-link to="/ecology/3/vuex_example2">基于Vue，Vuex的购物车演示</router-link>
            </li>
          </ul>
        </div>
      </a-col>
      <a-col class="gutter-row"
             :span="18">
        <div class="gutter-box">
          <router-view></router-view>
        </div>
      </a-col>
    </a-row>

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
  },
  props: ["id"]
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