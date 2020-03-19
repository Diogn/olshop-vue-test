<template>
    <div class="max-w-full min-h-full rounded overflow-hidden shadow-lg fixed right-0">
        <div class="px-6 py-2" >
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <div v-for="item in cart" :key="item.id" >
                <p v-show="cart.length !== 0" class="px-4 font-extrabold">{{ item.name }}</p>
                <div class="flex">
                    <p v-show="cart.length >= 1" class="px-4">{{ item.price }}</p><span class="font-extrabold pr-3">x</span><p>{{ item.quantity }}</p><span class="mx-2">=></span><p class="font-black text-size-2xl mx-3">{{ item.price * item.quantity }}</p>
                    <div>
                        <button @click="decrease(item)" class="bg-red-500 mx-2 px-2">-</button>
                        <button @click="increase(item)" class="bg-green-500 mx-2 px-2">+</button>
                        <button @click="remove(item)" class="bg-yellow-500 mx-2 px-2">remove</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-6 py-2 flex w-full">
            <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">#Total</span>
            <div class="text-black" v-show="totalPrice >= 1">{{ totalPrice }}</div>
            <div class="font-sans text-black font-size-2xl font-black" v-show="totalPrice === 0">Empty Cart! (ndang belonjo)</div>
        </div>
        <div class="w-full py-3 flex justify-center">
            <button @click="showOrHiddenModal()" class="w-2/3 rounded bg-green-200 text-black font-bolder">CHECKOUT</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
           cart: 'fetchCart'
        }),
        totalPrice() {
            return this.cart.reduce((itemPrice, p) => {
                return itemPrice + p.price * p.quantity
            }, 0)
        }
    },
    methods: {
        ...mapActions([
            "decrease",
            "increase",
            "remove"
        ]),
        ...mapActions([
            "showOrHiddenModal"
        ])
    }
}
</script>