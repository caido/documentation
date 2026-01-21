<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import type { DefaultTheme } from "vitepress";
import DefaultThemeComponent from "vitepress/theme";

import SecondNavbar from "../components/SecondNavbar.vue";

const { Layout } = DefaultThemeComponent;
const { site } = useData();
const route = useRoute();

const isActive = (item: DefaultTheme.NavItem) => {
  if (!("link" in item)) return false;
  const link = item.link;
  if (!link || typeof link !== "string") return false;

  const currentPath = route.path;

  // Use activeMatch if provided
  if ("activeMatch" in item) {
    const activeMatch = item.activeMatch;
    if (activeMatch !== null && activeMatch !== undefined) {
      const pattern =
        typeof activeMatch === "string" ? new RegExp(activeMatch) : activeMatch;
      return pattern.test(currentPath);
    }
  }

  // Fallback to link matching
  if (link === currentPath) return true;
  if (link.endsWith("/") && currentPath.startsWith(link)) {
    return true;
  }

  return false;
};
</script>

<template>
  <Layout>
    <template #nav-bar-content-before>
      <nav class="custom-nav-links">
        <a
          v-for="item in site.themeConfig.nav"
          :key="item.link || item.text"
          :href="'link' in item ? item.link : undefined"
          :class="['custom-nav-link', { active: isActive(item) }]"
        >
          {{ item.text }}
        </a>
      </nav>
    </template>
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

<style scoped>
:deep(.VPNavBarMenu).menu {
  display: none;
}

:deep(.VPNavBarSearch) {
  flex: 0;
}

.custom-nav-links {
  margin-left: 2rem;
  display: flex;
  align-items: center;
  margin-right: auto;
  flex: 1;
}

.custom-nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s;
  padding: 0.5em 1em;
  border-bottom: 0.125rem solid transparent;
}

.custom-nav-link:hover {
  color: var(--vp-c-brand-1);
}

.custom-nav-link.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}
</style>
