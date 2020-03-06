<template>
    <div class="rounded overflow-hidden shadow-lg flex justify-center flex-wrap">
        <div v-for="item in products" :key="item.id" class="max-w-xs mx-3 my-3 border rounded-md">
            <img class="w-full" :src="item.src" alt="Sunset in the mountains">
            <div class="flex justify-center">
                <div class="px-3 py-4">
                    <div class="font-bold text-xl mb-2">{{ item.name }}</div>
                    <p class="text-gray-700 text-base">
                    {{ item.price }} $
                    </p>
                    <p>Minuman penghangat suasana.</p>

                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2">#{{ item.category }}</span>
                </div>
                
            </div>
            <button class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 mx-auto rounded-full flex justify-center align-center mb-3" style="width: 18rem;">
                <span class="inline-block rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2">BUY</span>
            </button>
            
        </div>
    </div>
</template>

<script>
import  { mapState } from 'vuex'
export default {
    mounted() {
        this.$store.dispatch('fetchProducts')
    },
    computed: {
        ...mapState({
            products: 'products'
        })
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch("addToCart", id);
        }
    }
}
</script>