<template>
  <!-- :is — указать отображаемый компонент. Значение: или имя компонента; или переменная, содержащей имя компонента; либо ссылкой на объект компонента. -->
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup>
import { shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import AppLayoutDefault from "./AppLayoutDefault.vue";

const route = useRoute();
const layout = shallowRef(null);

// Наблюдаем за изменением маршрута
watch(
  () => route.meta,
  async (meta) => {
    // meta - это то, что мы прописали в routes в параметре meta
    try {
      if (meta.layout) {
        // из представленных в папке layouts пробуем найти тот, который пропписан в текущем маршруте
        const component = await import(`./${meta.layout}.vue`);
        layout.value = component?.default || AppLayoutDefault;
      } else {
        layout.value = AppLayoutDefault;
      }
    } catch (e) {
      console.error(
        "Динамический шаблон не найден. Установлен шаблон по-умолчанию.",
        e
      );
      layout.value = AppLayoutDefault;
    }
  }
);
</script>

<style lang="scss" scoped>
.app_layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
}
</style>
