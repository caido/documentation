<script setup lang="ts">
interface Lab {
  name: string;
  url: string;
}

defineProps<{
  message: string;
  labs: Lab[];
}>();
</script>

<template>
  <div class="c-lab info custom-block">
    <p class="custom-block-title">🧪 CAIDO LABS</p>
    <p>
      {{ message }}
      <template v-if="labs.length === 1 && labs[0]">
        <a :href="labs[0].url">{{ labs[0].name }}</a>
      </template>
      <template v-else>
        <br />
        <template v-for="(lab, index) in labs" :key="index">
          - <a :href="lab.url">{{ lab.name }}</a>
          <br />
        </template>
      </template>
    </p>
  </div>
</template>

<style scoped>
.c-lab {
  position: relative;
  backdrop-filter: blur(10px);
}

.c-lab::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 8px;
  border: 2px solid transparent;
  background: linear-gradient(140deg, rgb(219, 51, 234), rgb(59, 209, 246))
    border-box;
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
</style>
