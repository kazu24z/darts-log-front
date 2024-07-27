<template>
  <div class="game-name flex mt-2 lg:mt-4">
    <div class="mx-auto lg:mx-20">
      <h2 class="text-xl sm:text-3xl">Count Up</h2>
    </div>
  </div>
  <div class="grid mx-1 mt-4 sm:mt-6 sm:text-[20px]">
    <div class="score lg:col-start-2 lg:self-center">
      <div class="flex">
        <span
          class="mx-auto w-24 sm:w-32 leading-tight text-[40px] sm:text-[60px] text-center border-2 border-gray-800"
          >105</span
        >
      </div>
    </div>
    <div
      class="round w-full mt-4 sm:mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1 lg:row-span-3 overflow-x-auto"
    >
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
    </div>
    <div class="option flex mx-auto mt-6 lg:mt-2 sm:mt-10 lg:col-start-2 lg:row-start-2">
      <div class="mr-6">
        <span class="text-blue-500">IN Option:</span> <span class="font-bold">Open In</span>
      </div>
      <div class="mr-6">
        <span class="text-red-500">Out Option:</span> <span class="font-bold">Master Out</span>
      </div>
    </div>
    <div class="button w-full mx-auto max-w-lg my-6 sm:my-8 lg:my-2 lg:col-start-2 lg:row-start-3">
      <!-- ボタン -->
      <div class="grid grid-cols-5 gap-1 sm:gap-2">
        <button class="col-span-2 p-4 bg-orange-500 text-white rounded">Triple</button>
        <button class="col-span-2 p-4 bg-orange-300 text-white rounded">Double</button>
        <button class="col-span-1 p-4 bg-red-500 text-white rounded">Bull</button>
        <button v-for="number in numbers" class="col-span-1 p-4 bg-gray-200 rounded">
          {{ number }}
        </button>
        <button class="my-1 sm:my-2 col-span-2 p-4 bg-black text-white rounded">Back</button>
        <button class="my-1 sm:my-2 col-span-1 p-4 bg-gray-500 text-white rounded">Miss</button>
        <button class="my-1 sm:my-2 col-span-2 p-4 bg-green-500 text-white rounded">
          Next Round
        </button>
        <button class="col-span-2 p-4 bg-indigo-700 text-white rounded">Retire</button>
        <button class="col-span-2 col-start-4 p-4 bg-blue-500 text-white rounded">Quit</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// TODO: サンプル用
// const testRounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testRounds = [1]
const testRoundScores = [18, 15, 2]
const testSum = testRoundScores.reduce(function (sum, element) {
  return sum + element
}, 0)
const testScoreRow = [...testRoundScores, testSum]

const headers = ['Round', '1st', '2nd', '3rd', 'Sum']
const numbers = Array.from({ length: 20 }, (_, i) => 20 - i)
</script>
