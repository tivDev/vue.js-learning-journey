import { createRouter, createWebHistory } from 'vue-router'
import UserList from './components/UserList.vue'
import UserDetail from './components/UserDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: UserList },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: UserDetail,
    props: true // recommended to pass route params as props
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
