<script setup lang="ts">
import { useRoute } from "vitepress";
import { computed, inject, ref } from "vue";

const props = defineProps<{
  text: string;
  link: string;
  activeMatch: string;
  items: { text: string; link: string }[];
  screenMenu?: boolean;
}>();

const route = useRoute();
const closeScreen = inject<(() => void) | undefined>("close-screen");

const isOpen = ref(false);

const isActive = computed(() => {
  const path = route.path;
  const match = props.activeMatch;
  try {
    return new RegExp(match).test(path);
  } catch {
    return false;
  }
});

function isChildActive(link: string) {
  const path = route.path;
  if (path === link) return true;
  if (link.endsWith("/") && path.startsWith(link)) return true;
  return false;
}
</script>

<template>
  <!-- Desktop: single link (same as VPNavBarMenuLink) -->
  <a
    v-if="!screenMenu"
    :href="props.link"
    :class="['VPNavBarMenuLink', { active: isActive }]"
  >
    <span>{{ props.text }}</span>
  </a>

  <!-- Mobile: expandable group with children -->
  <div
    v-else
    class="VPNavScreenMenuGroup mobile-nav-group"
    :class="{ open: isOpen }"
  >
    <button
      type="button"
      class="button"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <span class="button-text">{{ props.text }}</span>
      <span class="vpi-plus button-icon" />
    </button>
    <div class="items">
      <a
        v-for="item in props.items"
        :key="item.link"
        :href="item.link"
        :class="['mobile-nav-link', { active: isChildActive(item.link) }]"
        @click="closeScreen?.()"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  text-decoration: none;
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-brand-1);
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1);
}

/* Mobile group (matches VPNavScreenMenuGroup) */
.mobile-nav-group {
  border-bottom: 1px solid var(--vp-c-divider);
  height: 48px;
  overflow: hidden;
  transition: border-color 0.5s;
}

.mobile-nav-group .items {
  visibility: hidden;
}

.mobile-nav-group.open .items {
  visibility: visible;
}

.mobile-nav-group.open {
  padding-bottom: 10px;
  height: auto;
}

.mobile-nav-group.open .button {
  padding-bottom: 6px;
  color: var(--vp-c-brand-1);
}

.mobile-nav-group.open .button-icon {
  transform: rotate(45deg);
}

.mobile-nav-group .button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 11px 0;
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-nav-group .button:hover {
  color: var(--vp-c-brand-1);
}

.mobile-nav-group .button-icon {
  transition: transform 0.25s;
}

.mobile-nav-link {
  display: block;
  margin-left: 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s;
}

.mobile-nav-link:hover {
  color: var(--vp-c-brand-1);
}

.mobile-nav-link.active {
  color: var(--vp-c-brand-1);
}
</style>
