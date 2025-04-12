<template>
  <section v-if="currencyStore.currencyRate">
    <form class="form">
      <div class="form__field">
        <AppInput
          class="convert-input"
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
      <img
        src="/svg/exchange.svg"
        class="separator"
        width="24"
        height="24"
        @click="currencyStore.swapPlaces()"
      />
      <div class="form__field">
        <AppInput
          class="convert-input"
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
  </section>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import AppSelect from '@/components/AppSelect.vue'
import { useCurrencyStore } from '@/stores/currency'

const currencyStore = useCurrencyStore()
</script>

<style scoped lang="scss">
.form {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (max-width: $xs) {
    display: flex;
  }
  &__field {
    display: flex;
    align-items: stretch;
    padding: 8px;
    border-radius: 8px;
    box-shadow:
      0 1px 3px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(0, 0, 0, 0.24);
    @media (max-width: $xs) {
      width: 100%;
    }
  }
}

.convert-input {
  width: 160px;
  flex-grow: 1;
}

.separator {
  transform: rotate(90deg);
  cursor: pointer;
}
</style>
