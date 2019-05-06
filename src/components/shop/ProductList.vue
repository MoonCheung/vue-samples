<template>
  <ul>
    <li v-for="product in products"
        :key="product.id">
      {{product.title}} - {{product.price}}
      <br />
      <div>数量: <select v-model="numbers[product.id]">
          <option v-for="n in product.inventory"
                  :key="n"
                  :value="n">{{n}}</option>
        </select></div>
      <button :disabled="!product.inventory"
              @click="addProductToCart(product)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      numbers: []
    };
  },
  created() {
    //按照分发Action方法：通过store.dispatch的触发
    this.$store.dispatch("products/getAllProducts");
  },
  computed: {
    ...mapState({
      products: state => state.products.all
    })
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", {
        product,
        number: this.numbers[product.id]
      });
      this.numbers[product.id] = 1;
    }
  }
};
</script>

<style>
</style>
