<template>
  <div>
    <h3>👤 User Module</h3>
    <p>Name: {{ user.name }}</p>
    <p>Role: {{ user.role }}</p>
    <input v-model="newName" placeholder="Enter new name" />
    <button @click="user.updateName(newName)">Update Name</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '../stores/userStore'

export default {
  setup() {
    const user = useUserStore()
    const newName = ref('')
    return { user, newName }
  }
}
</script>
