import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found!',
    component: NotFound,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/project',
    name: 'projects',
    component: ProjectPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
