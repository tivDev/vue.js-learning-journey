<!-- src/components/CounterDemo.vue -->
<template>
  <div>
    <h2>Reusable Counter Composable Demo</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment +</button>
    <button @click="decrement">Decrement -</button>
  </div>
</template>

<script>
import { useCounter } from '../composables/useCounter.js'

export default {
  setup() {
    const { count, increment, decrement } = useCounter()
    return { count, increment, decrement }
  }
}
</script>
