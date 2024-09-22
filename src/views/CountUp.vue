<template>
  <div>
    <ScoreBoard
      :game-name="GameNames.CountUP"
      :game-setting="GameSettings.CountUp"
      :game-option="GameOptions.CountUp"
      :total-score="totalScore"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoundAndScoreStore } from '@/stores/roundAndScores'
import { computed, watchEffect } from 'vue'

import ScoreBoard from '@/components/ScoreBoard.vue'
import { GameSettings } from '@/constants/gameSettings'
import { GameNames } from '@/constants/gameNames'
import { GameOptions } from '@/constants/gameOptions'

const roundAndScoreStore = useRoundAndScoreStore()
const totalScore = computed(() => {
  return GameSettings.CountUp.initialValue + roundAndScoreStore.roundsSum
})

roundAndScoreStore.setGameRoundNum(GameSettings.CountUp.roundNumber)
watchEffect(() => {
  if (roundAndScoreStore.isGameOver) {
    // TODO: 終了条件到達でAPIにデータを送信
    alert('Game is Over !!!')
  }
})
</script>
