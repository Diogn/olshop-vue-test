<template>
  <div id="app">
    <app-header />
    <div class="w-full flex">
      <app-product class="w-2/3" />
      <app-cart class="w-1/3"/>
    </div>
    
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
