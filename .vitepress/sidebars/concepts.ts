import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/concepts/",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
      {
        text: "CLI vs Desktop",
        link: "/concepts/essentials/cli_vs_desktop",
      },
      {
        text: "Instances",
        link: "/concepts/essentials/instances",
      },
      {
        text: "HTTPQL",
        link: "/concepts/essentials/httpql",
      },
      {
        text: "Tabs",
        link: "/concepts/essentials/tabs",
      },
      {
        text: "Layout",
        link: "/concepts/essentials/layout",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "What are Workflows?",
        link: "/concepts/workflows_intro",
      },
      {
        text: "Understanding Nodes",
        link: "/concepts/workflows_nodes",
      },
      {
        text: "Writing JavaScript",
        link: "/concepts/workflows_js",
      },
    ],
  },
  {
    text: "Internals",
    items: [
      {
        text: "Files",
        link: "/concepts/internals/files",
      },
      {
        text: "GraphQL",
        link: "/concepts/internals/graphql",
      },
      {
        text: "Download",
        link: "/concepts/internals/download",
      },
      {
        text: "Cloud",
        link: "/concepts/internals/cloud",
      },
      {
        text: "Authentication",
        link: "/concepts/internals/authentication",
      },
      {
        text: "Developer",
        link: "https://developer.caido.io",
      },
    ],
  },
];
