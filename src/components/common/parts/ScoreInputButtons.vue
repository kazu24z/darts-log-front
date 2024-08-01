<template>
  <div class="grid grid-cols-5 gap-1 sm:gap-2">
    <button class="col-span-2 p-4 bg-orange-500 text-white rounded">Triple</button>
    <button class="col-span-2 p-4 bg-orange-300 text-white rounded">Double</button>
    <button class="col-span-1 p-4 bg-red-500 text-white rounded">Bull</button>
    <button v-for="number in numbers" class="col-span-1 p-4 bg-gray-200 rounded">
      {{ number }}
    </button>
    <button class="my-1 sm:my-2 col-span-2 p-4 bg-black text-white rounded">Back</button>
    <button class="my-1 sm:my-2 col-span-1 p-4 bg-gray-500 text-white rounded">Miss</button>
    <button class="my-1 sm:my-2 col-span-2 p-4 bg-green-500 text-white rounded">Next Round</button>
    <button class="col-span-2 p-4 bg-indigo-700 text-white rounded">Retire</button>
    <button class="col-span-2 col-start-4 p-4 bg-blue-500 text-white rounded">Quit</button>
  </div>
</template>
<script setup lang="ts">
const numbers = Array.from({ length: 20 }, (_, i) => 20 - i)
</script>
