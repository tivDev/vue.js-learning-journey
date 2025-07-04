<template>
  <button @click="increment">Clicked {{ count }} times</button>
</template>

<script>
export default {
  name: 'CounterButton',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
      this.$emit('incremented', this.count)  // Emit event with current count
    }
  }
}
</script>
