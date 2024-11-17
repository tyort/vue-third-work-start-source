<template>
  <!-- dragstart - это событие, а onDrag является методом
	 Компонент предотвращает события dragover и dragenter -->
  <div
    :draggable="true"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script setup>
import { DATA_TRANSFER_PAYLOAD, MOVE } from "../constants";

const props = defineProps({
  transferData: {
    type: Object,
    required: true,
  },
});

// Метод onDrag добавляет данные о переносимом объекте в DataTransfer
function onDrag({ dataTransfer }) {
  dataTransfer.effectAllowed = MOVE;
  dataTransfer.dropEffect = MOVE;
  dataTransfer.setData(
    DATA_TRANSFER_PAYLOAD,
    JSON.stringify(props.transferData)
  );
}
</script>
