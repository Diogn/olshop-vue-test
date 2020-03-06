<template>
    <div class="bg-gray-300 border-3">
        <div class="w-full h-screen flex justify-center">
            <div class="text-black font-4xl"> 
                hahaha
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