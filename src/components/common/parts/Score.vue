<template>
  <!-- TODO: StandardとCricketで別ファイルにする -->
  <div class="flex">
    <span
      class="mx-auto w-24 sm:w-36 leading-tight text-[40px] sm:text-[60px] text-center border-2 border-gray-800"
      >{{ totalScore }}</span
    >
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

export interface Props {
  totalScore: number
}

const props = withDefaults(defineProps<Props>(), {
  totalScore: 0
})
</script>
