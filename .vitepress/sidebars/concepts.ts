import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Concepts",
    items: [
      {
        text: "Introduction",
        link: "/concepts/",
      },
      {
        text: "CLI vs Desktop",
        link: "/concepts/cli_vs_desktop",
      },
      {
        text: "Instances",
        link: "/concepts/instances",
      },
      {
        text: "Using Caido Offline",
        link: "/concepts/offline",
      },
    ],
  },
  {
    text: "Proxying",
    items: [
      {
        text: "Proxying Web Traffic",
        link: "/concepts/web_traffic",
      },
      {
        text: "Proxying HTTPS Traffic",
        link: "/concepts/https_traffic",
      },
      {
        text: "Traffic Splitting",
        link: "/concepts/traffic_splitting",
      },
      {
        text: "Invisible Proxying",
        link: "/concepts/invisible",
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
      {
        text: "Workflow Operation",
        link: "/concepts/workflow_flow",
      },
    ],
  },
  {
    text: "Internals",
    items: [
      {
        text: "GraphQL",
        link: "/concepts/graphql",
      },
      {
        text: "Cloud",
        link: "/concepts/cloud",
      },
      {
        text: "Authentication",
        link: "/concepts/authentication",
      },
    ],
  },
];
