<template>
  <div>
    <MainNavbar />
    <main class="content">
      <slot />
    </main>
    <MainFooter />
  </div>
</template>

<script setup>
import MainNavbar from '@/components/MainNavbar.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<style scoped>
.content {
  padding: 2rem;
  min-height: 80vh;
}
</style>
