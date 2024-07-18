import { createRouter, createWebHistory } from 'vue-router'
import Dummy from '../views/Dummy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dummy',
      name: 'dummy',
      component: Dummy
    }
  ]
})

export default router
