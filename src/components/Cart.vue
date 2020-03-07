<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-2">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <div >
                <p v-show="cart.length !== 0">{{ cart }}</p>
            </div>
        </div>
        <div class="px-6 py-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
           cart: 'fetchCart'
        }),
    }
}
</script>