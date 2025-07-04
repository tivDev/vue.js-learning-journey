<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister" class="form">
      <input
        v-model="name"
        type="text"
        placeholder="Full Name"
        required
        class="input-field"
      />
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
        minlength="8"
        class="input-field"
      />
      <input
        v-model="passwordConfirm"
        type="password"
        placeholder="Confirm Password"
        required
        minlength="8"
        class="input-field"
      />
      <button type="submit" class="btn-submit">Register</button>
    </form>
    <p v-if="error" class="error-text">{{ error }}</p>
    <p v-if="success" class="success-text">
      Registration successful! You can now login.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const error = ref(null);
const success = ref(false);

const router = useRouter();

async function handleRegister() {
  error.value = null;
  success.value = false;

  if (password.value !== passwordConfirm.value) {
    error.value = "Passwords don't match.";
    return;
  }

  try {
    await axios.post("/api/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirm.value,
    });

    success.value = true;

    // Optional: auto-redirect to login after success
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  } catch (err) {
    if (err.response?.data?.message) {
      error.value = err.response.data.message;
    } else {
      error.value = "Registration failed. Please try again.";
    }
  }
}
</script>

<style scoped>
.register-container {
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

.success-text {
  margin-top: 16px;
  color: #34c759;
  font-weight: 600;
}
</style>
