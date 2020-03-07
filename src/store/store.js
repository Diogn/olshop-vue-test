import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export const store = new Vuex.Store({
    state: {
        all : null,
        cart: [],
    },
    getters: {
        fetchProducts: state => {
            return state.all
        },
        fetchCart: state => {
            return state.cart;
        }
    },
    actions: {
        fetchProducts ({ commit }) {
            axios
                .get('http://localhost:3000/products')
                .then(r => r.data)
                .then(all =>{
                    commit('SET_PRODUCTS', all)
                })
        },
        addToCart({ commit }, product) {
           commit('ADD_TO_CART', {
               id: product.id
           })
        }
    },
    mutations: {
        // Initializing products
        SET_PRODUCTS(state, payload) {
            state.all = payload;
        },
        ADD_TO_CART( state, {id}) {
            const record = state.cart.find(p => p.id === id)
            if (!record) {
                state.cart.push({
                    id, 
                    quantity: 1
                }) 
            } else {
                record.quantity++;
            }
        } 
    }
})
