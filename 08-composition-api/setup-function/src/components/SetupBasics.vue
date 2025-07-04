<template>
  <div>
    <h2>⚙️ Setup Function Basics</h2>
    <p>Counter: {{ count }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(1)

    function increment() {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
</script>
