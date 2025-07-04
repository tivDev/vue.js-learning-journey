<template>
  <div class="scoped-slot-card">
    <slot name="user" :user="user">
      <!-- fallback if slot not used -->
      <p>Default User: {{ user.name }}</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CardWithScopedSlot',
  data() {
    return {
      user: { name: 'Tiv', role: 'Student' }
    }
  }
}
</script>
