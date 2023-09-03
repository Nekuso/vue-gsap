import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Routes } from '@/constants/route-names'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.HOME,
      component: HomeView
    },
    {
      path: '/second',
      name: Routes.SECOND,
      component: () => import('../views/SecondPage.vue')
    },
    {
      path: '/third',
      name: Routes.THIRD,
      component: () => import('../views/ThirdPage.vue')
    }
  ]
})

export default router
