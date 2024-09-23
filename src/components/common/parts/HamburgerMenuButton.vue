<template>
  <button
    @click="onClick"
    type="button"
    class="inline-flex items-center justify-center p-2 text-sm text-gray-100 rounded-lg"
    :class="{ 'bg-gray-500': isVisibleMenu }"
  >
    <svg
      class="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
</template>
<script setup lang="ts">
export interface Props {
  isVisibleMenu: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isVisibleMenu: false
})

const emit = defineEmits<{ menuClick: [] }>()

const onClick = () => {
  emit('menuClick')
}
</script>
