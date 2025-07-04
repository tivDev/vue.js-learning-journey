<template>
  <div class="dashboard-container">
    <h2>Dashboard</h2>

    <div v-if="userInfo" class="user-info">
      <p>
        Welcome, <strong>{{ userInfo.user.name || userInfo.user.email }}</strong
        >!
      </p>
      <button class="btn-logout" @click="logout">Logout</button>
    </div>

    <div v-else class="loading-text">
      <p>Loading user info...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();
const router = useRouter();

const userInfo = ref(null);

onMounted(async () => {
  if (!auth.user && auth.token) {
    try {
      const response = await auth.fetchUserProfile();
      userInfo.value = response; // assign fetched data to reactive ref
    } catch (err) {
      console.error("Failed to fetch user profile", err);
      auth.logout();
      router.push("/login");
    }
  } else {
    // If user info already exists in store, use it
    userInfo.value = auth.user;
  }
});

function logout() {
  auth.logout();
  router.push("/login");
}
</script>

<style scoped>
.dashboard-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px 20px;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
}

h2 {
  margin-bottom: 24px;
  font-weight: 600;
  color: #1c1c1e;
}

.user-info p {
  font-size: 16px;
  margin-bottom: 12px;
  color: #1c1c1e;
}

.btn-logout {
  padding: 14px 0;
  width: 100%;
  border-radius: 18px;
  background-color: #ff3b30;
  color: white;
  font-weight: 600;
  font-size: 17px;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.btn-logout:hover {
  background-color: #d32f2f;
}

.btn-logout:active {
  background-color: #b12828;
}

.loading-text p {
  color: #666;
  font-style: italic;
}
</style>
