<template>
  <div>
    name: {{ name }}
    <br />
    type: {{ type }}
    <br />
    list: {{ list }}
    <br />
    isVisible: {{ isVisible }}
    <br />
    <button @click="handleClick">改变类型</button>
  </div>
</template>

<script>
export default {
  name: "propsDemo",
  props: {
    // 自定义验证函数
    name: String,
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      }
    },
    list: {
      type: Array,
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      this.onChange(this.type === "success" ? "warning" : "error");
    }
  }
};
</script>

<style>
</style>
