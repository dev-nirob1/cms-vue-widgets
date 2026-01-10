import MainLayout from '@/zems/Front/Layout/MainLayout.vue'
import ComponentsPage from '@/zems/Front/Pages/ComponentsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/components',
        component: ComponentsPage,
      },
    ],
  },
  ],
})

export default router
