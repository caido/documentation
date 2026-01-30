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
      <div style="height: var(--vp-nav-height)" />
    </template>
    <template #aside-top>
      <div style="height: var(--vp-nav-height)" />
    </template>
  </Layout>
</template>

<style scoped>
:deep(.VPHomeHero) h1.heading .text {
  color: var(--vp-c-text-1);
}
</style>
