<template>
  <div>
    <button @click="show = !show">销毁</button>
    <button v-if="show"
            v-append-text="`hello ${number}`"
            @click="number++">按钮</button>
    <clock v-if="show"
           :number='number'></clock>
  </div>
</template>

<script>
import Clock from "./Clock";

export default {
  components: {
    Clock
  },
  data() {
    return {
      number: 1,
      show: true
    };
  },
  directives: {
    appendText: {
      //只调用一次，指令第一次绑定到元素时调用。
      bind() {
        console.log("bind");
      },
      //被绑定元素插入父节点时调用
      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value));
        // console.log("inserted: ", el, binding);
      },
      // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
      update() {
        console.log("update");
      },
      //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length - 1]);
        el.appendChild(document.createTextNode(binding.value));
        // console.log("componentUpdated: ", el, binding);
      },
      //只调用一次，指令与元素解绑时调用。
      unbind() {
        console.log("unbind");
      }
    }
  }
};
</script>

<style>
</style>
