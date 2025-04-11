<template>
  <form class="form">
    <div class="form__field">
      <AppInput :model-value="firstInput" />
      <AppSelect
        :options="firstOptions"
        :modelValue="firstSelect"
        @update:modelValue="(value) => (firstSelect = value)"
      />
    </div>
    <span class="separator">=</span>
    <div class="form__field">
      <AppInput :model-value="secondInput" />
      <AppSelect
        :options="secondOptions"
        :modelValue="secondSelect"
        @update:modelValue="(value) => (secondSelect = value)"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import AppSelect from '@/components/AppSelect.vue'
import { useCurrencyStore } from '@/stores/currency'
import { computed, ref } from 'vue'
import { availableСurrencies } from '@/const'

const currencyStore = useCurrencyStore()

const firstInput = ref('')
const firstSelect = ref(availableСurrencies[0])
const firstOptions = computed(() => {
  return availableСurrencies.filter((c) => c !== firstSelect.value && c !== secondSelect.value)
})

const secondInput = ref('')
const secondSelect = ref(availableСurrencies[1])
const secondOptions = computed(() => {
  return availableСurrencies.filter((c) => c !== firstSelect.value && c !== secondSelect.value)
})
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
