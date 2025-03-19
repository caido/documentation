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
        text: "Proxying HTTPS Traffic",
        link: "/concepts/essentials/https_traffic",
      },
      {
        text: "CLI vs Desktop",
        link: "/concepts/essentials/cli_vs_desktop",
      },
      {
        text: "Instances",
        link: "/concepts/essentials/instances",
      },
      {
        text: "Tabs",
        link: "/concepts/essentials/tabs",
      },
      {
        text: "Layout Customization",
        link: "/concepts/essentials/layout",
      },
    ],
  },
  {
    text: "Proxying",
    items: [
      {
        text: "Traffic splitting",
        link: "/concepts/proxying/traffic_splitting",
      },
      {
        text: "Invisible Proxying",
        link: "/concepts/proxying/invisible",
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
        link: "/concepts/internals/graphql",
      },
      {
        text: "Cloud",
        link: "/concepts/internals/cloud",
      },
      {
        text: "Authentication",
        link: "/concepts/internals/authentication",
      },
    ],
  },
];
