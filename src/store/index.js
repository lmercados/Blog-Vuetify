import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: {
            titulo: '',
            estado: false
        }
    },
    mutations: {
        mostrarLoading(state, payload) {
            state.loading.titulo = payload.titulo
            state.loading.estado = payload.estado
        },
        OcultarLoading(state) {

            state.loading.estado = false
        }
    },
    actions: {},
    modules: {}
})