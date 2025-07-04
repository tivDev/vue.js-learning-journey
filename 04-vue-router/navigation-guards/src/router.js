import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import DashboardPage from './components/DashboardPage.vue'

// Simulated login flag
const isLoggedIn = false

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (isLoggedIn) {
        next()
      } else {
        alert('Access denied! Please login first.')
        next('/login')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global guard example (optional alternative to beforeEnter)
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn) {
    alert('Global Guard: You must log in!')
    next('/login')
  } else {
    next()
  }
})

export default router
