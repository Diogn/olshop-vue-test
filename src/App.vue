<template>
  <div id="app">
    <router-view v-if="isLoggedIn"></router-view>
    <TheLogin v-else @TheLogin::loginResult="handleLoginResult"/>
    <app-header />
    <div class="w-full flex">
      <app-product class="w-2/3" />
      <app-cart class="w-1/3"/>
    </div>
    <app-checkout v-if="getShowModal" />
  </div>
</template>

<script>
import TheLogin from './components/Login'
import Header from './components/Header.vue'
import Cart from './components/Cart.vue'
import Product from './components/Products.vue'
import Checkout from './components/Checkout'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      userIsLoggedIn: false
    }
  },
  components: {
    AppHeader: Header,
    AppCart: Cart,
    AppProduct: Product,
    AppCheckout: Checkout,
    TheLogin
  },
  computed: {
    ...mapGetters([
      "getShowModal"
    ]),
    isLoggedIn() {
      return this.userIsLoggedIn
    }
  },
  methods: {
    handleLoginResult({loginResult}) {
      this.userIsLoggedIn = loginResult
    }
  }
}
</script>

<style>

</style>
