<script setup lang="ts">
import { useAppStore } from "../../store";

const appStore = useAppStore();
</script>

<template>
  <v-snackbar
    v-for="(s,i) in appStore.snackbars" :key="i"
    :style="{'margin-bottom': appStore.calcMargin(i)}"
    v-model="appStore.snackbarShown"
  >
    {{ s.text }}

    <template v-slot:actions>
      <v-btn
        :color="s.color"
        variant="text"
        @click="appStore.hide(i)"
      >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>

</template>

<style scoped></style>