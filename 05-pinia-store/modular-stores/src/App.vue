<template>
  <div>
    <h2>📦 Modular Stores Demo</h2>
    <CounterPanel />
    <hr />
    <UserPanel />
  </div>
</template>

<script>
import CounterPanel from './components/CounterPanel.vue'
import UserPanel from './components/UserPanel.vue'

export default {
  components: {
    CounterPanel,
    UserPanel
  }
}
</script>
