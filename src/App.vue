<template>
  <div id="app">
    <app-header />
    <app-product />
    <app-cart />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cart from './components/Cart.vue'
import Product from './components/Products.vue'

export default {
  name: 'App',
  components: {
    AppHeader: Header,
    AppCart: Cart,
    AppProduct: Product
  }
}
</script>

<style>

</style>
