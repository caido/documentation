import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Concepts",
    items: [
      {
        text: "Introduction",
        link: "/app/concepts/",
      },
      {
        text: "CLI vs Desktop",
        link: "/app/concepts/cli_vs_desktop",
      },
      {
        text: "Using Caido Offline",
        link: "/app/concepts/offline",
      },
    ],
  },
  {
    text: "Instances",
    items: [
      {
        text: "Instance",
        link: "/app/concepts/instance",
      },
      {
        text: "Registration",
        link: "/app/concepts/instance_registration",
      },
      {
        text: "Authentication",
        link: "/app/concepts/instance_authentication",
      },
    ],
  },
  {
    text: "Internals",
    items: [
      {
        text: "GraphQL",
        link: "/app/concepts/graphql",
      },
      {
        text: "Cloud",
        link: "/app/concepts/cloud",
      },
    ],
  },
  {
    text: "Proxying",
    items: [
      {
        text: "Proxying Web Traffic",
        link: "/app/concepts/web_traffic",
      },
      {
        text: "Traffic Splitting",
        link: "/app/concepts/traffic_splitting",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "What are Workflows?",
        link: "/app/concepts/workflows_intro",
      },
      {
        text: "Understanding Nodes",
        link: "/app/concepts/workflows_nodes",
      },
      {
        text: "Writing JavaScript",
        link: "/app/concepts/workflows_js",
      },
      {
        text: "Workflow Operation",
        link: "/app/concepts/workflow_flow",
      },
    ],
  },
];
