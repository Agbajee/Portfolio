<template>
  <RouterView v-slot="{ Component }">
    <Transition name="page-shell" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
@import '../css/style.css';
@import '../css/responsive.css';
</style>