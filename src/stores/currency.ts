import { availableСurrencies } from '@/const'
import type { CurrencyResponse } from '@/types/currency'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrencyStore = defineStore('currency', () => {
  const currencyActive = ref(availableСurrencies[0])
  const currencyRate = ref<CurrencyResponse>()

  const setCurrencyActive = (value: string) => {
    currencyActive.value = value
  }

  return { currencyActive, currencyRate, setCurrencyActive }
})
