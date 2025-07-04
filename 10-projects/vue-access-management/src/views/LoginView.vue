<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin" class="form">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="input-field"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
        class="input-field"
      />
      <button type="submit" class="btn-submit">Login</button>
    </form>
    <p v-if="error" class="error-text">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const email = ref("");
const password = ref("");
const error = ref(null);

const auth = useAuthStore();
const router = useRouter();

async function handleLogin() {
  error.value = null;
  try {
    await auth.login({
      email: email.value,
      password: password.value,
    });
    router.push("/dashboard");
  } catch (err) {
    error.value = err.message || "API request error";
  }
}
</script>

<style scoped>
.login-container {
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

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-field {
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline-offset: 2px;
  outline-color: transparent;
  transition: outline-color 0.3s ease, border-color 0.3s ease;
}

.input-field:focus {
  outline-color: #007aff;
  border-color: #007aff;
}

.btn-submit {
  padding: 14px 0;
  border-radius: 18px;
  background-color: #007aff;
  color: white;
  font-weight: 600;
  font-size: 17px;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #005ecb;
}

.btn-submit:active {
  background-color: #004bb5;
}

.error-text {
  margin-top: 16px;
  color: #ff3b30;
  font-weight: 600;
}
</style>
