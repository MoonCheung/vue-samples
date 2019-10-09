<template>
  <div class="border">
    <h1>A节点</h1>
    <a-button @click="changeColor()">改变Color</a-button><br />
    <a-button @click="getH3Child">获取I h3 Ref</a-button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>

<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";

export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  data () {
    return {
      color: "blue"
    };
  },
  provide () {
    return {
      themes: this,
      theme: {
        color: this.color
      },
      setChildrenRef: (name, ref) => {
        this[name] = ref;
      },
      getChildrenRef: name => {
        return this[name];
      },
      getRef: () => {
        return this;
      }
    };
  },
  methods: {
    changeColor (color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    },
    getH3Child () {
      console.log(this.childrenI);
    }
  }
};
</script>

<style>
</style>
