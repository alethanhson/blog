import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import adminRouter from './admin'
import userRouter from './user'

const routes: Array<RouteRecordRaw> = [...adminRouter, ...userRouter]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
