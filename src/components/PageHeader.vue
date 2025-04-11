<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__grid">
        <PageNav />
        <AppSelect
          :options="options"
          :modelValue="currencyStore.currencyActive"
          @update:modelValue="(value) => currencyStore.setCurrencyActive(value)"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import PageNav from '@/components/PageNav.vue'
import AppSelect from '@/components/AppSelect.vue'
import { useCurrencyStore } from '@/stores/currency'
import { computed } from 'vue'
import { availableСurrencies } from '@/const'

const currencyStore = useCurrencyStore()

const options = computed(() => {
  return availableСurrencies.filter((c) => c !== currencyStore.currencyActive)
})
</script>

<style lang="scss" scoped>
.page-header {
  padding: 20px 0;
  background-color: #ececec;
  margin-bottom: 40px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  &__grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
}
</style>
