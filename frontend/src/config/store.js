import axios from 'axios'
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

            if (user){
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
            } else {
                delete axios.defaults.headers.common['Authorization']
            }
        },
        setUserStats(state, userStats){
            state.userStats = userStats
        }
    }
})