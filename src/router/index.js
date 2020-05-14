import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/publicacion/:id_publicacion',
        name: 'Publicacion',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Publicacion.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router