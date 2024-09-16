<script setup lang="ts"></script>

<template>
  <div class="c-pro info custom-block">
    <slot name="title">
      <p class="custom-block-title">⚡PRO FEATURE</p>
    </slot>
    <p>
      <slot />
    </p>
  </div>
</template>

<style scoped>
.c-pro {
  position: relative;
  backdrop-filter: blur(10px);
}

.c-pro::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px;
  border: 2px solid transparent;
  background: linear-gradient(140deg, var(--vp-c-brand-1), var(--vp-c-brand-2))
    border-box;
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
</style>
