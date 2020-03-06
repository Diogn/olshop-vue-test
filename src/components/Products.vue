<template>
    <div class="min-w-full rounded overflow-hidden shadow-lg flex flex-wrap">
        <div v-for="item in products" :key="item.id" class="max-w-sm mx-3 my-3 border">
            <img class="w-full" :src="item.src" alt="Sunset in the mountains">
            <div class="flex justify-center">
                <div class="px-6 py-4">
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