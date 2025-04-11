<template>
  <div class="page-wrapper">
    <PageHeader />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageHeader from './components/PageHeader.vue'
</script>
