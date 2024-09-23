<template>
  <div>
    <ScoreBoard
      :game-name="getGameName()"
      :game-setting="getGameSetting()"
      :game-option="GameOptions.ZeroOne"
      :total-score="totalScore"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useRoundAndScoreStore } from '@/stores/roundAndScores'

import ScoreBoard from '@/components/ScoreBoard.vue'
import { GameSettings, type GameSetting } from '@/constants/gameSettings'
import { GameNames, type GameName } from '@/constants/gameNames'
import { GameOptions } from '@/constants/gameOptions'

const route = useRoute()
type gameType = '301' | '501' | '701'
const queryParam = ref<gameType>('501')
watchEffect(() => {
  queryParam.value = route.query.game as gameType
})

const ZeroOhOneNames = {
  '301': GameNames.ThreeOhOne,
  '501': GameNames.FiveOhOne,
  '701': GameNames.SevenOhOne
}

const ZeroOhOneSettings = {
  '301': GameSettings.ThreeOhOne,
  '501': GameSettings.FiveOhOne,
  '701': GameSettings.SevenOhOne
}

const getGameName = (): GameName => {
  return ZeroOhOneNames[queryParam.value] || ZeroOhOneNames['501']
}

const getGameSetting = (): GameSetting => {
  return ZeroOhOneSettings[queryParam.value] || ZeroOhOneSettings['501']
}

const roundAndScoreStore = useRoundAndScoreStore()
const totalScore = computed(() => {
  return getGameSetting().initialValue - roundAndScoreStore.roundsSum
})

onMounted(() => {
  roundAndScoreStore.setGameRoundNum(getGameSetting().roundNumber)
})

watchEffect(() => {
  if (totalScore.value === 0) {
    roundAndScoreStore.setGameOver(true)
  } else if (totalScore.value < 0) {
    roundAndScoreStore.bustTheRound()
    alert('Bust!! Try again!')
  }
})

watchEffect(() => {
  if (roundAndScoreStore.isGameOver) {
    // TODO: 終了条件到達でAPIにデータを送信
    alert('Game is Over !!!')
  }
})
</script>
