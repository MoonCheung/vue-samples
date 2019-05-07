<template>
  <div class="cart">
    <a-row>
      <a-col :span="24">
        <h2>清单</h2>
        <p v-show="!products.length"></p>
        <a-form :layout="formLayout">
          <a-form-item label="请添加产品到购物车"
                       :label-col="{span: 10}"
                       :wrapper-col="{span: 4}">
            <ul>
              <li v-for="product in products"
                  :key="product.id">
                {{product.title}} - 价格:{{product.price}} x {{product.quantity}}
              </li>
            </ul>
          </a-form-item>
          <a-form-item label="合计"
                       :label-col="{span: 10}"
                       :wrapper-col="{span: 4}">
            <div>{{total}}</div>
          </a-form-item>
        </a-form>
        <p>
          <a-button type="primary"
                    :disabled="!products.length"
                    @click="checkout(products)">提交</a-button>
        </p>
        <p v-show="checkoutStatus">提交{{checkoutStatus}}!</p>
      </a-col>
    </a-row>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      formLayout: "horizontal"
    };
  },
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
