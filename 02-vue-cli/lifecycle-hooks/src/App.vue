<template>
  <div style="padding: 20px">
    <h1>🔁 Vue 3 Lifecycle Hooks – All in One</h1>
    <p>Counter: {{ count }}</p>
    <button @click="count++">Increase Count</button>

    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>

    <button v-if="showChild" @click="showChild = false">Unmount Child</button>
    <button v-else @click="showChild = true">Mount Child</button>

    <div v-if="showChild">
      <p>👶 This simulates a child block.</p>
    </div>
  </div>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from 'vue'

export default {
  setup() {
    const count = ref(0)
    const showChild = ref(true)
    const errorMessage = ref('')

    // 🟡 onBeforeMount
    onBeforeMount(() => {
      console.log('[onBeforeMount] Component is about to mount.')
    })

    // 🟢 onMounted
    onMounted(() => {
      console.log('[onMounted] Component has been mounted.')
    })

    // 🔁 onBeforeUpdate
    onBeforeUpdate(() => {
      console.log('[onBeforeUpdate] Before DOM update. Count =', count.value)
    })

    // 🔁 onUpdated
    onUpdated(() => {
      console.log('[onUpdated] After DOM update. Count =', count.value)
    })

    // 🔴 onBeforeUnmount
    onBeforeUnmount(() => {
      console.log('[onBeforeUnmount] Component is about to be unmounted.')
    })

    // 🔴 onUnmounted
    onUnmounted(() => {
      console.log('[onUnmounted] Component has been unmounted.')
    })

    // ⚠️ onErrorCaptured
    onErrorCaptured((err, instance, info) => {
      errorMessage.value = `Captured error: ${err.message}`
      console.error('[onErrorCaptured]', err, info)
      return false // allow the error to propagate
    })

    return { count, showChild, errorMessage }
  }
}
</script>
