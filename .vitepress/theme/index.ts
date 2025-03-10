import DefaultTheme from "vitepress/theme";
import "./custom.css";

import ProContainer from "../components/Pro.vue";
import Mermaid from "../components/Mermaid.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ProContainer", ProContainer);
    app.component("Mermaid", Mermaid);
  },
} satisfies Theme;
