<template>
    <div>
        <app-mask v-show="showModal" @click="closeModal()" />
        <div class="modal">
            <h2 class="flex justify-center font-bolder">PAYMENT</h2>
            <div class="w-full" v-for="item in cart" :key="item.id">
                <h3>{{ item.name }}</h3>
                <div class="flex flex-no-wrap w-full">
                    <div class="w-1/2">
                        <span>@ {{ item.price }} </span>
                        <span>x</span>
                        <span class="ml-1">{{ item.quantity }}</span>
                    </div>
                    <div class="w-1/2">
                        <p>{{ item.price * item.quantity }}</p>
                    </div>
                </div>
            </div>

            <hr class="my-2">

            <div class="flex justify-center w-full mt-3 font-bolder rounded bg-yellow-200">
                {{ totalPrice }}
            </div>
            <div class="w-full ">
                <button @click="destroyCart(), closeModal()" class="w-full my-3 rounded text-white flex justify-center bg-green-400 ">BUY</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Mask from './Mask';

export default {
    components: {
        AppMask: Mask
    },
    computed: {
        ...mapGetters ({
            showModal: "getShowModal",
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
            "showOrHiddenModal"
        ]),
        closeModal() {
            this.showOrHiddenModal()
        },
        destroyCart() {
            this.$store.dispatch('destroyCart')
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    width: 100%;
    max-width: 500px;
    height: auto;
    box-sizing: border-box;
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 0 10px rgba(144,144,144,.2);
    border: 0;
    border-radius: 5px;
    line-height: 1.5em;
    opacity: 1;
    transition: all .5s;
    z-index: 1;
}

.fade-enter-active, .fade-leave-active {
    transition: all .7s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>