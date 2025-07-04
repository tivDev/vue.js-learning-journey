<template>
  <div>
    <h2>🧠 Computed & Watch Demo</h2>

    <label>First Name:</label>
    <input v-model="firstName" />

    <label>Last Name:</label>
    <input v-model="lastName" />

    <p>👤 Full Name (computed): <strong>{{ fullName }}</strong></p>

    <p v-if="message" style="color: green">{{ message }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const message = ref('')

    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`.trim()
    })

    watch(fullName, (newVal, oldVal) => {
      message.value = `Full name changed: "${oldVal}" → "${newVal}"`
      setTimeout(() => (message.value = ''), 3000)
    })

    return { firstName, lastName, fullName, message }
  }
}
</script>
