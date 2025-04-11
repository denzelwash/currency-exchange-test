<template>
  <input
    :class="['input', props.class]"
    type="text"
    :value="props.modelValue"
    @input="(value) => emit('update:modelValue', value)"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  type?: 'text' | 'number'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

const emit = defineEmits(['update:modelValue'])
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
