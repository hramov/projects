<script setup lang="ts">
import { router } from './../../../router'
import { ref } from "vue";

const projects = ref([]);
</script>

<template>
  <div class="pl-5 pr-5 pb-5">
  <v-card
    class="mx-auto"
  >
    <v-card-text>
  <v-table fixed-header v-if="projects.length">
    <thead>
    <tr>
      <th class="text-left">
        №
      </th>
      <th class="text-left">
        Название
      </th>
      <th class="text-left">
        Статус
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in projects"
      :key="item.name"
      @click="router.push('/project/1')"
      style="cursor: pointer"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.calories }}</td>
      <td>{{ item.calories }}</td>
    </tr>
    </tbody>
  </v-table>
        <v-banner
          v-else
          lines="one"
          icon="$warning"
          color="warning"
        >
          <v-banner-text>
            Еще не создано ни одного проекта
          </v-banner-text>
        </v-banner>
    </v-card-text>
  </v-card>
  </div>
</template>

<style scoped></style>