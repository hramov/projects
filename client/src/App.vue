<script setup lang="ts">
import Sidebar from "./components/layout/Sidebar.vue";
import Navbar from "./components/layout/Navbar.vue";
import { useAppStore } from "./store";
import Footer from "./components/layout/Footer.vue";
import Snackbar from "./components/layout/Snackbar.vue";

const appStore = useAppStore();
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Sidebar v-if="!$route.path.includes('login') && !$route.path.includes('register')" />
    <Navbar :appTitle="appStore.appTitle" :pageTitle="appStore.pageTitle" v-if="!$route.path.includes('login') && !$route.path.includes('register')" />
    <div style="width: 100%">
      <v-main class="d-flex justify-center" style="min-height: 300px">
        <router-view v-slot="{ Component }">
          <keep-alive :include="['Login', 'register']">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </v-main>
<!--      <Footer v-if="!$route.path.includes('login') && !$route.path.includes('register')" />-->
    </div>

    <Snackbar />
  </v-layout>
</template>

<script scoped>

</script>
