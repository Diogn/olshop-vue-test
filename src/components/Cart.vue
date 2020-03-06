<template>
    <div class="bg-gray-300">
        <div class="w-full h-screen flex justify-center">
            <div class="pt-10" v-for="item in cart" :key="item.id"> 
                Trolly : {{ item }}
            </div>
            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState([
            "cart"
        ]),
    }
}
</script>