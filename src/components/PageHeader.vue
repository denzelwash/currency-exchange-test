<template>
  <header class="page-header">
    <div class="container">
      <div class="page-header__grid">
        <PageNav />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import PageNav from '@/components/PageNav.vue'
</script>

<style lang="scss" scoped>
.page-header {
  padding: 20px 0;
  background-color: #ececec;
  margin-bottom: 40px;
  &__grid {
    display: flex;
    justify-content: space-between;
    gap: 32px;
  }
}
</style>
