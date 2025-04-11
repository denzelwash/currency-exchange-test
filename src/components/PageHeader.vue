<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__grid">
        <PageNav />
        <AppSelect
          :options="selectOptions"
          :modelValue="select"
          @update:modelValue="(value) => (select = value)"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import PageNav from '@/components/PageNav.vue'
import AppSelect from '@/components/AppSelect.vue'
import { ref } from 'vue'

const select = ref('')
const selectOptions = ref(['1', '2', '3'])
</script>

<style lang="scss" scoped>
.page-header {
  padding: 20px 0;
  background-color: #ececec;
  margin-bottom: 40px;
  &__grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }
}
</style>
