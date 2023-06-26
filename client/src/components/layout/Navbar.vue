<script setup lang="ts">
import { defineProps } from "vue";
import { openLink} from "../../router";

const props = defineProps(['appTitle', 'pageTitle']);
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>{{ props.pageTitle }}</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn @click="openLink('/login')">
      Вход
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.search-field {
  width: 200px;
}
</style>