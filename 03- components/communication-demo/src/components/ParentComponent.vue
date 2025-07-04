<template>
  <div class="parent">
    <h2>Parent Component</h2>
    <p>Provided theme: {{ theme }}</p>
    <ChildComponent @notify="handleNotify" />
    <p>Event received from grandchild: {{ message }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  name: 'ParentComponent',
  components: { ChildComponent },
  data() {
    return {
      theme: 'dark',
      message: ''
    }
  },
  provide() {
    return {
      theme: this.theme
    }
  },
  methods: {
    handleNotify(payload) {
      this.message = payload
    }
  }
}
</script>
