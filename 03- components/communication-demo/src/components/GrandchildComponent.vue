<template>
  <div class="grandchild">
    <h4>Grandchild Component</h4>
    <p>Prop received: {{ info }}</p>
    <button @click="sendNotification">Notify Parent</button>
  </div>
</template>

<script>
export default {
  name: 'GrandchildComponent',
  props: {
    info: String
  },
  methods: {
    sendNotification() {
      this.$emit('notify', 'Hello Parent! Event from Grandchild')
    }
  }
}
</script>
