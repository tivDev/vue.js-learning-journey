<template>
  <div>
    <h2>📦 Pinia Counter</h2>
    <p>Count: {{ counter.count }}</p>
    <p>Double: {{ counter.doubleCount }}</p>
    <button @click="counter.increment">➕</button>
    <button @click="counter.decrement">➖</button>
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
