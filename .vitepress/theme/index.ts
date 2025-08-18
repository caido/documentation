import DefaultTheme from "vitepress/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./custom.css";

import ProContainer from "../components/Pro.vue";
import Mermaid from "../components/Mermaid.vue";
import Icon from "../components/Icon.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    library.add(fas);
    app.component("ProContainer", ProContainer);
    app.component("Mermaid", Mermaid);
    app.component("Icon", Icon);
  },
} satisfies Theme;
