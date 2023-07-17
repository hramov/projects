<script setup lang="ts">
import { useAppStore } from "../../store/app.store";
import { onMounted, ref, watch } from "vue";
import ProjectsTable from "./components/ProjectsTable.vue";
import ProjectsGrid from "./components/ProjectsGrid.vue";
import CreateProject from "./components/CreateProject.vue";
import { useProjectStore } from "../../store/project.store";

const appStore = useAppStore();
appStore.pageTitle = 'Проекты';

const viewMode = ref('table');

const views = {
  'table': ProjectsTable,
  'grid': ProjectsGrid,
}

const dialog = ref(false);

const projectStore = useProjectStore();

onMounted(() => {
  projectStore.getProjects();
});
</script>

<template>
  <div style="width: 100%">
    <div class="projects-header">
      <v-btn icon="mdi-plus" size="default" color="green" @click="dialog = true"></v-btn>

      <v-autocomplete
        class="ml-5 mr-5"
        style="height: 10px"
        label="Поиск..."
        :items="[]"
        variant="outlined"
        density="comfortable"
        prepend-inner-icon="mdi-magnify"
      >
        <template v-slot:no-data>
          <div class="px-4">Ничего не найдено</div>
        </template>

      </v-autocomplete>

      <v-btn class="mr-5" style="height: 50px" variant="flat">
        <v-icon icon="mdi-filter-variant"></v-icon>
      </v-btn>

      <v-btn-toggle
        v-model="viewMode"
        variant="outlined"
        divided
        style="height: 50px"
      >
        <v-btn value="table" :disabled="viewMode === 'table'">
          <v-icon icon="mdi-table"></v-icon>
        </v-btn>

        <v-btn value="grid" :disabled="viewMode === 'grid' || true">
          <v-icon icon="mdi-card"></v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>

    <div class="projects">
      <component :is="views[viewMode]" :projects="projectStore.projects"></component>
    </div>

    <CreateProject v-if="dialog" :dialog="dialog" @modalClosed="dialog = false"/>
  </div>
</template>

<style scoped>
.projects-header {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
</style>