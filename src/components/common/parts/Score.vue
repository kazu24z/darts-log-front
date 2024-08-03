<template>
  <div v-if="type === 'Standard'">
    <div class="flex">
      <span
        class="mx-auto w-24 sm:w-32 leading-tight text-[40px] sm:text-[60px] text-center border-2 border-gray-800"
        >{{ score }}</span
      >
    </div>
  </div>
  <div v-else class="flex">
    <table class="mx-auto">
      <tr v-for="target in cricketTargetNumbers" class="border">
        <td></td>
        <td>{{ target }}</td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

import type { ViewType } from '@/constants/gameViewSettings'

export interface Props {
  type: ViewType
  score: number
}

const props = withDefaults(defineProps<Props>(), {
  type: 'Standard',
  score: 0
})

const cricketTargetNumbers = [20, 19, 18, 17, 16, 15, 'Bull']
</script>
