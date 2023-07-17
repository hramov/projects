<script setup lang="ts">
import { router } from './../../../router'
import { defineProps, ref } from "vue";
const props = defineProps(['projects'])
</script>

<template>
  <div class="pl-5 pr-5 pb-5">
  <v-card
    class="mx-auto"
  >
    <v-card-text>
  <v-table fixed-header v-if="projects.data?.length">
    <thead>
    <tr>
      <th class="text-left">
        №
      </th>
      <th class="text-left">
        Название
      </th>
      <th class="text-left">
        Тип
      </th>
      <th class="text-left">
        Статус
      </th>
      <th class="text-left">
        Руководитель
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(item, idx) in projects?.data"
      :key="item.name"
      @click="router.push('/project/1')"
      style="cursor: pointer"
    >
      <td>{{ idx + 1 }}</td>
      <td>{{ item.title }}</td>
      <td>{{ item.type.title }}</td>
      <td>{{ item.status.title }}</td>
      <td>{{ item.manager?.fio }}</td>
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