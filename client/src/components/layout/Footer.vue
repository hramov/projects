<script setup lang="ts">
const links = [
  'Домашняя страница',
  'О проекте',
  'Разработчики',
  'Блог',
];
</script>

<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>ГВЦ ОАО "РЖД"</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped></style>