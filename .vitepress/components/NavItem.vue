<script setup lang="ts">
import { useRoute } from "vitepress";
import { computed, inject, ref } from "vue";
import Icon from "./Icon.vue";

const props = defineProps<{
  text: string;
  link: string;
  activeMatch: string;
  items?: { text: string; link: string }[];
  screenMenu?: boolean;
  button?: boolean;
  icon?: string;
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
  <!-- Desktop: single link -->
  <a
    v-if="!screenMenu"
    :href="props.link"
    :class="['VPNavBarMenuLink', { active: isActive, 'nav-button': props.button }]"
  >
    <Icon v-if="props.icon" :icon="props.icon" aria-hidden="true" />
    <span>{{ props.text }}</span>
  </a>

  <!-- Mobile: single link when no children -->
  <a
    v-else-if="!props.items"
    :href="props.link"
    class="VPNavBarMenuLink mobile-nav-single-link"
    :class="{ active: isActive, 'nav-button': props.button }"
    @click="closeScreen?.()"
  >
    <Icon v-if="props.icon" :icon="props.icon" aria-hidden="true" />
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
      :class="{ active: isActive }"
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
}

.mobile-nav-group.open .button-icon {
  transform: rotate(45deg);
}

/* Only highlight button when a child is the current page */
.mobile-nav-group .button.active {
  color: var(--vp-c-brand-1);
}

.mobile-nav-single-link {
  display: block;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 12px 0 11px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.25s;
}

.mobile-nav-single-link:hover {
  color: var(--vp-c-brand-1);
}

.mobile-nav-single-link.active {
  color: var(--vp-c-brand-1);
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

.mobile-nav-group .button:hover:not(.active),
.mobile-nav-group .button:focus:not(.active) {
  color: var(--vp-c-text-1);
}

.mobile-nav-group .button.active:hover,
.mobile-nav-group .button.active:focus {
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

.VPNavBarMenuLink.nav-button {
  display: inline-flex;
  align-items: center;
  align-self: center;
  gap: 8px;
  margin: 0 12px;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background-color: var(--vp-c-brand-3);
  color: #fff;
  line-height: 20px;
  white-space: nowrap;
  transition: background-color 0.2s;
}

.VPNavBarMenuLink.nav-button:hover {
  background-color: var(--vp-c-brand-2);
  color: #fff;
}

.VPNavBarMenuLink.nav-button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.VPNavBarMenuLink.nav-button.mobile-nav-single-link {
  margin: 12px 0;
}
</style>
