import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TourSchedule from '../views/TourSchedule.vue'
import AgeGroup from '../views/AgeGroup.vue'
import ShowExhibits from '../views/ShowExhibits.vue'
import BallExhibit from '../views/BallExhibit.vue'
import RossExhibit from '../views/RossExhibit.vue'
import ArtShow from '../views/ArtShow.vue'
import Indigenous from '../views/Indigenous.vue'

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
  {
    path: '/ballex',
    name: 'ballex',
    component: BallExhibit,
  },
  {
    path: '/bobross',
    name: 'bobross',
    component: RossExhibit,
  },
  {
    path: '/artshow',
    name: 'artshow',
    component: ArtShow,
  },
  {
    path: '/indigenous',
    name: 'indigenous',
    component: Indigenous,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
