<template>
  <v-app>
    <v-main>
      <v-container>
        <v-btn color="primary" @click="count++">Clicked {{ count }} times</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
}
</script>
