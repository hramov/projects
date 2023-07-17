<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
import { useProjectStore } from "../../../store/project.store";
const props = defineProps(['dialog']);
const emit = defineEmits(['modalClosed', 'newProject'])

const projectStore = useProjectStore();

const dialog = ref(props.dialog);

const close = () => {
  dialog.value = false;
  emit('modalClosed');
}

const project = ref({});

const managers = [
  {
    title: 'Храмов Сергей Иванович',
    value: 1,
  }
];

const types = [{
  title: 'Проекты ГВЦ',
  value: 1
}]

const saveProject = () => {
  projectStore.saveProject({
    title: project.value.title,
    manager_id: project.value.manager_id,
    type_id: project.value.type_id
  });
}

</script>

<template>
  <v-dialog
    v-model="dialog"
    style="width: 60%"
    persistent
  >
    <v-card>
      <v-card-title>Создание проекта</v-card-title>
      <v-card-text>
        <form>
          <v-text-field
            v-model="project.title"
            :counter="10"
            label="Название проекта"
            required
          ></v-text-field>

          <v-autocomplete
            v-model="project.manager_id"
            label="Руководитель проекта"
            :items="managers"
            item-props
          ></v-autocomplete>

          <v-select
            :items="types"
            v-model="project.type_id"
            density="compact"
            label="Тип проекта"
          ></v-select>

          <div style="display: flex;">
            <v-btn
              color="green"
              class="me-4"
              @click="saveProject"
            >
              Сохранить
            </v-btn>
            <v-btn color="grey" @click="close">Закрыть</v-btn>
          </div>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>