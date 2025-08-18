<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps<{
  icon: string;
}>();
</script>

<template>
  <FontAwesomeIcon :icon="icon" />
</template>
