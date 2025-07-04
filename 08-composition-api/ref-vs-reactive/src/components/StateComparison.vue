<template>
  <div>
    <h2>🔍 Ref vs Reactive Demo</h2>

    <section>
      <h3>ref()</h3>
      <p>Counter: {{ counter }}</p>
      <button @click="counter++">+1</button>
    </section>

    <section>
      <h3>reactive()</h3>
      <p>User: {{ user.name }} ({{ user.age }} years old)</p>
      <button @click="user.age++">Increase Age</button>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const counter = ref(0) // primitive
    const user = reactive({
      name: 'Tiv',
      age: 20
    }) // object

    return {
      counter,
      user
    }
  }
}
</script>
