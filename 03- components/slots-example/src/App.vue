<template>
  <div id="app">
    <h1>🎴 Vue Slot Examples</h1>

    <!-- Default + Named slots -->
    <CardSlot>
      <template #header>
        <h2>📌 Custom Header</h2>
      </template>

      <p>This is default content passed to the card.</p>

      <template #footer>
        <small>© 2025 Tiv's Demo</small>
      </template>
    </CardSlot>

    <!-- Scoped slot example -->
    <CardWithScopedSlot />
  </div>
</template>

<script>
import CardSlot from './components/CardSlot.vue'
import CardWithScopedSlot from './components/CardWithScopedSlot.vue'

export default {
  components: {
    CardSlot,
    CardWithScopedSlot
  }
}
</script>
