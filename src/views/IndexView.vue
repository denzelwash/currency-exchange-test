<template>
  <div>Главная</div>
</template>

<script setup lang="ts">
import { getCurrency } from '@/services/queries'
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  const currency = await getCurrency()
  console.log(currency)
})
</script>
