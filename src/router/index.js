import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: () => import('../views/coaches/CoachList.vue')
    },
    {
      path: '/coaches/:id',
      name: 'coach',
      component: () => import('../views/coaches/CoachDetails.vue'),
      children: [
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/requests/ContactCoach.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/coaches/CoachRegister.vue')
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('../views/requests/RequestsRecieved.vue')
    },
    {
      path: '/:notFound(.*)',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
