import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// Создаем экземпляр маршрутизатора
const router = createRouter({
  // createWebHistory - копирует стандартное поведение браузера
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
