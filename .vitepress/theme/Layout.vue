<script setup lang="ts">
import DefaultThemeComponent from "vitepress/theme";

import Navbar from "../components/Navbar.vue";

const { Layout } = DefaultThemeComponent;
</script>

<template>
  <Layout>
    <template #doc-top>
      <Navbar style="margin-top: -48px; margin-left: -32px; z-index: 1" />
    </template>
    <template #doc-before>
      <div class="second-navbar-spacer" />
    </template>
    <template #aside-top>
      <div class="second-navbar-spacer" />
    </template>
  </Layout>
</template>

<style scoped>
.second-navbar-spacer {
  height: var(--vp-nav-height);
}

@media (max-width: 960px) {
  .second-navbar-spacer {
    height: 0;
  }
}

:deep(.VPHomeHero) h1.heading .text {
  color: var(--vp-c-text-1);
}
</style>
