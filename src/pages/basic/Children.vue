<template>
  <div>
    <!-- HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。 -->
    <!-- 需要采用kebab-case (短横线分隔命名) -->
    <children-a1 />
    <children-a2 />
  </div>
</template>

<script>
import ChildrenA1 from "@/components/Children/ChildrenA1";
import ChildrenA2 from "@/components/Children/ChildrenA2";

export default {
  components: {
    ChildrenA1,
    ChildrenA2
  }
};
</script>

<style>
.border,
.border1,
.border2 {
  border: 1px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  border-color: #ccc;
}
.border2 {
  border-color: #eee;
}
</style>
