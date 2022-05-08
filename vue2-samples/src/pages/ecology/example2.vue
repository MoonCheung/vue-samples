<template>
  <div class="shop">
    <h1>购物车示例</h1>
    <p>账号: {{email}}</p>
    <hr>
    <h2>产品</h2>
    <product-list />
    <hr />
    <shopping-cart />
  </div>
</template>

<script>
import { mapState } from "vuex";
import productList from "@/components/shop/ProductList";
import shoppingCart from "@/components/shop/ShoppingCart";

export default {
  name: "example2",
  components: {
    productList,
    shoppingCart
  },
  computed: {
    // ...mapState 返回一个对象，可将computed局部对象属性混合使用
    ...mapState({
      email: state => state.userInfo.email
    })
  }
};
</script>

<style>
</style>
