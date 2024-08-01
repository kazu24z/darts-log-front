<template>
  <ScoreBoard
    :game-name="GameNames.CountUP"
    :game-view="GameViewSettings.CountUp"
    :game-option="GameOptions.CountUp"
  />
</template>

<script setup lang="ts">
import ScoreBoard from '@/components/ScoreBoard.vue'
import { GameViewSettings } from '@/constants/gameViewSettings'
import { GameNames } from '@/constants/gameNames'
import { GameOptions } from '@/constants/gameOptions'
</script>
