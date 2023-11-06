import { createRouter, createWebHashHistory } from 'vue-router'
import Menu from '../views/Menu'

const routes = [
  {
    path: '/',
    name: 'menu',
    component: Menu
  },
  {
    path: '/:chapter',
    name: 'list-items',
    component: () => import('../views/ListItems')
  },
  {
    path: '/new-menu',
    name: 'new-menu',
    component: () => import('../views/NewMenu')
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: () => import('../views/Instructions')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('../views/Support')
  },
  {
    path: '/audio',
    name: 'audio',
    component: () => import('../views/Audio')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video')
  },
  {
    path: '/hits',
    name: 'hits',
    component: () => import('../views/Hits')
  },
]

const pathname = process.env.NODE_ENV === 'production'
  ? window.location.pathname
  : process.env.BASE_URL

const router = createRouter({
  history: createWebHashHistory(pathname),
  routes
})

export default router
