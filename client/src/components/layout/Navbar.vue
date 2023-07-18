<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(['pageTitle']);
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>{{ props.pageTitle }}</v-app-bar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
</style>