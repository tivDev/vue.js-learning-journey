<template>
  <div class="child">
    <h2>👶 Child Component</h2>
    <p>Message from parent: <strong>{{ message }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'ChildMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
