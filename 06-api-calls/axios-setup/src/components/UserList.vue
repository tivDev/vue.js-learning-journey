<template>
  <div>
    <h2>👥 User List</h2>
    <div v-if="loading">Loading users...</div>
    <div v-if="error" style="color:red;">Error: {{ error }}</div>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from '../axios'

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
      const response = await apiClient.get('/users')
      this.users = response.data
    } catch (err) {
      this.error = err.message || 'Failed to load users'
    } finally {
      this.loading = false
    }
  }
}
</script>
