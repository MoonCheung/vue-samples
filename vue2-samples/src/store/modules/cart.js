import shop from '@/api/shop';
import { CART, PRODUCTS } from '../mutation-types';

const state = {
  items: [],
  checkoutStatus: null
};

const getters = {
  //rootState: 等同于 全局 store.state
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

const actions = {
  //将产品添加到购物车
  addProductToCart(
    { state, commit },
    {
      //这个参数属于第二个payload能够接收，等到某个组件分发Action: $store.dispatch
      product,
      number
    }
  ) {
    commit(CART.SET_CHECKOUT_STATUS, null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, {
          id: product.id,
          number
        });
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, {
          cartItem,
          number
        });
      }
      // 从库存中删除数字项目
      commit(
        `products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`,
        {
          id: product.id,
          number
        },
        {
          root: true
        }
      );
    }
  },

  //提交成败函数
  checkout({ state, commit }, products) {
    const savedCartItem = [...state.items];
    commit(CART.SET_CHECKOUT_STATUS, null);
    // 空购物车
    commit(CART.SET_CART_ITEMS, {
      items: []
    });
    shop.buyProducts(
      products,
      () => commit(CART.SET_CHECKOUT_STATUS, '成功'),
      () => {
        commit(CART.SET_CHECKOUT_STATUS, '失败');
        commit(CART.SET_CART_ITEMS, {
          items: savedCartItem
        });
      }
    );
  }
};

const mutations = {
  //通过Action对象相应addProductToCart函数里面commit 提交mutation
  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  },

  [CART.PUSH_PRODUCT_TO_CART](state, { id, number }) {
    state.items.push({
      id,
      quantity: number
    });
  },

  [CART.INCREMENT_ITEM_QUANTITY](
    state,
    {
      cartItem: { id },
      number
    }
  ) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity += number;
  },
  //通过Action对象相应chenout函数里面commit 提交mutation
  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  },
  [CART.SET_CART_ITEMS](state, { items }) {
    state.items = items;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
