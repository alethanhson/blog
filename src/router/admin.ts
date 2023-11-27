import AdminLayout from '@/layouts/AdminLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

const adminRouter: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    redirect: '/admin',
    component: AdminLayout,
    children: [
      //
    ]
  }
]

export default adminRouter
