import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oooops... Erro inesperado.' : payload.msg,
    {type: 'error', icon: 'times'}
)

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
    {type: 'success', icon: 'check'}
)