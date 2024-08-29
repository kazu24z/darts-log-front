<template>
  <div class="grid grid-cols-5 gap-1 sm:gap-2">
    <button
      @click="changeIsTriple"
      class="col-span-2 p-4 bg-orange-500 text-white rounded active:scale-90"
      :class="[{ 'ring-2 ring-orange-500 bg-opacity-50 ': isTriple }, disabledClass]"
      :disabled="isGameOver"
    >
      Triple
    </button>
    <button
      @click="changeIsDouble"
      class="col-span-2 p-4 bg-orange-400 text-white rounded active:scale-90"
      :class="[{ 'ring-2 ring-orange-400 bg-opacity-50 ': isDouble }, disabledClass]"
      :disabled="isGameOver"
    >
      Double
    </button>
    <button
      @click="setBullValue(bullOption)"
      class="col-span-1 p-4 bg-red-500 text-white rounded active:scale-90"
      :class="disabledClass"
    >
      Bull
    </button>
    <button
      v-for="number in numbers"
      @click="setValue(number)"
      class="col-span-1 p-4 bg-gray-200 rounded active:scale-90"
      :class="disabledClass"
      :disabled="isGameOver"
    >
      {{ number }}
    </button>
    <button
      @click="backTheTrow"
      class="mt-1 sm:mt-2 col-span-2 p-4 bg-black text-white rounded active:scale-90"
      :class="disabledClass"
      :disabled="isGameOver"
    >
      Back
    </button>
    <button
      @click="goToNextRound"
      class="mt-1 sm:mt-2 col-span-2 col-start-4 p-4 bg-green-500 text-white rounded active:scale-90"
      :class="[{ 'opacity-50 cursor-not-allowed active:scale-100': isGameOver }, disabledClass]"
      :disabled="isGameOver"
    >
      Next Round
    </button>
    <button
      @click="clearGame"
      class="col-span-2 p-4 bg-blue-500 text-white rounded active:scale-90"
      :class="disabledClass"
      :disabled="isGameOver"
    >
      Clear
    </button>
    <button
      @click="setValue(0)"
      class="col-span-2 col-start-4 p-4 bg-gray-500 text-white rounded active:scale-90"
      :class="disabledClass"
      :disabled="isGameOver"
    >
      Miss
    </button>
  </div>
</template>
<script setup lang="ts">
import { useRoundAndScoreStore } from '@/stores/roundAndScores'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

interface Props {
  bullOption: string
}

const props = withDefaults(defineProps<Props>(), {
  bullOption: 'Fat'
})

const numbers = Array.from({ length: 20 }, (_, i) => 20 - i)
const scoreStore = useRoundAndScoreStore()
const { isGameOver } = storeToRefs(scoreStore)

let isDouble = ref(false)
let isTriple = ref(false)

const resetIsDouble = (): void => {
  isDouble.value = false
}
const resetIsTriple = (): void => {
  isTriple.value = false
}

const changeIsDouble = (): void => {
  resetIsTriple()
  isDouble.value = !isDouble.value
}
const changeIsTriple = (): void => {
  resetIsDouble()
  isTriple.value = !isTriple.value
}

const multiplyValue = (value: number): number => {
  if (isDouble.value) {
    value = value * 2
  } else if (isTriple.value) {
    value = value * 3
  }
  return value
}

const setValue = (value: number) => {
  value = multiplyValue(value)
  scoreStore.setScoreValue(value)
  resetIsDouble()
  resetIsTriple()
}
const setBullValue = (bullOption: string) => {
  if (bullOption === 'Fat') {
    scoreStore.setScoreValue(50)
  } else if (bullOption === 'Separate') {
    resetIsTriple()
    const value: number = multiplyValue(25)
    scoreStore.setScoreValue(value)
  }
  resetIsDouble()
  resetIsTriple()
}

const goToNextRound = async () => {
  resetIsDouble()
  resetIsTriple()
  scoreStore.addNewRound()
}

const backTheTrow = () => {
  resetIsDouble()
  resetIsTriple()
  scoreStore.backTheThrow()
}

const clearGame = () => {
  // TODO: 確認モーダルの表示
  scoreStore.clearGame()
}

// used for styling
const disabledClass = computed(() => ({
  'opacity-50 cursor-not-allowed active:scale-100': isGameOver.value
}))
</script>
