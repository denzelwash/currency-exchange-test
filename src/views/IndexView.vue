<template>
  <section v-if="currencyStore.currencyRate">
    <ul class="list">
      <li v-for="currency in list" :key="currency">
        {{ `1 ${currency} = ${calc(currency)} ${currencyStore.currencyActive}` }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { availableСurrencies } from '@/const'
import { useCurrencyStore } from '@/stores/currency'
import { formatNumber } from '@/utils/formatNumber'
import { computed } from 'vue'

const currencyStore = useCurrencyStore()

const list = computed(() => {
  return availableСurrencies.filter((c) => c !== currencyStore.currencyActive)
})

const calc = (currency: string) => {
  return formatNumber(currencyStore.currencyRate![`${currency}-${currencyStore.currencyActive}`])
}
</script>

<style scoped lang="scss">
.list {
  display: grid;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
  li {
    text-transform: uppercase;
  }
}
</style>
