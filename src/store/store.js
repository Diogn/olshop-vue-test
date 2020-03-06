import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    state: {
        products: null,
        cart: [],
        // toast: {

        // }
    },
    getters: {
        fetchProducts: state => {
            console.log(state.products)
            return state.products
        },
        fetchCart: state => {
            return state.cart
        }
    },
    actions: {
        fetchProducts ({ commit }) {
            axios
                .get('http://localhost:3000/products')
                .then(r => r.data)
                .then(products =>{
                    commit('SET_PRODUCTS', products)
                })
        }
        
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload;
        },
        addToCart ({ state }, productId) {
            let product = state.products.find((product) => product.id === productId)
            // let cartProductIndex = state.cart.findIndex((product) => product.id === productId);
            console.log(product)
            // console.log(cartProductIndex)
        } 
        // }
    }
})
