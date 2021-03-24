// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        userStats: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    }
})