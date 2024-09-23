<template>
  <Teleport to="main">
    <div
      class="block w-full h-full bg-black/90 text-center absolute top-10 z-[999] sm:top-14 left-0"
    >
      <div class="w-full flex mt-20 flex-col text-gray-100">
        <label class="text-lg text-gray-300 mb-1">Practice</label>
        <ul class="text-2xl">
          <RouterLink :to="{ name: 'count-up' }" @click="onClick" class="active:bg-gray-100">
            <li>Count Up</li>
          </RouterLink>
        </ul>
      </div>
      <div class="w-full flex mt-4 flex-col text-gray-100">
        <label class="text-lg text-gray-300 mb-1">01 Game</label>
        <ul class="text-2xl">
          <router-link :to="{ name: 'zero-oh-one', query: { game: 301 } }" @click="onClick">
            <li class="mb-1">301</li>
          </router-link>
          <router-link :to="{ name: 'zero-oh-one', query: { game: 501 } }" @click="onClick">
            <li class="mb-1">501</li>
          </router-link>
          <router-link :to="{ name: 'zero-oh-one', query: { game: 701 } }" @click="onClick">
            <li class="mb-1">701</li>
          </router-link>
        </ul>
      </div>
      <div class="w-full flex mt-4 flex-col text-gray-100">
        <label class="text-lg text-gray-300 mb-1">Cricket</label>
        <ul class="text-2xl">
          <li>
            <!-- <RouterLink :to="{ name: '' }"> Standard Cricket </RouterLink> -->
            <span>Standard Cricket</span>
          </li>
        </ul>
      </div>
      <div class="w-full flex mt-4 flex-col text-gray-100">
        <label class="text-lg text-gray-300 mb-1">Other</label>
        <ul class="text-2xl">
          <li>
            <span>Logs</span>
          </li>
        </ul>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
const emit = defineEmits<{ menuClick: [] }>()

const onClick = () => {
  emit('menuClick')
}
</script>
