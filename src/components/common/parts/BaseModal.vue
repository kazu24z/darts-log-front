<template>
  <div
    class="bg-gray-500/50 size-full fixed top-0 start-0 z-[100] overflow-x-hidden overflow-y-auto"
    role="dialog"
  >
    <div
      class="duration-500 ease-out transition-all absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-xl w-full pointer-events-auto"
    >
      <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
        <div class="py-3 px-4 border-b">
          <div class="flex justify-center">
            <h3 class="font-bold text-gray-800">{{ title }}</h3>
          </div>
        </div>
        <div class="p-4 overflow-y-auto">
          <p class="mt-1 text-gray-800">
            {{ message }}
          </p>
        </div>
        <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
          <button
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            @click="noAction"
          >
            {{ noButton }}
          </button>
          <button
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-white focus:outline-none"
            :class="setButtonColor"
            @click="yesAction"
          >
            {{ yesButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps } from 'vue'

export interface Props {
  title?: string
  message?: string
  noButton?: string
  yesButton?: string
  noButtonColor?: string
  yesButtonColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Sample Title',
  message: 'Sample Message.',
  noButton: 'No',
  yesButton: 'Yes',
  noButtonColor: 'gray',
  yesButtonColor: 'green'
})

// TODO: ボタンを共通コンポーネント化する？
const setButtonColor = computed(() => {
  const colorList = ['red', 'green', 'blue', 'gray']
  return colorList.includes(props.yesButtonColor)
    ? `bg-${props.yesButtonColor}-600 hover:bg-${props.yesButtonColor}-700`
    : `bg-green-600 hover:bg-green-700`
})

const emit = defineEmits(['noAction', 'yesAction'])

const noAction = () => {
  emit('noAction')
}

const yesAction = () => {
  emit('yesAction')
}
</script>
