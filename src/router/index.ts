import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CountUp from '@/views/CountUp.vue'
import ZeroOhOne from '@/views/ZeroOhOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/count-up',
      name: 'count-up',
      component: CountUp
    },
    {
      path: '/zero-oh-one',
      name: 'zero-oh-one',
      component: ZeroOhOne
    }
  ]
})

export default router
