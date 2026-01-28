<script setup lang="ts">
import { useRoute } from "vitepress";
import DefaultThemeComponent from "vitepress/theme";

import ApplicationNavbar from "../components/ApplicationNavbar.vue";

const { Layout } = DefaultThemeComponent;
const router = useRoute();
</script>

<template>
  <Layout>
    <template #doc-top>
      <ApplicationNavbar
        v-if="router.path.startsWith('/app/')"
        style="margin-top: -48px; margin-left: -32px; z-index: 1"
      />
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
