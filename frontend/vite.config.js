import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins — это набор плагинов для корректной работы сборщика. Поскольку Vite предназначен не только для работы с Vue.js, эта опция необходима. В нашем случае мы передали в неё экземпляр официального плагина Vite для работы с Vue.js. При необходимости набор может быть расширен и дополнен — всё зависит от проекта.
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 8080,
    proxy: {
      "/api": {
        target: "http://backend:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
