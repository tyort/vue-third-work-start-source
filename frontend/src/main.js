import { createApp } from "vue"; // для создания нового экземпляра приложения.
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App); // корневой компонент в качестве агрумента.

app.use(createPinia());
app.use(router);

// необходимо создать связку между DOM-элементом и Vue-приложением;
// cкрипт main.js должен быть прикреплён к файлу index.html, находящемуся в корне проекта.
app.mount("#app");
