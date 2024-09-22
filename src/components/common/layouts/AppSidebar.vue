<template>
  <!-- サイドバー -->
  <div
    v-if="isOpen"
    class="flex-col hidden lg:flex flex-shrink-0 w-60 bg-gray-600 text-xl font-bold text-gray-100"
  >
    <div class="mt-10 ml-2">
      <span>Practice</span>
      <ul class="ml-4 text-lg">
        <li>
          <RouterLink :to="{ name: 'count-up' }"> - Count Up </RouterLink>
        </li>
      </ul>
    </div>
    <div class="mt-4 ml-2">
      <span>01 Game</span>
      <ul class="ml-4 text-lg">
        <li>
          <router-link :to="{ name: 'zero-oh-one', query: { game: 301 } }">- 301</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'zero-oh-one', query: { game: 501 } }">- 501</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'zero-oh-one', query: { game: 701 } }">- 701</router-link>
        </li>
      </ul>
    </div>
    <div class="mt-4 ml-2">
      <span>Cricket</span>
      <ul class="ml-4 text-lg">
        <li>- Standard Cricket</li>
      </ul>
    </div>
    <div class="mt-4 ml-2">
      <span>Logs</span>
    </div>
    <div class="mt-6 flex justify-end"></div>
  </div>
  <div v-else class="mr-10"></div>
  <!-- サイドバー表示ボタン -->
  <div v-if="isOpen" class="absolute top-1/2 left-[212px] hidden lg:flex">
    <button
      @click="closeSidebar"
      class="p-2 rounded-l-2xl bg-gray-800 hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  </div>
  <div v-else class="absolute top-1/2 left-0 hidden lg:flex">
    <button
      @click="openSidebar"
      class="rounded-r-2xl p-2 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="5" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const openSidebar = () => {
  isOpen.value = true
}
const closeSidebar = () => {
  isOpen.value = false
}
</script>
