import Vue from 'vue'
import VueRouter from 'vue-router'

import Learn from '../components/learn/Learn'
import Question from '../components/questions/Question'
import Home from '../components/home/Home'
import Config from '../components/config/Config'

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
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router