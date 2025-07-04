<template>
  <div>
    <h1>👤 User Detail</h1>
    <p>User ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: ['id']
}
</script>
