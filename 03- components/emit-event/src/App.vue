<template>
  <div id="app">
    <h1>🔔 Custom Events Demo</h1>
    <CounterButton @incremented="handleIncrement" />
    <p>Parent received count: {{ totalClicks }}</p>
  </div>
</template>

<script>
import CounterButton from './components/CounterButton.vue'

export default {
  components: { CounterButton },
  data() {
    return {
      totalClicks: 0
    }
  },
  methods: {
    handleIncrement(count) {
      this.totalClicks = count
    }
  }
}
</script>
