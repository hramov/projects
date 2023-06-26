<script setup lang="ts">

</script>

<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ text }}

    <template v-slot:actions>
      <v-btn
        color="blue"
        variant="text"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>