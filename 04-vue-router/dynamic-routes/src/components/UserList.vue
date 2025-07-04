<template>
  <div>
    <h1>👥 User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/user/${user.id}`">{{ user.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [
        { id: 1, name: 'Ti' },
        { id: 2, name: 'Sok' },
        { id: 3, name: 'Nita' }
      ]
    }
  }
}
</script>
