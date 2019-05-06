import shop from '@/api/shop'
import {
  PRODUCTS
} from '../mutation-types'

// initial state
const state = {
  all: []
}

const getters = {}

const actions = {
  getAllProducts({
    commit
  }) {
    shop.getProducts(product => {
      commit(PRODUCTS.SET_PRODUCTS, product)
    })
  }
}

const mutations = {
  [PRODUCTS.SET_PRODUCTS](state, products) {
    state.all = products
  },
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, {
    id,
    number
  }) {
    const product = state.all.find(product => product.id === id)
    product.inventory -= number // product.inventory = product.inventory - number
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}