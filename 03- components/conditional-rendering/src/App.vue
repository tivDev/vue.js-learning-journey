<template>
  <div id="app">
    <h1>🔄 Conditional Rendering Demo</h1>
    <button @click="toggleVisibility">
      {{ visible ? 'Hide' : 'Show' }} Text
    </button>
    <ToggleText :visible="visible" />
  </div>
</template>

<script>
import ToggleText from './components/ToggleText.vue'

export default {
  components: { ToggleText },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible
    }
  }
}
</script>
