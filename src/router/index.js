import { createRouter, createWebHistory } from 'vue-router'
import Lancamentos from '../views/lancamento/Lancamentos.vue'
import Usuarios from '@/views/usuario/Usuarios'
import Login from '@/views/login/Login'

const routes = [
  {
    path: '/',
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
