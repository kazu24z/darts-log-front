<template>
  <header class="flex w-full h-10 sm:h-14 bg-gray-600">
    <!-- <img src="@/assets/logo.png" class="h-24" /> -->
    <p class="self-center ml-3 sm:ml-6 font-bold text-gray-100 text-xl sm:text-3xl">Darts Log</p>
    <div v-if="props.isLogin" class="ml-auto self-center mr-2 sm:mr-10">
      <nav class="flex items-center gap-x-4 text-gray-100 sm:text-lg">
        <RouterLink to="/settings">
          <font-awesome-icon icon="cog" />
        </RouterLink>
        <RouterLink to="/logout">
          <font-awesome-icon icon="sign-out-alt" />
        </RouterLink>
        <HamburgerMenuButton
          v-show="isMobile"
          @menu-click="toggleMenuVisibility"
          :is-visible-menu="isVisibleMenu"
        />
        <HamburgerMenuContent v-if="isMobile && isVisibleMenu" @menu-click="toggleMenuVisibility" />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import HamburgerMenuButton from '@/components/common/parts/HamburgerMenuButton.vue'
import HamburgerMenuContent from '@/components/common/parts/HamburgerMenuContent.vue'

import { computed, ref, withDefaults } from 'vue'

import { useIsMobile } from '@/utils/useIsMobile'

const isMobile = useIsMobile()
const isVisibleMenu = ref(false)

const toggleMenuVisibility = () => {
  isVisibleMenu.value = !isVisibleMenu.value
}

export interface Props {
  isLogin: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isLogin: true
})
</script>

<style scoped></style>
