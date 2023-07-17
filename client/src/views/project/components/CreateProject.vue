<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
const props = defineProps(['dialog']);
const emit = defineEmits(['modalClosed'])

const dialog = ref(props.dialog);

const close = () => {
  dialog.value = false;
  emit('modalClosed');
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
            :counter="10"
            label="Название проекта"
            required
          ></v-text-field>

          <v-autocomplete
            label="Руководитель проекта"
          ></v-autocomplete>

          <div style="display: flex;">
            <v-btn
              color="green"
              class="me-4"
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