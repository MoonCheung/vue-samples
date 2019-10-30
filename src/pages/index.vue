<template>
  <div class="home">
    <a-row :gutter="16">
      <a-col class="gutter-row"
             :span="6">
        <div class="gutter-box">
          <img alt="Vue logo"
               src="../assets/logo.png">
          <a-collapse :bordered="false">
            <template v-slot:expandIcon="props">
              <a-icon type="caret-right"
                      :rotate="props.isActive ? 90 : 0" />
            </template>
            <a-collapse-panel :header="msg"
                              :style="customStyle"
                              key="1">
              <ul>
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
                <li>
                  <router-link to='/basis/12/Emit'>$emit子组件向父组件传值</router-link>
                </li>
                <li>
                  <router-link to='/basis/13/EmitAndOn'>$emitAnd$on子组件向父组件传值</router-link>
                </li>
                <li>
                  <router-link to='/basis/14/AttrsAndList'>$attrsAnd$listeners父子通信</router-link>
                </li>
                <li>
                  <router-link to='/basis/15/nextTick'>$nextTick 实例</router-link>
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel :header="vue3_msg"
                              :style="customStyle"
                              key="2">
              <ul>
                <li>
                  <router-link to="/vue3_basis/1/setup">setup 实例</router-link>
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel :header="vuex_msg"
                              :style="customStyle"
                              key="4">
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
            </a-collapse-panel>
            <a-collapse-panel :header="actual_msg"
                              :style="customStyle"
                              key="5">
              <ul>
                <li>
                  <router-link to="/chap/1/verifyForm">验证动态表单</router-link>
                </li>
                <li>
                  <router-link to="/chap/2/pdf">生成PDF文件</router-link>
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel :header="js30_msg"
                              :style="customStyle"
                              key="6">
              <ul>
                <li>
                  <router-link to="/js30/1/drumKit">JS Durm Kit</router-link>
                </li>
                <li>
                  <router-link to="/js30/2/clock">JS Clock</router-link>
                </li>
                <li>
                  <router-link to="/js30/3/variable">JS Variable</router-link>
                </li>
                <li>
                  <router-link to="/js30/4/flexPanel">JS FlexPanel</router-link>
                </li>
                <li>
                  <router-link to="/js30/5/typeAhead">JS TypeAhead</router-link>
                </li>
                <li>
                  <router-link to="/js30/6/H5Canvas">JS H5Canvas</router-link>
                </li>
                <li>
                  <router-link to="/js30/7/checkBox">JS CheckBox</router-link>
                </li>
                <li>
                  <router-link to="/js30/8/scroll">JS SlideAndScroll</router-link>
                </li>
              </ul>
            </a-collapse-panel>
          </a-collapse>
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
  data () {
    return {
      msg: "Vue2 基础篇",
      vue3_msg: 'Vue3 基础篇',
      vuex_msg: "Vuex 生态篇",
      actual_msg: 'Vue 实战篇',
      js30_msg: '基于Vue仿JavaScript30',
      customStyle: 'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden'
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