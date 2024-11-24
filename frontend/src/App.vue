<template>
  <!-- В дочернем компоненте AppLayout есть <slot />. Вместо этого тега мы вставляем <home-view /> -->
  <app-layout>
    <home-view />
  </app-layout>
</template>

<script setup>
import { AppLayout } from "@/layouts";
import { HomeView } from "@/views";
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
