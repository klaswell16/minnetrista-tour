import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ShowExhibits from '../views/ShowExhibits.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/exhibits',
    name: 'exhibits',
    component: ShowExhibits,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
