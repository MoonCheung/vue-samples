/**
 * Mock模拟API 客户端-服务端 
 */
const _products = [{
    "id": 1,
    "title": "华为 Mate 20",
    "price": 3999,
    "inventory": 2
  },
  {
    "id": 2,
    "title": "小米 9",
    "price": 2999,
    "inventory": 1
  },
  {
    "id": 3,
    "title": "OPPO R17",
    "price": 2999,
    "inventory": 5
  },
  {
    "id": 4,
    "title": "一加 5",
    "price": 3299,
    "inventory": 2
  },
  {
    "id": 5,
    "title": "一加 7",
    "price": 3699,
    "inventory": 10
  }
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 ?
        cb() :
        errorCb()
    }, 100)
  }
}