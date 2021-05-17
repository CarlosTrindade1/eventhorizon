import Vue from 'vue'
import VueRouter from 'vue-router'

import Learn from '../components/learn/Learn'
import Question from '../components/questions/Question'
import Home from '../components/home/Home'
import Config from '../components/config/Config'
import Ranking from '../components/ranking/Ranking'
import Adm from '../components/admin/Adm'
import Dashboard from '../components/admin/Dashboard'
import AdminPages from '../components/admin/AdminPages'

import {userKey} from '../global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'learn',
    path: '/learn',
    component: Learn
}, {
    name: 'questions',
    path: '/chapter/:id/questions',
    component: Question
}, {
    name: 'config',
    path: '/config',
    component: Config
}, {
    name: 'ranking',
    path: '/ranking',
    component: Ranking
}, {
    // Rotas de administração
    name: 'adm',
    path: '/adm',
    component: Adm
}, {
    name: 'adm-dashboard',
    path: '/adm/dashboard',
    component: Dashboard,
    meta: {requiresAdmin: true}
}, {
    name: 'adm-admin-pages',
    path: '/adm/admin-pages',
    component: AdminPages,
    meta: {requiresAdmin: true}
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)
    const user = JSON.parse(json)

    if (to.matched.some(record => record.meta.requiresAdmin)){
        user.admin ? next() : next({path: '/learn'})
    } else if (to.name === 'home'){
        if (user){
            next({path: '/learn'})
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router