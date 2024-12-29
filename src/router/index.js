import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user-list',
      name: 'user-list',
      component: () => import('@/views/UserList.vue')
    },
    {
      path: '/user-form/:id?',
      name: 'user-form',
      component: () => import('@/views/UserForm.vue')
    },
    {
      path: '/',
      redirect:'/user-list'
    }
  ],
})

export default router