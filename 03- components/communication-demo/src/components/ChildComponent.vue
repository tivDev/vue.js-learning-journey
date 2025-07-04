<template>
  <div class="child">
    <h3>Child Component</h3>
    <p>Injected theme: {{ theme }}</p>
    <GrandchildComponent :info="info" @notify="forwardNotify" />
  </div>
</template>

<script>
import GrandchildComponent from './GrandchildComponent.vue'

export default {
  name: 'ChildComponent',
  components: { GrandchildComponent },
  inject: ['theme'],
  data() {
    return {
      info: 'Hello from Child via prop'
    }
  },
  methods: {
    forwardNotify(payload) {
      this.$emit('notify', payload)
    }
  }
}
</script>
