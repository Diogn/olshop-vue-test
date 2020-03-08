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
               id: product.id,
               name: product.name,
               price: product.price
           })
        },
        decIncrease({ commit}, product) {
            commit(['MIN_ITEM', 'PLUS_ITEM'], {
                id: product.id,
                qty: product.quantity
            })
        }
    },
    mutations: {
        // Initializing products
        SET_PRODUCTS(state, payload) {
            state.all = payload;
        },
        ADD_TO_CART( state, {id, name, price}) {
            const record = state.cart.find(p => p.id === id)
            if (!record) {
                state.cart.push({
                    name,
                    id,
                    price,
                    quantity: 1
                }) 
            } else {
                record.quantity++;
            }
        },
        // MIN_ITEM( state, {id, qty}) {
        //     const item = state.cart.find(p => p.id === id)
        //     if (!item) {
        //         // state.cart.
        //     }
        // }
    }
})
