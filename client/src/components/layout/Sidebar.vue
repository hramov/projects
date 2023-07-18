<script setup lang="ts">
import { pages } from "./../../config/config";
import { useAppStore } from "../../store";
const appStore = useAppStore();
</script>

<template>
  <v-navigation-drawer
    permanent
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
      <v-list-item v-for="item in appStore.menu" :prepend-icon="item.icon" :title="item.title" :to="item.url"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <div>
      <v-list-subheader class="ml-5">Администрирование</v-list-subheader>

      <v-list density="compact" nav>
        <v-list-item v-for="item in appStore.adminMenu" :prepend-icon="item.icon" :title="item.title" :to="item.url"></v-list-item>
  <!--      <v-list-item prepend-icon="mdi-cog-outline" title="Общие настройки" to="/common"></v-list-item>-->
  <!--      <v-list-item prepend-icon="mdi-account-group" title="Пользователи" to="/users"></v-list-item>-->
  <!--      <v-list-item prepend-icon="mdi-security" title="Роли" to="/roles"></v-list-item>-->
  <!--      <v-list-item prepend-icon="mdi-book-alphabet" title="Словари" to="/dictionaries"></v-list-item>-->
      </v-list>
    </div>

  </v-navigation-drawer>
</template>

<style scoped></style>