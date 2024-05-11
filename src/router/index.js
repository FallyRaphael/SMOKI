import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/AppHome.vue'
import Map from '../components/EventMap.vue'
import Events from '../components/EventList.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/AppProfile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
