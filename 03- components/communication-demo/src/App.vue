<template>
  <div id="app">
    <h1>🔄 Vue Communication Demo: provide/inject, props, emit</h1>
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue'

export default {
  name: 'App',
  components: {
    ParentComponent
  }
}
</script>
