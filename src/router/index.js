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
  },
  {
    path: '/eventregister',
    name: 'EventRegister',
    component: () => import('../components/EventRegister.vue')
  },
  {
    path: '/',
    name: 'Logout',
    component: Home
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/', '/map', '/events', '/profile'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/profile');
  }

  next();
});


export default router
