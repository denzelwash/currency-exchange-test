<template>
  <form class="form">
    <div class="form__field">
      <AppInput
        :model-value="currencyStore.firstConvertBlock.input"
        type="number"
        @update:model-value="(value) => (currencyStore.firstConvertBlock.input = value)"
      />
      <AppSelect
        :options="currencyStore.firstConvertCurrencyList"
        :modelValue="currencyStore.firstConvertBlock.select"
        @update:modelValue="(value) => (currencyStore.firstConvertBlock.select = value)"
      />
    </div>
    <span class="separator">=</span>
    <div class="form__field">
      <AppInput
        :model-value="currencyStore.secondConvertBlock.input"
        type="number"
        @update:model-value="(value) => (currencyStore.secondConvertBlock.input = value)"
      />
      <AppSelect
        :options="currencyStore.secondConvertCurrencyList"
        :modelValue="currencyStore.secondConvertBlock.select"
        @update:modelValue="(value) => (currencyStore.secondConvertBlock.select = value)"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import AppSelect from '@/components/AppSelect.vue'
import { useCurrencyStore } from '@/stores/currency'

const currencyStore = useCurrencyStore()
</script>

<style scoped lang="scss">
.form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  &__field {
    display: flex;
    align-items: stretch;
    padding: 8px;
    border-radius: 8px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
  }
}

.convert-input {
  width: 140px;
}

.separator {
  font-size: 24px;
}
</style>
