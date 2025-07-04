<template>
  <nav class="navbar">
    <h1>My Website</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  background: #333;
  color: white;
  padding: 1rem;
}
</style>
