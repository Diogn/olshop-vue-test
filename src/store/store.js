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
        },
        fetchCategory: (state) => {
            let cat = [...new Set(state.all)];
            return cat;
            // console.log(cat)
            // return getters[...new Set(state.all)];
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
        increase({ commit }, product) {
            commit('INCREASE_CART', {
                id: product.id
            })
        },
        decrease({ commit }, product) {
            commit('DECREASE_CART', {
                id: product.id,
            })
        },
        remove({ commit }, product) {
            commit('REMOVE_CART', {
                id: product.id
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
        INCREASE_CART( state, { id }) {
            const record = state.cart.find(p => p.id === id)
            record.quantity++;
            // record
        },
        DECREASE_CART( state, { id }) {
            const record = state.cart.find(p => p.id === id) 
            if (record.quantity <= 1) {
                alert('Pejet Tombol Remove e cuk!')
                record.quantity = 1;
            } else {
                record.quantity--;
            }
        },
        REMOVE_CART( state, { id }) {
            const record = state.cart.find(p => p.id === id) 
            if (record.quantity <= 1) {
                state.cart.splice(record, 1)
            }
        }
        // FETCH_CATEGORY( state, { cat }) {
        //     return state.cart
        // }
    }
})
