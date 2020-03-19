<template>
    <div class="bg-green-100 flex h-screen items-center justify-center w-full">
        <div class="border rounded m-2 p-3">
            <h1 class="text-lg font-bold flex justify-center pb-2">Login</h1>
            <div>
                <input type="text" name="username" placeholder="Username">
                <br>
                <input type="password" name="password" placeholder="Password">
                <br><br>
                <div class="flex justify-center rounded bg-green-200">
                    <button  @click.prevent="login({ name, password })">Login</button>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { mapActions } from "vuex";
    export default {
    data: () => ({
        error: '',
        name: 'admin',
        password: '123',
    }),
    methods: {
        ...mapActions({
                login: 'login',
                user: 'fetchUser'
            })
        }
    }
</script>

<style scoped>

</style>