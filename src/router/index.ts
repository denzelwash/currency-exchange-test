import { createRouter, createWebHistory } from 'vue-router'
import ConvertView from '@/views/ConvertView.vue'
import IndexView from '@/views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/convert',
      name: 'convert',
      component: ConvertView,
    },
  ],
})

export default router
