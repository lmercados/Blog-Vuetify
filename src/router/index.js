import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/Home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')

    },
    {
        path: '/Publicacion/:id_publicacion',
        name: 'Publicacion',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Publicacion" */ '../views/Publicacion.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router