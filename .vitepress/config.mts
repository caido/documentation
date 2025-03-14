import { defineConfig } from "vitepress";

import {
  conceptsSidebar,
  guidesSidebar,
  quickstartSidebar,
  referenceSidebar,
  tutorialsSidebar,
} from "./sidebars";
import MermaidExample from "./mermaid";

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
      provider: "local",
    },

    nav: [
      { text: "Quickstart", link: "/quickstart/" },
      { text: "Tutorials", link: "/tutorials/" },
      { text: "Guides", link: "/guides/" },
      { text: "Reference", link: "/reference/" },
      { text: "Concepts", link: "/concepts/" },
      { text: "FAQ", link: "/faq" },
      { text: "Report a Bug", link: "/report_bug" },
    ],

    sidebar: {
      "/quickstart/": quickstartSidebar,
      "/reference/": referenceSidebar,
      "/guides/": guidesSidebar,
      "/concepts/": conceptsSidebar,
      "/tutorials/": tutorialsSidebar,
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
