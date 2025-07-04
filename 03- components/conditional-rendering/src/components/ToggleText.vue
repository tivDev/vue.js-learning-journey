<template>
  <div>
    <!-- Using v-if and v-else -->
    <p v-if="visible">This text is visible with v-if</p>
    <p v-else>This text shows when the first is hidden (v-else)</p>

    <!-- Using v-show -->
    <p v-show="visible">This text is toggled with v-show</p>
  </div>
</template>

<script>
export default {
  name: 'ToggleText',
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  }
}
</script>
