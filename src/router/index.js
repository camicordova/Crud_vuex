import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Usuarios',
    component: function () {
      return import('../views/Usuarios.vue')
    }
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: function () {
      return import('../views/Formulario.vue')
    }
  },
  {
    path: '/formulario/:id',
    name: 'FormularioId',
    component: function () {
      return import('../views/Formulario.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
