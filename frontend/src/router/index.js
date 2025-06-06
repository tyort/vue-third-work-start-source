import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { middlewarePipeline } from "@/middlewares";

// Создаем экземпляр маршрутизатора
// createWebHistory - копирует стандартное поведение браузера
// import.meta.env.BASE_URL - это конструкция, используемая в некоторых современных JavaScript-фреймворках, таких как Vite, для доступа к переменным окружения во время сборки приложений.
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

middlewarePipeline(router);

export default router;
