<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppHeader from '@/components/common/layouts/AppHeader.vue'
import AppSidebar from '@/components/common/layouts/AppSidebar.vue'
import { useIsMobile } from './utils/useIsMobile'

const isMobile = useIsMobile()
</script>

<template>
  <AppHeader />
  <main class="h-screen flex">
    <AppSidebar v-if="!isMobile" class="" />
    <RouterView class="flex-grow mx-auto" />
  </main>
</template>

<style scoped></style>
