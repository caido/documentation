<script lang="ts" setup>
import { useData } from "vitepress";
import { computed } from "vue";
import type { DefaultTheme } from "vitepress/theme";
import { isActive } from "vitepress/dist/client/shared.js";
import VPFlyout from "vitepress/dist/client/theme-default/components/VPFlyout.vue";

const props = defineProps<{
  item: DefaultTheme.NavItemWithChildren & {
    component?: string;
    props?: {
      text?: string;
      link?: string;
      activeMatch?: string;
      items?: DefaultTheme.NavItemWithLink[];
    };
  };
}>();

const { page } = useData();

const normalizedItem = computed(() => {
  const i = props.item;
  return {
    ...i,
    text: i.text ?? i.props?.text ?? "",
    link: i.link ?? i.props?.link,
    activeMatch: i.activeMatch ?? i.props?.activeMatch,
    items: i.items ?? i.props?.items ?? [],
  };
});

const isChildActive = (navItem: DefaultTheme.NavItem & { props?: { items?: unknown[] } }) => {
  if (navItem && "link" in navItem && navItem.link != null) {
    return isActive(
      page.value.relativePath,
      navItem.link,
      !!normalizedItem.value.activeMatch
    );
  }
  const items =
    (navItem as { items?: unknown[] })?.items ??
    (navItem as { props?: { items?: unknown[] } })?.props?.items ??
    [];
  return Array.isArray(items) && items.some(isChildActive);
};

const childrenActive = computed(() => isChildActive(normalizedItem.value));
</script>

<template>
  <VPFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active:
        isActive(
          page.relativePath,
          normalizedItem.activeMatch,
          !!normalizedItem.activeMatch
        ) || childrenActive,
    }"
    :button="normalizedItem.text"
    :items="normalizedItem.items"
  />
</template>
