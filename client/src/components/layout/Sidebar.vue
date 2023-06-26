<script setup lang="ts">
import { pages } from "./../../config/config";

</script>

<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="item in pages" prepend-icon="mdi-folder" :title="item.title" :to="item.url"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped></style>