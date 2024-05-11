import { createRouter, createWebHistory } from 'vue-router'

import Home from '../App.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /* {
    path: '/about',
    name: 'About',
    component: () => import('')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('')
  } */
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
