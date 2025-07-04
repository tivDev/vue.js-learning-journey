<template>
  <div id="app">
    <h1>📦 Props Demo</h1>

    <UserCard
      name="Aung Kyaw Zin"
      age="25"
      isActive
      :skills="['Vue', 'Laravel', 'Frappe']"
      :profile="{ role: 'Intern', location: 'Cambodia' }"
    />
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue'

export default {
  components: {
    UserCard
  }
}
</script>
