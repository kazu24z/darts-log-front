<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/components/common/layouts/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="container mx-auto">
    <RouterView />
  </main>
</template>

<style scoped></style>
