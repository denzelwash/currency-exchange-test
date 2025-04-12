<template>
  <input :class="['input', props.class]" :value="props.modelValue" @input="inputHandler" />
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
interface Props {
  modelValue: string
  type?: 'text' | 'number'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})
const emit = defineEmits(['update:modelValue'])
const instance = getCurrentInstance()

const inputHandler = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  if (props.type === 'text') {
    emit('update:modelValue', value)
  }
  if (props.type === 'number') {
    const newValue = value
      .replace(/[^\d.]/g, '')
      .replace(/^\./, '')
      .replace(/(\..*)\./g, '$1')
      .replace(/(\.\d{2})\d+/, '$1')
    emit('update:modelValue', newValue)
    instance!.proxy!.$forceUpdate()
  }
}
</script>

<style lang="scss" scoped>
.input {
  padding: 4px 8px;
  border-color: #3c3c3c42;
  border-width: 1px;
  border-radius: 4px;
  outline: none;
}
</style>
