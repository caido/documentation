import type { DefaultTheme } from "vitepress";

export const quickstartSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Get Started",
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
        text: "Setup & Next Steps",
        link: "/quickstart/setup",
      },
      {
        text: "Features Overview",
        items: [
          {
            text: "Sitemap",
            link: "/quickstart/sitemap",
          },
          {
            text: "Scopes",
            link: "/quickstart/scopes",
          },
          {
            text: "Filters",
            link: "/quickstart/filters",
          },
          {
            text: "Intercept",
            link: "/quickstart/intercept",
          },
          {
            text: "HTTP History",
            link: "/quickstart/http_history",
          },
          {
            text: "WS History",
            link: "/quickstart/ws_history",
          },
          {
            text: "Match & Replace",
            link: "/quickstart/match_replace",
          },
          {
            text: "Replay",
            link: "/quickstart/replay",
          },
          {
            text: "Automate",
            link: "/quickstart/automate",
          },
          {
            text: "Workflows",
            link: "/quickstart/workflows",
          },
          {
            text: "Assistant",
            link: "/quickstart/assistant",
          },
          {
            text: "Environment",
            link: "/quickstart/environment",
          },
          {
            text: "Search",
            link: "/quickstart/search",
          },
          {
            text: "Findings",
            link: "/quickstart/findings",
          },
          {
            text: "Exports",
            link: "/quickstart/exports",
          },
          {
            text: "Files",
            link: "/quickstart/files",
          },
          {
            text: "Plugins",
            link: "/quickstart/plugins",
          },
          {
            text: "Workspace",
            link: "/quickstart/workspace",
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
