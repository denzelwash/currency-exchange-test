<template>
  <vSelect
    :modelValue="props.modelValue"
    @update:modelValue="(value) => emit('update:modelValue', value)"
    :options="props.options"
    :searchable="false"
    :clearable="false"
  >
  </vSelect>
</template>

<script setup lang="ts">
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const props = defineProps<{
  modelValue: string
  options: string[]
}>()
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.v-select {
  background-color: #fff;
  min-width: 200px;
  .vs__open-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .vs__selected-options {
    padding-left: 12px;
  }
}
</style>
