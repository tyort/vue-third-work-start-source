import { createApp } from "vue"; // для создания нового экземпляра приложения.
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { clickOutside } from "./common/directives";
import { getToken, removeToken } from "@/services/token-manager";
import { useAuthStore } from "@/stores";

const app = createApp(App); // корневой компонент в качестве агрумента.

app.use(createPinia());
app.use(router);
app.directive("click-outside", clickOutside);

// необходимо создать связку между DOM-элементом и Vue-приложением;
// cкрипт main.js должен быть прикреплён к файлу index.html, находящемуся в корне проекта.
app.mount("#app");

// Проверяем, если пользователь уже вошёл в систему
const token = getToken();
if (token) {
  try {
    const authStore = useAuthStore();
    await authStore.getMe();
    await router.push("/");
  } catch (e) {
    removeToken();
    console.log(e);
  }
}
