import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia  } from "pinia";
import { router } from "./router";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
	components,
	directives,
});

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router)
app.use(vuetify).mount('#app');
