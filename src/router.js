import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import HierarchyView from './views/HierarchyView.vue'
import BranchesView from './views/BranchesView.vue'
import MediaView from './views/MediaView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/hierarchy', name: 'hierarchy', component: HierarchyView },
  { path: '/branches', name: 'branches', component: BranchesView },
  { path: '/media', name: 'media', component: MediaView },
  { path: '/tree', redirect: '/hierarchy' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
