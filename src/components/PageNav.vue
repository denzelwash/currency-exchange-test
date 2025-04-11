<template>
  <nav class="nav">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/convert">Конвертация</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.nav {
  display: inline-flex;
  gap: 32px;
  a {
    &:not(.router-link-active) {
      color: #000000;
      &:hover {
        text-decoration: underline;
      }
    }
    &.router-link-active {
      cursor: default;
    }
  }
}
</style>
