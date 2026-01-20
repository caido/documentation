<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

import SecondNavbar from "../components/SecondNavbar.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-top>
      <SecondNavbar />
    </template>
  </Layout>
</template>
