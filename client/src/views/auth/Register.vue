<script setup>
import { ref } from "vue";

const login = () => {}
const username = ref('');
const password = ref('');

</script>
<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <v-text-field variant="outlined" v-model="username" label="Логин"></v-text-field>

        <v-text-field variant="outlined" v-model="password" label="Пароль"></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Восстановить пароль</a>

        <v-btn type="submit" color="primary" block class="mt-2">Войти</v-btn>

      </v-form>
      <div class="mt-2">
        <p class="text-body-2">У вас нет учетной записи? <router-link to="register">Зарегистрироваться</router-link></p>
      </div>
    </v-sheet>
  </div>
</template>