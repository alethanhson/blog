<script setup lang="ts">
import { RouterView } from 'vue-router'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite();
})
</script>

<template>
  <main>
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </main>
</template>


