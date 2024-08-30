<template>
  <header class="flex w-full h-8 sm:h-14 bg-gray-600">
    <!-- <img src="@/assets/logo.png" class="h-24" /> -->
    <p class="self-center ml-3 sm:ml-6 font-bold text-gray-100 text-xl sm:text-3xl">Darts Log</p>
    <div v-if="props.isLogin" class="ml-auto self-center mr-2 sm:mr-10">
      <nav class="flex gap-x-4 text-gray-100 sm:text-lg">
        <router-link to="/settings">Settings</router-link>
        <router-link to="/logout">Logout</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'

export interface Props {
  isLogin: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isLogin: true
})
</script>

<style scoped></style>
