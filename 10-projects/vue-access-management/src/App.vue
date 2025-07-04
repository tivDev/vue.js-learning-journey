<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/login" class="nav-button">Login</router-link>
      <router-link to="/register" class="nav-button">Register</router-link>
      <router-link v-if="isAuthenticated" to="/dashboard" class="nav-button">Dashboard</router-link>
      <button v-if="isAuthenticated" class="nav-button logout" @click="logout">Logout</button>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from './store/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const isAuthenticated = computed(() => auth.isAuthenticated)

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<style>
/* Nav container */
.nav-bar {
  display: flex;
  gap: 12px;
  padding: 10px 16px;
  background-color: #f9f9f9;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

/* Buttons / links */
.nav-button {
  padding: 8px 18px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 15px;
  color: #007aff;
  background-color: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  text-align: center;
}

/* Hover and active states */
.nav-button:hover {
  background-color: rgba(0, 122, 255, 0.1);
}

.nav-button:active {
  background-color: rgba(0, 122, 255, 0.2);
}

/* Logout button style */
.nav-button.logout {
  color: #ff3b30;
}

.nav-button.logout:hover {
  background-color: rgba(255, 59, 48, 0.1);
}

.nav-button.logout:active {
  background-color: rgba(255, 59, 48, 0.2);
}
</style>
