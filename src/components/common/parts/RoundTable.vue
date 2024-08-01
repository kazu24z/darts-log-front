<template>
  <table class="mx-auto w-full sm:w-9/12 lg:w-full lg:h-full text-center text-gray-500">
    <thead class="text-gray-700">
      <tr class="border-b border-gray-200">
        <th
          v-for="header in headers"
          class="border w-1/5"
          :class="{ 'bg-gray-100': header === 'Round' }"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="">
      <tr v-for="round in testRounds">
        <th scope="row" class="w-1/5 font-medium text-gray-600 whitespace-nowrap bg-gray-100">
          {{ round }}
        </th>
        <td v-for="score in testScoreRow" class="w-1/5 border">{{ score }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const testRounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const testRounds = [1]
const testRoundScores = [18, 15, 2]
const testSum = testRoundScores.reduce(function (sum, element) {
  return sum + element
}, 0)
const testScoreRow = [...testRoundScores, testSum]
const headers = ['Round', '1st', '2nd', '3rd', 'Sum']
</script>
