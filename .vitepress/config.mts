import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

import MermaidExample from "./mermaid";
import {
  conceptsSidebar,
  guidesSidebar,
  quickstartSidebar,
  referenceSidebar,
  troubleshootingSidebar,
  tutorialsSidebar,
} from "./sidebars";

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
    plugins: [llmstxt()],
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "script",
      {
        "data-api": "/stats/event",
        src: "/stats/script.js",
        defer: "",
        "data-domain": "docs.caido.io",
      },
    ],
  ],
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
      { text: "Get Started", link: "/quickstart/" },
      { text: "How-to Guides", link: "/guides/" },
      { text: "Tutorials", link: "/tutorials/" },
      { text: "Reference", link: "/reference/" },
      { text: "Concepts", link: "/concepts/" },
      { text: "FAQ", link: "/faq" },
      { text: "Troubleshooting", link: "/troubleshooting" },
    ],

    sidebar: {
      "/quickstart/": quickstartSidebar,
      "/reference/": referenceSidebar,
      "/guides/": guidesSidebar,
      "/concepts/": conceptsSidebar,
      "/tutorials/": tutorialsSidebar,
      "/troubleshooting/": troubleshootingSidebar,
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
