import AddJob from '@/pages/AddJob.vue'
import EditJob from '@/pages/EditJob.vue'
import Home from '@/pages/Home.vue'
import Job from '@/pages/Job.vue'
import Jobs from '@/pages/Jobs.vue'
import NotFound from '@/pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: Job,
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJob,
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJob,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
