<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Olshop</span>
    </div>
    <div class="block lg:hidden">
     
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          {{ fetchCategory }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
      ...mapState({
          products: 'all',
      }),
    
    
      fetchCategory() {
        return this.$store.getters.fetchCategory
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
