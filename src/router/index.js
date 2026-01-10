import MainLayout from '@/zems/Front/Layout/MainLayout.vue'
import CardsPage from '@/zems/Front/Pages/CardsPage.vue'
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
          name: 'components',
          component: ComponentsPage,
        },
        {
          path: '/cards',
          name: 'cards',
          component: CardsPage,
        },
      ],
    },
  ],
})

export default router
