export default [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"), // ленивая загрузка
    children: [],
  },
];
