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
        cat: [],
        showModal: false,
    },
    getters: {
        fetchProducts: state => state.all,
        fetchCart: state => state.cart,
        fetchCategory: state => state.cat,
        getShowModal: state => state.showModal
    },
    actions: {
        async fetchProducts ({ commit }) {
            const res = await axios.get('http://localhost:3000/products')
                        commit('SET_PRODUCTS', res)
        },
        fetchCategory({commit}) {
            axios
                .get('http://localhost:3000/products')
                .then(res => res.data) 
                .then(function(res){
                    let element = [];
                    for (let index = 0; index < res.length; index++) {
                        element.push(res[index].category);
                    }
                    element = [...new Set(element)];
                    commit('FILTERED_CAT', {
                        cat: element
                    })
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
        },
        showOrHiddenModal({ commit }){
            commit('SHOW_MODAL');
        },   
        destroyCart({ commit }) {
            commit('DESTROY_CART');
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
        },
        FILTERED_CAT( state, { cat }) {
            return state.cat = cat
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        DESTROY_CART( state ) {
            state.cart = [];
        }
    }
})
