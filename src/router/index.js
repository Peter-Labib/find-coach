import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coach'
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: null
    },
    {
      path: '/coach/:id',
      name: 'coach',
      component: null
    },
    {
      path: '/register',
      name: 'register',
      component: null
    },
    {
      path: '/requests',
      name: 'requests',
      component: null
    },
    {
      path: '/:notFound(.*)',
      component: null
    }
  ]
})

export default router
