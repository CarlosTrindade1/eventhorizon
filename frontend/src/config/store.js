import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        userStats: {}
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
            state.userStats = {...userStats}
        },
        incrementStats(state, value){
            state.userStats.valueDailyTarget += value
            state.userStats.weekExp += value
            state.userStats.monthExp += value
            state.userStats.yearExp += value
            state.userStats.totalExp += value
        }
    },
    plugins: [
        createPersistedState({
            storage: {
                getItem: key => Cookies.get(key),
                setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
                removeItem: (key) => Cookies.remove(key),
          },
        }),
    ]
})