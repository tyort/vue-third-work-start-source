<template>
  <ul class="task__tags">
    <li v-for="(tag, index) in tagsArray" :key="index">
      <span class="task__tag">
        {{ tag }}
      </span>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { getTagsArrayFromString } from "../../../common/helpers";

const props = defineProps({
  tags: {
    type: String,
    required: true,
  },
});

// Реактивные вычисляемые данные с помощью функции computed. Здесь (в script) чтобы увидеть значение нужно обращаться к .value; Но в template обращаемся без value.
const tagsArray = computed(() => {
  // Например props.tags === '#Для вёрстки#Бэкенд#Срочно#Фронтенд'
  return getTagsArrayFromString(props.tags);
  // Вернет значение['Для вёрстки', 'Бэкенд', 'Срочно', 'Фронтенд']
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/app.scss";

.task__tags {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  @include clear-list;

  margin-top: 5px;

  li {
    margin-top: 4px;
    margin-right: 4px;
  }
}

.task__tag {
  padding: 4px 8px;

  color: $black-900;
  border-radius: 10px;
  background-color: $blue-gray-100;

  @include r-s10-h12;
}
</style>
