<script setup>
import { ref } from "vue";
import { openLink } from "../../router.ts";
import { Api } from "../../api/api.ts";

const username = ref('');
const password = ref('');

const login = async () => {
  const api = new Api();
  const result = await api.post('login', {
    username: username.value,
    password: password.value
  });
}

</script>
<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <v-text-field variant="outlined" v-model="username" label="Логин" required></v-text-field>

        <v-text-field variant="outlined" v-model="password" label="Пароль" required></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Восстановить пароль</a>

        <v-btn type="submit" color="primary" block class="mt-2" @click="openLink('/')">Войти</v-btn>

      </v-form>
      <div class="mt-2">
        <p class="text-body-2">У вас нет учетной записи? <router-link to="register">Зарегистрироваться</router-link></p>
      </div>
    </v-sheet>
  </div>
</template>