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
        incrementValueDailyTarget(state){
            state.userStats.valueDailyTarget += 5
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