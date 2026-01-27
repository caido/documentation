import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Reference",
    items: [
      {
        text: "Introduction",
        link: "/app/reference/",
      },
      {
        text: "Burp Suite vs Caido",
        link: "/app/reference/burp_vs_caido",
      },
      {
        text: "CLI Options",
        link: "/app/reference/cli",
      },
      {
        text: "Command Shortcuts",
        link: "/app/reference/command_shortcuts",
      },
      {
        text: "Context Menu Options",
        link: "/app/reference/context_menu",
      },
      {
        text: "HTTPQL",
        link: "/app/reference/httpql",
      },
      {
        text: "Match & Replace",
        link: "/app/reference/match_replace",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Nodes",
        link: "/app/reference/workflow_nodes",
      },
      {
        text: "Node Data Types",
        link: "/app/reference/workflow_data_types",
      },
      {
        text: "Interpolation",
        link: "/reference/workflow_interpolation",
      },
      {
        text: "SDK",
        link: "https://developer.caido.io/reference/sdks/workflow/",
      },
    ],
  },
  {
    text: "Internals",
    items: [
      {
        text: "Data Storage",
        link: "/app/reference/data_storage",
      },
      {
        text: "Download Links",
        link: "/app/reference/download_links",
      },
    ],
  },
];
