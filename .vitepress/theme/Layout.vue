<script setup lang="ts">
import { useData, useRoute, useRouter } from "vitepress";
import DefaultThemeComponent from "vitepress/theme";
import { computed } from "vue";

import ApplicationNavbar from "../components/ApplicationNavbar.vue";

const { Layout } = DefaultThemeComponent;
const router = useRoute();
const { site } = useData();
</script>

<template>
  <Layout>
    <template #doc-top>
      <ApplicationNavbar
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
