import UserLayout from '@/layouts/UserLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

const userRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/',
    component: UserLayout,
    children: [
      // Define nested routes or named views here
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/user/home/HomeComponent.vue')
      }
    ]
  }
]

export default userRouter
