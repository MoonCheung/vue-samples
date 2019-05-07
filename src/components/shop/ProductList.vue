<template>
  <ul>
    <li v-for="product in products"
        :key="product.id">
      {{product.title}} - {{product.price}}
      <br />
      <div>数量:
        <a-select :defaultValue="product.inventory[0]"
                  style="width: 80px"
                  size="small"
                  v-model="numbers[product.id]">
          <a-select-option v-for="n in product.inventory"
                           :key="n"
                           :value="n">{{n}}
          </a-select-option>
        </a-select>&nbsp;&nbsp;
        <a-button :disabled="!product.inventory"
                  @click="addProductToCart(product)">
          加入购物车
        </a-button>
      </div>
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
