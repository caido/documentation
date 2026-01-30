import type { DefaultTheme } from "vitepress";

export const quickstartSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Get Started",
    items: [
      {
        text: "Introduction",
        link: "/app/quickstart/",
      },
      {
        text: "Installation",
        items: [
          {
            text: "Windows",
            link: "/app/quickstart/windows",
          },
          {
            text: "Linux",
            link: "/app/quickstart/linux",
          },
          {
            text: "macOS",
            link: "/app/quickstart/mac",
          },
        ],
      },
      {
        text: "Setup & Next Steps",
        link: "/app/quickstart/setup",
      },
      {
        text: "Features Overview",
        items: [
          {
            text: "Sitemap",
            link: "/app/quickstart/sitemap",
          },
          {
            text: "Scopes",
            link: "/app/quickstart/scopes",
          },
          {
            text: "Filters",
            link: "/app/quickstart/filters",
          },
          {
            text: "Intercept",
            link: "/app/quickstart/intercept",
          },
          {
            text: "HTTP History",
            link: "/app/quickstart/http_history",
          },
          {
            text: "WS History",
            link: "/app/quickstart/ws_history",
          },
          {
            text: "Match & Replace",
            link: "/app/quickstart/match_replace",
          },
          {
            text: "Replay",
            link: "/app/quickstart/replay",
          },
          {
            text: "Automate",
            link: "/app/quickstart/automate",
          },
          {
            text: "Workflows",
            link: "/app/quickstart/workflows",
          },
          {
            text: "Assistant",
            link: "/app/quickstart/assistant",
          },
          {
            text: "Environment",
            link: "/app/quickstart/environment",
          },
          {
            text: "Search",
            link: "/app/quickstart/search",
          },
          {
            text: "Findings",
            link: "/app/quickstart/findings",
          },
          {
            text: "Exports",
            link: "/app/quickstart/exports",
          },
          {
            text: "Files",
            link: "/app/quickstart/files",
          },
          {
            text: "Plugins",
            link: "/app/quickstart/plugins",
          },
          {
            text: "Workspace",
            link: "/app/quickstart/workspace",
          },
        ],
      },
      {
        text: "Support",
        link: "/app/quickstart/support",
      },
    ],
  },
];
