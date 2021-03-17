import Vue from 'vue'
import VueRouter from 'vue-router'

import Learn from '../components/learn/Learn'

Vue.use(VueRouter)

const routes = [{
    name: 'learn',
    path: '/learn',
    component: Learn
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router