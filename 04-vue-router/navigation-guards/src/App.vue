<template>
  <div id="app">
    <h2>🔐 Navigation Guard Demo</h2>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default { name: 'App' }
</script>
