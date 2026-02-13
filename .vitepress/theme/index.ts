import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import Icon from "../components/Icon.vue";
import LabContainer from "../components/Lab.vue";
import Mermaid from "../components/Mermaid.vue";
import NavItem from "../components/NavItem.vue";
import ProContainer from "../components/Pro.vue";

import "./custom.css";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    library.add(fas);
    app.component("ProContainer", ProContainer);
    app.component("Mermaid", Mermaid);
    app.component("NavItem", NavItem);
    app.component("Icon", Icon);
    app.component("LabContainer", LabContainer);
  },
} satisfies Theme;
