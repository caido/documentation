<script setup lang="ts">
import DefaultThemeComponent from "vitepress/theme";

import SecondNavbar from "../components/SecondNavbar.vue";

const { Layout } = DefaultThemeComponent;
</script>

<template>
  <Layout>
    <template #doc-top>
      <SecondNavbar style="margin-top: -48px; margin-left: -32px; z-index: 1" />
    </template>
    <template #doc-before>
      <div style="height: var(--vp-nav-height)" />
    </template>
    <template #aside-top>
      <div style="height: var(--vp-nav-height)" />
    </template>
  </Layout>
</template>
