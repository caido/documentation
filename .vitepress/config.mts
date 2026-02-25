import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

import type { DefaultTheme, HeadConfig } from "vitepress";

import MermaidExample from "./mermaid";
import {
  appSidebars,
  dashboardSidebars,
} from "./sidebars";
import { appNavbar, dashboardNavbar } from "./navbars";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caido",
  titleTemplate: "Documentation",
  description: "Official Caido Documentation",

  srcDir: "src",
  appearance: "force-dark",
  sitemap: {
    hostname: "https://docs.caido.io",
  },

  vite: {
    plugins: [
      llmstxt(),
      {
        name: "vp-nav-menu-alias",
        resolveId(id) {
          if (id === "./VPNavBarMenu.vue" || id.endsWith("VPNavBarMenu.vue")) {
            return new URL(
              "theme/components/VPNavBarMenu.vue",
              import.meta.url
            ).href;
          }
        },
      },
    ],
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    ...(typeof globalThis !== "undefined" &&
    (globalThis as { process?: { env?: { NODE_ENV?: string } } }).process?.env
      ?.NODE_ENV === "production"
      ? [
          [
            "script",
            {
              "data-api": "/stats/event",
              src: "/stats/script.js",
              defer: "",
              "data-domain": "docs.caido.io",
            },
          ],
        ]
      : []),
  ] as HeadConfig[],
  ignoreDeadLinks: "localhostLinks",

  markdown: {
    config: (md) => {
      MermaidExample(md);
    },
  },

  themeConfig: {
    logo: {
      src: "/logo.png",
      "no-shadow": true,
    },

    search: {
      provider: "algolia",
      options: {
        appId: "5R584H6RK2",
        apiKey: "c6b7b639856da05c4a4c61dbc517f771",
        indexName: "docs_caido_io_5r584h6rk2_pages",
        insights: true,
      },
    },

    nav: [
      {
        text: "Application",
        link: "/app/quickstart/",
        activeMatch: "^/app(/.*)?$",
        component: "NavItem",
        props: {
          text: "Application",
          link: "/app/quickstart/",
          activeMatch: "^/app(/.*)?$",
          items: appNavbar,
        },
      },
      {
        component: "NavItem",
        text: "Dashboard",
        link: "/dashboard/quickstart/",
        activeMatch: "^/dashboard(/|$)",
        items: dashboardNavbar,
        props: {
          text: "Dashboard",
          link: "/dashboard/quickstart/",
          activeMatch: "^/dashboard(/|$)",
          items: dashboardNavbar,
        },
      },
      {
        component: "NavItem",
        text: "FAQ",
        link: "/faq/",
        activeMatch: "^/faq(/|$)",
        items: [],
        props: {
          text: "FAQ",
          link: "/faq/",
          activeMatch: "^/faq(/|$)",
        },
      },
    ] as unknown as DefaultTheme.NavItem[],

    sidebar: {
      "/app/quickstart/": appSidebars.quickstartSidebar,
      "/app/reference/": appSidebars.referenceSidebar,
      "/app/guides/": appSidebars.guidesSidebar,
      "/app/concepts/": appSidebars.conceptsSidebar,
      "/app/tutorials/": appSidebars.tutorialsSidebar,
      "/app/troubleshooting/": appSidebars.troubleshootingSidebar,
      "/dashboard/quickstart/": dashboardSidebars.quickstartSidebar,
      "/dashboard/guides/": dashboardSidebars.guidesSidebar,
      "/dashboard/concepts/": dashboardSidebars.conceptsSidebar,
    },

    outline: {
      level: [2, 3],
    },

    socialLinks: [
      { icon: "discord", link: "https://links.caido.io/discord" },
      { icon: "twitter", link: "https://twitter.com/caidoio" },
      { icon: "github", link: "https://github.com/caido/caido" },
    ],
  },
  transformPageData: (page) => {
    const canonicalUrl = `https://docs.caido.io/${page.relativePath}`
      .replace(/index\.md$/, "")
      .replace(/\.md$/, "")
      .replace(/.html$/, "");

    page.frontmatter.head ??= [];
    page.frontmatter.head.push([
      "link",
      { rel: "canonical", href: canonicalUrl },
    ]);
  },
});
