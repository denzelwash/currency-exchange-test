import { availableСurrencies } from '@/const'
import type { CurrencyResponse } from '@/types/currency'
import { formatNumber } from '@/utils/formatNumber'
import { defineStore } from 'pinia'
import { computed, nextTick, reactive, ref, watch } from 'vue'

export const useCurrencyStore = defineStore('currency', () => {
  const currencyActive = ref(availableСurrencies[0])
  const currencyRate = ref<CurrencyResponse>()

  const setCurrencyActive = (value: string) => {
    currencyActive.value = value
  }

  const firstConvertBlock = reactive({
    input: '',
    select: availableСurrencies[0],
  })

  const secondConvertBlock = reactive({
    input: '',
    select: availableСurrencies[1],
  })

  const firstConvertCurrencyList = computed(() =>
    availableСurrencies.filter(
      (c) => c !== firstConvertBlock.select && c !== secondConvertBlock.select,
    ),
  )

  const secondConvertCurrencyList = computed(() =>
    availableСurrencies.filter(
      (c) => c !== firstConvertBlock.select && c !== secondConvertBlock.select,
    ),
  )

  const isUpdating = ref(false)

  watch(firstConvertBlock, async () => {
    if (isUpdating.value) return
    isUpdating.value = true
    const rate = currencyRate.value![`${firstConvertBlock.select}-${secondConvertBlock.select}`]
    secondConvertBlock.input = String(formatNumber(Number(firstConvertBlock.input) * rate))
    await nextTick()
    isUpdating.value = false
  })

  watch(secondConvertBlock, async () => {
    if (isUpdating.value) return
    isUpdating.value = true
    const rate = currencyRate.value![`${secondConvertBlock.select}-${firstConvertBlock.select}`]
    firstConvertBlock.input = String(formatNumber(Number(secondConvertBlock.input) * rate))
    await nextTick()
    isUpdating.value = false
  })

  const swapPlaces = () => {
    const firstSelect = firstConvertBlock.select
    const secondSelect = secondConvertBlock.select
    firstConvertBlock.select = secondSelect
    secondConvertBlock.select = firstSelect
  }

  return {
    currencyActive,
    currencyRate,
    firstConvertBlock,
    secondConvertBlock,
    setCurrencyActive,
    firstConvertCurrencyList,
    secondConvertCurrencyList,
    swapPlaces,
  }
})
