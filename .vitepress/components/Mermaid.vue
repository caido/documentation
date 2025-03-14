<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import type { MermaidConfig } from "mermaid";
import mermaid from "mermaid";

const props = defineProps({
  graph: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const svg = ref("");
const code = ref(decodeURIComponent(props.graph));

let mut: MutationObserver | null = null;

onMounted(async () => {
  mut = new MutationObserver(() => {
    renderChart();
  });
  mut.observe(document.documentElement, { attributes: true });

  await renderChart();

  //refresh images on first render
  const hasImages = (/<img([\w\W]+?)>/.exec(code.value)?.length ?? 0) > 0;
  if (hasImages)
    setTimeout(() => {
      let imgElements = document.getElementsByTagName("img");
      let imgs = Array.from(imgElements);
      if (imgs.length) {
        Promise.all(
          imgs
            .filter((img) => !img.complete)
            .map(
              (img) =>
                new Promise((resolve) => {
                  img.onload = img.onerror = resolve;
                }),
            ),
        ).then(() => {
          renderChart();
        });
      }
    }, 100);
});

onUnmounted(() => mut?.disconnect());

const renderChart = async () => {
  const mermaidConfig: MermaidConfig = {
    securityLevel: "loose",
    startOnLoad: false,
    theme: "dark",
  };
  mermaid.initialize(mermaidConfig);
  const render = await mermaid.render(props.id, code.value);
  // This is a hack to force v-html to re-render, otherwise the diagram disappears
  // when **switching themes** or **reloading the page**.
  // The cause is that the diagram is deleted during rendering (out of Vue's knowledge).
  // Because svgCode does NOT change, v-html does not re-render.
  // This is not required for all diagrams, but it is required for c4c, mindmap and zenuml.
  const salt = Math.random().toString(36).substring(7);
  svg.value = `${render.svg} <span style="display: none">${salt}</span>`;
};
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="svg" />
</template>
