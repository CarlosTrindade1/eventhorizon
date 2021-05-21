import Vue from 'vue'

export const baseApiUrl = 'http://192.168.0.101:3000'

export const userKey = '__eventhorizon_user'

export function showError(e){
    if (e && e.response && e.response.data){
        Vue.toasted.global.defaultError({msg: e.response.data})

    } else if (typeof e === 'string'){
        Vue.toasted.global.defaultError({msg: e})
    } else {
        Vue.toasted.global.defaultError()
    }
}

export function showSuccess(msg){
    if (msg && typeof msg === 'string'){
        Vue.toasted.global.defaultSuccess({msg})
    }
}