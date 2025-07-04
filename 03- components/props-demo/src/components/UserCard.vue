<template>
  <div class="user-card">
    <h2>{{ name }}</h2>
    <p>Age: {{ age }}</p>
    <p>Status: <strong>{{ isActive ? 'Active' : 'Inactive' }}</strong></p>
    <p>Skills: {{ skills.join(', ') }}</p>
    <p>Role: {{ profile.role }} | Location: {{ profile.location }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    name: String,
    age: Number,
    isActive: Boolean,
    skills: Array,
    profile: Object
  }
}
</script>
