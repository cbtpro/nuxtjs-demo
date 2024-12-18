<template>
  <div>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
     {{ message }}
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const message = ref('')
const test = async () => {
  const response = await fetch('/config.json')
  const json = await response.json()
  message.value = json
}
onMounted(() => {
  test()
})
</script>
