<template>
  <div class="counter">
    <button @click="decrement">-</button>

    <span> Current value: {{ count }} </span>

    <button @click="increment">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0); // реактивная переменнная.

/* Метод уменьшения значения */
const decrement = () => {
  count.value = count.value - 1;
};

/* Метод увеличения значения */
const increment = () => {
  count.value = count.value + 1;
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background: #dd0000;
    color: white;
    cursor: pointer;

    &:hover {
      background: #ff0000;
    }
  }
}
</style>
