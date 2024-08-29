import { ref, onMounted, onUnmounted, computed } from 'vue'
export function useIsMobile() {
  const windowWidth = ref(window.innerWidth)

  const updateWidth = () => {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return computed(() => windowWidth.value < 1024)
}
