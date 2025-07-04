<template>
  <div>
    <h2>👥 User List (Fetch API)</h2>
    <div v-if="loading">Loading users...</div>
    <div v-if="error" style="color: red;">Error: {{ error }}</div>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: false,
      error: null
    }
  },
  async created() {
    this.loading = true
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      this.users = await response.json()
    } catch (err) {
      this.error = err.message || 'Failed to load users'
    } finally {
      this.loading = false
    }
  }
}
</script>
