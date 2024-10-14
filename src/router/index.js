import { createRouter, createWebHistory } from 'vue-router'

import Projet from '@/components/Projet.vue'
import Services from '@/components/Services.vue'
import Educations from '@/views/Education.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component : Home
    },
    {
      path : '/projets',
      name : 'projet',
      component : Projet
    },
    {
      path : '/services',
      name : 'services',
      component : Services
    },
    {
      path : '/education',
      name : 'education',
      component : Educations
    },
  ]
})

export default router
