<template>
  <div id="app">
    <h1>👨‍👩‍👧 Parent Component</h1>
    <p>This is the parent.</p>

    <!-- Call child component -->
    <ChildMessage message="Hello from Parent!" />
  </div>
</template>

<script>
import ChildMessage from './components/ChildMessage.vue'

export default {
  name: 'App',
  components: {
    ChildMessage
  }
}
</script>
