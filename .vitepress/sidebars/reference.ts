import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Reference",
    items: [
      {
        text: "Introduction",
        link: "/reference/",
      },
      {
        text: "CLI Options",
        link: "/reference/cli",
      },
      {
        text: "Command Shortcuts",
        link: "/reference/command_shortcuts",
      },
      {
        text: "Context Menu Options",
        link: "/reference/context_menu",
      },
      {
        text: "HTTPQL",
        link: "/reference/httpql",
      },
      {
        text: "Match & Replace",
        link: "/reference/match_replace",
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Nodes",
        link: "/reference/workflow_nodes",
      },
      {
        text: "Node Data Types",
        link: "/reference/workflow_data_types",
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
        text: "Internal Files",
        link: "/reference/internal_files",
      },
      {
        text: "Download Links",
        link: "/reference/download_links",
      },
    ],
  },
];
