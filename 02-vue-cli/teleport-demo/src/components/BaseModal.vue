<template>
  <teleport to="body">
    <div class="backdrop" @click.self="close">
      <div class="modal">
        <h2>{{ title }}</h2>
        <slot />
        <button @click="close">Close</button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['title'],
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  background: white;
  margin: 10% auto;
  padding: 1rem;
  width: 300px;
  border-radius: 8px;
}
</style>
