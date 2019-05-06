<template>
  <div class="cart">
    <h2>清单</h2>
    <p v-show="!products.length"></p>
    <i>请添加产品到购物车：</i>
    <ul>
      <li v-for="product in products"
          :key="product.id">
        产品:{{product.title}} - 价格:{{product.price}} x {{product.quantity}}
      </li>
    </ul>
    <p>合计:{{total}}</p>
    <p><button :disabled="!products.length"
              @click="checkout(products)">提交</button></p>
    <p v-show="checkoutStatus">提交{{checkoutStatus}}!</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("cart", {
      checkoutStatus: state => state.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      // console.log(products);
      this.$store.dispatch("cart/checkout", products);
    }
  }
};
</script>

<style>
</style>
