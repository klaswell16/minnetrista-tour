import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TourSchedule from '../views/TourSchedule.vue'
import AgeGroup from '../views/AgeGroup.vue'
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
  {
    path: '/schedule',
    name: 'schedule',
    component: TourSchedule,
  },
  {
    path: '/age',
    name: 'age',
    component: AgeGroup,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
