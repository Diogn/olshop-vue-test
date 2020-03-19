<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/" class="font-semibold text-xl tracking-tight">Olshop</router-link>
    </div>
    <div class="block lg:hidden">
     
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link :to="item" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" v-for="(item, idx) in category" :key="idx">
          {{ item }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
      ...mapGetters({
          category: 'fetchCategory',
      })
  },
  mounted() {
    this.$store.dispatch('fetchCategory')
  }
}
</script>

