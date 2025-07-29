import type { DefaultTheme } from "vitepress";

export const quickstartSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Quickstart",
    items: [
      {
        text: "Introduction",
        link: "/quickstart/",
      },
      {
        text: "Installation",
        items: [
          {
            text: "Windows",
            link: "/quickstart/windows",
          },
          {
            text: "Linux",
            link: "/quickstart/linux",
          },
          {
            text: "macOS",
            link: "/quickstart/mac",
          },
        ],
      },
      {
        text: "Setup",
        link: "/quickstart/setup",
      },
      {
        text: "Features Overview",
        items: [
          {
            text: "Sitemap",
            link: "/quickstart/features/sitemap",
          },
          {
            text: "Scopes",
            link: "/quickstart/features/scopes",
          },
          {
            text: "Filters",
            link: "/quickstart/features/filters",
          },
          {
            text: "Intercept",
            link: "/quickstart/features/intercept",
          },
          {
            text: "HTTP History",
            link: "/quickstart/features/http_history",
          },
          {
            text: "WS History",
            link: "/quickstart/features/ws_history",
          },
          {
            text: "Match & Replace",
            link: "/quickstart/features/match_replace",
          },
          {
            text: "Replay",
            link: "/quickstart/features/replay",
          },
          {
            text: "Automate",
            link: "/quickstart/features/automate",
          },
          {
            text: "Workflows",
            link: "/quickstart/features/workflows",
          },
          {
            text: "Assistant",
            link: "/quickstart/features/assistant",
          },
          {
            text: "Environment",
            link: "/quickstart/features/environment",
          },
          {
            text: "Search",
            link: "/quickstart/features/search",
          },
          {
            text: "Findings",
            link: "/quickstart/features/findings",
          },
          {
            text: "Exports",
            link: "/quickstart/features/exports",
          },
          {
            text: "Files",
            link: "/quickstart/features/files",
          },
          {
            text: "Plugins",
            link: "/quickstart/features/plugins",
          },
          {
            text: "Workspace",
            link: "/quickstart/features/workspace",
          },
        ],
      },
      {
        text: "Support",
        link: "/quickstart/support",
      },
    ],
  },
];
