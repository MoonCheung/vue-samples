<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <p>{{ massage }}</p>
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
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      massage: "Vue2.0基础"
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