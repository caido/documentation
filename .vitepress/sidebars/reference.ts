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
        text: "Environment",
        link: "/reference/environment",
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
        text: "Convert Nodes",
        link: "/reference/workflow_convert_nodes",
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
