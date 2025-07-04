<template>
  <div>
    <h3>🔢 Counter Module</h3>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">➕ Increment</button>
  </div>
</template>

<script>
import { useCounterStore } from '../stores/counterStore'

export default {
  setup() {
    const counter = useCounterStore()
    return { counter }
  }
}
</script>
