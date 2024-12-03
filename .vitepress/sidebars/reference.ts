import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/reference/",
      },
      {
        text: "Common Errors",
        link: "/reference/common_errors",
      },
    ],
  },
  {
    text: "Features",
    items: [
      {
        text: "Overview",
        items: [
          {
            text: "Sitemap",
            link: "/reference/features/overview/sitemap",
          },
          {
            text: "Sorting",
            link: "/reference/features/overview/sorting",
          },
          {
            text: "Scope",
            link: "/reference/features/overview/scope",
          },
          {
            text: "Filters",
            link: "/reference/features/overview/filters",
          },
        ],
      },
      {
        text: "Proxy",
        items: [
          {
            text: "Intercept",
            link: "/reference/features/proxy/intercept",
          },
          {
            text: "HTTP History",
            link: "/reference/features/proxy/http_history",
          },
          {
            text: "WS History",
            link: "/reference/features/proxy/ws_history",
          },
          {
            text: "Match & Replace",
            link: "/reference/features/proxy/match_replace",
          },
        ],
      },
      {
        text: "Testing",
        items: [
          {
            text: "Replay",
            link: "/reference/features/testing/replay",
          },
          {
            text: "Automate",
            link: "/reference/features/testing/automate",
          },
          {
            text: "Assistant",
            link: "/reference/features/testing/assistant",
          },
        ],
      },
      {
        text: "Logging",
        items: [
          {
            text: "Search",
            link: "/reference/features/logging/search",
          },
          {
            text: "Findings",
            link: "/reference/features/logging/findings",
          },
          {
            text: "Exports",
            link: "/reference/features/logging/exports",
          },
        ],
      },
      {
        text: "Workspace",
        items: [
          {
            text: "Files",
            link: "/reference/features/workspace/files",
          },
          {
            text: "Plugins",
            link: "/reference/features/workspace/plugins",
          },
          {
            text: "Projects",
            link: "/reference/features/workspace/projects",
          },
          {
            text: "Backups",
            link: "/reference/features/workspace/backups",
          },
        ],
      },
    ],
  },
  {
    text: "Workflows",
    items: [
      {
        text: "Workflow Basics",
        link: "/reference/workflows/workflows",
      },
      {
        text: "Passive",
        link: "/reference/workflows/passive",
      },
      {
        text: "Convert",
        link: "/reference/workflows/convert",
        items: [
          {
            text: "Coding Nodes",
            link: "/reference/workflows/convert/coding_nodes",
          },
        ],
      },
      {
        text: "SDK",
        link: "/reference/workflows/sdk",
      },
    ],
  },
];
