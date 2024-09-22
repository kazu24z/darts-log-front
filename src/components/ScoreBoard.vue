<template>
  <div class="game-name flex mt-2 lg:mt-4">
    <div class="mx-auto lg:mx-20">
      <h2 class="text-xl sm:text-3xl">{{ gameName }}</h2>
    </div>
  </div>
  <div class="grid mx-1 mt-4 sm:mt-6 sm:text-xl">
    <div class="score lg:col-start-2 lg:self-center">
      <Score :total-score="totalScore" />
    </div>
    <div class="round w-full mt-4 sm:mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 lg:row-span-3">
      <RoundTable />
    </div>
    <div class="option flex mx-auto mt-6 lg:mt-2 sm:mt-10 lg:col-start-2 lg:row-start-2">
      <GameOptionDisplay v-if="hasOptions" />
    </div>
    <div class="button w-full mx-auto max-w-lg my-6 sm:my-8 lg:my-2 lg:col-start-2 lg:row-start-3">
      <ScoreInputButtons />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

import RoundTable from '@/components/common/parts/RoundTable.vue'
import ScoreInputButtons from '@/components/common/parts/ScoreInputButtons.vue'
import Score from '@/components/common/parts/Score.vue'
import GameOptionDisplay from '@/components/common/parts/GameOptionDisplay.vue'
import type { GameSetting } from '@/constants/gameSettings'
import type { GameName } from '@/constants/gameNames'
import type { GameOption } from '@/constants/gameOptions'

export interface Props {
  gameName: GameName
  gameSetting: GameSetting
  gameOption: GameOption
  totalScore: number
}

const props = defineProps<Props>()

const hasOptions = Object.keys(props.gameOption).length > 0
</script>
