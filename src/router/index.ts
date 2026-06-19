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
    props: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    props: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  },
  {
    path: '/project',
    name: 'projects',
    component: ProjectPage,
    props: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
