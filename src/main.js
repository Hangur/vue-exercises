import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    premium: false,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  }
}).$mount('#app')

