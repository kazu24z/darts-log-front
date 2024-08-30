<template>
  <table class="mx-auto w-full sm:w-9/12 lg:w-full text-center text-gray-500">
    <thead class="text-gray-700">
      <tr class="border-b border-gray-200">
        <th
          v-for="header in headers"
          class="border w-1/5"
          :class="{ 'bg-gray-50': header === 'Round' }"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="(item, roundIndex) in rounds" :key="roundIndex">
        <th
          v-if="!isMobile || isCurrentRound(roundIndex)"
          scope="row"
          class="border w-1/5 lg:h-14 font-medium text-gray-600 whitespace-nowrap"
          :class="isCurrentRound(roundIndex) ? 'bg-gray-100' : 'bg-gray-50'"
        >
          {{ item.round }}
        </th>
        <td
          v-if="!isMobile || isCurrentRound(roundIndex)"
          v-for="(score, throwIndex) in item.scores"
          class="w-1/5 lg:h-14 border"
          :class="{
            'bg-gray-100': isCurrentRound(roundIndex),
            'opacity-25': isCurrentRound(roundIndex) && throwIndex === currentThrow - 1
          }"
        >
          {{ score }}
        </td>
        <td
          v-if="!isMobile || isCurrentRound(roundIndex)"
          class="w-1/5 lg:h-14 border"
          :class="{ 'bg-gray-100': isCurrentRound(roundIndex) }"
        >
          {{ item.sum }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useRoundAndScoreStore } from '@/stores/roundAndScores'
import { useIsMobile } from '@/utils/useIsMobile'

const headers = ['Round', '1st', '2nd', '3rd', 'Sum']

const isMobile = useIsMobile()

const roundAndScoreStore = useRoundAndScoreStore()
const { rounds, currentThrow, currentRound } = storeToRefs(roundAndScoreStore)

const isCurrentRound = (index: number): boolean => {
  return index === currentRound.value - 1
}
</script>
