import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import Home from '@/views/Home.vue'
import CountUp from '@/views/CountUp.vue'
import ZeroOhOne from '@/views/ZeroOhOne.vue'
import { useRoundAndScoreStore } from '@/stores/roundAndScores'

const initGameScore = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const gameStore = useRoundAndScoreStore()
  gameStore.clearGame()
  next()
}

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
      component: CountUp,
      beforeEnter: initGameScore
    },
    {
      path: '/zero-oh-one',
      name: 'zero-oh-one',
      component: ZeroOhOne,
      beforeEnter: initGameScore
    }
  ]
})

export default router
