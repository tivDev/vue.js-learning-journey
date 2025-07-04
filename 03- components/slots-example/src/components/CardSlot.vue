<template>
  <div class="card">
    <header class="card-header">
      <slot name="header">Default Header</slot>
    </header>

    <section class="card-body">
      <slot>Default Body Content</slot>
    </section>

    <footer class="card-footer">
      <slot name="footer">Default Footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CardSlot'
}
</script>

<style scoped>
.card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 12px; }
.card-header, .card-footer { font-weight: bold; }
.card-body { margin: 12px 0; }
</style>
