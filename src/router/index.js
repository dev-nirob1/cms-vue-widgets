import MainLayout from '@/zems/Front/Layout/MainLayout.vue'
import AccordionPage from '@/zems/Front/Pages/AccordionPage.vue'
import ButtonsPage from '@/zems/Front/Pages/ButtonsPage.vue'
import CardsPage from '@/zems/Front/Pages/CardsPage.vue'
import ComponentsPage from '@/zems/Front/Pages/ComponentsPage.vue'
import FooterPage from '@/zems/Front/Pages/FooterPage.vue'
import FormPage from '@/zems/Front/Pages/FormPage.vue'
import GalleryPage from '@/zems/Front/Pages/GalleryPage.vue'
import ModalPage from '@/zems/Front/Pages/ModalPage.vue'
import NavbarPage from '@/zems/Front/Pages/NavbarPage.vue'
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
          path: '/accordion',
          name: 'accordion',
          component: AccordionPage,
        },
        {
          path: '/button',
          name: 'button',
          component: ButtonsPage,
        },
        {
          path: '/cards',
          name: 'cards',
          component: CardsPage,
        },
        {
          path: '/form',
          name: 'form',
          component: FormPage,
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: GalleryPage,
        },
        {
          path: '/modal',
          name: 'modal',
          component: ModalPage,
        },
        {
          path: '/navbar',
          name: 'navbar',
          component: NavbarPage,
        },
        {
          path: '/footer',
          name: 'footer',
          component: FooterPage,
        },
      ],
    },
  ],
})

export default router
