<template>
  <div class="page-wrapper">
    <PageHeader />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'

import { getCurrency } from '@/services/queries'
import { onBeforeMount } from 'vue'
import { useCurrencyStore } from './stores/currency'

const currencyStore = useCurrencyStore()

onBeforeMount(async () => {
  const currencyRate = await getCurrency()
  if (currencyRate) {
    currencyStore.currencyRate = currencyRate
  }
})
</script>
